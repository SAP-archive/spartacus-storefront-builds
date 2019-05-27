/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CmsService, RoutingService, SemanticPathService, } from '@spartacus/core';
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
    function CmsPageGuard(routingService, cmsService, cmsRoutes, cmsI18n, cmsGuards, semanticPathService) {
        this.routingService = routingService;
        this.cmsService = cmsService;
        this.cmsRoutes = cmsRoutes;
        this.cmsI18n = cmsI18n;
        this.cmsGuards = cmsGuards;
        this.semanticPathService = semanticPathService;
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
                if (pageContext.id !== _this.semanticPathService.get('notFound')) {
                    _this.routingService.go({ cxRoute: 'notFound' });
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
        { type: CmsGuardsService },
        { type: SemanticPathService }
    ]; };
    /** @nocollapse */ CmsPageGuard.ngInjectableDef = i0.defineInjectable({ factory: function CmsPageGuard_Factory() { return new CmsPageGuard(i0.inject(i1.RoutingService), i0.inject(i1.CmsService), i0.inject(i2.CmsRoutesService), i0.inject(i3.CmsI18nService), i0.inject(i4.CmsGuardsService), i0.inject(i1.SemanticPathService)); }, token: CmsPageGuard, providedIn: "root" });
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
    /**
     * @type {?}
     * @private
     */
    CmsPageGuard.prototype.semanticPathService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL2d1YXJkcy9jbXMtcGFnZS5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUVMLFVBQVUsRUFDVixjQUFjLEVBQ2QsbUJBQW1CLEdBQ3BCLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7O0FBRWxFO0lBTUUsc0JBQ1UsY0FBOEIsRUFDOUIsVUFBc0IsRUFDdEIsU0FBMkIsRUFDM0IsT0FBdUIsRUFDdkIsU0FBMkIsRUFDM0IsbUJBQXdDO1FBTHhDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFDL0MsQ0FBQzs7Ozs7O0lBRUosa0NBQVc7Ozs7O0lBQVgsVUFDRSxLQUFnQyxFQUNoQyxLQUEwQjtRQUY1QixpQkErQ0M7UUEzQ0MsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixFQUFFLENBQUMsSUFBSSxDQUNsRCxTQUFTLENBQUMsVUFBQSxXQUFXO1lBQ25CLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDN0MsS0FBSyxFQUFFLEVBQ1AsY0FBYyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUNoQztRQUhELENBR0MsQ0FDRixFQUNELFNBQVMsQ0FBQyxVQUFDLEVBQXNCO2dCQUF0QiwwQkFBc0IsRUFBckIsZUFBTyxFQUFFLG1CQUFXO1lBQzlCLElBQUksT0FBTyxFQUFFO2dCQUNYLE9BQU8sS0FBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQzVELFNBQVMsQ0FBQyxVQUFBLGNBQWM7b0JBQ3RCLE9BQUEsS0FBSSxDQUFDLFNBQVM7eUJBQ1gsa0JBQWtCLENBQUMsY0FBYyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7eUJBQ2hELElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBRjNDLENBRTJDLENBQzVDLEVBQ0QsR0FBRyxDQUFDLFVBQUMsRUFBNkI7d0JBQTdCLDBCQUE2QixFQUE1QixtQkFBVyxFQUFFLHNCQUFjO29CQUMvQixJQUFJLFdBQVcsS0FBSyxJQUFJLEVBQUU7d0JBQ3hCLEtBQUksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsY0FBYyxDQUFDLENBQUM7cUJBQ3REO2dCQUNILENBQUMsQ0FBQyxFQUNGLEdBQUcsQ0FBQyxVQUFDLEVBQTZCO3dCQUE3QiwwQkFBNkIsRUFBNUIsbUJBQVcsRUFBRSxzQkFBYztvQkFDL0IsSUFDRSxXQUFXLEtBQUssSUFBSTt3QkFDcEIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQjt3QkFDN0IsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQzdDO3dCQUNBLE9BQU8sS0FBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FDMUMsV0FBVyxFQUNYLGNBQWMsRUFDZCxLQUFLLENBQUMsR0FBRyxDQUNWLENBQUM7cUJBQ0g7b0JBQ0QsT0FBTyxXQUFXLENBQUM7Z0JBQ3JCLENBQUMsQ0FBQyxDQUNILENBQUM7YUFDSDtpQkFBTTtnQkFDTCxJQUFJLFdBQVcsQ0FBQyxFQUFFLEtBQUssS0FBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRTtvQkFDL0QsS0FBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztpQkFDakQ7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbEI7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQTFETSxzQkFBUyxHQUFHLGNBQWMsQ0FBQzs7Z0JBSm5DLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBYkMsY0FBYztnQkFEZCxVQUFVO2dCQVVILGdCQUFnQjtnQkFEaEIsY0FBYztnQkFEZCxnQkFBZ0I7Z0JBTnZCLG1CQUFtQjs7O3VCQVByQjtDQWdGQyxBQS9ERCxJQStEQztTQTVEWSxZQUFZOzs7SUFDdkIsdUJBQWtDOzs7OztJQUdoQyxzQ0FBc0M7Ozs7O0lBQ3RDLGtDQUE4Qjs7Ozs7SUFDOUIsaUNBQW1DOzs7OztJQUNuQywrQkFBK0I7Ozs7O0lBQy9CLGlDQUFtQzs7Ozs7SUFDbkMsMkNBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlclN0YXRlU25hcHNob3QsIFVybFRyZWUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQge1xuICBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICBDbXNTZXJ2aWNlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgU2VtYW50aWNQYXRoU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpcnN0LCBtYXAsIHN3aXRjaE1hcCwgdGFwLCB3aXRoTGF0ZXN0RnJvbSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ21zR3VhcmRzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Ntcy1ndWFyZHMuc2VydmljZSc7XG5pbXBvcnQgeyBDbXNJMThuU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Ntcy1pMThuLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ21zUm91dGVzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Ntcy1yb3V0ZXMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNQYWdlR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIHN0YXRpYyBndWFyZE5hbWUgPSAnQ21zUGFnZUd1YXJkJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcml2YXRlIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjbXNSb3V0ZXM6IENtc1JvdXRlc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjbXNJMThuOiBDbXNJMThuU2VydmljZSxcbiAgICBwcml2YXRlIGNtc0d1YXJkczogQ21zR3VhcmRzU2VydmljZSxcbiAgICBwcml2YXRlIHNlbWFudGljUGF0aFNlcnZpY2U6IFNlbWFudGljUGF0aFNlcnZpY2VcbiAgKSB7fVxuXG4gIGNhbkFjdGl2YXRlKFxuICAgIHJvdXRlOiBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcbiAgICByZXR1cm4gdGhpcy5yb3V0aW5nU2VydmljZS5nZXROZXh0UGFnZUNvbnRleHQoKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKHBhZ2VDb250ZXh0ID0+XG4gICAgICAgIHRoaXMuY21zU2VydmljZS5oYXNQYWdlKHBhZ2VDb250ZXh0LCB0cnVlKS5waXBlKFxuICAgICAgICAgIGZpcnN0KCksXG4gICAgICAgICAgd2l0aExhdGVzdEZyb20ob2YocGFnZUNvbnRleHQpKVxuICAgICAgICApXG4gICAgICApLFxuICAgICAgc3dpdGNoTWFwKChbaGFzUGFnZSwgcGFnZUNvbnRleHRdKSA9PiB7XG4gICAgICAgIGlmIChoYXNQYWdlKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY21zU2VydmljZS5nZXRQYWdlQ29tcG9uZW50VHlwZXMocGFnZUNvbnRleHQpLnBpcGUoXG4gICAgICAgICAgICBzd2l0Y2hNYXAoY29tcG9uZW50VHlwZXMgPT5cbiAgICAgICAgICAgICAgdGhpcy5jbXNHdWFyZHNcbiAgICAgICAgICAgICAgICAuY21zUGFnZUNhbkFjdGl2YXRlKGNvbXBvbmVudFR5cGVzLCByb3V0ZSwgc3RhdGUpXG4gICAgICAgICAgICAgICAgLnBpcGUod2l0aExhdGVzdEZyb20ob2YoY29tcG9uZW50VHlwZXMpKSlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICB0YXAoKFtjYW5BY3RpdmF0ZSwgY29tcG9uZW50VHlwZXNdKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChjYW5BY3RpdmF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY21zSTE4bi5sb2FkQ2h1bmtzRm9yQ29tcG9uZW50cyhjb21wb25lbnRUeXBlcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbWFwKChbY2FuQWN0aXZhdGUsIGNvbXBvbmVudFR5cGVzXSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgY2FuQWN0aXZhdGUgPT09IHRydWUgJiZcbiAgICAgICAgICAgICAgICAhcm91dGUuZGF0YS5jeENtc1JvdXRlQ29udGV4dCAmJlxuICAgICAgICAgICAgICAgICF0aGlzLmNtc1JvdXRlcy5jbXNSb3V0ZUV4aXN0KHBhZ2VDb250ZXh0LmlkKVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jbXNSb3V0ZXMuaGFuZGxlQ21zUm91dGVzSW5HdWFyZChcbiAgICAgICAgICAgICAgICAgIHBhZ2VDb250ZXh0LFxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50VHlwZXMsXG4gICAgICAgICAgICAgICAgICBzdGF0ZS51cmxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBjYW5BY3RpdmF0ZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAocGFnZUNvbnRleHQuaWQgIT09IHRoaXMuc2VtYW50aWNQYXRoU2VydmljZS5nZXQoJ25vdEZvdW5kJykpIHtcbiAgICAgICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAnbm90Rm91bmQnIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==