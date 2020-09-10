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
let DeliveryModeSetGuard = class DeliveryModeSetGuard {
    constructor(checkoutDetailsService, checkoutStepService, routingConfigService, router) {
        this.checkoutDetailsService = checkoutDetailsService;
        this.checkoutStepService = checkoutStepService;
        this.routingConfigService = routingConfigService;
        this.router = router;
    }
    canActivate() {
        const checkoutStep = this.checkoutStepService.getCheckoutStep(CheckoutStepType.DELIVERY_MODE);
        if (!checkoutStep && isDevMode()) {
            console.warn(`Missing step with type ${CheckoutStepType.DELIVERY_MODE} in checkout configuration.`);
        }
        if (checkoutStep && checkoutStep.disabled) {
            return of(true);
        }
        return this.checkoutDetailsService
            .getSelectedDeliveryModeCode()
            .pipe(map((mode) => mode && mode.length
            ? true
            : this.router.parseUrl(checkoutStep &&
                this.routingConfigService.getRouteConfig(checkoutStep.routeName).paths[0])));
    }
};
DeliveryModeSetGuard.ctorParameters = () => [
    { type: CheckoutDetailsService },
    { type: CheckoutStepService },
    { type: RoutingConfigService },
    { type: Router }
];
DeliveryModeSetGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function DeliveryModeSetGuard_Factory() { return new DeliveryModeSetGuard(i0.ɵɵinject(i1.CheckoutDetailsService), i0.ɵɵinject(i2.CheckoutStepService), i0.ɵɵinject(i3.RoutingConfigService), i0.ɵɵinject(i4.Router)); }, token: DeliveryModeSetGuard, providedIn: "root" });
DeliveryModeSetGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], DeliveryModeSetGuard);
export { DeliveryModeSetGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktbW9kZS1zZXQuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9ndWFyZHMvZGVsaXZlcnktbW9kZS1zZXQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBZ0IsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7O0FBSzlFLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBQy9CLFlBQ1Usc0JBQThDLEVBQzlDLG1CQUF3QyxFQUN4QyxvQkFBMEMsRUFDMUMsTUFBYztRQUhkLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDOUMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDckIsQ0FBQztJQUVKLFdBQVc7UUFDVCxNQUFNLFlBQVksR0FBaUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FDekUsZ0JBQWdCLENBQUMsYUFBYSxDQUMvQixDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksSUFBSSxTQUFTLEVBQUUsRUFBRTtZQUNoQyxPQUFPLENBQUMsSUFBSSxDQUNWLDBCQUEwQixnQkFBZ0IsQ0FBQyxhQUFhLDZCQUE2QixDQUN0RixDQUFDO1NBQ0g7UUFFRCxJQUFJLFlBQVksSUFBSSxZQUFZLENBQUMsUUFBUSxFQUFFO1lBQ3pDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pCO1FBRUQsT0FBTyxJQUFJLENBQUMsc0JBQXNCO2FBQy9CLDJCQUEyQixFQUFFO2FBQzdCLElBQUksQ0FDSCxHQUFHLENBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUNuQixJQUFJLElBQUksSUFBSSxDQUFDLE1BQU07WUFDakIsQ0FBQyxDQUFDLElBQUk7WUFDTixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQ2xCLFlBQVk7Z0JBQ1YsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FDdEMsWUFBWSxDQUFDLFNBQVMsQ0FDdkIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ2IsQ0FDTixDQUNGLENBQUM7SUFDTixDQUFDO0NBQ0YsQ0FBQTs7WUFwQ21DLHNCQUFzQjtZQUN6QixtQkFBbUI7WUFDbEIsb0JBQW9CO1lBQ2xDLE1BQU07OztBQUxiLG9CQUFvQjtJQUhoQyxVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csb0JBQW9CLENBc0NoQztTQXRDWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBpc0Rldk1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXIsIFVybFRyZWUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGluZ0NvbmZpZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENoZWNrb3V0U3RlcCwgQ2hlY2tvdXRTdGVwVHlwZSB9IGZyb20gJy4uL21vZGVsL2NoZWNrb3V0LXN0ZXAubW9kZWwnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdGVwU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NoZWNrb3V0LXN0ZXAuc2VydmljZSc7XG5pbXBvcnQgeyBDaGVja291dERldGFpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2hlY2tvdXQtZGV0YWlscy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIERlbGl2ZXJ5TW9kZVNldEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNoZWNrb3V0RGV0YWlsc1NlcnZpY2U6IENoZWNrb3V0RGV0YWlsc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGVja291dFN0ZXBTZXJ2aWNlOiBDaGVja291dFN0ZXBTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGluZ0NvbmZpZ1NlcnZpY2U6IFJvdXRpbmdDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgKSB7fVxuXG4gIGNhbkFjdGl2YXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcbiAgICBjb25zdCBjaGVja291dFN0ZXA6IENoZWNrb3V0U3RlcCA9IHRoaXMuY2hlY2tvdXRTdGVwU2VydmljZS5nZXRDaGVja291dFN0ZXAoXG4gICAgICBDaGVja291dFN0ZXBUeXBlLkRFTElWRVJZX01PREVcbiAgICApO1xuXG4gICAgaWYgKCFjaGVja291dFN0ZXAgJiYgaXNEZXZNb2RlKCkpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYE1pc3Npbmcgc3RlcCB3aXRoIHR5cGUgJHtDaGVja291dFN0ZXBUeXBlLkRFTElWRVJZX01PREV9IGluIGNoZWNrb3V0IGNvbmZpZ3VyYXRpb24uYFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tvdXRTdGVwICYmIGNoZWNrb3V0U3RlcC5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuIG9mKHRydWUpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0RGV0YWlsc1NlcnZpY2VcbiAgICAgIC5nZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZUNvZGUoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgobW9kZTogc3RyaW5nKSA9PlxuICAgICAgICAgIG1vZGUgJiYgbW9kZS5sZW5ndGhcbiAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgOiB0aGlzLnJvdXRlci5wYXJzZVVybChcbiAgICAgICAgICAgICAgICBjaGVja291dFN0ZXAgJiZcbiAgICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ0NvbmZpZ1NlcnZpY2UuZ2V0Um91dGVDb25maWcoXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrb3V0U3RlcC5yb3V0ZU5hbWVcbiAgICAgICAgICAgICAgICAgICkucGF0aHNbMF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICB9XG59XG4iXX0=