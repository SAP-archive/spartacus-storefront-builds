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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9zZXJ2aWNlcy9jaGVja291dC1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQWdCLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDckUsT0FBTyxFQUNMLGNBQWMsRUFDZCx1QkFBdUIsR0FDeEIsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQU1uQyxNQUFNLE9BQU8scUJBQXFCOzs7OztJQU1oQyxZQUNVLGNBQThCLEVBQzlCLG9CQUEwQztRQUQxQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQVBwRCxVQUFLLEdBQW1CLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUNuRCxZQUFPLEdBQVksSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3hELHdCQUFtQixHQUN6QixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsSUFBSSxFQUFFLENBQUM7SUFLdEQsQ0FBQzs7Ozs7SUFFSixlQUFlLENBQUMsZUFBaUM7UUFDL0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7OztJQUVELG9CQUFvQixDQUFDLGVBQWlDO1FBQ3BELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDekQsQ0FBQzs7OztJQUVELHlCQUF5QjtRQUN2QixPQUFPLElBQUksQ0FBQyxL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S0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7Ozs7Ozs7SUFFTyxvQkFBb0IsQ0FBQyxHQUFXLEVBQUUsS0FBVTtRQUNsRCxPQUFPLEdBQUcsSUFBSSxLQUFLO1lBQ2pCLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7Ozs7WUFBQyxDQUFDLElBQWtCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUM7WUFDekUsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNYLENBQUM7OztZQXpJRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFQQyxjQUFjO1lBRk8sb0JBQW9COzs7OztJQVd6QyxzQ0FBMkQ7Ozs7O0lBQzNELHdDQUFnRTs7Ozs7SUFDaEUsb0RBQ3lEOzs7OztJQUd2RCwrQ0FBc0M7Ozs7O0lBQ3RDLHFEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IERlbGl2ZXJ5TW9kZSwgUm91dGluZ0NvbmZpZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2hlY2tvdXRDb25maWcsXG4gIERlbGl2ZXJ5TW9kZVByZWZlcmVuY2VzLFxufSBmcm9tICcuLi9jb25maWcvY2hlY2tvdXQtY29uZmlnJztcbmltcG9ydCB7IENoZWNrb3V0U3RlcCwgQ2hlY2tvdXRTdGVwVHlwZSB9IGZyb20gJy4uL21vZGVsL2NoZWNrb3V0LXN0ZXAubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRDb25maWdTZXJ2aWNlIHtcbiAgc3RlcHM6IENoZWNrb3V0U3RlcFtdID0gdGhpcy5jaGVja291dENvbmZpZy5jaGVja291dC5zdGVwcztcbiAgcHJpdmF0ZSBleHByZXNzOiBib29sZWFuID0gdGhpcy5jaGVja291dENvbmZpZy5jaGVja291dC5leHByZXNzO1xuICBwcml2YXRlIGRlZmF1bHREZWxpdmVyeU1vZGU6IEFycmF5PERlbGl2ZXJ5TW9kZVByZWZlcmVuY2VzIHwgc3RyaW5nPiA9XG4gICAgdGhpcy5jaGVja291dENvbmZpZy5jaGVja291dC5kZWZhdWx0RGVsaXZlcnlNb2RlIHx8IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2hlY2tvdXRDb25maWc6IENoZWNrb3V0Q29uZmlnLFxuICAgIHByaXZhdGUgcm91dGluZ0NvbmZpZ1NlcnZpY2U6IFJvdXRpbmdDb25maWdTZXJ2aWNlXG4gICkge31cblxuICBnZXRDaGVja291dFN0ZXAoY3VycmVudFN0ZXBUeXBlOiBDaGVja291dFN0ZXBUeXBlKTogQ2hlY2tvdXRTdGVwIHtcbiAgICByZXR1cm4gdGhpcy5zdGVwc1t0aGlzLmdldENoZWNrb3V0U3RlcEluZGV4KCd0eXBlJywgY3VycmVudFN0ZXBUeXBlKV07XG4gIH1cblxuICBnZXRDaGVja291dFN0ZXBSb3V0ZShjdXJyZW50U3RlcFR5cGU6IENoZWNrb3V0U3RlcFR5cGUpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmdldENoZWNrb3V0U3RlcChjdXJyZW50U3RlcFR5cGUpLnJvdXRlTmFtZTtcbiAgfVxuXG4gIGdldEZpcnN0Q2hlY2tvdXRTdGVwUm91dGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zdGVwc1swXS5yb3V0ZU5hbWU7XG4gIH1cblxuICBnZXROZXh0Q2hlY2tvdXRTdGVwVXJsKGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSk6IHN0cmluZyB7XG4gICAgY29uc3Qgc3RlcEluZGV4ID0gdGhpcy5nZXRDdXJyZW50U3RlcEluZGV4KGFjdGl2YXRlZFJvdXRlKTtcblxuICAgIHJldHVybiBzdGVwSW5kZXggPj0gMCAmJiB0aGlzLnN0ZXBzW3N0ZXBJbmRleCArIDFdXG4gICAgICA/IHRoaXMuZ2V0U3RlcFVybEZyb21TdGVwUm91dGUodGhpcy5zdGVwc1tzdGVwSW5kZXggKyAxXS5yb3V0ZU5hbWUpXG4gICAgICA6IG51bGw7XG4gIH1cblxuICBnZXRQcmV2aW91c0NoZWNrb3V0U3RlcFVybChhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpOiBzdHJpbmcge1xuICAgIGNvbnN0IHN0ZXBJbmRleCA9IHRoaXMuZ2V0Q3VycmVudFN0ZXBJbmRleChhY3RpdmF0ZWRSb3V0ZSk7XG5cbiAgICByZXR1cm4gc3RlcEluZGV4ID49IDAgJiYgdGhpcy5zdGVwc1tzdGVwSW5kZXggLSAxXVxuICAgICAgPyB0aGlzLmdldFN0ZXBVcmxGcm9tU3RlcFJvdXRlKHRoaXMuc3RlcHNbc3RlcEluZGV4IC0gMV0ucm91dGVOYW1lKVxuICAgICAgOiBudWxsO1xuICB9XG5cbiAgZ2V0Q3VycmVudFN0ZXBJbmRleChhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpOiBudW1iZXIgfCBudWxsIHtcbiAgICBjb25zdCBjdXJyZW50U3RlcFVybDogc3RyaW5nID0gdGhpcy5nZXRTdGVwVXJsRnJvbUFjdGl2YXRlZFJvdXRlKFxuICAgICAgYWN0aXZhdGVkUm91dGVcbiAgICApO1xuXG4gICAgbGV0IHN0ZXBJbmRleDogbnVtYmVyO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgZm9yIChjb25zdCBzdGVwIG9mIHRoaXMuc3RlcHMpIHtcbiAgICAgIGlmIChcbiAgICAgICAgY3VycmVudFN0ZXBVcmwgPT09IGAvJHt0aGlzLmdldFN0ZXBVcmxGcm9tU3RlcFJvdXRlKHN0ZXAucm91dGVOYW1lKX1gXG4gICAgICApIHtcbiAgICAgICAgc3RlcEluZGV4ID0gaW5kZXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRleCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGVwSW5kZXggPj0gMCA/IHN0ZXBJbmRleCA6IG51bGw7XG4gIH1cblxuICBwcm90ZWN0ZWQgY29tcGFyZURlbGl2ZXJ5Q29zdChcbiAgICBkZWxpdmVyeU1vZGUxOiBEZWxpdmVyeU1vZGUsXG4gICAgZGVsaXZlcnlNb2RlMjogRGVsaXZlcnlNb2RlXG4gICk6IG51bWJlciB7XG4gICAgaWYgKGRlbGl2ZXJ5TW9kZTEuZGVsaXZlcnlDb3N0LnZhbHVlID4gZGVsaXZlcnlNb2RlMi5kZWxpdmVyeUNvc3QudmFsdWUpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBkZWxpdmVyeU1vZGUxLmRlbGl2ZXJ5Q29zdC52YWx1ZSA8IGRlbGl2ZXJ5TW9kZTIuZGVsaXZlcnlDb3N0LnZhbHVlXG4gICAgKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpbmRNYXRjaGluZ0RlbGl2ZXJ5TW9kZShcbiAgICBkZWxpdmVyeU1vZGVzOiBEZWxpdmVyeU1vZGVbXSxcbiAgICBpbmRleCA9IDBcbiAgKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKHRoaXMuZGVmYXVsdERlbGl2ZXJ5TW9kZVtpbmRleF0pIHtcbiAgICAgIGNhc2UgRGVsaXZlcnlNb2RlUHJlZmVyZW5jZXMuRlJFRTpcbiAgICAgICAgaWYgKGRlbGl2ZXJ5TW9kZXNbMF0uZGVsaXZlcnlDb3N0LnZhbHVlID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIGRlbGl2ZXJ5TW9kZXNbMF0uY29kZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRGVsaXZlcnlNb2RlUHJlZmVyZW5jZXMuTEVBU1RfRVhQRU5TSVZFOlxuICAgICAgICBjb25zdCBsZWFzdEV4cGVuc2l2ZUZvdW5kID0gZGVsaXZlcnlNb2Rlcy5maW5kKFxuICAgICAgICAgIGRlbGl2ZXJ5TW9kZSA9PiBkZWxpdmVyeU1vZGUuZGVsaXZlcnlDb3N0LnZhbHVlICE9PSAwXG4gICAgICAgICk7XG4gICAgICAgIGlmIChsZWFzdEV4cGVuc2l2ZUZvdW5kKSB7XG4gICAgICAgICAgcmV0dXJuIGxlYXN0RXhwZW5zaXZlRm91bmQuY29kZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRGVsaXZlcnlNb2RlUHJlZmVyZW5jZXMuTU9TVF9FWFBFTlNJVkU6XG4gICAgICAgIHJldHVybiBkZWxpdmVyeU1vZGVzW2RlbGl2ZXJ5TW9kZXMubGVuZ3RoIC0gMV0uY29kZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnN0IGNvZGVGb3VuZCA9IGRlbGl2ZXJ5TW9kZXMuZmluZChcbiAgICAgICAgICBkZWxpdmVyeU1vZGUgPT4gZGVsaXZlcnlNb2RlLmNvZGUgPT09IHRoaXMuZGVmYXVsdERlbGl2ZXJ5TW9kZVtpbmRleF1cbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGNvZGVGb3VuZCkge1xuICAgICAgICAgIHJldHVybiBjb2RlRm91bmQuY29kZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBsYXN0TW9kZSA9IHRoaXMuZGVmYXVsdERlbGl2ZXJ5TW9kZS5sZW5ndGggLSAxIDw9IGluZGV4O1xuICAgIHJldHVybiBsYXN0TW9kZVxuICAgICAgPyBkZWxpdmVyeU1vZGVzWzBdLmNvZGVcbiAgICAgIDogdGhpcy5maW5kTWF0Y2hpbmdEZWxpdmVyeU1vZGUoZGVsaXZlcnlNb2RlcywgaW5kZXggKyAxKTtcbiAgfVxuXG4gIGdldFByZWZlcnJlZERlbGl2ZXJ5TW9kZShkZWxpdmVyeU1vZGVzOiBEZWxpdmVyeU1vZGVbXSk6IHN0cmluZyB7XG4gICAgZGVsaXZlcnlNb2Rlcy5zb3J0KHRoaXMuY29tcGFyZURlbGl2ZXJ5Q29zdCk7XG4gICAgcmV0dXJuIHRoaXMuZmluZE1hdGNoaW5nRGVsaXZlcnlNb2RlKGRlbGl2ZXJ5TW9kZXMpO1xuICB9XG5cbiAgaXNFeHByZXNzQ2hlY2tvdXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZXhwcmVzcztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3RlcFVybEZyb21BY3RpdmF0ZWRSb3V0ZShcbiAgICBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIGFjdGl2YXRlZFJvdXRlICYmXG4gICAgICBhY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdCAmJlxuICAgICAgYWN0aXZhdGVkUm91dGUuc25hcHNob3QudXJsXG4gICAgICA/IGAvJHthY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC51cmwuam9pbignLycpfWBcbiAgICAgIDogbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3RlcFVybEZyb21TdGVwUm91dGUoc3RlcFJvdXRlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnJvdXRpbmdDb25maWdTZXJ2aWNlLmdldFJvdXRlQ29uZmlnKHN0ZXBSb3V0ZSkucGF0aHNbMF07XG4gIH1cblxuICBwcml2YXRlIGdldENoZWNrb3V0U3RlcEluZGV4KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogbnVtYmVyIHwgbnVsbCB7XG4gICAgcmV0dXJuIGtleSAmJiB2YWx1ZVxuICAgICAgPyB0aGlzLnN0ZXBzLmZpbmRJbmRleCgoc3RlcDogQ2hlY2tvdXRTdGVwKSA9PiBzdGVwW2tleV0uaW5jbHVkZXModmFsdWUpKVxuICAgICAgOiBudWxsO1xuICB9XG59XG4iXX0=