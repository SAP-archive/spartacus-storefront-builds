import { CanActivate } from '@angular/router';
import { ActiveCartService, RoutingService } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class CartNotEmptyGuard implements CanActivate {
    protected routingService: RoutingService;
    protected activeCartService: ActiveCartService;
    constructor(routingService: RoutingService, activeCartService: ActiveCartService);
    canActivate(): Observable<boolean>;
    private isEmpty;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartNotEmptyGuard, never>;
}

//# sourceMappingURL=cart-not-empty.guard.d.ts.map