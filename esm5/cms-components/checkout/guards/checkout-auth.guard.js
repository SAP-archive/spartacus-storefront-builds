/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AuthRedirectService, AuthService, CartService, RoutingService, FeatureConfigService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var CheckoutAuthGuard = /** @class */ (function () {
    function CheckoutAuthGuard(routingService, authService, authRedirectService, cartService, featureConfigService) {
        this.routingService = routingService;
        this.authService = authService;
        this.authRedirectService = authRedirectService;
        this.cartService = cartService;
        this.featureConfigService = featureConfigService;
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
                if (_this.featureConfigService.isEnabled('guestCheckout')) {
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
        { type: FeatureConfigService }
    ]; };
    /** @nocollapse */ CheckoutAuthGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CheckoutAuthGuard_Factory() { return new CheckoutAuthGuard(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i1.AuthRedirectService), i0.ɵɵinject(i1.CartService), i0.ɵɵinject(i1.FeatureConfigService)); }, token: CheckoutAuthGuard, providedIn: "root" });
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
    CheckoutAuthGuard.prototype.featureConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NoZWNrb3V0L2d1YXJkcy9jaGVja291dC1hdXRoLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLFdBQVcsRUFDWCxXQUFXLEVBQ1gsY0FBYyxFQUdkLG9CQUFvQixHQUNyQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFFckM7SUFJRSwyQkFDVSxjQUE4QixFQUM5QixXQUF3QixFQUN4QixtQkFBd0MsRUFDeEMsV0FBd0IsRUFDeEIsb0JBQTBDO1FBSjFDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDakQsQ0FBQzs7OztJQUVKLHVDQUFXOzs7SUFBWDtRQUFBLGlCQW9CQztRQW5CQyxPQUFPLGFBQWEsQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRTtZQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRTtTQUNuQyxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUc7Ozs7UUFBQyxVQUFDLEVBQWdDO2dCQUFoQywwQkFBZ0MsRUFBL0IsYUFBSyxFQUFFLFlBQUk7WUFDZixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRTtnQkFDdkIsSUFBSSxLQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxFQUFFO29CQUNsQyxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDdEI7Z0JBQ0QsSUFBSSxLQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxFQUFFO29CQUN4RCxLQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2lCQUNoRTtxQkFBTTtvQkFDTCxLQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO2lCQUM5QztnQkFDRCxLQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDNUM7WUFDRCxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQzlCLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOztnQkFoQ0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFWQyxjQUFjO2dCQUZkLFdBQVc7Z0JBRFgsbUJBQW1CO2dCQUVuQixXQUFXO2dCQUlYLG9CQUFvQjs7OzRCQVR0QjtDQStDQyxBQWpDRCxJQWlDQztTQTlCWSxpQkFBaUI7Ozs7OztJQUUxQiwyQ0FBc0M7Ozs7O0lBQ3RDLHdDQUFnQzs7Ozs7SUFDaEMsZ0RBQWdEOzs7OztJQUNoRCx3Q0FBZ0M7Ozs7O0lBQ2hDLGlEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEF1dGhSZWRpcmVjdFNlcnZpY2UsXG4gIEF1dGhTZXJ2aWNlLFxuICBDYXJ0U2VydmljZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFVzZXIsXG4gIFVzZXJUb2tlbixcbiAgRmVhdHVyZUNvbmZpZ1NlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhdXRoUmVkaXJlY3RTZXJ2aWNlOiBBdXRoUmVkaXJlY3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgZmVhdHVyZUNvbmZpZ1NlcnZpY2U6IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICkge31cblxuICBjYW5BY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldFVzZXJUb2tlbigpLFxuICAgICAgdGhpcy5jYXJ0U2VydmljZS5nZXRBc3NpZ25lZFVzZXIoKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKChbdG9rZW4sIHVzZXJdOiBbVXNlclRva2VuLCBVc2VyXSkgPT4ge1xuICAgICAgICBpZiAoIXRva2VuLmFjY2Vzc190b2tlbikge1xuICAgICAgICAgIGlmICh0aGlzLmNhcnRTZXJ2aWNlLmlzR3Vlc3RDYXJ0KCkpIHtcbiAgICAgICAgICAgIHJldHVybiBCb29sZWFuKHVzZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5mZWF0dXJlQ29uZmlnU2VydmljZS5pc0VuYWJsZWQoJ2d1ZXN0Q2hlY2tvdXQnKSkge1xuICAgICAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdsb2dpbicgfSwgeyBmb3JjZWQ6IHRydWUgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAnbG9naW4nIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmF1dGhSZWRpcmVjdFNlcnZpY2UucmVwb3J0QXV0aEd1YXJkKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICEhdG9rZW4uYWNjZXNzX3Rva2VuO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=