import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { CmsActivatedRouteSnapshot, CmsService, ProtectedRoutesGuard, RouteLoadStrategy, RoutingConfigService, RoutingService, } from '@spartacus/core';
import { of } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';
import { CmsPageGuardService } from './cms-page-guard.service';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "./cms-page-guard.service";
var CmsPageGuard = /** @class */ (function () {
    function CmsPageGuard(routingService, cmsService, protectedRoutesGuard, service, routingConfig) {
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
    CmsPageGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.protectedRoutesGuard.canActivate(route).pipe(switchMap(function (canActivate) {
            return canActivate
                ? _this.routingService.getNextPageContext().pipe(switchMap(function (pageContext) {
                    return _this.cmsService.getPage(pageContext, _this.shouldReload()).pipe(first(), switchMap(function (pageData) {
                        return pageData
                            ? _this.service.canActivatePage(pageContext, pageData, route, state)
                            : _this.service.canActivateNotFoundPage(pageContext, route, state);
                    }));
                }))
                : of(false);
        }));
    };
    /**
     * Returns whether we should reload the CMS page data, even when it was loaded before.
     */
    CmsPageGuard.prototype.shouldReload = function () {
        return this.routingConfig.getLoadStrategy() !== "once" /* ONCE */;
    };
    CmsPageGuard.guardName = 'CmsPageGuard';
    CmsPageGuard.ctorParameters = function () { return [
        { type: RoutingService },
        { type: CmsService },
        { type: ProtectedRoutesGuard },
        { type: CmsPageGuardService },
        { type: RoutingConfigService }
    ]; };
    CmsPageGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsPageGuard_Factory() { return new CmsPageGuard(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i1.ProtectedRoutesGuard), i0.ɵɵinject(i2.CmsPageGuardService), i0.ɵɵinject(i1.RoutingConfigService)); }, token: CmsPageGuard, providedIn: "root" });
    CmsPageGuard = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CmsPageGuard);
    return CmsPageGuard;
}());
export { CmsPageGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL2d1YXJkcy9jbXMtcGFnZS5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQ0wseUJBQXlCLEVBQ3pCLFVBQVUsRUFDVixvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLG9CQUFvQixFQUNwQixjQUFjLEdBQ2YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFLL0Q7SUFHRSxzQkFDWSxjQUE4QixFQUM5QixVQUFzQixFQUN0QixvQkFBMEMsRUFDMUMsT0FBNEIsRUFDNUIsYUFBbUM7UUFKbkMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxZQUFPLEdBQVAsT0FBTyxDQUFxQjtRQUM1QixrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7SUFDNUMsQ0FBQztJQUVKOzs7Ozs7Ozs7O09BVUc7SUFDSCxrQ0FBVyxHQUFYLFVBQ0UsS0FBZ0MsRUFDaEMsS0FBMEI7UUFGNUIsaUJBK0JDO1FBM0JDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQ3RELFNBQVMsQ0FBQyxVQUFDLFdBQVc7WUFDcEIsT0FBQSxXQUFXO2dCQUNULENBQUMsQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixFQUFFLENBQUMsSUFBSSxDQUMzQyxTQUFTLENBQUMsVUFBQyxXQUFXO29CQUNwQixPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQzVELEtBQUssRUFBRSxFQUNQLFNBQVMsQ0FBQyxVQUFDLFFBQVE7d0JBQ2pCLE9BQUEsUUFBUTs0QkFDTixDQUFDLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQzFCLFdBQVcsRUFDWCxRQUFRLEVBQ1IsS0FBSyxFQUNMLEtBQUssQ0FDTjs0QkFDSCxDQUFDLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FDbEMsV0FBVyxFQUNYLEtBQUssRUFDTCxLQUFLLENBQ047b0JBWEwsQ0FXSyxDQUNOLENBQ0Y7Z0JBaEJELENBZ0JDLENBQ0YsQ0FDRjtnQkFDSCxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztRQXRCYixDQXNCYSxDQUNkLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNLLG1DQUFZLEdBQXBCO1FBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxzQkFBMkIsQ0FBQztJQUN6RSxDQUFDO0lBM0RNLHNCQUFTLEdBQUcsY0FBYyxDQUFDOztnQkFHTixjQUFjO2dCQUNsQixVQUFVO2dCQUNBLG9CQUFvQjtnQkFDakMsbUJBQW1CO2dCQUNiLG9CQUFvQjs7O0lBUnBDLFlBQVk7UUFIeEIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLFlBQVksQ0E2RHhCO3VCQTlFRDtDQThFQyxBQTdERCxJQTZEQztTQTdEWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlclN0YXRlU25hcHNob3QsIFVybFRyZWUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgQ21zU2VydmljZSxcbiAgUHJvdGVjdGVkUm91dGVzR3VhcmQsXG4gIFJvdXRlTG9hZFN0cmF0ZWd5LFxuICBSb3V0aW5nQ29uZmlnU2VydmljZSxcbiAgUm91dGluZ1NlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlyc3QsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc1BhZ2VHdWFyZFNlcnZpY2UgfSBmcm9tICcuL2Ntcy1wYWdlLWd1YXJkLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ21zUGFnZUd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBzdGF0aWMgZ3VhcmROYW1lID0gJ0Ntc1BhZ2VHdWFyZCc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcHJvdGVjdGVkUm91dGVzR3VhcmQ6IFByb3RlY3RlZFJvdXRlc0d1YXJkLFxuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBDbXNQYWdlR3VhcmRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nQ29uZmlnOiBSb3V0aW5nQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFRyaWVzIHRvIGxvYWQgdGhlIENNUyBwYWdlIGRhdGEgZm9yIHRoZSBhbnRpY2lwYXRlZCByb3V0ZSBhbmQgcmV0dXJuczpcbiAgICogLSBgdHJ1ZWAgLSBpZiBpdCBjYW4gYmUgYWN0aXZhdGVkXG4gICAqIC0gYGZhbHNlYCAtIGlmIGl0IGNhbm5vdCBiZSBhY3RpdmF0ZWRcbiAgICogLSBgVXJsVHJlZWAgLSBpZiB1c2VyIHNob3VsZCBiZSByZWRpcmVjdGVkIHRvIGEgZ2l2ZW4gYFVybFRyZWVgXG4gICAqXG4gICAqIElmIHRoZSByb3V0ZSBjYW4gYmUgYWN0aXZhdGVkLCBpdCBmaXJlcyBhZGRpdGlvbmFsIGNhbGN1bGF0aW9ucyBvbiB0aGUgQ01TIGNvbXBvbmVudHMgcHJlc2VudCBvbiB0aGlzIENNUyBwYWdlLFxuICAgKiBiYXNlZCBvbiB0aGVpciBjb25maWd1cmF0aW9uIChgY21zQ29tcG9uZW50c2AgY29uZmlnKS5cbiAgICpcbiAgICogRm9yIG1vcmUsIHNlZSBkb2NzIG9mIHRoZSBgQ21zUGFnZUd1YXJkU2VydmljZS5jYW5BY3RpdmF0ZVBhZ2VgLlxuICAgKi9cbiAgY2FuQWN0aXZhdGUoXG4gICAgcm91dGU6IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIHJldHVybiB0aGlzLnByb3RlY3RlZFJvdXRlc0d1YXJkLmNhbkFjdGl2YXRlKHJvdXRlKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKChjYW5BY3RpdmF0ZSkgPT5cbiAgICAgICAgY2FuQWN0aXZhdGVcbiAgICAgICAgICA/IHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0TmV4dFBhZ2VDb250ZXh0KCkucGlwZShcbiAgICAgICAgICAgICAgc3dpdGNoTWFwKChwYWdlQ29udGV4dCkgPT5cbiAgICAgICAgICAgICAgICB0aGlzLmNtc1NlcnZpY2UuZ2V0UGFnZShwYWdlQ29udGV4dCwgdGhpcy5zaG91bGRSZWxvYWQoKSkucGlwZShcbiAgICAgICAgICAgICAgICAgIGZpcnN0KCksXG4gICAgICAgICAgICAgICAgICBzd2l0Y2hNYXAoKHBhZ2VEYXRhKSA9PlxuICAgICAgICAgICAgICAgICAgICBwYWdlRGF0YVxuICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5zZXJ2aWNlLmNhbkFjdGl2YXRlUGFnZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZUNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VEYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuc2VydmljZS5jYW5BY3RpdmF0ZU5vdEZvdW5kUGFnZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZUNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogb2YoZmFsc2UpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgQ01TIHBhZ2UgZGF0YSwgZXZlbiB3aGVuIGl0IHdhcyBsb2FkZWQgYmVmb3JlLlxuICAgKi9cbiAgcHJpdmF0ZSBzaG91bGRSZWxvYWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ0NvbmZpZy5nZXRMb2FkU3RyYXRlZ3koKSAhPT0gUm91dGVMb2FkU3RyYXRlZ3kuT05DRTtcbiAgfVxufVxuIl19