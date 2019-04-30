/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, } from '@angular/core';
import { CheckoutService, } from '@spartacus/core';
var OrderConfirmationComponent = /** @class */ (function () {
    function OrderConfirmationComponent(checkoutService) {
        this.checkoutService = checkoutService;
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
        return {
            title: 'Ship To',
            textBold: deliveryAddress.firstName + " " + deliveryAddress.lastName,
            text: [
                deliveryAddress.line1,
                deliveryAddress.line2,
                deliveryAddress.town + ", " + deliveryAddress.country.isocode + ", " + deliveryAddress.postalCode,
                deliveryAddress.phone,
            ],
        };
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
        return {
            title: 'Shipping Method',
            textBold: deliveryMode.name,
            text: [deliveryMode.description],
        };
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
        return {
            title: 'Bill To',
            textBold: billingAddress.firstName + " " + billingAddress.lastName,
            text: [
                billingAddress.line1,
                billingAddress.line2,
                billingAddress.town + ", " + billingAddress.country.isocode + ", " + billingAddress.postalCode,
                billingAddress.phone,
            ],
        };
    };
    /**
     * @param {?} paymentInfo
     * @return {?}
     */
    OrderConfirmationComponent.prototype.getPaymentInfoCardContent = /**
     * @param {?} paymentInfo
     * @return {?}
     */
    function (paymentInfo) {
        return {
            title: 'Payment',
            textBold: paymentInfo.accountHolderName,
            text: [
                paymentInfo.cardNumber,
                "Expires: " + paymentInfo.expiryMonth + " / " + paymentInfo.expiryYear,
            ],
        };
    };
    OrderConfirmationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-order-confirmation',
                    template: "<div class=\"cx-page\" *ngIf=\"(order$ | async) as order\">\n  <header class=\"cx-page__header\">\n    <h1 class=\"cx-page__title\">\n      {{ 'checkoutOrderConfirmation.confirmationOfOrder' | cxTranslate }}\n      {{ order.code }}\n    </h1>\n  </header>\n\n  <div class=\"cx-order-confirmation\">\n    <div class=\"cx-order-confirmation-message\">\n      <h2>{{ 'checkoutOrderConfirmation.thankYou' | cxTranslate }}</h2>\n      <p>\n        {{\n          'checkoutOrderConfirmation.invoiceHasBeenSentByEmail' | cxTranslate\n        }}\n      </p>\n      <!-- <a href=\"#\" class=\"btn-link\">Print Page</a> -->\n    </div>\n\n    <cx-add-to-home-screen-banner></cx-add-to-home-screen-banner>\n\n    <div class=\"cx-order-review-summary\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm-12 col-md-4 col-lg-3\">\n            <div class=\"summary-card\">\n              <cx-card\n                [content]=\"getAddressCardContent(order.deliveryAddress)\"\n              ></cx-card>\n            </div>\n          </div>\n\n          <div class=\"col-sm-12 col-md-4 col-lg-3\">\n            <div class=\"summary-card\">\n              <cx-card\n                [content]=\"\n                  getBillingAddressCardContent(order.paymentInfo.billingAddress)\n                \"\n              ></cx-card>\n            </div>\n          </div>\n\n          <div class=\"col-sm-12 col-md-4 col-lg-3\">\n            <div class=\"summary-card\">\n              <cx-card\n                [content]=\"getDeliveryModeCardContent(order.deliveryMode)\"\n              ></cx-card>\n            </div>\n          </div>\n\n          <div class=\"col-sm-12 col-md-4 col-lg-3\">\n            <div class=\"summary-card\">\n              <cx-card\n                [content]=\"getPaymentInfoCardContent(order.paymentInfo)\"\n              ></cx-card>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"cx-order-items container\">\n      <h4 class=\"cx-order-items-header\">\n        {{ 'checkoutOrderConfirmation.orderItems' | cxTranslate }}\n      </h4>\n      <cx-cart-item-list\n        [items]=\"order.entries\"\n        [isReadOnly]=\"true\"\n      ></cx-cart-item-list>\n    </div>\n\n    <div class=\"cx-order-summary container\">\n      <div class=\"row justify-content-end\">\n        <div class=\"col-sm-12 col-md-6 col-lg-5 col-xl-4\">\n          <cx-order-summary [cart]=\"order\"></cx-order-summary>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    OrderConfirmationComponent.ctorParameters = function () { return [
        { type: CheckoutService }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jaGVja291dC9jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi9vcmRlci1jb25maXJtYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULHVCQUF1QixHQUd4QixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBRUwsZUFBZSxHQUloQixNQUFNLGlCQUFpQixDQUFDO0FBTXpCO0lBUUUsb0NBQXNCLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFHLENBQUM7Ozs7SUFFMUQsNkNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFFRCxnREFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCwwREFBcUI7Ozs7SUFBckIsVUFBc0IsZUFBd0I7UUFDNUMsT0FBTztZQUNMLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFFBQVEsRUFBSyxlQUFlLENBQUMsU0FBUyxTQUFJLGVBQWUsQ0FBQyxRQUFVO1lBQ3BFLElBQUksRUFBRTtnQkFDSixlQUFlLENBQUMsS0FBSztnQkFDckIsZUFBZSxDQUFDLEtBQUs7Z0JBQ2xCLGVBQWUsQ0FBQyxJQUFJLFVBQUssZUFBZSxDQUFDLE9BQU8sQ0FBQyxPQUFPLFVBQ3pELGVBQWUsQ0FBQyxVQUNoQjtnQkFDRixlQUFlLENBQUMsS0FBSzthQUN0QjtTQUNGLENBQUM7SUFDSixDQUFDOzs7OztJQUVELCtEQUEwQjs7OztJQUExQixVQUEyQixZQUEwQjtRQUNuRCxPQUFPO1lBQ0wsS0FBSyxFQUFFLGlCQUFpQjtZQUN4QixRQUFRLEVBQUUsWUFBWSxDQUFDLElBQUk7WUFDM0IsSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQztTQUNqQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxpRUFBNEI7Ozs7SUFBNUIsVUFBNkIsY0FBdUI7UUFDbEQsT0FBTztZQUNMLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFFBQVEsRUFBSyxjQUFjLENBQUMsU0FBUyxTQUFJLGNBQWMsQ0FBQyxRQUFVO1lBQ2xFLElBQUksRUFBRTtnQkFDSixjQUFjLENBQUMsS0FBSztnQkFDcEIsY0FBYyxDQUFDLEtBQUs7Z0JBQ2pCLGNBQWMsQ0FBQyxJQUFJLFVBQUssY0FBYyxDQUFDLE9BQU8sQ0FBQyxPQUFPLFVBQ3ZELGNBQWMsQ0FBQyxVQUNmO2dCQUNGLGNBQWMsQ0FBQyxLQUFLO2FBQ3JCO1NBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsOERBQXlCOzs7O0lBQXpCLFVBQTBCLFdBQTJCO1FBQ25ELE9BQU87WUFDTCxLQUFLLEVBQUUsU0FBUztZQUNoQixRQUFRLEVBQUUsV0FBVyxDQUFDLGlCQUFpQjtZQUN2QyxJQUFJLEVBQUU7Z0JBQ0osV0FBVyxDQUFDLFVBQVU7Z0JBQ3RCLGNBQVksV0FBVyxDQUFDLFdBQVcsV0FBTSxXQUFXLENBQUMsVUFBWTthQUNsRTtTQUNGLENBQUM7SUFDSixDQUFDOztnQkFqRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLGlnRkFBa0Q7b0JBQ2xELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFkQyxlQUFlOztJQTRFakIsaUNBQUM7Q0FBQSxBQWxFRCxJQWtFQztTQTdEWSwwQkFBMEI7OztJQUNyQyw0Q0FBMEI7Ozs7O0lBRWQscURBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBPcmRlcixcbiAgQ2hlY2tvdXRTZXJ2aWNlLFxuICBBZGRyZXNzLFxuICBQYXltZW50RGV0YWlscyxcbiAgRGVsaXZlcnlNb2RlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi8uLi8uLi91aS9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1vcmRlci1jb25maXJtYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vb3JkZXItY29uZmlybWF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyQ29uZmlybWF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBvcmRlciQ6IE9ic2VydmFibGU8T3JkZXI+O1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjaGVja291dFNlcnZpY2U6IENoZWNrb3V0U2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm9yZGVyJCA9IHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmdldE9yZGVyRGV0YWlscygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5jaGVja291dFNlcnZpY2UuY2xlYXJDaGVja291dERhdGEoKTtcbiAgfVxuXG4gIGdldEFkZHJlc3NDYXJkQ29udGVudChkZWxpdmVyeUFkZHJlc3M6IEFkZHJlc3MpOiBDYXJkIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICdTaGlwIFRvJyxcbiAgICAgIHRleHRCb2xkOiBgJHtkZWxpdmVyeUFkZHJlc3MuZmlyc3ROYW1lfSAke2RlbGl2ZXJ5QWRkcmVzcy5sYXN0TmFtZX1gLFxuICAgICAgdGV4dDogW1xuICAgICAgICBkZWxpdmVyeUFkZHJlc3MubGluZTEsXG4gICAgICAgIGRlbGl2ZXJ5QWRkcmVzcy5saW5lMixcbiAgICAgICAgYCR7ZGVsaXZlcnlBZGRyZXNzLnRvd259LCAke2RlbGl2ZXJ5QWRkcmVzcy5jb3VudHJ5Lmlzb2NvZGV9LCAke1xuICAgICAgICAgIGRlbGl2ZXJ5QWRkcmVzcy5wb3N0YWxDb2RlXG4gICAgICAgIH1gLFxuICAgICAgICBkZWxpdmVyeUFkZHJlc3MucGhvbmUsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICBnZXREZWxpdmVyeU1vZGVDYXJkQ29udGVudChkZWxpdmVyeU1vZGU6IERlbGl2ZXJ5TW9kZSk6IENhcmQge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ1NoaXBwaW5nIE1ldGhvZCcsXG4gICAgICB0ZXh0Qm9sZDogZGVsaXZlcnlNb2RlLm5hbWUsXG4gICAgICB0ZXh0OiBbZGVsaXZlcnlNb2RlLmRlc2NyaXB0aW9uXSxcbiAgICB9O1xuICB9XG5cbiAgZ2V0QmlsbGluZ0FkZHJlc3NDYXJkQ29udGVudChiaWxsaW5nQWRkcmVzczogQWRkcmVzcyk6IENhcmQge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ0JpbGwgVG8nLFxuICAgICAgdGV4dEJvbGQ6IGAke2JpbGxpbmdBZGRyZXNzLmZpcnN0TmFtZX0gJHtiaWxsaW5nQWRkcmVzcy5sYXN0TmFtZX1gLFxuICAgICAgdGV4dDogW1xuICAgICAgICBiaWxsaW5nQWRkcmVzcy5saW5lMSxcbiAgICAgICAgYmlsbGluZ0FkZHJlc3MubGluZTIsXG4gICAgICAgIGAke2JpbGxpbmdBZGRyZXNzLnRvd259LCAke2JpbGxpbmdBZGRyZXNzLmNvdW50cnkuaXNvY29kZX0sICR7XG4gICAgICAgICAgYmlsbGluZ0FkZHJlc3MucG9zdGFsQ29kZVxuICAgICAgICB9YCxcbiAgICAgICAgYmlsbGluZ0FkZHJlc3MucGhvbmUsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICBnZXRQYXltZW50SW5mb0NhcmRDb250ZW50KHBheW1lbnRJbmZvOiBQYXltZW50RGV0YWlscyk6IENhcmQge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ1BheW1lbnQnLFxuICAgICAgdGV4dEJvbGQ6IHBheW1lbnRJbmZvLmFjY291bnRIb2xkZXJOYW1lLFxuICAgICAgdGV4dDogW1xuICAgICAgICBwYXltZW50SW5mby5jYXJkTnVtYmVyLFxuICAgICAgICBgRXhwaXJlczogJHtwYXltZW50SW5mby5leHBpcnlNb250aH0gLyAke3BheW1lbnRJbmZvLmV4cGlyeVllYXJ9YCxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19