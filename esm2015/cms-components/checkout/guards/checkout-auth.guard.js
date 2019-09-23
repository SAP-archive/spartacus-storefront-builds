/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AuthRedirectService, AuthService, CartService, RoutingService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { CheckoutConfigService } from '../services/checkout-config.service';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "../services/checkout-config.service";
export class CheckoutAuthGuard {
    /**
     * @param {?} routingService
     * @param {?} authService
     * @param {?} authRedirectService
     * @param {?} cartService
     * @param {?} checkoutConfigService
     */
    constructor(routingService, authService, authRedirectService, cartService, checkoutConfigService) {
        this.routingService = routingService;
        this.authService = authService;
        this.authRedirectService = authRedirectService;
        this.cartService = cartService;
        this.checkoutConfigService = checkoutConfigService;
    }
    /**
     * @return {?}
     */
    canActivate() {
        return combineLatest([
            this.authService.getUserToken(),
            this.cartService.getAssignedUser(),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([token, user]) => {
            if (!token.access_token) {
                if (this.cartService.isGuestCart()) {
                    return Boolean(user);
                }
                if (this.checkoutConfigService.isGuestCheckout()) {
                    this.routingService.go({ cxRoute: 'login' }, { forced: true });
                }
                else {
                    this.routingService.go({ cxRoute: 'login' });
                }
                this.authRedirectService.reportAuthGuard();
            }
            return !!token.access_token;
        })));
    }
}
CheckoutAuthGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CheckoutAuthGuard.ctorParameters = () => [
    { type: RoutingService },
    { type: AuthService },
    { type: AuthRedirectService },
    { type: CartService },
    { type: CheckoutConfigService }
];
/** @nocollapse */ CheckoutAuthGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CheckoutAuthGuard_Factory() { return new CheckoutAuthGuard(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i1.AuthRedirectService), i0.ɵɵinject(i1.CartService), i0.ɵɵinject(i2.CheckoutConfigService)); }, token: CheckoutAuthGuard, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NoZWNrb3V0L2d1YXJkcy9jaGVja291dC1hdXRoLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsV0FBVyxFQUNYLFdBQVcsRUFDWCxjQUFjLEdBR2YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7OztBQUs1RSxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7OztJQUM1QixZQUNVLGNBQThCLEVBQzlCLFdBQXdCLEVBQ3hCLG1CQUF3QyxFQUN4QyxXQUF3QixFQUN4QixxQkFBNEM7UUFKNUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUNuRCxDQUFDOzs7O0lBRUosV0FBVztRQUNULE9BQU8sYUFBYSxDQUFDO1lBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFO1lBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFO1NBQ25DLENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFvQixFQUFFLEVBQUU7WUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUU7Z0JBQ3ZCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsRUFBRTtvQkFDbEMsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3RCO2dCQUNELElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLGVBQWUsRUFBRSxFQUFFO29CQUNoRCxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2lCQUNoRTtxQkFBTTtvQkFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO2lCQUM5QztnQkFDRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDNUM7WUFDRCxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQzlCLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7WUFoQ0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBVkMsY0FBYztZQUZkLFdBQVc7WUFEWCxtQkFBbUI7WUFFbkIsV0FBVztZQU9KLHFCQUFxQjs7Ozs7Ozs7SUFPMUIsMkNBQXNDOzs7OztJQUN0Qyx3Q0FBZ0M7Ozs7O0lBQ2hDLGdEQUFnRDs7Ozs7SUFDaEQsd0NBQWdDOzs7OztJQUNoQyxrREFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBBdXRoUmVkaXJlY3RTZXJ2aWNlLFxuICBBdXRoU2VydmljZSxcbiAgQ2FydFNlcnZpY2UsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBVc2VyLFxuICBVc2VyVG9rZW4sXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDaGVja291dENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jaGVja291dC1jb25maWcuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhdXRoUmVkaXJlY3RTZXJ2aWNlOiBBdXRoUmVkaXJlY3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2hlY2tvdXRDb25maWdTZXJ2aWNlOiBDaGVja291dENvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIGNhbkFjdGl2YXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlclRva2VuKCksXG4gICAgICB0aGlzLmNhcnRTZXJ2aWNlLmdldEFzc2lnbmVkVXNlcigpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFt0b2tlbiwgdXNlcl06IFtVc2VyVG9rZW4sIFVzZXJdKSA9PiB7XG4gICAgICAgIGlmICghdG9rZW4uYWNjZXNzX3Rva2VuKSB7XG4gICAgICAgICAgaWYgKHRoaXMuY2FydFNlcnZpY2UuaXNHdWVzdENhcnQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIEJvb2xlYW4odXNlcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZS5pc0d1ZXN0Q2hlY2tvdXQoKSkge1xuICAgICAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdsb2dpbicgfSwgeyBmb3JjZWQ6IHRydWUgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAnbG9naW4nIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmF1dGhSZWRpcmVjdFNlcnZpY2UucmVwb3J0QXV0aEd1YXJkKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICEhdG9rZW4uYWNjZXNzX3Rva2VuO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=