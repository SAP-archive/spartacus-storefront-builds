import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { CheckoutService, TranslationService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
export class OrderConfirmationOverviewComponent {
    constructor(checkoutService, translation) {
        this.checkoutService = checkoutService;
        this.translation = translation;
    }
    ngOnInit() {
        this.order$ = this.checkoutService.getOrderDetails();
    }
    ngOnDestroy() {
        this.checkoutService.clearCheckoutData();
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
OrderConfirmationOverviewComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-order-confirmation-overview',
                template: "<div class=\"cx-order-review-summary\" *ngIf=\"order$ | async as order\">\n  <div class=\"container\">\n    <div class=\"summary-card\">\n      <cx-card\n        [content]=\"getOrderCodeCardContent(order?.code) | async\"\n      ></cx-card>\n\n      <cx-card\n        [content]=\"getOrderCurrentDateCardContent(order?.created) | async\"\n      ></cx-card>\n\n      <cx-card\n        [content]=\"getOrderStatusCardContent(order.statusDisplay) | async\"\n      ></cx-card>\n    </div>\n\n    <ng-container\n      *ngIf=\"order.purchaseOrderNumber || order.purchaseOrderNumber === ''\"\n    >\n      <div class=\"summary-card\">\n        <cx-card\n          [content]=\"getPurchaseOrderNumber(order?.purchaseOrderNumber) | async\"\n        ></cx-card>\n\n        <cx-card\n          [content]=\"getMethodOfPaymentCardContent(order.paymentInfo) | async\"\n        ></cx-card>\n\n        <ng-container *ngIf=\"order.costCenter\">\n          <cx-card\n            [content]=\"getCostCenterCardContent(order?.costCenter) | async\"\n          ></cx-card>\n        </ng-container>\n      </div>\n    </ng-container>\n\n    <div class=\"summary-card\">\n      <ng-container *ngIf=\"order.deliveryAddress\">\n        <cx-card\n          [content]=\"getAddressCardContent(order?.deliveryAddress) | async\"\n        ></cx-card>\n      </ng-container>\n\n      <ng-container *ngIf=\"order.deliveryMode\">\n        <cx-card\n          [content]=\"getDeliveryModeCardContent(order?.deliveryMode) | async\"\n        ></cx-card>\n      </ng-container>\n    </div>\n\n    <ng-container *ngIf=\"order.paymentInfo\">\n      <div class=\"summary-card\">\n        <cx-card\n          [content]=\"getPaymentInfoCardContent(order?.paymentInfo) | async\"\n        ></cx-card>\n\n        <cx-card\n          [content]=\"\n            getBillingAddressCardContent(order?.paymentInfo?.billingAddress)\n              | async\n          \"\n        ></cx-card>\n      </div>\n    </ng-container>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
OrderConfirmationOverviewComponent.ctorParameters = () => [
    { type: CheckoutService },
    { type: TranslationService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLW92ZXJ2aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi9jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi1vdmVydmlldy9vcmRlci1jb25maXJtYXRpb24tb3ZlcnZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxHQUdWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFFTCxlQUFlLEVBS2Ysa0JBQWtCLEdBQ25CLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBUTdDLE1BQU0sT0FBTyxrQ0FBa0M7SUFHN0MsWUFDWSxlQUFnQyxFQUNsQyxXQUErQjtRQUQ3QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDbEMsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO0lBQ3RDLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRCx1QkFBdUIsQ0FBQyxTQUFpQjtRQUN2QyxPQUFPLElBQUksQ0FBQyxXQUFXO2FBQ3BCLFNBQVMsQ0FBQyx1Q0FBdUMsQ0FBQzthQUNsRCxJQUFJLENBQ0gsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUNoQyxHQUFHLENB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UztZQUNoQixRQUFRLEVBQUUsR0FBRyxjQUFjLENBQUMsU0FBUyxJQUFJLGNBQWMsQ0FBQyxRQUFRLEVBQUU7WUFDbEUsSUFBSSxFQUFFLENBQUMsY0FBYyxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1NBQ3JFLENBQUMsQ0FBQyxDQUNKLENBQUM7SUFDSixDQUFDO0lBRU8sT0FBTyxDQUFDLFNBQWU7UUFDN0IsTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVqRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVyQixPQUFPLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7SUFDeEMsQ0FBQzs7O1lBbktGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQywyOERBQTJEO2dCQUMzRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O1lBZkMsZUFBZTtZQUtmLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFkZHJlc3MsXG4gIENoZWNrb3V0U2VydmljZSxcbiAgQ29zdENlbnRlcixcbiAgRGVsaXZlcnlNb2RlLFxuICBPcmRlcixcbiAgUGF5bWVudERldGFpbHMsXG4gIFRyYW5zbGF0aW9uU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1vcmRlci1jb25maXJtYXRpb24tb3ZlcnZpZXcnLFxuICB0ZW1wbGF0ZVVybDogJy4vb3JkZXItY29uZmlybWF0aW9uLW92ZXJ2aWV3LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyQ29uZmlybWF0aW9uT3ZlcnZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIG9yZGVyJDogT2JzZXJ2YWJsZTxPcmRlcj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U2VydmljZTogQ2hlY2tvdXRTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vcmRlciQgPSB0aGlzLmNoZWNrb3V0U2VydmljZS5nZXRPcmRlckRldGFpbHMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNsZWFyQ2hlY2tvdXREYXRhKCk7XG4gIH1cblxuICBnZXRPcmRlckNvZGVDYXJkQ29udGVudChvcmRlckNvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uXG4gICAgICAudHJhbnNsYXRlKCdjaGVja291dE9yZGVyQ29uZmlybWF0aW9uLm9yZGVyTnVtYmVyJylcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKCkgPT4gQm9vbGVhbihvcmRlckNvZGUpKSxcbiAgICAgICAgbWFwKCh0ZXh0VGl0bGUpID0+ICh7XG4gICAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgICB0ZXh0OiBbb3JkZXJDb2RlXSxcbiAgICAgICAgfSkpXG4gICAgICApO1xuICB9XG5cbiAgZ2V0T3JkZXJDdXJyZW50RGF0ZUNhcmRDb250ZW50KGlzb0RhdGU6IHN0cmluZyk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uXG4gICAgICAudHJhbnNsYXRlKCdjaGVja291dE9yZGVyQ29uZmlybWF0aW9uLnBsYWNlZE9uJylcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHRleHRUaXRsZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRhdGUgPSB0aGlzLmdldERhdGUobmV3IERhdGUoaXNvRGF0ZSkpO1xuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpdGxlOiB0ZXh0VGl0bGUsXG4gICAgICAgICAgICB0ZXh0OiBbZGF0ZV0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBnZXRPcmRlclN0YXR1c0NhcmRDb250ZW50KHN0YXR1czogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NoZWNrb3V0T3JkZXJDb25maXJtYXRpb24uc3RhdHVzJyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnb3JkZXJEZXRhaWxzLnN0YXR1c0Rpc3BsYXknLCB7XG4gICAgICAgIGNvbnRleHQ6IHN0YXR1cyxcbiAgICAgIH0pLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFt0ZXh0VGl0bGUsIHRleHRTdGF0dXNdKSA9PiAoe1xuICAgICAgICB0aXRsZTogdGV4dFRpdGxlLFxuICAgICAgICB0ZXh0OiBbdGV4dFN0YXR1c10sXG4gICAgICB9KSlcbiAgICApO1xuICB9XG5cbiAgZ2V0UHVyY2hhc2VPcmRlck51bWJlcihwb051bWJlcjogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NoZWNrb3V0UmV2aWV3LnBvTnVtYmVyJyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY2hlY2tvdXRQTy5ub1BvTnVtYmVyJyksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW3RleHRUaXRsZSwgbm9uZVRleHRUaXRsZV0pID0+ICh7XG4gICAgICAgIHRpdGxlOiB0ZXh0VGl0bGUsXG4gICAgICAgIHRleHQ6IFtwb051bWJlciA/IHBvTnVtYmVyIDogbm9uZVRleHRUaXRsZV0sXG4gICAgICB9KSlcbiAgICApO1xuICB9XG5cbiAgZ2V0TWV0aG9kT2ZQYXltZW50Q2FyZENvbnRlbnQoXG4gICAgaGFzUGF5bWVudEluZm86IFBheW1lbnREZXRhaWxzXG4gICk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjaGVja291dFByb2dyZXNzLm1ldGhvZE9mUGF5bWVudCcpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRUeXBlcy5wYXltZW50VHlwZV9BQ0NPVU5UJyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudFR5cGVzLnBheW1lbnRUeXBlX0NBUkQnKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKChbdGV4dFRpdGxlLCB0ZXh0QWNjb3VudCwgdGV4dENhcmRdKSA9PiAoe1xuICAgICAgICB0aXRsZTogdGV4dFRpdGxlLFxuICAgICAgICB0ZXh0OiBbQm9vbGVhbihoYXNQYXltZW50SW5mbykgPyB0ZXh0Q2FyZCA6IHRleHRBY2NvdW50XSxcbiAgICAgIH0pKVxuICAgICk7XG4gIH1cblxuICBnZXRDb3N0Q2VudGVyQ2FyZENvbnRlbnQoY29zdENlbnRlcjogQ29zdENlbnRlcik6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY2hlY2tvdXRQTy5jb3N0Q2VudGVyJykucGlwZShcbiAgICAgIGZpbHRlcigoKSA9PiBCb29sZWFuKGNvc3RDZW50ZXIpKSxcbiAgICAgIG1hcCgodGV4dFRpdGxlKSA9PiAoe1xuICAgICAgICB0aXRsZTogdGV4dFRpdGxlLFxuICAgICAgICB0ZXh0Qm9sZDogY29zdENlbnRlcj8ubmFtZSxcbiAgICAgICAgdGV4dDogWycoJyArIGNvc3RDZW50ZXI/LnVuaXQ/Lm5hbWUgKyAnKSddLFxuICAgICAgfSkpXG4gICAgKTtcbiAgfVxuXG4gIGdldEFkZHJlc3NDYXJkQ29udGVudChkZWxpdmVyeUFkZHJlc3M6IEFkZHJlc3MpOiBPYnNlcnZhYmxlPENhcmQ+IHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2FkZHJlc3NDYXJkLnNoaXBUbycpLnBpcGUoXG4gICAgICBmaWx0ZXIoKCkgPT4gQm9vbGVhbihkZWxpdmVyeUFkZHJlc3MpKSxcbiAgICAgIG1hcCgodGV4dFRpdGxlKSA9PiAoe1xuICAgICAgICB0aXRsZTogdGV4dFRpdGxlLFxuICAgICAgICB0ZXh0Qm9sZDogYCR7ZGVsaXZlcnlBZGRyZXNzLmZpcnN0TmFtZX0gJHtkZWxpdmVyeUFkZHJlc3MubGFzdE5hbWV9YCxcbiAgICAgICAgdGV4dDogW2RlbGl2ZXJ5QWRkcmVzcy5mb3JtYXR0ZWRBZGRyZXNzLCBkZWxpdmVyeUFkZHJlc3MuY291bnRyeS5uYW1lXSxcbiAgICAgIH0pKVxuICAgICk7XG4gIH1cblxuICBnZXREZWxpdmVyeU1vZGVDYXJkQ29udGVudChkZWxpdmVyeU1vZGU6IERlbGl2ZXJ5TW9kZSk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY2hlY2tvdXRTaGlwcGluZy5zaGlwcGluZ01ldGhvZCcpLnBpcGUoXG4gICAgICBmaWx0ZXIoKCkgPT4gQm9vbGVhbihkZWxpdmVyeU1vZGUpKSxcbiAgICAgIG1hcCgodGV4dFRpdGxlKSA9PiAoe1xuICAgICAgICB0aXRsZTogdGV4dFRpdGxlLFxuICAgICAgICB0ZXh0Qm9sZDogZGVsaXZlcnlNb2RlLm5hbWUsXG4gICAgICAgIHRleHQ6IFtcbiAgICAgICAgICBkZWxpdmVyeU1vZGUuZGVzY3JpcHRpb24sXG4gICAgICAgICAgZGVsaXZlcnlNb2RlLmRlbGl2ZXJ5Q29zdD8uZm9ybWF0dGVkVmFsdWVcbiAgICAgICAgICAgID8gZGVsaXZlcnlNb2RlLmRlbGl2ZXJ5Q29zdD8uZm9ybWF0dGVkVmFsdWVcbiAgICAgICAgICAgIDogJycsXG4gICAgICAgIF0sXG4gICAgICB9KSlcbiAgICApO1xuICB9XG5cbiAgZ2V0UGF5bWVudEluZm9DYXJkQ29udGVudChwYXltZW50OiBQYXltZW50RGV0YWlscyk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Rm9ybS5wYXltZW50JyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudENhcmQuZXhwaXJlcycsIHtcbiAgICAgICAgbW9udGg6IEJvb2xlYW4ocGF5bWVudCkgPyBwYXltZW50LmV4cGlyeU1vbnRoIDogJycsXG4gICAgICAgIHllYXI6IEJvb2xlYW4ocGF5bWVudCkgPyBwYXltZW50LmV4cGlyeVllYXIgOiAnJyxcbiAgICAgIH0pLFxuICAgIF0pLnBpcGUoXG4gICAgICBmaWx0ZXIoKCkgPT4gQm9vbGVhbihwYXltZW50KSksXG4gICAgICBtYXAoKFt0ZXh0VGl0bGUsIHRleHRFeHBpcmVzXSkgPT4gKHtcbiAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgdGV4dEJvbGQ6IHBheW1lbnQuYWNjb3VudEhvbGRlck5hbWUsXG4gICAgICAgIHRleHQ6IFtwYXltZW50LmNhcmROdW1iZXIsIHRleHRFeHBpcmVzXSxcbiAgICAgIH0pKVxuICAgICk7XG4gIH1cblxuICBnZXRCaWxsaW5nQWRkcmVzc0NhcmRDb250ZW50KGJpbGxpbmdBZGRyZXNzOiBBZGRyZXNzKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Rm9ybS5iaWxsaW5nQWRkcmVzcycpLnBpcGUoXG4gICAgICBmaWx0ZXIoKCkgPT4gQm9vbGVhbihiaWxsaW5nQWRkcmVzcykpLFxuICAgICAgbWFwKCh0ZXh0VGl0bGUpID0+ICh7XG4gICAgICAgIHRpdGxlOiB0ZXh0VGl0bGUsXG4gICAgICAgIHRleHRCb2xkOiBgJHtiaWxsaW5nQWRkcmVzcy5maXJzdE5hbWV9ICR7YmlsbGluZ0FkZHJlc3MubGFzdE5hbWV9YCxcbiAgICAgICAgdGV4dDogW2JpbGxpbmdBZGRyZXNzLmZvcm1hdHRlZEFkZHJlc3MsIGJpbGxpbmdBZGRyZXNzLmNvdW50cnkubmFtZV0sXG4gICAgICB9KSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREYXRlKGdpdmVuRGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgY29uc3QgZGF0ZSA9IGdpdmVuRGF0ZS50b0RhdGVTdHJpbmcoKS5zcGxpdCgnICcpO1xuXG4gICAgY29uc3QgbW9udGggPSBkYXRlWzFdO1xuICAgIGNvbnN0IGRheSA9IGRhdGVbMl07XG4gICAgY29uc3QgeWVhciA9IGRhdGVbM107XG5cbiAgICByZXR1cm4gbW9udGggKyAnICcgKyBkYXkgKyAnICcgKyB5ZWFyO1xuICB9XG59XG4iXX0=