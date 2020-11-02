import { CanActivate, Router, UrlTree } from '@angular/router';
import { ActiveCartService, SemanticPathService } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class CartNotEmptyGuard implements CanActivate {
    protected activeCartService: ActiveCartService;
    protected semanticPathService: SemanticPathService;
    protected router: Router;
    constructor(activeCartService: ActiveCartService, semanticPathService: SemanticPathService, router: Router);
    canActivate(): Observable<boolean | UrlTree>;
    private isEmpty;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartNotEmptyGuard, never>;
}

//# sourceMappingURL=cart-not-empty.guard.d.ts.map