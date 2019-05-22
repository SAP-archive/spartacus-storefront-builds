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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1kZXRhaWxzLXNldC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jaGVja291dC9ndWFyZHMvcGF5bWVudC1kZXRhaWxzLXNldC5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWUsTUFBTSxFQUFXLE1BQU0saUJBQWlCLENBQUM7QUFFL0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQWdCLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7OztBQUtuRSxNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7OztJQUNqQyxZQUNVLHNCQUE4QyxFQUM5QyxxQkFBNEMsRUFDNUMsb0JBQTBDLEVBQzFDLE1BQWMsRUFDZCxZQUEwQjtRQUoxQiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsaUJBQVksR0FBWixZQUFZLENBQWM7SUFDakMsQ0FBQzs7OztJQUVKLFdBQVc7O2NBQ0gsWUFBWSxHQUFpQixJQUFJLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUMzRSxnQkFBZ0IsQ0FBQyxlQUFlLENBQ2pDO1FBRUQsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFO1lBQ2xELE9BQU8sQ0FBQyxJQUFJLENBQ1YsMEJBQ0UsZ0JBQWdCLENBQUMsZUFDbkIsNkJBQTZCLENBQzlCLENBQUM7U0FDSDtRQUVELE9BQU8sSUFBSSxDQUFDLHNCQUFzQjthQUMvQixpQkFBaUIsRUFBRTthQUNuQixJQUFJLENBQ0gsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQ25CLGNBQWMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQ3hELENBQUMsQ0FBQyxJQUFJO1lBQ04sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUNsQixZQUFZO2dCQUNWLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQ3RDLFlBQVksQ0FBQyxTQUFTLENBQ3ZCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUNiLENBQ04sQ0FDRixDQUFDO0lBQ04sQ0FBQzs7O1lBdkNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQU5RLHNCQUFzQjtZQUV0QixxQkFBcUI7WUFIUCxvQkFBb0I7WUFKckIsTUFBTTtZQUluQixZQUFZOzs7Ozs7OztJQVVqQix3REFBc0Q7Ozs7O0lBQ3RELHVEQUFvRDs7Ozs7SUFDcEQsc0RBQWtEOzs7OztJQUNsRCx3Q0FBc0I7Ozs7O0lBQ3RCLDhDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXIsIFVybFRyZWUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTZXJ2ZXJDb25maWcsIFJvdXRpbmdDb25maWdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENoZWNrb3V0RGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jaGVja291dC1kZXRhaWxzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdGVwLCBDaGVja291dFN0ZXBUeXBlIH0gZnJvbSAnLi4vbW9kZWwvY2hlY2tvdXQtc3RlcC5tb2RlbCc7XG5pbXBvcnQgeyBDaGVja291dENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9jaGVja291dC1jb25maWcuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50RGV0YWlsc1NldEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNoZWNrb3V0RGV0YWlsc1NlcnZpY2U6IENoZWNrb3V0RGV0YWlsc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGVja291dENvbmZpZ1NlcnZpY2U6IENoZWNrb3V0Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdDb25maWdTZXJ2aWNlOiBSb3V0aW5nQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgc2VydmVyQ29uZmlnOiBTZXJ2ZXJDb25maWdcbiAgKSB7fVxuXG4gIGNhbkFjdGl2YXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcbiAgICBjb25zdCBjaGVja291dFN0ZXA6IENoZWNrb3V0U3RlcCA9IHRoaXMuY2hlY2tvdXRDb25maWdTZXJ2aWNlLmdldENoZWNrb3V0U3RlcChcbiAgICAgIENoZWNrb3V0U3RlcFR5cGUuUEFZTUVOVF9ERVRBSUxTXG4gICAgKTtcblxuICAgIGlmICghY2hlY2tvdXRTdGVwICYmICF0aGlzLnNlcnZlckNvbmZpZy5wcm9kdWN0aW9uKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBNaXNzaW5nIHN0ZXAgd2l0aCB0eXBlICR7XG4gICAgICAgICAgQ2hlY2tvdXRTdGVwVHlwZS5QQVlNRU5UX0RFVEFJTFNcbiAgICAgICAgfSBpbiBjaGVja291dCBjb25maWd1cmF0aW9uLmBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXREZXRhaWxzU2VydmljZVxuICAgICAgLmdldFBheW1lbnREZXRhaWxzKClcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAocGF5bWVudERldGFpbHMgPT5cbiAgICAgICAgICBwYXltZW50RGV0YWlscyAmJiBPYmplY3Qua2V5cyhwYXltZW50RGV0YWlscykubGVuZ3RoICE9PSAwXG4gICAgICAgICAgICA/IHRydWVcbiAgICAgICAgICAgIDogdGhpcy5yb3V0ZXIucGFyc2VVcmwoXG4gICAgICAgICAgICAgICAgY2hlY2tvdXRTdGVwICYmXG4gICAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdDb25maWdTZXJ2aWNlLmdldFJvdXRlQ29uZmlnKFxuICAgICAgICAgICAgICAgICAgICBjaGVja291dFN0ZXAucm91dGVOYW1lXG4gICAgICAgICAgICAgICAgICApLnBhdGhzWzBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxufVxuIl19