/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RoutingService, RoutingConfigService } from '@spartacus/core';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CheckoutConfig } from '../../config/checkout-config';
import { tap } from 'rxjs/operators';
export class CheckoutProgressComponent {
    /**
     * @param {?} config
     * @param {?} routingService
     * @param {?} routingConfigService
     */
    constructor(config, routingService, routingConfigService) {
        this.config = config;
        this.routingService = routingService;
        this.routingConfigService = routingConfigService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.steps = this.config.checkout.steps;
        this.routerState$ = this.routingService.getRouterState().pipe(tap((/**
         * @param {?} router
         * @return {?}
         */
        router => {
            this.activeStepUrl = router.state.context.id;
            this.steps.forEach((/**
             * @param {?} step
             * @param {?} index
             * @return {?}
             */
            (step, index) => {
                /** @type {?} */
                const routeUrl = `/${this.routingConfigService.getRouteConfig(step.routeName).paths[0]}`;
                if (routeUrl === this.activeStepUrl) {
                    this.activeStepIndex = index;
                }
            }));
        })));
    }
}
CheckoutProgressComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-checkout-progress',
                template: "<section *ngIf=\"(routerState$ | async) as routerState\">\n  <div class=\"cx-nav d-none d-lg-block d-xl-block\">\n    <ul class=\"cx-list\">\n      <li class=\"cx-item\" *ngFor=\"let step of steps; let i = index\">\n        <a\n          [routerLink]=\"{ cxRoute: step.routeName } | cxUrl\"\n          class=\"cx-link\"\n          [ngClass]=\"{\n            ' is-active': i === activeStepIndex,\n            ' is-disabled': i > activeStepIndex\n          }\"\n        >\n          {{ i + 1 }}. {{ step.name | cxTranslate }}\n        </a>\n      </li>\n    </ul>\n  </div>\n</section>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CheckoutProgressComponent.ctorParameters = () => [
    { type: CheckoutConfig },
    { type: RoutingService },
    { type: RoutingConfigService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9jaGVja291dC1wcm9ncmVzcy9jaGVja291dC1wcm9ncmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUc5RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPckMsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7O0lBQ3BDLFlBQ1ksTUFBc0IsRUFDdEIsY0FBOEIsRUFDOUIsb0JBQTBDO1FBRjFDLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ25ELENBQUM7Ozs7SUFPSixRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDeEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FDM0QsR0FBRzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ1gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFFN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7OztZQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFOztzQkFDM0IsUUFBUSxHQUFHLElBQ2YsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDbEUsRUFBRTtnQkFDRixJQUFJLFFBQVEsS0FBSyxJQUFJLENBQUMsYUFBYSxFQUFFO29CQUNuQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztpQkFDOUI7WUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7WUFqQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLHFsQkFBaUQ7Z0JBQ2pELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBVFEsY0FBYztZQUZkLGNBQWM7WUFBRSxvQkFBb0I7Ozs7SUFtQjNDLDBDQUEyQjs7SUFDM0IsaURBQThCOztJQUM5QixvREFBd0I7O0lBQ3hCLGtEQUFzQjs7Ozs7SUFScEIsMkNBQWdDOzs7OztJQUNoQyxtREFBd0M7Ozs7O0lBQ3hDLHlEQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlLCBSb3V0aW5nQ29uZmlnU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoZWNrb3V0Q29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2NoZWNrb3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBDaGVja291dFN0ZXAgfSBmcm9tICcuLi8uLi9tb2RlbC9jaGVja291dC1zdGVwLm1vZGVsJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2hlY2tvdXQtcHJvZ3Jlc3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tvdXQtcHJvZ3Jlc3MuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRQcm9ncmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjb25maWc6IENoZWNrb3V0Q29uZmlnLFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdDb25maWdTZXJ2aWNlOiBSb3V0aW5nQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgc3RlcHM6IEFycmF5PENoZWNrb3V0U3RlcD47XG4gIHJvdXRlclN0YXRlJDogT2JzZXJ2YWJsZTxhbnk+O1xuICBhY3RpdmVTdGVwSW5kZXg6IG51bWJlcjtcbiAgYWN0aXZlU3RlcFVybDogc3RyaW5nO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3RlcHMgPSB0aGlzLmNvbmZpZy5jaGVja291dC5zdGVwcztcbiAgICB0aGlzLnJvdXRlclN0YXRlJCA9IHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0Um91dGVyU3RhdGUoKS5waXBlKFxuICAgICAgdGFwKHJvdXRlciA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlU3RlcFVybCA9IHJvdXRlci5zdGF0ZS5jb250ZXh0LmlkO1xuXG4gICAgICAgIHRoaXMuc3RlcHMuZm9yRWFjaCgoc3RlcCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCByb3V0ZVVybCA9IGAvJHtcbiAgICAgICAgICAgIHRoaXMucm91dGluZ0NvbmZpZ1NlcnZpY2UuZ2V0Um91dGVDb25maWcoc3RlcC5yb3V0ZU5hbWUpLnBhdGhzWzBdXG4gICAgICAgICAgfWA7XG4gICAgICAgICAgaWYgKHJvdXRlVXJsID09PSB0aGlzLmFjdGl2ZVN0ZXBVcmwpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlU3RlcEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19