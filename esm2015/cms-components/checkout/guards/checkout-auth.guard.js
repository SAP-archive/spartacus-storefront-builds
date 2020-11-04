import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActiveCartService, AuthRedirectService, AuthService, B2BUserGroup, GlobalMessageService, GlobalMessageType, SemanticPathService, UserService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map, filter } from 'rxjs/operators';
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
            this.activeCartService.isStable(),
        ]).pipe(filter(([, , , isStable]) => Boolean(isStable)), map(([isLoggedIn, cartUser, user]) => {
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
                this.globalMessageService.add({ key: 'checkout.invalid.accountType' }, GlobalMessageType.MSG_TYPE_WARNING);
                return false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL2NoZWNrb3V0L2d1YXJkcy9jaGVja291dC1hdXRoLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFlLE1BQU0sRUFBVyxNQUFNLGlCQUFpQixDQUFDO0FBQy9ELE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsbUJBQW1CLEVBQ25CLFdBQVcsRUFFWCxZQUFZLEVBQ1osb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixtQkFBbUIsRUFFbkIsV0FBVyxHQUNaLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7OztBQUs1RSxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLFlBQ1ksV0FBd0IsRUFDeEIsbUJBQXdDLEVBQ3hDLHFCQUE0QyxFQUM1QyxpQkFBb0MsRUFDcEMsbUJBQXdDLEVBQ3hDLE1BQWMsRUFDZCxXQUF3QixFQUN4QixvQkFBMEM7UUFQMUMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUNuRCxDQUFDO0lBRUosV0FBVztRQUNULE9BQU8sYUFBYSxDQUFDO1lBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRTtTQUNsQyxDQUFDLENBQUMsSUFBSSxDQUNMLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxBQUFELEVBQUcsQUFBRCxFQUFHLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsRUFDL0MsR0FBRyxDQUNELENBQUMsQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FLM0IsRUFBRSxFQUFFO1lBQ0gsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDZixJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsRUFBRTtvQkFDeEMsT0FBTyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQzFCO2dCQUNELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDM0MsSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsZUFBZSxFQUFFLEVBQUU7b0JBQ2hELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQzlCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUN2QyxFQUFFLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUNsQyxDQUFDO2lCQUNIO3FCQUFNO29CQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQ3pCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQ3RDLENBQUM7aUJBQ0g7YUFDRjtpQkFBTSxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7Z0JBQzFCLE1BQU0sS0FBSyxHQUFhLElBQUssQ0FBQyxLQUFLLENBQUM7Z0JBQ3BDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsRUFBRTtvQkFDbkQsT0FBTyxJQUFJLENBQUM7aUJBQ2I7Z0JBQ0QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FDM0IsRUFBRSxHQUFHLEVBQUUsOEJBQThCLEVBQUUsRUFDdkMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQ25DLENBQUM7Z0JBQ0YsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUNELE9BQU8sVUFBVSxDQUFDO1FBQ3BCLENBQUMsQ0FDRixDQUNGLENBQUM7SUFDSixDQUFDOzs7O1lBNURGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBZkMsV0FBVztZQURYLG1CQUFtQjtZQVlaLHFCQUFxQjtZQWI1QixpQkFBaUI7WUFPakIsbUJBQW1CO1lBVEMsTUFBTTtZQVcxQixXQUFXO1lBSlgsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlciwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBBY3RpdmVDYXJ0U2VydmljZSxcbiAgQXV0aFJlZGlyZWN0U2VydmljZSxcbiAgQXV0aFNlcnZpY2UsXG4gIEIyQlVzZXIsXG4gIEIyQlVzZXJHcm91cCxcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxuICBTZW1hbnRpY1BhdGhTZXJ2aWNlLFxuICBVc2VyLFxuICBVc2VyU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRBdXRoR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGF1dGhSZWRpcmVjdFNlcnZpY2U6IEF1dGhSZWRpcmVjdFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0Q29uZmlnU2VydmljZTogQ2hlY2tvdXRDb25maWdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHNlbWFudGljUGF0aFNlcnZpY2U6IFNlbWFudGljUGF0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRlcjogUm91dGVyLFxuICAgIHByb3RlY3RlZCB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZVxuICApIHt9XG5cbiAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4oKSxcbiAgICAgIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuZ2V0QXNzaWduZWRVc2VyKCksXG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldCgpLFxuICAgICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5pc1N0YWJsZSgpLFxuICAgIF0pLnBpcGUoXG4gICAgICBmaWx0ZXIoKFssICwgLCBpc1N0YWJsZV0pID0+IEJvb2xlYW4oaXNTdGFibGUpKSxcbiAgICAgIG1hcChcbiAgICAgICAgKFtpc0xvZ2dlZEluLCBjYXJ0VXNlciwgdXNlcl06IFtcbiAgICAgICAgICBib29sZWFuLFxuICAgICAgICAgIFVzZXIsXG4gICAgICAgICAgVXNlciB8IEIyQlVzZXIsXG4gICAgICAgICAgYm9vbGVhblxuICAgICAgICBdKSA9PiB7XG4gICAgICAgICAgaWYgKCFpc0xvZ2dlZEluKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVDYXJ0U2VydmljZS5pc0d1ZXN0Q2FydCgpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBCb29sZWFuKGNhcnRVc2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYXV0aFJlZGlyZWN0U2VydmljZS5yZXBvcnRBdXRoR3VhcmQoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZS5pc0d1ZXN0Q2hlY2tvdXQoKSkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZXIuY3JlYXRlVXJsVHJlZShcbiAgICAgICAgICAgICAgICBbdGhpcy5zZW1hbnRpY1BhdGhTZXJ2aWNlLmdldCgnbG9naW4nKV0sXG4gICAgICAgICAgICAgICAgeyBxdWVyeVBhcmFtczogeyBmb3JjZWQ6IHRydWUgfSB9XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZXIucGFyc2VVcmwoXG4gICAgICAgICAgICAgICAgdGhpcy5zZW1hbnRpY1BhdGhTZXJ2aWNlLmdldCgnbG9naW4nKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoJ3JvbGVzJyBpbiB1c2VyKSB7XG4gICAgICAgICAgICBjb25zdCByb2xlcyA9ICg8QjJCVXNlcj51c2VyKS5yb2xlcztcbiAgICAgICAgICAgIGlmIChyb2xlcy5pbmNsdWRlcyhCMkJVc2VyR3JvdXAuQjJCX0NVU1RPTUVSX0dST1VQKSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICAgICAgICB7IGtleTogJ2NoZWNrb3V0LmludmFsaWQuYWNjb3VudFR5cGUnIH0sXG4gICAgICAgICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX1dBUk5JTkdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBpc0xvZ2dlZEluO1xuICAgICAgICB9XG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuIl19