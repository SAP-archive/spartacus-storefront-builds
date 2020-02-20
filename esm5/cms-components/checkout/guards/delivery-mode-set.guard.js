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
var DeliveryModeSetGuard = /** @class */ (function () {
    function DeliveryModeSetGuard(checkoutDetailsService, checkoutConfigService, routingConfigService, router) {
        this.checkoutDetailsService = checkoutDetailsService;
        this.checkoutConfigService = checkoutConfigService;
        this.routingConfigService = routingConfigService;
        this.router = router;
    }
    DeliveryModeSetGuard.prototype.canActivate = function () {
        var _this = this;
        var checkoutStep = this.checkoutConfigService.getCheckoutStep(CheckoutStepType.DELIVERY_MODE);
        if (!checkoutStep && isDevMode()) {
            console.warn("Missing step with type " + CheckoutStepType.DELIVERY_MODE + " in checkout configuration.");
        }
        return this.checkoutDetailsService
            .getSelectedDeliveryModeCode()
            .pipe(map(function (mode) {
            return mode && mode.length
                ? true
                : _this.router.parseUrl(checkoutStep &&
                    _this.routingConfigService.getRouteConfig(checkoutStep.routeName).paths[0]);
        }));
    };
    DeliveryModeSetGuard.ctorParameters = function () { return [
        { type: CheckoutDetailsService },
        { type: CheckoutConfigService },
        { type: RoutingConfigService },
        { type: Router }
    ]; };
    DeliveryModeSetGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function DeliveryModeSetGuard_Factory() { return new DeliveryModeSetGuard(i0.ɵɵinject(i1.CheckoutDetailsService), i0.ɵɵinject(i2.CheckoutConfigService), i0.ɵɵinject(i3.RoutingConfigService), i0.ɵɵinject(i4.Router)); }, token: DeliveryModeSetGuard, providedIn: "root" });
    DeliveryModeSetGuard = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], DeliveryModeSetGuard);
    return DeliveryModeSetGuard;
}());
export { DeliveryModeSetGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktbW9kZS1zZXQuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9ndWFyZHMvZGVsaXZlcnktbW9kZS1zZXQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXZELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQWdCLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7OztBQUs5RTtJQUNFLDhCQUNVLHNCQUE4QyxFQUM5QyxxQkFBNEMsRUFDNUMsb0JBQTBDLEVBQzFDLE1BQWM7UUFIZCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3JCLENBQUM7SUFFSiwwQ0FBVyxHQUFYO1FBQUEsaUJBeUJDO1FBeEJDLElBQU0sWUFBWSxHQUFpQixJQUFJLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUMzRSxnQkFBZ0IsQ0FBQyxhQUFhLENBQy9CLENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxJQUFJLFNBQVMsRUFBRSxFQUFFO1lBQ2hDLE9BQU8sQ0FBQyxJQUFJLENBQ1YsNEJBQTBCLGdCQUFnQixDQUFDLGFBQWEsZ0NBQTZCLENBQ3RGLENBQUM7U0FDSDtRQUVELE9BQU8sSUFBSSxDQUFDLHNCQUFzQjthQUMvQiwyQkFBMkIsRUFBRTthQUM3QixJQUFJLENBQ0gsR0FBRyxDQUFDLFVBQUMsSUFBWTtZQUNmLE9BQUEsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNO2dCQUNqQixDQUFDLENBQUMsSUFBSTtnQkFDTixDQUFDLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQ2xCLFlBQVk7b0JBQ1YsS0FBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FDdEMsWUFBWSxDQUFDLFNBQVMsQ0FDdkIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ2I7UUFQTCxDQU9LLENBQ04sQ0FDRixDQUFDO0lBQ04sQ0FBQzs7Z0JBL0JpQyxzQkFBc0I7Z0JBQ3ZCLHFCQUFxQjtnQkFDdEIsb0JBQW9CO2dCQUNsQyxNQUFNOzs7SUFMYixvQkFBb0I7UUFIaEMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLG9CQUFvQixDQWtDaEM7K0JBOUNEO0NBOENDLEFBbENELElBa0NDO1NBbENZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlciwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0aW5nQ29uZmlnU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDaGVja291dFN0ZXAsIENoZWNrb3V0U3RlcFR5cGUgfSBmcm9tICcuLi9tb2RlbC9jaGVja291dC1zdGVwLm1vZGVsJztcbmltcG9ydCB7IENoZWNrb3V0Q29uZmlnU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NoZWNrb3V0LWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IENoZWNrb3V0RGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jaGVja291dC1kZXRhaWxzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgRGVsaXZlcnlNb2RlU2V0R3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2hlY2tvdXREZXRhaWxzU2VydmljZTogQ2hlY2tvdXREZXRhaWxzU2VydmljZSxcbiAgICBwcml2YXRlIGNoZWNrb3V0Q29uZmlnU2VydmljZTogQ2hlY2tvdXRDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGluZ0NvbmZpZ1NlcnZpY2U6IFJvdXRpbmdDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgKSB7fVxuXG4gIGNhbkFjdGl2YXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcbiAgICBjb25zdCBjaGVja291dFN0ZXA6IENoZWNrb3V0U3RlcCA9IHRoaXMuY2hlY2tvdXRDb25maWdTZXJ2aWNlLmdldENoZWNrb3V0U3RlcChcbiAgICAgIENoZWNrb3V0U3RlcFR5cGUuREVMSVZFUllfTU9ERVxuICAgICk7XG5cbiAgICBpZiAoIWNoZWNrb3V0U3RlcCAmJiBpc0Rldk1vZGUoKSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgTWlzc2luZyBzdGVwIHdpdGggdHlwZSAke0NoZWNrb3V0U3RlcFR5cGUuREVMSVZFUllfTU9ERX0gaW4gY2hlY2tvdXQgY29uZmlndXJhdGlvbi5gXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0RGV0YWlsc1NlcnZpY2VcbiAgICAgIC5nZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZUNvZGUoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgobW9kZTogc3RyaW5nKSA9PlxuICAgICAgICAgIG1vZGUgJiYgbW9kZS5sZW5ndGhcbiAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgOiB0aGlzLnJvdXRlci5wYXJzZVVybChcbiAgICAgICAgICAgICAgICBjaGVja291dFN0ZXAgJiZcbiAgICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ0NvbmZpZ1NlcnZpY2UuZ2V0Um91dGVDb25maWcoXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrb3V0U3RlcC5yb3V0ZU5hbWVcbiAgICAgICAgICAgICAgICAgICkucGF0aHNbMF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICB9XG59XG4iXX0=