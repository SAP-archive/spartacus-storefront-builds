/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CheckoutConfig } from './config/checkout-config';
import { RoutingConfigService } from '@spartacus/core';
var CheckoutConfigService = /** @class */ (function () {
    function CheckoutConfigService(checkoutConfig, routingConfigService) {
        this.checkoutConfig = checkoutConfig;
        this.routingConfigService = routingConfigService;
        this.steps = this.checkoutConfig.checkout.steps;
    }
    /**
     * @param {?} currentStepType
     * @return {?}
     */
    CheckoutConfigService.prototype.getCheckoutStep = /**
     * @param {?} currentStepType
     * @return {?}
     */
    function (currentStepType) {
        return this.steps[this.getCheckoutStepIndex('type', currentStepType)];
    };
    /**
     * @param {?} activatedRoute
     * @return {?}
     */
    CheckoutConfigService.prototype.getNextCheckoutStepUrl = /**
     * @param {?} activatedRoute
     * @return {?}
     */
    function (activatedRoute) {
        var _this = this;
        /** @type {?} */
        var currentStepUrl = this.getStepUrlFromActivatedRoute(activatedRoute);
        /** @type {?} */
        var stepIndex;
        this.steps.forEach(function (step, index) {
            if (currentStepUrl === "/" + _this.getStepUrlFromStepRoute(step.routeName)) {
                stepIndex = index;
            }
        });
        return stepIndex >= 0 && this.steps[stepIndex + 1]
            ? this.getStepUrlFromStepRoute(this.steps[stepIndex + 1].routeName)
            : null;
    };
    /**
     * @param {?} activatedRoute
     * @return {?}
     */
    CheckoutConfigService.prototype.getPreviousCheckoutStepUrl = /**
     * @param {?} activatedRoute
     * @return {?}
     */
    function (activatedRoute) {
        var _this = this;
        /** @type {?} */
        var currentStepUrl = this.getStepUrlFromActivatedRoute(activatedRoute);
        /** @type {?} */
        var stepIndex;
        this.steps.forEach(function (step, index) {
            if (currentStepUrl === "/" + _this.getStepUrlFromStepRoute(step.routeName)) {
                stepIndex = index;
            }
        });
        return stepIndex >= 1 && this.steps[stepIndex - 1]
            ? this.getStepUrlFromStepRoute(this.steps[stepIndex - 1].routeName)
            : null;
    };
    /**
     * @private
     * @param {?} activatedRoute
     * @return {?}
     */
    CheckoutConfigService.prototype.getStepUrlFromActivatedRoute = /**
     * @private
     * @param {?} activatedRoute
     * @return {?}
     */
    function (activatedRoute) {
        return activatedRoute &&
            activatedRoute.snapshot &&
            activatedRoute.snapshot.url
            ? "/" + activatedRoute.snapshot.url.join('/')
            : null;
    };
    /**
     * @private
     * @param {?} stepRoute
     * @return {?}
     */
    CheckoutConfigService.prototype.getStepUrlFromStepRoute = /**
     * @private
     * @param {?} stepRoute
     * @return {?}
     */
    function (stepRoute) {
        return this.routingConfigService.getRouteConfig(stepRoute).paths[0];
    };
    /**
     * @private
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    CheckoutConfigService.prototype.getCheckoutStepIndex = /**
     * @private
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        return key && value
            ? this.steps.findIndex(function (step) { return step[key].includes(value); })
            : null;
    };
    CheckoutConfigService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CheckoutConfigService.ctorParameters = function () { return [
        { type: CheckoutConfig },
        { type: RoutingConfigService }
    ]; };
    return CheckoutConfigService;
}());
export { CheckoutConfigService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRzFELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXZEO0lBSUUsK0JBQ1UsY0FBOEIsRUFDOUIsb0JBQTBDO1FBRDFDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBSnBELFVBQUssR0FBbUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBS3hELENBQUM7Ozs7O0lBRUosK0NBQWU7Ozs7SUFBZixVQUFnQixlQUFpQztRQUMvQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7O0lBRUQsc0RBQXNCOzs7O0lBQXRCLFVBQXVCLGNBQThCO1FBQXJELGlCQWlCQzs7WUFoQk8sY0FBYyxHQUFXLElBQUksQ0FBQyw0QkFBNEIsQ0FDOUQsY0FBYyxDQUNmOztZQUVHLFNBQWlCO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFFLEtBQUs7WUFDN0IsSUFDRSxjQUFjLEtBQUssTUFBSSxLQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBRyxFQUNyRTtnQkFDQSxTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQ25CO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLFNBQVMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ2hELENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQ25FLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDWCxDQUFDOzs7OztJQUVELDBEQUEwQjs7OztJQUExQixVQUEyQixjQUE4QjtRQUF6RCxpQkFpQkM7O1lBaEJPLGNBQWMsR0FBVyxJQUFJLENBQUMsNEJBQTRCLENBQzlELGNBQWMsQ0FDZjs7WUFFRyxTQUFpQjtRQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBRSxLQUFLO1lBQzdCLElBQ0UsY0FBYyxLQUFLLE1BQUksS0FBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUcsRUFDckU7Z0JBQ0EsU0FBUyxHQUFHLEtBQUssQ0FBQzthQUNuQjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxTQUFTLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUNoRCxDQUFDLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNuRSxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ1gsQ0FBQzs7Ozs7O0lBRU8sNERBQTRCOzs7OztJQUFwQyxVQUFxQyxjQUE4QjtRQUNqRSxPQUFPLGNBQWM7WUFDbkIsY0FBYyxDQUFDLFFBQVE7WUFDdkIsY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHO1lBQzNCLENBQUMsQ0FBQyxNQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUc7WUFDN0MsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNYLENBQUM7Ozs7OztJQUVPLHVEQUF1Qjs7Ozs7SUFBL0IsVUFBZ0MsU0FBaUI7UUFDL0MsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7Ozs7O0lBRU8sb0RBQW9COzs7Ozs7SUFBNUIsVUFBNkIsR0FBVyxFQUFFLEtBQVU7UUFDbEQsT0FBTyxHQUFHLElBQUksS0FBSztZQUNqQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFrQixJQUFLLE9BQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBekIsQ0FBeUIsQ0FBQztZQUN6RSxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ1gsQ0FBQzs7Z0JBbkVGLFVBQVU7Ozs7Z0JBTEYsY0FBYztnQkFHZCxvQkFBb0I7O0lBc0U3Qiw0QkFBQztDQUFBLEFBcEVELElBb0VDO1NBbkVZLHFCQUFxQjs7O0lBQ2hDLHNDQUEyRDs7Ozs7SUFHekQsK0NBQXNDOzs7OztJQUN0QyxxREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGVja291dENvbmZpZyB9IGZyb20gJy4vY29uZmlnL2NoZWNrb3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDaGVja291dFN0ZXAsIENoZWNrb3V0U3RlcFR5cGUgfSBmcm9tICcuL21vZGVsL2NoZWNrb3V0LXN0ZXAubW9kZWwnO1xuaW1wb3J0IHsgUm91dGluZ0NvbmZpZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRDb25maWdTZXJ2aWNlIHtcbiAgc3RlcHM6IENoZWNrb3V0U3RlcFtdID0gdGhpcy5jaGVja291dENvbmZpZy5jaGVja291dC5zdGVwcztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNoZWNrb3V0Q29uZmlnOiBDaGVja291dENvbmZpZyxcbiAgICBwcml2YXRlIHJvdXRpbmdDb25maWdTZXJ2aWNlOiBSb3V0aW5nQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgZ2V0Q2hlY2tvdXRTdGVwKGN1cnJlbnRTdGVwVHlwZTogQ2hlY2tvdXRTdGVwVHlwZSk6IENoZWNrb3V0U3RlcCB7XG4gICAgcmV0dXJuIHRoaXMuc3RlcHNbdGhpcy5nZXRDaGVja291dFN0ZXBJbmRleCgndHlwZScsIGN1cnJlbnRTdGVwVHlwZSldO1xuICB9XG5cbiAgZ2V0TmV4dENoZWNrb3V0U3RlcFVybChhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpOiBzdHJpbmcge1xuICAgIGNvbnN0IGN1cnJlbnRTdGVwVXJsOiBzdHJpbmcgPSB0aGlzLmdldFN0ZXBVcmxGcm9tQWN0aXZhdGVkUm91dGUoXG4gICAgICBhY3RpdmF0ZWRSb3V0ZVxuICAgICk7XG5cbiAgICBsZXQgc3RlcEluZGV4OiBudW1iZXI7XG4gICAgdGhpcy5zdGVwcy5mb3JFYWNoKChzdGVwLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBjdXJyZW50U3RlcFVybCA9PT0gYC8ke3RoaXMuZ2V0U3RlcFVybEZyb21TdGVwUm91dGUoc3RlcC5yb3V0ZU5hbWUpfWBcbiAgICAgICkge1xuICAgICAgICBzdGVwSW5kZXggPSBpbmRleDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdGVwSW5kZXggPj0gMCAmJiB0aGlzLnN0ZXBzW3N0ZXBJbmRleCArIDFdXG4gICAgICA/IHRoaXMuZ2V0U3RlcFVybEZyb21TdGVwUm91dGUodGhpcy5zdGVwc1tzdGVwSW5kZXggKyAxXS5yb3V0ZU5hbWUpXG4gICAgICA6IG51bGw7XG4gIH1cblxuICBnZXRQcmV2aW91c0NoZWNrb3V0U3RlcFVybChhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpOiBzdHJpbmcge1xuICAgIGNvbnN0IGN1cnJlbnRTdGVwVXJsOiBzdHJpbmcgPSB0aGlzLmdldFN0ZXBVcmxGcm9tQWN0aXZhdGVkUm91dGUoXG4gICAgICBhY3RpdmF0ZWRSb3V0ZVxuICAgICk7XG5cbiAgICBsZXQgc3RlcEluZGV4OiBudW1iZXI7XG4gICAgdGhpcy5zdGVwcy5mb3JFYWNoKChzdGVwLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBjdXJyZW50U3RlcFVybCA9PT0gYC8ke3RoaXMuZ2V0U3RlcFVybEZyb21TdGVwUm91dGUoc3RlcC5yb3V0ZU5hbWUpfWBcbiAgICAgICkge1xuICAgICAgICBzdGVwSW5kZXggPSBpbmRleDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdGVwSW5kZXggPj0gMSAmJiB0aGlzLnN0ZXBzW3N0ZXBJbmRleCAtIDFdXG4gICAgICA/IHRoaXMuZ2V0U3RlcFVybEZyb21TdGVwUm91dGUodGhpcy5zdGVwc1tzdGVwSW5kZXggLSAxXS5yb3V0ZU5hbWUpXG4gICAgICA6IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGdldFN0ZXBVcmxGcm9tQWN0aXZhdGVkUm91dGUoYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgcmV0dXJuIGFjdGl2YXRlZFJvdXRlICYmXG4gICAgICBhY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdCAmJlxuICAgICAgYWN0aXZhdGVkUm91dGUuc25hcHNob3QudXJsXG4gICAgICA/IGAvJHthY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC51cmwuam9pbignLycpfWBcbiAgICAgIDogbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3RlcFVybEZyb21TdGVwUm91dGUoc3RlcFJvdXRlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0aW5nQ29uZmlnU2VydmljZS5nZXRSb3V0ZUNvbmZpZyhzdGVwUm91dGUpLnBhdGhzWzBdO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDaGVja291dFN0ZXBJbmRleChrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IG51bWJlciB7XG4gICAgcmV0dXJuIGtleSAmJiB2YWx1ZVxuICAgICAgPyB0aGlzLnN0ZXBzLmZpbmRJbmRleCgoc3RlcDogQ2hlY2tvdXRTdGVwKSA9PiBzdGVwW2tleV0uaW5jbHVkZXModmFsdWUpKVxuICAgICAgOiBudWxsO1xuICB9XG59XG4iXX0=