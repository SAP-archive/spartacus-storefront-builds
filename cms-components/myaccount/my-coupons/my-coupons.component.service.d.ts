import { CustomerCoupon, RoutingService, TranslationService } from '@spartacus/core';
import { Observable } from 'rxjs/internal/Observable';
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
}
