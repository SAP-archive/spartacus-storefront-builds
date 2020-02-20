import { __decorate, __read } from "tslib";
import { Injectable } from '@angular/core';
import { CmsActivatedRouteSnapshot, CmsService, Page, PageContext, PageType, ProtectedRoutesGuard, RoutingService, SemanticPathService, } from '@spartacus/core';
import { of } from 'rxjs';
import { filter, first, map, switchMap, take, tap, withLatestFrom, } from 'rxjs/operators';
import { CmsGuardsService } from '../services/cms-guards.service';
import { CmsI18nService } from '../services/cms-i18n.service';
import { CmsRoutesService } from '../services/cms-routes.service';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "../services/cms-routes.service";
import * as i3 from "../services/cms-i18n.service";
import * as i4 from "../services/cms-guards.service";
var CmsPageGuard = /** @class */ (function () {
    function CmsPageGuard(
    // expose as `protected` only services from public API:
    routingService, cmsService, cmsRoutes, cmsI18n, cmsGuards, semanticPathService, protectedRoutesGuard) {
        this.routingService = routingService;
        this.cmsService = cmsService;
        this.cmsRoutes = cmsRoutes;
        this.cmsI18n = cmsI18n;
        this.cmsGuards = cmsGuards;
        this.semanticPathService = semanticPathService;
        this.protectedRoutesGuard = protectedRoutesGuard;
    }
    CmsPageGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        /**
         * TODO(issue:4646) Expect that `ProtectedRoutesGuard` dependency is required (remove `if` logic)
         */
        return this.protectedRoutesGuard
            ? this.protectedRoutesGuard
                .canActivate(route)
                .pipe(switchMap(function (result) {
                return result ? _this.getCmsPage(route, state) : of(result);
            }))
            : this.getCmsPage(route, state);
    };
    CmsPageGuard.prototype.getCmsPage = function (route, state) {
        var _this = this;
        return this.routingService.getNextPageContext().pipe(switchMap(function (pageContext) {
            return _this.cmsService.getPage(pageContext, true).pipe(first(), withLatestFrom(of(pageContext)));
        }), switchMap(function (_a) {
            var _b = __read(_a, 2), pageData = _b[0], pageContext = _b[1];
            return pageData
                ? _this.resolveCmsPageLogic(pageContext, pageData, route, state)
                : _this.handleNotFoundPage(pageContext, route, state);
        }));
    };
    CmsPageGuard.prototype.resolveCmsPageLogic = function (pageContext, pageData, route, state) {
        var _this = this;
        return this.cmsService.getPageComponentTypes(pageContext).pipe(take(1), switchMap(function (componentTypes) {
            return _this.cmsGuards
                .cmsPageCanActivate(componentTypes, route, state)
                .pipe(withLatestFrom(of(componentTypes)));
        }), tap(function (_a) {
            var _b = __read(_a, 2), canActivate = _b[0], componentTypes = _b[1];
            if (canActivate === true) {
                _this.cmsI18n.loadChunksForComponents(componentTypes);
            }
        }), map(function (_a) {
            var _b = __read(_a, 2), canActivate = _b[0], componentTypes = _b[1];
            var pageLabel = pageData.label || pageContext.id; // for content pages the page label returned from backend can be different than ID initially assumed from route
            if (canActivate === true &&
                !route.data.cxCmsRouteContext &&
                !_this.cmsRoutes.cmsRouteExist(pageLabel)) {
                return _this.cmsRoutes.handleCmsRoutesInGuard(pageContext, componentTypes, state.url, pageLabel);
            }
            return canActivate;
        }));
    };
    CmsPageGuard.prototype.handleNotFoundPage = function (pageContext, route, state) {
        var _this = this;
        var notFoundCmsPageContext = {
            type: PageType.CONTENT_PAGE,
            id: this.semanticPathService.get('notFound'),
        };
        return this.cmsService.getPage(notFoundCmsPageContext).pipe(switchMap(function (notFoundPage) {
            if (notFoundPage) {
                return _this.cmsService.getPageIndex(notFoundCmsPageContext).pipe(tap(function (notFoundIndex) {
                    _this.cmsService.setPageFailIndex(pageContext, notFoundIndex);
                }), switchMap(function (notFoundIndex) {
                    return _this.cmsService.getPageIndex(pageContext).pipe(
                    // we have to wait for page index update
                    filter(function (index) { return index === notFoundIndex; }));
                }), switchMap(function () {
                    return _this.resolveCmsPageLogic(pageContext, notFoundPage, route, state);
                }));
            }
            return of(false);
        }));
    };
    CmsPageGuard.guardName = 'CmsPageGuard';
    CmsPageGuard.ctorParameters = function () { return [
        { type: RoutingService },
        { type: CmsService },
        { type: CmsRoutesService },
        { type: CmsI18nService },
        { type: CmsGuardsService },
        { type: SemanticPathService },
        { type: ProtectedRoutesGuard }
    ]; };
    CmsPageGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsPageGuard_Factory() { return new CmsPageGuard(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i2.CmsRoutesService), i0.ɵɵinject(i3.CmsI18nService), i0.ɵɵinject(i4.CmsGuardsService), i0.ɵɵinject(i1.SemanticPathService), i0.ɵɵinject(i1.ProtectedRoutesGuard)); }, token: CmsPageGuard, providedIn: "root" });
    CmsPageGuard = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CmsPageGuard);
    return CmsPageGuard;
}());
export { CmsPageGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL2d1YXJkcy9jbXMtcGFnZS5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQ0wseUJBQXlCLEVBQ3pCLFVBQVUsRUFDVixJQUFJLEVBQ0osV0FBVyxFQUNYLFFBQVEsRUFDUixvQkFBb0IsRUFDcEIsY0FBYyxFQUNkLG1CQUFtQixHQUNwQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUNMLE1BQU0sRUFDTixLQUFLLEVBQ0wsR0FBRyxFQUNILFNBQVMsRUFDVCxJQUFJLEVBQ0osR0FBRyxFQUNILGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7O0FBS2xFO0lBMkJFO0lBQ0UsdURBQXVEO0lBQzdDLGNBQThCLEVBQzlCLFVBQXNCLEVBQ3hCLFNBQTJCLEVBQzNCLE9BQXVCLEVBQ3ZCLFNBQTJCLEVBQ3pCLG1CQUF3QyxFQUN4QyxvQkFBMkM7UUFOM0MsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDeEIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDekIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4Qyx5QkFBb0IsR0FBcEIs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QUNuQixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQTdJTSxzQkFBUyxHQUFHLGNBQWMsQ0FBQzs7Z0JBNEJOLGNBQWM7Z0JBQ2xCLFVBQVU7Z0JBQ2IsZ0JBQWdCO2dCQUNsQixjQUFjO2dCQUNaLGdCQUFnQjtnQkFDSixtQkFBbUI7Z0JBQ2pCLG9CQUFvQjs7O0lBbkM1QyxZQUFZO1FBSHhCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxZQUFZLENBK0l4Qjt1QkE1S0Q7Q0E0S0MsQUEvSUQsSUErSUM7U0EvSVksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBVcmxUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gIENtc1NlcnZpY2UsXG4gIFBhZ2UsXG4gIFBhZ2VDb250ZXh0LFxuICBQYWdlVHlwZSxcbiAgUHJvdGVjdGVkUm91dGVzR3VhcmQsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBTZW1hbnRpY1BhdGhTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGZpbHRlcixcbiAgZmlyc3QsXG4gIG1hcCxcbiAgc3dpdGNoTWFwLFxuICB0YWtlLFxuICB0YXAsXG4gIHdpdGhMYXRlc3RGcm9tLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNHdWFyZHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY21zLWd1YXJkcy5zZXJ2aWNlJztcbmltcG9ydCB7IENtc0kxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY21zLWkxOG4uc2VydmljZSc7XG5pbXBvcnQgeyBDbXNSb3V0ZXNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY21zLXJvdXRlcy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENtc1BhZ2VHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgc3RhdGljIGd1YXJkTmFtZSA9ICdDbXNQYWdlR3VhcmQnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIGNtc1JvdXRlczogQ21zUm91dGVzU2VydmljZSxcbiAgICBjbXNJMThuOiBDbXNJMThuU2VydmljZSxcbiAgICBjbXNHdWFyZHM6IENtc0d1YXJkc1NlcnZpY2UsXG4gICAgc2VtYW50aWNQYXRoU2VydmljZTogU2VtYW50aWNQYXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWRSb3V0ZXNHdWFyZDogUHJvdGVjdGVkUm91dGVzR3VhcmQgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICApO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuMi4wXG4gICAqIFVzZSBjb25zdHJ1Y3RvciB3aXRoIG1vcmUgZGVwZW5kZW5jaWVzIGFuZCBtYWtlIHRoZW0gYWxsIHJlcXVpcmVkLlxuICAgKlxuICAgKiBUT0RPKGlzc3VlOjQ2NDYpIGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjIuMFxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgY21zUm91dGVzOiBDbXNSb3V0ZXNTZXJ2aWNlLFxuICAgIGNtc0kxOG46IENtc0kxOG5TZXJ2aWNlLFxuICAgIGNtc0d1YXJkczogQ21zR3VhcmRzU2VydmljZSxcbiAgICBzZW1hbnRpY1BhdGhTZXJ2aWNlOiBTZW1hbnRpY1BhdGhTZXJ2aWNlXG4gICk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIC8vIGV4cG9zZSBhcyBgcHJvdGVjdGVkYCBvbmx5IHNlcnZpY2VzIGZyb20gcHVibGljIEFQSTpcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgY21zUm91dGVzOiBDbXNSb3V0ZXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgY21zSTE4bjogQ21zSTE4blNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjbXNHdWFyZHM6IENtc0d1YXJkc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHNlbWFudGljUGF0aFNlcnZpY2U6IFNlbWFudGljUGF0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHByb3RlY3RlZFJvdXRlc0d1YXJkPzogUHJvdGVjdGVkUm91dGVzR3VhcmRcbiAgKSB7fVxuXG4gIGNhbkFjdGl2YXRlKFxuICAgIHJvdXRlOiBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcbiAgICAvKipcbiAgICAgKiBUT0RPKGlzc3VlOjQ2NDYpIEV4cGVjdCB0aGF0IGBQcm90ZWN0ZWRSb3V0ZXNHdWFyZGAgZGVwZW5kZW5jeSBpcyByZXF1aXJlZCAocmVtb3ZlIGBpZmAgbG9naWMpXG4gICAgICovXG4gICAgcmV0dXJuIHRoaXMucHJvdGVjdGVkUm91dGVzR3VhcmRcbiAgICAgID8gdGhpcy5wcm90ZWN0ZWRSb3V0ZXNHdWFyZFxuICAgICAgICAgIC5jYW5BY3RpdmF0ZShyb3V0ZSlcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIHN3aXRjaE1hcChyZXN1bHQgPT5cbiAgICAgICAgICAgICAgcmVzdWx0ID8gdGhpcy5nZXRDbXNQYWdlKHJvdXRlLCBzdGF0ZSkgOiBvZihyZXN1bHQpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgOiB0aGlzLmdldENtc1BhZ2Uocm91dGUsIHN0YXRlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q21zUGFnZShcbiAgICByb3V0ZTogQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0TmV4dFBhZ2VDb250ZXh0KCkucGlwZShcbiAgICAgIHN3aXRjaE1hcChwYWdlQ29udGV4dCA9PlxuICAgICAgICB0aGlzLmNtc1NlcnZpY2UuZ2V0UGFnZShwYWdlQ29udGV4dCwgdHJ1ZSkucGlwZShcbiAgICAgICAgICBmaXJzdCgpLFxuICAgICAgICAgIHdpdGhMYXRlc3RGcm9tKG9mKHBhZ2VDb250ZXh0KSlcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIHN3aXRjaE1hcCgoW3BhZ2VEYXRhLCBwYWdlQ29udGV4dF0pID0+XG4gICAgICAgIHBhZ2VEYXRhXG4gICAgICAgICAgPyB0aGlzLnJlc29sdmVDbXNQYWdlTG9naWMocGFnZUNvbnRleHQsIHBhZ2VEYXRhLCByb3V0ZSwgc3RhdGUpXG4gICAgICAgICAgOiB0aGlzLmhhbmRsZU5vdEZvdW5kUGFnZShwYWdlQ29udGV4dCwgcm91dGUsIHN0YXRlKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVDbXNQYWdlTG9naWMoXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LFxuICAgIHBhZ2VEYXRhOiBQYWdlLFxuICAgIHJvdXRlOiBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcbiAgICByZXR1cm4gdGhpcy5jbXNTZXJ2aWNlLmdldFBhZ2VDb21wb25lbnRUeXBlcyhwYWdlQ29udGV4dCkucGlwZShcbiAgICAgIHRha2UoMSksXG4gICAgICBzd2l0Y2hNYXAoY29tcG9uZW50VHlwZXMgPT5cbiAgICAgICAgdGhpcy5jbXNHdWFyZHNcbiAgICAgICAgICAuY21zUGFnZUNhbkFjdGl2YXRlKGNvbXBvbmVudFR5cGVzLCByb3V0ZSwgc3RhdGUpXG4gICAgICAgICAgLnBpcGUod2l0aExhdGVzdEZyb20ob2YoY29tcG9uZW50VHlwZXMpKSlcbiAgICAgICksXG4gICAgICB0YXAoKFtjYW5BY3RpdmF0ZSwgY29tcG9uZW50VHlwZXNdKSA9PiB7XG4gICAgICAgIGlmIChjYW5BY3RpdmF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuY21zSTE4bi5sb2FkQ2h1bmtzRm9yQ29tcG9uZW50cyhjb21wb25lbnRUeXBlcyk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKChbY2FuQWN0aXZhdGUsIGNvbXBvbmVudFR5cGVzXSkgPT4ge1xuICAgICAgICBjb25zdCBwYWdlTGFiZWwgPSBwYWdlRGF0YS5sYWJlbCB8fCBwYWdlQ29udGV4dC5pZDsgLy8gZm9yIGNvbnRlbnQgcGFnZXMgdGhlIHBhZ2UgbGFiZWwgcmV0dXJuZWQgZnJvbSBiYWNrZW5kIGNhbiBiZSBkaWZmZXJlbnQgdGhhbiBJRCBpbml0aWFsbHkgYXNzdW1lZCBmcm9tIHJvdXRlXG4gICAgICAgIGlmIChcbiAgICAgICAgICBjYW5BY3RpdmF0ZSA9PT0gdHJ1ZSAmJlxuICAgICAgICAgICFyb3V0ZS5kYXRhLmN4Q21zUm91dGVDb250ZXh0ICYmXG4gICAgICAgICAgIXRoaXMuY21zUm91dGVzLmNtc1JvdXRlRXhpc3QocGFnZUxhYmVsKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jbXNSb3V0ZXMuaGFuZGxlQ21zUm91dGVzSW5HdWFyZChcbiAgICAgICAgICAgIHBhZ2VDb250ZXh0LFxuICAgICAgICAgICAgY29tcG9uZW50VHlwZXMsXG4gICAgICAgICAgICBzdGF0ZS51cmwsXG4gICAgICAgICAgICBwYWdlTGFiZWxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYW5BY3RpdmF0ZTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTm90Rm91bmRQYWdlKFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgICByb3V0ZTogQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgY29uc3Qgbm90Rm91bmRDbXNQYWdlQ29udGV4dDogUGFnZUNvbnRleHQgPSB7XG4gICAgICB0eXBlOiBQYWdlVHlwZS5DT05URU5UX1BBR0UsXG4gICAgICBpZDogdGhpcy5zZW1hbnRpY1BhdGhTZXJ2aWNlLmdldCgnbm90Rm91bmQnKSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmNtc1NlcnZpY2UuZ2V0UGFnZShub3RGb3VuZENtc1BhZ2VDb250ZXh0KS5waXBlKFxuICAgICAgc3dpdGNoTWFwKG5vdEZvdW5kUGFnZSA9PiB7XG4gICAgICAgIGlmIChub3RGb3VuZFBhZ2UpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jbXNTZXJ2aWNlLmdldFBhZ2VJbmRleChub3RGb3VuZENtc1BhZ2VDb250ZXh0KS5waXBlKFxuICAgICAgICAgICAgdGFwKG5vdEZvdW5kSW5kZXggPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNtc1NlcnZpY2Uuc2V0UGFnZUZhaWxJbmRleChwYWdlQ29udGV4dCwgbm90Rm91bmRJbmRleCk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHN3aXRjaE1hcChub3RGb3VuZEluZGV4ID0+XG4gICAgICAgICAgICAgIHRoaXMuY21zU2VydmljZS5nZXRQYWdlSW5kZXgocGFnZUNvbnRleHQpLnBpcGUoXG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byB3YWl0IGZvciBwYWdlIGluZGV4IHVwZGF0ZVxuICAgICAgICAgICAgICAgIGZpbHRlcihpbmRleCA9PiBpbmRleCA9PT0gbm90Rm91bmRJbmRleClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHN3aXRjaE1hcCgoKSA9PlxuICAgICAgICAgICAgICB0aGlzLnJlc29sdmVDbXNQYWdlTG9naWMocGFnZUNvbnRleHQsIG5vdEZvdW5kUGFnZSwgcm91dGUsIHN0YXRlKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9mKGZhbHNlKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19