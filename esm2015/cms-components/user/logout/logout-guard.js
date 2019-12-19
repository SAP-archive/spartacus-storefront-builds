/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AuthService, CmsService, PageType, RoutingService, SemanticPathService, ProtectedRoutesService, FeatureConfigService, } from '@spartacus/core';
import { tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
export class LogoutGuard {
    /**
     * @deprecated since 1.4
     * Check #5666 for more info
     *
     * TODO(issue:5666) Deprecated since 1.4
     * @param {?} auth
     * @param {?} cms
     * @param {?} routing
     * @param {?} semanticPathService
     * @param {?=} protectedRoutes
     * @param {?=} featureConfig
     */
    constructor(auth, cms, routing, semanticPathService, protectedRoutes, featureConfig) {
        this.auth = auth;
        this.cms = cms;
        this.routing = routing;
        this.semanticPathService = semanticPathService;
        this.protectedRoutes = protectedRoutes;
        this.featureConfig = featureConfig;
    }
    /**
     * @return {?}
     */
    canActivate() {
        this.logout();
        return this.cms
            .hasPage({
            id: this.semanticPathService.get('logout'),
            type: PageType.CONTENT_PAGE,
        })
            .pipe(tap((/**
         * @param {?} hasPage
         * @return {?}
         */
        hasPage => {
            if (!hasPage) {
                this.redirect();
            }
        })));
    }
    /**
     * @protected
     * @return {?}
     */
    redirect() {
        // TODO(issue:5666) Deprecated since 1.4
        /** @type {?} */
        const cxRoute = this.featureConfig.isLevel('1.4') &&
            this.protectedRoutes &&
            this.protectedRoutes.shouldProtect
            ? 'login'
            : 'home';
        this.routing.go({ cxRoute });
    }
    /**
     * @protected
     * @return {?}
     */
    logout() {
        this.auth.logout();
    }
}
LogoutGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
LogoutGuard.ctorParameters = () => [
    { type: AuthService },
    { type: CmsService },
    { type: RoutingService },
    { type: SemanticPathService },
    { type: ProtectedRoutesService },
    { type: FeatureConfigService }
];
/** @nocollapse */ LogoutGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LogoutGuard_Factory() { return new LogoutGuard(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.SemanticPathService), i0.ɵɵinject(i1.ProtectedRoutesService), i0.ɵɵinject(i1.FeatureConfigService)); }, token: LogoutGuard, providedIn: "root" });
if (false) {
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
    /**
     * @type {?}
     * @protected
     */
    LogoutGuard.prototype.semanticPathService;
    /**
     * @type {?}
     * @protected
     */
    LogoutGuard.prototype.protectedRoutes;
    /**
     * @type {?}
     * @protected
     */
    LogoutGuard.prototype.featureConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LWd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvdXNlci9sb2dvdXQvbG9nb3V0LWd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFDTCxXQUFXLEVBQ1gsVUFBVSxFQUNWLFFBQVEsRUFDUixjQUFjLEVBQ2QsbUJBQW1CLEVBQ25CLHNCQUFzQixFQUN0QixvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUtyQyxNQUFNLE9BQU8sV0FBVzs7Ozs7Ozs7Ozs7OztJQU90QixZQUNZLElBQWlCLEVBQ2pCLEdBQWUsRUFDZixPQUF1QixFQUN2QixtQkFBd0MsRUFDeEMsZUFBd0MsRUFDeEMsYUFBb0M7UUFMcEMsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNqQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxvQkFBZSxHQUFmLGVBQWUsQ0FBeUI7UUFDeEMsa0JBQWEsR0FBYixhQUFhLENBQXVCO0lBQzdDLENBQUM7Ozs7SUFFSixXQUFXO1FBQ1QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWQsT0FBTyxJQUFJLENBQUMsR0FBRzthQUNaLE9BQU8sQ0FBQztZQUNQLEVBQUUsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUMxQyxJQUFJLEVBQUUsUUFBUSxDQUFDLFlBQVk7U0FDNUIsQ0FBQzthQUNELElBQUksQ0FDSCxHQUFHOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDWixJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNaLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNqQjtRQUNILENBQUMsRUFBQyxDQUNILENBQUM7SUFDTixDQUFDOzs7OztJQUVTLFFBQVE7OztjQUVWLE9BQU8sR0FDWCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDakMsSUFBSSxDQUFDLGVBQWU7WUFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhO1lBQ2hDLENBQUMsQ0FBQyxPQUFPO1lBQ1QsQ0FBQyxDQUFDLE1BQU07UUFFWixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFUyxNQUFNO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7WUFsREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBYkMsV0FBVztZQUNYLFVBQVU7WUFFVixjQUFjO1lBQ2QsbUJBQW1CO1lBQ25CLHNCQUFzQjtZQUN0QixvQkFBb0I7Ozs7Ozs7O0lBZ0JsQiwyQkFBMkI7Ozs7O0lBQzNCLDBCQUF5Qjs7Ozs7SUFDekIsOEJBQWlDOzs7OztJQUNqQywwQ0FBa0Q7Ozs7O0lBQ2xELHNDQUFrRDs7Ozs7SUFDbEQsb0NBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQXV0aFNlcnZpY2UsXG4gIENtc1NlcnZpY2UsXG4gIFBhZ2VUeXBlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgU2VtYW50aWNQYXRoU2VydmljZSxcbiAgUHJvdGVjdGVkUm91dGVzU2VydmljZSxcbiAgRmVhdHVyZUNvbmZpZ1NlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dvdXRHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIDEuNFxuICAgKiBDaGVjayAjNTY2NiBmb3IgbW9yZSBpbmZvXG4gICAqXG4gICAqIFRPRE8oaXNzdWU6NTY2NikgRGVwcmVjYXRlZCBzaW5jZSAxLjRcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBhdXRoOiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY21zOiBDbXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgc2VtYW50aWNQYXRoU2VydmljZTogU2VtYW50aWNQYXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcHJvdGVjdGVkUm91dGVzPzogUHJvdGVjdGVkUm91dGVzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZmVhdHVyZUNvbmZpZz86IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICkge31cblxuICBjYW5BY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHRoaXMubG9nb3V0KCk7XG5cbiAgICByZXR1cm4gdGhpcy5jbXNcbiAgICAgIC5oYXNQYWdlKHtcbiAgICAgICAgaWQ6IHRoaXMuc2VtYW50aWNQYXRoU2VydmljZS5nZXQoJ2xvZ291dCcpLFxuICAgICAgICB0eXBlOiBQYWdlVHlwZS5DT05URU5UX1BBR0UsXG4gICAgICB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcChoYXNQYWdlID0+IHtcbiAgICAgICAgICBpZiAoIWhhc1BhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucmVkaXJlY3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlZGlyZWN0KCk6IHZvaWQge1xuICAgIC8vIFRPRE8oaXNzdWU6NTY2NikgRGVwcmVjYXRlZCBzaW5jZSAxLjRcbiAgICBjb25zdCBjeFJvdXRlOiBzdHJpbmcgPVxuICAgICAgdGhpcy5mZWF0dXJlQ29uZmlnLmlzTGV2ZWwoJzEuNCcpICYmXG4gICAgICB0aGlzLnByb3RlY3RlZFJvdXRlcyAmJlxuICAgICAgdGhpcy5wcm90ZWN0ZWRSb3V0ZXMuc2hvdWxkUHJvdGVjdFxuICAgICAgICA/ICdsb2dpbidcbiAgICAgICAgOiAnaG9tZSc7XG5cbiAgICB0aGlzLnJvdXRpbmcuZ28oeyBjeFJvdXRlIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGxvZ291dCgpOiB2b2lkIHtcbiAgICB0aGlzLmF1dGgubG9nb3V0KCk7XG4gIH1cbn1cbiJdfQ==