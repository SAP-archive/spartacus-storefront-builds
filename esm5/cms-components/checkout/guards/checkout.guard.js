import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { ActiveCartService, RoutingConfigService } from '@spartacus/core';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CheckoutStepType } from '../model/checkout-step.model';
import { CheckoutConfigService } from '../services/checkout-config.service';
import { ExpressCheckoutService } from '../services/express-checkout.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@spartacus/core";
import * as i3 from "../services/checkout-config.service";
import * as i4 from "../services/express-checkout.service";
var CheckoutGuard = /** @class */ (function () {
    function CheckoutGuard(router, routingConfigService, checkoutConfigService, expressCheckoutService, activeCartService) {
        this.router = router;
        this.routingConfigService = routingConfigService;
        this.checkoutConfigService = checkoutConfigService;
        this.expressCheckoutService = expressCheckoutService;
        this.activeCartService = activeCartService;
        this.firstStep$ = of(this.router.parseUrl(this.routingConfigService.getRouteConfig(this.checkoutConfigService.getFirstCheckoutStepRoute()).paths[0]));
    }
    CheckoutGuard.prototype.canActivate = function () {
        var _this = this;
        if (this.checkoutConfigService.isExpressCheckout() &&
            !this.activeCartService.isGuestCart()) {
            return this.expressCheckoutService.trySetDefaultCheckoutDetails().pipe(switchMap(function (expressCheckoutPossible) {
                return expressCheckoutPossible
                    ? of(_this.router.parseUrl(_this.routingConfigService.getRouteConfig(_this.checkoutConfigService.getCheckoutStepRoute(CheckoutStepType.REVIEW_ORDER)).paths[0]))
                    : _this.firstStep$;
            }));
        }
        return this.firstStep$;
    };
    CheckoutGuard.ctorParameters = function () { return [
        { type: Router },
        { type: RoutingConfigService },
        { type: CheckoutConfigService },
        { type: ExpressCheckoutService },
        { type: ActiveCartService }
    ]; };
    CheckoutGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutGuard_Factory() { return new CheckoutGuard(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.RoutingConfigService), i0.ɵɵinject(i3.CheckoutConfigService), i0.ɵɵinject(i4.ExpressCheckoutService), i0.ɵɵinject(i2.ActiveCartService)); }, token: CheckoutGuard, providedIn: "root" });
    CheckoutGuard = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CheckoutGuard);
    return CheckoutGuard;
}());
export { CheckoutGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9ndWFyZHMvY2hlY2tvdXQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUUsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7OztBQUs5RTtJQUdFLHVCQUNZLE1BQWMsRUFDZCxvQkFBMEMsRUFDMUMscUJBQTRDLEVBQzVDLHNCQUE4QyxFQUM5QyxpQkFBb0M7UUFKcEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1QywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFFOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUNsQixJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUN0QyxJQUFJLENBQUMscUJBQXFCLENBQUMseUJBQXlCLEVBQUUsQ0FDdkQsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ1gsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFBQSxpQkFzQkM7UUFyQkMsSUFDRSxJQUFJLENBQUMscUJBQXFCLENBQUMsaUJBQWlCLEVBQUU7WUFDOUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEVBQ3JDO1lBQ0EsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsNEJBQTRCLEVBQUUsQ0FBQyxJQUFJLENBQ3BFLFNBQVMsQ0FBQyxVQUFDLHVCQUFnQztnQkFDekMsT0FBTyx1QkFBdUI7b0JBQzVCLENBQUMsQ0FBQyxFQUFFLENBQ0EsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQ2xCLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQ3RDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxvQkFBb0IsQ0FDN0MsZ0JBQWdCLENBQUMsWUFBWSxDQUM5QixDQUNGLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUNYLENBQ0Y7b0JBQ0gsQ0FBQyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUM7WUFDdEIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztTQUNIO1FBQ0QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7O2dCQXJDbUIsTUFBTTtnQkFDUSxvQkFBb0I7Z0JBQ25CLHFCQUFxQjtnQkFDcEIsc0JBQXNCO2dCQUMzQixpQkFBaUI7OztJQVJyQyxhQUFhO1FBSHpCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxhQUFhLENBMEN6Qjt3QkF0REQ7Q0FzREMsQUExQ0QsSUEwQ0M7U0ExQ1ksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXIsIFVybFRyZWUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWN0aXZlQ2FydFNlcnZpY2UsIFJvdXRpbmdDb25maWdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDaGVja291dFN0ZXBUeXBlIH0gZnJvbSAnLi4vbW9kZWwvY2hlY2tvdXQtc3RlcC5tb2RlbCc7XG5pbXBvcnQgeyBDaGVja291dENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jaGVja291dC1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBFeHByZXNzQ2hlY2tvdXRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZXhwcmVzcy1jaGVja291dC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0R3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgZmlyc3RTdGVwJDogT2JzZXJ2YWJsZTxVcmxUcmVlPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdDb25maWdTZXJ2aWNlOiBSb3V0aW5nQ29uZmlnU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRDb25maWdTZXJ2aWNlOiBDaGVja291dENvbmZpZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGV4cHJlc3NDaGVja291dFNlcnZpY2U6IEV4cHJlc3NDaGVja291dFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZVxuICApIHtcbiAgICB0aGlzLmZpcnN0U3RlcCQgPSBvZihcbiAgICAgIHRoaXMucm91dGVyLnBhcnNlVXJsKFxuICAgICAgICB0aGlzLnJvdXRpbmdDb25maWdTZXJ2aWNlLmdldFJvdXRlQ29uZmlnKFxuICAgICAgICAgIHRoaXMuY2hlY2tvdXRDb25maWdTZXJ2aWNlLmdldEZpcnN0Q2hlY2tvdXRTdGVwUm91dGUoKVxuICAgICAgICApLnBhdGhzWzBdXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGNhbkFjdGl2YXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZS5pc0V4cHJlc3NDaGVja291dCgpICYmXG4gICAgICAhdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5pc0d1ZXN0Q2FydCgpXG4gICAgKSB7XG4gICAgICByZXR1cm4gdGhpcy5leHByZXNzQ2hlY2tvdXRTZXJ2aWNlLnRyeVNldERlZmF1bHRDaGVja291dERldGFpbHMoKS5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoKGV4cHJlc3NDaGVja291dFBvc3NpYmxlOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGV4cHJlc3NDaGVja291dFBvc3NpYmxlXG4gICAgICAgICAgICA/IG9mKFxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLnBhcnNlVXJsKFxuICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nQ29uZmlnU2VydmljZS5nZXRSb3V0ZUNvbmZpZyhcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja291dENvbmZpZ1NlcnZpY2UuZ2V0Q2hlY2tvdXRTdGVwUm91dGUoXG4gICAgICAgICAgICAgICAgICAgICAgQ2hlY2tvdXRTdGVwVHlwZS5SRVZJRVdfT1JERVJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKS5wYXRoc1swXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiB0aGlzLmZpcnN0U3RlcCQ7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5maXJzdFN0ZXAkO1xuICB9XG59XG4iXX0=