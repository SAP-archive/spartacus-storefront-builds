import { GlobalMessageService, OrderEntry, RoutingService, UserOrderService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { OrderDetailsService } from '../../order-details/order-details.service';
import { AmendOrderType } from '../amend-order.model';
import { OrderAmendService } from '../amend-order.service';
export declare class OrderCancellationService extends OrderAmendService {
    protected orderDetailsService: OrderDetailsService;
    protected userOrderService: UserOrderService;
    protected routing: RoutingService;
    protected globalMessageService: GlobalMessageService;
    amendType: AmendOrderType;
    constructor(orderDetailsService: OrderDetailsService, userOrderService: UserOrderService, routing: RoutingService, globalMessageService: GlobalMessageService);
    /**
     * Return cancellable order entries.
     */
    getEntries(): Observable<OrderEntry[]>;
    save(): void;
    private afterSave;
}
