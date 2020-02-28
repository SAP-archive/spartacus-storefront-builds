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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcmV0dXJuLXJlcXVlc3QtbGlzdC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsib3JkZXItcmV0dXJuLXJlcXVlc3QtbGlzdC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmV0dXJuUmVxdWVzdExpc3QsIE9yZGVyUmV0dXJuUmVxdWVzdFNlcnZpY2UsIFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPcmRlclJldHVyblJlcXVlc3RMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIHJldHVyblJlcXVlc3RTZXJ2aWNlO1xuICAgIHByaXZhdGUgdHJhbnNsYXRpb247XG4gICAgY29uc3RydWN0b3IocmV0dXJuUmVxdWVzdFNlcnZpY2U6IE9yZGVyUmV0dXJuUmVxdWVzdFNlcnZpY2UsIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UpO1xuICAgIHByaXZhdGUgUEFHRV9TSVpFO1xuICAgIHNvcnRUeXBlOiBzdHJpbmc7XG4gICAgcmV0dXJuUmVxdWVzdHMkOiBPYnNlcnZhYmxlPFJldHVyblJlcXVlc3RMaXN0PjtcbiAgICAvKipcbiAgICAgKiBXaGVuIFwiT3JkZXIgUmV0dXJuXCIgZmVhdHVyZSBpcyBlbmFibGVkLCB0aGlzIGNvbXBvbmVudCBiZWNvbWVzIG9uZSB0YWIgaW5cbiAgICAgKiBUYWJQYXJhZ3JhcGhDb250YWluZXJDb21wb25lbnQuIFRoaXMgY2FuIGJlIHJlYWQgZnJvbSBUYWJQYXJhZ3JhcGhDb250YWluZXIuXG4gICAgICovXG4gICAgdGFiVGl0bGVQYXJhbSQ6IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIGNoYW5nZVNvcnRDb2RlKHNvcnRDb2RlOiBzdHJpbmcpOiB2b2lkO1xuICAgIHBhZ2VDaGFuZ2UocGFnZTogbnVtYmVyKTogdm9pZDtcbiAgICBnZXRTb3J0TGFiZWxzKCk6IE9ic2VydmFibGU8e1xuICAgICAgICBieURhdGU6IHN0cmluZztcbiAgICAgICAgYnlSTUE6IHN0cmluZztcbiAgICB9PjtcbiAgICBwcml2YXRlIGZldGNoUmV0dXJuUmVxdWVzdHM7XG59XG4iXX0=