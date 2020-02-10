/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { PromotionLocation, } from '@spartacus/core';
import { map } from 'rxjs/operators';
import { PromotionService } from '../../../../../shared/services/promotion/promotion.service';
import { OrderDetailsService } from '../order-details.service';
import { cancelledValues, completedValues, } from './order-consigned-entries/order-consigned-entries.model';
export class OrderDetailItemsComponent {
    /**
     * @param {?} orderDetailsService
     * @param {?=} promotionService
     */
    constructor(orderDetailsService, promotionService) {
        this.orderDetailsService = orderDetailsService;
        this.promotionService = promotionService;
        this.promotionLocation = PromotionLocation.Order;
        this.order$ = this.orderDetailsService.getOrderDetails();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.orderPromotions$ = this.promotionService.getOrderPromotions(this.promotionLocation);
        this.others$ = this.getOtherStatus(...completedValues, ...cancelledValues);
        this.completed$ = this.getExactStatus(completedValues);
        this.cancel$ = this.getExactStatus(cancelledValues);
    }
    /**
     * @private
     * @param {?} consignmentStatus
     * @return {?}
     */
    getExactStatus(consignmentStatus) {
        return this.order$.pipe(map((/**
         * @param {?} order
         * @return {?}
         */
        order => {
            if (Boolean(order.consignments)) {
                return order.consignments.filter((/**
                 * @param {?} consignment
                 * @return {?}
                 */
                consignment => consignmentStatus.includes(consignment.status)));
            }
        })));
    }
    /**
     * @private
     * @param {...?} consignmentStatus
     * @return {?}
     */
    getOtherStatus(...consignmentStatus) {
        return this.order$.pipe(map((/**
         * @param {?} order
         * @return {?}
         */
        order => {
            if (Boolean(order.consignments)) {
                return order.consignments.filter((/**
                 * @param {?} consignment
                 * @return {?}
                 */
                consignment => !consignmentStatus.includes(consignment.status)));
            }
        })));
    }
    /**
     * @deprecated
     * NOTE: This function will be removed in version 2.0
     * @param {?} consignment
     * @return {?}
     */
    getConsignmentProducts(consignment) {
        /** @type {?} */
        const products = [];
        consignment.entries.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            products.push(element.orderEntry);
        }));
        return products;
    }
}
OrderDetailItemsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-order-details-items',
                template: "<ng-container *ngIf=\"order$ | async as order\">\n  <!-- consigned entries -->\n  <div *cxFeatureLevel=\"'1.4'\">\n    <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n      <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n    </ng-container>\n\n    <cx-order-consigned-entries\n      *ngIf=\"others$ | async as others\"\n      [order]=\"order\"\n      [consignments]=\"others\"\n    ></cx-order-consigned-entries>\n\n    <cx-order-consigned-entries\n      *ngIf=\"completed$ | async as completed\"\n      [order]=\"order\"\n      [consignments]=\"completed\"\n    ></cx-order-consigned-entries>\n\n    <cx-order-consigned-entries\n      *ngIf=\"cancel$ | async as cancel\"\n      [order]=\"order\"\n      [consignments]=\"cancel\"\n    ></cx-order-consigned-entries>\n  </div>\n\n  <div *cxFeatureLevel=\"'!1.4'\">\n    <div *ngFor=\"let consignment of order.consignments\" class=\"cx-list row\">\n      <div class=\"cx-list-header col-12\">\n        <div class=\"cx-list-status\">\n          <span *ngIf=\"consignment\">\n            {{\n              'orderDetails.deliveryStatus'\n                | cxTranslate: { context: consignment.status }\n            }}\n          </span>\n        </div>\n        <div *ngIf=\"consignment?.statusDate\" class=\"cx-list-date\">\n          <div>{{ 'orderDetails.shippedOn' | cxTranslate }}&nbsp;</div>\n          <div>{{ consignment?.statusDate | cxDate }}</div>\n        </div>\n\n        <cx-consignment-tracking\n          [orderCode]=\"order.code\"\n          [consignment]=\"consignment\"\n          *cxFeature=\"'consignmentTracking'\"\n        >\n        </cx-consignment-tracking>\n      </div>\n      <div class=\"cx-list-item col-12\">\n        <ng-container *cxFeatureLevel=\"'1.5'\">\n          <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n            <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n          </ng-container>\n        </ng-container>\n\n        <cx-cart-item-list\n          [items]=\"consignment.entries\"\n          [isReadOnly]=\"true\"\n          [promotionLocation]=\"promotionLocation\"\n        ></cx-cart-item-list>\n      </div>\n    </div>\n  </div>\n  <!-- unconsigned entries -->\n  <div *ngIf=\"order.unconsignedEntries?.length\" class=\"cx-list row\">\n    <div class=\"cx-list-header col-12\">\n      <div class=\"cx-list-status\">\n        {{ 'orderDetails.pending' | cxTranslate }}\n      </div>\n    </div>\n    <div class=\"cx-list-item col-12\">\n      <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n        <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n      </ng-container>\n\n      <cx-cart-item-list\n        [items]=\"order?.unconsignedEntries\"\n        [isReadOnly]=\"true\"\n        [promotionLocation]=\"promotionLocation\"\n      ></cx-cart-item-list>\n    </div>\n  </div>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
