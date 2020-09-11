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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LWd1YXJkLmQudHMiLCJzb3VyY2VzIjpbImxvZ291dC1ndWFyZC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbkFjdGl2YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlLCBDbXNTZXJ2aWNlLCBQcm90ZWN0ZWRSb3V0ZXNTZXJ2aWNlLCBSb3V0aW5nU2VydmljZSwgU2VtYW50aWNQYXRoU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG4vKipcbiAqIEd1YXJkcyB0aGUgX2xvZ291dF8gcm91dGUuXG4gKlxuICogVGFrZXMgY2FyZSBvZiByb3V0aW5nIHRoZSB1c2VyIHRvIGEgbG9nb3V0IHBhZ2UgKGlmIGF2YWlsYWJsZSkgb3IgcmVkaXJlY3RzIHRvXG4gKiB0aGUgaG9tZXBhZ2UuIElmIHRoZSBob21lcGFnZSBpcyBwcm90ZWN0ZWQsIHRoZSB1c2VyIGlzIHJlZGlyZWN0ZWRcbiAqIHRvIHRoZSBsb2dpbiByb3V0ZSBpbnN0ZWFkLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBMb2dvdXRHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgICBwcm90ZWN0ZWQgYXV0aDogQXV0aFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGNtczogQ21zU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcm91dGluZzogUm91dGluZ1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHNlbWFudGljUGF0aFNlcnZpY2U6IFNlbWFudGljUGF0aFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHByb3RlY3RlZFJvdXRlczogUHJvdGVjdGVkUm91dGVzU2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihhdXRoOiBBdXRoU2VydmljZSwgY21zOiBDbXNTZXJ2aWNlLCByb3V0aW5nOiBSb3V0aW5nU2VydmljZSwgc2VtYW50aWNQYXRoU2VydmljZTogU2VtYW50aWNQYXRoU2VydmljZSwgcHJvdGVjdGVkUm91dGVzOiBQcm90ZWN0ZWRSb3V0ZXNTZXJ2aWNlKTtcbiAgICBjYW5BY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGFueT47XG4gICAgLyoqXG4gICAgICogV2hlbmV2ZXIgdGhlcmUgaXMgbm8gc3BlY2lmaWMgXCJsb2dvdXRcIiBwYWdlIGNvbmZpZ3VyZWQgaW4gdGhlIENNUyxcbiAgICAgKiB3ZSByZWRpcmVjdCBhZnRlciB0aGUgdXNlciBpcyBsb2dnZWQgb3V0LlxuICAgICAqXG4gICAgICogVGhlIHVzZXIgZ2V0cyByZWRpcmVjdGVkIHRvIHRoZSBob21lcGFnZSwgdW5sZXNzIHRoZSBob21lcGFnZSBpcyBwcm90ZWN0ZWRcbiAgICAgKiAoaW4gY2FzZSBvZiBhIGNsb3NlZCBzaG9wKS4gV2UnbGwgcmVkaXJlY3QgdG8gdGhlIGxvZ2luIHBhZ2UgaW5zdGVhZC5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgcmVkaXJlY3QoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBMb2cgdXNlciBvdXQuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIGRlbGVnYXRlZCB0byB0aGUgYEF1dGhTZXJ2aWNlYC5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgbG9nb3V0KCk6IHZvaWQ7XG59XG4iXX0=