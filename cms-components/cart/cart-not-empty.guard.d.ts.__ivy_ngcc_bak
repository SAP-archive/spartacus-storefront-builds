import { CanActivate, Router, UrlTree } from '@angular/router';
import { ActiveCartService, SemanticPathService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class CartNotEmptyGuard implements CanActivate {
    protected activeCartService: ActiveCartService;
    protected semanticPathService: SemanticPathService;
    protected router: Router;
    constructor(activeCartService: ActiveCartService, semanticPathService: SemanticPathService, router: Router);
    canActivate(): Observable<boolean | UrlTree>;
    private isEmpty;
}
