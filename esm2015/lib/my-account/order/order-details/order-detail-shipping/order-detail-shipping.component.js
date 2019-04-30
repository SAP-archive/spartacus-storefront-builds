/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { OrderDetailsService } from '../order-details.service';
export class OrderDetailShippingComponent {
    /**
     * @param {?} orderDetailsService
     */
    constructor(orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.order$ = this.orderDetailsService.getOrderDetails();
    }
    /**
     * @param {?} address
     * @return {?}
     */
    getAddressCardContent(address) {
        return {
            title: 'Ship to',
            textBold: `${address.firstName} ${address.lastName}`,
            text: [
                address.line1,
                address.line2,
                `${address.town}, ${address.country.isocode}, ${address.postalCode}`,
                address.phone,
            ],
        };
    }
    /**
     * @param {?} billingAddress
     * @return {?}
     */
    getBillingAddressCardContent(billingAddress) {
        return {
            title: 'Bill To',
            textBold: `${billingAddress.firstName} ${billingAddress.lastName}`,
            text: [
                billingAddress.line1,
                billingAddress.line2,
                `${billingAddress.town}, ${billingAddress.country.isocode}, ${billingAddress.postalCode}`,
                billingAddress.phone,
            ],
        };
    }
    /**
     * @param {?} payment
     * @return {?}
     */
    getPaymentCardContent(payment) {
        return {
            title: 'Payment',
            textBold: payment.accountHolderName,
            text: [
                payment.cardType.name,
                payment.cardNumber,
                `Expires: ${payment.expiryMonth} / ${payment.expiryYear}`,
            ],
        };
    }
    /**
     * @param {?} shipping
     * @return {?}
     */
    getShippingMethodCardContent(shipping) {
        return {
            title: 'Shipping Method',
            textBold: shipping.name,
            text: [shipping.description],
        };
    }
}
OrderDetailShippingComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-order-details-shipping',
                template: "<ng-container *ngIf=\"(order$ | async) as order\">\n  <div class=\"cx-account-summary row\">\n    <div\n      *ngIf=\"order.deliveryAddress\"\n      class=\"cx-summary-card col-sm-12 col-md-4\"\n    >\n      <cx-card\n        [content]=\"getAddressCardContent(order.deliveryAddress)\"\n      ></cx-card>\n    </div>\n    <div\n      *ngIf=\"order.paymentInfo?.billingAddress\"\n      class=\"cx-summary-card col-sm-12 col-md-4\"\n    >\n      <cx-card\n        [content]=\"\n          getBillingAddressCardContent(order.paymentInfo.billingAddress)\n        \"\n      ></cx-card>\n    </div>\n    <div *ngIf=\"order.paymentInfo\" class=\"cx-summary-card col-sm-12 col-md-4\">\n      <cx-card [content]=\"getPaymentCardContent(order.paymentInfo)\"></cx-card>\n    </div>\n    <div *ngIf=\"order.deliveryMode\" class=\"cx-summary-card col-sm-12 col-md-4\">\n      <cx-card\n        [content]=\"getShippingMethodCardContent(order.deliveryMode)\"\n      ></cx-card>\n    </div>\n  </div>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
