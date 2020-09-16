import { Injectable, isDevMode } from '@angular/core';
import { Router, } from '@angular/router';
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
export class CheckoutStepsSetGuard {
    constructor(paymentTypeService, checkoutStepService, checkoutDetailsService, routingConfigService, checkoutCostCenterService, router) {
        this.paymentTypeService = paymentTypeService;
        this.checkoutStepService = checkoutStepService;
        this.checkoutDetailsService = checkoutDetailsService;
        this.routingConfigService = routingConfigService;
        this.checkoutCostCenterService = checkoutCostCenterService;
        this.router = router;
    }
    canActivate(route, _) {
        let currentIndex = -1;
        const currentRouteUrl = '/' + route.url.join('/');
        // check whether the previous step is set
        return combineLatest([
            this.checkoutStepService.steps$,
            this.paymentTypeService.isAccountPayment(),
        ]).pipe(tap(([, isAccount]) => {
            this.checkoutStepService.disableEnableStep(CheckoutStepType.PAYMENT_DETAILS, isAccount);
        }), take(1), switchMap(([steps, isAccount]) => {
            currentIndex = steps.findIndex((step) => {
                const stepRouteUrl = `/${this.routingConfigService.getRouteConfig(step.routeName).paths[0]}`;
                return stepRouteUrl === currentRouteUrl;
            });
            // get current step
            let currentStep;
            if (currentIndex >= 0) {
                currentStep = steps[currentIndex];
            }
            if (Boolean(currentStep)) {
                return this.isStepSet(steps[currentIndex - 1], isAccount);
            }
            else {
                if (isDevMode()) {
                    console.warn(`Missing step with route '${currentRouteUrl}' in checkout configuration or this step is disabled.`);
                }
                return of(this.getUrl('checkout'));
            }
        }));
    }
    isStepSet(step, isAccountPayment) {
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
    }
    isPaymentTypeSet(step) {
        return this.paymentTypeService.getSelectedPaymentType().pipe(map((paymentType) => {
            if (Boolean(paymentType)) {
                return true;
            }
            else {
                return this.getUrl(step.routeName);
            }
        }));
    }
    isShippingAddressAndCostCenterSet(step, isAccountPayment) {
        return combineLatest([
            this.checkoutDetailsService.getDeliveryAddress(),
            this.checkoutCostCenterService.getCostCenter(),
        ]).pipe(map(([deliveryAddress, costCenter]) => {
            if (isAccountPayment) {
                if (deliveryAddress &&
                    Object.keys(deliveryAddress).length &&
                    Boolean(costCenter)) {
                    return true;
                }
                else {
                    return this.getUrl(step.routeName);
                }
            }
            else {
                if (deliveryAddress &&
                    Object.keys(deliveryAddress).length &&
                    costCenter === undefined) {
                    return true;
                }
                else {
                    return this.getUrl(step.routeName);
                }
            }
        }));
    }
    isDeliveryModeSet(step) {
        return this.checkoutDetailsService
            .getSelectedDeliveryModeCode()
            .pipe(map((mode) => mode && mode.length ? true : this.getUrl(step.routeName)));
    }
    isPaymentDetailsSet(step) {
        return this.checkoutDetailsService
            .getPaymentDetails()
            .pipe(map((paymentDetails) => paymentDetails && Object.keys(paymentDetails).length !== 0
            ? true
            : this.getUrl(step.routeName)));
    }
    getUrl(routeName) {
        return this.router.parseUrl(this.routingConfigService.getRouteConfig(routeName).paths[0]);
    }
}
CheckoutStepsSetGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutStepsSetGuard_Factory() { return new CheckoutStepsSetGuard(i0.ɵɵinject(i1.PaymentTypeService), i0.ɵɵinject(i2.CheckoutStepService), i0.ɵɵinject(i3.CheckoutDetailsService), i0.ɵɵinject(i1.RoutingConfigService), i0.ɵɵinject(i1.CheckoutCostCenterService), i0.ɵɵinject(i4.Router)); }, token: CheckoutStepsSetGuard, providedIn: "root" });
CheckoutStepsSetGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
CheckoutStepsSetGuard.ctorParameters = () => [
    { type: PaymentTypeService },
    { type: CheckoutStepService },
    { type: CheckoutDetailsService },
    { type: RoutingConfigService },
    { type: CheckoutCostCenterService },
    { type: Router }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtc3RlcHMtc2V0Lmd1YXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvZ3VhcmRzL2NoZWNrb3V0LXN0ZXBzLXNldC5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBR0wsTUFBTSxHQUdQLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUNMLHlCQUF5QixFQUN6QixrQkFBa0IsRUFDbEIsb0JBQW9CLEdBQ3JCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBZ0IsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7O0FBS3hFLE1BQU0sT0FBTyxxQkFBcUI7SUFDaEMsWUFDWSxrQkFBc0MsRUFDdEMsbUJBQXdDLEVBQ3hDLHNCQUE4QyxFQUM5QyxvQkFBMEMsRUFDMUMseUJBQW9ELEVBQ3BELE1BQWM7UUFMZCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUM5Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7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SW5qZWN0YWJsZSwgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICBDYW5BY3RpdmF0ZSxcbiAgUm91dGVyLFxuICBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxuICBVcmxUcmVlLFxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQ2hlY2tvdXRDb3N0Q2VudGVyU2VydmljZSxcbiAgUGF5bWVudFR5cGVTZXJ2aWNlLFxuICBSb3V0aW5nQ29uZmlnU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgdGFrZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdGVwLCBDaGVja291dFN0ZXBUeXBlIH0gZnJvbSAnLi4vbW9kZWwvY2hlY2tvdXQtc3RlcC5tb2RlbCc7XG5pbXBvcnQgeyBDaGVja291dERldGFpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2hlY2tvdXQtZGV0YWlscy5zZXJ2aWNlJztcbmltcG9ydCB7IENoZWNrb3V0U3RlcFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jaGVja291dC1zdGVwLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRTdGVwc1NldEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcGF5bWVudFR5cGVTZXJ2aWNlOiBQYXltZW50VHlwZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U3RlcFNlcnZpY2U6IENoZWNrb3V0U3RlcFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0RGV0YWlsc1NlcnZpY2U6IENoZWNrb3V0RGV0YWlsc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdDb25maWdTZXJ2aWNlOiBSb3V0aW5nQ29uZmlnU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRDb3N0Q2VudGVyU2VydmljZTogQ2hlY2tvdXRDb3N0Q2VudGVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXJcbiAgKSB7fVxuXG4gIGNhbkFjdGl2YXRlKFxuICAgIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIF86IFJvdXRlclN0YXRlU25hcHNob3RcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIGxldCBjdXJyZW50SW5kZXggPSAtMTtcbiAgICBjb25zdCBjdXJyZW50Um91dGVVcmwgPSAnLycgKyByb3V0ZS51cmwuam9pbignLycpO1xuXG4gICAgLy8gY2hlY2sgd2hldGhlciB0aGUgcHJldmlvdXMgc3RlcCBpcyBzZXRcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmNoZWNrb3V0U3RlcFNlcnZpY2Uuc3RlcHMkLFxuICAgICAgdGhpcy5wYXltZW50VHlwZVNlcnZpY2UuaXNBY2NvdW50UGF5bWVudCgpLFxuICAgIF0pLnBpcGUoXG4gICAgICB0YXAoKFssIGlzQWNjb3VudF0pID0+IHtcbiAgICAgICAgdGhpcy5jaGVja291dFN0ZXBTZXJ2aWNlLmRpc2FibGVFbmFibGVTdGVwKFxuICAgICAgICAgIENoZWNrb3V0U3RlcFR5cGUuUEFZTUVOVF9ERVRBSUxTLFxuICAgICAgICAgIGlzQWNjb3VudFxuICAgICAgICApO1xuICAgICAgfSksXG4gICAgICB0YWtlKDEpLFxuICAgICAgc3dpdGNoTWFwKChbc3RlcHMsIGlzQWNjb3VudF0pID0+IHtcbiAgICAgICAgY3VycmVudEluZGV4ID0gc3RlcHMuZmluZEluZGV4KChzdGVwKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RlcFJvdXRlVXJsID0gYC8ke1xuICAgICAgICAgICAgdGhpcy5yb3V0aW5nQ29uZmlnU2VydmljZS5nZXRSb3V0ZUNvbmZpZyhzdGVwLnJvdXRlTmFtZSkucGF0aHNbMF1cbiAgICAgICAgICB9YDtcbiAgICAgICAgICByZXR1cm4gc3RlcFJvdXRlVXJsID09PSBjdXJyZW50Um91dGVVcmw7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBnZXQgY3VycmVudCBzdGVwXG4gICAgICAgIGxldCBjdXJyZW50U3RlcDogQ2hlY2tvdXRTdGVwO1xuICAgICAgICBpZiAoY3VycmVudEluZGV4ID49IDApIHtcbiAgICAgICAgICBjdXJyZW50U3RlcCA9IHN0ZXBzW2N1cnJlbnRJbmRleF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEJvb2xlYW4oY3VycmVudFN0ZXApKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaXNTdGVwU2V0KHN0ZXBzW2N1cnJlbnRJbmRleCAtIDFdLCBpc0FjY291bnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgTWlzc2luZyBzdGVwIHdpdGggcm91dGUgJyR7Y3VycmVudFJvdXRlVXJsfScgaW4gY2hlY2tvdXQgY29uZmlndXJhdGlvbiBvciB0aGlzIHN0ZXAgaXMgZGlzYWJsZWQuYFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG9mKHRoaXMuZ2V0VXJsKCdjaGVja291dCcpKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzU3RlcFNldChcbiAgICBzdGVwOiBDaGVja291dFN0ZXAsXG4gICAgaXNBY2NvdW50UGF5bWVudFxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgaWYgKHN0ZXAgJiYgIXN0ZXAuZGlzYWJsZWQpIHtcbiAgICAgIHN3aXRjaCAoc3RlcC50eXBlWzBdKSB7XG4gICAgICAgIGNhc2UgQ2hlY2tvdXRTdGVwVHlwZS5QQVlNRU5UX1RZUEU6IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5pc1BheW1lbnRUeXBlU2V0KHN0ZXApO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hlY2tvdXRTdGVwVHlwZS5TSElQUElOR19BRERSRVNTOiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaXNTaGlwcGluZ0FkZHJlc3NBbmRDb3N0Q2VudGVyU2V0KHN0ZXAsIGlzQWNjb3VudFBheW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hlY2tvdXRTdGVwVHlwZS5ERUxJVkVSWV9NT0RFOiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaXNEZWxpdmVyeU1vZGVTZXQoc3RlcCk7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGVja291dFN0ZXBUeXBlLlBBWU1FTlRfREVUQUlMUzoge1xuICAgICAgICAgIHJldHVybiB0aGlzLmlzUGF5bWVudERldGFpbHNTZXQoc3RlcCk7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGVja291dFN0ZXBUeXBlLlJFVklFV19PUkRFUjoge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvZih0cnVlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpc1BheW1lbnRUeXBlU2V0KFxuICAgIHN0ZXA6IENoZWNrb3V0U3RlcFxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgcmV0dXJuIHRoaXMucGF5bWVudFR5cGVTZXJ2aWNlLmdldFNlbGVjdGVkUGF5bWVudFR5cGUoKS5waXBlKFxuICAgICAgbWFwKChwYXltZW50VHlwZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChCb29sZWFuKHBheW1lbnRUeXBlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmdldFVybChzdGVwLnJvdXRlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpc1NoaXBwaW5nQWRkcmVzc0FuZENvc3RDZW50ZXJTZXQoXG4gICAgc3RlcDogQ2hlY2tvdXRTdGVwLFxuICAgIGlzQWNjb3VudFBheW1lbnQ6IGJvb2xlYW5cbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuY2hlY2tvdXREZXRhaWxzU2VydmljZS5nZXREZWxpdmVyeUFkZHJlc3MoKSxcbiAgICAgIHRoaXMuY2hlY2tvdXRDb3N0Q2VudGVyU2VydmljZS5nZXRDb3N0Q2VudGVyKCksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW2RlbGl2ZXJ5QWRkcmVzcywgY29zdENlbnRlcl0pID0+IHtcbiAgICAgICAgaWYgKGlzQWNjb3VudFBheW1lbnQpIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBkZWxpdmVyeUFkZHJlc3MgJiZcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGRlbGl2ZXJ5QWRkcmVzcykubGVuZ3RoICYmXG4gICAgICAgICAgICBCb29sZWFuKGNvc3RDZW50ZXIpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VXJsKHN0ZXAucm91dGVOYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgZGVsaXZlcnlBZGRyZXNzICYmXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhkZWxpdmVyeUFkZHJlc3MpLmxlbmd0aCAmJlxuICAgICAgICAgICAgY29zdENlbnRlciA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VXJsKHN0ZXAucm91dGVOYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpc0RlbGl2ZXJ5TW9kZVNldChcbiAgICBzdGVwOiBDaGVja291dFN0ZXBcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0RGV0YWlsc1NlcnZpY2VcbiAgICAgIC5nZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZUNvZGUoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgobW9kZTogc3RyaW5nKSA9PlxuICAgICAgICAgIG1vZGUgJiYgbW9kZS5sZW5ndGggPyB0cnVlIDogdGhpcy5nZXRVcmwoc3RlcC5yb3V0ZU5hbWUpXG4gICAgICAgIClcbiAgICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNQYXltZW50RGV0YWlsc1NldChcbiAgICBzdGVwOiBDaGVja291dFN0ZXBcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0RGV0YWlsc1NlcnZpY2VcbiAgICAgIC5nZXRQYXltZW50RGV0YWlscygpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChwYXltZW50RGV0YWlscykgPT5cbiAgICAgICAgICBwYXltZW50RGV0YWlscyAmJiBPYmplY3Qua2V5cyhwYXltZW50RGV0YWlscykubGVuZ3RoICE9PSAwXG4gICAgICAgICAgICA/IHRydWVcbiAgICAgICAgICAgIDogdGhpcy5nZXRVcmwoc3RlcC5yb3V0ZU5hbWUpXG4gICAgICAgIClcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldFVybChyb3V0ZU5hbWU6IHN0cmluZyk6IFVybFRyZWUge1xuICAgIHJldHVybiB0aGlzLnJvdXRlci5wYXJzZVVybChcbiAgICAgIHRoaXMucm91dGluZ0NvbmZpZ1NlcnZpY2UuZ2V0Um91dGVDb25maWcocm91dGVOYW1lKS5wYXRoc1swXVxuICAgICk7XG4gIH1cbn1cbiJdfQ==