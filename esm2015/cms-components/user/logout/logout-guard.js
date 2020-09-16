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
export class LogoutGuard {
    constructor(auth, cms, routing, semanticPathService, protectedRoutes) {
        this.auth = auth;
        this.cms = cms;
        this.routing = routing;
        this.semanticPathService = semanticPathService;
        this.protectedRoutes = protectedRoutes;
    }
    canActivate() {
        this.logout();
        return this.cms
            .hasPage({
            id: this.semanticPathService.get('logout'),
            type: PageType.CONTENT_PAGE,
        })
            .pipe(tap((hasPage) => {
            if (!hasPage) {
                this.redirect();
            }
        }));
    }
    /**
     * Whenever there is no specific "logout" page configured in the CMS,
     * we redirect after the user is logged out.
     *
     * The user gets redirected to the homepage, unless the homepage is protected
     * (in case of a closed shop). We'll redirect to the login page instead.
     */
    redirect() {
        const cxRoute = this.protectedRoutes.shouldProtect ? 'login' : 'home';
        this.routing.go({ cxRoute });
    }
    /**
     * Log user out.
     *
     * This is delegated to the `AuthService`.
     */
    logout() {
        this.auth.logout();
    }
}
LogoutGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function LogoutGuard_Factory() { return new LogoutGuard(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.SemanticPathService), i0.ɵɵinject(i1.ProtectedRoutesService)); }, token: LogoutGuard, providedIn: "root" });
LogoutGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
LogoutGuard.ctorParameters = () => [
    { type: AuthService },
    { type: CmsService },
    { type: RoutingService },
    { type: SemanticPathService },
    { type: ProtectedRoutesService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LWd1YXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvdXNlci9sb2dvdXQvbG9nb3V0LWd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUNMLFdBQVcsRUFDWCxVQUFVLEVBQ1YsUUFBUSxFQUNSLHNCQUFzQixFQUN0QixjQUFjLEVBQ2QsbUJBQW1CLEdBQ3BCLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFFckM7Ozs7OztHQU1HO0FBSUgsTUFBTSxPQUFPLFdBQVc7SUFDdEIsWUFDWSxJQUFpQixFQUNqQixHQUFlLEVBQ2YsT0FBdUIsRUFDdkIsbUJBQXdDLEVBQ3hDLGVBQXVDO1FBSnZDLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsb0JBQWUsR0FBZixlQUFlLENBQXdCO0lBQ2hELENBQUM7SUFFSixXQUFXO1FBQ1QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWQsT0FBTyxJQUFJLENBQUMsR0FBRzthQUNaLE9BQU8sQ0FBQztZQUNQLEVBQUUsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUMxQyxJQUFJLEVBQUUsUUFBUSxDQUFDLFlBQVk7U0FDNUIsQ0FBQzthQUNELElBQUksQ0FDSCxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNkLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ2pCO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNOLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDTyxRQUFRO1FBQ2hCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUN0RSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyxNQUFNO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7O1lBaERGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBbkJDLFdBQVc7WUFDWCxVQUFVO1lBR1YsY0FBYztZQUNkLG1CQUFtQjtZQUZuQixzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBBdXRoU2VydmljZSxcbiAgQ21zU2VydmljZSxcbiAgUGFnZVR5cGUsXG4gIFByb3RlY3RlZFJvdXRlc1NlcnZpY2UsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBTZW1hbnRpY1BhdGhTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKipcbiAqIEd1YXJkcyB0aGUgX2xvZ291dF8gcm91dGUuXG4gKlxuICogVGFrZXMgY2FyZSBvZiByb3V0aW5nIHRoZSB1c2VyIHRvIGEgbG9nb3V0IHBhZ2UgKGlmIGF2YWlsYWJsZSkgb3IgcmVkaXJlY3RzIHRvXG4gKiB0aGUgaG9tZXBhZ2UuIElmIHRoZSBob21lcGFnZSBpcyBwcm90ZWN0ZWQsIHRoZSB1c2VyIGlzIHJlZGlyZWN0ZWRcbiAqIHRvIHRoZSBsb2dpbiByb3V0ZSBpbnN0ZWFkLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTG9nb3V0R3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBhdXRoOiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY21zOiBDbXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgc2VtYW50aWNQYXRoU2VydmljZTogU2VtYW50aWNQYXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcHJvdGVjdGVkUm91dGVzOiBQcm90ZWN0ZWRSb3V0ZXNTZXJ2aWNlXG4gICkge31cblxuICBjYW5BY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHRoaXMubG9nb3V0KCk7XG5cbiAgICByZXR1cm4gdGhpcy5jbXNcbiAgICAgIC5oYXNQYWdlKHtcbiAgICAgICAgaWQ6IHRoaXMuc2VtYW50aWNQYXRoU2VydmljZS5nZXQoJ2xvZ291dCcpLFxuICAgICAgICB0eXBlOiBQYWdlVHlwZS5DT05URU5UX1BBR0UsXG4gICAgICB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcCgoaGFzUGFnZSkgPT4ge1xuICAgICAgICAgIGlmICghaGFzUGFnZSkge1xuICAgICAgICAgICAgdGhpcy5yZWRpcmVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbmV2ZXIgdGhlcmUgaXMgbm8gc3BlY2lmaWMgXCJsb2dvdXRcIiBwYWdlIGNvbmZpZ3VyZWQgaW4gdGhlIENNUyxcbiAgICogd2UgcmVkaXJlY3QgYWZ0ZXIgdGhlIHVzZXIgaXMgbG9nZ2VkIG91dC5cbiAgICpcbiAgICogVGhlIHVzZXIgZ2V0cyByZWRpcmVjdGVkIHRvIHRoZSBob21lcGFnZSwgdW5sZXNzIHRoZSBob21lcGFnZSBpcyBwcm90ZWN0ZWRcbiAgICogKGluIGNhc2Ugb2YgYSBjbG9zZWQgc2hvcCkuIFdlJ2xsIHJlZGlyZWN0IHRvIHRoZSBsb2dpbiBwYWdlIGluc3RlYWQuXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVkaXJlY3QoKTogdm9pZCB7XG4gICAgY29uc3QgY3hSb3V0ZSA9IHRoaXMucHJvdGVjdGVkUm91dGVzLnNob3VsZFByb3RlY3QgPyAnbG9naW4nIDogJ2hvbWUnO1xuICAgIHRoaXMucm91dGluZy5nbyh7IGN4Um91dGUgfSk7XG4gIH1cblxuICAvKipcbiAgICogTG9nIHVzZXIgb3V0LlxuICAgKlxuICAgKiBUaGlzIGlzIGRlbGVnYXRlZCB0byB0aGUgYEF1dGhTZXJ2aWNlYC5cbiAgICovXG4gIHByb3RlY3RlZCBsb2dvdXQoKTogdm9pZCB7XG4gICAgdGhpcy5hdXRoLmxvZ291dCgpO1xuICB9XG59XG4iXX0=