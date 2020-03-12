import { OnDestroy } from '@angular/core';
import { Order, OrderHistoryList, RoutingService, TranslationService, UserOrderService } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class OrderHistoryComponent implements OnDestroy {
    private routing;
    private userOrderService;
    private translation;
    constructor(routing: RoutingService, userOrderService: UserOrderService, translation: TranslationService);
    private PAGE_SIZE;
    sortType: string;
    orders$: Observable<OrderHistoryList>;
    isLoaded$: Observable<boolean>;
    /**
     * When "Order Return" feature is enabled, this component becomes one tab in
     * TabParagraphContainerComponent. This can be read from TabParagraphContainer.
     */
    tabTitleParam$: Observable<number>;
    ngOnDestroy(): void;
    changeSortCode(sortCode: string): void;
    pageChange(page: number): void;
    goToOrderDetail(order: Order): void;
    getSortLabels(): Observable<{
        byDate: string;
        byOrderNumber: string;
    }>;
    private fetchOrders;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderHistoryComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<OrderHistoryComponent, "cx-order-history", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItaGlzdG9yeS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsib3JkZXItaGlzdG9yeS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPcmRlciwgT3JkZXJIaXN0b3J5TGlzdCwgUm91dGluZ1NlcnZpY2UsIFRyYW5zbGF0aW9uU2VydmljZSwgVXNlck9yZGVyU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPcmRlckhpc3RvcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgcm91dGluZztcbiAgICBwcml2YXRlIHVzZXJPcmRlclNlcnZpY2U7XG4gICAgcHJpdmF0ZSB0cmFuc2xhdGlvbjtcbiAgICBjb25zdHJ1Y3Rvcihyb3V0aW5nOiBSb3V0aW5nU2VydmljZSwgdXNlck9yZGVyU2VydmljZTogVXNlck9yZGVyU2VydmljZSwgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZSk7XG4gICAgcHJpdmF0ZSBQQUdFX1NJWkU7XG4gICAgc29ydFR5cGU6IHN0cmluZztcbiAgICBvcmRlcnMkOiBPYnNlcnZhYmxlPE9yZGVySGlzdG9yeUxpc3Q+O1xuICAgIGlzTG9hZGVkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBXaGVuIFwiT3JkZXIgUmV0dXJuXCIgZmVhdHVyZSBpcyBlbmFibGVkLCB0aGlzIGNvbXBvbmVudCBiZWNvbWVzIG9uZSB0YWIgaW5cbiAgICAgKiBUYWJQYXJhZ3JhcGhDb250YWluZXJDb21wb25lbnQuIFRoaXMgY2FuIGJlIHJlYWQgZnJvbSBUYWJQYXJhZ3JhcGhDb250YWluZXIuXG4gICAgICovXG4gICAgdGFiVGl0bGVQYXJhbSQ6IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIGNoYW5nZVNvcnRDb2RlKHNvcnRDb2RlOiBzdHJpbmcpOiB2b2lkO1xuICAgIHBhZ2VDaGFuZ2UocGFnZTogbnVtYmVyKTogdm9pZDtcbiAgICBnb1RvT3JkZXJEZXRhaWwob3JkZXI6IE9yZGVyKTogdm9pZDtcbiAgICBnZXRTb3J0TGFiZWxzKCk6IE9ic2VydmFibGU8e1xuICAgICAgICBieURhdGU6IHN0cmluZztcbiAgICAgICAgYnlPcmRlck51bWJlcjogc3RyaW5nO1xuICAgIH0+O1xuICAgIHByaXZhdGUgZmV0Y2hPcmRlcnM7XG59XG4iXX0=