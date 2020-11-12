import { CanActivate, Router, UrlTree } from '@angular/router';
import { ActiveCartService, AuthService, SemanticPathService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class NotCheckoutAuthGuard implements CanActivate {
    protected authService: AuthService;
    protected activeCartService: ActiveCartService;
    protected semanticPathService: SemanticPathService;
    protected router: Router;
    constructor(authService: AuthService, activeCartService: ActiveCartService, semanticPathService: SemanticPathService, router: Router);
    canActivate(): Observable<boolean | UrlTree>;
}
