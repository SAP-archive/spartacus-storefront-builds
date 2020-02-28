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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MyCouponsComponentService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktY291cG9ucy5jb21wb25lbnQuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJteS1jb3Vwb25zLmNvbXBvbmVudC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3VzdG9tZXJDb3Vwb24sIFJvdXRpbmdTZXJ2aWNlLCBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTXlDb3Vwb25zQ29tcG9uZW50U2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZTtcbiAgICBzb3J0TGFiZWxzOiBPYnNlcnZhYmxlPHtcbiAgICAgICAgYnlTdGFydERhdGVBc2M6IHN0cmluZztcbiAgICAgICAgYnlTdGFydERhdGVEZXNjOiBzdHJpbmc7XG4gICAgICAgIGJ5RW5kRGF0ZUFzYzogc3RyaW5nO1xuICAgICAgICBieUVuZERhdGVEZXNjOiBzdHJpbmc7XG4gICAgfT47XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IFJFTEVWQU5DRSA9IFwiOnJlbGV2YW5jZVwiO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBDVVNUT01FUl9DT1VQT05fQ09ERSA9IFwiOmN1c3RvbWVyQ291cG9uQ29kZTpcIjtcbiAgICBjb25zdHJ1Y3Rvcihyb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UpO1xuICAgIGxhdW5jaFNlYXJjaFBhZ2UoY291cG9uOiBDdXN0b21lckNvdXBvbik6IHZvaWQ7XG4gICAgcHJpdmF0ZSBidWlsZFNlYXJjaFBhcmFtO1xuICAgIGdldFNvcnRMYWJlbHMoKTogT2JzZXJ2YWJsZTx7XG4gICAgICAgIGJ5U3RhcnREYXRlQXNjOiBzdHJpbmc7XG4gICAgICAgIGJ5U3RhcnREYXRlRGVzYzogc3RyaW5nO1xuICAgICAgICBieUVuZERhdGVBc2M6IHN0cmluZztcbiAgICAgICAgYnlFbmREYXRlRGVzYzogc3RyaW5nO1xuICAgIH0+O1xufVxuIl19