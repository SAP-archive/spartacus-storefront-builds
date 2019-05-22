/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { CheckoutConfigService } from '../checkout-config.service';
import { ServerConfig, RoutingConfigService } from '@spartacus/core';
import { CheckoutStepType } from '../model/checkout-step.model';
import { CheckoutDetailsService } from '../services/checkout-details.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/checkout-details.service";
import * as i2 from "../checkout-config.service";
import * as i3 from "@spartacus/core";
import * as i4 from "@angular/router";
export class DeliveryModeSetGuard {
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
        const checkoutStep = this.checkoutConfigService.getCheckoutStep(CheckoutStepType.DELIVERY_MODE);
        if (!checkoutStep && !this.serverConfig.production) {
            console.warn(`Missing step with type ${CheckoutStepType.DELIVERY_MODE} in checkout configuration.`);
        }
        return this.checkoutDetailsService
            .getSelectedDeliveryModeCode()
            .pipe(map((mode) => mode && mode.length
            ? true
            : this.router.parseUrl(checkoutStep &&
                this.routingConfigService.getRouteConfig(checkoutStep.routeName).paths[0])));
    }
}
DeliveryModeSetGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
DeliveryModeSetGuard.ctorParameters = () => [
    { type: CheckoutDetailsService },
    { type: CheckoutConfigService },
    { type: RoutingConfigService },
    { type: Router },
    { type: ServerConfig }
];
/** @nocollapse */ DeliveryModeSetGuard.ngInjectableDef = i0.defineInjectable({ factory: function DeliveryModeSetGuard_Factory() { return new DeliveryModeSetGuard(i0.inject(i1.CheckoutDetailsService), i0.inject(i2.CheckoutConfigService), i0.inject(i3.RoutingConfigService), i0.inject(i4.Router), i0.inject(i3.ServerConfig)); }, token: DeliveryModeSetGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DeliveryModeSetGuard.prototype.checkoutDetailsService;
    /**
     * @type {?}
     * @private
     */
    DeliveryModeSetGuard.prototype.checkoutConfigService;
    /**
     * @type {?}
     * @private
     */
    DeliveryModeSetGuard.prototype.routingConfigService;
    /**
     * @type {?}
     * @private
     */
    DeliveryModeSetGuard.prototype.router;
    /**
     * @type {?}
     * @private
     */
    DeliveryModeSetGuard.prototype.serverConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktbW9kZS1zZXQuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvZ3VhcmRzL2RlbGl2ZXJ5LW1vZGUtc2V0Lmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBd0IsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHL0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRSxPQUFPLEVBQWdCLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7OztBQUs5RSxNQUFNLE9BQU8sb0JBQW9COzs7Ozs7OztJQUMvQixZQUNVLHNCQUE4QyxFQUM5QyxxQkFBNEMsRUFDNUMsb0JBQTBDLEVBQzFDLE1BQWMsRUFDZCxZQUEwQjtRQUoxQiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsaUJBQVksR0FBWixZQUFZLENBQWM7SUFDakMsQ0FBQzs7OztJQUVKLFdBQVc7O2NBQ0gsWUFBWSxHQUFpQixJQUFJLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUMzRSxnQkFBZ0IsQ0FBQyxhQUFhLENBQy9CO1FBRUQsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFO1lBQ2xELE9BQU8sQ0FBQyxJQUFJLENBQ1YsMEJBQ0UsZ0JBQWdCLENBQUMsYUFDbkIsNkJBQTZCLENBQzlCLENBQUM7U0FDSDtRQUVELE9BQU8sSUFBSSxDQUFDLHNCQUFzQjthQUMvQiwyQkFBMkIsRUFBRTthQUM3QixJQUFJLENBQ0gsR0FBRyxDQUFDLENBQUMsSUFBWSxFQUFFLEVBQUUsQ0FDbkIsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNO1lBQ2pCLENBQUMsQ0FBQyxJQUFJO1lBQ04sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUNsQixZQUFZO2dCQUNWLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQ3RDLFlBQVksQ0FBQyxTQUFTLENBQ3ZCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUNiLENBQ04sQ0FDRixDQUFDO0lBQ04sQ0FBQzs7O1lBdkNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUpRLHNCQUFzQjtZQUh0QixxQkFBcUI7WUFDUCxvQkFBb0I7WUFOWixNQUFNO1lBTTVCLFlBQVk7Ozs7Ozs7O0lBU2pCLHNEQUFzRDs7Ozs7SUFDdEQscURBQW9EOzs7OztJQUNwRCxvREFBa0Q7Ozs7O0lBQ2xELHNDQUFzQjs7Ozs7SUFDdEIsNENBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFVybFRyZWUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2VydmVyQ29uZmlnLCBSb3V0aW5nQ29uZmlnU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDaGVja291dFN0ZXAsIENoZWNrb3V0U3RlcFR5cGUgfSBmcm9tICcuLi9tb2RlbC9jaGVja291dC1zdGVwLm1vZGVsJztcbmltcG9ydCB7IENoZWNrb3V0RGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jaGVja291dC1kZXRhaWxzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgRGVsaXZlcnlNb2RlU2V0R3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2hlY2tvdXREZXRhaWxzU2VydmljZTogQ2hlY2tvdXREZXRhaWxzU2VydmljZSxcbiAgICBwcml2YXRlIGNoZWNrb3V0Q29uZmlnU2VydmljZTogQ2hlY2tvdXRDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGluZ0NvbmZpZ1NlcnZpY2U6IFJvdXRpbmdDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBzZXJ2ZXJDb25maWc6IFNlcnZlckNvbmZpZ1xuICApIHt9XG5cbiAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIGNvbnN0IGNoZWNrb3V0U3RlcDogQ2hlY2tvdXRTdGVwID0gdGhpcy5jaGVja291dENvbmZpZ1NlcnZpY2UuZ2V0Q2hlY2tvdXRTdGVwKFxuICAgICAgQ2hlY2tvdXRTdGVwVHlwZS5ERUxJVkVSWV9NT0RFXG4gICAgKTtcblxuICAgIGlmICghY2hlY2tvdXRTdGVwICYmICF0aGlzLnNlcnZlckNvbmZpZy5wcm9kdWN0aW9uKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBNaXNzaW5nIHN0ZXAgd2l0aCB0eXBlICR7XG4gICAgICAgICAgQ2hlY2tvdXRTdGVwVHlwZS5ERUxJVkVSWV9NT0RFXG4gICAgICAgIH0gaW4gY2hlY2tvdXQgY29uZmlndXJhdGlvbi5gXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0RGV0YWlsc1NlcnZpY2VcbiAgICAgIC5nZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZUNvZGUoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgobW9kZTogc3RyaW5nKSA9PlxuICAgICAgICAgIG1vZGUgJiYgbW9kZS5sZW5ndGhcbiAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgOiB0aGlzLnJvdXRlci5wYXJzZVVybChcbiAgICAgICAgICAgICAgICBjaGVja291dFN0ZXAgJiZcbiAgICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ0NvbmZpZ1NlcnZpY2UuZ2V0Um91dGVDb25maWcoXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrb3V0U3RlcC5yb3V0ZU5hbWVcbiAgICAgICAgICAgICAgICAgICkucGF0aHNbMF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICB9XG59XG4iXX0=