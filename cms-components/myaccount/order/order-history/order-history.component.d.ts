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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItaGlzdG9yeS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsib3JkZXItaGlzdG9yeS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3JkZXIsIE9yZGVySGlzdG9yeUxpc3QsIFJvdXRpbmdTZXJ2aWNlLCBUcmFuc2xhdGlvblNlcnZpY2UsIFVzZXJPcmRlclNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT3JkZXJIaXN0b3J5Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIHJvdXRpbmc7XG4gICAgcHJpdmF0ZSB1c2VyT3JkZXJTZXJ2aWNlO1xuICAgIHByaXZhdGUgdHJhbnNsYXRpb247XG4gICAgY29uc3RydWN0b3Iocm91dGluZzogUm91dGluZ1NlcnZpY2UsIHVzZXJPcmRlclNlcnZpY2U6IFVzZXJPcmRlclNlcnZpY2UsIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UpO1xuICAgIHByaXZhdGUgUEFHRV9TSVpFO1xuICAgIHNvcnRUeXBlOiBzdHJpbmc7XG4gICAgb3JkZXJzJDogT2JzZXJ2YWJsZTxPcmRlckhpc3RvcnlMaXN0PjtcbiAgICBpc0xvYWRlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogV2hlbiBcIk9yZGVyIFJldHVyblwiIGZlYXR1cmUgaXMgZW5hYmxlZCwgdGhpcyBjb21wb25lbnQgYmVjb21lcyBvbmUgdGFiIGluXG4gICAgICogVGFiUGFyYWdyYXBoQ29udGFpbmVyQ29tcG9uZW50LiBUaGlzIGNhbiBiZSByZWFkIGZyb20gVGFiUGFyYWdyYXBoQ29udGFpbmVyLlxuICAgICAqL1xuICAgIHRhYlRpdGxlUGFyYW0kOiBPYnNlcnZhYmxlPG51bWJlcj47XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICBjaGFuZ2VTb3J0Q29kZShzb3J0Q29kZTogc3RyaW5nKTogdm9pZDtcbiAgICBwYWdlQ2hhbmdlKHBhZ2U6IG51bWJlcik6IHZvaWQ7XG4gICAgZ29Ub09yZGVyRGV0YWlsKG9yZGVyOiBPcmRlcik6IHZvaWQ7XG4gICAgZ2V0U29ydExhYmVscygpOiBPYnNlcnZhYmxlPHtcbiAgICAgICAgYnlEYXRlOiBzdHJpbmc7XG4gICAgICAgIGJ5T3JkZXJOdW1iZXI6IHN0cmluZztcbiAgICB9PjtcbiAgICBwcml2YXRlIGZldGNoT3JkZXJzO1xufVxuIl19