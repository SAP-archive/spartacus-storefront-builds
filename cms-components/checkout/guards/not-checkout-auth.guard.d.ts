import { CanActivate } from '@angular/router';
import { ActiveCartService, AuthService, RoutingService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class NotCheckoutAuthGuard implements CanActivate {
    protected routingService: RoutingService;
    protected authService: AuthService;
    protected activeCartService: ActiveCartService;
    constructor(routingService: RoutingService, authService: AuthService, activeCartService: ActiveCartService);
    canActivate(): Observable<boolean>;
}
