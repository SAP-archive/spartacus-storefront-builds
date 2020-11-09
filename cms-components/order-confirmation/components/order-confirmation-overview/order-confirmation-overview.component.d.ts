import { OnDestroy, OnInit } from '@angular/core';
import { CheckoutService } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class OrderConfirmationOverviewComponent implements OnInit, OnDestroy {
    protected checkoutService: CheckoutService;
    order$: Observable<any>;
    constructor(checkoutService: CheckoutService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderConfirmationOverviewComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<OrderConfirmationOverviewComponent, "cx-order-confirmation-overview", never, {}, {}, never, never>;
}

//# sourceMappingURL=order-confirmation-overview.component.d.ts.map