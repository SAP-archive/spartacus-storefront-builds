/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CartDataService, CheckoutService, GlobalMessageService, GlobalMessageType, RoutingService, UserService, TranslationService, RoutingConfigService, } from '@spartacus/core';
import { ActivatedRoute } from '@angular/router';
import { CheckoutConfigService } from '../../checkout-config.service';
import { ICON_TYPE } from '../../../../cms-components/misc/icon';
export class PaymentMethodComponent {
    /**
     * @param {?} cartData
     * @param {?} userService
     * @param {?} checkoutService
     * @param {?} globalMessageService
     * @param {?} routingConfigService
     * @param {?} routingService
     * @param {?} checkoutConfigService
     * @param {?} activatedRoute
     * @param {?} translation
     */
    constructor(cartData, userService, checkoutService, globalMessageService, routingConfigService, routingService, checkoutConfigService, activatedRoute, translation) {
        this.cartData = cartData;
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
        this.userService.loadPaymentMethods(this.cartData.userId);
        this.checkoutStepUrlNext = this.checkoutConfigService.getNextCheckoutStepUrl(this.activatedRoute);
        this.checkoutStepUrlPrevious = this.checkoutConfigService.getPreviousCheckoutStepUrl(this.activatedRoute);
        this.existingPaymentMethods$ = this.userService.getPaymentMethods();
        this.getPaymentDetailsSub = this.checkoutService
            .getPaymentDetails()
            .pipe(filter(paymentInfo => paymentInfo && Object.keys(paymentInfo).length !== 0))
            .subscribe(paymentInfo => {
            if (!paymentInfo['hasError']) {
                this.selectedPayment = paymentInfo;
            }
            else {
                Object.keys(paymentInfo).forEach(key => {
                    if (key.startsWith('InvalidField')) {
                        this.globalMessageService.add({
                            key: 'paymentMethods.invalidField',
                            params: { field: paymentInfo[key] },
                        }, GlobalMessageType.MSG_TYPE_ERROR);
                    }
                });
                this.checkoutService.clearCheckoutStep(3);
            }
        });
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
        ]).pipe(map(([textExpires, textUseThisPayment, textDefaultPaymentMethod, textSelected,]) => {
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
        }));
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
            .subscribe(address => {
            billingAddress = address;
        });
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
            .subscribe(data => {
            if (data.accountHolderName && data.cardNumber) {
                this.routingService.go(this.checkoutStepUrlNext);
                return;
            }
        });
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
    { type: CartDataService },
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
    PaymentMethodComponent.prototype.cartData;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2NoZWNrb3V0L2NvbXBvbmVudHMvcGF5bWVudC1tZXRob2QvcGF5bWVudC1tZXRob2QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsR0FHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQTRCLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFFTCxlQUFlLEVBQ2YsZUFBZSxFQUNmLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsY0FBYyxFQUVkLFdBQVcsRUFDWCxrQkFBa0IsRUFDbEIsb0JBQW9CLEdBQ3JCLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWpELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQU9qRSxNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7Ozs7Ozs7SUFZakMsWUFDWSxRQUF5QixFQUN6QixXQUF3QixFQUN4QixlQUFnQyxFQUNoQyxvQkFBMEMsRUFDMUMsb0JBQTBDLEVBQzVDLGNBQThCLEVBQzlCLHFCQUE0QyxFQUM1QyxjQUE4QixFQUM5QixXQUErQjtRQVI3QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN6QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNC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eURBQXNEOztJQUN0RCw0Q0FBZ0M7O0lBQ2hDLHNEQUFtQzs7SUFDbkMsdURBQW9DOztJQUNwQyxpREFBZ0M7O0lBQ2hDLGlEQUF5Qjs7SUFDekIscURBQTRCOztJQUM1Qix5REFBZ0M7Ozs7O0lBRzlCLDBDQUFtQzs7Ozs7SUFDbkMsNkNBQWtDOzs7OztJQUNsQyxpREFBMEM7Ozs7O0lBQzFDLHNEQUFvRDs7Ozs7SUFDcEQsc0RBQW9EOzs7OztJQUNwRCxnREFBc0M7Ozs7O0lBQ3RDLHVEQUFvRDs7Ozs7SUFDcEQsZ0RBQXNDOzs7OztJQUN0Qyw2Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBBZGRyZXNzLFxuICBDYXJ0RGF0YVNlcnZpY2UsXG4gIENoZWNrb3V0U2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgUGF5bWVudERldGFpbHMsXG4gIFVzZXJTZXJ2aWNlLFxuICBUcmFuc2xhdGlvblNlcnZpY2UsXG4gIFJvdXRpbmdDb25maWdTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGVja291dENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jaGVja291dC1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wYXltZW50LW1ldGhvZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXltZW50LW1ldGhvZC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50TWV0aG9kQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG4gIG5ld1BheW1lbnRGb3JtTWFudWFsbHlPcGVuZWQgPSBmYWxzZTtcbiAgZXhpc3RpbmdQYXltZW50TWV0aG9kcyQ6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHNbXT47XG4gIGlzTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGdldFBheW1lbnREZXRhaWxzU3ViOiBTdWJzY3JpcHRpb247XG4gIGdldERlbGl2ZXJ5QWRkcmVzc1N1YjogU3Vic2NyaXB0aW9uO1xuICBzZWxlY3RlZFBheW1lbnQ6IFBheW1lbnREZXRhaWxzO1xuICBkZWxpdmVyeUFkZHJlc3M6IEFkZHJlc3M7XG4gIGNoZWNrb3V0U3RlcFVybE5leHQ6IHN0cmluZztcbiAgY2hlY2tvdXRTdGVwVXJsUHJldmlvdXM6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2FydERhdGE6IENhcnREYXRhU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dFNlcnZpY2U6IENoZWNrb3V0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nQ29uZmlnU2VydmljZTogUm91dGluZ0NvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGVja291dENvbmZpZ1NlcnZpY2U6IENoZWNrb3V0Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXNMb2FkaW5nJCA9IHRoaXMudXNlclNlcnZpY2UuZ2V0UGF5bWVudE1ldGhvZHNMb2FkaW5nKCk7XG4gICAgdGhpcy51c2VyU2VydmljZS5sb2FkUGF5bWVudE1ldGhvZHModGhpcy5jYXJ0RGF0YS51c2VySWQpO1xuXG4gICAgdGhpcy5jaGVja291dFN0ZXBVcmxOZXh0ID0gdGhpcy5jaGVja291dENvbmZpZ1NlcnZpY2UuZ2V0TmV4dENoZWNrb3V0U3RlcFVybChcbiAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGVcbiAgICApO1xuICAgIHRoaXMuY2hlY2tvdXRTdGVwVXJsUHJldmlvdXMgPSB0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZS5nZXRQcmV2aW91c0NoZWNrb3V0U3RlcFVybChcbiAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGVcbiAgICApO1xuXG4gICAgdGhpcy5leGlzdGluZ1BheW1lbnRNZXRob2RzJCA9IHRoaXMudXNlclNlcnZpY2UuZ2V0UGF5bWVudE1ldGhvZHMoKTtcbiAgICB0aGlzLmdldFBheW1lbnREZXRhaWxzU3ViID0gdGhpcy5jaGVja291dFNlcnZpY2VcbiAgICAgIC5nZXRQYXltZW50RGV0YWlscygpXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKFxuICAgICAgICAgIHBheW1lbnRJbmZvID0+IHBheW1lbnRJbmZvICYmIE9iamVjdC5rZXlzKHBheW1lbnRJbmZvKS5sZW5ndGggIT09IDBcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShwYXltZW50SW5mbyA9PiB7XG4gICAgICAgIGlmICghcGF5bWVudEluZm9bJ2hhc0Vycm9yJ10pIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkUGF5bWVudCA9IHBheW1lbnRJbmZvO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHBheW1lbnRJbmZvKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoJ0ludmFsaWRGaWVsZCcpKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ3BheW1lbnRNZXRob2RzLmludmFsaWRGaWVsZCcsXG4gICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgZmllbGQ6IHBheW1lbnRJbmZvW2tleV0gfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5jaGVja291dFNlcnZpY2UuY2xlYXJDaGVja291dFN0ZXAoMyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgZ2V0Q2FyZENvbnRlbnQocGF5bWVudDogUGF5bWVudERldGFpbHMpOiBPYnNlcnZhYmxlPENhcmQ+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudENhcmQuZXhwaXJlcycsIHtcbiAgICAgICAgbW9udGg6IHBheW1lbnQuZXhwaXJ5TW9udGgsXG4gICAgICAgIHllYXI6IHBheW1lbnQuZXhwaXJ5WWVhcixcbiAgICAgIH0pLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRGb3JtLnVzZVRoaXNQYXltZW50JyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudENhcmQuZGVmYXVsdFBheW1lbnRNZXRob2QnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Q2FyZC5zZWxlY3RlZCcpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoXG4gICAgICAgIChbXG4gICAgICAgICAgdGV4dEV4cGlyZXMsXG4gICAgICAgICAgdGV4dFVzZVRoaXNQYXltZW50LFxuICAgICAgICAgIHRleHREZWZhdWx0UGF5bWVudE1ldGhvZCxcbiAgICAgICAgICB0ZXh0U2VsZWN0ZWQsXG4gICAgICAgIF0pID0+IHtcbiAgICAgICAgICBjb25zdCBjYXJkOiBDYXJkID0ge1xuICAgICAgICAgICAgdGl0bGU6IHBheW1lbnQuZGVmYXVsdFBheW1lbnQgPyB0ZXh0RGVmYXVsdFBheW1lbnRNZXRob2QgOiAnJyxcbiAgICAgICAgICAgIHRleHRCb2xkOiBwYXltZW50LmFjY291bnRIb2xkZXJOYW1lLFxuICAgICAgICAgICAgdGV4dDogW3BheW1lbnQuY2FyZE51bWJlciwgdGV4dEV4cGlyZXNdLFxuICAgICAgICAgICAgaW1nOiB0aGlzLmdldENhcmRJY29uKHBheW1lbnQuY2FyZFR5cGUuY29kZSksXG4gICAgICAgICAgICBhY3Rpb25zOiBbeyBuYW1lOiB0ZXh0VXNlVGhpc1BheW1lbnQsIGV2ZW50OiAnc2VuZCcgfV0sXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFBheW1lbnQgJiYgdGhpcy5zZWxlY3RlZFBheW1lbnQuaWQgPT09IHBheW1lbnQuaWQpIHtcbiAgICAgICAgICAgIGNhcmQuaGVhZGVyID0gdGV4dFNlbGVjdGVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY2FyZDtcbiAgICAgICAgfVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwYXltZW50TWV0aG9kU2VsZWN0ZWQocGF5bWVudERldGFpbHM6IFBheW1lbnREZXRhaWxzKSB7XG4gICAgdGhpcy5zZWxlY3RlZFBheW1lbnQgPSBwYXltZW50RGV0YWlscztcbiAgfVxuXG4gIHNob3dOZXdQYXltZW50Rm9ybSgpOiB2b2lkIHtcbiAgICB0aGlzLm5ld1BheW1lbnRGb3JtTWFudWFsbHlPcGVuZWQgPSB0cnVlO1xuICB9XG5cbiAgaGlkZU5ld1BheW1lbnRGb3JtKCk6IHZvaWQge1xuICAgIHRoaXMubmV3UGF5bWVudEZvcm1NYW51YWxseU9wZW5lZCA9IGZhbHNlO1xuICB9XG5cbiAgbmV4dCgpOiB2b2lkIHtcbiAgICB0aGlzLmFkZFBheW1lbnRJbmZvKHtcbiAgICAgIHBheW1lbnQ6IHRoaXMuc2VsZWN0ZWRQYXltZW50LFxuICAgICAgbmV3UGF5bWVudDogZmFsc2UsXG4gICAgfSk7XG4gIH1cblxuICBiYWNrKCk6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28odGhpcy5jaGVja291dFN0ZXBVcmxQcmV2aW91cyk7XG4gIH1cblxuICBhZGROZXdQYXltZW50TWV0aG9kKHtcbiAgICBwYXltZW50RGV0YWlscyxcbiAgICBiaWxsaW5nQWRkcmVzcyxcbiAgfToge1xuICAgIHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlscztcbiAgICBiaWxsaW5nQWRkcmVzczogQWRkcmVzcztcbiAgfSk6IHZvaWQge1xuICAgIHRoaXMuZ2V0RGVsaXZlcnlBZGRyZXNzU3ViID0gdGhpcy5jaGVja291dFNlcnZpY2VcbiAgICAgIC5nZXREZWxpdmVyeUFkZHJlc3MoKVxuICAgICAgLnN1YnNjcmliZShhZGRyZXNzID0+IHtcbiAgICAgICAgYmlsbGluZ0FkZHJlc3MgPSBhZGRyZXNzO1xuICAgICAgfSk7XG4gICAgdGhpcy5hZGRQYXltZW50SW5mbyh7XG4gICAgICBwYXltZW50OiBwYXltZW50RGV0YWlscyxcbiAgICAgIGJpbGxpbmdBZGRyZXNzLFxuICAgICAgbmV3UGF5bWVudDogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFBheW1lbnRJbmZvKHtcbiAgICBuZXdQYXltZW50LFxuICAgIHBheW1lbnQsXG4gICAgYmlsbGluZ0FkZHJlc3MsXG4gIH06IHtcbiAgICBuZXdQYXltZW50OiBib29sZWFuO1xuICAgIHBheW1lbnQ6IFBheW1lbnREZXRhaWxzO1xuICAgIGJpbGxpbmdBZGRyZXNzPzogQWRkcmVzcztcbiAgfSk6IHZvaWQge1xuICAgIHBheW1lbnQuYmlsbGluZ0FkZHJlc3MgPSBiaWxsaW5nQWRkcmVzc1xuICAgICAgPyBiaWxsaW5nQWRkcmVzc1xuICAgICAgOiB0aGlzLmRlbGl2ZXJ5QWRkcmVzcztcblxuICAgIGlmIChuZXdQYXltZW50KSB7XG4gICAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5jcmVhdGVQYXltZW50RGV0YWlscyhwYXltZW50KTtcbiAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNsZWFyQ2hlY2tvdXRTdGVwKDMpO1xuICAgIH1cblxuICAgIC8vIGlmIHRoZSBzZWxlY3RlZCBwYXltZW50IGlzIHRoZSBzYW1lIGFzIHRoZSBjYXJ0J3Mgb25lXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRQYXltZW50ICYmIHRoaXMuc2VsZWN0ZWRQYXltZW50LmlkID09PSBwYXltZW50LmlkKSB7XG4gICAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5zZXRQYXltZW50RGV0YWlscyhwYXltZW50KTtcbiAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNsZWFyQ2hlY2tvdXRTdGVwKDMpO1xuICAgIH1cblxuICAgIHRoaXMuZ2V0UGF5bWVudERldGFpbHNTdWIgPSB0aGlzLmNoZWNrb3V0U2VydmljZVxuICAgICAgLmdldFBheW1lbnREZXRhaWxzKClcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIGlmIChkYXRhLmFjY291bnRIb2xkZXJOYW1lICYmIGRhdGEuY2FyZE51bWJlcikge1xuICAgICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28odGhpcy5jaGVja291dFN0ZXBVcmxOZXh0KTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5nZXRQYXltZW50RGV0YWlsc1N1Yikge1xuICAgICAgdGhpcy5nZXRQYXltZW50RGV0YWlsc1N1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5nZXREZWxpdmVyeUFkZHJlc3NTdWIpIHtcbiAgICAgIHRoaXMuZ2V0RGVsaXZlcnlBZGRyZXNzU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGdldENhcmRJY29uKGNvZGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IGNjSWNvbjogc3RyaW5nO1xuICAgIGlmIChjb2RlID09PSAndmlzYScpIHtcbiAgICAgIGNjSWNvbiA9IHRoaXMuaWNvblR5cGVzLlZJU0E7XG4gICAgfSBlbHNlIGlmIChjb2RlID09PSAnbWFzdGVyJyB8fCBjb2RlID09PSAnbWFzdGVyY2FyZF9ldXJvY2FyZCcpIHtcbiAgICAgIGNjSWNvbiA9IHRoaXMuaWNvblR5cGVzLk1BU1RFUl9DQVJEO1xuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gJ2RpbmVycycpIHtcbiAgICAgIGNjSWNvbiA9IHRoaXMuaWNvblR5cGVzLkRJTkVSU19DTFVCO1xuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gJ2FtZXgnKSB7XG4gICAgICBjY0ljb24gPSB0aGlzLmljb25UeXBlcy5BTUVYO1xuICAgIH0gZWxzZSB7XG4gICAgICBjY0ljb24gPSB0aGlzLmljb25UeXBlcy5DUkVESVRfQ0FSRDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2NJY29uO1xuICB9XG59XG4iXX0=