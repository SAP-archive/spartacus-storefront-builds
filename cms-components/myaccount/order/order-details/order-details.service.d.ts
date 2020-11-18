import { Order, RoutingService, UserOrderService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class OrderDetailsService {
    private userOrderService;
    private routingService;
    orderCode$: Observable<string>;
    orderLoad$: Observable<{}>;
    constructor(userOrderService: UserOrderService, routingService: RoutingService);
    getOrderDetails(): Observable<Order>;
}
