import { CanActivate } from '@angular/router';
import { AuthRedirectService, AuthService, CartService, RoutingService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CheckoutConfigService } from '../services/checkout-config.service';
export declare class CheckoutAuthGuard implements CanActivate {
    private routingService;
    private authService;
    private authRedirectService;
    private cartService;
    private checkoutConfigService;
    constructor(routingService: RoutingService, authService: AuthService, authRedirectService: AuthRedirectService, cartService: CartService, checkoutConfigService: CheckoutConfigService);
    canActivate(): Observable<boolean>;
}
