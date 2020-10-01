import { ReplenishmentOrder, RoutingService, UserReplenishmentOrderService } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class ReplenishmentOrderDetailsService {
    protected routingService: RoutingService;
    protected userReplenishmentOrderService: UserReplenishmentOrderService;
    protected replenishmentOrderCode$: Observable<any>;
    protected replenishmentOrderLoad$: Observable<string>;
    constructor(routingService: RoutingService, userReplenishmentOrderService: UserReplenishmentOrderService);
    getOrderDetails(): Observable<ReplenishmentOrder>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ReplenishmentOrderDetailsService, never>;
}

//# sourceMappingURL=replenishment-order-details.service.d.ts.map