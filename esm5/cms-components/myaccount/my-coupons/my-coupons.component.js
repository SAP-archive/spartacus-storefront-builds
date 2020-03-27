import { __decorate, __read } from "tslib";
import { Component } from '@angular/core';
import { CustomerCouponSearchResult, CustomerCouponService, PaginationModel, } from '@spartacus/core';
import { combineLatest, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
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
    MyCouponsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.couponResult$ = this.couponService
            .getCustomerCoupons(this.PAGE_SIZE)
            .pipe(tap(function (coupons) {
            return (_this.pagination = {
                currentPage: coupons.pagination.page,
                pageSize: coupons.pagination.count,
                totalPages: coupons.pagination.totalPages,
                totalResults: coupons.pagination.totalCount,
                sort: _this.sort,
            });
        }));
        this.couponsLoading$ = this.couponService.getCustomerCouponsLoading();
        this.couponSubscriptionLoading$ = combineLatest([
            this.couponService.getSubscribeCustomerCouponResultLoading(),
            this.couponService.getUnsubscribeCustomerCouponResultLoading(),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 2), subscribing = _b[0], unsubscribing = _b[1];
            return subscribing || unsubscribing;
        }));
        this.sortLabels = this.myCouponsComponentService.getSortLabels();
        this.subscriptions
            .add(this.couponService
            .getSubscribeCustomerCouponResultError()
            .subscribe(function (error) {
            _this.subscriptionFail(error);
        }))
            .add(this.couponService
            .getUnsubscribeCustomerCouponResultError()
            .subscribe(function (error) {
            _this.subscriptionFail(error);
        }));
    };
    MyCouponsComponent.prototype.subscriptionFail = function (error) {
        if (error) {
            this.couponService.loadCustomerCoupons(this.PAGE_SIZE);
        }
    };
    MyCouponsComponent.prototype.sortChange = function (sort) {
        this.sort = sort;
        this.couponService.loadCustomerCoupons(this.PAGE_SIZE, this.pagination.currentPage, this.sortMapping[sort]);
    };
    MyCouponsComponent.prototype.pageChange = function (page) {
        this.couponService.loadCustomerCoupons(this.PAGE_SIZE, page, this.sortMapping[this.sort]);
    };
    MyCouponsComponent.prototype.notificationChange = function (_a) {
        var couponId = _a.couponId, notification = _a.notification;
        if (notification) {
            this.couponService.subscribeCustomerCoupon(couponId);
        }
        else {
            this.couponService.unsubscribeCustomerCoupon(couponId);
        }
    };
    MyCouponsComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    MyCouponsComponent.ctorParameters = function () { return [
        { type: CustomerCouponService },
        { type: MyCouponsComponentService }
    ]; };
    MyCouponsComponent = __decorate([
        Component({
            selector: 'cx-my-coupons',
            template: "<div class=\"cx-section\">\n  <ng-container *ngIf=\"!(couponsLoading$ | async); else loading\">\n    <ng-container *ngIf=\"couponResult$ | async as couponResult\">\n      <div class=\"cx-my-coupons-header\">\n        <h3>{{ 'myCoupons.myCoupons' | cxTranslate }}</h3>\n      </div>\n\n      <ng-container\n        *ngIf=\"couponResult.pagination.totalCount > 0; else noCoupons\"\n      >\n        <div class=\"cx-my-coupons-sort top row\">\n          <div\n            class=\"cx-my-coupons-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"sortOptions\"\n              [sortLabels]=\"sortLabels | async\"\n              (sortListEvent)=\"sortChange($event)\"\n              [selectedOption]=\"sort\"\n            >\n            </cx-sorting>\n          </div>\n          <div class=\"cx-my-coupons-pagination cx-mycoupon-thead-mobile\">\n            <cx-pagination\n              [pagination]=\"pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n\n        <div class=\"row cx-coupon-deck\">\n          <div\n            *ngFor=\"let coupon of couponResult.coupons\"\n            class=\"col-md-6 cx-coupon-card\"\n          >\n            <cx-coupon-card\n              [coupon]=\"coupon\"\n              [couponSubscriptionLoading$]=\"couponSubscriptionLoading$\"\n              (notificationChanged)=\"notificationChange($event)\"\n            ></cx-coupon-card>\n          </div>\n        </div>\n\n        <div class=\"cx-my-coupons-sort bottom row\">\n          <div\n            class=\"cx-my-coupons-form-group form-group cx-mycoupon-thead-mobile col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"sortOptions\"\n              [sortLabels]=\"sortLabels | async\"\n              (sortListEvent)=\"sortChange($event)\"\n              [selectedOption]=\"sort\"\n              placeholder=\"{{ 'myCoupons.sortByMostRecent' | cxTranslate }}\"\n            >\n            </cx-sorting>\n          </div>\n          <div class=\"cx-my-coupons-pagination\">\n            <cx-pagination\n              [pagination]=\"pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n        <div class=\"cx-my-coupons-notes\">\n          <span>\n            <cx-icon [type]=\"iconTypes.INFO\"></cx-icon>\n            {{ 'myCoupons.notesPreffix' | cxTranslate\n            }}<a [routerLink]=\"['/my-account/notification-preference']\">{{\n              'myCoupons.notesLink' | cxTranslate\n            }}</a\n            >{{ 'myCoupons.notesSuffix' | cxTranslate }}</span\n          >\n        </div>\n      </ng-container>\n    </ng-container>\n\n    <ng-template #noCoupons>\n      <section>\n        <p class=\"cx-section-msg\">\n          {{ 'myCoupons.noCouponsMessage' | cxTranslate }}\n        </p>\n      </section>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"col-md-12 cx-coupon-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </ng-template>\n</div>\n"
        })
    ], MyCouponsComponent);
    return MyCouponsComponent;
}());
export { MyCouponsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktY291cG9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvbXktY291cG9ucy9teS1jb3Vwb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUNMLDBCQUEwQixFQUMxQixxQkFBcUIsRUFDckIsZUFBZSxHQUNoQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBTTNFO0lBNkNFLDRCQUNZLGFBQW9DLEVBQ3BDLHlCQUFvRDtRQURwRCxrQkFBYSxHQUFiLGFBQWEsQ0FBdUI7UUFDcEMsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQTFDaEUsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUVkLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVuQyxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsZ0JBQVcsR0FBRztZQUNwQixjQUFjLEVBQUUsZUFBZTtZQUMvQixlQUFlLEVBQUUsZ0JBQWdCO1lBQ2pDLFlBQVksRUFBRSxhQUFhO1lBQzNCLGFBQWEsRUFBRSxjQUFjO1NBQzlCLENBQUM7UUFDRixTQUFJLEdBQUcsZ0JBQWdCLENBQUM7UUFFeEIsZ0JBQVcsR0FBRztZQUNaO2dCQUNFLElBQUksRUFBRSxnQkFBZ0I7Z0JBQ3RCLFFBQVEsRUFBRSxLQUFLO2FBQ2hCO1lBQ0Q7Z0JBQ0Us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Q1IsOEJBQVk7UUFLWixJQUFJLFlBQVksRUFBRTtZQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3REO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3hEO0lBQ0gsQ0FBQztJQUVELHdDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUM7O2dCQXJGMEIscUJBQXFCO2dCQUNULHlCQUF5Qjs7SUEvQ3JELGtCQUFrQjtRQUo5QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixzbkdBQTBDO1NBQzNDLENBQUM7T0FDVyxrQkFBa0IsQ0FvSTlCO0lBQUQseUJBQUM7Q0FBQSxBQXBJRCxJQW9JQztTQXBJWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDdXN0b21lckNvdXBvblNlYXJjaFJlc3VsdCxcbiAgQ3VzdG9tZXJDb3Vwb25TZXJ2aWNlLFxuICBQYWdpbmF0aW9uTW9kZWwsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vbWlzYy9pY29uL2ljb24ubW9kZWwnO1xuaW1wb3J0IHsgTXlDb3Vwb25zQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4vbXktY291cG9ucy5jb21wb25lbnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW15LWNvdXBvbnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vbXktY291cG9ucy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE15Q291cG9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY291cG9uUmVzdWx0JDogT2JzZXJ2YWJsZTxDdXN0b21lckNvdXBvblNlYXJjaFJlc3VsdD47XG4gIGNvdXBvbnNMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgY291cG9uU3Vic2NyaXB0aW9uTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFO1xuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBwcml2YXRlIFBBR0VfU0laRSA9IDEwO1xuICBwcml2YXRlIHNvcnRNYXBwaW5nID0ge1xuICAgIGJ5U3RhcnREYXRlQXNjOiAnc3RhcnREYXRlOmFzYycsXG4gICAgYnlTdGFydERhdGVEZXNjOiAnc3RhcnREYXRlOmRlc2MnLFxuICAgIGJ5RW5kRGF0ZUFzYzogJ2VuZERhdGU6YXNjJyxcbiAgICBieUVuZERhdGVEZXNjOiAnZW5kRGF0ZTpkZXNjJyxcbiAgfTtcbiAgc29ydCA9ICdieVN0YXJ0RGF0ZUFzYyc7XG5cbiAgc29ydE9wdGlvbnMgPSBbXG4gICAge1xuICAgICAgY29kZTogJ2J5U3RhcnREYXRlQXNjJyxcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvZGU6ICdieVN0YXJ0RGF0ZURlc2MnLFxuICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgY29kZTogJ2J5RW5kRGF0ZUFzYycsXG4gICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2RlOiAnYnlFbmREYXRlRGVzYycsXG4gICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgfSxcbiAgXTtcblxuICBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uTW9kZWw7XG4gIHNvcnRMYWJlbHM6IE9ic2VydmFibGU8e1xuICAgIGJ5U3RhcnREYXRlQXNjOiBzdHJpbmc7XG4gICAgYnlTdGFydERhdGVEZXNjOiBzdHJpbmc7XG4gICAgYnlFbmREYXRlQXNjOiBzdHJpbmc7XG4gICAgYnlFbmREYXRlRGVzYzogc3RyaW5nO1xuICB9PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY291cG9uU2VydmljZTogQ3VzdG9tZXJDb3Vwb25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBteUNvdXBvbnNDb21wb25lbnRTZXJ2aWNlOiBNeUNvdXBvbnNDb21wb25lbnRTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvdXBvblJlc3VsdCQgPSB0aGlzLmNvdXBvblNlcnZpY2VcbiAgICAgIC5nZXRDdXN0b21lckNvdXBvbnModGhpcy5QQUdFX1NJWkUpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKFxuICAgICAgICAgIGNvdXBvbnMgPT5cbiAgICAgICAgICAgICh0aGlzLnBhZ2luYXRpb24gPSB7XG4gICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiBjb3Vwb25zLnBhZ2luYXRpb24ucGFnZSxcbiAgICAgICAgICAgICAgcGFnZVNpemU6IGNvdXBvbnMucGFnaW5hdGlvbi5jb3VudCxcbiAgICAgICAgICAgICAgdG90YWxQYWdlczogY291cG9ucy5wYWdpbmF0aW9uLnRvdGFsUGFnZXMsXG4gICAgICAgICAgICAgIHRvdGFsUmVzdWx0czogY291cG9ucy5wYWdpbmF0aW9uLnRvdGFsQ291bnQsXG4gICAgICAgICAgICAgIHNvcnQ6IHRoaXMuc29ydCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgdGhpcy5jb3Vwb25zTG9hZGluZyQgPSB0aGlzLmNvdXBvblNlcnZpY2UuZ2V0Q3VzdG9tZXJDb3Vwb25zTG9hZGluZygpO1xuICAgIHRoaXMuY291cG9uU3Vic2NyaXB0aW9uTG9hZGluZyQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuY291cG9uU2VydmljZS5nZXRTdWJzY3JpYmVDdXN0b21lckNvdXBvblJlc3VsdExvYWRpbmcoKSxcbiAgICAgIHRoaXMuY291cG9uU2VydmljZS5nZXRVbnN1YnNjcmliZUN1c3RvbWVyQ291cG9uUmVzdWx0TG9hZGluZygpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFtzdWJzY3JpYmluZywgdW5zdWJzY3JpYmluZ10pID0+IHN1YnNjcmliaW5nIHx8IHVuc3Vic2NyaWJpbmcpXG4gICAgKTtcbiAgICB0aGlzLnNvcnRMYWJlbHMgPSB0aGlzLm15Q291cG9uc0NvbXBvbmVudFNlcnZpY2UuZ2V0U29ydExhYmVscygpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zXG4gICAgICAuYWRkKFxuICAgICAgICB0aGlzLmNvdXBvblNlcnZpY2VcbiAgICAgICAgICAuZ2V0U3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb25SZXN1bHRFcnJvcigpXG4gICAgICAgICAgLnN1YnNjcmliZShlcnJvciA9PiB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbkZhaWwoZXJyb3IpO1xuICAgICAgICAgIH0pXG4gICAgICApXG4gICAgICAuYWRkKFxuICAgICAgICB0aGlzLmNvdXBvblNlcnZpY2VcbiAgICAgICAgICAuZ2V0VW5zdWJzY3JpYmVDdXN0b21lckNvdXBvblJlc3VsdEVycm9yKClcbiAgICAgICAgICAuc3Vic2NyaWJlKGVycm9yID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uRmFpbChlcnJvcik7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbkZhaWwoZXJyb3I6IGJvb2xlYW4pIHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHRoaXMuY291cG9uU2VydmljZS5sb2FkQ3VzdG9tZXJDb3Vwb25zKHRoaXMuUEFHRV9TSVpFKTtcbiAgICB9XG4gIH1cblxuICBzb3J0Q2hhbmdlKHNvcnQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc29ydCA9IHNvcnQ7XG5cbiAgICB0aGlzLmNvdXBvblNlcnZpY2UubG9hZEN1c3RvbWVyQ291cG9ucyhcbiAgICAgIHRoaXMuUEFHRV9TSVpFLFxuICAgICAgdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlLFxuICAgICAgdGhpcy5zb3J0TWFwcGluZ1tzb3J0XVxuICAgICk7XG4gIH1cblxuICBwYWdlQ2hhbmdlKHBhZ2U6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuY291cG9uU2VydmljZS5sb2FkQ3VzdG9tZXJDb3Vwb25zKFxuICAgICAgdGhpcy5QQUdFX1NJWkUsXG4gICAgICBwYWdlLFxuICAgICAgdGhpcy5zb3J0TWFwcGluZ1t0aGlzLnNvcnRdXG4gICAgKTtcbiAgfVxuXG4gIG5vdGlmaWNhdGlvbkNoYW5nZSh7XG4gICAgY291cG9uSWQsXG4gICAgbm90aWZpY2F0aW9uLFxuICB9OiB7XG4gICAgY291cG9uSWQ6IHN0cmluZztcbiAgICBub3RpZmljYXRpb246IGJvb2xlYW47XG4gIH0pOiB2b2lkIHtcbiAgICBpZiAobm90aWZpY2F0aW9uKSB7XG4gICAgICB0aGlzLmNvdXBvblNlcnZpY2Uuc3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb24oY291cG9uSWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvdXBvblNlcnZpY2UudW5zdWJzY3JpYmVDdXN0b21lckNvdXBvbihjb3Vwb25JZCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==