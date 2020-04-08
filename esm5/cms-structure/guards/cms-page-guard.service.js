import { __decorate, __read } from "tslib";
import { Injectable } from '@angular/core';
import { CmsActivatedRouteSnapshot, CmsService, Page, PageContext, PageType, SemanticPathService, } from '@spartacus/core';
import { of } from 'rxjs';
import { filter, map, switchMap, take, tap, withLatestFrom, } from 'rxjs/operators';
import { CmsGuardsService } from '../services/cms-guards.service';
import { CmsI18nService } from '../services/cms-i18n.service';
import { CmsRoutesService } from '../services/cms-routes.service';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "../services/cms-routes.service";
import * as i3 from "../services/cms-i18n.service";
import * as i4 from "../services/cms-guards.service";
/**
 * Helper service for `CmsPageGuard`
 */
var CmsPageGuardService = /** @class */ (function () {
    function CmsPageGuardService(semanticPathService, cmsService, cmsRoutes, cmsI18n, cmsGuards) {
        this.semanticPathService = semanticPathService;
        this.cmsService = cmsService;
        this.cmsRoutes = cmsRoutes;
        this.cmsI18n = cmsI18n;
        this.cmsGuards = cmsGuards;
    }
    /**
     * Takes CMS components types in the current CMS page, triggers (configurable) side effects and returns a boolean - whether the route can be activated.
     *
     * Based on `cmsComponents` config for the components in the page:
     * - Evaluates components' guards; if one of them emits false or UrlTree - the route cannot be activated or redirects to the given UrlTree, respectively.
     * - If all components' guards emitted true, then the route can be activated
     * - Then we trigger loading of configured i18n chunks in parallel
     * - And we register the configured children routes of cms components
     *
     * @param pageContext current cms page context
     * @param pageData cms page data
     * @param route activated route snapshot
     * @param state router state snapshot
     *
     * @returns boolean observable - whether the route can be activated
     */
    CmsPageGuardService.prototype.canActivatePage = function (pageContext, pageData, route, state) {
        var _this = this;
        return this.cmsService.getPageComponentTypes(pageContext).pipe(take(1), switchMap(function (componentTypes) {
            return _this.cmsGuards
                .cmsPageCanActivate(componentTypes, route, state)
                .pipe(withLatestFrom(of(componentTypes)));
        }), tap(function (_a) {
            var _b = __read(_a, 2), canActivate = _b[0], componentTypes = _b[1];
            if (canActivate === true) {
                _this.cmsI18n.loadForComponents(componentTypes);
            }
        }), map(function (_a) {
            var _b = __read(_a, 2), canActivate = _b[0], componentTypes = _b[1];
            var _c;
            var pageLabel = pageData.label || pageContext.id; // for content pages the page label returned from backend can be different than ID initially assumed from route
            if (canActivate === true && !((_c = route === null || route === void 0 ? void 0 : route.data) === null || _c === void 0 ? void 0 : _c.cxCmsRouteContext)) {
                return _this.cmsRoutes.handleCmsRoutesInGuard(pageContext, componentTypes, state.url, pageLabel);
            }
            return canActivate;
        }));
    };
    /**
     * Activates the "NOT FOUND" cms page.
     *
     * It loads cms page data for the "NOT FOUND" page and puts it in the state of the the requested page label.
     * Then it processes its CMS components with the method `canActivatePage()` of this service. For more, see its docs.
     */
    CmsPageGuardService.prototype.canActivateNotFoundPage = function (pageContext, route, state) {
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
                    return _this.canActivatePage(pageContext, notFoundPage, route, state);
                }));
            }
            return of(false);
        }));
    };
    CmsPageGuardService.ctorParameters = function () { return [
        { type: SemanticPathService },
        { type: CmsService },
        { type: CmsRoutesService },
        { type: CmsI18nService },
        { type: CmsGuardsService }
    ]; };
    CmsPageGuardService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsPageGuardService_Factory() { return new CmsPageGuardService(i0.ɵɵinject(i1.SemanticPathService), i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i2.CmsRoutesService), i0.ɵɵinject(i3.CmsI18nService), i0.ɵɵinject(i4.CmsGuardsService)); }, token: CmsPageGuardService, providedIn: "root" });
    CmsPageGuardService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CmsPageGuardService);
    return CmsPageGuardService;
}());
export { CmsPageGuardService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UtZ3VhcmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvZ3VhcmRzL2Ntcy1wYWdlLWd1YXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUNMLHlCQUF5QixFQUN6QixVQUFVLEVBQ1YsSUFBSSxFQUNKLFdBQVcsRUFDWCxRQUFRLEVBQ1IsbUJBQW1CLEdBQ3BCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQ0wsTUFBTSxFQUNOLEdBQUcsRUFDSCxTQUFTLEVBQ1QsSUFBSSxFQUNKLEdBQUcsRUFDSCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7OztBQUVsRTs7R0FFRztBQUlIO0lBQ0UsNkJBQ1ksbUJBQXdDLEVBQzFDLFVBQXNCLEVBQ3RCLFNBQTJCLEVBQzNCLE9BQXVCLEVBQ3ZCLFNBQTJCO1FBSnpCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDMUMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUNsQyxDQUFDO0lBRUo7Ozs7Ozs7Ozs7Ozs7OztPQWVHO0lBQ0gsNkNBQWUsR0FBZixVQUNFLFdBQXdCLEVBQ3hCLFFBQWMsRUFDZCxLQUFnQyxFQUNoQyxL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VSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLG1CQUFtQixDQWdHL0I7OEJBN0hEO0NBNkhDLEFBaEdELElBZ0dDO1NBaEdZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlclN0YXRlU25hcHNob3QsIFVybFRyZWUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgQ21zU2VydmljZSxcbiAgUGFnZSxcbiAgUGFnZUNvbnRleHQsXG4gIFBhZ2VUeXBlLFxuICBTZW1hbnRpY1BhdGhTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGZpbHRlcixcbiAgbWFwLFxuICBzd2l0Y2hNYXAsXG4gIHRha2UsXG4gIHRhcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc0d1YXJkc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jbXMtZ3VhcmRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ21zSTE4blNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jbXMtaTE4bi5zZXJ2aWNlJztcbmltcG9ydCB7IENtc1JvdXRlc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jbXMtcm91dGVzLnNlcnZpY2UnO1xuXG4vKipcbiAqIEhlbHBlciBzZXJ2aWNlIGZvciBgQ21zUGFnZUd1YXJkYFxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ21zUGFnZUd1YXJkU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzZW1hbnRpY1BhdGhTZXJ2aWNlOiBTZW1hbnRpY1BhdGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICBwcml2YXRlIGNtc1JvdXRlczogQ21zUm91dGVzU2VydmljZSxcbiAgICBwcml2YXRlIGNtc0kxOG46IENtc0kxOG5TZXJ2aWNlLFxuICAgIHByaXZhdGUgY21zR3VhcmRzOiBDbXNHdWFyZHNTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogVGFrZXMgQ01TIGNvbXBvbmVudHMgdHlwZXMgaW4gdGhlIGN1cnJlbnQgQ01TIHBhZ2UsIHRyaWdnZXJzIChjb25maWd1cmFibGUpIHNpZGUgZWZmZWN0cyBhbmQgcmV0dXJucyBhIGJvb2xlYW4gLSB3aGV0aGVyIHRoZSByb3V0ZSBjYW4gYmUgYWN0aXZhdGVkLlxuICAgKlxuICAgKiBCYXNlZCBvbiBgY21zQ29tcG9uZW50c2AgY29uZmlnIGZvciB0aGUgY29tcG9uZW50cyBpbiB0aGUgcGFnZTpcbiAgICogLSBFdmFsdWF0ZXMgY29tcG9uZW50cycgZ3VhcmRzOyBpZiBvbmUgb2YgdGhlbSBlbWl0cyBmYWxzZSBvciBVcmxUcmVlIC0gdGhlIHJvdXRlIGNhbm5vdCBiZSBhY3RpdmF0ZWQgb3IgcmVkaXJlY3RzIHRvIHRoZSBnaXZlbiBVcmxUcmVlLCByZXNwZWN0aXZlbHkuXG4gICAqIC0gSWYgYWxsIGNvbXBvbmVudHMnIGd1YXJkcyBlbWl0dGVkIHRydWUsIHRoZW4gdGhlIHJvdXRlIGNhbiBiZSBhY3RpdmF0ZWRcbiAgICogLSBUaGVuIHdlIHRyaWdnZXIgbG9hZGluZyBvZiBjb25maWd1cmVkIGkxOG4gY2h1bmtzIGluIHBhcmFsbGVsXG4gICAqIC0gQW5kIHdlIHJlZ2lzdGVyIHRoZSBjb25maWd1cmVkIGNoaWxkcmVuIHJvdXRlcyBvZiBjbXMgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0gcGFnZUNvbnRleHQgY3VycmVudCBjbXMgcGFnZSBjb250ZXh0XG4gICAqIEBwYXJhbSBwYWdlRGF0YSBjbXMgcGFnZSBkYXRhXG4gICAqIEBwYXJhbSByb3V0ZSBhY3RpdmF0ZWQgcm91dGUgc25hcHNob3RcbiAgICogQHBhcmFtIHN0YXRlIHJvdXRlciBzdGF0ZSBzbmFwc2hvdFxuICAgKlxuICAgKiBAcmV0dXJucyBib29sZWFuIG9ic2VydmFibGUgLSB3aGV0aGVyIHRoZSByb3V0ZSBjYW4gYmUgYWN0aXZhdGVkXG4gICAqL1xuICBjYW5BY3RpdmF0ZVBhZ2UoXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LFxuICAgIHBhZ2VEYXRhOiBQYWdlLFxuICAgIHJvdXRlOiBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcbiAgICByZXR1cm4gdGhpcy5jbXNTZXJ2aWNlLmdldFBhZ2VDb21wb25lbnRUeXBlcyhwYWdlQ29udGV4dCkucGlwZShcbiAgICAgIHRha2UoMSksXG4gICAgICBzd2l0Y2hNYXAoKGNvbXBvbmVudFR5cGVzKSA9PlxuICAgICAgICB0aGlzLmNtc0d1YXJkc1xuICAgICAgICAgIC5jbXNQYWdlQ2FuQWN0aXZhdGUoY29tcG9uZW50VHlwZXMsIHJvdXRlLCBzdGF0ZSlcbiAgICAgICAgICAucGlwZSh3aXRoTGF0ZXN0RnJvbShvZihjb21wb25lbnRUeXBlcykpKVxuICAgICAgKSxcbiAgICAgIHRhcCgoW2NhbkFjdGl2YXRlLCBjb21wb25lbnRUeXBlc10pID0+IHtcbiAgICAgICAgaWYgKGNhbkFjdGl2YXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgdGhpcy5jbXNJMThuLmxvYWRGb3JDb21wb25lbnRzKGNvbXBvbmVudFR5cGVzKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAoKFtjYW5BY3RpdmF0ZSwgY29tcG9uZW50VHlwZXNdKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhZ2VMYWJlbCA9IHBhZ2VEYXRhLmxhYmVsIHx8IHBhZ2VDb250ZXh0LmlkOyAvLyBmb3IgY29udGVudCBwYWdlcyB0aGUgcGFnZSBsYWJlbCByZXR1cm5lZCBmcm9tIGJhY2tlbmQgY2FuIGJlIGRpZmZlcmVudCB0aGFuIElEIGluaXRpYWxseSBhc3N1bWVkIGZyb20gcm91dGVcbiAgICAgICAgaWYgKGNhbkFjdGl2YXRlID09PSB0cnVlICYmICFyb3V0ZT8uZGF0YT8uY3hDbXNSb3V0ZUNvbnRleHQpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jbXNSb3V0ZXMuaGFuZGxlQ21zUm91dGVzSW5HdWFyZChcbiAgICAgICAgICAgIHBhZ2VDb250ZXh0LFxuICAgICAgICAgICAgY29tcG9uZW50VHlwZXMsXG4gICAgICAgICAgICBzdGF0ZS51cmwsXG4gICAgICAgICAgICBwYWdlTGFiZWxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYW5BY3RpdmF0ZTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIFwiTk9UIEZPVU5EXCIgY21zIHBhZ2UuXG4gICAqXG4gICAqIEl0IGxvYWRzIGNtcyBwYWdlIGRhdGEgZm9yIHRoZSBcIk5PVCBGT1VORFwiIHBhZ2UgYW5kIHB1dHMgaXQgaW4gdGhlIHN0YXRlIG9mIHRoZSB0aGUgcmVxdWVzdGVkIHBhZ2UgbGFiZWwuXG4gICAqIFRoZW4gaXQgcHJvY2Vzc2VzIGl0cyBDTVMgY29tcG9uZW50cyB3aXRoIHRoZSBtZXRob2QgYGNhbkFjdGl2YXRlUGFnZSgpYCBvZiB0aGlzIHNlcnZpY2UuIEZvciBtb3JlLCBzZWUgaXRzIGRvY3MuXG4gICAqL1xuICBjYW5BY3RpdmF0ZU5vdEZvdW5kUGFnZShcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsXG4gICAgcm91dGU6IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIGNvbnN0IG5vdEZvdW5kQ21zUGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0ID0ge1xuICAgICAgdHlwZTogUGFnZVR5cGUuQ09OVEVOVF9QQUdFLFxuICAgICAgaWQ6IHRoaXMuc2VtYW50aWNQYXRoU2VydmljZS5nZXQoJ25vdEZvdW5kJyksXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmNtc1NlcnZpY2UuZ2V0UGFnZShub3RGb3VuZENtc1BhZ2VDb250ZXh0KS5waXBlKFxuICAgICAgc3dpdGNoTWFwKChub3RGb3VuZFBhZ2UpID0+IHtcbiAgICAgICAgaWYgKG5vdEZvdW5kUGFnZSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNtc1NlcnZpY2UuZ2V0UGFnZUluZGV4KG5vdEZvdW5kQ21zUGFnZUNvbnRleHQpLnBpcGUoXG4gICAgICAgICAgICB0YXAoKG5vdEZvdW5kSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLnNldFBhZ2VGYWlsSW5kZXgocGFnZUNvbnRleHQsIG5vdEZvdW5kSW5kZXgpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzd2l0Y2hNYXAoKG5vdEZvdW5kSW5kZXgpID0+XG4gICAgICAgICAgICAgIHRoaXMuY21zU2VydmljZS5nZXRQYWdlSW5kZXgocGFnZUNvbnRleHQpLnBpcGUoXG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byB3YWl0IGZvciBwYWdlIGluZGV4IHVwZGF0ZVxuICAgICAgICAgICAgICAgIGZpbHRlcigoaW5kZXgpID0+IGluZGV4ID09PSBub3RGb3VuZEluZGV4KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgc3dpdGNoTWFwKCgpID0+XG4gICAgICAgICAgICAgIHRoaXMuY2FuQWN0aXZhdGVQYWdlKHBhZ2VDb250ZXh0LCBub3RGb3VuZFBhZ2UsIHJvdXRlLCBzdGF0ZSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==