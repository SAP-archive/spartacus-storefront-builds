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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlsLWhlYWRsaW5lLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJvcmRlci1kZXRhaWwtaGVhZGxpbmUuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7QUFLQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT3JkZXIgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT3JkZXJEZXRhaWxzU2VydmljZSB9IGZyb20gJy4uL29yZGVyLWRldGFpbHMuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPcmRlckRldGFpbEhlYWRsaW5lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIG9yZGVyRGV0YWlsc1NlcnZpY2U7XG4gICAgY29uc3RydWN0b3Iob3JkZXJEZXRhaWxzU2VydmljZTogT3JkZXJEZXRhaWxzU2VydmljZSk7XG4gICAgb3JkZXIkOiBPYnNlcnZhYmxlPE9yZGVyPjtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xufVxuIl19