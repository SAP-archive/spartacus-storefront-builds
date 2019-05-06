import { Observable } from 'rxjs';
import { AuthService, Order, RoutingService, UserService } from '@spartacus/core';
export declare class OrderDetailsService {
    private authService;
    private userService;
    private routingService;
    userId$: Observable<string>;
    orderCode$: Observable<string>;
    orderLoad$: Observable<{}>;
    constructor(authService: AuthService, userService: UserService, routingService: RoutingService);
    getOrderDetails(): Observable<Order>;
}
