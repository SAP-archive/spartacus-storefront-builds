import { Order, RoutingService, UserOrderService } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class OrderDetailsService {
    private userOrderService;
    private routingService;
    orderCode$: Observable<string>;
    orderLoad$: Observable<{}>;
    constructor(userOrderService: UserOrderService, routingService: RoutingService);
    getOrderDetails(): Observable<Order>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderDetailsService>;
}

//# sourceMappingURL=order-details.service.d.ts.map