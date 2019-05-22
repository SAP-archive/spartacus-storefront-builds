/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { RoutingService, RoutingConfigService } from '@spartacus/core';
import { tap } from 'rxjs/operators';
import { CheckoutConfig } from '../../../config/checkout-config';
export class CheckoutProgressMobileBottomComponent {
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
        this.routerState$ = this.routingService.getRouterState().pipe(tap(router => {
            this.activeStepUrl = router.state.context.id;
            this.steps.forEach((step, index) => {
                /** @type {?} */
                const routeUrl = `/${this.routingConfigService.getRouteConfig(step.routeName).paths[0]}`;
                if (routeUrl === this.activeStepUrl) {
                    this.activeStepIndex = index;
                }
            });
        }));
    }
}
CheckoutProgressMobileBottomComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-checkout-progress-mobile-bottom',
                template: "<div *ngIf=\"(routerState$ | async) as routerState\">\n  <div class=\"cx-media\">\n    <div *ngFor=\"let step of steps; let i = index\">\n      <div class=\"cx-list-media\" *ngIf=\"i > activeStepIndex\">\n        <div>{{ i + 1 }}. {{ step.name | cxTranslate }}</div>\n      </div>\n    </div>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
CheckoutProgressMobileBottomComponent.ctorParameters = () => [
    { type: CheckoutConfig },
    { type: RoutingService },
    { type: RoutingConfigService }
];
if (false) {
    /** @type {?} */
    CheckoutProgressMobileBottomComponent.prototype.steps;
    /** @type {?} */
    CheckoutProgressMobileBottomComponent.prototype.routerState$;
    /** @type {?} */
    CheckoutProgressMobileBottomComponent.prototype.activeStepIndex;
    /** @type {?} */
    CheckoutProgressMobileBottomComponent.prototype.activeStepUrl;
    /**
     * @type {?}
     * @protected
     */
    CheckoutProgressMobileBottomComponent.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    CheckoutProgressMobileBottomComponent.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    CheckoutProgressMobileBottomComponent.prototype.routingConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLWJvdHRvbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvY29tcG9uZW50cy9jaGVja291dC1wcm9ncmVzcy9jaGVja291dC1wcm9ncmVzcy1tb2JpbGUtYm90dG9tL2NoZWNrb3V0LXByb2dyZXNzLW1vYmlsZS1ib3R0b20uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV2RSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBT2pFLE1BQU0sT0FBTyxxQ0FBcUM7Ozs7OztJQUNoRCxZQUNZLE1BQXNCLEVBQ3RCLGNBQThCLEVBQzlCLG9CQUEwQztRQUYxQyxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUNuRCxDQUFDOzs7O0lBT0osUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQzNELEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNYLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBRTdDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFOztzQkFDM0IsUUFBUSxHQUFHLElBQ2YsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDbEUsRUFBRTtnQkFDRixJQUFJLFFBQVEsS0FBSyxJQUFJLENBQUMsYUFBYSxFQUFFO29CQUNuQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztpQkFDOUI7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7WUFoQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQ0FBb0M7Z0JBQzlDLG9VQUErRDthQUNoRTs7OztZQU5RLGNBQWM7WUFIZCxjQUFjO1lBQUUsb0JBQW9COzs7O0lBaUIzQyxzREFBMkI7O0lBQzNCLDZEQUE4Qjs7SUFDOUIsZ0VBQXdCOztJQUN4Qiw4REFBc0I7Ozs7O0lBUnBCLHVEQUFnQzs7Ozs7SUFDaEMsK0RBQXdDOzs7OztJQUN4QyxxRUFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UsIFJvdXRpbmdDb25maWdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENoZWNrb3V0Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2NoZWNrb3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBDaGVja291dFN0ZXAgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jaGVja291dC1zdGVwLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLWJvdHRvbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGVja291dC1wcm9ncmVzcy1tb2JpbGUtYm90dG9tLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRQcm9ncmVzc01vYmlsZUJvdHRvbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjb25maWc6IENoZWNrb3V0Q29uZmlnLFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdDb25maWdTZXJ2aWNlOiBSb3V0aW5nQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgc3RlcHM6IEFycmF5PENoZWNrb3V0U3RlcD47XG4gIHJvdXRlclN0YXRlJDogT2JzZXJ2YWJsZTxhbnk+O1xuICBhY3RpdmVTdGVwSW5kZXg6IG51bWJlcjtcbiAgYWN0aXZlU3RlcFVybDogc3RyaW5nO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3RlcHMgPSB0aGlzLmNvbmZpZy5jaGVja291dC5zdGVwcztcbiAgICB0aGlzLnJvdXRlclN0YXRlJCA9IHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0Um91dGVyU3RhdGUoKS5waXBlKFxuICAgICAgdGFwKHJvdXRlciA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlU3RlcFVybCA9IHJvdXRlci5zdGF0ZS5jb250ZXh0LmlkO1xuXG4gICAgICAgIHRoaXMuc3RlcHMuZm9yRWFjaCgoc3RlcCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCByb3V0ZVVybCA9IGAvJHtcbiAgICAgICAgICAgIHRoaXMucm91dGluZ0NvbmZpZ1NlcnZpY2UuZ2V0Um91dGVDb25maWcoc3RlcC5yb3V0ZU5hbWUpLnBhdGhzWzBdXG4gICAgICAgICAgfWA7XG4gICAgICAgICAgaWYgKHJvdXRlVXJsID09PSB0aGlzLmFjdGl2ZVN0ZXBVcmwpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlU3RlcEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19