/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { OrderDetailsService } from '../order-details.service';
var OrderDetailShippingComponent = /** @class */ (function () {
    function OrderDetailShippingComponent(orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
    }
    /**
     * @return {?}
     */
    OrderDetailShippingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.order$ = this.orderDetailsService.getOrderDetails();
    };
    /**
     * @param {?} address
     * @return {?}
     */
    OrderDetailShippingComponent.prototype.getAddressCardContent = /**
     * @param {?} address
     * @return {?}
     */
    function (address) {
        return {
            title: 'Ship to',
            textBold: address.firstName + " " + address.lastName,
            text: [
                address.line1,
                address.line2,
                address.town + ", " + address.country.isocode + ", " + address.postalCode,
                address.phone,
            ],
        };
    };
    /**
     * @param {?} billingAddress
     * @return {?}
     */
    OrderDetailShippingComponent.prototype.getBillingAddressCardContent = /**
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
     * @param {?} payment
     * @return {?}
     */
    OrderDetailShippingComponent.prototype.getPaymentCardContent = /**
     * @param {?} payment
     * @return {?}
     */
    function (payment) {
        return {
            title: 'Payment',
            textBold: payment.accountHolderName,
            text: [
                payment.cardType.name,
                payment.cardNumber,
                "Expires: " + payment.expiryMonth + " / " + payment.expiryYear,
            ],
        };
    };
    /**
     * @param {?} shipping
     * @return {?}
     */
    OrderDetailShippingComponent.prototype.getShippingMethodCardContent = /**
     * @param {?} shipping
     * @return {?}
     */
    function (shipping) {
        return {
            title: 'Shipping Method',
            textBold: shipping.name,
            text: [shipping.description],
        };
    };
    OrderDetailShippingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-order-details-shipping',
                    template: "<ng-container *ngIf=\"(order$ | async) as order\">\n  <div class=\"cx-account-summary row\">\n    <div\n      *ngIf=\"order.deliveryAddress\"\n      class=\"cx-summary-card col-sm-12 col-md-4\"\n    >\n      <cx-card\n        [content]=\"getAddressCardContent(order.deliveryAddress)\"\n      ></cx-card>\n    </div>\n    <div\n      *ngIf=\"order.paymentInfo?.billingAddress\"\n      class=\"cx-summary-card col-sm-12 col-md-4\"\n    >\n      <cx-card\n        [content]=\"\n          getBillingAddressCardContent(order.paymentInfo.billingAddress)\n        \"\n      ></cx-card>\n    </div>\n    <div *ngIf=\"order.paymentInfo\" class=\"cx-summary-card col-sm-12 col-md-4\">\n      <cx-card [content]=\"getPaymentCardContent(order.paymentInfo)\"></cx-card>\n    </div>\n    <div *ngIf=\"order.deliveryMode\" class=\"cx-summary-card col-sm-12 col-md-4\">\n      <cx-card\n        [content]=\"getShippingMethodCardContent(order.deliveryMode)\"\n      ></cx-card>\n    </div>\n  </div>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    OrderDetailShippingComponent.ctorParameters = function () { return [
        { type: OrderDetailsService }
    ]; };
    return OrderDetailShippingComponent;
}());
export { OrderDetailShippingComponent };
if (false) {
    /** @type {?} */
    OrderDetailShippingComponent.prototype.order$;
    /**
     * @type {?}
     * @private
     */
    OrderDetailShippingComponent.prototype.orderDetailsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlsLXNoaXBwaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbC1zaGlwcGluZy9vcmRlci1kZXRhaWwtc2hpcHBpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBSWxELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRS9EO0lBS0Usc0NBQW9CLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBQUcsQ0FBQzs7OztJQUloRSwrQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzRCxDQUFDOzs7OztJQUVELDREQUFxQjs7OztJQUFyQixVQUFzQixPQUFnQjtRQUNwQyxPQUFPO1lBQ0wsS0FBSyxFQUFFLFNBQVM7WUFDaEIsUUFBUSxFQUFLLE9BQU8sQ0FBQyxTQUFTLFNBQUksT0FBTyxDQUFDLFFBQVU7WUFDcEQsSUFBSSxFQUFFO2dCQUNKLE9BQU8sQ0FBQyxLQUFLO2dCQUNiLE9BQU8sQ0FBQyxLQUFLO2dCQUNWLE9BQU8sQ0FBQyxJQUFJLFVBQUssT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLFVBQUssT0FBTyxDQUFDLFVBQVk7Z0JBQ3BFLE9BQU8sQ0FBQyxLQUFLO2FBQ2Q7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxtRUFBNEI7Ozs7SUFBNUIsVUFBNkIsY0FBdUI7UUFDbEQsT0FBTztZQUNMLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFFBQVEsRUFBSyxjQUFjLENBQUMsU0FBUyxTQUFJLGNBQWMsQ0FBQyxRQUFVO1lBQ2xFLElBQUksRUFBRTtnQkFDSixjQUFjLENBQUMsS0FBSztnQkFDcEIsY0FBYyxDQUFDLEtBQUs7Z0JBQ2pCLGNBQWMsQ0FBQyxJQUFJLFVBQUssY0FBYyxDQUFDLE9BQU8sQ0FBQyxPQUFPLFVBQ3ZELGNBQWMsQ0FBQyxVQUNmO2dCQUNGLGNBQWMsQ0FBQyxLQUFLO2FBQ3JCO1NBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsNERBQXFCOzs7O0lBQXJCLFVBQXNCLE9BQXVCO1FBQzNDLE9BQU87WUFDTCxLQUFLLEVBQUUsU0FBUztZQUNoQixRQUFRLEVBQUUsT0FBTyxDQUFDLGlCQUFpQjtZQUNuQyxJQUFJLEVBQUU7Z0JBQ0osT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJO2dCQUNyQixPQUFPLENBQUMsVUFBVTtnQkFDbEIsY0FBWSxPQUFPLENBQUMsV0FBVyxXQUFNLE9BQU8sQ0FBQyxVQUFZO2FBQzFEO1NBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsbUVBQTRCOzs7O0lBQTVCLFVBQTZCLFFBQXNCO1FBQ2pELE9BQU87WUFDTCxLQUFLLEVBQUUsaUJBQWlCO1lBQ3hCLFFBQVEsRUFBRSxRQUFRLENBQUMsSUFBSTtZQUN2QixJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO1NBQzdCLENBQUM7SUFDSixDQUFDOztnQkEzREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLHEvQkFBcUQ7aUJBQ3REOzs7O2dCQUxRLG1CQUFtQjs7SUE4RDVCLG1DQUFDO0NBQUEsQUE1REQsSUE0REM7U0F4RFksNEJBQTRCOzs7SUFHdkMsOENBQTBCOzs7OztJQUZkLDJEQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBZGRyZXNzLCBEZWxpdmVyeU1vZGUsIE9yZGVyLCBQYXltZW50RGV0YWlscyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlckRldGFpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vb3JkZXItZGV0YWlscy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtb3JkZXItZGV0YWlscy1zaGlwcGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9vcmRlci1kZXRhaWwtc2hpcHBpbmcuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckRldGFpbFNoaXBwaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvcmRlckRldGFpbHNTZXJ2aWNlOiBPcmRlckRldGFpbHNTZXJ2aWNlKSB7fVxuXG4gIG9yZGVyJDogT2JzZXJ2YWJsZTxPcmRlcj47XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vcmRlciQgPSB0aGlzLm9yZGVyRGV0YWlsc1NlcnZpY2UuZ2V0T3JkZXJEZXRhaWxzKCk7XG4gIH1cblxuICBnZXRBZGRyZXNzQ2FyZENvbnRlbnQoYWRkcmVzczogQWRkcmVzcyk6IENhcmQge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ1NoaXAgdG8nLFxuICAgICAgdGV4dEJvbGQ6IGAke2FkZHJlc3MuZmlyc3ROYW1lfSAke2FkZHJlc3MubGFzdE5hbWV9YCxcbiAgICAgIHRleHQ6IFtcbiAgICAgICAgYWRkcmVzcy5saW5lMSxcbiAgICAgICAgYWRkcmVzcy5saW5lMixcbiAgICAgICAgYCR7YWRkcmVzcy50b3dufSwgJHthZGRyZXNzLmNvdW50cnkuaXNvY29kZX0sICR7YWRkcmVzcy5wb3N0YWxDb2RlfWAsXG4gICAgICAgIGFkZHJlc3MucGhvbmUsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICBnZXRCaWxsaW5nQWRkcmVzc0NhcmRDb250ZW50KGJpbGxpbmdBZGRyZXNzOiBBZGRyZXNzKTogQ2FyZCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAnQmlsbCBUbycsXG4gICAgICB0ZXh0Qm9sZDogYCR7YmlsbGluZ0FkZHJlc3MuZmlyc3ROYW1lfSAke2JpbGxpbmdBZGRyZXNzLmxhc3ROYW1lfWAsXG4gICAgICB0ZXh0OiBbXG4gICAgICAgIGJpbGxpbmdBZGRyZXNzLmxpbmUxLFxuICAgICAgICBiaWxsaW5nQWRkcmVzcy5saW5lMixcbiAgICAgICAgYCR7YmlsbGluZ0FkZHJlc3MudG93bn0sICR7YmlsbGluZ0FkZHJlc3MuY291bnRyeS5pc29jb2RlfSwgJHtcbiAgICAgICAgICBiaWxsaW5nQWRkcmVzcy5wb3N0YWxDb2RlXG4gICAgICAgIH1gLFxuICAgICAgICBiaWxsaW5nQWRkcmVzcy5waG9uZSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIGdldFBheW1lbnRDYXJkQ29udGVudChwYXltZW50OiBQYXltZW50RGV0YWlscyk6IENhcmQge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ1BheW1lbnQnLFxuICAgICAgdGV4dEJvbGQ6IHBheW1lbnQuYWNjb3VudEhvbGRlck5hbWUsXG4gICAgICB0ZXh0OiBbXG4gICAgICAgIHBheW1lbnQuY2FyZFR5cGUubmFtZSxcbiAgICAgICAgcGF5bWVudC5jYXJkTnVtYmVyLFxuICAgICAgICBgRXhwaXJlczogJHtwYXltZW50LmV4cGlyeU1vbnRofSAvICR7cGF5bWVudC5leHBpcnlZZWFyfWAsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICBnZXRTaGlwcGluZ01ldGhvZENhcmRDb250ZW50KHNoaXBwaW5nOiBEZWxpdmVyeU1vZGUpOiBDYXJkIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICdTaGlwcGluZyBNZXRob2QnLFxuICAgICAgdGV4dEJvbGQ6IHNoaXBwaW5nLm5hbWUsXG4gICAgICB0ZXh0OiBbc2hpcHBpbmcuZGVzY3JpcHRpb25dLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==