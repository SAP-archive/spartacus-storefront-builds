import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { ActiveCartService, RoutingConfigService } from '@spartacus/core';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CheckoutStepType } from '../model/checkout-step.model';
import { CheckoutConfigService } from '../services/checkout-config.service';
import { CheckoutStepService } from '../services/checkout-step.service';
import { ExpressCheckoutService } from '../services/express-checkout.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@spartacus/core";
import * as i3 from "../services/checkout-config.service";
import * as i4 from "../services/checkout-step.service";
import * as i5 from "../services/express-checkout.service";
var CheckoutGuard = /** @class */ (function () {
    function CheckoutGuard(router, routingConfigService, checkoutConfigService, checkoutStepService, expressCheckoutService, activeCartService) {
        this.router = router;
        this.routingConfigService = routingConfigService;
        this.checkoutConfigService = checkoutConfigService;
        this.checkoutStepService = checkoutStepService;
        this.expressCheckoutService = expressCheckoutService;
        this.activeCartService = activeCartService;
        this.firstStep$ = of(this.router.parseUrl(this.routingConfigService.getRouteConfig(this.checkoutStepService.getFirstCheckoutStepRoute()).paths[0]));
    }
    CheckoutGuard.prototype.canActivate = function () {
        var _this = this;
        if (this.checkoutConfigService.isExpressCheckout() &&
            !this.activeCartService.isGuestCart()) {
            return this.expressCheckoutService.trySetDefaultCheckoutDetails().pipe(switchMap(function (expressCheckoutPossible) {
                return expressCheckoutPossible
                    ? of(_this.router.parseUrl(_this.routingConfigService.getRouteConfig(_this.checkoutStepService.getCheckoutStepRoute(CheckoutStepType.REVIEW_ORDER)).paths[0]))
                    : _this.firstStep$;
            }));
        }
        return this.firstStep$;
    };
    CheckoutGuard.ctorParameters = function () { return [
        { type: Router },
        { type: RoutingConfigService },
        { type: CheckoutConfigService },
        { type: CheckoutStepService },
        { type: ExpressCheckoutService },
        { type: ActiveCartService }
    ]; };
    CheckoutGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutGuard_Factory() { return new CheckoutGuard(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.RoutingConfigService), i0.ɵɵinject(i3.CheckoutConfigService), i0.ɵɵinject(i4.CheckoutStepService), i0.ɵɵinject(i5.ExpressCheckoutService), i0.ɵɵinject(i2.ActiveCartService)); }, token: CheckoutGuard, providedIn: "root" });
    CheckoutGuard = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CheckoutGuard);
    return CheckoutGuard;
}());
export { CheckoutGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9ndWFyZHMvY2hlY2tvdXQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUUsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7Ozs7QUFLOUU7SUFHRSx1QkFDWSxNQUFjLEVBQ2Qsb0JBQTBDLEVBQzFDLHFCQUE0QyxFQUM1QyxtQkFBd0MsRUFDeEMsc0JBQThDLEVBQzlDLGlCQUFvQztRQUxwQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUM5QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBRTlDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDbEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FDdEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLHlCQUF5QixFQUFFLENBQ3JELENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUNYLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxtQ0FBVyxHQUFYO1FBQUEsaUJBc0JDO1FBckJDLElBQ0UsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixFQUFFO1lBQzlDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxFQUNyQztZQUNBLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLDRCQUE0QixFQUFFLENBQUMsSUFBSSxDQUNwRSxTQUFTLENBQUMsVUFBQyx1QkFBZ0M7Z0JBQ3pDLE9BQU8sdUJBQXVCO29CQUM1QixDQUFDLENBQUMsRUFBRSxDQUNBLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUNsQixLQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUN0QyxLQUFJLENBQUMsbUJBQW1CLENBQUMsb0JBQW9CLENBQzNDLGdCQUFnQixDQUFDLFlBQVksQ0FDOUIsQ0FDRixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDWCxDQUNGO29CQUNILENBQUMsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxDQUNILENBQUM7U0FDSDtRQUNELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOztnQkF0Q21CLE1BQU07Z0JBQ1Esb0JBQW9CO2dCQUNuQixxQkFBcUI7Z0JBQ3ZCLG1CQUFtQjtnQkFDaEIsc0JBQXNCO2dCQUMzQixpQkFBaUI7OztJQVRyQyxhQUFhO1FBSHpCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxhQUFhLENBMkN6Qjt3QkF4REQ7Q0F3REMsQUEzQ0QsSUEyQ0M7U0EzQ1ksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXIsIFVybFRyZWUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWN0aXZlQ2FydFNlcnZpY2UsIFJvdXRpbmdDb25maWdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDaGVja291dFN0ZXBUeXBlIH0gZnJvbSAnLi4vbW9kZWwvY2hlY2tvdXQtc3RlcC5tb2RlbCc7XG5pbXBvcnQgeyBDaGVja291dENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jaGVja291dC1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBDaGVja291dFN0ZXBTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2hlY2tvdXQtc3RlcC5zZXJ2aWNlJztcbmltcG9ydCB7IEV4cHJlc3NDaGVja291dFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9leHByZXNzLWNoZWNrb3V0LnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBmaXJzdFN0ZXAkOiBPYnNlcnZhYmxlPFVybFRyZWU+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlcixcbiAgICBwcm90ZWN0ZWQgcm91dGluZ0NvbmZpZ1NlcnZpY2U6IFJvdXRpbmdDb25maWdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dENvbmZpZ1NlcnZpY2U6IENoZWNrb3V0Q29uZmlnU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTdGVwU2VydmljZTogQ2hlY2tvdXRTdGVwU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZXhwcmVzc0NoZWNrb3V0U2VydmljZTogRXhwcmVzc0NoZWNrb3V0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuZmlyc3RTdGVwJCA9IG9mKFxuICAgICAgdGhpcy5yb3V0ZXIucGFyc2VVcmwoXG4gICAgICAgIHRoaXMucm91dGluZ0NvbmZpZ1NlcnZpY2UuZ2V0Um91dGVDb25maWcoXG4gICAgICAgICAgdGhpcy5jaGVja291dFN0ZXBTZXJ2aWNlLmdldEZpcnN0Q2hlY2tvdXRTdGVwUm91dGUoKVxuICAgICAgICApLnBhdGhzWzBdXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGNhbkFjdGl2YXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZS5pc0V4cHJlc3NDaGVja291dCgpICYmXG4gICAgICAhdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5pc0d1ZXN0Q2FydCgpXG4gICAgKSB7XG4gICAgICByZXR1cm4gdGhpcy5leHByZXNzQ2hlY2tvdXRTZXJ2aWNlLnRyeVNldERlZmF1bHRDaGVja291dERldGFpbHMoKS5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoKGV4cHJlc3NDaGVja291dFBvc3NpYmxlOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGV4cHJlc3NDaGVja291dFBvc3NpYmxlXG4gICAgICAgICAgICA/IG9mKFxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLnBhcnNlVXJsKFxuICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nQ29uZmlnU2VydmljZS5nZXRSb3V0ZUNvbmZpZyhcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja291dFN0ZXBTZXJ2aWNlLmdldENoZWNrb3V0U3RlcFJvdXRlKFxuICAgICAgICAgICAgICAgICAgICAgIENoZWNrb3V0U3RlcFR5cGUuUkVWSUVXX09SREVSXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICkucGF0aHNbMF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogdGhpcy5maXJzdFN0ZXAkO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZmlyc3RTdGVwJDtcbiAgfVxufVxuIl19