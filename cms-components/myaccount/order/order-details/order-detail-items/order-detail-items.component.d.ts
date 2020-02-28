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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlsLWl0ZW1zLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJvcmRlci1kZXRhaWwtaXRlbXMuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnNpZ25tZW50LCBPcmRlciwgT3JkZXJFbnRyeSwgUHJvbW90aW9uTG9jYXRpb24sIFByb21vdGlvblJlc3VsdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcm9tb3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3Byb21vdGlvbi9wcm9tb3Rpb24uc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlckRldGFpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vb3JkZXItZGV0YWlscy5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE9yZGVyRGV0YWlsSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgb3JkZXJEZXRhaWxzU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcHJvbW90aW9uU2VydmljZT86IFByb21vdGlvblNlcnZpY2U7XG4gICAgY29uc3RydWN0b3Iob3JkZXJEZXRhaWxzU2VydmljZTogT3JkZXJEZXRhaWxzU2VydmljZSwgcHJvbW90aW9uU2VydmljZTogUHJvbW90aW9uU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS41XG4gICAgICogVXNlIHByb21vdGlvblNlcnZpY2UgaW5zdGVhZCBvZiB0aGUgcHJvbW90aW9uIGlucHV0cy5cbiAgICAgKiBSZW1vdmUgaXNzdWU6ICM1NjcwXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3JkZXJEZXRhaWxzU2VydmljZTogT3JkZXJEZXRhaWxzU2VydmljZSk7XG4gICAgcHJvbW90aW9uTG9jYXRpb246IFByb21vdGlvbkxvY2F0aW9uO1xuICAgIG9yZGVyJDogT2JzZXJ2YWJsZTxPcmRlcj47XG4gICAgb3JkZXJQcm9tb3Rpb25zJDogT2JzZXJ2YWJsZTxQcm9tb3Rpb25SZXN1bHRbXT47XG4gICAgb3RoZXJzJDogT2JzZXJ2YWJsZTxDb25zaWdubWVudFtdPjtcbiAgICBjb21wbGV0ZWQkOiBPYnNlcnZhYmxlPENvbnNpZ25tZW50W10+O1xuICAgIGNhbmNlbCQ6IE9ic2VydmFibGU8Q29uc2lnbm1lbnRbXT47XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBwcml2YXRlIGdldEV4YWN0U3RhdHVzO1xuICAgIHByaXZhdGUgZ2V0T3RoZXJTdGF0dXM7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKiBOT1RFOiBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgcmVtb3ZlZCBpbiB2ZXJzaW9uIDIuMFxuICAgICAqL1xuICAgIGdldENvbnNpZ25tZW50UHJvZHVjdHMoY29uc2lnbm1lbnQ6IENvbnNpZ25tZW50KTogT3JkZXJFbnRyeVtdO1xufVxuIl19