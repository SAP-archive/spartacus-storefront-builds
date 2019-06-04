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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktbW9kZS1zZXQuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9ndWFyZHMvZGVsaXZlcnktbW9kZS1zZXQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUF3QixNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUcvRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3JFLE9BQU8sRUFBZ0IsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7O0FBSzlFLE1BQU0sT0FBTyxvQkFBb0I7Ozs7Ozs7O0lBQy9CLFlBQ1Usc0JBQThDLEVBQzlDLHFCQUE0QyxFQUM1QyxvQkFBMEMsRUFDMUMsTUFBYyxFQUNkLFlBQTBCO1FBSjFCLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDOUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUNqQyxDQUFDOzs7O0lBRUosV0FBVzs7Y0FDSCxZQUFZLEdBQWlCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQzNFLGdCQUFnQixDQUFDLGFBQWEsQ0FDL0I7UUFFRCxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUU7WUFDbEQsT0FBTyxDQUFDLElBQUksQ0FDViwwQkFDRSxnQkFBZ0IsQ0FBQyxhQUNuQiw2QkFBNkIsQ0FDOUIsQ0FBQztTQUNIO1FBRUQsT0FBTyxJQUFJLENBQUMsc0JBQXNCO2FBQy9CLDJCQUEyQixFQUFFO2FBQzdCLElBQUksQ0FDSCxHQUFHLENBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUNuQixJQUFJLElBQUksSUFBSSxDQUFDLE1BQU07WUFDakIsQ0FBQyxDQUFDLElBQUk7WUFDTixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQ2xCLFlBQVk7Z0JBQ1YsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FDdEMsWUFBWSxDQUFDLFNBQVMsQ0FDdkIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ2IsQ0FDTixDQUNGLENBQUM7SUFDTixDQUFDOzs7WUF2Q0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBSlEsc0JBQXNCO1lBSHRCLHFCQUFxQjtZQUNQLG9CQUFvQjtZQU5aLE1BQU07WUFNNUIsWUFBWTs7Ozs7Ozs7SUFTakIsc0RBQXNEOzs7OztJQUN0RCxxREFBb0Q7Ozs7O0lBQ3BELG9EQUFrRDs7Ozs7SUFDbEQsc0NBQXNCOzs7OztJQUN0Qiw0Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgVXJsVHJlZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBDaGVja291dENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9jaGVja291dC1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBTZXJ2ZXJDb25maWcsIFJvdXRpbmdDb25maWdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENoZWNrb3V0U3RlcCwgQ2hlY2tvdXRTdGVwVHlwZSB9IGZyb20gJy4uL21vZGVsL2NoZWNrb3V0LXN0ZXAubW9kZWwnO1xuaW1wb3J0IHsgQ2hlY2tvdXREZXRhaWxzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NoZWNrb3V0LWRldGFpbHMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBEZWxpdmVyeU1vZGVTZXRHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjaGVja291dERldGFpbHNTZXJ2aWNlOiBDaGVja291dERldGFpbHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2hlY2tvdXRDb25maWdTZXJ2aWNlOiBDaGVja291dENvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nQ29uZmlnU2VydmljZTogUm91dGluZ0NvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHNlcnZlckNvbmZpZzogU2VydmVyQ29uZmlnXG4gICkge31cblxuICBjYW5BY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgY29uc3QgY2hlY2tvdXRTdGVwOiBDaGVja291dFN0ZXAgPSB0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZS5nZXRDaGVja291dFN0ZXAoXG4gICAgICBDaGVja291dFN0ZXBUeXBlLkRFTElWRVJZX01PREVcbiAgICApO1xuXG4gICAgaWYgKCFjaGVja291dFN0ZXAgJiYgIXRoaXMuc2VydmVyQ29uZmlnLnByb2R1Y3Rpb24pIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYE1pc3Npbmcgc3RlcCB3aXRoIHR5cGUgJHtcbiAgICAgICAgICBDaGVja291dFN0ZXBUeXBlLkRFTElWRVJZX01PREVcbiAgICAgICAgfSBpbiBjaGVja291dCBjb25maWd1cmF0aW9uLmBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXREZXRhaWxzU2VydmljZVxuICAgICAgLmdldFNlbGVjdGVkRGVsaXZlcnlNb2RlQ29kZSgpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChtb2RlOiBzdHJpbmcpID0+XG4gICAgICAgICAgbW9kZSAmJiBtb2RlLmxlbmd0aFxuICAgICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgICA6IHRoaXMucm91dGVyLnBhcnNlVXJsKFxuICAgICAgICAgICAgICAgIGNoZWNrb3V0U3RlcCAmJlxuICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nQ29uZmlnU2VydmljZS5nZXRSb3V0ZUNvbmZpZyhcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tvdXRTdGVwLnJvdXRlTmFtZVxuICAgICAgICAgICAgICAgICAgKS5wYXRoc1swXVxuICAgICAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gIH1cbn1cbiJdfQ==