/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PageType } from '@spartacus/core';
import { PageLayoutComponent } from '../../../cms-structure/page/page-layout/page-layout.component';
import { CmsMappingService } from './cms-mapping.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./cms-mapping.service";
export class CmsRoutesService {
    /**
     * @param {?} router
     * @param {?} cmsMapping
     */
    constructor(router, cmsMapping) {
        this.router = router;
        this.cmsMapping = cmsMapping;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    cmsRouteExist(url) {
        /** @type {?} */
        const isCmsDrivenRoute = url.startsWith('/');
        if (!isCmsDrivenRoute) {
            return false;
        }
        /** @type {?} */
        const routePath = url.substr(1);
        return (isCmsDrivenRoute &&
            !!this.router.config.find((route) => route.data && route.data.cxCmsRouteContext && route.path === routePath));
    }
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
    handleCmsRoutesInGuard(pageContext, componentTypes, currentUrl) {
        /** @type {?} */
        const componentRoutes = this.cmsMapping.getRoutesForComponents(componentTypes);
        if (componentRoutes.length) {
            if (this.updateRouting(pageContext, componentRoutes)) {
                this.router.navigateByUrl(currentUrl);
                return false;
            }
        }
        return true;
    }
    /**
     * @private
     * @param {?} pageContext
     * @param {?} routes
     * @return {?}
     */
    updateRouting(pageContext, routes) {
        if (pageContext.type === PageType.CONTENT_PAGE &&
            pageContext.id.startsWith('/') &&
            pageContext.id.length > 1) {
            /** @type {?} */
            const newRoute = {
                path: pageContext.id.substr(1),
                component: PageLayoutComponent,
                children: routes,
                data: {
                    cxCmsRouteContext: pageContext,
                },
            };
            this.router.resetConfig([newRoute, ...this.router.config]);
            return true;
        }
        return false;
    }
}
CmsRoutesService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CmsRoutesService.ctorParameters = () => [
    { type: Router },
    { type: CmsMappingService }
];
/** @nocollapse */ CmsRoutesService.ngInjectableDef = i0.defineInjectable({ factory: function CmsRoutesService_Factory() { return new CmsRoutesService(i0.inject(i1.Router), i0.inject(i2.CmsMappingService)); }, token: CmsRoutesService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2Ntcy9zZXJ2aWNlcy9jbXMtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFTLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBeUIsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDcEcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFLMUQsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFDM0IsWUFBb0IsTUFBYyxFQUFVLFVBQTZCO1FBQXJELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFtQjtJQUFHLENBQUM7Ozs7O0lBRTdFLGFBQWEsQ0FBQyxHQUFXOztjQUNqQixnQkFBZ0IsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUU1QyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDckIsT0FBTyxLQUFLLENBQUM7U0FDZDs7Y0FFSyxTQUFTLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFL0IsT0FBTyxDQUNMLGdCQUFnQjtZQUNoQixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUN2QixDQUFDLEtBQWUsRUFBRSxFQUFFLENBQ2xCLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FDekUsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7Ozs7O0lBV0Qsc0JBQXNCLENBQ3BCLFdBQXdCLEVBQ3hCLGNBQXdCLEVBQ3hCLFVBQWtCOztjQUVaLGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUM1RCxjQUFjLENBQ2Y7UUFDRCxJQUFJLGVBQWUsQ0FBQyxNQUFNLEVBQUU7WUFDMUIsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUMsRUFBRTtnQkFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3RDLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7OztJQUVPLGFBQWEsQ0FBQyxXQUF3QixFQUFFLE1BQWU7UUFDN0QsSUFDRSxXQUFXLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxZQUFZO1lBQzFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztZQUM5QixXQUFXLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3pCOztrQkFDTSxRQUFRLEdBQWE7Z0JBQ3pCLElBQUksRUFBRSxXQUFXLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLFNBQVMsRUFBRSxtQkFBbUI7Z0JBQzlCLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixJQUFJLEVBQUU7b0JBQ0osaUJBQWlCLEVBQUUsV0FBVztpQkFDL0I7YUFDRjtZQUVELElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OztZQXRFRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFQZSxNQUFNO1lBR2IsaUJBQWlCOzs7Ozs7OztJQU1aLGtDQUFzQjs7Ozs7SUFBRSxzQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENtc1JvdXRlLCBQYWdlQ29udGV4dCwgUGFnZVR5cGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUGFnZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9wYWdlLWxheW91dC9wYWdlLWxheW91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ21zTWFwcGluZ1NlcnZpY2UgfSBmcm9tICcuL2Ntcy1tYXBwaW5nLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ21zUm91dGVzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgY21zTWFwcGluZzogQ21zTWFwcGluZ1NlcnZpY2UpIHt9XG5cbiAgY21zUm91dGVFeGlzdCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlzQ21zRHJpdmVuUm91dGUgPSB1cmwuc3RhcnRzV2l0aCgnLycpO1xuXG4gICAgaWYgKCFpc0Ntc0RyaXZlblJvdXRlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVQYXRoID0gdXJsLnN1YnN0cigxKTtcblxuICAgIHJldHVybiAoXG4gICAgICBpc0Ntc0RyaXZlblJvdXRlICYmXG4gICAgICAhIXRoaXMucm91dGVyLmNvbmZpZy5maW5kKFxuICAgICAgICAocm91dGU6IENtc1JvdXRlKSA9PlxuICAgICAgICAgIHJvdXRlLmRhdGEgJiYgcm91dGUuZGF0YS5jeENtc1JvdXRlQ29udGV4dCAmJiByb3V0ZS5wYXRoID09PSByb3V0ZVBhdGhcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnRhaW5zIENtcyBkcml2ZW4gcm91dGluZyBsb2dpYyBpbnRlbmRlZCBmb3IgdXNlIHVzZSBpbiBndWFyZHMsIGVzcGVjaWFsbHkgaW4gY2FuQWN0aXZhdGUgbWV0aG9kLlxuICAgKlxuICAgKiBXaWxsIHJldHVybiB0cnVlLCB3aGVuIGxvZ2ljIHdvbnQgaGF2ZSB0byBtb2RpZnkgcm91dGluZyAoc28gY2FuQWN0aXZhdGUgY291bGQgYmUgZWFzaWx5IHJlc29sdmVkIHRvIHRydWUpXG4gICAqIG9yIHdpbGwgcmV0dXJuIGZhbHNlLCB3aGVuIHJvdXRpbmcgY29uZmlndXJhdGlvbiB3YXMgdXBkYXRlZCBhbmQgcmVkaXJlY3Rpb24gdG8gbmV3bHkgZ2VuZXJhdGVkIHJvdXRlIHdhcyBpbml0aWF0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSBwYWdlQ29udGV4dFxuICAgKiBAcGFyYW0gY3VycmVudFVybFxuICAgKi9cbiAgaGFuZGxlQ21zUm91dGVzSW5HdWFyZChcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsXG4gICAgY29tcG9uZW50VHlwZXM6IHN0cmluZ1tdLFxuICAgIGN1cnJlbnRVcmw6IHN0cmluZ1xuICApOiBib29sZWFuIHtcbiAgICBjb25zdCBjb21wb25lbnRSb3V0ZXMgPSB0aGlzLmNtc01hcHBpbmcuZ2V0Um91dGVzRm9yQ29tcG9uZW50cyhcbiAgICAgIGNvbXBvbmVudFR5cGVzXG4gICAgKTtcbiAgICBpZiAoY29tcG9uZW50Um91dGVzLmxlbmd0aCkge1xuICAgICAgaWYgKHRoaXMudXBkYXRlUm91dGluZyhwYWdlQ29udGV4dCwgY29tcG9uZW50Um91dGVzKSkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGN1cnJlbnRVcmwpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVSb3V0aW5nKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCwgcm91dGVzOiBSb3V0ZVtdKTogYm9vbGVhbiB7XG4gICAgaWYgKFxuICAgICAgcGFnZUNvbnRleHQudHlwZSA9PT0gUGFnZVR5cGUuQ09OVEVOVF9QQUdFICYmXG4gICAgICBwYWdlQ29udGV4dC5pZC5zdGFydHNXaXRoKCcvJykgJiZcbiAgICAgIHBhZ2VDb250ZXh0LmlkLmxlbmd0aCA+IDFcbiAgICApIHtcbiAgICAgIGNvbnN0IG5ld1JvdXRlOiBDbXNSb3V0ZSA9IHtcbiAgICAgICAgcGF0aDogcGFnZUNvbnRleHQuaWQuc3Vic3RyKDEpLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGNoaWxkcmVuOiByb3V0ZXMsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjeENtc1JvdXRlQ29udGV4dDogcGFnZUNvbnRleHQsXG4gICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgICB0aGlzLnJvdXRlci5yZXNldENvbmZpZyhbbmV3Um91dGUsIC4uLnRoaXMucm91dGVyLmNvbmZpZ10pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=