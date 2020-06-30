import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { CmsActivatedRouteSnapshot, CmsService, Page, PageContext, PageType, SemanticPathService, } from '@spartacus/core';
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
let CmsPageGuardService = class CmsPageGuardService {
    constructor(semanticPathService, cmsService, cmsRoutes, cmsI18n, cmsGuards, cmsComponentsService) {
        this.semanticPathService = semanticPathService;
        this.cmsService = cmsService;
        this.cmsRoutes = cmsRoutes;
        this.cmsI18n = cmsI18n;
        this.cmsGuards = cmsGuards;
        this.cmsComponentsService = cmsComponentsService;
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
    { type: CmsGuardsService },
    { type: CmsComponentsService }
];
CmsPageGuardService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsPageGuardService_Factory() { return new CmsPageGuardService(i0.ɵɵinject(i1.SemanticPathService), i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i2.CmsRoutesService), i0.ɵɵinject(i3.CmsI18nService), i0.ɵɵinject(i4.CmsGuardsService), i0.ɵɵinject(i5.CmsComponentsService)); }, token: CmsPageGuardService, providedIn: "root" });
CmsPageGuardService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CmsPageGuardService);
export { CmsPageGuardService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UtZ3VhcmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvZ3VhcmRzL2Ntcy1wYWdlLWd1YXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUNMLHlCQUF5QixFQUN6QixVQUFVLEVBQ1YsSUFBSSxFQUNKLFdBQVcsRUFDWCxRQUFRLEVBQ1IsbUJBQW1CLEdBQ3BCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQ0wsTUFBTSxFQUNOLEdBQUcsRUFDSCxTQUFTLEVBQ1QsSUFBSSxFQUNKLEdBQUcsRUFDSCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7QUFFbEU7O0dBRUc7QUFJSCxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQUM5QixZQUNZLG1CQUF3QyxFQUN4QyxVQUFzQixFQUN0QixTQUEyQixFQUMzQixPQUF1QixFQUN2QixTQUEyQixFQUMzQixvQkFBMEM7UUFMMUMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FB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LENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBOztZQWxHa0MsbUJBQW1CO1lBQzVCLFVBQVU7WUFDWCxnQkFBZ0I7WUFDbEIsY0FBYztZQUNaLGdCQUFnQjtZQUNMLG9CQUFvQjs7O0FBUDNDLG1CQUFtQjtJQUgvQixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csbUJBQW1CLENBb0cvQjtTQXBHWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBVcmxUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gIENtc1NlcnZpY2UsXG4gIFBhZ2UsXG4gIFBhZ2VDb250ZXh0LFxuICBQYWdlVHlwZSxcbiAgU2VtYW50aWNQYXRoU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBmaWx0ZXIsXG4gIG1hcCxcbiAgc3dpdGNoTWFwLFxuICB0YWtlLFxuICB0YXAsXG4gIHdpdGhMYXRlc3RGcm9tLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Ntcy1jb21wb25lbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ21zR3VhcmRzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Ntcy1ndWFyZHMuc2VydmljZSc7XG5pbXBvcnQgeyBDbXNJMThuU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Ntcy1pMThuLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ21zUm91dGVzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Ntcy1yb3V0ZXMuc2VydmljZSc7XG5cbi8qKlxuICogSGVscGVyIHNlcnZpY2UgZm9yIGBDbXNQYWdlR3VhcmRgXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNQYWdlR3VhcmRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHNlbWFudGljUGF0aFNlcnZpY2U6IFNlbWFudGljUGF0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNtc1JvdXRlczogQ21zUm91dGVzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY21zSTE4bjogQ21zSTE4blNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNtc0d1YXJkczogQ21zR3VhcmRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY21zQ29tcG9uZW50c1NlcnZpY2U6IENtc0NvbXBvbmVudHNTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogVGFrZXMgQ01TIGNvbXBvbmVudHMgdHlwZXMgaW4gdGhlIGN1cnJlbnQgQ01TIHBhZ2UsIHRyaWdnZXJzIChjb25maWd1cmFibGUpIHNpZGUgZWZmZWN0cyBhbmQgcmV0dXJucyBhIGJvb2xlYW4gLSB3aGV0aGVyIHRoZSByb3V0ZSBjYW4gYmUgYWN0aXZhdGVkLlxuICAgKlxuICAgKiBCYXNlZCBvbiBgY21zQ29tcG9uZW50c2AgY29uZmlnIGZvciB0aGUgY29tcG9uZW50cyBpbiB0aGUgcGFnZTpcbiAgICogLSBFdmFsdWF0ZXMgY29tcG9uZW50cycgZ3VhcmRzOyBpZiBvbmUgb2YgdGhlbSBlbWl0cyBmYWxzZSBvciBVcmxUcmVlIC0gdGhlIHJvdXRlIGNhbm5vdCBiZSBhY3RpdmF0ZWQgb3IgcmVkaXJlY3RzIHRvIHRoZSBnaXZlbiBVcmxUcmVlLCByZXNwZWN0aXZlbHkuXG4gICAqIC0gSWYgYWxsIGNvbXBvbmVudHMnIGd1YXJkcyBlbWl0dGVkIHRydWUsIHRoZW4gdGhlIHJvdXRlIGNhbiBiZSBhY3RpdmF0ZWRcbiAgICogLSBUaGVuIHdlIHRyaWdnZXIgbG9hZGluZyBvZiBjb25maWd1cmVkIGkxOG4gY2h1bmtzIGluIHBhcmFsbGVsXG4gICAqIC0gQW5kIHdlIHJlZ2lzdGVyIHRoZSBjb25maWd1cmVkIGNoaWxkcmVuIHJvdXRlcyBvZiBjbXMgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0gcGFnZUNvbnRleHQgY3VycmVudCBjbXMgcGFnZSBjb250ZXh0XG4gICAqIEBwYXJhbSBwYWdlRGF0YSBjbXMgcGFnZSBkYXRhXG4gICAqIEBwYXJhbSByb3V0ZSBhY3RpdmF0ZWQgcm91dGUgc25hcHNob3RcbiAgICogQHBhcmFtIHN0YXRlIHJvdXRlciBzdGF0ZSBzbmFwc2hvdFxuICAgKlxuICAgKiBAcmV0dXJucyBib29sZWFuIG9ic2VydmFibGUgLSB3aGV0aGVyIHRoZSByb3V0ZSBjYW4gYmUgYWN0aXZhdGVkXG4gICAqL1xuICBjYW5BY3RpdmF0ZVBhZ2UoXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LFxuICAgIHBhZ2VEYXRhOiBQYWdlLFxuICAgIHJvdXRlOiBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcbiAgICByZXR1cm4gdGhpcy5jbXNTZXJ2aWNlLmdldFBhZ2VDb21wb25lbnRUeXBlcyhwYWdlQ29udGV4dCkucGlwZShcbiAgICAgIHRha2UoMSksXG4gICAgICBzd2l0Y2hNYXAoKGNvbXBvbmVudFR5cGVzKSA9PlxuICAgICAgICB0aGlzLmNtc0NvbXBvbmVudHNTZXJ2aWNlLmRldGVybWluZU1hcHBpbmdzKGNvbXBvbmVudFR5cGVzKVxuICAgICAgKSxcbiAgICAgIHN3aXRjaE1hcCgoY29tcG9uZW50VHlwZXMpID0+XG4gICAgICAgIHRoaXMuY21zR3VhcmRzXG4gICAgICAgICAgLmNtc1BhZ2VDYW5BY3RpdmF0ZShjb21wb25lbnRUeXBlcywgcm91dGUsIHN0YXRlKVxuICAgICAgICAgIC5waXBlKHdpdGhMYXRlc3RGcm9tKG9mKGNvbXBvbmVudFR5cGVzKSkpXG4gICAgICApLFxuICAgICAgdGFwKChbY2FuQWN0aXZhdGUsIGNvbXBvbmVudFR5cGVzXSkgPT4ge1xuICAgICAgICBpZiAoY2FuQWN0aXZhdGUgPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLmNtc0kxOG4ubG9hZEZvckNvbXBvbmVudHMoY29tcG9uZW50VHlwZXMpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgoW2NhbkFjdGl2YXRlLCBjb21wb25lbnRUeXBlc10pID0+IHtcbiAgICAgICAgY29uc3QgcGFnZUxhYmVsID0gcGFnZURhdGEubGFiZWwgfHwgcGFnZUNvbnRleHQuaWQ7IC8vIGZvciBjb250ZW50IHBhZ2VzIHRoZSBwYWdlIGxhYmVsIHJldHVybmVkIGZyb20gYmFja2VuZCBjYW4gYmUgZGlmZmVyZW50IHRoYW4gSUQgaW5pdGlhbGx5IGFzc3VtZWQgZnJvbSByb3V0ZVxuICAgICAgICBpZiAoY2FuQWN0aXZhdGUgPT09IHRydWUgJiYgIXJvdXRlPy5kYXRhPy5jeENtc1JvdXRlQ29udGV4dCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNtc1JvdXRlcy5oYW5kbGVDbXNSb3V0ZXNJbkd1YXJkKFxuICAgICAgICAgICAgcGFnZUNvbnRleHQsXG4gICAgICAgICAgICBjb21wb25lbnRUeXBlcyxcbiAgICAgICAgICAgIHN0YXRlLnVybCxcbiAgICAgICAgICAgIHBhZ2VMYWJlbFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbkFjdGl2YXRlO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgXCJOT1QgRk9VTkRcIiBjbXMgcGFnZS5cbiAgICpcbiAgICogSXQgbG9hZHMgY21zIHBhZ2UgZGF0YSBmb3IgdGhlIFwiTk9UIEZPVU5EXCIgcGFnZSBhbmQgcHV0cyBpdCBpbiB0aGUgc3RhdGUgb2YgdGhlIHRoZSByZXF1ZXN0ZWQgcGFnZSBsYWJlbC5cbiAgICogVGhlbiBpdCBwcm9jZXNzZXMgaXRzIENNUyBjb21wb25lbnRzIHdpdGggdGhlIG1ldGhvZCBgY2FuQWN0aXZhdGVQYWdlKClgIG9mIHRoaXMgc2VydmljZS4gRm9yIG1vcmUsIHNlZSBpdHMgZG9jcy5cbiAgICovXG4gIGNhbkFjdGl2YXRlTm90Rm91bmRQYWdlKFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgICByb3V0ZTogQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgY29uc3Qgbm90Rm91bmRDbXNQYWdlQ29udGV4dDogUGFnZUNvbnRleHQgPSB7XG4gICAgICB0eXBlOiBQYWdlVHlwZS5DT05URU5UX1BBR0UsXG4gICAgICBpZDogdGhpcy5zZW1hbnRpY1BhdGhTZXJ2aWNlLmdldCgnbm90Rm91bmQnKSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuY21zU2VydmljZS5nZXRQYWdlKG5vdEZvdW5kQ21zUGFnZUNvbnRleHQpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKG5vdEZvdW5kUGFnZSkgPT4ge1xuICAgICAgICBpZiAobm90Rm91bmRQYWdlKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY21zU2VydmljZS5nZXRQYWdlSW5kZXgobm90Rm91bmRDbXNQYWdlQ29udGV4dCkucGlwZShcbiAgICAgICAgICAgIHRhcCgobm90Rm91bmRJbmRleCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNtc1NlcnZpY2Uuc2V0UGFnZUZhaWxJbmRleChwYWdlQ29udGV4dCwgbm90Rm91bmRJbmRleCk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHN3aXRjaE1hcCgobm90Rm91bmRJbmRleCkgPT5cbiAgICAgICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLmdldFBhZ2VJbmRleChwYWdlQ29udGV4dCkucGlwZShcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHdhaXQgZm9yIHBhZ2UgaW5kZXggdXBkYXRlXG4gICAgICAgICAgICAgICAgZmlsdGVyKChpbmRleCkgPT4gaW5kZXggPT09IG5vdEZvdW5kSW5kZXgpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBzd2l0Y2hNYXAoKCkgPT5cbiAgICAgICAgICAgICAgdGhpcy5jYW5BY3RpdmF0ZVBhZ2UocGFnZUNvbnRleHQsIG5vdEZvdW5kUGFnZSwgcm91dGUsIHN0YXRlKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9mKGZhbHNlKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19