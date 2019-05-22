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
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "../services/cms-routes.service";
import * as i3 from "../services/cms-i18n.service";
import * as i4 from "../services/cms-guards.service";
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
        return this.routingService.getNextPageContext().pipe(switchMap(function (pageContext) {
            return _this.cmsService.hasPage(pageContext, true).pipe(first(), withLatestFrom(of(pageContext)));
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
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CmsPageGuard.ctorParameters = function () { return [
        { type: RoutingService },
        { type: CmsService },
        { type: CmsRoutesService },
        { type: CmsI18nService },
        { type: CmsGuardsService }
    ]; };
    /** @nocollapse */ CmsPageGuard.ngInjectableDef = i0.defineInjectable({ factory: function CmsPageGuard_Factory() { return new CmsPageGuard(i0.inject(i1.RoutingService), i0.inject(i1.CmsService), i0.inject(i2.CmsRoutesService), i0.inject(i3.CmsI18nService), i0.inject(i4.CmsGuardsService)); }, token: CmsPageGuard, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL2d1YXJkcy9jbXMtcGFnZS5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUVMLFVBQVUsRUFDVixjQUFjLEdBQ2YsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7QUFFbEU7SUFNRSxzQkFDVSxjQUE4QixFQUM5QixVQUFzQixFQUN0QixTQUEyQixFQUMzQixPQUF1QixFQUN2QixTQUEyQjtRQUozQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUNsQyxDQUFDOzs7Ozs7SUFFSixrQ0FBVzs7Ozs7SUFBWCxVQUNFLEtBQWdDLEVBQ2hDLEtBQTBCO1FBRjVCLGlCQStDQztRQTNDQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQ2xELFNBQVMsQ0FBQyxVQUFBLFdBQVc7WUFDbkIsT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUM3QyxLQUFLLEVBQUUsRUFDUCxjQUFjLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQ2hDO1FBSEQsQ0FHQyxDQUNGLEVBQ0QsU0FBUyxDQUFDLFVBQUMsRUFBc0I7Z0JBQXRCLDBCQUFzQixFQUFyQixlQUFPLEVBQUUsbUJBQVc7WUFDOUIsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsT0FBTyxLQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDNUQsU0FBUyxDQUFDLFVBQUEsY0FBYztvQkFDdEIsT0FBQSxLQUFJLENBQUMsU0FBUzt5QkFDWCxrQkFBa0IsQ0FBQyxjQUFjLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQzt5QkFDaEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFGM0MsQ0FFMkMsQ0FDNUMsRUFDRCxHQUFHLENBQUMsVUFBQyxFQUE2Qjt3QkFBN0IsMEJBQTZCLEVBQTVCLG1CQUFXLEVBQUUsc0JBQWM7b0JBQy9CLElBQUksV0FBVyxLQUFLLElBQUksRUFBRTt3QkFDeEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztxQkFDdEQ7Z0JBQ0gsQ0FBQyxDQUFDLEVBQ0YsR0FBRyxDQUFDLFVBQUMsRUFBNkI7d0JBQTdCLDBCQUE2QixFQUE1QixtQkFBVyxFQUFFLHNCQUFjO29CQUMvQixJQUNFLFdBQVcsS0FBSyxJQUFJO3dCQUNwQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCO3dCQUM3QixDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFDN0M7d0JBQ0EsT0FBTyxLQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUMxQyxXQUFXLEVBQ1gsY0FBYyxFQUNkLEtBQUssQ0FBQyxHQUFHLENBQ1YsQ0FBQztxQkFDSDtvQkFDRCxPQUFPLFdBQVcsQ0FBQztnQkFDckIsQ0FBQyxDQUFDLENBQ0gsQ0FBQzthQUNIO2lCQUFNO2dCQUNMLElBQUksV0FBVyxDQUFDLEVBQUUsS0FBSyxZQUFZLEVBQUU7b0JBQ25DLEtBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztpQkFDeEM7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbEI7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQXpETSxzQkFBUyxHQUFHLGNBQWMsQ0FBQzs7Z0JBSm5DLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBWkMsY0FBYztnQkFEZCxVQUFVO2dCQVNILGdCQUFnQjtnQkFEaEIsY0FBYztnQkFEZCxnQkFBZ0I7Ozt1QkFaekI7Q0E4RUMsQUE5REQsSUE4REM7U0EzRFksWUFBWTs7O0lBQ3ZCLHVCQUFrQzs7Ozs7SUFHaEMsc0NBQXNDOzs7OztJQUN0QyxrQ0FBOEI7Ozs7O0lBQzlCLGlDQUFtQzs7Ozs7SUFDbkMsK0JBQStCOzs7OztJQUMvQixpQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyU3RhdGVTbmFwc2hvdCwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7XG4gIENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gIENtc1NlcnZpY2UsXG4gIFJvdXRpbmdTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlyc3QsIG1hcCwgc3dpdGNoTWFwLCB0YXAsIHdpdGhMYXRlc3RGcm9tIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBDbXNHdWFyZHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY21zLWd1YXJkcy5zZXJ2aWNlJztcbmltcG9ydCB7IENtc0kxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY21zLWkxOG4uc2VydmljZSc7XG5pbXBvcnQgeyBDbXNSb3V0ZXNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY21zLXJvdXRlcy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENtc1BhZ2VHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgc3RhdGljIGd1YXJkTmFtZSA9ICdDbXNQYWdlR3VhcmQnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICBwcml2YXRlIGNtc1JvdXRlczogQ21zUm91dGVzU2VydmljZSxcbiAgICBwcml2YXRlIGNtc0kxOG46IENtc0kxOG5TZXJ2aWNlLFxuICAgIHByaXZhdGUgY21zR3VhcmRzOiBDbXNHdWFyZHNTZXJ2aWNlXG4gICkge31cblxuICBjYW5BY3RpdmF0ZShcbiAgICByb3V0ZTogQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0TmV4dFBhZ2VDb250ZXh0KCkucGlwZShcbiAgICAgIHN3aXRjaE1hcChwYWdlQ29udGV4dCA9PlxuICAgICAgICB0aGlzLmNtc1NlcnZpY2UuaGFzUGFnZShwYWdlQ29udGV4dCwgdHJ1ZSkucGlwZShcbiAgICAgICAgICBmaXJzdCgpLFxuICAgICAgICAgIHdpdGhMYXRlc3RGcm9tKG9mKHBhZ2VDb250ZXh0KSlcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIHN3aXRjaE1hcCgoW2hhc1BhZ2UsIHBhZ2VDb250ZXh0XSkgPT4ge1xuICAgICAgICBpZiAoaGFzUGFnZSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNtc1NlcnZpY2UuZ2V0UGFnZUNvbXBvbmVudFR5cGVzKHBhZ2VDb250ZXh0KS5waXBlKFxuICAgICAgICAgICAgc3dpdGNoTWFwKGNvbXBvbmVudFR5cGVzID0+XG4gICAgICAgICAgICAgIHRoaXMuY21zR3VhcmRzXG4gICAgICAgICAgICAgICAgLmNtc1BhZ2VDYW5BY3RpdmF0ZShjb21wb25lbnRUeXBlcywgcm91dGUsIHN0YXRlKVxuICAgICAgICAgICAgICAgIC5waXBlKHdpdGhMYXRlc3RGcm9tKG9mKGNvbXBvbmVudFR5cGVzKSkpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgdGFwKChbY2FuQWN0aXZhdGUsIGNvbXBvbmVudFR5cGVzXSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoY2FuQWN0aXZhdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNtc0kxOG4ubG9hZENodW5rc0ZvckNvbXBvbmVudHMoY29tcG9uZW50VHlwZXMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG1hcCgoW2NhbkFjdGl2YXRlLCBjb21wb25lbnRUeXBlc10pID0+IHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGNhbkFjdGl2YXRlID09PSB0cnVlICYmXG4gICAgICAgICAgICAgICAgIXJvdXRlLmRhdGEuY3hDbXNSb3V0ZUNvbnRleHQgJiZcbiAgICAgICAgICAgICAgICAhdGhpcy5jbXNSb3V0ZXMuY21zUm91dGVFeGlzdChwYWdlQ29udGV4dC5pZClcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY21zUm91dGVzLmhhbmRsZUNtc1JvdXRlc0luR3VhcmQoXG4gICAgICAgICAgICAgICAgICBwYWdlQ29udGV4dCxcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFR5cGVzLFxuICAgICAgICAgICAgICAgICAgc3RhdGUudXJsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gY2FuQWN0aXZhdGU7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHBhZ2VDb250ZXh0LmlkICE9PSAnL25vdC1mb3VuZCcpIHtcbiAgICAgICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oWycvbm90LWZvdW5kJ10pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==