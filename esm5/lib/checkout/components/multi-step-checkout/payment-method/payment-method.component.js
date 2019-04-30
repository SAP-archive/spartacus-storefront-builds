/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Output, EventEmitter, } from '@angular/core';
import { CheckoutService, GlobalMessageService, GlobalMessageType, } from '@spartacus/core';
import { CartDataService } from '@spartacus/core';
import { UserService } from '@spartacus/core';
import { tap, filter } from 'rxjs/operators';
import { masterCardImgSrc } from '../../../../ui/images/masterCard';
import { visaImgSrc } from '../../../../ui/images/visa';
var PaymentMethodComponent = /** @class */ (function () {
    function PaymentMethodComponent(cartData, userService, checkoutService, globalMessageService) {
        this.cartData = cartData;
        this.userService = userService;
        this.checkoutService = checkoutService;
        this.globalMessageService = globalMessageService;
        this.newPaymentFormManuallyOpened = false;
        this.cards = [];
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
        this.existingPaymentMethods$ = this.userService.getPaymentMethods().pipe(tap(function (payments) {
            if (_this.cards.length === 0) {
                payments.forEach(function (payment) {
                    /** @type {?} */
                    var card = _this.getCardContent(payment);
                    if (_this.selectedPayment &&
                        _this.selectedPayment.id === payment.id) {
                        card.header = 'SELECTED';
                    }
                });
            }
        }));
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
                            type: GlobalMessageType.MSG_TYPE_ERROR,
                            text: 'InvalidField: ' + paymentInfo[key],
                        });
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
            title: payment.defaultPayment ? 'Default Payment Method' : '',
            textBold: payment.accountHolderName,
            text: [
                payment.cardNumber,
                'Expires: ' + payment.expiryMonth + '/' + payment.expiryYear,
            ],
            img: ccImage,
            actions: [{ name: 'Use this payment', event: 'send' }],
        };
        this.cards.push(card);
        return card;
    };
    /**
     * @param {?} paymentDetails
     * @param {?} index
     * @return {?}
     */
    PaymentMethodComponent.prototype.paymentMethodSelected = /**
     * @param {?} paymentDetails
     * @param {?} index
     * @return {?}
     */
    function (paymentDetails, index) {
        this.selectedPayment = paymentDetails;
        for (var i = 0; this.cards[i]; i++) {
            /** @type {?} */
            var card = this.cards[i];
            if (i === index) {
                card.header = 'SELECTED';
            }
            else {
                card.header = '';
            }
        }
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
                    template: "<ng-container\n  *ngIf=\"(existingPaymentMethods$ | async) as existingPaymentMethods\"\n>\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'paymentForm.payment' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        existingPaymentMethods?.length && !newPaymentFormManuallyOpened;\n        else newPaymentForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'paymentForm.choosePaymentMethod' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewPaymentForm()\"\n          >\n            {{ 'paymentForm.addNewPayment' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-payment-card col-md-12 col-lg-6\"\n          *ngFor=\"let method of existingPaymentMethods; let i = index\"\n        >\n          <div class=\"cx-payment-card-inner\">\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"cards[i]\"\n              (sendCard)=\"paymentMethodSelected(method, i)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row cx-checkout-btns\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n            {{ 'common.back' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-primary\"\n            [disabled]=\"!selectedPayment\"\n            (click)=\"next()\"\n          >\n            {{ 'common.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newPaymentForm>\n      <cx-payment-form\n        (addPaymentInfo)=\"addNewPaymentMethod($event)\"\n        (closeForm)=\"hideNewPaymentForm()\"\n        (goBack)=\"back()\"\n        [paymentMethodsCount]=\"existingPaymentMethods?.length || 0\"\n      ></cx-payment-form>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n  </ng-template>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/@media (max-width:991.98px){:host{display:var(--cx-display,block);background-color:var(--cx-background-color,var(--cx-g-color-background))}.col-md-12{padding:var(--cx-padding,0 4.375rem)}.container{width:var(--cx-width,100%)}}@media (max-width:767.98px){.col-md-12{padding:var(--cx-padding,0 2.25rem)}}.cx-checkout-btns{padding:var(--cx-padding,1rem 0);justify-content:var(--cx-justify-content,flex-end)}@media (max-width:767.98px){.cx-checkout-btns{padding:var(--cx-padding,1.25rem 0)}}.cx-checkout-title{text-transform:var(--cx-text-transform,capitalize);margin:var(--cx-margin,0 auto);padding:var(--cx-padding,2.375rem 0 1.75rem 0)}.cx-checkout-text{margin-bottom:var(--cx-margin,1.25rem)}.cx-spinner{padding-top:var(--cx-padding,30px);padding-bottom:var(--cx-padding,30px)}.cx-payment.container{padding:var(--cx-padding,0)}.cx-payment-card{padding-bottom:var(--cxpadding,30px)}.cx-payment-card-inner{height:var(--cx-height,100%);background-color:var(--cx-background-color,var(--cx-g-color-inverse));cursor:pointer}.cx-checkout-title{text-transform:var(--cx-text-transform,uppercase);margin:var(--cx-margin,0 auto);padding:var(--cx-padding,2.375rem 0 1.75rem 0)}@media (max-width:991.98px){.cx-checkout-btns .btn-action{margin:var(--cx-margin,0 0 1rem)}.cx-payment-card-inner{background-color:var(--cx-background-color,var(--cx-g-color-inverse))}.cx-checkout-text{padding-left:var(--cx-padding,3.5rem)}}.cx-checkout-btns{padding-bottom:var(--cx-padding,1rem)}@media (max-width:767.98px){.cx-checkout-text{padding-left:var(--cx-padding,1.5rem)}.cx-checkout-btns .btn-action{margin-bottom:var(--cx-margin,1rem)}}.cx-checkout-body{display:var(--cx-display,flex);align-items:var(--cx-align-items,stretch)}@media (max-width:991.98px){.cx-checkout-btns{padding:var(--cx-padding,1.25rem 0)}.cx-checkout-body.row{padding:var(--cx-padding,0)}}"]
                }] }
    ];
    /** @nocollapse */
    PaymentMethodComponent.ctorParameters = function () { return [
        { type: CartDataService },
        { type: UserService },
        { type: CheckoutService },
        { type: GlobalMessageService }
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
    PaymentMethodComponent.prototype.cards;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2NoZWNrb3V0L2NvbXBvbmVudHMvbXVsdGktc3RlcC1jaGVja291dC9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEVBRXZCLE1BQU0sRUFDTixZQUFZLEdBRWIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUdMLGVBQWUsRUFDZixvQkFBb0IsRUFDcEIsaUJBQWlCLEdBQ2xCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUc5QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUd4RDtJQW1CRSxnQ0FDWSxRQUF5QixFQUN6QixXQUF3QixFQUN4QixlQUFnQyxFQUNoQyxvQkFBMEM7UUFIMUMsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDekIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFoQnRELGlDQUE0QixHQUFHLEtBQUssQ0FBQztRQUVyQyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBUW5CLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBT2hDLENBQUM7Ozs7SUFFSix5Q0FBUTs7O0lBQVI7UUFBQSxpQkEwQ0M7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RSxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUM3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDekM7UUFDRCxJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUM5QixJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDMUM7SUFDSCxDQUFDOztnQkF6TEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLGc0RUFBOEM7b0JBRTlDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7Ozs7Z0JBZlEsZUFBZTtnQkFDZixXQUFXO2dCQUxsQixlQUFlO2dCQUNmLG9CQUFvQjs7OzJCQTZCbkIsTUFBTTs7SUEwS1QsNkJBQUM7Q0FBQSxBQTFMRCxJQTBMQztTQXBMWSxzQkFBc0I7OztJQUNqQyw4REFBcUM7O0lBQ3JDLHlEQUFzRDs7SUFDdEQsdUNBQW1COztJQUNuQiw0Q0FBZ0M7O0lBQ2hDLHNEQUFtQzs7SUFDbkMsdURBQW9DOztJQUNwQyxpREFBZ0M7O0lBQ2hDLGlEQUF5Qjs7SUFFekIsMENBQ21DOzs7OztJQUdqQywwQ0FBbUM7Ozs7O0lBQ25DLDZDQUFrQzs7Ozs7SUFDbEMsaURBQTBDOzs7OztJQUMxQyxzREFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBQYXltZW50RGV0YWlscyxcbiAgQWRkcmVzcyxcbiAgQ2hlY2tvdXRTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDYXJ0RGF0YVNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBtYXN0ZXJDYXJkSW1nU3JjIH0gZnJvbSAnLi4vLi4vLi4vLi4vdWkvaW1hZ2VzL21hc3RlckNhcmQnO1xuaW1wb3J0IHsgdmlzYUltZ1NyYyB9IGZyb20gJy4uLy4uLy4uLy4uL3VpL2ltYWdlcy92aXNhJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi91aS9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wYXltZW50LW1ldGhvZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXltZW50LW1ldGhvZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BheW1lbnQtbWV0aG9kLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50TWV0aG9kQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBuZXdQYXltZW50Rm9ybU1hbnVhbGx5T3BlbmVkID0gZmFsc2U7XG4gIGV4aXN0aW5nUGF5bWVudE1ldGhvZHMkOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzW10+O1xuICBjYXJkczogQ2FyZFtdID0gW107XG4gIGlzTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGdldFBheW1lbnREZXRhaWxzU3ViOiBTdWJzY3JpcHRpb247XG4gIGdldERlbGl2ZXJ5QWRkcmVzc1N1YjogU3Vic2NyaXB0aW9uO1xuICBzZWxlY3RlZFBheW1lbnQ6IFBheW1lbnREZXRhaWxzO1xuICBkZWxpdmVyeUFkZHJlc3M6IEFkZHJlc3M7XG5cbiAgQE91dHB1dCgpXG4gIGdvVG9TdGVwID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNhcnREYXRhOiBDYXJ0RGF0YVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pc0xvYWRpbmckID0gdGhpcy51c2VyU2VydmljZS5nZXRQYXltZW50TWV0aG9kc0xvYWRpbmcoKTtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvYWRQYXltZW50TWV0aG9kcyh0aGlzLmNhcnREYXRhLnVzZXJJZCk7XG5cbiAgICB0aGlzLmV4aXN0aW5nUGF5bWVudE1ldGhvZHMkID0gdGhpcy51c2VyU2VydmljZS5nZXRQYXltZW50TWV0aG9kcygpLnBpcGUoXG4gICAgICB0YXAocGF5bWVudHMgPT4ge1xuICAgICAgICBpZiAodGhpcy5jYXJkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBwYXltZW50cy5mb3JFYWNoKHBheW1lbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2FyZCA9IHRoaXMuZ2V0Q2FyZENvbnRlbnQocGF5bWVudCk7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQYXltZW50ICYmXG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQYXltZW50LmlkID09PSBwYXltZW50LmlkXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgY2FyZC5oZWFkZXIgPSAnU0VMRUNURUQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLmdldFBheW1lbnREZXRhaWxzU3ViID0gdGhpcy5jaGVja291dFNlcnZpY2VcbiAgICAgIC5nZXRQYXltZW50RGV0YWlscygpXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKFxuICAgICAgICAgIHBheW1lbnRJbmZvID0+IHBheW1lbnRJbmZvICYmIE9iamVjdC5rZXlzKHBheW1lbnRJbmZvKS5sZW5ndGggIT09IDBcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShwYXltZW50SW5mbyA9PiB7XG4gICAgICAgIGlmICghcGF5bWVudEluZm9bJ2hhc0Vycm9yJ10pIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkUGF5bWVudCA9IHBheW1lbnRJbmZvO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHBheW1lbnRJbmZvKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoJ0ludmFsaWRGaWVsZCcpKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUixcbiAgICAgICAgICAgICAgICB0ZXh0OiAnSW52YWxpZEZpZWxkOiAnICsgcGF5bWVudEluZm9ba2V5XSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5jaGVja291dFNlcnZpY2UuY2xlYXJDaGVja291dFN0ZXAoMyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgZ2V0Q2FyZENvbnRlbnQocGF5bWVudDogUGF5bWVudERldGFpbHMpOiBDYXJkIHtcbiAgICBsZXQgY2NJbWFnZTogc3RyaW5nO1xuICAgIGlmIChwYXltZW50LmNhcmRUeXBlLmNvZGUgPT09ICd2aXNhJykge1xuICAgICAgY2NJbWFnZSA9IHZpc2FJbWdTcmM7XG4gICAgfSBlbHNlIGlmIChwYXltZW50LmNhcmRUeXBlLmNvZGUgPT09ICdtYXN0ZXInKSB7XG4gICAgICBjY0ltYWdlID0gbWFzdGVyQ2FyZEltZ1NyYztcbiAgICB9XG4gICAgY29uc3QgY2FyZDogQ2FyZCA9IHtcbiAgICAgIHRpdGxlOiBwYXltZW50LmRlZmF1bHRQYXltZW50ID8gJ0RlZmF1bHQgUGF5bWVudCBNZXRob2QnIDogJycsXG4gICAgICB0ZXh0Qm9sZDogcGF5bWVudC5hY2NvdW50SG9sZGVyTmFtZSxcbiAgICAgIHRleHQ6IFtcbiAgICAgICAgcGF5bWVudC5jYXJkTnVtYmVyLFxuICAgICAgICAnRXhwaXJlczogJyArIHBheW1lbnQuZXhwaXJ5TW9udGggKyAnLycgKyBwYXltZW50LmV4cGlyeVllYXIsXG4gICAgICBdLFxuICAgICAgaW1nOiBjY0ltYWdlLFxuICAgICAgYWN0aW9uczogW3sgbmFtZTogJ1VzZSB0aGlzIHBheW1lbnQnLCBldmVudDogJ3NlbmQnIH1dLFxuICAgIH07XG5cbiAgICB0aGlzLmNhcmRzLnB1c2goY2FyZCk7XG4gICAgcmV0dXJuIGNhcmQ7XG4gIH1cblxuICBwYXltZW50TWV0aG9kU2VsZWN0ZWQocGF5bWVudERldGFpbHM6IFBheW1lbnREZXRhaWxzLCBpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5zZWxlY3RlZFBheW1lbnQgPSBwYXltZW50RGV0YWlscztcblxuICAgIGZvciAobGV0IGkgPSAwOyB0aGlzLmNhcmRzW2ldOyBpKyspIHtcbiAgICAgIGNvbnN0IGNhcmQgPSB0aGlzLmNhcmRzW2ldO1xuICAgICAgaWYgKGkgPT09IGluZGV4KSB7XG4gICAgICAgIGNhcmQuaGVhZGVyID0gJ1NFTEVDVEVEJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhcmQuaGVhZGVyID0gJyc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2hvd05ld1BheW1lbnRGb3JtKCk6IHZvaWQge1xuICAgIHRoaXMubmV3UGF5bWVudEZvcm1NYW51YWxseU9wZW5lZCA9IHRydWU7XG4gIH1cblxuICBoaWRlTmV3UGF5bWVudEZvcm0oKTogdm9pZCB7XG4gICAgdGhpcy5uZXdQYXltZW50Rm9ybU1hbnVhbGx5T3BlbmVkID0gZmFsc2U7XG4gIH1cblxuICBuZXh0KCk6IHZvaWQge1xuICAgIHRoaXMuYWRkUGF5bWVudEluZm8oe1xuICAgICAgcGF5bWVudDogdGhpcy5zZWxlY3RlZFBheW1lbnQsXG4gICAgICBuZXdQYXltZW50OiBmYWxzZSxcbiAgICB9KTtcbiAgfVxuXG4gIGJhY2soKTogdm9pZCB7XG4gICAgdGhpcy5nb1RvU3RlcC5lbWl0KDIpO1xuICB9XG5cbiAgYWRkTmV3UGF5bWVudE1ldGhvZCh7XG4gICAgcGF5bWVudERldGFpbHMsXG4gICAgYmlsbGluZ0FkZHJlc3MsXG4gIH06IHtcbiAgICBwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHM7XG4gICAgYmlsbGluZ0FkZHJlc3M6IEFkZHJlc3M7XG4gIH0pOiB2b2lkIHtcbiAgICB0aGlzLmdldERlbGl2ZXJ5QWRkcmVzc1N1YiA9IHRoaXMuY2hlY2tvdXRTZXJ2aWNlXG4gICAgICAuZ2V0RGVsaXZlcnlBZGRyZXNzKClcbiAgICAgIC5zdWJzY3JpYmUoYWRkcmVzcyA9PiB7XG4gICAgICAgIGJpbGxpbmdBZGRyZXNzID0gYWRkcmVzcztcbiAgICAgIH0pO1xuICAgIHRoaXMuYWRkUGF5bWVudEluZm8oe1xuICAgICAgcGF5bWVudDogcGF5bWVudERldGFpbHMsXG4gICAgICBiaWxsaW5nQWRkcmVzcyxcbiAgICAgIG5ld1BheW1lbnQ6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBhZGRQYXltZW50SW5mbyh7XG4gICAgbmV3UGF5bWVudCxcbiAgICBwYXltZW50LFxuICAgIGJpbGxpbmdBZGRyZXNzLFxuICB9OiB7XG4gICAgbmV3UGF5bWVudDogYm9vbGVhbjtcbiAgICBwYXltZW50OiBQYXltZW50RGV0YWlscztcbiAgICBiaWxsaW5nQWRkcmVzcz86IEFkZHJlc3M7XG4gIH0pOiB2b2lkIHtcbiAgICBwYXltZW50LmJpbGxpbmdBZGRyZXNzID0gYmlsbGluZ0FkZHJlc3NcbiAgICAgID8gYmlsbGluZ0FkZHJlc3NcbiAgICAgIDogdGhpcy5kZWxpdmVyeUFkZHJlc3M7XG5cbiAgICBpZiAobmV3UGF5bWVudCkge1xuICAgICAgdGhpcy5jaGVja291dFNlcnZpY2UuY3JlYXRlUGF5bWVudERldGFpbHMocGF5bWVudCk7XG4gICAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5jbGVhckNoZWNrb3V0U3RlcCgzKTtcbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgc2VsZWN0ZWQgcGF5bWVudCBpcyB0aGUgc2FtZSBhcyB0aGUgY2FydCdzIG9uZVxuICAgIGlmICh0aGlzLnNlbGVjdGVkUGF5bWVudCAmJiB0aGlzLnNlbGVjdGVkUGF5bWVudC5pZCA9PT0gcGF5bWVudC5pZCkge1xuICAgICAgdGhpcy5jaGVja291dFNlcnZpY2Uuc2V0UGF5bWVudERldGFpbHMocGF5bWVudCk7XG4gICAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5jbGVhckNoZWNrb3V0U3RlcCgzKTtcbiAgICB9XG5cbiAgICB0aGlzLmdldFBheW1lbnREZXRhaWxzU3ViID0gdGhpcy5jaGVja291dFNlcnZpY2VcbiAgICAgIC5nZXRQYXltZW50RGV0YWlscygpXG4gICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICBpZiAoZGF0YS5hY2NvdW50SG9sZGVyTmFtZSAmJiBkYXRhLmNhcmROdW1iZXIpIHtcbiAgICAgICAgICB0aGlzLmdvVG9TdGVwLmVtaXQoNCk7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZ2V0UGF5bWVudERldGFpbHNTdWIpIHtcbiAgICAgIHRoaXMuZ2V0UGF5bWVudERldGFpbHNTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZ2V0RGVsaXZlcnlBZGRyZXNzU3ViKSB7XG4gICAgICB0aGlzLmdldERlbGl2ZXJ5QWRkcmVzc1N1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19