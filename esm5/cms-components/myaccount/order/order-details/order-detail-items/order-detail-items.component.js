/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { PromotionLocation, } from '@spartacus/core';
import { OrderDetailsService } from '../order-details.service';
import { PromotionService } from '../../../../../shared/services/promotion/promotion.service';
var OrderDetailItemsComponent = /** @class */ (function () {
    function OrderDetailItemsComponent(orderDetailsService, promotionService) {
        this.orderDetailsService = orderDetailsService;
        this.promotionService = promotionService;
        this.promotionLocation = PromotionLocation.Order;
    }
    /**
     * @return {?}
     */
    OrderDetailItemsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.order$ = this.orderDetailsService.getOrderDetails();
        this.orderPromotions$ = this.promotionService.getOrderPromotions(this.promotionLocation);
    };
    /**
     * @deprecated
     * NOTE: This function will be removed in version 2.0
     */
    /**
     * @deprecated
     * NOTE: This function will be removed in version 2.0
     * @param {?} consignment
     * @return {?}
     */
    OrderDetailItemsComponent.prototype.getConsignmentProducts = /**
     * @deprecated
     * NOTE: This function will be removed in version 2.0
     * @param {?} consignment
     * @return {?}
     */
    function (consignment) {
        /** @type {?} */
        var products = [];
        consignment.entries.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            products.push(element.orderEntry);
        }));
        return products;
    };
    OrderDetailItemsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-order-details-items',
                    template: "<ng-container *ngIf=\"order$ | async as order\">\n  <div *ngFor=\"let consignment of order.consignments\" class=\"cx-list row\">\n    <div class=\"cx-list-header col-12\">\n      <div class=\"cx-list-status\">\n        <span *ngIf=\"consignment\">\n          {{\n            'orderDetails.deliveryStatus'\n              | cxTranslate: { context: consignment.status }\n          }}\n        </span>\n      </div>\n      <div *ngIf=\"consignment?.statusDate\" class=\"cx-list-date\">\n        <div>{{ 'orderDetails.shippedOn' | cxTranslate }}&nbsp;</div>\n        <div>{{ consignment?.statusDate | cxDate }}</div>\n      </div>\n\n      <cx-consignment-tracking\n        [orderCode]=\"order.code\"\n        [consignment]=\"consignment\"\n        *cxFeature=\"'consignmentTracking'\"\n      >\n      </cx-consignment-tracking>\n    </div>\n\n    <div class=\"cx-list-item col-12\">\n      <ng-container *cxFeatureLevel=\"'1.5'\">\n        <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n          <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n        </ng-container>\n      </ng-container>\n\n      <cx-cart-item-list\n        [items]=\"consignment.entries\"\n        [isReadOnly]=\"true\"\n        [promotionLocation]=\"promotionLocation\"\n      ></cx-cart-item-list>\n    </div>\n  </div>\n\n  <div *ngIf=\"order.unconsignedEntries?.length\" class=\"cx-list row\">\n    <div class=\"cx-list-header col-12\">\n      <div class=\"cx-list-status\">\n        {{ 'orderDetails.pending' | cxTranslate }}\n      </div>\n    </div>\n    <div class=\"cx-list-item col-12\">\n      <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n        <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n      </ng-container>\n\n      <cx-cart-item-list\n        [items]=\"order?.unconsignedEntries\"\n        [isReadOnly]=\"true\"\n        [promotionLocation]=\"promotionLocation\"\n      ></cx-cart-item-list>\n    </div>\n  </div>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    OrderDetailItemsComponent.ctorParameters = function () { return [
        { type: OrderDetailsService },
        { type: PromotionService }
    ]; };
    return OrderDetailItemsComponent;
}());
export { OrderDetailItemsComponent };
if (false) {
    /** @type {?} */
    OrderDetailItemsComponent.prototype.promotionLocation;
    /** @type {?} */
    OrderDetailItemsComponent.prototype.order$;
    /** @type {?} */
    OrderDetailItemsComponent.prototype.orderPromotions$;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlsLWl0ZW1zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbC1pdGVtcy9vcmRlci1kZXRhaWwtaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBR2xELE9BQU8sRUFLTCxpQkFBaUIsR0FDbEIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUU5RjtJQWtCRSxtQ0FDVSxtQkFBd0MsRUFDdEMsZ0JBQW1DO1FBRHJDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDdEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtRQUcvQyxzQkFBaUIsR0FBc0IsaUJBQWlCLENBQUMsS0FBSyxDQUFDO0lBRjVELENBQUM7Ozs7SUFNSiw0Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUM5RCxJQUFJLENBQUMsaUJBQWlCLENBQ3ZCLENBQUM7SUFDSixDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7O0lBQ0gsMERBQXNCOzs7Ozs7SUFBdEIsVUFBdUIsV0FBd0I7O1lBQ3ZDLFFBQVEsR0FBaUIsRUFBRTtRQUNqQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLE9BQU87WUFDakMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOztnQkE3Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLGsrREFBa0Q7aUJBQ25EOzs7O2dCQU5RLG1CQUFtQjtnQkFDbkIsZ0JBQWdCOztJQWdEekIsZ0NBQUM7Q0FBQSxBQTlDRCxJQThDQztTQTFDWSx5QkFBeUI7OztJQW1CcEMsc0RBQStEOztJQUMvRCwyQ0FBMEI7O0lBQzFCLHFEQUFnRDs7Ozs7SUFOOUMsd0RBQWdEOzs7OztJQUNoRCxxREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1xuICBPcmRlcixcbiAgQ29uc2lnbm1lbnQsXG4gIE9yZGVyRW50cnksXG4gIFByb21vdGlvblJlc3VsdCxcbiAgUHJvbW90aW9uTG9jYXRpb24sXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmltcG9ydCB7IE9yZGVyRGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuLi9vcmRlci1kZXRhaWxzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvbW90aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9wcm9tb3Rpb24vcHJvbW90aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1vcmRlci1kZXRhaWxzLWl0ZW1zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29yZGVyLWRldGFpbC1pdGVtcy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyRGV0YWlsSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBvcmRlckRldGFpbHNTZXJ2aWNlOiBPcmRlckRldGFpbHNTZXJ2aWNlLFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1bmlmaWVkLXNpZ25hdHVyZXNcbiAgICBwcm9tb3Rpb25TZXJ2aWNlOiBQcm9tb3Rpb25TZXJ2aWNlXG4gICk7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuNVxuICAgKiBVc2UgcHJvbW90aW9uU2VydmljZSBpbnN0ZWFkIG9mIHRoZSBwcm9tb3Rpb24gaW5wdXRzLlxuICAgKiBSZW1vdmUgaXNzdWU6ICM1NjcwXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcmRlckRldGFpbHNTZXJ2aWNlOiBPcmRlckRldGFpbHNTZXJ2aWNlKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG9yZGVyRGV0YWlsc1NlcnZpY2U6IE9yZGVyRGV0YWlsc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHByb21vdGlvblNlcnZpY2U/OiBQcm9tb3Rpb25TZXJ2aWNlXG4gICkge31cblxuICBwcm9tb3Rpb25Mb2NhdGlvbjogUHJvbW90aW9uTG9jYXRpb24gPSBQcm9tb3Rpb25Mb2NhdGlvbi5PcmRlcjtcbiAgb3JkZXIkOiBPYnNlcnZhYmxlPE9yZGVyPjtcbiAgb3JkZXJQcm9tb3Rpb25zJDogT2JzZXJ2YWJsZTxQcm9tb3Rpb25SZXN1bHRbXT47XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vcmRlciQgPSB0aGlzLm9yZGVyRGV0YWlsc1NlcnZpY2UuZ2V0T3JkZXJEZXRhaWxzKCk7XG4gICAgdGhpcy5vcmRlclByb21vdGlvbnMkID0gdGhpcy5wcm9tb3Rpb25TZXJ2aWNlLmdldE9yZGVyUHJvbW90aW9ucyhcbiAgICAgIHRoaXMucHJvbW90aW9uTG9jYXRpb25cbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkXG4gICAqIE5PVEU6IFRoaXMgZnVuY3Rpb24gd2lsbCBiZSByZW1vdmVkIGluIHZlcnNpb24gMi4wXG4gICAqL1xuICBnZXRDb25zaWdubWVudFByb2R1Y3RzKGNvbnNpZ25tZW50OiBDb25zaWdubWVudCk6IE9yZGVyRW50cnlbXSB7XG4gICAgY29uc3QgcHJvZHVjdHM6IE9yZGVyRW50cnlbXSA9IFtdO1xuICAgIGNvbnNpZ25tZW50LmVudHJpZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIHByb2R1Y3RzLnB1c2goZWxlbWVudC5vcmRlckVudHJ5KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9kdWN0cztcbiAgfVxufVxuIl19