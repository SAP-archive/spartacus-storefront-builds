/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { OrderReturnRequestService, TranslationService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { tap, map, filter, take } from 'rxjs/operators';
var OrderReturnRequestListComponent = /** @class */ (function () {
    function OrderReturnRequestListComponent(returnRequestService, translation) {
        var _this = this;
        this.returnRequestService = returnRequestService;
        this.translation = translation;
        this.PAGE_SIZE = 5;
        this.returnRequests$ = this.returnRequestService.getOrderReturnRequestList(this.PAGE_SIZE).pipe(tap((/**
         * @param {?} requestList
         * @return {?}
         */
        function (requestList) {
            if (requestList.pagination) {
                _this.sortType = requestList.pagination.sort;
            }
        })));
        /**
         * When "Order Return" feature is enabled, this component becomes one tab in
         * TabParagraphContainerComponent. This can be read from TabParagraphContainer.
         */
        this.tabTitleParam$ = this.returnRequests$.pipe(map((/**
         * @param {?} returnRequests
         * @return {?}
         */
        function (returnRequests) { return returnRequests.pagination.totalResults; })), filter((/**
         * @param {?} totalResults
         * @return {?}
         */
        function (totalResults) { return totalResults !== undefined; })), take(1));
    }
    /**
     * @return {?}
     */
    OrderReturnRequestListComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.returnRequestService.clearOrderReturnRequestList();
    };
    /**
     * @param {?} sortCode
     * @return {?}
     */
    OrderReturnRequestListComponent.prototype.changeSortCode = /**
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
        this.fetchReturnRequests(event);
    };
    /**
     * @param {?} page
     * @return {?}
     */
    OrderReturnRequestListComponent.prototype.pageChange = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        /** @type {?} */
        var event = {
            sortCode: this.sortType,
            currentPage: page,
        };
        this.fetchReturnRequests(event);
    };
    /**
     * @return {?}
     */
    OrderReturnRequestListComponent.prototype.getSortLabels = /**
     * @return {?}
     */
    function () {
        return combineLatest([
            this.translation.translate('sorting.date'),
            this.translation.translate('sorting.rma'),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), textByDate = _b[0], textByRma = _b[1];
            return {
                byDate: textByDate,
                byRMA: textByRma,
            };
        })));
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    OrderReturnRequestListComponent.prototype.fetchReturnRequests = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.returnRequestService.loadOrderReturnRequestList(this.PAGE_SIZE, event.currentPage, event.sortCode);
    };
    OrderReturnRequestListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-order-return-request-list',
                    template: "<ng-container *ngIf=\"returnRequests$ | async as returnRequests\">\n  <div class=\"container\">\n    <!-- BODY -->\n    <div class=\"cx-order-history-body\">\n      <ng-container *ngIf=\"returnRequests.pagination.totalResults > 0\">\n        <!-- Select Form and Pagination Top -->\n        <div class=\"cx-order-history-sort top row\">\n          <div\n            class=\"cx-order-history-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"returnRequests.sorts\"\n              [sortLabels]=\"getSortLabels() | async\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"returnRequests.pagination.sort\"\n              placeholder=\"{{\n                'returnRequestList.sortByMostRecent' | cxTranslate\n              }}\"\n            ></cx-sorting>\n          </div>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"returnRequests.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n        <!-- TABLE -->\n        <table class=\"table cx-order-history-table\">\n          <thead class=\"cx-order-history-thead-mobile\">\n            <th scope=\"col\">\n              {{ 'returnRequestList.returnRequestId' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'returnRequestList.orderId' | cxTranslate }}</th>\n            <th scope=\"col\">\n              {{ 'returnRequestList.date' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'returnRequestList.status' | cxTranslate }}</th>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let return of returnRequests.returnRequests\">\n              <td class=\"cx-order-history-code\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'returnRequestList.returnRequestId' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'returnRequestDetails',\n                      params: return\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ return?.rma }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-code\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'returnRequestList.orderId' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'orderDetails',\n                      params: return?.order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ return?.order?.code }}</a\n                >\n              </td>\n\n              <td class=\"cx-order-history-placed\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'returnRequestList.date' | cxTranslate }}\n                </div>\n                {{ return?.creationTime | cxDate: 'longDate' }}\n              </td>\n              <td class=\"cx-order-history-status\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'returnRequestList.status' | cxTranslate }}\n                </div>\n                {{\n                  'returnRequestList.statusDisplay'\n                    | cxTranslate: { context: return?.status }\n                }}\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <!-- Select Form and Pagination Bottom -->\n        <div class=\"cx-order-history-sort bottom row\">\n          <div\n            class=\"cx-order-history-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"returnRequests.sorts\"\n              [sortLabels]=\"getSortLabels() | async\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"returnRequests.pagination.sort\"\n              placeholder=\"{{\n                'returnRequestList.sortByMostRecent' | cxTranslate\n              }}\"\n            ></cx-sorting>\n          </div>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"returnRequests.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    OrderReturnRequestListComponent.ctorParameters = function () { return [
        { type: OrderReturnRequestService },
        { type: TranslationService }
    ]; };
    return OrderReturnRequestListComponent;
}());
export { OrderReturnRequestListComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OrderReturnRequestListComponent.prototype.PAGE_SIZE;
    /** @type {?} */
    OrderReturnRequestListComponent.prototype.sortType;
    /** @type {?} */
    OrderReturnRequestListComponent.prototype.returnRequests$;
    /**
     * When "Order Return" feature is enabled, this component becomes one tab in
     * TabParagraphContainerComponent. This can be read from TabParagraphContainer.
     * @type {?}
     */
    OrderReturnRequestListComponent.prototype.tabTitleParam$;
    /**
     * @type {?}
     * @private
     */
    OrderReturnRequestListComponent.prototype.returnRequestService;
    /**
     * @type {?}
     * @private
     */
    OrderReturnRequestListComponent.prototype.translation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcmV0dXJuLXJlcXVlc3QtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvcmV0dXJuLXJlcXVlc3QtbGlzdC9vcmRlci1yZXR1cm4tcmVxdWVzdC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWEsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUVMLHlCQUF5QixFQUN6QixrQkFBa0IsR0FDbkIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RDtJQU1FLHlDQUNVLG9CQUErQyxFQUMvQyxXQUErQjtRQUZ6QyxpQkFHSTtRQUZNLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBMkI7UUFDL0MsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBR2pDLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFHdEIsb0JBQWUsR0FFWCxJQUFJLENBQUMsb0JBQW9CLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FDMUUsR0FBRzs7OztRQUFDLFVBQUMsV0FBOEI7WUFDakMsSUFBSSxXQUFXLENBQUMsVUFBVSxFQUFFO2dCQUMxQixLQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO2FBQzdDO1FBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQzs7Ozs7UUFNRixtQkFBYyxHQUF1QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FDNUQsR0FBRzs7OztRQUFDLFVBQUEsY0FBYyxJQUFJLE9BQUEsY0FBYyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQXRDLENBQXNDLEVBQUMsRUFDN0QsTUFBTTs7OztRQUFDLFVBQUEsWUFBWSxJQUFJLE9BQUEsWUFBWSxLQUFLLFNBQVMsRUFBMUIsQ0FBMEIsRUFBQyxFQUNsRCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1IsQ0FBQztJQXZCQyxDQUFDOzs7O0lBeUJKLHFEQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQywyQkFBMkIsRUFBRSxDQUFDO0lBQzFELENBQUM7Ozs7O0lBRUQsd0RBQWM7Ozs7SUFBZCxVQUFlLFFBQWdCOztZQUN2QixLQUFLLEdBQThDO1lBQ3ZELFFBQVEsVUFBQTtZQUNSLFdBQVcsRUFBRSxDQUFDO1NBQ2Y7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFRCxvREFBVTs7OztJQUFWLFVBQVcsSUFBWTs7WUFDZixLQUFLLEdBQThDO1lBQ3ZELFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixXQUFXLEVBQUUsSUFBSTtTQUNsQjtRQUNELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsdURBQWE7OztJQUFiO1FBQ0UsT0FBTyxhQUFhLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDO1lBQzFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztTQUMxQyxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUc7Ozs7UUFBQyxVQUFDLEVBQXVCO2dCQUF2QiwwQkFBdUIsRUFBdEIsa0JBQVUsRUFBRSxpQkFBUztZQUN6QixPQUFPO2dCQUNMLE1BQU0sRUFBRSxVQUFVO2dCQUNsQixLQUFLLEVBQUUsU0FBUzthQUNqQixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLDZEQUFtQjs7Ozs7SUFBM0IsVUFBNEIsS0FHM0I7UUFDQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsMEJBQTBCLENBQ2xELElBQUksQ0FBQyxTQUFTLEVBQ2QsS0FBSyxDQUFDLFdBQVcsRUFDakIsS0FBSyxDQUFDLFFBQVEsQ0FDZixDQUFDO0lBQ0osQ0FBQzs7Z0JBOUVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsOEJBQThCO29CQUN4QyxxbUpBQXlEO29CQUN6RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBVkMseUJBQXlCO2dCQUN6QixrQkFBa0I7O0lBb0ZwQixzQ0FBQztDQUFBLEFBL0VELElBK0VDO1NBMUVZLCtCQUErQjs7Ozs7O0lBTTFDLG9EQUFzQjs7SUFDdEIsbURBQWlCOztJQUVqQiwwREFRRTs7Ozs7O0lBTUYseURBSUU7Ozs7O0lBekJBLCtEQUF1RDs7Ozs7SUFDdkQsc0RBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBSZXR1cm5SZXF1ZXN0TGlzdCxcbiAgT3JkZXJSZXR1cm5SZXF1ZXN0U2VydmljZSxcbiAgVHJhbnNsYXRpb25TZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwLCBtYXAsIGZpbHRlciwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtb3JkZXItcmV0dXJuLXJlcXVlc3QtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9vcmRlci1yZXR1cm4tcmVxdWVzdC1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyUmV0dXJuUmVxdWVzdExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJldHVyblJlcXVlc3RTZXJ2aWNlOiBPcmRlclJldHVyblJlcXVlc3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZVxuICApIHt9XG5cbiAgcHJpdmF0ZSBQQUdFX1NJWkUgPSA1O1xuICBzb3J0VHlwZTogc3RyaW5nO1xuXG4gIHJldHVyblJlcXVlc3RzJDogT2JzZXJ2YWJsZTxcbiAgICBSZXR1cm5SZXF1ZXN0TGlzdFxuICA+ID0gdGhpcy5yZXR1cm5SZXF1ZXN0U2VydmljZS5nZXRPcmRlclJldHVyblJlcXVlc3RMaXN0KHRoaXMuUEFHRV9TSVpFKS5waXBlKFxuICAgIHRhcCgocmVxdWVzdExpc3Q6IFJldHVyblJlcXVlc3RMaXN0KSA9PiB7XG4gICAgICBpZiAocmVxdWVzdExpc3QucGFnaW5hdGlvbikge1xuICAgICAgICB0aGlzLnNvcnRUeXBlID0gcmVxdWVzdExpc3QucGFnaW5hdGlvbi5zb3J0O1xuICAgICAgfVxuICAgIH0pXG4gICk7XG5cbiAgLyoqXG4gICAqIFdoZW4gXCJPcmRlciBSZXR1cm5cIiBmZWF0dXJlIGlzIGVuYWJsZWQsIHRoaXMgY29tcG9uZW50IGJlY29tZXMgb25lIHRhYiBpblxuICAgKiBUYWJQYXJhZ3JhcGhDb250YWluZXJDb21wb25lbnQuIFRoaXMgY2FuIGJlIHJlYWQgZnJvbSBUYWJQYXJhZ3JhcGhDb250YWluZXIuXG4gICAqL1xuICB0YWJUaXRsZVBhcmFtJDogT2JzZXJ2YWJsZTxudW1iZXI+ID0gdGhpcy5yZXR1cm5SZXF1ZXN0cyQucGlwZShcbiAgICBtYXAocmV0dXJuUmVxdWVzdHMgPT4gcmV0dXJuUmVxdWVzdHMucGFnaW5hdGlvbi50b3RhbFJlc3VsdHMpLFxuICAgIGZpbHRlcih0b3RhbFJlc3VsdHMgPT4gdG90YWxSZXN1bHRzICE9PSB1bmRlZmluZWQpLFxuICAgIHRha2UoMSlcbiAgKTtcblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnJldHVyblJlcXVlc3RTZXJ2aWNlLmNsZWFyT3JkZXJSZXR1cm5SZXF1ZXN0TGlzdCgpO1xuICB9XG5cbiAgY2hhbmdlU29ydENvZGUoc29ydENvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGV2ZW50OiB7IHNvcnRDb2RlOiBzdHJpbmc7IGN1cnJlbnRQYWdlOiBudW1iZXIgfSA9IHtcbiAgICAgIHNvcnRDb2RlLFxuICAgICAgY3VycmVudFBhZ2U6IDAsXG4gICAgfTtcbiAgICB0aGlzLnNvcnRUeXBlID0gc29ydENvZGU7XG4gICAgdGhpcy5mZXRjaFJldHVyblJlcXVlc3RzKGV2ZW50KTtcbiAgfVxuXG4gIHBhZ2VDaGFuZ2UocGFnZTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgZXZlbnQ6IHsgc29ydENvZGU6IHN0cmluZzsgY3VycmVudFBhZ2U6IG51bWJlciB9ID0ge1xuICAgICAgc29ydENvZGU6IHRoaXMuc29ydFR5cGUsXG4gICAgICBjdXJyZW50UGFnZTogcGFnZSxcbiAgICB9O1xuICAgIHRoaXMuZmV0Y2hSZXR1cm5SZXF1ZXN0cyhldmVudCk7XG4gIH1cblxuICBnZXRTb3J0TGFiZWxzKCk6IE9ic2VydmFibGU8eyBieURhdGU6IHN0cmluZzsgYnlSTUE6IHN0cmluZyB9PiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3NvcnRpbmcuZGF0ZScpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3NvcnRpbmcucm1hJyksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW3RleHRCeURhdGUsIHRleHRCeVJtYV0pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBieURhdGU6IHRleHRCeURhdGUsXG4gICAgICAgICAgYnlSTUE6IHRleHRCeVJtYSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZmV0Y2hSZXR1cm5SZXF1ZXN0cyhldmVudDoge1xuICAgIHNvcnRDb2RlOiBzdHJpbmc7XG4gICAgY3VycmVudFBhZ2U6IG51bWJlcjtcbiAgfSk6IHZvaWQge1xuICAgIHRoaXMucmV0dXJuUmVxdWVzdFNlcnZpY2UubG9hZE9yZGVyUmV0dXJuUmVxdWVzdExpc3QoXG4gICAgICB0aGlzLlBBR0VfU0laRSxcbiAgICAgIGV2ZW50LmN1cnJlbnRQYWdlLFxuICAgICAgZXZlbnQuc29ydENvZGVcbiAgICApO1xuICB9XG59XG4iXX0=