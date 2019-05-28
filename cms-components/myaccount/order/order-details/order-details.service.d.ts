import { Order, RoutingService, UserService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class OrderDetailsService {
    private userService;
    private routingService;
    orderCode$: Observable<string>;
    orderLoad$: Observable<{}>;
    constructor(userService: UserService, routingService: RoutingService);
    getOrderDetails(): Observable<Order>;
}
