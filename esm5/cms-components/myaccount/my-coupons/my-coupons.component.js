/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { combineLatest, Subscription } from 'rxjs';
import { CustomerCouponService, } from '@spartacus/core';
import { tap, map } from 'rxjs/operators';
import { ICON_TYPE } from '../../misc/icon/icon.model';
import { MyCouponsComponentService } from './my-coupons.component.service';
var MyCouponsComponent = /** @class */ (function () {
    function MyCouponsComponent(couponService, myCouponsComponentService) {
        this.couponService = couponService;
        this.myCouponsComponentService = myCouponsComponentService;
        this.iconTypes = ICON_TYPE;
        this.subscriptions = new Subscription();
        this.PAGE_SIZE = 10;
        this.sortMapping = {
            byStartDateAsc: 'startDate:asc',
            byStartDateDesc: 'startDate:desc',
            byEndDateAsc: 'endDate:asc',
            byEndDateDesc: 'endDate:desc',
        };
        this.sort = 'byStartDateAsc';
        this.sortOptions = [
            {
                code: 'byStartDateAsc',
                selected: false,
            },
            {
                code: 'byStartDateDesc',
                selected: false,
            },
            {
                code: 'byEndDateAsc',
                selected: false,
            },
            {
                code: 'byEndDateDesc',
                selected: false,
            },
        ];
    }
    /**
     * @return {?}
     */
    MyCouponsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.couponService.loadCustomerCoupons(this.PAGE_SIZE);
        this.couponResult$ = this.couponService
            .getCustomerCoupons(this.PAGE_SIZE)
            .pipe(tap((/**
         * @param {?} coupons
         * @return {?}
         */
        function (coupons) {
            return (_this.pagination = {
                currentPage: coupons.pagination.page,
                pageSize: coupons.pagination.count,
                totalPages: coupons.pagination.totalPages,
                totalResults: coupons.pagination.totalCount,
                sort: _this.sort,
            });
        })));
        this.couponsLoading$ = this.couponService.getCustomerCouponsLoading();
        this.couponSubscriptionLoading$ = combineLatest([
            this.couponService.getSubscribeCustomerCouponResultLoading(),
            this.couponService.getUnsubscribeCustomerCouponResultLoading(),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), subscribing = _b[0], unsubscribing = _b[1];
            return subscribing || unsubscribing;
        })));
        this.sortLabels = this.myCouponsComponentService.getSortLabels();
        this.subscriptions
            .add(this.couponService
            .getSubscribeCustomerCouponResultError()
            .subscribe((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            _this.subscriptionFail(error);
        })))
            .add(this.couponService
            .getUnsubscribeCustomerCouponResultError()
            .subscribe((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            _this.subscriptionFail(error);
        })));
    };
    /**
     * @private
     * @param {?} error
     * @return {?}
     */
    MyCouponsComponent.prototype.subscriptionFail = /**
     * @private
     * @param {?} error
     * @return {?}
     */
    function (error) {
        if (error) {
            this.couponService.loadCustomerCoupons(this.PAGE_SIZE);
        }
    };
    /**
     * @param {?} sort
     * @return {?}
     */
    MyCouponsComponent.prototype.sortChange = /**
     * @param {?} sort
     * @return {?}
     */
    function (sort) {
        this.sort = sort;
        this.couponService.loadCustomerCoupons(this.PAGE_SIZE, this.pagination.currentPage, this.sortMapping[sort]);
    };
    /**
     * @param {?} page
     * @return {?}
     */
    MyCouponsComponent.prototype.pageChange = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.couponService.loadCustomerCoupons(this.PAGE_SIZE, page, this.sortMapping[this.sort]);
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    MyCouponsComponent.prototype.notificationChange = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var couponId = _a.couponId, notification = _a.notification;
        if (notification) {
            this.couponService.subscribeCustomerCoupon(couponId);
        }
        else {
            this.couponService.unsubscribeCustomerCoupon(couponId);
        }
    };
    /**
     * @return {?}
     */
    MyCouponsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions.unsubscribe();
    };
    MyCouponsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-my-coupons',
                    template: "<div class=\"cx-section\">\n  <ng-container *ngIf=\"!(couponsLoading$ | async); else loading\">\n    <ng-container *ngIf=\"couponResult$ | async as couponResult\">\n      <div class=\"cx-my-coupons-header\">\n        <h3>{{ 'myCoupons.myCoupons' | cxTranslate }}</h3>\n      </div>\n\n      <ng-container\n        *ngIf=\"couponResult.pagination.totalCount > 0; else noCoupons\"\n      >\n        <div class=\"cx-my-coupons-sort top row\">\n          <div\n            class=\"cx-my-coupons-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"sortOptions\"\n              [sortLabels]=\"sortLabels | async\"\n              (sortListEvent)=\"sortChange($event)\"\n              [selectedOption]=\"sort\"\n            >\n            </cx-sorting>\n          </div>\n          <div class=\"cx-my-coupons-pagination cx-mycoupon-thead-mobile\">\n            <cx-pagination\n              [pagination]=\"pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n\n        <div class=\"row cx-coupon-deck\">\n          <div\n            *ngFor=\"let coupon of couponResult.coupons\"\n            class=\"col-md-6 cx-coupon-card\"\n          >\n            <cx-coupon-card\n              [coupon]=\"coupon\"\n              [couponSubscriptionLoading$]=\"couponSubscriptionLoading$\"\n              (notificationChanged)=\"notificationChange($event)\"\n            ></cx-coupon-card>\n          </div>\n        </div>\n\n        <div class=\"cx-my-coupons-sort bottom row\">\n          <div\n            class=\"cx-my-coupons-form-group form-group cx-mycoupon-thead-mobile col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"sortOptions\"\n              [sortLabels]=\"sortLabels | async\"\n              (sortListEvent)=\"sortChange($event)\"\n              [selectedOption]=\"sort\"\n              placeholder=\"{{ 'myCoupons.sortByMostRecent' | cxTranslate }}\"\n            >\n            </cx-sorting>\n          </div>\n          <div class=\"cx-my-coupons-pagination\">\n            <cx-pagination\n              [pagination]=\"pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n        <div class=\"cx-my-coupons-notes\">\n          <span>\n            <cx-icon [type]=\"iconTypes.INFO\"></cx-icon>\n            {{ 'myCoupons.notesPreffix' | cxTranslate\n            }}<a [routerLink]=\"['/my-account/notification-preference']\">{{\n              'myCoupons.notesLink' | cxTranslate\n            }}</a\n            >{{ 'myCoupons.notesSuffix' | cxTranslate }}</span\n          >\n        </div>\n      </ng-container>\n    </ng-container>\n\n    <ng-template #noCoupons>\n      <section>\n        <p class=\"cx-section-msg\">\n          {{ 'myCoupons.noCouponsMessage' | cxTranslate }}\n        </p>\n      </section>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"col-md-12 cx-coupon-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </ng-template>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    MyCouponsComponent.ctorParameters = function () { return [
        { type: CustomerCouponService },
        { type: MyCouponsComponentService }
    ]; };
    return MyCouponsComponent;
}());
export { MyCouponsComponent };
if (false) {
    /** @type {?} */
    MyCouponsComponent.prototype.couponResult$;
    /** @type {?} */
    MyCouponsComponent.prototype.couponsLoading$;
    /** @type {?} */
    MyCouponsComponent.prototype.couponSubscriptionLoading$;
    /** @type {?} */
    MyCouponsComponent.prototype.iconTypes;
    /**
     * @type {?}
     * @private
     */
    MyCouponsComponent.prototype.subscriptions;
    /**
     * @type {?}
     * @private
     */
    MyCouponsComponent.prototype.PAGE_SIZE;
    /**
     * @type {?}
     * @private
     */
    MyCouponsComponent.prototype.sortMapping;
    /** @type {?} */
    MyCouponsComponent.prototype.sort;
    /** @type {?} */
    MyCouponsComponent.prototype.sortOptions;
    /** @type {?} */
    MyCouponsComponent.prototype.pagination;
    /** @type {?} */
    MyCouponsComponent.prototype.sortLabels;
    /**
     * @type {?}
     * @protected
     */
    MyCouponsComponent.prototype.couponService;
    /**
     * @type {?}
     * @protected
     */
    MyCouponsComponent.prototype.myCouponsComponentService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktY291cG9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvbXktY291cG9ucy9teS1jb3Vwb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBYyxhQUFhLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFDTCxxQkFBcUIsR0FHdEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUUzRTtJQWlERSw0QkFDWSxhQUFvQyxFQUNwQyx5QkFBb0Q7UUFEcEQsa0JBQWEsR0FBYixhQUFhLENBQXVCO1FBQ3BDLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUExQ2hFLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFFZCxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbkMsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGdCQUFXLEdBQUc7WUFDcEIsY0FBYyxFQUFFLGVBQWU7WUFDL0IsZUFBZSxFQUFFLGdCQUFnQjtZQUNqQyxZQUFZLEVBQUUsYUFBYTtZQUMzQixhQUFhLEVBQUUsY0FBYztTQUM5QixDQUFDO1FBQ0YsU0FBSSxHQUFHLGdCQUFnQixDQUFDO1FBRXhCLGdCQUFXLEdBQUc7WUFDWjtnQkFDRSxJQUFJLEVBQUUsZ0JBQWdCO2dCQUN0QixRQUFRLEVBQUUsS0FBSzthQUNoQjtZQUNEO2dCQUNFLElBQUksRUFBRSxpQkFBaUI7Z0JB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QUFJLENBQUMsSUFBSSxDQUFDLENBQzVCLENBQUM7SUFDSixDQUFDOzs7OztJQUVELCtDQUFrQjs7OztJQUFsQixVQUFtQixFQU1sQjtZQUxDLHNCQUFRLEVBQ1IsOEJBQVk7UUFLWixJQUFJLFlBQVksRUFBRTtZQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3REO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3hEO0lBQ0gsQ0FBQzs7OztJQUVELHdDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7Z0JBeElGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsc25HQUEwQztpQkFDM0M7Ozs7Z0JBWEMscUJBQXFCO2dCQU1kLHlCQUF5Qjs7SUEySWxDLHlCQUFDO0NBQUEsQUF6SUQsSUF5SUM7U0FySVksa0JBQWtCOzs7SUFDN0IsMkNBQXNEOztJQUN0RCw2Q0FBcUM7O0lBQ3JDLHdEQUFnRDs7SUFFaEQsdUNBQXNCOzs7OztJQUV0QiwyQ0FBMkM7Ozs7O0lBRTNDLHVDQUF1Qjs7Ozs7SUFDdkIseUNBS0U7O0lBQ0Ysa0NBQXdCOztJQUV4Qix5Q0FpQkU7O0lBRUYsd0NBQTRCOztJQUM1Qix3Q0FLRzs7Ozs7SUFHRCwyQ0FBOEM7Ozs7O0lBQzlDLHVEQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGNvbWJpbmVMYXRlc3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgQ3VzdG9tZXJDb3Vwb25TZXJ2aWNlLFxuICBDdXN0b21lckNvdXBvblNlYXJjaFJlc3VsdCxcbiAgUGFnaW5hdGlvbk1vZGVsLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgdGFwLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi9taXNjL2ljb24vaWNvbi5tb2RlbCc7XG5pbXBvcnQgeyBNeUNvdXBvbnNDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi9teS1jb3Vwb25zLmNvbXBvbmVudC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtbXktY291cG9ucycsXG4gIHRlbXBsYXRlVXJsOiAnLi9teS1jb3Vwb25zLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTXlDb3Vwb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjb3Vwb25SZXN1bHQkOiBPYnNlcnZhYmxlPEN1c3RvbWVyQ291cG9uU2VhcmNoUmVzdWx0PjtcbiAgY291cG9uc0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBjb3Vwb25TdWJzY3JpcHRpb25Mb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG5cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIHByaXZhdGUgUEFHRV9TSVpFID0gMTA7XG4gIHByaXZhdGUgc29ydE1hcHBpbmcgPSB7XG4gICAgYnlTdGFydERhdGVBc2M6ICdzdGFydERhdGU6YXNjJyxcbiAgICBieVN0YXJ0RGF0ZURlc2M6ICdzdGFydERhdGU6ZGVzYycsXG4gICAgYnlFbmREYXRlQXNjOiAnZW5kRGF0ZTphc2MnLFxuICAgIGJ5RW5kRGF0ZURlc2M6ICdlbmREYXRlOmRlc2MnLFxuICB9O1xuICBzb3J0ID0gJ2J5U3RhcnREYXRlQXNjJztcblxuICBzb3J0T3B0aW9ucyA9IFtcbiAgICB7XG4gICAgICBjb2RlOiAnYnlTdGFydERhdGVBc2MnLFxuICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgY29kZTogJ2J5U3RhcnREYXRlRGVzYycsXG4gICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2RlOiAnYnlFbmREYXRlQXNjJyxcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvZGU6ICdieUVuZERhdGVEZXNjJyxcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICB9LFxuICBdO1xuXG4gIHBhZ2luYXRpb246IFBhZ2luYXRpb25Nb2RlbDtcbiAgc29ydExhYmVsczogT2JzZXJ2YWJsZTx7XG4gICAgYnlTdGFydERhdGVBc2M6IHN0cmluZztcbiAgICBieVN0YXJ0RGF0ZURlc2M6IHN0cmluZztcbiAgICBieUVuZERhdGVBc2M6IHN0cmluZztcbiAgICBieUVuZERhdGVEZXNjOiBzdHJpbmc7XG4gIH0+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjb3Vwb25TZXJ2aWNlOiBDdXN0b21lckNvdXBvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIG15Q291cG9uc0NvbXBvbmVudFNlcnZpY2U6IE15Q291cG9uc0NvbXBvbmVudFNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY291cG9uU2VydmljZS5sb2FkQ3VzdG9tZXJDb3Vwb25zKHRoaXMuUEFHRV9TSVpFKTtcbiAgICB0aGlzLmNvdXBvblJlc3VsdCQgPSB0aGlzLmNvdXBvblNlcnZpY2VcbiAgICAgIC5nZXRDdXN0b21lckNvdXBvbnModGhpcy5QQUdFX1NJWkUpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKFxuICAgICAgICAgIGNvdXBvbnMgPT5cbiAgICAgICAgICAgICh0aGlzLnBhZ2luYXRpb24gPSB7XG4gICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiBjb3Vwb25zLnBhZ2luYXRpb24ucGFnZSxcbiAgICAgICAgICAgICAgcGFnZVNpemU6IGNvdXBvbnMucGFnaW5hdGlvbi5jb3VudCxcbiAgICAgICAgICAgICAgdG90YWxQYWdlczogY291cG9ucy5wYWdpbmF0aW9uLnRvdGFsUGFnZXMsXG4gICAgICAgICAgICAgIHRvdGFsUmVzdWx0czogY291cG9ucy5wYWdpbmF0aW9uLnRvdGFsQ291bnQsXG4gICAgICAgICAgICAgIHNvcnQ6IHRoaXMuc29ydCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgdGhpcy5jb3Vwb25zTG9hZGluZyQgPSB0aGlzLmNvdXBvblNlcnZpY2UuZ2V0Q3VzdG9tZXJDb3Vwb25zTG9hZGluZygpO1xuICAgIHRoaXMuY291cG9uU3Vic2NyaXB0aW9uTG9hZGluZyQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuY291cG9uU2VydmljZS5nZXRTdWJzY3JpYmVDdXN0b21lckNvdXBvblJlc3VsdExvYWRpbmcoKSxcbiAgICAgIHRoaXMuY291cG9uU2VydmljZS5nZXRVbnN1YnNjcmliZUN1c3RvbWVyQ291cG9uUmVzdWx0TG9hZGluZygpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFtzdWJzY3JpYmluZywgdW5zdWJzY3JpYmluZ10pID0+IHN1YnNjcmliaW5nIHx8IHVuc3Vic2NyaWJpbmcpXG4gICAgKTtcbiAgICB0aGlzLnNvcnRMYWJlbHMgPSB0aGlzLm15Q291cG9uc0NvbXBvbmVudFNlcnZpY2UuZ2V0U29ydExhYmVscygpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zXG4gICAgICAuYWRkKFxuICAgICAgICB0aGlzLmNvdXBvblNlcnZpY2VcbiAgICAgICAgICAuZ2V0U3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb25SZXN1bHRFcnJvcigpXG4gICAgICAgICAgLnN1YnNjcmliZShlcnJvciA9PiB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbkZhaWwoZXJyb3IpO1xuICAgICAgICAgIH0pXG4gICAgICApXG4gICAgICAuYWRkKFxuICAgICAgICB0aGlzLmNvdXBvblNlcnZpY2VcbiAgICAgICAgICAuZ2V0VW5zdWJzY3JpYmVDdXN0b21lckNvdXBvblJlc3VsdEVycm9yKClcbiAgICAgICAgICAuc3Vic2NyaWJlKGVycm9yID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uRmFpbChlcnJvcik7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbkZhaWwoZXJyb3I6IGJvb2xlYW4pIHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHRoaXMuY291cG9uU2VydmljZS5sb2FkQ3VzdG9tZXJDb3Vwb25zKHRoaXMuUEFHRV9TSVpFKTtcbiAgICB9XG4gIH1cblxuICBzb3J0Q2hhbmdlKHNvcnQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc29ydCA9IHNvcnQ7XG5cbiAgICB0aGlzLmNvdXBvblNlcnZpY2UubG9hZEN1c3RvbWVyQ291cG9ucyhcbiAgICAgIHRoaXMuUEFHRV9TSVpFLFxuICAgICAgdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlLFxuICAgICAgdGhpcy5zb3J0TWFwcGluZ1tzb3J0XVxuICAgICk7XG4gIH1cblxuICBwYWdlQ2hhbmdlKHBhZ2U6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuY291cG9uU2VydmljZS5sb2FkQ3VzdG9tZXJDb3Vwb25zKFxuICAgICAgdGhpcy5QQUdFX1NJWkUsXG4gICAgICBwYWdlLFxuICAgICAgdGhpcy5zb3J0TWFwcGluZ1t0aGlzLnNvcnRdXG4gICAgKTtcbiAgfVxuXG4gIG5vdGlmaWNhdGlvbkNoYW5nZSh7XG4gICAgY291cG9uSWQsXG4gICAgbm90aWZpY2F0aW9uLFxuICB9OiB7XG4gICAgY291cG9uSWQ6IHN0cmluZztcbiAgICBub3RpZmljYXRpb246IGJvb2xlYW47XG4gIH0pOiB2b2lkIHtcbiAgICBpZiAobm90aWZpY2F0aW9uKSB7XG4gICAgICB0aGlzLmNvdXBvblNlcnZpY2Uuc3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb24oY291cG9uSWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvdXBvblNlcnZpY2UudW5zdWJzY3JpYmVDdXN0b21lckNvdXBvbihjb3Vwb25JZCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==