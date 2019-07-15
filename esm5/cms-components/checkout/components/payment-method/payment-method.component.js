/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CheckoutDeliveryService, CheckoutPaymentService, CheckoutService, GlobalMessageService, GlobalMessageType, RoutingService, TranslationService, UserPaymentService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
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
    }
    /**
     * @return {?}
     */
    PaymentMethodComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.allowRouting = false;
        this.isLoading$ = this.userPaymentService.getPaymentMethodsLoading();
        this.userPaymentService.loadPaymentMethods();
        this.checkoutStepUrlNext = this.checkoutConfigService.getNextCheckoutStepUrl(this.activatedRoute);
        this.checkoutStepUrlPrevious = this.checkoutConfigService.getPreviousCheckoutStepUrl(this.activatedRoute);
        this.checkoutDeliveryService
            .getDeliveryAddress()
            .pipe(take(1))
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
        function (paymentInfo) { return paymentInfo && !!Object.keys(paymentInfo).length; })))
            .subscribe((/**
         * @param {?} paymentInfo
         * @return {?}
         */
        function (paymentInfo) {
            if (_this.allowRouting) {
                _this.routingService.go(_this.checkoutStepUrlNext);
            }
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
            if (!_this.selectedPayment && payment.defaultPayment) {
                _this.selectedPayment = payment;
            }
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
        this.setPaymentDetails({
            paymentDetails: this.selectedPayment,
            isNewPayment: false,
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
    PaymentMethodComponent.prototype.setPaymentDetails = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var paymentDetails = _a.paymentDetails, billingAddress = _a.billingAddress, _b = _a.isNewPayment, isNewPayment = _b === void 0 ? true : _b;
        /** @type {?} */
        var details = tslib_1.__assign({}, paymentDetails);
        details.billingAddress = billingAddress || this.deliveryAddress;
        if (isNewPayment) {
            this.checkoutPaymentService.createPaymentDetails(details);
        }
        else if (this.selectedPayment && this.selectedPayment.id === details.id) {
            this.checkoutPaymentService.setPaymentDetails(details);
        }
        this.allowRouting = true;
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
                    template: "<ng-container\n  *ngIf=\"(existingPaymentMethods$ | async) as existingPaymentMethods\"\n>\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'paymentForm.payment' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        existingPaymentMethods?.length && !newPaymentFormManuallyOpened;\n        else newPaymentForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'paymentForm.choosePaymentMethod' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewPaymentForm()\"\n          >\n            {{ 'paymentForm.addNewPayment' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-payment-card col-md-12 col-lg-6\"\n          *ngFor=\"let method of existingPaymentMethods; let i = index\"\n        >\n          <div class=\"cx-payment-card-inner\">\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"getCardContent(method) | async\"\n              (sendCard)=\"paymentMethodSelected(method)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row cx-checkout-btns\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n            {{ 'common.back' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-primary\"\n            [disabled]=\"!selectedPayment\"\n            (click)=\"next()\"\n          >\n            {{ 'common.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newPaymentForm>\n      <cx-payment-form\n        (setPaymentDetails)=\"setPaymentDetails($event)\"\n        (closeForm)=\"hideNewPaymentForm()\"\n        (goBack)=\"back()\"\n        [paymentMethodsCount]=\"existingPaymentMethods?.length || 0\"\n      ></cx-payment-form>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n  </ng-template>\n</ng-container>\n",
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
    PaymentMethodComponent.prototype.allowRouting;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsR0FHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixzQkFBc0IsRUFDdEIsZUFBZSxFQUNmLG9CQUFvQixFQUNwQixpQkFBaUIsRUFFakIsY0FBYyxFQUNkLGtCQUFrQixFQUNsQixrQkFBa0IsR0FDbkIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFdEU7SUFtQkUsZ0NBQ1ksa0JBQXNDLEVBQ3RDLGVBQWdDLEVBQ2hDLHVCQUFnRCxFQUNoRCxzQkFBOEMsRUFDOUMsb0JBQTBDLEVBQzFDLGNBQThCLEVBQzlCLHFCQUE0QyxFQUM1QyxjQUE4QixFQUM5QixXQUErQjtRQVIvQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDOUMseUJBQW9CLEdBQXBC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akMscURBQW9DOzs7OztJQUNwQyx5REFBd0M7Ozs7O0lBR3RDLG9EQUFnRDs7Ozs7SUFDaEQsaURBQTBDOzs7OztJQUMxQyx5REFBMEQ7Ozs7O0lBQzFELHdEQUF3RDs7Ozs7SUFDeEQsc0RBQW9EOzs7OztJQUNwRCxnREFBd0M7Ozs7O0lBQ3hDLHVEQUFzRDs7Ozs7SUFDdEQsZ0RBQXdDOzs7OztJQUN4Qyw2Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBBZGRyZXNzLFxuICBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgQ2hlY2tvdXRQYXltZW50U2VydmljZSxcbiAgQ2hlY2tvdXRTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIFBheW1lbnREZXRhaWxzLFxuICBSb3V0aW5nU2VydmljZSxcbiAgVHJhbnNsYXRpb25TZXJ2aWNlLFxuICBVc2VyUGF5bWVudFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vbWlzYy9pY29uJztcbmltcG9ydCB7IENoZWNrb3V0Q29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL2NoZWNrb3V0LWNvbmZpZy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcGF5bWVudC1tZXRob2QnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGF5bWVudC1tZXRob2QuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUGF5bWVudE1ldGhvZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFO1xuICBuZXdQYXltZW50Rm9ybU1hbnVhbGx5T3BlbmVkID0gZmFsc2U7XG4gIGV4aXN0aW5nUGF5bWVudE1ldGhvZHMkOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzW10+O1xuICBpc0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBzZWxlY3RlZFBheW1lbnQ6IFBheW1lbnREZXRhaWxzO1xuICBhbGxvd1JvdXRpbmc6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBnZXRQYXltZW50RGV0YWlsc1N1YjogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgZGVsaXZlcnlBZGRyZXNzOiBBZGRyZXNzO1xuICBwcml2YXRlIGNoZWNrb3V0U3RlcFVybE5leHQ6IHN0cmluZztcbiAgcHJpdmF0ZSBjaGVja291dFN0ZXBVcmxQcmV2aW91czogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB1c2VyUGF5bWVudFNlcnZpY2U6IFVzZXJQYXltZW50U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRQYXltZW50U2VydmljZTogQ2hlY2tvdXRQYXltZW50U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0Q29uZmlnU2VydmljZTogQ2hlY2tvdXRDb25maWdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYWxsb3dSb3V0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5pc0xvYWRpbmckID0gdGhpcy51c2VyUGF5bWVudFNlcnZpY2UuZ2V0UGF5bWVudE1ldGhvZHNMb2FkaW5nKCk7XG4gICAgdGhpcy51c2VyUGF5bWVudFNlcnZpY2UubG9hZFBheW1lbnRNZXRob2RzKCk7XG5cbiAgICB0aGlzLmNoZWNrb3V0U3RlcFVybE5leHQgPSB0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZS5nZXROZXh0Q2hlY2tvdXRTdGVwVXJsKFxuICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZVxuICAgICk7XG4gICAgdGhpcy5jaGVja291dFN0ZXBVcmxQcmV2aW91cyA9IHRoaXMuY2hlY2tvdXRDb25maWdTZXJ2aWNlLmdldFByZXZpb3VzQ2hlY2tvdXRTdGVwVXJsKFxuICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZVxuICAgICk7XG5cbiAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlXG4gICAgICAuZ2V0RGVsaXZlcnlBZGRyZXNzKClcbiAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKChhZGRyZXNzOiBBZGRyZXNzKSA9PiB7XG4gICAgICAgIHRoaXMuZGVsaXZlcnlBZGRyZXNzID0gYWRkcmVzcztcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5leGlzdGluZ1BheW1lbnRNZXRob2RzJCA9IHRoaXMudXNlclBheW1lbnRTZXJ2aWNlLmdldFBheW1lbnRNZXRob2RzKCk7XG4gICAgdGhpcy5nZXRQYXltZW50RGV0YWlsc1N1YiA9IHRoaXMuY2hlY2tvdXRQYXltZW50U2VydmljZVxuICAgICAgLmdldFBheW1lbnREZXRhaWxzKClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIocGF5bWVudEluZm8gPT4gcGF5bWVudEluZm8gJiYgISFPYmplY3Qua2V5cyhwYXltZW50SW5mbykubGVuZ3RoKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShwYXltZW50SW5mbyA9PiB7XG4gICAgICAgIGlmICh0aGlzLmFsbG93Um91dGluZykge1xuICAgICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28odGhpcy5jaGVja291dFN0ZXBVcmxOZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXBheW1lbnRJbmZvWydoYXNFcnJvciddKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFBheW1lbnQgPSBwYXltZW50SW5mbztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhwYXltZW50SW5mbykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKCdJbnZhbGlkRmllbGQnKSkge1xuICAgICAgICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdwYXltZW50TWV0aG9kcy5pbnZhbGlkRmllbGQnLFxuICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IGZpZWxkOiBwYXltZW50SW5mb1trZXldIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNsZWFyQ2hlY2tvdXRTdGVwKDMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIGdldENhcmRDb250ZW50KHBheW1lbnQ6IFBheW1lbnREZXRhaWxzKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRDYXJkLmV4cGlyZXMnLCB7XG4gICAgICAgIG1vbnRoOiBwYXltZW50LmV4cGlyeU1vbnRoLFxuICAgICAgICB5ZWFyOiBwYXltZW50LmV4cGlyeVllYXIsXG4gICAgICB9KSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Rm9ybS51c2VUaGlzUGF5bWVudCcpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRDYXJkLmRlZmF1bHRQYXltZW50TWV0aG9kJyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudENhcmQuc2VsZWN0ZWQnKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKFxuICAgICAgICAoW1xuICAgICAgICAgIHRleHRFeHBpcmVzLFxuICAgICAgICAgIHRleHRVc2VUaGlzUGF5bWVudCxcbiAgICAgICAgICB0ZXh0RGVmYXVsdFBheW1lbnRNZXRob2QsXG4gICAgICAgICAgdGV4dFNlbGVjdGVkLFxuICAgICAgICBdKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2FyZDogQ2FyZCA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBwYXltZW50LmRlZmF1bHRQYXltZW50ID8gdGV4dERlZmF1bHRQYXltZW50TWV0aG9kIDogJycsXG4gICAgICAgICAgICB0ZXh0Qm9sZDogcGF5bWVudC5hY2NvdW50SG9sZGVyTmFtZSxcbiAgICAgICAgICAgIHRleHQ6IFtwYXltZW50LmNhcmROdW1iZXIsIHRleHRFeHBpcmVzXSxcbiAgICAgICAgICAgIGltZzogdGhpcy5nZXRDYXJkSWNvbihwYXltZW50LmNhcmRUeXBlLmNvZGUpLFxuICAgICAgICAgICAgYWN0aW9uczogW3sgbmFtZTogdGV4dFVzZVRoaXNQYXltZW50LCBldmVudDogJ3NlbmQnIH1dLFxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkUGF5bWVudCAmJiBwYXltZW50LmRlZmF1bHRQYXltZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkUGF5bWVudCA9IHBheW1lbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkUGF5bWVudCAmJiB0aGlzLnNlbGVjdGVkUGF5bWVudC5pZCA9PT0gcGF5bWVudC5pZCkge1xuICAgICAgICAgICAgY2FyZC5oZWFkZXIgPSB0ZXh0U2VsZWN0ZWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjYXJkO1xuICAgICAgICB9XG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHBheW1lbnRNZXRob2RTZWxlY3RlZChwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHMpIHtcbiAgICB0aGlzLnNlbGVjdGVkUGF5bWVudCA9IHBheW1lbnREZXRhaWxzO1xuICB9XG5cbiAgc2hvd05ld1BheW1lbnRGb3JtKCk6IHZvaWQge1xuICAgIHRoaXMubmV3UGF5bWVudEZvcm1NYW51YWxseU9wZW5lZCA9IHRydWU7XG4gIH1cblxuICBoaWRlTmV3UGF5bWVudEZvcm0oKTogdm9pZCB7XG4gICAgdGhpcy5uZXdQYXltZW50Rm9ybU1hbnVhbGx5T3BlbmVkID0gZmFsc2U7XG4gIH1cblxuICBuZXh0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0UGF5bWVudERldGFpbHMoe1xuICAgICAgcGF5bWVudERldGFpbHM6IHRoaXMuc2VsZWN0ZWRQYXltZW50LFxuICAgICAgaXNOZXdQYXltZW50OiBmYWxzZSxcbiAgICB9KTtcbiAgfVxuXG4gIGJhY2soKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh0aGlzLmNoZWNrb3V0U3RlcFVybFByZXZpb3VzKTtcbiAgfVxuXG4gIHNldFBheW1lbnREZXRhaWxzKHtcbiAgICBwYXltZW50RGV0YWlscyxcbiAgICBiaWxsaW5nQWRkcmVzcyxcbiAgICBpc05ld1BheW1lbnQgPSB0cnVlLFxuICB9OiB7XG4gICAgcGF5bWVudERldGFpbHM6IFBheW1lbnREZXRhaWxzO1xuICAgIGJpbGxpbmdBZGRyZXNzPzogQWRkcmVzcztcbiAgICBpc05ld1BheW1lbnQ/OiBib29sZWFuO1xuICB9KTogdm9pZCB7XG4gICAgY29uc3QgZGV0YWlsczogUGF5bWVudERldGFpbHMgPSB7IC4uLnBheW1lbnREZXRhaWxzIH07XG4gICAgZGV0YWlscy5iaWxsaW5nQWRkcmVzcyA9IGJpbGxpbmdBZGRyZXNzIHx8IHRoaXMuZGVsaXZlcnlBZGRyZXNzO1xuXG4gICAgaWYgKGlzTmV3UGF5bWVudCkge1xuICAgICAgdGhpcy5jaGVja291dFBheW1lbnRTZXJ2aWNlLmNyZWF0ZVBheW1lbnREZXRhaWxzKGRldGFpbHMpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZFBheW1lbnQgJiYgdGhpcy5zZWxlY3RlZFBheW1lbnQuaWQgPT09IGRldGFpbHMuaWQpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRQYXltZW50U2VydmljZS5zZXRQYXltZW50RGV0YWlscyhkZXRhaWxzKTtcbiAgICB9XG5cbiAgICB0aGlzLmFsbG93Um91dGluZyA9IHRydWU7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5nZXRQYXltZW50RGV0YWlsc1N1Yikge1xuICAgICAgdGhpcy5nZXRQYXltZW50RGV0YWlsc1N1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDYXJkSWNvbihjb2RlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGxldCBjY0ljb246IHN0cmluZztcbiAgICBpZiAoY29kZSA9PT0gJ3Zpc2EnKSB7XG4gICAgICBjY0ljb24gPSB0aGlzLmljb25UeXBlcy5WSVNBO1xuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gJ21hc3RlcicgfHwgY29kZSA9PT0gJ21hc3RlcmNhcmRfZXVyb2NhcmQnKSB7XG4gICAgICBjY0ljb24gPSB0aGlzLmljb25UeXBlcy5NQVNURVJfQ0FSRDtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09ICdkaW5lcnMnKSB7XG4gICAgICBjY0ljb24gPSB0aGlzLmljb25UeXBlcy5ESU5FUlNfQ0xVQjtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09ICdhbWV4Jykge1xuICAgICAgY2NJY29uID0gdGhpcy5pY29uVHlwZXMuQU1FWDtcbiAgICB9IGVsc2Uge1xuICAgICAgY2NJY29uID0gdGhpcy5pY29uVHlwZXMuQ1JFRElUX0NBUkQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNjSWNvbjtcbiAgfVxufVxuIl19