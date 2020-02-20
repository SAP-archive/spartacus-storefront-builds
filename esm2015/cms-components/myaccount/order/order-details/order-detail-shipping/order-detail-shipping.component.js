import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Address, DeliveryMode, Order, PaymentDetails, TranslationService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { OrderDetailsService } from '../order-details.service';
import { map } from 'rxjs/operators';
let OrderDetailShippingComponent = class OrderDetailShippingComponent {
    constructor(orderDetailsService, translation) {
        this.orderDetailsService = orderDetailsService;
        this.translation = translation;
    }
    ngOnInit() {
        this.order$ = this.orderDetailsService.getOrderDetails();
    }
    getAddressCardContent(address) {
        return combineLatest([
            this.translation.translate('addressCard.shipTo'),
        ]).pipe(map(([textTitle]) => {
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
        }));
    }
    getBillingAddressCardContent(billingAddress) {
        return combineLatest([
            this.translation.translate('addressCard.billTo'),
        ]).pipe(map(([textTitle]) => {
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
        }));
    }
    getPaymentCardContent(payment) {
        return combineLatest([
            this.translation.translate('paymentForm.payment'),
            this.translation.translate('paymentCard.expires', {
                month: payment.expiryMonth,
                year: payment.expiryYear,
            }),
        ]).pipe(map(([textTitle, textExpires]) => {
            return {
                title: textTitle,
                textBold: payment.accountHolderName,
                text: [payment.cardType.name, payment.cardNumber, textExpires],
            };
        }));
    }
    getShippingMethodCardContent(shipping) {
        return combineLatest([
            this.translation.translate('checkoutShipping.shippingMethod'),
        ]).pipe(map(([textTitle]) => {
            return {
                title: textTitle,
                textBold: shipping.name,
                text: [shipping.description],
            };
        }));
    }
};
OrderDetailShippingComponent.ctorParameters = () => [
    { type: OrderDetailsService },
    { type: TranslationService }
];
OrderDetailShippingComponent = __decorate([
    Component({
        selector: 'cx-order-details-shipping',
        template: "<ng-container *ngIf=\"order$ | async as order\">\n  <div class=\"cx-account-summary row\">\n    <div\n      *ngIf=\"order.deliveryAddress\"\n      class=\"cx-summary-card col-sm-12 col-md-4\"\n    >\n      <cx-card\n        [content]=\"getAddressCardContent(order.deliveryAddress) | async\"\n      ></cx-card>\n    </div>\n    <div\n      *ngIf=\"order.paymentInfo?.billingAddress\"\n      class=\"cx-summary-card col-sm-12 col-md-4\"\n    >\n      <cx-card\n        [content]=\"\n          getBillingAddressCardContent(order.paymentInfo.billingAddress) | async\n        \"\n      ></cx-card>\n    </div>\n    <div *ngIf=\"order.paymentInfo\" class=\"cx-summary-card col-sm-12 col-md-4\">\n      <cx-card\n        [content]=\"getPaymentCardContent(order.paymentInfo) | async\"\n      ></cx-card>\n    </div>\n    <div *ngIf=\"order.deliveryMode\" class=\"cx-summary-card col-sm-12 col-md-4\">\n      <cx-card\n        [content]=\"getShippingMethodCardContent(order.deliveryMode) | async\"\n      ></cx-card>\n    </div>\n  </div>\n</ng-container>\n"
    })
], OrderDetailShippingComponent);
export { OrderDetailShippingComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlsLXNoaXBwaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbC1zaGlwcGluZy9vcmRlci1kZXRhaWwtc2hpcHBpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFDTCxPQUFPLEVBQ1AsWUFBWSxFQUNaLEtBQUssRUFDTCxjQUFjLEVBQ2Qsa0JBQWtCLEdBQ25CLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFNckMsSUFBYSw0QkFBNEIsR0FBekMsTUFBYSw0QkFBNEI7SUFDdkMsWUFDVSxtQkFBd0MsRUFDeEMsV0FBK0I7UUFEL0Isd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7SUFDdEMsQ0FBQztJQUlKLFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzRCxDQUFDO0lBRUQscUJBQXFCLENBQUMsT0FBZ0I7UUFDcEMsT0FBTyxhQUFhLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUM7U0FDakQsQ0FBQyxDQUFDLElBQUksQ0FDTCxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUU7WUFDbEIsT0FBTztnQkFDTCxLQUFLLEVBQUUsU0FBUztnQkFDaEIsUUFBUSxFQUFFLEdBQUcsT0FBTyxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFO2dCQUNwRCxJQUFJLEVBQUU7b0JBQ0osT0FBTyxDQUFDLEtBQUs7b0JBQ2IsT0FBTyxDQUFDLEtBQUs7b0JBQ2IsR0FBRyxPQUFPLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQyxVQUFVLEVBQUU7b0JBQ3BFLE9BQU8sQ0FBQyxLQUFLO2lCQUNkO2FBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsNEJBQTRCLENBQUMsY0FBdUI7UUFDbEQsT0FBTyxhQUFhLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUM7U0FDakQsQ0FBQyxDQUFDLElBQUksQ0FDTCxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUU7WUFDbEIsT0FBTztnQkFDTCxLQUFLLEVBQUUsU0FBUztnQkFDaEIsUUFBUSxFQUFFLEdBQUcsY0FBYyxDQUFDLFNBQVMsSUFBSSxjQUFjLENBQUMsUUFBUSxFQUFFO2dCQUNsRSxJQUFJLEVBQUU7b0JBQ0osY0FBYyxDQUFDLEtBQUs7b0JBQ3BCLGNBQWMsQ0FBQyxLQUFLO29CQUNwQixHQUFHLGNBQWMsQ0FBQyxJQUFJLEtBQUssY0FBYyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEtBQUssY0FBYyxDQUFDLFVBQVUsRUFBRTtvQkFDekYsY0FBYyxDQUFDLEtBQUs7aUJBQ3JCO2FBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQscUJBQXFCLENBQUMsT0FBdUI7UUFDM0MsT0FBTyxhQUFhLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUM7WUFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMscUJBQXFCLEVBQUU7Z0JBQ2hELEtBQUssRUFBRSxPQUFPLENBQUMsV0FBVztnQkFDMUIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxVQUFVO2FBQ3pCLENBQUM7U0FDSCxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxFQUFFLEVBQUU7WUFDL0IsT0FBTztnQkFDTCxLQUFLLEVBQUUsU0FBUztnQkFDaEIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxpQkFBaUI7Z0JBQ25DLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDO2FBQy9ELENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELDRCQUE0QixDQUFDLFFBQXNCO1FBQ2pELE9BQU8sYUFBYSxDQUFDO1lBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGlDQUFpQyxDQUFDO1NBQzlELENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFO1lBQ2xCLE9BQU87Z0JBQ0wsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLFFBQVEsRUFBRSxRQUFRLENBQUMsSUFBSTtnQkFDdkIsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQzthQUM3QixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBOztZQS9FZ0MsbUJBQW1CO1lBQzNCLGtCQUFrQjs7QUFIOUIsNEJBQTRCO0lBSnhDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSwyQkFBMkI7UUFDckMsb2lDQUFxRDtLQUN0RCxDQUFDO0dBQ1csNEJBQTRCLENBaUZ4QztTQWpGWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWRkcmVzcyxcbiAgRGVsaXZlcnlNb2RlLFxuICBPcmRlcixcbiAgUGF5bWVudERldGFpbHMsXG4gIFRyYW5zbGF0aW9uU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyRGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuLi9vcmRlci1kZXRhaWxzLnNlcnZpY2UnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1vcmRlci1kZXRhaWxzLXNoaXBwaW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29yZGVyLWRldGFpbC1zaGlwcGluZy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyRGV0YWlsU2hpcHBpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG9yZGVyRGV0YWlsc1NlcnZpY2U6IE9yZGVyRGV0YWlsc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlXG4gICkge31cblxuICBvcmRlciQ6IE9ic2VydmFibGU8T3JkZXI+O1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMub3JkZXIkID0gdGhpcy5vcmRlckRldGFpbHNTZXJ2aWNlLmdldE9yZGVyRGV0YWlscygpO1xuICB9XG5cbiAgZ2V0QWRkcmVzc0NhcmRDb250ZW50KGFkZHJlc3M6IEFkZHJlc3MpOiBPYnNlcnZhYmxlPENhcmQ+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnYWRkcmVzc0NhcmQuc2hpcFRvJyksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW3RleHRUaXRsZV0pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0aXRsZTogdGV4dFRpdGxlLFxuICAgICAgICAgIHRleHRCb2xkOiBgJHthZGRyZXNzLmZpcnN0TmFtZX0gJHthZGRyZXNzLmxhc3ROYW1lfWAsXG4gICAgICAgICAgdGV4dDogW1xuICAgICAgICAgICAgYWRkcmVzcy5saW5lMSxcbiAgICAgICAgICAgIGFkZHJlc3MubGluZTIsXG4gICAgICAgICAgICBgJHthZGRyZXNzLnRvd259LCAke2FkZHJlc3MuY291bnRyeS5pc29jb2RlfSwgJHthZGRyZXNzLnBvc3RhbENvZGV9YCxcbiAgICAgICAgICAgIGFkZHJlc3MucGhvbmUsXG4gICAgICAgICAgXSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldEJpbGxpbmdBZGRyZXNzQ2FyZENvbnRlbnQoYmlsbGluZ0FkZHJlc3M6IEFkZHJlc3MpOiBPYnNlcnZhYmxlPENhcmQ+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnYWRkcmVzc0NhcmQuYmlsbFRvJyksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW3RleHRUaXRsZV0pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0aXRsZTogdGV4dFRpdGxlLFxuICAgICAgICAgIHRleHRCb2xkOiBgJHtiaWxsaW5nQWRkcmVzcy5maXJzdE5hbWV9ICR7YmlsbGluZ0FkZHJlc3MubGFzdE5hbWV9YCxcbiAgICAgICAgICB0ZXh0OiBbXG4gICAgICAgICAgICBiaWxsaW5nQWRkcmVzcy5saW5lMSxcbiAgICAgICAgICAgIGJpbGxpbmdBZGRyZXNzLmxpbmUyLFxuICAgICAgICAgICAgYCR7YmlsbGluZ0FkZHJlc3MudG93bn0sICR7YmlsbGluZ0FkZHJlc3MuY291bnRyeS5pc29jb2RlfSwgJHtiaWxsaW5nQWRkcmVzcy5wb3N0YWxDb2RlfWAsXG4gICAgICAgICAgICBiaWxsaW5nQWRkcmVzcy5waG9uZSxcbiAgICAgICAgICBdLFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0UGF5bWVudENhcmRDb250ZW50KHBheW1lbnQ6IFBheW1lbnREZXRhaWxzKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRGb3JtLnBheW1lbnQnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Q2FyZC5leHBpcmVzJywge1xuICAgICAgICBtb250aDogcGF5bWVudC5leHBpcnlNb250aCxcbiAgICAgICAgeWVhcjogcGF5bWVudC5leHBpcnlZZWFyLFxuICAgICAgfSksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW3RleHRUaXRsZSwgdGV4dEV4cGlyZXNdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgICB0ZXh0Qm9sZDogcGF5bWVudC5hY2NvdW50SG9sZGVyTmFtZSxcbiAgICAgICAgICB0ZXh0OiBbcGF5bWVudC5jYXJkVHlwZS5uYW1lLCBwYXltZW50LmNhcmROdW1iZXIsIHRleHRFeHBpcmVzXSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldFNoaXBwaW5nTWV0aG9kQ2FyZENvbnRlbnQoc2hpcHBpbmc6IERlbGl2ZXJ5TW9kZSk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjaGVja291dFNoaXBwaW5nLnNoaXBwaW5nTWV0aG9kJyksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW3RleHRUaXRsZV0pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0aXRsZTogdGV4dFRpdGxlLFxuICAgICAgICAgIHRleHRCb2xkOiBzaGlwcGluZy5uYW1lLFxuICAgICAgICAgIHRleHQ6IFtzaGlwcGluZy5kZXNjcmlwdGlvbl0sXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==