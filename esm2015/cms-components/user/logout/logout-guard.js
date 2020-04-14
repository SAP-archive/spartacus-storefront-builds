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
let LogoutGuard = class LogoutGuard {
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
};
LogoutGuard.ctorParameters = () => [
    { type: AuthService },
    { type: CmsService },
    { type: RoutingService },
    { type: SemanticPathService },
    { type: ProtectedRoutesService }
];
LogoutGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function LogoutGuard_Factory() { return new LogoutGuard(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.SemanticPathService), i0.ɵɵinject(i1.ProtectedRoutesService)); }, token: LogoutGuard, providedIn: "root" });
LogoutGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], LogoutGuard);
export { LogoutGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LWd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvdXNlci9sb2dvdXQvbG9nb3V0LWd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFDTCxXQUFXLEVBQ1gsVUFBVSxFQUNWLFFBQVEsRUFDUixzQkFBc0IsRUFDdEIsY0FBYyxFQUNkLG1CQUFtQixHQUNwQixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBRXJDOzs7Ozs7R0FNRztBQUlILElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVc7SUFDdEIsWUFDWSxJQUFpQixFQUNqQixHQUFlLEVBQ2YsT0FBdUIsRUFDdkIsbUJBQXdDLEVBQ3hDLGVBQXVDO1FBSnZDLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsb0JBQWUsR0FBZixlQUFlLENBQXdCO0lBQ2hELENBQUM7SUFFSixXQUFXO1FBQ1QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWQsT0FBTyxJQUFJLENBQUMsR0FBRzthQUNaLE9BQU8sQ0FBQztZQUNQLEVBQUUsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUMxQyxJQUFJLEVBQUUsUUFBUSxDQUFDLFlBQVk7U0FDNUIsQ0FBQzthQUNELElBQUksQ0FDSCxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNkLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ2pCO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNOLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDTyxRQUFRO1FBQ2hCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUN0RSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyxNQUFNO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNyQixDQUFDO0NBQ0YsQ0FBQTs7WUE1Q21CLFdBQVc7WUFDWixVQUFVO1lBQ04sY0FBYztZQUNGLG1CQUFtQjtZQUN2QixzQkFBc0I7OztBQU54QyxXQUFXO0lBSHZCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxXQUFXLENBOEN2QjtTQTlDWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQXV0aFNlcnZpY2UsXG4gIENtc1NlcnZpY2UsXG4gIFBhZ2VUeXBlLFxuICBQcm90ZWN0ZWRSb3V0ZXNTZXJ2aWNlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgU2VtYW50aWNQYXRoU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqXG4gKiBHdWFyZHMgdGhlIF9sb2dvdXRfIHJvdXRlLlxuICpcbiAqIFRha2VzIGNhcmUgb2Ygcm91dGluZyB0aGUgdXNlciB0byBhIGxvZ291dCBwYWdlIChpZiBhdmFpbGFibGUpIG9yIHJlZGlyZWN0cyB0b1xuICogdGhlIGhvbWVwYWdlLiBJZiB0aGUgaG9tZXBhZ2UgaXMgcHJvdGVjdGVkLCB0aGUgdXNlciBpcyByZWRpcmVjdGVkXG4gKiB0byB0aGUgbG9naW4gcm91dGUgaW5zdGVhZC5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIExvZ291dEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNtczogQ21zU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZzogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHNlbWFudGljUGF0aFNlcnZpY2U6IFNlbWFudGljUGF0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHByb3RlY3RlZFJvdXRlczogUHJvdGVjdGVkUm91dGVzU2VydmljZVxuICApIHt9XG5cbiAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICB0aGlzLmxvZ291dCgpO1xuXG4gICAgcmV0dXJuIHRoaXMuY21zXG4gICAgICAuaGFzUGFnZSh7XG4gICAgICAgIGlkOiB0aGlzLnNlbWFudGljUGF0aFNlcnZpY2UuZ2V0KCdsb2dvdXQnKSxcbiAgICAgICAgdHlwZTogUGFnZVR5cGUuQ09OVEVOVF9QQUdFLFxuICAgICAgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoKGhhc1BhZ2UpID0+IHtcbiAgICAgICAgICBpZiAoIWhhc1BhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucmVkaXJlY3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW5ldmVyIHRoZXJlIGlzIG5vIHNwZWNpZmljIFwibG9nb3V0XCIgcGFnZSBjb25maWd1cmVkIGluIHRoZSBDTVMsXG4gICAqIHdlIHJlZGlyZWN0IGFmdGVyIHRoZSB1c2VyIGlzIGxvZ2dlZCBvdXQuXG4gICAqXG4gICAqIFRoZSB1c2VyIGdldHMgcmVkaXJlY3RlZCB0byB0aGUgaG9tZXBhZ2UsIHVubGVzcyB0aGUgaG9tZXBhZ2UgaXMgcHJvdGVjdGVkXG4gICAqIChpbiBjYXNlIG9mIGEgY2xvc2VkIHNob3ApLiBXZSdsbCByZWRpcmVjdCB0byB0aGUgbG9naW4gcGFnZSBpbnN0ZWFkLlxuICAgKi9cbiAgcHJvdGVjdGVkIHJlZGlyZWN0KCk6IHZvaWQge1xuICAgIGNvbnN0IGN4Um91dGUgPSB0aGlzLnByb3RlY3RlZFJvdXRlcy5zaG91bGRQcm90ZWN0ID8gJ2xvZ2luJyA6ICdob21lJztcbiAgICB0aGlzLnJvdXRpbmcuZ28oeyBjeFJvdXRlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZyB1c2VyIG91dC5cbiAgICpcbiAgICogVGhpcyBpcyBkZWxlZ2F0ZWQgdG8gdGhlIGBBdXRoU2VydmljZWAuXG4gICAqL1xuICBwcm90ZWN0ZWQgbG9nb3V0KCk6IHZvaWQge1xuICAgIHRoaXMuYXV0aC5sb2dvdXQoKTtcbiAgfVxufVxuIl19