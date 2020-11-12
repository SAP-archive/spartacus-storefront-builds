import { GlobalMessageService, OrderEntry, OrderReturnRequestService, RoutingService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { OrderDetailsService } from '../../order-details/order-details.service';
import { AmendOrderType } from '../amend-order.model';
import { OrderAmendService } from '../amend-order.service';
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
}
