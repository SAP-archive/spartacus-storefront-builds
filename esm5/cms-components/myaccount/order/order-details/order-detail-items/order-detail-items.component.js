/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
    /**
     * @return {?}
     */
    OrderDetailItemsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.orderPromotions$ = this.promotionService.getOrderPromotions(this.promotionLocation);
        this.others$ = this.getOtherStatus.apply(this, tslib_1.__spread(completedValues, cancelledValues));
        this.completed$ = this.getExactStatus(completedValues);
        this.cancel$ = this.getExactStatus(cancelledValues);
    };
    /**
     * @private
     * @param {?} consignmentStatus
     * @return {?}
     */
    OrderDetailItemsComponent.prototype.getExactStatus = /**
     * @private
     * @param {?} consignmentStatus
     * @return {?}
     */
    function (consignmentStatus) {
        return this.order$.pipe(map((/**
         * @param {?} order
         * @return {?}
         */
        function (order) {
            if (Boolean(order.consignments)) {
                return order.consignments.filter((/**
                 * @param {?} consignment
                 * @return {?}
                 */
                function (consignment) {
                    return consignmentStatus.includes(consignment.status);
                }));
            }
        })));
    };
    /**
     * @private
     * @param {...?} consignmentStatus
     * @return {?}
     */
    OrderDetailItemsComponent.prototype.getOtherStatus = /**
     * @private
     * @param {...?} consignmentStatus
     * @return {?}
     */
    function () {
        var consignmentStatus = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            consignmentStatus[_i] = arguments[_i];
        }
        return this.order$.pipe(map((/**
         * @param {?} order
         * @return {?}
         */
        function (order) {
            if (Boolean(order.consignments)) {
                return order.consignments.filter((/**
                 * @param {?} consignment
                 * @return {?}
                 */
                function (consignment) { return !consignmentStatus.includes(consignment.status); }));
            }
        })));
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
                    template: "<ng-container *ngIf=\"order$ | async as order\">\n  <!-- consigned entries -->\n  <div *cxFeatureLevel=\"'1.4'\">\n    <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n      <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n    </ng-container>\n\n    <cx-order-consigned-entries\n      *ngIf=\"others$ | async as others\"\n      [order]=\"order\"\n      [consignments]=\"others\"\n    ></cx-order-consigned-entries>\n\n    <cx-order-consigned-entries\n      *ngIf=\"completed$ | async as completed\"\n      [order]=\"order\"\n      [consignments]=\"completed\"\n    ></cx-order-consigned-entries>\n\n    <cx-order-consigned-entries\n      *ngIf=\"cancel$ | async as cancel\"\n      [order]=\"order\"\n      [consignments]=\"cancel\"\n    ></cx-order-consigned-entries>\n  </div>\n\n  <div *cxFeatureLevel=\"'!1.4'\">\n    <div *ngFor=\"let consignment of order.consignments\" class=\"cx-list row\">\n      <div class=\"cx-list-header col-12\">\n        <div class=\"cx-list-status\">\n          <span *ngIf=\"consignment\">\n            {{\n              'orderDetails.deliveryStatus'\n                | cxTranslate: { context: consignment.status }\n            }}\n          </span>\n        </div>\n        <div *ngIf=\"consignment?.statusDate\" class=\"cx-list-date\">\n          <div>{{ 'orderDetails.shippedOn' | cxTranslate }}&nbsp;</div>\n          <div>{{ consignment?.statusDate | cxDate }}</div>\n        </div>\n\n        <cx-consignment-tracking\n          [orderCode]=\"order.code\"\n          [consignment]=\"consignment\"\n          *cxFeature=\"'consignmentTracking'\"\n        >\n        </cx-consignment-tracking>\n      </div>\n      <div class=\"cx-list-item col-12\">\n        <ng-container *cxFeatureLevel=\"'1.5'\">\n          <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n            <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n          </ng-container>\n        </ng-container>\n\n        <cx-cart-item-list\n          [items]=\"getConsignmentProducts(consignment)\"\n          [readonly]=\"true\"\n          [promotionLocation]=\"promotionLocation\"\n        ></cx-cart-item-list>\n      </div>\n    </div>\n    <!-- unconsigned entries -->\n    <div *ngIf=\"order.unconsignedEntries?.length\" class=\"cx-list row\">\n      <div class=\"cx-list-header col-12\">\n        <div class=\"cx-list-status\">\n          {{ 'orderDetails.pending' | cxTranslate }}\n        </div>\n      </div>\n      <div class=\"cx-list-item col-12\">\n        <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n          <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n        </ng-container>\n\n        <cx-cart-item-list\n          [items]=\"order?.unconsignedEntries\"\n          [readonly]=\"true\"\n          [promotionLocation]=\"promotionLocation\"\n        ></cx-cart-item-list>\n      </div>\n    </div>\n  </div>\n</ng-container>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlsLWl0ZW1zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbC1pdGVtcy9vcmRlci1kZXRhaWwtaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBSUwsaUJBQWlCLEdBRWxCLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFDTCxlQUFlLEVBQ2YsZUFBZSxHQUNoQixNQUFNLHlEQUF5RCxDQUFDO0FBRWpFO0lBa0JFLG1DQUNVLG1CQUF3QyxFQUN0QyxnQkFBbUM7UUFEckMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN0QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW1CO1FBRy9DLHNCQUFpQixHQUFzQixpQkFBaUIsQ0FBQyxLQUFLLENBQUM7UUFDL0QsV0FBTSxHQUFzQixJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxFQUFFLENBQUM7SUFIcEUsQ0FBQzs7OztJQVNKLDRDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQzlELElBQUksQ0FBQyxpQkFBaUIsQ0FDdkIsQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsT0FBbkIsSUFBSSxtQkFBbUIsZUFBZSxFQUFLLGVBQWUsRUFBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7O0lBRU8sa0RBQWM7Ozs7O0lBQXRCLFVBQ0UsaUJBQTJCO1FBRTNCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ3JCLEdBQUc7Ozs7UUFBQyxVQUFBLEtBQUs7WUFDUCxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQy9CLE9BQU8sS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNOzs7O2dCQUFDLFVBQUEsV0FBVztvQkFDMUMsT0FBQSxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztnQkFBOUMsQ0FBOEMsRUFDL0MsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLGtEQUFjOzs7OztJQUF0QjtRQUNFLDJCQUE4QjthQUE5QixVQUE4QixFQUE5QixxQkFBOEIsRUFBOUIsSUFBOEI7WUFBOUIsc0NBQThCOztRQUU5QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNyQixHQUFHOzs7O1FBQUMsVUFBQSxLQUFLO1lBQ1AsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFO2dCQUMvQixPQUFPLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTTs7OztnQkFDOUIsVUFBQSxXQUFXLElBQUksT0FBQSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQS9DLENBQStDLEVBQy9ELENBQUM7YUFDSDtRQUNILENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7O0lBQ0gsMERBQXNCOzs7Ozs7SUFBdEIsVUFBdUIsV0FBd0I7O1lBQ3ZDLFFBQVEsR0FBaUIsRUFBRTtRQUNqQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLE9BQU87WUFDakMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOztnQkE5RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLGk2RkFBa0Q7aUJBQ25EOzs7O2dCQVRRLG1CQUFtQjtnQkFEbkIsZ0JBQWdCOztJQXNGekIsZ0NBQUM7Q0FBQSxBQS9FRCxJQStFQztTQTNFWSx5QkFBeUI7OztJQW1CcEMsc0RBQStEOztJQUMvRCwyQ0FBdUU7O0lBQ3ZFLHFEQUFnRDs7SUFDaEQsNENBQW1DOztJQUNuQywrQ0FBc0M7O0lBQ3RDLDRDQUFtQzs7Ozs7SUFUakMsd0RBQWdEOzs7OztJQUNoRCxxREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29uc2lnbm1lbnQsXG4gIE9yZGVyLFxuICBPcmRlckVudHJ5LFxuICBQcm9tb3Rpb25Mb2NhdGlvbixcbiAgUHJvbW90aW9uUmVzdWx0LFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUHJvbW90aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9wcm9tb3Rpb24vcHJvbW90aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3JkZXJEZXRhaWxzU2VydmljZSB9IGZyb20gJy4uL29yZGVyLWRldGFpbHMuc2VydmljZSc7XG5pbXBvcnQge1xuICBjYW5jZWxsZWRWYWx1ZXMsXG4gIGNvbXBsZXRlZFZhbHVlcyxcbn0gZnJvbSAnLi9vcmRlci1jb25zaWduZWQtZW50cmllcy9vcmRlci1jb25zaWduZWQtZW50cmllcy5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW9yZGVyLWRldGFpbHMtaXRlbXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vb3JkZXItZGV0YWlsLWl0ZW1zLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJEZXRhaWxJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIG9yZGVyRGV0YWlsc1NlcnZpY2U6IE9yZGVyRGV0YWlsc1NlcnZpY2UsXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVuaWZpZWQtc2lnbmF0dXJlc1xuICAgIHByb21vdGlvblNlcnZpY2U6IFByb21vdGlvblNlcnZpY2VcbiAgKTtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS41XG4gICAqIFVzZSBwcm9tb3Rpb25TZXJ2aWNlIGluc3RlYWQgb2YgdGhlIHByb21vdGlvbiBpbnB1dHMuXG4gICAqIFJlbW92ZSBpc3N1ZTogIzU2NzBcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9yZGVyRGV0YWlsc1NlcnZpY2U6IE9yZGVyRGV0YWlsc1NlcnZpY2UpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgb3JkZXJEZXRhaWxzU2VydmljZTogT3JkZXJEZXRhaWxzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcHJvbW90aW9uU2VydmljZT86IFByb21vdGlvblNlcnZpY2VcbiAgKSB7fVxuXG4gIHByb21vdGlvbkxvY2F0aW9uOiBQcm9tb3Rpb25Mb2NhdGlvbiA9IFByb21vdGlvbkxvY2F0aW9uLk9yZGVyO1xuICBvcmRlciQ6IE9ic2VydmFibGU8T3JkZXI+ID0gdGhpcy5vcmRlckRldGFpbHNTZXJ2aWNlLmdldE9yZGVyRGV0YWlscygpO1xuICBvcmRlclByb21vdGlvbnMkOiBPYnNlcnZhYmxlPFByb21vdGlvblJlc3VsdFtdPjtcbiAgb3RoZXJzJDogT2JzZXJ2YWJsZTxDb25zaWdubWVudFtdPjtcbiAgY29tcGxldGVkJDogT2JzZXJ2YWJsZTxDb25zaWdubWVudFtdPjtcbiAgY2FuY2VsJDogT2JzZXJ2YWJsZTxDb25zaWdubWVudFtdPjtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm9yZGVyUHJvbW90aW9ucyQgPSB0aGlzLnByb21vdGlvblNlcnZpY2UuZ2V0T3JkZXJQcm9tb3Rpb25zKFxuICAgICAgdGhpcy5wcm9tb3Rpb25Mb2NhdGlvblxuICAgICk7XG4gICAgdGhpcy5vdGhlcnMkID0gdGhpcy5nZXRPdGhlclN0YXR1cyguLi5jb21wbGV0ZWRWYWx1ZXMsIC4uLmNhbmNlbGxlZFZhbHVlcyk7XG4gICAgdGhpcy5jb21wbGV0ZWQkID0gdGhpcy5nZXRFeGFjdFN0YXR1cyhjb21wbGV0ZWRWYWx1ZXMpO1xuICAgIHRoaXMuY2FuY2VsJCA9IHRoaXMuZ2V0RXhhY3RTdGF0dXMoY2FuY2VsbGVkVmFsdWVzKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RXhhY3RTdGF0dXMoXG4gICAgY29uc2lnbm1lbnRTdGF0dXM6IHN0cmluZ1tdXG4gICk6IE9ic2VydmFibGU8Q29uc2lnbm1lbnRbXT4ge1xuICAgIHJldHVybiB0aGlzLm9yZGVyJC5waXBlKFxuICAgICAgbWFwKG9yZGVyID0+IHtcbiAgICAgICAgaWYgKEJvb2xlYW4ob3JkZXIuY29uc2lnbm1lbnRzKSkge1xuICAgICAgICAgIHJldHVybiBvcmRlci5jb25zaWdubWVudHMuZmlsdGVyKGNvbnNpZ25tZW50ID0+XG4gICAgICAgICAgICBjb25zaWdubWVudFN0YXR1cy5pbmNsdWRlcyhjb25zaWdubWVudC5zdGF0dXMpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPdGhlclN0YXR1cyhcbiAgICAuLi5jb25zaWdubWVudFN0YXR1czogc3RyaW5nW11cbiAgKTogT2JzZXJ2YWJsZTxDb25zaWdubWVudFtdPiB7XG4gICAgcmV0dXJuIHRoaXMub3JkZXIkLnBpcGUoXG4gICAgICBtYXAob3JkZXIgPT4ge1xuICAgICAgICBpZiAoQm9vbGVhbihvcmRlci5jb25zaWdubWVudHMpKSB7XG4gICAgICAgICAgcmV0dXJuIG9yZGVyLmNvbnNpZ25tZW50cy5maWx0ZXIoXG4gICAgICAgICAgICBjb25zaWdubWVudCA9PiAhY29uc2lnbm1lbnRTdGF0dXMuaW5jbHVkZXMoY29uc2lnbm1lbnQuc3RhdHVzKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKiBOT1RFOiBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgcmVtb3ZlZCBpbiB2ZXJzaW9uIDIuMFxuICAgKi9cbiAgZ2V0Q29uc2lnbm1lbnRQcm9kdWN0cyhjb25zaWdubWVudDogQ29uc2lnbm1lbnQpOiBPcmRlckVudHJ5W10ge1xuICAgIGNvbnN0IHByb2R1Y3RzOiBPcmRlckVudHJ5W10gPSBbXTtcbiAgICBjb25zaWdubWVudC5lbnRyaWVzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBwcm9kdWN0cy5wdXNoKGVsZW1lbnQub3JkZXJFbnRyeSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvZHVjdHM7XG4gIH1cbn1cbiJdfQ==