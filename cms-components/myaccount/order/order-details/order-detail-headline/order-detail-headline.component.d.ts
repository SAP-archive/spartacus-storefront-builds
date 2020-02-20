import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '@spartacus/core';
import { OrderDetailsService } from '../order-details.service';
import * as ɵngcc0 from '@angular/core';
export declare class OrderDetailHeadlineComponent implements OnInit {
    private orderDetailsService;
    constructor(orderDetailsService: OrderDetailsService);
    order$: Observable<Order>;
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderDetailHeadlineComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<OrderDetailHeadlineComponent, "cx-order-details-headline", never, {}, {}, never>;
}

//# sourceMappingURL=order-detail-headline.component.d.ts.map