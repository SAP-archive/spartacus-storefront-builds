/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { RoutingService, CartService, RoutingConfigService, } from '@spartacus/core';
import { CheckoutConfig } from '../../../config/checkout-config';
export class CheckoutProgressMobileTopComponent {
    /**
     * @param {?} config
     * @param {?} routingService
     * @param {?} cartService
     * @param {?} routingConfigService
     */
    constructor(config, routingService, cartService, routingConfigService) {
        this.config = config;
        this.routingService = routingService;
        this.cartService = cartService;
        this.routingConfigService = routingConfigService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.steps = this.config.checkout.steps;
        this.cart$ = this.cartService.getActive();
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
CheckoutProgressMobileTopComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-checkout-progress-mobile-top',
                template: "<div *ngIf=\"(routerState$ | async) as routerState\">\n  <div *ngIf=\"(cart$ | async) as cart\">\n    <div class=\"cx-media\">\n      <div class=\"cx-list-media\" *ngIf=\"cart?.totalItems && cart?.subTotal\">\n        {{ 'cartItems.cartTotal' | cxTranslate: { count: cart.totalItems } }}:\n        {{ cart.subTotal.formattedValue }}\n      </div>\n      <div *ngFor=\"let step of steps; let i = index\">\n        <div class=\"cx-list-media\" *ngIf=\"i < activeStepIndex\">\n          <div>{{ i + 1 }}. {{ step.name | cxTranslate }}</div>\n          <button\n            class=\"btn btn-link\"\n            [routerLink]=\"{ cxRoute: step.routeName } | cxUrl\"\n          >\n            {{ 'common.edit' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"cx-list-media is-active\" *ngIf=\"i === activeStepIndex\">\n          <div>{{ i + 1 }}. {{ step.name | cxTranslate }}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
CheckoutProgressMobileTopComponent.ctorParameters = () => [
    { type: CheckoutConfig },
    { type: RoutingService },
    { type: CartService },
    { type: RoutingConfigService }
];
if (false) {
    /** @type {?} */
    CheckoutProgressMobileTopComponent.prototype.steps;
    /** @type {?} */
    CheckoutProgressMobileTopComponent.prototype.routerState$;
    /** @type {?} */
    CheckoutProgressMobileTopComponent.prototype.cart$;
    /** @type {?} */
    CheckoutProgressMobileTopComponent.prototype.activeStepIndex;
    /** @type {?} */
    CheckoutProgressMobileTopComponent.prototype.activeStepUrl;
    /**
     * @type {?}
     * @protected
     */
    CheckoutProgressMobileTopComponent.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    CheckoutProgressMobileTopComponent.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    CheckoutProgressMobileTopComponent.prototype.cartService;
    /**
     * @type {?}
     * @protected
     */
    CheckoutProgressMobileTopComponent.prototype.routingConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLXRvcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvY29tcG9uZW50cy9jaGVja291dC1wcm9ncmVzcy9jaGVja291dC1wcm9ncmVzcy1tb2JpbGUtdG9wL2NoZWNrb3V0LXByb2dyZXNzLW1vYmlsZS10b3AuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQ0wsY0FBYyxFQUNkLFdBQVcsRUFFWCxvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFPakUsTUFBTSxPQUFPLGtDQUFrQzs7Ozs7OztJQUM3QyxZQUNZLE1BQXNCLEVBQ3RCLGNBQThCLEVBQzlCLFdBQXdCLEVBQ3hCLG9CQUEwQztRQUgxQyxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUNuRCxDQUFDOzs7O0lBUUosUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUMzRCxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDWCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUU3QyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTs7c0JBQzNCLFFBQVEsR0FBRyxJQUNmLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQ2xFLEVBQUU7Z0JBQ0YsSUFBSSxRQUFRLEtBQUssSUFBSSxDQUFDLGFBQWEsRUFBRTtvQkFDbkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7aUJBQzlCO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7O1lBbkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUNBQWlDO2dCQUMzQywrOEJBQTREO2FBQzdEOzs7O1lBTlEsY0FBYztZQUxyQixjQUFjO1lBQ2QsV0FBVztZQUVYLG9CQUFvQjs7OztJQWlCcEIsbURBQTJCOztJQUMzQiwwREFBOEI7O0lBQzlCLG1EQUF3Qjs7SUFDeEIsNkRBQXdCOztJQUN4QiwyREFBc0I7Ozs7O0lBVnBCLG9EQUFnQzs7Ozs7SUFDaEMsNERBQXdDOzs7OztJQUN4Qyx5REFBa0M7Ozs7O0lBQ2xDLGtFQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBDYXJ0U2VydmljZSxcbiAgQ2FydCxcbiAgUm91dGluZ0NvbmZpZ1NlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDaGVja291dENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9jaGVja291dC1jb25maWcnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdGVwIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2hlY2tvdXQtc3RlcC5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNoZWNrb3V0LXByb2dyZXNzLW1vYmlsZS10b3AnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLXRvcC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0UHJvZ3Jlc3NNb2JpbGVUb3BDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBDaGVja291dENvbmZpZyxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdDb25maWdTZXJ2aWNlOiBSb3V0aW5nQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgc3RlcHM6IEFycmF5PENoZWNrb3V0U3RlcD47XG4gIHJvdXRlclN0YXRlJDogT2JzZXJ2YWJsZTxhbnk+O1xuICBjYXJ0JDogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgYWN0aXZlU3RlcEluZGV4OiBudW1iZXI7XG4gIGFjdGl2ZVN0ZXBVcmw6IHN0cmluZztcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0ZXBzID0gdGhpcy5jb25maWcuY2hlY2tvdXQuc3RlcHM7XG4gICAgdGhpcy5jYXJ0JCA9IHRoaXMuY2FydFNlcnZpY2UuZ2V0QWN0aXZlKCk7XG4gICAgdGhpcy5yb3V0ZXJTdGF0ZSQgPSB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICAgIHRhcChyb3V0ZXIgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2ZVN0ZXBVcmwgPSByb3V0ZXIuc3RhdGUuY29udGV4dC5pZDtcblxuICAgICAgICB0aGlzLnN0ZXBzLmZvckVhY2goKHN0ZXAsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3Qgcm91dGVVcmwgPSBgLyR7XG4gICAgICAgICAgICB0aGlzLnJvdXRpbmdDb25maWdTZXJ2aWNlLmdldFJvdXRlQ29uZmlnKHN0ZXAucm91dGVOYW1lKS5wYXRoc1swXVxuICAgICAgICAgIH1gO1xuICAgICAgICAgIGlmIChyb3V0ZVVybCA9PT0gdGhpcy5hY3RpdmVTdGVwVXJsKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVN0ZXBJbmRleCA9IGluZGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==