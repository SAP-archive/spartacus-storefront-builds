import { OnInit, OnDestroy } from '@angular/core';
import { AuthService, RoutingService, UserService, OrderHistoryList, Order } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
export declare class OrderHistoryComponent implements OnInit, OnDestroy {
    private auth;
    private routing;
    private userService;
    constructor(auth: AuthService, routing: RoutingService, userService: UserService);
    orders$: Observable<OrderHistoryList>;
    isLoaded$: Observable<boolean>;
    subscription: Subscription;
    private user_id;
    private PAGE_SIZE;
    sortType: string;
    sortLabels: {
        byDate: string;
        byOrderNumber: string;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
    changeSortCode(sortCode: string): void;
    pageChange(page: number): void;
    goToOrderDetail(order: Order): void;
    private fetchOrders;
}
