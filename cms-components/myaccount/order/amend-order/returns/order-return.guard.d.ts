import { CanActivate, Router, UrlTree } from '@angular/router';
import { SemanticPathService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { OrderReturnService } from './order-return.service';
import * as ɵngcc0 from '@angular/core';
export declare class OrderReturnGuard implements CanActivate {
    protected orderAmendService: OrderReturnService;
    protected semanticPathService: SemanticPathService;
    protected router: Router;
    constructor(orderAmendService: OrderReturnService, semanticPathService: SemanticPathService, router: Router);
    canActivate(): Observable<boolean | UrlTree>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderReturnGuard, never>;
}

//# sourceMappingURL=order-return.guard.d.ts.map