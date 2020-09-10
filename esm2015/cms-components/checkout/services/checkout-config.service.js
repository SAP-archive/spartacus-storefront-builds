import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { DeliveryMode, RoutingConfigService } from '@spartacus/core';
import { CheckoutConfig, DeliveryModePreferences, } from '../config/checkout-config';
import * as i0 from "@angular/core";
import * as i1 from "../config/checkout-config";
import * as i2 from "@spartacus/core";
let CheckoutConfigService = class CheckoutConfigService {
    constructor(checkoutConfig, routingConfigService) {
        this.checkoutConfig = checkoutConfig;
        this.routingConfigService = routingConfigService;
        this.steps = this.checkoutConfig.checkout.steps;
        this.express = this.checkoutConfig.checkout.express;
        this.guest = this.checkoutConfig.checkout.guest;
        this.defaultDeliveryMode = this.checkoutConfig.checkout.defaultDeliveryMode || [];
    }
    /**
     * will be removed, there is same function in checkout-step.service
     */
    getCheckoutStep(currentStepType) {
        return this.steps[this.getCheckoutStepIndex('type', currentStepType)];
    }
    /**
     * will be removed, there is same function in checkout-step.service
     */
    getCheckoutStepRoute(currentStepType) {
        return this.getCheckoutStep(currentStepType).routeName;
    }
    /**
     * will be removed, there is same function in checkout-step.service
     */
    getFirstCheckoutStepRoute() {
        return this.steps[0].routeName;
    }
    /**
     * will be removed, there is same function in checkout-step.service
     */
    getNextCheckoutStepUrl(activatedRoute) {
        const stepIndex = this.getCurrentStepIndex(activatedRoute);
        return stepIndex >= 0 && this.steps[stepIndex + 1]
            ? this.getStepUrlFromStepRoute(this.steps[stepIndex + 1].routeName)
            : null;
    }
    /**
     * will be removed, there is same function in checkout-step.service
     */
    getPreviousCheckoutStepUrl(activatedRoute) {
        const stepIndex = this.getCurrentStepIndex(activatedRoute);
        return stepIndex >= 0 && this.steps[stepIndex - 1]
            ? this.getStepUrlFromStepRoute(this.steps[stepIndex - 1].routeName)
            : null;
    }
    /**
     * will be removed, there is same function in checkout-step.service
     */
    getCurrentStepIndex(activatedRoute) {
        const currentStepUrl = this.getStepUrlFromActivatedRoute(activatedRoute);
        let stepIndex;
        let index = 0;
        for (const step of this.steps) {
            if (currentStepUrl === `/${this.getStepUrlFromStepRoute(step.routeName)}`) {
                stepIndex = index;
            }
            else {
                index++;
            }
        }
        return stepIndex >= 0 ? stepIndex : null;
    }
    compareDeliveryCost(deliveryMode1, deliveryMode2) {
        if (deliveryMode1.deliveryCost.value > deliveryMode2.deliveryCost.value) {
            return 1;
        }
        else if (deliveryMode1.deliveryCost.value < deliveryMode2.deliveryCost.value) {
            return -1;
        }
        return 0;
    }
    findMatchingDeliveryMode(deliveryModes, index = 0) {
        switch (this.defaultDeliveryMode[index]) {
            case DeliveryModePreferences.FREE:
                if (deliveryModes[0].deliveryCost.value === 0) {
                    return deliveryModes[0].code;
                }
                break;
            case DeliveryModePreferences.LEAST_EXPENSIVE:
                const leastExpensiveFound = deliveryModes.find((deliveryMode) => deliveryMode.deliveryCost.value !== 0);
                if (leastExpensiveFound) {
                    return leastExpensiveFound.code;
                }
                break;
            case DeliveryModePreferences.MOST_EXPENSIVE:
                return deliveryModes[deliveryModes.length - 1].code;
            default:
                const codeFound = deliveryModes.find((deliveryMode) => deliveryMode.code === this.defaultDeliveryMode[index]);
                if (codeFound) {
                    return codeFound.code;
                }
        }
        const lastMode = this.defaultDeliveryMode.length - 1 <= index;
        return lastMode
            ? deliveryModes[0].code
            : this.findMatchingDeliveryMode(deliveryModes, index + 1);
    }
    getPreferredDeliveryMode(deliveryModes) {
        deliveryModes.sort(this.compareDeliveryCost);
        return this.findMatchingDeliveryMode(deliveryModes);
    }
    isExpressCheckout() {
        return this.express;
    }
    isGuestCheckout() {
        return this.guest;
    }
    /**
     * will be removed, there is same function in checkout-step.service
     */
    getStepUrlFromActivatedRoute(activatedRoute) {
        return activatedRoute &&
            activatedRoute.snapshot &&
            activatedRoute.snapshot.url
            ? `/${activatedRoute.snapshot.url.join('/')}`
            : null;
    }
    /**
     * will be removed, there is same function in checkout-step.service
     */
    getStepUrlFromStepRoute(stepRoute) {
        return this.routingConfigService.getRouteConfig(stepRoute).paths[0];
    }
    /**
     * will be removed, there is same function in checkout-step.service
     */
    getCheckoutStepIndex(key, value) {
        return key && value
            ? this.steps.findIndex((step) => step[key].includes(value))
            : null;
    }
};
CheckoutConfigService.ctorParameters = () => [
    { type: CheckoutConfig },
    { type: RoutingConfigService }
];
CheckoutConfigService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutConfigService_Factory() { return new CheckoutConfigService(i0.ɵɵinject(i1.CheckoutConfig), i0.ɵɵinject(i2.RoutingConfigService)); }, token: CheckoutConfigService, providedIn: "root" });
CheckoutConfigService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CheckoutConfigService);
export { CheckoutConfigService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9zZXJ2aWNlcy9jaGVja291dC1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDckUsT0FBTyxFQUNMLGNBQWMsRUFDZCx1QkFBdUIsR0FDeEIsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQU1uQyxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQU9oQyxZQUNVLGNBQThCLEVBQzlCLG9CQUEwQztRQUQxQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQVJwRCxVQUFLLEdBQW1CLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUNuRCxZQUFPLEdBQVksSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3hELFVBQUssR0FBWSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDcEQsd0JBQW1CLEdBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLG1CQUFtQixJQUFJLEVBQUUsQ0FBQztJQUt0RCxDQUFDO0lBRUo7O09BRUc7SUFDSCxlQUFlLENBQUMsZUFBaUM7UUFDL0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxvQkFBb0IsQ0FBQyxlQUFpQztRQUNwRCxPQUFPLElBQUksQ0FB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dkIsY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHO1lBQzNCLENBQUMsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM3QyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ1gsQ0FBQztJQUVEOztPQUVHO0lBQ0ssdUJBQXVCLENBQUMsU0FBaUI7UUFDL0MsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQ7O09BRUc7SUFDSyxvQkFBb0IsQ0FBQyxHQUFXLEVBQUUsS0FBVTtRQUNsRCxPQUFPLEdBQUcsSUFBSSxLQUFLO1lBQ2pCLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQWtCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekUsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNYLENBQUM7Q0FDRixDQUFBOztZQWhLMkIsY0FBYztZQUNSLG9CQUFvQjs7O0FBVHpDLHFCQUFxQjtJQUhqQyxVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1cscUJBQXFCLENBd0tqQztTQXhLWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEZWxpdmVyeU1vZGUsIFJvdXRpbmdDb25maWdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7XG4gIENoZWNrb3V0Q29uZmlnLFxuICBEZWxpdmVyeU1vZGVQcmVmZXJlbmNlcyxcbn0gZnJvbSAnLi4vY29uZmlnL2NoZWNrb3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBDaGVja291dFN0ZXAsIENoZWNrb3V0U3RlcFR5cGUgfSBmcm9tICcuLi9tb2RlbC9jaGVja291dC1zdGVwLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0Q29uZmlnU2VydmljZSB7XG4gIHN0ZXBzOiBDaGVja291dFN0ZXBbXSA9IHRoaXMuY2hlY2tvdXRDb25maWcuY2hlY2tvdXQuc3RlcHM7XG4gIHByaXZhdGUgZXhwcmVzczogYm9vbGVhbiA9IHRoaXMuY2hlY2tvdXRDb25maWcuY2hlY2tvdXQuZXhwcmVzcztcbiAgcHJpdmF0ZSBndWVzdDogYm9vbGVhbiA9IHRoaXMuY2hlY2tvdXRDb25maWcuY2hlY2tvdXQuZ3Vlc3Q7XG4gIHByaXZhdGUgZGVmYXVsdERlbGl2ZXJ5TW9kZTogQXJyYXk8RGVsaXZlcnlNb2RlUHJlZmVyZW5jZXMgfCBzdHJpbmc+ID1cbiAgICB0aGlzLmNoZWNrb3V0Q29uZmlnLmNoZWNrb3V0LmRlZmF1bHREZWxpdmVyeU1vZGUgfHwgW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjaGVja291dENvbmZpZzogQ2hlY2tvdXRDb25maWcsXG4gICAgcHJpdmF0ZSByb3V0aW5nQ29uZmlnU2VydmljZTogUm91dGluZ0NvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiB3aWxsIGJlIHJlbW92ZWQsIHRoZXJlIGlzIHNhbWUgZnVuY3Rpb24gaW4gY2hlY2tvdXQtc3RlcC5zZXJ2aWNlXG4gICAqL1xuICBnZXRDaGVja291dFN0ZXAoY3VycmVudFN0ZXBUeXBlOiBDaGVja291dFN0ZXBUeXBlKTogQ2hlY2tvdXRTdGVwIHtcbiAgICByZXR1cm4gdGhpcy5zdGVwc1t0aGlzLmdldENoZWNrb3V0U3RlcEluZGV4KCd0eXBlJywgY3VycmVudFN0ZXBUeXBlKV07XG4gIH1cblxuICAvKipcbiAgICogd2lsbCBiZSByZW1vdmVkLCB0aGVyZSBpcyBzYW1lIGZ1bmN0aW9uIGluIGNoZWNrb3V0LXN0ZXAuc2VydmljZVxuICAgKi9cbiAgZ2V0Q2hlY2tvdXRTdGVwUm91dGUoY3VycmVudFN0ZXBUeXBlOiBDaGVja291dFN0ZXBUeXBlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDaGVja291dFN0ZXAoY3VycmVudFN0ZXBUeXBlKS5yb3V0ZU5hbWU7XG4gIH1cblxuICAvKipcbiAgICogd2lsbCBiZSByZW1vdmVkLCB0aGVyZSBpcyBzYW1lIGZ1bmN0aW9uIGluIGNoZWNrb3V0LXN0ZXAuc2VydmljZVxuICAgKi9cbiAgZ2V0Rmlyc3RDaGVja291dFN0ZXBSb3V0ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnN0ZXBzWzBdLnJvdXRlTmFtZTtcbiAgfVxuXG4gIC8qKlxuICAgKiB3aWxsIGJlIHJlbW92ZWQsIHRoZXJlIGlzIHNhbWUgZnVuY3Rpb24gaW4gY2hlY2tvdXQtc3RlcC5zZXJ2aWNlXG4gICAqL1xuICBnZXROZXh0Q2hlY2tvdXRTdGVwVXJsKGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSk6IHN0cmluZyB7XG4gICAgY29uc3Qgc3RlcEluZGV4ID0gdGhpcy5nZXRDdXJyZW50U3RlcEluZGV4KGFjdGl2YXRlZFJvdXRlKTtcblxuICAgIHJldHVybiBzdGVwSW5kZXggPj0gMCAmJiB0aGlzLnN0ZXBzW3N0ZXBJbmRleCArIDFdXG4gICAgICA/IHRoaXMuZ2V0U3RlcFVybEZyb21TdGVwUm91dGUodGhpcy5zdGVwc1tzdGVwSW5kZXggKyAxXS5yb3V0ZU5hbWUpXG4gICAgICA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogd2lsbCBiZSByZW1vdmVkLCB0aGVyZSBpcyBzYW1lIGZ1bmN0aW9uIGluIGNoZWNrb3V0LXN0ZXAuc2VydmljZVxuICAgKi9cbiAgZ2V0UHJldmlvdXNDaGVja291dFN0ZXBVcmwoYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKTogc3RyaW5nIHtcbiAgICBjb25zdCBzdGVwSW5kZXggPSB0aGlzLmdldEN1cnJlbnRTdGVwSW5kZXgoYWN0aXZhdGVkUm91dGUpO1xuXG4gICAgcmV0dXJuIHN0ZXBJbmRleCA+PSAwICYmIHRoaXMuc3RlcHNbc3RlcEluZGV4IC0gMV1cbiAgICAgID8gdGhpcy5nZXRTdGVwVXJsRnJvbVN0ZXBSb3V0ZSh0aGlzLnN0ZXBzW3N0ZXBJbmRleCAtIDFdLnJvdXRlTmFtZSlcbiAgICAgIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiB3aWxsIGJlIHJlbW92ZWQsIHRoZXJlIGlzIHNhbWUgZnVuY3Rpb24gaW4gY2hlY2tvdXQtc3RlcC5zZXJ2aWNlXG4gICAqL1xuICBnZXRDdXJyZW50U3RlcEluZGV4KGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSk6IG51bWJlciB8IG51bGwge1xuICAgIGNvbnN0IGN1cnJlbnRTdGVwVXJsOiBzdHJpbmcgPSB0aGlzLmdldFN0ZXBVcmxGcm9tQWN0aXZhdGVkUm91dGUoXG4gICAgICBhY3RpdmF0ZWRSb3V0ZVxuICAgICk7XG5cbiAgICBsZXQgc3RlcEluZGV4OiBudW1iZXI7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBmb3IgKGNvbnN0IHN0ZXAgb2YgdGhpcy5zdGVwcykge1xuICAgICAgaWYgKFxuICAgICAgICBjdXJyZW50U3RlcFVybCA9PT0gYC8ke3RoaXMuZ2V0U3RlcFVybEZyb21TdGVwUm91dGUoc3RlcC5yb3V0ZU5hbWUpfWBcbiAgICAgICkge1xuICAgICAgICBzdGVwSW5kZXggPSBpbmRleDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0ZXBJbmRleCA+PSAwID8gc3RlcEluZGV4IDogbnVsbDtcbiAgfVxuXG4gIHByb3RlY3RlZCBjb21wYXJlRGVsaXZlcnlDb3N0KFxuICAgIGRlbGl2ZXJ5TW9kZTE6IERlbGl2ZXJ5TW9kZSxcbiAgICBkZWxpdmVyeU1vZGUyOiBEZWxpdmVyeU1vZGVcbiAgKTogbnVtYmVyIHtcbiAgICBpZiAoZGVsaXZlcnlNb2RlMS5kZWxpdmVyeUNvc3QudmFsdWUgPiBkZWxpdmVyeU1vZGUyLmRlbGl2ZXJ5Q29zdC52YWx1ZSkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGRlbGl2ZXJ5TW9kZTEuZGVsaXZlcnlDb3N0LnZhbHVlIDwgZGVsaXZlcnlNb2RlMi5kZWxpdmVyeUNvc3QudmFsdWVcbiAgICApIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmluZE1hdGNoaW5nRGVsaXZlcnlNb2RlKFxuICAgIGRlbGl2ZXJ5TW9kZXM6IERlbGl2ZXJ5TW9kZVtdLFxuICAgIGluZGV4ID0gMFxuICApOiBzdHJpbmcge1xuICAgIHN3aXRjaCAodGhpcy5kZWZhdWx0RGVsaXZlcnlNb2RlW2luZGV4XSkge1xuICAgICAgY2FzZSBEZWxpdmVyeU1vZGVQcmVmZXJlbmNlcy5GUkVFOlxuICAgICAgICBpZiAoZGVsaXZlcnlNb2Rlc1swXS5kZWxpdmVyeUNvc3QudmFsdWUgPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gZGVsaXZlcnlNb2Rlc1swXS5jb2RlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBEZWxpdmVyeU1vZGVQcmVmZXJlbmNlcy5MRUFTVF9FWFBFTlNJVkU6XG4gICAgICAgIGNvbnN0IGxlYXN0RXhwZW5zaXZlRm91bmQgPSBkZWxpdmVyeU1vZGVzLmZpbmQoXG4gICAgICAgICAgKGRlbGl2ZXJ5TW9kZSkgPT4gZGVsaXZlcnlNb2RlLmRlbGl2ZXJ5Q29zdC52YWx1ZSAhPT0gMFxuICAgICAgICApO1xuICAgICAgICBpZiAobGVhc3RFeHBlbnNpdmVGb3VuZCkge1xuICAgICAgICAgIHJldHVybiBsZWFzdEV4cGVuc2l2ZUZvdW5kLmNvZGU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIERlbGl2ZXJ5TW9kZVByZWZlcmVuY2VzLk1PU1RfRVhQRU5TSVZFOlxuICAgICAgICByZXR1cm4gZGVsaXZlcnlNb2Rlc1tkZWxpdmVyeU1vZGVzLmxlbmd0aCAtIDFdLmNvZGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zdCBjb2RlRm91bmQgPSBkZWxpdmVyeU1vZGVzLmZpbmQoXG4gICAgICAgICAgKGRlbGl2ZXJ5TW9kZSkgPT5cbiAgICAgICAgICAgIGRlbGl2ZXJ5TW9kZS5jb2RlID09PSB0aGlzLmRlZmF1bHREZWxpdmVyeU1vZGVbaW5kZXhdXG4gICAgICAgICk7XG4gICAgICAgIGlmIChjb2RlRm91bmQpIHtcbiAgICAgICAgICByZXR1cm4gY29kZUZvdW5kLmNvZGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgbGFzdE1vZGUgPSB0aGlzLmRlZmF1bHREZWxpdmVyeU1vZGUubGVuZ3RoIC0gMSA8PSBpbmRleDtcbiAgICByZXR1cm4gbGFzdE1vZGVcbiAgICAgID8gZGVsaXZlcnlNb2Rlc1swXS5jb2RlXG4gICAgICA6IHRoaXMuZmluZE1hdGNoaW5nRGVsaXZlcnlNb2RlKGRlbGl2ZXJ5TW9kZXMsIGluZGV4ICsgMSk7XG4gIH1cblxuICBnZXRQcmVmZXJyZWREZWxpdmVyeU1vZGUoZGVsaXZlcnlNb2RlczogRGVsaXZlcnlNb2RlW10pOiBzdHJpbmcge1xuICAgIGRlbGl2ZXJ5TW9kZXMuc29ydCh0aGlzLmNvbXBhcmVEZWxpdmVyeUNvc3QpO1xuICAgIHJldHVybiB0aGlzLmZpbmRNYXRjaGluZ0RlbGl2ZXJ5TW9kZShkZWxpdmVyeU1vZGVzKTtcbiAgfVxuXG4gIGlzRXhwcmVzc0NoZWNrb3V0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmV4cHJlc3M7XG4gIH1cblxuICBpc0d1ZXN0Q2hlY2tvdXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZ3Vlc3Q7XG4gIH1cblxuICAvKipcbiAgICogd2lsbCBiZSByZW1vdmVkLCB0aGVyZSBpcyBzYW1lIGZ1bmN0aW9uIGluIGNoZWNrb3V0LXN0ZXAuc2VydmljZVxuICAgKi9cbiAgcHJpdmF0ZSBnZXRTdGVwVXJsRnJvbUFjdGl2YXRlZFJvdXRlKFxuICAgIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICApOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gYWN0aXZhdGVkUm91dGUgJiZcbiAgICAgIGFjdGl2YXRlZFJvdXRlLnNuYXBzaG90ICYmXG4gICAgICBhY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC51cmxcbiAgICAgID8gYC8ke2FjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnVybC5qb2luKCcvJyl9YFxuICAgICAgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIHdpbGwgYmUgcmVtb3ZlZCwgdGhlcmUgaXMgc2FtZSBmdW5jdGlvbiBpbiBjaGVja291dC1zdGVwLnNlcnZpY2VcbiAgICovXG4gIHByaXZhdGUgZ2V0U3RlcFVybEZyb21TdGVwUm91dGUoc3RlcFJvdXRlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnJvdXRpbmdDb25maWdTZXJ2aWNlLmdldFJvdXRlQ29uZmlnKHN0ZXBSb3V0ZSkucGF0aHNbMF07XG4gIH1cblxuICAvKipcbiAgICogd2lsbCBiZSByZW1vdmVkLCB0aGVyZSBpcyBzYW1lIGZ1bmN0aW9uIGluIGNoZWNrb3V0LXN0ZXAuc2VydmljZVxuICAgKi9cbiAgcHJpdmF0ZSBnZXRDaGVja291dFN0ZXBJbmRleChrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IG51bWJlciB8IG51bGwge1xuICAgIHJldHVybiBrZXkgJiYgdmFsdWVcbiAgICAgID8gdGhpcy5zdGVwcy5maW5kSW5kZXgoKHN0ZXA6IENoZWNrb3V0U3RlcCkgPT4gc3RlcFtrZXldLmluY2x1ZGVzKHZhbHVlKSlcbiAgICAgIDogbnVsbDtcbiAgfVxufVxuIl19