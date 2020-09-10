import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { RoutingConfigService, RoutingService } from '@spartacus/core';
import { BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CheckoutConfigService } from './checkout-config.service';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "./checkout-config.service";
var CheckoutStepService = /** @class */ (function () {
    function CheckoutStepService(routingService, checkoutConfigService, routingConfigService) {
        var _this = this;
        this.routingService = routingService;
        this.checkoutConfigService = checkoutConfigService;
        this.routingConfigService = routingConfigService;
        this.steps$ = new BehaviorSubject(undefined);
        this.activeStepIndex$ = this.routingService.getRouterState().pipe(switchMap(function (router) {
            var activeStepUrl = router.state.context.id;
            return _this.steps$.pipe(map(function (steps) {
                var activeIndex;
                steps.forEach(function (step, index) {
                    var routeUrl = "/" + _this.routingConfigService.getRouteConfig(step.routeName).paths[0];
                    if (routeUrl === activeStepUrl) {
                        activeIndex = index;
                    }
                });
                return activeIndex;
            }));
        }));
        this.resetSteps();
    }
    CheckoutStepService.prototype.back = function (activatedRoute) {
        var previousUrl = this.getPreviousCheckoutStepUrl(activatedRoute);
        this.routingService.go(previousUrl === null ? 'cart' : previousUrl);
    };
    CheckoutStepService.prototype.next = function (activatedRoute) {
        var nextUrl = this.getNextCheckoutStepUrl(activatedRoute);
        this.routingService.go(nextUrl);
    };
    CheckoutStepService.prototype.goToStepWithIndex = function (stepIndex) {
        this.routingService.go(this.getStepUrlFromStepRoute(this.allSteps[stepIndex].routeName));
    };
    CheckoutStepService.prototype.getBackBntText = function (activatedRoute) {
        if (this.getPreviousCheckoutStepUrl(activatedRoute) === null) {
            return 'checkout.backToCart';
        }
        return 'common.back';
    };
    CheckoutStepService.prototype.resetSteps = function () {
        this.allSteps = this.checkoutConfigService.steps
            .filter(function (step) { return !step.disabled; })
            .map(function (x) { return Object.assign({}, x); });
        this.steps$.next(this.allSteps);
    };
    CheckoutStepService.prototype.disableEnableStep = function (currentStepType, disabled) {
        var currentStep = this.allSteps.find(function (step) {
            return step.type.includes(currentStepType);
        });
        if (currentStep && currentStep.disabled !== disabled) {
            currentStep.disabled = disabled;
            this.steps$.next(this.allSteps.filter(function (step) { return !step.disabled; }));
        }
    };
    CheckoutStepService.prototype.getCheckoutStep = function (currentStepType) {
        return this.allSteps[this.getCheckoutStepIndex('type', currentStepType)];
    };
    CheckoutStepService.prototype.getCheckoutStepRoute = function (currentStepType) {
        return this.getCheckoutStep(currentStepType).routeName;
    };
    CheckoutStepService.prototype.getFirstCheckoutStepRoute = function () {
        return this.allSteps[0].routeName;
    };
    CheckoutStepService.prototype.getNextCheckoutStepUrl = function (activatedRoute) {
        var stepIndex = this.getCurrentStepIndex(activatedRoute);
        if (stepIndex >= 0) {
            var i = 1;
            while (this.allSteps[stepIndex + i] &&
                this.allSteps[stepIndex + i].disabled) {
                i++;
            }
            var nextStep = this.allSteps[stepIndex + i];
            if (nextStep) {
                return this.getStepUrlFromStepRoute(nextStep.routeName);
            }
        }
        return null;
    };
    CheckoutStepService.prototype.getPreviousCheckoutStepUrl = function (activatedRoute) {
        var stepIndex = this.getCurrentStepIndex(activatedRoute);
        if (stepIndex >= 0) {
            var i = 1;
            while (this.allSteps[stepIndex - i] &&
                this.allSteps[stepIndex - i].disabled) {
                i++;
            }
            var previousStep = this.allSteps[stepIndex - i];
            if (previousStep) {
                return this.getStepUrlFromStepRoute(previousStep.routeName);
            }
        }
        return null;
    };
    CheckoutStepService.prototype.getCurrentStepIndex = function (activatedRoute) {
        var _this = this;
        var currentStepUrl = this.getStepUrlFromActivatedRoute(activatedRoute);
        return this.allSteps.findIndex(function (step) {
            return currentStepUrl === "/" + _this.getStepUrlFromStepRoute(step.routeName);
        });
    };
    CheckoutStepService.prototype.getStepUrlFromActivatedRoute = function (activatedRoute) {
        return activatedRoute &&
            activatedRoute.snapshot &&
            activatedRoute.snapshot.url
            ? "/" + activatedRoute.snapshot.url.join('/')
            : null;
    };
    CheckoutStepService.prototype.getStepUrlFromStepRoute = function (stepRoute) {
        return this.routingConfigService.getRouteConfig(stepRoute).paths[0];
    };
    CheckoutStepService.prototype.getCheckoutStepIndex = function (key, value) {
        return key && value
            ? this.allSteps.findIndex(function (step) {
                return step[key].includes(value);
            })
            : null;
    };
    CheckoutStepService.ctorParameters = function () { return [
        { type: RoutingService },
        { type: CheckoutConfigService },
        { type: RoutingConfigService }
    ]; };
    CheckoutStepService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutStepService_Factory() { return new CheckoutStepService(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.CheckoutConfigService), i0.ɵɵinject(i1.RoutingConfigService)); }, token: CheckoutStepService, providedIn: "root" });
    CheckoutStepService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CheckoutStepService);
    return CheckoutStepService;
}());
export { CheckoutStepService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtc3RlcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvc2VydmljZXMvY2hlY2tvdXQtc3RlcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFaEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFLbEU7SUE4QkUsNkJBQ1ksY0FBOEIsRUFDOUIscUJBQTRDLEVBQzVDLG9CQUEwQztRQUh0RCxpQkFNQztRQUxXLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUE3QjdDLFdBQU0sR0FBb0MsSUFBSSxlQUFlLENBRXBFLFNBQVMsQ0FBQyxDQUFDO1FBRUoscUJBQWdCLEdBRXJCLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUMzQyxTQUFTLENBQUMsVUFBQyxNQUFNO1lBQ2YsSUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQzlDLE9BQU8sS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ3JCLEdBQUcsQ0FBQyxVQUFDLEtBQUs7Z0JBQ1IsSUFBSSxXQUFXLENBQUM7Z0JBQ2hCLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSztv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QyxTQUFTLENBQUMsVUFBQyxJQUFrQjtnQkFDekMsT0FBQSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUF6QixDQUF5QixDQUMxQjtZQUNILENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDWCxDQUFDOztnQkFuSTJCLGNBQWM7Z0JBQ1AscUJBQXFCO2dCQUN0QixvQkFBb0I7OztJQWpDM0MsbUJBQW1CO1FBSC9CLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxtQkFBbUIsQ0FtSy9COzhCQTlLRDtDQThLQyxBQW5LRCxJQW1LQztTQW5LWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0aW5nQ29uZmlnU2VydmljZSwgUm91dGluZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENoZWNrb3V0U3RlcCwgQ2hlY2tvdXRTdGVwVHlwZSB9IGZyb20gJy4uL21vZGVsL2NoZWNrb3V0LXN0ZXAubW9kZWwnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9jaGVja291dC1jb25maWcuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dFN0ZXBTZXJ2aWNlIHtcbiAgLy8gaW5pdGlhbCBlbmFibGVkIHN0ZXBzXG4gIGFsbFN0ZXBzOiBDaGVja291dFN0ZXBbXTtcblxuICByZWFkb25seSBzdGVwcyQ6IEJlaGF2aW9yU3ViamVjdDxDaGVja291dFN0ZXBbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFxuICAgIENoZWNrb3V0U3RlcFtdXG4gID4odW5kZWZpbmVkKTtcblxuICByZWFkb25seSBhY3RpdmVTdGVwSW5kZXgkOiBPYnNlcnZhYmxlPFxuICAgIG51bWJlclxuICA+ID0gdGhpcy5yb3V0aW5nU2VydmljZS5nZXRSb3V0ZXJTdGF0ZSgpLnBpcGUoXG4gICAgc3dpdGNoTWFwKChyb3V0ZXIpID0+IHtcbiAgICAgIGNvbnN0IGFjdGl2ZVN0ZXBVcmwgPSByb3V0ZXIuc3RhdGUuY29udGV4dC5pZDtcbiAgICAgIHJldHVybiB0aGlzLnN0ZXBzJC5waXBlKFxuICAgICAgICBtYXAoKHN0ZXBzKSA9PiB7XG4gICAgICAgICAgbGV0IGFjdGl2ZUluZGV4O1xuICAgICAgICAgIHN0ZXBzLmZvckVhY2goKHN0ZXAsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByb3V0ZVVybCA9IGAvJHtcbiAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nQ29uZmlnU2VydmljZS5nZXRSb3V0ZUNvbmZpZyhzdGVwLnJvdXRlTmFtZSkucGF0aHNbMF1cbiAgICAgICAgICAgIH1gO1xuICAgICAgICAgICAgaWYgKHJvdXRlVXJsID09PSBhY3RpdmVTdGVwVXJsKSB7XG4gICAgICAgICAgICAgIGFjdGl2ZUluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIGFjdGl2ZUluZGV4O1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0Q29uZmlnU2VydmljZTogQ2hlY2tvdXRDb25maWdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nQ29uZmlnU2VydmljZTogUm91dGluZ0NvbmZpZ1NlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5yZXNldFN0ZXBzKCk7XG4gIH1cblxuICBiYWNrKGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSk6IHZvaWQge1xuICAgIGNvbnN0IHByZXZpb3VzVXJsID0gdGhpcy5nZXRQcmV2aW91c0NoZWNrb3V0U3RlcFVybChhY3RpdmF0ZWRSb3V0ZSk7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyhwcmV2aW91c1VybCA9PT0gbnVsbCA/ICdjYXJ0JyA6IHByZXZpb3VzVXJsKTtcbiAgfVxuXG4gIG5leHQoYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKTogdm9pZCB7XG4gICAgY29uc3QgbmV4dFVybCA9IHRoaXMuZ2V0TmV4dENoZWNrb3V0U3RlcFVybChhY3RpdmF0ZWRSb3V0ZSk7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyhuZXh0VXJsKTtcbiAgfVxuXG4gIGdvVG9TdGVwV2l0aEluZGV4KHN0ZXBJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyhcbiAgICAgIHRoaXMuZ2V0U3RlcFVybEZyb21TdGVwUm91dGUodGhpcy5hbGxTdGVwc1tzdGVwSW5kZXhdLnJvdXRlTmFtZSlcbiAgICApO1xuICB9XG5cbiAgZ2V0QmFja0JudFRleHQoYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5nZXRQcmV2aW91c0NoZWNrb3V0U3RlcFVybChhY3RpdmF0ZWRSb3V0ZSkgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnY2hlY2tvdXQuYmFja1RvQ2FydCc7XG4gICAgfVxuICAgIHJldHVybiAnY29tbW9uLmJhY2snO1xuICB9XG5cbiAgcmVzZXRTdGVwcygpOiB2b2lkIHtcbiAgICB0aGlzLmFsbFN0ZXBzID0gdGhpcy5jaGVja291dENvbmZpZ1NlcnZpY2Uuc3RlcHNcbiAgICAgIC5maWx0ZXIoKHN0ZXApID0+ICFzdGVwLmRpc2FibGVkKVxuICAgICAgLm1hcCgoeCkgPT4gT2JqZWN0LmFzc2lnbih7fSwgeCkpO1xuICAgIHRoaXMuc3RlcHMkLm5leHQodGhpcy5hbGxTdGVwcyk7XG4gIH1cblxuICBkaXNhYmxlRW5hYmxlU3RlcChcbiAgICBjdXJyZW50U3RlcFR5cGU6IENoZWNrb3V0U3RlcFR5cGUsXG4gICAgZGlzYWJsZWQ6IGJvb2xlYW5cbiAgKTogdm9pZCB7XG4gICAgY29uc3QgY3VycmVudFN0ZXAgPSB0aGlzLmFsbFN0ZXBzLmZpbmQoKHN0ZXApID0+XG4gICAgICBzdGVwLnR5cGUuaW5jbHVkZXMoY3VycmVudFN0ZXBUeXBlKVxuICAgICk7XG4gICAgaWYgKGN1cnJlbnRTdGVwICYmIGN1cnJlbnRTdGVwLmRpc2FibGVkICE9PSBkaXNhYmxlZCkge1xuICAgICAgY3VycmVudFN0ZXAuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICAgIHRoaXMuc3RlcHMkLm5leHQodGhpcy5hbGxTdGVwcy5maWx0ZXIoKHN0ZXApID0+ICFzdGVwLmRpc2FibGVkKSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2hlY2tvdXRTdGVwKGN1cnJlbnRTdGVwVHlwZTogQ2hlY2tvdXRTdGVwVHlwZSk6IENoZWNrb3V0U3RlcCB7XG4gICAgcmV0dXJuIHRoaXMuYWxsU3RlcHNbdGhpcy5nZXRDaGVja291dFN0ZXBJbmRleCgndHlwZScsIGN1cnJlbnRTdGVwVHlwZSldO1xuICB9XG5cbiAgZ2V0Q2hlY2tvdXRTdGVwUm91dGUoY3VycmVudFN0ZXBUeXBlOiBDaGVja291dFN0ZXBUeXBlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDaGVja291dFN0ZXAoY3VycmVudFN0ZXBUeXBlKS5yb3V0ZU5hbWU7XG4gIH1cblxuICBnZXRGaXJzdENoZWNrb3V0U3RlcFJvdXRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuYWxsU3RlcHNbMF0ucm91dGVOYW1lO1xuICB9XG5cbiAgZ2V0TmV4dENoZWNrb3V0U3RlcFVybChhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpOiBzdHJpbmcge1xuICAgIGNvbnN0IHN0ZXBJbmRleCA9IHRoaXMuZ2V0Q3VycmVudFN0ZXBJbmRleChhY3RpdmF0ZWRSb3V0ZSk7XG5cbiAgICBpZiAoc3RlcEluZGV4ID49IDApIHtcbiAgICAgIGxldCBpID0gMTtcbiAgICAgIHdoaWxlIChcbiAgICAgICAgdGhpcy5hbGxTdGVwc1tzdGVwSW5kZXggKyBpXSAmJlxuICAgICAgICB0aGlzLmFsbFN0ZXBzW3N0ZXBJbmRleCArIGldLmRpc2FibGVkXG4gICAgICApIHtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgICAgY29uc3QgbmV4dFN0ZXAgPSB0aGlzLmFsbFN0ZXBzW3N0ZXBJbmRleCArIGldO1xuICAgICAgaWYgKG5leHRTdGVwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFN0ZXBVcmxGcm9tU3RlcFJvdXRlKG5leHRTdGVwLnJvdXRlTmFtZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0UHJldmlvdXNDaGVja291dFN0ZXBVcmwoYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKTogc3RyaW5nIHtcbiAgICBjb25zdCBzdGVwSW5kZXggPSB0aGlzLmdldEN1cnJlbnRTdGVwSW5kZXgoYWN0aXZhdGVkUm91dGUpO1xuXG4gICAgaWYgKHN0ZXBJbmRleCA+PSAwKSB7XG4gICAgICBsZXQgaSA9IDE7XG4gICAgICB3aGlsZSAoXG4gICAgICAgIHRoaXMuYWxsU3RlcHNbc3RlcEluZGV4IC0gaV0gJiZcbiAgICAgICAgdGhpcy5hbGxTdGVwc1tzdGVwSW5kZXggLSBpXS5kaXNhYmxlZFxuICAgICAgKSB7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICAgIGNvbnN0IHByZXZpb3VzU3RlcCA9IHRoaXMuYWxsU3RlcHNbc3RlcEluZGV4IC0gaV07XG4gICAgICBpZiAocHJldmlvdXNTdGVwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFN0ZXBVcmxGcm9tU3RlcFJvdXRlKHByZXZpb3VzU3RlcC5yb3V0ZU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldEN1cnJlbnRTdGVwSW5kZXgoYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKTogbnVtYmVyIHtcbiAgICBjb25zdCBjdXJyZW50U3RlcFVybDogc3RyaW5nID0gdGhpcy5nZXRTdGVwVXJsRnJvbUFjdGl2YXRlZFJvdXRlKFxuICAgICAgYWN0aXZhdGVkUm91dGVcbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXMuYWxsU3RlcHMuZmluZEluZGV4KFxuICAgICAgKHN0ZXApID0+XG4gICAgICAgIGN1cnJlbnRTdGVwVXJsID09PSBgLyR7dGhpcy5nZXRTdGVwVXJsRnJvbVN0ZXBSb3V0ZShzdGVwLnJvdXRlTmFtZSl9YFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldFN0ZXBVcmxGcm9tQWN0aXZhdGVkUm91dGUoXG4gICAgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiBhY3RpdmF0ZWRSb3V0ZSAmJlxuICAgICAgYWN0aXZhdGVkUm91dGUuc25hcHNob3QgJiZcbiAgICAgIGFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnVybFxuICAgICAgPyBgLyR7YWN0aXZhdGVkUm91dGUuc25hcHNob3QudXJsLmpvaW4oJy8nKX1gXG4gICAgICA6IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGdldFN0ZXBVcmxGcm9tU3RlcFJvdXRlKHN0ZXBSb3V0ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0aW5nQ29uZmlnU2VydmljZS5nZXRSb3V0ZUNvbmZpZyhzdGVwUm91dGUpLnBhdGhzWzBdO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDaGVja291dFN0ZXBJbmRleChrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IG51bWJlciB8IG51bGwge1xuICAgIHJldHVybiBrZXkgJiYgdmFsdWVcbiAgICAgID8gdGhpcy5hbGxTdGVwcy5maW5kSW5kZXgoKHN0ZXA6IENoZWNrb3V0U3RlcCkgPT5cbiAgICAgICAgICBzdGVwW2tleV0uaW5jbHVkZXModmFsdWUpXG4gICAgICAgIClcbiAgICAgIDogbnVsbDtcbiAgfVxufVxuIl19