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
        const currentStepUrl = this.getStepUrlFromActivatedRoute(activatedRoute);
        /** @type {?} */
        let stepIndex;
        this.steps.forEach((step, index) => {
            if (currentStepUrl === `/${this.getStepUrlFromStepRoute(step.routeName)}`) {
                stepIndex = index;
            }
        });
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
        const currentStepUrl = this.getStepUrlFromActivatedRoute(activatedRoute);
        /** @type {?} */
        let stepIndex;
        this.steps.forEach((step, index) => {
            if (currentStepUrl === `/${this.getStepUrlFromStepRoute(step.routeName)}`) {
                stepIndex = index;
            }
        });
        return stepIndex >= 1 && this.steps[stepIndex - 1]
            ? this.getStepUrlFromStepRoute(this.steps[stepIndex - 1].routeName)
            : null;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRzFELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR3ZELE1BQU0sT0FBTyxxQkFBcUI7Ozs7O0lBR2hDLFlBQ1UsY0FBOEIsRUFDOUIsb0JBQTBDO1FBRDFDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBSnBELFVBQUssR0FBbUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBS3hELENBQUM7Ozs7O0lBRUosZUFBZSxDQUFDLGVBQWlDO1FBQy9DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Ozs7SUFFRCxzQkFBc0IsQ0FBQyxjQUE4Qjs7Y0FDN0MsY0FBYyxHQUFXLElBQUksQ0FBQyw0QkFBNEIsQ0FDOUQsY0FBYyxDQUNmOztZQUVHLFNBQWlCO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ2pDLElBQ0UsY0FBYyxLQUFLLElBQUksSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUNyRTtnQkFDQSxTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQ25CO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLFNBQVMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ2hELENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQ25FLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDWCxDQUFDOzs7OztJQUVELDBCQUEwQixDQUFDLGNBQThCOztjQUNqRCxjQUFjLEdBQVcsSUFBSSxDQUFDLDRCQUE0QixDQUM5RCxjQUFjLENBQ2Y7O1lBRUcsU0FBaUI7UUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDakMsSUFDRSxjQUFjLEtBQUssSUFBSSxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQ3JFO2dCQUNBLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDbkI7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sU0FBUyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDaEQsQ0FBQyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDbkUsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNYLENBQUM7Ozs7OztJQUVPLDRCQUE0QixDQUFDLGNBQThCO1FBQ2pFLE9BQU8sY0FBYztZQUNuQixjQUFjLENBQUMsUUFBUTtZQUN2QixjQUFjLENBQUMsUUFBUSxDQUFDLEdBQUc7WUFDM0IsQ0FBQyxDQUFDLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDWCxDQUFDOzs7Ozs7SUFFTyx1QkFBdUIsQ0FBQyxTQUFpQjtRQUMvQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7Ozs7Ozs7SUFFTyxvQkFBb0IsQ0FBQyxHQUFXLEVBQUUsS0FBVTtRQUNsRCxPQUFPLEdBQUcsSUFBSSxLQUFLO1lBQ2pCLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQWtCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekUsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNYLENBQUM7OztZQW5FRixVQUFVOzs7O1lBTEYsY0FBYztZQUdkLG9CQUFvQjs7OztJQUkzQixzQ0FBMkQ7Ozs7O0lBR3pELCtDQUFzQzs7Ozs7SUFDdEMscURBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWcgfSBmcm9tICcuL2NvbmZpZy9jaGVja291dC1jb25maWcnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdGVwLCBDaGVja291dFN0ZXBUeXBlIH0gZnJvbSAnLi9tb2RlbC9jaGVja291dC1zdGVwLm1vZGVsJztcbmltcG9ydCB7IFJvdXRpbmdDb25maWdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0Q29uZmlnU2VydmljZSB7XG4gIHN0ZXBzOiBDaGVja291dFN0ZXBbXSA9IHRoaXMuY2hlY2tvdXRDb25maWcuY2hlY2tvdXQuc3RlcHM7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjaGVja291dENvbmZpZzogQ2hlY2tvdXRDb25maWcsXG4gICAgcHJpdmF0ZSByb3V0aW5nQ29uZmlnU2VydmljZTogUm91dGluZ0NvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIGdldENoZWNrb3V0U3RlcChjdXJyZW50U3RlcFR5cGU6IENoZWNrb3V0U3RlcFR5cGUpOiBDaGVja291dFN0ZXAge1xuICAgIHJldHVybiB0aGlzLnN0ZXBzW3RoaXMuZ2V0Q2hlY2tvdXRTdGVwSW5kZXgoJ3R5cGUnLCBjdXJyZW50U3RlcFR5cGUpXTtcbiAgfVxuXG4gIGdldE5leHRDaGVja291dFN0ZXBVcmwoYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKTogc3RyaW5nIHtcbiAgICBjb25zdCBjdXJyZW50U3RlcFVybDogc3RyaW5nID0gdGhpcy5nZXRTdGVwVXJsRnJvbUFjdGl2YXRlZFJvdXRlKFxuICAgICAgYWN0aXZhdGVkUm91dGVcbiAgICApO1xuXG4gICAgbGV0IHN0ZXBJbmRleDogbnVtYmVyO1xuICAgIHRoaXMuc3RlcHMuZm9yRWFjaCgoc3RlcCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgY3VycmVudFN0ZXBVcmwgPT09IGAvJHt0aGlzLmdldFN0ZXBVcmxGcm9tU3RlcFJvdXRlKHN0ZXAucm91dGVOYW1lKX1gXG4gICAgICApIHtcbiAgICAgICAgc3RlcEluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3RlcEluZGV4ID49IDAgJiYgdGhpcy5zdGVwc1tzdGVwSW5kZXggKyAxXVxuICAgICAgPyB0aGlzLmdldFN0ZXBVcmxGcm9tU3RlcFJvdXRlKHRoaXMuc3RlcHNbc3RlcEluZGV4ICsgMV0ucm91dGVOYW1lKVxuICAgICAgOiBudWxsO1xuICB9XG5cbiAgZ2V0UHJldmlvdXNDaGVja291dFN0ZXBVcmwoYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKTogc3RyaW5nIHtcbiAgICBjb25zdCBjdXJyZW50U3RlcFVybDogc3RyaW5nID0gdGhpcy5nZXRTdGVwVXJsRnJvbUFjdGl2YXRlZFJvdXRlKFxuICAgICAgYWN0aXZhdGVkUm91dGVcbiAgICApO1xuXG4gICAgbGV0IHN0ZXBJbmRleDogbnVtYmVyO1xuICAgIHRoaXMuc3RlcHMuZm9yRWFjaCgoc3RlcCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgY3VycmVudFN0ZXBVcmwgPT09IGAvJHt0aGlzLmdldFN0ZXBVcmxGcm9tU3RlcFJvdXRlKHN0ZXAucm91dGVOYW1lKX1gXG4gICAgICApIHtcbiAgICAgICAgc3RlcEluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3RlcEluZGV4ID49IDEgJiYgdGhpcy5zdGVwc1tzdGVwSW5kZXggLSAxXVxuICAgICAgPyB0aGlzLmdldFN0ZXBVcmxGcm9tU3RlcFJvdXRlKHRoaXMuc3RlcHNbc3RlcEluZGV4IC0gMV0ucm91dGVOYW1lKVxuICAgICAgOiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdGVwVXJsRnJvbUFjdGl2YXRlZFJvdXRlKGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgIHJldHVybiBhY3RpdmF0ZWRSb3V0ZSAmJlxuICAgICAgYWN0aXZhdGVkUm91dGUuc25hcHNob3QgJiZcbiAgICAgIGFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnVybFxuICAgICAgPyBgLyR7YWN0aXZhdGVkUm91dGUuc25hcHNob3QudXJsLmpvaW4oJy8nKX1gXG4gICAgICA6IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGdldFN0ZXBVcmxGcm9tU3RlcFJvdXRlKHN0ZXBSb3V0ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ0NvbmZpZ1NlcnZpY2UuZ2V0Um91dGVDb25maWcoc3RlcFJvdXRlKS5wYXRoc1swXTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2hlY2tvdXRTdGVwSW5kZXgoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBudW1iZXIge1xuICAgIHJldHVybiBrZXkgJiYgdmFsdWVcbiAgICAgID8gdGhpcy5zdGVwcy5maW5kSW5kZXgoKHN0ZXA6IENoZWNrb3V0U3RlcCkgPT4gc3RlcFtrZXldLmluY2x1ZGVzKHZhbHVlKSlcbiAgICAgIDogbnVsbDtcbiAgfVxufVxuIl19