import { __decorate } from "tslib";
import { Injectable, isDevMode } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { RoutingConfigService } from '@spartacus/core';
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
var DeliveryModeSetGuard = /** @class */ (function () {
    function DeliveryModeSetGuard(checkoutDetailsService, checkoutStepService, routingConfigService, router) {
        this.checkoutDetailsService = checkoutDetailsService;
        this.checkoutStepService = checkoutStepService;
        this.routingConfigService = routingConfigService;
        this.router = router;
    }
    DeliveryModeSetGuard.prototype.canActivate = function () {
        var _this = this;
        var checkoutStep = this.checkoutStepService.getCheckoutStep(CheckoutStepType.DELIVERY_MODE);
        if (!checkoutStep && isDevMode()) {
            console.warn("Missing step with type " + CheckoutStepType.DELIVERY_MODE + " in checkout configuration.");
        }
        if (checkoutStep && checkoutStep.disabled) {
            return of(true);
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
        { type: CheckoutStepService },
        { type: RoutingConfigService },
        { type: Router }
    ]; };
    DeliveryModeSetGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function DeliveryModeSetGuard_Factory() { return new DeliveryModeSetGuard(i0.ɵɵinject(i1.CheckoutDetailsService), i0.ɵɵinject(i2.CheckoutStepService), i0.ɵɵinject(i3.RoutingConfigService), i0.ɵɵinject(i4.Router)); }, token: DeliveryModeSetGuard, providedIn: "root" });
    DeliveryModeSetGuard = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], DeliveryModeSetGuard);
    return DeliveryModeSetGuard;
}());
export { DeliveryModeSetGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktbW9kZS1zZXQuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9ndWFyZHMvZGVsaXZlcnktbW9kZS1zZXQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBZ0IsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7O0FBSzlFO0lBQ0UsOEJBQ1Usc0JBQThDLEVBQzlDLG1CQUF3QyxFQUN4QyxvQkFBMEMsRUFDMUMsTUFBYztRQUhkLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDOUMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDckIsQ0FBQztJQUVKLDBDQUFXLEdBQVg7UUFBQSxpQkE2QkM7UUE1QkMsSUFBTSxZQUFZLEdBQWlCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQ3pFLGdCQUFnQixDQUFDLGFBQWEsQ0FDL0IsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLElBQUksU0FBUyxFQUFFLEVBQUU7WUFDaEMsT0FBTyxDQUFDLElBQUksQ0FDViw0QkFBMEIsZ0JBQWdCLENBQUMsYUFBYSxnQ0FBNkIsQ0FDdEYsQ0FBQztTQUNIO1FBRUQsSUFBSSxZQUFZLElBQUksWUFBWSxDQUFDLFFBQVEsRUFBRTtZQUN6QyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQjtRQUVELE9BQU8sSUFBSSxDQUFDLHNCQUFzQjthQUMvQiwyQkFBMkIsRUFBRTthQUM3QixJQUFJLENBQ0gsR0FBRyxDQUFDLFVBQUMsSUFBWTtZQUNmLE9BQUEsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNO2dCQUNqQixDQUFDLENBQUMsSUFBSTtnQkFDTixDQUFDLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQ2xCLFlBQVk7b0JBQ1YsS0FBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FDdEMsWUFBWSxDQUFDLFNBQVMsQ0FDdkIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ2I7UUFQTCxDQU9LLENBQ04sQ0FDRixDQUFDO0lBQ04sQ0FBQzs7Z0JBbkNpQyxzQkFBc0I7Z0JBQ3pCLG1CQUFtQjtnQkFDbEIsb0JBQW9CO2dCQUNsQyxNQUFNOzs7SUFMYixvQkFBb0I7UUFIaEMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLG9CQUFvQixDQXNDaEM7K0JBbEREO0NBa0RDLEFBdENELElBc0NDO1NBdENZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlciwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0aW5nQ29uZmlnU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdGVwLCBDaGVja291dFN0ZXBUeXBlIH0gZnJvbSAnLi4vbW9kZWwvY2hlY2tvdXQtc3RlcC5tb2RlbCc7XG5pbXBvcnQgeyBDaGVja291dFN0ZXBTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2hlY2tvdXQtc3RlcC5zZXJ2aWNlJztcbmltcG9ydCB7IENoZWNrb3V0RGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jaGVja291dC1kZXRhaWxzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgRGVsaXZlcnlNb2RlU2V0R3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2hlY2tvdXREZXRhaWxzU2VydmljZTogQ2hlY2tvdXREZXRhaWxzU2VydmljZSxcbiAgICBwcml2YXRlIGNoZWNrb3V0U3RlcFNlcnZpY2U6IENoZWNrb3V0U3RlcFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nQ29uZmlnU2VydmljZTogUm91dGluZ0NvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICApIHt9XG5cbiAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIGNvbnN0IGNoZWNrb3V0U3RlcDogQ2hlY2tvdXRTdGVwID0gdGhpcy5jaGVja291dFN0ZXBTZXJ2aWNlLmdldENoZWNrb3V0U3RlcChcbiAgICAgIENoZWNrb3V0U3RlcFR5cGUuREVMSVZFUllfTU9ERVxuICAgICk7XG5cbiAgICBpZiAoIWNoZWNrb3V0U3RlcCAmJiBpc0Rldk1vZGUoKSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgTWlzc2luZyBzdGVwIHdpdGggdHlwZSAke0NoZWNrb3V0U3RlcFR5cGUuREVMSVZFUllfTU9ERX0gaW4gY2hlY2tvdXQgY29uZmlndXJhdGlvbi5gXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChjaGVja291dFN0ZXAgJiYgY2hlY2tvdXRTdGVwLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm4gb2YodHJ1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXREZXRhaWxzU2VydmljZVxuICAgICAgLmdldFNlbGVjdGVkRGVsaXZlcnlNb2RlQ29kZSgpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChtb2RlOiBzdHJpbmcpID0+XG4gICAgICAgICAgbW9kZSAmJiBtb2RlLmxlbmd0aFxuICAgICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgICA6IHRoaXMucm91dGVyLnBhcnNlVXJsKFxuICAgICAgICAgICAgICAgIGNoZWNrb3V0U3RlcCAmJlxuICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nQ29uZmlnU2VydmljZS5nZXRSb3V0ZUNvbmZpZyhcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tvdXRTdGVwLnJvdXRlTmFtZVxuICAgICAgICAgICAgICAgICAgKS5wYXRoc1swXVxuICAgICAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gIH1cbn1cbiJdfQ==