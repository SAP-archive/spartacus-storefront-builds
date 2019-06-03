/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { RoutingService, CheckoutService } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var OrderConfirmationPageGuard = /** @class */ (function () {
    function OrderConfirmationPageGuard(checkoutService, routingService) {
        this.checkoutService = checkoutService;
        this.routingService = routingService;
    }
    /**
     * @return {?}
     */
    OrderConfirmationPageGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.checkoutService.getOrderDetails().pipe(map(function (orderDetails) {
            if (orderDetails && Object.keys(orderDetails).length !== 0) {
                return true;
            }
            else {
                _this.routingService.go({ cxRoute: 'orders' });
                return false;
            }
        }));
    };
    OrderConfirmationPageGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    OrderConfirmationPageGuard.ctorParameters = function () { return [
        { type: CheckoutService },
        { type: RoutingService }
    ]; };
    /** @nocollapse */ OrderConfirmationPageGuard.ngInjectableDef = i0.defineInjectable({ factory: function OrderConfirmationPageGuard_Factory() { return new OrderConfirmationPageGuard(i0.inject(i1.CheckoutService), i0.inject(i1.RoutingService)); }, token: OrderConfirmationPageGuard, providedIn: "root" });
    return OrderConfirmationPageGuard;
}());
export { OrderConfirmationPageGuard };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OrderConfirmationPageGuard.prototype.checkoutService;
    /**
     * @type {?}
     * @private
     */
    OrderConfirmationPageGuard.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLXBhZ2UuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9ndWFyZHMvb3JkZXItY29uZmlybWF0aW9uLXBhZ2UuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQUVsRTtJQUlFLG9DQUNVLGVBQWdDLEVBQ2hDLGNBQThCO1FBRDlCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDckMsQ0FBQzs7OztJQUVKLGdEQUFXOzs7SUFBWDtRQUFBLGlCQVdDO1FBVkMsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDLElBQUksQ0FDaEQsR0FBRyxDQUFDLFVBQUEsWUFBWTtZQUNkLElBQUksWUFBWSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDMUQsT0FBTyxJQUFJLENBQUM7YUFDYjtpQkFBTTtnQkFDTCxLQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUM5QyxPQUFPLEtBQUssQ0FBQzthQUNkO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7O2dCQXBCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUp3QixlQUFlO2dCQUEvQixjQUFjOzs7cUNBTnZCO0NBNkJDLEFBckJELElBcUJDO1NBbEJZLDBCQUEwQjs7Ozs7O0lBRW5DLHFEQUF3Qzs7Ozs7SUFDeEMsb0RBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlLCBDaGVja291dFNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJDb25maXJtYXRpb25QYWdlR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIGNhbkFjdGl2YXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U2VydmljZS5nZXRPcmRlckRldGFpbHMoKS5waXBlKFxuICAgICAgbWFwKG9yZGVyRGV0YWlscyA9PiB7XG4gICAgICAgIGlmIChvcmRlckRldGFpbHMgJiYgT2JqZWN0LmtleXMob3JkZXJEZXRhaWxzKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgY3hSb3V0ZTogJ29yZGVycycgfSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==