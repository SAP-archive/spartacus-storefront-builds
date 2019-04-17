/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PageType } from '@spartacus/core';
import { PageLayoutComponent } from '../page-layout/page-layout.component';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2Ntcy9zZXJ2aWNlcy9jbXMtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBUyxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQXlCLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBRTFEO0lBSUUsMEJBQW9CLE1BQWMsRUFBVSxVQUE2QjtRQUFyRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7SUFBRyxDQUFDOzs7OztJQUU3RSx3Q0FBYTs7OztJQUFiLFVBQWMsR0FBVzs7WUFDakIsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFFNUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3JCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7O1lBRUssU0FBUyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBRS9CLE9BQU8sQ0FDTCxnQkFBZ0I7WUFDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDdkIsVUFBQyxLQUFlO2dCQUNkLE9BQUEsS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssU0FBUztZQUF0RSxDQUFzRSxDQUN6RSxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7Ozs7Ozs7Ozs7OztJQUNILGlEQUFzQjs7Ozs7Ozs7Ozs7SUFBdEIsVUFDRSxXQUF3QixFQUN4QixjQUF3QixFQUN4QixVQUFrQjs7WUFFWixlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FDNUQsY0FBYyxDQUNmO1FBQ0QsSUFBSSxlQUFlLENBQUMsTUFBTSxFQUFFO1lBQzFCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDLEVBQUU7Z0JBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN0QyxPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7Ozs7SUFFTyx3Q0FBYTs7Ozs7O0lBQXJCLFVBQXNCLFdBQXdCLEVBQUUsTUFBZTtRQUM3RCxJQUNFLFdBQVcsQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLFlBQVk7WUFDMUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1lBQzlCLFdBQVcsQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDekI7O2dCQUNNLFFBQVEsR0FBYTtnQkFDekIsSUFBSSxFQUFFLFdBQVcsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDOUIsU0FBUyxFQUFFLG1CQUFtQjtnQkFDOUIsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLElBQUksRUFBRTtvQkFDSixpQkFBaUIsRUFBRSxXQUFXO2lCQUMvQjthQUNGO1lBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLG1CQUFFLFFBQVEsR0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7O2dCQXRFRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVBlLE1BQU07Z0JBR2IsaUJBQWlCOzs7MkJBSjFCO0NBNkVDLEFBdkVELElBdUVDO1NBcEVZLGdCQUFnQjs7Ozs7O0lBQ2Ysa0NBQXNCOzs7OztJQUFFLHNDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ21zUm91dGUsIFBhZ2VDb250ZXh0LCBQYWdlVHlwZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi4vcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IENtc01hcHBpbmdTZXJ2aWNlIH0gZnJvbSAnLi9jbXMtbWFwcGluZy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENtc1JvdXRlc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGNtc01hcHBpbmc6IENtc01hcHBpbmdTZXJ2aWNlKSB7fVxuXG4gIGNtc1JvdXRlRXhpc3QodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBpc0Ntc0RyaXZlblJvdXRlID0gdXJsLnN0YXJ0c1dpdGgoJy8nKTtcblxuICAgIGlmICghaXNDbXNEcml2ZW5Sb3V0ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlUGF0aCA9IHVybC5zdWJzdHIoMSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgaXNDbXNEcml2ZW5Sb3V0ZSAmJlxuICAgICAgISF0aGlzLnJvdXRlci5jb25maWcuZmluZChcbiAgICAgICAgKHJvdXRlOiBDbXNSb3V0ZSkgPT5cbiAgICAgICAgICByb3V0ZS5kYXRhICYmIHJvdXRlLmRhdGEuY3hDbXNSb3V0ZUNvbnRleHQgJiYgcm91dGUucGF0aCA9PT0gcm91dGVQYXRoXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb250YWlucyBDbXMgZHJpdmVuIHJvdXRpbmcgbG9naWMgaW50ZW5kZWQgZm9yIHVzZSB1c2UgaW4gZ3VhcmRzLCBlc3BlY2lhbGx5IGluIGNhbkFjdGl2YXRlIG1ldGhvZC5cbiAgICpcbiAgICogV2lsbCByZXR1cm4gdHJ1ZSwgd2hlbiBsb2dpYyB3b250IGhhdmUgdG8gbW9kaWZ5IHJvdXRpbmcgKHNvIGNhbkFjdGl2YXRlIGNvdWxkIGJlIGVhc2lseSByZXNvbHZlZCB0byB0cnVlKVxuICAgKiBvciB3aWxsIHJldHVybiBmYWxzZSwgd2hlbiByb3V0aW5nIGNvbmZpZ3VyYXRpb24gd2FzIHVwZGF0ZWQgYW5kIHJlZGlyZWN0aW9uIHRvIG5ld2x5IGdlbmVyYXRlZCByb3V0ZSB3YXMgaW5pdGlhdGVkLlxuICAgKlxuICAgKiBAcGFyYW0gcGFnZUNvbnRleHRcbiAgICogQHBhcmFtIGN1cnJlbnRVcmxcbiAgICovXG4gIGhhbmRsZUNtc1JvdXRlc0luR3VhcmQoXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LFxuICAgIGNvbXBvbmVudFR5cGVzOiBzdHJpbmdbXSxcbiAgICBjdXJyZW50VXJsOiBzdHJpbmdcbiAgKTogYm9vbGVhbiB7XG4gICAgY29uc3QgY29tcG9uZW50Um91dGVzID0gdGhpcy5jbXNNYXBwaW5nLmdldFJvdXRlc0ZvckNvbXBvbmVudHMoXG4gICAgICBjb21wb25lbnRUeXBlc1xuICAgICk7XG4gICAgaWYgKGNvbXBvbmVudFJvdXRlcy5sZW5ndGgpIHtcbiAgICAgIGlmICh0aGlzLnVwZGF0ZVJvdXRpbmcocGFnZUNvbnRleHQsIGNvbXBvbmVudFJvdXRlcykpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChjdXJyZW50VXJsKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUm91dGluZyhwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIHJvdXRlczogUm91dGVbXSk6IGJvb2xlYW4ge1xuICAgIGlmIChcbiAgICAgIHBhZ2VDb250ZXh0LnR5cGUgPT09IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRSAmJlxuICAgICAgcGFnZUNvbnRleHQuaWQuc3RhcnRzV2l0aCgnLycpICYmXG4gICAgICBwYWdlQ29udGV4dC5pZC5sZW5ndGggPiAxXG4gICAgKSB7XG4gICAgICBjb25zdCBuZXdSb3V0ZTogQ21zUm91dGUgPSB7XG4gICAgICAgIHBhdGg6IHBhZ2VDb250ZXh0LmlkLnN1YnN0cigxKSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBjaGlsZHJlbjogcm91dGVzLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY3hDbXNSb3V0ZUNvbnRleHQ6IHBhZ2VDb250ZXh0LFxuICAgICAgICB9LFxuICAgICAgfTtcblxuICAgICAgdGhpcy5yb3V0ZXIucmVzZXRDb25maWcoW25ld1JvdXRlLCAuLi50aGlzLnJvdXRlci5jb25maWddKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19