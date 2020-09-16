import { Component } from '@angular/core';
import { CustomerCouponService, } from '@spartacus/core';
import { combineLatest, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ICON_TYPE } from '../../misc/icon/icon.model';
import { MyCouponsComponentService } from './my-coupons.component.service';
export class MyCouponsComponent {
    constructor(couponService, myCouponsComponentService) {
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
    ngOnInit() {
        this.couponResult$ = this.couponService
            .getCustomerCoupons(this.PAGE_SIZE)
            .pipe(tap((coupons) => (this.pagination = {
            currentPage: coupons.pagination.page,
            pageSize: coupons.pagination.count,
            totalPages: coupons.pagination.totalPages,
            totalResults: coupons.pagination.totalCount,
            sort: this.sort,
        })));
        this.couponsLoading$ = this.couponService.getCustomerCouponsLoading();
        this.couponSubscriptionLoading$ = combineLatest([
            this.couponService.getSubscribeCustomerCouponResultLoading(),
            this.couponService.getUnsubscribeCustomerCouponResultLoading(),
        ]).pipe(map(([subscribing, unsubscribing]) => subscribing || unsubscribing));
        this.sortLabels = this.myCouponsComponentService.getSortLabels();
        this.subscriptions
            .add(this.couponService
            .getSubscribeCustomerCouponResultError()
            .subscribe((error) => {
            this.subscriptionFail(error);
        }))
            .add(this.couponService
            .getUnsubscribeCustomerCouponResultError()
            .subscribe((error) => {
            this.subscriptionFail(error);
        }));
    }
    subscriptionFail(error) {
        if (error) {
            this.couponService.loadCustomerCoupons(this.PAGE_SIZE);
        }
    }
    sortChange(sort) {
        this.sort = sort;
        this.couponService.loadCustomerCoupons(this.PAGE_SIZE, this.pagination.currentPage, this.sortMapping[sort]);
    }
    pageChange(page) {
        this.couponService.loadCustomerCoupons(this.PAGE_SIZE, page, this.sortMapping[this.sort]);
    }
    notificationChange({ couponId, notification, }) {
        if (notification) {
            this.couponService.subscribeCustomerCoupon(couponId);
        }
        else {
            this.couponService.unsubscribeCustomerCoupon(couponId);
        }
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
MyCouponsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-my-coupons',
                template: "<div class=\"cx-section\">\n  <ng-container *ngIf=\"!(couponsLoading$ | async); else loading\">\n    <ng-container *ngIf=\"couponResult$ | async as couponResult\">\n      <div class=\"cx-my-coupons-header\">\n        <h3>{{ 'myCoupons.myCoupons' | cxTranslate }}</h3>\n      </div>\n\n      <ng-container\n        *ngIf=\"couponResult.pagination.totalCount > 0; else noCoupons\"\n      >\n        <div class=\"cx-my-coupons-sort top row\">\n          <div\n            class=\"cx-my-coupons-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"sortOptions\"\n              [sortLabels]=\"sortLabels | async\"\n              (sortListEvent)=\"sortChange($event)\"\n              [selectedOption]=\"sort\"\n            >\n            </cx-sorting>\n          </div>\n          <div class=\"cx-my-coupons-pagination cx-mycoupon-thead-mobile\">\n            <cx-pagination\n              [pagination]=\"pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n\n        <div class=\"row cx-coupon-deck\">\n          <div\n            *ngFor=\"let coupon of couponResult.coupons\"\n            class=\"col-md-6 cx-coupon-card\"\n          >\n            <cx-coupon-card\n              [coupon]=\"coupon\"\n              [couponSubscriptionLoading$]=\"couponSubscriptionLoading$\"\n              (notificationChanged)=\"notificationChange($event)\"\n            ></cx-coupon-card>\n          </div>\n        </div>\n\n        <div class=\"cx-my-coupons-sort bottom row\">\n          <div\n            class=\"cx-my-coupons-form-group form-group cx-mycoupon-thead-mobile col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"sortOptions\"\n              [sortLabels]=\"sortLabels | async\"\n              (sortListEvent)=\"sortChange($event)\"\n              [selectedOption]=\"sort\"\n              placeholder=\"{{ 'myCoupons.sortByMostRecent' | cxTranslate }}\"\n            >\n            </cx-sorting>\n          </div>\n          <div class=\"cx-my-coupons-pagination\">\n            <cx-pagination\n              [pagination]=\"pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n        <div class=\"cx-my-coupons-notes\">\n          <span>\n            <cx-icon [type]=\"iconTypes.INFO\"></cx-icon>\n            {{ 'myCoupons.notesPreffix' | cxTranslate\n            }}<a [routerLink]=\"['/my-account/notification-preference']\">{{\n              'myCoupons.notesLink' | cxTranslate\n            }}</a\n            >{{ 'myCoupons.notesSuffix' | cxTranslate }}</span\n          >\n        </div>\n      </ng-container>\n    </ng-container>\n\n    <ng-template #noCoupons>\n      <section>\n        <p class=\"cx-section-msg\">\n          {{ 'myCoupons.noCouponsMessage' | cxTranslate }}\n        </p>\n      </section>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"col-md-12 cx-coupon-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </ng-template>\n</div>\n"
            },] }
];
MyCouponsComponent.ctorParameters = () => [
    { type: CustomerCouponService },
    { type: MyCouponsComponentService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktY291cG9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9teWFjY291bnQvbXktY291cG9ucy9teS1jb3Vwb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBRUwscUJBQXFCLEdBRXRCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFNM0UsTUFBTSxPQUFPLGtCQUFrQjtJQTZDN0IsWUFDWSxhQUFvQyxFQUNwQyx5QkFBb0Q7UUFEcEQsa0JBQWEsR0FBYixhQUFhLENBQXVCO1FBQ3BDLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUExQ2hFLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFFZCxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbkMsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGdCQUFXLEdBQUc7WUFDcEIsY0FBYyxFQUFFLGVBQWU7WUFDL0IsZUFBZSxFQUFFLGdCQUFnQjtZQUNqQyxZQUFZLEVBQUUsYUFBYTtZQUMzQixhQUFhLEVBQUUsY0FBYztTQUM5QixDQUFDO1FBQ0YsU0FBSSxHQUFHLGdCQUFnQixDQUFDO1FBRXhCLGdCQUFXLEdBQUc7WUFDWjtnQkFDRSxJQUFJLEVBQUUsZ0JBQWdCO2dCQUN0QixRQUFRLEVBQUUsS0FBSzthQUNoQjtZ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Q0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN0RDthQUFNO1lBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN4RDtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7WUF2SUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixzbkdBQTBDO2FBQzNDOzs7WUFYQyxxQkFBcUI7WUFNZCx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDdXN0b21lckNvdXBvblNlYXJjaFJlc3VsdCxcbiAgQ3VzdG9tZXJDb3Vwb25TZXJ2aWNlLFxuICBQYWdpbmF0aW9uTW9kZWwsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vbWlzYy9pY29uL2ljb24ubW9kZWwnO1xuaW1wb3J0IHsgTXlDb3Vwb25zQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4vbXktY291cG9ucy5jb21wb25lbnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW15LWNvdXBvbnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vbXktY291cG9ucy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE15Q291cG9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY291cG9uUmVzdWx0JDogT2JzZXJ2YWJsZTxDdXN0b21lckNvdXBvblNlYXJjaFJlc3VsdD47XG4gIGNvdXBvbnNMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgY291cG9uU3Vic2NyaXB0aW9uTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFO1xuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBwcml2YXRlIFBBR0VfU0laRSA9IDEwO1xuICBwcml2YXRlIHNvcnRNYXBwaW5nID0ge1xuICAgIGJ5U3RhcnREYXRlQXNjOiAnc3RhcnREYXRlOmFzYycsXG4gICAgYnlTdGFydERhdGVEZXNjOiAnc3RhcnREYXRlOmRlc2MnLFxuICAgIGJ5RW5kRGF0ZUFzYzogJ2VuZERhdGU6YXNjJyxcbiAgICBieUVuZERhdGVEZXNjOiAnZW5kRGF0ZTpkZXNjJyxcbiAgfTtcbiAgc29ydCA9ICdieVN0YXJ0RGF0ZUFzYyc7XG5cbiAgc29ydE9wdGlvbnMgPSBbXG4gICAge1xuICAgICAgY29kZTogJ2J5U3RhcnREYXRlQXNjJyxcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvZGU6ICdieVN0YXJ0RGF0ZURlc2MnLFxuICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgY29kZTogJ2J5RW5kRGF0ZUFzYycsXG4gICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2RlOiAnYnlFbmREYXRlRGVzYycsXG4gICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgfSxcbiAgXTtcblxuICBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uTW9kZWw7XG4gIHNvcnRMYWJlbHM6IE9ic2VydmFibGU8e1xuICAgIGJ5U3RhcnREYXRlQXNjOiBzdHJpbmc7XG4gICAgYnlTdGFydERhdGVEZXNjOiBzdHJpbmc7XG4gICAgYnlFbmREYXRlQXNjOiBzdHJpbmc7XG4gICAgYnlFbmREYXRlRGVzYzogc3RyaW5nO1xuICB9PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY291cG9uU2VydmljZTogQ3VzdG9tZXJDb3Vwb25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBteUNvdXBvbnNDb21wb25lbnRTZXJ2aWNlOiBNeUNvdXBvbnNDb21wb25lbnRTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvdXBvblJlc3VsdCQgPSB0aGlzLmNvdXBvblNlcnZpY2VcbiAgICAgIC5nZXRDdXN0b21lckNvdXBvbnModGhpcy5QQUdFX1NJWkUpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKFxuICAgICAgICAgIChjb3Vwb25zKSA9PlxuICAgICAgICAgICAgKHRoaXMucGFnaW5hdGlvbiA9IHtcbiAgICAgICAgICAgICAgY3VycmVudFBhZ2U6IGNvdXBvbnMucGFnaW5hdGlvbi5wYWdlLFxuICAgICAgICAgICAgICBwYWdlU2l6ZTogY291cG9ucy5wYWdpbmF0aW9uLmNvdW50LFxuICAgICAgICAgICAgICB0b3RhbFBhZ2VzOiBjb3Vwb25zLnBhZ2luYXRpb24udG90YWxQYWdlcyxcbiAgICAgICAgICAgICAgdG90YWxSZXN1bHRzOiBjb3Vwb25zLnBhZ2luYXRpb24udG90YWxDb3VudCxcbiAgICAgICAgICAgICAgc29ydDogdGhpcy5zb3J0LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB0aGlzLmNvdXBvbnNMb2FkaW5nJCA9IHRoaXMuY291cG9uU2VydmljZS5nZXRDdXN0b21lckNvdXBvbnNMb2FkaW5nKCk7XG4gICAgdGhpcy5jb3Vwb25TdWJzY3JpcHRpb25Mb2FkaW5nJCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5jb3Vwb25TZXJ2aWNlLmdldFN1YnNjcmliZUN1c3RvbWVyQ291cG9uUmVzdWx0TG9hZGluZygpLFxuICAgICAgdGhpcy5jb3Vwb25TZXJ2aWNlLmdldFVuc3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb25SZXN1bHRMb2FkaW5nKCksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW3N1YnNjcmliaW5nLCB1bnN1YnNjcmliaW5nXSkgPT4gc3Vic2NyaWJpbmcgfHwgdW5zdWJzY3JpYmluZylcbiAgICApO1xuICAgIHRoaXMuc29ydExhYmVscyA9IHRoaXMubXlDb3Vwb25zQ29tcG9uZW50U2VydmljZS5nZXRTb3J0TGFiZWxzKCk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnNcbiAgICAgIC5hZGQoXG4gICAgICAgIHRoaXMuY291cG9uU2VydmljZVxuICAgICAgICAgIC5nZXRTdWJzY3JpYmVDdXN0b21lckNvdXBvblJlc3VsdEVycm9yKClcbiAgICAgICAgICAuc3Vic2NyaWJlKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25GYWlsKGVycm9yKTtcbiAgICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLmFkZChcbiAgICAgICAgdGhpcy5jb3Vwb25TZXJ2aWNlXG4gICAgICAgICAgLmdldFVuc3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb25SZXN1bHRFcnJvcigpXG4gICAgICAgICAgLnN1YnNjcmliZSgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uRmFpbChlcnJvcik7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbkZhaWwoZXJyb3I6IGJvb2xlYW4pIHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHRoaXMuY291cG9uU2VydmljZS5sb2FkQ3VzdG9tZXJDb3Vwb25zKHRoaXMuUEFHRV9TSVpFKTtcbiAgICB9XG4gIH1cblxuICBzb3J0Q2hhbmdlKHNvcnQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc29ydCA9IHNvcnQ7XG5cbiAgICB0aGlzLmNvdXBvblNlcnZpY2UubG9hZEN1c3RvbWVyQ291cG9ucyhcbiAgICAgIHRoaXMuUEFHRV9TSVpFLFxuICAgICAgdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlLFxuICAgICAgdGhpcy5zb3J0TWFwcGluZ1tzb3J0XVxuICAgICk7XG4gIH1cblxuICBwYWdlQ2hhbmdlKHBhZ2U6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuY291cG9uU2VydmljZS5sb2FkQ3VzdG9tZXJDb3Vwb25zKFxuICAgICAgdGhpcy5QQUdFX1NJWkUsXG4gICAgICBwYWdlLFxuICAgICAgdGhpcy5zb3J0TWFwcGluZ1t0aGlzLnNvcnRdXG4gICAgKTtcbiAgfVxuXG4gIG5vdGlmaWNhdGlvbkNoYW5nZSh7XG4gICAgY291cG9uSWQsXG4gICAgbm90aWZpY2F0aW9uLFxuICB9OiB7XG4gICAgY291cG9uSWQ6IHN0cmluZztcbiAgICBub3RpZmljYXRpb246IGJvb2xlYW47XG4gIH0pOiB2b2lkIHtcbiAgICBpZiAobm90aWZpY2F0aW9uKSB7XG4gICAgICB0aGlzLmNvdXBvblNlcnZpY2Uuc3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb24oY291cG9uSWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvdXBvblNlcnZpY2UudW5zdWJzY3JpYmVDdXN0b21lckNvdXBvbihjb3Vwb25JZCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==