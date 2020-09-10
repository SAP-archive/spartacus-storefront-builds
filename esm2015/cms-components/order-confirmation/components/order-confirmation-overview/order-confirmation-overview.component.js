import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { Address, CheckoutService, CostCenter, DeliveryMode, Order, PaymentDetails, TranslationService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
let OrderConfirmationOverviewComponent = class OrderConfirmationOverviewComponent {
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
};
OrderConfirmationOverviewComponent.ctorParameters = () => [
    { type: CheckoutService },
    { type: TranslationService }
];
OrderConfirmationOverviewComponent = __decorate([
    Component({
        selector: 'cx-order-confirmation-overview',
        template: "<div class=\"cx-order-review-summary\" *ngIf=\"order$ | async as order\">\n  <div class=\"container\">\n    <div class=\"summary-card\">\n      <cx-card\n        [content]=\"getOrderCodeCardContent(order?.code) | async\"\n      ></cx-card>\n\n      <cx-card\n        [content]=\"getOrderCurrentDateCardContent(order?.created) | async\"\n      ></cx-card>\n\n      <cx-card\n        [content]=\"getOrderStatusCardContent(order.statusDisplay) | async\"\n      ></cx-card>\n    </div>\n\n    <ng-container\n      *ngIf=\"order.purchaseOrderNumber || order.purchaseOrderNumber === ''\"\n    >\n      <div class=\"summary-card\">\n        <cx-card\n          [content]=\"getPurchaseOrderNumber(order?.purchaseOrderNumber) | async\"\n        ></cx-card>\n\n        <cx-card\n          [content]=\"getMethodOfPaymentCardContent(order.paymentInfo) | async\"\n        ></cx-card>\n\n        <ng-container *ngIf=\"order.costCenter\">\n          <cx-card\n            [content]=\"getCostCenterCardContent(order?.costCenter) | async\"\n          ></cx-card>\n        </ng-container>\n      </div>\n    </ng-container>\n\n    <div class=\"summary-card\">\n      <ng-container *ngIf=\"order.deliveryAddress\">\n        <cx-card\n          [content]=\"getAddressCardContent(order?.deliveryAddress) | async\"\n        ></cx-card>\n      </ng-container>\n\n      <ng-container *ngIf=\"order.deliveryMode\">\n        <cx-card\n          [content]=\"getDeliveryModeCardContent(order?.deliveryMode) | async\"\n        ></cx-card>\n      </ng-container>\n    </div>\n\n    <ng-container *ngIf=\"order.paymentInfo\">\n      <div class=\"summary-card\">\n        <cx-card\n          [content]=\"getPaymentInfoCardContent(order?.paymentInfo) | async\"\n        ></cx-card>\n\n        <cx-card\n          [content]=\"\n            getBillingAddressCardContent(order?.paymentInfo?.billingAddress)\n              | async\n          \"\n        ></cx-card>\n      </div>\n    </ng-container>\n  </div>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], OrderConfirmationOverviewComponent);
export { OrderConfirmationOverviewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLW92ZXJ2aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi9jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi1vdmVydmlldy9vcmRlci1jb25maXJtYXRpb24tb3ZlcnZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsR0FHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsT0FBTyxFQUNQLGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxjQUFjLEVBQ2Qsa0JBQWtCLEdBQ25CLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBUTdDLElBQWEsa0NBQWtDLEdBQS9DLE1BQWEsa0NBQWtDO0lBRzdDLFlBQ1ksZUFBZ0MsRUFDbEMsV0FBK0I7UUFEN0Isb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2xDLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtJQUN0QyxDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQsdUJBQXVCLENBQUMsU0FBaUI7UUFDdkMsT0FBTyxJQUFJLENBQUMsV0FBVzthQUNwQixTQUFTLENBQUMsdUNBQXVDLENBQUM7YUFDbEQsSUFBSSxDQUNILE1BQU0sQ0FBQyxHQUFHLEVBQUUs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QUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbEIsS0FBSyxFQUFFLFNBQVM7WUFDaEIsUUFBUSxFQUFFLEdBQUcsY0FBYyxDQUFDLFNBQVMsSUFBSSxjQUFjLENBQUMsUUFBUSxFQUFFO1lBQ2xFLElBQUksRUFBRSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztTQUNyRSxDQUFDLENBQUMsQ0FDSixDQUFDO0lBQ0osQ0FBQztJQUVPLE9BQU8sQ0FBQyxTQUFlO1FBQzdCLE1BQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFakQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFckIsT0FBTyxLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO0lBQ3hDLENBQUM7Q0FDRixDQUFBOztZQTNKOEIsZUFBZTtZQUNyQixrQkFBa0I7O0FBTDlCLGtDQUFrQztJQUw5QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0NBQWdDO1FBQzFDLDI4REFBMkQ7UUFDM0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztHQUNXLGtDQUFrQyxDQStKOUM7U0EvSlksa0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWRkcmVzcyxcbiAgQ2hlY2tvdXRTZXJ2aWNlLFxuICBDb3N0Q2VudGVyLFxuICBEZWxpdmVyeU1vZGUsXG4gIE9yZGVyLFxuICBQYXltZW50RGV0YWlscyxcbiAgVHJhbnNsYXRpb25TZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW9yZGVyLWNvbmZpcm1hdGlvbi1vdmVydmlldycsXG4gIHRlbXBsYXRlVXJsOiAnLi9vcmRlci1jb25maXJtYXRpb24tb3ZlcnZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJDb25maXJtYXRpb25PdmVydmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgb3JkZXIkOiBPYnNlcnZhYmxlPE9yZGVyPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm9yZGVyJCA9IHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmdldE9yZGVyRGV0YWlscygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5jaGVja291dFNlcnZpY2UuY2xlYXJDaGVja291dERhdGEoKTtcbiAgfVxuXG4gIGdldE9yZGVyQ29kZUNhcmRDb250ZW50KG9yZGVyQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25cbiAgICAgIC50cmFuc2xhdGUoJ2NoZWNrb3V0T3JkZXJDb25maXJtYXRpb24ub3JkZXJOdW1iZXInKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoKSA9PiBCb29sZWFuKG9yZGVyQ29kZSkpLFxuICAgICAgICBtYXAoKHRleHRUaXRsZSkgPT4gKHtcbiAgICAgICAgICB0aXRsZTogdGV4dFRpdGxlLFxuICAgICAgICAgIHRleHQ6IFtvcmRlckNvZGVdLFxuICAgICAgICB9KSlcbiAgICAgICk7XG4gIH1cblxuICBnZXRPcmRlckN1cnJlbnREYXRlQ2FyZENvbnRlbnQoaXNvRGF0ZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25cbiAgICAgIC50cmFuc2xhdGUoJ2NoZWNrb3V0T3JkZXJDb25maXJtYXRpb24ucGxhY2VkT24nKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgodGV4dFRpdGxlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0ZSA9IHRoaXMuZ2V0RGF0ZShuZXcgRGF0ZShpc29EYXRlKSk7XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgICAgIHRleHQ6IFtkYXRlXSxcbiAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIGdldE9yZGVyU3RhdHVzQ2FyZENvbnRlbnQoc3RhdHVzOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENhcmQ+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY2hlY2tvdXRPcmRlckNvbmZpcm1hdGlvbi5zdGF0dXMnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdvcmRlckRldGFpbHMuc3RhdHVzRGlzcGxheScsIHtcbiAgICAgICAgY29udGV4dDogc3RhdHVzLFxuICAgICAgfSksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW3RleHRUaXRsZSwgdGV4dFN0YXR1c10pID0+ICh7XG4gICAgICAgIHRpdGxlOiB0ZXh0VGl0bGUsXG4gICAgICAgIHRleHQ6IFt0ZXh0U3RhdHVzXSxcbiAgICAgIH0pKVxuICAgICk7XG4gIH1cblxuICBnZXRQdXJjaGFzZU9yZGVyTnVtYmVyKHBvTnVtYmVyOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENhcmQ+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY2hlY2tvdXRSZXZpZXcucG9OdW1iZXInKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjaGVja291dFBPLm5vUG9OdW1iZXInKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKChbdGV4dFRpdGxlLCBub25lVGV4dFRpdGxlXSkgPT4gKHtcbiAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgdGV4dDogW3BvTnVtYmVyID8gcG9OdW1iZXIgOiBub25lVGV4dFRpdGxlXSxcbiAgICAgIH0pKVxuICAgICk7XG4gIH1cblxuICBnZXRNZXRob2RPZlBheW1lbnRDYXJkQ29udGVudChcbiAgICBoYXNQYXltZW50SW5mbzogUGF5bWVudERldGFpbHNcbiAgKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NoZWNrb3V0UHJvZ3Jlc3MubWV0aG9kT2ZQYXltZW50JyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudFR5cGVzLnBheW1lbnRUeXBlX0FDQ09VTlQnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50VHlwZXMucGF5bWVudFR5cGVfQ0FSRCcpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFt0ZXh0VGl0bGUsIHRleHRBY2NvdW50LCB0ZXh0Q2FyZF0pID0+ICh7XG4gICAgICAgIHRpdGxlOiB0ZXh0VGl0bGUsXG4gICAgICAgIHRleHQ6IFtCb29sZWFuKGhhc1BheW1lbnRJbmZvKSA/IHRleHRDYXJkIDogdGV4dEFjY291bnRdLFxuICAgICAgfSkpXG4gICAgKTtcbiAgfVxuXG4gIGdldENvc3RDZW50ZXJDYXJkQ29udGVudChjb3N0Q2VudGVyOiBDb3N0Q2VudGVyKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjaGVja291dFBPLmNvc3RDZW50ZXInKS5waXBlKFxuICAgICAgZmlsdGVyKCgpID0+IEJvb2xlYW4oY29zdENlbnRlcikpLFxuICAgICAgbWFwKCh0ZXh0VGl0bGUpID0+ICh7XG4gICAgICAgIHRpdGxlOiB0ZXh0VGl0bGUsXG4gICAgICAgIHRleHRCb2xkOiBjb3N0Q2VudGVyPy5uYW1lLFxuICAgICAgICB0ZXh0OiBbJygnICsgY29zdENlbnRlcj8udW5pdD8ubmFtZSArICcpJ10sXG4gICAgICB9KSlcbiAgICApO1xuICB9XG5cbiAgZ2V0QWRkcmVzc0NhcmRDb250ZW50KGRlbGl2ZXJ5QWRkcmVzczogQWRkcmVzcyk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnYWRkcmVzc0NhcmQuc2hpcFRvJykucGlwZShcbiAgICAgIGZpbHRlcigoKSA9PiBCb29sZWFuKGRlbGl2ZXJ5QWRkcmVzcykpLFxuICAgICAgbWFwKCh0ZXh0VGl0bGUpID0+ICh7XG4gICAgICAgIHRpdGxlOiB0ZXh0VGl0bGUsXG4gICAgICAgIHRleHRCb2xkOiBgJHtkZWxpdmVyeUFkZHJlc3MuZmlyc3ROYW1lfSAke2RlbGl2ZXJ5QWRkcmVzcy5sYXN0TmFtZX1gLFxuICAgICAgICB0ZXh0OiBbZGVsaXZlcnlBZGRyZXNzLmZvcm1hdHRlZEFkZHJlc3MsIGRlbGl2ZXJ5QWRkcmVzcy5jb3VudHJ5Lm5hbWVdLFxuICAgICAgfSkpXG4gICAgKTtcbiAgfVxuXG4gIGdldERlbGl2ZXJ5TW9kZUNhcmRDb250ZW50KGRlbGl2ZXJ5TW9kZTogRGVsaXZlcnlNb2RlKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjaGVja291dFNoaXBwaW5nLnNoaXBwaW5nTWV0aG9kJykucGlwZShcbiAgICAgIGZpbHRlcigoKSA9PiBCb29sZWFuKGRlbGl2ZXJ5TW9kZSkpLFxuICAgICAgbWFwKCh0ZXh0VGl0bGUpID0+ICh7XG4gICAgICAgIHRpdGxlOiB0ZXh0VGl0bGUsXG4gICAgICAgIHRleHRCb2xkOiBkZWxpdmVyeU1vZGUubmFtZSxcbiAgICAgICAgdGV4dDogW1xuICAgICAgICAgIGRlbGl2ZXJ5TW9kZS5kZXNjcmlwdGlvbixcbiAgICAgICAgICBkZWxpdmVyeU1vZGUuZGVsaXZlcnlDb3N0Py5mb3JtYXR0ZWRWYWx1ZVxuICAgICAgICAgICAgPyBkZWxpdmVyeU1vZGUuZGVsaXZlcnlDb3N0Py5mb3JtYXR0ZWRWYWx1ZVxuICAgICAgICAgICAgOiAnJyxcbiAgICAgICAgXSxcbiAgICAgIH0pKVxuICAgICk7XG4gIH1cblxuICBnZXRQYXltZW50SW5mb0NhcmRDb250ZW50KHBheW1lbnQ6IFBheW1lbnREZXRhaWxzKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRGb3JtLnBheW1lbnQnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Q2FyZC5leHBpcmVzJywge1xuICAgICAgICBtb250aDogQm9vbGVhbihwYXltZW50KSA/IHBheW1lbnQuZXhwaXJ5TW9udGggOiAnJyxcbiAgICAgICAgeWVhcjogQm9vbGVhbihwYXltZW50KSA/IHBheW1lbnQuZXhwaXJ5WWVhciA6ICcnLFxuICAgICAgfSksXG4gICAgXSkucGlwZShcbiAgICAgIGZpbHRlcigoKSA9PiBCb29sZWFuKHBheW1lbnQpKSxcbiAgICAgIG1hcCgoW3RleHRUaXRsZSwgdGV4dEV4cGlyZXNdKSA9PiAoe1xuICAgICAgICB0aXRsZTogdGV4dFRpdGxlLFxuICAgICAgICB0ZXh0Qm9sZDogcGF5bWVudC5hY2NvdW50SG9sZGVyTmFtZSxcbiAgICAgICAgdGV4dDogW3BheW1lbnQuY2FyZE51bWJlciwgdGV4dEV4cGlyZXNdLFxuICAgICAgfSkpXG4gICAgKTtcbiAgfVxuXG4gIGdldEJpbGxpbmdBZGRyZXNzQ2FyZENvbnRlbnQoYmlsbGluZ0FkZHJlc3M6IEFkZHJlc3MpOiBPYnNlcnZhYmxlPENhcmQ+IHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRGb3JtLmJpbGxpbmdBZGRyZXNzJykucGlwZShcbiAgICAgIGZpbHRlcigoKSA9PiBCb29sZWFuKGJpbGxpbmdBZGRyZXNzKSksXG4gICAgICBtYXAoKHRleHRUaXRsZSkgPT4gKHtcbiAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgdGV4dEJvbGQ6IGAke2JpbGxpbmdBZGRyZXNzLmZpcnN0TmFtZX0gJHtiaWxsaW5nQWRkcmVzcy5sYXN0TmFtZX1gLFxuICAgICAgICB0ZXh0OiBbYmlsbGluZ0FkZHJlc3MuZm9ybWF0dGVkQWRkcmVzcywgYmlsbGluZ0FkZHJlc3MuY291bnRyeS5uYW1lXSxcbiAgICAgIH0pKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldERhdGUoZ2l2ZW5EYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICBjb25zdCBkYXRlID0gZ2l2ZW5EYXRlLnRvRGF0ZVN0cmluZygpLnNwbGl0KCcgJyk7XG5cbiAgICBjb25zdCBtb250aCA9IGRhdGVbMV07XG4gICAgY29uc3QgZGF5ID0gZGF0ZVsyXTtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZVszXTtcblxuICAgIHJldHVybiBtb250aCArICcgJyArIGRheSArICcgJyArIHllYXI7XG4gIH1cbn1cbiJdfQ==