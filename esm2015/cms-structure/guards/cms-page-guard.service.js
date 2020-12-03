import { Injectable } from '@angular/core';
import { CmsService, PageType, SemanticPathService, RoutingService, } from '@spartacus/core';
import { of } from 'rxjs';
import { filter, map, switchMap, take, tap, withLatestFrom, } from 'rxjs/operators';
import { CmsComponentsService } from '../services/cms-components.service';
import { CmsGuardsService } from '../services/cms-guards.service';
import { CmsI18nService } from '../services/cms-i18n.service';
import { CmsRoutesService } from '../services/cms-routes.service';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "../services/cms-routes.service";
import * as i3 from "../services/cms-i18n.service";
import * as i4 from "../services/cms-guards.service";
import * as i5 from "../services/cms-components.service";
/**
 * Helper service for `CmsPageGuard`
 */
export class CmsPageGuardService {
    constructor(semanticPathService, cmsService, cmsRoutes, cmsI18n, cmsGuards, cmsComponentsService, routing) {
        this.semanticPathService = semanticPathService;
        this.cmsService = cmsService;
        this.cmsRoutes = cmsRoutes;
        this.cmsI18n = cmsI18n;
        this.cmsGuards = cmsGuards;
        this.cmsComponentsService = cmsComponentsService;
        this.routing = routing;
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
        return this.cmsService.getPageComponentTypes(pageContext).pipe(take(1), switchMap((componentTypes) => this.cmsComponentsService.determineMappings(componentTypes)), switchMap((componentTypes) => this.cmsGuards
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
                    this.routing.changeNextPageContext(notFoundCmsPageContext);
                }), switchMap((notFoundIndex) => this.cmsService.getPageIndex(pageContext).pipe(
                // we have to wait for page index update
                filter((index) => index === notFoundIndex))), switchMap(() => this.canActivatePage(pageContext, notFoundPage, route, state)));
            }
            return of(false);
        }));
    }
}
CmsPageGuardService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsPageGuardService_Factory() { return new CmsPageGuardService(i0.ɵɵinject(i1.SemanticPathService), i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i2.CmsRoutesService), i0.ɵɵinject(i3.CmsI18nService), i0.ɵɵinject(i4.CmsGuardsService), i0.ɵɵinject(i5.CmsComponentsService), i0.ɵɵinject(i1.RoutingService)); }, token: CmsPageGuardService, providedIn: "root" });
CmsPageGuardService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
CmsPageGuardService.ctorParameters = () => [
    { type: SemanticPathService },
    { type: CmsService },
    { type: CmsRoutesService },
    { type: CmsI18nService },
    { type: CmsGuardsService },
    { type: CmsComponentsService },
    { type: RoutingService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UtZ3VhcmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1zdHJ1Y3R1cmUvZ3VhcmRzL2Ntcy1wYWdlLWd1YXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBRUwsVUFBVSxFQUdWLFFBQVEsRUFDUixtQkFBbUIsRUFDbkIsY0FBYyxHQUNmLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQ0wsTUFBTSxFQUNOLEdBQUcsRUFDSCxTQUFTLEVBQ1QsSUFBSSxFQUNKLEdBQUcsRUFDSCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7QUFFbEU7O0dBRUc7QUFJSCxNQUFNLE9BQU8sbUJBQW1CO0lBQzlCLFlBQ1ksbUJBQXdDLEVBQ3hDLFVBQXNCLEVBQ3RCLFNBQTJCLEVBQzNCLE9BQXVCLEVBQ3ZCLFNBQTJCLEVBQzNCLG9CQUEwQyxFQUMxQyxPQUF1QjtRQU52Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IseUJBQW9C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QVcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUM5RCxDQUNGLENBQUM7YUFDSDtZQUNELE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7O1lBeEdGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBdEJDLG1CQUFtQjtZQUpuQixVQUFVO1lBbUJILGdCQUFnQjtZQURoQixjQUFjO1lBRGQsZ0JBQWdCO1lBRGhCLG9CQUFvQjtZQVgzQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyU3RhdGVTbmFwc2hvdCwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICBDbXNTZXJ2aWNlLFxuICBQYWdlLFxuICBQYWdlQ29udGV4dCxcbiAgUGFnZVR5cGUsXG4gIFNlbWFudGljUGF0aFNlcnZpY2UsXG4gIFJvdXRpbmdTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGZpbHRlcixcbiAgbWFwLFxuICBzd2l0Y2hNYXAsXG4gIHRha2UsXG4gIHRhcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY21zLWNvbXBvbmVudHMuc2VydmljZSc7XG5pbXBvcnQgeyBDbXNHdWFyZHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY21zLWd1YXJkcy5zZXJ2aWNlJztcbmltcG9ydCB7IENtc0kxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY21zLWkxOG4uc2VydmljZSc7XG5pbXBvcnQgeyBDbXNSb3V0ZXNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY21zLXJvdXRlcy5zZXJ2aWNlJztcblxuLyoqXG4gKiBIZWxwZXIgc2VydmljZSBmb3IgYENtc1BhZ2VHdWFyZGBcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENtc1BhZ2VHdWFyZFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc2VtYW50aWNQYXRoU2VydmljZTogU2VtYW50aWNQYXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY21zUm91dGVzOiBDbXNSb3V0ZXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjbXNJMThuOiBDbXNJMThuU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY21zR3VhcmRzOiBDbXNHdWFyZHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjbXNDb21wb25lbnRzU2VydmljZTogQ21zQ29tcG9uZW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmc6IFJvdXRpbmdTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogVGFrZXMgQ01TIGNvbXBvbmVudHMgdHlwZXMgaW4gdGhlIGN1cnJlbnQgQ01TIHBhZ2UsIHRyaWdnZXJzIChjb25maWd1cmFibGUpIHNpZGUgZWZmZWN0cyBhbmQgcmV0dXJucyBhIGJvb2xlYW4gLSB3aGV0aGVyIHRoZSByb3V0ZSBjYW4gYmUgYWN0aXZhdGVkLlxuICAgKlxuICAgKiBCYXNlZCBvbiBgY21zQ29tcG9uZW50c2AgY29uZmlnIGZvciB0aGUgY29tcG9uZW50cyBpbiB0aGUgcGFnZTpcbiAgICogLSBFdmFsdWF0ZXMgY29tcG9uZW50cycgZ3VhcmRzOyBpZiBvbmUgb2YgdGhlbSBlbWl0cyBmYWxzZSBvciBVcmxUcmVlIC0gdGhlIHJvdXRlIGNhbm5vdCBiZSBhY3RpdmF0ZWQgb3IgcmVkaXJlY3RzIHRvIHRoZSBnaXZlbiBVcmxUcmVlLCByZXNwZWN0aXZlbHkuXG4gICAqIC0gSWYgYWxsIGNvbXBvbmVudHMnIGd1YXJkcyBlbWl0dGVkIHRydWUsIHRoZW4gdGhlIHJvdXRlIGNhbiBiZSBhY3RpdmF0ZWRcbiAgICogLSBUaGVuIHdlIHRyaWdnZXIgbG9hZGluZyBvZiBjb25maWd1cmVkIGkxOG4gY2h1bmtzIGluIHBhcmFsbGVsXG4gICAqIC0gQW5kIHdlIHJlZ2lzdGVyIHRoZSBjb25maWd1cmVkIGNoaWxkcmVuIHJvdXRlcyBvZiBjbXMgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0gcGFnZUNvbnRleHQgY3VycmVudCBjbXMgcGFnZSBjb250ZXh0XG4gICAqIEBwYXJhbSBwYWdlRGF0YSBjbXMgcGFnZSBkYXRhXG4gICAqIEBwYXJhbSByb3V0ZSBhY3RpdmF0ZWQgcm91dGUgc25hcHNob3RcbiAgICogQHBhcmFtIHN0YXRlIHJvdXRlciBzdGF0ZSBzbmFwc2hvdFxuICAgKlxuICAgKiBAcmV0dXJucyBib29sZWFuIG9ic2VydmFibGUgLSB3aGV0aGVyIHRoZSByb3V0ZSBjYW4gYmUgYWN0aXZhdGVkXG4gICAqL1xuICBjYW5BY3RpdmF0ZVBhZ2UoXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LFxuICAgIHBhZ2VEYXRhOiBQYWdlLFxuICAgIHJvdXRlOiBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcbiAgICByZXR1cm4gdGhpcy5jbXNTZXJ2aWNlLmdldFBhZ2VDb21wb25lbnRUeXBlcyhwYWdlQ29udGV4dCkucGlwZShcbiAgICAgIHRha2UoMSksXG4gICAgICBzd2l0Y2hNYXAoKGNvbXBvbmVudFR5cGVzKSA9PlxuICAgICAgICB0aGlzLmNtc0NvbXBvbmVudHNTZXJ2aWNlLmRldGVybWluZU1hcHBpbmdzKGNvbXBvbmVudFR5cGVzKVxuICAgICAgKSxcbiAgICAgIHN3aXRjaE1hcCgoY29tcG9uZW50VHlwZXMpID0+XG4gICAgICAgIHRoaXMuY21zR3VhcmRzXG4gICAgICAgICAgLmNtc1BhZ2VDYW5BY3RpdmF0ZShjb21wb25lbnRUeXBlcywgcm91dGUsIHN0YXRlKVxuICAgICAgICAgIC5waXBlKHdpdGhMYXRlc3RGcm9tKG9mKGNvbXBvbmVudFR5cGVzKSkpXG4gICAgICApLFxuICAgICAgdGFwKChbY2FuQWN0aXZhdGUsIGNvbXBvbmVudFR5cGVzXSkgPT4ge1xuICAgICAgICBpZiAoY2FuQWN0aXZhdGUgPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLmNtc0kxOG4ubG9hZEZvckNvbXBvbmVudHMoY29tcG9uZW50VHlwZXMpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgoW2NhbkFjdGl2YXRlLCBjb21wb25lbnRUeXBlc10pID0+IHtcbiAgICAgICAgY29uc3QgcGFnZUxhYmVsID0gcGFnZURhdGEubGFiZWwgfHwgcGFnZUNvbnRleHQuaWQ7IC8vIGZvciBjb250ZW50IHBhZ2VzIHRoZSBwYWdlIGxhYmVsIHJldHVybmVkIGZyb20gYmFja2VuZCBjYW4gYmUgZGlmZmVyZW50IHRoYW4gSUQgaW5pdGlhbGx5IGFzc3VtZWQgZnJvbSByb3V0ZVxuICAgICAgICBpZiAoY2FuQWN0aXZhdGUgPT09IHRydWUgJiYgIXJvdXRlPy5kYXRhPy5jeENtc1JvdXRlQ29udGV4dCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNtc1JvdXRlcy5oYW5kbGVDbXNSb3V0ZXNJbkd1YXJkKFxuICAgICAgICAgICAgcGFnZUNvbnRleHQsXG4gICAgICAgICAgICBjb21wb25lbnRUeXBlcyxcbiAgICAgICAgICAgIHN0YXRlLnVybCxcbiAgICAgICAgICAgIHBhZ2VMYWJlbFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbkFjdGl2YXRlO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgXCJOT1QgRk9VTkRcIiBjbXMgcGFnZS5cbiAgICpcbiAgICogSXQgbG9hZHMgY21zIHBhZ2UgZGF0YSBmb3IgdGhlIFwiTk9UIEZPVU5EXCIgcGFnZSBhbmQgcHV0cyBpdCBpbiB0aGUgc3RhdGUgb2YgdGhlIHRoZSByZXF1ZXN0ZWQgcGFnZSBsYWJlbC5cbiAgICogVGhlbiBpdCBwcm9jZXNzZXMgaXRzIENNUyBjb21wb25lbnRzIHdpdGggdGhlIG1ldGhvZCBgY2FuQWN0aXZhdGVQYWdlKClgIG9mIHRoaXMgc2VydmljZS4gRm9yIG1vcmUsIHNlZSBpdHMgZG9jcy5cbiAgICovXG4gIGNhbkFjdGl2YXRlTm90Rm91bmRQYWdlKFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgICByb3V0ZTogQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgY29uc3Qgbm90Rm91bmRDbXNQYWdlQ29udGV4dDogUGFnZUNvbnRleHQgPSB7XG4gICAgICB0eXBlOiBQYWdlVHlwZS5DT05URU5UX1BBR0UsXG4gICAgICBpZDogdGhpcy5zZW1hbnRpY1BhdGhTZXJ2aWNlLmdldCgnbm90Rm91bmQnKSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuY21zU2VydmljZS5nZXRQYWdlKG5vdEZvdW5kQ21zUGFnZUNvbnRleHQpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKG5vdEZvdW5kUGFnZSkgPT4ge1xuICAgICAgICBpZiAobm90Rm91bmRQYWdlKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY21zU2VydmljZS5nZXRQYWdlSW5kZXgobm90Rm91bmRDbXNQYWdlQ29udGV4dCkucGlwZShcbiAgICAgICAgICAgIHRhcCgobm90Rm91bmRJbmRleCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNtc1NlcnZpY2Uuc2V0UGFnZUZhaWxJbmRleChwYWdlQ29udGV4dCwgbm90Rm91bmRJbmRleCk7XG4gICAgICAgICAgICAgIHRoaXMucm91dGluZy5jaGFuZ2VOZXh0UGFnZUNvbnRleHQobm90Rm91bmRDbXNQYWdlQ29udGV4dCk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHN3aXRjaE1hcCgobm90Rm91bmRJbmRleCkgPT5cbiAgICAgICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLmdldFBhZ2VJbmRleChwYWdlQ29udGV4dCkucGlwZShcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHdhaXQgZm9yIHBhZ2UgaW5kZXggdXBkYXRlXG4gICAgICAgICAgICAgICAgZmlsdGVyKChpbmRleCkgPT4gaW5kZXggPT09IG5vdEZvdW5kSW5kZXgpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBzd2l0Y2hNYXAoKCkgPT5cbiAgICAgICAgICAgICAgdGhpcy5jYW5BY3RpdmF0ZVBhZ2UocGFnZUNvbnRleHQsIG5vdEZvdW5kUGFnZSwgcm91dGUsIHN0YXRlKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9mKGZhbHNlKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19