import { RouterStateSnapshot, UrlTree } from '@angular/router';
import { CmsActivatedRouteSnapshot, CmsService, Page, PageContext, SemanticPathService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsGuardsService } from '../services/cms-guards.service';
import { CmsI18nService } from '../services/cms-i18n.service';
import { CmsRoutesService } from '../services/cms-routes.service';
import { CmsComponentsService } from '../services';
/**
 * Helper service for `CmsPageGuard`
 */
import * as ɵngcc0 from '@angular/core';
export declare class CmsPageGuardService {
    protected semanticPathService: SemanticPathService;
    protected cmsService: CmsService;
    protected cmsRoutes: CmsRoutesService;
    protected cmsI18n: CmsI18nService;
    protected cmsGuards: CmsGuardsService;
    protected cmsComponentsService: CmsComponentsService;
    constructor(semanticPathService: SemanticPathService, cmsService: CmsService, cmsRoutes: CmsRoutesService, cmsI18n: CmsI18nService, cmsGuards: CmsGuardsService, cmsComponentsService: CmsComponentsService);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UtZ3VhcmQuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJjbXMtcGFnZS1ndWFyZC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlclN0YXRlU25hcHNob3QsIFVybFRyZWUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgQ21zU2VydmljZSwgUGFnZSwgUGFnZUNvbnRleHQsIFNlbWFudGljUGF0aFNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ21zR3VhcmRzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Ntcy1ndWFyZHMuc2VydmljZSc7XG5pbXBvcnQgeyBDbXNJMThuU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Ntcy1pMThuLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ21zUm91dGVzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Ntcy1yb3V0ZXMuc2VydmljZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzJztcbi8qKlxuICogSGVscGVyIHNlcnZpY2UgZm9yIGBDbXNQYWdlR3VhcmRgXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENtc1BhZ2VHdWFyZFNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBzZW1hbnRpY1BhdGhTZXJ2aWNlOiBTZW1hbnRpY1BhdGhTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjbXNSb3V0ZXM6IENtc1JvdXRlc1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGNtc0kxOG46IENtc0kxOG5TZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjbXNHdWFyZHM6IENtc0d1YXJkc1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGNtc0NvbXBvbmVudHNTZXJ2aWNlOiBDbXNDb21wb25lbnRzU2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihzZW1hbnRpY1BhdGhTZXJ2aWNlOiBTZW1hbnRpY1BhdGhTZXJ2aWNlLCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLCBjbXNSb3V0ZXM6IENtc1JvdXRlc1NlcnZpY2UsIGNtc0kxOG46IENtc0kxOG5TZXJ2aWNlLCBjbXNHdWFyZHM6IENtc0d1YXJkc1NlcnZpY2UsIGNtc0NvbXBvbmVudHNTZXJ2aWNlOiBDbXNDb21wb25lbnRzU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogVGFrZXMgQ01TIGNvbXBvbmVudHMgdHlwZXMgaW4gdGhlIGN1cnJlbnQgQ01TIHBhZ2UsIHRyaWdnZXJzIChjb25maWd1cmFibGUpIHNpZGUgZWZmZWN0cyBhbmQgcmV0dXJucyBhIGJvb2xlYW4gLSB3aGV0aGVyIHRoZSByb3V0ZSBjYW4gYmUgYWN0aXZhdGVkLlxuICAgICAqXG4gICAgICogQmFzZWQgb24gYGNtc0NvbXBvbmVudHNgIGNvbmZpZyBmb3IgdGhlIGNvbXBvbmVudHMgaW4gdGhlIHBhZ2U6XG4gICAgICogLSBFdmFsdWF0ZXMgY29tcG9uZW50cycgZ3VhcmRzOyBpZiBvbmUgb2YgdGhlbSBlbWl0cyBmYWxzZSBvciBVcmxUcmVlIC0gdGhlIHJvdXRlIGNhbm5vdCBiZSBhY3RpdmF0ZWQgb3IgcmVkaXJlY3RzIHRvIHRoZSBnaXZlbiBVcmxUcmVlLCByZXNwZWN0aXZlbHkuXG4gICAgICogLSBJZiBhbGwgY29tcG9uZW50cycgZ3VhcmRzIGVtaXR0ZWQgdHJ1ZSwgdGhlbiB0aGUgcm91dGUgY2FuIGJlIGFjdGl2YXRlZFxuICAgICAqIC0gVGhlbiB3ZSB0cmlnZ2VyIGxvYWRpbmcgb2YgY29uZmlndXJlZCBpMThuIGNodW5rcyBpbiBwYXJhbGxlbFxuICAgICAqIC0gQW5kIHdlIHJlZ2lzdGVyIHRoZSBjb25maWd1cmVkIGNoaWxkcmVuIHJvdXRlcyBvZiBjbXMgY29tcG9uZW50c1xuICAgICAqXG4gICAgICogQHBhcmFtIHBhZ2VDb250ZXh0IGN1cnJlbnQgY21zIHBhZ2UgY29udGV4dFxuICAgICAqIEBwYXJhbSBwYWdlRGF0YSBjbXMgcGFnZSBkYXRhXG4gICAgICogQHBhcmFtIHJvdXRlIGFjdGl2YXRlZCByb3V0ZSBzbmFwc2hvdFxuICAgICAqIEBwYXJhbSBzdGF0ZSByb3V0ZXIgc3RhdGUgc25hcHNob3RcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIGJvb2xlYW4gb2JzZXJ2YWJsZSAtIHdoZXRoZXIgdGhlIHJvdXRlIGNhbiBiZSBhY3RpdmF0ZWRcbiAgICAgKi9cbiAgICBjYW5BY3RpdmF0ZVBhZ2UocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LCBwYWdlRGF0YTogUGFnZSwgcm91dGU6IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT47XG4gICAgLyoqXG4gICAgICogQWN0aXZhdGVzIHRoZSBcIk5PVCBGT1VORFwiIGNtcyBwYWdlLlxuICAgICAqXG4gICAgICogSXQgbG9hZHMgY21zIHBhZ2UgZGF0YSBmb3IgdGhlIFwiTk9UIEZPVU5EXCIgcGFnZSBhbmQgcHV0cyBpdCBpbiB0aGUgc3RhdGUgb2YgdGhlIHRoZSByZXF1ZXN0ZWQgcGFnZSBsYWJlbC5cbiAgICAgKiBUaGVuIGl0IHByb2Nlc3NlcyBpdHMgQ01TIGNvbXBvbmVudHMgd2l0aCB0aGUgbWV0aG9kIGBjYW5BY3RpdmF0ZVBhZ2UoKWAgb2YgdGhpcyBzZXJ2aWNlLiBGb3IgbW9yZSwgc2VlIGl0cyBkb2NzLlxuICAgICAqL1xuICAgIGNhbkFjdGl2YXRlTm90Rm91bmRQYWdlKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCwgcm91dGU6IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT47XG59XG4iXX0=