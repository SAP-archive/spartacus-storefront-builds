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
            return _this.cmsService
                .getPage(pageContext, true)
                .pipe(first(), withLatestFrom(of(pageContext)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL2d1YXJkcy9jbXMtcGFnZS5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQ0wseUJBQXlCLEVBQ3pCLFVBQVUsRUFDVixJQUFJLEVBQ0osV0FBVyxFQUNYLFFBQVEsRUFDUixvQkFBb0IsRUFDcEIsY0FBYyxFQUNkLG1CQUFtQixHQUNwQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUNMLE1BQU0sRUFDTixLQUFLLEVBQ0wsR0FBRyxFQUNILFNBQVMsRUFDVCxJQUFJLEVBQ0osR0FBRyxFQUNILGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7O0FBS2xFO0lBMkJFO0lBQ0UsdURBQXVEO0lBQzdDLGNBQThCLEVBQzlCLFVBQXNCLEVBQ3hCLFNBQTJCLEVBQzNCLE9BQXVCLEVBQ3ZCLFNBQTJCLEVBQ3pCLG1CQUF3QyxFQUN4QyxvQkFBMkM7UUFOM0MsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDeEIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDekIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4Qyx5QkFBb0IsR0FBcEIs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QUFDO1FBQ25CLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBNUlNLHNCQUFTLEdBQUcsY0FBYyxDQUFDOztnQkE0Qk4sY0FBYztnQkFDbEIsVUFBVTtnQkFDYixnQkFBZ0I7Z0JBQ2xCLGNBQWM7Z0JBQ1osZ0JBQWdCO2dCQUNKLG1CQUFtQjtnQkFDakIsb0JBQW9COzs7SUFuQzVDLFlBQVk7UUFIeEIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLFlBQVksQ0E4SXhCO3VCQTNLRDtDQTJLQyxBQTlJRCxJQThJQztTQTlJWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlclN0YXRlU25hcHNob3QsIFVybFRyZWUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgQ21zU2VydmljZSxcbiAgUGFnZSxcbiAgUGFnZUNvbnRleHQsXG4gIFBhZ2VUeXBlLFxuICBQcm90ZWN0ZWRSb3V0ZXNHdWFyZCxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFNlbWFudGljUGF0aFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZmlsdGVyLFxuICBmaXJzdCxcbiAgbWFwLFxuICBzd2l0Y2hNYXAsXG4gIHRha2UsXG4gIHRhcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc0d1YXJkc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jbXMtZ3VhcmRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ21zSTE4blNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jbXMtaTE4bi5zZXJ2aWNlJztcbmltcG9ydCB7IENtc1JvdXRlc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jbXMtcm91dGVzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ21zUGFnZUd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBzdGF0aWMgZ3VhcmROYW1lID0gJ0Ntc1BhZ2VHdWFyZCc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgY21zUm91dGVzOiBDbXNSb3V0ZXNTZXJ2aWNlLFxuICAgIGNtc0kxOG46IENtc0kxOG5TZXJ2aWNlLFxuICAgIGNtc0d1YXJkczogQ21zR3VhcmRzU2VydmljZSxcbiAgICBzZW1hbnRpY1BhdGhTZXJ2aWNlOiBTZW1hbnRpY1BhdGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZFJvdXRlc0d1YXJkOiBQcm90ZWN0ZWRSb3V0ZXNHdWFyZCAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICk7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4yLjBcbiAgICogVXNlIGNvbnN0cnVjdG9yIHdpdGggbW9yZSBkZXBlbmRlbmNpZXMgYW5kIG1ha2UgdGhlbSBhbGwgcmVxdWlyZWQuXG4gICAqXG4gICAqIFRPRE8oaXNzdWU6NDY0NikgZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuMi4wXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICBjbXNSb3V0ZXM6IENtc1JvdXRlc1NlcnZpY2UsXG4gICAgY21zSTE4bjogQ21zSTE4blNlcnZpY2UsXG4gICAgY21zR3VhcmRzOiBDbXNHdWFyZHNTZXJ2aWNlLFxuICAgIHNlbWFudGljUGF0aFNlcnZpY2U6IFNlbWFudGljUGF0aFNlcnZpY2VcbiAgKTtcbiAgY29uc3RydWN0b3IoXG4gICAgLy8gZXhwb3NlIGFzIGBwcm90ZWN0ZWRgIG9ubHkgc2VydmljZXMgZnJvbSBwdWJsaWMgQVBJOlxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjbXNSb3V0ZXM6IENtc1JvdXRlc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjbXNJMThuOiBDbXNJMThuU2VydmljZSxcbiAgICBwcml2YXRlIGNtc0d1YXJkczogQ21zR3VhcmRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgc2VtYW50aWNQYXRoU2VydmljZTogU2VtYW50aWNQYXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcHJvdGVjdGVkUm91dGVzR3VhcmQ/OiBQcm90ZWN0ZWRSb3V0ZXNHdWFyZFxuICApIHt9XG5cbiAgY2FuQWN0aXZhdGUoXG4gICAgcm91dGU6IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIC8qKlxuICAgICAqIFRPRE8oaXNzdWU6NDY0NikgRXhwZWN0IHRoYXQgYFByb3RlY3RlZFJvdXRlc0d1YXJkYCBkZXBlbmRlbmN5IGlzIHJlcXVpcmVkIChyZW1vdmUgYGlmYCBsb2dpYylcbiAgICAgKi9cbiAgICByZXR1cm4gdGhpcy5wcm90ZWN0ZWRSb3V0ZXNHdWFyZFxuICAgICAgPyB0aGlzLnByb3RlY3RlZFJvdXRlc0d1YXJkXG4gICAgICAgICAgLmNhbkFjdGl2YXRlKHJvdXRlKVxuICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgc3dpdGNoTWFwKChyZXN1bHQpID0+XG4gICAgICAgICAgICAgIHJlc3VsdCA/IHRoaXMuZ2V0Q21zUGFnZShyb3V0ZSwgc3RhdGUpIDogb2YocmVzdWx0KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgIDogdGhpcy5nZXRDbXNQYWdlKHJvdXRlLCBzdGF0ZSk7XG4gIH1cblxuICBwcml2YXRlIGdldENtc1BhZ2UoXG4gICAgcm91dGU6IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldE5leHRQYWdlQ29udGV4dCgpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHBhZ2VDb250ZXh0KSA9PlxuICAgICAgICB0aGlzLmNtc1NlcnZpY2VcbiAgICAgICAgICAuZ2V0UGFnZShwYWdlQ29udGV4dCwgdHJ1ZSlcbiAgICAgICAgICAucGlwZShmaXJzdCgpLCB3aXRoTGF0ZXN0RnJvbShvZihwYWdlQ29udGV4dCkpKVxuICAgICAgKSxcbiAgICAgIHN3aXRjaE1hcCgoW3BhZ2VEYXRhLCBwYWdlQ29udGV4dF0pID0+XG4gICAgICAgIHBhZ2VEYXRhXG4gICAgICAgICAgPyB0aGlzLnJlc29sdmVDbXNQYWdlTG9naWMocGFnZUNvbnRleHQsIHBhZ2VEYXRhLCByb3V0ZSwgc3RhdGUpXG4gICAgICAgICAgOiB0aGlzLmhhbmRsZU5vdEZvdW5kUGFnZShwYWdlQ29udGV4dCwgcm91dGUsIHN0YXRlKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVDbXNQYWdlTG9naWMoXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LFxuICAgIHBhZ2VEYXRhOiBQYWdlLFxuICAgIHJvdXRlOiBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcbiAgICByZXR1cm4gdGhpcy5jbXNTZXJ2aWNlLmdldFBhZ2VDb21wb25lbnRUeXBlcyhwYWdlQ29udGV4dCkucGlwZShcbiAgICAgIHRha2UoMSksXG4gICAgICBzd2l0Y2hNYXAoKGNvbXBvbmVudFR5cGVzKSA9PlxuICAgICAgICB0aGlzLmNtc0d1YXJkc1xuICAgICAgICAgIC5jbXNQYWdlQ2FuQWN0aXZhdGUoY29tcG9uZW50VHlwZXMsIHJvdXRlLCBzdGF0ZSlcbiAgICAgICAgICAucGlwZSh3aXRoTGF0ZXN0RnJvbShvZihjb21wb25lbnRUeXBlcykpKVxuICAgICAgKSxcbiAgICAgIHRhcCgoW2NhbkFjdGl2YXRlLCBjb21wb25lbnRUeXBlc10pID0+IHtcbiAgICAgICAgaWYgKGNhbkFjdGl2YXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgdGhpcy5jbXNJMThuLmxvYWRDaHVua3NGb3JDb21wb25lbnRzKGNvbXBvbmVudFR5cGVzKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAoKFtjYW5BY3RpdmF0ZSwgY29tcG9uZW50VHlwZXNdKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhZ2VMYWJlbCA9IHBhZ2VEYXRhLmxhYmVsIHx8IHBhZ2VDb250ZXh0LmlkOyAvLyBmb3IgY29udGVudCBwYWdlcyB0aGUgcGFnZSBsYWJlbCByZXR1cm5lZCBmcm9tIGJhY2tlbmQgY2FuIGJlIGRpZmZlcmVudCB0aGFuIElEIGluaXRpYWxseSBhc3N1bWVkIGZyb20gcm91dGVcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNhbkFjdGl2YXRlID09PSB0cnVlICYmXG4gICAgICAgICAgIXJvdXRlLmRhdGEuY3hDbXNSb3V0ZUNvbnRleHQgJiZcbiAgICAgICAgICAhdGhpcy5jbXNSb3V0ZXMuY21zUm91dGVFeGlzdChwYWdlTGFiZWwpXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNtc1JvdXRlcy5oYW5kbGVDbXNSb3V0ZXNJbkd1YXJkKFxuICAgICAgICAgICAgcGFnZUNvbnRleHQsXG4gICAgICAgICAgICBjb21wb25lbnRUeXBlcyxcbiAgICAgICAgICAgIHN0YXRlLnVybCxcbiAgICAgICAgICAgIHBhZ2VMYWJlbFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbkFjdGl2YXRlO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVOb3RGb3VuZFBhZ2UoXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LFxuICAgIHJvdXRlOiBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcbiAgICBjb25zdCBub3RGb3VuZENtc1BhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCA9IHtcbiAgICAgIHR5cGU6IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRSxcbiAgICAgIGlkOiB0aGlzLnNlbWFudGljUGF0aFNlcnZpY2UuZ2V0KCdub3RGb3VuZCcpLFxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuY21zU2VydmljZS5nZXRQYWdlKG5vdEZvdW5kQ21zUGFnZUNvbnRleHQpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKG5vdEZvdW5kUGFnZSkgPT4ge1xuICAgICAgICBpZiAobm90Rm91bmRQYWdlKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY21zU2VydmljZS5nZXRQYWdlSW5kZXgobm90Rm91bmRDbXNQYWdlQ29udGV4dCkucGlwZShcbiAgICAgICAgICAgIHRhcCgobm90Rm91bmRJbmRleCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNtc1NlcnZpY2Uuc2V0UGFnZUZhaWxJbmRleChwYWdlQ29udGV4dCwgbm90Rm91bmRJbmRleCk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHN3aXRjaE1hcCgobm90Rm91bmRJbmRleCkgPT5cbiAgICAgICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLmdldFBhZ2VJbmRleChwYWdlQ29udGV4dCkucGlwZShcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHdhaXQgZm9yIHBhZ2UgaW5kZXggdXBkYXRlXG4gICAgICAgICAgICAgICAgZmlsdGVyKChpbmRleCkgPT4gaW5kZXggPT09IG5vdEZvdW5kSW5kZXgpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBzd2l0Y2hNYXAoKCkgPT5cbiAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlQ21zUGFnZUxvZ2ljKHBhZ2VDb250ZXh0LCBub3RGb3VuZFBhZ2UsIHJvdXRlLCBzdGF0ZSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==