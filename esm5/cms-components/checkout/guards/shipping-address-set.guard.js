import { __decorate } from "tslib";
import { Injectable, isDevMode } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Address, RoutingConfigService } from '@spartacus/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CheckoutStepType } from '../model/checkout-step.model';
import { CheckoutStepService } from '../services/checkout-step.service';
import { CheckoutDetailsService } from '../services/checkout-details.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/checkout-details.service";
import * as i2 from "../services/checkout-step.service";
import * as i3 from "@spartacus/core";
import * as i4 from "@angular/router";
var ShippingAddressSetGuard = /** @class */ (function () {
    function ShippingAddressSetGuard(checkoutDetailsService, checkoutStepService, routingConfigService, router) {
        this.checkoutDetailsService = checkoutDetailsService;
        this.checkoutStepService = checkoutStepService;
        this.routingConfigService = routingConfigService;
        this.router = router;
    }
    ShippingAddressSetGuard.prototype.canActivate = function () {
        var _this = this;
        var checkoutStep = this.checkoutStepService.getCheckoutStep(CheckoutStepType.SHIPPING_ADDRESS);
        if (!checkoutStep && isDevMode()) {
            console.warn("Missing step with type " + CheckoutStepType.SHIPPING_ADDRESS + " in checkout configuration.");
        }
        if (checkoutStep && checkoutStep.disabled) {
            return of(true);
        }
        return this.checkoutDetailsService
            .getDeliveryAddress()
            .pipe(map(function (deliveryAddress) {
            return deliveryAddress && Object.keys(deliveryAddress).length
                ? true
                : _this.router.parseUrl(checkoutStep &&
                    _this.routingConfigService.getRouteConfig(checkoutStep.routeName).paths[0]);
        }));
    };
    ShippingAddressSetGuard.ctorParameters = function () { return [
        { type: CheckoutDetailsService },
        { type: CheckoutStepService },
        { type: RoutingConfigService },
        { type: Router }
    ]; };
    ShippingAddressSetGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function ShippingAddressSetGuard_Factory() { return new ShippingAddressSetGuard(i0.ɵɵinject(i1.CheckoutDetailsService), i0.ɵɵinject(i2.CheckoutStepService), i0.ɵɵinject(i3.RoutingConfigService), i0.ɵɵinject(i4.Router)); }, token: ShippingAddressSetGuard, providedIn: "root" });
    ShippingAddressSetGuard = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], ShippingAddressSetGuard);
    return ShippingAddressSetGuard;
}());
export { ShippingAddressSetGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctYWRkcmVzcy1zZXQuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9ndWFyZHMvc2hpcHBpbmctYWRkcmVzcy1zZXQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRSxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQWdCLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7OztBQUs5RTtJQUNFLGlDQUNVLHNCQUE4QyxFQUM5QyxtQkFBd0MsRUFDeEMsb0JBQTBDLEVBQzFDLE1BQWM7UUFIZCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3JCLENBQUM7SUFFSiw2Q0FBVyxHQUFYO1FBQUEsaUJBNkJDO1FBNUJDLElBQU0sWUFBWSxHQUFpQixJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUN6RSxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FDbEMsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLElBQUksU0FBUyxFQUFFLEVBQUU7WUFDaEMsT0FBTyxDQUFDLElBQUksQ0FDViw0QkFBMEIsZ0JBQWdCLENBQUMsZ0JBQWdCLGdDQUE2QixDQUN6RixDQUFDO1NBQ0g7UUFFRCxJQUFJLFlBQVksSUFBSSxZQUFZLENBQUMsUUFBUSxFQUFFO1lBQ3pDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pCO1FBRUQsT0FBTyxJQUFJLENBQUMsc0JBQXNCO2FBQy9CLGtCQUFrQixFQUFFO2FBQ3BCLElBQUksQ0FDSCxHQUFHLENBQUMsVUFBQyxlQUF3QjtZQUMzQixPQUFBLGVBQWUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE1BQU07Z0JBQ3BELENBQUMsQ0FBQyxJQUFJO2dCQUNOLENBQUMsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDbEIsWUFBWTtvQkFDVixLQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUN0QyxZQUFZLENBQUMsU0FBUyxDQUN2QixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDYjtRQVBMLENBT0ssQ0FDTixDQUNGLENBQUM7SUFDTixDQUFDOztnQkFuQ2lDLHNCQUFzQjtnQkFDekIsbUJBQW1CO2dCQUNsQixvQkFBb0I7Z0JBQ2xDLE1BQU07OztJQUxiLHVCQUF1QjtRQUhuQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csdUJBQXVCLENBc0NuQztrQ0FsREQ7Q0FrREMsQUF0Q0QsSUFzQ0M7U0F0Q1ksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyLCBVcmxUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFkZHJlc3MsIFJvdXRpbmdDb25maWdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDaGVja291dFN0ZXAsIENoZWNrb3V0U3RlcFR5cGUgfSBmcm9tICcuLi9tb2RlbC9jaGVja291dC1zdGVwLm1vZGVsJztcbmltcG9ydCB7IENoZWNrb3V0U3RlcFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jaGVja291dC1zdGVwLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2hlY2tvdXREZXRhaWxzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NoZWNrb3V0LWRldGFpbHMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTaGlwcGluZ0FkZHJlc3NTZXRHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjaGVja291dERldGFpbHNTZXJ2aWNlOiBDaGVja291dERldGFpbHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2hlY2tvdXRTdGVwU2VydmljZTogQ2hlY2tvdXRTdGVwU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdDb25maWdTZXJ2aWNlOiBSb3V0aW5nQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICkge31cblxuICBjYW5BY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgY29uc3QgY2hlY2tvdXRTdGVwOiBDaGVja291dFN0ZXAgPSB0aGlzLmNoZWNrb3V0U3RlcFNlcnZpY2UuZ2V0Q2hlY2tvdXRTdGVwKFxuICAgICAgQ2hlY2tvdXRTdGVwVHlwZS5TSElQUElOR19BRERSRVNTXG4gICAgKTtcblxuICAgIGlmICghY2hlY2tvdXRTdGVwICYmIGlzRGV2TW9kZSgpKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBNaXNzaW5nIHN0ZXAgd2l0aCB0eXBlICR7Q2hlY2tvdXRTdGVwVHlwZS5TSElQUElOR19BRERSRVNTfSBpbiBjaGVja291dCBjb25maWd1cmF0aW9uLmBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrb3V0U3RlcCAmJiBjaGVja291dFN0ZXAuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybiBvZih0cnVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jaGVja291dERldGFpbHNTZXJ2aWNlXG4gICAgICAuZ2V0RGVsaXZlcnlBZGRyZXNzKClcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKGRlbGl2ZXJ5QWRkcmVzczogQWRkcmVzcykgPT5cbiAgICAgICAgICBkZWxpdmVyeUFkZHJlc3MgJiYgT2JqZWN0LmtleXMoZGVsaXZlcnlBZGRyZXNzKS5sZW5ndGhcbiAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgOiB0aGlzLnJvdXRlci5wYXJzZVVybChcbiAgICAgICAgICAgICAgICBjaGVja291dFN0ZXAgJiZcbiAgICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ0NvbmZpZ1NlcnZpY2UuZ2V0Um91dGVDb25maWcoXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrb3V0U3RlcC5yb3V0ZU5hbWVcbiAgICAgICAgICAgICAgICAgICkucGF0aHNbMF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICB9XG59XG4iXX0=