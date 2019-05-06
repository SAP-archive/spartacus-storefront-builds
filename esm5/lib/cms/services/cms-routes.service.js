/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PageType } from '@spartacus/core';
import { PageLayoutComponent } from '../../../cms-structure/page/page-layout/page-layout.component';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2Ntcy9zZXJ2aWNlcy9jbXMtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBUyxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQXlCLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBRTFEO0lBSUUsMEJBQW9CLE1BQWMsRUFBVSxVQUE2QjtRQUFyRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7SUFBRyxDQUFDOzs7OztJQUU3RSx3Q0FBYTs7OztJQUFiLFVBQWMsR0FBVzs7WUFDakIsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFFNUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3JCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7O1lBRUssU0FBUyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBRS9CLE9BQU8sQ0FDTCxnQkFBZ0I7WUFDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDdkIsVUFBQyxLQUFlO2dCQUNkLE9BQUEsS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssU0FBUztZQUF0RSxDQUFzRSxDQUN6RSxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7Ozs7Ozs7Ozs7OztJQUNILGlEQUFzQjs7Ozs7Ozs7Ozs7SUFBdEIsVUFDRSxXQUF3QixFQUN4QixjQUF3QixFQUN4QixVQUFrQjs7WUFFWixlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FDNUQsY0FBYyxDQUNmO1FBQ0QsSUFBSSxlQUFlLENBQUMsTUFBTSxFQUFFO1lBQzFCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDLEVBQUU7Z0JBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN0QyxPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7Ozs7SUFFTyx3Q0FBYTs7Ozs7O0lBQXJCLFVBQXNCLFdBQXdCLEVBQUUsTUFBZTtRQUM3RCxJQUNFLFdBQVcsQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLFlBQVk7WUFDMUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1lBQzlCLFdBQVcsQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDekI7O2dCQUNNLFFBQVEsR0FBYTtnQkFDekIsSUFBSSxFQUFFLFdBQVcsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDOUIsU0FBUyxFQUFFLG1CQUFtQjtnQkFDOUIsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLElBQUksRUFBRTtvQkFDSixpQkFBaUIsRUFBRSxXQUFXO2lCQUMvQjthQUNGO1lBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLG1CQUFFLFFBQVEsR0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7O2dCQXRFRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVBlLE1BQU07Z0JBR2IsaUJBQWlCOzs7MkJBSjFCO0NBNkVDLEFBdkVELElBdUVDO1NBcEVZLGdCQUFnQjs7Ozs7O0lBQ2Ysa0NBQXNCOzs7OztJQUFFLHNDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ21zUm91dGUsIFBhZ2VDb250ZXh0LCBQYWdlVHlwZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDbXNNYXBwaW5nU2VydmljZSB9IGZyb20gJy4vY21zLW1hcHBpbmcuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNSb3V0ZXNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBjbXNNYXBwaW5nOiBDbXNNYXBwaW5nU2VydmljZSkge31cblxuICBjbXNSb3V0ZUV4aXN0KHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNDbXNEcml2ZW5Sb3V0ZSA9IHVybC5zdGFydHNXaXRoKCcvJyk7XG5cbiAgICBpZiAoIWlzQ21zRHJpdmVuUm91dGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZVBhdGggPSB1cmwuc3Vic3RyKDEpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIGlzQ21zRHJpdmVuUm91dGUgJiZcbiAgICAgICEhdGhpcy5yb3V0ZXIuY29uZmlnLmZpbmQoXG4gICAgICAgIChyb3V0ZTogQ21zUm91dGUpID0+XG4gICAgICAgICAgcm91dGUuZGF0YSAmJiByb3V0ZS5kYXRhLmN4Q21zUm91dGVDb250ZXh0ICYmIHJvdXRlLnBhdGggPT09IHJvdXRlUGF0aFxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ29udGFpbnMgQ21zIGRyaXZlbiByb3V0aW5nIGxvZ2ljIGludGVuZGVkIGZvciB1c2UgdXNlIGluIGd1YXJkcywgZXNwZWNpYWxseSBpbiBjYW5BY3RpdmF0ZSBtZXRob2QuXG4gICAqXG4gICAqIFdpbGwgcmV0dXJuIHRydWUsIHdoZW4gbG9naWMgd29udCBoYXZlIHRvIG1vZGlmeSByb3V0aW5nIChzbyBjYW5BY3RpdmF0ZSBjb3VsZCBiZSBlYXNpbHkgcmVzb2x2ZWQgdG8gdHJ1ZSlcbiAgICogb3Igd2lsbCByZXR1cm4gZmFsc2UsIHdoZW4gcm91dGluZyBjb25maWd1cmF0aW9uIHdhcyB1cGRhdGVkIGFuZCByZWRpcmVjdGlvbiB0byBuZXdseSBnZW5lcmF0ZWQgcm91dGUgd2FzIGluaXRpYXRlZC5cbiAgICpcbiAgICogQHBhcmFtIHBhZ2VDb250ZXh0XG4gICAqIEBwYXJhbSBjdXJyZW50VXJsXG4gICAqL1xuICBoYW5kbGVDbXNSb3V0ZXNJbkd1YXJkKFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgICBjb21wb25lbnRUeXBlczogc3RyaW5nW10sXG4gICAgY3VycmVudFVybDogc3RyaW5nXG4gICk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNvbXBvbmVudFJvdXRlcyA9IHRoaXMuY21zTWFwcGluZy5nZXRSb3V0ZXNGb3JDb21wb25lbnRzKFxuICAgICAgY29tcG9uZW50VHlwZXNcbiAgICApO1xuICAgIGlmIChjb21wb25lbnRSb3V0ZXMubGVuZ3RoKSB7XG4gICAgICBpZiAodGhpcy51cGRhdGVSb3V0aW5nKHBhZ2VDb250ZXh0LCBjb21wb25lbnRSb3V0ZXMpKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoY3VycmVudFVybCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVJvdXRpbmcocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LCByb3V0ZXM6IFJvdXRlW10pOiBib29sZWFuIHtcbiAgICBpZiAoXG4gICAgICBwYWdlQ29udGV4dC50eXBlID09PSBQYWdlVHlwZS5DT05URU5UX1BBR0UgJiZcbiAgICAgIHBhZ2VDb250ZXh0LmlkLnN0YXJ0c1dpdGgoJy8nKSAmJlxuICAgICAgcGFnZUNvbnRleHQuaWQubGVuZ3RoID4gMVxuICAgICkge1xuICAgICAgY29uc3QgbmV3Um91dGU6IENtc1JvdXRlID0ge1xuICAgICAgICBwYXRoOiBwYWdlQ29udGV4dC5pZC5zdWJzdHIoMSksXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgY2hpbGRyZW46IHJvdXRlcyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGN4Q21zUm91dGVDb250ZXh0OiBwYWdlQ29udGV4dCxcbiAgICAgICAgfSxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMucm91dGVyLnJlc2V0Q29uZmlnKFtuZXdSb3V0ZSwgLi4udGhpcy5yb3V0ZXIuY29uZmlnXSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==