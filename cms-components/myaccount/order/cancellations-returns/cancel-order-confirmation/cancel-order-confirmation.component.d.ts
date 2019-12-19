import { OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { OrderEntry } from '@spartacus/core';
import { OrderDetailsService } from '../../order-details/order-details.service';
import { OrderCancelOrReturnService } from '../cancel-or-return.service';
export declare class CancelOrderConfirmationComponent implements OnInit, OnDestroy {
    protected orderDetailsService: OrderDetailsService;
    protected cancelOrReturnService: OrderCancelOrReturnService;
    constructor(orderDetailsService: OrderDetailsService, cancelOrReturnService: OrderCancelOrReturnService);
    orderCode: string;
    isCancelling$: Observable<boolean>;
    subscription: Subscription;
    cancelledEntries$: Observable<OrderEntry[]>;
    ngOnInit(): void;
    submit(): void;
    back(): void;
    ngOnDestroy(): void;
}
