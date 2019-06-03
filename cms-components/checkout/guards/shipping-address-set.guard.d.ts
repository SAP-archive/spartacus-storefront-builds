import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServerConfig, RoutingConfigService } from '@spartacus/core';
import { CheckoutConfigService } from '../checkout-config.service';
import { CheckoutDetailsService } from '../services/checkout-details.service';
export declare class ShippingAddressSetGuard implements CanActivate {
    private checkoutDetailsService;
    private checkoutConfigService;
    private routingConfigService;
    private router;
    private serverConfig;
    constructor(checkoutDetailsService: CheckoutDetailsService, checkoutConfigService: CheckoutConfigService, routingConfigService: RoutingConfigService, router: Router, serverConfig: ServerConfig);
    canActivate(): Observable<boolean | UrlTree>;
}
