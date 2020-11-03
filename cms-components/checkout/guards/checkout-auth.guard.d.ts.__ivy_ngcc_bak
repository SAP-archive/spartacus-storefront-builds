import { CanActivate, Router, UrlTree } from '@angular/router';
import { ActiveCartService, AuthRedirectService, AuthService, GlobalMessageService, SemanticPathService, UserService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CheckoutConfigService } from '../services/checkout-config.service';
export declare class CheckoutAuthGuard implements CanActivate {
    protected authService: AuthService;
    protected authRedirectService: AuthRedirectService;
    protected checkoutConfigService: CheckoutConfigService;
    protected activeCartService: ActiveCartService;
    protected semanticPathService: SemanticPathService;
    protected router: Router;
    protected userService: UserService;
    protected globalMessageService: GlobalMessageService;
    constructor(authService: AuthService, authRedirectService: AuthRedirectService, checkoutConfigService: CheckoutConfigService, activeCartService: ActiveCartService, semanticPathService: SemanticPathService, router: Router, userService: UserService, globalMessageService: GlobalMessageService);
    canActivate(): Observable<boolean | UrlTree>;
}
