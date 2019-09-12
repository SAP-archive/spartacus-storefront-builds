/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            !!this.router.config.find((/**
             * @param {?} route
             * @return {?}
             */
            function (route) {
                return route.data && route.data.cxCmsRouteContext && route.path === routePath;
            })));
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
     * @param {?} currentPageLabel
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
     * @param {?} currentPageLabel
     * @return {?}
     */
    function (pageContext, componentTypes, currentUrl, currentPageLabel) {
        /** @type {?} */
        var componentRoutes = this.cmsMapping.getRoutesForComponents(componentTypes);
        if (componentRoutes.length) {
            if (this.updateRouting(pageContext, currentPageLabel, componentRoutes)) {
                this.router.navigateByUrl(currentUrl);
                return false;
            }
        }
        return true;
    };
    /**
     * @private
     * @param {?} pageContext
     * @param {?} pageLabel
     * @param {?} routes
     * @return {?}
     */
    CmsRoutesService.prototype.updateRouting = /**
     * @private
     * @param {?} pageContext
     * @param {?} pageLabel
     * @param {?} routes
     * @return {?}
     */
    function (pageContext, pageLabel, routes) {
        if (pageContext.type === PageType.CONTENT_PAGE &&
            pageLabel.startsWith('/') &&
            pageLabel.length > 1) {
            /** @type {?} */
            var newRoute = {
                path: pageLabel.substr(1),
                component: PageLayoutComponent,
                children: routes,
                data: {
                    cxCmsRouteContext: {
                        type: pageContext.type,
                        id: pageLabel,
                    },
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
    /** @nocollapse */ CmsRoutesService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CmsRoutesService_Factory() { return new CmsRoutesService(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.CmsMappingService)); }, token: CmsRoutesService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9zZXJ2aWNlcy9jbXMtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBUyxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQXlCLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBRTFEO0lBSUUsMEJBQW9CLE1BQWMsRUFBVSxVQUE2QjtRQUFyRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7SUFBRyxDQUFDOzs7OztJQUU3RSx3Q0FBYTs7OztJQUFiLFVBQWMsR0FBVzs7WUFDakIsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFFNUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3JCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7O1lBRUssU0FBUyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBRS9CLE9BQU8sQ0FDTCxnQkFBZ0I7WUFDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUk7Ozs7WUFDdkIsVUFBQyxLQUFlO2dCQUNkLE9BQUEsS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssU0FBUztZQUF0RSxDQUFzRSxFQUN6RSxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7Ozs7Ozs7Ozs7Ozs7SUFDSCxpREFBc0I7Ozs7Ozs7Ozs7OztJQUF0QixVQUNFLFdBQXdCLEVBQ3hCLGNBQXdCLEVBQ3hCLFVBQWtCLEVBQ2xCLGdCQUF3Qjs7WUFFbEIsZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQzVELGNBQWMsQ0FDZjtRQUNELElBQUksZUFBZSxDQUFDLE1BQU0sRUFBRTtZQUMxQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsQ0FBQyxFQUFFO2dCQUN0RSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDdEMsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7Ozs7OztJQUVPLHdDQUFhOzs7Ozs7O0lBQXJCLFVBQ0UsV0FBd0IsRUFDeEIsU0FBaUIsRUFDakIsTUFBZTtRQUVmLElBQ0UsV0FBVyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsWUFBWTtZQUMxQyxTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztZQUN6QixTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDcEI7O2dCQUNNLFFBQVEsR0FBYTtnQkFDekIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixTQUFTLEVBQUUsbUJBQW1CO2dCQUM5QixRQUFRLEVBQUUsTUFBTTtnQkFDaEIsSUFBSSxFQUFFO29CQUNKLGlCQUFpQixFQUFFO3dCQUNqQixJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUk7d0JBQ3RCLEVBQUUsRUFBRSxTQUFTO3FCQUNkO2lCQUNGO2FBQ0Y7WUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsbUJBQUUsUUFBUSxHQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDM0QsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Z0JBOUVGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUGUsTUFBTTtnQkFHYixpQkFBaUI7OzsyQkFKMUI7Q0FxRkMsQUEvRUQsSUErRUM7U0E1RVksZ0JBQWdCOzs7Ozs7SUFDZixrQ0FBc0I7Ozs7O0lBQUUsc0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDbXNSb3V0ZSwgUGFnZUNvbnRleHQsIFBhZ2VUeXBlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDbXNNYXBwaW5nU2VydmljZSB9IGZyb20gJy4vY21zLW1hcHBpbmcuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNSb3V0ZXNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBjbXNNYXBwaW5nOiBDbXNNYXBwaW5nU2VydmljZSkge31cblxuICBjbXNSb3V0ZUV4aXN0KHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNDbXNEcml2ZW5Sb3V0ZSA9IHVybC5zdGFydHNXaXRoKCcvJyk7XG5cbiAgICBpZiAoIWlzQ21zRHJpdmVuUm91dGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZVBhdGggPSB1cmwuc3Vic3RyKDEpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIGlzQ21zRHJpdmVuUm91dGUgJiZcbiAgICAgICEhdGhpcy5yb3V0ZXIuY29uZmlnLmZpbmQoXG4gICAgICAgIChyb3V0ZTogQ21zUm91dGUpID0+XG4gICAgICAgICAgcm91dGUuZGF0YSAmJiByb3V0ZS5kYXRhLmN4Q21zUm91dGVDb250ZXh0ICYmIHJvdXRlLnBhdGggPT09IHJvdXRlUGF0aFxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ29udGFpbnMgQ21zIGRyaXZlbiByb3V0aW5nIGxvZ2ljIGludGVuZGVkIGZvciB1c2UgdXNlIGluIGd1YXJkcywgZXNwZWNpYWxseSBpbiBjYW5BY3RpdmF0ZSBtZXRob2QuXG4gICAqXG4gICAqIFdpbGwgcmV0dXJuIHRydWUsIHdoZW4gbG9naWMgd29udCBoYXZlIHRvIG1vZGlmeSByb3V0aW5nIChzbyBjYW5BY3RpdmF0ZSBjb3VsZCBiZSBlYXNpbHkgcmVzb2x2ZWQgdG8gdHJ1ZSlcbiAgICogb3Igd2lsbCByZXR1cm4gZmFsc2UsIHdoZW4gcm91dGluZyBjb25maWd1cmF0aW9uIHdhcyB1cGRhdGVkIGFuZCByZWRpcmVjdGlvbiB0byBuZXdseSBnZW5lcmF0ZWQgcm91dGUgd2FzIGluaXRpYXRlZC5cbiAgICpcbiAgICogQHBhcmFtIHBhZ2VDb250ZXh0XG4gICAqIEBwYXJhbSBjdXJyZW50VXJsXG4gICAqL1xuICBoYW5kbGVDbXNSb3V0ZXNJbkd1YXJkKFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgICBjb21wb25lbnRUeXBlczogc3RyaW5nW10sXG4gICAgY3VycmVudFVybDogc3RyaW5nLFxuICAgIGN1cnJlbnRQYWdlTGFiZWw6IHN0cmluZ1xuICApOiBib29sZWFuIHtcbiAgICBjb25zdCBjb21wb25lbnRSb3V0ZXMgPSB0aGlzLmNtc01hcHBpbmcuZ2V0Um91dGVzRm9yQ29tcG9uZW50cyhcbiAgICAgIGNvbXBvbmVudFR5cGVzXG4gICAgKTtcbiAgICBpZiAoY29tcG9uZW50Um91dGVzLmxlbmd0aCkge1xuICAgICAgaWYgKHRoaXMudXBkYXRlUm91dGluZyhwYWdlQ29udGV4dCwgY3VycmVudFBhZ2VMYWJlbCwgY29tcG9uZW50Um91dGVzKSkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGN1cnJlbnRVcmwpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVSb3V0aW5nKFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgICBwYWdlTGFiZWw6IHN0cmluZyxcbiAgICByb3V0ZXM6IFJvdXRlW11cbiAgKTogYm9vbGVhbiB7XG4gICAgaWYgKFxuICAgICAgcGFnZUNvbnRleHQudHlwZSA9PT0gUGFnZVR5cGUuQ09OVEVOVF9QQUdFICYmXG4gICAgICBwYWdlTGFiZWwuc3RhcnRzV2l0aCgnLycpICYmXG4gICAgICBwYWdlTGFiZWwubGVuZ3RoID4gMVxuICAgICkge1xuICAgICAgY29uc3QgbmV3Um91dGU6IENtc1JvdXRlID0ge1xuICAgICAgICBwYXRoOiBwYWdlTGFiZWwuc3Vic3RyKDEpLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGNoaWxkcmVuOiByb3V0ZXMsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjeENtc1JvdXRlQ29udGV4dDoge1xuICAgICAgICAgICAgdHlwZTogcGFnZUNvbnRleHQudHlwZSxcbiAgICAgICAgICAgIGlkOiBwYWdlTGFiZWwsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMucm91dGVyLnJlc2V0Q29uZmlnKFtuZXdSb3V0ZSwgLi4udGhpcy5yb3V0ZXIuY29uZmlnXSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==