/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PageType } from '@spartacus/core';
import { PageLayoutComponent } from '../page-layout/page-layout.component';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2Ntcy9zZXJ2aWNlcy9jbXMtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFTLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBeUIsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFLMUQsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFDM0IsWUFBb0IsTUFBYyxFQUFVLFVBQTZCO1FBQXJELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFtQjtJQUFHLENBQUM7Ozs7O0lBRTdFLGFBQWEsQ0FBQyxHQUFXOztjQUNqQixnQkFBZ0IsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUU1QyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDckIsT0FBTyxLQUFLLENBQUM7U0FDZDs7Y0FFSyxTQUFTLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFL0IsT0FBTyxDQUNMLGdCQUFnQjtZQUNoQixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUN2QixDQUFDLEtBQWUsRUFBRSxFQUFFLENBQ2xCLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FDekUsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7Ozs7O0lBV0Qsc0JBQXNCLENBQ3BCLFdBQXdCLEVBQ3hCLGNBQXdCLEVBQ3hCLFVBQWtCOztjQUVaLGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUM1RCxjQUFjLENBQ2Y7UUFDRCxJQUFJLGVBQWUsQ0FBQyxNQUFNLEVBQUU7WUFDMUIsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUMsRUFBRTtnQkFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3RDLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7OztJQUVPLGFBQWEsQ0FBQyxXQUF3QixFQUFFLE1BQWU7UUFDN0QsSUFDRSxXQUFXLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxZQUFZO1lBQzFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztZQUM5QixXQUFXLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3pCOztrQkFDTSxRQUFRLEdBQWE7Z0JBQ3pCLElBQUksRUFBRSxXQUFXLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLFNBQVMsRUFBRSxtQkFBbUI7Z0JBQzlCLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixJQUFJLEVBQUU7b0JBQ0osaUJBQWlCLEVBQUUsV0FBVztpQkFDL0I7YUFDRjtZQUVELElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OztZQXRFRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFQZSxNQUFNO1lBR2IsaUJBQWlCOzs7Ozs7OztJQU1aLGtDQUFzQjs7Ozs7SUFBRSxzQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENtc1JvdXRlLCBQYWdlQ29udGV4dCwgUGFnZVR5cGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUGFnZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4uL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDbXNNYXBwaW5nU2VydmljZSB9IGZyb20gJy4vY21zLW1hcHBpbmcuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNSb3V0ZXNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBjbXNNYXBwaW5nOiBDbXNNYXBwaW5nU2VydmljZSkge31cblxuICBjbXNSb3V0ZUV4aXN0KHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNDbXNEcml2ZW5Sb3V0ZSA9IHVybC5zdGFydHNXaXRoKCcvJyk7XG5cbiAgICBpZiAoIWlzQ21zRHJpdmVuUm91dGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZVBhdGggPSB1cmwuc3Vic3RyKDEpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIGlzQ21zRHJpdmVuUm91dGUgJiZcbiAgICAgICEhdGhpcy5yb3V0ZXIuY29uZmlnLmZpbmQoXG4gICAgICAgIChyb3V0ZTogQ21zUm91dGUpID0+XG4gICAgICAgICAgcm91dGUuZGF0YSAmJiByb3V0ZS5kYXRhLmN4Q21zUm91dGVDb250ZXh0ICYmIHJvdXRlLnBhdGggPT09IHJvdXRlUGF0aFxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ29udGFpbnMgQ21zIGRyaXZlbiByb3V0aW5nIGxvZ2ljIGludGVuZGVkIGZvciB1c2UgdXNlIGluIGd1YXJkcywgZXNwZWNpYWxseSBpbiBjYW5BY3RpdmF0ZSBtZXRob2QuXG4gICAqXG4gICAqIFdpbGwgcmV0dXJuIHRydWUsIHdoZW4gbG9naWMgd29udCBoYXZlIHRvIG1vZGlmeSByb3V0aW5nIChzbyBjYW5BY3RpdmF0ZSBjb3VsZCBiZSBlYXNpbHkgcmVzb2x2ZWQgdG8gdHJ1ZSlcbiAgICogb3Igd2lsbCByZXR1cm4gZmFsc2UsIHdoZW4gcm91dGluZyBjb25maWd1cmF0aW9uIHdhcyB1cGRhdGVkIGFuZCByZWRpcmVjdGlvbiB0byBuZXdseSBnZW5lcmF0ZWQgcm91dGUgd2FzIGluaXRpYXRlZC5cbiAgICpcbiAgICogQHBhcmFtIHBhZ2VDb250ZXh0XG4gICAqIEBwYXJhbSBjdXJyZW50VXJsXG4gICAqL1xuICBoYW5kbGVDbXNSb3V0ZXNJbkd1YXJkKFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgICBjb21wb25lbnRUeXBlczogc3RyaW5nW10sXG4gICAgY3VycmVudFVybDogc3RyaW5nXG4gICk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNvbXBvbmVudFJvdXRlcyA9IHRoaXMuY21zTWFwcGluZy5nZXRSb3V0ZXNGb3JDb21wb25lbnRzKFxuICAgICAgY29tcG9uZW50VHlwZXNcbiAgICApO1xuICAgIGlmIChjb21wb25lbnRSb3V0ZXMubGVuZ3RoKSB7XG4gICAgICBpZiAodGhpcy51cGRhdGVSb3V0aW5nKHBhZ2VDb250ZXh0LCBjb21wb25lbnRSb3V0ZXMpKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoY3VycmVudFVybCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVJvdXRpbmcocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LCByb3V0ZXM6IFJvdXRlW10pOiBib29sZWFuIHtcbiAgICBpZiAoXG4gICAgICBwYWdlQ29udGV4dC50eXBlID09PSBQYWdlVHlwZS5DT05URU5UX1BBR0UgJiZcbiAgICAgIHBhZ2VDb250ZXh0LmlkLnN0YXJ0c1dpdGgoJy8nKSAmJlxuICAgICAgcGFnZUNvbnRleHQuaWQubGVuZ3RoID4gMVxuICAgICkge1xuICAgICAgY29uc3QgbmV3Um91dGU6IENtc1JvdXRlID0ge1xuICAgICAgICBwYXRoOiBwYWdlQ29udGV4dC5pZC5zdWJzdHIoMSksXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgY2hpbGRyZW46IHJvdXRlcyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGN4Q21zUm91dGVDb250ZXh0OiBwYWdlQ29udGV4dCxcbiAgICAgICAgfSxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMucm91dGVyLnJlc2V0Q29uZmlnKFtuZXdSb3V0ZSwgLi4udGhpcy5yb3V0ZXIuY29uZmlnXSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==