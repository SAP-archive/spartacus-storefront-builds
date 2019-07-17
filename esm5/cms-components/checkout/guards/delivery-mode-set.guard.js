/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
var DeliveryModeSetGuard = /** @class */ (function () {
    function DeliveryModeSetGuard(checkoutDetailsService, checkoutConfigService, routingConfigService, router) {
        this.checkoutDetailsService = checkoutDetailsService;
        this.checkoutConfigService = checkoutConfigService;
        this.routingConfigService = routingConfigService;
        this.router = router;
    }
    /**
     * @return {?}
     */
    DeliveryModeSetGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var checkoutStep = this.checkoutConfigService.getCheckoutStep(CheckoutStepType.DELIVERY_MODE);
        if (!checkoutStep && isDevMode()) {
            console.warn("Missing step with type " + CheckoutStepType.DELIVERY_MODE + " in checkout configuration.");
        }
        return this.checkoutDetailsService
            .getSelectedDeliveryModeCode()
            .pipe(map((/**
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            return mode && mode.length
                ? true
                : _this.router.parseUrl(checkoutStep &&
                    _this.routingConfigService.getRouteConfig(checkoutStep.routeName).paths[0]);
        })));
    };
    DeliveryModeSetGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    DeliveryModeSetGuard.ctorParameters = function () { return [
        { type: CheckoutDetailsService },
        { type: CheckoutConfigService },
        { type: RoutingConfigService },
        { type: Router }
    ]; };
    /** @nocollapse */ DeliveryModeSetGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DeliveryModeSetGuard_Factory() { return new DeliveryModeSetGuard(i0.ɵɵinject(i1.CheckoutDetailsService), i0.ɵɵinject(i2.CheckoutConfigService), i0.ɵɵinject(i3.RoutingConfigService), i0.ɵɵinject(i4.Router)); }, token: DeliveryModeSetGuard, providedIn: "root" });
    return DeliveryModeSetGuard;
}());
export { DeliveryModeSetGuard };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DeliveryModeSetGuard.prototype.checkoutDetailsService;
    /**
     * @type {?}
     * @private
     */
    DeliveryModeSetGuard.prototype.checkoutConfigService;
    /**
     * @type {?}
     * @private
     */
    DeliveryModeSetGuard.prototype.routingConfigService;
    /**
     * @type {?}
     * @private
     */
    DeliveryModeSetGuard.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktbW9kZS1zZXQuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9ndWFyZHMvZGVsaXZlcnktbW9kZS1zZXQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBZSxNQUFNLEVBQVcsTUFBTSxpQkFBaUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFnQixnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7QUFFOUU7SUFJRSw4QkFDVSxzQkFBOEMsRUFDOUMscUJBQTRDLEVBQzVDLG9CQUEwQyxFQUMxQyxNQUFjO1FBSGQsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUM5QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNyQixDQUFDOzs7O0lBRUosMENBQVc7OztJQUFYO1FBQUEsaUJBMkJDOztZQTFCTyxZQUFZLEdBQWlCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQzNFLGdCQUFnQixDQUFDLGFBQWEsQ0FDL0I7UUFFRCxJQUFJLENBQUMsWUFBWSxJQUFJLFNBQVMsRUFBRSxFQUFFO1lBQ2hDLE9BQU8sQ0FBQyxJQUFJLENBQ1YsNEJBQ0UsZ0JBQWdCLENBQUMsYUFBYSxnQ0FDSCxDQUM5QixDQUFDO1NBQ0g7UUFFRCxPQUFPLElBQUksQ0FBQyxzQkFBc0I7YUFDL0IsMkJBQTJCLEVBQUU7YUFDN0IsSUFBSSxDQUNILEdBQUc7Ozs7UUFBQyxVQUFDLElBQVk7WUFDZixPQUFBLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTTtnQkFDakIsQ0FBQyxDQUFDLElBQUk7Z0JBQ04sQ0FBQyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUNsQixZQUFZO29CQUNWLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQ3RDLFlBQVksQ0FBQyxTQUFTLENBQ3ZCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUNiO1FBUEwsQ0FPSyxFQUNOLENBQ0YsQ0FBQztJQUNOLENBQUM7O2dCQXRDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUpRLHNCQUFzQjtnQkFEdEIscUJBQXFCO2dCQUpyQixvQkFBb0I7Z0JBRFAsTUFBTTs7OytCQUQ1QjtDQWdEQyxBQXZDRCxJQXVDQztTQXBDWSxvQkFBb0I7Ozs7OztJQUU3QixzREFBc0Q7Ozs7O0lBQ3RELHFEQUFvRDs7Ozs7SUFDcEQsb0RBQWtEOzs7OztJQUNsRCxzQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBpc0Rldk1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXIsIFVybFRyZWUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGluZ0NvbmZpZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdGVwLCBDaGVja291dFN0ZXBUeXBlIH0gZnJvbSAnLi4vbW9kZWwvY2hlY2tvdXQtc3RlcC5tb2RlbCc7XG5pbXBvcnQgeyBDaGVja291dENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jaGVja291dC1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBDaGVja291dERldGFpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2hlY2tvdXQtZGV0YWlscy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIERlbGl2ZXJ5TW9kZVNldEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNoZWNrb3V0RGV0YWlsc1NlcnZpY2U6IENoZWNrb3V0RGV0YWlsc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGVja291dENvbmZpZ1NlcnZpY2U6IENoZWNrb3V0Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdDb25maWdTZXJ2aWNlOiBSb3V0aW5nQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICkge31cblxuICBjYW5BY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgY29uc3QgY2hlY2tvdXRTdGVwOiBDaGVja291dFN0ZXAgPSB0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZS5nZXRDaGVja291dFN0ZXAoXG4gICAgICBDaGVja291dFN0ZXBUeXBlLkRFTElWRVJZX01PREVcbiAgICApO1xuXG4gICAgaWYgKCFjaGVja291dFN0ZXAgJiYgaXNEZXZNb2RlKCkpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYE1pc3Npbmcgc3RlcCB3aXRoIHR5cGUgJHtcbiAgICAgICAgICBDaGVja291dFN0ZXBUeXBlLkRFTElWRVJZX01PREVcbiAgICAgICAgfSBpbiBjaGVja291dCBjb25maWd1cmF0aW9uLmBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXREZXRhaWxzU2VydmljZVxuICAgICAgLmdldFNlbGVjdGVkRGVsaXZlcnlNb2RlQ29kZSgpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChtb2RlOiBzdHJpbmcpID0+XG4gICAgICAgICAgbW9kZSAmJiBtb2RlLmxlbmd0aFxuICAgICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgICA6IHRoaXMucm91dGVyLnBhcnNlVXJsKFxuICAgICAgICAgICAgICAgIGNoZWNrb3V0U3RlcCAmJlxuICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nQ29uZmlnU2VydmljZS5nZXRSb3V0ZUNvbmZpZyhcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tvdXRTdGVwLnJvdXRlTmFtZVxuICAgICAgICAgICAgICAgICAgKS5wYXRoc1swXVxuICAgICAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gIH1cbn1cbiJdfQ==