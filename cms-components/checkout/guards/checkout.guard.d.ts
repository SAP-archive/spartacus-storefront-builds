import { CanActivate, Router, UrlTree } from '@angular/router';
import { ActiveCartService, RoutingConfigService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CheckoutConfigService } from '../services/checkout-config.service';
import { CheckoutStepService } from '../services/checkout-step.service';
import { ExpressCheckoutService } from '../services/express-checkout.service';
export declare class CheckoutGuard implements CanActivate {
    protected router: Router;
    protected routingConfigService: RoutingConfigService;
    protected checkoutConfigService: CheckoutConfigService;
    protected checkoutStepService: CheckoutStepService;
    protected expressCheckoutService: ExpressCheckoutService;
    protected activeCartService: ActiveCartService;
    private readonly firstStep$;
    constructor(router: Router, routingConfigService: RoutingConfigService, checkoutConfigService: CheckoutConfigService, checkoutStepService: CheckoutStepService, expressCheckoutService: ExpressCheckoutService, activeCartService: ActiveCartService);
    canActivate(): Observable<boolean | UrlTree>;
}
