import { Injectable } from '@angular/core';
import { AuthConfigService, AuthRedirectService, AuthService, OAuthFlow, } from '@spartacus/core';
import { EMPTY, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { CmsPageGuard } from '../../../cms-structure/guards/cms-page.guard';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "../../../cms-structure/guards/cms-page.guard";
/**
 * Guards the _login_ route.
 *
 * Takes care of routing the user to a auth server login page (if implicit or code flow is used).
 * In case of Resource Owner Password Flow just renders the page as normal CMS page.
 */
export class LoginGuard {
    constructor(authService, authRedirectService, authConfigService, cmsPageGuard) {
        this.authService = authService;
        this.authRedirectService = authRedirectService;
        this.authConfigService = authConfigService;
        this.cmsPageGuard = cmsPageGuard;
    }
    canActivate(route, state) {
        return this.authService.isUserLoggedIn().pipe(take(1), switchMap((isUserLoggedIn) => {
            if (this.authConfigService.getOAuthFlow() ===
                OAuthFlow.ResourceOwnerPasswordFlow ||
                isUserLoggedIn) {
                return this.cmsPageGuard.canActivate(route, state);
            }
            else {
                // Remember the previous url, so we can redirect user to that page after OAuth server callback
                this.authRedirectService.reportNotAuthGuard();
                // This method can trigger redirect to OAuth server that's why we don't return anything in this case
                const redirected = this.authService.loginWithRedirect();
                if (!redirected) {
                    return of(false);
                }
                return EMPTY;
            }
        }));
    }
}
LoginGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function LoginGuard_Factory() { return new LoginGuard(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i1.AuthRedirectService), i0.ɵɵinject(i1.AuthConfigService), i0.ɵɵinject(i2.CmsPageGuard)); }, token: LoginGuard, providedIn: "root" });
LoginGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
LoginGuard.ctorParameters = () => [
    { type: AuthService },
    { type: AuthRedirectService },
    { type: AuthConfigService },
    { type: CmsPageGuard }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uZ3VhcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy91c2VyL2xvZ2luLXJvdXRlL2xvZ2luLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPM0MsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixtQkFBbUIsRUFDbkIsV0FBVyxFQUNYLFNBQVMsR0FDVixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxLQUFLLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhDQUE4QyxDQUFDOzs7O0FBRTVFOzs7OztHQUtHO0FBSUgsTUFBTSxPQUFPLFVBQVU7SUFDckIsWUFDWSxXQUF3QixFQUN4QixtQkFBd0MsRUFDeEMsaUJBQW9DLEVBQ3BDLFlBQTBCO1FBSDFCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUNuQyxDQUFDO0lBRUosV0FBVyxDQUNULEtBQTZCLEVBQzdCLEtBQTBCO1FBRTFCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQzNDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxTQUFTLENBQUMsQ0FBQyxjQUFjLEVBQUUsRUFBRTtZQUMzQixJQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUU7Z0JBQ25DLFNBQVMsQ0FBQyx5QkFBeUI7Z0JBQ3JDLGNBQWMsRUFDZDtnQkFDQSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNwRDtpQkFBTTtnQkFDTCw4RkFBOEY7Z0JBQzlGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2dCQUM5QyxvR0FBb0c7Z0JBQ3BHLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDZixPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDbEI7Z0JBQ0QsT0FBTyxLQUFLLENBQUM7YUFDZDtRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7O1lBcENGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBZkMsV0FBVztZQURYLG1CQUFtQjtZQURuQixpQkFBaUI7WUFPVixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgQ2FuQWN0aXZhdGUsXG4gIFJvdXRlclN0YXRlU25hcHNob3QsXG4gIFVybFRyZWUsXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBBdXRoQ29uZmlnU2VydmljZSxcbiAgQXV0aFJlZGlyZWN0U2VydmljZSxcbiAgQXV0aFNlcnZpY2UsXG4gIE9BdXRoRmxvdyxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEVNUFRZLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zUGFnZUd1YXJkIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9ndWFyZHMvY21zLXBhZ2UuZ3VhcmQnO1xuXG4vKipcbiAqIEd1YXJkcyB0aGUgX2xvZ2luXyByb3V0ZS5cbiAqXG4gKiBUYWtlcyBjYXJlIG9mIHJvdXRpbmcgdGhlIHVzZXIgdG8gYSBhdXRoIHNlcnZlciBsb2dpbiBwYWdlIChpZiBpbXBsaWNpdCBvciBjb2RlIGZsb3cgaXMgdXNlZCkuXG4gKiBJbiBjYXNlIG9mIFJlc291cmNlIE93bmVyIFBhc3N3b3JkIEZsb3cganVzdCByZW5kZXJzIHRoZSBwYWdlIGFzIG5vcm1hbCBDTVMgcGFnZS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGF1dGhSZWRpcmVjdFNlcnZpY2U6IEF1dGhSZWRpcmVjdFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGF1dGhDb25maWdTZXJ2aWNlOiBBdXRoQ29uZmlnU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY21zUGFnZUd1YXJkOiBDbXNQYWdlR3VhcmRcbiAgKSB7fVxuXG4gIGNhbkFjdGl2YXRlKFxuICAgIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5pc1VzZXJMb2dnZWRJbigpLnBpcGUoXG4gICAgICB0YWtlKDEpLFxuICAgICAgc3dpdGNoTWFwKChpc1VzZXJMb2dnZWRJbikgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5hdXRoQ29uZmlnU2VydmljZS5nZXRPQXV0aEZsb3coKSA9PT1cbiAgICAgICAgICAgIE9BdXRoRmxvdy5SZXNvdXJjZU93bmVyUGFzc3dvcmRGbG93IHx8XG4gICAgICAgICAgaXNVc2VyTG9nZ2VkSW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY21zUGFnZUd1YXJkLmNhbkFjdGl2YXRlKHJvdXRlLCBzdGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gUmVtZW1iZXIgdGhlIHByZXZpb3VzIHVybCwgc28gd2UgY2FuIHJlZGlyZWN0IHVzZXIgdG8gdGhhdCBwYWdlIGFmdGVyIE9BdXRoIHNlcnZlciBjYWxsYmFja1xuICAgICAgICAgIHRoaXMuYXV0aFJlZGlyZWN0U2VydmljZS5yZXBvcnROb3RBdXRoR3VhcmQoKTtcbiAgICAgICAgICAvLyBUaGlzIG1ldGhvZCBjYW4gdHJpZ2dlciByZWRpcmVjdCB0byBPQXV0aCBzZXJ2ZXIgdGhhdCdzIHdoeSB3ZSBkb24ndCByZXR1cm4gYW55dGhpbmcgaW4gdGhpcyBjYXNlXG4gICAgICAgICAgY29uc3QgcmVkaXJlY3RlZCA9IHRoaXMuYXV0aFNlcnZpY2UubG9naW5XaXRoUmVkaXJlY3QoKTtcbiAgICAgICAgICBpZiAoIXJlZGlyZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBFTVBUWTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=