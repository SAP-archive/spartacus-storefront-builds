import { RouterStateSnapshot, UrlTree } from '@angular/router';
import { CmsActivatedRouteSnapshot, CmsService, Page, PageContext, SemanticPathService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsComponentsService } from '../services/cms-components.service';
import { CmsGuardsService } from '../services/cms-guards.service';
import { CmsI18nService } from '../services/cms-i18n.service';
import { CmsRoutesService } from '../services/cms-routes.service';
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UtZ3VhcmQuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJjbXMtcGFnZS1ndWFyZC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlclN0YXRlU25hcHNob3QsIFVybFRyZWUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgQ21zU2VydmljZSwgUGFnZSwgUGFnZUNvbnRleHQsIFNlbWFudGljUGF0aFNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50c1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jbXMtY29tcG9uZW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IENtc0d1YXJkc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jbXMtZ3VhcmRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ21zSTE4blNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jbXMtaTE4bi5zZXJ2aWNlJztcbmltcG9ydCB7IENtc1JvdXRlc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jbXMtcm91dGVzLnNlcnZpY2UnO1xuLyoqXG4gKiBIZWxwZXIgc2VydmljZSBmb3IgYENtc1BhZ2VHdWFyZGBcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ21zUGFnZUd1YXJkU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHNlbWFudGljUGF0aFNlcnZpY2U6IFNlbWFudGljUGF0aFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGNtc1NlcnZpY2U6IENtc1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGNtc1JvdXRlczogQ21zUm91dGVzU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgY21zSTE4bjogQ21zSTE4blNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGNtc0d1YXJkczogQ21zR3VhcmRzU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgY21zQ29tcG9uZW50c1NlcnZpY2U6IENtc0NvbXBvbmVudHNTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKHNlbWFudGljUGF0aFNlcnZpY2U6IFNlbWFudGljUGF0aFNlcnZpY2UsIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsIGNtc1JvdXRlczogQ21zUm91dGVzU2VydmljZSwgY21zSTE4bjogQ21zSTE4blNlcnZpY2UsIGNtc0d1YXJkczogQ21zR3VhcmRzU2VydmljZSwgY21zQ29tcG9uZW50c1NlcnZpY2U6IENtc0NvbXBvbmVudHNTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBUYWtlcyBDTVMgY29tcG9uZW50cyB0eXBlcyBpbiB0aGUgY3VycmVudCBDTVMgcGFnZSwgdHJpZ2dlcnMgKGNvbmZpZ3VyYWJsZSkgc2lkZSBlZmZlY3RzIGFuZCByZXR1cm5zIGEgYm9vbGVhbiAtIHdoZXRoZXIgdGhlIHJvdXRlIGNhbiBiZSBhY3RpdmF0ZWQuXG4gICAgICpcbiAgICAgKiBCYXNlZCBvbiBgY21zQ29tcG9uZW50c2AgY29uZmlnIGZvciB0aGUgY29tcG9uZW50cyBpbiB0aGUgcGFnZTpcbiAgICAgKiAtIEV2YWx1YXRlcyBjb21wb25lbnRzJyBndWFyZHM7IGlmIG9uZSBvZiB0aGVtIGVtaXRzIGZhbHNlIG9yIFVybFRyZWUgLSB0aGUgcm91dGUgY2Fubm90IGJlIGFjdGl2YXRlZCBvciByZWRpcmVjdHMgdG8gdGhlIGdpdmVuIFVybFRyZWUsIHJlc3BlY3RpdmVseS5cbiAgICAgKiAtIElmIGFsbCBjb21wb25lbnRzJyBndWFyZHMgZW1pdHRlZCB0cnVlLCB0aGVuIHRoZSByb3V0ZSBjYW4gYmUgYWN0aXZhdGVkXG4gICAgICogLSBUaGVuIHdlIHRyaWdnZXIgbG9hZGluZyBvZiBjb25maWd1cmVkIGkxOG4gY2h1bmtzIGluIHBhcmFsbGVsXG4gICAgICogLSBBbmQgd2UgcmVnaXN0ZXIgdGhlIGNvbmZpZ3VyZWQgY2hpbGRyZW4gcm91dGVzIG9mIGNtcyBjb21wb25lbnRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFnZUNvbnRleHQgY3VycmVudCBjbXMgcGFnZSBjb250ZXh0XG4gICAgICogQHBhcmFtIHBhZ2VEYXRhIGNtcyBwYWdlIGRhdGFcbiAgICAgKiBAcGFyYW0gcm91dGUgYWN0aXZhdGVkIHJvdXRlIHNuYXBzaG90XG4gICAgICogQHBhcmFtIHN0YXRlIHJvdXRlciBzdGF0ZSBzbmFwc2hvdFxuICAgICAqXG4gICAgICogQHJldHVybnMgYm9vbGVhbiBvYnNlcnZhYmxlIC0gd2hldGhlciB0aGUgcm91dGUgY2FuIGJlIGFjdGl2YXRlZFxuICAgICAqL1xuICAgIGNhbkFjdGl2YXRlUGFnZShwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIHBhZ2VEYXRhOiBQYWdlLCByb3V0ZTogQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPjtcbiAgICAvKipcbiAgICAgKiBBY3RpdmF0ZXMgdGhlIFwiTk9UIEZPVU5EXCIgY21zIHBhZ2UuXG4gICAgICpcbiAgICAgKiBJdCBsb2FkcyBjbXMgcGFnZSBkYXRhIGZvciB0aGUgXCJOT1QgRk9VTkRcIiBwYWdlIGFuZCBwdXRzIGl0IGluIHRoZSBzdGF0ZSBvZiB0aGUgdGhlIHJlcXVlc3RlZCBwYWdlIGxhYmVsLlxuICAgICAqIFRoZW4gaXQgcHJvY2Vzc2VzIGl0cyBDTVMgY29tcG9uZW50cyB3aXRoIHRoZSBtZXRob2QgYGNhbkFjdGl2YXRlUGFnZSgpYCBvZiB0aGlzIHNlcnZpY2UuIEZvciBtb3JlLCBzZWUgaXRzIGRvY3MuXG4gICAgICovXG4gICAgY2FuQWN0aXZhdGVOb3RGb3VuZFBhZ2UocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LCByb3V0ZTogQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPjtcbn1cbiJdfQ==