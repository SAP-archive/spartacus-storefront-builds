import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { CmsActivatedRouteSnapshot, CmsService, Page, PageContext, PageType, SemanticPathService, } from '@spartacus/core';
import { of } from 'rxjs';
import { filter, map, switchMap, take, tap, withLatestFrom, } from 'rxjs/operators';
import { CmsGuardsService } from '../services/cms-guards.service';
import { CmsI18nService } from '../services/cms-i18n.service';
import { CmsRoutesService } from '../services/cms-routes.service';
import { CmsComponentsService } from '../services';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UtZ3VhcmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvZ3VhcmRzL2Ntcy1wYWdlLWd1YXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUNMLHlCQUF5QixFQUN6QixVQUFVLEVBQ1YsSUFBSSxFQUNKLFdBQVcsRUFDWCxRQUFRLEVBQ1IsbUJBQW1CLEdBQ3BCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQ0wsTUFBTSxFQUNOLEdBQUcsRUFDSCxTQUFTLEVBQ1QsSUFBSSxFQUNKLEdBQUcsRUFDSCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sYUFBYSxDQUFDOzs7Ozs7O0FBRW5EOztHQUVHO0FBSUgsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFDOUIsWUFDWSxtQkFBd0MsRUFDeEMsVUFBc0IsRUFDdEIsU0FBMkIsRUFDM0IsT0FBdUIsRUFDdkIsU0FBMkIsRUFDM0Isb0JBQTBDO1FBTDFDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMz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QUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTs7WUFsR2tDLG1CQUFtQjtZQUM1QixVQUFVO1lBQ1gsZ0JBQWdCO1lBQ2xCLGNBQWM7WUFDWixnQkFBZ0I7WUFDTCxvQkFBb0I7OztBQVAzQyxtQkFBbUI7SUFIL0IsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLG1CQUFtQixDQW9HL0I7U0FwR1ksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyU3RhdGVTbmFwc2hvdCwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICBDbXNTZXJ2aWNlLFxuICBQYWdlLFxuICBQYWdlQ29udGV4dCxcbiAgUGFnZVR5cGUsXG4gIFNlbWFudGljUGF0aFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZmlsdGVyLFxuICBtYXAsXG4gIHN3aXRjaE1hcCxcbiAgdGFrZSxcbiAgdGFwLFxuICB3aXRoTGF0ZXN0RnJvbSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zR3VhcmRzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Ntcy1ndWFyZHMuc2VydmljZSc7XG5pbXBvcnQgeyBDbXNJMThuU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Ntcy1pMThuLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ21zUm91dGVzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Ntcy1yb3V0ZXMuc2VydmljZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzJztcblxuLyoqXG4gKiBIZWxwZXIgc2VydmljZSBmb3IgYENtc1BhZ2VHdWFyZGBcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENtc1BhZ2VHdWFyZFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc2VtYW50aWNQYXRoU2VydmljZTogU2VtYW50aWNQYXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY21zUm91dGVzOiBDbXNSb3V0ZXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjbXNJMThuOiBDbXNJMThuU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY21zR3VhcmRzOiBDbXNHdWFyZHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjbXNDb21wb25lbnRzU2VydmljZTogQ21zQ29tcG9uZW50c1NlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBUYWtlcyBDTVMgY29tcG9uZW50cyB0eXBlcyBpbiB0aGUgY3VycmVudCBDTVMgcGFnZSwgdHJpZ2dlcnMgKGNvbmZpZ3VyYWJsZSkgc2lkZSBlZmZlY3RzIGFuZCByZXR1cm5zIGEgYm9vbGVhbiAtIHdoZXRoZXIgdGhlIHJvdXRlIGNhbiBiZSBhY3RpdmF0ZWQuXG4gICAqXG4gICAqIEJhc2VkIG9uIGBjbXNDb21wb25lbnRzYCBjb25maWcgZm9yIHRoZSBjb21wb25lbnRzIGluIHRoZSBwYWdlOlxuICAgKiAtIEV2YWx1YXRlcyBjb21wb25lbnRzJyBndWFyZHM7IGlmIG9uZSBvZiB0aGVtIGVtaXRzIGZhbHNlIG9yIFVybFRyZWUgLSB0aGUgcm91dGUgY2Fubm90IGJlIGFjdGl2YXRlZCBvciByZWRpcmVjdHMgdG8gdGhlIGdpdmVuIFVybFRyZWUsIHJlc3BlY3RpdmVseS5cbiAgICogLSBJZiBhbGwgY29tcG9uZW50cycgZ3VhcmRzIGVtaXR0ZWQgdHJ1ZSwgdGhlbiB0aGUgcm91dGUgY2FuIGJlIGFjdGl2YXRlZFxuICAgKiAtIFRoZW4gd2UgdHJpZ2dlciBsb2FkaW5nIG9mIGNvbmZpZ3VyZWQgaTE4biBjaHVua3MgaW4gcGFyYWxsZWxcbiAgICogLSBBbmQgd2UgcmVnaXN0ZXIgdGhlIGNvbmZpZ3VyZWQgY2hpbGRyZW4gcm91dGVzIG9mIGNtcyBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwYXJhbSBwYWdlQ29udGV4dCBjdXJyZW50IGNtcyBwYWdlIGNvbnRleHRcbiAgICogQHBhcmFtIHBhZ2VEYXRhIGNtcyBwYWdlIGRhdGFcbiAgICogQHBhcmFtIHJvdXRlIGFjdGl2YXRlZCByb3V0ZSBzbmFwc2hvdFxuICAgKiBAcGFyYW0gc3RhdGUgcm91dGVyIHN0YXRlIHNuYXBzaG90XG4gICAqXG4gICAqIEByZXR1cm5zIGJvb2xlYW4gb2JzZXJ2YWJsZSAtIHdoZXRoZXIgdGhlIHJvdXRlIGNhbiBiZSBhY3RpdmF0ZWRcbiAgICovXG4gIGNhbkFjdGl2YXRlUGFnZShcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsXG4gICAgcGFnZURhdGE6IFBhZ2UsXG4gICAgcm91dGU6IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIHJldHVybiB0aGlzLmNtc1NlcnZpY2UuZ2V0UGFnZUNvbXBvbmVudFR5cGVzKHBhZ2VDb250ZXh0KS5waXBlKFxuICAgICAgdGFrZSgxKSxcbiAgICAgIHN3aXRjaE1hcCgoY29tcG9uZW50VHlwZXMpID0+XG4gICAgICAgIHRoaXMuY21zQ29tcG9uZW50c1NlcnZpY2UuZGV0ZXJtaW5lTWFwcGluZ3MoY29tcG9uZW50VHlwZXMpXG4gICAgICApLFxuICAgICAgc3dpdGNoTWFwKChjb21wb25lbnRUeXBlcykgPT5cbiAgICAgICAgdGhpcy5jbXNHdWFyZHNcbiAgICAgICAgICAuY21zUGFnZUNhbkFjdGl2YXRlKGNvbXBvbmVudFR5cGVzLCByb3V0ZSwgc3RhdGUpXG4gICAgICAgICAgLnBpcGUod2l0aExhdGVzdEZyb20ob2YoY29tcG9uZW50VHlwZXMpKSlcbiAgICAgICksXG4gICAgICB0YXAoKFtjYW5BY3RpdmF0ZSwgY29tcG9uZW50VHlwZXNdKSA9PiB7XG4gICAgICAgIGlmIChjYW5BY3RpdmF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuY21zSTE4bi5sb2FkRm9yQ29tcG9uZW50cyhjb21wb25lbnRUeXBlcyk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKChbY2FuQWN0aXZhdGUsIGNvbXBvbmVudFR5cGVzXSkgPT4ge1xuICAgICAgICBjb25zdCBwYWdlTGFiZWwgPSBwYWdlRGF0YS5sYWJlbCB8fCBwYWdlQ29udGV4dC5pZDsgLy8gZm9yIGNvbnRlbnQgcGFnZXMgdGhlIHBhZ2UgbGFiZWwgcmV0dXJuZWQgZnJvbSBiYWNrZW5kIGNhbiBiZSBkaWZmZXJlbnQgdGhhbiBJRCBpbml0aWFsbHkgYXNzdW1lZCBmcm9tIHJvdXRlXG4gICAgICAgIGlmIChjYW5BY3RpdmF0ZSA9PT0gdHJ1ZSAmJiAhcm91dGU/LmRhdGE/LmN4Q21zUm91dGVDb250ZXh0KSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY21zUm91dGVzLmhhbmRsZUNtc1JvdXRlc0luR3VhcmQoXG4gICAgICAgICAgICBwYWdlQ29udGV4dCxcbiAgICAgICAgICAgIGNvbXBvbmVudFR5cGVzLFxuICAgICAgICAgICAgc3RhdGUudXJsLFxuICAgICAgICAgICAgcGFnZUxhYmVsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FuQWN0aXZhdGU7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQWN0aXZhdGVzIHRoZSBcIk5PVCBGT1VORFwiIGNtcyBwYWdlLlxuICAgKlxuICAgKiBJdCBsb2FkcyBjbXMgcGFnZSBkYXRhIGZvciB0aGUgXCJOT1QgRk9VTkRcIiBwYWdlIGFuZCBwdXRzIGl0IGluIHRoZSBzdGF0ZSBvZiB0aGUgdGhlIHJlcXVlc3RlZCBwYWdlIGxhYmVsLlxuICAgKiBUaGVuIGl0IHByb2Nlc3NlcyBpdHMgQ01TIGNvbXBvbmVudHMgd2l0aCB0aGUgbWV0aG9kIGBjYW5BY3RpdmF0ZVBhZ2UoKWAgb2YgdGhpcyBzZXJ2aWNlLiBGb3IgbW9yZSwgc2VlIGl0cyBkb2NzLlxuICAgKi9cbiAgY2FuQWN0aXZhdGVOb3RGb3VuZFBhZ2UoXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LFxuICAgIHJvdXRlOiBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcbiAgICBjb25zdCBub3RGb3VuZENtc1BhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCA9IHtcbiAgICAgIHR5cGU6IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRSxcbiAgICAgIGlkOiB0aGlzLnNlbWFudGljUGF0aFNlcnZpY2UuZ2V0KCdub3RGb3VuZCcpLFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5jbXNTZXJ2aWNlLmdldFBhZ2Uobm90Rm91bmRDbXNQYWdlQ29udGV4dCkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgobm90Rm91bmRQYWdlKSA9PiB7XG4gICAgICAgIGlmIChub3RGb3VuZFBhZ2UpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jbXNTZXJ2aWNlLmdldFBhZ2VJbmRleChub3RGb3VuZENtc1BhZ2VDb250ZXh0KS5waXBlKFxuICAgICAgICAgICAgdGFwKChub3RGb3VuZEluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuY21zU2VydmljZS5zZXRQYWdlRmFpbEluZGV4KHBhZ2VDb250ZXh0LCBub3RGb3VuZEluZGV4KTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgc3dpdGNoTWFwKChub3RGb3VuZEluZGV4KSA9PlxuICAgICAgICAgICAgICB0aGlzLmNtc1NlcnZpY2UuZ2V0UGFnZUluZGV4KHBhZ2VDb250ZXh0KS5waXBlKFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gd2FpdCBmb3IgcGFnZSBpbmRleCB1cGRhdGVcbiAgICAgICAgICAgICAgICBmaWx0ZXIoKGluZGV4KSA9PiBpbmRleCA9PT0gbm90Rm91bmRJbmRleClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHN3aXRjaE1hcCgoKSA9PlxuICAgICAgICAgICAgICB0aGlzLmNhbkFjdGl2YXRlUGFnZShwYWdlQ29udGV4dCwgbm90Rm91bmRQYWdlLCByb3V0ZSwgc3RhdGUpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=