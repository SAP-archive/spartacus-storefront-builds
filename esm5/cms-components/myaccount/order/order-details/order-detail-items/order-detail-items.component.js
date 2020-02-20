import { __decorate, __read, __spread } from "tslib";
import { Component } from '@angular/core';
import { PromotionLocation, } from '@spartacus/core';
import { map } from 'rxjs/operators';
import { PromotionService } from '../../../../../shared/services/promotion/promotion.service';
import { OrderDetailsService } from '../order-details.service';
import { cancelledValues, completedValues, } from './order-consigned-entries/order-consigned-entries.model';
var OrderDetailItemsComponent = /** @class */ (function () {
    function OrderDetailItemsComponent(orderDetailsService, promotionService) {
        this.orderDetailsService = orderDetailsService;
        this.promotionService = promotionService;
        this.promotionLocation = PromotionLocation.Order;
        this.order$ = this.orderDetailsService.getOrderDetails();
    }
    OrderDetailItemsComponent.prototype.ngOnInit = function () {
        this.orderPromotions$ = this.promotionService.getOrderPromotions(this.promotionLocation);
        this.others$ = this.getOtherStatus.apply(this, __spread(completedValues, cancelledValues));
        this.completed$ = this.getExactStatus(completedValues);
        this.cancel$ = this.getExactStatus(cancelledValues);
    };
    OrderDetailItemsComponent.prototype.getExactStatus = function (consignmentStatus) {
        return this.order$.pipe(map(function (order) {
            if (Boolean(order.consignments)) {
                return order.consignments.filter(function (consignment) {
                    return consignmentStatus.includes(consignment.status);
                });
            }
        }));
    };
    OrderDetailItemsComponent.prototype.getOtherStatus = function () {
        var consignmentStatus = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            consignmentStatus[_i] = arguments[_i];
        }
        return this.order$.pipe(map(function (order) {
            if (Boolean(order.consignments)) {
                return order.consignments.filter(function (consignment) { return !consignmentStatus.includes(consignment.status); });
            }
        }));
    };
    /**
     * @deprecated
     * NOTE: This function will be removed in version 2.0
     */
    OrderDetailItemsComponent.prototype.getConsignmentProducts = function (consignment) {
        var products = [];
        consignment.entries.forEach(function (element) {
            products.push(element.orderEntry);
        });
        return products;
    };
    OrderDetailItemsComponent.ctorParameters = function () { return [
        { type: OrderDetailsService },
        { type: PromotionService }
    ]; };
    OrderDetailItemsComponent = __decorate([
        Component({
            selector: 'cx-order-details-items',
            template: "<ng-container *ngIf=\"order$ | async as order\">\n  <!-- consigned entries -->\n  <div *cxFeatureLevel=\"'1.4'\">\n    <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n      <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n    </ng-container>\n\n    <cx-order-consigned-entries\n      *ngIf=\"others$ | async as others\"\n      [order]=\"order\"\n      [consignments]=\"others\"\n    ></cx-order-consigned-entries>\n\n    <cx-order-consigned-entries\n      *ngIf=\"completed$ | async as completed\"\n      [order]=\"order\"\n      [consignments]=\"completed\"\n    ></cx-order-consigned-entries>\n\n    <cx-order-consigned-entries\n      *ngIf=\"cancel$ | async as cancel\"\n      [order]=\"order\"\n      [consignments]=\"cancel\"\n    ></cx-order-consigned-entries>\n  </div>\n\n  <div *cxFeatureLevel=\"'!1.4'\">\n    <div *ngFor=\"let consignment of order.consignments\" class=\"cx-list row\">\n      <div class=\"cx-list-header col-12\">\n        <div class=\"cx-list-status\">\n          <span *ngIf=\"consignment\">\n            {{\n              'orderDetails.deliveryStatus'\n                | cxTranslate: { context: consignment.status }\n            }}\n          </span>\n        </div>\n        <div *ngIf=\"consignment?.statusDate\" class=\"cx-list-date\">\n          <div>{{ 'orderDetails.shippedOn' | cxTranslate }}&nbsp;</div>\n          <div>{{ consignment?.statusDate | cxDate }}</div>\n        </div>\n\n        <cx-consignment-tracking\n          [orderCode]=\"order.code\"\n          [consignment]=\"consignment\"\n          *cxFeature=\"'consignmentTracking'\"\n        >\n        </cx-consignment-tracking>\n      </div>\n      <div class=\"cx-list-item col-12\">\n        <ng-container *cxFeatureLevel=\"'1.5'\">\n          <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n            <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n          </ng-container>\n        </ng-container>\n\n        <cx-cart-item-list\n          [items]=\"getConsignmentProducts(consignment)\"\n          [readonly]=\"true\"\n          [promotionLocation]=\"promotionLocation\"\n        ></cx-cart-item-list>\n      </div>\n    </div>\n    <!-- unconsigned entries -->\n    <div *ngIf=\"order.unconsignedEntries?.length\" class=\"cx-list row\">\n      <div class=\"cx-list-header col-12\">\n        <div class=\"cx-list-status\">\n          {{ 'orderDetails.pending' | cxTranslate }}\n        </div>\n      </div>\n      <div class=\"cx-list-item col-12\">\n        <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n          <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n        </ng-container>\n\n        <cx-cart-item-list\n          [items]=\"order?.unconsignedEntries\"\n          [readonly]=\"true\"\n          [promotionLocation]=\"promotionLocation\"\n        ></cx-cart-item-list>\n      </div>\n    </div>\n  </div>\n</ng-container>\n"
        })
    ], OrderDetailItemsComponent);
    return OrderDetailItemsComponent;
}());
export { OrderDetailItemsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlsLWl0ZW1zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbC1pdGVtcy9vcmRlci1kZXRhaWwtaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFJTCxpQkFBaUIsR0FFbEIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDOUYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUNMLGVBQWUsRUFDZixlQUFlLEdBQ2hCLE1BQU0seURBQXlELENBQUM7QUFNakU7SUFjRSxtQ0FDVSxtQkFBd0MsRUFDdEMsZ0JBQW1DO1FBRHJDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDdEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtRQUcvQyxzQkFBaUIsR0FBc0IsaUJBQWlCLENBQUMsS0FBSyxDQUFDO1FBQy9ELFdBQU0sR0FBc0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsRUFBRSxDQUFDO0lBSHBFLENBQUM7SUFTSiw0Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FDOUQsSUFBSSxDQUFDLGlCQUFpQixDQUN2QixDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxPQUFuQixJQUFJLFdBQW1CLGVBQWUsRUFBSyxlQUFlLEVBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFTyxrREFBYyxHQUF0QixVQUNFLGlCQUEyQjtRQUUzQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNyQixHQUFHLENBQUMsVUFBQSxLQUFLO1lBQ1AsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFO2dCQUMvQixPQUFPLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQUEsV0FBVztvQkFDMUMsT0FBQSxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztnQkFBOUMsQ0FBOEMsQ0FDL0MsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFTyxrREFBYyxHQUF0QjtRQUNFLDJCQUE4QjthQUE5QixVQUE4QixFQUE5QixxQkFBOEIsRUFBOUIsSUFBOEI7WUFBOUIsc0NBQThCOztRQUU5QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNyQixHQUFHLENBQUMsVUFBQSxLQUFLO1lBQ1AsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFO2dCQUMvQixPQUFPLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUM5QixVQUFBLFdBQVcsSUFBSSxPQUFBLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBL0MsQ0FBK0MsQ0FDL0QsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7SUFDSCwwREFBc0IsR0FBdEIsVUFBdUIsV0FBd0I7UUFDN0MsSUFBTSxRQUFRLEdBQWlCLEVBQUUsQ0FBQztRQUNsQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDakMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOztnQkEzRDhCLG1CQUFtQjtnQkFDbkIsZ0JBQWdCOztJQWhCcEMseUJBQXlCO1FBSnJDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx3QkFBd0I7WUFDbEMsaTZGQUFrRDtTQUNuRCxDQUFDO09BQ1cseUJBQXlCLENBMkVyQztJQUFELGdDQUFDO0NBQUEsQUEzRUQsSUEyRUM7U0EzRVkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvbnNpZ25tZW50LFxuICBPcmRlcixcbiAgT3JkZXJFbnRyeSxcbiAgUHJvbW90aW9uTG9jYXRpb24sXG4gIFByb21vdGlvblJlc3VsdCxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByb21vdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvcHJvbW90aW9uL3Byb21vdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVyRGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuLi9vcmRlci1kZXRhaWxzLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgY2FuY2VsbGVkVmFsdWVzLFxuICBjb21wbGV0ZWRWYWx1ZXMsXG59IGZyb20gJy4vb3JkZXItY29uc2lnbmVkLWVudHJpZXMvb3JkZXItY29uc2lnbmVkLWVudHJpZXMubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1vcmRlci1kZXRhaWxzLWl0ZW1zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29yZGVyLWRldGFpbC1pdGVtcy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyRGV0YWlsSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBvcmRlckRldGFpbHNTZXJ2aWNlOiBPcmRlckRldGFpbHNTZXJ2aWNlLFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1bmlmaWVkLXNpZ25hdHVyZXNcbiAgICBwcm9tb3Rpb25TZXJ2aWNlOiBQcm9tb3Rpb25TZXJ2aWNlXG4gICk7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuNVxuICAgKiBVc2UgcHJvbW90aW9uU2VydmljZSBpbnN0ZWFkIG9mIHRoZSBwcm9tb3Rpb24gaW5wdXRzLlxuICAgKiBSZW1vdmUgaXNzdWU6ICM1NjcwXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcmRlckRldGFpbHNTZXJ2aWNlOiBPcmRlckRldGFpbHNTZXJ2aWNlKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG9yZGVyRGV0YWlsc1NlcnZpY2U6IE9yZGVyRGV0YWlsc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHByb21vdGlvblNlcnZpY2U/OiBQcm9tb3Rpb25TZXJ2aWNlXG4gICkge31cblxuICBwcm9tb3Rpb25Mb2NhdGlvbjogUHJvbW90aW9uTG9jYXRpb24gPSBQcm9tb3Rpb25Mb2NhdGlvbi5PcmRlcjtcbiAgb3JkZXIkOiBPYnNlcnZhYmxlPE9yZGVyPiA9IHRoaXMub3JkZXJEZXRhaWxzU2VydmljZS5nZXRPcmRlckRldGFpbHMoKTtcbiAgb3JkZXJQcm9tb3Rpb25zJDogT2JzZXJ2YWJsZTxQcm9tb3Rpb25SZXN1bHRbXT47XG4gIG90aGVycyQ6IE9ic2VydmFibGU8Q29uc2lnbm1lbnRbXT47XG4gIGNvbXBsZXRlZCQ6IE9ic2VydmFibGU8Q29uc2lnbm1lbnRbXT47XG4gIGNhbmNlbCQ6IE9ic2VydmFibGU8Q29uc2lnbm1lbnRbXT47XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vcmRlclByb21vdGlvbnMkID0gdGhpcy5wcm9tb3Rpb25TZXJ2aWNlLmdldE9yZGVyUHJvbW90aW9ucyhcbiAgICAgIHRoaXMucHJvbW90aW9uTG9jYXRpb25cbiAgICApO1xuICAgIHRoaXMub3RoZXJzJCA9IHRoaXMuZ2V0T3RoZXJTdGF0dXMoLi4uY29tcGxldGVkVmFsdWVzLCAuLi5jYW5jZWxsZWRWYWx1ZXMpO1xuICAgIHRoaXMuY29tcGxldGVkJCA9IHRoaXMuZ2V0RXhhY3RTdGF0dXMoY29tcGxldGVkVmFsdWVzKTtcbiAgICB0aGlzLmNhbmNlbCQgPSB0aGlzLmdldEV4YWN0U3RhdHVzKGNhbmNlbGxlZFZhbHVlcyk7XG4gIH1cblxuICBwcml2YXRlIGdldEV4YWN0U3RhdHVzKFxuICAgIGNvbnNpZ25tZW50U3RhdHVzOiBzdHJpbmdbXVxuICApOiBPYnNlcnZhYmxlPENvbnNpZ25tZW50W10+IHtcbiAgICByZXR1cm4gdGhpcy5vcmRlciQucGlwZShcbiAgICAgIG1hcChvcmRlciA9PiB7XG4gICAgICAgIGlmIChCb29sZWFuKG9yZGVyLmNvbnNpZ25tZW50cykpIHtcbiAgICAgICAgICByZXR1cm4gb3JkZXIuY29uc2lnbm1lbnRzLmZpbHRlcihjb25zaWdubWVudCA9PlxuICAgICAgICAgICAgY29uc2lnbm1lbnRTdGF0dXMuaW5jbHVkZXMoY29uc2lnbm1lbnQuc3RhdHVzKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0T3RoZXJTdGF0dXMoXG4gICAgLi4uY29uc2lnbm1lbnRTdGF0dXM6IHN0cmluZ1tdXG4gICk6IE9ic2VydmFibGU8Q29uc2lnbm1lbnRbXT4ge1xuICAgIHJldHVybiB0aGlzLm9yZGVyJC5waXBlKFxuICAgICAgbWFwKG9yZGVyID0+IHtcbiAgICAgICAgaWYgKEJvb2xlYW4ob3JkZXIuY29uc2lnbm1lbnRzKSkge1xuICAgICAgICAgIHJldHVybiBvcmRlci5jb25zaWdubWVudHMuZmlsdGVyKFxuICAgICAgICAgICAgY29uc2lnbm1lbnQgPT4gIWNvbnNpZ25tZW50U3RhdHVzLmluY2x1ZGVzKGNvbnNpZ25tZW50LnN0YXR1cylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWRcbiAgICogTk9URTogVGhpcyBmdW5jdGlvbiB3aWxsIGJlIHJlbW92ZWQgaW4gdmVyc2lvbiAyLjBcbiAgICovXG4gIGdldENvbnNpZ25tZW50UHJvZHVjdHMoY29uc2lnbm1lbnQ6IENvbnNpZ25tZW50KTogT3JkZXJFbnRyeVtdIHtcbiAgICBjb25zdCBwcm9kdWN0czogT3JkZXJFbnRyeVtdID0gW107XG4gICAgY29uc2lnbm1lbnQuZW50cmllcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgcHJvZHVjdHMucHVzaChlbGVtZW50Lm9yZGVyRW50cnkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb2R1Y3RzO1xuICB9XG59XG4iXX0=