import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ActiveCartService, AuthService, RoutingService, } from '@spartacus/core';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
let NotCheckoutAuthGuard = class NotCheckoutAuthGuard {
    constructor(routingService, authService, activeCartService) {
        this.routingService = routingService;
        this.authService = authService;
        this.activeCartService = activeCartService;
    }
    canActivate() {
        return this.authService.getUserToken().pipe(map(token => {
            if (token.access_token) {
                this.routingService.go({ cxRoute: 'home' });
            }
            else if (this.activeCartService.isGuestCart()) {
                this.routingService.go({ cxRoute: 'cart' });
                return false;
            }
            return !token.access_token;
        }));
    }
};
NotCheckoutAuthGuard.ctorParameters = () => [
    { type: RoutingService },
    { type: AuthService },
    { type: ActiveCartService }
];
NotCheckoutAuthGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function NotCheckoutAuthGuard_Factory() { return new NotCheckoutAuthGuard(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i1.ActiveCartService)); }, token: NotCheckoutAuthGuard, providedIn: "root" });
NotCheckoutAuthGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], NotCheckoutAuthGuard);
export { NotCheckoutAuthGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWNoZWNrb3V0LWF1dGguZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9ndWFyZHMvbm90LWNoZWNrb3V0LWF1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixXQUFXLEVBQ1gsY0FBYyxHQUNmLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFLckMsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFDL0IsWUFDWSxjQUE4QixFQUM5QixXQUF3QixFQUN4QixpQkFBb0M7UUFGcEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDN0MsQ0FBQztJQUVKLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUN6QyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDVixJQUFJLEtBQUssQ0FBQyxZQUFZLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7YUFDN0M7aUJBQU0sSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEVBQUU7Z0JBQy9DLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7Z0JBQzVDLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFDRCxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7O1lBbEI2QixjQUFjO1lBQ2pCLFdBQVc7WUFDTCxpQkFBaUI7OztBQUpyQyxvQkFBb0I7SUFIaEMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLG9CQUFvQixDQW9CaEM7U0FwQlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQWN0aXZlQ2FydFNlcnZpY2UsXG4gIEF1dGhTZXJ2aWNlLFxuICBSb3V0aW5nU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE5vdENoZWNrb3V0QXV0aEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZVxuICApIHt9XG5cbiAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlclRva2VuKCkucGlwZShcbiAgICAgIG1hcCh0b2tlbiA9PiB7XG4gICAgICAgIGlmICh0b2tlbi5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgY3hSb3V0ZTogJ2hvbWUnIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuaXNHdWVzdENhcnQoKSkge1xuICAgICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAnY2FydCcgfSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhdG9rZW4uYWNjZXNzX3Rva2VuO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=