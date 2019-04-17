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
            route: [{ name: 'orderDetails', params: order }],
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
                    template: "<ng-container *ngIf=\"(orders$ | async) as orders\">\n  <div class=\"container\">\n    <!-- HEADER -->\n    <div class=\"cx-order-history-header\">\n      <h3>{{ 'orderHistory.label.orderHistory' | cxTranslate }}</h3>\n    </div>\n\n    <!-- BODY -->\n    <div class=\"cx-order-history-body\">\n      <ng-container *ngIf=\"orders.pagination.totalResults > 0; else noOrder\">\n        <!-- Select Form and Pagination Top -->\n        <div class=\"cx-order-history-sort top row\">\n          <div\n            class=\"cx-order-history-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"orders.sorts\"\n              [sortLabels]=\"sortLabels\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"orders.pagination.sort\"\n              placeholder=\"{{\n                'orderHistory.placeholder.sortByMostRecent' | cxTranslate\n              }}\"\n            ></cx-sorting>\n          </div>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"orders.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n        <!-- TABLE -->\n        <table class=\"table cx-order-history-table\">\n          <thead class=\"cx-order-history-thead-mobile\">\n            <th scope=\"col\">\n              {{ 'orderHistory.label.orderId' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'orderHistory.label.date' | cxTranslate }}</th>\n            <th scope=\"col\">\n              {{ 'orderHistory.label.status' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'orderHistory.label.total' | cxTranslate }}</th>\n          </thead>\n          <tbody>\n            <tr\n              *ngFor=\"let order of orders.orders\"\n              (click)=\"goToOrderDetail(order)\"\n            >\n              <td class=\"cx-order-history-code\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.label.orderId' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      route: [{ name: 'orderDetails', params: order }]\n                    } | cxTranslateUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ order?.code }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-placed\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.label.date' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      route: [{ name: 'orderDetails', params: order }]\n                    } | cxTranslateUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                  >{{ order?.placed | cxDate: 'longDate' }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-status\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.label.status' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      route: [{ name: 'orderDetails', params: order }]\n                    } | cxTranslateUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ order?.statusDisplay }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-total\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.label.total' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      route: [{ name: 'orderDetails', params: order }]\n                    } | cxTranslateUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ order?.total.formattedValue }}</a\n                >\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <!-- Select Form and Pagination Bottom -->\n        <div class=\"cx-order-history-sort bottom row\">\n          <div\n            class=\"cx-order-history-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"orders.sorts\"\n              [sortLabels]=\"sortLabels\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"orders.pagination.sort\"\n              placeholder=\"{{\n                'orderHistory.placeholder.sortByMostRecent' | cxTranslate\n              }}\"\n            ></cx-sorting>\n          </div>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"orders.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n      </ng-container>\n\n      <!-- NO ORDER CONTAINER -->\n      <ng-template #noOrder>\n        <div class=\"cx-order-history-no-order row\" *ngIf=\"(isLoaded$ | async)\">\n          <div class=\"col-sm-12 col-md-6 col-lg-4\">\n            <div>{{ 'orderHistory.label.noOrders' | cxTranslate }}</div>\n            <a\n              [routerLink]=\"{ route: ['home'] } | cxTranslateUrl\"\n              routerLinkActive=\"active\"\n              class=\"btn btn-primary btn-block\"\n              >{{ 'orderHistory.action.startShopping' | cxTranslate }}</a\n            >\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</ng-container>\n",
                    styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/@media (max-width:767.98px){.cx-order-history{max-width:var(--cx-max-width,100%);padding:var(--cx-padding,0)}.cx-order-history-table tr{border-width:var(--cx-border-width,1px 0 0 0);border-color:var(--cx-border-color,var(--cx-g-color-light));border-style:var(--cx-border-style,solid)}.cx-order-history-table tr:first-child{border-width:var(--cx-border-width,0);padding:var(--cx-padding,1.25rem 0 0 0)}}.cx-order-history-table{padding:var(--cx-paddding,1.5rem 0 1.125rem 0);margin-bottom:var(--cx-margin,0);border-width:var(--cx-border-width,1px 0 1px 0);border-color:var(--cx-border-color,var(--cx-g-color-light));border-style:var(--cx-border-style,solid)}.cx-order-history-table tr{width:var(--cx-width,100%)}.cx-order-history-table th{padding:var(--cx-padding,1.5rem 0 1.125rem 0);text-align:var(--cx-text-align,left)}.cx-order-history-table th:last-child{text-align:var(--cx-text-align,right)}.cx-order-history-table td{width:var(--cx-width,25%);padding:var(--cx-padding,1.625rem 0)}@media (min-width:768px){.cx-order-history-table td{text-align:var(--cx-text-align,left)}.cx-order-history-table td:last-child{text-align:var(--cx-text-align,right)}}.cx-order-history-header{padding:var(--cx-padding,40px 0 0 0);color:var(--cx-color,var(--cx-g-color-text))}.cx-order-history-code{-webkit-text-decoration:var(--cx-text-decoration,underline);text-decoration:var(--cx-text-decoration,underline)}.cx-order-history-placed{text-align:var(--cx-text-align,center)}@media (max-width:767.98px){.cx-order-history-table td{width:var(--cx-width,100%);display:var(--cx-display,flex);border-width:var(--cx-border-width,0);padding:var(--cx-padding,0 1.25rem)}.cx-order-history-table td:first-child{padding-top:var(--cx-padding,1.25rem)}.cx-order-history-table td:last-child{padding-bottom:var(--cx-padding,1.25rem)}.cx-order-history-header{padding:var(cx-padding,40px 20px 0 20px)}.cx-order-history-thead-mobile{display:var(--cx-display,none)}.cx-order-history-placed{text-align:var(--cx-text-align,left)}}.cx-order-history-status{text-align:var(--cx-text-align,center)}@media (max-width:767.98px){.cx-order-history-status{text-align:var(--cx-text-align,left)}}.cx-order-history-total{text-align:var(--cx-text-align,right)}.cx-order-history-label{text-transform:var(--cx-text-transform,uppercase);color:var(--cx-color,var(--cx-g-color-secondary))}.cx-order-history-value{color:var(--cx-color,var(--cx-g-color-text))}.cx-order-history-form-group{padding:var(--cx-padding,0);margin-bottom:var(--cx-margin,0)}.cx-order-history-sort.top{display:var(--cx-display,flex);justify-content:var(--cx-justify-content,space-between);padding:var(--cx-padding,1rem 0);margin:var(--cx-margin,0)}@media (max-width:767.98px){.cx-order-history-total{text-align:var(--cx-text-align,left)}.cx-order-history-label{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);min-width:var(--cx-min-width,110px)}.cx-order-history-value{font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);font-weight:400}.cx-order-history-form-group{padding:var(--cx-padding,1.25rem)}.cx-order-history-sort.top{flex-direction:var(--cx-flex-direction,column);padding-top:var(--cx-padding,0)}}.cx-order-history-sort.bottom{display:var(--cx-display,flex);justify-content:var(--cx-justify-content,space-between);padding:var(--cx-padding,2rem 0 1rem 0);margin:var(--cx-margin,0)}.cx-order-history-no-order{font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);font-weight:400;min-height:var(--cx-min-height,415px)}@media (max-width:767.98px){.cx-order-history-sort.bottom{flex-direction:var(--cx-flex-direction,column);padding-top:var(--cx-padding,0)}.cx-order-history-pagination{margin:var(--cx-margin,0 auto)}.cx-order-history-no-order{min-height:var(--cx-min-height,474px);padding-left:var(--cx-padding,1.25rem);padding-right:var(--cx-padding,1.25rem)}}.cx-order-history-no-order .btn{margin:var(--cx-margin,1.25rem 0)}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItaGlzdG9yeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvbXktYWNjb3VudC9vcmRlci9vcmRlci1oaXN0b3J5L29yZGVyLWhpc3RvcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQ0wsV0FBVyxFQUNYLGNBQWMsRUFDZCxXQUFXLEdBR1osTUFBTSxpQkFBaUIsQ0FBQztBQUd6QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckM7SUFNRSwrQkFDVSxJQUFpQixFQUNqQixPQUF1QixFQUN2QixXQUF3QjtRQUZ4QixTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2pCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBUTFCLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFHdEIsZUFBVSxHQUFHO1lBQ1gsTUFBTSxFQUFFLE1BQU07WUFDZCxhQUFhLEVBQUUsY0FBYztTQUM5QixDQUFDO0lBYkMsQ0FBQzs7OztJQWVKLHdDQUFROzs7SUFBUjtRQUFBLGlCQWtCQztRQWpCQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUM3RCxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFO2dCQUMvQixLQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7YUFDaEM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVc7YUFDNUIsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ2pELElBQUksQ0FDSCxHQUFHLENBQUMsVUFBQyxNQUF3QjtZQUMzQixJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUU7Z0JBQ3JCLEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7YUFDeEM7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO1FBRUosSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLHlCQUF5QixFQUFFLENBQUM7SUFDaEUsQ0FBQzs7OztJQUVELDJDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELDhDQUFjOzs7O0lBQWQsVUFBZSxRQUFnQjs7WUFDdkIsS0FBSyxHQUE4QztZQUN2RCxRQUFRLFVBQUE7WUFDUixXQUFXLEVBQUUsQ0FBQztTQUNmO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELDBDQUFVOzs7O0lBQVYsVUFBVyxJQUFZOztZQUNmLEtBQUssR0FBOEM7WUFDdkQsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELCtDQUFlOzs7O0lBQWYsVUFBZ0IsS0FBWTtRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNkLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7U0FDakQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sMkNBQVc7Ozs7O0lBQW5CLFVBQW9CLEtBQWdEO1FBQ2xFLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUM1QixJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxTQUFTLEVBQ2QsS0FBSyxDQUFDLFdBQVcsRUFDakIsS0FBSyxDQUFDLFFBQVEsQ0FDZixDQUFDO0lBQ0osQ0FBQzs7Z0JBbEZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixpeExBQTZDOztpQkFFOUM7Ozs7Z0JBZEMsV0FBVztnQkFDWCxjQUFjO2dCQUNkLFdBQVc7O0lBMkZiLDRCQUFDO0NBQUEsQUFuRkQsSUFtRkM7U0E5RVkscUJBQXFCOzs7SUFPaEMsd0NBQXNDOztJQUN0QywwQ0FBK0I7O0lBQy9CLDZDQUEyQjs7Ozs7SUFFM0Isd0NBQXdCOzs7OztJQUN4QiwwQ0FBc0I7O0lBRXRCLHlDQUFpQjs7SUFDakIsMkNBR0U7Ozs7O0lBaEJBLHFDQUF5Qjs7Ozs7SUFDekIsd0NBQStCOzs7OztJQUMvQiw0Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIEF1dGhTZXJ2aWNlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgVXNlclNlcnZpY2UsXG4gIE9yZGVySGlzdG9yeUxpc3QsXG4gIE9yZGVyLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtb3JkZXItaGlzdG9yeScsXG4gIHRlbXBsYXRlVXJsOiAnLi9vcmRlci1oaXN0b3J5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vb3JkZXItaGlzdG9yeS5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckhpc3RvcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZVxuICApIHt9XG5cbiAgb3JkZXJzJDogT2JzZXJ2YWJsZTxPcmRlckhpc3RvcnlMaXN0PjtcbiAgaXNMb2FkZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIHVzZXJfaWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBQQUdFX1NJWkUgPSA1O1xuXG4gIHNvcnRUeXBlOiBzdHJpbmc7XG4gIHNvcnRMYWJlbHMgPSB7XG4gICAgYnlEYXRlOiAnRGF0ZScsXG4gICAgYnlPcmRlck51bWJlcjogJ09yZGVyIE51bWJlcicsXG4gIH07XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmF1dGguZ2V0VXNlclRva2VuKCkuc3Vic2NyaWJlKHVzZXJEYXRhID0+IHtcbiAgICAgIGlmICh1c2VyRGF0YSAmJiB1c2VyRGF0YS51c2VySWQpIHtcbiAgICAgICAgdGhpcy51c2VyX2lkID0gdXNlckRhdGEudXNlcklkO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vcmRlcnMkID0gdGhpcy51c2VyU2VydmljZVxuICAgICAgLmdldE9yZGVySGlzdG9yeUxpc3QodGhpcy51c2VyX2lkLCB0aGlzLlBBR0VfU0laRSlcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoKG9yZGVyczogT3JkZXJIaXN0b3J5TGlzdCkgPT4ge1xuICAgICAgICAgIGlmIChvcmRlcnMucGFnaW5hdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zb3J0VHlwZSA9IG9yZGVycy5wYWdpbmF0aW9uLnNvcnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIHRoaXMuaXNMb2FkZWQkID0gdGhpcy51c2VyU2VydmljZS5nZXRPcmRlckhpc3RvcnlMaXN0TG9hZGVkKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHRoaXMudXNlclNlcnZpY2UuY2xlYXJPcmRlckxpc3QoKTtcbiAgfVxuXG4gIGNoYW5nZVNvcnRDb2RlKHNvcnRDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBldmVudDogeyBzb3J0Q29kZTogc3RyaW5nOyBjdXJyZW50UGFnZTogbnVtYmVyIH0gPSB7XG4gICAgICBzb3J0Q29kZSxcbiAgICAgIGN1cnJlbnRQYWdlOiAwLFxuICAgIH07XG4gICAgdGhpcy5zb3J0VHlwZSA9IHNvcnRDb2RlO1xuICAgIHRoaXMuZmV0Y2hPcmRlcnMoZXZlbnQpO1xuICB9XG5cbiAgcGFnZUNoYW5nZShwYWdlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBldmVudDogeyBzb3J0Q29kZTogc3RyaW5nOyBjdXJyZW50UGFnZTogbnVtYmVyIH0gPSB7XG4gICAgICBzb3J0Q29kZTogdGhpcy5zb3J0VHlwZSxcbiAgICAgIGN1cnJlbnRQYWdlOiBwYWdlLFxuICAgIH07XG4gICAgdGhpcy5mZXRjaE9yZGVycyhldmVudCk7XG4gIH1cblxuICBnb1RvT3JkZXJEZXRhaWwob3JkZXI6IE9yZGVyKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nLmdvKHtcbiAgICAgIHJvdXRlOiBbeyBuYW1lOiAnb3JkZXJEZXRhaWxzJywgcGFyYW1zOiBvcmRlciB9XSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZmV0Y2hPcmRlcnMoZXZlbnQ6IHsgc29ydENvZGU6IHN0cmluZzsgY3VycmVudFBhZ2U6IG51bWJlciB9KTogdm9pZCB7XG4gICAgdGhpcy51c2VyU2VydmljZS5sb2FkT3JkZXJMaXN0KFxuICAgICAgdGhpcy51c2VyX2lkLFxuICAgICAgdGhpcy5QQUdFX1NJWkUsXG4gICAgICBldmVudC5jdXJyZW50UGFnZSxcbiAgICAgIGV2ZW50LnNvcnRDb2RlXG4gICAgKTtcbiAgfVxufVxuIl19