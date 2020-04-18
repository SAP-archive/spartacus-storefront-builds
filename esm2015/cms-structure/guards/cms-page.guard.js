import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { CmsActivatedRouteSnapshot, CmsService, ProtectedRoutesGuard, RouteLoadStrategy, RoutingConfigService, RoutingService, } from '@spartacus/core';
import { of } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';
import { CmsPageGuardService } from './cms-page-guard.service';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "./cms-page-guard.service";
let CmsPageGuard = class CmsPageGuard {
    constructor(routingService, cmsService, protectedRoutesGuard, service, routingConfig) {
        this.routingService = routingService;
        this.cmsService = cmsService;
        this.protectedRoutesGuard = protectedRoutesGuard;
        this.service = service;
        this.routingConfig = routingConfig;
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
            ? this.routingService.getNextPageContext().pipe(switchMap((pageContext) => this.cmsService.getPage(pageContext, this.shouldReload()).pipe(first(), switchMap((pageData) => pageData
                ? this.service.canActivatePage(pageContext, pageData, route, state)
                : this.service.canActivateNotFoundPage(pageContext, route, state)))))
            : of(false)));
    }
    /**
     * Returns whether we should reload the CMS page data, even when it was loaded before.
     */
    shouldReload() {
        return this.routingConfig.getLoadStrategy() !== "once" /* ONCE */;
    }
};
CmsPageGuard.guardName = 'CmsPageGuard';
CmsPageGuard.ctorParameters = () => [
    { type: RoutingService },
    { type: CmsService },
    { type: ProtectedRoutesGuard },
    { type: CmsPageGuardService },
    { type: RoutingConfigService }
];
CmsPageGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsPageGuard_Factory() { return new CmsPageGuard(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i1.ProtectedRoutesGuard), i0.ɵɵinject(i2.CmsPageGuardService), i0.ɵɵinject(i1.RoutingConfigService)); }, token: CmsPageGuard, providedIn: "root" });
CmsPageGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CmsPageGuard);
export { CmsPageGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL2d1YXJkcy9jbXMtcGFnZS5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQ0wseUJBQXlCLEVBQ3pCLFVBQVUsRUFDVixvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLG9CQUFvQixFQUNwQixjQUFjLEdBQ2YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFLL0QsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtJQUd2QixZQUNZLGNBQThCLEVBQzlCLFVBQXNCLEVBQ3RCLG9CQUEwQyxFQUMxQyxPQUE0QixFQUM1QixhQUFtQztRQUpuQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLFlBQU8sR0FBUCxPQUFPLENBQXFCO1FBQzVCLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtJQUM1QyxDQUFDO0lBRUo7Ozs7Ozs7Ozs7T0FVRztJQUNILFdBQVcsQ0FDVCxLQUFnQyxFQUNoQyxLQUEwQjtRQUUxQixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUN0RCxTQUFTLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUN4QixXQUFXO1lBQ1QsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQzNDLFNBQVMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQzVELEtBQUssRUFBRSxFQUNQLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQ3JCLFFBQVE7Z0JBQ04sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUMxQixXQUFXLEVBQ1gsUUFBUSxFQUNSLEtBQUssRUFDTCxLQUFLLENBQ047Z0JBQ0gsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQ2xDLFdBQVcsRUFDWCxLQUFLLEVBQ0wsS0FBSyxDQUNOLENBQ04sQ0FDRixDQUNGLENBQ0Y7WUFDSCxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUNkLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNLLFlBQVk7UUFDbEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxzQkFBMkIsQ0FBQztJQUN6RSxDQUFDO0NBQ0YsQ0FBQTtBQTVEUSxzQkFBUyxHQUFHLGNBQWMsQ0FBQzs7WUFHTixjQUFjO1lBQ2xCLFVBQVU7WUFDQSxvQkFBb0I7WUFDakMsbUJBQW1CO1lBQ2Isb0JBQW9COzs7QUFScEMsWUFBWTtJQUh4QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csWUFBWSxDQTZEeEI7U0E3RFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBVcmxUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gIENtc1NlcnZpY2UsXG4gIFByb3RlY3RlZFJvdXRlc0d1YXJkLFxuICBSb3V0ZUxvYWRTdHJhdGVneSxcbiAgUm91dGluZ0NvbmZpZ1NlcnZpY2UsXG4gIFJvdXRpbmdTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpcnN0LCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNQYWdlR3VhcmRTZXJ2aWNlIH0gZnJvbSAnLi9jbXMtcGFnZS1ndWFyZC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENtc1BhZ2VHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgc3RhdGljIGd1YXJkTmFtZSA9ICdDbXNQYWdlR3VhcmQnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHByb3RlY3RlZFJvdXRlc0d1YXJkOiBQcm90ZWN0ZWRSb3V0ZXNHdWFyZCxcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogQ21zUGFnZUd1YXJkU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ0NvbmZpZzogUm91dGluZ0NvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBUcmllcyB0byBsb2FkIHRoZSBDTVMgcGFnZSBkYXRhIGZvciB0aGUgYW50aWNpcGF0ZWQgcm91dGUgYW5kIHJldHVybnM6XG4gICAqIC0gYHRydWVgIC0gaWYgaXQgY2FuIGJlIGFjdGl2YXRlZFxuICAgKiAtIGBmYWxzZWAgLSBpZiBpdCBjYW5ub3QgYmUgYWN0aXZhdGVkXG4gICAqIC0gYFVybFRyZWVgIC0gaWYgdXNlciBzaG91bGQgYmUgcmVkaXJlY3RlZCB0byBhIGdpdmVuIGBVcmxUcmVlYFxuICAgKlxuICAgKiBJZiB0aGUgcm91dGUgY2FuIGJlIGFjdGl2YXRlZCwgaXQgZmlyZXMgYWRkaXRpb25hbCBjYWxjdWxhdGlvbnMgb24gdGhlIENNUyBjb21wb25lbnRzIHByZXNlbnQgb24gdGhpcyBDTVMgcGFnZSxcbiAgICogYmFzZWQgb24gdGhlaXIgY29uZmlndXJhdGlvbiAoYGNtc0NvbXBvbmVudHNgIGNvbmZpZykuXG4gICAqXG4gICAqIEZvciBtb3JlLCBzZWUgZG9jcyBvZiB0aGUgYENtc1BhZ2VHdWFyZFNlcnZpY2UuY2FuQWN0aXZhdGVQYWdlYC5cbiAgICovXG4gIGNhbkFjdGl2YXRlKFxuICAgIHJvdXRlOiBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcbiAgICByZXR1cm4gdGhpcy5wcm90ZWN0ZWRSb3V0ZXNHdWFyZC5jYW5BY3RpdmF0ZShyb3V0ZSkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoY2FuQWN0aXZhdGUpID0+XG4gICAgICAgIGNhbkFjdGl2YXRlXG4gICAgICAgICAgPyB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldE5leHRQYWdlQ29udGV4dCgpLnBpcGUoXG4gICAgICAgICAgICAgIHN3aXRjaE1hcCgocGFnZUNvbnRleHQpID0+XG4gICAgICAgICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLmdldFBhZ2UocGFnZUNvbnRleHQsIHRoaXMuc2hvdWxkUmVsb2FkKCkpLnBpcGUoXG4gICAgICAgICAgICAgICAgICBmaXJzdCgpLFxuICAgICAgICAgICAgICAgICAgc3dpdGNoTWFwKChwYWdlRGF0YSkgPT5cbiAgICAgICAgICAgICAgICAgICAgcGFnZURhdGFcbiAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuc2VydmljZS5jYW5BY3RpdmF0ZVBhZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VDb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnNlcnZpY2UuY2FuQWN0aXZhdGVOb3RGb3VuZFBhZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VDb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IG9mKGZhbHNlKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHdlIHNob3VsZCByZWxvYWQgdGhlIENNUyBwYWdlIGRhdGEsIGV2ZW4gd2hlbiBpdCB3YXMgbG9hZGVkIGJlZm9yZS5cbiAgICovXG4gIHByaXZhdGUgc2hvdWxkUmVsb2FkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRpbmdDb25maWcuZ2V0TG9hZFN0cmF0ZWd5KCkgIT09IFJvdXRlTG9hZFN0cmF0ZWd5Lk9OQ0U7XG4gIH1cbn1cbiJdfQ==