/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AuthService, RoutingService, UserService, } from '@spartacus/core';
import { tap } from 'rxjs/operators';
export class OrderHistoryComponent {
    /**
     * @param {?} auth
     * @param {?} routing
     * @param {?} userService
     */
    constructor(auth, routing, userService) {
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
    ngOnInit() {
        this.subscription = this.auth.getUserToken().subscribe(userData => {
            if (userData && userData.userId) {
                this.user_id = userData.userId;
            }
        });
        this.orders$ = this.userService
            .getOrderHistoryList(this.user_id, this.PAGE_SIZE)
            .pipe(tap((orders) => {
            if (orders.pagination) {
                this.sortType = orders.pagination.sort;
            }
        }));
        this.isLoaded$ = this.userService.getOrderHistoryListLoaded();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.userService.clearOrderList();
    }
    /**
     * @param {?} sortCode
     * @return {?}
     */
    changeSortCode(sortCode) {
        /** @type {?} */
        const event = {
            sortCode,
            currentPage: 0,
        };
        this.sortType = sortCode;
        this.fetchOrders(event);
    }
    /**
     * @param {?} page
     * @return {?}
     */
    pageChange(page) {
        /** @type {?} */
        const event = {
            sortCode: this.sortType,
            currentPage: page,
        };
        this.fetchOrders(event);
    }
    /**
     * @param {?} order
     * @return {?}
     */
    goToOrderDetail(order) {
        this.routing.go({
            route: [{ name: 'orderDetails', params: order }],
        });
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    fetchOrders(event) {
        this.userService.loadOrderList(this.user_id, this.PAGE_SIZE, event.currentPage, event.sortCode);
    }
}
OrderHistoryComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-order-history',
                template: "<ng-container *ngIf=\"(orders$ | async) as orders\">\n  <div class=\"container\">\n    <!-- HEADER -->\n    <div class=\"cx-order-history-header\">\n      <h3>{{ 'orderHistory.label.orderHistory' | cxTranslate }}</h3>\n    </div>\n\n    <!-- BODY -->\n    <div class=\"cx-order-history-body\">\n      <ng-container *ngIf=\"orders.pagination.totalResults > 0; else noOrder\">\n        <!-- Select Form and Pagination Top -->\n        <div class=\"cx-order-history-sort top row\">\n          <div\n            class=\"cx-order-history-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"orders.sorts\"\n              [sortLabels]=\"sortLabels\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"orders.pagination.sort\"\n              placeholder=\"{{\n                'orderHistory.placeholder.sortByMostRecent' | cxTranslate\n              }}\"\n            ></cx-sorting>\n          </div>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"orders.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n        <!-- TABLE -->\n        <table class=\"table cx-order-history-table\">\n          <thead class=\"cx-order-history-thead-mobile\">\n            <th scope=\"col\">\n              {{ 'orderHistory.label.orderId' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'orderHistory.label.date' | cxTranslate }}</th>\n            <th scope=\"col\">\n              {{ 'orderHistory.label.status' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'orderHistory.label.total' | cxTranslate }}</th>\n          </thead>\n          <tbody>\n            <tr\n              *ngFor=\"let order of orders.orders\"\n              (click)=\"goToOrderDetail(order)\"\n            >\n              <td class=\"cx-order-history-code\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.label.orderId' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      route: [{ name: 'orderDetails', params: order }]\n                    } | cxTranslateUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ order?.code }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-placed\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.label.date' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      route: [{ name: 'orderDetails', params: order }]\n                    } | cxTranslateUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                  >{{ order?.placed | cxDate: 'longDate' }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-status\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.label.status' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      route: [{ name: 'orderDetails', params: order }]\n                    } | cxTranslateUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ order?.statusDisplay }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-total\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.label.total' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      route: [{ name: 'orderDetails', params: order }]\n                    } | cxTranslateUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ order?.total.formattedValue }}</a\n                >\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <!-- Select Form and Pagination Bottom -->\n        <div class=\"cx-order-history-sort bottom row\">\n          <div\n            class=\"cx-order-history-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"orders.sorts\"\n              [sortLabels]=\"sortLabels\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"orders.pagination.sort\"\n              placeholder=\"{{\n                'orderHistory.placeholder.sortByMostRecent' | cxTranslate\n              }}\"\n            ></cx-sorting>\n          </div>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"orders.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n      </ng-container>\n\n      <!-- NO ORDER CONTAINER -->\n      <ng-template #noOrder>\n        <div class=\"cx-order-history-no-order row\" *ngIf=\"(isLoaded$ | async)\">\n          <div class=\"col-sm-12 col-md-6 col-lg-4\">\n            <div>{{ 'orderHistory.label.noOrders' | cxTranslate }}</div>\n            <a\n              [routerLink]=\"{ route: ['home'] } | cxTranslateUrl\"\n              routerLinkActive=\"active\"\n              class=\"btn btn-primary btn-block\"\n              >{{ 'orderHistory.action.startShopping' | cxTranslate }}</a\n            >\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</ng-container>\n",
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/@media (max-width:767.98px){.cx-order-history{max-width:var(--cx-max-width,100%);padding:var(--cx-padding,0)}.cx-order-history-table tr{border-width:var(--cx-border-width,1px 0 0 0);border-color:var(--cx-border-color,var(--cx-g-color-light));border-style:var(--cx-border-style,solid)}.cx-order-history-table tr:first-child{border-width:var(--cx-border-width,0);padding:var(--cx-padding,1.25rem 0 0 0)}}.cx-order-history-table{padding:var(--cx-paddding,1.5rem 0 1.125rem 0);margin-bottom:var(--cx-margin,0);border-width:var(--cx-border-width,1px 0 1px 0);border-color:var(--cx-border-color,var(--cx-g-color-light));border-style:var(--cx-border-style,solid)}.cx-order-history-table tr{width:var(--cx-width,100%)}.cx-order-history-table th{padding:var(--cx-padding,1.5rem 0 1.125rem 0);text-align:var(--cx-text-align,left)}.cx-order-history-table th:last-child{text-align:var(--cx-text-align,right)}.cx-order-history-table td{width:var(--cx-width,25%);padding:var(--cx-padding,1.625rem 0)}@media (min-width:768px){.cx-order-history-table td{text-align:var(--cx-text-align,left)}.cx-order-history-table td:last-child{text-align:var(--cx-text-align,right)}}.cx-order-history-header{padding:var(--cx-padding,40px 0 0 0);color:var(--cx-color,var(--cx-g-color-text))}.cx-order-history-code{-webkit-text-decoration:var(--cx-text-decoration,underline);text-decoration:var(--cx-text-decoration,underline)}.cx-order-history-placed{text-align:var(--cx-text-align,center)}@media (max-width:767.98px){.cx-order-history-table td{width:var(--cx-width,100%);display:var(--cx-display,flex);border-width:var(--cx-border-width,0);padding:var(--cx-padding,0 1.25rem)}.cx-order-history-table td:first-child{padding-top:var(--cx-padding,1.25rem)}.cx-order-history-table td:last-child{padding-bottom:var(--cx-padding,1.25rem)}.cx-order-history-header{padding:var(cx-padding,40px 20px 0 20px)}.cx-order-history-thead-mobile{display:var(--cx-display,none)}.cx-order-history-placed{text-align:var(--cx-text-align,left)}}.cx-order-history-status{text-align:var(--cx-text-align,center)}@media (max-width:767.98px){.cx-order-history-status{text-align:var(--cx-text-align,left)}}.cx-order-history-total{text-align:var(--cx-text-align,right)}.cx-order-history-label{text-transform:var(--cx-text-transform,uppercase);color:var(--cx-color,var(--cx-g-color-secondary))}.cx-order-history-value{color:var(--cx-color,var(--cx-g-color-text))}.cx-order-history-form-group{padding:var(--cx-padding,0);margin-bottom:var(--cx-margin,0)}.cx-order-history-sort.top{display:var(--cx-display,flex);justify-content:var(--cx-justify-content,space-between);padding:var(--cx-padding,1rem 0);margin:var(--cx-margin,0)}@media (max-width:767.98px){.cx-order-history-total{text-align:var(--cx-text-align,left)}.cx-order-history-label{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);min-width:var(--cx-min-width,110px)}.cx-order-history-value{font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);font-weight:400}.cx-order-history-form-group{padding:var(--cx-padding,1.25rem)}.cx-order-history-sort.top{flex-direction:var(--cx-flex-direction,column);padding-top:var(--cx-padding,0)}}.cx-order-history-sort.bottom{display:var(--cx-display,flex);justify-content:var(--cx-justify-content,space-between);padding:var(--cx-padding,2rem 0 1rem 0);margin:var(--cx-margin,0)}.cx-order-history-no-order{font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);font-weight:400;min-height:var(--cx-min-height,415px)}@media (max-width:767.98px){.cx-order-history-sort.bottom{flex-direction:var(--cx-flex-direction,column);padding-top:var(--cx-padding,0)}.cx-order-history-pagination{margin:var(--cx-margin,0 auto)}.cx-order-history-no-order{min-height:var(--cx-min-height,474px);padding-left:var(--cx-padding,1.25rem);padding-right:var(--cx-padding,1.25rem)}}.cx-order-history-no-order .btn{margin:var(--cx-margin,1.25rem 0)}"]
            }] }
];
/** @nocollapse */
OrderHistoryComponent.ctorParameters = () => [
    { type: AuthService },
    { type: RoutingService },
    { type: UserService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItaGlzdG9yeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvbXktYWNjb3VudC9vcmRlci9vcmRlci1oaXN0b3J5L29yZGVyLWhpc3RvcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQ0wsV0FBVyxFQUNYLGNBQWMsRUFDZCxXQUFXLEdBR1osTUFBTSxpQkFBaUIsQ0FBQztBQUd6QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPckMsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7O0lBQ2hDLFlBQ1UsSUFBaUIsRUFDakIsT0FBdUIsRUFDdkIsV0FBd0I7UUFGeEIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNqQixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQVExQixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBR3RCLGVBQVUsR0FBRztZQUNYLE1BQU0sRUFBRSxNQUFNO1lBQ2QsYUFBYSxFQUFFLGNBQWM7U0FDOUIsQ0FBQztJQWJDLENBQUM7Ozs7SUFlSixRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNoRSxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFO2dCQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7YUFDaEM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVc7YUFDNUIsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ2pELElBQUksQ0FDSCxHQUFHLENBQUMsQ0FBQyxNQUF3QixFQUFFLEVBQUU7WUFDL0IsSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFO2dCQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO2FBQ3hDO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUVKLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO0lBQ2hFLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLFFBQWdCOztjQUN2QixLQUFLLEdBQThDO1lBQ3ZELFFBQVE7WUFDUixXQUFXLEVBQUUsQ0FBQztTQUNmO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxJQUFZOztjQUNmLEtBQUssR0FBOEM7WUFDdkQsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxLQUFZO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ2QsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQztTQUNqRCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTyxXQUFXLENBQUMsS0FBZ0Q7UUFDbEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQzVCLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLFNBQVMsRUFDZCxLQUFLLENBQUMsV0FBVyxFQUNqQixLQUFLLENBQUMsUUFBUSxDQUNmLENBQUM7SUFDSixDQUFDOzs7WUFsRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLGl4TEFBNkM7O2FBRTlDOzs7O1lBZEMsV0FBVztZQUNYLGNBQWM7WUFDZCxXQUFXOzs7O0lBb0JYLHdDQUFzQzs7SUFDdEMsMENBQStCOztJQUMvQiw2Q0FBMkI7Ozs7O0lBRTNCLHdDQUF3Qjs7Ozs7SUFDeEIsMENBQXNCOztJQUV0Qix5Q0FBaUI7O0lBQ2pCLDJDQUdFOzs7OztJQWhCQSxxQ0FBeUI7Ozs7O0lBQ3pCLHdDQUErQjs7Ozs7SUFDL0IsNENBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBBdXRoU2VydmljZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFVzZXJTZXJ2aWNlLFxuICBPcmRlckhpc3RvcnlMaXN0LFxuICBPcmRlcixcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW9yZGVyLWhpc3RvcnknLFxuICB0ZW1wbGF0ZVVybDogJy4vb3JkZXItaGlzdG9yeS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL29yZGVyLWhpc3RvcnkuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJIaXN0b3J5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGF1dGg6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGluZzogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2VcbiAgKSB7fVxuXG4gIG9yZGVycyQ6IE9ic2VydmFibGU8T3JkZXJIaXN0b3J5TGlzdD47XG4gIGlzTG9hZGVkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgcHJpdmF0ZSB1c2VyX2lkOiBzdHJpbmc7XG4gIHByaXZhdGUgUEFHRV9TSVpFID0gNTtcblxuICBzb3J0VHlwZTogc3RyaW5nO1xuICBzb3J0TGFiZWxzID0ge1xuICAgIGJ5RGF0ZTogJ0RhdGUnLFxuICAgIGJ5T3JkZXJOdW1iZXI6ICdPcmRlciBOdW1iZXInLFxuICB9O1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5hdXRoLmdldFVzZXJUb2tlbigpLnN1YnNjcmliZSh1c2VyRGF0YSA9PiB7XG4gICAgICBpZiAodXNlckRhdGEgJiYgdXNlckRhdGEudXNlcklkKSB7XG4gICAgICAgIHRoaXMudXNlcl9pZCA9IHVzZXJEYXRhLnVzZXJJZDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3JkZXJzJCA9IHRoaXMudXNlclNlcnZpY2VcbiAgICAgIC5nZXRPcmRlckhpc3RvcnlMaXN0KHRoaXMudXNlcl9pZCwgdGhpcy5QQUdFX1NJWkUpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKChvcmRlcnM6IE9yZGVySGlzdG9yeUxpc3QpID0+IHtcbiAgICAgICAgICBpZiAob3JkZXJzLnBhZ2luYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc29ydFR5cGUgPSBvcmRlcnMucGFnaW5hdGlvbi5zb3J0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICB0aGlzLmlzTG9hZGVkJCA9IHRoaXMudXNlclNlcnZpY2UuZ2V0T3JkZXJIaXN0b3J5TGlzdExvYWRlZCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmNsZWFyT3JkZXJMaXN0KCk7XG4gIH1cblxuICBjaGFuZ2VTb3J0Q29kZShzb3J0Q29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgZXZlbnQ6IHsgc29ydENvZGU6IHN0cmluZzsgY3VycmVudFBhZ2U6IG51bWJlciB9ID0ge1xuICAgICAgc29ydENvZGUsXG4gICAgICBjdXJyZW50UGFnZTogMCxcbiAgICB9O1xuICAgIHRoaXMuc29ydFR5cGUgPSBzb3J0Q29kZTtcbiAgICB0aGlzLmZldGNoT3JkZXJzKGV2ZW50KTtcbiAgfVxuXG4gIHBhZ2VDaGFuZ2UocGFnZTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgZXZlbnQ6IHsgc29ydENvZGU6IHN0cmluZzsgY3VycmVudFBhZ2U6IG51bWJlciB9ID0ge1xuICAgICAgc29ydENvZGU6IHRoaXMuc29ydFR5cGUsXG4gICAgICBjdXJyZW50UGFnZTogcGFnZSxcbiAgICB9O1xuICAgIHRoaXMuZmV0Y2hPcmRlcnMoZXZlbnQpO1xuICB9XG5cbiAgZ29Ub09yZGVyRGV0YWlsKG9yZGVyOiBPcmRlcik6IHZvaWQge1xuICAgIHRoaXMucm91dGluZy5nbyh7XG4gICAgICByb3V0ZTogW3sgbmFtZTogJ29yZGVyRGV0YWlscycsIHBhcmFtczogb3JkZXIgfV0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGZldGNoT3JkZXJzKGV2ZW50OiB7IHNvcnRDb2RlOiBzdHJpbmc7IGN1cnJlbnRQYWdlOiBudW1iZXIgfSk6IHZvaWQge1xuICAgIHRoaXMudXNlclNlcnZpY2UubG9hZE9yZGVyTGlzdChcbiAgICAgIHRoaXMudXNlcl9pZCxcbiAgICAgIHRoaXMuUEFHRV9TSVpFLFxuICAgICAgZXZlbnQuY3VycmVudFBhZ2UsXG4gICAgICBldmVudC5zb3J0Q29kZVxuICAgICk7XG4gIH1cbn1cbiJdfQ==