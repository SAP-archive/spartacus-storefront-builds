/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CheckoutService, GlobalMessageService, GlobalMessageType, RoutingConfigService, RoutingService, TranslationService, UserService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ICON_TYPE } from '../../../misc/icon';
import { CheckoutConfigService } from '../../checkout-config.service';
export class PaymentMethodComponent {
    /**
     * @param {?} userService
     * @param {?} checkoutService
     * @param {?} globalMessageService
     * @param {?} routingConfigService
     * @param {?} routingService
     * @param {?} checkoutConfigService
     * @param {?} activatedRoute
     * @param {?} translation
     */
    constructor(userService, checkoutService, globalMessageService, routingConfigService, routingService, checkoutConfigService, activatedRoute, translation) {
        this.userService = userService;
        this.checkoutService = checkoutService;
        this.globalMessageService = globalMessageService;
        this.routingConfigService = routingConfigService;
        this.routingService = routingService;
        this.checkoutConfigService = checkoutConfigService;
        this.activatedRoute = activatedRoute;
        this.translation = translation;
        this.iconTypes = ICON_TYPE;
        this.newPaymentFormManuallyOpened = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isLoading$ = this.userService.getPaymentMethodsLoading();
        this.userService.loadPaymentMethods();
        this.checkoutStepUrlNext = this.checkoutConfigService.getNextCheckoutStepUrl(this.activatedRoute);
        this.checkoutStepUrlPrevious = this.checkoutConfigService.getPreviousCheckoutStepUrl(this.activatedRoute);
        this.existingPaymentMethods$ = this.userService.getPaymentMethods();
        this.getPaymentDetailsSub = this.checkoutService
            .getPaymentDetails()
            .pipe(filter((/**
         * @param {?} paymentInfo
         * @return {?}
         */
        paymentInfo => paymentInfo && Object.keys(paymentInfo).length !== 0)))
            .subscribe((/**
         * @param {?} paymentInfo
         * @return {?}
         */
        paymentInfo => {
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
                        this.globalMessageService.add({
                            key: 'paymentMethods.invalidField',
                            params: { field: paymentInfo[key] },
                        }, GlobalMessageType.MSG_TYPE_ERROR);
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
            /** @type {?} */
            const card = {
                title: payment.defaultPayment ? textDefaultPaymentMethod : '',
                textBold: payment.accountHolderName,
                text: [payment.cardNumber, textExpires],
                img: this.getCardIcon(payment.cardType.code),
                actions: [{ name: textUseThisPayment, event: 'send' }],
            };
            if (this.selectedPayment && this.selectedPayment.id === payment.id) {
                card.header = textSelected;
            }
            return card;
        })));
    }
    /**
     * @param {?} paymentDetails
     * @return {?}
     */
    paymentMethodSelected(paymentDetails) {
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
     * @return {?}
     */
    next() {
        this.addPaymentInfo({
            payment: this.selectedPayment,
            newPayment: false,
        });
    }
    /**
     * @return {?}
     */
    back() {
        this.routingService.go(this.checkoutStepUrlPrevious);
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    addNewPaymentMethod({ paymentDetails, billingAddress, }) {
        this.getDeliveryAddressSub = this.checkoutService
            .getDeliveryAddress()
            .subscribe((/**
         * @param {?} address
         * @return {?}
         */
        address => {
            billingAddress = address;
        }));
        this.addPaymentInfo({
            payment: paymentDetails,
            billingAddress,
            newPayment: true,
        });
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    addPaymentInfo({ newPayment, payment, billingAddress, }) {
        payment.billingAddress = billingAddress
            ? billingAddress
            : this.deliveryAddress;
        if (newPayment) {
            this.checkoutService.createPaymentDetails(payment);
            this.checkoutService.clearCheckoutStep(3);
        }
        // if the selected payment is the same as the cart's one
        if (this.selectedPayment && this.selectedPayment.id === payment.id) {
            this.checkoutService.setPaymentDetails(payment);
            this.checkoutService.clearCheckoutStep(3);
        }
        this.getPaymentDetailsSub = this.checkoutService
            .getPaymentDetails()
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            if (data.accountHolderName && data.cardNumber) {
                this.routingService.go(this.checkoutStepUrlNext);
                return;
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.getPaymentDetailsSub) {
            this.getPaymentDetailsSub.unsubscribe();
        }
        if (this.getDeliveryAddressSub) {
            this.getDeliveryAddressSub.unsubscribe();
        }
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
}
PaymentMethodComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-payment-method',
                template: "<ng-container\n  *ngIf=\"(existingPaymentMethods$ | async) as existingPaymentMethods\"\n>\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'paymentForm.payment' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        existingPaymentMethods?.length && !newPaymentFormManuallyOpened;\n        else newPaymentForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'paymentForm.choosePaymentMethod' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewPaymentForm()\"\n          >\n            {{ 'paymentForm.addNewPayment' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-payment-card col-md-12 col-lg-6\"\n          *ngFor=\"let method of existingPaymentMethods; let i = index\"\n        >\n          <div class=\"cx-payment-card-inner\">\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"getCardContent(method) | async\"\n              (sendCard)=\"paymentMethodSelected(method)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row cx-checkout-btns\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n            {{ 'common.back' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-primary\"\n            [disabled]=\"!selectedPayment\"\n            (click)=\"next()\"\n          >\n            {{ 'common.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newPaymentForm>\n      <cx-payment-form\n        (addPaymentInfo)=\"addNewPaymentMethod($event)\"\n        (closeForm)=\"hideNewPaymentForm()\"\n        (goBack)=\"back()\"\n        [paymentMethodsCount]=\"existingPaymentMethods?.length || 0\"\n      ></cx-payment-form>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n  </ng-template>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
PaymentMethodComponent.ctorParameters = () => [
    { type: UserService },
    { type: CheckoutService },
    { type: GlobalMessageService },
    { type: RoutingConfigService },
    { type: RoutingService },
    { type: CheckoutConfigService },
    { type: ActivatedRoute },
    { type: TranslationService }
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
    PaymentMethodComponent.prototype.getPaymentDetailsSub;
    /** @type {?} */
    PaymentMethodComponent.prototype.getDeliveryAddressSub;
    /** @type {?} */
    PaymentMethodComponent.prototype.selectedPayment;
    /** @type {?} */
    PaymentMethodComponent.prototype.deliveryAddress;
    /** @type {?} */
    PaymentMethodComponent.prototype.checkoutStepUrlNext;
    /** @type {?} */
    PaymentMethodComponent.prototype.checkoutStepUrlPrevious;
    /**
     * @type {?}
     * @protected
     */
    PaymentMethodComponent.prototype.userService;
    /**
     * @type {?}
     * @protected
     */
    PaymentMethodComponent.prototype.checkoutService;
    /**
     * @type {?}
     * @protected
     */
    PaymentMethodComponent.prototype.globalMessageService;
    /**
     * @type {?}
     * @protected
     */
    PaymentMethodComponent.prototype.routingConfigService;
    /**
     * @type {?}
     * @private
     */
    PaymentMethodComponent.prototype.routingService;
    /**
     * @type {?}
     * @private
     */
    PaymentMethodComponent.prototype.checkoutConfigService;
    /**
     * @type {?}
     * @private
     */
    PaymentMethodComponent.prototype.activatedRoute;
    /**
     * @type {?}
     * @private
     */
    PaymentMethodComponent.prototype.translation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxHQUdWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBRUwsZUFBZSxFQUNmLG9CQUFvQixFQUNwQixpQkFBaUIsRUFFakIsb0JBQW9CLEVBQ3BCLGNBQWMsRUFDZCxrQkFBa0IsRUFDbEIsV0FBVyxHQUNaLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBNEIsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFPdEUsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7Ozs7Ozs7SUFZakMsWUFDWSxXQUF3QixFQUN4QixlQUFnQyxFQUNoQyxvQkFBMEMsRUFDMUMsb0JBQTBDLEVBQzVDLGNBQThCLEVBQzlCLHFCQUE0QyxFQUM1QyxjQUE4QixFQUM5QixXQUErQjtRQVA3QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzVDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QiwwQkFB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Z0M7O0lBQ2hDLGlEQUF5Qjs7SUFDekIscURBQTRCOztJQUM1Qix5REFBZ0M7Ozs7O0lBRzlCLDZDQUFrQzs7Ozs7SUFDbEMsaURBQTBDOzs7OztJQUMxQyxzREFBb0Q7Ozs7O0lBQ3BELHNEQUFvRDs7Ozs7SUFDcEQsZ0RBQXNDOzs7OztJQUN0Qyx1REFBb0Q7Ozs7O0lBQ3BELGdEQUFzQzs7Ozs7SUFDdEMsNkNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQWRkcmVzcyxcbiAgQ2hlY2tvdXRTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIFBheW1lbnREZXRhaWxzLFxuICBSb3V0aW5nQ29uZmlnU2VydmljZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFRyYW5zbGF0aW9uU2VydmljZSxcbiAgVXNlclNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vbWlzYy9pY29uJztcbmltcG9ydCB7IENoZWNrb3V0Q29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL2NoZWNrb3V0LWNvbmZpZy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcGF5bWVudC1tZXRob2QnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGF5bWVudC1tZXRob2QuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUGF5bWVudE1ldGhvZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFO1xuICBuZXdQYXltZW50Rm9ybU1hbnVhbGx5T3BlbmVkID0gZmFsc2U7XG4gIGV4aXN0aW5nUGF5bWVudE1ldGhvZHMkOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzW10+O1xuICBpc0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBnZXRQYXltZW50RGV0YWlsc1N1YjogU3Vic2NyaXB0aW9uO1xuICBnZXREZWxpdmVyeUFkZHJlc3NTdWI6IFN1YnNjcmlwdGlvbjtcbiAgc2VsZWN0ZWRQYXltZW50OiBQYXltZW50RGV0YWlscztcbiAgZGVsaXZlcnlBZGRyZXNzOiBBZGRyZXNzO1xuICBjaGVja291dFN0ZXBVcmxOZXh0OiBzdHJpbmc7XG4gIGNoZWNrb3V0U3RlcFVybFByZXZpb3VzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ0NvbmZpZ1NlcnZpY2U6IFJvdXRpbmdDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2hlY2tvdXRDb25maWdTZXJ2aWNlOiBDaGVja291dENvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlzTG9hZGluZyQgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldFBheW1lbnRNZXRob2RzTG9hZGluZygpO1xuICAgIHRoaXMudXNlclNlcnZpY2UubG9hZFBheW1lbnRNZXRob2RzKCk7XG5cbiAgICB0aGlzLmNoZWNrb3V0U3RlcFVybE5leHQgPSB0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZS5nZXROZXh0Q2hlY2tvdXRTdGVwVXJsKFxuICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZVxuICAgICk7XG4gICAgdGhpcy5jaGVja291dFN0ZXBVcmxQcmV2aW91cyA9IHRoaXMuY2hlY2tvdXRDb25maWdTZXJ2aWNlLmdldFByZXZpb3VzQ2hlY2tvdXRTdGVwVXJsKFxuICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZVxuICAgICk7XG5cbiAgICB0aGlzLmV4aXN0aW5nUGF5bWVudE1ldGhvZHMkID0gdGhpcy51c2VyU2VydmljZS5nZXRQYXltZW50TWV0aG9kcygpO1xuICAgIHRoaXMuZ2V0UGF5bWVudERldGFpbHNTdWIgPSB0aGlzLmNoZWNrb3V0U2VydmljZVxuICAgICAgLmdldFBheW1lbnREZXRhaWxzKClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgcGF5bWVudEluZm8gPT4gcGF5bWVudEluZm8gJiYgT2JqZWN0LmtleXMocGF5bWVudEluZm8pLmxlbmd0aCAhPT0gMFxuICAgICAgICApXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKHBheW1lbnRJbmZvID0+IHtcbiAgICAgICAgaWYgKCFwYXltZW50SW5mb1snaGFzRXJyb3InXSkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQYXltZW50ID0gcGF5bWVudEluZm87XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgT2JqZWN0LmtleXMocGF5bWVudEluZm8pLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aCgnSW52YWxpZEZpZWxkJykpIHtcbiAgICAgICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiAncGF5bWVudE1ldGhvZHMuaW52YWxpZEZpZWxkJyxcbiAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBmaWVsZDogcGF5bWVudEluZm9ba2V5XSB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5jbGVhckNoZWNrb3V0U3RlcCgzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBnZXRDYXJkQ29udGVudChwYXltZW50OiBQYXltZW50RGV0YWlscyk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Q2FyZC5leHBpcmVzJywge1xuICAgICAgICBtb250aDogcGF5bWVudC5leHBpcnlNb250aCxcbiAgICAgICAgeWVhcjogcGF5bWVudC5leHBpcnlZZWFyLFxuICAgICAgfSksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudEZvcm0udXNlVGhpc1BheW1lbnQnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Q2FyZC5kZWZhdWx0UGF5bWVudE1ldGhvZCcpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRDYXJkLnNlbGVjdGVkJyksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcChcbiAgICAgICAgKFtcbiAgICAgICAgICB0ZXh0RXhwaXJlcyxcbiAgICAgICAgICB0ZXh0VXNlVGhpc1BheW1lbnQsXG4gICAgICAgICAgdGV4dERlZmF1bHRQYXltZW50TWV0aG9kLFxuICAgICAgICAgIHRleHRTZWxlY3RlZCxcbiAgICAgICAgXSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNhcmQ6IENhcmQgPSB7XG4gICAgICAgICAgICB0aXRsZTogcGF5bWVudC5kZWZhdWx0UGF5bWVudCA/IHRleHREZWZhdWx0UGF5bWVudE1ldGhvZCA6ICcnLFxuICAgICAgICAgICAgdGV4dEJvbGQ6IHBheW1lbnQuYWNjb3VudEhvbGRlck5hbWUsXG4gICAgICAgICAgICB0ZXh0OiBbcGF5bWVudC5jYXJkTnVtYmVyLCB0ZXh0RXhwaXJlc10sXG4gICAgICAgICAgICBpbWc6IHRoaXMuZ2V0Q2FyZEljb24ocGF5bWVudC5jYXJkVHlwZS5jb2RlKSxcbiAgICAgICAgICAgIGFjdGlvbnM6IFt7IG5hbWU6IHRleHRVc2VUaGlzUGF5bWVudCwgZXZlbnQ6ICdzZW5kJyB9XSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkUGF5bWVudCAmJiB0aGlzLnNlbGVjdGVkUGF5bWVudC5pZCA9PT0gcGF5bWVudC5pZCkge1xuICAgICAgICAgICAgY2FyZC5oZWFkZXIgPSB0ZXh0U2VsZWN0ZWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjYXJkO1xuICAgICAgICB9XG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHBheW1lbnRNZXRob2RTZWxlY3RlZChwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHMpIHtcbiAgICB0aGlzLnNlbGVjdGVkUGF5bWVudCA9IHBheW1lbnREZXRhaWxzO1xuICB9XG5cbiAgc2hvd05ld1BheW1lbnRGb3JtKCk6IHZvaWQge1xuICAgIHRoaXMubmV3UGF5bWVudEZvcm1NYW51YWxseU9wZW5lZCA9IHRydWU7XG4gIH1cblxuICBoaWRlTmV3UGF5bWVudEZvcm0oKTogdm9pZCB7XG4gICAgdGhpcy5uZXdQYXltZW50Rm9ybU1hbnVhbGx5T3BlbmVkID0gZmFsc2U7XG4gIH1cblxuICBuZXh0KCk6IHZvaWQge1xuICAgIHRoaXMuYWRkUGF5bWVudEluZm8oe1xuICAgICAgcGF5bWVudDogdGhpcy5zZWxlY3RlZFBheW1lbnQsXG4gICAgICBuZXdQYXltZW50OiBmYWxzZSxcbiAgICB9KTtcbiAgfVxuXG4gIGJhY2soKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh0aGlzLmNoZWNrb3V0U3RlcFVybFByZXZpb3VzKTtcbiAgfVxuXG4gIGFkZE5ld1BheW1lbnRNZXRob2Qoe1xuICAgIHBheW1lbnREZXRhaWxzLFxuICAgIGJpbGxpbmdBZGRyZXNzLFxuICB9OiB7XG4gICAgcGF5bWVudERldGFpbHM6IFBheW1lbnREZXRhaWxzO1xuICAgIGJpbGxpbmdBZGRyZXNzOiBBZGRyZXNzO1xuICB9KTogdm9pZCB7XG4gICAgdGhpcy5nZXREZWxpdmVyeUFkZHJlc3NTdWIgPSB0aGlzLmNoZWNrb3V0U2VydmljZVxuICAgICAgLmdldERlbGl2ZXJ5QWRkcmVzcygpXG4gICAgICAuc3Vic2NyaWJlKGFkZHJlc3MgPT4ge1xuICAgICAgICBiaWxsaW5nQWRkcmVzcyA9IGFkZHJlc3M7XG4gICAgICB9KTtcbiAgICB0aGlzLmFkZFBheW1lbnRJbmZvKHtcbiAgICAgIHBheW1lbnQ6IHBheW1lbnREZXRhaWxzLFxuICAgICAgYmlsbGluZ0FkZHJlc3MsXG4gICAgICBuZXdQYXltZW50OiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgYWRkUGF5bWVudEluZm8oe1xuICAgIG5ld1BheW1lbnQsXG4gICAgcGF5bWVudCxcbiAgICBiaWxsaW5nQWRkcmVzcyxcbiAgfToge1xuICAgIG5ld1BheW1lbnQ6IGJvb2xlYW47XG4gICAgcGF5bWVudDogUGF5bWVudERldGFpbHM7XG4gICAgYmlsbGluZ0FkZHJlc3M/OiBBZGRyZXNzO1xuICB9KTogdm9pZCB7XG4gICAgcGF5bWVudC5iaWxsaW5nQWRkcmVzcyA9IGJpbGxpbmdBZGRyZXNzXG4gICAgICA/IGJpbGxpbmdBZGRyZXNzXG4gICAgICA6IHRoaXMuZGVsaXZlcnlBZGRyZXNzO1xuXG4gICAgaWYgKG5ld1BheW1lbnQpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNyZWF0ZVBheW1lbnREZXRhaWxzKHBheW1lbnQpO1xuICAgICAgdGhpcy5jaGVja291dFNlcnZpY2UuY2xlYXJDaGVja291dFN0ZXAoMyk7XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIHNlbGVjdGVkIHBheW1lbnQgaXMgdGhlIHNhbWUgYXMgdGhlIGNhcnQncyBvbmVcbiAgICBpZiAodGhpcy5zZWxlY3RlZFBheW1lbnQgJiYgdGhpcy5zZWxlY3RlZFBheW1lbnQuaWQgPT09IHBheW1lbnQuaWQpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLnNldFBheW1lbnREZXRhaWxzKHBheW1lbnQpO1xuICAgICAgdGhpcy5jaGVja291dFNlcnZpY2UuY2xlYXJDaGVja291dFN0ZXAoMyk7XG4gICAgfVxuXG4gICAgdGhpcy5nZXRQYXltZW50RGV0YWlsc1N1YiA9IHRoaXMuY2hlY2tvdXRTZXJ2aWNlXG4gICAgICAuZ2V0UGF5bWVudERldGFpbHMoKVxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEuYWNjb3VudEhvbGRlck5hbWUgJiYgZGF0YS5jYXJkTnVtYmVyKSB7XG4gICAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh0aGlzLmNoZWNrb3V0U3RlcFVybE5leHQpO1xuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmdldFBheW1lbnREZXRhaWxzU3ViKSB7XG4gICAgICB0aGlzLmdldFBheW1lbnREZXRhaWxzU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmdldERlbGl2ZXJ5QWRkcmVzc1N1Yikge1xuICAgICAgdGhpcy5nZXREZWxpdmVyeUFkZHJlc3NTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q2FyZEljb24oY29kZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBsZXQgY2NJY29uOiBzdHJpbmc7XG4gICAgaWYgKGNvZGUgPT09ICd2aXNhJykge1xuICAgICAgY2NJY29uID0gdGhpcy5pY29uVHlwZXMuVklTQTtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09ICdtYXN0ZXInIHx8IGNvZGUgPT09ICdtYXN0ZXJjYXJkX2V1cm9jYXJkJykge1xuICAgICAgY2NJY29uID0gdGhpcy5pY29uVHlwZXMuTUFTVEVSX0NBUkQ7XG4gICAgfSBlbHNlIGlmIChjb2RlID09PSAnZGluZXJzJykge1xuICAgICAgY2NJY29uID0gdGhpcy5pY29uVHlwZXMuRElORVJTX0NMVUI7XG4gICAgfSBlbHNlIGlmIChjb2RlID09PSAnYW1leCcpIHtcbiAgICAgIGNjSWNvbiA9IHRoaXMuaWNvblR5cGVzLkFNRVg7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNjSWNvbiA9IHRoaXMuaWNvblR5cGVzLkNSRURJVF9DQVJEO1xuICAgIH1cblxuICAgIHJldHVybiBjY0ljb247XG4gIH1cbn1cbiJdfQ==