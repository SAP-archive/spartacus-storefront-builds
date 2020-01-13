/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { combineLatest, Subscription } from 'rxjs';
import { CustomerCouponService, } from '@spartacus/core';
import { tap, map } from 'rxjs/operators';
import { ICON_TYPE } from '../../misc/icon/icon.model';
import { MyCouponsComponentService } from './my-coupons.component.service';
export class MyCouponsComponent {
    /**
     * @param {?} couponService
     * @param {?} myCouponsComponentService
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        this.couponService.loadCustomerCoupons(this.PAGE_SIZE);
        this.couponResult$ = this.couponService
            .getCustomerCoupons(this.PAGE_SIZE)
            .pipe(tap((/**
         * @param {?} coupons
         * @return {?}
         */
        coupons => (this.pagination = {
            currentPage: coupons.pagination.page,
            pageSize: coupons.pagination.count,
            totalPages: coupons.pagination.totalPages,
            totalResults: coupons.pagination.totalCount,
            sort: this.sort,
        }))));
        this.couponsLoading$ = this.couponService.getCustomerCouponsLoading();
        this.couponSubscriptionLoading$ = combineLatest([
            this.couponService.getSubscribeCustomerCouponResultLoading(),
            this.couponService.getUnsubscribeCustomerCouponResultLoading(),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([subscribing, unsubscribing]) => subscribing || unsubscribing)));
        this.sortLabels = this.myCouponsComponentService.getSortLabels();
        this.subscriptions
            .add(this.couponService
            .getSubscribeCustomerCouponResultError()
            .subscribe((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            this.subscriptionFail(error);
        })))
            .add(this.couponService
            .getUnsubscribeCustomerCouponResultError()
            .subscribe((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            this.subscriptionFail(error);
        })));
    }
    /**
     * @private
     * @param {?} error
     * @return {?}
     */
    subscriptionFail(error) {
        if (error) {
            this.couponService.loadCustomerCoupons(this.PAGE_SIZE);
        }
    }
    /**
     * @param {?} sort
     * @return {?}
     */
    sortChange(sort) {
        this.sort = sort;
        this.couponService.loadCustomerCoupons(this.PAGE_SIZE, this.pagination.currentPage, this.sortMapping[sort]);
    }
    /**
     * @param {?} page
     * @return {?}
     */
    pageChange(page) {
        this.couponService.loadCustomerCoupons(this.PAGE_SIZE, page, this.sortMapping[this.sort]);
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    notificationChange({ couponId, notification, }) {
        if (notification) {
            this.couponService.subscribeCustomerCoupon(couponId);
        }
        else {
            this.couponService.unsubscribeCustomerCoupon(couponId);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
MyCouponsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-my-coupons',
                template: "<div class=\"cx-section\">\n  <ng-container *ngIf=\"!(couponsLoading$ | async); else loading\">\n    <ng-container *ngIf=\"couponResult$ | async as couponResult\">\n      <div class=\"cx-my-coupons-header\">\n        <h3>{{ 'myCoupons.myCoupons' | cxTranslate }}</h3>\n      </div>\n\n      <ng-container\n        *ngIf=\"couponResult.pagination.totalCount > 0; else noCoupons\"\n      >\n        <div class=\"cx-my-coupons-sort top row\">\n          <div\n            class=\"cx-my-coupons-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"sortOptions\"\n              [sortLabels]=\"sortLabels | async\"\n              (sortListEvent)=\"sortChange($event)\"\n              [selectedOption]=\"sort\"\n            >\n            </cx-sorting>\n          </div>\n          <div class=\"cx-my-coupons-pagination cx-mycoupon-thead-mobile\">\n            <cx-pagination\n              [pagination]=\"pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n\n        <div class=\"row cx-coupon-deck\">\n          <div\n            *ngFor=\"let coupon of couponResult.coupons\"\n            class=\"col-md-6 cx-coupon-card\"\n          >\n            <cx-coupon-card\n              [coupon]=\"coupon\"\n              [couponSubscriptionLoading$]=\"couponSubscriptionLoading$\"\n              (notificationChanged)=\"notificationChange($event)\"\n            ></cx-coupon-card>\n          </div>\n        </div>\n\n        <div class=\"cx-my-coupons-sort bottom row\">\n          <div\n            class=\"cx-my-coupons-form-group form-group cx-mycoupon-thead-mobile col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"sortOptions\"\n              [sortLabels]=\"sortLabels | async\"\n              (sortListEvent)=\"sortChange($event)\"\n              [selectedOption]=\"sort\"\n              placeholder=\"{{ 'myCoupons.sortByMostRecent' | cxTranslate }}\"\n            >\n            </cx-sorting>\n          </div>\n          <div class=\"cx-my-coupons-pagination\">\n            <cx-pagination\n              [pagination]=\"pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n        <div class=\"cx-my-coupons-notes\">\n          <span>\n            <cx-icon [type]=\"iconTypes.INFO\"></cx-icon>\n            {{ 'myCoupons.notesPreffix' | cxTranslate\n            }}<a [routerLink]=\"['/my-account/notification-preference']\">{{\n              'myCoupons.notesLink' | cxTranslate\n            }}</a\n            >{{ 'myCoupons.notesSuffix' | cxTranslate }}</span\n          >\n        </div>\n      </ng-container>\n    </ng-container>\n\n    <ng-template #noCoupons>\n      <section>\n        <p class=\"cx-section-msg\">\n          {{ 'myCoupons.noCouponsMessage' | cxTranslate }}\n        </p>\n      </section>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"col-md-12 cx-coupon-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </ng-template>\n</div>\n"
            }] }
];
/** @nocollapse */
MyCouponsComponent.ctorParameters = () => [
    { type: CustomerCouponService },
    { type: MyCouponsComponentService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktY291cG9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvbXktY291cG9ucy9teS1jb3Vwb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFjLGFBQWEsRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUNMLHFCQUFxQixHQUd0QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBTTNFLE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBNkM3QixZQUNZLGFBQW9DLEVBQ3BDLHlCQUFvRDtRQURwRCxrQkFBYSxHQUFiLGFBQWEsQ0FBdUI7UUFDcEMsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQTFDaEUsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUVkLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVuQyxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsZ0JBQVcsR0FBRztZQUNwQixjQUFjLEVBQUUsZUFBZTtZQUMvQixlQUFlLEVBQUUsZ0JBQWdCO1lBQ2pDLFlBQVksRUFBRSxhQUFhO1lBQzNCLGFBQWEsRUFBRSxjQUFjO1NBQzlCLENBQUM7UUFDRixTQUFJLEdBQUcsZ0JBQWdCLENBQUM7UUFFeEIsZ0JBQVcsR0FBRztZQUNaO2dCQUNFLElBQUksRUFBRSxnQkFBZ0I7Z0JBQ3RCLFFBQVEsRUFBRSxLQUFLO2FBQ2hCO1lBQ0Q7Z0JBQ0Us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QUMsRUFDakIsUUFBUSxFQUNSLFlBQVksR0FJYjtRQUNDLElBQUksWUFBWSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEQ7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLENBQUMseUJBQXlCLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDeEQ7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7O1lBeElGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsc25HQUEwQzthQUMzQzs7OztZQVhDLHFCQUFxQjtZQU1kLHlCQUF5Qjs7OztJQU9oQywyQ0FBc0Q7O0lBQ3RELDZDQUFxQzs7SUFDckMsd0RBQWdEOztJQUVoRCx1Q0FBc0I7Ozs7O0lBRXRCLDJDQUEyQzs7Ozs7SUFFM0MsdUNBQXVCOzs7OztJQUN2Qix5Q0FLRTs7SUFDRixrQ0FBd0I7O0lBRXhCLHlDQWlCRTs7SUFFRix3Q0FBNEI7O0lBQzVCLHdDQUtHOzs7OztJQUdELDJDQUE4Qzs7Ozs7SUFDOUMsdURBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgY29tYmluZUxhdGVzdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBDdXN0b21lckNvdXBvblNlcnZpY2UsXG4gIEN1c3RvbWVyQ291cG9uU2VhcmNoUmVzdWx0LFxuICBQYWdpbmF0aW9uTW9kZWwsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyB0YXAsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uL21pc2MvaWNvbi9pY29uLm1vZGVsJztcbmltcG9ydCB7IE15Q291cG9uc0NvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuL215LWNvdXBvbnMuY29tcG9uZW50LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1teS1jb3Vwb25zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL215LWNvdXBvbnMuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNeUNvdXBvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvdXBvblJlc3VsdCQ6IE9ic2VydmFibGU8Q3VzdG9tZXJDb3Vwb25TZWFyY2hSZXN1bHQ+O1xuICBjb3Vwb25zTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGNvdXBvblN1YnNjcmlwdGlvbkxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbnMgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgcHJpdmF0ZSBQQUdFX1NJWkUgPSAxMDtcbiAgcHJpdmF0ZSBzb3J0TWFwcGluZyA9IHtcbiAgICBieVN0YXJ0RGF0ZUFzYzogJ3N0YXJ0RGF0ZTphc2MnLFxuICAgIGJ5U3RhcnREYXRlRGVzYzogJ3N0YXJ0RGF0ZTpkZXNjJyxcbiAgICBieUVuZERhdGVBc2M6ICdlbmREYXRlOmFzYycsXG4gICAgYnlFbmREYXRlRGVzYzogJ2VuZERhdGU6ZGVzYycsXG4gIH07XG4gIHNvcnQgPSAnYnlTdGFydERhdGVBc2MnO1xuXG4gIHNvcnRPcHRpb25zID0gW1xuICAgIHtcbiAgICAgIGNvZGU6ICdieVN0YXJ0RGF0ZUFzYycsXG4gICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2RlOiAnYnlTdGFydERhdGVEZXNjJyxcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvZGU6ICdieUVuZERhdGVBc2MnLFxuICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgY29kZTogJ2J5RW5kRGF0ZURlc2MnLFxuICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgIH0sXG4gIF07XG5cbiAgcGFnaW5hdGlvbjogUGFnaW5hdGlvbk1vZGVsO1xuICBzb3J0TGFiZWxzOiBPYnNlcnZhYmxlPHtcbiAgICBieVN0YXJ0RGF0ZUFzYzogc3RyaW5nO1xuICAgIGJ5U3RhcnREYXRlRGVzYzogc3RyaW5nO1xuICAgIGJ5RW5kRGF0ZUFzYzogc3RyaW5nO1xuICAgIGJ5RW5kRGF0ZURlc2M6IHN0cmluZztcbiAgfT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvdXBvblNlcnZpY2U6IEN1c3RvbWVyQ291cG9uU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgbXlDb3Vwb25zQ29tcG9uZW50U2VydmljZTogTXlDb3Vwb25zQ29tcG9uZW50U2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jb3Vwb25TZXJ2aWNlLmxvYWRDdXN0b21lckNvdXBvbnModGhpcy5QQUdFX1NJWkUpO1xuICAgIHRoaXMuY291cG9uUmVzdWx0JCA9IHRoaXMuY291cG9uU2VydmljZVxuICAgICAgLmdldEN1c3RvbWVyQ291cG9ucyh0aGlzLlBBR0VfU0laRSlcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoXG4gICAgICAgICAgY291cG9ucyA9PlxuICAgICAgICAgICAgKHRoaXMucGFnaW5hdGlvbiA9IHtcbiAgICAgICAgICAgICAgY3VycmVudFBhZ2U6IGNvdXBvbnMucGFnaW5hdGlvbi5wYWdlLFxuICAgICAgICAgICAgICBwYWdlU2l6ZTogY291cG9ucy5wYWdpbmF0aW9uLmNvdW50LFxuICAgICAgICAgICAgICB0b3RhbFBhZ2VzOiBjb3Vwb25zLnBhZ2luYXRpb24udG90YWxQYWdlcyxcbiAgICAgICAgICAgICAgdG90YWxSZXN1bHRzOiBjb3Vwb25zLnBhZ2luYXRpb24udG90YWxDb3VudCxcbiAgICAgICAgICAgICAgc29ydDogdGhpcy5zb3J0LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB0aGlzLmNvdXBvbnNMb2FkaW5nJCA9IHRoaXMuY291cG9uU2VydmljZS5nZXRDdXN0b21lckNvdXBvbnNMb2FkaW5nKCk7XG4gICAgdGhpcy5jb3Vwb25TdWJzY3JpcHRpb25Mb2FkaW5nJCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5jb3Vwb25TZXJ2aWNlLmdldFN1YnNjcmliZUN1c3RvbWVyQ291cG9uUmVzdWx0TG9hZGluZygpLFxuICAgICAgdGhpcy5jb3Vwb25TZXJ2aWNlLmdldFVuc3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb25SZXN1bHRMb2FkaW5nKCksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW3N1YnNjcmliaW5nLCB1bnN1YnNjcmliaW5nXSkgPT4gc3Vic2NyaWJpbmcgfHwgdW5zdWJzY3JpYmluZylcbiAgICApO1xuICAgIHRoaXMuc29ydExhYmVscyA9IHRoaXMubXlDb3Vwb25zQ29tcG9uZW50U2VydmljZS5nZXRTb3J0TGFiZWxzKCk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnNcbiAgICAgIC5hZGQoXG4gICAgICAgIHRoaXMuY291cG9uU2VydmljZVxuICAgICAgICAgIC5nZXRTdWJzY3JpYmVDdXN0b21lckNvdXBvblJlc3VsdEVycm9yKClcbiAgICAgICAgICAuc3Vic2NyaWJlKGVycm9yID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uRmFpbChlcnJvcik7XG4gICAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5hZGQoXG4gICAgICAgIHRoaXMuY291cG9uU2VydmljZVxuICAgICAgICAgIC5nZXRVbnN1YnNjcmliZUN1c3RvbWVyQ291cG9uUmVzdWx0RXJyb3IoKVxuICAgICAgICAgIC5zdWJzY3JpYmUoZXJyb3IgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25GYWlsKGVycm9yKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uRmFpbChlcnJvcjogYm9vbGVhbikge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgdGhpcy5jb3Vwb25TZXJ2aWNlLmxvYWRDdXN0b21lckNvdXBvbnModGhpcy5QQUdFX1NJWkUpO1xuICAgIH1cbiAgfVxuXG4gIHNvcnRDaGFuZ2Uoc29ydDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zb3J0ID0gc29ydDtcblxuICAgIHRoaXMuY291cG9uU2VydmljZS5sb2FkQ3VzdG9tZXJDb3Vwb25zKFxuICAgICAgdGhpcy5QQUdFX1NJWkUsXG4gICAgICB0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UsXG4gICAgICB0aGlzLnNvcnRNYXBwaW5nW3NvcnRdXG4gICAgKTtcbiAgfVxuXG4gIHBhZ2VDaGFuZ2UocGFnZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jb3Vwb25TZXJ2aWNlLmxvYWRDdXN0b21lckNvdXBvbnMoXG4gICAgICB0aGlzLlBBR0VfU0laRSxcbiAgICAgIHBhZ2UsXG4gICAgICB0aGlzLnNvcnRNYXBwaW5nW3RoaXMuc29ydF1cbiAgICApO1xuICB9XG5cbiAgbm90aWZpY2F0aW9uQ2hhbmdlKHtcbiAgICBjb3Vwb25JZCxcbiAgICBub3RpZmljYXRpb24sXG4gIH06IHtcbiAgICBjb3Vwb25JZDogc3RyaW5nO1xuICAgIG5vdGlmaWNhdGlvbjogYm9vbGVhbjtcbiAgfSk6IHZvaWQge1xuICAgIGlmIChub3RpZmljYXRpb24pIHtcbiAgICAgIHRoaXMuY291cG9uU2VydmljZS5zdWJzY3JpYmVDdXN0b21lckNvdXBvbihjb3Vwb25JZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY291cG9uU2VydmljZS51bnN1YnNjcmliZUN1c3RvbWVyQ291cG9uKGNvdXBvbklkKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19