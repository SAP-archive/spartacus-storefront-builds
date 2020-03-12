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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderReturnRequestListComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<OrderReturnRequestListComponent, "cx-order-return-request-list", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcmV0dXJuLXJlcXVlc3QtbGlzdC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsib3JkZXItcmV0dXJuLXJlcXVlc3QtbGlzdC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXR1cm5SZXF1ZXN0TGlzdCwgT3JkZXJSZXR1cm5SZXF1ZXN0U2VydmljZSwgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE9yZGVyUmV0dXJuUmVxdWVzdExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgcmV0dXJuUmVxdWVzdFNlcnZpY2U7XG4gICAgcHJpdmF0ZSB0cmFuc2xhdGlvbjtcbiAgICBjb25zdHJ1Y3RvcihyZXR1cm5SZXF1ZXN0U2VydmljZTogT3JkZXJSZXR1cm5SZXF1ZXN0U2VydmljZSwgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZSk7XG4gICAgcHJpdmF0ZSBQQUdFX1NJWkU7XG4gICAgc29ydFR5cGU6IHN0cmluZztcbiAgICByZXR1cm5SZXF1ZXN0cyQ6IE9ic2VydmFibGU8UmV0dXJuUmVxdWVzdExpc3Q+O1xuICAgIC8qKlxuICAgICAqIFdoZW4gXCJPcmRlciBSZXR1cm5cIiBmZWF0dXJlIGlzIGVuYWJsZWQsIHRoaXMgY29tcG9uZW50IGJlY29tZXMgb25lIHRhYiBpblxuICAgICAqIFRhYlBhcmFncmFwaENvbnRhaW5lckNvbXBvbmVudC4gVGhpcyBjYW4gYmUgcmVhZCBmcm9tIFRhYlBhcmFncmFwaENvbnRhaW5lci5cbiAgICAgKi9cbiAgICB0YWJUaXRsZVBhcmFtJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgY2hhbmdlU29ydENvZGUoc29ydENvZGU6IHN0cmluZyk6IHZvaWQ7XG4gICAgcGFnZUNoYW5nZShwYWdlOiBudW1iZXIpOiB2b2lkO1xuICAgIGdldFNvcnRMYWJlbHMoKTogT2JzZXJ2YWJsZTx7XG4gICAgICAgIGJ5RGF0ZTogc3RyaW5nO1xuICAgICAgICBieVJNQTogc3RyaW5nO1xuICAgIH0+O1xuICAgIHByaXZhdGUgZmV0Y2hSZXR1cm5SZXF1ZXN0cztcbn1cbiJdfQ==