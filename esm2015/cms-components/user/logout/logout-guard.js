/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AuthService, CmsService, PageType, RoutingService, SemanticPathService, } from '@spartacus/core';
import { tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
export class LogoutGuard {
    /**
     * @param {?} auth
     * @param {?} cms
     * @param {?} routing
     * @param {?} semanticPathService
     */
    constructor(auth, cms, routing, semanticPathService) {
        this.auth = auth;
        this.cms = cms;
        this.routing = routing;
        this.semanticPathService = semanticPathService;
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
                this.routing.go({ cxRoute: 'home' });
            }
        })));
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
    { type: SemanticPathService }
];
/** @nocollapse */ LogoutGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LogoutGuard_Factory() { return new LogoutGuard(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.SemanticPathService)); }, token: LogoutGuard, providedIn: "root" });
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LWd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvdXNlci9sb2dvdXQvbG9nb3V0LWd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFDTCxXQUFXLEVBQ1gsVUFBVSxFQUNWLFFBQVEsRUFDUixjQUFjLEVBQ2QsbUJBQW1CLEdBQ3BCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFLckMsTUFBTSxPQUFPLFdBQVc7Ozs7Ozs7SUFDdEIsWUFDWSxJQUFpQixFQUNqQixHQUFlLEVBQ2YsT0FBdUIsRUFDdkIsbUJBQXdDO1FBSHhDLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFDakQsQ0FBQzs7OztJQUVKLFdBQVc7UUFDVCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFZCxPQUFPLElBQUksQ0FBQyxHQUFHO2FBQ1osT0FBTyxDQUFDO1lBQ1AsRUFBRSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO1lBQzFDLElBQUksRUFBRSxRQUFRLENBQUMsWUFBWTtTQUM1QixDQUFDO2FBQ0QsSUFBSSxDQUNILEdBQUc7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNaLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQzthQUN0QztRQUNILENBQUMsRUFBQyxDQUNILENBQUM7SUFDTixDQUFDOzs7OztJQUVTLE1BQU07UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3JCLENBQUM7OztZQTlCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFWQyxXQUFXO1lBQ1gsVUFBVTtZQUVWLGNBQWM7WUFDZCxtQkFBbUI7Ozs7Ozs7O0lBU2pCLDJCQUEyQjs7Ozs7SUFDM0IsMEJBQXlCOzs7OztJQUN6Qiw4QkFBaUM7Ozs7O0lBQ2pDLDBDQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIEF1dGhTZXJ2aWNlLFxuICBDbXNTZXJ2aWNlLFxuICBQYWdlVHlwZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFNlbWFudGljUGF0aFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dvdXRHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGF1dGg6IEF1dGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjbXM6IENtc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmc6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBzZW1hbnRpY1BhdGhTZXJ2aWNlOiBTZW1hbnRpY1BhdGhTZXJ2aWNlXG4gICkge31cblxuICBjYW5BY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHRoaXMubG9nb3V0KCk7XG5cbiAgICByZXR1cm4gdGhpcy5jbXNcbiAgICAgIC5oYXNQYWdlKHtcbiAgICAgICAgaWQ6IHRoaXMuc2VtYW50aWNQYXRoU2VydmljZS5nZXQoJ2xvZ291dCcpLFxuICAgICAgICB0eXBlOiBQYWdlVHlwZS5DT05URU5UX1BBR0UsXG4gICAgICB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcChoYXNQYWdlID0+IHtcbiAgICAgICAgICBpZiAoIWhhc1BhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucm91dGluZy5nbyh7IGN4Um91dGU6ICdob21lJyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGxvZ291dCgpOiB2b2lkIHtcbiAgICB0aGlzLmF1dGgubG9nb3V0KCk7XG4gIH1cbn1cbiJdfQ==