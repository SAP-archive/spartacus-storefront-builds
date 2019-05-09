import { OnDestroy, OnInit } from '@angular/core';
import { AuthService, Order, OrderHistoryList, RoutingService, UserService, TranslationService } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
export declare class OrderHistoryComponent implements OnInit, OnDestroy {
    private auth;
    private routing;
    private userService;
    private translation;
    constructor(auth: AuthService, routing: RoutingService, userService: UserService, translation: TranslationService);
    orders$: Observable<OrderHistoryList>;
    isLoaded$: Observable<boolean>;
    subscription: Subscription;
    private user_id;
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
