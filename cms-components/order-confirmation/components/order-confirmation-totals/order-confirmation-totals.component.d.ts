import { OnDestroy, OnInit } from '@angular/core';
import { CheckoutService, Order } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class OrderConfirmationTotalsComponent implements OnInit, OnDestroy {
    protected checkoutService: CheckoutService;
    order$: Observable<Order>;
    constructor(checkoutService: CheckoutService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderConfirmationTotalsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<OrderConfirmationTotalsComponent, "cx-order-confirmation-totals", never, {}, {}, never, never>;
}

//# sourceMappingURL=order-confirmation-totals.component.d.ts.map