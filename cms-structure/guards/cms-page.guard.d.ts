import { CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CmsActivatedRouteSnapshot, CmsService, ProtectedRoutesGuard, RoutingService, SemanticPathService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsGuardsService } from '../services/cms-guards.service';
import { CmsI18nService } from '../services/cms-i18n.service';
import { CmsRoutesService } from '../services/cms-routes.service';
import * as ɵngcc0 from '@angular/core';
export declare class CmsPageGuard implements CanActivate {
    protected routingService: RoutingService;
    protected cmsService: CmsService;
    private cmsRoutes;
    private cmsI18n;
    private cmsGuards;
    protected semanticPathService: SemanticPathService;
    protected protectedRoutesGuard?: ProtectedRoutesGuard;
    static guardName: string;
    constructor(routingService: RoutingService, cmsService: CmsService, cmsRoutes: CmsRoutesService, cmsI18n: CmsI18nService, cmsGuards: CmsGuardsService, semanticPathService: SemanticPathService, protectedRoutesGuard: ProtectedRoutesGuard);
    /**
     * @deprecated since version 1.2.0
     * Use constructor with more dependencies and make them all required.
     *
     * TODO(issue:4646) deprecated since version 1.2.0
     */
    constructor(routingService: RoutingService, cmsService: CmsService, cmsRoutes: CmsRoutesService, cmsI18n: CmsI18nService, cmsGuards: CmsGuardsService, semanticPathService: SemanticPathService);
    canActivate(route: CmsActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree>;
    private getCmsPage;
    private resolveCmsPageLogic;
    private handleNotFoundPage;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CmsPageGuard>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UuZ3VhcmQuZC50cyIsInNvdXJjZXMiOlsiY21zLXBhZ2UuZ3VhcmQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBVcmxUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsIENtc1NlcnZpY2UsIFByb3RlY3RlZFJvdXRlc0d1YXJkLCBSb3V0aW5nU2VydmljZSwgU2VtYW50aWNQYXRoU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDbXNHdWFyZHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY21zLWd1YXJkcy5zZXJ2aWNlJztcbmltcG9ydCB7IENtc0kxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY21zLWkxOG4uc2VydmljZSc7XG5pbXBvcnQgeyBDbXNSb3V0ZXNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY21zLXJvdXRlcy5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENtc1BhZ2VHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlO1xuICAgIHByaXZhdGUgY21zUm91dGVzO1xuICAgIHByaXZhdGUgY21zSTE4bjtcbiAgICBwcml2YXRlIGNtc0d1YXJkcztcbiAgICBwcm90ZWN0ZWQgc2VtYW50aWNQYXRoU2VydmljZTogU2VtYW50aWNQYXRoU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcHJvdGVjdGVkUm91dGVzR3VhcmQ/OiBQcm90ZWN0ZWRSb3V0ZXNHdWFyZDtcbiAgICBzdGF0aWMgZ3VhcmROYW1lOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3Iocm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLCBjbXNSb3V0ZXM6IENtc1JvdXRlc1NlcnZpY2UsIGNtc0kxOG46IENtc0kxOG5TZXJ2aWNlLCBjbXNHdWFyZHM6IENtc0d1YXJkc1NlcnZpY2UsIHNlbWFudGljUGF0aFNlcnZpY2U6IFNlbWFudGljUGF0aFNlcnZpY2UsIHByb3RlY3RlZFJvdXRlc0d1YXJkOiBQcm90ZWN0ZWRSb3V0ZXNHdWFyZCk7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjIuMFxuICAgICAqIFVzZSBjb25zdHJ1Y3RvciB3aXRoIG1vcmUgZGVwZW5kZW5jaWVzIGFuZCBtYWtlIHRoZW0gYWxsIHJlcXVpcmVkLlxuICAgICAqXG4gICAgICogVE9ETyhpc3N1ZTo0NjQ2KSBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4yLjBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihyb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsIGNtc1JvdXRlczogQ21zUm91dGVzU2VydmljZSwgY21zSTE4bjogQ21zSTE4blNlcnZpY2UsIGNtc0d1YXJkczogQ21zR3VhcmRzU2VydmljZSwgc2VtYW50aWNQYXRoU2VydmljZTogU2VtYW50aWNQYXRoU2VydmljZSk7XG4gICAgY2FuQWN0aXZhdGUocm91dGU6IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT47XG4gICAgcHJpdmF0ZSBnZXRDbXNQYWdlO1xuICAgIHByaXZhdGUgcmVzb2x2ZUNtc1BhZ2VMb2dpYztcbiAgICBwcml2YXRlIGhhbmRsZU5vdEZvdW5kUGFnZTtcbn1cbiJdfQ==