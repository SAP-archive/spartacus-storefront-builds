/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { RoutingService, CartService, RoutingConfigService, } from '@spartacus/core';
import { CheckoutConfig } from '../../../config/checkout-config';
var CheckoutProgressMobileTopComponent = /** @class */ (function () {
    function CheckoutProgressMobileTopComponent(config, routingService, cartService, routingConfigService) {
        this.config = config;
        this.routingService = routingService;
        this.cartService = cartService;
        this.routingConfigService = routingConfigService;
    }
    /**
     * @return {?}
     */
    CheckoutProgressMobileTopComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.steps = this.config.checkout.steps;
        this.cart$ = this.cartService.getActive();
        this.routerState$ = this.routingService.getRouterState().pipe(tap((/**
         * @param {?} router
         * @return {?}
         */
        function (router) {
            _this.activeStepUrl = router.state.context.id;
            _this.steps.forEach((/**
             * @param {?} step
             * @param {?} index
             * @return {?}
             */
            function (step, index) {
                /** @type {?} */
                var routeUrl = "/" + _this.routingConfigService.getRouteConfig(step.routeName).paths[0];
                if (routeUrl === _this.activeStepUrl) {
                    _this.activeStepIndex = index;
                }
            }));
        })));
    };
    CheckoutProgressMobileTopComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-checkout-progress-mobile-top',
                    template: "<div *ngIf=\"(routerState$ | async) as routerState\">\n  <div *ngIf=\"(cart$ | async) as cart\">\n    <div class=\"cx-media\">\n      <div class=\"cx-list-media\" *ngIf=\"cart?.totalItems && cart?.subTotal\">\n        {{ 'cartItems.cartTotal' | cxTranslate: { count: cart.totalItems } }}:\n        {{ cart.subTotal.formattedValue }}\n      </div>\n      <div *ngFor=\"let step of steps; let i = index\">\n        <div class=\"cx-list-media\" *ngIf=\"i < activeStepIndex\">\n          <div>{{ i + 1 }}. {{ step.name | cxTranslate }}</div>\n          <button\n            class=\"btn btn-link\"\n            [routerLink]=\"{ cxRoute: step.routeName } | cxUrl\"\n          >\n            {{ 'common.edit' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"cx-list-media is-active\" *ngIf=\"i === activeStepIndex\">\n          <div>{{ i + 1 }}. {{ step.name | cxTranslate }}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    CheckoutProgressMobileTopComponent.ctorParameters = function () { return [
        { type: CheckoutConfig },
        { type: RoutingService },
        { type: CartService },
        { type: RoutingConfigService }
    ]; };
    return CheckoutProgressMobileTopComponent;
}());
export { CheckoutProgressMobileTopComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLXRvcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL2NoZWNrb3V0LXByb2dyZXNzL2NoZWNrb3V0LXByb2dyZXNzLW1vYmlsZS10b3AvY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLXRvcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFDTCxjQUFjLEVBQ2QsV0FBVyxFQUVYLG9CQUFvQixHQUNyQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUdqRTtJQUtFLDRDQUNZLE1BQXNCLEVBQ3RCLGNBQThCLEVBQzlCLFdBQXdCLEVBQ3hCLG9CQUEwQztRQUgxQyxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUNuRCxDQUFDOzs7O0lBUUoscURBQVE7OztJQUFSO1FBQUEsaUJBaUJDO1FBaEJDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUMzRCxHQUFHOzs7O1FBQUMsVUFBQSxNQUFNO1lBQ1IsS0FBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFFN0MsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7OztZQUFDLFVBQUMsSUFBSSxFQUFFLEtBQUs7O29CQUN2QixRQUFRLEdBQUcsTUFDZixLQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUNoRTtnQkFDRixJQUFJLFFBQVEsS0FBSyxLQUFJLENBQUMsYUFBYSxFQUFFO29CQUNuQyxLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztpQkFDOUI7WUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOztnQkFuQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQ0FBaUM7b0JBQzNDLCs4QkFBNEQ7aUJBQzdEOzs7O2dCQU5RLGNBQWM7Z0JBTHJCLGNBQWM7Z0JBQ2QsV0FBVztnQkFFWCxvQkFBb0I7O0lBeUN0Qix5Q0FBQztDQUFBLEFBcENELElBb0NDO1NBaENZLGtDQUFrQzs7O0lBUTdDLG1EQUEyQjs7SUFDM0IsMERBQThCOztJQUM5QixtREFBd0I7O0lBQ3hCLDZEQUF3Qjs7SUFDeEIsMkRBQXNCOzs7OztJQVZwQixvREFBZ0M7Ozs7O0lBQ2hDLDREQUF3Qzs7Ozs7SUFDeEMseURBQWtDOzs7OztJQUNsQyxrRUFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBSb3V0aW5nU2VydmljZSxcbiAgQ2FydFNlcnZpY2UsXG4gIENhcnQsXG4gIFJvdXRpbmdDb25maWdTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWcgfSBmcm9tICcuLi8uLi8uLi9jb25maWcvY2hlY2tvdXQtY29uZmlnJztcbmltcG9ydCB7IENoZWNrb3V0U3RlcCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NoZWNrb3V0LXN0ZXAubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jaGVja291dC1wcm9ncmVzcy1tb2JpbGUtdG9wJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoZWNrb3V0LXByb2dyZXNzLW1vYmlsZS10b3AuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dFByb2dyZXNzTW9iaWxlVG9wQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogQ2hlY2tvdXRDb25maWcsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nQ29uZmlnU2VydmljZTogUm91dGluZ0NvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIHN0ZXBzOiBBcnJheTxDaGVja291dFN0ZXA+O1xuICByb3V0ZXJTdGF0ZSQ6IE9ic2VydmFibGU8YW55PjtcbiAgY2FydCQ6IE9ic2VydmFibGU8Q2FydD47XG4gIGFjdGl2ZVN0ZXBJbmRleDogbnVtYmVyO1xuICBhY3RpdmVTdGVwVXJsOiBzdHJpbmc7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdGVwcyA9IHRoaXMuY29uZmlnLmNoZWNrb3V0LnN0ZXBzO1xuICAgIHRoaXMuY2FydCQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpO1xuICAgIHRoaXMucm91dGVyU3RhdGUkID0gdGhpcy5yb3V0aW5nU2VydmljZS5nZXRSb3V0ZXJTdGF0ZSgpLnBpcGUoXG4gICAgICB0YXAocm91dGVyID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmVTdGVwVXJsID0gcm91dGVyLnN0YXRlLmNvbnRleHQuaWQ7XG5cbiAgICAgICAgdGhpcy5zdGVwcy5mb3JFYWNoKChzdGVwLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJvdXRlVXJsID0gYC8ke1xuICAgICAgICAgICAgdGhpcy5yb3V0aW5nQ29uZmlnU2VydmljZS5nZXRSb3V0ZUNvbmZpZyhzdGVwLnJvdXRlTmFtZSkucGF0aHNbMF1cbiAgICAgICAgICB9YDtcbiAgICAgICAgICBpZiAocm91dGVVcmwgPT09IHRoaXMuYWN0aXZlU3RlcFVybCkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVTdGVwSW5kZXggPSBpbmRleDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=