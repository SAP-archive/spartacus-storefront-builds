import { GlobalMessageService, OrderEntry, OrderReturnRequestService, RoutingService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { OrderDetailsService } from '../../order-details/order-details.service';
import { AmendOrderType } from '../amend-order.model';
import { OrderAmendService } from '../amend-order.service';
import * as ɵngcc0 from '@angular/core';
export declare class OrderReturnService extends OrderAmendService {
    protected orderDetailsService: OrderDetailsService;
    protected returnRequestService: OrderReturnRequestService;
    protected routing: RoutingService;
    protected globalMessageService: GlobalMessageService;
    amendType: AmendOrderType;
    constructor(orderDetailsService: OrderDetailsService, returnRequestService: OrderReturnRequestService, routing: RoutingService, globalMessageService: GlobalMessageService);
    getEntries(): Observable<OrderEntry[]>;
    save(): void;
    private afterSave;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderReturnService>;
}

//# sourceMappingURL=order-return.service.d.ts.map