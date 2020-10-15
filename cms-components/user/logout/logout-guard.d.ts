import { CanActivate } from '@angular/router';
import { AuthService, CmsService, ProtectedRoutesService, RoutingService, SemanticPathService } from '@spartacus/core';
import { Observable } from 'rxjs';
/**
 * Guards the _logout_ route.
 *
 * Takes care of routing the user to a logout page (if available) or redirects to
 * the homepage. If the homepage is protected, the user is redirected
 * to the login route instead.
 */
import * as ɵngcc0 from '@angular/core';
export declare class LogoutGuard implements CanActivate {
    protected auth: AuthService;
    protected cms: CmsService;
    protected routing: RoutingService;
    protected semanticPathService: SemanticPathService;
    protected protectedRoutes: ProtectedRoutesService;
    constructor(auth: AuthService, cms: CmsService, routing: RoutingService, semanticPathService: SemanticPathService, protectedRoutes: ProtectedRoutesService);
    canActivate(): Observable<any>;
    /**
     * Whenever there is no specific "logout" page configured in the CMS,
     * we redirect after the user is logged out.
     *
     * The user gets redirected to the homepage, unless the homepage is protected
     * (in case of a closed shop). We'll redirect to the login page instead.
     */
    protected redirect(): void;
    /**
     * Log user out.
     *
     * This is delegated to the `AuthService`.
     */
    protected logout(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LogoutGuard, never>;
}

//# sourceMappingURL=logout-guard.d.ts.map