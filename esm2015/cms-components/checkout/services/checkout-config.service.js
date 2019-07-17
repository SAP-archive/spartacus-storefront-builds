/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { RoutingConfigService } from '@spartacus/core';
import { CheckoutConfig } from '../config/checkout-config';
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
    }
    /**
     * @param {?} currentStepType
     * @return {?}
     */
    getCheckoutStep(currentStepType) {
        return this.steps[this.getCheckoutStepIndex('type', currentStepType)];
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
    CheckoutConfigService.prototype.checkoutConfig;
    /**
     * @type {?}
     * @private
     */
    CheckoutConfigService.prototype.routingConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9zZXJ2aWNlcy9jaGVja291dC1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFNM0QsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7SUFHaEMsWUFDVSxjQUE4QixFQUM5QixvQkFBMEM7UUFEMUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFKcEQsVUFBSyxHQUFtQixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7SUFLeEQsQ0FBQzs7Ozs7SUFFSixlQUFlLENBQUMsZUFBaUM7UUFDL0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7OztJQUVELHNCQUFzQixDQUFDLGNBQThCOztjQUM3QyxTQUFTLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQztRQUUxRCxPQUFPLFNBQVMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ2hELENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQ25FLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDWCxDQUFDOzs7OztJQUVELDBCQUEwQixDQUFDLGNBQThCOztjQUNqRCxTQUFTLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQztRQUUxRCxPQUFPLFNBQVMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ2hELENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQ25FLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDWCxDQUFDOzs7OztJQUVELG1CQUFtQixDQUFDLGNBQThCOztjQUMxQyxjQUFjLEdBQVcsSUFBSSxDQUFDLDRCQUE0QixDQUM5RCxjQUFjLENBQ2Y7O1lBRUcsU0FBaUI7O1lBQ2pCLEtBQUssR0FBRyxDQUFDO1FBQ2IsS0FBSyxNQUFNLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQzdCLElBQ0UsY0FBYyxLQUFLLElBQUksSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUNyRTtnQkFDQSxTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQ25CO2lCQUFNO2dCQUNMLEtBQUssRUFBRSxDQUFDO2FBQ1Q7U0FDRjtRQUVELE9BQU8sU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDM0MsQ0FBQzs7Ozs7O0lBRU8sNEJBQTRCLENBQUMsY0FBOEI7UUFDakUsT0FBTyxjQUFjO1lBQ25CLGNBQWMsQ0FBQyxRQUFRO1lBQ3ZCLGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRztZQUMzQixDQUFDLENBQUMsSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0MsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNYLENBQUM7Ozs7OztJQUVPLHVCQUF1QixDQUFDLFNBQWlCO1FBQy9DLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7Ozs7OztJQUVPLG9CQUFvQixDQUFDLEdBQVcsRUFBRSxLQUFVO1FBQ2xELE9BQU8sR0FBRyxJQUFJLEtBQUs7WUFDakIsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUzs7OztZQUFDLENBQUMsSUFBa0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBQztZQUN6RSxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ1gsQ0FBQzs7O1lBbkVGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUxRLGNBQWM7WUFEZCxvQkFBb0I7Ozs7O0lBUTNCLHNDQUEyRDs7Ozs7SUFHekQsK0NBQXNDOzs7OztJQUN0QyxxREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0aW5nQ29uZmlnU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDaGVja291dENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jaGVja291dC1jb25maWcnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdGVwLCBDaGVja291dFN0ZXBUeXBlIH0gZnJvbSAnLi4vbW9kZWwvY2hlY2tvdXQtc3RlcC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dENvbmZpZ1NlcnZpY2Uge1xuICBzdGVwczogQ2hlY2tvdXRTdGVwW10gPSB0aGlzLmNoZWNrb3V0Q29uZmlnLmNoZWNrb3V0LnN0ZXBzO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2hlY2tvdXRDb25maWc6IENoZWNrb3V0Q29uZmlnLFxuICAgIHByaXZhdGUgcm91dGluZ0NvbmZpZ1NlcnZpY2U6IFJvdXRpbmdDb25maWdTZXJ2aWNlXG4gICkge31cblxuICBnZXRDaGVja291dFN0ZXAoY3VycmVudFN0ZXBUeXBlOiBDaGVja291dFN0ZXBUeXBlKTogQ2hlY2tvdXRTdGVwIHtcbiAgICByZXR1cm4gdGhpcy5zdGVwc1t0aGlzLmdldENoZWNrb3V0U3RlcEluZGV4KCd0eXBlJywgY3VycmVudFN0ZXBUeXBlKV07XG4gIH1cblxuICBnZXROZXh0Q2hlY2tvdXRTdGVwVXJsKGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSk6IHN0cmluZyB7XG4gICAgY29uc3Qgc3RlcEluZGV4ID0gdGhpcy5nZXRDdXJyZW50U3RlcEluZGV4KGFjdGl2YXRlZFJvdXRlKTtcblxuICAgIHJldHVybiBzdGVwSW5kZXggPj0gMCAmJiB0aGlzLnN0ZXBzW3N0ZXBJbmRleCArIDFdXG4gICAgICA/IHRoaXMuZ2V0U3RlcFVybEZyb21TdGVwUm91dGUodGhpcy5zdGVwc1tzdGVwSW5kZXggKyAxXS5yb3V0ZU5hbWUpXG4gICAgICA6IG51bGw7XG4gIH1cblxuICBnZXRQcmV2aW91c0NoZWNrb3V0U3RlcFVybChhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpOiBzdHJpbmcge1xuICAgIGNvbnN0IHN0ZXBJbmRleCA9IHRoaXMuZ2V0Q3VycmVudFN0ZXBJbmRleChhY3RpdmF0ZWRSb3V0ZSk7XG5cbiAgICByZXR1cm4gc3RlcEluZGV4ID49IDAgJiYgdGhpcy5zdGVwc1tzdGVwSW5kZXggLSAxXVxuICAgICAgPyB0aGlzLmdldFN0ZXBVcmxGcm9tU3RlcFJvdXRlKHRoaXMuc3RlcHNbc3RlcEluZGV4IC0gMV0ucm91dGVOYW1lKVxuICAgICAgOiBudWxsO1xuICB9XG5cbiAgZ2V0Q3VycmVudFN0ZXBJbmRleChhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgICBjb25zdCBjdXJyZW50U3RlcFVybDogc3RyaW5nID0gdGhpcy5nZXRTdGVwVXJsRnJvbUFjdGl2YXRlZFJvdXRlKFxuICAgICAgYWN0aXZhdGVkUm91dGVcbiAgICApO1xuXG4gICAgbGV0IHN0ZXBJbmRleDogbnVtYmVyO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgZm9yIChjb25zdCBzdGVwIG9mIHRoaXMuc3RlcHMpIHtcbiAgICAgIGlmIChcbiAgICAgICAgY3VycmVudFN0ZXBVcmwgPT09IGAvJHt0aGlzLmdldFN0ZXBVcmxGcm9tU3RlcFJvdXRlKHN0ZXAucm91dGVOYW1lKX1gXG4gICAgICApIHtcbiAgICAgICAgc3RlcEluZGV4ID0gaW5kZXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRleCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGVwSW5kZXggPj0gMCA/IHN0ZXBJbmRleCA6IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGdldFN0ZXBVcmxGcm9tQWN0aXZhdGVkUm91dGUoYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgcmV0dXJuIGFjdGl2YXRlZFJvdXRlICYmXG4gICAgICBhY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdCAmJlxuICAgICAgYWN0aXZhdGVkUm91dGUuc25hcHNob3QudXJsXG4gICAgICA/IGAvJHthY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC51cmwuam9pbignLycpfWBcbiAgICAgIDogbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3RlcFVybEZyb21TdGVwUm91dGUoc3RlcFJvdXRlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0aW5nQ29uZmlnU2VydmljZS5nZXRSb3V0ZUNvbmZpZyhzdGVwUm91dGUpLnBhdGhzWzBdO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDaGVja291dFN0ZXBJbmRleChrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IG51bWJlciB7XG4gICAgcmV0dXJuIGtleSAmJiB2YWx1ZVxuICAgICAgPyB0aGlzLnN0ZXBzLmZpbmRJbmRleCgoc3RlcDogQ2hlY2tvdXRTdGVwKSA9PiBzdGVwW2tleV0uaW5jbHVkZXModmFsdWUpKVxuICAgICAgOiBudWxsO1xuICB9XG59XG4iXX0=