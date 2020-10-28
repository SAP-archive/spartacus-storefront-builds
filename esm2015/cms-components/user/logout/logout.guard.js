import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, CmsService, PageType, ProtectedRoutesService, SemanticPathService, } from '@spartacus/core';
import { from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "@angular/router";
/**
 * Guards the _logout_ route.
 *
 * Takes care of routing the user to a logout page (if available) or redirects to
 * the homepage. If the homepage is protected, the user is redirected
 * to the login route instead.
 */
export class LogoutGuard {
    constructor(auth, cms, semanticPathService, protectedRoutes, router) {
        this.auth = auth;
        this.cms = cms;
        this.semanticPathService = semanticPathService;
        this.protectedRoutes = protectedRoutes;
        this.router = router;
    }
    canActivate() {
        /**
         * First we want to complete logout process before redirecting to logout page
         * We want to avoid errors like `token is no longer valid`
         */
        return from(this.logout()).pipe(switchMap(() => {
            return this.cms
                .hasPage({
                id: this.semanticPathService.get('logout'),
                type: PageType.CONTENT_PAGE,
            })
                .pipe(map((hasPage) => {
                if (!hasPage) {
                    return this.getRedirectUrl();
                }
                // TODO(#9385): Use CMS page guard here.
                return hasPage;
            }));
        }));
    }
    logout() {
        return this.auth.logout();
    }
    /**
     * Whenever there is no specific "logout" page configured in the CMS,
     * we redirect after the user is logged out.
     *
     * The user gets redirected to the homepage, unless the homepage is protected
     * (in case of a closed shop). We'll redirect to the login page instead.
     */
    getRedirectUrl() {
        const cxRoute = this.protectedRoutes.shouldProtect ? 'login' : 'home';
        return this.router.parseUrl(this.semanticPathService.get(cxRoute));
    }
}
LogoutGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function LogoutGuard_Factory() { return new LogoutGuard(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i1.SemanticPathService), i0.ɵɵinject(i1.ProtectedRoutesService), i0.ɵɵinject(i2.Router)); }, token: LogoutGuard, providedIn: "root" });
LogoutGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
LogoutGuard.ctorParameters = () => [
    { type: AuthService },
    { type: CmsService },
    { type: SemanticPathService },
    { type: ProtectedRoutesService },
    { type: Router }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0Lmd1YXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvdXNlci9sb2dvdXQvbG9nb3V0Lmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFlLE1BQU0sRUFBVyxNQUFNLGlCQUFpQixDQUFDO0FBQy9ELE9BQU8sRUFDTCxXQUFXLEVBQ1gsVUFBVSxFQUNWLFFBQVEsRUFDUixzQkFBc0IsRUFDdEIsbUJBQW1CLEdBQ3BCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLElBQUksRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN4QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRWhEOzs7Ozs7R0FNRztBQUlILE1BQU0sT0FBTyxXQUFXO0lBQ3RCLFlBQ1ksSUFBaUIsRUFDakIsR0FBZSxFQUNmLG1CQUF3QyxFQUN4QyxlQUF1QyxFQUN2QyxNQUFjO1FBSmQsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNqQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2Ysd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxvQkFBZSxHQUFmLGVBQWUsQ0FBd0I7UUFDdkMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUN2QixDQUFDO0lBRUosV0FBVztRQUNUOzs7V0FHRztRQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDN0IsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNiLE9BQU8sSUFBSSxDQUFDLEdBQUc7aUJBQ1osT0FBTyxDQUFDO2dCQUNQLEVBQUUsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztnQkFDMUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxZQUFZO2FBQzVCLENBQUM7aUJBQ0QsSUFBSSxDQUNILEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUNkLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ1osT0FBTyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7aUJBQzlCO2dCQUNELHdDQUF3QztnQkFDeEMsT0FBTyxPQUFPLENBQUM7WUFDakIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRVMsTUFBTTtRQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ08sY0FBYztRQUN0QixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDdEUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQzs7OztZQW5ERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQWxCQyxXQUFXO1lBQ1gsVUFBVTtZQUdWLG1CQUFtQjtZQURuQixzQkFBc0I7WUFMRixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlciwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBBdXRoU2VydmljZSxcbiAgQ21zU2VydmljZSxcbiAgUGFnZVR5cGUsXG4gIFByb3RlY3RlZFJvdXRlc1NlcnZpY2UsXG4gIFNlbWFudGljUGF0aFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqXG4gKiBHdWFyZHMgdGhlIF9sb2dvdXRfIHJvdXRlLlxuICpcbiAqIFRha2VzIGNhcmUgb2Ygcm91dGluZyB0aGUgdXNlciB0byBhIGxvZ291dCBwYWdlIChpZiBhdmFpbGFibGUpIG9yIHJlZGlyZWN0cyB0b1xuICogdGhlIGhvbWVwYWdlLiBJZiB0aGUgaG9tZXBhZ2UgaXMgcHJvdGVjdGVkLCB0aGUgdXNlciBpcyByZWRpcmVjdGVkXG4gKiB0byB0aGUgbG9naW4gcm91dGUgaW5zdGVhZC5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIExvZ291dEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNtczogQ21zU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgc2VtYW50aWNQYXRoU2VydmljZTogU2VtYW50aWNQYXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcHJvdGVjdGVkUm91dGVzOiBQcm90ZWN0ZWRSb3V0ZXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlclxuICApIHt9XG5cbiAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIC8qKlxuICAgICAqIEZpcnN0IHdlIHdhbnQgdG8gY29tcGxldGUgbG9nb3V0IHByb2Nlc3MgYmVmb3JlIHJlZGlyZWN0aW5nIHRvIGxvZ291dCBwYWdlXG4gICAgICogV2Ugd2FudCB0byBhdm9pZCBlcnJvcnMgbGlrZSBgdG9rZW4gaXMgbm8gbG9uZ2VyIHZhbGlkYFxuICAgICAqL1xuICAgIHJldHVybiBmcm9tKHRoaXMubG9nb3V0KCkpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jbXNcbiAgICAgICAgICAuaGFzUGFnZSh7XG4gICAgICAgICAgICBpZDogdGhpcy5zZW1hbnRpY1BhdGhTZXJ2aWNlLmdldCgnbG9nb3V0JyksXG4gICAgICAgICAgICB0eXBlOiBQYWdlVHlwZS5DT05URU5UX1BBR0UsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIG1hcCgoaGFzUGFnZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIWhhc1BhZ2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSZWRpcmVjdFVybCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIFRPRE8oIzkzODUpOiBVc2UgQ01TIHBhZ2UgZ3VhcmQgaGVyZS5cbiAgICAgICAgICAgICAgcmV0dXJuIGhhc1BhZ2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgbG9nb3V0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aC5sb2dvdXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuZXZlciB0aGVyZSBpcyBubyBzcGVjaWZpYyBcImxvZ291dFwiIHBhZ2UgY29uZmlndXJlZCBpbiB0aGUgQ01TLFxuICAgKiB3ZSByZWRpcmVjdCBhZnRlciB0aGUgdXNlciBpcyBsb2dnZWQgb3V0LlxuICAgKlxuICAgKiBUaGUgdXNlciBnZXRzIHJlZGlyZWN0ZWQgdG8gdGhlIGhvbWVwYWdlLCB1bmxlc3MgdGhlIGhvbWVwYWdlIGlzIHByb3RlY3RlZFxuICAgKiAoaW4gY2FzZSBvZiBhIGNsb3NlZCBzaG9wKS4gV2UnbGwgcmVkaXJlY3QgdG8gdGhlIGxvZ2luIHBhZ2UgaW5zdGVhZC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRSZWRpcmVjdFVybCgpOiBVcmxUcmVlIHtcbiAgICBjb25zdCBjeFJvdXRlID0gdGhpcy5wcm90ZWN0ZWRSb3V0ZXMuc2hvdWxkUHJvdGVjdCA/ICdsb2dpbicgOiAnaG9tZSc7XG4gICAgcmV0dXJuIHRoaXMucm91dGVyLnBhcnNlVXJsKHRoaXMuc2VtYW50aWNQYXRoU2VydmljZS5nZXQoY3hSb3V0ZSkpO1xuICB9XG59XG4iXX0=