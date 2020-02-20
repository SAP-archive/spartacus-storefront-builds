import { __decorate, __values } from "tslib";
import { Injectable } from '@angular/core';
import { DeliveryMode, RoutingConfigService } from '@spartacus/core';
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
        this.guest = this.checkoutConfig.checkout.guest;
        this.defaultDeliveryMode = this.checkoutConfig.checkout.defaultDeliveryMode || [];
    }
    CheckoutConfigService.prototype.getCheckoutStep = function (currentStepType) {
        return this.steps[this.getCheckoutStepIndex('type', currentStepType)];
    };
    CheckoutConfigService.prototype.getCheckoutStepRoute = function (currentStepType) {
        return this.getCheckoutStep(currentStepType).routeName;
    };
    CheckoutConfigService.prototype.getFirstCheckoutStepRoute = function () {
        return this.steps[0].routeName;
    };
    CheckoutConfigService.prototype.getNextCheckoutStepUrl = function (activatedRoute) {
        var stepIndex = this.getCurrentStepIndex(activatedRoute);
        return stepIndex >= 0 && this.steps[stepIndex + 1]
            ? this.getStepUrlFromStepRoute(this.steps[stepIndex + 1].routeName)
            : null;
    };
    CheckoutConfigService.prototype.getPreviousCheckoutStepUrl = function (activatedRoute) {
        var stepIndex = this.getCurrentStepIndex(activatedRoute);
        return stepIndex >= 0 && this.steps[stepIndex - 1]
            ? this.getStepUrlFromStepRoute(this.steps[stepIndex - 1].routeName)
            : null;
    };
    CheckoutConfigService.prototype.getCurrentStepIndex = function (activatedRoute) {
        var e_1, _a;
        var currentStepUrl = this.getStepUrlFromActivatedRoute(activatedRoute);
        var stepIndex;
        var index = 0;
        try {
            for (var _b = __values(this.steps), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    CheckoutConfigService.prototype.compareDeliveryCost = function (deliveryMode1, deliveryMode2) {
        if (deliveryMode1.deliveryCost.value > deliveryMode2.deliveryCost.value) {
            return 1;
        }
        else if (deliveryMode1.deliveryCost.value < deliveryMode2.deliveryCost.value) {
            return -1;
        }
        return 0;
    };
    CheckoutConfigService.prototype.findMatchingDeliveryMode = function (deliveryModes, index) {
        var _this = this;
        if (index === void 0) { index = 0; }
        switch (this.defaultDeliveryMode[index]) {
            case DeliveryModePreferences.FREE:
                if (deliveryModes[0].deliveryCost.value === 0) {
                    return deliveryModes[0].code;
                }
                break;
            case DeliveryModePreferences.LEAST_EXPENSIVE:
                var leastExpensiveFound = deliveryModes.find(function (deliveryMode) { return deliveryMode.deliveryCost.value !== 0; });
                if (leastExpensiveFound) {
                    return leastExpensiveFound.code;
                }
                break;
            case DeliveryModePreferences.MOST_EXPENSIVE:
                return deliveryModes[deliveryModes.length - 1].code;
            default:
                var codeFound = deliveryModes.find(function (deliveryMode) { return deliveryMode.code === _this.defaultDeliveryMode[index]; });
                if (codeFound) {
                    return codeFound.code;
                }
        }
        var lastMode = this.defaultDeliveryMode.length - 1 <= index;
        return lastMode
            ? deliveryModes[0].code
            : this.findMatchingDeliveryMode(deliveryModes, index + 1);
    };
    CheckoutConfigService.prototype.getPreferredDeliveryMode = function (deliveryModes) {
        deliveryModes.sort(this.compareDeliveryCost);
        return this.findMatchingDeliveryMode(deliveryModes);
    };
    CheckoutConfigService.prototype.isExpressCheckout = function () {
        return this.express;
    };
    CheckoutConfigService.prototype.isGuestCheckout = function () {
        return this.guest;
    };
    CheckoutConfigService.prototype.getStepUrlFromActivatedRoute = function (activatedRoute) {
        return activatedRoute &&
            activatedRoute.snapshot &&
            activatedRoute.snapshot.url
            ? "/" + activatedRoute.snapshot.url.join('/')
            : null;
    };
    CheckoutConfigService.prototype.getStepUrlFromStepRoute = function (stepRoute) {
        return this.routingConfigService.getRouteConfig(stepRoute).paths[0];
    };
    CheckoutConfigService.prototype.getCheckoutStepIndex = function (key, value) {
        return key && value
            ? this.steps.findIndex(function (step) { return step[key].includes(value); })
            : null;
    };
    CheckoutConfigService.ctorParameters = function () { return [
        { type: CheckoutConfig },
        { type: RoutingConfigService }
    ]; };
    CheckoutConfigService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutConfigService_Factory() { return new CheckoutConfigService(i0.ɵɵinject(i1.CheckoutConfig), i0.ɵɵinject(i2.RoutingConfigService)); }, token: CheckoutConfigService, providedIn: "root" });
    CheckoutConfigService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CheckoutConfigService);
    return CheckoutConfigService;
}());
export { CheckoutConfigService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9zZXJ2aWNlcy9jaGVja291dC1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDckUsT0FBTyxFQUNMLGNBQWMsRUFDZCx1QkFBdUIsR0FDeEIsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQU1uQztJQU9FLCtCQUNVLGNBQThCLEVBQzlCLG9CQUEwQztRQUQxQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQVJwRCxVQUFLLEdBQW1CLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUNuRCxZQUFPLEdBQVksSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3hELFVBQUssR0FBWSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDcEQsd0JBQW1CLEdBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLG1CQUFtQixJQUFJLEVBQUUsQ0FBQztJQUt0RCxDQUFDO0lBRUosK0NBQWUsR0FBZixVQUFnQixlQUFpQztRQUMvQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxvREFBb0IsR0FBcEIsVUFBcUIsZUFBaUM7UUFDcEQsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJ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LGNBQThCO1FBRTlCLE9BQU8sY0FBYztZQUNuQixjQUFjLENBQUMsUUFBUTtZQUN2QixjQUFjLENBQUMsUUFBUSxDQUFDLEdBQUc7WUFDM0IsQ0FBQyxDQUFDLE1BQUksY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBRztZQUM3QyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ1gsQ0FBQztJQUVPLHVEQUF1QixHQUEvQixVQUFnQyxTQUFpQjtRQUMvQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFTyxvREFBb0IsR0FBNUIsVUFBNkIsR0FBVyxFQUFFLEtBQVU7UUFDbEQsT0FBTyxHQUFHLElBQUksS0FBSztZQUNqQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFrQixJQUFLLE9BQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBekIsQ0FBeUIsQ0FBQztZQUN6RSxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ1gsQ0FBQzs7Z0JBbkl5QixjQUFjO2dCQUNSLG9CQUFvQjs7O0lBVHpDLHFCQUFxQjtRQUhqQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1cscUJBQXFCLENBNElqQztnQ0F4SkQ7Q0F3SkMsQUE1SUQsSUE0SUM7U0E1SVkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRGVsaXZlcnlNb2RlLCBSb3V0aW5nQ29uZmlnU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQge1xuICBDaGVja291dENvbmZpZyxcbiAgRGVsaXZlcnlNb2RlUHJlZmVyZW5jZXMsXG59IGZyb20gJy4uL2NvbmZpZy9jaGVja291dC1jb25maWcnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdGVwLCBDaGVja291dFN0ZXBUeXBlIH0gZnJvbSAnLi4vbW9kZWwvY2hlY2tvdXQtc3RlcC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dENvbmZpZ1NlcnZpY2Uge1xuICBzdGVwczogQ2hlY2tvdXRTdGVwW10gPSB0aGlzLmNoZWNrb3V0Q29uZmlnLmNoZWNrb3V0LnN0ZXBzO1xuICBwcml2YXRlIGV4cHJlc3M6IGJvb2xlYW4gPSB0aGlzLmNoZWNrb3V0Q29uZmlnLmNoZWNrb3V0LmV4cHJlc3M7XG4gIHByaXZhdGUgZ3Vlc3Q6IGJvb2xlYW4gPSB0aGlzLmNoZWNrb3V0Q29uZmlnLmNoZWNrb3V0Lmd1ZXN0O1xuICBwcml2YXRlIGRlZmF1bHREZWxpdmVyeU1vZGU6IEFycmF5PERlbGl2ZXJ5TW9kZVByZWZlcmVuY2VzIHwgc3RyaW5nPiA9XG4gICAgdGhpcy5jaGVja291dENvbmZpZy5jaGVja291dC5kZWZhdWx0RGVsaXZlcnlNb2RlIHx8IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2hlY2tvdXRDb25maWc6IENoZWNrb3V0Q29uZmlnLFxuICAgIHByaXZhdGUgcm91dGluZ0NvbmZpZ1NlcnZpY2U6IFJvdXRpbmdDb25maWdTZXJ2aWNlXG4gICkge31cblxuICBnZXRDaGVja291dFN0ZXAoY3VycmVudFN0ZXBUeXBlOiBDaGVja291dFN0ZXBUeXBlKTogQ2hlY2tvdXRTdGVwIHtcbiAgICByZXR1cm4gdGhpcy5zdGVwc1t0aGlzLmdldENoZWNrb3V0U3RlcEluZGV4KCd0eXBlJywgY3VycmVudFN0ZXBUeXBlKV07XG4gIH1cblxuICBnZXRDaGVja291dFN0ZXBSb3V0ZShjdXJyZW50U3RlcFR5cGU6IENoZWNrb3V0U3RlcFR5cGUpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmdldENoZWNrb3V0U3RlcChjdXJyZW50U3RlcFR5cGUpLnJvdXRlTmFtZTtcbiAgfVxuXG4gIGdldEZpcnN0Q2hlY2tvdXRTdGVwUm91dGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zdGVwc1swXS5yb3V0ZU5hbWU7XG4gIH1cblxuICBnZXROZXh0Q2hlY2tvdXRTdGVwVXJsKGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSk6IHN0cmluZyB7XG4gICAgY29uc3Qgc3RlcEluZGV4ID0gdGhpcy5nZXRDdXJyZW50U3RlcEluZGV4KGFjdGl2YXRlZFJvdXRlKTtcblxuICAgIHJldHVybiBzdGVwSW5kZXggPj0gMCAmJiB0aGlzLnN0ZXBzW3N0ZXBJbmRleCArIDFdXG4gICAgICA/IHRoaXMuZ2V0U3RlcFVybEZyb21TdGVwUm91dGUodGhpcy5zdGVwc1tzdGVwSW5kZXggKyAxXS5yb3V0ZU5hbWUpXG4gICAgICA6IG51bGw7XG4gIH1cblxuICBnZXRQcmV2aW91c0NoZWNrb3V0U3RlcFVybChhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpOiBzdHJpbmcge1xuICAgIGNvbnN0IHN0ZXBJbmRleCA9IHRoaXMuZ2V0Q3VycmVudFN0ZXBJbmRleChhY3RpdmF0ZWRSb3V0ZSk7XG5cbiAgICByZXR1cm4gc3RlcEluZGV4ID49IDAgJiYgdGhpcy5zdGVwc1tzdGVwSW5kZXggLSAxXVxuICAgICAgPyB0aGlzLmdldFN0ZXBVcmxGcm9tU3RlcFJvdXRlKHRoaXMuc3RlcHNbc3RlcEluZGV4IC0gMV0ucm91dGVOYW1lKVxuICAgICAgOiBudWxsO1xuICB9XG5cbiAgZ2V0Q3VycmVudFN0ZXBJbmRleChhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpOiBudW1iZXIgfCBudWxsIHtcbiAgICBjb25zdCBjdXJyZW50U3RlcFVybDogc3RyaW5nID0gdGhpcy5nZXRTdGVwVXJsRnJvbUFjdGl2YXRlZFJvdXRlKFxuICAgICAgYWN0aXZhdGVkUm91dGVcbiAgICApO1xuXG4gICAgbGV0IHN0ZXBJbmRleDogbnVtYmVyO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgZm9yIChjb25zdCBzdGVwIG9mIHRoaXMuc3RlcHMpIHtcbiAgICAgIGlmIChcbiAgICAgICAgY3VycmVudFN0ZXBVcmwgPT09IGAvJHt0aGlzLmdldFN0ZXBVcmxGcm9tU3RlcFJvdXRlKHN0ZXAucm91dGVOYW1lKX1gXG4gICAgICApIHtcbiAgICAgICAgc3RlcEluZGV4ID0gaW5kZXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRleCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGVwSW5kZXggPj0gMCA/IHN0ZXBJbmRleCA6IG51bGw7XG4gIH1cblxuICBwcm90ZWN0ZWQgY29tcGFyZURlbGl2ZXJ5Q29zdChcbiAgICBkZWxpdmVyeU1vZGUxOiBEZWxpdmVyeU1vZGUsXG4gICAgZGVsaXZlcnlNb2RlMjogRGVsaXZlcnlNb2RlXG4gICk6IG51bWJlciB7XG4gICAgaWYgKGRlbGl2ZXJ5TW9kZTEuZGVsaXZlcnlDb3N0LnZhbHVlID4gZGVsaXZlcnlNb2RlMi5kZWxpdmVyeUNvc3QudmFsdWUpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBkZWxpdmVyeU1vZGUxLmRlbGl2ZXJ5Q29zdC52YWx1ZSA8IGRlbGl2ZXJ5TW9kZTIuZGVsaXZlcnlDb3N0LnZhbHVlXG4gICAgKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpbmRNYXRjaGluZ0RlbGl2ZXJ5TW9kZShcbiAgICBkZWxpdmVyeU1vZGVzOiBEZWxpdmVyeU1vZGVbXSxcbiAgICBpbmRleCA9IDBcbiAgKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKHRoaXMuZGVmYXVsdERlbGl2ZXJ5TW9kZVtpbmRleF0pIHtcbiAgICAgIGNhc2UgRGVsaXZlcnlNb2RlUHJlZmVyZW5jZXMuRlJFRTpcbiAgICAgICAgaWYgKGRlbGl2ZXJ5TW9kZXNbMF0uZGVsaXZlcnlDb3N0LnZhbHVlID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIGRlbGl2ZXJ5TW9kZXNbMF0uY29kZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRGVsaXZlcnlNb2RlUHJlZmVyZW5jZXMuTEVBU1RfRVhQRU5TSVZFOlxuICAgICAgICBjb25zdCBsZWFzdEV4cGVuc2l2ZUZvdW5kID0gZGVsaXZlcnlNb2Rlcy5maW5kKFxuICAgICAgICAgIGRlbGl2ZXJ5TW9kZSA9PiBkZWxpdmVyeU1vZGUuZGVsaXZlcnlDb3N0LnZhbHVlICE9PSAwXG4gICAgICAgICk7XG4gICAgICAgIGlmIChsZWFzdEV4cGVuc2l2ZUZvdW5kKSB7XG4gICAgICAgICAgcmV0dXJuIGxlYXN0RXhwZW5zaXZlRm91bmQuY29kZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRGVsaXZlcnlNb2RlUHJlZmVyZW5jZXMuTU9TVF9FWFBFTlNJVkU6XG4gICAgICAgIHJldHVybiBkZWxpdmVyeU1vZGVzW2RlbGl2ZXJ5TW9kZXMubGVuZ3RoIC0gMV0uY29kZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnN0IGNvZGVGb3VuZCA9IGRlbGl2ZXJ5TW9kZXMuZmluZChcbiAgICAgICAgICBkZWxpdmVyeU1vZGUgPT4gZGVsaXZlcnlNb2RlLmNvZGUgPT09IHRoaXMuZGVmYXVsdERlbGl2ZXJ5TW9kZVtpbmRleF1cbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGNvZGVGb3VuZCkge1xuICAgICAgICAgIHJldHVybiBjb2RlRm91bmQuY29kZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBsYXN0TW9kZSA9IHRoaXMuZGVmYXVsdERlbGl2ZXJ5TW9kZS5sZW5ndGggLSAxIDw9IGluZGV4O1xuICAgIHJldHVybiBsYXN0TW9kZVxuICAgICAgPyBkZWxpdmVyeU1vZGVzWzBdLmNvZGVcbiAgICAgIDogdGhpcy5maW5kTWF0Y2hpbmdEZWxpdmVyeU1vZGUoZGVsaXZlcnlNb2RlcywgaW5kZXggKyAxKTtcbiAgfVxuXG4gIGdldFByZWZlcnJlZERlbGl2ZXJ5TW9kZShkZWxpdmVyeU1vZGVzOiBEZWxpdmVyeU1vZGVbXSk6IHN0cmluZyB7XG4gICAgZGVsaXZlcnlNb2Rlcy5zb3J0KHRoaXMuY29tcGFyZURlbGl2ZXJ5Q29zdCk7XG4gICAgcmV0dXJuIHRoaXMuZmluZE1hdGNoaW5nRGVsaXZlcnlNb2RlKGRlbGl2ZXJ5TW9kZXMpO1xuICB9XG5cbiAgaXNFeHByZXNzQ2hlY2tvdXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZXhwcmVzcztcbiAgfVxuXG4gIGlzR3Vlc3RDaGVja291dCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5ndWVzdDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3RlcFVybEZyb21BY3RpdmF0ZWRSb3V0ZShcbiAgICBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIGFjdGl2YXRlZFJvdXRlICYmXG4gICAgICBhY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdCAmJlxuICAgICAgYWN0aXZhdGVkUm91dGUuc25hcHNob3QudXJsXG4gICAgICA/IGAvJHthY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC51cmwuam9pbignLycpfWBcbiAgICAgIDogbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3RlcFVybEZyb21TdGVwUm91dGUoc3RlcFJvdXRlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnJvdXRpbmdDb25maWdTZXJ2aWNlLmdldFJvdXRlQ29uZmlnKHN0ZXBSb3V0ZSkucGF0aHNbMF07XG4gIH1cblxuICBwcml2YXRlIGdldENoZWNrb3V0U3RlcEluZGV4KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogbnVtYmVyIHwgbnVsbCB7XG4gICAgcmV0dXJuIGtleSAmJiB2YWx1ZVxuICAgICAgPyB0aGlzLnN0ZXBzLmZpbmRJbmRleCgoc3RlcDogQ2hlY2tvdXRTdGVwKSA9PiBzdGVwW2tleV0uaW5jbHVkZXModmFsdWUpKVxuICAgICAgOiBudWxsO1xuICB9XG59XG4iXX0=