OrderDetailShippingComponent.ctorParameters = () => [
    { type: OrderDetailsService }
];
if (false) {
    /** @type {?} */
    OrderDetailShippingComponent.prototype.order$;
    /**
     * @type {?}
     * @private
     */
    OrderDetailShippingComponent.prototype.orderDetailsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlsLXNoaXBwaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9teS1hY2NvdW50L29yZGVyL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlsLXNoaXBwaW5nL29yZGVyLWRldGFpbC1zaGlwcGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFLbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFNL0QsTUFBTSxPQUFPLDRCQUE0Qjs7OztJQUN2QyxZQUFvQixtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUFHLENBQUM7Ozs7SUFJaEUsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNELENBQUM7Ozs7O0lBRUQscUJBQXFCLENBQUMsT0FBZ0I7UUFDcEMsT0FBTztZQUNMLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFFBQVEsRUFBRSxHQUFHLE9BQU8sQ0FBQyxTQUFTLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUNwRCxJQUFJLEVBQUU7Z0JBQ0osT0FBTyxDQUFDLEtBQUs7Z0JBQ2IsT0FBTyxDQUFDLEtBQUs7Z0JBQ2IsR0FBRyxPQUFPLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQ3BFLE9BQU8sQ0FBQyxLQUFLO2FBQ2Q7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCw0QkFBNEIsQ0FBQyxjQUF1QjtRQUNsRCxPQUFPO1lBQ0wsS0FBSyxFQUFFLFNBQVM7WUFDaEIsUUFBUSxFQUFFLEdBQUcsY0FBYyxDQUFDLFNBQVMsSUFBSSxjQUFjLENBQUMsUUFBUSxFQUFFO1lBQ2xFLElBQUksRUFBRTtnQkFDSixjQUFjLENBQUMsS0FBSztnQkFDcEIsY0FBYyxDQUFDLEtBQUs7Z0JBQ3BCLEdBQUcsY0FBYyxDQUFDLElBQUksS0FBSyxjQUFjLENBQUMsT0FBTyxDQUFDLE9BQU8sS0FDdkQsY0FBYyxDQUFDLFVBQ2pCLEVBQUU7Z0JBQ0YsY0FBYyxDQUFDLEtBQUs7YUFDckI7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxxQkFBcUIsQ0FBQyxPQUF1QjtRQUMzQyxPQUFPO1lBQ0wsS0FBSyxFQUFFLFNBQVM7WUFDaEIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxpQkFBaUI7WUFDbkMsSUFBSSxFQUFFO2dCQUNKLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSTtnQkFDckIsT0FBTyxDQUFDLFVBQVU7Z0JBQ2xCLFlBQVksT0FBTyxDQUFDLFdBQVcsTUFBTSxPQUFPLENBQUMsVUFBVSxFQUFFO2FBQzFEO1NBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsNEJBQTRCLENBQUMsUUFBc0I7UUFDakQsT0FBTztZQUNMLEtBQUssRUFBRSxpQkFBaUI7WUFDeEIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxJQUFJO1lBQ3ZCLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7U0FDN0IsQ0FBQztJQUNKLENBQUM7OztZQTNERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMscS9CQUFxRDthQUN0RDs7OztZQUxRLG1CQUFtQjs7OztJQVMxQiw4Q0FBMEI7Ozs7O0lBRmQsMkRBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgT3JkZXIsIEFkZHJlc3MsIFBheW1lbnREZXRhaWxzLCBEZWxpdmVyeU1vZGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uLy4uLy4uLy4uL3VpL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlckRldGFpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vb3JkZXItZGV0YWlscy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtb3JkZXItZGV0YWlscy1zaGlwcGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9vcmRlci1kZXRhaWwtc2hpcHBpbmcuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckRldGFpbFNoaXBwaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvcmRlckRldGFpbHNTZXJ2aWNlOiBPcmRlckRldGFpbHNTZXJ2aWNlKSB7fVxuXG4gIG9yZGVyJDogT2JzZXJ2YWJsZTxPcmRlcj47XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vcmRlciQgPSB0aGlzLm9yZGVyRGV0YWlsc1NlcnZpY2UuZ2V0T3JkZXJEZXRhaWxzKCk7XG4gIH1cblxuICBnZXRBZGRyZXNzQ2FyZENvbnRlbnQoYWRkcmVzczogQWRkcmVzcyk6IENhcmQge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ1NoaXAgdG8nLFxuICAgICAgdGV4dEJvbGQ6IGAke2FkZHJlc3MuZmlyc3ROYW1lfSAke2FkZHJlc3MubGFzdE5hbWV9YCxcbiAgICAgIHRleHQ6IFtcbiAgICAgICAgYWRkcmVzcy5saW5lMSxcbiAgICAgICAgYWRkcmVzcy5saW5lMixcbiAgICAgICAgYCR7YWRkcmVzcy50b3dufSwgJHthZGRyZXNzLmNvdW50cnkuaXNvY29kZX0sICR7YWRkcmVzcy5wb3N0YWxDb2RlfWAsXG4gICAgICAgIGFkZHJlc3MucGhvbmUsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICBnZXRCaWxsaW5nQWRkcmVzc0NhcmRDb250ZW50KGJpbGxpbmdBZGRyZXNzOiBBZGRyZXNzKTogQ2FyZCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAnQmlsbCBUbycsXG4gICAgICB0ZXh0Qm9sZDogYCR7YmlsbGluZ0FkZHJlc3MuZmlyc3ROYW1lfSAke2JpbGxpbmdBZGRyZXNzLmxhc3ROYW1lfWAsXG4gICAgICB0ZXh0OiBbXG4gICAgICAgIGJpbGxpbmdBZGRyZXNzLmxpbmUxLFxuICAgICAgICBiaWxsaW5nQWRkcmVzcy5saW5lMixcbiAgICAgICAgYCR7YmlsbGluZ0FkZHJlc3MudG93bn0sICR7YmlsbGluZ0FkZHJlc3MuY291bnRyeS5pc29jb2RlfSwgJHtcbiAgICAgICAgICBiaWxsaW5nQWRkcmVzcy5wb3N0YWxDb2RlXG4gICAgICAgIH1gLFxuICAgICAgICBiaWxsaW5nQWRkcmVzcy5waG9uZSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIGdldFBheW1lbnRDYXJkQ29udGVudChwYXltZW50OiBQYXltZW50RGV0YWlscyk6IENhcmQge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ1BheW1lbnQnLFxuICAgICAgdGV4dEJvbGQ6IHBheW1lbnQuYWNjb3VudEhvbGRlck5hbWUsXG4gICAgICB0ZXh0OiBbXG4gICAgICAgIHBheW1lbnQuY2FyZFR5cGUubmFtZSxcbiAgICAgICAgcGF5bWVudC5jYXJkTnVtYmVyLFxuICAgICAgICBgRXhwaXJlczogJHtwYXltZW50LmV4cGlyeU1vbnRofSAvICR7cGF5bWVudC5leHBpcnlZZWFyfWAsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICBnZXRTaGlwcGluZ01ldGhvZENhcmRDb250ZW50KHNoaXBwaW5nOiBEZWxpdmVyeU1vZGUpOiBDYXJkIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICdTaGlwcGluZyBNZXRob2QnLFxuICAgICAgdGV4dEJvbGQ6IHNoaXBwaW5nLm5hbWUsXG4gICAgICB0ZXh0OiBbc2hpcHBpbmcuZGVzY3JpcHRpb25dLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==