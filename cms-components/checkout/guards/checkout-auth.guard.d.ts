import { CanActivate } from '@angular/router';
import { AuthRedirectService, AuthService, CartService, RoutingService, FeatureConfigService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class CheckoutAuthGuard implements CanActivate {
    private routingService;
    private authService;
    private authRedirectService;
    private cartService;
    private featureConfigService;
    constructor(routingService: RoutingService, authService: AuthService, authRedirectService: AuthRedirectService, cartService: CartService, featureConfigService: FeatureConfigService);
    canActivate(): Observable<boolean>;
}
