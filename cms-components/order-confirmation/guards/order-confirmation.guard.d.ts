import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CheckoutService, SemanticPathService } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
export declare class OrderConfirmationGuard implements CanActivate {
    private checkoutService;
    private router;
    private semanticPathService;
    constructor(checkoutService: CheckoutService, router: Router, semanticPathService: SemanticPathService);
    canActivate(): Observable<boolean | UrlTree>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderConfirmationGuard, never>;
}

//# sourceMappingURL=order-confirmation.guard.d.ts.map