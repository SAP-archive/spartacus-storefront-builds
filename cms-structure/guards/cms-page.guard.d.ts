import { CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CmsActivatedRouteSnapshot, CmsService, ProtectedRoutesGuard, RoutingService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsPageGuardService } from './cms-page-guard.service';
import * as ɵngcc0 from '@angular/core';
export declare class CmsPageGuard implements CanActivate {
    protected routingService: RoutingService;
    protected cmsService: CmsService;
    protected protectedRoutesGuard: ProtectedRoutesGuard;
    protected service: CmsPageGuardService;
    protected config: any;
    static guardName: string;
    constructor(routingService: RoutingService, cmsService: CmsService, protectedRoutesGuard: ProtectedRoutesGuard, service: CmsPageGuardService, config: any);
    /**
     * Tries to load the CMS page data for the anticipated route and returns:
     * - `true` - if it can be activated
     * - `false` - if it cannot be activated
     * - `UrlTree` - if user should be redirected to a given `UrlTree`
     *
     * If the route can be activated, it fires additional calculations on the CMS components present on this CMS page,
     * based on their configuration (`cmsComponents` config).
     *
     * For more, see docs of the `CmsPageGuardService.canActivatePage`.
     */
    canActivate(route: CmsActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree>;
    /**
     * Returns whether we should reload the CMS page data, even when it was loaded before.
     */
    private shouldReloadCmsData;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CmsPageGuard, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UuZ3VhcmQuZC50cyIsInNvdXJjZXMiOlsiY21zLXBhZ2UuZ3VhcmQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBVcmxUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsIENtc1NlcnZpY2UsIFByb3RlY3RlZFJvdXRlc0d1YXJkLCBSb3V0aW5nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDbXNQYWdlR3VhcmRTZXJ2aWNlIH0gZnJvbSAnLi9jbXMtcGFnZS1ndWFyZC5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENtc1BhZ2VHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBwcm90ZWN0ZWRSb3V0ZXNHdWFyZDogUHJvdGVjdGVkUm91dGVzR3VhcmQ7XG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IENtc1BhZ2VHdWFyZFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogYW55O1xuICAgIHN0YXRpYyBndWFyZE5hbWU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcihyb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsIHByb3RlY3RlZFJvdXRlc0d1YXJkOiBQcm90ZWN0ZWRSb3V0ZXNHdWFyZCwgc2VydmljZTogQ21zUGFnZUd1YXJkU2VydmljZSwgY29uZmlnOiBhbnkpO1xuICAgIC8qKlxuICAgICAqIFRyaWVzIHRvIGxvYWQgdGhlIENNUyBwYWdlIGRhdGEgZm9yIHRoZSBhbnRpY2lwYXRlZCByb3V0ZSBhbmQgcmV0dXJuczpcbiAgICAgKiAtIGB0cnVlYCAtIGlmIGl0IGNhbiBiZSBhY3RpdmF0ZWRcbiAgICAgKiAtIGBmYWxzZWAgLSBpZiBpdCBjYW5ub3QgYmUgYWN0aXZhdGVkXG4gICAgICogLSBgVXJsVHJlZWAgLSBpZiB1c2VyIHNob3VsZCBiZSByZWRpcmVjdGVkIHRvIGEgZ2l2ZW4gYFVybFRyZWVgXG4gICAgICpcbiAgICAgKiBJZiB0aGUgcm91dGUgY2FuIGJlIGFjdGl2YXRlZCwgaXQgZmlyZXMgYWRkaXRpb25hbCBjYWxjdWxhdGlvbnMgb24gdGhlIENNUyBjb21wb25lbnRzIHByZXNlbnQgb24gdGhpcyBDTVMgcGFnZSxcbiAgICAgKiBiYXNlZCBvbiB0aGVpciBjb25maWd1cmF0aW9uIChgY21zQ29tcG9uZW50c2AgY29uZmlnKS5cbiAgICAgKlxuICAgICAqIEZvciBtb3JlLCBzZWUgZG9jcyBvZiB0aGUgYENtc1BhZ2VHdWFyZFNlcnZpY2UuY2FuQWN0aXZhdGVQYWdlYC5cbiAgICAgKi9cbiAgICBjYW5BY3RpdmF0ZShyb3V0ZTogQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgQ01TIHBhZ2UgZGF0YSwgZXZlbiB3aGVuIGl0IHdhcyBsb2FkZWQgYmVmb3JlLlxuICAgICAqL1xuICAgIHByaXZhdGUgc2hvdWxkUmVsb2FkQ21zRGF0YTtcbn1cbiJdfQ==