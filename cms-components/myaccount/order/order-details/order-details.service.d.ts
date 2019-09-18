import { CartDataService, Order, RoutingService, UserOrderService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class OrderDetailsService {
    private userOrderService;
    private routingService;
    private cartDataService?;
    orderCode$: Observable<string>;
    orderLoad$: Observable<{}>;
    constructor(userOrderService: UserOrderService, routingService: RoutingService, cartDataService: CartDataService);
    /**
     * @deprecated since 1.x
     * NOTE: check issue:#1225 for more info
     *
     * TODO(issue:#1225) Deprecated since 1.x
     */
    constructor(userOrderService: UserOrderService, routingService: RoutingService);
    getOrderDetails(): Observable<Order>;
}
