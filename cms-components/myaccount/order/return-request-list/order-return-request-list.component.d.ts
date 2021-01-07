import { OnDestroy } from '@angular/core';
import { ReturnRequestList, OrderReturnRequestService, TranslationService } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class OrderReturnRequestListComponent implements OnDestroy {
    private returnRequestService;
    private translation;
    constructor(returnRequestService: OrderReturnRequestService, translation: TranslationService);
    private PAGE_SIZE;
    sortType: string;
    returnRequests$: Observable<ReturnRequestList>;
    /**
     * When "Order Return" feature is enabled, this component becomes one tab in
     * TabParagraphContainerComponent. This can be read from TabParagraphContainer.
     */
    tabTitleParam$: Observable<number>;
    ngOnDestroy(): void;
    changeSortCode(sortCode: string): void;
    pageChange(page: number): void;
    getSortLabels(): Observable<{
        byDate: string;
        byRMA: string;
    }>;
    private fetchReturnRequests;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderReturnRequestListComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<OrderReturnRequestListComponent, "cx-order-return-request-list", never, {}, {}, never, never>;
}

//# sourceMappingURL=order-return-request-list.component.d.ts.map