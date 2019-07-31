/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { RoutingService, TranslationService, UserOrderService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';
export class OrderHistoryComponent {
    /**
     * @param {?} routing
     * @param {?} userOrderService
     * @param {?} translation
     */
    constructor(routing, userOrderService, translation) {
        this.routing = routing;
        this.userOrderService = userOrderService;
        this.translation = translation;
        this.PAGE_SIZE = 5;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.orders$ = this.userOrderService
            .getOrderHistoryList(this.PAGE_SIZE)
            .pipe(tap((/**
         * @param {?} orders
         * @return {?}
         */
        (orders) => {
            if (orders.pagination) {
                this.sortType = orders.pagination.sort;
            }
        })));
        this.isLoaded$ = this.userOrderService.getOrderHistoryListLoaded();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.userOrderService.clearOrderList();
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
        this.userOrderService.loadOrderList(this.PAGE_SIZE, event.currentPage, event.sortCode);
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
    { type: UserOrderService },
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
    OrderHistoryComponent.prototype.userOrderService;
    /**
     * @type {?}
     * @private
     */
    OrderHistoryComponent.prototype.translation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItaGlzdG9yeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvb3JkZXItaGlzdG9yeS9vcmRlci1oaXN0b3J5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUdMLGNBQWMsRUFDZCxrQkFBa0IsRUFDbEIsZ0JBQWdCLEdBQ2pCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTTFDLE1BQU0sT0FBTyxxQkFBcUI7Ozs7OztJQUNoQyxZQUNVLE9BQXVCLEVBQ3ZCLGdCQUFrQyxFQUNsQyxXQUErQjtRQUYvQixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQU1qQyxjQUFTLEdBQUcsQ0FBQyxDQUFDO0lBTG5CLENBQUM7Ozs7SUFTSixRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCO2FBQ2pDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDbkMsSUFBSSxDQUNILEdBQUc7Ozs7UUFBQyxDQUFDLE1BQXdCLEVBQUUsRUFBRTtZQUMvQixJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7YUFDeEM7UUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBRUosSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMseUJBQXlCLEVBQUUsQ0FBQztJQUNyRSxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxRQUFnQjs7Y0FDdkIsS0FBSyxHQUE4QztZQUN2RCxRQUFRO1lBQ1IsV0FBVyxFQUFFLENBQUM7U0FDZjtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsSUFBWTs7Y0FDZixLQUFLLEdBQThDO1lBQ3ZELFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixXQUFXLEVBQUUsSUFBSTtTQUNsQjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsS0FBWTtRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNkLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLE1BQU0sRUFBRSxLQUFLO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxPQUFPLGFBQWEsQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUM7WUFDMUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUM7U0FDbEQsQ0FBQyxDQUFDLElBQUksQ0FDTCxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLEVBQUU7WUFDdEMsT0FBTztnQkFDTCxNQUFNLEVBQUUsVUFBVTtnQkFDbEIsYUFBYSxFQUFFLGlCQUFpQjthQUNqQyxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLFdBQVcsQ0FBQyxLQUFnRDtRQUNsRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUNqQyxJQUFJLENBQUMsU0FBUyxFQUNkLEtBQUssQ0FBQyxXQUFXLEVBQ2pCLEtBQUssQ0FBQyxRQUFRLENBQ2YsQ0FBQztJQUNKLENBQUM7OztZQWhGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsK3dMQUE2QzthQUM5Qzs7OztZQVZDLGNBQWM7WUFFZCxnQkFBZ0I7WUFEaEIsa0JBQWtCOzs7O0lBaUJsQix3Q0FBc0M7O0lBQ3RDLDBDQUErQjs7Ozs7SUFFL0IsMENBQXNCOztJQUV0Qix5Q0FBaUI7Ozs7O0lBVmYsd0NBQStCOzs7OztJQUMvQixpREFBMEM7Ozs7O0lBQzFDLDRDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE9yZGVyLFxuICBPcmRlckhpc3RvcnlMaXN0LFxuICBSb3V0aW5nU2VydmljZSxcbiAgVHJhbnNsYXRpb25TZXJ2aWNlLFxuICBVc2VyT3JkZXJTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW9yZGVyLWhpc3RvcnknLFxuICB0ZW1wbGF0ZVVybDogJy4vb3JkZXItaGlzdG9yeS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVySGlzdG9yeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0aW5nOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcml2YXRlIHVzZXJPcmRlclNlcnZpY2U6IFVzZXJPcmRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlXG4gICkge31cblxuICBvcmRlcnMkOiBPYnNlcnZhYmxlPE9yZGVySGlzdG9yeUxpc3Q+O1xuICBpc0xvYWRlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgcHJpdmF0ZSBQQUdFX1NJWkUgPSA1O1xuXG4gIHNvcnRUeXBlOiBzdHJpbmc7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5vcmRlcnMkID0gdGhpcy51c2VyT3JkZXJTZXJ2aWNlXG4gICAgICAuZ2V0T3JkZXJIaXN0b3J5TGlzdCh0aGlzLlBBR0VfU0laRSlcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoKG9yZGVyczogT3JkZXJIaXN0b3J5TGlzdCkgPT4ge1xuICAgICAgICAgIGlmIChvcmRlcnMucGFnaW5hdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zb3J0VHlwZSA9IG9yZGVycy5wYWdpbmF0aW9uLnNvcnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIHRoaXMuaXNMb2FkZWQkID0gdGhpcy51c2VyT3JkZXJTZXJ2aWNlLmdldE9yZGVySGlzdG9yeUxpc3RMb2FkZWQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudXNlck9yZGVyU2VydmljZS5jbGVhck9yZGVyTGlzdCgpO1xuICB9XG5cbiAgY2hhbmdlU29ydENvZGUoc29ydENvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGV2ZW50OiB7IHNvcnRDb2RlOiBzdHJpbmc7IGN1cnJlbnRQYWdlOiBudW1iZXIgfSA9IHtcbiAgICAgIHNvcnRDb2RlLFxuICAgICAgY3VycmVudFBhZ2U6IDAsXG4gICAgfTtcbiAgICB0aGlzLnNvcnRUeXBlID0gc29ydENvZGU7XG4gICAgdGhpcy5mZXRjaE9yZGVycyhldmVudCk7XG4gIH1cblxuICBwYWdlQ2hhbmdlKHBhZ2U6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGV2ZW50OiB7IHNvcnRDb2RlOiBzdHJpbmc7IGN1cnJlbnRQYWdlOiBudW1iZXIgfSA9IHtcbiAgICAgIHNvcnRDb2RlOiB0aGlzLnNvcnRUeXBlLFxuICAgICAgY3VycmVudFBhZ2U6IHBhZ2UsXG4gICAgfTtcbiAgICB0aGlzLmZldGNoT3JkZXJzKGV2ZW50KTtcbiAgfVxuXG4gIGdvVG9PcmRlckRldGFpbChvcmRlcjogT3JkZXIpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmcuZ28oe1xuICAgICAgY3hSb3V0ZTogJ29yZGVyRGV0YWlscycsXG4gICAgICBwYXJhbXM6IG9yZGVyLFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0U29ydExhYmVscygpOiBPYnNlcnZhYmxlPHsgYnlEYXRlOiBzdHJpbmc7IGJ5T3JkZXJOdW1iZXI6IHN0cmluZyB9PiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3NvcnRpbmcuZGF0ZScpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3NvcnRpbmcub3JkZXJOdW1iZXInKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKChbdGV4dEJ5RGF0ZSwgdGV4dEJ5T3JkZXJOdW1iZXJdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYnlEYXRlOiB0ZXh0QnlEYXRlLFxuICAgICAgICAgIGJ5T3JkZXJOdW1iZXI6IHRleHRCeU9yZGVyTnVtYmVyLFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBmZXRjaE9yZGVycyhldmVudDogeyBzb3J0Q29kZTogc3RyaW5nOyBjdXJyZW50UGFnZTogbnVtYmVyIH0pOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJPcmRlclNlcnZpY2UubG9hZE9yZGVyTGlzdChcbiAgICAgIHRoaXMuUEFHRV9TSVpFLFxuICAgICAgZXZlbnQuY3VycmVudFBhZ2UsXG4gICAgICBldmVudC5zb3J0Q29kZVxuICAgICk7XG4gIH1cbn1cbiJdfQ==