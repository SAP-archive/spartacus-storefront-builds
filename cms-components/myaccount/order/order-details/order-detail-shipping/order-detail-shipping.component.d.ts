import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDetailsService } from '../order-details.service';
export declare class OrderDetailShippingComponent implements OnInit {
    protected orderDetailsService: OrderDetailsService;
    constructor(orderDetailsService: OrderDetailsService);
    order$: Observable<any>;
    ngOnInit(): void;
}
