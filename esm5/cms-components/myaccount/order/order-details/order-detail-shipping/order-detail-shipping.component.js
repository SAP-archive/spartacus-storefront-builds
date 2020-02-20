import { __decorate, __read } from "tslib";
import { Component } from '@angular/core';
import { Address, DeliveryMode, Order, PaymentDetails, TranslationService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { OrderDetailsService } from '../order-details.service';
import { map } from 'rxjs/operators';
var OrderDetailShippingComponent = /** @class */ (function () {
    function OrderDetailShippingComponent(orderDetailsService, translation) {
        this.orderDetailsService = orderDetailsService;
        this.translation = translation;
    }
    OrderDetailShippingComponent.prototype.ngOnInit = function () {
        this.order$ = this.orderDetailsService.getOrderDetails();
    };
    OrderDetailShippingComponent.prototype.getAddressCardContent = function (address) {
        return combineLatest([
            this.translation.translate('addressCard.shipTo'),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 1), textTitle = _b[0];
            return {
                title: textTitle,
                textBold: address.firstName + " " + address.lastName,
                text: [
                    address.line1,
                    address.line2,
                    address.town + ", " + address.country.isocode + ", " + address.postalCode,
                    address.phone,
                ],
            };
        }));
    };
    OrderDetailShippingComponent.prototype.getBillingAddressCardContent = function (billingAddress) {
        return combineLatest([
            this.translation.translate('addressCard.billTo'),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 1), textTitle = _b[0];
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
    OrderDetailShippingComponent.prototype.getPaymentCardContent = function (payment) {
        return combineLatest([
            this.translation.translate('paymentForm.payment'),
            this.translation.translate('paymentCard.expires', {
                month: payment.expiryMonth,
                year: payment.expiryYear,
            }),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 2), textTitle = _b[0], textExpires = _b[1];
            return {
                title: textTitle,
                textBold: payment.accountHolderName,
                text: [payment.cardType.name, payment.cardNumber, textExpires],
            };
        }));
    };
    OrderDetailShippingComponent.prototype.getShippingMethodCardContent = function (shipping) {
        return combineLatest([
            this.translation.translate('checkoutShipping.shippingMethod'),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 1), textTitle = _b[0];
            return {
                title: textTitle,
                textBold: shipping.name,
                text: [shipping.description],
            };
        }));
    };
    OrderDetailShippingComponent.ctorParameters = function () { return [
        { type: OrderDetailsService },
        { type: TranslationService }
    ]; };
    OrderDetailShippingComponent = __decorate([
        Component({
            selector: 'cx-order-details-shipping',
            template: "<ng-container *ngIf=\"order$ | async as order\">\n  <div class=\"cx-account-summary row\">\n    <div\n      *ngIf=\"order.deliveryAddress\"\n      class=\"cx-summary-card col-sm-12 col-md-4\"\n    >\n      <cx-card\n        [content]=\"getAddressCardContent(order.deliveryAddress) | async\"\n      ></cx-card>\n    </div>\n    <div\n      *ngIf=\"order.paymentInfo?.billingAddress\"\n      class=\"cx-summary-card col-sm-12 col-md-4\"\n    >\n      <cx-card\n        [content]=\"\n          getBillingAddressCardContent(order.paymentInfo.billingAddress) | async\n        \"\n      ></cx-card>\n    </div>\n    <div *ngIf=\"order.paymentInfo\" class=\"cx-summary-card col-sm-12 col-md-4\">\n      <cx-card\n        [content]=\"getPaymentCardContent(order.paymentInfo) | async\"\n      ></cx-card>\n    </div>\n    <div *ngIf=\"order.deliveryMode\" class=\"cx-summary-card col-sm-12 col-md-4\">\n      <cx-card\n        [content]=\"getShippingMethodCardContent(order.deliveryMode) | async\"\n      ></cx-card>\n    </div>\n  </div>\n</ng-container>\n"
        })
    ], OrderDetailShippingComponent);
    return OrderDetailShippingComponent;
}());
export { OrderDetailShippingComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlsLXNoaXBwaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbC1zaGlwcGluZy9vcmRlci1kZXRhaWwtc2hpcHBpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFDTCxPQUFPLEVBQ1AsWUFBWSxFQUNaLEtBQUssRUFDTCxjQUFjLEVBQ2Qsa0JBQWtCLEdBQ25CLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFNckM7SUFDRSxzQ0FDVSxtQkFBd0MsRUFDeEMsV0FBK0I7UUFEL0Isd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7SUFDdEMsQ0FBQztJQUlKLCtDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzRCxDQUFDO0lBRUQsNERBQXFCLEdBQXJCLFVBQXNCLE9BQWdCO1FBQ3BDLE9BQU8sYUFBYSxDQUFDO1lBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDO1NBQ2pELENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRyxDQUFDLFVBQUMsRUFBVztnQkFBWCxrQkFBVyxFQUFWLGlCQUFTO1lBQ2IsT0FBTztnQkFDTCxLQUFLLEVBQUUsU0FBUztnQkFDaEIsUUFBUSxFQUFLLE9BQU8sQ0FBQyxTQUFTLFNBQUksT0FBTyxDQUFDLFFBQVU7Z0JBQ3BELElBQUksRUFBRTtvQkFDSixPQUFPLENBQUMsS0FBSztvQkFDYixPQUFPLENBQUMsS0FBSztvQkFDVixPQUFPLENBQUMsSUFBSSxVQUFLLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxVQUFLLE9BQU8sQ0FBQyxVQUFZO29CQUNwRSxPQUFPLENBQUMsS0FBSztpQkFDZDthQUNGLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELG1FQUE0QixHQUE1QixVQUE2QixjQUF1QjtRQUNsRCxPQUFPLGFBQWEsQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQztTQUNqRCxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUcsQ0FBQyxVQUFDLEVBQVc7Z0JBQVgsa0JBQVcsRUFBVixpQkFBUztZQUNiLE9BQU87Z0JBQ0wsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLFFBQVEsRUFBSyxjQUFjLENBQUMsU0FBUyxTQUFJLGNBQWMsQ0FBQyxRQUFVO2dCQUNsRSxJQUFJLEVBQUU7b0JBQ0osY0FBYyxDQUFDLEtBQUs7b0JBQ3BCLGNBQWMsQ0FBQyxLQUFLO29CQUNqQixjQUFjLENBQUMsSUFBSSxVQUFLLGNBQWMsQ0FBQyxPQUFPLENBQUMsT0FBTyxVQUFLLGNBQWMsQ0FBQyxVQUFZO29CQUN6RixjQUFjLENBQUMsS0FBSztpQkFDckI7YUFDRixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCw0REFBcUIsR0FBckIsVUFBc0IsT0FBdUI7UUFDM0MsT0FBTyxhQUFhLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUM7WUFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMscUJBQXFCLEVBQUU7Z0JBQ2hELEtBQUssRUFBRSxPQUFPLENBQUMsV0FBVztnQkFDMUIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxVQUFVO2FBQ3pCLENBQUM7U0FDSCxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUcsQ0FBQyxVQUFDLEVBQXdCO2dCQUF4QixrQkFBd0IsRUFBdkIsaUJBQVMsRUFBRSxtQkFBVztZQUMxQixPQUFPO2dCQUNMLEtBQUssRUFBRSxTQUFTO2dCQUNoQixRQUFRLEVBQUUsT0FBTyxDQUFDLGlCQUFpQjtnQkFDbkMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUM7YUFDL0QsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsbUVBQTRCLEdBQTVCLFVBQTZCLFFBQXNCO1FBQ2pELE9BQU8sYUFBYSxDQUFDO1lBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGlDQUFpQyxDQUFDO1NBQzlELENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRyxDQUFDLFVBQUMsRUFBVztnQkFBWCxrQkFBVyxFQUFWLGlCQUFTO1lBQ2IsT0FBTztnQkFDTCxLQUFLLEVBQUUsU0FBUztnQkFDaEIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxJQUFJO2dCQUN2QixJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO2FBQzdCLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Z0JBOUU4QixtQkFBbUI7Z0JBQzNCLGtCQUFrQjs7SUFIOUIsNEJBQTRCO1FBSnhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSwyQkFBMkI7WUFDckMsb2lDQUFxRDtTQUN0RCxDQUFDO09BQ1csNEJBQTRCLENBaUZ4QztJQUFELG1DQUFDO0NBQUEsQUFqRkQsSUFpRkM7U0FqRlksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFkZHJlc3MsXG4gIERlbGl2ZXJ5TW9kZSxcbiAgT3JkZXIsXG4gIFBheW1lbnREZXRhaWxzLFxuICBUcmFuc2xhdGlvblNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlckRldGFpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vb3JkZXItZGV0YWlscy5zZXJ2aWNlJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtb3JkZXItZGV0YWlscy1zaGlwcGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9vcmRlci1kZXRhaWwtc2hpcHBpbmcuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckRldGFpbFNoaXBwaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBvcmRlckRldGFpbHNTZXJ2aWNlOiBPcmRlckRldGFpbHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZVxuICApIHt9XG5cbiAgb3JkZXIkOiBPYnNlcnZhYmxlPE9yZGVyPjtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm9yZGVyJCA9IHRoaXMub3JkZXJEZXRhaWxzU2VydmljZS5nZXRPcmRlckRldGFpbHMoKTtcbiAgfVxuXG4gIGdldEFkZHJlc3NDYXJkQ29udGVudChhZGRyZXNzOiBBZGRyZXNzKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2FkZHJlc3NDYXJkLnNoaXBUbycpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFt0ZXh0VGl0bGVdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgICB0ZXh0Qm9sZDogYCR7YWRkcmVzcy5maXJzdE5hbWV9ICR7YWRkcmVzcy5sYXN0TmFtZX1gLFxuICAgICAgICAgIHRleHQ6IFtcbiAgICAgICAgICAgIGFkZHJlc3MubGluZTEsXG4gICAgICAgICAgICBhZGRyZXNzLmxpbmUyLFxuICAgICAgICAgICAgYCR7YWRkcmVzcy50b3dufSwgJHthZGRyZXNzLmNvdW50cnkuaXNvY29kZX0sICR7YWRkcmVzcy5wb3N0YWxDb2RlfWAsXG4gICAgICAgICAgICBhZGRyZXNzLnBob25lLFxuICAgICAgICAgIF0sXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRCaWxsaW5nQWRkcmVzc0NhcmRDb250ZW50KGJpbGxpbmdBZGRyZXNzOiBBZGRyZXNzKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2FkZHJlc3NDYXJkLmJpbGxUbycpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFt0ZXh0VGl0bGVdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgICB0ZXh0Qm9sZDogYCR7YmlsbGluZ0FkZHJlc3MuZmlyc3ROYW1lfSAke2JpbGxpbmdBZGRyZXNzLmxhc3ROYW1lfWAsXG4gICAgICAgICAgdGV4dDogW1xuICAgICAgICAgICAgYmlsbGluZ0FkZHJlc3MubGluZTEsXG4gICAgICAgICAgICBiaWxsaW5nQWRkcmVzcy5saW5lMixcbiAgICAgICAgICAgIGAke2JpbGxpbmdBZGRyZXNzLnRvd259LCAke2JpbGxpbmdBZGRyZXNzLmNvdW50cnkuaXNvY29kZX0sICR7YmlsbGluZ0FkZHJlc3MucG9zdGFsQ29kZX1gLFxuICAgICAgICAgICAgYmlsbGluZ0FkZHJlc3MucGhvbmUsXG4gICAgICAgICAgXSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldFBheW1lbnRDYXJkQ29udGVudChwYXltZW50OiBQYXltZW50RGV0YWlscyk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Rm9ybS5wYXltZW50JyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudENhcmQuZXhwaXJlcycsIHtcbiAgICAgICAgbW9udGg6IHBheW1lbnQuZXhwaXJ5TW9udGgsXG4gICAgICAgIHllYXI6IHBheW1lbnQuZXhwaXJ5WWVhcixcbiAgICAgIH0pLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFt0ZXh0VGl0bGUsIHRleHRFeHBpcmVzXSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRpdGxlOiB0ZXh0VGl0bGUsXG4gICAgICAgICAgdGV4dEJvbGQ6IHBheW1lbnQuYWNjb3VudEhvbGRlck5hbWUsXG4gICAgICAgICAgdGV4dDogW3BheW1lbnQuY2FyZFR5cGUubmFtZSwgcGF5bWVudC5jYXJkTnVtYmVyLCB0ZXh0RXhwaXJlc10sXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRTaGlwcGluZ01ldGhvZENhcmRDb250ZW50KHNoaXBwaW5nOiBEZWxpdmVyeU1vZGUpOiBPYnNlcnZhYmxlPENhcmQ+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY2hlY2tvdXRTaGlwcGluZy5zaGlwcGluZ01ldGhvZCcpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFt0ZXh0VGl0bGVdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgICB0ZXh0Qm9sZDogc2hpcHBpbmcubmFtZSxcbiAgICAgICAgICB0ZXh0OiBbc2hpcHBpbmcuZGVzY3JpcHRpb25dLFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=