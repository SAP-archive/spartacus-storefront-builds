import { __decorate, __read } from "tslib";
import { Injectable, isDevMode } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree, } from '@angular/router';
import { CheckoutCostCenterService, PaymentTypeService, RoutingConfigService, } from '@spartacus/core';
import { combineLatest, of } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { CheckoutStepType } from '../model/checkout-step.model';
import { CheckoutDetailsService } from '../services/checkout-details.service';
import { CheckoutStepService } from '../services/checkout-step.service';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "../services/checkout-step.service";
import * as i3 from "../services/checkout-details.service";
import * as i4 from "@angular/router";
var CheckoutStepsSetGuard = /** @class */ (function () {
    function CheckoutStepsSetGuard(paymentTypeService, checkoutStepService, checkoutDetailsService, routingConfigService, checkoutCostCenterService, router) {
        this.paymentTypeService = paymentTypeService;
        this.checkoutStepService = checkoutStepService;
        this.checkoutDetailsService = checkoutDetailsService;
        this.routingConfigService = routingConfigService;
        this.checkoutCostCenterService = checkoutCostCenterService;
        this.router = router;
    }
    CheckoutStepsSetGuard.prototype.canActivate = function (route, _) {
        var _this = this;
        var currentIndex = -1;
        var currentRouteUrl = '/' + route.url.join('/');
        // check whether the previous step is set
        return combineLatest([
            this.checkoutStepService.steps$,
            this.paymentTypeService.isAccountPayment(),
        ]).pipe(tap(function (_a) {
            var _b = __read(_a, 2), isAccount = _b[1];
            _this.checkoutStepService.disableEnableStep(CheckoutStepType.PAYMENT_DETAILS, isAccount);
        }), take(1), switchMap(function (_a) {
            var _b = __read(_a, 2), steps = _b[0], isAccount = _b[1];
            currentIndex = steps.findIndex(function (step) {
                var stepRouteUrl = "/" + _this.routingConfigService.getRouteConfig(step.routeName).paths[0];
                return stepRouteUrl === currentRouteUrl;
            });
            // get current step
            var currentStep;
            if (currentIndex >= 0) {
                currentStep = steps[currentIndex];
            }
            if (Boolean(currentStep)) {
                return _this.isStepSet(steps[currentIndex - 1], isAccount);
            }
            else {
                if (isDevMode()) {
                    console.warn("Missing step with route '" + currentRouteUrl + "' in checkout configuration or this step is disabled.");
                }
                return of(_this.getUrl('checkout'));
            }
        }));
    };
    CheckoutStepsSetGuard.prototype.isStepSet = function (step, isAccountPayment) {
        if (step && !step.disabled) {
            switch (step.type[0]) {
                case CheckoutStepType.PAYMENT_TYPE: {
                    return this.isPaymentTypeSet(step);
                }
                case CheckoutStepType.SHIPPING_ADDRESS: {
                    return this.isShippingAddressAndCostCenterSet(step, isAccountPayment);
                }
                case CheckoutStepType.DELIVERY_MODE: {
                    return this.isDeliveryModeSet(step);
                }
                case CheckoutStepType.PAYMENT_DETAILS: {
                    return this.isPaymentDetailsSet(step);
                }
                case CheckoutStepType.REVIEW_ORDER: {
                    break;
                }
            }
        }
        return of(true);
    };
    CheckoutStepsSetGuard.prototype.isPaymentTypeSet = function (step) {
        var _this = this;
        return this.paymentTypeService.getSelectedPaymentType().pipe(map(function (paymentType) {
            if (Boolean(paymentType)) {
                return true;
            }
            else {
                return _this.getUrl(step.routeName);
            }
        }));
    };
    CheckoutStepsSetGuard.prototype.isShippingAddressAndCostCenterSet = function (step, isAccountPayment) {
        var _this = this;
        return combineLatest([
            this.checkoutDetailsService.getDeliveryAddress(),
            this.checkoutCostCenterService.getCostCenter(),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 2), deliveryAddress = _b[0], costCenter = _b[1];
            if (isAccountPayment) {
                if (deliveryAddress &&
                    Object.keys(deliveryAddress).length &&
                    Boolean(costCenter)) {
                    return true;
                }
                else {
                    return _this.getUrl(step.routeName);
                }
            }
            else {
                if (deliveryAddress &&
                    Object.keys(deliveryAddress).length &&
                    costCenter === undefined) {
                    return true;
                }
                else {
                    return _this.getUrl(step.routeName);
                }
            }
        }));
    };
    CheckoutStepsSetGuard.prototype.isDeliveryModeSet = function (step) {
        var _this = this;
        return this.checkoutDetailsService
            .getSelectedDeliveryModeCode()
            .pipe(map(function (mode) {
            return mode && mode.length ? true : _this.getUrl(step.routeName);
        }));
    };
    CheckoutStepsSetGuard.prototype.isPaymentDetailsSet = function (step) {
        var _this = this;
        return this.checkoutDetailsService
            .getPaymentDetails()
            .pipe(map(function (paymentDetails) {
            return paymentDetails && Object.keys(paymentDetails).length !== 0
                ? true
                : _this.getUrl(step.routeName);
        }));
    };
    CheckoutStepsSetGuard.prototype.getUrl = function (routeName) {
        return this.router.parseUrl(this.routingConfigService.getRouteConfig(routeName).paths[0]);
    };
    CheckoutStepsSetGuard.ctorParameters = function () { return [
        { type: PaymentTypeService },
        { type: CheckoutStepService },
        { type: CheckoutDetailsService },
        { type: RoutingConfigService },
        { type: CheckoutCostCenterService },
        { type: Router }
    ]; };
    CheckoutStepsSetGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutStepsSetGuard_Factory() { return new CheckoutStepsSetGuard(i0.ɵɵinject(i1.PaymentTypeService), i0.ɵɵinject(i2.CheckoutStepService), i0.ɵɵinject(i3.CheckoutDetailsService), i0.ɵɵinject(i1.RoutingConfigService), i0.ɵɵinject(i1.CheckoutCostCenterService), i0.ɵɵinject(i4.Router)); }, token: CheckoutStepsSetGuard, providedIn: "root" });
    CheckoutStepsSetGuard = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CheckoutStepsSetGuard);
    return CheckoutStepsSetGuard;
}());
export { CheckoutStepsSetGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtc3RlcHMtc2V0Lmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvZ3VhcmRzL2NoZWNrb3V0LXN0ZXBzLXNldC5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUNMLHNCQUFzQixFQUN0QixXQUFXLEVBQ1gsTUFBTSxFQUNOLG1CQUFtQixFQUNuQixPQUFPLEdBQ1IsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQ0wseUJBQXlCLEVBQ3pCLGtCQUFrQixFQUNsQixvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0QsT0FBTyxFQUFnQixnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7Ozs7QUFLeEU7SUFDRSwrQkFDWSxrQkFBc0MsRUFDdEMsbUJBQXdDLEVBQ3hDLHNCQUE4QyxFQUM5QyxvQkFBMEMsRUFDMUMseUJBQW9ELEVBQ3BELE1BQWM7UUFMZCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUM5Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLDhCQUF5QixHQUF6Qix5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QXNCO2dCQUN4QixvQkFBb0I7Z0JBQ2YseUJBQXlCO2dCQUM1QyxNQUFNOzs7SUFQZixxQkFBcUI7UUFIakMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLHFCQUFxQixDQWdLakM7Z0NBdExEO0NBc0xDLEFBaEtELElBZ0tDO1NBaEtZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgQ2FuQWN0aXZhdGUsXG4gIFJvdXRlcixcbiAgUm91dGVyU3RhdGVTbmFwc2hvdCxcbiAgVXJsVHJlZSxcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIENoZWNrb3V0Q29zdENlbnRlclNlcnZpY2UsXG4gIFBheW1lbnRUeXBlU2VydmljZSxcbiAgUm91dGluZ0NvbmZpZ1NlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIHRha2UsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENoZWNrb3V0U3RlcCwgQ2hlY2tvdXRTdGVwVHlwZSB9IGZyb20gJy4uL21vZGVsL2NoZWNrb3V0LXN0ZXAubW9kZWwnO1xuaW1wb3J0IHsgQ2hlY2tvdXREZXRhaWxzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NoZWNrb3V0LWRldGFpbHMuc2VydmljZSc7XG5pbXBvcnQgeyBDaGVja291dFN0ZXBTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2hlY2tvdXQtc3RlcC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0U3RlcHNTZXRHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHBheW1lbnRUeXBlU2VydmljZTogUGF5bWVudFR5cGVTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dFN0ZXBTZXJ2aWNlOiBDaGVja291dFN0ZXBTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dERldGFpbHNTZXJ2aWNlOiBDaGVja291dERldGFpbHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nQ29uZmlnU2VydmljZTogUm91dGluZ0NvbmZpZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0Q29zdENlbnRlclNlcnZpY2U6IENoZWNrb3V0Q29zdENlbnRlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRlcjogUm91dGVyXG4gICkge31cblxuICBjYW5BY3RpdmF0ZShcbiAgICByb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBfOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcbiAgICBsZXQgY3VycmVudEluZGV4ID0gLTE7XG4gICAgY29uc3QgY3VycmVudFJvdXRlVXJsID0gJy8nICsgcm91dGUudXJsLmpvaW4oJy8nKTtcblxuICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhlIHByZXZpb3VzIHN0ZXAgaXMgc2V0XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5jaGVja291dFN0ZXBTZXJ2aWNlLnN0ZXBzJCxcbiAgICAgIHRoaXMucGF5bWVudFR5cGVTZXJ2aWNlLmlzQWNjb3VudFBheW1lbnQoKSxcbiAgICBdKS5waXBlKFxuICAgICAgdGFwKChbLCBpc0FjY291bnRdKSA9PiB7XG4gICAgICAgIHRoaXMuY2hlY2tvdXRTdGVwU2VydmljZS5kaXNhYmxlRW5hYmxlU3RlcChcbiAgICAgICAgICBDaGVja291dFN0ZXBUeXBlLlBBWU1FTlRfREVUQUlMUyxcbiAgICAgICAgICBpc0FjY291bnRcbiAgICAgICAgKTtcbiAgICAgIH0pLFxuICAgICAgdGFrZSgxKSxcbiAgICAgIHN3aXRjaE1hcCgoW3N0ZXBzLCBpc0FjY291bnRdKSA9PiB7XG4gICAgICAgIGN1cnJlbnRJbmRleCA9IHN0ZXBzLmZpbmRJbmRleCgoc3RlcCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0ZXBSb3V0ZVVybCA9IGAvJHtcbiAgICAgICAgICAgIHRoaXMucm91dGluZ0NvbmZpZ1NlcnZpY2UuZ2V0Um91dGVDb25maWcoc3RlcC5yb3V0ZU5hbWUpLnBhdGhzWzBdXG4gICAgICAgICAgfWA7XG4gICAgICAgICAgcmV0dXJuIHN0ZXBSb3V0ZVVybCA9PT0gY3VycmVudFJvdXRlVXJsO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gZ2V0IGN1cnJlbnQgc3RlcFxuICAgICAgICBsZXQgY3VycmVudFN0ZXA6IENoZWNrb3V0U3RlcDtcbiAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA+PSAwKSB7XG4gICAgICAgICAgY3VycmVudFN0ZXAgPSBzdGVwc1tjdXJyZW50SW5kZXhdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChCb29sZWFuKGN1cnJlbnRTdGVwKSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmlzU3RlcFNldChzdGVwc1tjdXJyZW50SW5kZXggLSAxXSwgaXNBY2NvdW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYE1pc3Npbmcgc3RlcCB3aXRoIHJvdXRlICcke2N1cnJlbnRSb3V0ZVVybH0nIGluIGNoZWNrb3V0IGNvbmZpZ3VyYXRpb24gb3IgdGhpcyBzdGVwIGlzIGRpc2FibGVkLmBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBvZih0aGlzLmdldFVybCgnY2hlY2tvdXQnKSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpc1N0ZXBTZXQoXG4gICAgc3RlcDogQ2hlY2tvdXRTdGVwLFxuICAgIGlzQWNjb3VudFBheW1lbnRcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIGlmIChzdGVwICYmICFzdGVwLmRpc2FibGVkKSB7XG4gICAgICBzd2l0Y2ggKHN0ZXAudHlwZVswXSkge1xuICAgICAgICBjYXNlIENoZWNrb3V0U3RlcFR5cGUuUEFZTUVOVF9UWVBFOiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaXNQYXltZW50VHlwZVNldChzdGVwKTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIENoZWNrb3V0U3RlcFR5cGUuU0hJUFBJTkdfQUREUkVTUzoge1xuICAgICAgICAgIHJldHVybiB0aGlzLmlzU2hpcHBpbmdBZGRyZXNzQW5kQ29zdENlbnRlclNldChzdGVwLCBpc0FjY291bnRQYXltZW50KTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIENoZWNrb3V0U3RlcFR5cGUuREVMSVZFUllfTU9ERToge1xuICAgICAgICAgIHJldHVybiB0aGlzLmlzRGVsaXZlcnlNb2RlU2V0KHN0ZXApO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hlY2tvdXRTdGVwVHlwZS5QQVlNRU5UX0RFVEFJTFM6IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5pc1BheW1lbnREZXRhaWxzU2V0KHN0ZXApO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hlY2tvdXRTdGVwVHlwZS5SRVZJRVdfT1JERVI6IHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2YodHJ1ZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNQYXltZW50VHlwZVNldChcbiAgICBzdGVwOiBDaGVja291dFN0ZXBcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIHJldHVybiB0aGlzLnBheW1lbnRUeXBlU2VydmljZS5nZXRTZWxlY3RlZFBheW1lbnRUeXBlKCkucGlwZShcbiAgICAgIG1hcCgocGF5bWVudFR5cGU6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoQm9vbGVhbihwYXltZW50VHlwZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5nZXRVcmwoc3RlcC5yb3V0ZU5hbWUpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNTaGlwcGluZ0FkZHJlc3NBbmRDb3N0Q2VudGVyU2V0KFxuICAgIHN0ZXA6IENoZWNrb3V0U3RlcCxcbiAgICBpc0FjY291bnRQYXltZW50OiBib29sZWFuXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmNoZWNrb3V0RGV0YWlsc1NlcnZpY2UuZ2V0RGVsaXZlcnlBZGRyZXNzKCksXG4gICAgICB0aGlzLmNoZWNrb3V0Q29zdENlbnRlclNlcnZpY2UuZ2V0Q29zdENlbnRlcigpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFtkZWxpdmVyeUFkZHJlc3MsIGNvc3RDZW50ZXJdKSA9PiB7XG4gICAgICAgIGlmIChpc0FjY291bnRQYXltZW50KSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgZGVsaXZlcnlBZGRyZXNzICYmXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhkZWxpdmVyeUFkZHJlc3MpLmxlbmd0aCAmJlxuICAgICAgICAgICAgQm9vbGVhbihjb3N0Q2VudGVyKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFVybChzdGVwLnJvdXRlTmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGRlbGl2ZXJ5QWRkcmVzcyAmJlxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZGVsaXZlcnlBZGRyZXNzKS5sZW5ndGggJiZcbiAgICAgICAgICAgIGNvc3RDZW50ZXIgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFVybChzdGVwLnJvdXRlTmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNEZWxpdmVyeU1vZGVTZXQoXG4gICAgc3RlcDogQ2hlY2tvdXRTdGVwXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dERldGFpbHNTZXJ2aWNlXG4gICAgICAuZ2V0U2VsZWN0ZWREZWxpdmVyeU1vZGVDb2RlKClcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKG1vZGU6IHN0cmluZykgPT5cbiAgICAgICAgICBtb2RlICYmIG1vZGUubGVuZ3RoID8gdHJ1ZSA6IHRoaXMuZ2V0VXJsKHN0ZXAucm91dGVOYW1lKVxuICAgICAgICApXG4gICAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzUGF5bWVudERldGFpbHNTZXQoXG4gICAgc3RlcDogQ2hlY2tvdXRTdGVwXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dERldGFpbHNTZXJ2aWNlXG4gICAgICAuZ2V0UGF5bWVudERldGFpbHMoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocGF5bWVudERldGFpbHMpID0+XG4gICAgICAgICAgcGF5bWVudERldGFpbHMgJiYgT2JqZWN0LmtleXMocGF5bWVudERldGFpbHMpLmxlbmd0aCAhPT0gMFxuICAgICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgICA6IHRoaXMuZ2V0VXJsKHN0ZXAucm91dGVOYW1lKVxuICAgICAgICApXG4gICAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRVcmwocm91dGVOYW1lOiBzdHJpbmcpOiBVcmxUcmVlIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXIucGFyc2VVcmwoXG4gICAgICB0aGlzLnJvdXRpbmdDb25maWdTZXJ2aWNlLmdldFJvdXRlQ29uZmlnKHJvdXRlTmFtZSkucGF0aHNbMF1cbiAgICApO1xuICB9XG59XG4iXX0=