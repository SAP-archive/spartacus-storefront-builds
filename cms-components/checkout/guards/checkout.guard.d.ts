import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutingConfigService } from '@spartacus/core';
import { ExpressCheckoutService } from '../services/express-checkout.service';
import { CheckoutConfigService } from '../services/checkout-config.service';
import { CheckoutConfig } from '../config/checkout-config';
export declare class CheckoutGuard implements CanActivate {
    private router;
    private config;
    private routingConfigService;
    protected checkoutConfigService?: CheckoutConfigService;
    protected expressCheckoutService?: ExpressCheckoutService;
    private readonly firstStep$;
    constructor(router: Router, config: CheckoutConfig, routingConfigService: RoutingConfigService, checkoutConfigService: CheckoutConfigService, expressCheckoutService: ExpressCheckoutService);
    /**
     * @deprecated since version 1.2
     *  Use constructor(router: Router,
     *  config: CheckoutConfig - @deprecated since 2.x,
     *  routingConfigService: RoutingConfigService,
     *  checkoutConfigService: CheckoutConfigService,
     *  expressCheckoutService: ExpressCheckoutService) instead
     *
     *  TODO(issue:#4309) Deprecated since 1.2.0
     */
    constructor(router: Router, config: CheckoutConfig, routingConfigService: RoutingConfigService);
    canActivate(): Observable<boolean | UrlTree>;
}
