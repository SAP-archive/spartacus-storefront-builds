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

//# sourceMappingURL=order-history.component.d.ts.map