OrderDetailItemsComponent.ctorParameters = () => [
    { type: OrderDetailsService },
    { type: PromotionService }
];
if (false) {
    /** @type {?} */
    OrderDetailItemsComponent.prototype.promotionLocation;
    /** @type {?} */
    OrderDetailItemsComponent.prototype.order$;
    /** @type {?} */
    OrderDetailItemsComponent.prototype.orderPromotions$;
    /** @type {?} */
    OrderDetailItemsComponent.prototype.others$;
    /** @type {?} */
    OrderDetailItemsComponent.prototype.completed$;
    /** @type {?} */
    OrderDetailItemsComponent.prototype.cancel$;
    /**
     * @type {?}
     * @private
     */
    OrderDetailItemsComponent.prototype.orderDetailsService;
    /**
     * @type {?}
     * @protected
     */
    OrderDetailItemsComponent.prototype.promotionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlsLWl0ZW1zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbC1pdGVtcy9vcmRlci1kZXRhaWwtaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFJTCxpQkFBaUIsR0FFbEIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDOUYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUNMLGVBQWUsRUFDZixlQUFlLEdBQ2hCLE1BQU0seURBQXlELENBQUM7QUFNakUsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7SUFjcEMsWUFDVSxtQkFBd0MsRUFDdEMsZ0JBQW1DO1FBRHJDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDdEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtRQUcvQyxzQkFBaUIsR0FBc0IsaUJBQWlCLENBQUMsS0FBSyxDQUFDO1FBQy9ELFdBQU0sR0FBc0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsRUFBRSxDQUFDO0lBSHBFLENBQUM7Ozs7SUFTSixRQUFRO1FBQ04sSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FDOUQsSUFBSSxDQUFDLGlCQUFpQixDQUN2QixDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsZUFBZSxFQUFFLEdBQUcsZUFBZSxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7Ozs7SUFFTyxjQUFjLENBQ3BCLGlCQUEyQjtRQUUzQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNyQixHQUFHOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7WUFDVixJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQy9CLE9BQU8sS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNOzs7O2dCQUFDLFdBQVcsQ0FBQyxFQUFFLENBQzdDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQy9DLENBQUM7YUFDSDtRQUNILENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyxjQUFjLENBQ3BCLEdBQUcsaUJBQTJCO1FBRTlCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ3JCLEdBQUc7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUNWLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFDL0IsT0FBTyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU07Ozs7Z0JBQzlCLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUMvRCxDQUFDO2FBQ0g7UUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQU1ELHNCQUFzQixDQUFDLFdBQXdCOztjQUN2QyxRQUFRLEdBQWlCLEVBQUU7UUFDakMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDcEMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7WUE5RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLGkzRkFBa0Q7YUFDbkQ7Ozs7WUFUUSxtQkFBbUI7WUFEbkIsZ0JBQWdCOzs7O0lBOEJ2QixzREFBK0Q7O0lBQy9ELDJDQUF1RTs7SUFDdkUscURBQWdEOztJQUNoRCw0Q0FBbUM7O0lBQ25DLCtDQUFzQzs7SUFDdEMsNENBQW1DOzs7OztJQVRqQyx3REFBZ0Q7Ozs7O0lBQ2hELHFEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb25zaWdubWVudCxcbiAgT3JkZXIsXG4gIE9yZGVyRW50cnksXG4gIFByb21vdGlvbkxvY2F0aW9uLFxuICBQcm9tb3Rpb25SZXN1bHQsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQcm9tb3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3Byb21vdGlvbi9wcm9tb3Rpb24uc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlckRldGFpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vb3JkZXItZGV0YWlscy5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIGNhbmNlbGxlZFZhbHVlcyxcbiAgY29tcGxldGVkVmFsdWVzLFxufSBmcm9tICcuL29yZGVyLWNvbnNpZ25lZC1lbnRyaWVzL29yZGVyLWNvbnNpZ25lZC1lbnRyaWVzLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtb3JkZXItZGV0YWlscy1pdGVtcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9vcmRlci1kZXRhaWwtaXRlbXMuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckRldGFpbEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgb3JkZXJEZXRhaWxzU2VydmljZTogT3JkZXJEZXRhaWxzU2VydmljZSxcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dW5pZmllZC1zaWduYXR1cmVzXG4gICAgcHJvbW90aW9uU2VydmljZTogUHJvbW90aW9uU2VydmljZVxuICApO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxLjVcbiAgICogVXNlIHByb21vdGlvblNlcnZpY2UgaW5zdGVhZCBvZiB0aGUgcHJvbW90aW9uIGlucHV0cy5cbiAgICogUmVtb3ZlIGlzc3VlOiAjNTY3MFxuICAgKi9cbiAgY29uc3RydWN0b3Iob3JkZXJEZXRhaWxzU2VydmljZTogT3JkZXJEZXRhaWxzU2VydmljZSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBvcmRlckRldGFpbHNTZXJ2aWNlOiBPcmRlckRldGFpbHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBwcm9tb3Rpb25TZXJ2aWNlPzogUHJvbW90aW9uU2VydmljZVxuICApIHt9XG5cbiAgcHJvbW90aW9uTG9jYXRpb246IFByb21vdGlvbkxvY2F0aW9uID0gUHJvbW90aW9uTG9jYXRpb24uT3JkZXI7XG4gIG9yZGVyJDogT2JzZXJ2YWJsZTxPcmRlcj4gPSB0aGlzLm9yZGVyRGV0YWlsc1NlcnZpY2UuZ2V0T3JkZXJEZXRhaWxzKCk7XG4gIG9yZGVyUHJvbW90aW9ucyQ6IE9ic2VydmFibGU8UHJvbW90aW9uUmVzdWx0W10+O1xuICBvdGhlcnMkOiBPYnNlcnZhYmxlPENvbnNpZ25tZW50W10+O1xuICBjb21wbGV0ZWQkOiBPYnNlcnZhYmxlPENvbnNpZ25tZW50W10+O1xuICBjYW5jZWwkOiBPYnNlcnZhYmxlPENvbnNpZ25tZW50W10+O1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMub3JkZXJQcm9tb3Rpb25zJCA9IHRoaXMucHJvbW90aW9uU2VydmljZS5nZXRPcmRlclByb21vdGlvbnMoXG4gICAgICB0aGlzLnByb21vdGlvbkxvY2F0aW9uXG4gICAgKTtcbiAgICB0aGlzLm90aGVycyQgPSB0aGlzLmdldE90aGVyU3RhdHVzKC4uLmNvbXBsZXRlZFZhbHVlcywgLi4uY2FuY2VsbGVkVmFsdWVzKTtcbiAgICB0aGlzLmNvbXBsZXRlZCQgPSB0aGlzLmdldEV4YWN0U3RhdHVzKGNvbXBsZXRlZFZhbHVlcyk7XG4gICAgdGhpcy5jYW5jZWwkID0gdGhpcy5nZXRFeGFjdFN0YXR1cyhjYW5jZWxsZWRWYWx1ZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRFeGFjdFN0YXR1cyhcbiAgICBjb25zaWdubWVudFN0YXR1czogc3RyaW5nW11cbiAgKTogT2JzZXJ2YWJsZTxDb25zaWdubWVudFtdPiB7XG4gICAgcmV0dXJuIHRoaXMub3JkZXIkLnBpcGUoXG4gICAgICBtYXAob3JkZXIgPT4ge1xuICAgICAgICBpZiAoQm9vbGVhbihvcmRlci5jb25zaWdubWVudHMpKSB7XG4gICAgICAgICAgcmV0dXJuIG9yZGVyLmNvbnNpZ25tZW50cy5maWx0ZXIoY29uc2lnbm1lbnQgPT5cbiAgICAgICAgICAgIGNvbnNpZ25tZW50U3RhdHVzLmluY2x1ZGVzKGNvbnNpZ25tZW50LnN0YXR1cylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldE90aGVyU3RhdHVzKFxuICAgIC4uLmNvbnNpZ25tZW50U3RhdHVzOiBzdHJpbmdbXVxuICApOiBPYnNlcnZhYmxlPENvbnNpZ25tZW50W10+IHtcbiAgICByZXR1cm4gdGhpcy5vcmRlciQucGlwZShcbiAgICAgIG1hcChvcmRlciA9PiB7XG4gICAgICAgIGlmIChCb29sZWFuKG9yZGVyLmNvbnNpZ25tZW50cykpIHtcbiAgICAgICAgICByZXR1cm4gb3JkZXIuY29uc2lnbm1lbnRzLmZpbHRlcihcbiAgICAgICAgICAgIGNvbnNpZ25tZW50ID0+ICFjb25zaWdubWVudFN0YXR1cy5pbmNsdWRlcyhjb25zaWdubWVudC5zdGF0dXMpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkXG4gICAqIE5PVEU6IFRoaXMgZnVuY3Rpb24gd2lsbCBiZSByZW1vdmVkIGluIHZlcnNpb24gMi4wXG4gICAqL1xuICBnZXRDb25zaWdubWVudFByb2R1Y3RzKGNvbnNpZ25tZW50OiBDb25zaWdubWVudCk6IE9yZGVyRW50cnlbXSB7XG4gICAgY29uc3QgcHJvZHVjdHM6IE9yZGVyRW50cnlbXSA9IFtdO1xuICAgIGNvbnNpZ25tZW50LmVudHJpZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIHByb2R1Y3RzLnB1c2goZWxlbWVudC5vcmRlckVudHJ5KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9kdWN0cztcbiAgfVxufVxuIl19