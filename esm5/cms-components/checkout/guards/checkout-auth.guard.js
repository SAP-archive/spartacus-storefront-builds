/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AuthRedirectService, AuthService, CartService, RoutingService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { CheckoutConfigService } from '../services/checkout-config.service';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "../services/checkout-config.service";
var CheckoutAuthGuard = /** @class */ (function () {
    function CheckoutAuthGuard(routingService, authService, authRedirectService, cartService, checkoutConfigService) {
        this.routingService = routingService;
        this.authService = authService;
        this.authRedirectService = authRedirectService;
        this.cartService = cartService;
        this.checkoutConfigService = checkoutConfigService;
    }
    /**
     * @return {?}
     */
    CheckoutAuthGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return combineLatest([
            this.authService.getUserToken(),
            this.cartService.getAssignedUser(),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), token = _b[0], user = _b[1];
            if (!token.access_token) {
                if (_this.cartService.isGuestCart()) {
                    return Boolean(user);
                }
                if (_this.checkoutConfigService.isGuestCheckout()) {
                    _this.routingService.go({ cxRoute: 'login' }, { forced: true });
                }
                else {
                    _this.routingService.go({ cxRoute: 'login' });
                }
                _this.authRedirectService.reportAuthGuard();
            }
            return !!token.access_token;
        })));
    };
    CheckoutAuthGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CheckoutAuthGuard.ctorParameters = function () { return [
        { type: RoutingService },
        { type: AuthService },
        { type: AuthRedirectService },
        { type: CartService },
        { type: CheckoutConfigService }
    ]; };
    /** @nocollapse */ CheckoutAuthGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CheckoutAuthGuard_Factory() { return new CheckoutAuthGuard(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i1.AuthRedirectService), i0.ɵɵinject(i1.CartService), i0.ɵɵinject(i2.CheckoutConfigService)); }, token: CheckoutAuthGuard, providedIn: "root" });
    return CheckoutAuthGuard;
}());
export { CheckoutAuthGuard };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CheckoutAuthGuard.prototype.routingService;
    /**
     * @type {?}
     * @private
     */
    CheckoutAuthGuard.prototype.authService;
    /**
     * @type {?}
     * @private
     */
    CheckoutAuthGuard.prototype.authRedirectService;
    /**
     * @type {?}
     * @private
     */
    CheckoutAuthGuard.prototype.cartService;
    /**
     * @type {?}
     * @private
     */
    CheckoutAuthGuard.prototype.checkoutConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NoZWNrb3V0L2d1YXJkcy9jaGVja291dC1hdXRoLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLFdBQVcsRUFDWCxXQUFXLEVBQ1gsY0FBYyxHQUdmLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7Ozs7QUFFNUU7SUFJRSwyQkFDVSxjQUE4QixFQUM5QixXQUF3QixFQUN4QixtQkFBd0MsRUFDeEMsV0FBd0IsRUFDeEIscUJBQTRDO1FBSjVDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7SUFDbkQsQ0FBQzs7OztJQUVKLHVDQUFXOzs7SUFBWDtRQUFBLGlCQW9CQztRQW5CQyxPQUFPLGFBQWEsQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRTtZQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRTtTQUNuQyxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUc7Ozs7UUFBQyxVQUFDLEVBQWdDO2dCQUFoQywwQkFBZ0MsRUFBL0IsYUFBSyxFQUFFLFlBQUk7WUFDZixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRTtnQkFDdkIsSUFBSSxLQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxFQUFFO29CQUNsQyxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDdEI7Z0JBQ0QsSUFBSSxLQUFJLENBQUMscUJBQXFCLENBQUMsZUFBZSxFQUFFLEVBQUU7b0JBQ2hELEtBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7aUJBQ2hFO3FCQUFNO29CQUNMLEtBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7aUJBQzlDO2dCQUNELEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUM1QztZQUNELE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7UUFDOUIsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7O2dCQWhDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVZDLGNBQWM7Z0JBRmQsV0FBVztnQkFEWCxtQkFBbUI7Z0JBRW5CLFdBQVc7Z0JBT0oscUJBQXFCOzs7NEJBWjlCO0NBK0NDLEFBakNELElBaUNDO1NBOUJZLGlCQUFpQjs7Ozs7O0lBRTFCLDJDQUFzQzs7Ozs7SUFDdEMsd0NBQWdDOzs7OztJQUNoQyxnREFBZ0Q7Ozs7O0lBQ2hELHdDQUFnQzs7Ozs7SUFDaEMsa0RBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQXV0aFJlZGlyZWN0U2VydmljZSxcbiAgQXV0aFNlcnZpY2UsXG4gIENhcnRTZXJ2aWNlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgVXNlcixcbiAgVXNlclRva2VuLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRBdXRoR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXV0aFJlZGlyZWN0U2VydmljZTogQXV0aFJlZGlyZWN0U2VydmljZSxcbiAgICBwcml2YXRlIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBwcml2YXRlIGNoZWNrb3V0Q29uZmlnU2VydmljZTogQ2hlY2tvdXRDb25maWdTZXJ2aWNlXG4gICkge31cblxuICBjYW5BY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldFVzZXJUb2tlbigpLFxuICAgICAgdGhpcy5jYXJ0U2VydmljZS5nZXRBc3NpZ25lZFVzZXIoKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKChbdG9rZW4sIHVzZXJdOiBbVXNlclRva2VuLCBVc2VyXSkgPT4ge1xuICAgICAgICBpZiAoIXRva2VuLmFjY2Vzc190b2tlbikge1xuICAgICAgICAgIGlmICh0aGlzLmNhcnRTZXJ2aWNlLmlzR3Vlc3RDYXJ0KCkpIHtcbiAgICAgICAgICAgIHJldHVybiBCb29sZWFuKHVzZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5jaGVja291dENvbmZpZ1NlcnZpY2UuaXNHdWVzdENoZWNrb3V0KCkpIHtcbiAgICAgICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAnbG9naW4nIH0sIHsgZm9yY2VkOiB0cnVlIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgY3hSb3V0ZTogJ2xvZ2luJyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5hdXRoUmVkaXJlY3RTZXJ2aWNlLnJlcG9ydEF1dGhHdWFyZCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhIXRva2VuLmFjY2Vzc190b2tlbjtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19