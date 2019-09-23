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
var CheckoutGuard = /** @class */ (function () {
    function CheckoutGuard(router, config, routingConfigService, checkoutConfigService, expressCheckoutService, cartService) {
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
    CheckoutGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
        { type: ExpressCheckoutService },
        { type: CartService }
    ]; };
    /** @nocollapse */ CheckoutGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CheckoutGuard_Factory() { return new CheckoutGuard(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.CheckoutConfig), i0.ɵɵinject(i3.RoutingConfigService), i0.ɵɵinject(i4.CheckoutConfigService), i0.ɵɵinject(i5.ExpressCheckoutService), i0.ɵɵinject(i3.CartService)); }, token: CheckoutGuard, providedIn: "root" });
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
    /**
     * @type {?}
     * @protected
     */
    CheckoutGuard.prototype.cartService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9ndWFyZHMvY2hlY2tvdXQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFlLE1BQU0sRUFBVyxNQUFNLGlCQUFpQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRSxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7Ozs7QUFFOUU7SUE4QkUsdUJBQ1UsTUFBYyxFQUNkLE1BQXNCLEVBQ3RCLG9CQUEwQyxFQUN4QyxxQkFBNkMsRUFDN0Msc0JBQStDLEVBQy9DLFdBQXlCO1FBTDNCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQ3hDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBd0I7UUFDN0MsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF5QjtRQUMvQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYztRQUVuQzs7V0FFRztRQUNILElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDbEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FDdEMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLHlCQUF5QixFQUFFLENBQ3ZELENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUNYLENBQ0YsQ0FBQztTQUNIO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQ2xCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQ3hDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUNYLENBQ0YsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7OztJQUVELG1DQUFXOzs7SUFBWDtRQUFBLGlCQStCQztRQTlCQzs7V0FFRztRQUNILElBQ0UsSUFBSSxDQUFDLHFCQUFxQjtZQUMxQixJQUFJLENBQUMsc0JBQXNCO1lBQzNCLElBQUksQ0FBQyxXQUFXLEVBQ2hCO1lBQ0EsSUFDRSxJQUFJLENBQUMscUJBQXFCLENBQUMsaUJBQWlCLEVBQUU7Z0JBQzlDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsRUFDL0I7Z0JBQ0EsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsNEJBQTRCLEVBQUUsQ0FBQyxJQUFJLENBQ3BFLFNBQVM7Ozs7Z0JBQUMsVUFBQyx1QkFBZ0M7b0JBQ3pDLE9BQU8sdUJBQXVCO3dCQUM1QixDQUFDLENBQUMsRUFBRSxDQUNBLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUNsQixLQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUN0QyxLQUFJLENBQUMscUJBQXFCLENBQUMsb0JBQW9CLENBQzdDLGdCQUFnQixDQUFDLFlBQVksQ0FDOUIsQ0FDRixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDWCxDQUNGO3dCQUNILENBQUMsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDO2dCQUN0QixDQUFDLEVBQUMsQ0FDSCxDQUFDO2FBQ0g7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOztnQkEzRkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFYcUIsTUFBTTtnQkFJbkIsY0FBYztnQkFIRCxvQkFBb0I7Z0JBS2pDLHFCQUFxQjtnQkFDckIsc0JBQXNCO2dCQU50QixXQUFXOzs7d0JBRnBCO0NBc0dDLEFBNUZELElBNEZDO1NBekZZLGFBQWE7Ozs7OztJQUN4QixtQ0FBaUQ7Ozs7O0lBMkIvQywrQkFBc0I7Ozs7O0lBQ3RCLCtCQUE4Qjs7Ozs7SUFDOUIsNkNBQWtEOzs7OztJQUNsRCw4Q0FBdUQ7Ozs7O0lBQ3ZELCtDQUF5RDs7Ozs7SUFDekQsb0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlciwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDYXJ0U2VydmljZSwgUm91dGluZ0NvbmZpZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENoZWNrb3V0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2NoZWNrb3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBDaGVja291dFN0ZXBUeXBlIH0gZnJvbSAnLi4vbW9kZWwvY2hlY2tvdXQtc3RlcC5tb2RlbCc7XG5pbXBvcnQgeyBDaGVja291dENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jaGVja291dC1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBFeHByZXNzQ2hlY2tvdXRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZXhwcmVzcy1jaGVja291dC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0R3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgZmlyc3RTdGVwJDogT2JzZXJ2YWJsZTxVcmxUcmVlPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICByb3V0ZXI6IFJvdXRlcixcbiAgICBjb25maWc6IENoZWNrb3V0Q29uZmlnLFxuICAgIHJvdXRpbmdDb25maWdTZXJ2aWNlOiBSb3V0aW5nQ29uZmlnU2VydmljZSxcbiAgICBjaGVja291dENvbmZpZ1NlcnZpY2U6IENoZWNrb3V0Q29uZmlnU2VydmljZSxcbiAgICBleHByZXNzQ2hlY2tvdXRTZXJ2aWNlOiBFeHByZXNzQ2hlY2tvdXRTZXJ2aWNlLFxuICAgIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZVxuICApO1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjJcbiAgICogIFVzZSBjb25zdHJ1Y3Rvcihyb3V0ZXI6IFJvdXRlcixcbiAgICogIGNvbmZpZzogQ2hlY2tvdXRDb25maWcgLSBAZGVwcmVjYXRlZCBzaW5jZSAyLngsXG4gICAqICByb3V0aW5nQ29uZmlnU2VydmljZTogUm91dGluZ0NvbmZpZ1NlcnZpY2UsXG4gICAqICBjaGVja291dENvbmZpZ1NlcnZpY2U6IENoZWNrb3V0Q29uZmlnU2VydmljZSxcbiAgICogIGV4cHJlc3NDaGVja291dFNlcnZpY2U6IEV4cHJlc3NDaGVja291dFNlcnZpY2VcbiAgICogIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSkgaW5zdGVhZFxuICAgKlxuICAgKiAgVE9ETyhpc3N1ZTojNDMwOSkgRGVwcmVjYXRlZCBzaW5jZSAxLjIuMFxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcm91dGVyOiBSb3V0ZXIsXG4gICAgY29uZmlnOiBDaGVja291dENvbmZpZyxcbiAgICByb3V0aW5nQ29uZmlnU2VydmljZTogUm91dGluZ0NvbmZpZ1NlcnZpY2VcbiAgKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGNvbmZpZzogQ2hlY2tvdXRDb25maWcsXG4gICAgcHJpdmF0ZSByb3V0aW5nQ29uZmlnU2VydmljZTogUm91dGluZ0NvbmZpZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0Q29uZmlnU2VydmljZT86IENoZWNrb3V0Q29uZmlnU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZXhwcmVzc0NoZWNrb3V0U2VydmljZT86IEV4cHJlc3NDaGVja291dFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNhcnRTZXJ2aWNlPzogQ2FydFNlcnZpY2VcbiAgKSB7XG4gICAgLyoqXG4gICAgICogVE9ETyhpc3N1ZTojNDMwOSkgRGVwcmVjYXRlZCBzaW5jZSAxLjIuMFxuICAgICAqL1xuICAgIGlmICh0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZSkge1xuICAgICAgdGhpcy5maXJzdFN0ZXAkID0gb2YoXG4gICAgICAgIHRoaXMucm91dGVyLnBhcnNlVXJsKFxuICAgICAgICAgIHRoaXMucm91dGluZ0NvbmZpZ1NlcnZpY2UuZ2V0Um91dGVDb25maWcoXG4gICAgICAgICAgICB0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZS5nZXRGaXJzdENoZWNrb3V0U3RlcFJvdXRlKClcbiAgICAgICAgICApLnBhdGhzWzBdXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmlyc3RTdGVwJCA9IG9mKFxuICAgICAgICB0aGlzLnJvdXRlci5wYXJzZVVybChcbiAgICAgICAgICB0aGlzLnJvdXRpbmdDb25maWdTZXJ2aWNlLmdldFJvdXRlQ29uZmlnKFxuICAgICAgICAgICAgdGhpcy5jb25maWcuY2hlY2tvdXQuc3RlcHNbMF0ucm91dGVOYW1lXG4gICAgICAgICAgKS5wYXRoc1swXVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGNhbkFjdGl2YXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcbiAgICAvKipcbiAgICAgKiBUT0RPKGlzc3VlOiM0MzA5KSBEZXByZWNhdGVkIHNpbmNlIDEuMi4wXG4gICAgICovXG4gICAgaWYgKFxuICAgICAgdGhpcy5jaGVja291dENvbmZpZ1NlcnZpY2UgJiZcbiAgICAgIHRoaXMuZXhwcmVzc0NoZWNrb3V0U2VydmljZSAmJlxuICAgICAgdGhpcy5jYXJ0U2VydmljZVxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZS5pc0V4cHJlc3NDaGVja291dCgpICYmXG4gICAgICAgICF0aGlzLmNhcnRTZXJ2aWNlLmlzR3Vlc3RDYXJ0KClcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdGhpcy5leHByZXNzQ2hlY2tvdXRTZXJ2aWNlLnRyeVNldERlZmF1bHRDaGVja291dERldGFpbHMoKS5waXBlKFxuICAgICAgICAgIHN3aXRjaE1hcCgoZXhwcmVzc0NoZWNrb3V0UG9zc2libGU6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBleHByZXNzQ2hlY2tvdXRQb3NzaWJsZVxuICAgICAgICAgICAgICA/IG9mKFxuICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIucGFyc2VVcmwoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ0NvbmZpZ1NlcnZpY2UuZ2V0Um91dGVDb25maWcoXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja291dENvbmZpZ1NlcnZpY2UuZ2V0Q2hlY2tvdXRTdGVwUm91dGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBDaGVja291dFN0ZXBUeXBlLlJFVklFV19PUkRFUlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKS5wYXRoc1swXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiB0aGlzLmZpcnN0U3RlcCQ7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZmlyc3RTdGVwJDtcbiAgfVxufVxuIl19