import { Observable } from 'rxjs';
import { OrderDetailsService } from '../order-details.service';
export declare class OrderDetailActionsComponent {
    protected orderDetailsService: OrderDetailsService;
    constructor(orderDetailsService: OrderDetailsService);
    order$: Observable<any>;
}
