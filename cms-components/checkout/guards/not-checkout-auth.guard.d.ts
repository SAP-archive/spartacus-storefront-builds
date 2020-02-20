import { CanActivate } from '@angular/router';
import { AuthService, CartService, RoutingService } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class NotCheckoutAuthGuard implements CanActivate {
    private routingService;
    private authService;
    private cartService;
    constructor(routingService: RoutingService, authService: AuthService, cartService: CartService);
    canActivate(): Observable<boolean>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NotCheckoutAuthGuard>;
}

//# sourceMappingURL=not-checkout-auth.guard.d.ts.map