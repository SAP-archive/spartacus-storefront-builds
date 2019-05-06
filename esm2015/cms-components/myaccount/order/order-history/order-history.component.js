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
            route: 'orderDetails',
            params: order,
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
                template: "<ng-container *ngIf=\"(orders$ | async) as orders\">\n  <div class=\"container\">\n    <!-- HEADER -->\n    <div class=\"cx-order-history-header\">\n      <h3>{{ 'orderHistory.orderHistory' | cxTranslate }}</h3>\n    </div>\n\n    <!-- BODY -->\n    <div class=\"cx-order-history-body\">\n      <ng-container *ngIf=\"orders.pagination.totalResults > 0; else noOrder\">\n        <!-- Select Form and Pagination Top -->\n        <div class=\"cx-order-history-sort top row\">\n          <div\n            class=\"cx-order-history-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"orders.sorts\"\n              [sortLabels]=\"sortLabels\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"orders.pagination.sort\"\n              placeholder=\"{{ 'orderHistory.sortByMostRecent' | cxTranslate }}\"\n            ></cx-sorting>\n          </div>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"orders.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n        <!-- TABLE -->\n        <table class=\"table cx-order-history-table\">\n          <thead class=\"cx-order-history-thead-mobile\">\n            <th scope=\"col\">\n              {{ 'orderHistory.orderId' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'orderHistory.date' | cxTranslate }}</th>\n            <th scope=\"col\">\n              {{ 'orderHistory.status' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'orderHistory.total' | cxTranslate }}</th>\n          </thead>\n          <tbody>\n            <tr\n              *ngFor=\"let order of orders.orders\"\n              (click)=\"goToOrderDetail(order)\"\n            >\n              <td class=\"cx-order-history-code\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.orderId' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      route: 'orderDetails',\n                      params: order\n                    } | cxTranslateUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ order?.code }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-placed\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.date' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      route: 'orderDetails',\n                      params: order\n                    } | cxTranslateUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                  >{{ order?.placed | cxDate: 'longDate' }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-status\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.status' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      route: 'orderDetails',\n                      params: order\n                    } | cxTranslateUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{\n                    'orderDetails.statusDisplay'\n                      | cxTranslate: { context: order?.statusDisplay }\n                  }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-total\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.total' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      route: 'orderDetails',\n                      params: order\n                    } | cxTranslateUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ order?.total.formattedValue }}</a\n                >\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <!-- Select Form and Pagination Bottom -->\n        <div class=\"cx-order-history-sort bottom row\">\n          <div\n            class=\"cx-order-history-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"orders.sorts\"\n              [sortLabels]=\"sortLabels\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"orders.pagination.sort\"\n              placeholder=\"{{ 'orderHistory.sortByMostRecent' | cxTranslate }}\"\n            ></cx-sorting>\n          </div>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"orders.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n      </ng-container>\n\n      <!-- NO ORDER CONTAINER -->\n      <ng-template #noOrder>\n        <div class=\"cx-order-history-no-order row\" *ngIf=\"(isLoaded$ | async)\">\n          <div class=\"col-sm-12 col-md-6 col-lg-4\">\n            <div>{{ 'orderHistory.noOrders' | cxTranslate }}</div>\n            <a\n              [routerLink]=\"{ route: 'home' } | cxTranslateUrl\"\n              routerLinkActive=\"active\"\n              class=\"btn btn-primary btn-block\"\n              >{{ 'orderHistory.startShopping' | cxTranslate }}</a\n            >\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</ng-container>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItaGlzdG9yeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvb3JkZXItaGlzdG9yeS9vcmRlci1oaXN0b3J5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUNMLFdBQVcsRUFHWCxjQUFjLEVBQ2QsV0FBVyxHQUNaLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTXJDLE1BQU0sT0FBTyxxQkFBcUI7Ozs7OztJQUNoQyxZQUNVLElBQWlCLEVBQ2pCLE9BQXVCLEVBQ3ZCLFdBQXdCO1FBRnhCLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFRMUIsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUd0QixlQUFVLEdBQUc7WUFDWCxNQUFNLEVBQUUsTUFBTTtZQUNkLGFBQWEsRUFBRSxjQUFjO1NBQzlCLENBQUM7SUFiQyxDQUFDOzs7O0lBZUosUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDaEUsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLE1BQU0sRUFBRTtnQkFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO2FBQ2hDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXO2FBQzVCLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUNqRCxJQUFJLENBQ0gsR0FBRyxDQUFDLENBQUMsTUFBd0IsRUFBRSxFQUFFO1lBQy9CLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTtnQkFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQzthQUN4QztRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7UUFFSixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMseUJBQXlCLEVBQUUsQ0FBQztJQUNoRSxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxRQUFnQjs7Y0FDdkIsS0FBSyxHQUE4QztZQUN2RCxRQUFRO1lBQ1IsV0FBVyxFQUFFLENBQUM7U0FDZjtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsSUFBWTs7Y0FDZixLQUFLLEdBQThDO1lBQ3ZELFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixXQUFXLEVBQUUsSUFBSTtTQUNsQjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsS0FBWTtRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNkLEtBQUssRUFBRSxjQUFjO1lBQ3JCLE1BQU0sRUFBRSxLQUFLO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sV0FBVyxDQUFDLEtBQWdEO1FBQ2xFLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUM1QixJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxTQUFTLEVBQ2QsS0FBSyxDQUFDLFdBQVcsRUFDakIsS0FBSyxDQUFDLFFBQVEsQ0FDZixDQUFDO0lBQ0osQ0FBQzs7O1lBbEZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1Qix3eExBQTZDO2FBQzlDOzs7O1lBWkMsV0FBVztZQUdYLGNBQWM7WUFDZCxXQUFXOzs7O0lBZ0JYLHdDQUFzQzs7SUFDdEMsMENBQStCOztJQUMvQiw2Q0FBMkI7Ozs7O0lBRTNCLHdDQUF3Qjs7Ozs7SUFDeEIsMENBQXNCOztJQUV0Qix5Q0FBaUI7O0lBQ2pCLDJDQUdFOzs7OztJQWhCQSxxQ0FBeUI7Ozs7O0lBQ3pCLHdDQUErQjs7Ozs7SUFDL0IsNENBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQXV0aFNlcnZpY2UsXG4gIE9yZGVyLFxuICBPcmRlckhpc3RvcnlMaXN0LFxuICBSb3V0aW5nU2VydmljZSxcbiAgVXNlclNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtb3JkZXItaGlzdG9yeScsXG4gIHRlbXBsYXRlVXJsOiAnLi9vcmRlci1oaXN0b3J5LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJIaXN0b3J5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGF1dGg6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGluZzogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2VcbiAgKSB7fVxuXG4gIG9yZGVycyQ6IE9ic2VydmFibGU8T3JkZXJIaXN0b3J5TGlzdD47XG4gIGlzTG9hZGVkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgcHJpdmF0ZSB1c2VyX2lkOiBzdHJpbmc7XG4gIHByaXZhdGUgUEFHRV9TSVpFID0gNTtcblxuICBzb3J0VHlwZTogc3RyaW5nO1xuICBzb3J0TGFiZWxzID0ge1xuICAgIGJ5RGF0ZTogJ0RhdGUnLFxuICAgIGJ5T3JkZXJOdW1iZXI6ICdPcmRlciBOdW1iZXInLFxuICB9O1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5hdXRoLmdldFVzZXJUb2tlbigpLnN1YnNjcmliZSh1c2VyRGF0YSA9PiB7XG4gICAgICBpZiAodXNlckRhdGEgJiYgdXNlckRhdGEudXNlcklkKSB7XG4gICAgICAgIHRoaXMudXNlcl9pZCA9IHVzZXJEYXRhLnVzZXJJZDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3JkZXJzJCA9IHRoaXMudXNlclNlcnZpY2VcbiAgICAgIC5nZXRPcmRlckhpc3RvcnlMaXN0KHRoaXMudXNlcl9pZCwgdGhpcy5QQUdFX1NJWkUpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKChvcmRlcnM6IE9yZGVySGlzdG9yeUxpc3QpID0+IHtcbiAgICAgICAgICBpZiAob3JkZXJzLnBhZ2luYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc29ydFR5cGUgPSBvcmRlcnMucGFnaW5hdGlvbi5zb3J0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICB0aGlzLmlzTG9hZGVkJCA9IHRoaXMudXNlclNlcnZpY2UuZ2V0T3JkZXJIaXN0b3J5TGlzdExvYWRlZCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmNsZWFyT3JkZXJMaXN0KCk7XG4gIH1cblxuICBjaGFuZ2VTb3J0Q29kZShzb3J0Q29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgZXZlbnQ6IHsgc29ydENvZGU6IHN0cmluZzsgY3VycmVudFBhZ2U6IG51bWJlciB9ID0ge1xuICAgICAgc29ydENvZGUsXG4gICAgICBjdXJyZW50UGFnZTogMCxcbiAgICB9O1xuICAgIHRoaXMuc29ydFR5cGUgPSBzb3J0Q29kZTtcbiAgICB0aGlzLmZldGNoT3JkZXJzKGV2ZW50KTtcbiAgfVxuXG4gIHBhZ2VDaGFuZ2UocGFnZTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgZXZlbnQ6IHsgc29ydENvZGU6IHN0cmluZzsgY3VycmVudFBhZ2U6IG51bWJlciB9ID0ge1xuICAgICAgc29ydENvZGU6IHRoaXMuc29ydFR5cGUsXG4gICAgICBjdXJyZW50UGFnZTogcGFnZSxcbiAgICB9O1xuICAgIHRoaXMuZmV0Y2hPcmRlcnMoZXZlbnQpO1xuICB9XG5cbiAgZ29Ub09yZGVyRGV0YWlsKG9yZGVyOiBPcmRlcik6IHZvaWQge1xuICAgIHRoaXMucm91dGluZy5nbyh7XG4gICAgICByb3V0ZTogJ29yZGVyRGV0YWlscycsXG4gICAgICBwYXJhbXM6IG9yZGVyLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBmZXRjaE9yZGVycyhldmVudDogeyBzb3J0Q29kZTogc3RyaW5nOyBjdXJyZW50UGFnZTogbnVtYmVyIH0pOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvYWRPcmRlckxpc3QoXG4gICAgICB0aGlzLnVzZXJfaWQsXG4gICAgICB0aGlzLlBBR0VfU0laRSxcbiAgICAgIGV2ZW50LmN1cnJlbnRQYWdlLFxuICAgICAgZXZlbnQuc29ydENvZGVcbiAgICApO1xuICB9XG59XG4iXX0=