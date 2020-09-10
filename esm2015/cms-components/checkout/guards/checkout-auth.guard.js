import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ActiveCartService, AuthRedirectService, AuthService, RoutingService, User, UserToken, UserService, B2BUser, GlobalMessageService, GlobalMessageType, B2BUserGroup, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { CheckoutConfigService } from '../services/checkout-config.service';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "../services/checkout-config.service";
let CheckoutAuthGuard = class CheckoutAuthGuard {
    constructor(routingService, authService, authRedirectService, checkoutConfigService, activeCartService, userService, globalMessageService) {
        this.routingService = routingService;
        this.authService = authService;
        this.authRedirectService = authRedirectService;
        this.checkoutConfigService = checkoutConfigService;
        this.activeCartService = activeCartService;
        this.userService = userService;
        this.globalMessageService = globalMessageService;
    }
    canActivate() {
        return combineLatest([
            this.authService.getUserToken(),
            this.activeCartService.getAssignedUser(),
            this.userService.get(),
        ]).pipe(map(([token, cartUser, user]) => {
            if (!token.access_token) {
                if (this.activeCartService.isGuestCart()) {
                    return Boolean(cartUser);
                }
                if (this.checkoutConfigService.isGuestCheckout()) {
                    this.routingService.go({ cxRoute: 'login' }, { forced: true });
                }
                else {
                    this.routingService.go({ cxRoute: 'login' });
                }
                this.authRedirectService.reportAuthGuard();
            }
            else if ('roles' in user) {
                const roles = user.roles;
                if (roles.includes(B2BUserGroup.B2B_CUSTOMER_GROUP)) {
                    return true;
                }
                else {
                    this.globalMessageService.add({ key: 'checkout.invalid.accountType' }, GlobalMessageType.MSG_TYPE_WARNING);
                    return false;
                }
            }
            return !!token.access_token;
        }));
    }
};
CheckoutAuthGuard.ctorParameters = () => [
    { type: RoutingService },
    { type: AuthService },
    { type: AuthRedirectService },
    { type: CheckoutConfigService },
    { type: ActiveCartService },
    { type: UserService },
    { type: GlobalMessageService }
];
CheckoutAuthGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutAuthGuard_Factory() { return new CheckoutAuthGuard(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i1.AuthRedirectService), i0.ɵɵinject(i2.CheckoutConfigService), i0.ɵɵinject(i1.ActiveCartService), i0.ɵɵinject(i1.UserService), i0.ɵɵinject(i1.GlobalMessageService)); }, token: CheckoutAuthGuard, providedIn: "root" });
CheckoutAuthGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CheckoutAuthGuard);
export { CheckoutAuthGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NoZWNrb3V0L2d1YXJkcy9jaGVja291dC1hdXRoLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsbUJBQW1CLEVBQ25CLFdBQVcsRUFDWCxjQUFjLEVBQ2QsSUFBSSxFQUNKLFNBQVMsRUFDVCxXQUFXLEVBQ1gsT0FBTyxFQUNQLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsWUFBWSxHQUNiLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7Ozs7QUFLNUUsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFDNUIsWUFDWSxjQUE4QixFQUM5QixXQUF3QixFQUN4QixtQkFBd0MsRUFDeEMscUJBQTRDLEVBQzVDLGlCQUFvQyxFQUNwQyxXQUF3QixFQUN4QixvQkFBMEM7UUFOMUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDbkQsQ0FBQztJQUVKLFdBQVc7UUFDVCxPQUFPLGFBQWEsQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRTtZQUMvQixJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFO1NBQ3ZCLENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBb0MsRUFBRSxFQUFFO1lBQ2pFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFO2dCQUN2QixJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsRUFBRTtvQkFDeEMsT0FBTyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQzFCO2dCQUNELElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLGVBQWUsRUFBRSxFQUFFO29CQUNoRCxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2lCQUNoRTtxQkFBTTtvQkFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO2lCQUM5QztnQkFDRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDNUM7aUJBQU0sSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO2dCQUMxQixNQUFNLEtBQUssR0FBYSxJQUFLLENBQUMsS0FBSyxDQUFDO2dCQUNwQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLEVBQUU7b0JBQ25ELE9BQU8sSUFBSSxDQUFDO2lCQUNiO3FCQUFNO29CQUNMLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzNCLEVBQUUsR0FBRyxFQUFFLDhCQUE4QixFQUFFLEVBQ3ZDLGlCQUFpQixDQUFDLGdCQUFnQixDQUNuQyxDQUFDO29CQUNGLE9BQU8sS0FBSyxDQUFDO2lCQUNkO2FBQ0Y7WUFDRCxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTs7WUExQzZCLGNBQWM7WUFDakIsV0FBVztZQUNILG1CQUFtQjtZQUNqQixxQkFBcUI7WUFDekIsaUJBQWlCO1lBQ3ZCLFdBQVc7WUFDRixvQkFBb0I7OztBQVIzQyxpQkFBaUI7SUFIN0IsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGlCQUFpQixDQTRDN0I7U0E1Q1ksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQWN0aXZlQ2FydFNlcnZpY2UsXG4gIEF1dGhSZWRpcmVjdFNlcnZpY2UsXG4gIEF1dGhTZXJ2aWNlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgVXNlcixcbiAgVXNlclRva2VuLFxuICBVc2VyU2VydmljZSxcbiAgQjJCVXNlcixcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxuICBCMkJVc2VyR3JvdXAsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDaGVja291dENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jaGVja291dC1jb25maWcuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhdXRoUmVkaXJlY3RTZXJ2aWNlOiBBdXRoUmVkaXJlY3RTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dENvbmZpZ1NlcnZpY2U6IENoZWNrb3V0Q29uZmlnU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZVxuICApIHt9XG5cbiAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRVc2VyVG9rZW4oKSxcbiAgICAgIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuZ2V0QXNzaWduZWRVc2VyKCksXG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldCgpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFt0b2tlbiwgY2FydFVzZXIsIHVzZXJdOiBbVXNlclRva2VuLCBVc2VyLCBVc2VyIHwgQjJCVXNlcl0pID0+IHtcbiAgICAgICAgaWYgKCF0b2tlbi5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgICBpZiAodGhpcy5hY3RpdmVDYXJ0U2VydmljZS5pc0d1ZXN0Q2FydCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gQm9vbGVhbihjYXJ0VXNlcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZS5pc0d1ZXN0Q2hlY2tvdXQoKSkge1xuICAgICAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdsb2dpbicgfSwgeyBmb3JjZWQ6IHRydWUgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAnbG9naW4nIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmF1dGhSZWRpcmVjdFNlcnZpY2UucmVwb3J0QXV0aEd1YXJkKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoJ3JvbGVzJyBpbiB1c2VyKSB7XG4gICAgICAgICAgY29uc3Qgcm9sZXMgPSAoPEIyQlVzZXI+dXNlcikucm9sZXM7XG4gICAgICAgICAgaWYgKHJvbGVzLmluY2x1ZGVzKEIyQlVzZXJHcm91cC5CMkJfQ1VTVE9NRVJfR1JPVVApKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgICAgICAgIHsga2V5OiAnY2hlY2tvdXQuaW52YWxpZC5hY2NvdW50VHlwZScgfSxcbiAgICAgICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfV0FSTklOR1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICEhdG9rZW4uYWNjZXNzX3Rva2VuO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=