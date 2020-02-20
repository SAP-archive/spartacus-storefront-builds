import { __decorate } from "tslib";
import { Injectable, isDevMode } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { RoutingConfigService } from '@spartacus/core';
import { map } from 'rxjs/operators';
import { CheckoutStepType } from '../model/checkout-step.model';
import { CheckoutConfigService } from '../services/checkout-config.service';
import { CheckoutDetailsService } from '../services/checkout-details.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/checkout-details.service";
import * as i2 from "../services/checkout-config.service";
import * as i3 from "@spartacus/core";
import * as i4 from "@angular/router";
var PaymentDetailsSetGuard = /** @class */ (function () {
    function PaymentDetailsSetGuard(checkoutDetailsService, checkoutConfigService, routingConfigService, router) {
        this.checkoutDetailsService = checkoutDetailsService;
        this.checkoutConfigService = checkoutConfigService;
        this.routingConfigService = routingConfigService;
        this.router = router;
    }
    PaymentDetailsSetGuard.prototype.canActivate = function () {
        var _this = this;
        var checkoutStep = this.checkoutConfigService.getCheckoutStep(CheckoutStepType.PAYMENT_DETAILS);
        if (!checkoutStep && isDevMode()) {
            console.warn("Missing step with type " + CheckoutStepType.PAYMENT_DETAILS + " in checkout configuration.");
        }
        return this.checkoutDetailsService
            .getPaymentDetails()
            .pipe(map(function (paymentDetails) {
            return paymentDetails && Object.keys(paymentDetails).length !== 0
                ? true
                : _this.router.parseUrl(checkoutStep &&
                    _this.routingConfigService.getRouteConfig(checkoutStep.routeName).paths[0]);
        }));
    };
    PaymentDetailsSetGuard.ctorParameters = function () { return [
        { type: CheckoutDetailsService },
        { type: CheckoutConfigService },
        { type: RoutingConfigService },
        { type: Router }
    ]; };
    PaymentDetailsSetGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function PaymentDetailsSetGuard_Factory() { return new PaymentDetailsSetGuard(i0.ɵɵinject(i1.CheckoutDetailsService), i0.ɵɵinject(i2.CheckoutConfigService), i0.ɵɵinject(i3.RoutingConfigService), i0.ɵɵinject(i4.Router)); }, token: PaymentDetailsSetGuard, providedIn: "root" });
    PaymentDetailsSetGuard = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], PaymentDetailsSetGuard);
    return PaymentDetailsSetGuard;
}());
export { PaymentDetailsSetGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1kZXRhaWxzLXNldC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NoZWNrb3V0L2d1YXJkcy9wYXltZW50LWRldGFpbHMtc2V0Lmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFnQixnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7QUFLOUU7SUFDRSxnQ0FDVSxzQkFBOEMsRUFDOUMscUJBQTRDLEVBQzVDLG9CQUEwQyxFQUMxQyxNQUFjO1FBSGQsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUM5QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNyQixDQUFDO0lBRUosNENBQVcsR0FBWDtRQUFBLGlCQXlCQztRQXhCQyxJQUFNLFlBQVksR0FBaUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FDM0UsZ0JBQWdCLENBQUMsZUFBZSxDQUNqQyxDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksSUFBSSxTQUFTLEVBQUUsRUFBRTtZQUNoQyxPQUFPLENBQUMsSUFBSSxDQUNWLDRCQUEwQixnQkFBZ0IsQ0FBQyxlQUFlLGdDQUE2QixDQUN4RixDQUFDO1NBQ0g7UUFFRCxPQUFPLElBQUksQ0FBQyxzQkFBc0I7YUFDL0IsaUJBQWlCLEVBQUU7YUFDbkIsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFBLGNBQWM7WUFDaEIsT0FBQSxjQUFjLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFDeEQsQ0FBQyxDQUFDLElBQUk7Z0JBQ04sQ0FBQyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUNsQixZQUFZO29CQUNWLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQ3RDLFlBQVksQ0FBQyxTQUFTLENBQ3ZCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUNiO1FBUEwsQ0FPSyxDQUNOLENBQ0YsQ0FBQztJQUNOLENBQUM7O2dCQS9CaUMsc0JBQXNCO2dCQUN2QixxQkFBcUI7Z0JBQ3RCLG9CQUFvQjtnQkFDbEMsTUFBTTs7O0lBTGIsc0JBQXNCO1FBSGxDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxzQkFBc0IsQ0FrQ2xDO2lDQTlDRDtDQThDQyxBQWxDRCxJQWtDQztTQWxDWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBpc0Rldk1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXIsIFVybFRyZWUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGluZ0NvbmZpZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdGVwLCBDaGVja291dFN0ZXBUeXBlIH0gZnJvbSAnLi4vbW9kZWwvY2hlY2tvdXQtc3RlcC5tb2RlbCc7XG5pbXBvcnQgeyBDaGVja291dENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jaGVja291dC1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBDaGVja291dERldGFpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2hlY2tvdXQtZGV0YWlscy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFBheW1lbnREZXRhaWxzU2V0R3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2hlY2tvdXREZXRhaWxzU2VydmljZTogQ2hlY2tvdXREZXRhaWxzU2VydmljZSxcbiAgICBwcml2YXRlIGNoZWNrb3V0Q29uZmlnU2VydmljZTogQ2hlY2tvdXRDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGluZ0NvbmZpZ1NlcnZpY2U6IFJvdXRpbmdDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgKSB7fVxuXG4gIGNhbkFjdGl2YXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcbiAgICBjb25zdCBjaGVja291dFN0ZXA6IENoZWNrb3V0U3RlcCA9IHRoaXMuY2hlY2tvdXRDb25maWdTZXJ2aWNlLmdldENoZWNrb3V0U3RlcChcbiAgICAgIENoZWNrb3V0U3RlcFR5cGUuUEFZTUVOVF9ERVRBSUxTXG4gICAgKTtcblxuICAgIGlmICghY2hlY2tvdXRTdGVwICYmIGlzRGV2TW9kZSgpKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBNaXNzaW5nIHN0ZXAgd2l0aCB0eXBlICR7Q2hlY2tvdXRTdGVwVHlwZS5QQVlNRU5UX0RFVEFJTFN9IGluIGNoZWNrb3V0IGNvbmZpZ3VyYXRpb24uYFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jaGVja291dERldGFpbHNTZXJ2aWNlXG4gICAgICAuZ2V0UGF5bWVudERldGFpbHMoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcChwYXltZW50RGV0YWlscyA9PlxuICAgICAgICAgIHBheW1lbnREZXRhaWxzICYmIE9iamVjdC5rZXlzKHBheW1lbnREZXRhaWxzKS5sZW5ndGggIT09IDBcbiAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgOiB0aGlzLnJvdXRlci5wYXJzZVVybChcbiAgICAgICAgICAgICAgICBjaGVja291dFN0ZXAgJiZcbiAgICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ0NvbmZpZ1NlcnZpY2UuZ2V0Um91dGVDb25maWcoXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrb3V0U3RlcC5yb3V0ZU5hbWVcbiAgICAgICAgICAgICAgICAgICkucGF0aHNbMF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICB9XG59XG4iXX0=