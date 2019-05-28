import { OnDestroy, OnInit } from '@angular/core';
import { Order, OrderHistoryList, RoutingService, TranslationService, UserService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class OrderHistoryComponent implements OnInit, OnDestroy {
    private routing;
    private userService;
    private translation;
    constructor(routing: RoutingService, userService: UserService, translation: TranslationService);
    orders$: Observable<OrderHistoryList>;
    isLoaded$: Observable<boolean>;
    private PAGE_SIZE;
    sortType: string;
    ngOnInit(): void;
    ngOnDestroy(): void;
    changeSortCode(sortCode: string): void;
    pageChange(page: number): void;
    goToOrderDetail(order: Order): void;
    getSortLabels(): Observable<{
        byDate: string;
        byOrderNumber: string;
    }>;
    private fetchOrders;
}
