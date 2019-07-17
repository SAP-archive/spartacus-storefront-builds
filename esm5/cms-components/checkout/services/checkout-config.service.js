/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { RoutingConfigService } from '@spartacus/core';
import { CheckoutConfig } from '../config/checkout-config';
import * as i0 from "@angular/core";
import * as i1 from "../config/checkout-config";
import * as i2 from "@spartacus/core";
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
        /** @type {?} */
        var stepIndex = this.getCurrentStepIndex(activatedRoute);
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
        /** @type {?} */
        var stepIndex = this.getCurrentStepIndex(activatedRoute);
        return stepIndex >= 0 && this.steps[stepIndex - 1]
            ? this.getStepUrlFromStepRoute(this.steps[stepIndex - 1].routeName)
            : null;
    };
    /**
     * @param {?} activatedRoute
     * @return {?}
     */
    CheckoutConfigService.prototype.getCurrentStepIndex = /**
     * @param {?} activatedRoute
     * @return {?}
     */
    function (activatedRoute) {
        var e_1, _a;
        /** @type {?} */
        var currentStepUrl = this.getStepUrlFromActivatedRoute(activatedRoute);
        /** @type {?} */
        var stepIndex;
        /** @type {?} */
        var index = 0;
        try {
            for (var _b = tslib_1.__values(this.steps), _c = _b.next(); !_c.done; _c = _b.next()) {
                var step = _c.value;
                if (currentStepUrl === "/" + this.getStepUrlFromStepRoute(step.routeName)) {
                    stepIndex = index;
                }
                else {
                    index++;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return stepIndex >= 0 ? stepIndex : null;
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
            ? this.steps.findIndex((/**
             * @param {?} step
             * @return {?}
             */
            function (step) { return step[key].includes(value); }))
            : null;
    };
    CheckoutConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CheckoutConfigService.ctorParameters = function () { return [
        { type: CheckoutConfig },
        { type: RoutingConfigService }
    ]; };
    /** @nocollapse */ CheckoutConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CheckoutConfigService_Factory() { return new CheckoutConfigService(i0.ɵɵinject(i1.CheckoutConfig), i0.ɵɵinject(i2.RoutingConfigService)); }, token: CheckoutConfigService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9zZXJ2aWNlcy9jaGVja291dC1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7O0FBRzNEO0lBTUUsK0JBQ1UsY0FBOEIsRUFDOUIsb0JBQTBDO1FBRDFDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBSnBELFVBQUssR0FBbUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBS3hELENBQUM7Ozs7O0lBRUosK0NBQWU7Ozs7SUFBZixVQUFnQixlQUFpQztRQUMvQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7O0lBRUQsc0RBQXNCOzs7O0lBQXRCLFVBQXVCLGNBQThCOztZQUM3QyxTQUFTLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQztRQUUxRCxPQUFPLFNBQVMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ2hELENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQ25FLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDWCxDQUFDOzs7OztJQUVELDBEQUEwQjs7OztJQUExQixVQUEyQixjQUE4Qjs7WUFDakQsU0FBUyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQUM7UUFFMUQsT0FBTyxTQUFTLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUNoRCxDQUFDLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNuRSxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ1gsQ0FBQzs7Ozs7SUFFRCxtREFBbUI7Ozs7SUFBbkIsVUFBb0IsY0FBOEI7OztZQUMxQyxjQUFjLEdBQVcsSUFBSSxDQUFDLDRCQUE0QixDQUM5RCxjQUFjLENBQ2Y7O1lBRUcsU0FBaUI7O1lBQ2pCLEtBQUssR0FBRyxDQUFDOztZQUNiLEtBQW1CLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsS0FBSyxDQUFBLGdCQUFBLDRCQUFFO2dCQUExQixJQUFNLElBQUksV0FBQTtnQkFDYixJQUNFLGNBQWMsS0FBSyxNQUFJLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFHLEVBQ3JFO29CQUNBLFNBQVMsR0FBRyxLQUFLLENBQUM7aUJBQ25CO3FCQUFNO29CQUNMLEtBQUssRUFBRSxDQUFDO2lCQUNUO2FBQ0Y7Ozs7Ozs7OztRQUVELE9BQU8sU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDM0MsQ0FBQzs7Ozs7O0lBRU8sNERBQTRCOzs7OztJQUFwQyxVQUFxQyxjQUE4QjtRQUNqRSxPQUFPLGNBQWM7WUFDbkIsY0FBYyxDQUFDLFFBQVE7WUFDdkIsY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHO1lBQzNCLENBQUMsQ0FBQyxNQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUc7WUFDN0MsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNYLENBQUM7Ozs7OztJQUVPLHVEQUF1Qjs7Ozs7SUFBL0IsVUFBZ0MsU0FBaUI7UUFDL0MsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7Ozs7O0lBRU8sb0RBQW9COzs7Ozs7SUFBNUIsVUFBNkIsR0FBVyxFQUFFLEtBQVU7UUFDbEQsT0FBTyxHQUFHLElBQUksS0FBSztZQUNqQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQyxJQUFrQixJQUFLLE9BQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBekIsQ0FBeUIsRUFBQztZQUN6RSxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ1gsQ0FBQzs7Z0JBbkVGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTFEsY0FBYztnQkFEZCxvQkFBb0I7OztnQ0FGN0I7Q0EwRUMsQUFwRUQsSUFvRUM7U0FqRVkscUJBQXFCOzs7SUFDaEMsc0NBQTJEOzs7OztJQUd6RCwrQ0FBc0M7Ozs7O0lBQ3RDLHFEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRpbmdDb25maWdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENoZWNrb3V0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2NoZWNrb3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBDaGVja291dFN0ZXAsIENoZWNrb3V0U3RlcFR5cGUgfSBmcm9tICcuLi9tb2RlbC9jaGVja291dC1zdGVwLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0Q29uZmlnU2VydmljZSB7XG4gIHN0ZXBzOiBDaGVja291dFN0ZXBbXSA9IHRoaXMuY2hlY2tvdXRDb25maWcuY2hlY2tvdXQuc3RlcHM7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjaGVja291dENvbmZpZzogQ2hlY2tvdXRDb25maWcsXG4gICAgcHJpdmF0ZSByb3V0aW5nQ29uZmlnU2VydmljZTogUm91dGluZ0NvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIGdldENoZWNrb3V0U3RlcChjdXJyZW50U3RlcFR5cGU6IENoZWNrb3V0U3RlcFR5cGUpOiBDaGVja291dFN0ZXAge1xuICAgIHJldHVybiB0aGlzLnN0ZXBzW3RoaXMuZ2V0Q2hlY2tvdXRTdGVwSW5kZXgoJ3R5cGUnLCBjdXJyZW50U3RlcFR5cGUpXTtcbiAgfVxuXG4gIGdldE5leHRDaGVja291dFN0ZXBVcmwoYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKTogc3RyaW5nIHtcbiAgICBjb25zdCBzdGVwSW5kZXggPSB0aGlzLmdldEN1cnJlbnRTdGVwSW5kZXgoYWN0aXZhdGVkUm91dGUpO1xuXG4gICAgcmV0dXJuIHN0ZXBJbmRleCA+PSAwICYmIHRoaXMuc3RlcHNbc3RlcEluZGV4ICsgMV1cbiAgICAgID8gdGhpcy5nZXRTdGVwVXJsRnJvbVN0ZXBSb3V0ZSh0aGlzLnN0ZXBzW3N0ZXBJbmRleCArIDFdLnJvdXRlTmFtZSlcbiAgICAgIDogbnVsbDtcbiAgfVxuXG4gIGdldFByZXZpb3VzQ2hlY2tvdXRTdGVwVXJsKGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSk6IHN0cmluZyB7XG4gICAgY29uc3Qgc3RlcEluZGV4ID0gdGhpcy5nZXRDdXJyZW50U3RlcEluZGV4KGFjdGl2YXRlZFJvdXRlKTtcblxuICAgIHJldHVybiBzdGVwSW5kZXggPj0gMCAmJiB0aGlzLnN0ZXBzW3N0ZXBJbmRleCAtIDFdXG4gICAgICA/IHRoaXMuZ2V0U3RlcFVybEZyb21TdGVwUm91dGUodGhpcy5zdGVwc1tzdGVwSW5kZXggLSAxXS5yb3V0ZU5hbWUpXG4gICAgICA6IG51bGw7XG4gIH1cblxuICBnZXRDdXJyZW50U3RlcEluZGV4KGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgIGNvbnN0IGN1cnJlbnRTdGVwVXJsOiBzdHJpbmcgPSB0aGlzLmdldFN0ZXBVcmxGcm9tQWN0aXZhdGVkUm91dGUoXG4gICAgICBhY3RpdmF0ZWRSb3V0ZVxuICAgICk7XG5cbiAgICBsZXQgc3RlcEluZGV4OiBudW1iZXI7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBmb3IgKGNvbnN0IHN0ZXAgb2YgdGhpcy5zdGVwcykge1xuICAgICAgaWYgKFxuICAgICAgICBjdXJyZW50U3RlcFVybCA9PT0gYC8ke3RoaXMuZ2V0U3RlcFVybEZyb21TdGVwUm91dGUoc3RlcC5yb3V0ZU5hbWUpfWBcbiAgICAgICkge1xuICAgICAgICBzdGVwSW5kZXggPSBpbmRleDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0ZXBJbmRleCA+PSAwID8gc3RlcEluZGV4IDogbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3RlcFVybEZyb21BY3RpdmF0ZWRSb3V0ZShhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgICByZXR1cm4gYWN0aXZhdGVkUm91dGUgJiZcbiAgICAgIGFjdGl2YXRlZFJvdXRlLnNuYXBzaG90ICYmXG4gICAgICBhY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC51cmxcbiAgICAgID8gYC8ke2FjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnVybC5qb2luKCcvJyl9YFxuICAgICAgOiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdGVwVXJsRnJvbVN0ZXBSb3V0ZShzdGVwUm91dGU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJvdXRpbmdDb25maWdTZXJ2aWNlLmdldFJvdXRlQ29uZmlnKHN0ZXBSb3V0ZSkucGF0aHNbMF07XG4gIH1cblxuICBwcml2YXRlIGdldENoZWNrb3V0U3RlcEluZGV4KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogbnVtYmVyIHtcbiAgICByZXR1cm4ga2V5ICYmIHZhbHVlXG4gICAgICA/IHRoaXMuc3RlcHMuZmluZEluZGV4KChzdGVwOiBDaGVja291dFN0ZXApID0+IHN0ZXBba2V5XS5pbmNsdWRlcyh2YWx1ZSkpXG4gICAgICA6IG51bGw7XG4gIH1cbn1cbiJdfQ==