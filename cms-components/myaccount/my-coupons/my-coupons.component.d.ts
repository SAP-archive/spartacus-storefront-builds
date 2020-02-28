import { OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerCouponService, CustomerCouponSearchResult, PaginationModel } from '@spartacus/core';
import { ICON_TYPE } from '../../misc/icon/icon.model';
import { MyCouponsComponentService } from './my-coupons.component.service';
import * as ɵngcc0 from '@angular/core';
export declare class MyCouponsComponent implements OnInit, OnDestroy {
    protected couponService: CustomerCouponService;
    protected myCouponsComponentService: MyCouponsComponentService;
    couponResult$: Observable<CustomerCouponSearchResult>;
    couponsLoading$: Observable<boolean>;
    couponSubscriptionLoading$: Observable<boolean>;
    iconTypes: typeof ICON_TYPE;
    private subscriptions;
    private PAGE_SIZE;
    private sortMapping;
    sort: string;
    sortOptions: {
        code: string;
        selected: boolean;
    }[];
    pagination: PaginationModel;
    sortLabels: Observable<{
        byStartDateAsc: string;
        byStartDateDesc: string;
        byEndDateAsc: string;
        byEndDateDesc: string;
    }>;
    constructor(couponService: CustomerCouponService, myCouponsComponentService: MyCouponsComponentService);
    ngOnInit(): void;
    private subscriptionFail;
    sortChange(sort: string): void;
    pageChange(page: number): void;
    notificationChange({ couponId, notification, }: {
        couponId: string;
        notification: boolean;
    }): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MyCouponsComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MyCouponsComponent, "cx-my-coupons", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktY291cG9ucy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibXktY291cG9ucy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQ0E7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEN1c3RvbWVyQ291cG9uU2VydmljZSwgQ3VzdG9tZXJDb3Vwb25TZWFyY2hSZXN1bHQsIFBhZ2luYXRpb25Nb2RlbCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi9taXNjL2ljb24vaWNvbi5tb2RlbCc7XG5pbXBvcnQgeyBNeUNvdXBvbnNDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi9teS1jb3Vwb25zLmNvbXBvbmVudC5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE15Q291cG9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcm90ZWN0ZWQgY291cG9uU2VydmljZTogQ3VzdG9tZXJDb3Vwb25TZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBteUNvdXBvbnNDb21wb25lbnRTZXJ2aWNlOiBNeUNvdXBvbnNDb21wb25lbnRTZXJ2aWNlO1xuICAgIGNvdXBvblJlc3VsdCQ6IE9ic2VydmFibGU8Q3VzdG9tZXJDb3Vwb25TZWFyY2hSZXN1bHQ+O1xuICAgIGNvdXBvbnNMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBjb3Vwb25TdWJzY3JpcHRpb25Mb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBpY29uVHlwZXM6IHR5cGVvZiBJQ09OX1RZUEU7XG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zO1xuICAgIHByaXZhdGUgUEFHRV9TSVpFO1xuICAgIHByaXZhdGUgc29ydE1hcHBpbmc7XG4gICAgc29ydDogc3RyaW5nO1xuICAgIHNvcnRPcHRpb25zOiB7XG4gICAgICAgIGNvZGU6IHN0cmluZztcbiAgICAgICAgc2VsZWN0ZWQ6IGJvb2xlYW47XG4gICAgfVtdO1xuICAgIHBhZ2luYXRpb246IFBhZ2luYXRpb25Nb2RlbDtcbiAgICBzb3J0TGFiZWxzOiBPYnNlcnZhYmxlPHtcbiAgICAgICAgYnlTdGFydERhdGVBc2M6IHN0cmluZztcbiAgICAgICAgYnlTdGFydERhdGVEZXNjOiBzdHJpbmc7XG4gICAgICAgIGJ5RW5kRGF0ZUFzYzogc3RyaW5nO1xuICAgICAgICBieUVuZERhdGVEZXNjOiBzdHJpbmc7XG4gICAgfT47XG4gICAgY29uc3RydWN0b3IoY291cG9uU2VydmljZTogQ3VzdG9tZXJDb3Vwb25TZXJ2aWNlLCBteUNvdXBvbnNDb21wb25lbnRTZXJ2aWNlOiBNeUNvdXBvbnNDb21wb25lbnRTZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uRmFpbDtcbiAgICBzb3J0Q2hhbmdlKHNvcnQ6IHN0cmluZyk6IHZvaWQ7XG4gICAgcGFnZUNoYW5nZShwYWdlOiBudW1iZXIpOiB2b2lkO1xuICAgIG5vdGlmaWNhdGlvbkNoYW5nZSh7IGNvdXBvbklkLCBub3RpZmljYXRpb24sIH06IHtcbiAgICAgICAgY291cG9uSWQ6IHN0cmluZztcbiAgICAgICAgbm90aWZpY2F0aW9uOiBib29sZWFuO1xuICAgIH0pOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=