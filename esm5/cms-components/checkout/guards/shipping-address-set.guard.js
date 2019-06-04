/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ServerConfig, RoutingConfigService } from '@spartacus/core';
import { CheckoutConfigService } from '../checkout-config.service';
import { CheckoutDetailsService } from '../services/checkout-details.service';
import { CheckoutStepType } from '../model/checkout-step.model';
import * as i0 from "@angular/core";
import * as i1 from "../services/checkout-details.service";
import * as i2 from "../checkout-config.service";
import * as i3 from "@spartacus/core";
import * as i4 from "@angular/router";
var ShippingAddressSetGuard = /** @class */ (function () {
    function ShippingAddressSetGuard(checkoutDetailsService, checkoutConfigService, routingConfigService, router, serverConfig) {
        this.checkoutDetailsService = checkoutDetailsService;
        this.checkoutConfigService = checkoutConfigService;
        this.routingConfigService = routingConfigService;
        this.router = router;
        this.serverConfig = serverConfig;
    }
    /**
     * @return {?}
     */
    ShippingAddressSetGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var checkoutStep = this.checkoutConfigService.getCheckoutStep(CheckoutStepType.SHIPPING_ADDRESS);
        if (!checkoutStep && !this.serverConfig.production) {
            console.warn("Missing step with type " + CheckoutStepType.SHIPPING_ADDRESS + " in checkout configuration.");
        }
        return this.checkoutDetailsService
            .getDeliveryAddress()
            .pipe(map((/**
         * @param {?} deliveryAddress
         * @return {?}
         */
        function (deliveryAddress) {
            return deliveryAddress && Object.keys(deliveryAddress).length
                ? true
                : _this.router.parseUrl(checkoutStep &&
                    _this.routingConfigService.getRouteConfig(checkoutStep.routeName).paths[0]);
        })));
    };
    ShippingAddressSetGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ShippingAddressSetGuard.ctorParameters = function () { return [
        { type: CheckoutDetailsService },
        { type: CheckoutConfigService },
        { type: RoutingConfigService },
        { type: Router },
        { type: ServerConfig }
    ]; };
    /** @nocollapse */ ShippingAddressSetGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ShippingAddressSetGuard_Factory() { return new ShippingAddressSetGuard(i0.ɵɵinject(i1.CheckoutDetailsService), i0.ɵɵinject(i2.CheckoutConfigService), i0.ɵɵinject(i3.RoutingConfigService), i0.ɵɵinject(i4.Router), i0.ɵɵinject(i3.ServerConfig)); }, token: ShippingAddressSetGuard, providedIn: "root" });
    return ShippingAddressSetGuard;
}());
export { ShippingAddressSetGuard };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ShippingAddressSetGuard.prototype.checkoutDetailsService;
    /**
     * @type {?}
     * @private
     */
    ShippingAddressSetGuard.prototype.checkoutConfigService;
    /**
     * @type {?}
     * @private
     */
    ShippingAddressSetGuard.prototype.routingConfigService;
    /**
     * @type {?}
     * @private
     */
    ShippingAddressSetGuard.prototype.router;
    /**
     * @type {?}
     * @private
     */
    ShippingAddressSetGuard.prototype.serverConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctYWRkcmVzcy1zZXQuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9ndWFyZHMvc2hpcHBpbmctYWRkcmVzcy1zZXQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFlLE1BQU0sRUFBVyxNQUFNLGlCQUFpQixDQUFDO0FBRS9ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsWUFBWSxFQUFXLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDOUUsT0FBTyxFQUFnQixnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7QUFFOUU7SUFJRSxpQ0FDVSxzQkFBOEMsRUFDOUMscUJBQTRDLEVBQzVDLG9CQUEwQyxFQUMxQyxNQUFjLEVBQ2QsWUFBMEI7UUFKMUIsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUM5QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQ2pDLENBQUM7Ozs7SUFFSiw2Q0FBVzs7O0lBQVg7UUFBQSxpQkEyQkM7O1lBMUJPLFlBQVksR0FBaUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FDM0UsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQ2xDO1FBRUQsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFO1lBQ2xELE9BQU8sQ0FBQyxJQUFJLENBQ1YsNEJBQ0UsZ0JBQWdCLENBQUMsZ0JBQWdCLGdDQUNOLENBQzlCLENBQUM7U0FDSDtRQUVELE9BQU8sSUFBSSxDQUFDLHNCQUFzQjthQUMvQixrQkFBa0IsRUFBRTthQUNwQixJQUFJLENBQ0gsR0FBRzs7OztRQUFDLFVBQUMsZUFBd0I7WUFDM0IsT0FBQSxlQUFlLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNO2dCQUNwRCxDQUFDLENBQUMsSUFBSTtnQkFDTixDQUFDLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQ2xCLFlBQVk7b0JBQ1YsS0FBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FDdEMsWUFBWSxDQUFDLFNBQVMsQ0FDdkIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ2I7UUFQTCxDQU9LLEVBQ04sQ0FDRixDQUFDO0lBQ04sQ0FBQzs7Z0JBdkNGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTFEsc0JBQXNCO2dCQUR0QixxQkFBcUI7Z0JBREUsb0JBQW9CO2dCQUo5QixNQUFNO2dCQUluQixZQUFZOzs7a0NBTHJCO0NBa0RDLEFBeENELElBd0NDO1NBckNZLHVCQUF1Qjs7Ozs7O0lBRWhDLHlEQUFzRDs7Ozs7SUFDdEQsd0RBQW9EOzs7OztJQUNwRCx1REFBa0Q7Ozs7O0lBQ2xELHlDQUFzQjs7Ozs7SUFDdEIsK0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlciwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFNlcnZlckNvbmZpZywgQWRkcmVzcywgUm91dGluZ0NvbmZpZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2hlY2tvdXREZXRhaWxzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NoZWNrb3V0LWRldGFpbHMuc2VydmljZSc7XG5pbXBvcnQgeyBDaGVja291dFN0ZXAsIENoZWNrb3V0U3RlcFR5cGUgfSBmcm9tICcuLi9tb2RlbC9jaGVja291dC1zdGVwLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNoaXBwaW5nQWRkcmVzc1NldEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNoZWNrb3V0RGV0YWlsc1NlcnZpY2U6IENoZWNrb3V0RGV0YWlsc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGVja291dENvbmZpZ1NlcnZpY2U6IENoZWNrb3V0Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdDb25maWdTZXJ2aWNlOiBSb3V0aW5nQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgc2VydmVyQ29uZmlnOiBTZXJ2ZXJDb25maWdcbiAgKSB7fVxuXG4gIGNhbkFjdGl2YXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcbiAgICBjb25zdCBjaGVja291dFN0ZXA6IENoZWNrb3V0U3RlcCA9IHRoaXMuY2hlY2tvdXRDb25maWdTZXJ2aWNlLmdldENoZWNrb3V0U3RlcChcbiAgICAgIENoZWNrb3V0U3RlcFR5cGUuU0hJUFBJTkdfQUREUkVTU1xuICAgICk7XG5cbiAgICBpZiAoIWNoZWNrb3V0U3RlcCAmJiAhdGhpcy5zZXJ2ZXJDb25maWcucHJvZHVjdGlvbikge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgTWlzc2luZyBzdGVwIHdpdGggdHlwZSAke1xuICAgICAgICAgIENoZWNrb3V0U3RlcFR5cGUuU0hJUFBJTkdfQUREUkVTU1xuICAgICAgICB9IGluIGNoZWNrb3V0IGNvbmZpZ3VyYXRpb24uYFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jaGVja291dERldGFpbHNTZXJ2aWNlXG4gICAgICAuZ2V0RGVsaXZlcnlBZGRyZXNzKClcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKGRlbGl2ZXJ5QWRkcmVzczogQWRkcmVzcykgPT5cbiAgICAgICAgICBkZWxpdmVyeUFkZHJlc3MgJiYgT2JqZWN0LmtleXMoZGVsaXZlcnlBZGRyZXNzKS5sZW5ndGhcbiAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgOiB0aGlzLnJvdXRlci5wYXJzZVVybChcbiAgICAgICAgICAgICAgICBjaGVja291dFN0ZXAgJiZcbiAgICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ0NvbmZpZ1NlcnZpY2UuZ2V0Um91dGVDb25maWcoXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrb3V0U3RlcC5yb3V0ZU5hbWVcbiAgICAgICAgICAgICAgICAgICkucGF0aHNbMF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICB9XG59XG4iXX0=