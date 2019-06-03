import { OnInit, OnDestroy } from '@angular/core';
import { CheckoutService, RoutingService } from '@spartacus/core';
import { Subscription } from 'rxjs';
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
}
