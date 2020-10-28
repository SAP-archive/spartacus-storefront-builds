import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActiveCartService, AuthRedirectService, AuthService, B2BUserGroup, GlobalMessageService, GlobalMessageType, SemanticPathService, UserService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { CheckoutConfigService } from '../services/checkout-config.service';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "../services/checkout-config.service";
import * as i3 from "@angular/router";
export class CheckoutAuthGuard {
    constructor(authService, authRedirectService, checkoutConfigService, activeCartService, semanticPathService, router, userService, globalMessageService) {
        this.authService = authService;
        this.authRedirectService = authRedirectService;
        this.checkoutConfigService = checkoutConfigService;
        this.activeCartService = activeCartService;
        this.semanticPathService = semanticPathService;
        this.router = router;
        this.userService = userService;
        this.globalMessageService = globalMessageService;
    }
    canActivate() {
        return combineLatest([
            this.authService.isUserLoggedIn(),
            this.activeCartService.getAssignedUser(),
            this.userService.get(),
        ]).pipe(map(([isLoggedIn, cartUser, user]) => {
            if (!isLoggedIn) {
                if (this.activeCartService.isGuestCart()) {
                    return Boolean(cartUser);
                }
                this.authRedirectService.reportAuthGuard();
                if (this.checkoutConfigService.isGuestCheckout()) {
                    return this.router.createUrlTree([this.semanticPathService.get('login')], { queryParams: { forced: true } });
                }
                else {
                    return this.router.parseUrl(this.semanticPathService.get('login'));
                }
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
            return isLoggedIn;
        }));
    }
}
CheckoutAuthGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutAuthGuard_Factory() { return new CheckoutAuthGuard(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i1.AuthRedirectService), i0.ɵɵinject(i2.CheckoutConfigService), i0.ɵɵinject(i1.ActiveCartService), i0.ɵɵinject(i1.SemanticPathService), i0.ɵɵinject(i3.Router), i0.ɵɵinject(i1.UserService), i0.ɵɵinject(i1.GlobalMessageService)); }, token: CheckoutAuthGuard, providedIn: "root" });
CheckoutAuthGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
CheckoutAuthGuard.ctorParameters = () => [
    { type: AuthService },
    { type: AuthRedirectService },
    { type: CheckoutConfigService },
    { type: ActiveCartService },
    { type: SemanticPathService },
    { type: Router },
    { type: UserService },
    { type: GlobalMessageService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL2NoZWNrb3V0L2d1YXJkcy9jaGVja291dC1hdXRoLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFlLE1BQU0sRUFBVyxNQUFNLGlCQUFpQixDQUFDO0FBQy9ELE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsbUJBQW1CLEVBQ25CLFdBQVcsRUFFWCxZQUFZLEVBQ1osb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixtQkFBbUIsRUFFbkIsV0FBVyxHQUNaLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7Ozs7O0FBSzVFLE1BQU0sT0FBTyxpQkFBaUI7SUFDNUIsWUFDWSxXQUF3QixFQUN4QixtQkFBd0MsRUFDeEMscUJBQTRDLEVBQzVDLGlCQUFvQyxFQUNwQyxtQkFBd0MsRUFDeEMsTUFBYyxFQUNkLFdBQXdCLEVBQ3hCLG9CQUEwQztRQVAxQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ25ELENBQUM7SUFFSixXQUFXO1FBQ1QsT0FBTyxhQUFhLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUU7WUFDakMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRTtZQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRTtTQUN2QixDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQWtDLEVBQUUsRUFBRTtZQUNwRSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNmLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxFQUFFO29CQUN4QyxPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDMUI7Z0JBQ0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUMzQyxJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLEVBQUUsRUFBRTtvQkFDaEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FDOUIsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQ3ZDLEVBQUUsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLENBQ2xDLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7aUJBQ3BFO2FBQ0Y7aUJBQU0sSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO2dCQUMxQixNQUFNLEtBQUssR0FBYSxJQUFLLENBQUMsS0FBSyxDQUFDO2dCQUNwQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLEVBQUU7b0JBQ25ELE9BQU8sSUFBSSxDQUFDO2lCQUNiO3FCQUFNO29CQUNMLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzNCLEVBQUUsR0FBRyxFQUFFLDhCQUE4QixFQUFFLEVBQ3ZDLGlCQUFpQixDQUFDLGdCQUFnQixDQUNuQyxDQUFDO29CQUNGLE9BQU8sS0FBSyxDQUFDO2lCQUNkO2FBQ0Y7WUFDRCxPQUFPLFVBQVUsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7OztZQWxERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQWZDLFdBQVc7WUFEWCxtQkFBbUI7WUFZWixxQkFBcUI7WUFiNUIsaUJBQWlCO1lBT2pCLG1CQUFtQjtZQVRDLE1BQU07WUFXMUIsV0FBVztZQUpYLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXIsIFVybFRyZWUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQWN0aXZlQ2FydFNlcnZpY2UsXG4gIEF1dGhSZWRpcmVjdFNlcnZpY2UsXG4gIEF1dGhTZXJ2aWNlLFxuICBCMkJVc2VyLFxuICBCMkJVc2VyR3JvdXAsXG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbiAgU2VtYW50aWNQYXRoU2VydmljZSxcbiAgVXNlcixcbiAgVXNlclNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDaGVja291dENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jaGVja291dC1jb25maWcuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYXV0aFJlZGlyZWN0U2VydmljZTogQXV0aFJlZGlyZWN0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRDb25maWdTZXJ2aWNlOiBDaGVja291dENvbmZpZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgc2VtYW50aWNQYXRoU2VydmljZTogU2VtYW50aWNQYXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJvdGVjdGVkIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlXG4gICkge31cblxuICBjYW5BY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5hdXRoU2VydmljZS5pc1VzZXJMb2dnZWRJbigpLFxuICAgICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5nZXRBc3NpZ25lZFVzZXIoKSxcbiAgICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0KCksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW2lzTG9nZ2VkSW4sIGNhcnRVc2VyLCB1c2VyXTogW2Jvb2xlYW4sIFVzZXIsIFVzZXIgfCBCMkJVc2VyXSkgPT4ge1xuICAgICAgICBpZiAoIWlzTG9nZ2VkSW4pIHtcbiAgICAgICAgICBpZiAodGhpcy5hY3RpdmVDYXJ0U2VydmljZS5pc0d1ZXN0Q2FydCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gQm9vbGVhbihjYXJ0VXNlcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuYXV0aFJlZGlyZWN0U2VydmljZS5yZXBvcnRBdXRoR3VhcmQoKTtcbiAgICAgICAgICBpZiAodGhpcy5jaGVja291dENvbmZpZ1NlcnZpY2UuaXNHdWVzdENoZWNrb3V0KCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJvdXRlci5jcmVhdGVVcmxUcmVlKFxuICAgICAgICAgICAgICBbdGhpcy5zZW1hbnRpY1BhdGhTZXJ2aWNlLmdldCgnbG9naW4nKV0sXG4gICAgICAgICAgICAgIHsgcXVlcnlQYXJhbXM6IHsgZm9yY2VkOiB0cnVlIH0gfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm91dGVyLnBhcnNlVXJsKHRoaXMuc2VtYW50aWNQYXRoU2VydmljZS5nZXQoJ2xvZ2luJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICgncm9sZXMnIGluIHVzZXIpIHtcbiAgICAgICAgICBjb25zdCByb2xlcyA9ICg8QjJCVXNlcj51c2VyKS5yb2xlcztcbiAgICAgICAgICBpZiAocm9sZXMuaW5jbHVkZXMoQjJCVXNlckdyb3VwLkIyQl9DVVNUT01FUl9HUk9VUCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICAgICAgeyBrZXk6ICdjaGVja291dC5pbnZhbGlkLmFjY291bnRUeXBlJyB9LFxuICAgICAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9XQVJOSU5HXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNMb2dnZWRJbjtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19