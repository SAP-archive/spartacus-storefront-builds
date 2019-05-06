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
                    template: "<ng-container *ngIf=\"(orders$ | async) as orders\">\n  <div class=\"container\">\n    <!-- HEADER -->\n    <div class=\"cx-order-history-header\">\n      <h3>{{ 'orderHistory.orderHistory' | cxTranslate }}</h3>\n    </div>\n\n    <!-- BODY -->\n    <div class=\"cx-order-history-body\">\n      <ng-container *ngIf=\"orders.pagination.totalResults > 0; else noOrder\">\n        <!-- Select Form and Pagination Top -->\n        <div class=\"cx-order-history-sort top row\">\n          <div\n            class=\"cx-order-history-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"orders.sorts\"\n              [sortLabels]=\"sortLabels\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"orders.pagination.sort\"\n              placeholder=\"{{ 'orderHistory.sortByMostRecent' | cxTranslate }}\"\n            ></cx-sorting>\n          </div>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"orders.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n        <!-- TABLE -->\n        <table class=\"table cx-order-history-table\">\n          <thead class=\"cx-order-history-thead-mobile\">\n            <th scope=\"col\">\n              {{ 'orderHistory.orderId' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'orderHistory.date' | cxTranslate }}</th>\n            <th scope=\"col\">\n              {{ 'orderHistory.status' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'orderHistory.total' | cxTranslate }}</th>\n          </thead>\n          <tbody>\n            <tr\n              *ngFor=\"let order of orders.orders\"\n              (click)=\"goToOrderDetail(order)\"\n            >\n              <td class=\"cx-order-history-code\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.orderId' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      route: 'orderDetails',\n                      params: order\n                    } | cxTranslateUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ order?.code }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-placed\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.date' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      route: 'orderDetails',\n                      params: order\n                    } | cxTranslateUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                  >{{ order?.placed | cxDate: 'longDate' }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-status\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.status' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      route: 'orderDetails',\n                      params: order\n                    } | cxTranslateUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{\n                    'orderDetails.statusDisplay'\n                      | cxTranslate: { context: order?.statusDisplay }\n                  }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-total\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.total' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      route: 'orderDetails',\n                      params: order\n                    } | cxTranslateUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ order?.total.formattedValue }}</a\n                >\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <!-- Select Form and Pagination Bottom -->\n        <div class=\"cx-order-history-sort bottom row\">\n          <div\n            class=\"cx-order-history-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"orders.sorts\"\n              [sortLabels]=\"sortLabels\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"orders.pagination.sort\"\n              placeholder=\"{{ 'orderHistory.sortByMostRecent' | cxTranslate }}\"\n            ></cx-sorting>\n          </div>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"orders.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n      </ng-container>\n\n      <!-- NO ORDER CONTAINER -->\n      <ng-template #noOrder>\n        <div class=\"cx-order-history-no-order row\" *ngIf=\"(isLoaded$ | async)\">\n          <div class=\"col-sm-12 col-md-6 col-lg-4\">\n            <div>{{ 'orderHistory.noOrders' | cxTranslate }}</div>\n            <a\n              [routerLink]=\"{ route: 'home' } | cxTranslateUrl\"\n              routerLinkActive=\"active\"\n              class=\"btn btn-primary btn-block\"\n              >{{ 'orderHistory.startShopping' | cxTranslate }}</a\n            >\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</ng-container>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItaGlzdG9yeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvb3JkZXItaGlzdG9yeS9vcmRlci1oaXN0b3J5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUNMLFdBQVcsRUFHWCxjQUFjLEVBQ2QsV0FBVyxHQUNaLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDO0lBS0UsK0JBQ1UsSUFBaUIsRUFDakIsT0FBdUIsRUFDdkIsV0FBd0I7UUFGeEIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNqQixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQVExQixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBR3RCLGVBQVUsR0FBRztZQUNYLE1BQU0sRUFBRSxNQUFNO1lBQ2QsYUFBYSxFQUFFLGNBQWM7U0FDOUIsQ0FBQztJQWJDLENBQUM7Ozs7SUFlSix3Q0FBUTs7O0lBQVI7UUFBQSxpQkFrQkM7UUFqQkMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLFFBQVE7WUFDN0QsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLE1BQU0sRUFBRTtnQkFDL0IsS0FBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO2FBQ2hDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXO2FBQzVCLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUNqRCxJQUFJLENBQ0gsR0FBRyxDQUFDLFVBQUMsTUFBd0I7WUFDM0IsSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFO2dCQUNyQixLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO2FBQ3hDO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUVKLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO0lBQ2hFLENBQUM7Ozs7SUFFRCwyQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCw4Q0FBYzs7OztJQUFkLFVBQWUsUUFBZ0I7O1lBQ3ZCLEtBQUssR0FBOEM7WUFDdkQsUUFBUSxVQUFBO1lBQ1IsV0FBVyxFQUFFLENBQUM7U0FDZjtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCwwQ0FBVTs7OztJQUFWLFVBQVcsSUFBWTs7WUFDZixLQUFLLEdBQThDO1lBQ3ZELFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixXQUFXLEVBQUUsSUFBSTtTQUNsQjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCwrQ0FBZTs7OztJQUFmLFVBQWdCLEtBQVk7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDZCxLQUFLLEVBQUUsY0FBYztZQUNyQixNQUFNLEVBQUUsS0FBSztTQUNkLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLDJDQUFXOzs7OztJQUFuQixVQUFvQixLQUFnRDtRQUNsRSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FDNUIsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsU0FBUyxFQUNkLEtBQUssQ0FBQyxXQUFXLEVBQ2pCLEtBQUssQ0FBQyxRQUFRLENBQ2YsQ0FBQztJQUNKLENBQUM7O2dCQWxGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsd3hMQUE2QztpQkFDOUM7Ozs7Z0JBWkMsV0FBVztnQkFHWCxjQUFjO2dCQUNkLFdBQVc7O0lBd0ZiLDRCQUFDO0NBQUEsQUFuRkQsSUFtRkM7U0EvRVkscUJBQXFCOzs7SUFPaEMsd0NBQXNDOztJQUN0QywwQ0FBK0I7O0lBQy9CLDZDQUEyQjs7Ozs7SUFFM0Isd0NBQXdCOzs7OztJQUN4QiwwQ0FBc0I7O0lBRXRCLHlDQUFpQjs7SUFDakIsMkNBR0U7Ozs7O0lBaEJBLHFDQUF5Qjs7Ozs7SUFDekIsd0NBQStCOzs7OztJQUMvQiw0Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBdXRoU2VydmljZSxcbiAgT3JkZXIsXG4gIE9yZGVySGlzdG9yeUxpc3QsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBVc2VyU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1vcmRlci1oaXN0b3J5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL29yZGVyLWhpc3RvcnkuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckhpc3RvcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZVxuICApIHt9XG5cbiAgb3JkZXJzJDogT2JzZXJ2YWJsZTxPcmRlckhpc3RvcnlMaXN0PjtcbiAgaXNMb2FkZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIHVzZXJfaWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBQQUdFX1NJWkUgPSA1O1xuXG4gIHNvcnRUeXBlOiBzdHJpbmc7XG4gIHNvcnRMYWJlbHMgPSB7XG4gICAgYnlEYXRlOiAnRGF0ZScsXG4gICAgYnlPcmRlck51bWJlcjogJ09yZGVyIE51bWJlcicsXG4gIH07XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmF1dGguZ2V0VXNlclRva2VuKCkuc3Vic2NyaWJlKHVzZXJEYXRhID0+IHtcbiAgICAgIGlmICh1c2VyRGF0YSAmJiB1c2VyRGF0YS51c2VySWQpIHtcbiAgICAgICAgdGhpcy51c2VyX2lkID0gdXNlckRhdGEudXNlcklkO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vcmRlcnMkID0gdGhpcy51c2VyU2VydmljZVxuICAgICAgLmdldE9yZGVySGlzdG9yeUxpc3QodGhpcy51c2VyX2lkLCB0aGlzLlBBR0VfU0laRSlcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoKG9yZGVyczogT3JkZXJIaXN0b3J5TGlzdCkgPT4ge1xuICAgICAgICAgIGlmIChvcmRlcnMucGFnaW5hdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zb3J0VHlwZSA9IG9yZGVycy5wYWdpbmF0aW9uLnNvcnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIHRoaXMuaXNMb2FkZWQkID0gdGhpcy51c2VyU2VydmljZS5nZXRPcmRlckhpc3RvcnlMaXN0TG9hZGVkKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHRoaXMudXNlclNlcnZpY2UuY2xlYXJPcmRlckxpc3QoKTtcbiAgfVxuXG4gIGNoYW5nZVNvcnRDb2RlKHNvcnRDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBldmVudDogeyBzb3J0Q29kZTogc3RyaW5nOyBjdXJyZW50UGFnZTogbnVtYmVyIH0gPSB7XG4gICAgICBzb3J0Q29kZSxcbiAgICAgIGN1cnJlbnRQYWdlOiAwLFxuICAgIH07XG4gICAgdGhpcy5zb3J0VHlwZSA9IHNvcnRDb2RlO1xuICAgIHRoaXMuZmV0Y2hPcmRlcnMoZXZlbnQpO1xuICB9XG5cbiAgcGFnZUNoYW5nZShwYWdlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBldmVudDogeyBzb3J0Q29kZTogc3RyaW5nOyBjdXJyZW50UGFnZTogbnVtYmVyIH0gPSB7XG4gICAgICBzb3J0Q29kZTogdGhpcy5zb3J0VHlwZSxcbiAgICAgIGN1cnJlbnRQYWdlOiBwYWdlLFxuICAgIH07XG4gICAgdGhpcy5mZXRjaE9yZGVycyhldmVudCk7XG4gIH1cblxuICBnb1RvT3JkZXJEZXRhaWwob3JkZXI6IE9yZGVyKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nLmdvKHtcbiAgICAgIHJvdXRlOiAnb3JkZXJEZXRhaWxzJyxcbiAgICAgIHBhcmFtczogb3JkZXIsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGZldGNoT3JkZXJzKGV2ZW50OiB7IHNvcnRDb2RlOiBzdHJpbmc7IGN1cnJlbnRQYWdlOiBudW1iZXIgfSk6IHZvaWQge1xuICAgIHRoaXMudXNlclNlcnZpY2UubG9hZE9yZGVyTGlzdChcbiAgICAgIHRoaXMudXNlcl9pZCxcbiAgICAgIHRoaXMuUEFHRV9TSVpFLFxuICAgICAgZXZlbnQuY3VycmVudFBhZ2UsXG4gICAgICBldmVudC5zb3J0Q29kZVxuICAgICk7XG4gIH1cbn1cbiJdfQ==