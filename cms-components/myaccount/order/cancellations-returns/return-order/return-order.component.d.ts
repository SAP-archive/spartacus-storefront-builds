import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderEntry, CancelOrReturnRequestEntryInput } from '@spartacus/core';
import { OrderCancelOrReturnService } from '../cancel-or-return.service';
import { OrderDetailsService } from '../../order-details/order-details.service';
export declare class ReturnOrderComponent implements OnInit {
    protected cancelOrReturnService: OrderCancelOrReturnService;
    protected orderDetailsService: OrderDetailsService;
    constructor(cancelOrReturnService: OrderCancelOrReturnService, orderDetailsService: OrderDetailsService);
    orderCode: string;
    returnableEntries$: Observable<OrderEntry[]>;
    ngOnInit(): void;
    confirmReturn(entryInputs: CancelOrReturnRequestEntryInput[]): void;
}
