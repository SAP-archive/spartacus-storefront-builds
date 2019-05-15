/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Output, } from '@angular/core';
import { CartDataService, CheckoutService, GlobalMessageService, GlobalMessageType, UserService, TranslationService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { masterCardImgSrc } from '../../../../ui/images/masterCard';
import { visaImgSrc } from '../../../../ui/images/visa';
var PaymentMethodComponent = /** @class */ (function () {
    function PaymentMethodComponent(cartData, userService, checkoutService, globalMessageService, translation) {
        this.cartData = cartData;
        this.userService = userService;
        this.checkoutService = checkoutService;
        this.globalMessageService = globalMessageService;
        this.translation = translation;
        this.newPaymentFormManuallyOpened = false;
        this.goToStep = new EventEmitter();
    }
    /**
     * @return {?}
     */
    PaymentMethodComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.isLoading$ = this.userService.getPaymentMethodsLoading();
        this.userService.loadPaymentMethods(this.cartData.userId);
        this.existingPaymentMethods$ = this.userService.getPaymentMethods();
        this.getPaymentDetailsSub = this.checkoutService
            .getPaymentDetails()
            .pipe(filter(function (paymentInfo) { return paymentInfo && Object.keys(paymentInfo).length !== 0; }))
            .subscribe(function (paymentInfo) {
            if (!paymentInfo['hasError']) {
                _this.selectedPayment = paymentInfo;
            }
            else {
                Object.keys(paymentInfo).forEach(function (key) {
                    if (key.startsWith('InvalidField')) {
                        _this.globalMessageService.add({
                            key: 'paymentMethods.invalidField',
                            params: { field: paymentInfo[key] },
                        }, GlobalMessageType.MSG_TYPE_ERROR);
                    }
                });
                _this.checkoutService.clearCheckoutStep(3);
            }
        });
    };
    /**
     * @param {?} payment
     * @return {?}
     */
    PaymentMethodComponent.prototype.getCardContent = /**
     * @param {?} payment
     * @return {?}
     */
    function (payment) {
        var _this = this;
        return combineLatest([
            this.translation.translate('paymentCard.expires', {
                month: payment.expiryMonth,
                year: payment.expiryYear,
            }),
            this.translation.translate('paymentForm.useThisPayment'),
            this.translation.translate('paymentCard.defaultPaymentMethod'),
            this.translation.translate('paymentCard.selected'),
        ]).pipe(map(function (_a) {
            var _b = tslib_1.__read(_a, 4), textExpires = _b[0], textUseThisPayment = _b[1], textDefaultPaymentMethod = _b[2], textSelected = _b[3];
            /** @type {?} */
            var ccImage;
            if (payment.cardType.code === 'visa') {
                ccImage = visaImgSrc;
            }
            else if (payment.cardType.code === 'master') {
                ccImage = masterCardImgSrc;
            }
            /** @type {?} */
            var card = {
                title: payment.defaultPayment ? textDefaultPaymentMethod : '',
                textBold: payment.accountHolderName,
                text: [payment.cardNumber, textExpires],
                img: ccImage,
                actions: [{ name: textUseThisPayment, event: 'send' }],
            };
            if (_this.selectedPayment && _this.selectedPayment.id === payment.id) {
                card.header = textSelected;
            }
            return card;
        }));
    };
    /**
     * @param {?} paymentDetails
     * @return {?}
     */
    PaymentMethodComponent.prototype.paymentMethodSelected = /**
     * @param {?} paymentDetails
     * @return {?}
     */
    function (paymentDetails) {
        this.selectedPayment = paymentDetails;
    };
    /**
     * @return {?}
     */
    PaymentMethodComponent.prototype.showNewPaymentForm = /**
     * @return {?}
     */
    function () {
        this.newPaymentFormManuallyOpened = true;
    };
    /**
     * @return {?}
     */
    PaymentMethodComponent.prototype.hideNewPaymentForm = /**
     * @return {?}
     */
    function () {
        this.newPaymentFormManuallyOpened = false;
    };
    /**
     * @return {?}
     */
    PaymentMethodComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        this.addPaymentInfo({
            payment: this.selectedPayment,
            newPayment: false,
        });
    };
    /**
     * @return {?}
     */
    PaymentMethodComponent.prototype.back = /**
     * @return {?}
     */
    function () {
        this.goToStep.emit(2);
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    PaymentMethodComponent.prototype.addNewPaymentMethod = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var paymentDetails = _a.paymentDetails, billingAddress = _a.billingAddress;
        this.getDeliveryAddressSub = this.checkoutService
            .getDeliveryAddress()
            .subscribe(function (address) {
            billingAddress = address;
        });
        this.addPaymentInfo({
            payment: paymentDetails,
            billingAddress: billingAddress,
            newPayment: true,
        });
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    PaymentMethodComponent.prototype.addPaymentInfo = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _this = this;
        var newPayment = _a.newPayment, payment = _a.payment, billingAddress = _a.billingAddress;
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
            .subscribe(function (data) {
            if (data.accountHolderName && data.cardNumber) {
                _this.goToStep.emit(4);
                return;
            }
        });
    };
    /**
     * @return {?}
     */
    PaymentMethodComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.getPaymentDetailsSub) {
            this.getPaymentDetailsSub.unsubscribe();
        }
        if (this.getDeliveryAddressSub) {
            this.getDeliveryAddressSub.unsubscribe();
        }
    };
    PaymentMethodComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-payment-method',
                    template: "<ng-container\n  *ngIf=\"(existingPaymentMethods$ | async) as existingPaymentMethods\"\n>\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'paymentForm.payment' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        existingPaymentMethods?.length && !newPaymentFormManuallyOpened;\n        else newPaymentForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'paymentForm.choosePaymentMethod' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewPaymentForm()\"\n          >\n            {{ 'paymentForm.addNewPayment' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-payment-card col-md-12 col-lg-6\"\n          *ngFor=\"let method of existingPaymentMethods; let i = index\"\n        >\n          <div class=\"cx-payment-card-inner\">\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"getCardContent(method) | async\"\n              (sendCard)=\"paymentMethodSelected(method)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row cx-checkout-btns\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n            {{ 'common.back' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-primary\"\n            [disabled]=\"!selectedPayment\"\n            (click)=\"next()\"\n          >\n            {{ 'common.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newPaymentForm>\n      <cx-payment-form\n        (addPaymentInfo)=\"addNewPaymentMethod($event)\"\n        (closeForm)=\"hideNewPaymentForm()\"\n        (goBack)=\"back()\"\n        [paymentMethodsCount]=\"existingPaymentMethods?.length || 0\"\n      ></cx-payment-form>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n  </ng-template>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    PaymentMethodComponent.ctorParameters = function () { return [
        { type: CartDataService },
        { type: UserService },
        { type: CheckoutService },
        { type: GlobalMessageService },
        { type: TranslationService }
    ]; };
    PaymentMethodComponent.propDecorators = {
        goToStep: [{ type: Output }]
    };
    return PaymentMethodComponent;
}());
export { PaymentMethodComponent };
if (false) {
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
    PaymentMethodComponent.prototype.goToStep;
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
     * @private
     */
    PaymentMethodComponent.prototype.translation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2NoZWNrb3V0L2NvbXBvbmVudHMvbXVsdGktc3RlcC1jaGVja291dC9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBR1osTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFFTCxlQUFlLEVBQ2YsZUFBZSxFQUNmLG9CQUFvQixFQUNwQixpQkFBaUIsRUFFakIsV0FBVyxFQUNYLGtCQUFrQixHQUNuQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBNEIsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDcEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXhEO0lBaUJFLGdDQUNZLFFBQXlCLEVBQ3pCLFdBQXdCLEVBQ3hCLGVBQWdDLEVBQ2hDLG9CQUEwQyxFQUM1QyxXQUErQjtRQUo3QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN6QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUM1QyxnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFoQnpDLGlDQUE0QixHQUFHLEtBQUssQ0FBQztRQVNyQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQVFoQyxDQUFDOzs7O0lBRUoseUNBQVE7OztJQUFSO1FBQUEsaUJB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QixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzFDO0lBQ0gsQ0FBQzs7Z0JBcExGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixtNUVBQThDO29CQUM5QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBbEJDLGVBQWU7Z0JBS2YsV0FBVztnQkFKWCxlQUFlO2dCQUNmLG9CQUFvQjtnQkFJcEIsa0JBQWtCOzs7MkJBc0JqQixNQUFNOztJQXVLVCw2QkFBQztDQUFBLEFBckxELElBcUxDO1NBaExZLHNCQUFzQjs7O0lBQ2pDLDhEQUFxQzs7SUFDckMseURBQXNEOztJQUN0RCw0Q0FBZ0M7O0lBQ2hDLHNEQUFtQzs7SUFDbkMsdURBQW9DOztJQUNwQyxpREFBZ0M7O0lBQ2hDLGlEQUF5Qjs7SUFFekIsMENBQ21DOzs7OztJQUdqQywwQ0FBbUM7Ozs7O0lBQ25DLDZDQUFrQzs7Ozs7SUFDbEMsaURBQTBDOzs7OztJQUMxQyxzREFBb0Q7Ozs7O0lBQ3BELDZDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBZGRyZXNzLFxuICBDYXJ0RGF0YVNlcnZpY2UsXG4gIENoZWNrb3V0U2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxuICBQYXltZW50RGV0YWlscyxcbiAgVXNlclNlcnZpY2UsXG4gIFRyYW5zbGF0aW9uU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBtYXN0ZXJDYXJkSW1nU3JjIH0gZnJvbSAnLi4vLi4vLi4vLi4vdWkvaW1hZ2VzL21hc3RlckNhcmQnO1xuaW1wb3J0IHsgdmlzYUltZ1NyYyB9IGZyb20gJy4uLy4uLy4uLy4uL3VpL2ltYWdlcy92aXNhJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcGF5bWVudC1tZXRob2QnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGF5bWVudC1tZXRob2QuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUGF5bWVudE1ldGhvZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgbmV3UGF5bWVudEZvcm1NYW51YWxseU9wZW5lZCA9IGZhbHNlO1xuICBleGlzdGluZ1BheW1lbnRNZXRob2RzJDogT2JzZXJ2YWJsZTxQYXltZW50RGV0YWlsc1tdPjtcbiAgaXNMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgZ2V0UGF5bWVudERldGFpbHNTdWI6IFN1YnNjcmlwdGlvbjtcbiAgZ2V0RGVsaXZlcnlBZGRyZXNzU3ViOiBTdWJzY3JpcHRpb247XG4gIHNlbGVjdGVkUGF5bWVudDogUGF5bWVudERldGFpbHM7XG4gIGRlbGl2ZXJ5QWRkcmVzczogQWRkcmVzcztcblxuICBAT3V0cHV0KClcbiAgZ29Ub1N0ZXAgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2FydERhdGE6IENhcnREYXRhU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dFNlcnZpY2U6IENoZWNrb3V0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pc0xvYWRpbmckID0gdGhpcy51c2VyU2VydmljZS5nZXRQYXltZW50TWV0aG9kc0xvYWRpbmcoKTtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvYWRQYXltZW50TWV0aG9kcyh0aGlzLmNhcnREYXRhLnVzZXJJZCk7XG5cbiAgICB0aGlzLmV4aXN0aW5nUGF5bWVudE1ldGhvZHMkID0gdGhpcy51c2VyU2VydmljZS5nZXRQYXltZW50TWV0aG9kcygpO1xuICAgIHRoaXMuZ2V0UGF5bWVudERldGFpbHNTdWIgPSB0aGlzLmNoZWNrb3V0U2VydmljZVxuICAgICAgLmdldFBheW1lbnREZXRhaWxzKClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgcGF5bWVudEluZm8gPT4gcGF5bWVudEluZm8gJiYgT2JqZWN0LmtleXMocGF5bWVudEluZm8pLmxlbmd0aCAhPT0gMFxuICAgICAgICApXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKHBheW1lbnRJbmZvID0+IHtcbiAgICAgICAgaWYgKCFwYXltZW50SW5mb1snaGFzRXJyb3InXSkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQYXltZW50ID0gcGF5bWVudEluZm87XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgT2JqZWN0LmtleXMocGF5bWVudEluZm8pLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aCgnSW52YWxpZEZpZWxkJykpIHtcbiAgICAgICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiAncGF5bWVudE1ldGhvZHMuaW52YWxpZEZpZWxkJyxcbiAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBmaWVsZDogcGF5bWVudEluZm9ba2V5XSB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5jbGVhckNoZWNrb3V0U3RlcCgzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBnZXRDYXJkQ29udGVudChwYXltZW50OiBQYXltZW50RGV0YWlscyk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Q2FyZC5leHBpcmVzJywge1xuICAgICAgICBtb250aDogcGF5bWVudC5leHBpcnlNb250aCxcbiAgICAgICAgeWVhcjogcGF5bWVudC5leHBpcnlZZWFyLFxuICAgICAgfSksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudEZvcm0udXNlVGhpc1BheW1lbnQnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Q2FyZC5kZWZhdWx0UGF5bWVudE1ldGhvZCcpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRDYXJkLnNlbGVjdGVkJyksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcChcbiAgICAgICAgKFtcbiAgICAgICAgICB0ZXh0RXhwaXJlcyxcbiAgICAgICAgICB0ZXh0VXNlVGhpc1BheW1lbnQsXG4gICAgICAgICAgdGV4dERlZmF1bHRQYXltZW50TWV0aG9kLFxuICAgICAgICAgIHRleHRTZWxlY3RlZCxcbiAgICAgICAgXSkgPT4ge1xuICAgICAgICAgIGxldCBjY0ltYWdlOiBzdHJpbmc7XG4gICAgICAgICAgaWYgKHBheW1lbnQuY2FyZFR5cGUuY29kZSA9PT0gJ3Zpc2EnKSB7XG4gICAgICAgICAgICBjY0ltYWdlID0gdmlzYUltZ1NyYztcbiAgICAgICAgICB9IGVsc2UgaWYgKHBheW1lbnQuY2FyZFR5cGUuY29kZSA9PT0gJ21hc3RlcicpIHtcbiAgICAgICAgICAgIGNjSW1hZ2UgPSBtYXN0ZXJDYXJkSW1nU3JjO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBjYXJkOiBDYXJkID0ge1xuICAgICAgICAgICAgdGl0bGU6IHBheW1lbnQuZGVmYXVsdFBheW1lbnQgPyB0ZXh0RGVmYXVsdFBheW1lbnRNZXRob2QgOiAnJyxcbiAgICAgICAgICAgIHRleHRCb2xkOiBwYXltZW50LmFjY291bnRIb2xkZXJOYW1lLFxuICAgICAgICAgICAgdGV4dDogW3BheW1lbnQuY2FyZE51bWJlciwgdGV4dEV4cGlyZXNdLFxuICAgICAgICAgICAgaW1nOiBjY0ltYWdlLFxuICAgICAgICAgICAgYWN0aW9uczogW3sgbmFtZTogdGV4dFVzZVRoaXNQYXltZW50LCBldmVudDogJ3NlbmQnIH1dLFxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRQYXltZW50ICYmIHRoaXMuc2VsZWN0ZWRQYXltZW50LmlkID09PSBwYXltZW50LmlkKSB7XG4gICAgICAgICAgICBjYXJkLmhlYWRlciA9IHRleHRTZWxlY3RlZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNhcmQ7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcGF5bWVudE1ldGhvZFNlbGVjdGVkKHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlscykge1xuICAgIHRoaXMuc2VsZWN0ZWRQYXltZW50ID0gcGF5bWVudERldGFpbHM7XG4gIH1cblxuICBzaG93TmV3UGF5bWVudEZvcm0oKTogdm9pZCB7XG4gICAgdGhpcy5uZXdQYXltZW50Rm9ybU1hbnVhbGx5T3BlbmVkID0gdHJ1ZTtcbiAgfVxuXG4gIGhpZGVOZXdQYXltZW50Rm9ybSgpOiB2b2lkIHtcbiAgICB0aGlzLm5ld1BheW1lbnRGb3JtTWFudWFsbHlPcGVuZWQgPSBmYWxzZTtcbiAgfVxuXG4gIG5leHQoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRQYXltZW50SW5mbyh7XG4gICAgICBwYXltZW50OiB0aGlzLnNlbGVjdGVkUGF5bWVudCxcbiAgICAgIG5ld1BheW1lbnQ6IGZhbHNlLFxuICAgIH0pO1xuICB9XG5cbiAgYmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLmdvVG9TdGVwLmVtaXQoMik7XG4gIH1cblxuICBhZGROZXdQYXltZW50TWV0aG9kKHtcbiAgICBwYXltZW50RGV0YWlscyxcbiAgICBiaWxsaW5nQWRkcmVzcyxcbiAgfToge1xuICAgIHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlscztcbiAgICBiaWxsaW5nQWRkcmVzczogQWRkcmVzcztcbiAgfSk6IHZvaWQge1xuICAgIHRoaXMuZ2V0RGVsaXZlcnlBZGRyZXNzU3ViID0gdGhpcy5jaGVja291dFNlcnZpY2VcbiAgICAgIC5nZXREZWxpdmVyeUFkZHJlc3MoKVxuICAgICAgLnN1YnNjcmliZShhZGRyZXNzID0+IHtcbiAgICAgICAgYmlsbGluZ0FkZHJlc3MgPSBhZGRyZXNzO1xuICAgICAgfSk7XG4gICAgdGhpcy5hZGRQYXltZW50SW5mbyh7XG4gICAgICBwYXltZW50OiBwYXltZW50RGV0YWlscyxcbiAgICAgIGJpbGxpbmdBZGRyZXNzLFxuICAgICAgbmV3UGF5bWVudDogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFBheW1lbnRJbmZvKHtcbiAgICBuZXdQYXltZW50LFxuICAgIHBheW1lbnQsXG4gICAgYmlsbGluZ0FkZHJlc3MsXG4gIH06IHtcbiAgICBuZXdQYXltZW50OiBib29sZWFuO1xuICAgIHBheW1lbnQ6IFBheW1lbnREZXRhaWxzO1xuICAgIGJpbGxpbmdBZGRyZXNzPzogQWRkcmVzcztcbiAgfSk6IHZvaWQge1xuICAgIHBheW1lbnQuYmlsbGluZ0FkZHJlc3MgPSBiaWxsaW5nQWRkcmVzc1xuICAgICAgPyBiaWxsaW5nQWRkcmVzc1xuICAgICAgOiB0aGlzLmRlbGl2ZXJ5QWRkcmVzcztcblxuICAgIGlmIChuZXdQYXltZW50KSB7XG4gICAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5jcmVhdGVQYXltZW50RGV0YWlscyhwYXltZW50KTtcbiAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNsZWFyQ2hlY2tvdXRTdGVwKDMpO1xuICAgIH1cblxuICAgIC8vIGlmIHRoZSBzZWxlY3RlZCBwYXltZW50IGlzIHRoZSBzYW1lIGFzIHRoZSBjYXJ0J3Mgb25lXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRQYXltZW50ICYmIHRoaXMuc2VsZWN0ZWRQYXltZW50LmlkID09PSBwYXltZW50LmlkKSB7XG4gICAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5zZXRQYXltZW50RGV0YWlscyhwYXltZW50KTtcbiAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNsZWFyQ2hlY2tvdXRTdGVwKDMpO1xuICAgIH1cblxuICAgIHRoaXMuZ2V0UGF5bWVudERldGFpbHNTdWIgPSB0aGlzLmNoZWNrb3V0U2VydmljZVxuICAgICAgLmdldFBheW1lbnREZXRhaWxzKClcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIGlmIChkYXRhLmFjY291bnRIb2xkZXJOYW1lICYmIGRhdGEuY2FyZE51bWJlcikge1xuICAgICAgICAgIHRoaXMuZ29Ub1N0ZXAuZW1pdCg0KTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5nZXRQYXltZW50RGV0YWlsc1N1Yikge1xuICAgICAgdGhpcy5nZXRQYXltZW50RGV0YWlsc1N1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5nZXREZWxpdmVyeUFkZHJlc3NTdWIpIHtcbiAgICAgIHRoaXMuZ2V0RGVsaXZlcnlBZGRyZXNzU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=