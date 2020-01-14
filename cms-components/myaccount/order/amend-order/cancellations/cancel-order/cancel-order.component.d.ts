import { OrderEntry } from '@spartacus/core';
import { Observable } from 'rxjs';
import { OrderAmendService } from '../../amend-order.service';
export declare class CancelOrderComponent {
    protected orderAmendService: OrderAmendService;
    orderCode: string;
    form$: Observable<import("@angular/forms").FormGroup>;
    entries$: Observable<OrderEntry[]>;
    constructor(orderAmendService: OrderAmendService);
}