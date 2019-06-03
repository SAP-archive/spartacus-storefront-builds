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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLWJvdHRvbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL2NoZWNrb3V0LXByb2dyZXNzL2NoZWNrb3V0LXByb2dyZXNzLW1vYmlsZS1ib3R0b20vY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLWJvdHRvbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXZFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFPakUsTUFBTSxPQUFPLHFDQUFxQzs7Ozs7O0lBQ2hELFlBQ1ksTUFBc0IsRUFDdEIsY0FBOEIsRUFDOUIsb0JBQTBDO1FBRjFDLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ25ELENBQUM7Ozs7SUFPSixRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDeEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FDM0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ1gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFFN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7O3NCQUMzQixRQUFRLEdBQUcsSUFDZixJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUNsRSxFQUFFO2dCQUNGLElBQUksUUFBUSxLQUFLLElBQUksQ0FBQyxhQUFhLEVBQUU7b0JBQ25DLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO2lCQUM5QjtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7OztZQWhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9DQUFvQztnQkFDOUMsb1VBQStEO2FBQ2hFOzs7O1lBTlEsY0FBYztZQUhkLGNBQWM7WUFBRSxvQkFBb0I7Ozs7SUFpQjNDLHNEQUEyQjs7SUFDM0IsNkRBQThCOztJQUM5QixnRUFBd0I7O0lBQ3hCLDhEQUFzQjs7Ozs7SUFScEIsdURBQWdDOzs7OztJQUNoQywrREFBd0M7Ozs7O0lBQ3hDLHFFQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSwgUm91dGluZ0NvbmZpZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWcgfSBmcm9tICcuLi8uLi8uLi9jb25maWcvY2hlY2tvdXQtY29uZmlnJztcbmltcG9ydCB7IENoZWNrb3V0U3RlcCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NoZWNrb3V0LXN0ZXAubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jaGVja291dC1wcm9ncmVzcy1tb2JpbGUtYm90dG9tJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoZWNrb3V0LXByb2dyZXNzLW1vYmlsZS1ib3R0b20uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dFByb2dyZXNzTW9iaWxlQm90dG9tQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogQ2hlY2tvdXRDb25maWcsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ0NvbmZpZ1NlcnZpY2U6IFJvdXRpbmdDb25maWdTZXJ2aWNlXG4gICkge31cblxuICBzdGVwczogQXJyYXk8Q2hlY2tvdXRTdGVwPjtcbiAgcm91dGVyU3RhdGUkOiBPYnNlcnZhYmxlPGFueT47XG4gIGFjdGl2ZVN0ZXBJbmRleDogbnVtYmVyO1xuICBhY3RpdmVTdGVwVXJsOiBzdHJpbmc7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdGVwcyA9IHRoaXMuY29uZmlnLmNoZWNrb3V0LnN0ZXBzO1xuICAgIHRoaXMucm91dGVyU3RhdGUkID0gdGhpcy5yb3V0aW5nU2VydmljZS5nZXRSb3V0ZXJTdGF0ZSgpLnBpcGUoXG4gICAgICB0YXAocm91dGVyID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmVTdGVwVXJsID0gcm91dGVyLnN0YXRlLmNvbnRleHQuaWQ7XG5cbiAgICAgICAgdGhpcy5zdGVwcy5mb3JFYWNoKChzdGVwLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJvdXRlVXJsID0gYC8ke1xuICAgICAgICAgICAgdGhpcy5yb3V0aW5nQ29uZmlnU2VydmljZS5nZXRSb3V0ZUNvbmZpZyhzdGVwLnJvdXRlTmFtZSkucGF0aHNbMF1cbiAgICAgICAgICB9YDtcbiAgICAgICAgICBpZiAocm91dGVVcmwgPT09IHRoaXMuYWN0aXZlU3RlcFVybCkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVTdGVwSW5kZXggPSBpbmRleDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=