import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CheckoutService, SemanticPathService } from '@spartacus/core';
export declare class OrderConfirmationGuard implements CanActivate {
    private checkoutService;
    private router;
    private semanticPathService;
    constructor(checkoutService: CheckoutService, router: Router, semanticPathService: SemanticPathService);
    canActivate(): Observable<boolean | UrlTree>;
}
