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
    function CheckoutGuard(router, routingConfigService, checkoutConfigService, expressCheckoutService, cartService) {
        this.router = router;
        this.routingConfigService = routingConfigService;
        this.checkoutConfigService = checkoutConfigService;
        this.expressCheckoutService = expressCheckoutService;
        this.cartService = cartService;
        this.firstStep$ = of(this.router.parseUrl(this.routingConfigService.getRouteConfig(this.checkoutConfigService.getFirstCheckoutStepRoute()).paths[0]));
    }
    CheckoutGuard.prototype.canActivate = function () {
        var _this = this;
        if (this.checkoutConfigService.isExpressCheckout() &&
            !this.cartService.isGuestCart()) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9ndWFyZHMvY2hlY2tvdXQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUUsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7OztBQUs5RTtJQUdFLHVCQUNVLE1BQWMsRUFDZCxvQkFBMEMsRUFDeEMscUJBQTRDLEVBQzVDLHNCQUE4QyxFQUM5QyxXQUE4QjtRQUpoQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUN4QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDOUMsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO1FBRXhDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDbEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FDdEMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLHlCQUF5QixFQUFFLENBQ3ZELENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUNYLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxtQ0FBVyxHQUFYO1FBQUEsaUJBc0JDO1FBckJDLElBQ0UsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixFQUFFO1lBQzlDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsRUFDL0I7WUFDQSxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDLElBQUksQ0FDcEUsU0FBUyxDQUFDLFVBQUMsdUJBQWdDO2dCQUN6QyxPQUFPLHVCQUF1QjtvQkFDNUIsQ0FBQyxDQUFDLEVBQUUsQ0FDQSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDbEIsS0FBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FDdEMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLG9CQUFvQixDQUM3QyxnQkFBZ0IsQ0FBQyxZQUFZLENBQzlCLENBQ0YsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ1gsQ0FDRjtvQkFDSCxDQUFDLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQztZQUN0QixDQUFDLENBQUMsQ0FDSCxDQUFDO1NBQ0g7UUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7Z0JBckNpQixNQUFNO2dCQUNRLG9CQUFvQjtnQkFDakIscUJBQXFCO2dCQUNwQixzQkFBc0I7Z0JBQ2pDLGlCQUFpQjs7O0lBUi9CLGFBQWE7UUFIekIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGFBQWEsQ0EwQ3pCO3dCQXRERDtDQXNEQyxBQTFDRCxJQTBDQztTQTFDWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlciwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBY3RpdmVDYXJ0U2VydmljZSwgUm91dGluZ0NvbmZpZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENoZWNrb3V0U3RlcFR5cGUgfSBmcm9tICcuLi9tb2RlbC9jaGVja291dC1zdGVwLm1vZGVsJztcbmltcG9ydCB7IENoZWNrb3V0Q29uZmlnU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NoZWNrb3V0LWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IEV4cHJlc3NDaGVja291dFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9leHByZXNzLWNoZWNrb3V0LnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBmaXJzdFN0ZXAkOiBPYnNlcnZhYmxlPFVybFRyZWU+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSByb3V0aW5nQ29uZmlnU2VydmljZTogUm91dGluZ0NvbmZpZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0Q29uZmlnU2VydmljZTogQ2hlY2tvdXRDb25maWdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBleHByZXNzQ2hlY2tvdXRTZXJ2aWNlOiBFeHByZXNzQ2hlY2tvdXRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5maXJzdFN0ZXAkID0gb2YoXG4gICAgICB0aGlzLnJvdXRlci5wYXJzZVVybChcbiAgICAgICAgdGhpcy5yb3V0aW5nQ29uZmlnU2VydmljZS5nZXRSb3V0ZUNvbmZpZyhcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZS5nZXRGaXJzdENoZWNrb3V0U3RlcFJvdXRlKClcbiAgICAgICAgKS5wYXRoc1swXVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBjYW5BY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5jaGVja291dENvbmZpZ1NlcnZpY2UuaXNFeHByZXNzQ2hlY2tvdXQoKSAmJlxuICAgICAgIXRoaXMuY2FydFNlcnZpY2UuaXNHdWVzdENhcnQoKVxuICAgICkge1xuICAgICAgcmV0dXJuIHRoaXMuZXhwcmVzc0NoZWNrb3V0U2VydmljZS50cnlTZXREZWZhdWx0Q2hlY2tvdXREZXRhaWxzKCkucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKChleHByZXNzQ2hlY2tvdXRQb3NzaWJsZTogYm9vbGVhbikgPT4ge1xuICAgICAgICAgIHJldHVybiBleHByZXNzQ2hlY2tvdXRQb3NzaWJsZVxuICAgICAgICAgICAgPyBvZihcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5wYXJzZVVybChcbiAgICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ0NvbmZpZ1NlcnZpY2UuZ2V0Um91dGVDb25maWcoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tvdXRDb25maWdTZXJ2aWNlLmdldENoZWNrb3V0U3RlcFJvdXRlKFxuICAgICAgICAgICAgICAgICAgICAgIENoZWNrb3V0U3RlcFR5cGUuUkVWSUVXX09SREVSXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICkucGF0aHNbMF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogdGhpcy5maXJzdFN0ZXAkO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZmlyc3RTdGVwJDtcbiAgfVxufVxuIl19