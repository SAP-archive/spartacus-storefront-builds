import { __decorate, __read } from "tslib";
import { Injectable } from '@angular/core';
import { AuthRedirectService, AuthService, CartService, RoutingService, User, UserToken, } from '@spartacus/core';
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
    CheckoutAuthGuard.prototype.canActivate = function () {
        var _this = this;
        return combineLatest([
            this.authService.getUserToken(),
            this.cartService.getAssignedUser(),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 2), token = _b[0], user = _b[1];
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
        }));
    };
    CheckoutAuthGuard.ctorParameters = function () { return [
        { type: RoutingService },
        { type: AuthService },
        { type: AuthRedirectService },
        { type: CartService },
        { type: CheckoutConfigService }
    ]; };
    CheckoutAuthGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutAuthGuard_Factory() { return new CheckoutAuthGuard(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i1.AuthRedirectService), i0.ɵɵinject(i1.CartService), i0.ɵɵinject(i2.CheckoutConfigService)); }, token: CheckoutAuthGuard, providedIn: "root" });
    CheckoutAuthGuard = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CheckoutAuthGuard);
    return CheckoutAuthGuard;
}());
export { CheckoutAuthGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NoZWNrb3V0L2d1YXJkcy9jaGVja291dC1hdXRoLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsV0FBVyxFQUNYLFdBQVcsRUFDWCxjQUFjLEVBQ2QsSUFBSSxFQUNKLFNBQVMsR0FDVixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7O0FBSzVFO0lBQ0UsMkJBQ1UsY0FBOEIsRUFDOUIsV0FBd0IsRUFDeEIsbUJBQXdDLEVBQ3hDLFdBQXdCLEVBQ3hCLHFCQUE0QztRQUo1QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBQ25ELENBQUM7SUFFSix1Q0FBVyxHQUFYO1FBQUEsaUJBb0JDO1FBbkJDLE9BQU8sYUFBYSxDQUFDO1lBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFO1lBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFO1NBQ25DLENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRyxDQUFDLFVBQUMsRUFBZ0M7Z0JBQWhDLGtCQUFnQyxFQUEvQixhQUFLLEVBQUUsWUFBSTtZQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFO2dCQUN2QixJQUFJLEtBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEVBQUU7b0JBQ2xDLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN0QjtnQkFDRCxJQUFJLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLEVBQUUsRUFBRTtvQkFDaEQsS0FBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztpQkFDaEU7cUJBQU07b0JBQ0wsS0FBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztpQkFDOUM7Z0JBQ0QsS0FBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQzVDO1lBQ0QsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Z0JBM0J5QixjQUFjO2dCQUNqQixXQUFXO2dCQUNILG1CQUFtQjtnQkFDM0IsV0FBVztnQkFDRCxxQkFBcUI7OztJQU4zQyxpQkFBaUI7UUFIN0IsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGlCQUFpQixDQThCN0I7NEJBL0NEO0NBK0NDLEFBOUJELElBOEJDO1NBOUJZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEF1dGhSZWRpcmVjdFNlcnZpY2UsXG4gIEF1dGhTZXJ2aWNlLFxuICBDYXJ0U2VydmljZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFVzZXIsXG4gIFVzZXJUb2tlbixcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENoZWNrb3V0Q29uZmlnU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NoZWNrb3V0LWNvbmZpZy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0QXV0aEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhSZWRpcmVjdFNlcnZpY2U6IEF1dGhSZWRpcmVjdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGVja291dENvbmZpZ1NlcnZpY2U6IENoZWNrb3V0Q29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRVc2VyVG9rZW4oKSxcbiAgICAgIHRoaXMuY2FydFNlcnZpY2UuZ2V0QXNzaWduZWRVc2VyKCksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW3Rva2VuLCB1c2VyXTogW1VzZXJUb2tlbiwgVXNlcl0pID0+IHtcbiAgICAgICAgaWYgKCF0b2tlbi5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgICBpZiAodGhpcy5jYXJ0U2VydmljZS5pc0d1ZXN0Q2FydCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gQm9vbGVhbih1c2VyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuY2hlY2tvdXRDb25maWdTZXJ2aWNlLmlzR3Vlc3RDaGVja291dCgpKSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgY3hSb3V0ZTogJ2xvZ2luJyB9LCB7IGZvcmNlZDogdHJ1ZSB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdsb2dpbicgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuYXV0aFJlZGlyZWN0U2VydmljZS5yZXBvcnRBdXRoR3VhcmQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gISF0b2tlbi5hY2Nlc3NfdG9rZW47XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==