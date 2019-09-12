/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { RoutingConfigService } from '@spartacus/core';
import { CheckoutConfig, DeliveryModePreferences, } from '../config/checkout-config';
import * as i0 from "@angular/core";
import * as i1 from "../config/checkout-config";
import * as i2 from "@spartacus/core";
var CheckoutConfigService = /** @class */ (function () {
    function CheckoutConfigService(checkoutConfig, routingConfigService) {
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
    CheckoutConfigService.prototype.getCheckoutStep = /**
     * @param {?} currentStepType
     * @return {?}
     */
    function (currentStepType) {
        return this.steps[this.getCheckoutStepIndex('type', currentStepType)];
    };
    /**
     * @param {?} currentStepType
     * @return {?}
     */
    CheckoutConfigService.prototype.getCheckoutStepRoute = /**
     * @param {?} currentStepType
     * @return {?}
     */
    function (currentStepType) {
        return this.getCheckoutStep(currentStepType).routeName;
    };
    /**
     * @return {?}
     */
    CheckoutConfigService.prototype.getFirstCheckoutStepRoute = /**
     * @return {?}
     */
    function () {
        return this.steps[0].routeName;
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
     * @protected
     * @param {?} deliveryMode1
     * @param {?} deliveryMode2
     * @return {?}
     */
    CheckoutConfigService.prototype.compareDeliveryCost = /**
     * @protected
     * @param {?} deliveryMode1
     * @param {?} deliveryMode2
     * @return {?}
     */
    function (deliveryMode1, deliveryMode2) {
        if (deliveryMode1.deliveryCost.value > deliveryMode2.deliveryCost.value) {
            return 1;
        }
        else if (deliveryMode1.deliveryCost.value < deliveryMode2.deliveryCost.value) {
            return -1;
        }
        return 0;
    };
    /**
     * @protected
     * @param {?} deliveryModes
     * @param {?=} index
     * @return {?}
     */
    CheckoutConfigService.prototype.findMatchingDeliveryMode = /**
     * @protected
     * @param {?} deliveryModes
     * @param {?=} index
     * @return {?}
     */
    function (deliveryModes, index) {
        var _this = this;
        if (index === void 0) { index = 0; }
        switch (this.defaultDeliveryMode[index]) {
            case DeliveryModePreferences.FREE:
                if (deliveryModes[0].deliveryCost.value === 0) {
                    return deliveryModes[0].code;
                }
                break;
            case DeliveryModePreferences.LEAST_EXPENSIVE:
                /** @type {?} */
                var leastExpensiveFound = deliveryModes.find((/**
                 * @param {?} deliveryMode
                 * @return {?}
                 */
                function (deliveryMode) { return deliveryMode.deliveryCost.value !== 0; }));
                if (leastExpensiveFound) {
                    return leastExpensiveFound.code;
                }
                break;
            case DeliveryModePreferences.MOST_EXPENSIVE:
                return deliveryModes[deliveryModes.length - 1].code;
            default:
                /** @type {?} */
                var codeFound = deliveryModes.find((/**
                 * @param {?} deliveryMode
                 * @return {?}
                 */
                function (deliveryMode) { return deliveryMode.code === _this.defaultDeliveryMode[index]; }));
                if (codeFound) {
                    return codeFound.code;
                }
        }
        /** @type {?} */
        var lastMode = this.defaultDeliveryMode.length - 1 <= index;
        return lastMode
            ? deliveryModes[0].code
            : this.findMatchingDeliveryMode(deliveryModes, index + 1);
    };
    /**
     * @param {?} deliveryModes
     * @return {?}
     */
    CheckoutConfigService.prototype.getPreferredDeliveryMode = /**
     * @param {?} deliveryModes
     * @return {?}
     */
    function (deliveryModes) {
        deliveryModes.sort(this.compareDeliveryCost);
        return this.findMatchingDeliveryMode(deliveryModes);
    };
    /**
     * @return {?}
     */
    CheckoutConfigService.prototype.isExpressCheckout = /**
     * @return {?}
     */
    function () {
        return this.express;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9zZXJ2aWNlcy9jaGVja291dC1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFnQixvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3JFLE9BQU8sRUFDTCxjQUFjLEVBQ2QsdUJBQXVCLEdBQ3hCLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFHbkM7SUFTRSwrQkFDVSxjQUE4QixFQUM5QixvQkFBMEM7UUFEMUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFQcEQsVUFBSyxHQUFtQixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDbkQsWUFBTyxHQUFZLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUN4RCx3QkFBbUIsR0FDekIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLElBQUksRUFBRSxDQUFDO0lBS3RELENBQUM7Ozs7O0lBRUosK0NBQWU7Ozs7SUFBZixVQUFnQixlQUFpQztRQUMvQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7O0lBRUQsb0RBQW9COzs7O0lBQXBCLFVBQXFCLGVBQWlDO1FBQ3BELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDekQsQ0FBQzs7OztJQUVELHlEQUF5Qjs7O0lBQXpCO1FBQ0UsT0FBTyxJQUFJ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QWMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUc7WUFDN0MsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNYLENBQUM7Ozs7OztJQUVPLHVEQUF1Qjs7Ozs7SUFBL0IsVUFBZ0MsU0FBaUI7UUFDL0MsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7Ozs7O0lBRU8sb0RBQW9COzs7Ozs7SUFBNUIsVUFBNkIsR0FBVyxFQUFFLEtBQVU7UUFDbEQsT0FBTyxHQUFHLElBQUksS0FBSztZQUNqQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQyxJQUFrQixJQUFLLE9BQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBekIsQ0FBeUIsRUFBQztZQUN6RSxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ1gsQ0FBQzs7Z0JBeklGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUEMsY0FBYztnQkFGTyxvQkFBb0I7OztnQ0FGM0M7Q0FtSkMsQUExSUQsSUEwSUM7U0F2SVkscUJBQXFCOzs7SUFDaEMsc0NBQTJEOzs7OztJQUMzRCx3Q0FBZ0U7Ozs7O0lBQ2hFLG9EQUN5RDs7Ozs7SUFHdkQsK0NBQXNDOzs7OztJQUN0QyxxREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEZWxpdmVyeU1vZGUsIFJvdXRpbmdDb25maWdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7XG4gIENoZWNrb3V0Q29uZmlnLFxuICBEZWxpdmVyeU1vZGVQcmVmZXJlbmNlcyxcbn0gZnJvbSAnLi4vY29uZmlnL2NoZWNrb3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBDaGVja291dFN0ZXAsIENoZWNrb3V0U3RlcFR5cGUgfSBmcm9tICcuLi9tb2RlbC9jaGVja291dC1zdGVwLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0Q29uZmlnU2VydmljZSB7XG4gIHN0ZXBzOiBDaGVja291dFN0ZXBbXSA9IHRoaXMuY2hlY2tvdXRDb25maWcuY2hlY2tvdXQuc3RlcHM7XG4gIHByaXZhdGUgZXhwcmVzczogYm9vbGVhbiA9IHRoaXMuY2hlY2tvdXRDb25maWcuY2hlY2tvdXQuZXhwcmVzcztcbiAgcHJpdmF0ZSBkZWZhdWx0RGVsaXZlcnlNb2RlOiBBcnJheTxEZWxpdmVyeU1vZGVQcmVmZXJlbmNlcyB8IHN0cmluZz4gPVxuICAgIHRoaXMuY2hlY2tvdXRDb25maWcuY2hlY2tvdXQuZGVmYXVsdERlbGl2ZXJ5TW9kZSB8fCBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNoZWNrb3V0Q29uZmlnOiBDaGVja291dENvbmZpZyxcbiAgICBwcml2YXRlIHJvdXRpbmdDb25maWdTZXJ2aWNlOiBSb3V0aW5nQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgZ2V0Q2hlY2tvdXRTdGVwKGN1cnJlbnRTdGVwVHlwZTogQ2hlY2tvdXRTdGVwVHlwZSk6IENoZWNrb3V0U3RlcCB7XG4gICAgcmV0dXJuIHRoaXMuc3RlcHNbdGhpcy5nZXRDaGVja291dFN0ZXBJbmRleCgndHlwZScsIGN1cnJlbnRTdGVwVHlwZSldO1xuICB9XG5cbiAgZ2V0Q2hlY2tvdXRTdGVwUm91dGUoY3VycmVudFN0ZXBUeXBlOiBDaGVja291dFN0ZXBUeXBlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDaGVja291dFN0ZXAoY3VycmVudFN0ZXBUeXBlKS5yb3V0ZU5hbWU7XG4gIH1cblxuICBnZXRGaXJzdENoZWNrb3V0U3RlcFJvdXRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc3RlcHNbMF0ucm91dGVOYW1lO1xuICB9XG5cbiAgZ2V0TmV4dENoZWNrb3V0U3RlcFVybChhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpOiBzdHJpbmcge1xuICAgIGNvbnN0IHN0ZXBJbmRleCA9IHRoaXMuZ2V0Q3VycmVudFN0ZXBJbmRleChhY3RpdmF0ZWRSb3V0ZSk7XG5cbiAgICByZXR1cm4gc3RlcEluZGV4ID49IDAgJiYgdGhpcy5zdGVwc1tzdGVwSW5kZXggKyAxXVxuICAgICAgPyB0aGlzLmdldFN0ZXBVcmxGcm9tU3RlcFJvdXRlKHRoaXMuc3RlcHNbc3RlcEluZGV4ICsgMV0ucm91dGVOYW1lKVxuICAgICAgOiBudWxsO1xuICB9XG5cbiAgZ2V0UHJldmlvdXNDaGVja291dFN0ZXBVcmwoYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKTogc3RyaW5nIHtcbiAgICBjb25zdCBzdGVwSW5kZXggPSB0aGlzLmdldEN1cnJlbnRTdGVwSW5kZXgoYWN0aXZhdGVkUm91dGUpO1xuXG4gICAgcmV0dXJuIHN0ZXBJbmRleCA+PSAwICYmIHRoaXMuc3RlcHNbc3RlcEluZGV4IC0gMV1cbiAgICAgID8gdGhpcy5nZXRTdGVwVXJsRnJvbVN0ZXBSb3V0ZSh0aGlzLnN0ZXBzW3N0ZXBJbmRleCAtIDFdLnJvdXRlTmFtZSlcbiAgICAgIDogbnVsbDtcbiAgfVxuXG4gIGdldEN1cnJlbnRTdGVwSW5kZXgoYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgY29uc3QgY3VycmVudFN0ZXBVcmw6IHN0cmluZyA9IHRoaXMuZ2V0U3RlcFVybEZyb21BY3RpdmF0ZWRSb3V0ZShcbiAgICAgIGFjdGl2YXRlZFJvdXRlXG4gICAgKTtcblxuICAgIGxldCBzdGVwSW5kZXg6IG51bWJlcjtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGZvciAoY29uc3Qgc3RlcCBvZiB0aGlzLnN0ZXBzKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGN1cnJlbnRTdGVwVXJsID09PSBgLyR7dGhpcy5nZXRTdGVwVXJsRnJvbVN0ZXBSb3V0ZShzdGVwLnJvdXRlTmFtZSl9YFxuICAgICAgKSB7XG4gICAgICAgIHN0ZXBJbmRleCA9IGluZGV4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RlcEluZGV4ID49IDAgPyBzdGVwSW5kZXggOiBudWxsO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNvbXBhcmVEZWxpdmVyeUNvc3QoXG4gICAgZGVsaXZlcnlNb2RlMTogRGVsaXZlcnlNb2RlLFxuICAgIGRlbGl2ZXJ5TW9kZTI6IERlbGl2ZXJ5TW9kZVxuICApOiBudW1iZXIge1xuICAgIGlmIChkZWxpdmVyeU1vZGUxLmRlbGl2ZXJ5Q29zdC52YWx1ZSA+IGRlbGl2ZXJ5TW9kZTIuZGVsaXZlcnlDb3N0LnZhbHVlKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgZGVsaXZlcnlNb2RlMS5kZWxpdmVyeUNvc3QudmFsdWUgPCBkZWxpdmVyeU1vZGUyLmRlbGl2ZXJ5Q29zdC52YWx1ZVxuICAgICkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaW5kTWF0Y2hpbmdEZWxpdmVyeU1vZGUoXG4gICAgZGVsaXZlcnlNb2RlczogRGVsaXZlcnlNb2RlW10sXG4gICAgaW5kZXggPSAwXG4gICk6IHN0cmluZyB7XG4gICAgc3dpdGNoICh0aGlzLmRlZmF1bHREZWxpdmVyeU1vZGVbaW5kZXhdKSB7XG4gICAgICBjYXNlIERlbGl2ZXJ5TW9kZVByZWZlcmVuY2VzLkZSRUU6XG4gICAgICAgIGlmIChkZWxpdmVyeU1vZGVzWzBdLmRlbGl2ZXJ5Q29zdC52YWx1ZSA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBkZWxpdmVyeU1vZGVzWzBdLmNvZGU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIERlbGl2ZXJ5TW9kZVByZWZlcmVuY2VzLkxFQVNUX0VYUEVOU0lWRTpcbiAgICAgICAgY29uc3QgbGVhc3RFeHBlbnNpdmVGb3VuZCA9IGRlbGl2ZXJ5TW9kZXMuZmluZChcbiAgICAgICAgICBkZWxpdmVyeU1vZGUgPT4gZGVsaXZlcnlNb2RlLmRlbGl2ZXJ5Q29zdC52YWx1ZSAhPT0gMFxuICAgICAgICApO1xuICAgICAgICBpZiAobGVhc3RFeHBlbnNpdmVGb3VuZCkge1xuICAgICAgICAgIHJldHVybiBsZWFzdEV4cGVuc2l2ZUZvdW5kLmNvZGU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIERlbGl2ZXJ5TW9kZVByZWZlcmVuY2VzLk1PU1RfRVhQRU5TSVZFOlxuICAgICAgICByZXR1cm4gZGVsaXZlcnlNb2Rlc1tkZWxpdmVyeU1vZGVzLmxlbmd0aCAtIDFdLmNvZGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zdCBjb2RlRm91bmQgPSBkZWxpdmVyeU1vZGVzLmZpbmQoXG4gICAgICAgICAgZGVsaXZlcnlNb2RlID0+IGRlbGl2ZXJ5TW9kZS5jb2RlID09PSB0aGlzLmRlZmF1bHREZWxpdmVyeU1vZGVbaW5kZXhdXG4gICAgICAgICk7XG4gICAgICAgIGlmIChjb2RlRm91bmQpIHtcbiAgICAgICAgICByZXR1cm4gY29kZUZvdW5kLmNvZGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgbGFzdE1vZGUgPSB0aGlzLmRlZmF1bHREZWxpdmVyeU1vZGUubGVuZ3RoIC0gMSA8PSBpbmRleDtcbiAgICByZXR1cm4gbGFzdE1vZGVcbiAgICAgID8gZGVsaXZlcnlNb2Rlc1swXS5jb2RlXG4gICAgICA6IHRoaXMuZmluZE1hdGNoaW5nRGVsaXZlcnlNb2RlKGRlbGl2ZXJ5TW9kZXMsIGluZGV4ICsgMSk7XG4gIH1cblxuICBnZXRQcmVmZXJyZWREZWxpdmVyeU1vZGUoZGVsaXZlcnlNb2RlczogRGVsaXZlcnlNb2RlW10pOiBzdHJpbmcge1xuICAgIGRlbGl2ZXJ5TW9kZXMuc29ydCh0aGlzLmNvbXBhcmVEZWxpdmVyeUNvc3QpO1xuICAgIHJldHVybiB0aGlzLmZpbmRNYXRjaGluZ0RlbGl2ZXJ5TW9kZShkZWxpdmVyeU1vZGVzKTtcbiAgfVxuXG4gIGlzRXhwcmVzc0NoZWNrb3V0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmV4cHJlc3M7XG4gIH1cblxuICBwcml2YXRlIGdldFN0ZXBVcmxGcm9tQWN0aXZhdGVkUm91dGUoXG4gICAgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiBhY3RpdmF0ZWRSb3V0ZSAmJlxuICAgICAgYWN0aXZhdGVkUm91dGUuc25hcHNob3QgJiZcbiAgICAgIGFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnVybFxuICAgICAgPyBgLyR7YWN0aXZhdGVkUm91dGUuc25hcHNob3QudXJsLmpvaW4oJy8nKX1gXG4gICAgICA6IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGdldFN0ZXBVcmxGcm9tU3RlcFJvdXRlKHN0ZXBSb3V0ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0aW5nQ29uZmlnU2VydmljZS5nZXRSb3V0ZUNvbmZpZyhzdGVwUm91dGUpLnBhdGhzWzBdO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDaGVja291dFN0ZXBJbmRleChrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IG51bWJlciB8IG51bGwge1xuICAgIHJldHVybiBrZXkgJiYgdmFsdWVcbiAgICAgID8gdGhpcy5zdGVwcy5maW5kSW5kZXgoKHN0ZXA6IENoZWNrb3V0U3RlcCkgPT4gc3RlcFtrZXldLmluY2x1ZGVzKHZhbHVlKSlcbiAgICAgIDogbnVsbDtcbiAgfVxufVxuIl19