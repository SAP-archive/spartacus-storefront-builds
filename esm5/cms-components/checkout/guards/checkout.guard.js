/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { RoutingConfigService } from '@spartacus/core';
import { ExpressCheckoutService } from '../services/express-checkout.service';
import { CheckoutConfigService } from '../services/checkout-config.service';
import { CheckoutStepType } from '../model/checkout-step.model';
import { CheckoutConfig } from '../config/checkout-config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../config/checkout-config";
import * as i3 from "@spartacus/core";
import * as i4 from "../services/checkout-config.service";
import * as i5 from "../services/express-checkout.service";
var CheckoutGuard = /** @class */ (function () {
    function CheckoutGuard(router, config, routingConfigService, checkoutConfigService, expressCheckoutService) {
        this.router = router;
        this.config = config;
        this.routingConfigService = routingConfigService;
        this.checkoutConfigService = checkoutConfigService;
        this.expressCheckoutService = expressCheckoutService;
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
    CheckoutGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /**
         * TODO(issue:#4309) Deprecated since 1.2.0
         */
        if (this.checkoutConfigService && this.expressCheckoutService) {
            if (this.checkoutConfigService.isExpressCheckout()) {
                return this.expressCheckoutService.trySetDefaultCheckoutDetails().pipe(switchMap((/**
                 * @param {?} expressCheckoutPossible
                 * @return {?}
                 */
                function (expressCheckoutPossible) {
                    return expressCheckoutPossible
                        ? of(_this.router.parseUrl(_this.routingConfigService.getRouteConfig(_this.checkoutConfigService.getCheckoutStepRoute(CheckoutStepType.REVIEW_ORDER)).paths[0]))
                        : _this.firstStep$;
                })));
            }
        }
        return this.firstStep$;
    };
    CheckoutGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CheckoutGuard.ctorParameters = function () { return [
        { type: Router },
        { type: CheckoutConfig },
        { type: RoutingConfigService },
        { type: CheckoutConfigService },
        { type: ExpressCheckoutService }
    ]; };
    /** @nocollapse */ CheckoutGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CheckoutGuard_Factory() { return new CheckoutGuard(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.CheckoutConfig), i0.ɵɵinject(i3.RoutingConfigService), i0.ɵɵinject(i4.CheckoutConfigService), i0.ɵɵinject(i5.ExpressCheckoutService)); }, token: CheckoutGuard, providedIn: "root" });
    return CheckoutGuard;
}());
export { CheckoutGuard };
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9ndWFyZHMvY2hlY2tvdXQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFlLE1BQU0sRUFBVyxNQUFNLGlCQUFpQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXRDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7OztBQUUzRDtJQTRCRSx1QkFDVSxNQUFjLEVBQ2QsTUFBc0IsRUFDdEIsb0JBQTBDLEVBQ3hDLHFCQUE2QyxFQUM3QyxzQkFBK0M7UUFKakQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDeEMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF3QjtRQUM3QywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXlCO1FBRXpEOztXQUVHO1FBQ0gsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUNsQixJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUN0QyxJQUFJLENBQUMscUJBQXFCLENBQUMseUJBQXlCLEVBQUUsQ0FDdkQsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ1gsQ0FDRixDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDbEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FDeEMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ1gsQ0FDRixDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7O0lBRUQsbUNBQVc7OztJQUFYO1FBQUEsaUJBd0JDO1FBdkJDOztXQUVHO1FBQ0gsSUFBSSxJQUFJLENBQUMscUJBQXFCLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQzdELElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixFQUFFLEVBQUU7Z0JBQ2xELE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLDRCQUE0QixFQUFFLENBQUMsSUFBSSxDQUNwRSxTQUFTOzs7O2dCQUFDLFVBQUMsdUJBQWdDO29CQUN6QyxPQUFPLHVCQUF1Qjt3QkFDNUIsQ0FBQyxDQUFDLEVBQUUsQ0FDQSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDbEIsS0FBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FDdEMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLG9CQUFvQixDQUM3QyxnQkFBZ0IsQ0FBQyxZQUFZLENBQzlCLENBQ0YsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ1gsQ0FDRjt3QkFDSCxDQUFDLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQztnQkFDdEIsQ0FBQyxFQUFDLENBQ0gsQ0FBQzthQUNIO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7Z0JBakZGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBWnFCLE1BQU07Z0JBUW5CLGNBQWM7Z0JBSmQsb0JBQW9CO2dCQUVwQixxQkFBcUI7Z0JBRHJCLHNCQUFzQjs7O3dCQU4vQjtDQTZGQyxBQWxGRCxJQWtGQztTQS9FWSxhQUFhOzs7Ozs7SUFDeEIsbUNBQWlEOzs7OztJQXlCL0MsK0JBQXNCOzs7OztJQUN0QiwrQkFBOEI7Ozs7O0lBQzlCLDZDQUFrRDs7Ozs7SUFDbEQsOENBQXVEOzs7OztJQUN2RCwrQ0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyLCBVcmxUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFJvdXRpbmdDb25maWdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEV4cHJlc3NDaGVja291dFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9leHByZXNzLWNoZWNrb3V0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdGVwVHlwZSB9IGZyb20gJy4uL21vZGVsL2NoZWNrb3V0LXN0ZXAubW9kZWwnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWcgfSBmcm9tICcuLi9jb25maWcvY2hlY2tvdXQtY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0R3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgZmlyc3RTdGVwJDogT2JzZXJ2YWJsZTxVcmxUcmVlPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICByb3V0ZXI6IFJvdXRlcixcbiAgICBjb25maWc6IENoZWNrb3V0Q29uZmlnLFxuICAgIHJvdXRpbmdDb25maWdTZXJ2aWNlOiBSb3V0aW5nQ29uZmlnU2VydmljZSxcbiAgICBjaGVja291dENvbmZpZ1NlcnZpY2U6IENoZWNrb3V0Q29uZmlnU2VydmljZSxcbiAgICBleHByZXNzQ2hlY2tvdXRTZXJ2aWNlOiBFeHByZXNzQ2hlY2tvdXRTZXJ2aWNlXG4gICk7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuMlxuICAgKiAgVXNlIGNvbnN0cnVjdG9yKHJvdXRlcjogUm91dGVyLFxuICAgKiAgY29uZmlnOiBDaGVja291dENvbmZpZyAtIEBkZXByZWNhdGVkIHNpbmNlIDIueCxcbiAgICogIHJvdXRpbmdDb25maWdTZXJ2aWNlOiBSb3V0aW5nQ29uZmlnU2VydmljZSxcbiAgICogIGNoZWNrb3V0Q29uZmlnU2VydmljZTogQ2hlY2tvdXRDb25maWdTZXJ2aWNlLFxuICAgKiAgZXhwcmVzc0NoZWNrb3V0U2VydmljZTogRXhwcmVzc0NoZWNrb3V0U2VydmljZSkgaW5zdGVhZFxuICAgKlxuICAgKiAgVE9ETyhpc3N1ZTojNDMwOSkgRGVwcmVjYXRlZCBzaW5jZSAxLjIuMFxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcm91dGVyOiBSb3V0ZXIsXG4gICAgY29uZmlnOiBDaGVja291dENvbmZpZyxcbiAgICByb3V0aW5nQ29uZmlnU2VydmljZTogUm91dGluZ0NvbmZpZ1NlcnZpY2VcbiAgKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGNvbmZpZzogQ2hlY2tvdXRDb25maWcsXG4gICAgcHJpdmF0ZSByb3V0aW5nQ29uZmlnU2VydmljZTogUm91dGluZ0NvbmZpZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0Q29uZmlnU2VydmljZT86IENoZWNrb3V0Q29uZmlnU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZXhwcmVzc0NoZWNrb3V0U2VydmljZT86IEV4cHJlc3NDaGVja291dFNlcnZpY2VcbiAgKSB7XG4gICAgLyoqXG4gICAgICogVE9ETyhpc3N1ZTojNDMwOSkgRGVwcmVjYXRlZCBzaW5jZSAxLjIuMFxuICAgICAqL1xuICAgIGlmICh0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZSkge1xuICAgICAgdGhpcy5maXJzdFN0ZXAkID0gb2YoXG4gICAgICAgIHRoaXMucm91dGVyLnBhcnNlVXJsKFxuICAgICAgICAgIHRoaXMucm91dGluZ0NvbmZpZ1NlcnZpY2UuZ2V0Um91dGVDb25maWcoXG4gICAgICAgICAgICB0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZS5nZXRGaXJzdENoZWNrb3V0U3RlcFJvdXRlKClcbiAgICAgICAgICApLnBhdGhzWzBdXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmlyc3RTdGVwJCA9IG9mKFxuICAgICAgICB0aGlzLnJvdXRlci5wYXJzZVVybChcbiAgICAgICAgICB0aGlzLnJvdXRpbmdDb25maWdTZXJ2aWNlLmdldFJvdXRlQ29uZmlnKFxuICAgICAgICAgICAgdGhpcy5jb25maWcuY2hlY2tvdXQuc3RlcHNbMF0ucm91dGVOYW1lXG4gICAgICAgICAgKS5wYXRoc1swXVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGNhbkFjdGl2YXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcbiAgICAvKipcbiAgICAgKiBUT0RPKGlzc3VlOiM0MzA5KSBEZXByZWNhdGVkIHNpbmNlIDEuMi4wXG4gICAgICovXG4gICAgaWYgKHRoaXMuY2hlY2tvdXRDb25maWdTZXJ2aWNlICYmIHRoaXMuZXhwcmVzc0NoZWNrb3V0U2VydmljZSkge1xuICAgICAgaWYgKHRoaXMuY2hlY2tvdXRDb25maWdTZXJ2aWNlLmlzRXhwcmVzc0NoZWNrb3V0KCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhwcmVzc0NoZWNrb3V0U2VydmljZS50cnlTZXREZWZhdWx0Q2hlY2tvdXREZXRhaWxzKCkucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAoKGV4cHJlc3NDaGVja291dFBvc3NpYmxlOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZXhwcmVzc0NoZWNrb3V0UG9zc2libGVcbiAgICAgICAgICAgICAgPyBvZihcbiAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLnBhcnNlVXJsKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdDb25maWdTZXJ2aWNlLmdldFJvdXRlQ29uZmlnKFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tvdXRDb25maWdTZXJ2aWNlLmdldENoZWNrb3V0U3RlcFJvdXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgQ2hlY2tvdXRTdGVwVHlwZS5SRVZJRVdfT1JERVJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICkucGF0aHNbMF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogdGhpcy5maXJzdFN0ZXAkO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZpcnN0U3RlcCQ7XG4gIH1cbn1cbiJdfQ==