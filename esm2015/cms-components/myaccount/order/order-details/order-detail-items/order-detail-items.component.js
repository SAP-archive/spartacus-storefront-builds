import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { PromotionLocation, } from '@spartacus/core';
import { map } from 'rxjs/operators';
import { PromotionService } from '../../../../../shared/services/promotion/promotion.service';
import { OrderDetailsService } from '../order-details.service';
import { cancelledValues, completedValues, } from './order-consigned-entries/order-consigned-entries.model';
let OrderDetailItemsComponent = class OrderDetailItemsComponent {
    constructor(orderDetailsService, promotionService) {
        this.orderDetailsService = orderDetailsService;
        this.promotionService = promotionService;
        this.promotionLocation = PromotionLocation.Order;
        this.order$ = this.orderDetailsService.getOrderDetails();
    }
    ngOnInit() {
        this.orderPromotions$ = this.promotionService.getOrderPromotions(this.promotionLocation);
        this.others$ = this.getOtherStatus(...completedValues, ...cancelledValues);
        this.completed$ = this.getExactStatus(completedValues);
        this.cancel$ = this.getExactStatus(cancelledValues);
    }
    getExactStatus(consignmentStatus) {
        return this.order$.pipe(map((order) => {
            if (Boolean(order.consignments)) {
                return order.consignments.filter((consignment) => consignmentStatus.includes(consignment.status));
            }
        }));
    }
    getOtherStatus(...consignmentStatus) {
        return this.order$.pipe(map((order) => {
            if (Boolean(order.consignments)) {
                return order.consignments.filter((consignment) => !consignmentStatus.includes(consignment.status));
            }
        }));
    }
};
OrderDetailItemsComponent.ctorParameters = () => [
    { type: OrderDetailsService },
    { type: PromotionService }
];
OrderDetailItemsComponent = __decorate([
    Component({
        selector: 'cx-order-details-items',
        template: "<ng-container *ngIf=\"order$ | async as order\">\n  <ng-container\n    *ngIf=\"order.consignments?.length || order.unconsignedEntries?.length\"\n  >\n    <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n      <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n    </ng-container>\n  </ng-container>\n\n  <!-- consigned entries -->\n  <ng-container *ngIf=\"order.consignments?.length\">\n    <cx-order-consigned-entries\n      *ngIf=\"others$ | async as others\"\n      [order]=\"order\"\n      [consignments]=\"others\"\n    ></cx-order-consigned-entries>\n\n    <cx-order-consigned-entries\n      *ngIf=\"completed$ | async as completed\"\n      [order]=\"order\"\n      [consignments]=\"completed\"\n    ></cx-order-consigned-entries>\n\n    <cx-order-consigned-entries\n      *ngIf=\"cancel$ | async as cancel\"\n      [order]=\"order\"\n      [consignments]=\"cancel\"\n    ></cx-order-consigned-entries>\n  </ng-container>\n\n  <!-- unconsigned entries -->\n  <ng-container *ngIf=\"order.unconsignedEntries?.length\">\n    <div class=\"cx-list row\">\n      <div class=\"cx-list-header col-12\">\n        <div class=\"cx-list-status\">\n          {{ 'orderDetails.pending' | cxTranslate }}\n        </div>\n      </div>\n      <div class=\"cx-list-item col-12\">\n        <cx-cart-item-list\n          [items]=\"order?.unconsignedEntries\"\n          [readonly]=\"true\"\n          [promotionLocation]=\"promotionLocation\"\n        ></cx-cart-item-list>\n      </div>\n    </div>\n  </ng-container>\n</ng-container>\n"
    })
], OrderDetailItemsComponent);
export { OrderDetailItemsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlsLWl0ZW1zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbC1pdGVtcy9vcmRlci1kZXRhaWwtaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFHTCxpQkFBaUIsR0FFbEIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDOUYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUNMLGVBQWUsRUFDZixlQUFlLEdBQ2hCLE1BQU0seURBQXlELENBQUM7QUFNakUsSUFBYSx5QkFBeUIsR0FBdEMsTUFBYSx5QkFBeUI7SUFDcEMsWUFDWSxtQkFBd0MsRUFDeEMsZ0JBQWtDO1FBRGxDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUc5QyxzQkFBaUIsR0FBc0IsaUJBQWlCLENBQUMsS0FBSyxDQUFDO1FBQy9ELFdBQU0sR0FBc0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsRUFBRSxDQUFDO0lBSHBFLENBQUM7SUFTSixRQUFRO1FBQ04sSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FDOUQsSUFBSSxDQUFDLGlCQUFpQixDQUN2QixDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsZUFBZSxFQUFFLEdBQUcsZUFBZSxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRU8sY0FBYyxDQUNwQixpQkFBMkI7UUFFM0IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDckIsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDWixJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQy9CLE9BQU8sS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUMvQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUMvQyxDQUFDO2FBQ0g7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVPLGNBQWMsQ0FDcEIsR0FBRyxpQkFBMkI7UUFFOUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDckIsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDWixJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQy9CLE9BQU8sS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQzlCLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQ2pFLENBQUM7YUFDSDtRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTs7WUEvQ2tDLG1CQUFtQjtZQUN0QixnQkFBZ0I7O0FBSG5DLHlCQUF5QjtJQUpyQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsd0JBQXdCO1FBQ2xDLG1pREFBa0Q7S0FDbkQsQ0FBQztHQUNXLHlCQUF5QixDQWlEckM7U0FqRFkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvbnNpZ25tZW50LFxuICBPcmRlcixcbiAgUHJvbW90aW9uTG9jYXRpb24sXG4gIFByb21vdGlvblJlc3VsdCxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByb21vdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvcHJvbW90aW9uL3Byb21vdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVyRGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuLi9vcmRlci1kZXRhaWxzLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgY2FuY2VsbGVkVmFsdWVzLFxuICBjb21wbGV0ZWRWYWx1ZXMsXG59IGZyb20gJy4vb3JkZXItY29uc2lnbmVkLWVudHJpZXMvb3JkZXItY29uc2lnbmVkLWVudHJpZXMubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1vcmRlci1kZXRhaWxzLWl0ZW1zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29yZGVyLWRldGFpbC1pdGVtcy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyRGV0YWlsSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgb3JkZXJEZXRhaWxzU2VydmljZTogT3JkZXJEZXRhaWxzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcHJvbW90aW9uU2VydmljZTogUHJvbW90aW9uU2VydmljZVxuICApIHt9XG5cbiAgcHJvbW90aW9uTG9jYXRpb246IFByb21vdGlvbkxvY2F0aW9uID0gUHJvbW90aW9uTG9jYXRpb24uT3JkZXI7XG4gIG9yZGVyJDogT2JzZXJ2YWJsZTxPcmRlcj4gPSB0aGlzLm9yZGVyRGV0YWlsc1NlcnZpY2UuZ2V0T3JkZXJEZXRhaWxzKCk7XG4gIG9yZGVyUHJvbW90aW9ucyQ6IE9ic2VydmFibGU8UHJvbW90aW9uUmVzdWx0W10+O1xuICBvdGhlcnMkOiBPYnNlcnZhYmxlPENvbnNpZ25tZW50W10+O1xuICBjb21wbGV0ZWQkOiBPYnNlcnZhYmxlPENvbnNpZ25tZW50W10+O1xuICBjYW5jZWwkOiBPYnNlcnZhYmxlPENvbnNpZ25tZW50W10+O1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMub3JkZXJQcm9tb3Rpb25zJCA9IHRoaXMucHJvbW90aW9uU2VydmljZS5nZXRPcmRlclByb21vdGlvbnMoXG4gICAgICB0aGlzLnByb21vdGlvbkxvY2F0aW9uXG4gICAgKTtcbiAgICB0aGlzLm90aGVycyQgPSB0aGlzLmdldE90aGVyU3RhdHVzKC4uLmNvbXBsZXRlZFZhbHVlcywgLi4uY2FuY2VsbGVkVmFsdWVzKTtcbiAgICB0aGlzLmNvbXBsZXRlZCQgPSB0aGlzLmdldEV4YWN0U3RhdHVzKGNvbXBsZXRlZFZhbHVlcyk7XG4gICAgdGhpcy5jYW5jZWwkID0gdGhpcy5nZXRFeGFjdFN0YXR1cyhjYW5jZWxsZWRWYWx1ZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRFeGFjdFN0YXR1cyhcbiAgICBjb25zaWdubWVudFN0YXR1czogc3RyaW5nW11cbiAgKTogT2JzZXJ2YWJsZTxDb25zaWdubWVudFtdPiB7XG4gICAgcmV0dXJuIHRoaXMub3JkZXIkLnBpcGUoXG4gICAgICBtYXAoKG9yZGVyKSA9PiB7XG4gICAgICAgIGlmIChCb29sZWFuKG9yZGVyLmNvbnNpZ25tZW50cykpIHtcbiAgICAgICAgICByZXR1cm4gb3JkZXIuY29uc2lnbm1lbnRzLmZpbHRlcigoY29uc2lnbm1lbnQpID0+XG4gICAgICAgICAgICBjb25zaWdubWVudFN0YXR1cy5pbmNsdWRlcyhjb25zaWdubWVudC5zdGF0dXMpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPdGhlclN0YXR1cyhcbiAgICAuLi5jb25zaWdubWVudFN0YXR1czogc3RyaW5nW11cbiAgKTogT2JzZXJ2YWJsZTxDb25zaWdubWVudFtdPiB7XG4gICAgcmV0dXJuIHRoaXMub3JkZXIkLnBpcGUoXG4gICAgICBtYXAoKG9yZGVyKSA9PiB7XG4gICAgICAgIGlmIChCb29sZWFuKG9yZGVyLmNvbnNpZ25tZW50cykpIHtcbiAgICAgICAgICByZXR1cm4gb3JkZXIuY29uc2lnbm1lbnRzLmZpbHRlcihcbiAgICAgICAgICAgIChjb25zaWdubWVudCkgPT4gIWNvbnNpZ25tZW50U3RhdHVzLmluY2x1ZGVzKGNvbnNpZ25tZW50LnN0YXR1cylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==