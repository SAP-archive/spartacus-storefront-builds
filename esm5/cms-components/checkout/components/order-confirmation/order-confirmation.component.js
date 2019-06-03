/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { CheckoutService, TranslationService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
var OrderConfirmationComponent = /** @class */ (function () {
    function OrderConfirmationComponent(checkoutService, translation) {
        this.checkoutService = checkoutService;
        this.translation = translation;
    }
    /**
     * @return {?}
     */
    OrderConfirmationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.order$ = this.checkoutService.getOrderDetails();
    };
    /**
     * @return {?}
     */
    OrderConfirmationComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.checkoutService.clearCheckoutData();
    };
    /**
     * @param {?} deliveryAddress
     * @return {?}
     */
    OrderConfirmationComponent.prototype.getAddressCardContent = /**
     * @param {?} deliveryAddress
     * @return {?}
     */
    function (deliveryAddress) {
        return combineLatest([
            this.translation.translate('addressCard.shipTo'),
        ]).pipe(map(function (_a) {
            var _b = tslib_1.__read(_a, 1), textTitle = _b[0];
            return {
                title: textTitle,
                textBold: deliveryAddress.firstName + " " + deliveryAddress.lastName,
                text: [
                    deliveryAddress.line1,
                    deliveryAddress.line2,
                    deliveryAddress.town + ", " + deliveryAddress.country.isocode + ", " + deliveryAddress.postalCode,
                    deliveryAddress.phone,
                ],
            };
        }));
    };
    /**
     * @param {?} deliveryMode
     * @return {?}
     */
    OrderConfirmationComponent.prototype.getDeliveryModeCardContent = /**
     * @param {?} deliveryMode
     * @return {?}
     */
    function (deliveryMode) {
        return combineLatest([
            this.translation.translate('checkoutShipping.shippingMethod'),
        ]).pipe(map(function (_a) {
            var _b = tslib_1.__read(_a, 1), textTitle = _b[0];
            return {
                title: textTitle,
                textBold: deliveryMode.name,
                text: [deliveryMode.description],
            };
        }));
    };
    /**
     * @param {?} billingAddress
     * @return {?}
     */
    OrderConfirmationComponent.prototype.getBillingAddressCardContent = /**
     * @param {?} billingAddress
     * @return {?}
     */
    function (billingAddress) {
        return combineLatest([
            this.translation.translate('addressCard.billTo'),
        ]).pipe(map(function (_a) {
            var _b = tslib_1.__read(_a, 1), textTitle = _b[0];
            return {
                title: textTitle,
                textBold: billingAddress.firstName + " " + billingAddress.lastName,
                text: [
                    billingAddress.line1,
                    billingAddress.line2,
                    billingAddress.town + ", " + billingAddress.country.isocode + ", " + billingAddress.postalCode,
                    billingAddress.phone,
                ],
            };
        }));
    };
    /**
     * @param {?} payment
     * @return {?}
     */
    OrderConfirmationComponent.prototype.getPaymentInfoCardContent = /**
     * @param {?} payment
     * @return {?}
     */
    function (payment) {
        return combineLatest([
            this.translation.translate('paymentForm.payment'),
            this.translation.translate('paymentCard.expires', {
                month: payment.expiryMonth,
                year: payment.expiryYear,
            }),
        ]).pipe(map(function (_a) {
            var _b = tslib_1.__read(_a, 2), textTitle = _b[0], textExpires = _b[1];
            return {
                title: textTitle,
                textBold: payment.accountHolderName,
                text: [payment.cardNumber, textExpires],
            };
        }));
    };
    OrderConfirmationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-order-confirmation',
                    template: "<div class=\"cx-page\" *ngIf=\"(order$ | async) as order\">\n  <header class=\"cx-page-header\">\n    <h1 class=\"cx-page-title\">\n      {{ 'checkoutOrderConfirmation.confirmationOfOrder' | cxTranslate }}\n      {{ order.code }}\n    </h1>\n  </header>\n\n  <div class=\"cx-order-confirmation\">\n    <div class=\"cx-order-confirmation-message\">\n      <h2>{{ 'checkoutOrderConfirmation.thankYou' | cxTranslate }}</h2>\n      <p>\n        {{\n          'checkoutOrderConfirmation.invoiceHasBeenSentByEmail' | cxTranslate\n        }}\n      </p>\n      <!-- <a href=\"#\" class=\"btn-link\">Print Page</a> -->\n    </div>\n\n    <cx-add-to-home-screen-banner></cx-add-to-home-screen-banner>\n\n    <div class=\"cx-order-review-summary\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm-12 col-md-4 col-lg-3\">\n            <div class=\"summary-card\">\n              <cx-card\n                [content]=\"getAddressCardContent(order.deliveryAddress) | async\"\n              ></cx-card>\n            </div>\n          </div>\n\n          <div class=\"col-sm-12 col-md-4 col-lg-3\">\n            <div class=\"summary-card\">\n              <cx-card\n                [content]=\"\n                  getBillingAddressCardContent(\n                    order.paymentInfo.billingAddress\n                  ) | async\n                \"\n              ></cx-card>\n            </div>\n          </div>\n\n          <div class=\"col-sm-12 col-md-4 col-lg-3\">\n            <div class=\"summary-card\">\n              <cx-card\n                [content]=\"\n                  getDeliveryModeCardContent(order.deliveryMode) | async\n                \"\n              ></cx-card>\n            </div>\n          </div>\n\n          <div class=\"col-sm-12 col-md-4 col-lg-3\">\n            <div class=\"summary-card\">\n              <cx-card\n                [content]=\"getPaymentInfoCardContent(order.paymentInfo) | async\"\n              ></cx-card>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"cx-order-items container\">\n      <h4 class=\"cx-order-items-header\">\n        {{ 'checkoutOrderConfirmation.orderItems' | cxTranslate }}\n      </h4>\n      <cx-cart-item-list\n        [items]=\"order.entries\"\n        [isReadOnly]=\"true\"\n      ></cx-cart-item-list>\n    </div>\n\n    <div class=\"cx-order-summary container\">\n      <div class=\"row justify-content-end\">\n        <div class=\"col-sm-12 col-md-6 col-lg-5 col-xl-4\">\n          <cx-order-summary [cart]=\"order\"></cx-order-summary>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    OrderConfirmationComponent.ctorParameters = function () { return [
        { type: CheckoutService },
        { type: TranslationService }
    ]; };
    return OrderConfirmationComponent;
}());
export { OrderConfirmationComponent };
if (false) {
    /** @type {?} */
    OrderConfirmationComponent.prototype.order$;
    /**
     * @type {?}
     * @protected
     */
    OrderConfirmationComponent.prototype.checkoutService;
    /**
     * @type {?}
     * @private
     */
    OrderConfirmationComponent.prototype.translation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NoZWNrb3V0L2NvbXBvbmVudHMvb3JkZXItY29uZmlybWF0aW9uL29yZGVyLWNvbmZpcm1hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsR0FHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBRUwsZUFBZSxFQUlmLGtCQUFrQixHQUNuQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDO0lBUUUsb0NBQ1ksZUFBZ0MsRUFDbEMsV0FBK0I7UUFEN0Isb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2xDLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtJQUN0QyxDQUFDOzs7O0lBRUosNkNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFFRCxnREFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCwwREFBcUI7Ozs7SUFBckIsVUFBc0IsZUFBd0I7UUFDNUMsT0FBTyxhQUFhLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUM7U0FDakQsQ0FBQyxDQUFDLElBQUksQ0FDTCxHQUFHLENBQUMsVUFBQyxFQUFXO2dCQUFYLDBCQUFXLEVBQVYsaUJBQVM7WUFDYixPQUFPO2dCQUNMLEtBQUssRUFBRSxTQUFTO2dCQUNoQixR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ZW50LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBZGRyZXNzLFxuICBDaGVja291dFNlcnZpY2UsXG4gIERlbGl2ZXJ5TW9kZSxcbiAgT3JkZXIsXG4gIFBheW1lbnREZXRhaWxzLFxuICBUcmFuc2xhdGlvblNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW9yZGVyLWNvbmZpcm1hdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9vcmRlci1jb25maXJtYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJDb25maXJtYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIG9yZGVyJDogT2JzZXJ2YWJsZTxPcmRlcj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U2VydmljZTogQ2hlY2tvdXRTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vcmRlciQgPSB0aGlzLmNoZWNrb3V0U2VydmljZS5nZXRPcmRlckRldGFpbHMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNsZWFyQ2hlY2tvdXREYXRhKCk7XG4gIH1cblxuICBnZXRBZGRyZXNzQ2FyZENvbnRlbnQoZGVsaXZlcnlBZGRyZXNzOiBBZGRyZXNzKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2FkZHJlc3NDYXJkLnNoaXBUbycpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFt0ZXh0VGl0bGVdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgICB0ZXh0Qm9sZDogYCR7ZGVsaXZlcnlBZGRyZXNzLmZpcnN0TmFtZX0gJHtkZWxpdmVyeUFkZHJlc3MubGFzdE5hbWV9YCxcbiAgICAgICAgICB0ZXh0OiBbXG4gICAgICAgICAgICBkZWxpdmVyeUFkZHJlc3MubGluZTEsXG4gICAgICAgICAgICBkZWxpdmVyeUFkZHJlc3MubGluZTIsXG4gICAgICAgICAgICBgJHtkZWxpdmVyeUFkZHJlc3MudG93bn0sICR7ZGVsaXZlcnlBZGRyZXNzLmNvdW50cnkuaXNvY29kZX0sICR7XG4gICAgICAgICAgICAgIGRlbGl2ZXJ5QWRkcmVzcy5wb3N0YWxDb2RlXG4gICAgICAgICAgICB9YCxcbiAgICAgICAgICAgIGRlbGl2ZXJ5QWRkcmVzcy5waG9uZSxcbiAgICAgICAgICBdLFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0RGVsaXZlcnlNb2RlQ2FyZENvbnRlbnQoZGVsaXZlcnlNb2RlOiBEZWxpdmVyeU1vZGUpOiBPYnNlcnZhYmxlPENhcmQ+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY2hlY2tvdXRTaGlwcGluZy5zaGlwcGluZ01ldGhvZCcpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFt0ZXh0VGl0bGVdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgICB0ZXh0Qm9sZDogZGVsaXZlcnlNb2RlLm5hbWUsXG4gICAgICAgICAgdGV4dDogW2RlbGl2ZXJ5TW9kZS5kZXNjcmlwdGlvbl0sXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRCaWxsaW5nQWRkcmVzc0NhcmRDb250ZW50KGJpbGxpbmdBZGRyZXNzOiBBZGRyZXNzKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2FkZHJlc3NDYXJkLmJpbGxUbycpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFt0ZXh0VGl0bGVdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgICB0ZXh0Qm9sZDogYCR7YmlsbGluZ0FkZHJlc3MuZmlyc3ROYW1lfSAke2JpbGxpbmdBZGRyZXNzLmxhc3ROYW1lfWAsXG4gICAgICAgICAgdGV4dDogW1xuICAgICAgICAgICAgYmlsbGluZ0FkZHJlc3MubGluZTEsXG4gICAgICAgICAgICBiaWxsaW5nQWRkcmVzcy5saW5lMixcbiAgICAgICAgICAgIGAke2JpbGxpbmdBZGRyZXNzLnRvd259LCAke2JpbGxpbmdBZGRyZXNzLmNvdW50cnkuaXNvY29kZX0sICR7XG4gICAgICAgICAgICAgIGJpbGxpbmdBZGRyZXNzLnBvc3RhbENvZGVcbiAgICAgICAgICAgIH1gLFxuICAgICAgICAgICAgYmlsbGluZ0FkZHJlc3MucGhvbmUsXG4gICAgICAgICAgXSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldFBheW1lbnRJbmZvQ2FyZENvbnRlbnQocGF5bWVudDogUGF5bWVudERldGFpbHMpOiBPYnNlcnZhYmxlPENhcmQ+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudEZvcm0ucGF5bWVudCcpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRDYXJkLmV4cGlyZXMnLCB7XG4gICAgICAgIG1vbnRoOiBwYXltZW50LmV4cGlyeU1vbnRoLFxuICAgICAgICB5ZWFyOiBwYXltZW50LmV4cGlyeVllYXIsXG4gICAgICB9KSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKChbdGV4dFRpdGxlLCB0ZXh0RXhwaXJlc10pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0aXRsZTogdGV4dFRpdGxlLFxuICAgICAgICAgIHRleHRCb2xkOiBwYXltZW50LmFjY291bnRIb2xkZXJOYW1lLFxuICAgICAgICAgIHRleHQ6IFtwYXltZW50LmNhcmROdW1iZXIsIHRleHRFeHBpcmVzXSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19