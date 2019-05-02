/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AuthService, CmsService, PageType, RoutingService, } from '@spartacus/core';
import { tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
export class LogoutGuard {
    /**
     * @param {?} auth
     * @param {?} cms
     * @param {?} routing
     */
    constructor(auth, cms, routing) {
        this.auth = auth;
        this.cms = cms;
        this.routing = routing;
    }
    /**
     * @return {?}
     */
    canActivate() {
        this.logout();
        return this.cms
            .hasPage({
            id: '/logout',
            type: PageType.CONTENT_PAGE,
        })
            .pipe(tap(hasPage => {
            if (!hasPage) {
                this.routing.go(['/']);
            }
        }));
    }
    /**
     * @protected
     * @return {?}
     */
    logout() {
        this.auth.logout();
    }
}
LogoutGuard.GUARD_NAME = 'LogoutGuard';
LogoutGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
LogoutGuard.ctorParameters = () => [
    { type: AuthService },
    { type: CmsService },
    { type: RoutingService }
];
/** @nocollapse */ LogoutGuard.ngInjectableDef = i0.defineInjectable({ factory: function LogoutGuard_Factory() { return new LogoutGuard(i0.inject(i1.AuthService), i0.inject(i1.CmsService), i0.inject(i1.RoutingService)); }, token: LogoutGuard, providedIn: "root" });
if (false) {
    /** @type {?} */
    LogoutGuard.GUARD_NAME;
    /**
     * @type {?}
     * @protected
     */
    LogoutGuard.prototype.auth;
    /**
     * @type {?}
     * @protected
     */
    LogoutGuard.prototype.cms;
    /**
     * @type {?}
     * @protected
     */
    LogoutGuard.prototype.routing;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LWd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvdXNlci9sb2dvdXQvbG9nb3V0LWd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFDTCxXQUFXLEVBQ1gsVUFBVSxFQUNWLFFBQVEsRUFDUixjQUFjLEdBQ2YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUtyQyxNQUFNLE9BQU8sV0FBVzs7Ozs7O0lBR3RCLFlBQ1ksSUFBaUIsRUFDakIsR0FBZSxFQUNmLE9BQXVCO1FBRnZCLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLFlBQU8sR0FBUCxPQUFPLENBQWdCO0lBQ2hDLENBQUM7Ozs7SUFFSixXQUFXO1FBQ1QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWQsT0FBTyxJQUFJLENBQUMsR0FBRzthQUNaLE9BQU8sQ0FBQztZQUNQLEVBQUUsRUFBRSxTQUFTO1lBQ2IsSUFBSSxFQUFFLFFBQVEsQ0FBQyxZQUFZO1NBQzVCLENBQUM7YUFDRCxJQUFJLENBQ0gsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1osSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDWixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDeEI7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFFUyxNQUFNO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNyQixDQUFDOztBQTNCTSxzQkFBVSxHQUFHLGFBQWEsQ0FBQzs7WUFKbkMsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBVEMsV0FBVztZQUNYLFVBQVU7WUFFVixjQUFjOzs7OztJQVFkLHVCQUFrQzs7Ozs7SUFHaEMsMkJBQTJCOzs7OztJQUMzQiwwQkFBeUI7Ozs7O0lBQ3pCLDhCQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIEF1dGhTZXJ2aWNlLFxuICBDbXNTZXJ2aWNlLFxuICBQYWdlVHlwZSxcbiAgUm91dGluZ1NlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dvdXRHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgc3RhdGljIEdVQVJEX05BTUUgPSAnTG9nb3V0R3VhcmQnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBhdXRoOiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY21zOiBDbXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG5cbiAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICB0aGlzLmxvZ291dCgpO1xuXG4gICAgcmV0dXJuIHRoaXMuY21zXG4gICAgICAuaGFzUGFnZSh7XG4gICAgICAgIGlkOiAnL2xvZ291dCcsXG4gICAgICAgIHR5cGU6IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRSxcbiAgICAgIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKGhhc1BhZ2UgPT4ge1xuICAgICAgICAgIGlmICghaGFzUGFnZSkge1xuICAgICAgICAgICAgdGhpcy5yb3V0aW5nLmdvKFsnLyddKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGxvZ291dCgpOiB2b2lkIHtcbiAgICB0aGlzLmF1dGgubG9nb3V0KCk7XG4gIH1cbn1cbiJdfQ==