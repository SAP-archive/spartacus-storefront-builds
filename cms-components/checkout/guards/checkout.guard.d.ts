import { CanActivate, Router, UrlTree } from '@angular/router';
import { CartService, RoutingConfigService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CheckoutConfig } from '../config/checkout-config';
import { CheckoutConfigService } from '../services/checkout-config.service';
import { ExpressCheckoutService } from '../services/express-checkout.service';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutGuard implements CanActivate {
    private router;
    private config;
    private routingConfigService;
    protected checkoutConfigService?: CheckoutConfigService;
    protected expressCheckoutService?: ExpressCheckoutService;
    protected cartService?: CartService;
    private readonly firstStep$;
    constructor(router: Router, config: CheckoutConfig, routingConfigService: RoutingConfigService, checkoutConfigService: CheckoutConfigService, expressCheckoutService: ExpressCheckoutService, cartService: CartService);
    /**
     * @deprecated since version 1.2
     *  Use constructor(router: Router,
     *  config: CheckoutConfig - @deprecated since 2.x,
     *  routingConfigService: RoutingConfigService,
     *  checkoutConfigService: CheckoutConfigService,
     *  expressCheckoutService: ExpressCheckoutService
     *  cartService: CartService) instead
     *
     *  TODO(issue:#4309) Deprecated since 1.2.0
     */
    constructor(router: Router, config: CheckoutConfig, routingConfigService: RoutingConfigService);
    canActivate(): Observable<boolean | UrlTree>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutGuard>;
}

//# sourceMappingURL=checkout.guard.d.ts.map