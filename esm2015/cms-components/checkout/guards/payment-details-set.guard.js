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
let PaymentDetailsSetGuard = class PaymentDetailsSetGuard {
    constructor(checkoutDetailsService, checkoutConfigService, routingConfigService, router) {
        this.checkoutDetailsService = checkoutDetailsService;
        this.checkoutConfigService = checkoutConfigService;
        this.routingConfigService = routingConfigService;
        this.router = router;
    }
    canActivate() {
        const checkoutStep = this.checkoutConfigService.getCheckoutStep(CheckoutStepType.PAYMENT_DETAILS);
        if (!checkoutStep && isDevMode()) {
            console.warn(`Missing step with type ${CheckoutStepType.PAYMENT_DETAILS} in checkout configuration.`);
        }
        return this.checkoutDetailsService
            .getPaymentDetails()
            .pipe(map(paymentDetails => paymentDetails && Object.keys(paymentDetails).length !== 0
            ? true
            : this.router.parseUrl(checkoutStep &&
                this.routingConfigService.getRouteConfig(checkoutStep.routeName).paths[0])));
    }
};
PaymentDetailsSetGuard.ctorParameters = () => [
    { type: CheckoutDetailsService },
    { type: CheckoutConfigService },
    { type: RoutingConfigService },
    { type: Router }
];
PaymentDetailsSetGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function PaymentDetailsSetGuard_Factory() { return new PaymentDetailsSetGuard(i0.ɵɵinject(i1.CheckoutDetailsService), i0.ɵɵinject(i2.CheckoutConfigService), i0.ɵɵinject(i3.RoutingConfigService), i0.ɵɵinject(i4.Router)); }, token: PaymentDetailsSetGuard, providedIn: "root" });
PaymentDetailsSetGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], PaymentDetailsSetGuard);
export { PaymentDetailsSetGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1kZXRhaWxzLXNldC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NoZWNrb3V0L2d1YXJkcy9wYXltZW50LWRldGFpbHMtc2V0Lmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFnQixnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7QUFLOUUsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFDakMsWUFDVSxzQkFBOEMsRUFDOUMscUJBQTRDLEVBQzVDLG9CQUEwQyxFQUMxQyxNQUFjO1FBSGQsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUM5QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNyQixDQUFDO0lBRUosV0FBVztRQUNULE1BQU0sWUFBWSxHQUFpQixJQUFJLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUMzRSxnQkFBZ0IsQ0FBQyxlQUFlLENBQ2pDLENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxJQUFJLFNBQVMsRUFBRSxFQUFFO1lBQ2hDLE9BQU8sQ0FBQyxJQUFJLENBQ1YsMEJBQTBCLGdCQUFnQixDQUFDLGVBQWUsNkJBQTZCLENBQ3hGLENBQUM7U0FDSDtRQUVELE9BQU8sSUFBSSxDQUFDLHNCQUFzQjthQUMvQixpQkFBaUIsRUFBRTthQUNuQixJQUFJLENBQ0gsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQ25CLGNBQWMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQ3hELENBQUMsQ0FBQyxJQUFJO1lBQ04sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUNsQixZQUFZO2dCQUNWLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQ3RDLFlBQVksQ0FBQyxTQUFTLENBQ3ZCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUNiLENBQ04sQ0FDRixDQUFDO0lBQ04sQ0FBQztDQUNGLENBQUE7O1lBaENtQyxzQkFBc0I7WUFDdkIscUJBQXFCO1lBQ3RCLG9CQUFvQjtZQUNsQyxNQUFNOzs7QUFMYixzQkFBc0I7SUFIbEMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLHNCQUFzQixDQWtDbEM7U0FsQ1ksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyLCBVcmxUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRpbmdDb25maWdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENoZWNrb3V0U3RlcCwgQ2hlY2tvdXRTdGVwVHlwZSB9IGZyb20gJy4uL21vZGVsL2NoZWNrb3V0LXN0ZXAubW9kZWwnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2hlY2tvdXREZXRhaWxzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NoZWNrb3V0LWRldGFpbHMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50RGV0YWlsc1NldEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNoZWNrb3V0RGV0YWlsc1NlcnZpY2U6IENoZWNrb3V0RGV0YWlsc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGVja291dENvbmZpZ1NlcnZpY2U6IENoZWNrb3V0Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdDb25maWdTZXJ2aWNlOiBSb3V0aW5nQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICkge31cblxuICBjYW5BY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgY29uc3QgY2hlY2tvdXRTdGVwOiBDaGVja291dFN0ZXAgPSB0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZS5nZXRDaGVja291dFN0ZXAoXG4gICAgICBDaGVja291dFN0ZXBUeXBlLlBBWU1FTlRfREVUQUlMU1xuICAgICk7XG5cbiAgICBpZiAoIWNoZWNrb3V0U3RlcCAmJiBpc0Rldk1vZGUoKSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgTWlzc2luZyBzdGVwIHdpdGggdHlwZSAke0NoZWNrb3V0U3RlcFR5cGUuUEFZTUVOVF9ERVRBSUxTfSBpbiBjaGVja291dCBjb25maWd1cmF0aW9uLmBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXREZXRhaWxzU2VydmljZVxuICAgICAgLmdldFBheW1lbnREZXRhaWxzKClcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAocGF5bWVudERldGFpbHMgPT5cbiAgICAgICAgICBwYXltZW50RGV0YWlscyAmJiBPYmplY3Qua2V5cyhwYXltZW50RGV0YWlscykubGVuZ3RoICE9PSAwXG4gICAgICAgICAgICA/IHRydWVcbiAgICAgICAgICAgIDogdGhpcy5yb3V0ZXIucGFyc2VVcmwoXG4gICAgICAgICAgICAgICAgY2hlY2tvdXRTdGVwICYmXG4gICAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdDb25maWdTZXJ2aWNlLmdldFJvdXRlQ29uZmlnKFxuICAgICAgICAgICAgICAgICAgICBjaGVja291dFN0ZXAucm91dGVOYW1lXG4gICAgICAgICAgICAgICAgICApLnBhdGhzWzBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxufVxuIl19