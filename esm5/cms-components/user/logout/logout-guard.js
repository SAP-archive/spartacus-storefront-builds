import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { AuthService, CmsService, PageType, ProtectedRoutesService, RoutingService, SemanticPathService, } from '@spartacus/core';
import { tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
/**
 * Guards the _logout_ route.
 *
 * Takes care of routing the user to a logout page (if available) or redirects to
 * the homepage. If the homepage is protected, the user is redirected
 * to the login route instead.
 */
var LogoutGuard = /** @class */ (function () {
    function LogoutGuard(auth, cms, routing, semanticPathService, protectedRoutes) {
        this.auth = auth;
        this.cms = cms;
        this.routing = routing;
        this.semanticPathService = semanticPathService;
        this.protectedRoutes = protectedRoutes;
    }
    LogoutGuard.prototype.canActivate = function () {
        var _this = this;
        this.logout();
        return this.cms
            .hasPage({
            id: this.semanticPathService.get('logout'),
            type: PageType.CONTENT_PAGE,
        })
            .pipe(tap(function (hasPage) {
            if (!hasPage) {
                _this.redirect();
            }
        }));
    };
    /**
     * Whenever there is no specific "logout" page configured in the CMS,
     * we redirect after the user is logged out.
     *
     * The user gets redirected to the homepage, unless the homepage is protected
     * (in case of a closed shop). We'll redirect to the login page instead.
     */
    LogoutGuard.prototype.redirect = function () {
        var cxRoute = this.protectedRoutes.shouldProtect ? 'login' : 'home';
        this.routing.go({ cxRoute: cxRoute });
    };
    /**
     * Log user out.
     *
     * This is delegated to the `AuthService`.
     */
    LogoutGuard.prototype.logout = function () {
        this.auth.logout();
    };
    LogoutGuard.ctorParameters = function () { return [
        { type: AuthService },
        { type: CmsService },
        { type: RoutingService },
        { type: SemanticPathService },
        { type: ProtectedRoutesService }
    ]; };
    LogoutGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function LogoutGuard_Factory() { return new LogoutGuard(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.SemanticPathService), i0.ɵɵinject(i1.ProtectedRoutesService)); }, token: LogoutGuard, providedIn: "root" });
    LogoutGuard = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], LogoutGuard);
    return LogoutGuard;
}());
export { LogoutGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LWd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvdXNlci9sb2dvdXQvbG9nb3V0LWd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFDTCxXQUFXLEVBQ1gsVUFBVSxFQUNWLFFBQVEsRUFDUixzQkFBc0IsRUFDdEIsY0FBYyxFQUNkLG1CQUFtQixHQUNwQixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBRXJDOzs7Ozs7R0FNRztBQUlIO0lBQ0UscUJBQ1ksSUFBaUIsRUFDakIsR0FBZSxFQUNmLE9BQXVCLEVBQ3ZCLG1CQUF3QyxFQUN4QyxlQUF1QztRQUp2QyxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2pCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLG9CQUFlLEdBQWYsZUFBZSxDQUF3QjtJQUNoRCxDQUFDO0lBRUosaUNBQVcsR0FBWDtRQUFBLGlCQWVDO1FBZEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWQsT0FBTyxJQUFJLENBQUMsR0FBRzthQUNaLE9BQU8sQ0FBQztZQUNQLEVBQUUsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUMxQyxJQUFJLEVBQUUsUUFBUSxDQUFDLFlBQVk7U0FDNUIsQ0FBQzthQUNELElBQUksQ0FDSCxHQUFHLENBQUMsVUFBQyxPQUFPO1lBQ1YsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDWixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDakI7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ04sQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNPLDhCQUFRLEdBQWxCO1FBQ0UsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3RFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRDs7OztPQUlHO0lBQ08sNEJBQU0sR0FBaEI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3JCLENBQUM7O2dCQTNDaUIsV0FBVztnQkFDWixVQUFVO2dCQUNOLGNBQWM7Z0JBQ0YsbUJBQW1CO2dCQUN2QixzQkFBc0I7OztJQU54QyxXQUFXO1FBSHZCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxXQUFXLENBOEN2QjtzQkFyRUQ7Q0FxRUMsQUE5Q0QsSUE4Q0M7U0E5Q1ksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEF1dGhTZXJ2aWNlLFxuICBDbXNTZXJ2aWNlLFxuICBQYWdlVHlwZSxcbiAgUHJvdGVjdGVkUm91dGVzU2VydmljZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFNlbWFudGljUGF0aFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKlxuICogR3VhcmRzIHRoZSBfbG9nb3V0XyByb3V0ZS5cbiAqXG4gKiBUYWtlcyBjYXJlIG9mIHJvdXRpbmcgdGhlIHVzZXIgdG8gYSBsb2dvdXQgcGFnZSAoaWYgYXZhaWxhYmxlKSBvciByZWRpcmVjdHMgdG9cbiAqIHRoZSBob21lcGFnZS4gSWYgdGhlIGhvbWVwYWdlIGlzIHByb3RlY3RlZCwgdGhlIHVzZXIgaXMgcmVkaXJlY3RlZFxuICogdG8gdGhlIGxvZ2luIHJvdXRlIGluc3RlYWQuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dvdXRHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGF1dGg6IEF1dGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjbXM6IENtc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmc6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBzZW1hbnRpY1BhdGhTZXJ2aWNlOiBTZW1hbnRpY1BhdGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBwcm90ZWN0ZWRSb3V0ZXM6IFByb3RlY3RlZFJvdXRlc1NlcnZpY2VcbiAgKSB7fVxuXG4gIGNhbkFjdGl2YXRlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgdGhpcy5sb2dvdXQoKTtcblxuICAgIHJldHVybiB0aGlzLmNtc1xuICAgICAgLmhhc1BhZ2Uoe1xuICAgICAgICBpZDogdGhpcy5zZW1hbnRpY1BhdGhTZXJ2aWNlLmdldCgnbG9nb3V0JyksXG4gICAgICAgIHR5cGU6IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRSxcbiAgICAgIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKChoYXNQYWdlKSA9PiB7XG4gICAgICAgICAgaWYgKCFoYXNQYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnJlZGlyZWN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuZXZlciB0aGVyZSBpcyBubyBzcGVjaWZpYyBcImxvZ291dFwiIHBhZ2UgY29uZmlndXJlZCBpbiB0aGUgQ01TLFxuICAgKiB3ZSByZWRpcmVjdCBhZnRlciB0aGUgdXNlciBpcyBsb2dnZWQgb3V0LlxuICAgKlxuICAgKiBUaGUgdXNlciBnZXRzIHJlZGlyZWN0ZWQgdG8gdGhlIGhvbWVwYWdlLCB1bmxlc3MgdGhlIGhvbWVwYWdlIGlzIHByb3RlY3RlZFxuICAgKiAoaW4gY2FzZSBvZiBhIGNsb3NlZCBzaG9wKS4gV2UnbGwgcmVkaXJlY3QgdG8gdGhlIGxvZ2luIHBhZ2UgaW5zdGVhZC5cbiAgICovXG4gIHByb3RlY3RlZCByZWRpcmVjdCgpOiB2b2lkIHtcbiAgICBjb25zdCBjeFJvdXRlID0gdGhpcy5wcm90ZWN0ZWRSb3V0ZXMuc2hvdWxkUHJvdGVjdCA/ICdsb2dpbicgOiAnaG9tZSc7XG4gICAgdGhpcy5yb3V0aW5nLmdvKHsgY3hSb3V0ZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2cgdXNlciBvdXQuXG4gICAqXG4gICAqIFRoaXMgaXMgZGVsZWdhdGVkIHRvIHRoZSBgQXV0aFNlcnZpY2VgLlxuICAgKi9cbiAgcHJvdGVjdGVkIGxvZ291dCgpOiB2b2lkIHtcbiAgICB0aGlzLmF1dGgubG9nb3V0KCk7XG4gIH1cbn1cbiJdfQ==