/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CmsService, RoutingService, } from '@spartacus/core';
import { of } from 'rxjs';
import { first, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { CmsGuardsService } from '../services/cms-guards.service';
import { CmsI18nService } from '../services/cms-i18n.service';
import { CmsRoutesService } from '../services/cms-routes.service';
var CmsPageGuard = /** @class */ (function () {
    function CmsPageGuard(routingService, cmsService, cmsRoutes, cmsI18n, cmsGuards) {
        this.routingService = routingService;
        this.cmsService = cmsService;
        this.cmsRoutes = cmsRoutes;
        this.cmsI18n = cmsI18n;
        this.cmsGuards = cmsGuards;
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    CmsPageGuard.prototype.canActivate = /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    function (route, state) {
        var _this = this;
        return this.routingService.getPageContext().pipe(switchMap(function (pageContext) {
            return _this.cmsService.hasPage(pageContext).pipe(first(), withLatestFrom(of(pageContext)));
        }), switchMap(function (_a) {
            var _b = tslib_1.__read(_a, 2), hasPage = _b[0], pageContext = _b[1];
            if (hasPage) {
                return _this.cmsService.getPageComponentTypes(pageContext).pipe(switchMap(function (componentTypes) {
                    return _this.cmsGuards
                        .cmsPageCanActivate(componentTypes, route, state)
                        .pipe(withLatestFrom(of(componentTypes)));
                }), tap(function (_a) {
                    var _b = tslib_1.__read(_a, 2), canActivate = _b[0], componentTypes = _b[1];
                    if (canActivate === true) {
                        _this.cmsI18n.loadChunksForComponents(componentTypes);
                    }
                }), map(function (_a) {
                    var _b = tslib_1.__read(_a, 2), canActivate = _b[0], componentTypes = _b[1];
                    if (canActivate === true &&
                        !route.data.cxCmsRouteContext &&
                        !_this.cmsRoutes.cmsRouteExist(pageContext.id)) {
                        return _this.cmsRoutes.handleCmsRoutesInGuard(pageContext, componentTypes, state.url);
                    }
                    return canActivate;
                }));
            }
            else {
                if (pageContext.id !== '/not-found') {
                    _this.routingService.go(['/not-found']);
                }
                return of(false);
            }
        }));
    };
    CmsPageGuard.guardName = 'CmsPageGuard';
    CmsPageGuard.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CmsPageGuard.ctorParameters = function () { return [
        { type: RoutingService },
        { type: CmsService },
        { type: CmsRoutesService },
        { type: CmsI18nService },
        { type: CmsGuardsService }
    ]; };
    return CmsPageGuard;
}());
export { CmsPageGuard };
if (false) {
    /** @type {?} */
    CmsPageGuard.guardName;
    /**
     * @type {?}
     * @private
     */
    CmsPageGuard.prototype.routingService;
    /**
     * @type {?}
     * @private
     */
    CmsPageGuard.prototype.cmsService;
    /**
     * @type {?}
     * @private
     */
    CmsPageGuard.prototype.cmsRoutes;
    /**
     * @type {?}
     * @private
     */
    CmsPageGuard.prototype.cmsI18n;
    /**
     * @type {?}
     * @private
     */
    CmsPageGuard.prototype.cmsGuards;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY21zL2d1YXJkcy9jbXMtcGFnZS5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUVMLFVBQVUsRUFDVixjQUFjLEdBQ2YsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRWxFO0lBSUUsc0JBQ1UsY0FBOEIsRUFDOUIsVUFBc0IsRUFDdEIsU0FBMkIsRUFDM0IsT0FBdUIsRUFDdkIsU0FBMkI7UUFKM0IsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFDbEMsQ0FBQzs7Ozs7O0lBRUosa0NBQVc7Ozs7O0lBQVgsVUFDRSxLQUFnQyxFQUNoQyxLQUEwQjtRQUY1QixpQkErQ0M7UUEzQ0MsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FDOUMsU0FBUyxDQUFDLFVBQUEsV0FBVztZQUNuQixPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDdkMsS0FBSyxFQUFFLEVBQ1AsY0FBYyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUNoQztRQUhELENBR0MsQ0FDRixFQUNELFNBQVMsQ0FBQyxVQUFDLEVBQXNCO2dCQUF0QiwwQkFBc0IsRUFBckIsZUFBTyxFQUFFLG1CQUFXO1lBQzlCLElBQUksT0FBTyxFQUFFO2dCQUNYLE9BQU8sS0FBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQzVELFNBQVMsQ0FBQyxVQUFBLGNBQWM7b0JBQ3RCLE9BQUEsS0FBSSxDQUFDLFNBQVM7eUJBQ1gsa0JBQWtCLENBQUMsY0FBYyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7eUJBQ2hELElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBRjNDLENBRTJDLENBQzVDLEVBQ0QsR0FBRyxDQUFDLFVBQUMsRUFBNkI7d0JBQTdCLDBCQUE2QixFQUE1QixtQkFBVyxFQUFFLHNCQUFjO29CQUMvQixJQUFJLFdBQVcsS0FBSyxJQUFJLEVBQUU7d0JBQ3hCLEtBQUksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsY0FBYyxDQUFDLENBQUM7cUJBQ3REO2dCQUNILENBQUMsQ0FBQyxFQUNGLEdBQUcsQ0FBQyxVQUFDLEVBQTZCO3dCQUE3QiwwQkFBNkIsRUFBNUIsbUJBQVcsRUFBRSxzQkFBYztvQkFDL0IsSUFDRSxXQUFXLEtBQUssSUFBSTt3QkFDcEIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQjt3QkFDN0IsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQzdDO3dCQUNBLE9BQU8sS0FBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FDMUMsV0FBVyxFQUNYLGNBQWMsRUFDZCxLQUFLLENBQUMsR0FBRyxDQUNWLENBQUM7cUJBQ0g7b0JBQ0QsT0FBTyxXQUFXLENBQUM7Z0JBQ3JCLENBQUMsQ0FBQyxDQUNILENBQUM7YUFDSDtpQkFBTTtnQkFDTCxJQUFJLFdBQVcsQ0FBQyxFQUFFLEtBQUssWUFBWSxFQUFFO29CQUNuQyxLQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7aUJBQ3hDO2dCQUNELE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2xCO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUF6RE0sc0JBQVMsR0FBRyxjQUFjLENBQUM7O2dCQUZuQyxVQUFVOzs7O2dCQVZULGNBQWM7Z0JBRGQsVUFBVTtnQkFTSCxnQkFBZ0I7Z0JBRGhCLGNBQWM7Z0JBRGQsZ0JBQWdCOztJQWdFekIsbUJBQUM7Q0FBQSxBQTVERCxJQTREQztTQTNEWSxZQUFZOzs7SUFDdkIsdUJBQWtDOzs7OztJQUdoQyxzQ0FBc0M7Ozs7O0lBQ3RDLGtDQUE4Qjs7Ozs7SUFDOUIsaUNBQW1DOzs7OztJQUNuQywrQkFBK0I7Ozs7O0lBQy9CLGlDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBVcmxUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtcbiAgQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgQ21zU2VydmljZSxcbiAgUm91dGluZ1NlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaXJzdCwgbWFwLCBzd2l0Y2hNYXAsIHRhcCwgd2l0aExhdGVzdEZyb20gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IENtc0d1YXJkc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jbXMtZ3VhcmRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ21zSTE4blNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jbXMtaTE4bi5zZXJ2aWNlJztcbmltcG9ydCB7IENtc1JvdXRlc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jbXMtcm91dGVzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ21zUGFnZUd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBzdGF0aWMgZ3VhcmROYW1lID0gJ0Ntc1BhZ2VHdWFyZCc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgY21zUm91dGVzOiBDbXNSb3V0ZXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgY21zSTE4bjogQ21zSTE4blNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjbXNHdWFyZHM6IENtc0d1YXJkc1NlcnZpY2VcbiAgKSB7fVxuXG4gIGNhbkFjdGl2YXRlKFxuICAgIHJvdXRlOiBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcbiAgICByZXR1cm4gdGhpcy5yb3V0aW5nU2VydmljZS5nZXRQYWdlQ29udGV4dCgpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAocGFnZUNvbnRleHQgPT5cbiAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLmhhc1BhZ2UocGFnZUNvbnRleHQpLnBpcGUoXG4gICAgICAgICAgZmlyc3QoKSxcbiAgICAgICAgICB3aXRoTGF0ZXN0RnJvbShvZihwYWdlQ29udGV4dCkpXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICBzd2l0Y2hNYXAoKFtoYXNQYWdlLCBwYWdlQ29udGV4dF0pID0+IHtcbiAgICAgICAgaWYgKGhhc1BhZ2UpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jbXNTZXJ2aWNlLmdldFBhZ2VDb21wb25lbnRUeXBlcyhwYWdlQ29udGV4dCkucGlwZShcbiAgICAgICAgICAgIHN3aXRjaE1hcChjb21wb25lbnRUeXBlcyA9PlxuICAgICAgICAgICAgICB0aGlzLmNtc0d1YXJkc1xuICAgICAgICAgICAgICAgIC5jbXNQYWdlQ2FuQWN0aXZhdGUoY29tcG9uZW50VHlwZXMsIHJvdXRlLCBzdGF0ZSlcbiAgICAgICAgICAgICAgICAucGlwZSh3aXRoTGF0ZXN0RnJvbShvZihjb21wb25lbnRUeXBlcykpKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHRhcCgoW2NhbkFjdGl2YXRlLCBjb21wb25lbnRUeXBlc10pID0+IHtcbiAgICAgICAgICAgICAgaWYgKGNhbkFjdGl2YXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbXNJMThuLmxvYWRDaHVua3NGb3JDb21wb25lbnRzKGNvbXBvbmVudFR5cGVzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBtYXAoKFtjYW5BY3RpdmF0ZSwgY29tcG9uZW50VHlwZXNdKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBjYW5BY3RpdmF0ZSA9PT0gdHJ1ZSAmJlxuICAgICAgICAgICAgICAgICFyb3V0ZS5kYXRhLmN4Q21zUm91dGVDb250ZXh0ICYmXG4gICAgICAgICAgICAgICAgIXRoaXMuY21zUm91dGVzLmNtc1JvdXRlRXhpc3QocGFnZUNvbnRleHQuaWQpXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNtc1JvdXRlcy5oYW5kbGVDbXNSb3V0ZXNJbkd1YXJkKFxuICAgICAgICAgICAgICAgICAgcGFnZUNvbnRleHQsXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnRUeXBlcyxcbiAgICAgICAgICAgICAgICAgIHN0YXRlLnVybFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGNhbkFjdGl2YXRlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChwYWdlQ29udGV4dC5pZCAhPT0gJy9ub3QtZm91bmQnKSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKFsnL25vdC1mb3VuZCddKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG9mKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=