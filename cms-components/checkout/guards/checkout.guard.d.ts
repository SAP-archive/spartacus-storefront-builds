import { CanActivate, Router, UrlTree } from '@angular/router';
import { CheckoutConfig } from '../config/checkout-config';
import { Observable } from 'rxjs';
import { RoutingConfigService } from '@spartacus/core';
export declare class CheckoutGuard implements CanActivate {
    private router;
    private config;
    private routingConfigService;
    constructor(router: Router, config: CheckoutConfig, routingConfigService: RoutingConfigService);
    canActivate(): Observable<boolean | UrlTree>;
}
