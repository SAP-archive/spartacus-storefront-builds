/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, isDevMode } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingConfigService } from '@spartacus/core';
import { map } from 'rxjs/operators';
import { CheckoutStepType } from '../model/checkout-step.model';
import { CheckoutConfigService } from '../services/checkout-config.service';
import { CheckoutDetailsService } from '../services/checkout-details.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/checkout-details.service";
import * as i2 from "../services/checkout-config.service";
import * as i3 from "@spartacus/core";
import * as i4 from "@angular/router";
var ShippingAddressSetGuard = /** @class */ (function () {
    function ShippingAddressSetGuard(checkoutDetailsService, checkoutConfigService, routingConfigService, router) {
        this.checkoutDetailsService = checkoutDetailsService;
        this.checkoutConfigService = checkoutConfigService;
        this.routingConfigService = routingConfigService;
        this.router = router;
    }
    /**
     * @return {?}
     */
    ShippingAddressSetGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var checkoutStep = this.checkoutConfigService.getCheckoutStep(CheckoutStepType.SHIPPING_ADDRESS);
        if (!checkoutStep && isDevMode()) {
            console.warn("Missing step with type " + CheckoutStepType.SHIPPING_ADDRESS + " in checkout configuration.");
        }
        return this.checkoutDetailsService
            .getDeliveryAddress()
            .pipe(map((/**
         * @param {?} deliveryAddress
         * @return {?}
         */
        function (deliveryAddress) {
            return deliveryAddress && Object.keys(deliveryAddress).length
                ? true
                : _this.router.parseUrl(checkoutStep &&
                    _this.routingConfigService.getRouteConfig(checkoutStep.routeName).paths[0]);
        })));
    };
    ShippingAddressSetGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ShippingAddressSetGuard.ctorParameters = function () { return [
        { type: CheckoutDetailsService },
        { type: CheckoutConfigService },
        { type: RoutingConfigService },
        { type: Router }
    ]; };
    /** @nocollapse */ ShippingAddressSetGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ShippingAddressSetGuard_Factory() { return new ShippingAddressSetGuard(i0.ɵɵinject(i1.CheckoutDetailsService), i0.ɵɵinject(i2.CheckoutConfigService), i0.ɵɵinject(i3.RoutingConfigService), i0.ɵɵinject(i4.Router)); }, token: ShippingAddressSetGuard, providedIn: "root" });
    return ShippingAddressSetGuard;
}());
export { ShippingAddressSetGuard };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ShippingAddressSetGuard.prototype.checkoutDetailsService;
    /**
     * @type {?}
     * @private
     */
    ShippingAddressSetGuard.prototype.checkoutConfigService;
    /**
     * @type {?}
     * @private
     */
    ShippingAddressSetGuard.prototype.routingConfigService;
    /**
     * @type {?}
     * @private
     */
    ShippingAddressSetGuard.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctYWRkcmVzcy1zZXQuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9ndWFyZHMvc2hpcHBpbmctYWRkcmVzcy1zZXQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBZSxNQUFNLEVBQVcsTUFBTSxpQkFBaUIsQ0FBQztBQUMvRCxPQUFPLEVBQVcsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFnQixnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7QUFFOUU7SUFJRSxpQ0FDVSxzQkFBOEMsRUFDOUMscUJBQTRDLEVBQzVDLG9CQUEwQyxFQUMxQyxNQUFjO1FBSGQsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUM5QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNyQixDQUFDOzs7O0lBRUosNkNBQVc7OztJQUFYO1FBQUEsaUJBeUJDOztZQXhCTyxZQUFZLEdBQWlCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQzNFLGdCQUFnQixDQUFDLGdCQUFnQixDQUNsQztRQUVELElBQUksQ0FBQyxZQUFZLElBQUksU0FBUyxFQUFFLEVBQUU7WUFDaEMsT0FBTyxDQUFDLElBQUksQ0FDViw0QkFBMEIsZ0JBQWdCLENBQUMsZ0JBQWdCLGdDQUE2QixDQUN6RixDQUFDO1NBQ0g7UUFFRCxPQUFPLElBQUksQ0FBQyxzQkFBc0I7YUFDL0Isa0JBQWtCLEVBQUU7YUFDcEIsSUFBSSxDQUNILEdBQUc7Ozs7UUFBQyxVQUFDLGVBQXdCO1lBQzNCLE9BQUEsZUFBZSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsTUFBTTtnQkFDcEQsQ0FBQyxDQUFDLElBQUk7Z0JBQ04sQ0FBQyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUNsQixZQUFZO29CQUNWLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQ3RDLFlBQVksQ0FBQyxTQUFTLENBQ3ZCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUNiO1FBUEwsQ0FPSyxFQUNOLENBQ0YsQ0FBQztJQUNOLENBQUM7O2dCQXBDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUpRLHNCQUFzQjtnQkFEdEIscUJBQXFCO2dCQUpaLG9CQUFvQjtnQkFEaEIsTUFBTTs7O2tDQUQ1QjtDQThDQyxBQXJDRCxJQXFDQztTQWxDWSx1QkFBdUI7Ozs7OztJQUVoQyx5REFBc0Q7Ozs7O0lBQ3RELHdEQUFvRDs7Ozs7SUFDcEQsdURBQWtEOzs7OztJQUNsRCx5Q0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBpc0Rldk1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXIsIFVybFRyZWUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWRkcmVzcywgUm91dGluZ0NvbmZpZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdGVwLCBDaGVja291dFN0ZXBUeXBlIH0gZnJvbSAnLi4vbW9kZWwvY2hlY2tvdXQtc3RlcC5tb2RlbCc7XG5pbXBvcnQgeyBDaGVja291dENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jaGVja291dC1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBDaGVja291dERldGFpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2hlY2tvdXQtZGV0YWlscy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNoaXBwaW5nQWRkcmVzc1NldEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNoZWNrb3V0RGV0YWlsc1NlcnZpY2U6IENoZWNrb3V0RGV0YWlsc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGVja291dENvbmZpZ1NlcnZpY2U6IENoZWNrb3V0Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdDb25maWdTZXJ2aWNlOiBSb3V0aW5nQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICkge31cblxuICBjYW5BY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgY29uc3QgY2hlY2tvdXRTdGVwOiBDaGVja291dFN0ZXAgPSB0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZS5nZXRDaGVja291dFN0ZXAoXG4gICAgICBDaGVja291dFN0ZXBUeXBlLlNISVBQSU5HX0FERFJFU1NcbiAgICApO1xuXG4gICAgaWYgKCFjaGVja291dFN0ZXAgJiYgaXNEZXZNb2RlKCkpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYE1pc3Npbmcgc3RlcCB3aXRoIHR5cGUgJHtDaGVja291dFN0ZXBUeXBlLlNISVBQSU5HX0FERFJFU1N9IGluIGNoZWNrb3V0IGNvbmZpZ3VyYXRpb24uYFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jaGVja291dERldGFpbHNTZXJ2aWNlXG4gICAgICAuZ2V0RGVsaXZlcnlBZGRyZXNzKClcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKGRlbGl2ZXJ5QWRkcmVzczogQWRkcmVzcykgPT5cbiAgICAgICAgICBkZWxpdmVyeUFkZHJlc3MgJiYgT2JqZWN0LmtleXMoZGVsaXZlcnlBZGRyZXNzKS5sZW5ndGhcbiAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgOiB0aGlzLnJvdXRlci5wYXJzZVVybChcbiAgICAgICAgICAgICAgICBjaGVja291dFN0ZXAgJiZcbiAgICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ0NvbmZpZ1NlcnZpY2UuZ2V0Um91dGVDb25maWcoXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrb3V0U3RlcC5yb3V0ZU5hbWVcbiAgICAgICAgICAgICAgICAgICkucGF0aHNbMF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICB9XG59XG4iXX0=