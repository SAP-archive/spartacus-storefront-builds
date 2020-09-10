import { __decorate, __read } from "tslib";
import { Injectable } from '@angular/core';
import { ActiveCartService, AuthRedirectService, AuthService, RoutingService, User, UserToken, UserService, B2BUser, GlobalMessageService, GlobalMessageType, B2BUserGroup, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { CheckoutConfigService } from '../services/checkout-config.service';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "../services/checkout-config.service";
var CheckoutAuthGuard = /** @class */ (function () {
    function CheckoutAuthGuard(routingService, authService, authRedirectService, checkoutConfigService, activeCartService, userService, globalMessageService) {
        this.routingService = routingService;
        this.authService = authService;
        this.authRedirectService = authRedirectService;
        this.checkoutConfigService = checkoutConfigService;
        this.activeCartService = activeCartService;
        this.userService = userService;
        this.globalMessageService = globalMessageService;
    }
    CheckoutAuthGuard.prototype.canActivate = function () {
        var _this = this;
        return combineLatest([
            this.authService.getUserToken(),
            this.activeCartService.getAssignedUser(),
            this.userService.get(),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 3), token = _b[0], cartUser = _b[1], user = _b[2];
            if (!token.access_token) {
                if (_this.activeCartService.isGuestCart()) {
                    return Boolean(cartUser);
                }
                if (_this.checkoutConfigService.isGuestCheckout()) {
                    _this.routingService.go({ cxRoute: 'login' }, { forced: true });
                }
                else {
                    _this.routingService.go({ cxRoute: 'login' });
                }
                _this.authRedirectService.reportAuthGuard();
            }
            else if ('roles' in user) {
                var roles = user.roles;
                if (roles.includes(B2BUserGroup.B2B_CUSTOMER_GROUP)) {
                    return true;
                }
                else {
                    _this.globalMessageService.add({ key: 'checkout.invalid.accountType' }, GlobalMessageType.MSG_TYPE_WARNING);
                    return false;
                }
            }
            return !!token.access_token;
        }));
    };
    CheckoutAuthGuard.ctorParameters = function () { return [
        { type: RoutingService },
        { type: AuthService },
        { type: AuthRedirectService },
        { type: CheckoutConfigService },
        { type: ActiveCartService },
        { type: UserService },
        { type: GlobalMessageService }
    ]; };
    CheckoutAuthGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutAuthGuard_Factory() { return new CheckoutAuthGuard(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i1.AuthRedirectService), i0.ɵɵinject(i2.CheckoutConfigService), i0.ɵɵinject(i1.ActiveCartService), i0.ɵɵinject(i1.UserService), i0.ɵɵinject(i1.GlobalMessageService)); }, token: CheckoutAuthGuard, providedIn: "root" });
    CheckoutAuthGuard = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CheckoutAuthGuard);
    return CheckoutAuthGuard;
}());
export { CheckoutAuthGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NoZWNrb3V0L2d1YXJkcy9jaGVja291dC1hdXRoLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsbUJBQW1CLEVBQ25CLFdBQVcsRUFDWCxjQUFjLEVBQ2QsSUFBSSxFQUNKLFNBQVMsRUFDVCxXQUFXLEVBQ1gsT0FBTyxFQUNQLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsWUFBWSxHQUNiLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7Ozs7QUFLNUU7SUFDRSwyQkFDWSxjQUE4QixFQUM5QixXQUF3QixFQUN4QixtQkFBd0MsRUFDeEMscUJBQTRDLEVBQzVDLGlCQUFvQyxFQUNwQyxXQUF3QixFQUN4QixvQkFBMEM7UUFOMUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDbkQsQ0FBQztJQUVKLHVDQUFXLEdBQVg7UUFBQSxpQkFnQ0M7UUEvQkMsT0FBTyxhQUFhLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRTtZQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRTtTQUN2QixDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUcsQ0FBQyxVQUFDLEVBQTBEO2dCQUExRCxrQkFBMEQsRUFBekQsYUFBSyxFQUFFLGdCQUFRLEVBQUUsWUFBSTtZQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRTtnQkFDdkIsSUFBSSxLQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEVBQUU7b0JBQ3hDLE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUMxQjtnQkFDRCxJQUFJLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLEVBQUUsRUFBRTtvQkFDaEQsS0FBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztpQkFDaEU7cUJBQU07b0JBQ0wsS0FBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztpQkFDOUM7Z0JBQ0QsS0FBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQzVDO2lCQUFNLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDMUIsSUFBTSxLQUFLLEdBQWEsSUFBSyxDQUFDLEtBQUssQ0FBQztnQkFDcEMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO29CQUNuRCxPQUFPLElBQUksQ0FBQztpQkFDYjtxQkFBTTtvQkFDTCxLQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMzQixFQUFFLEdBQUcsRUFBRSw4QkFBOEIsRUFBRSxFQUN2QyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FDbkMsQ0FBQztvQkFDRixPQUFPLEtBQUssQ0FBQztpQkFDZDthQUNGO1lBQ0QsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Z0JBekMyQixjQUFjO2dCQUNqQixXQUFXO2dCQUNILG1CQUFtQjtnQkFDakIscUJBQXFCO2dCQUN6QixpQkFBaUI7Z0JBQ3ZCLFdBQVc7Z0JBQ0Ysb0JBQW9COzs7SUFSM0MsaUJBQWlCO1FBSDdCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxpQkFBaUIsQ0E0QzdCOzRCQWxFRDtDQWtFQyxBQTVDRCxJQTRDQztTQTVDWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBBY3RpdmVDYXJ0U2VydmljZSxcbiAgQXV0aFJlZGlyZWN0U2VydmljZSxcbiAgQXV0aFNlcnZpY2UsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBVc2VyLFxuICBVc2VyVG9rZW4sXG4gIFVzZXJTZXJ2aWNlLFxuICBCMkJVc2VyLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIEIyQlVzZXJHcm91cCxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENoZWNrb3V0Q29uZmlnU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NoZWNrb3V0LWNvbmZpZy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0QXV0aEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGF1dGhSZWRpcmVjdFNlcnZpY2U6IEF1dGhSZWRpcmVjdFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0Q29uZmlnU2VydmljZTogQ2hlY2tvdXRDb25maWdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlXG4gICkge31cblxuICBjYW5BY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldFVzZXJUb2tlbigpLFxuICAgICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5nZXRBc3NpZ25lZFVzZXIoKSxcbiAgICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0KCksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW3Rva2VuLCBjYXJ0VXNlciwgdXNlcl06IFtVc2VyVG9rZW4sIFVzZXIsIFVzZXIgfCBCMkJVc2VyXSkgPT4ge1xuICAgICAgICBpZiAoIXRva2VuLmFjY2Vzc190b2tlbikge1xuICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmlzR3Vlc3RDYXJ0KCkpIHtcbiAgICAgICAgICAgIHJldHVybiBCb29sZWFuKGNhcnRVc2VyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuY2hlY2tvdXRDb25maWdTZXJ2aWNlLmlzR3Vlc3RDaGVja291dCgpKSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgY3hSb3V0ZTogJ2xvZ2luJyB9LCB7IGZvcmNlZDogdHJ1ZSB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdsb2dpbicgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuYXV0aFJlZGlyZWN0U2VydmljZS5yZXBvcnRBdXRoR3VhcmQoKTtcbiAgICAgICAgfSBlbHNlIGlmICgncm9sZXMnIGluIHVzZXIpIHtcbiAgICAgICAgICBjb25zdCByb2xlcyA9ICg8QjJCVXNlcj51c2VyKS5yb2xlcztcbiAgICAgICAgICBpZiAocm9sZXMuaW5jbHVkZXMoQjJCVXNlckdyb3VwLkIyQl9DVVNUT01FUl9HUk9VUCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICAgICAgeyBrZXk6ICdjaGVja291dC5pbnZhbGlkLmFjY291bnRUeXBlJyB9LFxuICAgICAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9XQVJOSU5HXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gISF0b2tlbi5hY2Nlc3NfdG9rZW47XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==