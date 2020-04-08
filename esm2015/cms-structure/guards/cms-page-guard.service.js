import { __decorate } from "tslib";
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
let CmsPageGuardService = class CmsPageGuardService {
    constructor(semanticPathService, cmsService, cmsRoutes, cmsI18n, cmsGuards) {
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
    canActivatePage(pageContext, pageData, route, state) {
        return this.cmsService.getPageComponentTypes(pageContext).pipe(take(1), switchMap((componentTypes) => this.cmsGuards
            .cmsPageCanActivate(componentTypes, route, state)
            .pipe(withLatestFrom(of(componentTypes)))), tap(([canActivate, componentTypes]) => {
            if (canActivate === true) {
                this.cmsI18n.loadForComponents(componentTypes);
            }
        }), map(([canActivate, componentTypes]) => {
            var _a;
            const pageLabel = pageData.label || pageContext.id; // for content pages the page label returned from backend can be different than ID initially assumed from route
            if (canActivate === true && !((_a = route === null || route === void 0 ? void 0 : route.data) === null || _a === void 0 ? void 0 : _a.cxCmsRouteContext)) {
                return this.cmsRoutes.handleCmsRoutesInGuard(pageContext, componentTypes, state.url, pageLabel);
            }
            return canActivate;
        }));
    }
    /**
     * Activates the "NOT FOUND" cms page.
     *
     * It loads cms page data for the "NOT FOUND" page and puts it in the state of the the requested page label.
     * Then it processes its CMS components with the method `canActivatePage()` of this service. For more, see its docs.
     */
    canActivateNotFoundPage(pageContext, route, state) {
        const notFoundCmsPageContext = {
            type: PageType.CONTENT_PAGE,
            id: this.semanticPathService.get('notFound'),
        };
        return this.cmsService.getPage(notFoundCmsPageContext).pipe(switchMap((notFoundPage) => {
            if (notFoundPage) {
                return this.cmsService.getPageIndex(notFoundCmsPageContext).pipe(tap((notFoundIndex) => {
                    this.cmsService.setPageFailIndex(pageContext, notFoundIndex);
                }), switchMap((notFoundIndex) => this.cmsService.getPageIndex(pageContext).pipe(
                // we have to wait for page index update
                filter((index) => index === notFoundIndex))), switchMap(() => this.canActivatePage(pageContext, notFoundPage, route, state)));
            }
            return of(false);
        }));
    }
};
CmsPageGuardService.ctorParameters = () => [
    { type: SemanticPathService },
    { type: CmsService },
    { type: CmsRoutesService },
    { type: CmsI18nService },
    { type: CmsGuardsService }
];
CmsPageGuardService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsPageGuardService_Factory() { return new CmsPageGuardService(i0.ɵɵinject(i1.SemanticPathService), i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i2.CmsRoutesService), i0.ɵɵinject(i3.CmsI18nService), i0.ɵɵinject(i4.CmsGuardsService)); }, token: CmsPageGuardService, providedIn: "root" });
CmsPageGuardService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CmsPageGuardService);
export { CmsPageGuardService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UtZ3VhcmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvZ3VhcmRzL2Ntcy1wYWdlLWd1YXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUNMLHlCQUF5QixFQUN6QixVQUFVLEVBQ1YsSUFBSSxFQUNKLFdBQVcsRUFDWCxRQUFRLEVBQ1IsbUJBQW1CLEdBQ3BCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQ0wsTUFBTSxFQUNOLEdBQUcsRUFDSCxTQUFTLEVBQ1QsSUFBSSxFQUNKLEdBQUcsRUFDSCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7OztBQUVsRTs7R0FFRztBQUlILElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBQzlCLFlBQ1ksbUJBQXdDLEVBQzFDLFVBQXNCLEVBQ3RCLFNBQTJCLEVBQzNCLE9BQXVCLEVBQ3ZCLFNBQTJCO1FBSnpCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDMUMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUNsQyxDQUFDO0lBRUo7Ozs7Ozs7Ozs7Ozs7OztPQWVHO0lBQ0gsZUFBZSxDQUNiLFdBQXdCLEVBQ3hC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bkIsQ0FBQztHQUNXLG1CQUFtQixDQWdHL0I7U0FoR1ksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyU3RhdGVTbmFwc2hvdCwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICBDbXNTZXJ2aWNlLFxuICBQYWdlLFxuICBQYWdlQ29udGV4dCxcbiAgUGFnZVR5cGUsXG4gIFNlbWFudGljUGF0aFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZmlsdGVyLFxuICBtYXAsXG4gIHN3aXRjaE1hcCxcbiAgdGFrZSxcbiAgdGFwLFxuICB3aXRoTGF0ZXN0RnJvbSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zR3VhcmRzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Ntcy1ndWFyZHMuc2VydmljZSc7XG5pbXBvcnQgeyBDbXNJMThuU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Ntcy1pMThuLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ21zUm91dGVzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Ntcy1yb3V0ZXMuc2VydmljZSc7XG5cbi8qKlxuICogSGVscGVyIHNlcnZpY2UgZm9yIGBDbXNQYWdlR3VhcmRgXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNQYWdlR3VhcmRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHNlbWFudGljUGF0aFNlcnZpY2U6IFNlbWFudGljUGF0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgY21zUm91dGVzOiBDbXNSb3V0ZXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgY21zSTE4bjogQ21zSTE4blNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjbXNHdWFyZHM6IENtc0d1YXJkc1NlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBUYWtlcyBDTVMgY29tcG9uZW50cyB0eXBlcyBpbiB0aGUgY3VycmVudCBDTVMgcGFnZSwgdHJpZ2dlcnMgKGNvbmZpZ3VyYWJsZSkgc2lkZSBlZmZlY3RzIGFuZCByZXR1cm5zIGEgYm9vbGVhbiAtIHdoZXRoZXIgdGhlIHJvdXRlIGNhbiBiZSBhY3RpdmF0ZWQuXG4gICAqXG4gICAqIEJhc2VkIG9uIGBjbXNDb21wb25lbnRzYCBjb25maWcgZm9yIHRoZSBjb21wb25lbnRzIGluIHRoZSBwYWdlOlxuICAgKiAtIEV2YWx1YXRlcyBjb21wb25lbnRzJyBndWFyZHM7IGlmIG9uZSBvZiB0aGVtIGVtaXRzIGZhbHNlIG9yIFVybFRyZWUgLSB0aGUgcm91dGUgY2Fubm90IGJlIGFjdGl2YXRlZCBvciByZWRpcmVjdHMgdG8gdGhlIGdpdmVuIFVybFRyZWUsIHJlc3BlY3RpdmVseS5cbiAgICogLSBJZiBhbGwgY29tcG9uZW50cycgZ3VhcmRzIGVtaXR0ZWQgdHJ1ZSwgdGhlbiB0aGUgcm91dGUgY2FuIGJlIGFjdGl2YXRlZFxuICAgKiAtIFRoZW4gd2UgdHJpZ2dlciBsb2FkaW5nIG9mIGNvbmZpZ3VyZWQgaTE4biBjaHVua3MgaW4gcGFyYWxsZWxcbiAgICogLSBBbmQgd2UgcmVnaXN0ZXIgdGhlIGNvbmZpZ3VyZWQgY2hpbGRyZW4gcm91dGVzIG9mIGNtcyBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwYXJhbSBwYWdlQ29udGV4dCBjdXJyZW50IGNtcyBwYWdlIGNvbnRleHRcbiAgICogQHBhcmFtIHBhZ2VEYXRhIGNtcyBwYWdlIGRhdGFcbiAgICogQHBhcmFtIHJvdXRlIGFjdGl2YXRlZCByb3V0ZSBzbmFwc2hvdFxuICAgKiBAcGFyYW0gc3RhdGUgcm91dGVyIHN0YXRlIHNuYXBzaG90XG4gICAqXG4gICAqIEByZXR1cm5zIGJvb2xlYW4gb2JzZXJ2YWJsZSAtIHdoZXRoZXIgdGhlIHJvdXRlIGNhbiBiZSBhY3RpdmF0ZWRcbiAgICovXG4gIGNhbkFjdGl2YXRlUGFnZShcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsXG4gICAgcGFnZURhdGE6IFBhZ2UsXG4gICAgcm91dGU6IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIHJldHVybiB0aGlzLmNtc1NlcnZpY2UuZ2V0UGFnZUNvbXBvbmVudFR5cGVzKHBhZ2VDb250ZXh0KS5waXBlKFxuICAgICAgdGFrZSgxKSxcbiAgICAgIHN3aXRjaE1hcCgoY29tcG9uZW50VHlwZXMpID0+XG4gICAgICAgIHRoaXMuY21zR3VhcmRzXG4gICAgICAgICAgLmNtc1BhZ2VDYW5BY3RpdmF0ZShjb21wb25lbnRUeXBlcywgcm91dGUsIHN0YXRlKVxuICAgICAgICAgIC5waXBlKHdpdGhMYXRlc3RGcm9tKG9mKGNvbXBvbmVudFR5cGVzKSkpXG4gICAgICApLFxuICAgICAgdGFwKChbY2FuQWN0aXZhdGUsIGNvbXBvbmVudFR5cGVzXSkgPT4ge1xuICAgICAgICBpZiAoY2FuQWN0aXZhdGUgPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLmNtc0kxOG4ubG9hZEZvckNvbXBvbmVudHMoY29tcG9uZW50VHlwZXMpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgoW2NhbkFjdGl2YXRlLCBjb21wb25lbnRUeXBlc10pID0+IHtcbiAgICAgICAgY29uc3QgcGFnZUxhYmVsID0gcGFnZURhdGEubGFiZWwgfHwgcGFnZUNvbnRleHQuaWQ7IC8vIGZvciBjb250ZW50IHBhZ2VzIHRoZSBwYWdlIGxhYmVsIHJldHVybmVkIGZyb20gYmFja2VuZCBjYW4gYmUgZGlmZmVyZW50IHRoYW4gSUQgaW5pdGlhbGx5IGFzc3VtZWQgZnJvbSByb3V0ZVxuICAgICAgICBpZiAoY2FuQWN0aXZhdGUgPT09IHRydWUgJiYgIXJvdXRlPy5kYXRhPy5jeENtc1JvdXRlQ29udGV4dCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNtc1JvdXRlcy5oYW5kbGVDbXNSb3V0ZXNJbkd1YXJkKFxuICAgICAgICAgICAgcGFnZUNvbnRleHQsXG4gICAgICAgICAgICBjb21wb25lbnRUeXBlcyxcbiAgICAgICAgICAgIHN0YXRlLnVybCxcbiAgICAgICAgICAgIHBhZ2VMYWJlbFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbkFjdGl2YXRlO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgXCJOT1QgRk9VTkRcIiBjbXMgcGFnZS5cbiAgICpcbiAgICogSXQgbG9hZHMgY21zIHBhZ2UgZGF0YSBmb3IgdGhlIFwiTk9UIEZPVU5EXCIgcGFnZSBhbmQgcHV0cyBpdCBpbiB0aGUgc3RhdGUgb2YgdGhlIHRoZSByZXF1ZXN0ZWQgcGFnZSBsYWJlbC5cbiAgICogVGhlbiBpdCBwcm9jZXNzZXMgaXRzIENNUyBjb21wb25lbnRzIHdpdGggdGhlIG1ldGhvZCBgY2FuQWN0aXZhdGVQYWdlKClgIG9mIHRoaXMgc2VydmljZS4gRm9yIG1vcmUsIHNlZSBpdHMgZG9jcy5cbiAgICovXG4gIGNhbkFjdGl2YXRlTm90Rm91bmRQYWdlKFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgICByb3V0ZTogQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgY29uc3Qgbm90Rm91bmRDbXNQYWdlQ29udGV4dDogUGFnZUNvbnRleHQgPSB7XG4gICAgICB0eXBlOiBQYWdlVHlwZS5DT05URU5UX1BBR0UsXG4gICAgICBpZDogdGhpcy5zZW1hbnRpY1BhdGhTZXJ2aWNlLmdldCgnbm90Rm91bmQnKSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuY21zU2VydmljZS5nZXRQYWdlKG5vdEZvdW5kQ21zUGFnZUNvbnRleHQpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKG5vdEZvdW5kUGFnZSkgPT4ge1xuICAgICAgICBpZiAobm90Rm91bmRQYWdlKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY21zU2VydmljZS5nZXRQYWdlSW5kZXgobm90Rm91bmRDbXNQYWdlQ29udGV4dCkucGlwZShcbiAgICAgICAgICAgIHRhcCgobm90Rm91bmRJbmRleCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNtc1NlcnZpY2Uuc2V0UGFnZUZhaWxJbmRleChwYWdlQ29udGV4dCwgbm90Rm91bmRJbmRleCk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHN3aXRjaE1hcCgobm90Rm91bmRJbmRleCkgPT5cbiAgICAgICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLmdldFBhZ2VJbmRleChwYWdlQ29udGV4dCkucGlwZShcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHdhaXQgZm9yIHBhZ2UgaW5kZXggdXBkYXRlXG4gICAgICAgICAgICAgICAgZmlsdGVyKChpbmRleCkgPT4gaW5kZXggPT09IG5vdEZvdW5kSW5kZXgpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBzd2l0Y2hNYXAoKCkgPT5cbiAgICAgICAgICAgICAgdGhpcy5jYW5BY3RpdmF0ZVBhZ2UocGFnZUNvbnRleHQsIG5vdEZvdW5kUGFnZSwgcm91dGUsIHN0YXRlKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9mKGZhbHNlKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19