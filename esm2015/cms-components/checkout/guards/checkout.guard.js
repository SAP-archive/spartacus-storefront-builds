/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CartService, RoutingConfigService } from '@spartacus/core';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CheckoutConfig } from '../config/checkout-config';
import { CheckoutStepType } from '../model/checkout-step.model';
import { CheckoutConfigService } from '../services/checkout-config.service';
import { ExpressCheckoutService } from '../services/express-checkout.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../config/checkout-config";
import * as i3 from "@spartacus/core";
import * as i4 from "../services/checkout-config.service";
import * as i5 from "../services/express-checkout.service";
export class CheckoutGuard {
    /**
     * @param {?} router
     * @param {?} config
     * @param {?} routingConfigService
     * @param {?=} checkoutConfigService
     * @param {?=} expressCheckoutService
     * @param {?=} cartService
     */
    constructor(router, config, routingConfigService, checkoutConfigService, expressCheckoutService, cartService) {
        this.router = router;
        this.config = config;
        this.routingConfigService = routingConfigService;
        this.checkoutConfigService = checkoutConfigService;
        this.expressCheckoutService = expressCheckoutService;
        this.cartService = cartService;
        /**
         * TODO(issue:#4309) Deprecated since 1.2.0
         */
        if (this.checkoutConfigService) {
            this.firstStep$ = of(this.router.parseUrl(this.routingConfigService.getRouteConfig(this.checkoutConfigService.getFirstCheckoutStepRoute()).paths[0]));
        }
        else {
            this.firstStep$ = of(this.router.parseUrl(this.routingConfigService.getRouteConfig(this.config.checkout.steps[0].routeName).paths[0]));
        }
    }
    /**
     * @return {?}
     */
    canActivate() {
        /**
         * TODO(issue:#4309) Deprecated since 1.2.0
         */
        if (this.checkoutConfigService &&
            this.expressCheckoutService &&
            this.cartService) {
            if (this.checkoutConfigService.isExpressCheckout() &&
                !this.cartService.isGuestCart()) {
                return this.expressCheckoutService.trySetDefaultCheckoutDetails().pipe(switchMap((/**
                 * @param {?} expressCheckoutPossible
                 * @return {?}
                 */
                (expressCheckoutPossible) => {
                    return expressCheckoutPossible
                        ? of(this.router.parseUrl(this.routingConfigService.getRouteConfig(this.checkoutConfigService.getCheckoutStepRoute(CheckoutStepType.REVIEW_ORDER)).paths[0]))
                        : this.firstStep$;
                })));
            }
        }
        return this.firstStep$;
    }
}
CheckoutGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CheckoutGuard.ctorParameters = () => [
    { type: Router },
    { type: CheckoutConfig },
    { type: RoutingConfigService },
    { type: CheckoutConfigService },
    { type: ExpressCheckoutService },
    { type: CartService }
];
/** @nocollapse */ CheckoutGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CheckoutGuard_Factory() { return new CheckoutGuard(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.CheckoutConfig), i0.ɵɵinject(i3.RoutingConfigService), i0.ɵɵinject(i4.CheckoutConfigService), i0.ɵɵinject(i5.ExpressCheckoutService), i0.ɵɵinject(i3.CartService)); }, token: CheckoutGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    CheckoutGuard.prototype.firstStep$;
    /**
     * @type {?}
     * @private
     */
    CheckoutGuard.prototype.router;
    /**
     * @type {?}
     * @private
     */
    CheckoutGuard.prototype.config;
    /**
     * @type {?}
     * @private
     */
    CheckoutGuard.prototype.routingConfigService;
    /**
     * @type {?}
     * @protected
     */
    CheckoutGuard.prototype.checkoutConfigService;
    /**
     * @type {?}
     * @protected
     */
    CheckoutGuard.prototype.expressCheckoutService;
    /**
     * @type {?}
     * @protected
     */
    CheckoutGuard.prototype.cartService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9ndWFyZHMvY2hlY2tvdXQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFlLE1BQU0sRUFBVyxNQUFNLGlCQUFpQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRSxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7Ozs7QUFLOUUsTUFBTSxPQUFPLGFBQWE7Ozs7Ozs7OztJQTJCeEIsWUFDVSxNQUFjLEVBQ2QsTUFBc0IsRUFDdEIsb0JBQTBDLEVBQ3hDLHFCQUE2QyxFQUM3QyxzQkFBK0MsRUFDL0MsV0FBeUI7UUFMM0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDeEMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF3QjtRQUM3QywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXlCO1FBQy9DLGdCQUFXLEdBQVgsV0FBVyxDQUFjO1FBRW5DOztXQUVHO1FBQ0gsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUNsQixJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUN0QyxJQUFJLENBQUMscUJBQXFCLENBQUMseUJBQXlCLEVBQUUsQ0FDdkQsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ1gsQ0FDRixDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDbEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FDeEMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ1gsQ0FDRixDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNUOztXQUVHO1FBQ0gsSUFDRSxJQUFJLENBQUMscUJBQXFCO1lBQzFCLElBQUksQ0FBQyxzQkFBc0I7WUFDM0IsSUFBSSxDQUFDLFdBQVcsRUFDaEI7WUFDQSxJQUNFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUIsRUFBRTtnQkFDOUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxFQUMvQjtnQkFDQSxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDLElBQUksQ0FDcEUsU0FBUzs7OztnQkFBQyxDQUFDLHVCQUFnQyxFQUFFLEVBQUU7b0JBQzdDLE9BQU8sdUJBQXVCO3dCQUM1QixDQUFDLENBQUMsRUFBRSxDQUNBLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUNsQixJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUN0QyxJQUFJLENBQUMscUJBQXFCLENBQUMsb0JBQW9CLENBQzdDLGdCQUFnQixDQUFDLFlBQVksQ0FDOUIsQ0FDRixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDWCxDQUNGO3dCQUNILENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUN0QixDQUFDLEVBQUMsQ0FDSCxDQUFDO2FBQ0g7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7WUEzRkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBWHFCLE1BQU07WUFJbkIsY0FBYztZQUhELG9CQUFvQjtZQUtqQyxxQkFBcUI7WUFDckIsc0JBQXNCO1lBTnRCLFdBQVc7Ozs7Ozs7O0lBWWxCLG1DQUFpRDs7Ozs7SUEyQi9DLCtCQUFzQjs7Ozs7SUFDdEIsK0JBQThCOzs7OztJQUM5Qiw2Q0FBa0Q7Ozs7O0lBQ2xELDhDQUF1RDs7Ozs7SUFDdkQsK0NBQXlEOzs7OztJQUN6RCxvQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyLCBVcmxUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENhcnRTZXJ2aWNlLCBSb3V0aW5nQ29uZmlnU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWcgfSBmcm9tICcuLi9jb25maWcvY2hlY2tvdXQtY29uZmlnJztcbmltcG9ydCB7IENoZWNrb3V0U3RlcFR5cGUgfSBmcm9tICcuLi9tb2RlbC9jaGVja291dC1zdGVwLm1vZGVsJztcbmltcG9ydCB7IENoZWNrb3V0Q29uZmlnU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NoZWNrb3V0LWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IEV4cHJlc3NDaGVja291dFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9leHByZXNzLWNoZWNrb3V0LnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBmaXJzdFN0ZXAkOiBPYnNlcnZhYmxlPFVybFRyZWU+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHJvdXRlcjogUm91dGVyLFxuICAgIGNvbmZpZzogQ2hlY2tvdXRDb25maWcsXG4gICAgcm91dGluZ0NvbmZpZ1NlcnZpY2U6IFJvdXRpbmdDb25maWdTZXJ2aWNlLFxuICAgIGNoZWNrb3V0Q29uZmlnU2VydmljZTogQ2hlY2tvdXRDb25maWdTZXJ2aWNlLFxuICAgIGV4cHJlc3NDaGVja291dFNlcnZpY2U6IEV4cHJlc3NDaGVja291dFNlcnZpY2UsXG4gICAgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlXG4gICk7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuMlxuICAgKiAgVXNlIGNvbnN0cnVjdG9yKHJvdXRlcjogUm91dGVyLFxuICAgKiAgY29uZmlnOiBDaGVja291dENvbmZpZyAtIEBkZXByZWNhdGVkIHNpbmNlIDIueCxcbiAgICogIHJvdXRpbmdDb25maWdTZXJ2aWNlOiBSb3V0aW5nQ29uZmlnU2VydmljZSxcbiAgICogIGNoZWNrb3V0Q29uZmlnU2VydmljZTogQ2hlY2tvdXRDb25maWdTZXJ2aWNlLFxuICAgKiAgZXhwcmVzc0NoZWNrb3V0U2VydmljZTogRXhwcmVzc0NoZWNrb3V0U2VydmljZVxuICAgKiAgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlKSBpbnN0ZWFkXG4gICAqXG4gICAqICBUT0RPKGlzc3VlOiM0MzA5KSBEZXByZWNhdGVkIHNpbmNlIDEuMi4wXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICByb3V0ZXI6IFJvdXRlcixcbiAgICBjb25maWc6IENoZWNrb3V0Q29uZmlnLFxuICAgIHJvdXRpbmdDb25maWdTZXJ2aWNlOiBSb3V0aW5nQ29uZmlnU2VydmljZVxuICApO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgY29uZmlnOiBDaGVja291dENvbmZpZyxcbiAgICBwcml2YXRlIHJvdXRpbmdDb25maWdTZXJ2aWNlOiBSb3V0aW5nQ29uZmlnU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRDb25maWdTZXJ2aWNlPzogQ2hlY2tvdXRDb25maWdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBleHByZXNzQ2hlY2tvdXRTZXJ2aWNlPzogRXhwcmVzc0NoZWNrb3V0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2FydFNlcnZpY2U/OiBDYXJ0U2VydmljZVxuICApIHtcbiAgICAvKipcbiAgICAgKiBUT0RPKGlzc3VlOiM0MzA5KSBEZXByZWNhdGVkIHNpbmNlIDEuMi4wXG4gICAgICovXG4gICAgaWYgKHRoaXMuY2hlY2tvdXRDb25maWdTZXJ2aWNlKSB7XG4gICAgICB0aGlzLmZpcnN0U3RlcCQgPSBvZihcbiAgICAgICAgdGhpcy5yb3V0ZXIucGFyc2VVcmwoXG4gICAgICAgICAgdGhpcy5yb3V0aW5nQ29uZmlnU2VydmljZS5nZXRSb3V0ZUNvbmZpZyhcbiAgICAgICAgICAgIHRoaXMuY2hlY2tvdXRDb25maWdTZXJ2aWNlLmdldEZpcnN0Q2hlY2tvdXRTdGVwUm91dGUoKVxuICAgICAgICAgICkucGF0aHNbMF1cbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maXJzdFN0ZXAkID0gb2YoXG4gICAgICAgIHRoaXMucm91dGVyLnBhcnNlVXJsKFxuICAgICAgICAgIHRoaXMucm91dGluZ0NvbmZpZ1NlcnZpY2UuZ2V0Um91dGVDb25maWcoXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5jaGVja291dC5zdGVwc1swXS5yb3V0ZU5hbWVcbiAgICAgICAgICApLnBhdGhzWzBdXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIC8qKlxuICAgICAqIFRPRE8oaXNzdWU6IzQzMDkpIERlcHJlY2F0ZWQgc2luY2UgMS4yLjBcbiAgICAgKi9cbiAgICBpZiAoXG4gICAgICB0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZSAmJlxuICAgICAgdGhpcy5leHByZXNzQ2hlY2tvdXRTZXJ2aWNlICYmXG4gICAgICB0aGlzLmNhcnRTZXJ2aWNlXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuY2hlY2tvdXRDb25maWdTZXJ2aWNlLmlzRXhwcmVzc0NoZWNrb3V0KCkgJiZcbiAgICAgICAgIXRoaXMuY2FydFNlcnZpY2UuaXNHdWVzdENhcnQoKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV4cHJlc3NDaGVja291dFNlcnZpY2UudHJ5U2V0RGVmYXVsdENoZWNrb3V0RGV0YWlscygpLnBpcGUoXG4gICAgICAgICAgc3dpdGNoTWFwKChleHByZXNzQ2hlY2tvdXRQb3NzaWJsZTogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGV4cHJlc3NDaGVja291dFBvc3NpYmxlXG4gICAgICAgICAgICAgID8gb2YoXG4gICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5wYXJzZVVybChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nQ29uZmlnU2VydmljZS5nZXRSb3V0ZUNvbmZpZyhcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZS5nZXRDaGVja291dFN0ZXBSb3V0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIENoZWNrb3V0U3RlcFR5cGUuUkVWSUVXX09SREVSXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApLnBhdGhzWzBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IHRoaXMuZmlyc3RTdGVwJDtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5maXJzdFN0ZXAkO1xuICB9XG59XG4iXX0=