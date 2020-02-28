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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL2d1YXJkcy9jbXMtcGFnZS5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQ0wseUJBQXlCLEVBQ3pCLFVBQVUsRUFDVixJQUFJLEVBQ0osV0FBVyxFQUNYLFFBQVEsRUFDUixvQkFBb0IsRUFDcEIsY0FBYyxFQUNkLG1CQUFtQixHQUNwQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUNMLE1BQU0sRUFDTixLQUFLLEVBQ0wsR0FBRyxFQUNILFNBQVMsRUFDVCxJQUFJLEVBQ0osR0FBRyxFQUNILGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7O0FBS2xFO0lBMkJFO0lBQ0UsdURBQXVEO0lBQzdDLGNBQThCLEVBQzlCLFVBQXNCLEVBQ3hCLFNBQTJCLEVBQzNCLE9BQXVCLEVBQ3ZCLFNBQTJCLEVBQ3pCLG1CQUF3QyxFQUN4QyxvQkFBMkM7UUFOM0MsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDeEIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDekIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4Qyx5QkFBb0IsR0FBcEIs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QUM7UUFDbkIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUE1SU0sc0JBQVMsR0FBRyxjQUFjLENBQUM7O2dCQTRCTixjQUFjO2dCQUNsQixVQUFVO2dCQUNiLGdCQUFnQjtnQkFDbEIsY0FBYztnQkFDWixnQkFBZ0I7Z0JBQ0osbUJBQW1CO2dCQUNqQixvQkFBb0I7OztJQW5DNUMsWUFBWTtRQUh4QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csWUFBWSxDQThJeEI7dUJBM0tEO0NBMktDLEFBOUlELElBOElDO1NBOUlZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyU3RhdGVTbmFwc2hvdCwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICBDbXNTZXJ2aWNlLFxuICBQYWdlLFxuICBQYWdlQ29udGV4dCxcbiAgUGFnZVR5cGUsXG4gIFByb3RlY3RlZFJvdXRlc0d1YXJkLFxuICBSb3V0aW5nU2VydmljZSxcbiAgU2VtYW50aWNQYXRoU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBmaWx0ZXIsXG4gIGZpcnN0LFxuICBtYXAsXG4gIHN3aXRjaE1hcCxcbiAgdGFrZSxcbiAgdGFwLFxuICB3aXRoTGF0ZXN0RnJvbSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zR3VhcmRzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Ntcy1ndWFyZHMuc2VydmljZSc7XG5pbXBvcnQgeyBDbXNJMThuU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Ntcy1pMThuLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ21zUm91dGVzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Ntcy1yb3V0ZXMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNQYWdlR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIHN0YXRpYyBndWFyZE5hbWUgPSAnQ21zUGFnZUd1YXJkJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICBjbXNSb3V0ZXM6IENtc1JvdXRlc1NlcnZpY2UsXG4gICAgY21zSTE4bjogQ21zSTE4blNlcnZpY2UsXG4gICAgY21zR3VhcmRzOiBDbXNHdWFyZHNTZXJ2aWNlLFxuICAgIHNlbWFudGljUGF0aFNlcnZpY2U6IFNlbWFudGljUGF0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkUm91dGVzR3VhcmQ6IFByb3RlY3RlZFJvdXRlc0d1YXJkIC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgKTtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjIuMFxuICAgKiBVc2UgY29uc3RydWN0b3Igd2l0aCBtb3JlIGRlcGVuZGVuY2llcyBhbmQgbWFrZSB0aGVtIGFsbCByZXF1aXJlZC5cbiAgICpcbiAgICogVE9ETyhpc3N1ZTo0NjQ2KSBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4yLjBcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIGNtc1JvdXRlczogQ21zUm91dGVzU2VydmljZSxcbiAgICBjbXNJMThuOiBDbXNJMThuU2VydmljZSxcbiAgICBjbXNHdWFyZHM6IENtc0d1YXJkc1NlcnZpY2UsXG4gICAgc2VtYW50aWNQYXRoU2VydmljZTogU2VtYW50aWNQYXRoU2VydmljZVxuICApO1xuICBjb25zdHJ1Y3RvcihcbiAgICAvLyBleHBvc2UgYXMgYHByb3RlY3RlZGAgb25seSBzZXJ2aWNlcyBmcm9tIHB1YmxpYyBBUEk6XG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICBwcml2YXRlIGNtc1JvdXRlczogQ21zUm91dGVzU2VydmljZSxcbiAgICBwcml2YXRlIGNtc0kxOG46IENtc0kxOG5TZXJ2aWNlLFxuICAgIHByaXZhdGUgY21zR3VhcmRzOiBDbXNHdWFyZHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBzZW1hbnRpY1BhdGhTZXJ2aWNlOiBTZW1hbnRpY1BhdGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBwcm90ZWN0ZWRSb3V0ZXNHdWFyZD86IFByb3RlY3RlZFJvdXRlc0d1YXJkXG4gICkge31cblxuICBjYW5BY3RpdmF0ZShcbiAgICByb3V0ZTogQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgLyoqXG4gICAgICogVE9ETyhpc3N1ZTo0NjQ2KSBFeHBlY3QgdGhhdCBgUHJvdGVjdGVkUm91dGVzR3VhcmRgIGRlcGVuZGVuY3kgaXMgcmVxdWlyZWQgKHJlbW92ZSBgaWZgIGxvZ2ljKVxuICAgICAqL1xuICAgIHJldHVybiB0aGlzLnByb3RlY3RlZFJvdXRlc0d1YXJkXG4gICAgICA/IHRoaXMucHJvdGVjdGVkUm91dGVzR3VhcmRcbiAgICAgICAgICAuY2FuQWN0aXZhdGUocm91dGUpXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBzd2l0Y2hNYXAocmVzdWx0ID0+XG4gICAgICAgICAgICAgIHJlc3VsdCA/IHRoaXMuZ2V0Q21zUGFnZShyb3V0ZSwgc3RhdGUpIDogb2YocmVzdWx0KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgIDogdGhpcy5nZXRDbXNQYWdlKHJvdXRlLCBzdGF0ZSk7XG4gIH1cblxuICBwcml2YXRlIGdldENtc1BhZ2UoXG4gICAgcm91dGU6IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldE5leHRQYWdlQ29udGV4dCgpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAocGFnZUNvbnRleHQgPT5cbiAgICAgICAgdGhpcy5jbXNTZXJ2aWNlXG4gICAgICAgICAgLmdldFBhZ2UocGFnZUNvbnRleHQsIHRydWUpXG4gICAgICAgICAgLnBpcGUoZmlyc3QoKSwgd2l0aExhdGVzdEZyb20ob2YocGFnZUNvbnRleHQpKSlcbiAgICAgICksXG4gICAgICBzd2l0Y2hNYXAoKFtwYWdlRGF0YSwgcGFnZUNvbnRleHRdKSA9PlxuICAgICAgICBwYWdlRGF0YVxuICAgICAgICAgID8gdGhpcy5yZXNvbHZlQ21zUGFnZUxvZ2ljKHBhZ2VDb250ZXh0LCBwYWdlRGF0YSwgcm91dGUsIHN0YXRlKVxuICAgICAgICAgIDogdGhpcy5oYW5kbGVOb3RGb3VuZFBhZ2UocGFnZUNvbnRleHQsIHJvdXRlLCBzdGF0ZSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlQ21zUGFnZUxvZ2ljKFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgICBwYWdlRGF0YTogUGFnZSxcbiAgICByb3V0ZTogQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgcmV0dXJuIHRoaXMuY21zU2VydmljZS5nZXRQYWdlQ29tcG9uZW50VHlwZXMocGFnZUNvbnRleHQpLnBpcGUoXG4gICAgICB0YWtlKDEpLFxuICAgICAgc3dpdGNoTWFwKGNvbXBvbmVudFR5cGVzID0+XG4gICAgICAgIHRoaXMuY21zR3VhcmRzXG4gICAgICAgICAgLmNtc1BhZ2VDYW5BY3RpdmF0ZShjb21wb25lbnRUeXBlcywgcm91dGUsIHN0YXRlKVxuICAgICAgICAgIC5waXBlKHdpdGhMYXRlc3RGcm9tKG9mKGNvbXBvbmVudFR5cGVzKSkpXG4gICAgICApLFxuICAgICAgdGFwKChbY2FuQWN0aXZhdGUsIGNvbXBvbmVudFR5cGVzXSkgPT4ge1xuICAgICAgICBpZiAoY2FuQWN0aXZhdGUgPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLmNtc0kxOG4ubG9hZENodW5rc0ZvckNvbXBvbmVudHMoY29tcG9uZW50VHlwZXMpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgoW2NhbkFjdGl2YXRlLCBjb21wb25lbnRUeXBlc10pID0+IHtcbiAgICAgICAgY29uc3QgcGFnZUxhYmVsID0gcGFnZURhdGEubGFiZWwgfHwgcGFnZUNvbnRleHQuaWQ7IC8vIGZvciBjb250ZW50IHBhZ2VzIHRoZSBwYWdlIGxhYmVsIHJldHVybmVkIGZyb20gYmFja2VuZCBjYW4gYmUgZGlmZmVyZW50IHRoYW4gSUQgaW5pdGlhbGx5IGFzc3VtZWQgZnJvbSByb3V0ZVxuICAgICAgICBpZiAoXG4gICAgICAgICAgY2FuQWN0aXZhdGUgPT09IHRydWUgJiZcbiAgICAgICAgICAhcm91dGUuZGF0YS5jeENtc1JvdXRlQ29udGV4dCAmJlxuICAgICAgICAgICF0aGlzLmNtc1JvdXRlcy5jbXNSb3V0ZUV4aXN0KHBhZ2VMYWJlbClcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY21zUm91dGVzLmhhbmRsZUNtc1JvdXRlc0luR3VhcmQoXG4gICAgICAgICAgICBwYWdlQ29udGV4dCxcbiAgICAgICAgICAgIGNvbXBvbmVudFR5cGVzLFxuICAgICAgICAgICAgc3RhdGUudXJsLFxuICAgICAgICAgICAgcGFnZUxhYmVsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FuQWN0aXZhdGU7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU5vdEZvdW5kUGFnZShcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsXG4gICAgcm91dGU6IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIGNvbnN0IG5vdEZvdW5kQ21zUGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0ID0ge1xuICAgICAgdHlwZTogUGFnZVR5cGUuQ09OVEVOVF9QQUdFLFxuICAgICAgaWQ6IHRoaXMuc2VtYW50aWNQYXRoU2VydmljZS5nZXQoJ25vdEZvdW5kJyksXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5jbXNTZXJ2aWNlLmdldFBhZ2Uobm90Rm91bmRDbXNQYWdlQ29udGV4dCkucGlwZShcbiAgICAgIHN3aXRjaE1hcChub3RGb3VuZFBhZ2UgPT4ge1xuICAgICAgICBpZiAobm90Rm91bmRQYWdlKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY21zU2VydmljZS5nZXRQYWdlSW5kZXgobm90Rm91bmRDbXNQYWdlQ29udGV4dCkucGlwZShcbiAgICAgICAgICAgIHRhcChub3RGb3VuZEluZGV4ID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLnNldFBhZ2VGYWlsSW5kZXgocGFnZUNvbnRleHQsIG5vdEZvdW5kSW5kZXgpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzd2l0Y2hNYXAobm90Rm91bmRJbmRleCA9PlxuICAgICAgICAgICAgICB0aGlzLmNtc1NlcnZpY2UuZ2V0UGFnZUluZGV4KHBhZ2VDb250ZXh0KS5waXBlKFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gd2FpdCBmb3IgcGFnZSBpbmRleCB1cGRhdGVcbiAgICAgICAgICAgICAgICBmaWx0ZXIoaW5kZXggPT4gaW5kZXggPT09IG5vdEZvdW5kSW5kZXgpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBzd2l0Y2hNYXAoKCkgPT5cbiAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlQ21zUGFnZUxvZ2ljKHBhZ2VDb250ZXh0LCBub3RGb3VuZFBhZ2UsIHJvdXRlLCBzdGF0ZSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==