/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PageType } from '@spartacus/core';
import { PageLayoutComponent } from '../page/page-layout/page-layout.component';
import { CmsMappingService } from './cms-mapping.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./cms-mapping.service";
var CmsRoutesService = /** @class */ (function () {
    function CmsRoutesService(router, cmsMapping) {
        this.router = router;
        this.cmsMapping = cmsMapping;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    CmsRoutesService.prototype.cmsRouteExist = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        /** @type {?} */
        var isCmsDrivenRoute = url.startsWith('/');
        if (!isCmsDrivenRoute) {
            return false;
        }
        /** @type {?} */
        var routePath = url.substr(1);
        return (isCmsDrivenRoute &&
            !!this.router.config.find(function (route) {
                return route.data && route.data.cxCmsRouteContext && route.path === routePath;
            }));
    };
    /**
     * Contains Cms driven routing logic intended for use use in guards, especially in canActivate method.
     *
     * Will return true, when logic wont have to modify routing (so canActivate could be easily resolved to true)
     * or will return false, when routing configuration was updated and redirection to newly generated route was initiated.
     *
     * @param pageContext
     * @param currentUrl
     */
    /**
     * Contains Cms driven routing logic intended for use use in guards, especially in canActivate method.
     *
     * Will return true, when logic wont have to modify routing (so canActivate could be easily resolved to true)
     * or will return false, when routing configuration was updated and redirection to newly generated route was initiated.
     *
     * @param {?} pageContext
     * @param {?} componentTypes
     * @param {?} currentUrl
     * @return {?}
     */
    CmsRoutesService.prototype.handleCmsRoutesInGuard = /**
     * Contains Cms driven routing logic intended for use use in guards, especially in canActivate method.
     *
     * Will return true, when logic wont have to modify routing (so canActivate could be easily resolved to true)
     * or will return false, when routing configuration was updated and redirection to newly generated route was initiated.
     *
     * @param {?} pageContext
     * @param {?} componentTypes
     * @param {?} currentUrl
     * @return {?}
     */
    function (pageContext, componentTypes, currentUrl) {
        /** @type {?} */
        var componentRoutes = this.cmsMapping.getRoutesForComponents(componentTypes);
        if (componentRoutes.length) {
            if (this.updateRouting(pageContext, componentRoutes)) {
                this.router.navigateByUrl(currentUrl);
                return false;
            }
        }
        return true;
    };
    /**
     * @private
     * @param {?} pageContext
     * @param {?} routes
     * @return {?}
     */
    CmsRoutesService.prototype.updateRouting = /**
     * @private
     * @param {?} pageContext
     * @param {?} routes
     * @return {?}
     */
    function (pageContext, routes) {
        if (pageContext.type === PageType.CONTENT_PAGE &&
            pageContext.id.startsWith('/') &&
            pageContext.id.length > 1) {
            /** @type {?} */
            var newRoute = {
                path: pageContext.id.substr(1),
                component: PageLayoutComponent,
                children: routes,
                data: {
                    cxCmsRouteContext: pageContext,
                },
            };
            this.router.resetConfig(tslib_1.__spread([newRoute], this.router.config));
            return true;
        }
        return false;
    };
    CmsRoutesService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CmsRoutesService.ctorParameters = function () { return [
        { type: Router },
        { type: CmsMappingService }
    ]; };
    /** @nocollapse */ CmsRoutesService.ngInjectableDef = i0.defineInjectable({ factory: function CmsRoutesService_Factory() { return new CmsRoutesService(i0.inject(i1.Router), i0.inject(i2.CmsMappingService)); }, token: CmsRoutesService, providedIn: "root" });
    return CmsRoutesService;
}());
export { CmsRoutesService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CmsRoutesService.prototype.router;
    /**
     * @type {?}
     * @private
     */
    CmsRoutesService.prototype.cmsMapping;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9zZXJ2aWNlcy9jbXMtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBUyxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQXlCLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBRTFEO0lBSUUsMEJBQW9CLE1BQWMsRUFBVSxVQUE2QjtRQUFyRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7SUFBRyxDQUFDOzs7OztJQUU3RSx3Q0FBYTs7OztJQUFiLFVBQWMsR0FBVzs7WUFDakIsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFFNUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3JCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7O1lBRUssU0FBUyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBRS9CLE9BQU8sQ0FDTCxnQkFBZ0I7WUFDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDdkIsVUFBQyxLQUFlO2dCQUNkLE9BQUEsS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssU0FBUztZQUF0RSxDQUFzRSxDQUN6RSxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7Ozs7Ozs7Ozs7OztJQUNILGlEQUFzQjs7Ozs7Ozs7Ozs7SUFBdEIsVUFDRSxXQUF3QixFQUN4QixjQUF3QixFQUN4QixVQUFrQjs7WUFFWixlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FDNUQsY0FBYyxDQUNmO1FBQ0QsSUFBSSxlQUFlLENBQUMsTUFBTSxFQUFFO1lBQzFCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDLEVBQUU7Z0JBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN0QyxPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7Ozs7SUFFTyx3Q0FBYTs7Ozs7O0lBQXJCLFVBQXNCLFdBQXdCLEVBQUUsTUFBZTtRQUM3RCxJQUNFLFdBQVcsQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLFlBQVk7WUFDMUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1lBQzlCLFdBQVcsQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDekI7O2dCQUNNLFFBQVEsR0FBYTtnQkFDekIsSUFBSSxFQUFFLFdBQVcsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDOUIsU0FBUyxFQUFFLG1CQUFtQjtnQkFDOUIsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLElBQUksRUFBRTtvQkFDSixpQkFBaUIsRUFBRSxXQUFXO2lCQUMvQjthQUNGO1lBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLG1CQUFFLFFBQVEsR0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7O2dCQXRFRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVBlLE1BQU07Z0JBR2IsaUJBQWlCOzs7MkJBSjFCO0NBNkVDLEFBdkVELElBdUVDO1NBcEVZLGdCQUFnQjs7Ozs7O0lBQ2Ysa0NBQXNCOzs7OztJQUFFLHNDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ21zUm91dGUsIFBhZ2VDb250ZXh0LCBQYWdlVHlwZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi4vcGFnZS9wYWdlLWxheW91dC9wYWdlLWxheW91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ21zTWFwcGluZ1NlcnZpY2UgfSBmcm9tICcuL2Ntcy1tYXBwaW5nLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ21zUm91dGVzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgY21zTWFwcGluZzogQ21zTWFwcGluZ1NlcnZpY2UpIHt9XG5cbiAgY21zUm91dGVFeGlzdCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlzQ21zRHJpdmVuUm91dGUgPSB1cmwuc3RhcnRzV2l0aCgnLycpO1xuXG4gICAgaWYgKCFpc0Ntc0RyaXZlblJvdXRlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVQYXRoID0gdXJsLnN1YnN0cigxKTtcblxuICAgIHJldHVybiAoXG4gICAgICBpc0Ntc0RyaXZlblJvdXRlICYmXG4gICAgICAhIXRoaXMucm91dGVyLmNvbmZpZy5maW5kKFxuICAgICAgICAocm91dGU6IENtc1JvdXRlKSA9PlxuICAgICAgICAgIHJvdXRlLmRhdGEgJiYgcm91dGUuZGF0YS5jeENtc1JvdXRlQ29udGV4dCAmJiByb3V0ZS5wYXRoID09PSByb3V0ZVBhdGhcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnRhaW5zIENtcyBkcml2ZW4gcm91dGluZyBsb2dpYyBpbnRlbmRlZCBmb3IgdXNlIHVzZSBpbiBndWFyZHMsIGVzcGVjaWFsbHkgaW4gY2FuQWN0aXZhdGUgbWV0aG9kLlxuICAgKlxuICAgKiBXaWxsIHJldHVybiB0cnVlLCB3aGVuIGxvZ2ljIHdvbnQgaGF2ZSB0byBtb2RpZnkgcm91dGluZyAoc28gY2FuQWN0aXZhdGUgY291bGQgYmUgZWFzaWx5IHJlc29sdmVkIHRvIHRydWUpXG4gICAqIG9yIHdpbGwgcmV0dXJuIGZhbHNlLCB3aGVuIHJvdXRpbmcgY29uZmlndXJhdGlvbiB3YXMgdXBkYXRlZCBhbmQgcmVkaXJlY3Rpb24gdG8gbmV3bHkgZ2VuZXJhdGVkIHJvdXRlIHdhcyBpbml0aWF0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSBwYWdlQ29udGV4dFxuICAgKiBAcGFyYW0gY3VycmVudFVybFxuICAgKi9cbiAgaGFuZGxlQ21zUm91dGVzSW5HdWFyZChcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsXG4gICAgY29tcG9uZW50VHlwZXM6IHN0cmluZ1tdLFxuICAgIGN1cnJlbnRVcmw6IHN0cmluZ1xuICApOiBib29sZWFuIHtcbiAgICBjb25zdCBjb21wb25lbnRSb3V0ZXMgPSB0aGlzLmNtc01hcHBpbmcuZ2V0Um91dGVzRm9yQ29tcG9uZW50cyhcbiAgICAgIGNvbXBvbmVudFR5cGVzXG4gICAgKTtcbiAgICBpZiAoY29tcG9uZW50Um91dGVzLmxlbmd0aCkge1xuICAgICAgaWYgKHRoaXMudXBkYXRlUm91dGluZyhwYWdlQ29udGV4dCwgY29tcG9uZW50Um91dGVzKSkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGN1cnJlbnRVcmwpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVSb3V0aW5nKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCwgcm91dGVzOiBSb3V0ZVtdKTogYm9vbGVhbiB7XG4gICAgaWYgKFxuICAgICAgcGFnZUNvbnRleHQudHlwZSA9PT0gUGFnZVR5cGUuQ09OVEVOVF9QQUdFICYmXG4gICAgICBwYWdlQ29udGV4dC5pZC5zdGFydHNXaXRoKCcvJykgJiZcbiAgICAgIHBhZ2VDb250ZXh0LmlkLmxlbmd0aCA+IDFcbiAgICApIHtcbiAgICAgIGNvbnN0IG5ld1JvdXRlOiBDbXNSb3V0ZSA9IHtcbiAgICAgICAgcGF0aDogcGFnZUNvbnRleHQuaWQuc3Vic3RyKDEpLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGNoaWxkcmVuOiByb3V0ZXMsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjeENtc1JvdXRlQ29udGV4dDogcGFnZUNvbnRleHQsXG4gICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgICB0aGlzLnJvdXRlci5yZXNldENvbmZpZyhbbmV3Um91dGUsIC4uLnRoaXMucm91dGVyLmNvbmZpZ10pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=