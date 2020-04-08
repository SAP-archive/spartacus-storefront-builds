import { __decorate, __param } from "tslib";
import { Inject, Injectable } from '@angular/core';
import { CmsActivatedRouteSnapshot, CmsService, Config, isFeatureEnabled, ProtectedRoutesGuard, RoutingService, } from '@spartacus/core';
import { of } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';
import { CmsPageGuardService } from './cms-page-guard.service';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "./cms-page-guard.service";
let CmsPageGuard = class CmsPageGuard {
    constructor(routingService, cmsService, protectedRoutesGuard, service, config) {
        this.routingService = routingService;
        this.cmsService = cmsService;
        this.protectedRoutesGuard = protectedRoutesGuard;
        this.service = service;
        this.config = config;
    }
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
    canActivate(route, state) {
        return this.protectedRoutesGuard.canActivate(route).pipe(switchMap((canActivate) => canActivate
            ? this.routingService.getNextPageContext().pipe(switchMap((pageContext) => this.cmsService
                .getPage(pageContext, this.shouldReloadCmsData())
                .pipe(first(), switchMap((pageData) => pageData
                ? this.service.canActivatePage(pageContext, pageData, route, state)
                : this.service.canActivateNotFoundPage(pageContext, route, state)))))
            : of(false)));
    }
    /**
     * Returns whether we should reload the CMS page data, even when it was loaded before.
     */
    shouldReloadCmsData() {
        return !isFeatureEnabled(this.config, 'cmsPageLoadOnce');
    }
};
CmsPageGuard.guardName = 'CmsPageGuard';
CmsPageGuard.ctorParameters = () => [
    { type: RoutingService },
    { type: CmsService },
    { type: ProtectedRoutesGuard },
    { type: CmsPageGuardService },
    { type: undefined, decorators: [{ type: Inject, args: [Config,] }] }
];
CmsPageGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsPageGuard_Factory() { return new CmsPageGuard(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i1.ProtectedRoutesGuard), i0.ɵɵinject(i2.CmsPageGuardService), i0.ɵɵinject(i1.Config)); }, token: CmsPageGuard, providedIn: "root" });
CmsPageGuard = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(4, Inject(Config))
], CmsPageGuard);
export { CmsPageGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL2d1YXJkcy9jbXMtcGFnZS5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUNMLHlCQUF5QixFQUN6QixVQUFVLEVBQ1YsTUFBTSxFQUNOLGdCQUFnQixFQUNoQixvQkFBb0IsRUFDcEIsY0FBYyxHQUNmLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBSy9ELElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7SUFHdkIsWUFDWSxjQUE4QixFQUM5QixVQUFzQixFQUN0QixvQkFBMEMsRUFDMUMsT0FBNEIsRUFDWixNQUFXO1FBSjNCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFDWixXQUFNLEdBQU4sTUFBTSxDQUFLO0lBQ3BDLENBQUM7SUFFSjs7Ozs7Ozs7OztPQVVHO0lBQ0gsV0FBVyxDQUNULEtBQWdDLEVBQ2hDLEtBQTBCO1FBRTFCLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQ3RELFNBQVMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQ3hCLFdBQVc7WUFDVCxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLElBQUksQ0FDM0MsU0FBUyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FDeEIsSUFBSSxDQUFDLFVBQVU7aUJBQ1osT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztpQkFDaEQsSUFBSSxDQUNILEtBQUssRUFBRSxFQUNQLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQ3JCLFFBQVE7Z0JBQ04sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUMxQixXQUFXLEVBQ1gsUUFBUSxFQUNSLEtBQUssRUFDTCxLQUFLLENBQ047Z0JBQ0gsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQ2xDLFdBQVcsRUFDWCxLQUFLLEVBQ0wsS0FBSyxDQUNOLENBQ04sQ0FDRixDQUNKLENBQ0Y7WUFDSCxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUNkLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNLLG1CQUFtQjtRQUN6QixPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQzNELENBQUM7Q0FDRixDQUFBO0FBOURRLHNCQUFTLEdBQUcsY0FBYyxDQUFDOztZQUdOLGNBQWM7WUFDbEIsVUFBVTtZQUNBLG9CQUFvQjtZQUNqQyxtQkFBbUI7NENBQ3JDLE1BQU0sU0FBQyxNQUFNOzs7QUFSTCxZQUFZO0lBSHhCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7SUFTRyxXQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtHQVJOLFlBQVksQ0ErRHhCO1NBL0RZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBVcmxUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gIENtc1NlcnZpY2UsXG4gIENvbmZpZyxcbiAgaXNGZWF0dXJlRW5hYmxlZCxcbiAgUHJvdGVjdGVkUm91dGVzR3VhcmQsXG4gIFJvdXRpbmdTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpcnN0LCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNQYWdlR3VhcmRTZXJ2aWNlIH0gZnJvbSAnLi9jbXMtcGFnZS1ndWFyZC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENtc1BhZ2VHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgc3RhdGljIGd1YXJkTmFtZSA9ICdDbXNQYWdlR3VhcmQnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHByb3RlY3RlZFJvdXRlc0d1YXJkOiBQcm90ZWN0ZWRSb3V0ZXNHdWFyZCxcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogQ21zUGFnZUd1YXJkU2VydmljZSxcbiAgICBASW5qZWN0KENvbmZpZykgcHJvdGVjdGVkIGNvbmZpZzogYW55XG4gICkge31cblxuICAvKipcbiAgICogVHJpZXMgdG8gbG9hZCB0aGUgQ01TIHBhZ2UgZGF0YSBmb3IgdGhlIGFudGljaXBhdGVkIHJvdXRlIGFuZCByZXR1cm5zOlxuICAgKiAtIGB0cnVlYCAtIGlmIGl0IGNhbiBiZSBhY3RpdmF0ZWRcbiAgICogLSBgZmFsc2VgIC0gaWYgaXQgY2Fubm90IGJlIGFjdGl2YXRlZFxuICAgKiAtIGBVcmxUcmVlYCAtIGlmIHVzZXIgc2hvdWxkIGJlIHJlZGlyZWN0ZWQgdG8gYSBnaXZlbiBgVXJsVHJlZWBcbiAgICpcbiAgICogSWYgdGhlIHJvdXRlIGNhbiBiZSBhY3RpdmF0ZWQsIGl0IGZpcmVzIGFkZGl0aW9uYWwgY2FsY3VsYXRpb25zIG9uIHRoZSBDTVMgY29tcG9uZW50cyBwcmVzZW50IG9uIHRoaXMgQ01TIHBhZ2UsXG4gICAqIGJhc2VkIG9uIHRoZWlyIGNvbmZpZ3VyYXRpb24gKGBjbXNDb21wb25lbnRzYCBjb25maWcpLlxuICAgKlxuICAgKiBGb3IgbW9yZSwgc2VlIGRvY3Mgb2YgdGhlIGBDbXNQYWdlR3VhcmRTZXJ2aWNlLmNhbkFjdGl2YXRlUGFnZWAuXG4gICAqL1xuICBjYW5BY3RpdmF0ZShcbiAgICByb3V0ZTogQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgcmV0dXJuIHRoaXMucHJvdGVjdGVkUm91dGVzR3VhcmQuY2FuQWN0aXZhdGUocm91dGUpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKGNhbkFjdGl2YXRlKSA9PlxuICAgICAgICBjYW5BY3RpdmF0ZVxuICAgICAgICAgID8gdGhpcy5yb3V0aW5nU2VydmljZS5nZXROZXh0UGFnZUNvbnRleHQoKS5waXBlKFxuICAgICAgICAgICAgICBzd2l0Y2hNYXAoKHBhZ2VDb250ZXh0KSA9PlxuICAgICAgICAgICAgICAgIHRoaXMuY21zU2VydmljZVxuICAgICAgICAgICAgICAgICAgLmdldFBhZ2UocGFnZUNvbnRleHQsIHRoaXMuc2hvdWxkUmVsb2FkQ21zRGF0YSgpKVxuICAgICAgICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0KCksXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaE1hcCgocGFnZURhdGEpID0+XG4gICAgICAgICAgICAgICAgICAgICAgcGFnZURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5zZXJ2aWNlLmNhbkFjdGl2YXRlUGFnZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlQ29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuc2VydmljZS5jYW5BY3RpdmF0ZU5vdEZvdW5kUGFnZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlQ29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogb2YoZmFsc2UpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgQ01TIHBhZ2UgZGF0YSwgZXZlbiB3aGVuIGl0IHdhcyBsb2FkZWQgYmVmb3JlLlxuICAgKi9cbiAgcHJpdmF0ZSBzaG91bGRSZWxvYWRDbXNEYXRhKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhaXNGZWF0dXJlRW5hYmxlZCh0aGlzLmNvbmZpZywgJ2Ntc1BhZ2VMb2FkT25jZScpO1xuICB9XG59XG4iXX0=