import { CanActivate, Router, UrlTree } from '@angular/router';
import { SemanticPathService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { OrderCancellationService } from './order-cancellation.service';
import * as ɵngcc0 from '@angular/core';
export declare class OrderCancellationGuard implements CanActivate {
    protected orderAmendService: OrderCancellationService;
    protected semanticPathService: SemanticPathService;
    protected router: Router;
    constructor(orderAmendService: OrderCancellationService, semanticPathService: SemanticPathService, router: Router);
    canActivate(): Observable<boolean | UrlTree>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderCancellationGuard, never>;
}

//# sourceMappingURL=order-cancellation.guard.d.ts.map