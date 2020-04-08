import { RouterStateSnapshot, UrlTree } from '@angular/router';
import { CmsActivatedRouteSnapshot, CmsService, Page, PageContext, SemanticPathService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsGuardsService } from '../services/cms-guards.service';
import { CmsI18nService } from '../services/cms-i18n.service';
import { CmsRoutesService } from '../services/cms-routes.service';
/**
 * Helper service for `CmsPageGuard`
 */
import * as ɵngcc0 from '@angular/core';
export declare class CmsPageGuardService {
    protected semanticPathService: SemanticPathService;
    private cmsService;
    private cmsRoutes;
    private cmsI18n;
    private cmsGuards;
    constructor(semanticPathService: SemanticPathService, cmsService: CmsService, cmsRoutes: CmsRoutesService, cmsI18n: CmsI18nService, cmsGuards: CmsGuardsService);
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
    canActivatePage(pageContext: PageContext, pageData: Page, route: CmsActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree>;
    /**
     * Activates the "NOT FOUND" cms page.
     *
     * It loads cms page data for the "NOT FOUND" page and puts it in the state of the the requested page label.
     * Then it processes its CMS components with the method `canActivatePage()` of this service. For more, see its docs.
     */
    canActivateNotFoundPage(pageContext: PageContext, route: CmsActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CmsPageGuardService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UtZ3VhcmQuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJjbXMtcGFnZS1ndWFyZC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBVcmxUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsIENtc1NlcnZpY2UsIFBhZ2UsIFBhZ2VDb250ZXh0LCBTZW1hbnRpY1BhdGhTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENtc0d1YXJkc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jbXMtZ3VhcmRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ21zSTE4blNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jbXMtaTE4bi5zZXJ2aWNlJztcbmltcG9ydCB7IENtc1JvdXRlc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jbXMtcm91dGVzLnNlcnZpY2UnO1xuLyoqXG4gKiBIZWxwZXIgc2VydmljZSBmb3IgYENtc1BhZ2VHdWFyZGBcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ21zUGFnZUd1YXJkU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHNlbWFudGljUGF0aFNlcnZpY2U6IFNlbWFudGljUGF0aFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBjbXNTZXJ2aWNlO1xuICAgIHByaXZhdGUgY21zUm91dGVzO1xuICAgIHByaXZhdGUgY21zSTE4bjtcbiAgICBwcml2YXRlIGNtc0d1YXJkcztcbiAgICBjb25zdHJ1Y3RvcihzZW1hbnRpY1BhdGhTZXJ2aWNlOiBTZW1hbnRpY1BhdGhTZXJ2aWNlLCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLCBjbXNSb3V0ZXM6IENtc1JvdXRlc1NlcnZpY2UsIGNtc0kxOG46IENtc0kxOG5TZXJ2aWNlLCBjbXNHdWFyZHM6IENtc0d1YXJkc1NlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIFRha2VzIENNUyBjb21wb25lbnRzIHR5cGVzIGluIHRoZSBjdXJyZW50IENNUyBwYWdlLCB0cmlnZ2VycyAoY29uZmlndXJhYmxlKSBzaWRlIGVmZmVjdHMgYW5kIHJldHVybnMgYSBib29sZWFuIC0gd2hldGhlciB0aGUgcm91dGUgY2FuIGJlIGFjdGl2YXRlZC5cbiAgICAgKlxuICAgICAqIEJhc2VkIG9uIGBjbXNDb21wb25lbnRzYCBjb25maWcgZm9yIHRoZSBjb21wb25lbnRzIGluIHRoZSBwYWdlOlxuICAgICAqIC0gRXZhbHVhdGVzIGNvbXBvbmVudHMnIGd1YXJkczsgaWYgb25lIG9mIHRoZW0gZW1pdHMgZmFsc2Ugb3IgVXJsVHJlZSAtIHRoZSByb3V0ZSBjYW5ub3QgYmUgYWN0aXZhdGVkIG9yIHJlZGlyZWN0cyB0byB0aGUgZ2l2ZW4gVXJsVHJlZSwgcmVzcGVjdGl2ZWx5LlxuICAgICAqIC0gSWYgYWxsIGNvbXBvbmVudHMnIGd1YXJkcyBlbWl0dGVkIHRydWUsIHRoZW4gdGhlIHJvdXRlIGNhbiBiZSBhY3RpdmF0ZWRcbiAgICAgKiAtIFRoZW4gd2UgdHJpZ2dlciBsb2FkaW5nIG9mIGNvbmZpZ3VyZWQgaTE4biBjaHVua3MgaW4gcGFyYWxsZWxcbiAgICAgKiAtIEFuZCB3ZSByZWdpc3RlciB0aGUgY29uZmlndXJlZCBjaGlsZHJlbiByb3V0ZXMgb2YgY21zIGNvbXBvbmVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYWdlQ29udGV4dCBjdXJyZW50IGNtcyBwYWdlIGNvbnRleHRcbiAgICAgKiBAcGFyYW0gcGFnZURhdGEgY21zIHBhZ2UgZGF0YVxuICAgICAqIEBwYXJhbSByb3V0ZSBhY3RpdmF0ZWQgcm91dGUgc25hcHNob3RcbiAgICAgKiBAcGFyYW0gc3RhdGUgcm91dGVyIHN0YXRlIHNuYXBzaG90XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBib29sZWFuIG9ic2VydmFibGUgLSB3aGV0aGVyIHRoZSByb3V0ZSBjYW4gYmUgYWN0aXZhdGVkXG4gICAgICovXG4gICAgY2FuQWN0aXZhdGVQYWdlKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCwgcGFnZURhdGE6IFBhZ2UsIHJvdXRlOiBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+O1xuICAgIC8qKlxuICAgICAqIEFjdGl2YXRlcyB0aGUgXCJOT1QgRk9VTkRcIiBjbXMgcGFnZS5cbiAgICAgKlxuICAgICAqIEl0IGxvYWRzIGNtcyBwYWdlIGRhdGEgZm9yIHRoZSBcIk5PVCBGT1VORFwiIHBhZ2UgYW5kIHB1dHMgaXQgaW4gdGhlIHN0YXRlIG9mIHRoZSB0aGUgcmVxdWVzdGVkIHBhZ2UgbGFiZWwuXG4gICAgICogVGhlbiBpdCBwcm9jZXNzZXMgaXRzIENNUyBjb21wb25lbnRzIHdpdGggdGhlIG1ldGhvZCBgY2FuQWN0aXZhdGVQYWdlKClgIG9mIHRoaXMgc2VydmljZS4gRm9yIG1vcmUsIHNlZSBpdHMgZG9jcy5cbiAgICAgKi9cbiAgICBjYW5BY3RpdmF0ZU5vdEZvdW5kUGFnZShwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIHJvdXRlOiBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+O1xufVxuIl19