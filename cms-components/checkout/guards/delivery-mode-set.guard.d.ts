import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CheckoutConfigService } from '../checkout-config.service';
import { ServerConfig, RoutingConfigService } from '@spartacus/core';
import { CheckoutDetailsService } from '../services/checkout-details.service';
export declare class DeliveryModeSetGuard implements CanActivate {
    private checkoutDetailsService;
    private checkoutConfigService;
    private routingConfigService;
    private router;
    private serverConfig;
    constructor(checkoutDetailsService: CheckoutDetailsService, checkoutConfigService: CheckoutConfigService, routingConfigService: RoutingConfigService, router: Router, serverConfig: ServerConfig);
    canActivate(): Observable<boolean | UrlTree>;
}
