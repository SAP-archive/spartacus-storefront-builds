/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { TranslationService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { OrderDetailsService } from '../order-details.service';
import { map } from 'rxjs/operators';
export class OrderDetailShippingComponent {
    /**
     * @param {?} orderDetailsService
     * @param {?} translation
     */
    constructor(orderDetailsService, translation) {
        this.orderDetailsService = orderDetailsService;
        this.translation = translation;
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
        return combineLatest([
            this.translation.translate('addressCard.shipTo'),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([textTitle]) => {
            return {
                title: textTitle,
                textBold: `${address.firstName} ${address.lastName}`,
                text: [
                    address.line1,
                    address.line2,
                    `${address.town}, ${address.country.isocode}, ${address.postalCode}`,
                    address.phone,
                ],
            };
        })));
    }
    /**
     * @param {?} billingAddress
     * @return {?}
     */
    getBillingAddressCardContent(billingAddress) {
        return combineLatest([
            this.translation.translate('addressCard.billTo'),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([textTitle]) => {
            return {
                title: textTitle,
                textBold: `${billingAddress.firstName} ${billingAddress.lastName}`,
                text: [
                    billingAddress.line1,
                    billingAddress.line2,
                    `${billingAddress.town}, ${billingAddress.country.isocode}, ${billingAddress.postalCode}`,
                    billingAddress.phone,
                ],
            };
        })));
    }
    /**
     * @param {?} payment
     * @return {?}
     */
    getPaymentCardContent(payment) {
        return combineLatest([
            this.translation.translate('paymentForm.payment'),
            this.translation.translate('paymentCard.expires', {
                month: payment.expiryMonth,
                year: payment.expiryYear,
            }),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([textTitle, textExpires]) => {
            return {
                title: textTitle,
                textBold: payment.accountHolderName,
                text: [payment.cardType.name, payment.cardNumber, textExpires],
            };
        })));
    }
    /**
     * @param {?} shipping
     * @return {?}
     */
    getShippingMethodCardContent(shipping) {
        return combineLatest([
            this.translation.translate('checkoutShipping.shippingMethod'),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([textTitle]) => {
            return {
                title: textTitle,
                textBold: shipping.name,
                text: [shipping.description],
            };
        })));
    }
}
OrderDetailShippingComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-order-details-shipping',
                template: "<ng-container *ngIf=\"(order$ | async) as order\">\n  <div class=\"cx-account-summary row\">\n    <div\n      *ngIf=\"order.deliveryAddress\"\n      class=\"cx-summary-card col-sm-12 col-md-4\"\n    >\n      <cx-card\n        [content]=\"getAddressCardContent(order.deliveryAddress) | async\"\n      ></cx-card>\n    </div>\n    <div\n      *ngIf=\"order.paymentInfo?.billingAddress\"\n      class=\"cx-summary-card col-sm-12 col-md-4\"\n    >\n      <cx-card\n        [content]=\"\n          getBillingAddressCardContent(order.paymentInfo.billingAddress) | async\n        \"\n      ></cx-card>\n    </div>\n    <div *ngIf=\"order.paymentInfo\" class=\"cx-summary-card col-sm-12 col-md-4\">\n      <cx-card\n        [content]=\"getPaymentCardContent(order.paymentInfo) | async\"\n      ></cx-card>\n    </div>\n    <div *ngIf=\"order.deliveryMode\" class=\"cx-summary-card col-sm-12 col-md-4\">\n      <cx-card\n        [content]=\"getShippingMethodCardContent(order.deliveryMode) | async\"\n      ></cx-card>\n    </div>\n  </div>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
