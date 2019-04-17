import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order, Consignment, OrderEntry } from '@spartacus/core';
import { OrderDetailsService } from '../order-details.service';
export declare class OrderDetailItemsComponent implements OnInit {
    private orderDetailsService;
    constructor(orderDetailsService: OrderDetailsService);
    order$: Observable<Order>;
    ngOnInit(): void;
    getConsignmentProducts(consignment: Consignment): OrderEntry[];
}
