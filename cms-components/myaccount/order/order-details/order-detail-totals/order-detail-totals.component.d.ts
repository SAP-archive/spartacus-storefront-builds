import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDetailsService } from '../order-details.service';
import * as ɵngcc0 from '@angular/core';
export declare class OrderDetailTotalsComponent implements OnInit {
    protected orderDetailsService: OrderDetailsService;
    constructor(orderDetailsService: OrderDetailsService);
    order$: Observable<any>;
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderDetailTotalsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<OrderDetailTotalsComponent, "cx-order-details-totals", never, {}, {}, never, never>;
}

//# sourceMappingURL=order-detail-totals.component.d.ts.map