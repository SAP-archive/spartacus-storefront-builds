/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService, CheckoutDeliveryService, CheckoutPaymentService, CheckoutService, GlobalMessageService, GlobalMessageType, RoutingService, TranslationService, UserPaymentService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { ICON_TYPE } from '../../../misc/icon';
import { CheckoutConfigService } from '../../services/checkout-config.service';
export class PaymentMethodComponent {
    /**
     * @param {?} userPaymentService
     * @param {?} checkoutService
     * @param {?} checkoutDeliveryService
     * @param {?} checkoutPaymentService
     * @param {?} globalMessageService
     * @param {?} routingService
     * @param {?} checkoutConfigService
     * @param {?} activatedRoute
     * @param {?} translation
     * @param {?=} cartService
     */
    constructor(userPaymentService, checkoutService, checkoutDeliveryService, checkoutPaymentService, globalMessageService, routingService, checkoutConfigService, activatedRoute, translation, cartService) {
        this.userPaymentService = userPaymentService;
        this.checkoutService = checkoutService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutPaymentService = checkoutPaymentService;
        this.globalMessageService = globalMessageService;
        this.routingService = routingService;
        this.checkoutConfigService = checkoutConfigService;
        this.activatedRoute = activatedRoute;
        this.translation = translation;
        this.cartService = cartService;
        this.iconTypes = ICON_TYPE;
        this.newPaymentFormManuallyOpened = false;
        this.isGuestCheckout = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.allowRouting = false;
        this.isLoading$ = this.userPaymentService.getPaymentMethodsLoading();
        if (!this.cartService.isGuestCart()) {
            this.userPaymentService.loadPaymentMethods();
        }
        else {
            this.isGuestCheckout = true;
        }
        this.checkoutStepUrlNext = this.checkoutConfigService.getNextCheckoutStepUrl(this.activatedRoute);
        this.checkoutStepUrlPrevious = this.checkoutConfigService.getPreviousCheckoutStepUrl(this.activatedRoute);
        this.checkoutDeliveryService
            .getDeliveryAddress()
            .pipe(take(1))
            .subscribe((/**
         * @param {?} address
         * @return {?}
         */
        (address) => {
            this.deliveryAddress = address;
        }));
        this.existingPaymentMethods$ = this.userPaymentService.getPaymentMethods();
        this.getPaymentDetailsSub = this.checkoutPaymentService
            .getPaymentDetails()
            .pipe(filter((/**
         * @param {?} paymentInfo
         * @return {?}
         */
        paymentInfo => paymentInfo && !!Object.keys(paymentInfo).length)))
            .subscribe((/**
         * @param {?} paymentInfo
         * @return {?}
         */
        paymentInfo => {
            if (this.allowRouting) {
                this.routingService.go(this.checkoutStepUrlNext);
            }
            if (!paymentInfo['hasError']) {
                this.selectedPayment = paymentInfo;
            }
            else {
                Object.keys(paymentInfo).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                key => {
                    if (key.startsWith('InvalidField')) {
                        this.sendPaymentMethodFailGlobalMessage(paymentInfo[key]);
                    }
                }));
                this.checkoutService.clearCheckoutStep(3);
            }
        }));
    }
    /**
     * @param {?} payment
     * @return {?}
     */
    getCardContent(payment) {
        if (!this.selectedPayment && payment.defaultPayment) {
            this.selectedPayment = payment;
        }
        return combineLatest([
            this.translation.translate('paymentCard.expires', {
                month: payment.expiryMonth,
                year: payment.expiryYear,
            }),
            this.translation.translate('paymentForm.useThisPayment'),
            this.translation.translate('paymentCard.defaultPaymentMethod'),
            this.translation.translate('paymentCard.selected'),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([textExpires, textUseThisPayment, textDefaultPaymentMethod, textSelected,]) => {
            return this.createCard(payment, {
                textExpires,
                textUseThisPayment,
                textDefaultPaymentMethod,
                textSelected,
            });
        })));
    }
    /**
     * @param {?} paymentDetails
     * @return {?}
     */
    selectPaymentMethod(paymentDetails) {
        this.selectedPayment = paymentDetails;
    }
    /**
     * @return {?}
     */
    showNewPaymentForm() {
        this.newPaymentFormManuallyOpened = true;
    }
    /**
     * @return {?}
     */
    hideNewPaymentForm() {
        this.newPaymentFormManuallyOpened = false;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    setPaymentDetails({ paymentDetails, billingAddress, isNewPayment = true, }) {
        /** @type {?} */
        const details = Object.assign({}, paymentDetails);
        details.billingAddress = billingAddress || this.deliveryAddress;
        if (isNewPayment) {
            this.checkoutPaymentService.createPaymentDetails(details);
        }
        else if (this.selectedPayment && this.selectedPayment.id === details.id) {
            this.checkoutPaymentService.setPaymentDetails(details);
        }
        this.allowRouting = true;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.getPaymentDetailsSub) {
            this.getPaymentDetailsSub.unsubscribe();
        }
        this.checkoutPaymentService.paymentProcessSuccess();
    }
    /**
     * @protected
     * @param {?} code
     * @return {?}
     */
    getCardIcon(code) {
        /** @type {?} */
        let ccIcon;
        if (code === 'visa') {
            ccIcon = this.iconTypes.VISA;
        }
        else if (code === 'master' || code === 'mastercard_eurocard') {
            ccIcon = this.iconTypes.MASTER_CARD;
        }
        else if (code === 'diners') {
            ccIcon = this.iconTypes.DINERS_CLUB;
        }
        else if (code === 'amex') {
            ccIcon = this.iconTypes.AMEX;
        }
        else {
            ccIcon = this.iconTypes.CREDIT_CARD;
        }
        return ccIcon;
    }
    /**
     * @protected
     * @param {?} msg
     * @return {?}
     */
    sendPaymentMethodFailGlobalMessage(msg) {
        this.globalMessageService.add({
            key: 'paymentMethods.invalidField',
            params: { field: msg },
        }, GlobalMessageType.MSG_TYPE_ERROR);
    }
    /**
     * @protected
     * @param {?} paymentDetails
     * @param {?} cardLabels
     * @return {?}
     */
    createCard(paymentDetails, cardLabels) {
        return {
            title: paymentDetails.defaultPayment
                ? cardLabels.textDefaultPaymentMethod
                : '',
            textBold: paymentDetails.accountHolderName,
            text: [paymentDetails.cardNumber, cardLabels.textExpires],
            img: this.getCardIcon(paymentDetails.cardType.code),
            actions: [{ name: cardLabels.textUseThisPayment, event: 'send' }],
            header: this.selectedPayment && this.selectedPayment.id === paymentDetails.id
                ? cardLabels.textSelected
                : undefined,
        };
    }
    /**
     * @return {?}
     */
    goNext() {
        this.setPaymentDetails({
            paymentDetails: this.selectedPayment,
            isNewPayment: false,
        });
    }
    /**
     * @return {?}
     */
    goPrevious() {
        this.routingService.go(this.checkoutStepUrlPrevious);
    }
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Use goNext() instead.
     * TODO(issue:#4992) deprecated since 1.3
     * @return {?}
     */
    next() {
        this.goNext();
    }
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Use goPrevious() instead.
     * TODO(issue:#4992) deprecated since 1.3
     * @return {?}
     */
    back() {
        this.goPrevious();
    }
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Use selectPaymentMethod() instead.
     * TODO(issue:#4992) deprecated since 1.3
     * @param {?} paymentDetails
     * @return {?}
     */
    paymentMethodSelected(paymentDetails) {
        this.selectPaymentMethod(paymentDetails);
    }
}
PaymentMethodComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-payment-method',
                template: "<ng-container *ngIf=\"existingPaymentMethods$ | async as existingPaymentMethods\">\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'paymentForm.payment' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        (existingPaymentMethods$ | async).length &&\n          !newPaymentFormManuallyOpened;\n        else newPaymentForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'paymentForm.choosePaymentMethod' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewPaymentForm()\"\n          >\n            {{ 'paymentForm.addNewPayment' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-payment-card col-md-12 col-lg-6\"\n          *ngFor=\"let method of existingPaymentMethods; let i = index\"\n        >\n          <div class=\"cx-payment-card-inner\">\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"getCardContent(method) | async\"\n              (sendCard)=\"paymentMethodSelected(method)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row cx-checkout-btns\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n            {{ 'common.back' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-primary\"\n            [disabled]=\"!selectedPayment\"\n            (click)=\"next()\"\n          >\n            {{ 'common.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newPaymentForm>\n      <cx-payment-form\n        (setPaymentDetails)=\"setPaymentDetails($event)\"\n        (closeForm)=\"hideNewPaymentForm()\"\n        (goBack)=\"back()\"\n        [paymentMethodsCount]=\"existingPaymentMethods?.length || 0\"\n        [setAsDefaultField]=\"!isGuestCheckout\"\n      ></cx-payment-form>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n  </ng-template>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
PaymentMethodComponent.ctorParameters = () => [
    { type: UserPaymentService },
    { type: CheckoutService },
    { type: CheckoutDeliveryService },
    { type: CheckoutPaymentService },
    { type: GlobalMessageService },
    { type: RoutingService },
    { type: CheckoutConfigService },
    { type: ActivatedRoute },
    { type: TranslationService },
    { type: CartService }
];
if (false) {
    /** @type {?} */
    PaymentMethodComponent.prototype.iconTypes;
    /** @type {?} */
    PaymentMethodComponent.prototype.newPaymentFormManuallyOpened;
    /** @type {?} */
    PaymentMethodComponent.prototype.existingPaymentMethods$;
    /** @type {?} */
    PaymentMethodComponent.prototype.isLoading$;
    /** @type {?} */
    PaymentMethodComponent.prototype.selectedPayment;
    /** @type {?} */
    PaymentMethodComponent.prototype.allowRouting;
    /** @type {?} */
    PaymentMethodComponent.prototype.isGuestCheckout;
    /**
     * @type {?}
     * @private
     */
    PaymentMethodComponent.prototype.getPaymentDetailsSub;
    /**
     * @type {?}
     * @private
     */
    PaymentMethodComponent.prototype.deliveryAddress;
    /**
     * @type {?}
     * @private
     */
    PaymentMethodComponent.prototype.checkoutStepUrlNext;
    /**
     * @type {?}
     * @private
     */
    PaymentMethodComponent.prototype.checkoutStepUrlPrevious;
    /**
     * @type {?}
     * @protected
     */
    PaymentMethodComponent.prototype.userPaymentService;
    /**
     * @type {?}
     * @protected
     */
    PaymentMethodComponent.prototype.checkoutService;
    /**
     * @type {?}
     * @protected
     */
    PaymentMethodComponent.prototype.checkoutDeliveryService;
    /**
     * @type {?}
     * @protected
     */
    PaymentMethodComponent.prototype.checkoutPaymentService;
    /**
     * @type {?}
     * @protected
     */
    PaymentMethodComponent.prototype.globalMessageService;
    /**
     * @type {?}
     * @protected
     */
    PaymentMethodComponent.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    PaymentMethodComponent.prototype.checkoutConfigService;
    /**
     * @type {?}
     * @protected
     */
    PaymentMethodComponent.prototype.activatedRoute;
    /**
     * @type {?}
     * @protected
     */
    PaymentMethodComponent.prototype.translation;
    /**
     * @type {?}
     * @protected
     */
    PaymentMethodComponent.prototype.cartService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxHQUdWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBRUwsV0FBVyxFQUNYLHVCQUF1QixFQUN2QixzQkFBc0IsRUFDdEIsZUFBZSxFQUNmLG9CQUFvQixFQUNwQixpQkFBaUIsRUFFakIsY0FBYyxFQUNkLGtCQUFrQixFQUNsQixrQkFBa0IsR0FDbkIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFPL0UsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7Ozs7Ozs7OztJQTRDakMsWUFDWSxrQkFBc0MsRUFDdEMsZUFBZ0MsRUFDaEMsdUJBQWdELEVBQ2hELHNCQUE4QyxFQUM5QyxvQkFBMEMsRUFDMUMsY0FBOEIsRUFDOUIscUJBQTRDLEVBQzVDLGNBQThCLEVBQzlCLFdBQStCLEVBQy9CLFdBQXlCO1FBVHpCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7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O0lBT0QsSUFBSTtRQUNGLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7Ozs7O0lBT0QsSUFBSTtRQUNGLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7Ozs7OztJQU9ELHFCQUFxQixDQUFDLGNBQThCO1FBQ2xELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7WUF0UUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLG85RUFBOEM7Z0JBQzlDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBWkMsa0JBQWtCO1lBTmxCLGVBQWU7WUFGZix1QkFBdUI7WUFDdkIsc0JBQXNCO1lBRXRCLG9CQUFvQjtZQUdwQixjQUFjO1lBUVAscUJBQXFCO1lBbEJyQixjQUFjO1lBV3JCLGtCQUFrQjtZQVJsQixXQUFXOzs7O0lBdUJYLDJDQUFzQjs7SUFDdEIsOERBQXFDOztJQUNyQyx5REFBc0Q7O0lBQ3RELDRDQUFnQzs7SUFDaEMsaURBQWdDOztJQUNoQyw4Q0FBc0I7O0lBQ3RCLGlEQUF3Qjs7Ozs7SUFFeEIsc0RBQTJDOzs7OztJQUUzQyxpREFBaUM7Ozs7O0lBQ2pDLHFEQUFvQzs7Ozs7SUFDcEMseURBQXdDOzs7OztJQWdDdEMsb0RBQWdEOzs7OztJQUNoRCxpREFBMEM7Ozs7O0lBQzFDLHlEQUEwRDs7Ozs7SUFDMUQsd0RBQXdEOzs7OztJQUN4RCxzREFBb0Q7Ozs7O0lBQ3BELGdEQUF3Qzs7Ozs7SUFDeEMsdURBQXNEOzs7OztJQUN0RCxnREFBd0M7Ozs7O0lBQ3hDLDZDQUF5Qzs7Ozs7SUFDekMsNkNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQWRkcmVzcyxcbiAgQ2FydFNlcnZpY2UsXG4gIENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICBDaGVja291dFBheW1lbnRTZXJ2aWNlLFxuICBDaGVja291dFNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbiAgUGF5bWVudERldGFpbHMsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBUcmFuc2xhdGlvblNlcnZpY2UsXG4gIFVzZXJQYXltZW50U2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9taXNjL2ljb24nO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wYXltZW50LW1ldGhvZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXltZW50LW1ldGhvZC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50TWV0aG9kQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG4gIG5ld1BheW1lbnRGb3JtTWFudWFsbHlPcGVuZWQgPSBmYWxzZTtcbiAgZXhpc3RpbmdQYXltZW50TWV0aG9kcyQ6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHNbXT47XG4gIGlzTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIHNlbGVjdGVkUGF5bWVudDogUGF5bWVudERldGFpbHM7XG4gIGFsbG93Um91dGluZzogYm9vbGVhbjtcbiAgaXNHdWVzdENoZWNrb3V0ID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBnZXRQYXltZW50RGV0YWlsc1N1YjogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgZGVsaXZlcnlBZGRyZXNzOiBBZGRyZXNzO1xuICBwcml2YXRlIGNoZWNrb3V0U3RlcFVybE5leHQ6IHN0cmluZztcbiAgcHJpdmF0ZSBjaGVja291dFN0ZXBVcmxQcmV2aW91czogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHVzZXJQYXltZW50U2VydmljZTogVXNlclBheW1lbnRTZXJ2aWNlLFxuICAgIGNoZWNrb3V0U2VydmljZTogQ2hlY2tvdXRTZXJ2aWNlLFxuICAgIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgICBjaGVja291dFBheW1lbnRTZXJ2aWNlOiBDaGVja291dFBheW1lbnRTZXJ2aWNlLFxuICAgIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgY2hlY2tvdXRDb25maWdTZXJ2aWNlOiBDaGVja291dENvbmZpZ1NlcnZpY2UsXG4gICAgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlIC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgKTtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIDEueFxuICAgKiBOT1RFOiBjaGVjayBpc3N1ZTojMTE4MSBmb3IgbW9yZSBpbmZvXG4gICAqXG4gICAqIFRPRE8oaXNzdWU6IzExODEpIERlcHJlY2F0ZWQgc2luY2UgMS54XG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICB1c2VyUGF5bWVudFNlcnZpY2U6IFVzZXJQYXltZW50U2VydmljZSxcbiAgICBjaGVja291dFNlcnZpY2U6IENoZWNrb3V0U2VydmljZSxcbiAgICBjaGVja291dERlbGl2ZXJ5U2VydmljZTogQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gICAgY2hlY2tvdXRQYXltZW50U2VydmljZTogQ2hlY2tvdXRQYXltZW50U2VydmljZSxcbiAgICBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIGNoZWNrb3V0Q29uZmlnU2VydmljZTogQ2hlY2tvdXRDb25maWdTZXJ2aWNlLFxuICAgIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlXG4gICk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB1c2VyUGF5bWVudFNlcnZpY2U6IFVzZXJQYXltZW50U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRQYXltZW50U2VydmljZTogQ2hlY2tvdXRQYXltZW50U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0Q29uZmlnU2VydmljZTogQ2hlY2tvdXRDb25maWdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNhcnRTZXJ2aWNlPzogQ2FydFNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYWxsb3dSb3V0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5pc0xvYWRpbmckID0gdGhpcy51c2VyUGF5bWVudFNlcnZpY2UuZ2V0UGF5bWVudE1ldGhvZHNMb2FkaW5nKCk7XG5cbiAgICBpZiAoIXRoaXMuY2FydFNlcnZpY2UuaXNHdWVzdENhcnQoKSkge1xuICAgICAgdGhpcy51c2VyUGF5bWVudFNlcnZpY2UubG9hZFBheW1lbnRNZXRob2RzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNHdWVzdENoZWNrb3V0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmNoZWNrb3V0U3RlcFVybE5leHQgPSB0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZS5nZXROZXh0Q2hlY2tvdXRTdGVwVXJsKFxuICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZVxuICAgICk7XG5cbiAgICB0aGlzLmNoZWNrb3V0U3RlcFVybFByZXZpb3VzID0gdGhpcy5jaGVja291dENvbmZpZ1NlcnZpY2UuZ2V0UHJldmlvdXNDaGVja291dFN0ZXBVcmwoXG4gICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlXG4gICAgKTtcblxuICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2VcbiAgICAgIC5nZXREZWxpdmVyeUFkZHJlc3MoKVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUoKGFkZHJlc3M6IEFkZHJlc3MpID0+IHtcbiAgICAgICAgdGhpcy5kZWxpdmVyeUFkZHJlc3MgPSBhZGRyZXNzO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmV4aXN0aW5nUGF5bWVudE1ldGhvZHMkID0gdGhpcy51c2VyUGF5bWVudFNlcnZpY2UuZ2V0UGF5bWVudE1ldGhvZHMoKTtcbiAgICB0aGlzLmdldFBheW1lbnREZXRhaWxzU3ViID0gdGhpcy5jaGVja291dFBheW1lbnRTZXJ2aWNlXG4gICAgICAuZ2V0UGF5bWVudERldGFpbHMoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcihwYXltZW50SW5mbyA9PiBwYXltZW50SW5mbyAmJiAhIU9iamVjdC5rZXlzKHBheW1lbnRJbmZvKS5sZW5ndGgpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKHBheW1lbnRJbmZvID0+IHtcbiAgICAgICAgaWYgKHRoaXMuYWxsb3dSb3V0aW5nKSB7XG4gICAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh0aGlzLmNoZWNrb3V0U3RlcFVybE5leHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcGF5bWVudEluZm9bJ2hhc0Vycm9yJ10pIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkUGF5bWVudCA9IHBheW1lbnRJbmZvO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHBheW1lbnRJbmZvKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoJ0ludmFsaWRGaWVsZCcpKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2VuZFBheW1lbnRNZXRob2RGYWlsR2xvYmFsTWVzc2FnZShwYXltZW50SW5mb1trZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5jbGVhckNoZWNrb3V0U3RlcCgzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBnZXRDYXJkQ29udGVudChwYXltZW50OiBQYXltZW50RGV0YWlscyk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIGlmICghdGhpcy5zZWxlY3RlZFBheW1lbnQgJiYgcGF5bWVudC5kZWZhdWx0UGF5bWVudCkge1xuICAgICAgdGhpcy5zZWxlY3RlZFBheW1lbnQgPSBwYXltZW50O1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Q2FyZC5leHBpcmVzJywge1xuICAgICAgICBtb250aDogcGF5bWVudC5leHBpcnlNb250aCxcbiAgICAgICAgeWVhcjogcGF5bWVudC5leHBpcnlZZWFyLFxuICAgICAgfSksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudEZvcm0udXNlVGhpc1BheW1lbnQnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Q2FyZC5kZWZhdWx0UGF5bWVudE1ldGhvZCcpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRDYXJkLnNlbGVjdGVkJyksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcChcbiAgICAgICAgKFtcbiAgICAgICAgICB0ZXh0RXhwaXJlcyxcbiAgICAgICAgICB0ZXh0VXNlVGhpc1BheW1lbnQsXG4gICAgICAgICAgdGV4dERlZmF1bHRQYXltZW50TWV0aG9kLFxuICAgICAgICAgIHRleHRTZWxlY3RlZCxcbiAgICAgICAgXSkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUNhcmQocGF5bWVudCwge1xuICAgICAgICAgICAgdGV4dEV4cGlyZXMsXG4gICAgICAgICAgICB0ZXh0VXNlVGhpc1BheW1lbnQsXG4gICAgICAgICAgICB0ZXh0RGVmYXVsdFBheW1lbnRNZXRob2QsXG4gICAgICAgICAgICB0ZXh0U2VsZWN0ZWQsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgc2VsZWN0UGF5bWVudE1ldGhvZChwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHMpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkUGF5bWVudCA9IHBheW1lbnREZXRhaWxzO1xuICB9XG5cbiAgc2hvd05ld1BheW1lbnRGb3JtKCk6IHZvaWQge1xuICAgIHRoaXMubmV3UGF5bWVudEZvcm1NYW51YWxseU9wZW5lZCA9IHRydWU7XG4gIH1cblxuICBoaWRlTmV3UGF5bWVudEZvcm0oKTogdm9pZCB7XG4gICAgdGhpcy5uZXdQYXltZW50Rm9ybU1hbnVhbGx5T3BlbmVkID0gZmFsc2U7XG4gIH1cblxuICBzZXRQYXltZW50RGV0YWlscyh7XG4gICAgcGF5bWVudERldGFpbHMsXG4gICAgYmlsbGluZ0FkZHJlc3MsXG4gICAgaXNOZXdQYXltZW50ID0gdHJ1ZSxcbiAgfToge1xuICAgIHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlscztcbiAgICBiaWxsaW5nQWRkcmVzcz86IEFkZHJlc3M7XG4gICAgaXNOZXdQYXltZW50PzogYm9vbGVhbjtcbiAgfSk6IHZvaWQge1xuICAgIGNvbnN0IGRldGFpbHM6IFBheW1lbnREZXRhaWxzID0geyAuLi5wYXltZW50RGV0YWlscyB9O1xuICAgIGRldGFpbHMuYmlsbGluZ0FkZHJlc3MgPSBiaWxsaW5nQWRkcmVzcyB8fCB0aGlzLmRlbGl2ZXJ5QWRkcmVzcztcblxuICAgIGlmIChpc05ld1BheW1lbnQpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRQYXltZW50U2VydmljZS5jcmVhdGVQYXltZW50RGV0YWlscyhkZXRhaWxzKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRQYXltZW50ICYmIHRoaXMuc2VsZWN0ZWRQYXltZW50LmlkID09PSBkZXRhaWxzLmlkKSB7XG4gICAgICB0aGlzLmNoZWNrb3V0UGF5bWVudFNlcnZpY2Uuc2V0UGF5bWVudERldGFpbHMoZGV0YWlscyk7XG4gICAgfVxuXG4gICAgdGhpcy5hbGxvd1JvdXRpbmcgPSB0cnVlO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZ2V0UGF5bWVudERldGFpbHNTdWIpIHtcbiAgICAgIHRoaXMuZ2V0UGF5bWVudERldGFpbHNTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoZWNrb3V0UGF5bWVudFNlcnZpY2UucGF5bWVudFByb2Nlc3NTdWNjZXNzKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q2FyZEljb24oY29kZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBsZXQgY2NJY29uOiBzdHJpbmc7XG4gICAgaWYgKGNvZGUgPT09ICd2aXNhJykge1xuICAgICAgY2NJY29uID0gdGhpcy5pY29uVHlwZXMuVklTQTtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09ICdtYXN0ZXInIHx8IGNvZGUgPT09ICdtYXN0ZXJjYXJkX2V1cm9jYXJkJykge1xuICAgICAgY2NJY29uID0gdGhpcy5pY29uVHlwZXMuTUFTVEVSX0NBUkQ7XG4gICAgfSBlbHNlIGlmIChjb2RlID09PSAnZGluZXJzJykge1xuICAgICAgY2NJY29uID0gdGhpcy5pY29uVHlwZXMuRElORVJTX0NMVUI7XG4gICAgfSBlbHNlIGlmIChjb2RlID09PSAnYW1leCcpIHtcbiAgICAgIGNjSWNvbiA9IHRoaXMuaWNvblR5cGVzLkFNRVg7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNjSWNvbiA9IHRoaXMuaWNvblR5cGVzLkNSRURJVF9DQVJEO1xuICAgIH1cblxuICAgIHJldHVybiBjY0ljb247XG4gIH1cblxuICBwcm90ZWN0ZWQgc2VuZFBheW1lbnRNZXRob2RGYWlsR2xvYmFsTWVzc2FnZShtc2c6IHN0cmluZykge1xuICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAge1xuICAgICAgICBrZXk6ICdwYXltZW50TWV0aG9kcy5pbnZhbGlkRmllbGQnLFxuICAgICAgICBwYXJhbXM6IHsgZmllbGQ6IG1zZyB9LFxuICAgICAgfSxcbiAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVDYXJkKHBheW1lbnREZXRhaWxzLCBjYXJkTGFiZWxzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiBwYXltZW50RGV0YWlscy5kZWZhdWx0UGF5bWVudFxuICAgICAgICA/IGNhcmRMYWJlbHMudGV4dERlZmF1bHRQYXltZW50TWV0aG9kXG4gICAgICAgIDogJycsXG4gICAgICB0ZXh0Qm9sZDogcGF5bWVudERldGFpbHMuYWNjb3VudEhvbGRlck5hbWUsXG4gICAgICB0ZXh0OiBbcGF5bWVudERldGFpbHMuY2FyZE51bWJlciwgY2FyZExhYmVscy50ZXh0RXhwaXJlc10sXG4gICAgICBpbWc6IHRoaXMuZ2V0Q2FyZEljb24ocGF5bWVudERldGFpbHMuY2FyZFR5cGUuY29kZSksXG4gICAgICBhY3Rpb25zOiBbeyBuYW1lOiBjYXJkTGFiZWxzLnRleHRVc2VUaGlzUGF5bWVudCwgZXZlbnQ6ICdzZW5kJyB9XSxcbiAgICAgIGhlYWRlcjpcbiAgICAgICAgdGhpcy5zZWxlY3RlZFBheW1lbnQgJiYgdGhpcy5zZWxlY3RlZFBheW1lbnQuaWQgPT09IHBheW1lbnREZXRhaWxzLmlkXG4gICAgICAgICAgPyBjYXJkTGFiZWxzLnRleHRTZWxlY3RlZFxuICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgIH07XG4gIH1cblxuICBnb05leHQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRQYXltZW50RGV0YWlscyh7XG4gICAgICBwYXltZW50RGV0YWlsczogdGhpcy5zZWxlY3RlZFBheW1lbnQsXG4gICAgICBpc05ld1BheW1lbnQ6IGZhbHNlLFxuICAgIH0pO1xuICB9XG5cbiAgZ29QcmV2aW91cygpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHRoaXMuY2hlY2tvdXRTdGVwVXJsUHJldmlvdXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gVXNlIGdvTmV4dCgpIGluc3RlYWQuXG4gICAqIFRPRE8oaXNzdWU6IzQ5OTIpIGRlcHJlY2F0ZWQgc2luY2UgMS4zXG4gICAqL1xuICBuZXh0KCk6IHZvaWQge1xuICAgIHRoaXMuZ29OZXh0KCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogVGhpcyBtZXRob2Qgd2lsbCBubyBsb25nZXIgYmUgaW4gdXNlLiBVc2UgZ29QcmV2aW91cygpIGluc3RlYWQuXG4gICAqIFRPRE8oaXNzdWU6IzQ5OTIpIGRlcHJlY2F0ZWQgc2luY2UgMS4zXG4gICAqL1xuICBiYWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZ29QcmV2aW91cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gVXNlIHNlbGVjdFBheW1lbnRNZXRob2QoKSBpbnN0ZWFkLlxuICAgKiBUT0RPKGlzc3VlOiM0OTkyKSBkZXByZWNhdGVkIHNpbmNlIDEuM1xuICAgKi9cbiAgcGF5bWVudE1ldGhvZFNlbGVjdGVkKHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlscyk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0UGF5bWVudE1ldGhvZChwYXltZW50RGV0YWlscyk7XG4gIH1cbn1cbiJdfQ==