import { Injectable } from '@angular/core';
import { RoutingConfigService } from '@spartacus/core';
import { CheckoutConfig, DeliveryModePreferences, } from '../config/checkout-config';
import * as i0 from "@angular/core";
import * as i1 from "../config/checkout-config";
import * as i2 from "@spartacus/core";
export class CheckoutConfigService {
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
}
CheckoutConfigService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutConfigService_Factory() { return new CheckoutConfigService(i0.ɵɵinject(i1.CheckoutConfig), i0.ɵɵinject(i2.RoutingConfigService)); }, token: CheckoutConfigService, providedIn: "root" });
CheckoutConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
CheckoutConfigService.ctorParameters = () => [
    { type: CheckoutConfig },
    { type: RoutingConfigService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9jaGVja291dC9zZXJ2aWNlcy9jaGVja291dC1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBZ0Isb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRSxPQUFPLEVBQ0wsY0FBYyxFQUNkLHVCQUF1QixHQUN4QixNQUFNLDJCQUEyQixDQUFDOzs7O0FBTW5DLE1BQU0sT0FBTyxxQkFBcUI7SUFPaEMsWUFDVSxjQUE4QixFQUM5QixvQkFBMEM7UUFEMUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFScEQsVUFBSyxHQUFtQixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDbkQsWUFBTyxHQUFZLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUN4RCxVQUFLLEdBQVksSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQ3BELHdCQUFtQixHQUN6QixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsSUFBSSxFQUFFLENBQUM7SUFLdEQsQ0FBQztJQUVKOztPQUVHO0lBQ0gsZUFBZSxDQUFDLGVBQWlDO1FBQy9DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsb0JBQW9CLENBQUMsZUFBaUM7UUFDcEQsT0FBTyxJQUFJLENBQUMsZUFB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QWMsQ0FBQyxRQUFRLENBQUMsR0FBRztZQUMzQixDQUFDLENBQUMsSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0MsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNYLENBQUM7SUFFRDs7T0FFRztJQUNLLHVCQUF1QixDQUFDLFNBQWlCO1FBQy9DLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVEOztPQUVHO0lBQ0ssb0JBQW9CLENBQUMsR0FBVyxFQUFFLEtBQVU7UUFDbEQsT0FBTyxHQUFHLElBQUksS0FBSztZQUNqQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFrQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pFLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDWCxDQUFDOzs7O1lBMUtGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBUEMsY0FBYztZQUZPLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IERlbGl2ZXJ5TW9kZSwgUm91dGluZ0NvbmZpZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2hlY2tvdXRDb25maWcsXG4gIERlbGl2ZXJ5TW9kZVByZWZlcmVuY2VzLFxufSBmcm9tICcuLi9jb25maWcvY2hlY2tvdXQtY29uZmlnJztcbmltcG9ydCB7IENoZWNrb3V0U3RlcCwgQ2hlY2tvdXRTdGVwVHlwZSB9IGZyb20gJy4uL21vZGVsL2NoZWNrb3V0LXN0ZXAubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRDb25maWdTZXJ2aWNlIHtcbiAgc3RlcHM6IENoZWNrb3V0U3RlcFtdID0gdGhpcy5jaGVja291dENvbmZpZy5jaGVja291dC5zdGVwcztcbiAgcHJpdmF0ZSBleHByZXNzOiBib29sZWFuID0gdGhpcy5jaGVja291dENvbmZpZy5jaGVja291dC5leHByZXNzO1xuICBwcml2YXRlIGd1ZXN0OiBib29sZWFuID0gdGhpcy5jaGVja291dENvbmZpZy5jaGVja291dC5ndWVzdDtcbiAgcHJpdmF0ZSBkZWZhdWx0RGVsaXZlcnlNb2RlOiBBcnJheTxEZWxpdmVyeU1vZGVQcmVmZXJlbmNlcyB8IHN0cmluZz4gPVxuICAgIHRoaXMuY2hlY2tvdXRDb25maWcuY2hlY2tvdXQuZGVmYXVsdERlbGl2ZXJ5TW9kZSB8fCBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNoZWNrb3V0Q29uZmlnOiBDaGVja291dENvbmZpZyxcbiAgICBwcml2YXRlIHJvdXRpbmdDb25maWdTZXJ2aWNlOiBSb3V0aW5nQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIHdpbGwgYmUgcmVtb3ZlZCwgdGhlcmUgaXMgc2FtZSBmdW5jdGlvbiBpbiBjaGVja291dC1zdGVwLnNlcnZpY2VcbiAgICovXG4gIGdldENoZWNrb3V0U3RlcChjdXJyZW50U3RlcFR5cGU6IENoZWNrb3V0U3RlcFR5cGUpOiBDaGVja291dFN0ZXAge1xuICAgIHJldHVybiB0aGlzLnN0ZXBzW3RoaXMuZ2V0Q2hlY2tvdXRTdGVwSW5kZXgoJ3R5cGUnLCBjdXJyZW50U3RlcFR5cGUpXTtcbiAgfVxuXG4gIC8qKlxuICAgKiB3aWxsIGJlIHJlbW92ZWQsIHRoZXJlIGlzIHNhbWUgZnVuY3Rpb24gaW4gY2hlY2tvdXQtc3RlcC5zZXJ2aWNlXG4gICAqL1xuICBnZXRDaGVja291dFN0ZXBSb3V0ZShjdXJyZW50U3RlcFR5cGU6IENoZWNrb3V0U3RlcFR5cGUpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmdldENoZWNrb3V0U3RlcChjdXJyZW50U3RlcFR5cGUpLnJvdXRlTmFtZTtcbiAgfVxuXG4gIC8qKlxuICAgKiB3aWxsIGJlIHJlbW92ZWQsIHRoZXJlIGlzIHNhbWUgZnVuY3Rpb24gaW4gY2hlY2tvdXQtc3RlcC5zZXJ2aWNlXG4gICAqL1xuICBnZXRGaXJzdENoZWNrb3V0U3RlcFJvdXRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc3RlcHNbMF0ucm91dGVOYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIHdpbGwgYmUgcmVtb3ZlZCwgdGhlcmUgaXMgc2FtZSBmdW5jdGlvbiBpbiBjaGVja291dC1zdGVwLnNlcnZpY2VcbiAgICovXG4gIGdldE5leHRDaGVja291dFN0ZXBVcmwoYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKTogc3RyaW5nIHtcbiAgICBjb25zdCBzdGVwSW5kZXggPSB0aGlzLmdldEN1cnJlbnRTdGVwSW5kZXgoYWN0aXZhdGVkUm91dGUpO1xuXG4gICAgcmV0dXJuIHN0ZXBJbmRleCA+PSAwICYmIHRoaXMuc3RlcHNbc3RlcEluZGV4ICsgMV1cbiAgICAgID8gdGhpcy5nZXRTdGVwVXJsRnJvbVN0ZXBSb3V0ZSh0aGlzLnN0ZXBzW3N0ZXBJbmRleCArIDFdLnJvdXRlTmFtZSlcbiAgICAgIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiB3aWxsIGJlIHJlbW92ZWQsIHRoZXJlIGlzIHNhbWUgZnVuY3Rpb24gaW4gY2hlY2tvdXQtc3RlcC5zZXJ2aWNlXG4gICAqL1xuICBnZXRQcmV2aW91c0NoZWNrb3V0U3RlcFVybChhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpOiBzdHJpbmcge1xuICAgIGNvbnN0IHN0ZXBJbmRleCA9IHRoaXMuZ2V0Q3VycmVudFN0ZXBJbmRleChhY3RpdmF0ZWRSb3V0ZSk7XG5cbiAgICByZXR1cm4gc3RlcEluZGV4ID49IDAgJiYgdGhpcy5zdGVwc1tzdGVwSW5kZXggLSAxXVxuICAgICAgPyB0aGlzLmdldFN0ZXBVcmxGcm9tU3RlcFJvdXRlKHRoaXMuc3RlcHNbc3RlcEluZGV4IC0gMV0ucm91dGVOYW1lKVxuICAgICAgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIHdpbGwgYmUgcmVtb3ZlZCwgdGhlcmUgaXMgc2FtZSBmdW5jdGlvbiBpbiBjaGVja291dC1zdGVwLnNlcnZpY2VcbiAgICovXG4gIGdldEN1cnJlbnRTdGVwSW5kZXgoYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgY29uc3QgY3VycmVudFN0ZXBVcmw6IHN0cmluZyA9IHRoaXMuZ2V0U3RlcFVybEZyb21BY3RpdmF0ZWRSb3V0ZShcbiAgICAgIGFjdGl2YXRlZFJvdXRlXG4gICAgKTtcblxuICAgIGxldCBzdGVwSW5kZXg6IG51bWJlcjtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGZvciAoY29uc3Qgc3RlcCBvZiB0aGlzLnN0ZXBzKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGN1cnJlbnRTdGVwVXJsID09PSBgLyR7dGhpcy5nZXRTdGVwVXJsRnJvbVN0ZXBSb3V0ZShzdGVwLnJvdXRlTmFtZSl9YFxuICAgICAgKSB7XG4gICAgICAgIHN0ZXBJbmRleCA9IGluZGV4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RlcEluZGV4ID49IDAgPyBzdGVwSW5kZXggOiBudWxsO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNvbXBhcmVEZWxpdmVyeUNvc3QoXG4gICAgZGVsaXZlcnlNb2RlMTogRGVsaXZlcnlNb2RlLFxuICAgIGRlbGl2ZXJ5TW9kZTI6IERlbGl2ZXJ5TW9kZVxuICApOiBudW1iZXIge1xuICAgIGlmIChkZWxpdmVyeU1vZGUxLmRlbGl2ZXJ5Q29zdC52YWx1ZSA+IGRlbGl2ZXJ5TW9kZTIuZGVsaXZlcnlDb3N0LnZhbHVlKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgZGVsaXZlcnlNb2RlMS5kZWxpdmVyeUNvc3QudmFsdWUgPCBkZWxpdmVyeU1vZGUyLmRlbGl2ZXJ5Q29zdC52YWx1ZVxuICAgICkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaW5kTWF0Y2hpbmdEZWxpdmVyeU1vZGUoXG4gICAgZGVsaXZlcnlNb2RlczogRGVsaXZlcnlNb2RlW10sXG4gICAgaW5kZXggPSAwXG4gICk6IHN0cmluZyB7XG4gICAgc3dpdGNoICh0aGlzLmRlZmF1bHREZWxpdmVyeU1vZGVbaW5kZXhdKSB7XG4gICAgICBjYXNlIERlbGl2ZXJ5TW9kZVByZWZlcmVuY2VzLkZSRUU6XG4gICAgICAgIGlmIChkZWxpdmVyeU1vZGVzWzBdLmRlbGl2ZXJ5Q29zdC52YWx1ZSA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBkZWxpdmVyeU1vZGVzWzBdLmNvZGU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIERlbGl2ZXJ5TW9kZVByZWZlcmVuY2VzLkxFQVNUX0VYUEVOU0lWRTpcbiAgICAgICAgY29uc3QgbGVhc3RFeHBlbnNpdmVGb3VuZCA9IGRlbGl2ZXJ5TW9kZXMuZmluZChcbiAgICAgICAgICAoZGVsaXZlcnlNb2RlKSA9PiBkZWxpdmVyeU1vZGUuZGVsaXZlcnlDb3N0LnZhbHVlICE9PSAwXG4gICAgICAgICk7XG4gICAgICAgIGlmIChsZWFzdEV4cGVuc2l2ZUZvdW5kKSB7XG4gICAgICAgICAgcmV0dXJuIGxlYXN0RXhwZW5zaXZlRm91bmQuY29kZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRGVsaXZlcnlNb2RlUHJlZmVyZW5jZXMuTU9TVF9FWFBFTlNJVkU6XG4gICAgICAgIHJldHVybiBkZWxpdmVyeU1vZGVzW2RlbGl2ZXJ5TW9kZXMubGVuZ3RoIC0gMV0uY29kZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnN0IGNvZGVGb3VuZCA9IGRlbGl2ZXJ5TW9kZXMuZmluZChcbiAgICAgICAgICAoZGVsaXZlcnlNb2RlKSA9PlxuICAgICAgICAgICAgZGVsaXZlcnlNb2RlLmNvZGUgPT09IHRoaXMuZGVmYXVsdERlbGl2ZXJ5TW9kZVtpbmRleF1cbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGNvZGVGb3VuZCkge1xuICAgICAgICAgIHJldHVybiBjb2RlRm91bmQuY29kZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBsYXN0TW9kZSA9IHRoaXMuZGVmYXVsdERlbGl2ZXJ5TW9kZS5sZW5ndGggLSAxIDw9IGluZGV4O1xuICAgIHJldHVybiBsYXN0TW9kZVxuICAgICAgPyBkZWxpdmVyeU1vZGVzWzBdLmNvZGVcbiAgICAgIDogdGhpcy5maW5kTWF0Y2hpbmdEZWxpdmVyeU1vZGUoZGVsaXZlcnlNb2RlcywgaW5kZXggKyAxKTtcbiAgfVxuXG4gIGdldFByZWZlcnJlZERlbGl2ZXJ5TW9kZShkZWxpdmVyeU1vZGVzOiBEZWxpdmVyeU1vZGVbXSk6IHN0cmluZyB7XG4gICAgZGVsaXZlcnlNb2Rlcy5zb3J0KHRoaXMuY29tcGFyZURlbGl2ZXJ5Q29zdCk7XG4gICAgcmV0dXJuIHRoaXMuZmluZE1hdGNoaW5nRGVsaXZlcnlNb2RlKGRlbGl2ZXJ5TW9kZXMpO1xuICB9XG5cbiAgaXNFeHByZXNzQ2hlY2tvdXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZXhwcmVzcztcbiAgfVxuXG4gIGlzR3Vlc3RDaGVja291dCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5ndWVzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiB3aWxsIGJlIHJlbW92ZWQsIHRoZXJlIGlzIHNhbWUgZnVuY3Rpb24gaW4gY2hlY2tvdXQtc3RlcC5zZXJ2aWNlXG4gICAqL1xuICBwcml2YXRlIGdldFN0ZXBVcmxGcm9tQWN0aXZhdGVkUm91dGUoXG4gICAgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiBhY3RpdmF0ZWRSb3V0ZSAmJlxuICAgICAgYWN0aXZhdGVkUm91dGUuc25hcHNob3QgJiZcbiAgICAgIGFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnVybFxuICAgICAgPyBgLyR7YWN0aXZhdGVkUm91dGUuc25hcHNob3QudXJsLmpvaW4oJy8nKX1gXG4gICAgICA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogd2lsbCBiZSByZW1vdmVkLCB0aGVyZSBpcyBzYW1lIGZ1bmN0aW9uIGluIGNoZWNrb3V0LXN0ZXAuc2VydmljZVxuICAgKi9cbiAgcHJpdmF0ZSBnZXRTdGVwVXJsRnJvbVN0ZXBSb3V0ZShzdGVwUm91dGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ0NvbmZpZ1NlcnZpY2UuZ2V0Um91dGVDb25maWcoc3RlcFJvdXRlKS5wYXRoc1swXTtcbiAgfVxuXG4gIC8qKlxuICAgKiB3aWxsIGJlIHJlbW92ZWQsIHRoZXJlIGlzIHNhbWUgZnVuY3Rpb24gaW4gY2hlY2tvdXQtc3RlcC5zZXJ2aWNlXG4gICAqL1xuICBwcml2YXRlIGdldENoZWNrb3V0U3RlcEluZGV4KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogbnVtYmVyIHwgbnVsbCB7XG4gICAgcmV0dXJuIGtleSAmJiB2YWx1ZVxuICAgICAgPyB0aGlzLnN0ZXBzLmZpbmRJbmRleCgoc3RlcDogQ2hlY2tvdXRTdGVwKSA9PiBzdGVwW2tleV0uaW5jbHVkZXModmFsdWUpKVxuICAgICAgOiBudWxsO1xuICB9XG59XG4iXX0=