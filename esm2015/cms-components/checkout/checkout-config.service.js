/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CheckoutConfig } from './config/checkout-config';
import { RoutingConfigService } from '@spartacus/core';
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
            ? this.steps.findIndex((step) => step[key].includes(value))
            : null;
    }
}
CheckoutConfigService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CheckoutConfigService.ctorParameters = () => [
    { type: CheckoutConfig },
    { type: RoutingConfigService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jaGVja291dC1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHMUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHdkQsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7SUFHaEMsWUFDVSxjQUE4QixFQUM5QixvQkFBMEM7UUFEMUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFKcEQsVUFBSyxHQUFtQixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7SUFLeEQsQ0FBQzs7Ozs7SUFFSixlQUFlLENBQUMsZUFBaUM7UUFDL0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7OztJQUVELHNCQUFzQixDQUFDLGNBQThCOztjQUM3QyxTQUFTLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQztRQUUxRCxPQUFPLFNBQVMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ2hELENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQ25FLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDWCxDQUFDOzs7OztJQUVELDBCQUEwQixDQUFDLGNBQThCOztjQUNqRCxTQUFTLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQztRQUUxRCxPQUFPLFNBQVMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ2hELENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQ25FLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDWCxDQUFDOzs7OztJQUVELG1CQUFtQixDQUFDLGNBQThCOztjQUMxQyxjQUFjLEdBQVcsSUFBSSxDQUFDLDRCQUE0QixDQUM5RCxjQUFjLENBQ2Y7O1lBRUcsU0FBaUI7O1lBQ2pCLEtBQUssR0FBRyxDQUFDO1FBQ2IsS0FBSyxNQUFNLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQzdCLElBQ0UsY0FBYyxLQUFLLElBQUksSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUNyRTtnQkFDQSxTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQ25CO2lCQUFNO2dCQUNMLEtBQUssRUFBRSxDQUFDO2FBQ1Q7U0FDRjtRQUVELE9BQU8sU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDM0MsQ0FBQzs7Ozs7O0lBRU8sNEJBQTRCLENBQUMsY0FBOEI7UUFDakUsT0FBTyxjQUFjO1lBQ25CLGNBQWMsQ0FBQyxRQUFRO1lBQ3ZCLGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRztZQUMzQixDQUFDLENBQUMsSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0MsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNYLENBQUM7Ozs7OztJQUVPLHVCQUF1QixDQUFDLFNBQWlCO1FBQy9DLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7Ozs7OztJQUVPLG9CQUFvQixDQUFDLEdBQVcsRUFBRSxLQUFVO1FBQ2xELE9BQU8sR0FBRyxJQUFJLEtBQUs7WUFDakIsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBa0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6RSxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ1gsQ0FBQzs7O1lBakVGLFVBQVU7Ozs7WUFMRixjQUFjO1lBR2Qsb0JBQW9COzs7O0lBSTNCLHNDQUEyRDs7Ozs7SUFHekQsK0NBQXNDOzs7OztJQUN0QyxxREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGVja291dENvbmZpZyB9IGZyb20gJy4vY29uZmlnL2NoZWNrb3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDaGVja291dFN0ZXAsIENoZWNrb3V0U3RlcFR5cGUgfSBmcm9tICcuL21vZGVsL2NoZWNrb3V0LXN0ZXAubW9kZWwnO1xuaW1wb3J0IHsgUm91dGluZ0NvbmZpZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRDb25maWdTZXJ2aWNlIHtcbiAgc3RlcHM6IENoZWNrb3V0U3RlcFtdID0gdGhpcy5jaGVja291dENvbmZpZy5jaGVja291dC5zdGVwcztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNoZWNrb3V0Q29uZmlnOiBDaGVja291dENvbmZpZyxcbiAgICBwcml2YXRlIHJvdXRpbmdDb25maWdTZXJ2aWNlOiBSb3V0aW5nQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgZ2V0Q2hlY2tvdXRTdGVwKGN1cnJlbnRTdGVwVHlwZTogQ2hlY2tvdXRTdGVwVHlwZSk6IENoZWNrb3V0U3RlcCB7XG4gICAgcmV0dXJuIHRoaXMuc3RlcHNbdGhpcy5nZXRDaGVja291dFN0ZXBJbmRleCgndHlwZScsIGN1cnJlbnRTdGVwVHlwZSldO1xuICB9XG5cbiAgZ2V0TmV4dENoZWNrb3V0U3RlcFVybChhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpOiBzdHJpbmcge1xuICAgIGNvbnN0IHN0ZXBJbmRleCA9IHRoaXMuZ2V0Q3VycmVudFN0ZXBJbmRleChhY3RpdmF0ZWRSb3V0ZSk7XG5cbiAgICByZXR1cm4gc3RlcEluZGV4ID49IDAgJiYgdGhpcy5zdGVwc1tzdGVwSW5kZXggKyAxXVxuICAgICAgPyB0aGlzLmdldFN0ZXBVcmxGcm9tU3RlcFJvdXRlKHRoaXMuc3RlcHNbc3RlcEluZGV4ICsgMV0ucm91dGVOYW1lKVxuICAgICAgOiBudWxsO1xuICB9XG5cbiAgZ2V0UHJldmlvdXNDaGVja291dFN0ZXBVcmwoYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKTogc3RyaW5nIHtcbiAgICBjb25zdCBzdGVwSW5kZXggPSB0aGlzLmdldEN1cnJlbnRTdGVwSW5kZXgoYWN0aXZhdGVkUm91dGUpO1xuXG4gICAgcmV0dXJuIHN0ZXBJbmRleCA+PSAwICYmIHRoaXMuc3RlcHNbc3RlcEluZGV4IC0gMV1cbiAgICAgID8gdGhpcy5nZXRTdGVwVXJsRnJvbVN0ZXBSb3V0ZSh0aGlzLnN0ZXBzW3N0ZXBJbmRleCAtIDFdLnJvdXRlTmFtZSlcbiAgICAgIDogbnVsbDtcbiAgfVxuXG4gIGdldEN1cnJlbnRTdGVwSW5kZXgoYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgY29uc3QgY3VycmVudFN0ZXBVcmw6IHN0cmluZyA9IHRoaXMuZ2V0U3RlcFVybEZyb21BY3RpdmF0ZWRSb3V0ZShcbiAgICAgIGFjdGl2YXRlZFJvdXRlXG4gICAgKTtcblxuICAgIGxldCBzdGVwSW5kZXg6IG51bWJlcjtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGZvciAoY29uc3Qgc3RlcCBvZiB0aGlzLnN0ZXBzKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGN1cnJlbnRTdGVwVXJsID09PSBgLyR7dGhpcy5nZXRTdGVwVXJsRnJvbVN0ZXBSb3V0ZShzdGVwLnJvdXRlTmFtZSl9YFxuICAgICAgKSB7XG4gICAgICAgIHN0ZXBJbmRleCA9IGluZGV4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RlcEluZGV4ID49IDAgPyBzdGVwSW5kZXggOiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdGVwVXJsRnJvbUFjdGl2YXRlZFJvdXRlKGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgIHJldHVybiBhY3RpdmF0ZWRSb3V0ZSAmJlxuICAgICAgYWN0aXZhdGVkUm91dGUuc25hcHNob3QgJiZcbiAgICAgIGFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnVybFxuICAgICAgPyBgLyR7YWN0aXZhdGVkUm91dGUuc25hcHNob3QudXJsLmpvaW4oJy8nKX1gXG4gICAgICA6IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGdldFN0ZXBVcmxGcm9tU3RlcFJvdXRlKHN0ZXBSb3V0ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ0NvbmZpZ1NlcnZpY2UuZ2V0Um91dGVDb25maWcoc3RlcFJvdXRlKS5wYXRoc1swXTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2hlY2tvdXRTdGVwSW5kZXgoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBudW1iZXIge1xuICAgIHJldHVybiBrZXkgJiYgdmFsdWVcbiAgICAgID8gdGhpcy5zdGVwcy5maW5kSW5kZXgoKHN0ZXA6IENoZWNrb3V0U3RlcCkgPT4gc3RlcFtrZXldLmluY2x1ZGVzKHZhbHVlKSlcbiAgICAgIDogbnVsbDtcbiAgfVxufVxuIl19