import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDetailsService } from '../order-details.service';
import * as ɵngcc0 from '@angular/core';
export declare class OrderDetailShippingComponent implements OnInit {
    protected orderDetailsService: OrderDetailsService;
    constructor(orderDetailsService: OrderDetailsService);
    order$: Observable<any>;
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderDetailShippingComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<OrderDetailShippingComponent, "cx-order-details-shipping", never, {}, {}, never, never>;
}

//# sourceMappingURL=order-detail-shipping.component.d.ts.map