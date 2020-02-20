import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { AuthService, CmsService, PageType, RoutingService, SemanticPathService, ProtectedRoutesService, FeatureConfigService, } from '@spartacus/core';
import { tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
let LogoutGuard = class LogoutGuard {
    /**
     * @deprecated since 1.4
     * Check #5666 for more info
     *
     * TODO(issue:5666) Deprecated since 1.4
     */
    constructor(auth, cms, routing, semanticPathService, protectedRoutes, featureConfig) {
        this.auth = auth;
        this.cms = cms;
        this.routing = routing;
        this.semanticPathService = semanticPathService;
        this.protectedRoutes = protectedRoutes;
        this.featureConfig = featureConfig;
    }
    canActivate() {
        this.logout();
        return this.cms
            .hasPage({
            id: this.semanticPathService.get('logout'),
            type: PageType.CONTENT_PAGE,
        })
            .pipe(tap(hasPage => {
            if (!hasPage) {
                this.redirect();
            }
        }));
    }
    redirect() {
        // TODO(issue:5666) Deprecated since 1.4
        const cxRoute = this.featureConfig.isLevel('1.4') &&
            this.protectedRoutes &&
            this.protectedRoutes.shouldProtect
            ? 'login'
            : 'home';
        this.routing.go({ cxRoute });
    }
    logout() {
        this.auth.logout();
    }
};
LogoutGuard.ctorParameters = () => [
    { type: AuthService },
    { type: CmsService },
    { type: RoutingService },
    { type: SemanticPathService },
    { type: ProtectedRoutesService },
    { type: FeatureConfigService }
];
LogoutGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function LogoutGuard_Factory() { return new LogoutGuard(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.SemanticPathService), i0.ɵɵinject(i1.ProtectedRoutesService), i0.ɵɵinject(i1.FeatureConfigService)); }, token: LogoutGuard, providedIn: "root" });
LogoutGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], LogoutGuard);
export { LogoutGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LWd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvdXNlci9sb2dvdXQvbG9nb3V0LWd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFDTCxXQUFXLEVBQ1gsVUFBVSxFQUNWLFFBQVEsRUFDUixjQUFjLEVBQ2QsbUJBQW1CLEVBQ25CLHNCQUFzQixFQUN0QixvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUtyQyxJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFXO0lBQ3RCOzs7OztPQUtHO0lBQ0gsWUFDWSxJQUFpQixFQUNqQixHQUFlLEVBQ2YsT0FBdUIsRUFDdkIsbUJBQXdDLEVBQ3hDLGVBQXdDLEVBQ3hDLGFBQW9DO1FBTHBDLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsb0JBQWUsR0FBZixlQUFlLENBQXlCO1FBQ3hDLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtJQUM3QyxDQUFDO0lBRUosV0FBVztRQUNULElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVkLE9BQU8sSUFBSSxDQUFDLEdBQUc7YUFDWixPQUFPLENBQUM7WUFDUCxFQUFFLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7WUFDMUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxZQUFZO1NBQzVCLENBQUM7YUFDRCxJQUFJLENBQ0gsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1osSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDWixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDakI7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ04sQ0FBQztJQUVTLFFBQVE7UUFDaEIsd0NBQXdDO1FBQ3hDLE1BQU0sT0FBTyxHQUNYLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNqQyxJQUFJLENBQUMsZUFBZTtZQUNwQixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWE7WUFDaEMsQ0FBQyxDQUFDLE9BQU87WUFDVCxDQUFDLENBQUMsTUFBTSxDQUFDO1FBRWIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFUyxNQUFNO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNyQixDQUFDO0NBQ0YsQ0FBQTs7WUF4Q21CLFdBQVc7WUFDWixVQUFVO1lBQ04sY0FBYztZQUNGLG1CQUFtQjtZQUN0QixzQkFBc0I7WUFDeEIsb0JBQW9COzs7QUFickMsV0FBVztJQUh2QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csV0FBVyxDQWdEdkI7U0FoRFksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEF1dGhTZXJ2aWNlLFxuICBDbXNTZXJ2aWNlLFxuICBQYWdlVHlwZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFNlbWFudGljUGF0aFNlcnZpY2UsXG4gIFByb3RlY3RlZFJvdXRlc1NlcnZpY2UsXG4gIEZlYXR1cmVDb25maWdTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTG9nb3V0R3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSAxLjRcbiAgICogQ2hlY2sgIzU2NjYgZm9yIG1vcmUgaW5mb1xuICAgKlxuICAgKiBUT0RPKGlzc3VlOjU2NjYpIERlcHJlY2F0ZWQgc2luY2UgMS40XG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNtczogQ21zU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZzogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHNlbWFudGljUGF0aFNlcnZpY2U6IFNlbWFudGljUGF0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHByb3RlY3RlZFJvdXRlcz86IFByb3RlY3RlZFJvdXRlc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGZlYXR1cmVDb25maWc/OiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICB0aGlzLmxvZ291dCgpO1xuXG4gICAgcmV0dXJuIHRoaXMuY21zXG4gICAgICAuaGFzUGFnZSh7XG4gICAgICAgIGlkOiB0aGlzLnNlbWFudGljUGF0aFNlcnZpY2UuZ2V0KCdsb2dvdXQnKSxcbiAgICAgICAgdHlwZTogUGFnZVR5cGUuQ09OVEVOVF9QQUdFLFxuICAgICAgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoaGFzUGFnZSA9PiB7XG4gICAgICAgICAgaWYgKCFoYXNQYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnJlZGlyZWN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZWRpcmVjdCgpOiB2b2lkIHtcbiAgICAvLyBUT0RPKGlzc3VlOjU2NjYpIERlcHJlY2F0ZWQgc2luY2UgMS40XG4gICAgY29uc3QgY3hSb3V0ZTogc3RyaW5nID1cbiAgICAgIHRoaXMuZmVhdHVyZUNvbmZpZy5pc0xldmVsKCcxLjQnKSAmJlxuICAgICAgdGhpcy5wcm90ZWN0ZWRSb3V0ZXMgJiZcbiAgICAgIHRoaXMucHJvdGVjdGVkUm91dGVzLnNob3VsZFByb3RlY3RcbiAgICAgICAgPyAnbG9naW4nXG4gICAgICAgIDogJ2hvbWUnO1xuXG4gICAgdGhpcy5yb3V0aW5nLmdvKHsgY3hSb3V0ZSB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBsb2dvdXQoKTogdm9pZCB7XG4gICAgdGhpcy5hdXRoLmxvZ291dCgpO1xuICB9XG59XG4iXX0=