import { CanActivate, UrlTree } from '@angular/router';
import { RoutingService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { OrderReturnService } from './order-return.service';
import * as ɵngcc0 from '@angular/core';
export declare class OrderReturnGuard implements CanActivate {
    protected routing: RoutingService;
    protected orderAmendService: OrderReturnService;
    constructor(routing: RoutingService, orderAmendService: OrderReturnService);
    canActivate(): Observable<boolean | UrlTree>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderReturnGuard, never>;
}

//# sourceMappingURL=order-return.guard.d.ts.map