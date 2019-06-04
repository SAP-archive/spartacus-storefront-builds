/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { RoutingService, TranslationService, UserService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';
export class OrderHistoryComponent {
    /**
     * @param {?} routing
     * @param {?} userService
     * @param {?} translation
     */
    constructor(routing, userService, translation) {
        this.routing = routing;
        this.userService = userService;
        this.translation = translation;
        this.PAGE_SIZE = 5;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.orders$ = this.userService.getOrderHistoryList(this.PAGE_SIZE).pipe(tap((/**
         * @param {?} orders
         * @return {?}
         */
        (orders) => {
            if (orders.pagination) {
                this.sortType = orders.pagination.sort;
            }
        })));
        this.isLoaded$ = this.userService.getOrderHistoryListLoaded();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
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
            cxRoute: 'orderDetails',
            params: order,
        });
    }
    /**
     * @return {?}
     */
    getSortLabels() {
        return combineLatest([
            this.translation.translate('sorting.date'),
            this.translation.translate('sorting.orderNumber'),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([textByDate, textByOrderNumber]) => {
            return {
                byDate: textByDate,
                byOrderNumber: textByOrderNumber,
            };
        })));
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    fetchOrders(event) {
        this.userService.loadOrderList(this.PAGE_SIZE, event.currentPage, event.sortCode);
    }
}
OrderHistoryComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-order-history',
                template: "<ng-container *ngIf=\"(orders$ | async) as orders\">\n  <div class=\"container\">\n    <!-- HEADER -->\n    <div class=\"cx-order-history-header\">\n      <h3>{{ 'orderHistory.orderHistory' | cxTranslate }}</h3>\n    </div>\n\n    <!-- BODY -->\n    <div class=\"cx-order-history-body\">\n      <ng-container *ngIf=\"orders.pagination.totalResults > 0; else noOrder\">\n        <!-- Select Form and Pagination Top -->\n        <div class=\"cx-order-history-sort top row\">\n          <div\n            class=\"cx-order-history-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"orders.sorts\"\n              [sortLabels]=\"getSortLabels() | async\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"orders.pagination.sort\"\n              placeholder=\"{{ 'orderHistory.sortByMostRecent' | cxTranslate }}\"\n            ></cx-sorting>\n          </div>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"orders.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n        <!-- TABLE -->\n        <table class=\"table cx-order-history-table\">\n          <thead class=\"cx-order-history-thead-mobile\">\n            <th scope=\"col\">\n              {{ 'orderHistory.orderId' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'orderHistory.date' | cxTranslate }}</th>\n            <th scope=\"col\">\n              {{ 'orderHistory.status' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'orderHistory.total' | cxTranslate }}</th>\n          </thead>\n          <tbody>\n            <tr\n              *ngFor=\"let order of orders.orders\"\n              (click)=\"goToOrderDetail(order)\"\n            >\n              <td class=\"cx-order-history-code\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.orderId' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'orderDetails',\n                      params: order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ order?.code }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-placed\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.date' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'orderDetails',\n                      params: order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                  >{{ order?.placed | cxDate: 'longDate' }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-status\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.status' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'orderDetails',\n                      params: order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{\n                    'orderDetails.statusDisplay'\n                      | cxTranslate: { context: order?.statusDisplay }\n                  }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-total\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.total' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'orderDetails',\n                      params: order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ order?.total.formattedValue }}</a\n                >\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <!-- Select Form and Pagination Bottom -->\n        <div class=\"cx-order-history-sort bottom row\">\n          <div\n            class=\"cx-order-history-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"orders.sorts\"\n              [sortLabels]=\"getSortLabels() | async\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"orders.pagination.sort\"\n              placeholder=\"{{ 'orderHistory.sortByMostRecent' | cxTranslate }}\"\n            ></cx-sorting>\n          </div>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"orders.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n      </ng-container>\n\n      <!-- NO ORDER CONTAINER -->\n      <ng-template #noOrder>\n        <div class=\"cx-order-history-no-order row\" *ngIf=\"(isLoaded$ | async)\">\n          <div class=\"col-sm-12 col-md-6 col-lg-4\">\n            <div>{{ 'orderHistory.noOrders' | cxTranslate }}</div>\n            <a\n              [routerLink]=\"{ cxRoute: 'home' } | cxUrl\"\n              routerLinkActive=\"active\"\n              class=\"btn btn-primary btn-block\"\n              >{{ 'orderHistory.startShopping' | cxTranslate }}</a\n            >\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
