import { CanActivate } from '@angular/router';
import { ActiveCartService, AuthRedirectService, AuthService, RoutingService, UserService, GlobalMessageService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CheckoutConfigService } from '../services/checkout-config.service';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutAuthGuard implements CanActivate {
    protected routingService: RoutingService;
    protected authService: AuthService;
    protected authRedirectService: AuthRedirectService;
    protected checkoutConfigService: CheckoutConfigService;
    protected activeCartService: ActiveCartService;
    protected userService: UserService;
    protected globalMessageService: GlobalMessageService;
    constructor(routingService: RoutingService, authService: AuthService, authRedirectService: AuthRedirectService, checkoutConfigService: CheckoutConfigService, activeCartService: ActiveCartService, userService: UserService, globalMessageService: GlobalMessageService);
    canActivate(): Observable<boolean>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutAuthGuard, never>;
}

//# sourceMappingURL=checkout-auth.guard.d.ts.map