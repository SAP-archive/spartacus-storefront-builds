import { OnInit } from '@angular/core';
import { Consignment, Order, OrderEntry, PromotionLocation, PromotionResult } from '@spartacus/core';
import { Observable } from 'rxjs';
import { PromotionService } from '../../../../../shared/services/promotion/promotion.service';
import { OrderDetailsService } from '../order-details.service';
import * as ɵngcc0 from '@angular/core';
export declare class OrderDetailItemsComponent implements OnInit {
    private orderDetailsService;
    protected promotionService?: PromotionService;
    constructor(orderDetailsService: OrderDetailsService, promotionService: PromotionService);
    /**
     * @deprecated Since 1.5
     * Use promotionService instead of the promotion inputs.
     * Remove issue: #5670
     */
    constructor(orderDetailsService: OrderDetailsService);
    promotionLocation: PromotionLocation;
    order$: Observable<Order>;
    orderPromotions$: Observable<PromotionResult[]>;
    others$: Observable<Consignment[]>;
    completed$: Observable<Consignment[]>;
    cancel$: Observable<Consignment[]>;
    ngOnInit(): void;
    private getExactStatus;
    private getOtherStatus;
    /**
     * @deprecated
     * NOTE: This function will be removed in version 2.0
     */
    getConsignmentProducts(consignment: Consignment): OrderEntry[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderDetailItemsComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<OrderDetailItemsComponent, "cx-order-details-items", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlsLWl0ZW1zLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJvcmRlci1kZXRhaWwtaXRlbXMuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uc2lnbm1lbnQsIE9yZGVyLCBPcmRlckVudHJ5LCBQcm9tb3Rpb25Mb2NhdGlvbiwgUHJvbW90aW9uUmVzdWx0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByb21vdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvcHJvbW90aW9uL3Byb21vdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVyRGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuLi9vcmRlci1kZXRhaWxzLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT3JkZXJEZXRhaWxJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBvcmRlckRldGFpbHNTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBwcm9tb3Rpb25TZXJ2aWNlPzogUHJvbW90aW9uU2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihvcmRlckRldGFpbHNTZXJ2aWNlOiBPcmRlckRldGFpbHNTZXJ2aWNlLCBwcm9tb3Rpb25TZXJ2aWNlOiBQcm9tb3Rpb25TZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxLjVcbiAgICAgKiBVc2UgcHJvbW90aW9uU2VydmljZSBpbnN0ZWFkIG9mIHRoZSBwcm9tb3Rpb24gaW5wdXRzLlxuICAgICAqIFJlbW92ZSBpc3N1ZTogIzU2NzBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvcmRlckRldGFpbHNTZXJ2aWNlOiBPcmRlckRldGFpbHNTZXJ2aWNlKTtcbiAgICBwcm9tb3Rpb25Mb2NhdGlvbjogUHJvbW90aW9uTG9jYXRpb247XG4gICAgb3JkZXIkOiBPYnNlcnZhYmxlPE9yZGVyPjtcbiAgICBvcmRlclByb21vdGlvbnMkOiBPYnNlcnZhYmxlPFByb21vdGlvblJlc3VsdFtdPjtcbiAgICBvdGhlcnMkOiBPYnNlcnZhYmxlPENvbnNpZ25tZW50W10+O1xuICAgIGNvbXBsZXRlZCQ6IE9ic2VydmFibGU8Q29uc2lnbm1lbnRbXT47XG4gICAgY2FuY2VsJDogT2JzZXJ2YWJsZTxDb25zaWdubWVudFtdPjtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIHByaXZhdGUgZ2V0RXhhY3RTdGF0dXM7XG4gICAgcHJpdmF0ZSBnZXRPdGhlclN0YXR1cztcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqIE5PVEU6IFRoaXMgZnVuY3Rpb24gd2lsbCBiZSByZW1vdmVkIGluIHZlcnNpb24gMi4wXG4gICAgICovXG4gICAgZ2V0Q29uc2lnbm1lbnRQcm9kdWN0cyhjb25zaWdubWVudDogQ29uc2lnbm1lbnQpOiBPcmRlckVudHJ5W107XG59XG4iXX0=