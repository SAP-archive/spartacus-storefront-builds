import { CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CmsActivatedRouteSnapshot, CmsService, ProtectedRoutesGuard, RoutingConfigService, RoutingService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsPageGuardService } from './cms-page-guard.service';
import * as ɵngcc0 from '@angular/core';
export declare class CmsPageGuard implements CanActivate {
    protected routingService: RoutingService;
    protected cmsService: CmsService;
    protected protectedRoutesGuard: ProtectedRoutesGuard;
    protected service: CmsPageGuardService;
    protected routingConfig: RoutingConfigService;
    static guardName: string;
    constructor(routingService: RoutingService, cmsService: CmsService, protectedRoutesGuard: ProtectedRoutesGuard, service: CmsPageGuardService, routingConfig: RoutingConfigService);
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
    private shouldReload;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CmsPageGuard, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UuZ3VhcmQuZC50cyIsInNvdXJjZXMiOlsiY21zLXBhZ2UuZ3VhcmQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBVcmxUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsIENtc1NlcnZpY2UsIFByb3RlY3RlZFJvdXRlc0d1YXJkLCBSb3V0aW5nQ29uZmlnU2VydmljZSwgUm91dGluZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ21zUGFnZUd1YXJkU2VydmljZSB9IGZyb20gJy4vY21zLXBhZ2UtZ3VhcmQuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDbXNQYWdlR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgY21zU2VydmljZTogQ21zU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcHJvdGVjdGVkUm91dGVzR3VhcmQ6IFByb3RlY3RlZFJvdXRlc0d1YXJkO1xuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBDbXNQYWdlR3VhcmRTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCByb3V0aW5nQ29uZmlnOiBSb3V0aW5nQ29uZmlnU2VydmljZTtcbiAgICBzdGF0aWMgZ3VhcmROYW1lOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3Iocm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLCBwcm90ZWN0ZWRSb3V0ZXNHdWFyZDogUHJvdGVjdGVkUm91dGVzR3VhcmQsIHNlcnZpY2U6IENtc1BhZ2VHdWFyZFNlcnZpY2UsIHJvdXRpbmdDb25maWc6IFJvdXRpbmdDb25maWdTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBUcmllcyB0byBsb2FkIHRoZSBDTVMgcGFnZSBkYXRhIGZvciB0aGUgYW50aWNpcGF0ZWQgcm91dGUgYW5kIHJldHVybnM6XG4gICAgICogLSBgdHJ1ZWAgLSBpZiBpdCBjYW4gYmUgYWN0aXZhdGVkXG4gICAgICogLSBgZmFsc2VgIC0gaWYgaXQgY2Fubm90IGJlIGFjdGl2YXRlZFxuICAgICAqIC0gYFVybFRyZWVgIC0gaWYgdXNlciBzaG91bGQgYmUgcmVkaXJlY3RlZCB0byBhIGdpdmVuIGBVcmxUcmVlYFxuICAgICAqXG4gICAgICogSWYgdGhlIHJvdXRlIGNhbiBiZSBhY3RpdmF0ZWQsIGl0IGZpcmVzIGFkZGl0aW9uYWwgY2FsY3VsYXRpb25zIG9uIHRoZSBDTVMgY29tcG9uZW50cyBwcmVzZW50IG9uIHRoaXMgQ01TIHBhZ2UsXG4gICAgICogYmFzZWQgb24gdGhlaXIgY29uZmlndXJhdGlvbiAoYGNtc0NvbXBvbmVudHNgIGNvbmZpZykuXG4gICAgICpcbiAgICAgKiBGb3IgbW9yZSwgc2VlIGRvY3Mgb2YgdGhlIGBDbXNQYWdlR3VhcmRTZXJ2aWNlLmNhbkFjdGl2YXRlUGFnZWAuXG4gICAgICovXG4gICAgY2FuQWN0aXZhdGUocm91dGU6IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIHdlIHNob3VsZCByZWxvYWQgdGhlIENNUyBwYWdlIGRhdGEsIGV2ZW4gd2hlbiBpdCB3YXMgbG9hZGVkIGJlZm9yZS5cbiAgICAgKi9cbiAgICBwcml2YXRlIHNob3VsZFJlbG9hZDtcbn1cbiJdfQ==