OrderDetailShippingComponent.ctorParameters = () => [
    { type: OrderDetailsService },
    { type: TranslationService }
];
if (false) {
    /** @type {?} */
    OrderDetailShippingComponent.prototype.order$;
    /**
     * @type {?}
     * @private
     */
    OrderDetailShippingComponent.prototype.orderDetailsService;
    /**
     * @type {?}
     * @private
     */
    OrderDetailShippingComponent.prototype.translation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlsLXNoaXBwaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbC1zaGlwcGluZy9vcmRlci1kZXRhaWwtc2hpcHBpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFLTCxrQkFBa0IsR0FDbkIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWpELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU1yQyxNQUFNLE9BQU8sNEJBQTRCOzs7OztJQUN2QyxZQUNVLG1CQUF3QyxFQUN4QyxXQUErQjtRQUQvQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtJQUN0QyxDQUFDOzs7O0lBSUosUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNELENBQUM7Ozs7O0lBRUQscUJBQXFCLENBQUMsT0FBZ0I7UUFDcEMsT0FBTyxhQUFhLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUM7U0FDakQsQ0FBQyxDQUFDLElBQUksQ0FDTCxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUU7WUFDbEIsT0FBTztnQkFDTCxLQUFLLEVBQUUsU0FBUztnQkFDaEIsUUFBUSxFQUFFLEdBQUcsT0FBTyxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFO2dCQUNwRCxJQUFJLEVBQUU7b0JBQ0osT0FBTyxDQUFDLEtBQUs7b0JBQ2IsT0FBTyxDQUFDLEtBQUs7b0JBQ2IsR0FBRyxPQUFPLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxLQUN6QyxPQUFPLENBQUMsVUFDVixFQUFFO29CQUNGLE9BQU8sQ0FBQyxLQUFLO2lCQUNkO2FBQ0YsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7OztJQUVELDRCQUE0QixDQUFDLGNBQXVCO1FBQ2xELE9BQU8sYUFBYSxDQUFDO1lBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDO1NBQ2pELENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFO1lBQ2xCLE9BQU87Z0JBQ0wsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLFFBQVEsRUFBRSxHQUFHLGNBQWMsQ0FBQyxTQUFTLElBQUksY0FBYyxDQUFDLFFBQVEsRUFBRTtnQkFDbEUsSUFBSSxFQUFFO29CQUNKLGNBQWMsQ0FBQyxLQUFLO29CQUNwQixjQUFjLENBQUMsS0FBSztvQkFDcEIsR0FBRyxjQUFjLENBQUMsSUFBSSxLQUFLLGNBQWMsQ0FBQyxPQUFPLENBQUMsT0FBTyxLQUN2RCxjQUFjLENBQUMsVUFDakIsRUFBRTtvQkFDRixjQUFjLENBQUMsS0FBSztpQkFDckI7YUFDRixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQscUJBQXFCLENBQUMsT0FBdUI7UUFDM0MsT0FBTyxhQUFhLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUM7WUFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMscUJBQXFCLEVBQUU7Z0JBQ2hELEtBQUssRUFBRSxPQUFPLENBQUMsV0FBVztnQkFDMUIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxVQUFVO2FBQ3pCLENBQUM7U0FDSCxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxFQUFFLEVBQUU7WUFDL0IsT0FBTztnQkFDTCxLQUFLLEVBQUUsU0FBUztnQkFDaEIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxpQkFBaUI7Z0JBQ25DLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDO2FBQy9ELENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCw0QkFBNEIsQ0FBQyxRQUFzQjtRQUNqRCxPQUFPLGFBQWEsQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxpQ0FBaUMsQ0FBQztTQUM5RCxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRTtZQUNsQixPQUFPO2dCQUNMLEtBQUssRUFBRSxTQUFTO2dCQUNoQixRQUFRLEVBQUUsUUFBUSxDQUFDLElBQUk7Z0JBQ3ZCLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7YUFDN0IsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7WUF4RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLHNpQ0FBcUQ7YUFDdEQ7Ozs7WUFOUSxtQkFBbUI7WUFKMUIsa0JBQWtCOzs7O0lBaUJsQiw4Q0FBMEI7Ozs7O0lBSnhCLDJEQUFnRDs7Ozs7SUFDaEQsbURBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFkZHJlc3MsXG4gIERlbGl2ZXJ5TW9kZSxcbiAgT3JkZXIsXG4gIFBheW1lbnREZXRhaWxzLFxuICBUcmFuc2xhdGlvblNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlckRldGFpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vb3JkZXItZGV0YWlscy5zZXJ2aWNlJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtb3JkZXItZGV0YWlscy1zaGlwcGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9vcmRlci1kZXRhaWwtc2hpcHBpbmcuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckRldGFpbFNoaXBwaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBvcmRlckRldGFpbHNTZXJ2aWNlOiBPcmRlckRldGFpbHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZVxuICApIHt9XG5cbiAgb3JkZXIkOiBPYnNlcnZhYmxlPE9yZGVyPjtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm9yZGVyJCA9IHRoaXMub3JkZXJEZXRhaWxzU2VydmljZS5nZXRPcmRlckRldGFpbHMoKTtcbiAgfVxuXG4gIGdldEFkZHJlc3NDYXJkQ29udGVudChhZGRyZXNzOiBBZGRyZXNzKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2FkZHJlc3NDYXJkLnNoaXBUbycpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFt0ZXh0VGl0bGVdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgICB0ZXh0Qm9sZDogYCR7YWRkcmVzcy5maXJzdE5hbWV9ICR7YWRkcmVzcy5sYXN0TmFtZX1gLFxuICAgICAgICAgIHRleHQ6IFtcbiAgICAgICAgICAgIGFkZHJlc3MubGluZTEsXG4gICAgICAgICAgICBhZGRyZXNzLmxpbmUyLFxuICAgICAgICAgICAgYCR7YWRkcmVzcy50b3dufSwgJHthZGRyZXNzLmNvdW50cnkuaXNvY29kZX0sICR7XG4gICAgICAgICAgICAgIGFkZHJlc3MucG9zdGFsQ29kZVxuICAgICAgICAgICAgfWAsXG4gICAgICAgICAgICBhZGRyZXNzLnBob25lLFxuICAgICAgICAgIF0sXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRCaWxsaW5nQWRkcmVzc0NhcmRDb250ZW50KGJpbGxpbmdBZGRyZXNzOiBBZGRyZXNzKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2FkZHJlc3NDYXJkLmJpbGxUbycpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFt0ZXh0VGl0bGVdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgICB0ZXh0Qm9sZDogYCR7YmlsbGluZ0FkZHJlc3MuZmlyc3ROYW1lfSAke2JpbGxpbmdBZGRyZXNzLmxhc3ROYW1lfWAsXG4gICAgICAgICAgdGV4dDogW1xuICAgICAgICAgICAgYmlsbGluZ0FkZHJlc3MubGluZTEsXG4gICAgICAgICAgICBiaWxsaW5nQWRkcmVzcy5saW5lMixcbiAgICAgICAgICAgIGAke2JpbGxpbmdBZGRyZXNzLnRvd259LCAke2JpbGxpbmdBZGRyZXNzLmNvdW50cnkuaXNvY29kZX0sICR7XG4gICAgICAgICAgICAgIGJpbGxpbmdBZGRyZXNzLnBvc3RhbENvZGVcbiAgICAgICAgICAgIH1gLFxuICAgICAgICAgICAgYmlsbGluZ0FkZHJlc3MucGhvbmUsXG4gICAgICAgICAgXSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldFBheW1lbnRDYXJkQ29udGVudChwYXltZW50OiBQYXltZW50RGV0YWlscyk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Rm9ybS5wYXltZW50JyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudENhcmQuZXhwaXJlcycsIHtcbiAgICAgICAgbW9udGg6IHBheW1lbnQuZXhwaXJ5TW9udGgsXG4gICAgICAgIHllYXI6IHBheW1lbnQuZXhwaXJ5WWVhcixcbiAgICAgIH0pLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFt0ZXh0VGl0bGUsIHRleHRFeHBpcmVzXSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRpdGxlOiB0ZXh0VGl0bGUsXG4gICAgICAgICAgdGV4dEJvbGQ6IHBheW1lbnQuYWNjb3VudEhvbGRlck5hbWUsXG4gICAgICAgICAgdGV4dDogW3BheW1lbnQuY2FyZFR5cGUubmFtZSwgcGF5bWVudC5jYXJkTnVtYmVyLCB0ZXh0RXhwaXJlc10sXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRTaGlwcGluZ01ldGhvZENhcmRDb250ZW50KHNoaXBwaW5nOiBEZWxpdmVyeU1vZGUpOiBPYnNlcnZhYmxlPENhcmQ+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY2hlY2tvdXRTaGlwcGluZy5zaGlwcGluZ01ldGhvZCcpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFt0ZXh0VGl0bGVdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgICB0ZXh0Qm9sZDogc2hpcHBpbmcubmFtZSxcbiAgICAgICAgICB0ZXh0OiBbc2hpcHBpbmcuZGVzY3JpcHRpb25dLFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=