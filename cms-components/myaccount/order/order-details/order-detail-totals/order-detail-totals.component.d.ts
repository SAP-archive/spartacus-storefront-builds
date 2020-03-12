import { OnInit } from '@angular/core';
import { Order } from '@spartacus/core';
import { Observable } from 'rxjs';
import { OrderDetailsService } from '../order-details.service';
import * as ɵngcc0 from '@angular/core';
export declare class OrderDetailTotalsComponent implements OnInit {
    protected orderDetailsService: OrderDetailsService;
    constructor(orderDetailsService: OrderDetailsService);
    order$: Observable<Order>;
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderDetailTotalsComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<OrderDetailTotalsComponent, "cx-order-details-totals", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlsLXRvdGFscy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsib3JkZXItZGV0YWlsLXRvdGFscy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7OztBQUtBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPcmRlckRldGFpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vb3JkZXItZGV0YWlscy5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE9yZGVyRGV0YWlsVG90YWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcm90ZWN0ZWQgb3JkZXJEZXRhaWxzU2VydmljZTogT3JkZXJEZXRhaWxzU2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihvcmRlckRldGFpbHNTZXJ2aWNlOiBPcmRlckRldGFpbHNTZXJ2aWNlKTtcbiAgICBvcmRlciQ6IE9ic2VydmFibGU8T3JkZXI+O1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG59XG4iXX0=