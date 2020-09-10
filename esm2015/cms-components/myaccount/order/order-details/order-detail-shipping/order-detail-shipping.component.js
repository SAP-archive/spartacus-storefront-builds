import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Address, CostCenter, DeliveryMode, Order, PaymentDetails, TranslationService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { OrderDetailsService } from '../order-details.service';
let OrderDetailShippingComponent = class OrderDetailShippingComponent {
    constructor(orderDetailsService, translation) {
        this.orderDetailsService = orderDetailsService;
        this.translation = translation;
    }
    ngOnInit() {
        this.order$ = this.orderDetailsService.getOrderDetails();
    }
    getOrderCodeCardContent(orderCode) {
        return this.translation
            .translate('checkoutOrderConfirmation.orderNumber')
            .pipe(filter(() => Boolean(orderCode)), map((textTitle) => ({
            title: textTitle,
            text: [orderCode],
        })));
    }
    getOrderCurrentDateCardContent(isoDate) {
        return this.translation
            .translate('checkoutOrderConfirmation.placedOn')
            .pipe(map((textTitle) => {
            const date = this.getDate(new Date(isoDate));
            return {
                title: textTitle,
                text: [date],
            };
        }));
    }
    getOrderStatusCardContent(status) {
        return combineLatest([
            this.translation.translate('checkoutOrderConfirmation.status'),
            this.translation.translate('orderDetails.statusDisplay', {
                context: status,
            }),
        ]).pipe(map(([textTitle, textStatus]) => ({
            title: textTitle,
            text: [textStatus],
        })));
    }
    getPurchaseOrderNumber(poNumber) {
        return combineLatest([
            this.translation.translate('checkoutReview.poNumber'),
            this.translation.translate('checkoutPO.noPoNumber'),
        ]).pipe(map(([textTitle, noneTextTitle]) => ({
            title: textTitle,
            text: [poNumber ? poNumber : noneTextTitle],
        })));
    }
    getMethodOfPaymentCardContent(hasPaymentInfo) {
        return combineLatest([
            this.translation.translate('checkoutProgress.methodOfPayment'),
            this.translation.translate('paymentTypes.paymentType_ACCOUNT'),
            this.translation.translate('paymentTypes.paymentType_CARD'),
        ]).pipe(map(([textTitle, textAccount, textCard]) => ({
            title: textTitle,
            text: [Boolean(hasPaymentInfo) ? textCard : textAccount],
        })));
    }
    getCostCenterCardContent(costCenter) {
        return this.translation.translate('checkoutPO.costCenter').pipe(filter(() => Boolean(costCenter)), map((textTitle) => {
            var _a;
            return ({
                title: textTitle,
                textBold: costCenter === null || costCenter === void 0 ? void 0 : costCenter.name,
                text: ['(' + ((_a = costCenter === null || costCenter === void 0 ? void 0 : costCenter.unit) === null || _a === void 0 ? void 0 : _a.name) + ')'],
            });
        }));
    }
    getAddressCardContent(deliveryAddress) {
        return this.translation.translate('addressCard.shipTo').pipe(filter(() => Boolean(deliveryAddress)), map((textTitle) => ({
            title: textTitle,
            textBold: `${deliveryAddress.firstName} ${deliveryAddress.lastName}`,
            text: [deliveryAddress.formattedAddress, deliveryAddress.country.name],
        })));
    }
    getDeliveryModeCardContent(deliveryMode) {
        return this.translation.translate('checkoutShipping.shippingMethod').pipe(filter(() => Boolean(deliveryMode)), map((textTitle) => {
            var _a, _b;
            return ({
                title: textTitle,
                textBold: deliveryMode.name,
                text: [
                    deliveryMode.description,
                    ((_a = deliveryMode.deliveryCost) === null || _a === void 0 ? void 0 : _a.formattedValue) ? (_b = deliveryMode.deliveryCost) === null || _b === void 0 ? void 0 : _b.formattedValue : '',
                ],
            });
        }));
    }
    getPaymentInfoCardContent(payment) {
        return combineLatest([
            this.translation.translate('paymentForm.payment'),
            this.translation.translate('paymentCard.expires', {
                month: Boolean(payment) ? payment.expiryMonth : '',
                year: Boolean(payment) ? payment.expiryYear : '',
            }),
        ]).pipe(filter(() => Boolean(payment)), map(([textTitle, textExpires]) => ({
            title: textTitle,
            textBold: payment.accountHolderName,
            text: [payment.cardNumber, textExpires],
        })));
    }
    getBillingAddressCardContent(billingAddress) {
        return this.translation.translate('paymentForm.billingAddress').pipe(filter(() => Boolean(billingAddress)), map((textTitle) => ({
            title: textTitle,
            textBold: `${billingAddress.firstName} ${billingAddress.lastName}`,
            text: [billingAddress.formattedAddress, billingAddress.country.name],
        })));
    }
    getDate(givenDate) {
        const date = givenDate.toDateString().split(' ');
        const month = date[1];
        const day = date[2];
        const year = date[3];
        return month + ' ' + day + ' ' + year;
    }
};
OrderDetailShippingComponent.ctorParameters = () => [
    { type: OrderDetailsService },
    { type: TranslationService }
];
OrderDetailShippingComponent = __decorate([
    Component({
        selector: 'cx-order-details-shipping',
        template: "<ng-container *ngIf=\"order$ | async as order\">\n  <div class=\"cx-account-summary\">\n    <div class=\"container\">\n      <div class=\"cx-summary-card\">\n        <cx-card\n          [content]=\"getOrderCodeCardContent(order?.code) | async\"\n        ></cx-card>\n\n        <cx-card\n          [content]=\"getOrderCurrentDateCardContent(order?.created) | async\"\n        ></cx-card>\n\n        <cx-card\n          [content]=\"getOrderStatusCardContent(order.statusDisplay) | async\"\n        ></cx-card>\n      </div>\n\n      <ng-container\n        *ngIf=\"order.purchaseOrderNumber || order.purchaseOrderNumber === ''\"\n      >\n        <div class=\"cx-summary-card\">\n          <cx-card\n            [content]=\"\n              getPurchaseOrderNumber(order?.purchaseOrderNumber) | async\n            \"\n          ></cx-card>\n\n          <cx-card\n            [content]=\"getMethodOfPaymentCardContent(order.paymentInfo) | async\"\n          ></cx-card>\n\n          <ng-container *ngIf=\"order.costCenter\">\n            <cx-card\n              [content]=\"getCostCenterCardContent(order?.costCenter) | async\"\n            ></cx-card>\n          </ng-container>\n        </div>\n      </ng-container>\n\n      <div class=\"cx-summary-card\">\n        <ng-container *ngIf=\"order.deliveryAddress\">\n          <cx-card\n            [content]=\"getAddressCardContent(order?.deliveryAddress) | async\"\n          ></cx-card>\n        </ng-container>\n\n        <ng-container *ngIf=\"order.deliveryMode\">\n          <cx-card\n            [content]=\"getDeliveryModeCardContent(order?.deliveryMode) | async\"\n          ></cx-card>\n        </ng-container>\n      </div>\n\n      <ng-container *ngIf=\"order.paymentInfo\">\n        <div class=\"cx-summary-card\">\n          <cx-card\n            [content]=\"getPaymentInfoCardContent(order?.paymentInfo) | async\"\n          ></cx-card>\n\n          <cx-card\n            [content]=\"\n              getBillingAddressCardContent(order?.paymentInfo?.billingAddress)\n                | async\n            \"\n          ></cx-card>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n</ng-container>\n"
    })
], OrderDetailShippingComponent);
export { OrderDetailShippingComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlsLXNoaXBwaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbC1zaGlwcGluZy9vcmRlci1kZXRhaWwtc2hpcHBpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFDTCxPQUFPLEVBQ1AsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsY0FBYyxFQUNkLGtCQUFrQixHQUNuQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQU0vRCxJQUFhLDRCQUE0QixHQUF6QyxNQUFhLDRCQUE0QjtJQUN2QyxZQUNVLG1CQUF3QyxFQUN4QyxXQUErQjtRQUQvQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtJQUN0QyxDQUFDO0lBSUosUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNELENBQUM7SUFFRCx1QkFBdUIsQ0FBQyxTQUFpQjtRQUN2QyxPQUFPLElBQUksQ0FBQyxXQUFXO2FBQ3BCLFNBQVMsQ0FBQyx1Q0FBdUMsQ0FBQzthQUNsRCxJQUFJLENBQ0gsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUNoQyxHQUFHLENBQUMsQ0FBQyxT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QUFRLEVBQUUsR0FBRyxjQUFjLENBQUMsU0FBUyxJQUFJLGNBQWMsQ0FBQyxRQUFRLEVBQUU7WUFDbEUsSUFBSSxFQUFFLENBQUMsY0FBYyxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1NBQ3JFLENBQUMsQ0FBQyxDQUNKLENBQUM7SUFDSixDQUFDO0lBRU8sT0FBTyxDQUFDLFNBQWU7UUFDN0IsTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVqRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVyQixPQUFPLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7SUFDeEMsQ0FBQztDQUNGLENBQUE7O1lBekpnQyxtQkFBbUI7WUFDM0Isa0JBQWtCOztBQUg5Qiw0QkFBNEI7SUFKeEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDJCQUEyQjtRQUNyQyxtb0VBQXFEO0tBQ3RELENBQUM7R0FDVyw0QkFBNEIsQ0EySnhDO1NBM0pZLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBZGRyZXNzLFxuICBDb3N0Q2VudGVyLFxuICBEZWxpdmVyeU1vZGUsXG4gIE9yZGVyLFxuICBQYXltZW50RGV0YWlscyxcbiAgVHJhbnNsYXRpb25TZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlckRldGFpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vb3JkZXItZGV0YWlscy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtb3JkZXItZGV0YWlscy1zaGlwcGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9vcmRlci1kZXRhaWwtc2hpcHBpbmcuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckRldGFpbFNoaXBwaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBvcmRlckRldGFpbHNTZXJ2aWNlOiBPcmRlckRldGFpbHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZVxuICApIHt9XG5cbiAgb3JkZXIkOiBPYnNlcnZhYmxlPE9yZGVyPjtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm9yZGVyJCA9IHRoaXMub3JkZXJEZXRhaWxzU2VydmljZS5nZXRPcmRlckRldGFpbHMoKTtcbiAgfVxuXG4gIGdldE9yZGVyQ29kZUNhcmRDb250ZW50KG9yZGVyQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25cbiAgICAgIC50cmFuc2xhdGUoJ2NoZWNrb3V0T3JkZXJDb25maXJtYXRpb24ub3JkZXJOdW1iZXInKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoKSA9PiBCb29sZWFuKG9yZGVyQ29kZSkpLFxuICAgICAgICBtYXAoKHRleHRUaXRsZSkgPT4gKHtcbiAgICAgICAgICB0aXRsZTogdGV4dFRpdGxlLFxuICAgICAgICAgIHRleHQ6IFtvcmRlckNvZGVdLFxuICAgICAgICB9KSlcbiAgICAgICk7XG4gIH1cblxuICBnZXRPcmRlckN1cnJlbnREYXRlQ2FyZENvbnRlbnQoaXNvRGF0ZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25cbiAgICAgIC50cmFuc2xhdGUoJ2NoZWNrb3V0T3JkZXJDb25maXJtYXRpb24ucGxhY2VkT24nKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgodGV4dFRpdGxlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0ZSA9IHRoaXMuZ2V0RGF0ZShuZXcgRGF0ZShpc29EYXRlKSk7XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgICAgIHRleHQ6IFtkYXRlXSxcbiAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIGdldE9yZGVyU3RhdHVzQ2FyZENvbnRlbnQoc3RhdHVzOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENhcmQ+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY2hlY2tvdXRPcmRlckNvbmZpcm1hdGlvbi5zdGF0dXMnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdvcmRlckRldGFpbHMuc3RhdHVzRGlzcGxheScsIHtcbiAgICAgICAgY29udGV4dDogc3RhdHVzLFxuICAgICAgfSksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW3RleHRUaXRsZSwgdGV4dFN0YXR1c10pID0+ICh7XG4gICAgICAgIHRpdGxlOiB0ZXh0VGl0bGUsXG4gICAgICAgIHRleHQ6IFt0ZXh0U3RhdHVzXSxcbiAgICAgIH0pKVxuICAgICk7XG4gIH1cblxuICBnZXRQdXJjaGFzZU9yZGVyTnVtYmVyKHBvTnVtYmVyOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENhcmQ+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY2hlY2tvdXRSZXZpZXcucG9OdW1iZXInKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjaGVja291dFBPLm5vUG9OdW1iZXInKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKChbdGV4dFRpdGxlLCBub25lVGV4dFRpdGxlXSkgPT4gKHtcbiAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgdGV4dDogW3BvTnVtYmVyID8gcG9OdW1iZXIgOiBub25lVGV4dFRpdGxlXSxcbiAgICAgIH0pKVxuICAgICk7XG4gIH1cblxuICBnZXRNZXRob2RPZlBheW1lbnRDYXJkQ29udGVudChcbiAgICBoYXNQYXltZW50SW5mbzogUGF5bWVudERldGFpbHNcbiAgKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NoZWNrb3V0UHJvZ3Jlc3MubWV0aG9kT2ZQYXltZW50JyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudFR5cGVzLnBheW1lbnRUeXBlX0FDQ09VTlQnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50VHlwZXMucGF5bWVudFR5cGVfQ0FSRCcpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFt0ZXh0VGl0bGUsIHRleHRBY2NvdW50LCB0ZXh0Q2FyZF0pID0+ICh7XG4gICAgICAgIHRpdGxlOiB0ZXh0VGl0bGUsXG4gICAgICAgIHRleHQ6IFtCb29sZWFuKGhhc1BheW1lbnRJbmZvKSA/IHRleHRDYXJkIDogdGV4dEFjY291bnRdLFxuICAgICAgfSkpXG4gICAgKTtcbiAgfVxuXG4gIGdldENvc3RDZW50ZXJDYXJkQ29udGVudChjb3N0Q2VudGVyOiBDb3N0Q2VudGVyKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjaGVja291dFBPLmNvc3RDZW50ZXInKS5waXBlKFxuICAgICAgZmlsdGVyKCgpID0+IEJvb2xlYW4oY29zdENlbnRlcikpLFxuICAgICAgbWFwKCh0ZXh0VGl0bGUpID0+ICh7XG4gICAgICAgIHRpdGxlOiB0ZXh0VGl0bGUsXG4gICAgICAgIHRleHRCb2xkOiBjb3N0Q2VudGVyPy5uYW1lLFxuICAgICAgICB0ZXh0OiBbJygnICsgY29zdENlbnRlcj8udW5pdD8ubmFtZSArICcpJ10sXG4gICAgICB9KSlcbiAgICApO1xuICB9XG5cbiAgZ2V0QWRkcmVzc0NhcmRDb250ZW50KGRlbGl2ZXJ5QWRkcmVzczogQWRkcmVzcyk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnYWRkcmVzc0NhcmQuc2hpcFRvJykucGlwZShcbiAgICAgIGZpbHRlcigoKSA9PiBCb29sZWFuKGRlbGl2ZXJ5QWRkcmVzcykpLFxuICAgICAgbWFwKCh0ZXh0VGl0bGUpID0+ICh7XG4gICAgICAgIHRpdGxlOiB0ZXh0VGl0bGUsXG4gICAgICAgIHRleHRCb2xkOiBgJHtkZWxpdmVyeUFkZHJlc3MuZmlyc3ROYW1lfSAke2RlbGl2ZXJ5QWRkcmVzcy5sYXN0TmFtZX1gLFxuICAgICAgICB0ZXh0OiBbZGVsaXZlcnlBZGRyZXNzLmZvcm1hdHRlZEFkZHJlc3MsIGRlbGl2ZXJ5QWRkcmVzcy5jb3VudHJ5Lm5hbWVdLFxuICAgICAgfSkpXG4gICAgKTtcbiAgfVxuXG4gIGdldERlbGl2ZXJ5TW9kZUNhcmRDb250ZW50KGRlbGl2ZXJ5TW9kZTogRGVsaXZlcnlNb2RlKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjaGVja291dFNoaXBwaW5nLnNoaXBwaW5nTWV0aG9kJykucGlwZShcbiAgICAgIGZpbHRlcigoKSA9PiBCb29sZWFuKGRlbGl2ZXJ5TW9kZSkpLFxuICAgICAgbWFwKCh0ZXh0VGl0bGUpID0+ICh7XG4gICAgICAgIHRpdGxlOiB0ZXh0VGl0bGUsXG4gICAgICAgIHRleHRCb2xkOiBkZWxpdmVyeU1vZGUubmFtZSxcbiAgICAgICAgdGV4dDogW1xuICAgICAgICAgIGRlbGl2ZXJ5TW9kZS5kZXNjcmlwdGlvbixcbiAgICAgICAgICBkZWxpdmVyeU1vZGUuZGVsaXZlcnlDb3N0Py5mb3JtYXR0ZWRWYWx1ZVxuICAgICAgICAgICAgPyBkZWxpdmVyeU1vZGUuZGVsaXZlcnlDb3N0Py5mb3JtYXR0ZWRWYWx1ZVxuICAgICAgICAgICAgOiAnJyxcbiAgICAgICAgXSxcbiAgICAgIH0pKVxuICAgICk7XG4gIH1cblxuICBnZXRQYXltZW50SW5mb0NhcmRDb250ZW50KHBheW1lbnQ6IFBheW1lbnREZXRhaWxzKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRGb3JtLnBheW1lbnQnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Q2FyZC5leHBpcmVzJywge1xuICAgICAgICBtb250aDogQm9vbGVhbihwYXltZW50KSA/IHBheW1lbnQuZXhwaXJ5TW9udGggOiAnJyxcbiAgICAgICAgeWVhcjogQm9vbGVhbihwYXltZW50KSA/IHBheW1lbnQuZXhwaXJ5WWVhciA6ICcnLFxuICAgICAgfSksXG4gICAgXSkucGlwZShcbiAgICAgIGZpbHRlcigoKSA9PiBCb29sZWFuKHBheW1lbnQpKSxcbiAgICAgIG1hcCgoW3RleHRUaXRsZSwgdGV4dEV4cGlyZXNdKSA9PiAoe1xuICAgICAgICB0aXRsZTogdGV4dFRpdGxlLFxuICAgICAgICB0ZXh0Qm9sZDogcGF5bWVudC5hY2NvdW50SG9sZGVyTmFtZSxcbiAgICAgICAgdGV4dDogW3BheW1lbnQuY2FyZE51bWJlciwgdGV4dEV4cGlyZXNdLFxuICAgICAgfSkpXG4gICAgKTtcbiAgfVxuXG4gIGdldEJpbGxpbmdBZGRyZXNzQ2FyZENvbnRlbnQoYmlsbGluZ0FkZHJlc3M6IEFkZHJlc3MpOiBPYnNlcnZhYmxlPENhcmQ+IHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRGb3JtLmJpbGxpbmdBZGRyZXNzJykucGlwZShcbiAgICAgIGZpbHRlcigoKSA9PiBCb29sZWFuKGJpbGxpbmdBZGRyZXNzKSksXG4gICAgICBtYXAoKHRleHRUaXRsZSkgPT4gKHtcbiAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgdGV4dEJvbGQ6IGAke2JpbGxpbmdBZGRyZXNzLmZpcnN0TmFtZX0gJHtiaWxsaW5nQWRkcmVzcy5sYXN0TmFtZX1gLFxuICAgICAgICB0ZXh0OiBbYmlsbGluZ0FkZHJlc3MuZm9ybWF0dGVkQWRkcmVzcywgYmlsbGluZ0FkZHJlc3MuY291bnRyeS5uYW1lXSxcbiAgICAgIH0pKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldERhdGUoZ2l2ZW5EYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICBjb25zdCBkYXRlID0gZ2l2ZW5EYXRlLnRvRGF0ZVN0cmluZygpLnNwbGl0KCcgJyk7XG5cbiAgICBjb25zdCBtb250aCA9IGRhdGVbMV07XG4gICAgY29uc3QgZGF5ID0gZGF0ZVsyXTtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZVszXTtcblxuICAgIHJldHVybiBtb250aCArICcgJyArIGRheSArICcgJyArIHllYXI7XG4gIH1cbn1cbiJdfQ==