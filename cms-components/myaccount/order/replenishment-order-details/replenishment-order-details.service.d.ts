import { ReplenishmentOrder, RoutingService, UserReplenishmentOrderService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class ReplenishmentOrderDetailsService {
    protected routingService: RoutingService;
    protected userReplenishmentOrderService: UserReplenishmentOrderService;
    protected replenishmentOrderCode$: Observable<any>;
    protected replenishmentOrderLoad$: Observable<string>;
    constructor(routingService: RoutingService, userReplenishmentOrderService: UserReplenishmentOrderService);
    getOrderDetails(): Observable<ReplenishmentOrder>;
}
