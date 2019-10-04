/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PageType } from '@spartacus/core';
import { PageLayoutComponent } from '../page/page-layout/page-layout.component';
import { CmsMappingService } from './cms-mapping.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./cms-mapping.service";
/**
 * Please don't put that service in public API.
 *
 */
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
     * @param {?} currentPageLabel
     * @return {?}
     */
    handleCmsRoutesInGuard(pageContext, componentTypes, currentUrl, currentPageLabel) {
        /** @type {?} */
        const componentRoutes = this.cmsMapping.getRoutesForComponents(componentTypes);
        if (componentRoutes.length) {
            if (this.updateRouting(pageContext, currentPageLabel, componentRoutes)) {
                this.router.navigateByUrl(currentUrl);
                return false;
            }
        }
        return true;
    }
    /**
     * @private
     * @param {?} pageContext
     * @param {?} pageLabel
     * @param {?} routes
     * @return {?}
     */
    updateRouting(pageContext, pageLabel, routes) {
        if (pageContext.type === PageType.CONTENT_PAGE &&
            pageLabel.startsWith('/') &&
            pageLabel.length > 1) {
            /** @type {?} */
            const newRoute = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9zZXJ2aWNlcy9jbXMtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFTLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBeUIsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7O0FBUTFELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBQzNCLFlBQW9CLE1BQWMsRUFBVSxVQUE2QjtRQUFyRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7SUFBRyxDQUFDOzs7OztJQUU3RSxhQUFhLENBQUMsR0FBVzs7Y0FDakIsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFFNUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3JCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7O2NBRUssU0FBUyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBRS9CLE9BQU8sQ0FDTCxnQkFBZ0I7WUFDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUk7Ozs7WUFDdkIsQ0FBQyxLQUFlLEVBQUUsRUFBRSxDQUNsQixLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQ3pFLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7Ozs7Ozs7SUFXRCxzQkFBc0IsQ0FDcEIsV0FBd0IsRUFDeEIsY0FBd0IsRUFDeEIsVUFBa0IsRUFDbEIsZ0JBQXdCOztjQUVsQixlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FDNUQsY0FBYyxDQUNmO1FBQ0QsSUFBSSxlQUFlLENBQUMsTUFBTSxFQUFFO1lBQzFCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDLEVBQUU7Z0JBQ3RFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN0QyxPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7Ozs7O0lBRU8sYUFBYSxDQUNuQixXQUF3QixFQUN4QixTQUFpQixFQUNqQixNQUFlO1FBRWYsSUFDRSxXQUFXLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxZQUFZO1lBQzFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1lBQ3pCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNwQjs7a0JBQ00sUUFBUSxHQUFhO2dCQUN6QixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLFNBQVMsRUFBRSxtQkFBbUI7Z0JBQzlCLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixJQUFJLEVBQUU7b0JBQ0osaUJBQWlCLEVBQUU7d0JBQ2pCLElBQUksRUFBRSxXQUFXLENBQUMsSUFBSTt3QkFDdEIsRUFBRSxFQUFFLFNBQVM7cUJBQ2Q7aUJBQ0Y7YUFDRjtZQUVELElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OztZQTlFRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFWZSxNQUFNO1lBR2IsaUJBQWlCOzs7Ozs7OztJQVNaLGtDQUFzQjs7Ozs7SUFBRSxzQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENtc1JvdXRlLCBQYWdlQ29udGV4dCwgUGFnZVR5cGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUGFnZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4uL3BhZ2UvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IENtc01hcHBpbmdTZXJ2aWNlIH0gZnJvbSAnLi9jbXMtbWFwcGluZy5zZXJ2aWNlJztcblxuLyoqXG4gKiBQbGVhc2UgZG9uJ3QgcHV0IHRoYXQgc2VydmljZSBpbiBwdWJsaWMgQVBJLlxuICogKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNSb3V0ZXNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBjbXNNYXBwaW5nOiBDbXNNYXBwaW5nU2VydmljZSkge31cblxuICBjbXNSb3V0ZUV4aXN0KHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNDbXNEcml2ZW5Sb3V0ZSA9IHVybC5zdGFydHNXaXRoKCcvJyk7XG5cbiAgICBpZiAoIWlzQ21zRHJpdmVuUm91dGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZVBhdGggPSB1cmwuc3Vic3RyKDEpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIGlzQ21zRHJpdmVuUm91dGUgJiZcbiAgICAgICEhdGhpcy5yb3V0ZXIuY29uZmlnLmZpbmQoXG4gICAgICAgIChyb3V0ZTogQ21zUm91dGUpID0+XG4gICAgICAgICAgcm91dGUuZGF0YSAmJiByb3V0ZS5kYXRhLmN4Q21zUm91dGVDb250ZXh0ICYmIHJvdXRlLnBhdGggPT09IHJvdXRlUGF0aFxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ29udGFpbnMgQ21zIGRyaXZlbiByb3V0aW5nIGxvZ2ljIGludGVuZGVkIGZvciB1c2UgdXNlIGluIGd1YXJkcywgZXNwZWNpYWxseSBpbiBjYW5BY3RpdmF0ZSBtZXRob2QuXG4gICAqXG4gICAqIFdpbGwgcmV0dXJuIHRydWUsIHdoZW4gbG9naWMgd29udCBoYXZlIHRvIG1vZGlmeSByb3V0aW5nIChzbyBjYW5BY3RpdmF0ZSBjb3VsZCBiZSBlYXNpbHkgcmVzb2x2ZWQgdG8gdHJ1ZSlcbiAgICogb3Igd2lsbCByZXR1cm4gZmFsc2UsIHdoZW4gcm91dGluZyBjb25maWd1cmF0aW9uIHdhcyB1cGRhdGVkIGFuZCByZWRpcmVjdGlvbiB0byBuZXdseSBnZW5lcmF0ZWQgcm91dGUgd2FzIGluaXRpYXRlZC5cbiAgICpcbiAgICogQHBhcmFtIHBhZ2VDb250ZXh0XG4gICAqIEBwYXJhbSBjdXJyZW50VXJsXG4gICAqL1xuICBoYW5kbGVDbXNSb3V0ZXNJbkd1YXJkKFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgICBjb21wb25lbnRUeXBlczogc3RyaW5nW10sXG4gICAgY3VycmVudFVybDogc3RyaW5nLFxuICAgIGN1cnJlbnRQYWdlTGFiZWw6IHN0cmluZ1xuICApOiBib29sZWFuIHtcbiAgICBjb25zdCBjb21wb25lbnRSb3V0ZXMgPSB0aGlzLmNtc01hcHBpbmcuZ2V0Um91dGVzRm9yQ29tcG9uZW50cyhcbiAgICAgIGNvbXBvbmVudFR5cGVzXG4gICAgKTtcbiAgICBpZiAoY29tcG9uZW50Um91dGVzLmxlbmd0aCkge1xuICAgICAgaWYgKHRoaXMudXBkYXRlUm91dGluZyhwYWdlQ29udGV4dCwgY3VycmVudFBhZ2VMYWJlbCwgY29tcG9uZW50Um91dGVzKSkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGN1cnJlbnRVcmwpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVSb3V0aW5nKFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgICBwYWdlTGFiZWw6IHN0cmluZyxcbiAgICByb3V0ZXM6IFJvdXRlW11cbiAgKTogYm9vbGVhbiB7XG4gICAgaWYgKFxuICAgICAgcGFnZUNvbnRleHQudHlwZSA9PT0gUGFnZVR5cGUuQ09OVEVOVF9QQUdFICYmXG4gICAgICBwYWdlTGFiZWwuc3RhcnRzV2l0aCgnLycpICYmXG4gICAgICBwYWdlTGFiZWwubGVuZ3RoID4gMVxuICAgICkge1xuICAgICAgY29uc3QgbmV3Um91dGU6IENtc1JvdXRlID0ge1xuICAgICAgICBwYXRoOiBwYWdlTGFiZWwuc3Vic3RyKDEpLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGNoaWxkcmVuOiByb3V0ZXMsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjeENtc1JvdXRlQ29udGV4dDoge1xuICAgICAgICAgICAgdHlwZTogcGFnZUNvbnRleHQudHlwZSxcbiAgICAgICAgICAgIGlkOiBwYWdlTGFiZWwsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMucm91dGVyLnJlc2V0Q29uZmlnKFtuZXdSb3V0ZSwgLi4udGhpcy5yb3V0ZXIuY29uZmlnXSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==