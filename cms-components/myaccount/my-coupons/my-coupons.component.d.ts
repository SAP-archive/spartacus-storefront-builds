import { OnDestroy, OnInit } from '@angular/core';
import { CustomerCouponSearchResult, CustomerCouponService, PaginationModel } from '@spartacus/core';
import { Observable } from 'rxjs';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MyCouponsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MyCouponsComponent, "cx-my-coupons", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktY291cG9ucy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibXktY291cG9ucy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ3VzdG9tZXJDb3Vwb25TZWFyY2hSZXN1bHQsIEN1c3RvbWVyQ291cG9uU2VydmljZSwgUGFnaW5hdGlvbk1vZGVsIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uL21pc2MvaWNvbi9pY29uLm1vZGVsJztcbmltcG9ydCB7IE15Q291cG9uc0NvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuL215LWNvdXBvbnMuY29tcG9uZW50LnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTXlDb3Vwb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByb3RlY3RlZCBjb3Vwb25TZXJ2aWNlOiBDdXN0b21lckNvdXBvblNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIG15Q291cG9uc0NvbXBvbmVudFNlcnZpY2U6IE15Q291cG9uc0NvbXBvbmVudFNlcnZpY2U7XG4gICAgY291cG9uUmVzdWx0JDogT2JzZXJ2YWJsZTxDdXN0b21lckNvdXBvblNlYXJjaFJlc3VsdD47XG4gICAgY291cG9uc0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIGNvdXBvblN1YnNjcmlwdGlvbkxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIGljb25UeXBlczogdHlwZW9mIElDT05fVFlQRTtcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbnM7XG4gICAgcHJpdmF0ZSBQQUdFX1NJWkU7XG4gICAgcHJpdmF0ZSBzb3J0TWFwcGluZztcbiAgICBzb3J0OiBzdHJpbmc7XG4gICAgc29ydE9wdGlvbnM6IHtcbiAgICAgICAgY29kZTogc3RyaW5nO1xuICAgICAgICBzZWxlY3RlZDogYm9vbGVhbjtcbiAgICB9W107XG4gICAgcGFnaW5hdGlvbjogUGFnaW5hdGlvbk1vZGVsO1xuICAgIHNvcnRMYWJlbHM6IE9ic2VydmFibGU8e1xuICAgICAgICBieVN0YXJ0RGF0ZUFzYzogc3RyaW5nO1xuICAgICAgICBieVN0YXJ0RGF0ZURlc2M6IHN0cmluZztcbiAgICAgICAgYnlFbmREYXRlQXNjOiBzdHJpbmc7XG4gICAgICAgIGJ5RW5kRGF0ZURlc2M6IHN0cmluZztcbiAgICB9PjtcbiAgICBjb25zdHJ1Y3Rvcihjb3Vwb25TZXJ2aWNlOiBDdXN0b21lckNvdXBvblNlcnZpY2UsIG15Q291cG9uc0NvbXBvbmVudFNlcnZpY2U6IE15Q291cG9uc0NvbXBvbmVudFNlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb25GYWlsO1xuICAgIHNvcnRDaGFuZ2Uoc29ydDogc3RyaW5nKTogdm9pZDtcbiAgICBwYWdlQ2hhbmdlKHBhZ2U6IG51bWJlcik6IHZvaWQ7XG4gICAgbm90aWZpY2F0aW9uQ2hhbmdlKHsgY291cG9uSWQsIG5vdGlmaWNhdGlvbiwgfToge1xuICAgICAgICBjb3Vwb25JZDogc3RyaW5nO1xuICAgICAgICBub3RpZmljYXRpb246IGJvb2xlYW47XG4gICAgfSk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==