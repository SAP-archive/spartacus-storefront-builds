/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CheckoutDeliveryService, CheckoutPaymentService, CheckoutService, GlobalMessageService, GlobalMessageType, RoutingConfigService, RoutingService, TranslationService, UserService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ICON_TYPE } from '../../../misc/icon';
import { CheckoutConfigService } from '../../checkout-config.service';
export class PaymentMethodComponent {
    /**
     * @param {?} userService
     * @param {?} checkoutService
     * @param {?} checkoutDeliveryService
     * @param {?} checkoutPaymentService
     * @param {?} globalMessageService
     * @param {?} routingConfigService
     * @param {?} routingService
     * @param {?} checkoutConfigService
     * @param {?} activatedRoute
     * @param {?} translation
     */
    constructor(userService, checkoutService, checkoutDeliveryService, checkoutPaymentService, globalMessageService, routingConfigService, routingService, checkoutConfigService, activatedRoute, translation) {
        this.userService = userService;
        this.checkoutService = checkoutService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutPaymentService = checkoutPaymentService;
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
        this.getPaymentDetailsSub = this.checkoutPaymentService
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
        this.getDeliveryAddressSub = this.checkoutDeliveryService
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
            this.checkoutPaymentService.createPaymentDetails(payment);
            this.checkoutService.clearCheckoutStep(3);
        }
        // if the selected payment is the same as the cart's one
        if (this.selectedPayment && this.selectedPayment.id === payment.id) {
            this.checkoutPaymentService.setPaymentDetails(payment);
            this.checkoutService.clearCheckoutStep(3);
        }
        this.getPaymentDetailsSub = this.checkoutPaymentService
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
    { type: CheckoutDeliveryService },
    { type: CheckoutPaymentService },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxHQUdWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLHNCQUFzQixFQUN0QixlQUFlLEVBQ2Ysb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUVqQixvQkFBb0IsRUFDcEIsY0FBYyxFQUNkLGtCQUFrQixFQUNsQixXQUFXLEdBQ1osTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQU90RSxNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7Ozs7Ozs7O0lBWWpDLFlBQ1ksV0FBd0IsRUFDeEIsZUFBZ0MsRUFDaEMsdUJBQWdELEVBQ2hELHNCQUE4QyxFQUM5QyxvQkFBMEMsRUFDMUMsb0JBQTBDLEVBQzVDLGNBQThCLEVBQzlCLHFCQUE0QyxFQUM1QyxjQUE4QixFQUM5QixXQUErQjtRQVQ3QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCwyQkFBc0IsR0FB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QixvQkFBb0I7WUFDcEIsY0FBYztZQVFQLHFCQUFxQjtZQWxCckIsY0FBYztZQVdyQixrQkFBa0I7Ozs7SUFlbEIsMkNBQXNCOztJQUN0Qiw4REFBcUM7O0lBQ3JDLHlEQUFzRDs7SUFDdEQsNENBQWdDOztJQUNoQyxzREFBbUM7O0lBQ25DLHVEQUFvQzs7SUFDcEMsaURBQWdDOztJQUNoQyxpREFBeUI7O0lBQ3pCLHFEQUE0Qjs7SUFDNUIseURBQWdDOzs7OztJQUc5Qiw2Q0FBa0M7Ozs7O0lBQ2xDLGlEQUEwQzs7Ozs7SUFDMUMseURBQTBEOzs7OztJQUMxRCx3REFBd0Q7Ozs7O0lBQ3hELHNEQUFvRDs7Ozs7SUFDcEQsc0RBQW9EOzs7OztJQUNwRCxnREFBc0M7Ozs7O0lBQ3RDLHVEQUFvRDs7Ozs7SUFDcEQsZ0RBQXNDOzs7OztJQUN0Qyw2Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBBZGRyZXNzLFxuICBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgQ2hlY2tvdXRQYXltZW50U2VydmljZSxcbiAgQ2hlY2tvdXRTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIFBheW1lbnREZXRhaWxzLFxuICBSb3V0aW5nQ29uZmlnU2VydmljZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFRyYW5zbGF0aW9uU2VydmljZSxcbiAgVXNlclNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vbWlzYy9pY29uJztcbmltcG9ydCB7IENoZWNrb3V0Q29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL2NoZWNrb3V0LWNvbmZpZy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcGF5bWVudC1tZXRob2QnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGF5bWVudC1tZXRob2QuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUGF5bWVudE1ldGhvZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFO1xuICBuZXdQYXltZW50Rm9ybU1hbnVhbGx5T3BlbmVkID0gZmFsc2U7XG4gIGV4aXN0aW5nUGF5bWVudE1ldGhvZHMkOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzW10+O1xuICBpc0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBnZXRQYXltZW50RGV0YWlsc1N1YjogU3Vic2NyaXB0aW9uO1xuICBnZXREZWxpdmVyeUFkZHJlc3NTdWI6IFN1YnNjcmlwdGlvbjtcbiAgc2VsZWN0ZWRQYXltZW50OiBQYXltZW50RGV0YWlscztcbiAgZGVsaXZlcnlBZGRyZXNzOiBBZGRyZXNzO1xuICBjaGVja291dFN0ZXBVcmxOZXh0OiBzdHJpbmc7XG4gIGNoZWNrb3V0U3RlcFVybFByZXZpb3VzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRQYXltZW50U2VydmljZTogQ2hlY2tvdXRQYXltZW50U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nQ29uZmlnU2VydmljZTogUm91dGluZ0NvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGVja291dENvbmZpZ1NlcnZpY2U6IENoZWNrb3V0Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXNMb2FkaW5nJCA9IHRoaXMudXNlclNlcnZpY2UuZ2V0UGF5bWVudE1ldGhvZHNMb2FkaW5nKCk7XG4gICAgdGhpcy51c2VyU2VydmljZS5sb2FkUGF5bWVudE1ldGhvZHMoKTtcblxuICAgIHRoaXMuY2hlY2tvdXRTdGVwVXJsTmV4dCA9IHRoaXMuY2hlY2tvdXRDb25maWdTZXJ2aWNlLmdldE5leHRDaGVja291dFN0ZXBVcmwoXG4gICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlXG4gICAgKTtcbiAgICB0aGlzLmNoZWNrb3V0U3RlcFVybFByZXZpb3VzID0gdGhpcy5jaGVja291dENvbmZpZ1NlcnZpY2UuZ2V0UHJldmlvdXNDaGVja291dFN0ZXBVcmwoXG4gICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlXG4gICAgKTtcblxuICAgIHRoaXMuZXhpc3RpbmdQYXltZW50TWV0aG9kcyQgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldFBheW1lbnRNZXRob2RzKCk7XG4gICAgdGhpcy5nZXRQYXltZW50RGV0YWlsc1N1YiA9IHRoaXMuY2hlY2tvdXRQYXltZW50U2VydmljZVxuICAgICAgLmdldFBheW1lbnREZXRhaWxzKClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgcGF5bWVudEluZm8gPT4gcGF5bWVudEluZm8gJiYgT2JqZWN0LmtleXMocGF5bWVudEluZm8pLmxlbmd0aCAhPT0gMFxuICAgICAgICApXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKHBheW1lbnRJbmZvID0+IHtcbiAgICAgICAgaWYgKCFwYXltZW50SW5mb1snaGFzRXJyb3InXSkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQYXltZW50ID0gcGF5bWVudEluZm87XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgT2JqZWN0LmtleXMocGF5bWVudEluZm8pLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aCgnSW52YWxpZEZpZWxkJykpIHtcbiAgICAgICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiAncGF5bWVudE1ldGhvZHMuaW52YWxpZEZpZWxkJyxcbiAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBmaWVsZDogcGF5bWVudEluZm9ba2V5XSB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5jbGVhckNoZWNrb3V0U3RlcCgzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBnZXRDYXJkQ29udGVudChwYXltZW50OiBQYXltZW50RGV0YWlscyk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Q2FyZC5leHBpcmVzJywge1xuICAgICAgICBtb250aDogcGF5bWVudC5leHBpcnlNb250aCxcbiAgICAgICAgeWVhcjogcGF5bWVudC5leHBpcnlZZWFyLFxuICAgICAgfSksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudEZvcm0udXNlVGhpc1BheW1lbnQnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Q2FyZC5kZWZhdWx0UGF5bWVudE1ldGhvZCcpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRDYXJkLnNlbGVjdGVkJyksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcChcbiAgICAgICAgKFtcbiAgICAgICAgICB0ZXh0RXhwaXJlcyxcbiAgICAgICAgICB0ZXh0VXNlVGhpc1BheW1lbnQsXG4gICAgICAgICAgdGV4dERlZmF1bHRQYXltZW50TWV0aG9kLFxuICAgICAgICAgIHRleHRTZWxlY3RlZCxcbiAgICAgICAgXSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNhcmQ6IENhcmQgPSB7XG4gICAgICAgICAgICB0aXRsZTogcGF5bWVudC5kZWZhdWx0UGF5bWVudCA/IHRleHREZWZhdWx0UGF5bWVudE1ldGhvZCA6ICcnLFxuICAgICAgICAgICAgdGV4dEJvbGQ6IHBheW1lbnQuYWNjb3VudEhvbGRlck5hbWUsXG4gICAgICAgICAgICB0ZXh0OiBbcGF5bWVudC5jYXJkTnVtYmVyLCB0ZXh0RXhwaXJlc10sXG4gICAgICAgICAgICBpbWc6IHRoaXMuZ2V0Q2FyZEljb24ocGF5bWVudC5jYXJkVHlwZS5jb2RlKSxcbiAgICAgICAgICAgIGFjdGlvbnM6IFt7IG5hbWU6IHRleHRVc2VUaGlzUGF5bWVudCwgZXZlbnQ6ICdzZW5kJyB9XSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkUGF5bWVudCAmJiB0aGlzLnNlbGVjdGVkUGF5bWVudC5pZCA9PT0gcGF5bWVudC5pZCkge1xuICAgICAgICAgICAgY2FyZC5oZWFkZXIgPSB0ZXh0U2VsZWN0ZWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjYXJkO1xuICAgICAgICB9XG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHBheW1lbnRNZXRob2RTZWxlY3RlZChwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHMpIHtcbiAgICB0aGlzLnNlbGVjdGVkUGF5bWVudCA9IHBheW1lbnREZXRhaWxzO1xuICB9XG5cbiAgc2hvd05ld1BheW1lbnRGb3JtKCk6IHZvaWQge1xuICAgIHRoaXMubmV3UGF5bWVudEZvcm1NYW51YWxseU9wZW5lZCA9IHRydWU7XG4gIH1cblxuICBoaWRlTmV3UGF5bWVudEZvcm0oKTogdm9pZCB7XG4gICAgdGhpcy5uZXdQYXltZW50Rm9ybU1hbnVhbGx5T3BlbmVkID0gZmFsc2U7XG4gIH1cblxuICBuZXh0KCk6IHZvaWQge1xuICAgIHRoaXMuYWRkUGF5bWVudEluZm8oe1xuICAgICAgcGF5bWVudDogdGhpcy5zZWxlY3RlZFBheW1lbnQsXG4gICAgICBuZXdQYXltZW50OiBmYWxzZSxcbiAgICB9KTtcbiAgfVxuXG4gIGJhY2soKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh0aGlzLmNoZWNrb3V0U3RlcFVybFByZXZpb3VzKTtcbiAgfVxuXG4gIGFkZE5ld1BheW1lbnRNZXRob2Qoe1xuICAgIHBheW1lbnREZXRhaWxzLFxuICAgIGJpbGxpbmdBZGRyZXNzLFxuICB9OiB7XG4gICAgcGF5bWVudERldGFpbHM6IFBheW1lbnREZXRhaWxzO1xuICAgIGJpbGxpbmdBZGRyZXNzOiBBZGRyZXNzO1xuICB9KTogdm9pZCB7XG4gICAgdGhpcy5nZXREZWxpdmVyeUFkZHJlc3NTdWIgPSB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlXG4gICAgICAuZ2V0RGVsaXZlcnlBZGRyZXNzKClcbiAgICAgIC5zdWJzY3JpYmUoYWRkcmVzcyA9PiB7XG4gICAgICAgIGJpbGxpbmdBZGRyZXNzID0gYWRkcmVzcztcbiAgICAgIH0pO1xuICAgIHRoaXMuYWRkUGF5bWVudEluZm8oe1xuICAgICAgcGF5bWVudDogcGF5bWVudERldGFpbHMsXG4gICAgICBiaWxsaW5nQWRkcmVzcyxcbiAgICAgIG5ld1BheW1lbnQ6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBhZGRQYXltZW50SW5mbyh7XG4gICAgbmV3UGF5bWVudCxcbiAgICBwYXltZW50LFxuICAgIGJpbGxpbmdBZGRyZXNzLFxuICB9OiB7XG4gICAgbmV3UGF5bWVudDogYm9vbGVhbjtcbiAgICBwYXltZW50OiBQYXltZW50RGV0YWlscztcbiAgICBiaWxsaW5nQWRkcmVzcz86IEFkZHJlc3M7XG4gIH0pOiB2b2lkIHtcbiAgICBwYXltZW50LmJpbGxpbmdBZGRyZXNzID0gYmlsbGluZ0FkZHJlc3NcbiAgICAgID8gYmlsbGluZ0FkZHJlc3NcbiAgICAgIDogdGhpcy5kZWxpdmVyeUFkZHJlc3M7XG5cbiAgICBpZiAobmV3UGF5bWVudCkge1xuICAgICAgdGhpcy5jaGVja291dFBheW1lbnRTZXJ2aWNlLmNyZWF0ZVBheW1lbnREZXRhaWxzKHBheW1lbnQpO1xuICAgICAgdGhpcy5jaGVja291dFNlcnZpY2UuY2xlYXJDaGVja291dFN0ZXAoMyk7XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIHNlbGVjdGVkIHBheW1lbnQgaXMgdGhlIHNhbWUgYXMgdGhlIGNhcnQncyBvbmVcbiAgICBpZiAodGhpcy5zZWxlY3RlZFBheW1lbnQgJiYgdGhpcy5zZWxlY3RlZFBheW1lbnQuaWQgPT09IHBheW1lbnQuaWQpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRQYXltZW50U2VydmljZS5zZXRQYXltZW50RGV0YWlscyhwYXltZW50KTtcbiAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNsZWFyQ2hlY2tvdXRTdGVwKDMpO1xuICAgIH1cblxuICAgIHRoaXMuZ2V0UGF5bWVudERldGFpbHNTdWIgPSB0aGlzLmNoZWNrb3V0UGF5bWVudFNlcnZpY2VcbiAgICAgIC5nZXRQYXltZW50RGV0YWlscygpXG4gICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICBpZiAoZGF0YS5hY2NvdW50SG9sZGVyTmFtZSAmJiBkYXRhLmNhcmROdW1iZXIpIHtcbiAgICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHRoaXMuY2hlY2tvdXRTdGVwVXJsTmV4dCk7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZ2V0UGF5bWVudERldGFpbHNTdWIpIHtcbiAgICAgIHRoaXMuZ2V0UGF5bWVudERldGFpbHNTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZ2V0RGVsaXZlcnlBZGRyZXNzU3ViKSB7XG4gICAgICB0aGlzLmdldERlbGl2ZXJ5QWRkcmVzc1N1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDYXJkSWNvbihjb2RlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGxldCBjY0ljb246IHN0cmluZztcbiAgICBpZiAoY29kZSA9PT0gJ3Zpc2EnKSB7XG4gICAgICBjY0ljb24gPSB0aGlzLmljb25UeXBlcy5WSVNBO1xuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gJ21hc3RlcicgfHwgY29kZSA9PT0gJ21hc3RlcmNhcmRfZXVyb2NhcmQnKSB7XG4gICAgICBjY0ljb24gPSB0aGlzLmljb25UeXBlcy5NQVNURVJfQ0FSRDtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09ICdkaW5lcnMnKSB7XG4gICAgICBjY0ljb24gPSB0aGlzLmljb25UeXBlcy5ESU5FUlNfQ0xVQjtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09ICdhbWV4Jykge1xuICAgICAgY2NJY29uID0gdGhpcy5pY29uVHlwZXMuQU1FWDtcbiAgICB9IGVsc2Uge1xuICAgICAgY2NJY29uID0gdGhpcy5pY29uVHlwZXMuQ1JFRElUX0NBUkQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNjSWNvbjtcbiAgfVxufVxuIl19