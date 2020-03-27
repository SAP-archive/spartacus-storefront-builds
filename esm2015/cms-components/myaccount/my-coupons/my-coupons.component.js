import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CustomerCouponSearchResult, CustomerCouponService, PaginationModel, } from '@spartacus/core';
import { combineLatest, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ICON_TYPE } from '../../misc/icon/icon.model';
import { MyCouponsComponentService } from './my-coupons.component.service';
let MyCouponsComponent = class MyCouponsComponent {
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
            .pipe(tap(coupons => (this.pagination = {
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
            .subscribe(error => {
            this.subscriptionFail(error);
        }))
            .add(this.couponService
            .getUnsubscribeCustomerCouponResultError()
            .subscribe(error => {
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
};
MyCouponsComponent.ctorParameters = () => [
    { type: CustomerCouponService },
    { type: MyCouponsComponentService }
];
MyCouponsComponent = __decorate([
    Component({
        selector: 'cx-my-coupons',
        template: "<div class=\"cx-section\">\n  <ng-container *ngIf=\"!(couponsLoading$ | async); else loading\">\n    <ng-container *ngIf=\"couponResult$ | async as couponResult\">\n      <div class=\"cx-my-coupons-header\">\n        <h3>{{ 'myCoupons.myCoupons' | cxTranslate }}</h3>\n      </div>\n\n      <ng-container\n        *ngIf=\"couponResult.pagination.totalCount > 0; else noCoupons\"\n      >\n        <div class=\"cx-my-coupons-sort top row\">\n          <div\n            class=\"cx-my-coupons-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"sortOptions\"\n              [sortLabels]=\"sortLabels | async\"\n              (sortListEvent)=\"sortChange($event)\"\n              [selectedOption]=\"sort\"\n            >\n            </cx-sorting>\n          </div>\n          <div class=\"cx-my-coupons-pagination cx-mycoupon-thead-mobile\">\n            <cx-pagination\n              [pagination]=\"pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n\n        <div class=\"row cx-coupon-deck\">\n          <div\n            *ngFor=\"let coupon of couponResult.coupons\"\n            class=\"col-md-6 cx-coupon-card\"\n          >\n            <cx-coupon-card\n              [coupon]=\"coupon\"\n              [couponSubscriptionLoading$]=\"couponSubscriptionLoading$\"\n              (notificationChanged)=\"notificationChange($event)\"\n            ></cx-coupon-card>\n          </div>\n        </div>\n\n        <div class=\"cx-my-coupons-sort bottom row\">\n          <div\n            class=\"cx-my-coupons-form-group form-group cx-mycoupon-thead-mobile col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"sortOptions\"\n              [sortLabels]=\"sortLabels | async\"\n              (sortListEvent)=\"sortChange($event)\"\n              [selectedOption]=\"sort\"\n              placeholder=\"{{ 'myCoupons.sortByMostRecent' | cxTranslate }}\"\n            >\n            </cx-sorting>\n          </div>\n          <div class=\"cx-my-coupons-pagination\">\n            <cx-pagination\n              [pagination]=\"pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n        <div class=\"cx-my-coupons-notes\">\n          <span>\n            <cx-icon [type]=\"iconTypes.INFO\"></cx-icon>\n            {{ 'myCoupons.notesPreffix' | cxTranslate\n            }}<a [routerLink]=\"['/my-account/notification-preference']\">{{\n              'myCoupons.notesLink' | cxTranslate\n            }}</a\n            >{{ 'myCoupons.notesSuffix' | cxTranslate }}</span\n          >\n        </div>\n      </ng-container>\n    </ng-container>\n\n    <ng-template #noCoupons>\n      <section>\n        <p class=\"cx-section-msg\">\n          {{ 'myCoupons.noCouponsMessage' | cxTranslate }}\n        </p>\n      </section>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"col-md-12 cx-coupon-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </ng-template>\n</div>\n"
    })
], MyCouponsComponent);
export { MyCouponsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktY291cG9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvbXktY291cG9ucy9teS1jb3Vwb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUNMLDBCQUEwQixFQUMxQixxQkFBcUIsRUFDckIsZUFBZSxHQUNoQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBTTNFLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBNkM3QixZQUNZLGFBQW9DLEVBQ3BDLHlCQUFvRDtRQURwRCxrQkFBYSxHQUFiLGFBQWEsQ0FBdUI7UUFDcEMsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQTFDaEUsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUVkLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVuQyxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsZ0JBQVcsR0FBRztZQUNwQixjQUFjLEVBQUUsZUFBZTtZQUMvQixlQUFlLEVBQUUsZ0JBQWdCO1lBQ2pDLFlBQVksRUFBRSxhQUFhO1lBQzNCLGFBQWEsRUFBRSxjQUFjO1NBQzlCLENBQUM7UUFDRixTQUFJLEdBQUcsZ0JBQWdCLENBQUM7UUFFeEIsZ0JBQVcsR0FBRztZQUNaO2dCQUNFLElBQUksRUFBRSxnQkFBZ0I7Z0JBQ3RCLFFB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YUFBYSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3REO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3hEO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUM7Q0FDRixDQUFBOztZQXRGNEIscUJBQXFCO1lBQ1QseUJBQXlCOztBQS9DckQsa0JBQWtCO0lBSjlCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxlQUFlO1FBQ3pCLHNuR0FBMEM7S0FDM0MsQ0FBQztHQUNXLGtCQUFrQixDQW9JOUI7U0FwSVksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ3VzdG9tZXJDb3Vwb25TZWFyY2hSZXN1bHQsXG4gIEN1c3RvbWVyQ291cG9uU2VydmljZSxcbiAgUGFnaW5hdGlvbk1vZGVsLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uL21pc2MvaWNvbi9pY29uLm1vZGVsJztcbmltcG9ydCB7IE15Q291cG9uc0NvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuL215LWNvdXBvbnMuY29tcG9uZW50LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1teS1jb3Vwb25zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL215LWNvdXBvbnMuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNeUNvdXBvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvdXBvblJlc3VsdCQ6IE9ic2VydmFibGU8Q3VzdG9tZXJDb3Vwb25TZWFyY2hSZXN1bHQ+O1xuICBjb3Vwb25zTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGNvdXBvblN1YnNjcmlwdGlvbkxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbnMgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgcHJpdmF0ZSBQQUdFX1NJWkUgPSAxMDtcbiAgcHJpdmF0ZSBzb3J0TWFwcGluZyA9IHtcbiAgICBieVN0YXJ0RGF0ZUFzYzogJ3N0YXJ0RGF0ZTphc2MnLFxuICAgIGJ5U3RhcnREYXRlRGVzYzogJ3N0YXJ0RGF0ZTpkZXNjJyxcbiAgICBieUVuZERhdGVBc2M6ICdlbmREYXRlOmFzYycsXG4gICAgYnlFbmREYXRlRGVzYzogJ2VuZERhdGU6ZGVzYycsXG4gIH07XG4gIHNvcnQgPSAnYnlTdGFydERhdGVBc2MnO1xuXG4gIHNvcnRPcHRpb25zID0gW1xuICAgIHtcbiAgICAgIGNvZGU6ICdieVN0YXJ0RGF0ZUFzYycsXG4gICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2RlOiAnYnlTdGFydERhdGVEZXNjJyxcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvZGU6ICdieUVuZERhdGVBc2MnLFxuICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgY29kZTogJ2J5RW5kRGF0ZURlc2MnLFxuICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgIH0sXG4gIF07XG5cbiAgcGFnaW5hdGlvbjogUGFnaW5hdGlvbk1vZGVsO1xuICBzb3J0TGFiZWxzOiBPYnNlcnZhYmxlPHtcbiAgICBieVN0YXJ0RGF0ZUFzYzogc3RyaW5nO1xuICAgIGJ5U3RhcnREYXRlRGVzYzogc3RyaW5nO1xuICAgIGJ5RW5kRGF0ZUFzYzogc3RyaW5nO1xuICAgIGJ5RW5kRGF0ZURlc2M6IHN0cmluZztcbiAgfT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvdXBvblNlcnZpY2U6IEN1c3RvbWVyQ291cG9uU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgbXlDb3Vwb25zQ29tcG9uZW50U2VydmljZTogTXlDb3Vwb25zQ29tcG9uZW50U2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jb3Vwb25SZXN1bHQkID0gdGhpcy5jb3Vwb25TZXJ2aWNlXG4gICAgICAuZ2V0Q3VzdG9tZXJDb3Vwb25zKHRoaXMuUEFHRV9TSVpFKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcChcbiAgICAgICAgICBjb3Vwb25zID0+XG4gICAgICAgICAgICAodGhpcy5wYWdpbmF0aW9uID0ge1xuICAgICAgICAgICAgICBjdXJyZW50UGFnZTogY291cG9ucy5wYWdpbmF0aW9uLnBhZ2UsXG4gICAgICAgICAgICAgIHBhZ2VTaXplOiBjb3Vwb25zLnBhZ2luYXRpb24uY291bnQsXG4gICAgICAgICAgICAgIHRvdGFsUGFnZXM6IGNvdXBvbnMucGFnaW5hdGlvbi50b3RhbFBhZ2VzLFxuICAgICAgICAgICAgICB0b3RhbFJlc3VsdHM6IGNvdXBvbnMucGFnaW5hdGlvbi50b3RhbENvdW50LFxuICAgICAgICAgICAgICBzb3J0OiB0aGlzLnNvcnQsXG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApO1xuICAgIHRoaXMuY291cG9uc0xvYWRpbmckID0gdGhpcy5jb3Vwb25TZXJ2aWNlLmdldEN1c3RvbWVyQ291cG9uc0xvYWRpbmcoKTtcbiAgICB0aGlzLmNvdXBvblN1YnNjcmlwdGlvbkxvYWRpbmckID0gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmNvdXBvblNlcnZpY2UuZ2V0U3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb25SZXN1bHRMb2FkaW5nKCksXG4gICAgICB0aGlzLmNvdXBvblNlcnZpY2UuZ2V0VW5zdWJzY3JpYmVDdXN0b21lckNvdXBvblJlc3VsdExvYWRpbmcoKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKChbc3Vic2NyaWJpbmcsIHVuc3Vic2NyaWJpbmddKSA9PiBzdWJzY3JpYmluZyB8fCB1bnN1YnNjcmliaW5nKVxuICAgICk7XG4gICAgdGhpcy5zb3J0TGFiZWxzID0gdGhpcy5teUNvdXBvbnNDb21wb25lbnRTZXJ2aWNlLmdldFNvcnRMYWJlbHMoKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uc1xuICAgICAgLmFkZChcbiAgICAgICAgdGhpcy5jb3Vwb25TZXJ2aWNlXG4gICAgICAgICAgLmdldFN1YnNjcmliZUN1c3RvbWVyQ291cG9uUmVzdWx0RXJyb3IoKVxuICAgICAgICAgIC5zdWJzY3JpYmUoZXJyb3IgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25GYWlsKGVycm9yKTtcbiAgICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLmFkZChcbiAgICAgICAgdGhpcy5jb3Vwb25TZXJ2aWNlXG4gICAgICAgICAgLmdldFVuc3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb25SZXN1bHRFcnJvcigpXG4gICAgICAgICAgLnN1YnNjcmliZShlcnJvciA9PiB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbkZhaWwoZXJyb3IpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25GYWlsKGVycm9yOiBib29sZWFuKSB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICB0aGlzLmNvdXBvblNlcnZpY2UubG9hZEN1c3RvbWVyQ291cG9ucyh0aGlzLlBBR0VfU0laRSk7XG4gICAgfVxuICB9XG5cbiAgc29ydENoYW5nZShzb3J0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNvcnQgPSBzb3J0O1xuXG4gICAgdGhpcy5jb3Vwb25TZXJ2aWNlLmxvYWRDdXN0b21lckNvdXBvbnMoXG4gICAgICB0aGlzLlBBR0VfU0laRSxcbiAgICAgIHRoaXMucGFnaW5hdGlvbi5jdXJyZW50UGFnZSxcbiAgICAgIHRoaXMuc29ydE1hcHBpbmdbc29ydF1cbiAgICApO1xuICB9XG5cbiAgcGFnZUNoYW5nZShwYWdlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmNvdXBvblNlcnZpY2UubG9hZEN1c3RvbWVyQ291cG9ucyhcbiAgICAgIHRoaXMuUEFHRV9TSVpFLFxuICAgICAgcGFnZSxcbiAgICAgIHRoaXMuc29ydE1hcHBpbmdbdGhpcy5zb3J0XVxuICAgICk7XG4gIH1cblxuICBub3RpZmljYXRpb25DaGFuZ2Uoe1xuICAgIGNvdXBvbklkLFxuICAgIG5vdGlmaWNhdGlvbixcbiAgfToge1xuICAgIGNvdXBvbklkOiBzdHJpbmc7XG4gICAgbm90aWZpY2F0aW9uOiBib29sZWFuO1xuICB9KTogdm9pZCB7XG4gICAgaWYgKG5vdGlmaWNhdGlvbikge1xuICAgICAgdGhpcy5jb3Vwb25TZXJ2aWNlLnN1YnNjcmliZUN1c3RvbWVyQ291cG9uKGNvdXBvbklkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb3Vwb25TZXJ2aWNlLnVuc3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb24oY291cG9uSWQpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=