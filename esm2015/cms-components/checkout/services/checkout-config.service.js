/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { RoutingConfigService } from '@spartacus/core';
import { CheckoutConfig, DeliveryModePreferences, } from '../config/checkout-config';
import * as i0 from "@angular/core";
import * as i1 from "../config/checkout-config";
import * as i2 from "@spartacus/core";
export class CheckoutConfigService {
    /**
     * @param {?} checkoutConfig
     * @param {?} routingConfigService
     */
    constructor(checkoutConfig, routingConfigService) {
        this.checkoutConfig = checkoutConfig;
        this.routingConfigService = routingConfigService;
        this.steps = this.checkoutConfig.checkout.steps;
        this.express = this.checkoutConfig.checkout.express;
        this.guest = this.checkoutConfig.checkout.guest;
        this.defaultDeliveryMode = this.checkoutConfig.checkout.defaultDeliveryMode || [];
    }
    /**
     * @param {?} currentStepType
     * @return {?}
     */
    getCheckoutStep(currentStepType) {
        return this.steps[this.getCheckoutStepIndex('type', currentStepType)];
    }
    /**
     * @param {?} currentStepType
     * @return {?}
     */
    getCheckoutStepRoute(currentStepType) {
        return this.getCheckoutStep(currentStepType).routeName;
    }
    /**
     * @return {?}
     */
    getFirstCheckoutStepRoute() {
        return this.steps[0].routeName;
    }
    /**
     * @param {?} activatedRoute
     * @return {?}
     */
    getNextCheckoutStepUrl(activatedRoute) {
        /** @type {?} */
        const stepIndex = this.getCurrentStepIndex(activatedRoute);
        return stepIndex >= 0 && this.steps[stepIndex + 1]
            ? this.getStepUrlFromStepRoute(this.steps[stepIndex + 1].routeName)
            : null;
    }
    /**
     * @param {?} activatedRoute
     * @return {?}
     */
    getPreviousCheckoutStepUrl(activatedRoute) {
        /** @type {?} */
        const stepIndex = this.getCurrentStepIndex(activatedRoute);
        return stepIndex >= 0 && this.steps[stepIndex - 1]
            ? this.getStepUrlFromStepRoute(this.steps[stepIndex - 1].routeName)
            : null;
    }
    /**
     * @param {?} activatedRoute
     * @return {?}
     */
    getCurrentStepIndex(activatedRoute) {
        /** @type {?} */
        const currentStepUrl = this.getStepUrlFromActivatedRoute(activatedRoute);
        /** @type {?} */
        let stepIndex;
        /** @type {?} */
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
    /**
     * @protected
     * @param {?} deliveryMode1
     * @param {?} deliveryMode2
     * @return {?}
     */
    compareDeliveryCost(deliveryMode1, deliveryMode2) {
        if (deliveryMode1.deliveryCost.value > deliveryMode2.deliveryCost.value) {
            return 1;
        }
        else if (deliveryMode1.deliveryCost.value < deliveryMode2.deliveryCost.value) {
            return -1;
        }
        return 0;
    }
    /**
     * @protected
     * @param {?} deliveryModes
     * @param {?=} index
     * @return {?}
     */
    findMatchingDeliveryMode(deliveryModes, index = 0) {
        switch (this.defaultDeliveryMode[index]) {
            case DeliveryModePreferences.FREE:
                if (deliveryModes[0].deliveryCost.value === 0) {
                    return deliveryModes[0].code;
                }
                break;
            case DeliveryModePreferences.LEAST_EXPENSIVE:
                /** @type {?} */
                const leastExpensiveFound = deliveryModes.find((/**
                 * @param {?} deliveryMode
                 * @return {?}
                 */
                deliveryMode => deliveryMode.deliveryCost.value !== 0));
                if (leastExpensiveFound) {
                    return leastExpensiveFound.code;
                }
                break;
            case DeliveryModePreferences.MOST_EXPENSIVE:
                return deliveryModes[deliveryModes.length - 1].code;
            default:
                /** @type {?} */
                const codeFound = deliveryModes.find((/**
                 * @param {?} deliveryMode
                 * @return {?}
                 */
                deliveryMode => deliveryMode.code === this.defaultDeliveryMode[index]));
                if (codeFound) {
                    return codeFound.code;
                }
        }
        /** @type {?} */
        const lastMode = this.defaultDeliveryMode.length - 1 <= index;
        return lastMode
            ? deliveryModes[0].code
            : this.findMatchingDeliveryMode(deliveryModes, index + 1);
    }
    /**
     * @param {?} deliveryModes
     * @return {?}
     */
    getPreferredDeliveryMode(deliveryModes) {
        deliveryModes.sort(this.compareDeliveryCost);
        return this.findMatchingDeliveryMode(deliveryModes);
    }
    /**
     * @return {?}
     */
    isExpressCheckout() {
        return this.express;
    }
    /**
     * @return {?}
     */
    isGuestCheckout() {
        return this.guest;
    }
    /**
     * @private
     * @param {?} activatedRoute
     * @return {?}
     */
    getStepUrlFromActivatedRoute(activatedRoute) {
        return activatedRoute &&
            activatedRoute.snapshot &&
            activatedRoute.snapshot.url
            ? `/${activatedRoute.snapshot.url.join('/')}`
            : null;
    }
    /**
     * @private
     * @param {?} stepRoute
     * @return {?}
     */
    getStepUrlFromStepRoute(stepRoute) {
        return this.routingConfigService.getRouteConfig(stepRoute).paths[0];
    }
    /**
     * @private
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    getCheckoutStepIndex(key, value) {
        return key && value
            ? this.steps.findIndex((/**
             * @param {?} step
             * @return {?}
             */
            (step) => step[key].includes(value)))
            : null;
    }
}
CheckoutConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CheckoutConfigService.ctorParameters = () => [
    { type: CheckoutConfig },
    { type: RoutingConfigService }
];
/** @nocollapse */ CheckoutConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CheckoutConfigService_Factory() { return new CheckoutConfigService(i0.ɵɵinject(i1.CheckoutConfig), i0.ɵɵinject(i2.RoutingConfigService)); }, token: CheckoutConfigService, providedIn: "root" });
if (false) {
    /** @type {?} */
    CheckoutConfigService.prototype.steps;
    /**
     * @type {?}
     * @private
     */
    CheckoutConfigService.prototype.express;
    /**
     * @type {?}
     * @private
     */
    CheckoutConfigService.prototype.guest;
    /**
     * @type {?}
     * @private
     */
    CheckoutConfigService.prototype.defaultDeliveryMode;
    /**
     * @type {?}
     * @private
     */
    CheckoutConfigService.prototype.checkoutConfig;
    /**
     * @type {?}
     * @private
     */
    CheckoutConfigService.prototype.routingConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9zZXJ2aWNlcy9jaGVja291dC1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQWdCLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDckUsT0FBTyxFQUNMLGNBQWMsRUFDZCx1QkFBdUIsR0FDeEIsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQU1uQyxNQUFNLE9BQU8scUJBQXFCOzs7OztJQU9oQyxZQUNVLGNBQThCLEVBQzlCLG9CQUEwQztRQUQxQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQVJwRCxVQUFLLEdBQW1CLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUNuRCxZQUFPLEdBQVksSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3hELFVBQUssR0FBWSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDcEQsd0JBQW1CLEdBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLG1CQUFtQixJQUFJLEVBQUUsQ0FBQztJQUt0RCxDQUFDOzs7OztJQUVKLGVBQWUsQ0FBQyxlQUFpQztRQUMvQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7O0lBRUQsb0JBQW9CLENBQUMsZUFBaUM7UUFDcEQsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFNB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QUFDLElBQUksQ0FBQztJQUNYLENBQUM7Ozs7OztJQUVPLHVCQUF1QixDQUFDLFNBQWlCO1FBQy9DLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7Ozs7OztJQUVPLG9CQUFvQixDQUFDLEdBQVcsRUFBRSxLQUFVO1FBQ2xELE9BQU8sR0FBRyxJQUFJLEtBQUs7WUFDakIsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUzs7OztZQUFDLENBQUMsSUFBa0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBQztZQUN6RSxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ1gsQ0FBQzs7O1lBOUlGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVBDLGNBQWM7WUFGTyxvQkFBb0I7Ozs7O0lBV3pDLHNDQUEyRDs7Ozs7SUFDM0Qsd0NBQWdFOzs7OztJQUNoRSxzQ0FBNEQ7Ozs7O0lBQzVELG9EQUN5RDs7Ozs7SUFHdkQsK0NBQXNDOzs7OztJQUN0QyxxREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEZWxpdmVyeU1vZGUsIFJvdXRpbmdDb25maWdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7XG4gIENoZWNrb3V0Q29uZmlnLFxuICBEZWxpdmVyeU1vZGVQcmVmZXJlbmNlcyxcbn0gZnJvbSAnLi4vY29uZmlnL2NoZWNrb3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBDaGVja291dFN0ZXAsIENoZWNrb3V0U3RlcFR5cGUgfSBmcm9tICcuLi9tb2RlbC9jaGVja291dC1zdGVwLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0Q29uZmlnU2VydmljZSB7XG4gIHN0ZXBzOiBDaGVja291dFN0ZXBbXSA9IHRoaXMuY2hlY2tvdXRDb25maWcuY2hlY2tvdXQuc3RlcHM7XG4gIHByaXZhdGUgZXhwcmVzczogYm9vbGVhbiA9IHRoaXMuY2hlY2tvdXRDb25maWcuY2hlY2tvdXQuZXhwcmVzcztcbiAgcHJpdmF0ZSBndWVzdDogYm9vbGVhbiA9IHRoaXMuY2hlY2tvdXRDb25maWcuY2hlY2tvdXQuZ3Vlc3Q7XG4gIHByaXZhdGUgZGVmYXVsdERlbGl2ZXJ5TW9kZTogQXJyYXk8RGVsaXZlcnlNb2RlUHJlZmVyZW5jZXMgfCBzdHJpbmc+ID1cbiAgICB0aGlzLmNoZWNrb3V0Q29uZmlnLmNoZWNrb3V0LmRlZmF1bHREZWxpdmVyeU1vZGUgfHwgW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjaGVja291dENvbmZpZzogQ2hlY2tvdXRDb25maWcsXG4gICAgcHJpdmF0ZSByb3V0aW5nQ29uZmlnU2VydmljZTogUm91dGluZ0NvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIGdldENoZWNrb3V0U3RlcChjdXJyZW50U3RlcFR5cGU6IENoZWNrb3V0U3RlcFR5cGUpOiBDaGVja291dFN0ZXAge1xuICAgIHJldHVybiB0aGlzLnN0ZXBzW3RoaXMuZ2V0Q2hlY2tvdXRTdGVwSW5kZXgoJ3R5cGUnLCBjdXJyZW50U3RlcFR5cGUpXTtcbiAgfVxuXG4gIGdldENoZWNrb3V0U3RlcFJvdXRlKGN1cnJlbnRTdGVwVHlwZTogQ2hlY2tvdXRTdGVwVHlwZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2hlY2tvdXRTdGVwKGN1cnJlbnRTdGVwVHlwZSkucm91dGVOYW1lO1xuICB9XG5cbiAgZ2V0Rmlyc3RDaGVja291dFN0ZXBSb3V0ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnN0ZXBzWzBdLnJvdXRlTmFtZTtcbiAgfVxuXG4gIGdldE5leHRDaGVja291dFN0ZXBVcmwoYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKTogc3RyaW5nIHtcbiAgICBjb25zdCBzdGVwSW5kZXggPSB0aGlzLmdldEN1cnJlbnRTdGVwSW5kZXgoYWN0aXZhdGVkUm91dGUpO1xuXG4gICAgcmV0dXJuIHN0ZXBJbmRleCA+PSAwICYmIHRoaXMuc3RlcHNbc3RlcEluZGV4ICsgMV1cbiAgICAgID8gdGhpcy5nZXRTdGVwVXJsRnJvbVN0ZXBSb3V0ZSh0aGlzLnN0ZXBzW3N0ZXBJbmRleCArIDFdLnJvdXRlTmFtZSlcbiAgICAgIDogbnVsbDtcbiAgfVxuXG4gIGdldFByZXZpb3VzQ2hlY2tvdXRTdGVwVXJsKGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSk6IHN0cmluZyB7XG4gICAgY29uc3Qgc3RlcEluZGV4ID0gdGhpcy5nZXRDdXJyZW50U3RlcEluZGV4KGFjdGl2YXRlZFJvdXRlKTtcblxuICAgIHJldHVybiBzdGVwSW5kZXggPj0gMCAmJiB0aGlzLnN0ZXBzW3N0ZXBJbmRleCAtIDFdXG4gICAgICA/IHRoaXMuZ2V0U3RlcFVybEZyb21TdGVwUm91dGUodGhpcy5zdGVwc1tzdGVwSW5kZXggLSAxXS5yb3V0ZU5hbWUpXG4gICAgICA6IG51bGw7XG4gIH1cblxuICBnZXRDdXJyZW50U3RlcEluZGV4KGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSk6IG51bWJlciB8IG51bGwge1xuICAgIGNvbnN0IGN1cnJlbnRTdGVwVXJsOiBzdHJpbmcgPSB0aGlzLmdldFN0ZXBVcmxGcm9tQWN0aXZhdGVkUm91dGUoXG4gICAgICBhY3RpdmF0ZWRSb3V0ZVxuICAgICk7XG5cbiAgICBsZXQgc3RlcEluZGV4OiBudW1iZXI7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBmb3IgKGNvbnN0IHN0ZXAgb2YgdGhpcy5zdGVwcykge1xuICAgICAgaWYgKFxuICAgICAgICBjdXJyZW50U3RlcFVybCA9PT0gYC8ke3RoaXMuZ2V0U3RlcFVybEZyb21TdGVwUm91dGUoc3RlcC5yb3V0ZU5hbWUpfWBcbiAgICAgICkge1xuICAgICAgICBzdGVwSW5kZXggPSBpbmRleDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0ZXBJbmRleCA+PSAwID8gc3RlcEluZGV4IDogbnVsbDtcbiAgfVxuXG4gIHByb3RlY3RlZCBjb21wYXJlRGVsaXZlcnlDb3N0KFxuICAgIGRlbGl2ZXJ5TW9kZTE6IERlbGl2ZXJ5TW9kZSxcbiAgICBkZWxpdmVyeU1vZGUyOiBEZWxpdmVyeU1vZGVcbiAgKTogbnVtYmVyIHtcbiAgICBpZiAoZGVsaXZlcnlNb2RlMS5kZWxpdmVyeUNvc3QudmFsdWUgPiBkZWxpdmVyeU1vZGUyLmRlbGl2ZXJ5Q29zdC52YWx1ZSkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGRlbGl2ZXJ5TW9kZTEuZGVsaXZlcnlDb3N0LnZhbHVlIDwgZGVsaXZlcnlNb2RlMi5kZWxpdmVyeUNvc3QudmFsdWVcbiAgICApIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmluZE1hdGNoaW5nRGVsaXZlcnlNb2RlKFxuICAgIGRlbGl2ZXJ5TW9kZXM6IERlbGl2ZXJ5TW9kZVtdLFxuICAgIGluZGV4ID0gMFxuICApOiBzdHJpbmcge1xuICAgIHN3aXRjaCAodGhpcy5kZWZhdWx0RGVsaXZlcnlNb2RlW2luZGV4XSkge1xuICAgICAgY2FzZSBEZWxpdmVyeU1vZGVQcmVmZXJlbmNlcy5GUkVFOlxuICAgICAgICBpZiAoZGVsaXZlcnlNb2Rlc1swXS5kZWxpdmVyeUNvc3QudmFsdWUgPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gZGVsaXZlcnlNb2Rlc1swXS5jb2RlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBEZWxpdmVyeU1vZGVQcmVmZXJlbmNlcy5MRUFTVF9FWFBFTlNJVkU6XG4gICAgICAgIGNvbnN0IGxlYXN0RXhwZW5zaXZlRm91bmQgPSBkZWxpdmVyeU1vZGVzLmZpbmQoXG4gICAgICAgICAgZGVsaXZlcnlNb2RlID0+IGRlbGl2ZXJ5TW9kZS5kZWxpdmVyeUNvc3QudmFsdWUgIT09IDBcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGxlYXN0RXhwZW5zaXZlRm91bmQpIHtcbiAgICAgICAgICByZXR1cm4gbGVhc3RFeHBlbnNpdmVGb3VuZC5jb2RlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBEZWxpdmVyeU1vZGVQcmVmZXJlbmNlcy5NT1NUX0VYUEVOU0lWRTpcbiAgICAgICAgcmV0dXJuIGRlbGl2ZXJ5TW9kZXNbZGVsaXZlcnlNb2Rlcy5sZW5ndGggLSAxXS5jb2RlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc3QgY29kZUZvdW5kID0gZGVsaXZlcnlNb2Rlcy5maW5kKFxuICAgICAgICAgIGRlbGl2ZXJ5TW9kZSA9PiBkZWxpdmVyeU1vZGUuY29kZSA9PT0gdGhpcy5kZWZhdWx0RGVsaXZlcnlNb2RlW2luZGV4XVxuICAgICAgICApO1xuICAgICAgICBpZiAoY29kZUZvdW5kKSB7XG4gICAgICAgICAgcmV0dXJuIGNvZGVGb3VuZC5jb2RlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGxhc3RNb2RlID0gdGhpcy5kZWZhdWx0RGVsaXZlcnlNb2RlLmxlbmd0aCAtIDEgPD0gaW5kZXg7XG4gICAgcmV0dXJuIGxhc3RNb2RlXG4gICAgICA/IGRlbGl2ZXJ5TW9kZXNbMF0uY29kZVxuICAgICAgOiB0aGlzLmZpbmRNYXRjaGluZ0RlbGl2ZXJ5TW9kZShkZWxpdmVyeU1vZGVzLCBpbmRleCArIDEpO1xuICB9XG5cbiAgZ2V0UHJlZmVycmVkRGVsaXZlcnlNb2RlKGRlbGl2ZXJ5TW9kZXM6IERlbGl2ZXJ5TW9kZVtdKTogc3RyaW5nIHtcbiAgICBkZWxpdmVyeU1vZGVzLnNvcnQodGhpcy5jb21wYXJlRGVsaXZlcnlDb3N0KTtcbiAgICByZXR1cm4gdGhpcy5maW5kTWF0Y2hpbmdEZWxpdmVyeU1vZGUoZGVsaXZlcnlNb2Rlcyk7XG4gIH1cblxuICBpc0V4cHJlc3NDaGVja291dCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5leHByZXNzO1xuICB9XG5cbiAgaXNHdWVzdENoZWNrb3V0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmd1ZXN0O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdGVwVXJsRnJvbUFjdGl2YXRlZFJvdXRlKFxuICAgIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICApOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gYWN0aXZhdGVkUm91dGUgJiZcbiAgICAgIGFjdGl2YXRlZFJvdXRlLnNuYXBzaG90ICYmXG4gICAgICBhY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC51cmxcbiAgICAgID8gYC8ke2FjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnVybC5qb2luKCcvJyl9YFxuICAgICAgOiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdGVwVXJsRnJvbVN0ZXBSb3V0ZShzdGVwUm91dGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ0NvbmZpZ1NlcnZpY2UuZ2V0Um91dGVDb25maWcoc3RlcFJvdXRlKS5wYXRoc1swXTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2hlY2tvdXRTdGVwSW5kZXgoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBudW1iZXIgfCBudWxsIHtcbiAgICByZXR1cm4ga2V5ICYmIHZhbHVlXG4gICAgICA/IHRoaXMuc3RlcHMuZmluZEluZGV4KChzdGVwOiBDaGVja291dFN0ZXApID0+IHN0ZXBba2V5XS5pbmNsdWRlcyh2YWx1ZSkpXG4gICAgICA6IG51bGw7XG4gIH1cbn1cbiJdfQ==