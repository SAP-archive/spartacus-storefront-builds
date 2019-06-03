/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ServerConfig, RoutingConfigService } from '@spartacus/core';
import { CheckoutDetailsService } from '../services/checkout-details.service';
import { CheckoutStepType } from '../model/checkout-step.model';
import { CheckoutConfigService } from '../checkout-config.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/checkout-details.service";
import * as i2 from "../checkout-config.service";
import * as i3 from "@spartacus/core";
import * as i4 from "@angular/router";
export class PaymentDetailsSetGuard {
    /**
     * @param {?} checkoutDetailsService
     * @param {?} checkoutConfigService
     * @param {?} routingConfigService
     * @param {?} router
     * @param {?} serverConfig
     */
    constructor(checkoutDetailsService, checkoutConfigService, routingConfigService, router, serverConfig) {
        this.checkoutDetailsService = checkoutDetailsService;
        this.checkoutConfigService = checkoutConfigService;
        this.routingConfigService = routingConfigService;
        this.router = router;
        this.serverConfig = serverConfig;
    }
    /**
     * @return {?}
     */
    canActivate() {
        /** @type {?} */
        const checkoutStep = this.checkoutConfigService.getCheckoutStep(CheckoutStepType.PAYMENT_DETAILS);
        if (!checkoutStep && !this.serverConfig.production) {
            console.warn(`Missing step with type ${CheckoutStepType.PAYMENT_DETAILS} in checkout configuration.`);
        }
        return this.checkoutDetailsService
            .getPaymentDetails()
            .pipe(map(paymentDetails => paymentDetails && Object.keys(paymentDetails).length !== 0
            ? true
            : this.router.parseUrl(checkoutStep &&
                this.routingConfigService.getRouteConfig(checkoutStep.routeName).paths[0])));
    }
}
PaymentDetailsSetGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
PaymentDetailsSetGuard.ctorParameters = () => [
    { type: CheckoutDetailsService },
    { type: CheckoutConfigService },
    { type: RoutingConfigService },
    { type: Router },
    { type: ServerConfig }
];
/** @nocollapse */ PaymentDetailsSetGuard.ngInjectableDef = i0.defineInjectable({ factory: function PaymentDetailsSetGuard_Factory() { return new PaymentDetailsSetGuard(i0.inject(i1.CheckoutDetailsService), i0.inject(i2.CheckoutConfigService), i0.inject(i3.RoutingConfigService), i0.inject(i4.Router), i0.inject(i3.ServerConfig)); }, token: PaymentDetailsSetGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    PaymentDetailsSetGuard.prototype.checkoutDetailsService;
    /**
     * @type {?}
     * @private
     */
    PaymentDetailsSetGuard.prototype.checkoutConfigService;
    /**
     * @type {?}
     * @private
     */
    PaymentDetailsSetGuard.prototype.routingConfigService;
    /**
     * @type {?}
     * @private
     */
    PaymentDetailsSetGuard.prototype.router;
    /**
     * @type {?}
     * @private
     */
    PaymentDetailsSetGuard.prototype.serverConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1kZXRhaWxzLXNldC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NoZWNrb3V0L2d1YXJkcy9wYXltZW50LWRldGFpbHMtc2V0Lmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBZSxNQUFNLEVBQVcsTUFBTSxpQkFBaUIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzlFLE9BQU8sRUFBZ0IsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7O0FBS25FLE1BQU0sT0FBTyxzQkFBc0I7Ozs7Ozs7O0lBQ2pDLFlBQ1Usc0JBQThDLEVBQzlDLHFCQUE0QyxFQUM1QyxvQkFBMEMsRUFDMUMsTUFBYyxFQUNkLFlBQTBCO1FBSjFCLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDOUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUNqQyxDQUFDOzs7O0lBRUosV0FBVzs7Y0FDSCxZQUFZLEdBQWlCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQzNFLGdCQUFnQixDQUFDLGVBQWUsQ0FDakM7UUFFRCxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUU7WUFDbEQsT0FBTyxDQUFDLElBQUksQ0FDViwwQkFDRSxnQkFBZ0IsQ0FBQyxlQUNuQiw2QkFBNkIsQ0FDOUIsQ0FBQztTQUNIO1FBRUQsT0FBTyxJQUFJLENBQUMsc0JBQXNCO2FBQy9CLGlCQUFpQixFQUFFO2FBQ25CLElBQUksQ0FDSCxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FDbkIsY0FBYyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUM7WUFDeEQsQ0FBQyxDQUFDLElBQUk7WUFDTixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQ2xCLFlBQVk7Z0JBQ1YsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FDdEMsWUFBWSxDQUFDLFNBQVMsQ0FDdkIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ2IsQ0FDTixDQUNGLENBQUM7SUFDTixDQUFDOzs7WUF2Q0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTlEsc0JBQXNCO1lBRXRCLHFCQUFxQjtZQUhQLG9CQUFvQjtZQUpyQixNQUFNO1lBSW5CLFlBQVk7Ozs7Ozs7O0lBVWpCLHdEQUFzRDs7Ozs7SUFDdEQsdURBQW9EOzs7OztJQUNwRCxzREFBa0Q7Ozs7O0lBQ2xELHdDQUFzQjs7Ozs7SUFDdEIsOENBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlciwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFNlcnZlckNvbmZpZywgUm91dGluZ0NvbmZpZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ2hlY2tvdXREZXRhaWxzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NoZWNrb3V0LWRldGFpbHMuc2VydmljZSc7XG5pbXBvcnQgeyBDaGVja291dFN0ZXAsIENoZWNrb3V0U3RlcFR5cGUgfSBmcm9tICcuLi9tb2RlbC9jaGVja291dC1zdGVwLm1vZGVsJztcbmltcG9ydCB7IENoZWNrb3V0Q29uZmlnU2VydmljZSB9IGZyb20gJy4uL2NoZWNrb3V0LWNvbmZpZy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFBheW1lbnREZXRhaWxzU2V0R3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2hlY2tvdXREZXRhaWxzU2VydmljZTogQ2hlY2tvdXREZXRhaWxzU2VydmljZSxcbiAgICBwcml2YXRlIGNoZWNrb3V0Q29uZmlnU2VydmljZTogQ2hlY2tvdXRDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGluZ0NvbmZpZ1NlcnZpY2U6IFJvdXRpbmdDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBzZXJ2ZXJDb25maWc6IFNlcnZlckNvbmZpZ1xuICApIHt9XG5cbiAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIGNvbnN0IGNoZWNrb3V0U3RlcDogQ2hlY2tvdXRTdGVwID0gdGhpcy5jaGVja291dENvbmZpZ1NlcnZpY2UuZ2V0Q2hlY2tvdXRTdGVwKFxuICAgICAgQ2hlY2tvdXRTdGVwVHlwZS5QQVlNRU5UX0RFVEFJTFNcbiAgICApO1xuXG4gICAgaWYgKCFjaGVja291dFN0ZXAgJiYgIXRoaXMuc2VydmVyQ29uZmlnLnByb2R1Y3Rpb24pIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYE1pc3Npbmcgc3RlcCB3aXRoIHR5cGUgJHtcbiAgICAgICAgICBDaGVja291dFN0ZXBUeXBlLlBBWU1FTlRfREVUQUlMU1xuICAgICAgICB9IGluIGNoZWNrb3V0IGNvbmZpZ3VyYXRpb24uYFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jaGVja291dERldGFpbHNTZXJ2aWNlXG4gICAgICAuZ2V0UGF5bWVudERldGFpbHMoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcChwYXltZW50RGV0YWlscyA9PlxuICAgICAgICAgIHBheW1lbnREZXRhaWxzICYmIE9iamVjdC5rZXlzKHBheW1lbnREZXRhaWxzKS5sZW5ndGggIT09IDBcbiAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgOiB0aGlzLnJvdXRlci5wYXJzZVVybChcbiAgICAgICAgICAgICAgICBjaGVja291dFN0ZXAgJiZcbiAgICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ0NvbmZpZ1NlcnZpY2UuZ2V0Um91dGVDb25maWcoXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrb3V0U3RlcC5yb3V0ZU5hbWVcbiAgICAgICAgICAgICAgICAgICkucGF0aHNbMF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICB9XG59XG4iXX0=