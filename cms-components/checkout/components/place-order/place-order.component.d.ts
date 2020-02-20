import { OnInit, OnDestroy } from '@angular/core';
import { CheckoutService, RoutingService } from '@spartacus/core';
import { Subscription } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class PlaceOrderComponent implements OnInit, OnDestroy {
    private checkoutService;
    private routingService;
    tAndCToggler: boolean;
    placeOrderSubscription: Subscription;
    constructor(checkoutService: CheckoutService, routingService: RoutingService);
    toggleTAndC(): void;
    placeOrder(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PlaceOrderComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PlaceOrderComponent, "cx-place-order", never, {}, {}, never>;
}

//# sourceMappingURL=place-order.component.d.ts.map