/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { RoutingService, TranslationService, UserOrderService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';
var OrderHistoryComponent = /** @class */ (function () {
    function OrderHistoryComponent(routing, userOrderService, translation) {
        this.routing = routing;
        this.userOrderService = userOrderService;
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
        this.orders$ = this.userOrderService
            .getOrderHistoryList(this.PAGE_SIZE)
            .pipe(tap((/**
         * @param {?} orders
         * @return {?}
         */
        function (orders) {
            if (orders.pagination) {
                _this.sortType = orders.pagination.sort;
            }
        })));
        this.isLoaded$ = this.userOrderService.getOrderHistoryListLoaded();
    };
    /**
     * @return {?}
     */
    OrderHistoryComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.userOrderService.clearOrderList();
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
        this.userOrderService.loadOrderList(this.PAGE_SIZE, event.currentPage, event.sortCode);
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
        { type: UserOrderService },
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
    OrderHistoryComponent.prototype.userOrderService;
    /**
     * @type {?}
     * @private
     */
    OrderHistoryComponent.prototype.translation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItaGlzdG9yeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvb3JkZXItaGlzdG9yeS9vcmRlci1oaXN0b3J5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFHTCxjQUFjLEVBQ2Qsa0JBQWtCLEVBQ2xCLGdCQUFnQixHQUNqQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxQztJQUtFLCtCQUNVLE9BQXVCLEVBQ3ZCLGdCQUFrQyxFQUNsQyxXQUErQjtRQUYvQixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQU1qQyxjQUFTLEdBQUcsQ0FBQyxDQUFDO0lBTG5CLENBQUM7Ozs7SUFTSix3Q0FBUTs7O0lBQVI7UUFBQSxpQkFZQztRQVhDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQjthQUNqQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ25DLElBQUksQ0FDSCxHQUFHOzs7O1FBQUMsVUFBQyxNQUF3QjtZQUMzQixJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUU7Z0JBQ3JCLEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7YUFDeEM7UUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBRUosSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMseUJBQXlCLEVBQUUsQ0FBQztJQUNyRSxDQUFDOzs7O0lBRUQsMkNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBRUQsOENBQWM7Ozs7SUFBZCxVQUFlLFFBQWdCOztZQUN2QixLQUFLLEdBQThDO1lBQ3ZELFFBQVEsVUFBQTtZQUNSLFdBQVcsRUFBRSxDQUFDO1NBQ2Y7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsMENBQVU7Ozs7SUFBVixVQUFXLElBQVk7O1lBQ2YsS0FBSyxHQUE4QztZQUN2RCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsV0FBVyxFQUFFLElBQUk7U0FDbEI7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsK0NBQWU7Ozs7SUFBZixVQUFnQixLQUFZO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ2QsT0FBTyxFQUFFLGNBQWM7WUFDdkIsTUFBTSxFQUFFLEtBQUs7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsNkNBQWE7OztJQUFiO1FBQ0UsT0FBTyxhQUFhLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDO1lBQzFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDO1NBQ2xELENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRzs7OztRQUFDLFVBQUMsRUFBK0I7Z0JBQS9CLDBCQUErQixFQUE5QixrQkFBVSxFQUFFLHlCQUFpQjtZQUNqQyxPQUFPO2dCQUNMLE1BQU0sRUFBRSxVQUFVO2dCQUNsQixhQUFhLEVBQUUsaUJBQWlCO2FBQ2pDLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sMkNBQVc7Ozs7O0lBQW5CLFVBQW9CLEtBQWdEO1FBQ2xFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQ2pDLElBQUksQ0FBQyxTQUFTLEVBQ2QsS0FBSyxDQUFDLFdBQVcsRUFDakIsS0FBSyxDQUFDLFFBQVEsQ0FDZixDQUFDO0lBQ0osQ0FBQzs7Z0JBaEZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1Qiwrd0xBQTZDO2lCQUM5Qzs7OztnQkFWQyxjQUFjO2dCQUVkLGdCQUFnQjtnQkFEaEIsa0JBQWtCOztJQXVGcEIsNEJBQUM7Q0FBQSxBQWpGRCxJQWlGQztTQTdFWSxxQkFBcUI7OztJQU9oQyx3Q0FBc0M7O0lBQ3RDLDBDQUErQjs7Ozs7SUFFL0IsMENBQXNCOztJQUV0Qix5Q0FBaUI7Ozs7O0lBVmYsd0NBQStCOzs7OztJQUMvQixpREFBMEM7Ozs7O0lBQzFDLDRDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE9yZGVyLFxuICBPcmRlckhpc3RvcnlMaXN0LFxuICBSb3V0aW5nU2VydmljZSxcbiAgVHJhbnNsYXRpb25TZXJ2aWNlLFxuICBVc2VyT3JkZXJTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW9yZGVyLWhpc3RvcnknLFxuICB0ZW1wbGF0ZVVybDogJy4vb3JkZXItaGlzdG9yeS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVySGlzdG9yeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0aW5nOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcml2YXRlIHVzZXJPcmRlclNlcnZpY2U6IFVzZXJPcmRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlXG4gICkge31cblxuICBvcmRlcnMkOiBPYnNlcnZhYmxlPE9yZGVySGlzdG9yeUxpc3Q+O1xuICBpc0xvYWRlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgcHJpdmF0ZSBQQUdFX1NJWkUgPSA1O1xuXG4gIHNvcnRUeXBlOiBzdHJpbmc7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5vcmRlcnMkID0gdGhpcy51c2VyT3JkZXJTZXJ2aWNlXG4gICAgICAuZ2V0T3JkZXJIaXN0b3J5TGlzdCh0aGlzLlBBR0VfU0laRSlcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoKG9yZGVyczogT3JkZXJIaXN0b3J5TGlzdCkgPT4ge1xuICAgICAgICAgIGlmIChvcmRlcnMucGFnaW5hdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zb3J0VHlwZSA9IG9yZGVycy5wYWdpbmF0aW9uLnNvcnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIHRoaXMuaXNMb2FkZWQkID0gdGhpcy51c2VyT3JkZXJTZXJ2aWNlLmdldE9yZGVySGlzdG9yeUxpc3RMb2FkZWQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudXNlck9yZGVyU2VydmljZS5jbGVhck9yZGVyTGlzdCgpO1xuICB9XG5cbiAgY2hhbmdlU29ydENvZGUoc29ydENvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGV2ZW50OiB7IHNvcnRDb2RlOiBzdHJpbmc7IGN1cnJlbnRQYWdlOiBudW1iZXIgfSA9IHtcbiAgICAgIHNvcnRDb2RlLFxuICAgICAgY3VycmVudFBhZ2U6IDAsXG4gICAgfTtcbiAgICB0aGlzLnNvcnRUeXBlID0gc29ydENvZGU7XG4gICAgdGhpcy5mZXRjaE9yZGVycyhldmVudCk7XG4gIH1cblxuICBwYWdlQ2hhbmdlKHBhZ2U6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGV2ZW50OiB7IHNvcnRDb2RlOiBzdHJpbmc7IGN1cnJlbnRQYWdlOiBudW1iZXIgfSA9IHtcbiAgICAgIHNvcnRDb2RlOiB0aGlzLnNvcnRUeXBlLFxuICAgICAgY3VycmVudFBhZ2U6IHBhZ2UsXG4gICAgfTtcbiAgICB0aGlzLmZldGNoT3JkZXJzKGV2ZW50KTtcbiAgfVxuXG4gIGdvVG9PcmRlckRldGFpbChvcmRlcjogT3JkZXIpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmcuZ28oe1xuICAgICAgY3hSb3V0ZTogJ29yZGVyRGV0YWlscycsXG4gICAgICBwYXJhbXM6IG9yZGVyLFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0U29ydExhYmVscygpOiBPYnNlcnZhYmxlPHsgYnlEYXRlOiBzdHJpbmc7IGJ5T3JkZXJOdW1iZXI6IHN0cmluZyB9PiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3NvcnRpbmcuZGF0ZScpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3NvcnRpbmcub3JkZXJOdW1iZXInKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKChbdGV4dEJ5RGF0ZSwgdGV4dEJ5T3JkZXJOdW1iZXJdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYnlEYXRlOiB0ZXh0QnlEYXRlLFxuICAgICAgICAgIGJ5T3JkZXJOdW1iZXI6IHRleHRCeU9yZGVyTnVtYmVyLFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBmZXRjaE9yZGVycyhldmVudDogeyBzb3J0Q29kZTogc3RyaW5nOyBjdXJyZW50UGFnZTogbnVtYmVyIH0pOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJPcmRlclNlcnZpY2UubG9hZE9yZGVyTGlzdChcbiAgICAgIHRoaXMuUEFHRV9TSVpFLFxuICAgICAgZXZlbnQuY3VycmVudFBhZ2UsXG4gICAgICBldmVudC5zb3J0Q29kZVxuICAgICk7XG4gIH1cbn1cbiJdfQ==