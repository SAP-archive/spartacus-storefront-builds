/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RoutingService, RoutingConfigService } from '@spartacus/core';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CheckoutConfig } from '../../config/checkout-config';
import { tap } from 'rxjs/operators';
var CheckoutProgressComponent = /** @class */ (function () {
    function CheckoutProgressComponent(config, routingService, routingConfigService) {
        this.config = config;
        this.routingService = routingService;
        this.routingConfigService = routingConfigService;
    }
    /**
     * @return {?}
     */
    CheckoutProgressComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.steps = this.config.checkout.steps;
        this.routerState$ = this.routingService.getRouterState().pipe(tap(function (router) {
            _this.activeStepUrl = router.state.context.id;
            _this.steps.forEach(function (step, index) {
                /** @type {?} */
                var routeUrl = "/" + _this.routingConfigService.getRouteConfig(step.routeName).paths[0];
                if (routeUrl === _this.activeStepUrl) {
                    _this.activeStepIndex = index;
                }
            });
        }));
    };
    CheckoutProgressComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-checkout-progress',
                    template: "<section *ngIf=\"(routerState$ | async) as routerState\">\n  <div class=\"cx-nav d-none d-lg-block d-xl-block\">\n    <ul class=\"cx-list\">\n      <li class=\"cx-item\" *ngFor=\"let step of steps; let i = index\">\n        <a\n          [routerLink]=\"{ cxRoute: step.routeName } | cxUrl\"\n          class=\"cx-link\"\n          [ngClass]=\"{\n            ' is-active': i === activeStepIndex,\n            ' is-disabled': i > activeStepIndex\n          }\"\n        >\n          {{ i + 1 }}. {{ step.name | cxTranslate }}\n        </a>\n      </li>\n    </ul>\n  </div>\n</section>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CheckoutProgressComponent.ctorParameters = function () { return [
        { type: CheckoutConfig },
        { type: RoutingService },
        { type: RoutingConfigService }
    ]; };
    return CheckoutProgressComponent;
}());
export { CheckoutProgressComponent };
if (false) {
    /** @type {?} */
    CheckoutProgressComponent.prototype.steps;
    /** @type {?} */
    CheckoutProgressComponent.prototype.routerState$;
    /** @type {?} */
    CheckoutProgressComponent.prototype.activeStepIndex;
    /** @type {?} */
    CheckoutProgressComponent.prototype.activeStepUrl;
    /**
     * @type {?}
     * @protected
     */
    CheckoutProgressComponent.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    CheckoutProgressComponent.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    CheckoutProgressComponent.prototype.routingConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9jaGVja291dC1wcm9ncmVzcy9jaGVja291dC1wcm9ncmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUc5RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckM7SUFNRSxtQ0FDWSxNQUFzQixFQUN0QixjQUE4QixFQUM5QixvQkFBMEM7UUFGMUMsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDbkQsQ0FBQzs7OztJQU9KLDRDQUFROzs7SUFBUjtRQUFBLGlCQWdCQztRQWZDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQzNELEdBQUcsQ0FBQyxVQUFBLE1BQU07WUFDUixLQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUU3QyxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBRSxLQUFLOztvQkFDdkIsUUFBUSxHQUFHLE1BQ2YsS0FBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDaEU7Z0JBQ0YsSUFBSSxRQUFRLEtBQUssS0FBSSxDQUFDLGFBQWEsRUFBRTtvQkFDbkMsS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7aUJBQzlCO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Z0JBakNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxxbEJBQWlEO29CQUNqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBVFEsY0FBYztnQkFGZCxjQUFjO2dCQUFFLG9CQUFvQjs7SUF5QzdDLGdDQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7U0E3QlkseUJBQXlCOzs7SUFPcEMsMENBQTJCOztJQUMzQixpREFBOEI7O0lBQzlCLG9EQUF3Qjs7SUFDeEIsa0RBQXNCOzs7OztJQVJwQiwyQ0FBZ0M7Ozs7O0lBQ2hDLG1EQUF3Qzs7Ozs7SUFDeEMseURBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UsIFJvdXRpbmdDb25maWdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvY2hlY2tvdXQtY29uZmlnJztcbmltcG9ydCB7IENoZWNrb3V0U3RlcCB9IGZyb20gJy4uLy4uL21vZGVsL2NoZWNrb3V0LXN0ZXAubW9kZWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jaGVja291dC1wcm9ncmVzcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGVja291dC1wcm9ncmVzcy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dFByb2dyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogQ2hlY2tvdXRDb25maWcsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ0NvbmZpZ1NlcnZpY2U6IFJvdXRpbmdDb25maWdTZXJ2aWNlXG4gICkge31cblxuICBzdGVwczogQXJyYXk8Q2hlY2tvdXRTdGVwPjtcbiAgcm91dGVyU3RhdGUkOiBPYnNlcnZhYmxlPGFueT47XG4gIGFjdGl2ZVN0ZXBJbmRleDogbnVtYmVyO1xuICBhY3RpdmVTdGVwVXJsOiBzdHJpbmc7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdGVwcyA9IHRoaXMuY29uZmlnLmNoZWNrb3V0LnN0ZXBzO1xuICAgIHRoaXMucm91dGVyU3RhdGUkID0gdGhpcy5yb3V0aW5nU2VydmljZS5nZXRSb3V0ZXJTdGF0ZSgpLnBpcGUoXG4gICAgICB0YXAocm91dGVyID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmVTdGVwVXJsID0gcm91dGVyLnN0YXRlLmNvbnRleHQuaWQ7XG5cbiAgICAgICAgdGhpcy5zdGVwcy5mb3JFYWNoKChzdGVwLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJvdXRlVXJsID0gYC8ke1xuICAgICAgICAgICAgdGhpcy5yb3V0aW5nQ29uZmlnU2VydmljZS5nZXRSb3V0ZUNvbmZpZyhzdGVwLnJvdXRlTmFtZSkucGF0aHNbMF1cbiAgICAgICAgICB9YDtcbiAgICAgICAgICBpZiAocm91dGVVcmwgPT09IHRoaXMuYWN0aXZlU3RlcFVybCkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVTdGVwSW5kZXggPSBpbmRleDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=