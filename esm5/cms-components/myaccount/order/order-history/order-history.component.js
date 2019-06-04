/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { RoutingService, TranslationService, UserService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';
var OrderHistoryComponent = /** @class */ (function () {
    function OrderHistoryComponent(routing, userService, translation) {
        this.routing = routing;
        this.userService = userService;
        this.translation = translation;
        this.PAGE_SIZE = 5;
    }
    /**
     * @return {?}
     */
    OrderHistoryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.orders$ = this.userService.getOrderHistoryList(this.PAGE_SIZE).pipe(tap((/**
         * @param {?} orders
         * @return {?}
         */
        function (orders) {
            if (orders.pagination) {
                _this.sortType = orders.pagination.sort;
            }
        })));
        this.isLoaded$ = this.userService.getOrderHistoryListLoaded();
    };
    /**
     * @return {?}
     */
    OrderHistoryComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.userService.clearOrderList();
    };
    /**
     * @param {?} sortCode
     * @return {?}
     */
    OrderHistoryComponent.prototype.changeSortCode = /**
     * @param {?} sortCode
     * @return {?}
     */
    function (sortCode) {
        /** @type {?} */
        var event = {
            sortCode: sortCode,
            currentPage: 0,
        };
        this.sortType = sortCode;
        this.fetchOrders(event);
    };
    /**
     * @param {?} page
     * @return {?}
     */
    OrderHistoryComponent.prototype.pageChange = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        /** @type {?} */
        var event = {
            sortCode: this.sortType,
            currentPage: page,
        };
        this.fetchOrders(event);
    };
    /**
     * @param {?} order
     * @return {?}
     */
    OrderHistoryComponent.prototype.goToOrderDetail = /**
     * @param {?} order
     * @return {?}
     */
    function (order) {
        this.routing.go({
            cxRoute: 'orderDetails',
            params: order,
        });
    };
    /**
     * @return {?}
     */
    OrderHistoryComponent.prototype.getSortLabels = /**
     * @return {?}
     */
    function () {
        return combineLatest([
            this.translation.translate('sorting.date'),
            this.translation.translate('sorting.orderNumber'),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), textByDate = _b[0], textByOrderNumber = _b[1];
            return {
                byDate: textByDate,
                byOrderNumber: textByOrderNumber,
            };
        })));
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    OrderHistoryComponent.prototype.fetchOrders = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.userService.loadOrderList(this.PAGE_SIZE, event.currentPage, event.sortCode);
    };
    OrderHistoryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-order-history',
                    template: "<ng-container *ngIf=\"(orders$ | async) as orders\">\n  <div class=\"container\">\n    <!-- HEADER -->\n    <div class=\"cx-order-history-header\">\n      <h3>{{ 'orderHistory.orderHistory' | cxTranslate }}</h3>\n    </div>\n\n    <!-- BODY -->\n    <div class=\"cx-order-history-body\">\n      <ng-container *ngIf=\"orders.pagination.totalResults > 0; else noOrder\">\n        <!-- Select Form and Pagination Top -->\n        <div class=\"cx-order-history-sort top row\">\n          <div\n            class=\"cx-order-history-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"orders.sorts\"\n              [sortLabels]=\"getSortLabels() | async\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"orders.pagination.sort\"\n              placeholder=\"{{ 'orderHistory.sortByMostRecent' | cxTranslate }}\"\n            ></cx-sorting>\n          </div>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"orders.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n        <!-- TABLE -->\n        <table class=\"table cx-order-history-table\">\n          <thead class=\"cx-order-history-thead-mobile\">\n            <th scope=\"col\">\n              {{ 'orderHistory.orderId' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'orderHistory.date' | cxTranslate }}</th>\n            <th scope=\"col\">\n              {{ 'orderHistory.status' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'orderHistory.total' | cxTranslate }}</th>\n          </thead>\n          <tbody>\n            <tr\n              *ngFor=\"let order of orders.orders\"\n              (click)=\"goToOrderDetail(order)\"\n            >\n              <td class=\"cx-order-history-code\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.orderId' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'orderDetails',\n                      params: order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ order?.code }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-placed\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.date' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'orderDetails',\n                      params: order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                  >{{ order?.placed | cxDate: 'longDate' }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-status\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.status' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'orderDetails',\n                      params: order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{\n                    'orderDetails.statusDisplay'\n                      | cxTranslate: { context: order?.statusDisplay }\n                  }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-total\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.total' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'orderDetails',\n                      params: order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ order?.total.formattedValue }}</a\n                >\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <!-- Select Form and Pagination Bottom -->\n        <div class=\"cx-order-history-sort bottom row\">\n          <div\n            class=\"cx-order-history-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"orders.sorts\"\n              [sortLabels]=\"getSortLabels() | async\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"orders.pagination.sort\"\n              placeholder=\"{{ 'orderHistory.sortByMostRecent' | cxTranslate }}\"\n            ></cx-sorting>\n          </div>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"orders.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n      </ng-container>\n\n      <!-- NO ORDER CONTAINER -->\n      <ng-template #noOrder>\n        <div class=\"cx-order-history-no-order row\" *ngIf=\"(isLoaded$ | async)\">\n          <div class=\"col-sm-12 col-md-6 col-lg-4\">\n            <div>{{ 'orderHistory.noOrders' | cxTranslate }}</div>\n            <a\n              [routerLink]=\"{ cxRoute: 'home' } | cxUrl\"\n              routerLinkActive=\"active\"\n              class=\"btn btn-primary btn-block\"\n              >{{ 'orderHistory.startShopping' | cxTranslate }}</a\n            >\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    OrderHistoryComponent.ctorParameters = function () { return [
        { type: RoutingService },
        { type: UserService },
        { type: TranslationService }
    ]; };
    return OrderHistoryComponent;
}());
export { OrderHistoryComponent };
if (false) {
    /** @type {?} */
    OrderHistoryComponent.prototype.orders$;
    /** @type {?} */
    OrderHistoryComponent.prototype.isLoaded$;
    /**
     * @type {?}
     * @private
     */
    OrderHistoryComponent.prototype.PAGE_SIZE;
    /** @type {?} */
    OrderHistoryComponent.prototype.sortType;
    /**
     * @type {?}
     * @private
     */
    OrderHistoryComponent.prototype.routing;
    /**
     * @type {?}
     * @private
     */
    OrderHistoryComponent.prototype.userService;
    /**
     * @type {?}
     * @private
     */
    OrderHistoryComponent.prototype.translation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItaGlzdG9yeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvb3JkZXItaGlzdG9yeS9vcmRlci1oaXN0b3J5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFHTCxjQUFjLEVBQ2Qsa0JBQWtCLEVBQ2xCLFdBQVcsR0FDWixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxQztJQUtFLCtCQUNVLE9BQXVCLEVBQ3ZCLFdBQXdCLEVBQ3hCLFdBQStCO1FBRi9CLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQU1qQyxjQUFTLEdBQUcsQ0FBQyxDQUFDO0lBTG5CLENBQUM7Ozs7SUFTSix3Q0FBUTs7O0lBQVI7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUN0RSxHQUFHOzs7O1FBQUMsVUFBQyxNQUF3QjtZQUMzQixJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUU7Z0JBQ3JCLEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7YUFDeEM7UUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBRUYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLHlCQUF5QixFQUFFLENBQUM7SUFDaEUsQ0FBQzs7OztJQUVELDJDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCw4Q0FBYzs7OztJQUFkLFVBQWUsUUFBZ0I7O1lBQ3ZCLEtBQUssR0FBOEM7WUFDdkQsUUFBUSxVQUFBO1lBQ1IsV0FBVyxFQUFFLENBQUM7U0FDZjtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCwwQ0FBVTs7OztJQUFWLFVBQVcsSUFBWTs7WUFDZixLQUFLLEdBQThDO1lBQ3ZELFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixXQUFXLEVBQUUsSUFBSTtTQUNsQjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCwrQ0FBZTs7OztJQUFmLFVBQWdCLEtBQVk7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDZCxPQUFPLEVBQUUsY0FBYztZQUN2QixNQUFNLEVBQUUsS0FBSztTQUNkLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCw2Q0FBYTs7O0lBQWI7UUFDRSxPQUFPLGFBQWEsQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUM7WUFDMUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUM7U0FDbEQsQ0FBQyxDQUFDLElBQUksQ0FDTCxHQUFHOzs7O1FBQUMsVUFBQyxFQUErQjtnQkFBL0IsMEJBQStCLEVBQTlCLGtCQUFVLEVBQUUseUJBQWlCO1lBQ2pDLE9BQU87Z0JBQ0wsTUFBTSxFQUFFLFVBQVU7Z0JBQ2xCLGFBQWEsRUFBRSxpQkFBaUI7YUFDakMsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTywyQ0FBVzs7Ozs7SUFBbkIsVUFBb0IsS0FBZ0Q7UUFDbEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQzVCLElBQUksQ0FBQyxTQUFTLEVBQ2QsS0FBSyxDQUFDLFdBQVcsRUFDakIsS0FBSyxDQUFDLFFBQVEsQ0FDZixDQUFDO0lBQ0osQ0FBQzs7Z0JBOUVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1Qiwrd0xBQTZDO2lCQUM5Qzs7OztnQkFWQyxjQUFjO2dCQUVkLFdBQVc7Z0JBRFgsa0JBQWtCOztJQXFGcEIsNEJBQUM7Q0FBQSxBQS9FRCxJQStFQztTQTNFWSxxQkFBcUI7OztJQU9oQyx3Q0FBc0M7O0lBQ3RDLDBDQUErQjs7Ozs7SUFFL0IsMENBQXNCOztJQUV0Qix5Q0FBaUI7Ozs7O0lBVmYsd0NBQStCOzs7OztJQUMvQiw0Q0FBZ0M7Ozs7O0lBQ2hDLDRDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE9yZGVyLFxuICBPcmRlckhpc3RvcnlMaXN0LFxuICBSb3V0aW5nU2VydmljZSxcbiAgVHJhbnNsYXRpb25TZXJ2aWNlLFxuICBVc2VyU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1vcmRlci1oaXN0b3J5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL29yZGVyLWhpc3RvcnkuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckhpc3RvcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGluZzogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlXG4gICkge31cblxuICBvcmRlcnMkOiBPYnNlcnZhYmxlPE9yZGVySGlzdG9yeUxpc3Q+O1xuICBpc0xvYWRlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgcHJpdmF0ZSBQQUdFX1NJWkUgPSA1O1xuXG4gIHNvcnRUeXBlOiBzdHJpbmc7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5vcmRlcnMkID0gdGhpcy51c2VyU2VydmljZS5nZXRPcmRlckhpc3RvcnlMaXN0KHRoaXMuUEFHRV9TSVpFKS5waXBlKFxuICAgICAgdGFwKChvcmRlcnM6IE9yZGVySGlzdG9yeUxpc3QpID0+IHtcbiAgICAgICAgaWYgKG9yZGVycy5wYWdpbmF0aW9uKSB7XG4gICAgICAgICAgdGhpcy5zb3J0VHlwZSA9IG9yZGVycy5wYWdpbmF0aW9uLnNvcnQ7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuaXNMb2FkZWQkID0gdGhpcy51c2VyU2VydmljZS5nZXRPcmRlckhpc3RvcnlMaXN0TG9hZGVkKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmNsZWFyT3JkZXJMaXN0KCk7XG4gIH1cblxuICBjaGFuZ2VTb3J0Q29kZShzb3J0Q29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgZXZlbnQ6IHsgc29ydENvZGU6IHN0cmluZzsgY3VycmVudFBhZ2U6IG51bWJlciB9ID0ge1xuICAgICAgc29ydENvZGUsXG4gICAgICBjdXJyZW50UGFnZTogMCxcbiAgICB9O1xuICAgIHRoaXMuc29ydFR5cGUgPSBzb3J0Q29kZTtcbiAgICB0aGlzLmZldGNoT3JkZXJzKGV2ZW50KTtcbiAgfVxuXG4gIHBhZ2VDaGFuZ2UocGFnZTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgZXZlbnQ6IHsgc29ydENvZGU6IHN0cmluZzsgY3VycmVudFBhZ2U6IG51bWJlciB9ID0ge1xuICAgICAgc29ydENvZGU6IHRoaXMuc29ydFR5cGUsXG4gICAgICBjdXJyZW50UGFnZTogcGFnZSxcbiAgICB9O1xuICAgIHRoaXMuZmV0Y2hPcmRlcnMoZXZlbnQpO1xuICB9XG5cbiAgZ29Ub09yZGVyRGV0YWlsKG9yZGVyOiBPcmRlcik6IHZvaWQge1xuICAgIHRoaXMucm91dGluZy5nbyh7XG4gICAgICBjeFJvdXRlOiAnb3JkZXJEZXRhaWxzJyxcbiAgICAgIHBhcmFtczogb3JkZXIsXG4gICAgfSk7XG4gIH1cblxuICBnZXRTb3J0TGFiZWxzKCk6IE9ic2VydmFibGU8eyBieURhdGU6IHN0cmluZzsgYnlPcmRlck51bWJlcjogc3RyaW5nIH0+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnc29ydGluZy5kYXRlJyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnc29ydGluZy5vcmRlck51bWJlcicpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFt0ZXh0QnlEYXRlLCB0ZXh0QnlPcmRlck51bWJlcl0pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBieURhdGU6IHRleHRCeURhdGUsXG4gICAgICAgICAgYnlPcmRlck51bWJlcjogdGV4dEJ5T3JkZXJOdW1iZXIsXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGZldGNoT3JkZXJzKGV2ZW50OiB7IHNvcnRDb2RlOiBzdHJpbmc7IGN1cnJlbnRQYWdlOiBudW1iZXIgfSk6IHZvaWQge1xuICAgIHRoaXMudXNlclNlcnZpY2UubG9hZE9yZGVyTGlzdChcbiAgICAgIHRoaXMuUEFHRV9TSVpFLFxuICAgICAgZXZlbnQuY3VycmVudFBhZ2UsXG4gICAgICBldmVudC5zb3J0Q29kZVxuICAgICk7XG4gIH1cbn1cbiJdfQ==