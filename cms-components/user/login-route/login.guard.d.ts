import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthConfigService, AuthRedirectService, AuthService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsPageGuard } from '../../../cms-structure/guards/cms-page.guard';
/**
 * Guards the _login_ route.
 *
 * Takes care of routing the user to a auth server login page (if implicit or code flow is used).
 * In case of Resource Owner Password Flow just renders the page as normal CMS page.
 */
import * as ɵngcc0 from '@angular/core';
export declare class LoginGuard implements CanActivate {
    protected authService: AuthService;
    protected authRedirectService: AuthRedirectService;
    protected authConfigService: AuthConfigService;
    protected cmsPageGuard: CmsPageGuard;
    constructor(authService: AuthService, authRedirectService: AuthRedirectService, authConfigService: AuthConfigService, cmsPageGuard: CmsPageGuard);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LoginGuard, never>;
}

//# sourceMappingURL=login.guard.d.ts.map