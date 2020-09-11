import { CanActivate } from '@angular/router';
import { ActiveCartService, RoutingService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class CartNotEmptyGuard implements CanActivate {
    protected routingService: RoutingService;
    protected activeCartService: ActiveCartService;
    constructor(routingService: RoutingService, activeCartService: ActiveCartService);
    canActivate(): Observable<boolean>;
    private isEmpty;
}
