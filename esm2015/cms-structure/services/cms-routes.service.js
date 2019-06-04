/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PageType } from '@spartacus/core';
import { PageLayoutComponent } from '../page/page-layout/page-layout.component';
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
            !!this.router.config.find((/**
             * @param {?} route
             * @return {?}
             */
            (route) => route.data && route.data.cxCmsRouteContext && route.path === routePath)));
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
/** @nocollapse */ CmsRoutesService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CmsRoutesService_Factory() { return new CmsRoutesService(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.CmsMappingService)); }, token: CmsRoutesService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9zZXJ2aWNlcy9jbXMtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFTLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBeUIsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFLMUQsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFDM0IsWUFBb0IsTUFBYyxFQUFVLFVBQTZCO1FBQXJELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFtQjtJQUFHLENBQUM7Ozs7O0lBRTdFLGFBQWEsQ0FBQyxHQUFXOztjQUNqQixnQkFBZ0IsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUU1QyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDckIsT0FBTyxLQUFLLENBQUM7U0FDZDs7Y0FFSyxTQUFTLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFL0IsT0FBTyxDQUNMLGdCQUFnQjtZQUNoQixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSTs7OztZQUN2QixDQUFDLEtBQWUsRUFBRSxFQUFFLENBQ2xCLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFDekUsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7Ozs7O0lBV0Qsc0JBQXNCLENBQ3BCLFdBQXdCLEVBQ3hCLGNBQXdCLEVBQ3hCLFVBQWtCOztjQUVaLGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUM1RCxjQUFjLENBQ2Y7UUFDRCxJQUFJLGVBQWUsQ0FBQyxNQUFNLEVBQUU7WUFDMUIsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUMsRUFBRTtnQkFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3RDLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7OztJQUVPLGFBQWEsQ0FBQyxXQUF3QixFQUFFLE1BQWU7UUFDN0QsSUFDRSxXQUFXLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxZQUFZO1lBQzFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztZQUM5QixXQUFXLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3pCOztrQkFDTSxRQUFRLEdBQWE7Z0JBQ3pCLElBQUksRUFBRSxXQUFXLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLFNBQVMsRUFBRSxtQkFBbUI7Z0JBQzlCLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixJQUFJLEVBQUU7b0JBQ0osaUJBQWlCLEVBQUUsV0FBVztpQkFDL0I7YUFDRjtZQUVELElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OztZQXRFRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFQZSxNQUFNO1lBR2IsaUJBQWlCOzs7Ozs7OztJQU1aLGtDQUFzQjs7Ozs7SUFBRSxzQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENtc1JvdXRlLCBQYWdlQ29udGV4dCwgUGFnZVR5cGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUGFnZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4uL3BhZ2UvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IENtc01hcHBpbmdTZXJ2aWNlIH0gZnJvbSAnLi9jbXMtbWFwcGluZy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENtc1JvdXRlc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGNtc01hcHBpbmc6IENtc01hcHBpbmdTZXJ2aWNlKSB7fVxuXG4gIGNtc1JvdXRlRXhpc3QodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBpc0Ntc0RyaXZlblJvdXRlID0gdXJsLnN0YXJ0c1dpdGgoJy8nKTtcblxuICAgIGlmICghaXNDbXNEcml2ZW5Sb3V0ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlUGF0aCA9IHVybC5zdWJzdHIoMSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgaXNDbXNEcml2ZW5Sb3V0ZSAmJlxuICAgICAgISF0aGlzLnJvdXRlci5jb25maWcuZmluZChcbiAgICAgICAgKHJvdXRlOiBDbXNSb3V0ZSkgPT5cbiAgICAgICAgICByb3V0ZS5kYXRhICYmIHJvdXRlLmRhdGEuY3hDbXNSb3V0ZUNvbnRleHQgJiYgcm91dGUucGF0aCA9PT0gcm91dGVQYXRoXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb250YWlucyBDbXMgZHJpdmVuIHJvdXRpbmcgbG9naWMgaW50ZW5kZWQgZm9yIHVzZSB1c2UgaW4gZ3VhcmRzLCBlc3BlY2lhbGx5IGluIGNhbkFjdGl2YXRlIG1ldGhvZC5cbiAgICpcbiAgICogV2lsbCByZXR1cm4gdHJ1ZSwgd2hlbiBsb2dpYyB3b250IGhhdmUgdG8gbW9kaWZ5IHJvdXRpbmcgKHNvIGNhbkFjdGl2YXRlIGNvdWxkIGJlIGVhc2lseSByZXNvbHZlZCB0byB0cnVlKVxuICAgKiBvciB3aWxsIHJldHVybiBmYWxzZSwgd2hlbiByb3V0aW5nIGNvbmZpZ3VyYXRpb24gd2FzIHVwZGF0ZWQgYW5kIHJlZGlyZWN0aW9uIHRvIG5ld2x5IGdlbmVyYXRlZCByb3V0ZSB3YXMgaW5pdGlhdGVkLlxuICAgKlxuICAgKiBAcGFyYW0gcGFnZUNvbnRleHRcbiAgICogQHBhcmFtIGN1cnJlbnRVcmxcbiAgICovXG4gIGhhbmRsZUNtc1JvdXRlc0luR3VhcmQoXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LFxuICAgIGNvbXBvbmVudFR5cGVzOiBzdHJpbmdbXSxcbiAgICBjdXJyZW50VXJsOiBzdHJpbmdcbiAgKTogYm9vbGVhbiB7XG4gICAgY29uc3QgY29tcG9uZW50Um91dGVzID0gdGhpcy5jbXNNYXBwaW5nLmdldFJvdXRlc0ZvckNvbXBvbmVudHMoXG4gICAgICBjb21wb25lbnRUeXBlc1xuICAgICk7XG4gICAgaWYgKGNvbXBvbmVudFJvdXRlcy5sZW5ndGgpIHtcbiAgICAgIGlmICh0aGlzLnVwZGF0ZVJvdXRpbmcocGFnZUNvbnRleHQsIGNvbXBvbmVudFJvdXRlcykpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChjdXJyZW50VXJsKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUm91dGluZyhwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIHJvdXRlczogUm91dGVbXSk6IGJvb2xlYW4ge1xuICAgIGlmIChcbiAgICAgIHBhZ2VDb250ZXh0LnR5cGUgPT09IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRSAmJlxuICAgICAgcGFnZUNvbnRleHQuaWQuc3RhcnRzV2l0aCgnLycpICYmXG4gICAgICBwYWdlQ29udGV4dC5pZC5sZW5ndGggPiAxXG4gICAgKSB7XG4gICAgICBjb25zdCBuZXdSb3V0ZTogQ21zUm91dGUgPSB7XG4gICAgICAgIHBhdGg6IHBhZ2VDb250ZXh0LmlkLnN1YnN0cigxKSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBjaGlsZHJlbjogcm91dGVzLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY3hDbXNSb3V0ZUNvbnRleHQ6IHBhZ2VDb250ZXh0LFxuICAgICAgICB9LFxuICAgICAgfTtcblxuICAgICAgdGhpcy5yb3V0ZXIucmVzZXRDb25maWcoW25ld1JvdXRlLCAuLi50aGlzLnJvdXRlci5jb25maWddKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19