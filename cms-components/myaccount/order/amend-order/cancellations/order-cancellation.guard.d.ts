import { CanActivate, UrlTree } from '@angular/router';
import { RoutingService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { OrderCancellationService } from './order-cancellation.service';
import * as ɵngcc0 from '@angular/core';
export declare class OrderCancellationGuard implements CanActivate {
    protected routing: RoutingService;
    protected orderAmendService: OrderCancellationService;
    constructor(routing: RoutingService, orderAmendService: OrderCancellationService);
    canActivate(): Observable<boolean | UrlTree>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderCancellationGuard>;
}

//# sourceMappingURL=order-cancellation.guard.d.ts.map