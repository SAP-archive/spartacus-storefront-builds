/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AuthService, RoutingService, UserService, } from '@spartacus/core';
import { tap } from 'rxjs/operators';
var OrderHistoryComponent = /** @class */ (function () {
    function OrderHistoryComponent(auth, routing, userService) {
        this.auth = auth;
        this.routing = routing;
        this.userService = userService;
        this.PAGE_SIZE = 5;
        this.sortLabels = {
            byDate: 'Date',
            byOrderNumber: 'Order Number',
        };
    }
    /**
     * @return {?}
     */
    OrderHistoryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscription = this.auth.getUserToken().subscribe(function (userData) {
            if (userData && userData.userId) {
                _this.user_id = userData.userId;
            }
        });
        this.orders$ = this.userService
            .getOrderHistoryList(this.user_id, this.PAGE_SIZE)
            .pipe(tap(function (orders) {
            if (orders.pagination) {
                _this.sortType = orders.pagination.sort;
            }
        }));
        this.isLoaded$ = this.userService.getOrderHistoryListLoaded();
    };
    /**
     * @return {?}
     */
    OrderHistoryComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
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
            route: 'orderDetails',
            params: order,
        });
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
        this.userService.loadOrderList(this.user_id, this.PAGE_SIZE, event.currentPage, event.sortCode);
    };
    OrderHistoryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-order-history',
                    template: "<ng-container *ngIf=\"(orders$ | async) as orders\">\n  <div class=\"container\">\n    <!-- HEADER -->\n    <div class=\"cx-order-history-header\">\n      <h3>{{ 'orderHistory.orderHistory' | cxTranslate }}</h3>\n    </div>\n\n    <!-- BODY -->\n    <div class=\"cx-order-history-body\">\n      <ng-container *ngIf=\"orders.pagination.totalResults > 0; else noOrder\">\n        <!-- Select Form and Pagination Top -->\n        <div class=\"cx-order-history-sort top row\">\n          <div\n            class=\"cx-order-history-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"orders.sorts\"\n              [sortLabels]=\"sortLabels\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"orders.pagination.sort\"\n              placeholder=\"{{ 'orderHistory.sortByMostRecent' | cxTranslate }}\"\n            ></cx-sorting>\n          </div>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"orders.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n        <!-- TABLE -->\n        <table class=\"table cx-order-history-table\">\n          <thead class=\"cx-order-history-thead-mobile\">\n            <th scope=\"col\">\n              {{ 'orderHistory.orderId' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'orderHistory.date' | cxTranslate }}</th>\n            <th scope=\"col\">\n              {{ 'orderHistory.status' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'orderHistory.total' | cxTranslate }}</th>\n          </thead>\n          <tbody>\n            <tr\n              *ngFor=\"let order of orders.orders\"\n              (click)=\"goToOrderDetail(order)\"\n            >\n              <td class=\"cx-order-history-code\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.orderId' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      route: 'orderDetails',\n                      params: order\n                    } | cxTranslateUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ order?.code }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-placed\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.date' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      route: 'orderDetails',\n                      params: order\n                    } | cxTranslateUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                  >{{ order?.placed | cxDate: 'longDate' }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-status\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.status' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      route: 'orderDetails',\n                      params: order\n                    } | cxTranslateUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ order?.statusDisplay }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-total\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.total' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      route: 'orderDetails',\n                      params: order\n                    } | cxTranslateUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ order?.total.formattedValue }}</a\n                >\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <!-- Select Form and Pagination Bottom -->\n        <div class=\"cx-order-history-sort bottom row\">\n          <div\n            class=\"cx-order-history-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"orders.sorts\"\n              [sortLabels]=\"sortLabels\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"orders.pagination.sort\"\n              placeholder=\"{{ 'orderHistory.sortByMostRecent' | cxTranslate }}\"\n            ></cx-sorting>\n          </div>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"orders.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n      </ng-container>\n\n      <!-- NO ORDER CONTAINER -->\n      <ng-template #noOrder>\n        <div class=\"cx-order-history-no-order row\" *ngIf=\"(isLoaded$ | async)\">\n          <div class=\"col-sm-12 col-md-6 col-lg-4\">\n            <div>{{ 'orderHistory.noOrders' | cxTranslate }}</div>\n            <a\n              [routerLink]=\"{ route: 'home' } | cxTranslateUrl\"\n              routerLinkActive=\"active\"\n              class=\"btn btn-primary btn-block\"\n              >{{ 'orderHistory.startShopping' | cxTranslate }}</a\n            >\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    OrderHistoryComponent.ctorParameters = function () { return [
        { type: AuthService },
        { type: RoutingService },
        { type: UserService }
    ]; };
    return OrderHistoryComponent;
}());
export { OrderHistoryComponent };
if (false) {
    /** @type {?} */
    OrderHistoryComponent.prototype.orders$;
    /** @type {?} */
    OrderHistoryComponent.prototype.isLoaded$;
    /** @type {?} */
    OrderHistoryComponent.prototype.subscription;
    /**
     * @type {?}
     * @private
     */
    OrderHistoryComponent.prototype.user_id;
    /**
     * @type {?}
     * @private
     */
    OrderHistoryComponent.prototype.PAGE_SIZE;
    /** @type {?} */
    OrderHistoryComponent.prototype.sortType;
    /** @type {?} */
    OrderHistoryComponent.prototype.sortLabels;
    /**
     * @type {?}
     * @private
     */
    OrderHistoryComponent.prototype.auth;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItaGlzdG9yeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvbXktYWNjb3VudC9vcmRlci9vcmRlci1oaXN0b3J5L29yZGVyLWhpc3RvcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsV0FBVyxFQUdYLGNBQWMsRUFDZCxXQUFXLEdBQ1osTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckM7SUFLRSwrQkFDVSxJQUFpQixFQUNqQixPQUF1QixFQUN2QixXQUF3QjtRQUZ4QixTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2pCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBUTFCLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFHdEIsZUFBVSxHQUFHO1lBQ1gsTUFBTSxFQUFFLE1BQU07WUFDZCxhQUFhLEVBQUUsY0FBYztTQUM5QixDQUFDO0lBYkMsQ0FBQzs7OztJQWVKLHdDQUFROzs7SUFBUjtRQUFBLGlCQWtCQztRQWpCQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUM3RCxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFO2dCQUMvQixLQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7YUFDaEM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVc7YUFDNUIsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ2pELElBQUksQ0FDSCxHQUFHLENBQUMsVUFBQyxNQUF3QjtZQUMzQixJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUU7Z0JBQ3JCLEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7YUFDeEM7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO1FBRUosSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLHlCQUF5QixFQUFFLENBQUM7SUFDaEUsQ0FBQzs7OztJQUVELDJDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELDhDQUFjOzs7O0lBQWQsVUFBZSxRQUFnQjs7WUFDdkIsS0FBSyxHQUE4QztZQUN2RCxRQUFRLFVBQUE7WUFDUixXQUFXLEVBQUUsQ0FBQztTQUNmO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELDBDQUFVOzs7O0lBQVYsVUFBVyxJQUFZOztZQUNmLEtBQUssR0FBOEM7WUFDdkQsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELCtDQUFlOzs7O0lBQWYsVUFBZ0IsS0FBWTtRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNkLEtBQUssRUFBRSxjQUFjO1lBQ3JCLE1BQU0sRUFBRSxLQUFLO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sMkNBQVc7Ozs7O0lBQW5CLFVBQW9CLEtBQWdEO1FBQ2xFLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUM1QixJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxTQUFTLEVBQ2QsS0FBSyxDQUFDLFdBQVcsRUFDakIsS0FBSyxDQUFDLFFBQVEsQ0FDZixDQUFDO0lBQ0osQ0FBQzs7Z0JBbEZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixncUxBQTZDO2lCQUM5Qzs7OztnQkFaQyxXQUFXO2dCQUdYLGNBQWM7Z0JBQ2QsV0FBVzs7SUF3RmIsNEJBQUM7Q0FBQSxBQW5GRCxJQW1GQztTQS9FWSxxQkFBcUI7OztJQU9oQyx3Q0FBc0M7O0lBQ3RDLDBDQUErQjs7SUFDL0IsNkNBQTJCOzs7OztJQUUzQix3Q0FBd0I7Ozs7O0lBQ3hCLDBDQUFzQjs7SUFFdEIseUNBQWlCOztJQUNqQiwyQ0FHRTs7Ozs7SUFoQkEscUNBQXlCOzs7OztJQUN6Qix3Q0FBK0I7Ozs7O0lBQy9CLDRDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEF1dGhTZXJ2aWNlLFxuICBPcmRlcixcbiAgT3JkZXJIaXN0b3J5TGlzdCxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFVzZXJTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW9yZGVyLWhpc3RvcnknLFxuICB0ZW1wbGF0ZVVybDogJy4vb3JkZXItaGlzdG9yeS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVySGlzdG9yeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhdXRoOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmc6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlXG4gICkge31cblxuICBvcmRlcnMkOiBPYnNlcnZhYmxlPE9yZGVySGlzdG9yeUxpc3Q+O1xuICBpc0xvYWRlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgdXNlcl9pZDogc3RyaW5nO1xuICBwcml2YXRlIFBBR0VfU0laRSA9IDU7XG5cbiAgc29ydFR5cGU6IHN0cmluZztcbiAgc29ydExhYmVscyA9IHtcbiAgICBieURhdGU6ICdEYXRlJyxcbiAgICBieU9yZGVyTnVtYmVyOiAnT3JkZXIgTnVtYmVyJyxcbiAgfTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuYXV0aC5nZXRVc2VyVG9rZW4oKS5zdWJzY3JpYmUodXNlckRhdGEgPT4ge1xuICAgICAgaWYgKHVzZXJEYXRhICYmIHVzZXJEYXRhLnVzZXJJZCkge1xuICAgICAgICB0aGlzLnVzZXJfaWQgPSB1c2VyRGF0YS51c2VySWQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm9yZGVycyQgPSB0aGlzLnVzZXJTZXJ2aWNlXG4gICAgICAuZ2V0T3JkZXJIaXN0b3J5TGlzdCh0aGlzLnVzZXJfaWQsIHRoaXMuUEFHRV9TSVpFKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcCgob3JkZXJzOiBPcmRlckhpc3RvcnlMaXN0KSA9PiB7XG4gICAgICAgICAgaWYgKG9yZGVycy5wYWdpbmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnNvcnRUeXBlID0gb3JkZXJzLnBhZ2luYXRpb24uc29ydDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgdGhpcy5pc0xvYWRlZCQgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldE9yZGVySGlzdG9yeUxpc3RMb2FkZWQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgdGhpcy51c2VyU2VydmljZS5jbGVhck9yZGVyTGlzdCgpO1xuICB9XG5cbiAgY2hhbmdlU29ydENvZGUoc29ydENvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGV2ZW50OiB7IHNvcnRDb2RlOiBzdHJpbmc7IGN1cnJlbnRQYWdlOiBudW1iZXIgfSA9IHtcbiAgICAgIHNvcnRDb2RlLFxuICAgICAgY3VycmVudFBhZ2U6IDAsXG4gICAgfTtcbiAgICB0aGlzLnNvcnRUeXBlID0gc29ydENvZGU7XG4gICAgdGhpcy5mZXRjaE9yZGVycyhldmVudCk7XG4gIH1cblxuICBwYWdlQ2hhbmdlKHBhZ2U6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGV2ZW50OiB7IHNvcnRDb2RlOiBzdHJpbmc7IGN1cnJlbnRQYWdlOiBudW1iZXIgfSA9IHtcbiAgICAgIHNvcnRDb2RlOiB0aGlzLnNvcnRUeXBlLFxuICAgICAgY3VycmVudFBhZ2U6IHBhZ2UsXG4gICAgfTtcbiAgICB0aGlzLmZldGNoT3JkZXJzKGV2ZW50KTtcbiAgfVxuXG4gIGdvVG9PcmRlckRldGFpbChvcmRlcjogT3JkZXIpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmcuZ28oe1xuICAgICAgcm91dGU6ICdvcmRlckRldGFpbHMnLFxuICAgICAgcGFyYW1zOiBvcmRlcixcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZmV0Y2hPcmRlcnMoZXZlbnQ6IHsgc29ydENvZGU6IHN0cmluZzsgY3VycmVudFBhZ2U6IG51bWJlciB9KTogdm9pZCB7XG4gICAgdGhpcy51c2VyU2VydmljZS5sb2FkT3JkZXJMaXN0KFxuICAgICAgdGhpcy51c2VyX2lkLFxuICAgICAgdGhpcy5QQUdFX1NJWkUsXG4gICAgICBldmVudC5jdXJyZW50UGFnZSxcbiAgICAgIGV2ZW50LnNvcnRDb2RlXG4gICAgKTtcbiAgfVxufVxuIl19