OrderHistoryComponent.ctorParameters = () => [
    { type: RoutingService },
    { type: UserService },
    { type: TranslationService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItaGlzdG9yeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvb3JkZXItaGlzdG9yeS9vcmRlci1oaXN0b3J5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUdMLGNBQWMsRUFDZCxrQkFBa0IsRUFDbEIsV0FBVyxHQUNaLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTTFDLE1BQU0sT0FBTyxxQkFBcUI7Ozs7OztJQUNoQyxZQUNVLE9BQXVCLEVBQ3ZCLFdBQXdCLEVBQ3hCLFdBQStCO1FBRi9CLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQU1qQyxjQUFTLEdBQUcsQ0FBQyxDQUFDO0lBTG5CLENBQUM7Ozs7SUFTSixRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQ3RFLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQXdCLEVBQUUsRUFBRTtZQUMvQixJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7YUFDeEM7UUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBRUYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLHlCQUF5QixFQUFFLENBQUM7SUFDaEUsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLFFBQWdCOztjQUN2QixLQUFLLEdBQThDO1lBQ3ZELFFBQVE7WUFDUixXQUFXLEVBQUUsQ0FBQztTQUNmO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxJQUFZOztjQUNmLEtBQUssR0FBOEM7WUFDdkQsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxLQUFZO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ2QsT0FBTyxFQUFFLGNBQWM7WUFDdkIsTUFBTSxFQUFFLEtBQUs7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsYUFBYTtRQUNYLE9BQU8sYUFBYSxDQUFDO1lBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQztZQUMxQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQztTQUNsRCxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsVUFBVSxFQUFFLGlCQUFpQixDQUFDLEVBQUUsRUFBRTtZQUN0QyxPQUFPO2dCQUNMLE1BQU0sRUFBRSxVQUFVO2dCQUNsQixhQUFhLEVBQUUsaUJBQWlCO2FBQ2pDLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sV0FBVyxDQUFDLEtBQWdEO1FBQ2xFLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUM1QixJQUFJLENBQUMsU0FBUyxFQUNkLEtBQUssQ0FBQyxXQUFXLEVBQ2pCLEtBQUssQ0FBQyxRQUFRLENBQ2YsQ0FBQztJQUNKLENBQUM7OztZQTlFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsK3dMQUE2QzthQUM5Qzs7OztZQVZDLGNBQWM7WUFFZCxXQUFXO1lBRFgsa0JBQWtCOzs7O0lBaUJsQix3Q0FBc0M7O0lBQ3RDLDBDQUErQjs7Ozs7SUFFL0IsMENBQXNCOztJQUV0Qix5Q0FBaUI7Ozs7O0lBVmYsd0NBQStCOzs7OztJQUMvQiw0Q0FBZ0M7Ozs7O0lBQ2hDLDRDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE9yZGVyLFxuICBPcmRlckhpc3RvcnlMaXN0LFxuICBSb3V0aW5nU2VydmljZSxcbiAgVHJhbnNsYXRpb25TZXJ2aWNlLFxuICBVc2VyU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1vcmRlci1oaXN0b3J5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL29yZGVyLWhpc3RvcnkuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckhpc3RvcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGluZzogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlXG4gICkge31cblxuICBvcmRlcnMkOiBPYnNlcnZhYmxlPE9yZGVySGlzdG9yeUxpc3Q+O1xuICBpc0xvYWRlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgcHJpdmF0ZSBQQUdFX1NJWkUgPSA1O1xuXG4gIHNvcnRUeXBlOiBzdHJpbmc7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5vcmRlcnMkID0gdGhpcy51c2VyU2VydmljZS5nZXRPcmRlckhpc3RvcnlMaXN0KHRoaXMuUEFHRV9TSVpFKS5waXBlKFxuICAgICAgdGFwKChvcmRlcnM6IE9yZGVySGlzdG9yeUxpc3QpID0+IHtcbiAgICAgICAgaWYgKG9yZGVycy5wYWdpbmF0aW9uKSB7XG4gICAgICAgICAgdGhpcy5zb3J0VHlwZSA9IG9yZGVycy5wYWdpbmF0aW9uLnNvcnQ7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuaXNMb2FkZWQkID0gdGhpcy51c2VyU2VydmljZS5nZXRPcmRlckhpc3RvcnlMaXN0TG9hZGVkKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmNsZWFyT3JkZXJMaXN0KCk7XG4gIH1cblxuICBjaGFuZ2VTb3J0Q29kZShzb3J0Q29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgZXZlbnQ6IHsgc29ydENvZGU6IHN0cmluZzsgY3VycmVudFBhZ2U6IG51bWJlciB9ID0ge1xuICAgICAgc29ydENvZGUsXG4gICAgICBjdXJyZW50UGFnZTogMCxcbiAgICB9O1xuICAgIHRoaXMuc29ydFR5cGUgPSBzb3J0Q29kZTtcbiAgICB0aGlzLmZldGNoT3JkZXJzKGV2ZW50KTtcbiAgfVxuXG4gIHBhZ2VDaGFuZ2UocGFnZTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgZXZlbnQ6IHsgc29ydENvZGU6IHN0cmluZzsgY3VycmVudFBhZ2U6IG51bWJlciB9ID0ge1xuICAgICAgc29ydENvZGU6IHRoaXMuc29ydFR5cGUsXG4gICAgICBjdXJyZW50UGFnZTogcGFnZSxcbiAgICB9O1xuICAgIHRoaXMuZmV0Y2hPcmRlcnMoZXZlbnQpO1xuICB9XG5cbiAgZ29Ub09yZGVyRGV0YWlsKG9yZGVyOiBPcmRlcik6IHZvaWQge1xuICAgIHRoaXMucm91dGluZy5nbyh7XG4gICAgICBjeFJvdXRlOiAnb3JkZXJEZXRhaWxzJyxcbiAgICAgIHBhcmFtczogb3JkZXIsXG4gICAgfSk7XG4gIH1cblxuICBnZXRTb3J0TGFiZWxzKCk6IE9ic2VydmFibGU8eyBieURhdGU6IHN0cmluZzsgYnlPcmRlck51bWJlcjogc3RyaW5nIH0+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnc29ydGluZy5kYXRlJyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnc29ydGluZy5vcmRlck51bWJlcicpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFt0ZXh0QnlEYXRlLCB0ZXh0QnlPcmRlck51bWJlcl0pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBieURhdGU6IHRleHRCeURhdGUsXG4gICAgICAgICAgYnlPcmRlck51bWJlcjogdGV4dEJ5T3JkZXJOdW1iZXIsXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGZldGNoT3JkZXJzKGV2ZW50OiB7IHNvcnRDb2RlOiBzdHJpbmc7IGN1cnJlbnRQYWdlOiBudW1iZXIgfSk6IHZvaWQge1xuICAgIHRoaXMudXNlclNlcnZpY2UubG9hZE9yZGVyTGlzdChcbiAgICAgIHRoaXMuUEFHRV9TSVpFLFxuICAgICAgZXZlbnQuY3VycmVudFBhZ2UsXG4gICAgICBldmVudC5zb3J0Q29kZVxuICAgICk7XG4gIH1cbn1cbiJdfQ==