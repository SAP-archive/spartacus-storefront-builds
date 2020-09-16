import { Component } from '@angular/core';
import { TranslationService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { OrderDetailsService } from '../order-details.service';
export class OrderDetailShippingComponent {
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
}
OrderDetailShippingComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-order-details-shipping',
                template: "<ng-container *ngIf=\"order$ | async as order\">\n  <div class=\"cx-account-summary\">\n    <div class=\"container\">\n      <div class=\"cx-summary-card\">\n        <cx-card\n          [content]=\"getOrderCodeCardContent(order?.code) | async\"\n        ></cx-card>\n\n        <cx-card\n          [content]=\"getOrderCurrentDateCardContent(order?.created) | async\"\n        ></cx-card>\n\n        <cx-card\n          [content]=\"getOrderStatusCardContent(order.statusDisplay) | async\"\n        ></cx-card>\n      </div>\n\n      <ng-container\n        *ngIf=\"order.purchaseOrderNumber || order.purchaseOrderNumber === ''\"\n      >\n        <div class=\"cx-summary-card\">\n          <cx-card\n            [content]=\"\n              getPurchaseOrderNumber(order?.purchaseOrderNumber) | async\n            \"\n          ></cx-card>\n\n          <cx-card\n            [content]=\"getMethodOfPaymentCardContent(order.paymentInfo) | async\"\n          ></cx-card>\n\n          <ng-container *ngIf=\"order.costCenter\">\n            <cx-card\n              [content]=\"getCostCenterCardContent(order?.costCenter) | async\"\n            ></cx-card>\n          </ng-container>\n        </div>\n      </ng-container>\n\n      <div class=\"cx-summary-card\">\n        <ng-container *ngIf=\"order.deliveryAddress\">\n          <cx-card\n            [content]=\"getAddressCardContent(order?.deliveryAddress) | async\"\n          ></cx-card>\n        </ng-container>\n\n        <ng-container *ngIf=\"order.deliveryMode\">\n          <cx-card\n            [content]=\"getDeliveryModeCardContent(order?.deliveryMode) | async\"\n          ></cx-card>\n        </ng-container>\n      </div>\n\n      <ng-container *ngIf=\"order.paymentInfo\">\n        <div class=\"cx-summary-card\">\n          <cx-card\n            [content]=\"getPaymentInfoCardContent(order?.paymentInfo) | async\"\n          ></cx-card>\n\n          <cx-card\n            [content]=\"\n              getBillingAddressCardContent(order?.paymentInfo?.billingAddress)\n                | async\n            \"\n          ></cx-card>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n</ng-container>\n"
            },] }
];
OrderDetailShippingComponent.ctorParameters = () => [
    { type: OrderDetailsService },
    { type: TranslationService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlsLXNoaXBwaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbC1zaGlwcGluZy9vcmRlci1kZXRhaWwtc2hpcHBpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQU1MLGtCQUFrQixHQUNuQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQU0vRCxNQUFNLE9BQU8sNEJBQTRCO0lBQ3ZDLFlBQ1UsbUJBQXdDLEVBQ3hDLFdBQStCO1FBRC9CLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO0lBQ3RDLENBQUM7SUFJSixRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0QsQ0FBQztJQUVELHVCQUF1QixDQUFDLFNBQWlCO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLFdBQVc7YUFDcEIsU0FBUyxDQUFDLHVDQUF1QyxDQUFDO2FBQ2xELElBQUksQ0FDSCxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQ2hDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNsQixLQUFLLEVBQUUs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QUFDLFFBQVEsRUFBRTtZQUNsRSxJQUFJLEVBQUUsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7U0FDckUsQ0FBQyxDQUFDLENBQ0osQ0FBQztJQUNKLENBQUM7SUFFTyxPQUFPLENBQUMsU0FBZTtRQUM3QixNQUFNLElBQUksR0FBRyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWpELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXJCLE9BQU8sS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQztJQUN4QyxDQUFDOzs7WUE5SkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLG1vRUFBcUQ7YUFDdEQ7OztZQUxRLG1CQUFtQjtZQUwxQixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWRkcmVzcyxcbiAgQ29zdENlbnRlcixcbiAgRGVsaXZlcnlNb2RlLFxuICBPcmRlcixcbiAgUGF5bWVudERldGFpbHMsXG4gIFRyYW5zbGF0aW9uU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JkZXJEZXRhaWxzU2VydmljZSB9IGZyb20gJy4uL29yZGVyLWRldGFpbHMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW9yZGVyLWRldGFpbHMtc2hpcHBpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vb3JkZXItZGV0YWlsLXNoaXBwaW5nLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJEZXRhaWxTaGlwcGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgb3JkZXJEZXRhaWxzU2VydmljZTogT3JkZXJEZXRhaWxzU2VydmljZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2VcbiAgKSB7fVxuXG4gIG9yZGVyJDogT2JzZXJ2YWJsZTxPcmRlcj47XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vcmRlciQgPSB0aGlzLm9yZGVyRGV0YWlsc1NlcnZpY2UuZ2V0T3JkZXJEZXRhaWxzKCk7XG4gIH1cblxuICBnZXRPcmRlckNvZGVDYXJkQ29udGVudChvcmRlckNvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uXG4gICAgICAudHJhbnNsYXRlKCdjaGVja291dE9yZGVyQ29uZmlybWF0aW9uLm9yZGVyTnVtYmVyJylcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKCkgPT4gQm9vbGVhbihvcmRlckNvZGUpKSxcbiAgICAgICAgbWFwKCh0ZXh0VGl0bGUpID0+ICh7XG4gICAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgICB0ZXh0OiBbb3JkZXJDb2RlXSxcbiAgICAgICAgfSkpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0T3JkZXJDdXJyZW50RGF0ZUNhcmRDb250ZW50KGlzb0RhdGU6IHN0cmluZyk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uXG4gICAgICAudHJhbnNsYXRlKCdjaGVja291dE9yZGVyQ29uZmlybWF0aW9uLnBsYWNlZE9uJylcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHRleHRUaXRsZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRhdGUgPSB0aGlzLmdldERhdGUobmV3IERhdGUoaXNvRGF0ZSkpO1xuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpdGxlOiB0ZXh0VGl0bGUsXG4gICAgICAgICAgICB0ZXh0OiBbZGF0ZV0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBnZXRPcmRlclN0YXR1c0NhcmRDb250ZW50KHN0YXR1czogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NoZWNrb3V0T3JkZXJDb25maXJtYXRpb24uc3RhdHVzJyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnb3JkZXJEZXRhaWxzLnN0YXR1c0Rpc3BsYXknLCB7XG4gICAgICAgIGNvbnRleHQ6IHN0YXR1cyxcbiAgICAgIH0pLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFt0ZXh0VGl0bGUsIHRleHRTdGF0dXNdKSA9PiAoe1xuICAgICAgICB0aXRsZTogdGV4dFRpdGxlLFxuICAgICAgICB0ZXh0OiBbdGV4dFN0YXR1c10sXG4gICAgICB9KSlcbiAgICApO1xuICB9XG5cbiAgZ2V0UHVyY2hhc2VPcmRlck51bWJlcihwb051bWJlcjogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NoZWNrb3V0UmV2aWV3LnBvTnVtYmVyJyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY2hlY2tvdXRQTy5ub1BvTnVtYmVyJyksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW3RleHRUaXRsZSwgbm9uZVRleHRUaXRsZV0pID0+ICh7XG4gICAgICAgIHRpdGxlOiB0ZXh0VGl0bGUsXG4gICAgICAgIHRleHQ6IFtwb051bWJlciA/IHBvTnVtYmVyIDogbm9uZVRleHRUaXRsZV0sXG4gICAgICB9KSlcbiAgICApO1xuICB9XG5cbiAgZ2V0TWV0aG9kT2ZQYXltZW50Q2FyZENvbnRlbnQoXG4gICAgaGFzUGF5bWVudEluZm86IFBheW1lbnREZXRhaWxzXG4gICk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjaGVja291dFByb2dyZXNzLm1ldGhvZE9mUGF5bWVudCcpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRUeXBlcy5wYXltZW50VHlwZV9BQ0NPVU5UJyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudFR5cGVzLnBheW1lbnRUeXBlX0NBUkQnKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKChbdGV4dFRpdGxlLCB0ZXh0QWNjb3VudCwgdGV4dENhcmRdKSA9PiAoe1xuICAgICAgICB0aXRsZTogdGV4dFRpdGxlLFxuICAgICAgICB0ZXh0OiBbQm9vbGVhbihoYXNQYXltZW50SW5mbykgPyB0ZXh0Q2FyZCA6IHRleHRBY2NvdW50XSxcbiAgICAgIH0pKVxuICAgICk7XG4gIH1cblxuICBnZXRDb3N0Q2VudGVyQ2FyZENvbnRlbnQoY29zdENlbnRlcjogQ29zdENlbnRlcik6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY2hlY2tvdXRQTy5jb3N0Q2VudGVyJykucGlwZShcbiAgICAgIGZpbHRlcigoKSA9PiBCb29sZWFuKGNvc3RDZW50ZXIpKSxcbiAgICAgIG1hcCgodGV4dFRpdGxlKSA9PiAoe1xuICAgICAgICB0aXRsZTogdGV4dFRpdGxlLFxuICAgICAgICB0ZXh0Qm9sZDogY29zdENlbnRlcj8ubmFtZSxcbiAgICAgICAgdGV4dDogWycoJyArIGNvc3RDZW50ZXI/LnVuaXQ/Lm5hbWUgKyAnKSddLFxuICAgICAgfSkpXG4gICAgKTtcbiAgfVxuXG4gIGdldEFkZHJlc3NDYXJkQ29udGVudChkZWxpdmVyeUFkZHJlc3M6IEFkZHJlc3MpOiBPYnNlcnZhYmxlPENhcmQ+IHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2FkZHJlc3NDYXJkLnNoaXBUbycpLnBpcGUoXG4gICAgICBmaWx0ZXIoKCkgPT4gQm9vbGVhbihkZWxpdmVyeUFkZHJlc3MpKSxcbiAgICAgIG1hcCgodGV4dFRpdGxlKSA9PiAoe1xuICAgICAgICB0aXRsZTogdGV4dFRpdGxlLFxuICAgICAgICB0ZXh0Qm9sZDogYCR7ZGVsaXZlcnlBZGRyZXNzLmZpcnN0TmFtZX0gJHtkZWxpdmVyeUFkZHJlc3MubGFzdE5hbWV9YCxcbiAgICAgICAgdGV4dDogW2RlbGl2ZXJ5QWRkcmVzcy5mb3JtYXR0ZWRBZGRyZXNzLCBkZWxpdmVyeUFkZHJlc3MuY291bnRyeS5uYW1lXSxcbiAgICAgIH0pKVxuICAgICk7XG4gIH1cblxuICBnZXREZWxpdmVyeU1vZGVDYXJkQ29udGVudChkZWxpdmVyeU1vZGU6IERlbGl2ZXJ5TW9kZSk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY2hlY2tvdXRTaGlwcGluZy5zaGlwcGluZ01ldGhvZCcpLnBpcGUoXG4gICAgICBmaWx0ZXIoKCkgPT4gQm9vbGVhbihkZWxpdmVyeU1vZGUpKSxcbiAgICAgIG1hcCgodGV4dFRpdGxlKSA9PiAoe1xuICAgICAgICB0aXRsZTogdGV4dFRpdGxlLFxuICAgICAgICB0ZXh0Qm9sZDogZGVsaXZlcnlNb2RlLm5hbWUsXG4gICAgICAgIHRleHQ6IFtcbiAgICAgICAgICBkZWxpdmVyeU1vZGUuZGVzY3JpcHRpb24sXG4gICAgICAgICAgZGVsaXZlcnlNb2RlLmRlbGl2ZXJ5Q29zdD8uZm9ybWF0dGVkVmFsdWVcbiAgICAgICAgICAgID8gZGVsaXZlcnlNb2RlLmRlbGl2ZXJ5Q29zdD8uZm9ybWF0dGVkVmFsdWVcbiAgICAgICAgICAgIDogJycsXG4gICAgICAgIF0sXG4gICAgICB9KSlcbiAgICApO1xuICB9XG5cbiAgZ2V0UGF5bWVudEluZm9DYXJkQ29udGVudChwYXltZW50OiBQYXltZW50RGV0YWlscyk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Rm9ybS5wYXltZW50JyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudENhcmQuZXhwaXJlcycsIHtcbiAgICAgICAgbW9udGg6IEJvb2xlYW4ocGF5bWVudCkgPyBwYXltZW50LmV4cGlyeU1vbnRoIDogJycsXG4gICAgICAgIHllYXI6IEJvb2xlYW4ocGF5bWVudCkgPyBwYXltZW50LmV4cGlyeVllYXIgOiAnJyxcbiAgICAgIH0pLFxuICAgIF0pLnBpcGUoXG4gICAgICBmaWx0ZXIoKCkgPT4gQm9vbGVhbihwYXltZW50KSksXG4gICAgICBtYXAoKFt0ZXh0VGl0bGUsIHRleHRFeHBpcmVzXSkgPT4gKHtcbiAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgdGV4dEJvbGQ6IHBheW1lbnQuYWNjb3VudEhvbGRlck5hbWUsXG4gICAgICAgIHRleHQ6IFtwYXltZW50LmNhcmROdW1iZXIsIHRleHRFeHBpcmVzXSxcbiAgICAgIH0pKVxuICAgICk7XG4gIH1cblxuICBnZXRCaWxsaW5nQWRkcmVzc0NhcmRDb250ZW50KGJpbGxpbmdBZGRyZXNzOiBBZGRyZXNzKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Rm9ybS5iaWxsaW5nQWRkcmVzcycpLnBpcGUoXG4gICAgICBmaWx0ZXIoKCkgPT4gQm9vbGVhbihiaWxsaW5nQWRkcmVzcykpLFxuICAgICAgbWFwKCh0ZXh0VGl0bGUpID0+ICh7XG4gICAgICAgIHRpdGxlOiB0ZXh0VGl0bGUsXG4gICAgICAgIHRleHRCb2xkOiBgJHtiaWxsaW5nQWRkcmVzcy5maXJzdE5hbWV9ICR7YmlsbGluZ0FkZHJlc3MubGFzdE5hbWV9YCxcbiAgICAgICAgdGV4dDogW2JpbGxpbmdBZGRyZXNzLmZvcm1hdHRlZEFkZHJlc3MsIGJpbGxpbmdBZGRyZXNzLmNvdW50cnkubmFtZV0sXG4gICAgICB9KSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREYXRlKGdpdmVuRGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgY29uc3QgZGF0ZSA9IGdpdmVuRGF0ZS50b0RhdGVTdHJpbmcoKS5zcGxpdCgnICcpO1xuXG4gICAgY29uc3QgbW9udGggPSBkYXRlWzFdO1xuICAgIGNvbnN0IGRheSA9IGRhdGVbMl07XG4gICAgY29uc3QgeWVhciA9IGRhdGVbM107XG5cbiAgICByZXR1cm4gbW9udGggKyAnICcgKyBkYXkgKyAnICcgKyB5ZWFyO1xuICB9XG59XG4iXX0=