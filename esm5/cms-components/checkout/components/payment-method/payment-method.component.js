/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CheckoutDeliveryService, CheckoutPaymentService, CheckoutService, GlobalMessageService, GlobalMessageType, RoutingService, TranslationService, UserPaymentService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { ICON_TYPE } from '../../../misc/icon';
import { CheckoutConfigService } from '../../checkout-config.service';
var PaymentMethodComponent = /** @class */ (function () {
    function PaymentMethodComponent(userPaymentService, checkoutService, checkoutDeliveryService, checkoutPaymentService, globalMessageService, routingService, checkoutConfigService, activatedRoute, translation) {
        this.userPaymentService = userPaymentService;
        this.checkoutService = checkoutService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutPaymentService = checkoutPaymentService;
        this.globalMessageService = globalMessageService;
        this.routingService = routingService;
        this.checkoutConfigService = checkoutConfigService;
        this.activatedRoute = activatedRoute;
        this.translation = translation;
        this.iconTypes = ICON_TYPE;
        this.newPaymentFormManuallyOpened = false;
        this.newPayment = false;
    }
    /**
     * @return {?}
     */
    PaymentMethodComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.isLoading$ = this.userPaymentService.getPaymentMethodsLoading();
        this.userPaymentService.loadPaymentMethods();
        this.checkoutStepUrlNext = this.checkoutConfigService.getNextCheckoutStepUrl(this.activatedRoute);
        this.checkoutStepUrlPrevious = this.checkoutConfigService.getPreviousCheckoutStepUrl(this.activatedRoute);
        this.getDeliveryAddressSub = this.checkoutDeliveryService
            .getDeliveryAddress()
            .subscribe((/**
         * @param {?} address
         * @return {?}
         */
        function (address) {
            _this.deliveryAddress = address;
        }));
        this.existingPaymentMethods$ = this.userPaymentService.getPaymentMethods();
        this.getPaymentDetailsSub = this.checkoutPaymentService
            .getPaymentDetails()
            .pipe(filter((/**
         * @param {?} paymentInfo
         * @return {?}
         */
        function (paymentInfo) { return paymentInfo && Object.keys(paymentInfo).length !== 0; })), tap((/**
         * @param {?} paymentInfo
         * @return {?}
         */
        function (paymentInfo) {
            if (paymentInfo === _this.selectedPayment || _this.newPayment) {
                _this.routingService.go(_this.checkoutStepUrlNext);
            }
        })))
            .subscribe((/**
         * @param {?} paymentInfo
         * @return {?}
         */
        function (paymentInfo) {
            if (!paymentInfo['hasError']) {
                _this.selectedPayment = paymentInfo;
            }
            else {
                Object.keys(paymentInfo).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) {
                    if (key.startsWith('InvalidField')) {
                        _this.globalMessageService.add({
                            key: 'paymentMethods.invalidField',
                            params: { field: paymentInfo[key] },
                        }, GlobalMessageType.MSG_TYPE_ERROR);
                    }
                }));
                _this.checkoutService.clearCheckoutStep(3);
            }
        }));
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
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 4), textExpires = _b[0], textUseThisPayment = _b[1], textDefaultPaymentMethod = _b[2], textSelected = _b[3];
            /** @type {?} */
            var card = {
                title: payment.defaultPayment ? textDefaultPaymentMethod : '',
                textBold: payment.accountHolderName,
                text: [payment.cardNumber, textExpires],
                img: _this.getCardIcon(payment.cardType.code),
                actions: [{ name: textUseThisPayment, event: 'send' }],
            };
            if (_this.selectedPayment && _this.selectedPayment.id === payment.id) {
                card.header = textSelected;
            }
            return card;
        })));
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
        this.routingService.go(this.checkoutStepUrlPrevious);
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
        var newPayment = _a.newPayment, payment = _a.payment, billingAddress = _a.billingAddress;
        if (newPayment) {
            payment.billingAddress = billingAddress
                ? billingAddress
                : this.deliveryAddress;
            this.checkoutPaymentService.createPaymentDetails(payment);
            this.checkoutService.clearCheckoutStep(3);
            this.newPayment = newPayment;
        }
        else if (this.selectedPayment && this.selectedPayment.id === payment.id) {
            this.checkoutPaymentService.setPaymentDetails(payment);
            this.checkoutService.clearCheckoutStep(3);
        }
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
    /**
     * @protected
     * @param {?} code
     * @return {?}
     */
    PaymentMethodComponent.prototype.getCardIcon = /**
     * @protected
     * @param {?} code
     * @return {?}
     */
    function (code) {
        /** @type {?} */
        var ccIcon;
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
        { type: UserPaymentService },
        { type: CheckoutService },
        { type: CheckoutDeliveryService },
        { type: CheckoutPaymentService },
        { type: GlobalMessageService },
        { type: RoutingService },
        { type: CheckoutConfigService },
        { type: ActivatedRoute },
        { type: TranslationService }
    ]; };
    return PaymentMethodComponent;
}());
export { PaymentMethodComponent };
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
    PaymentMethodComponent.prototype.newPayment;
    /**
     * @type {?}
     * @private
     */
    PaymentMethodComponent.prototype.getPaymentDetailsSub;
    /**
     * @type {?}
     * @private
     */
    PaymentMethodComponent.prototype.getDeliveryAddressSub;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsR0FHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixzQkFBc0IsRUFDdEIsZUFBZSxFQUNmLG9CQUFvQixFQUNwQixpQkFBaUIsRUFFakIsY0FBYyxFQUNkLGtCQUFrQixFQUNsQixrQkFBa0IsR0FDbkIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFdEU7SUFvQkUsZ0NBQ1ksa0JBQXNDLEVBQ3RDLGVBQWdDLEVBQ2hDLHVCQUFnRCxFQUNoRCxzQkFBOEMsRUFDOUMsb0JBQTBDLEVBQzFDLGNBQThCLEVBQzlCLHFCQUE0QyxFQUM1QyxjQUE4QixFQUM5QixXQUErQjtRQVIvQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDOUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBdkIzQyxjQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLGlDQUE0QixHQUFHLEtBQUssQ0FBQztRQUlyQyxlQUFVLEdBQUcsS0FBSyxDQUFDO0lBbUJoQixDQUFDOzs7O0lBRUoseUNBQVE7OztJQUFSO1FBQUEsaUJBZ0RDO1FBL0NDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDckUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFFN0MsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxzQkFBc0IsQ0FDMUUsSUFBSSxDQUFDLGNBQWMsQ0FDcEIsQ0FBQztRQUNGLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsMEJBQTBCLENBQ2xGLElBQUksQ0FBQyxjQUFjLENBQ3BCLENBQUM7UUFFRixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLHVCQUF1QjthQUN0RCxrQkFBa0IsRUFBRTthQUNwQixTQUFTOzs7O1FBQUMsVUFBQyxPQUFnQjtZQUMxQixLQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQztRQUNqQyxDQUFDLEVBQUMsQ0FBQztRQUVMLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMzRSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLHNCQUFzQjthQUNwRCxpQkFBaUIsRUFBRTthQUNuQixJQUFJLENBQ0gsTUFBTTs7OztRQUNKLFVBQUEsV0FBVyxJQUFJLE9BQUEsV0FBVyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBcEQsQ0FBb0QsRUFDcEUsRUFDRCxHQUFHOzs7O1FBQUMsVUFBQSxXQUFXO1lBQ2IsSUFBSSxXQUFXLEtBQUssS0FBSSxDQUFDLGVBQWUsSUFBSSxLQUFJLENBQUMsVUFBVSxFQUFFO2dCQUMzRCxLQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxLQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQzthQUNsRDtRQUNILENBQUMsRUFBQyxDQUNIO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUEsV0FBVztZQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUM1QixLQUFJLENBQUMsZUFBZSxHQUFHLFdBQVcsQ0FBQzthQUNwQztpQkFBTTtnQkFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU87Ozs7Z0JBQUMsVUFBQSxHQUFHO29CQUNsQyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLEVBQUU7d0JBQ2xDLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzNCOzRCQUNFLEdBQUcsRUFBRSw2QkFBNkI7NEJBQ2xDLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUU7eUJBQ3BDLEVBQ0QsaUJBQWlCLENBQUMsY0FBYyxDQUNqQyxDQUFDO3FCQUNIO2dCQUNILENBQUMsRUFBQyxDQUFDO2dCQUNILEtBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDM0M7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7O0lBRUQsK0NBQWM7Ozs7SUFBZCxVQUFlLE9BQXVCO1FBQXRDLGlCQStCQztRQTlCQyxPQUFPLGFBQWEsQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRTtnQkFDaEQsS0FBSyxFQUFFLE9BQU8sQ0FBQyxXQUFXO2dCQUMxQixJQUFJLEVBQUUsT0FBTyxDQUFDLFVBQVU7YUFDekIsQ0FBQztZQUNGLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLDRCQUE0QixDQUFDO1lBQ3hELElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGtDQUFrQyxDQUFDO1lBQzlELElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDO1NBQ25ELENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRzs7OztRQUNELFVBQUMsRUFLQTtnQkFMQSwwQkFLQSxFQUpDLG1CQUFXLEVBQ1gsMEJBQWtCLEVBQ2xCLGdDQUF3QixFQUN4QixvQkFBWTs7Z0JBRU4sSUFBSSxHQUFTO2dCQUNqQixLQUFLLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzdELFFBQVEsRUFBRSxPQUFPLENBQUMsaUJBQWlCO2dCQUNuQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQztnQkFDdkMsR0FBRyxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQzVDLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQzthQUN2RDtZQUNELElBQUksS0FBSSxDQUFDLGVBQWUsSUFBSSxLQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsRUFBRSxFQUFFO2dCQUNsRSxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQzthQUM1QjtZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxFQUNGLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsc0RBQXFCOzs7O0lBQXJCLFVBQXNCLGNBQThCO1FBQ2xELElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxtREFBa0I7OztJQUFsQjtRQUNFLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxJQUFJLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELG1EQUFrQjs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLDRCQUE0QixHQUFHLEtBQUssQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQscUNBQUk7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUNsQixPQUFPLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDN0IsVUFBVSxFQUFFLEtBQUs7U0FDbEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELHFDQUFJOzs7SUFBSjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7O0lBRUQsb0RBQW1COzs7O0lBQW5CLFVBQW9CLEVBTW5CO1lBTEMsa0NBQWMsRUFDZCxrQ0FBYztRQUtkLElBQUksQ0FBQyxjQUFjLENBQUM7WUFDbEIsT0FBTyxFQUFFLGNBQWM7WUFDdkIsY0FBYyxnQkFBQTtZQUNkLFVBQVUsRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsK0NBQWM7Ozs7SUFBZCxVQUFlLEVBUWQ7WUFQQywwQkFBVSxFQUNWLG9CQUFPLEVBQ1Asa0NBQWM7UUFNZCxJQUFJLFVBQVUsRUFBRTtZQUNkLE9BQU8sQ0FBQyxjQUFjLEdBQUcsY0FBYztnQkFDckMsQ0FBQyxDQUFDLGNBQWM7Z0JBQ2hCLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBRXpCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1NBQzlCO2FBQU0sSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxLQUFLLE9BQU8sQ0FBQyxFQUFFLEVBQUU7WUFDekUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0M7SUFDSCxDQUFDOzs7O0lBRUQsNENBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDN0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3pDO1FBQ0QsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDOUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzFDO0lBQ0gsQ0FBQzs7Ozs7O0lBRVMsNENBQVc7Ozs7O0lBQXJCLFVBQXNCLElBQVk7O1lBQzVCLE1BQWM7UUFDbEIsSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO1lBQ25CLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztTQUM5QjthQUFNLElBQUksSUFBSSxLQUFLLFFBQVEsSUFBSSxJQUFJLEtBQUsscUJBQXFCLEVBQUU7WUFDOUQsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO1NBQ3JDO2FBQU0sSUFBSSxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzVCLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQztTQUNyQzthQUFNLElBQUksSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUMxQixNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7U0FDOUI7YUFBTTtZQUNMLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQztTQUNyQztRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O2dCQXZNRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsbTVFQUE4QztvQkFDOUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQVpDLGtCQUFrQjtnQkFObEIsZUFBZTtnQkFGZix1QkFBdUI7Z0JBQ3ZCLHNCQUFzQjtnQkFFdEIsb0JBQW9CO2dCQUdwQixjQUFjO2dCQVFQLHFCQUFxQjtnQkFqQnJCLGNBQWM7Z0JBVXJCLGtCQUFrQjs7SUFpTnBCLDZCQUFDO0NBQUEsQUF4TUQsSUF3TUM7U0FuTVksc0JBQXNCOzs7SUFDakMsMkNBQXNCOztJQUN0Qiw4REFBcUM7O0lBQ3JDLHlEQUFzRDs7SUFDdEQsNENBQWdDOztJQUNoQyxpREFBZ0M7O0lBQ2hDLDRDQUFtQjs7Ozs7SUFFbkIsc0RBQTJDOzs7OztJQUMzQyx1REFBNEM7Ozs7O0lBRTVDLGlEQUFpQzs7Ozs7SUFDakMscURBQW9DOzs7OztJQUNwQyx5REFBd0M7Ozs7O0lBR3RDLG9EQUFnRDs7Ozs7SUFDaEQsaURBQTBDOzs7OztJQUMxQyx5REFBMEQ7Ozs7O0lBQzFELHdEQUF3RDs7Ozs7SUFDeEQsc0RBQW9EOzs7OztJQUNwRCxnREFBd0M7Ozs7O0lBQ3hDLHVEQUFzRDs7Ozs7SUFDdEQsZ0RBQXdDOzs7OztJQUN4Qyw2Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBBZGRyZXNzLFxuICBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgQ2hlY2tvdXRQYXltZW50U2VydmljZSxcbiAgQ2hlY2tvdXRTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIFBheW1lbnREZXRhaWxzLFxuICBSb3V0aW5nU2VydmljZSxcbiAgVHJhbnNsYXRpb25TZXJ2aWNlLFxuICBVc2VyUGF5bWVudFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9taXNjL2ljb24nO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wYXltZW50LW1ldGhvZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXltZW50LW1ldGhvZC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50TWV0aG9kQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG4gIG5ld1BheW1lbnRGb3JtTWFudWFsbHlPcGVuZWQgPSBmYWxzZTtcbiAgZXhpc3RpbmdQYXltZW50TWV0aG9kcyQ6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHNbXT47XG4gIGlzTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIHNlbGVjdGVkUGF5bWVudDogUGF5bWVudERldGFpbHM7XG4gIG5ld1BheW1lbnQgPSBmYWxzZTtcblxuICBwcml2YXRlIGdldFBheW1lbnREZXRhaWxzU3ViOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgZ2V0RGVsaXZlcnlBZGRyZXNzU3ViOiBTdWJzY3JpcHRpb247XG5cbiAgcHJpdmF0ZSBkZWxpdmVyeUFkZHJlc3M6IEFkZHJlc3M7XG4gIHByaXZhdGUgY2hlY2tvdXRTdGVwVXJsTmV4dDogc3RyaW5nO1xuICBwcml2YXRlIGNoZWNrb3V0U3RlcFVybFByZXZpb3VzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHVzZXJQYXltZW50U2VydmljZTogVXNlclBheW1lbnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dFNlcnZpY2U6IENoZWNrb3V0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dFBheW1lbnRTZXJ2aWNlOiBDaGVja291dFBheW1lbnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRDb25maWdTZXJ2aWNlOiBDaGVja291dENvbmZpZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pc0xvYWRpbmckID0gdGhpcy51c2VyUGF5bWVudFNlcnZpY2UuZ2V0UGF5bWVudE1ldGhvZHNMb2FkaW5nKCk7XG4gICAgdGhpcy51c2VyUGF5bWVudFNlcnZpY2UubG9hZFBheW1lbnRNZXRob2RzKCk7XG5cbiAgICB0aGlzLmNoZWNrb3V0U3RlcFVybE5leHQgPSB0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZS5nZXROZXh0Q2hlY2tvdXRTdGVwVXJsKFxuICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZVxuICAgICk7XG4gICAgdGhpcy5jaGVja291dFN0ZXBVcmxQcmV2aW91cyA9IHRoaXMuY2hlY2tvdXRDb25maWdTZXJ2aWNlLmdldFByZXZpb3VzQ2hlY2tvdXRTdGVwVXJsKFxuICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZVxuICAgICk7XG5cbiAgICB0aGlzLmdldERlbGl2ZXJ5QWRkcmVzc1N1YiA9IHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2VcbiAgICAgIC5nZXREZWxpdmVyeUFkZHJlc3MoKVxuICAgICAgLnN1YnNjcmliZSgoYWRkcmVzczogQWRkcmVzcykgPT4ge1xuICAgICAgICB0aGlzLmRlbGl2ZXJ5QWRkcmVzcyA9IGFkZHJlc3M7XG4gICAgICB9KTtcblxuICAgIHRoaXMuZXhpc3RpbmdQYXltZW50TWV0aG9kcyQgPSB0aGlzLnVzZXJQYXltZW50U2VydmljZS5nZXRQYXltZW50TWV0aG9kcygpO1xuICAgIHRoaXMuZ2V0UGF5bWVudERldGFpbHNTdWIgPSB0aGlzLmNoZWNrb3V0UGF5bWVudFNlcnZpY2VcbiAgICAgIC5nZXRQYXltZW50RGV0YWlscygpXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKFxuICAgICAgICAgIHBheW1lbnRJbmZvID0+IHBheW1lbnRJbmZvICYmIE9iamVjdC5rZXlzKHBheW1lbnRJbmZvKS5sZW5ndGggIT09IDBcbiAgICAgICAgKSxcbiAgICAgICAgdGFwKHBheW1lbnRJbmZvID0+IHtcbiAgICAgICAgICBpZiAocGF5bWVudEluZm8gPT09IHRoaXMuc2VsZWN0ZWRQYXltZW50IHx8IHRoaXMubmV3UGF5bWVudCkge1xuICAgICAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh0aGlzLmNoZWNrb3V0U3RlcFVybE5leHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUocGF5bWVudEluZm8gPT4ge1xuICAgICAgICBpZiAoIXBheW1lbnRJbmZvWydoYXNFcnJvciddKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFBheW1lbnQgPSBwYXltZW50SW5mbztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhwYXltZW50SW5mbykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKCdJbnZhbGlkRmllbGQnKSkge1xuICAgICAgICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdwYXltZW50TWV0aG9kcy5pbnZhbGlkRmllbGQnLFxuICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IGZpZWxkOiBwYXltZW50SW5mb1trZXldIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNsZWFyQ2hlY2tvdXRTdGVwKDMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIGdldENhcmRDb250ZW50KHBheW1lbnQ6IFBheW1lbnREZXRhaWxzKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRDYXJkLmV4cGlyZXMnLCB7XG4gICAgICAgIG1vbnRoOiBwYXltZW50LmV4cGlyeU1vbnRoLFxuICAgICAgICB5ZWFyOiBwYXltZW50LmV4cGlyeVllYXIsXG4gICAgICB9KSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Rm9ybS51c2VUaGlzUGF5bWVudCcpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRDYXJkLmRlZmF1bHRQYXltZW50TWV0aG9kJyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudENhcmQuc2VsZWN0ZWQnKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKFxuICAgICAgICAoW1xuICAgICAgICAgIHRleHRFeHBpcmVzLFxuICAgICAgICAgIHRleHRVc2VUaGlzUGF5bWVudCxcbiAgICAgICAgICB0ZXh0RGVmYXVsdFBheW1lbnRNZXRob2QsXG4gICAgICAgICAgdGV4dFNlbGVjdGVkLFxuICAgICAgICBdKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2FyZDogQ2FyZCA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBwYXltZW50LmRlZmF1bHRQYXltZW50ID8gdGV4dERlZmF1bHRQYXltZW50TWV0aG9kIDogJycsXG4gICAgICAgICAgICB0ZXh0Qm9sZDogcGF5bWVudC5hY2NvdW50SG9sZGVyTmFtZSxcbiAgICAgICAgICAgIHRleHQ6IFtwYXltZW50LmNhcmROdW1iZXIsIHRleHRFeHBpcmVzXSxcbiAgICAgICAgICAgIGltZzogdGhpcy5nZXRDYXJkSWNvbihwYXltZW50LmNhcmRUeXBlLmNvZGUpLFxuICAgICAgICAgICAgYWN0aW9uczogW3sgbmFtZTogdGV4dFVzZVRoaXNQYXltZW50LCBldmVudDogJ3NlbmQnIH1dLFxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRQYXltZW50ICYmIHRoaXMuc2VsZWN0ZWRQYXltZW50LmlkID09PSBwYXltZW50LmlkKSB7XG4gICAgICAgICAgICBjYXJkLmhlYWRlciA9IHRleHRTZWxlY3RlZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNhcmQ7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcGF5bWVudE1ldGhvZFNlbGVjdGVkKHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlscykge1xuICAgIHRoaXMuc2VsZWN0ZWRQYXltZW50ID0gcGF5bWVudERldGFpbHM7XG4gIH1cblxuICBzaG93TmV3UGF5bWVudEZvcm0oKTogdm9pZCB7XG4gICAgdGhpcy5uZXdQYXltZW50Rm9ybU1hbnVhbGx5T3BlbmVkID0gdHJ1ZTtcbiAgfVxuXG4gIGhpZGVOZXdQYXltZW50Rm9ybSgpOiB2b2lkIHtcbiAgICB0aGlzLm5ld1BheW1lbnRGb3JtTWFudWFsbHlPcGVuZWQgPSBmYWxzZTtcbiAgfVxuXG4gIG5leHQoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRQYXltZW50SW5mbyh7XG4gICAgICBwYXltZW50OiB0aGlzLnNlbGVjdGVkUGF5bWVudCxcbiAgICAgIG5ld1BheW1lbnQ6IGZhbHNlLFxuICAgIH0pO1xuICB9XG5cbiAgYmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHRoaXMuY2hlY2tvdXRTdGVwVXJsUHJldmlvdXMpO1xuICB9XG5cbiAgYWRkTmV3UGF5bWVudE1ldGhvZCh7XG4gICAgcGF5bWVudERldGFpbHMsXG4gICAgYmlsbGluZ0FkZHJlc3MsXG4gIH06IHtcbiAgICBwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHM7XG4gICAgYmlsbGluZ0FkZHJlc3M6IEFkZHJlc3M7XG4gIH0pOiB2b2lkIHtcbiAgICB0aGlzLmFkZFBheW1lbnRJbmZvKHtcbiAgICAgIHBheW1lbnQ6IHBheW1lbnREZXRhaWxzLFxuICAgICAgYmlsbGluZ0FkZHJlc3MsXG4gICAgICBuZXdQYXltZW50OiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgYWRkUGF5bWVudEluZm8oe1xuICAgIG5ld1BheW1lbnQsXG4gICAgcGF5bWVudCxcbiAgICBiaWxsaW5nQWRkcmVzcyxcbiAgfToge1xuICAgIG5ld1BheW1lbnQ6IGJvb2xlYW47XG4gICAgcGF5bWVudDogUGF5bWVudERldGFpbHM7XG4gICAgYmlsbGluZ0FkZHJlc3M/OiBBZGRyZXNzO1xuICB9KTogdm9pZCB7XG4gICAgaWYgKG5ld1BheW1lbnQpIHtcbiAgICAgIHBheW1lbnQuYmlsbGluZ0FkZHJlc3MgPSBiaWxsaW5nQWRkcmVzc1xuICAgICAgICA/IGJpbGxpbmdBZGRyZXNzXG4gICAgICAgIDogdGhpcy5kZWxpdmVyeUFkZHJlc3M7XG5cbiAgICAgIHRoaXMuY2hlY2tvdXRQYXltZW50U2VydmljZS5jcmVhdGVQYXltZW50RGV0YWlscyhwYXltZW50KTtcbiAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNsZWFyQ2hlY2tvdXRTdGVwKDMpO1xuICAgICAgdGhpcy5uZXdQYXltZW50ID0gbmV3UGF5bWVudDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRQYXltZW50ICYmIHRoaXMuc2VsZWN0ZWRQYXltZW50LmlkID09PSBwYXltZW50LmlkKSB7XG4gICAgICB0aGlzLmNoZWNrb3V0UGF5bWVudFNlcnZpY2Uuc2V0UGF5bWVudERldGFpbHMocGF5bWVudCk7XG4gICAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5jbGVhckNoZWNrb3V0U3RlcCgzKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5nZXRQYXltZW50RGV0YWlsc1N1Yikge1xuICAgICAgdGhpcy5nZXRQYXltZW50RGV0YWlsc1N1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5nZXREZWxpdmVyeUFkZHJlc3NTdWIpIHtcbiAgICAgIHRoaXMuZ2V0RGVsaXZlcnlBZGRyZXNzU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGdldENhcmRJY29uKGNvZGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IGNjSWNvbjogc3RyaW5nO1xuICAgIGlmIChjb2RlID09PSAndmlzYScpIHtcbiAgICAgIGNjSWNvbiA9IHRoaXMuaWNvblR5cGVzLlZJU0E7XG4gICAgfSBlbHNlIGlmIChjb2RlID09PSAnbWFzdGVyJyB8fCBjb2RlID09PSAnbWFzdGVyY2FyZF9ldXJvY2FyZCcpIHtcbiAgICAgIGNjSWNvbiA9IHRoaXMuaWNvblR5cGVzLk1BU1RFUl9DQVJEO1xuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gJ2RpbmVycycpIHtcbiAgICAgIGNjSWNvbiA9IHRoaXMuaWNvblR5cGVzLkRJTkVSU19DTFVCO1xuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gJ2FtZXgnKSB7XG4gICAgICBjY0ljb24gPSB0aGlzLmljb25UeXBlcy5BTUVYO1xuICAgIH0gZWxzZSB7XG4gICAgICBjY0ljb24gPSB0aGlzLmljb25UeXBlcy5DUkVESVRfQ0FSRDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2NJY29uO1xuICB9XG59XG4iXX0=