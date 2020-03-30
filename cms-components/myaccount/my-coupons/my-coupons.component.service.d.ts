import { CustomerCoupon, RoutingService, TranslationService } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class MyCouponsComponentService {
    protected routingService: RoutingService;
    protected translation: TranslationService;
    sortLabels: Observable<{
        byStartDateAsc: string;
        byStartDateDesc: string;
        byEndDateAsc: string;
        byEndDateDesc: string;
    }>;
    protected readonly RELEVANCE = ":relevance";
    protected readonly CUSTOMER_COUPON_CODE = ":customerCouponCode:";
    constructor(routingService: RoutingService, translation: TranslationService);
    launchSearchPage(coupon: CustomerCoupon): void;
    private buildSearchParam;
    getSortLabels(): Observable<{
        byStartDateAsc: string;
        byStartDateDesc: string;
        byEndDateAsc: string;
        byEndDateDesc: string;
    }>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MyCouponsComponentService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktY291cG9ucy5jb21wb25lbnQuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJteS1jb3Vwb25zLmNvbXBvbmVudC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDdXN0b21lckNvdXBvbiwgUm91dGluZ1NlcnZpY2UsIFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBNeUNvdXBvbnNDb21wb25lbnRTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlO1xuICAgIHNvcnRMYWJlbHM6IE9ic2VydmFibGU8e1xuICAgICAgICBieVN0YXJ0RGF0ZUFzYzogc3RyaW5nO1xuICAgICAgICBieVN0YXJ0RGF0ZURlc2M6IHN0cmluZztcbiAgICAgICAgYnlFbmREYXRlQXNjOiBzdHJpbmc7XG4gICAgICAgIGJ5RW5kRGF0ZURlc2M6IHN0cmluZztcbiAgICB9PjtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgUkVMRVZBTkNFID0gXCI6cmVsZXZhbmNlXCI7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IENVU1RPTUVSX0NPVVBPTl9DT0RFID0gXCI6Y3VzdG9tZXJDb3Vwb25Db2RlOlwiO1xuICAgIGNvbnN0cnVjdG9yKHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSwgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZSk7XG4gICAgbGF1bmNoU2VhcmNoUGFnZShjb3Vwb246IEN1c3RvbWVyQ291cG9uKTogdm9pZDtcbiAgICBwcml2YXRlIGJ1aWxkU2VhcmNoUGFyYW07XG4gICAgZ2V0U29ydExhYmVscygpOiBPYnNlcnZhYmxlPHtcbiAgICAgICAgYnlTdGFydERhdGVBc2M6IHN0cmluZztcbiAgICAgICAgYnlTdGFydERhdGVEZXNjOiBzdHJpbmc7XG4gICAgICAgIGJ5RW5kRGF0ZUFzYzogc3RyaW5nO1xuICAgICAgICBieUVuZERhdGVEZXNjOiBzdHJpbmc7XG4gICAgfT47XG59XG4iXX0=