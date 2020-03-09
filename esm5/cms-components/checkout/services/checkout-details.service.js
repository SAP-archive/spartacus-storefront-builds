import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ActiveCartService, Address, CheckoutDeliveryService, CheckoutPaymentService, CheckoutService, OCC_USER_ID_ANONYMOUS, PaymentDetails, } from '@spartacus/core';
import { filter, map, shareReplay, skipWhile, switchMap, tap, } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var CheckoutDetailsService = /** @class */ (function () {
    function CheckoutDetailsService(checkoutService, checkoutDeliveryService, checkoutPaymentService, activeCartService) {
        var _this = this;
        this.checkoutService = checkoutService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutPaymentService = checkoutPaymentService;
        this.activeCartService = activeCartService;
        this.cartId$ = this.activeCartService.getActive().pipe(map(function (cartData) {
            if ((cartData.user && cartData.user.uid === OCC_USER_ID_ANONYMOUS) ||
                _this.activeCartService.isGuestCart()) {
                return cartData.guid;
            }
            return cartData.code;
        }), filter(function (cartId) { return !!cartId; }));
        this.getCheckoutDetailsLoaded$ = this.cartId$.pipe(tap(function (cartId) { return _this.checkoutService.loadCheckoutDetails(cartId); }), shareReplay(1), switchMap(function () { return _this.checkoutService.getCheckoutDetailsLoaded(); }), skipWhile(function (loaded) { return !loaded; }));
    }
    CheckoutDetailsService.prototype.getDeliveryAddress = function () {
        var _this = this;
        return this.getCheckoutDetailsLoaded$.pipe(switchMap(function () { return _this.checkoutDeliveryService.getDeliveryAddress(); }));
    };
    CheckoutDetailsService.prototype.getSelectedDeliveryModeCode = function () {
        var _this = this;
        return this.getCheckoutDetailsLoaded$.pipe(switchMap(function () {
            return _this.checkoutDeliveryService.getSelectedDeliveryModeCode();
        }));
    };
    CheckoutDetailsService.prototype.getPaymentDetails = function () {
        var _this = this;
        return this.getCheckoutDetailsLoaded$.pipe(switchMap(function () { return _this.checkoutPaymentService.getPaymentDetails(); }));
    };
    CheckoutDetailsService.ctorParameters = function () { return [
        { type: CheckoutService },
        { type: CheckoutDeliveryService },
        { type: CheckoutPaymentService },
        { type: ActiveCartService }
    ]; };
    CheckoutDetailsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutDetailsService_Factory() { return new CheckoutDetailsService(i0.ɵɵinject(i1.CheckoutService), i0.ɵɵinject(i1.CheckoutDeliveryService), i0.ɵɵinject(i1.CheckoutPaymentService), i0.ɵɵinject(i1.ActiveCartService)); }, token: CheckoutDetailsService, providedIn: "root" });
    CheckoutDetailsService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CheckoutDetailsService);
    return CheckoutDetailsService;
}());
export { CheckoutDetailsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtZGV0YWlscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvc2VydmljZXMvY2hlY2tvdXQtZGV0YWlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsT0FBTyxFQUNQLHVCQUF1QixFQUN2QixzQkFBc0IsRUFDdEIsZUFBZSxFQUNmLHFCQUFxQixFQUNyQixjQUFjLEdBQ2YsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQ0wsTUFBTSxFQUNOLEdBQUcsRUFDSCxXQUFXLEVBQ1gsU0FBUyxFQUNULFNBQVMsRUFDVCxHQUFHLEdBQ0osTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBS3hCO0lBSUUsZ0NBQ1ksZUFBZ0MsRUFDaEMsdUJBQWdELEVBQ2hELHNCQUE4QyxFQUM5QyxpQkFBb0M7UUFKaEQsaUJBeUJDO1FBeEJXLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDOUMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUU5QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQ3BELEdBQUcsQ0FBQyxVQUFBLFFBQVE7WUFDVixJQUNFLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxxQkFBcUIsQ0FBQztnQkFDOUQsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxFQUNwQztnQkFDQSxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7YUFDdEI7WUFDRCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDdkIsQ0FBQyxDQUFDLEVBQ0YsTUFBTSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsQ0FBQyxDQUFDLE1BQU0sRUFBUixDQUFRLENBQUMsQ0FDM0IsQ0FBQztRQUVGLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDaEQsR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsRUFBaEQsQ0FBZ0QsQ0FBQyxFQUMvRCxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQ2QsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLHdCQUF3QixFQUFFLEVBQS9DLENBQStDLENBQUMsRUFDaEUsU0FBUyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsQ0FBQyxNQUFNLEVBQVAsQ0FBTyxDQUFDLENBQzdCLENBQUM7SUFDSixDQUFDO0lBRUQsbURBQWtCLEdBQWxCO1FBQUEsaUJBSUM7UUFIQyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQ3hDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLHVCQUF1QixDQUFDLGtCQUFrQixFQUFFLEVBQWpELENBQWlELENBQUMsQ0FDbkUsQ0FBQztJQUNKLENBQUM7SUFFRCw0REFBMkIsR0FBM0I7UUFBQSxpQkFNQztRQUxDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FDeEMsU0FBUyxDQUFDO1lBQ1IsT0FBQSxLQUFJLENBQUMsdUJBQXVCLENBQUMsMkJBQTJCLEVBQUU7UUFBMUQsQ0FBMEQsQ0FDM0QsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELGtEQUFpQixHQUFqQjtRQUFBLGlCQUlDO1FBSEMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUN4QyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxpQkFBaUIsRUFBRSxFQUEvQyxDQUErQyxDQUFDLENBQ2pFLENBQUM7SUFDSixDQUFDOztnQkE1QzRCLGVBQWU7Z0JBQ1AsdUJBQXVCO2dCQUN4QixzQkFBc0I7Z0JBQzNCLGlCQUFpQjs7O0lBUnJDLHNCQUFzQjtRQUhsQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csc0JBQXNCLENBa0RsQztpQ0F6RUQ7Q0F5RUMsQUFsREQsSUFrREM7U0FsRFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWN0aXZlQ2FydFNlcnZpY2UsXG4gIEFkZHJlc3MsXG4gIENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICBDaGVja291dFBheW1lbnRTZXJ2aWNlLFxuICBDaGVja291dFNlcnZpY2UsXG4gIE9DQ19VU0VSX0lEX0FOT05ZTU9VUyxcbiAgUGF5bWVudERldGFpbHMsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBmaWx0ZXIsXG4gIG1hcCxcbiAgc2hhcmVSZXBsYXksXG4gIHNraXBXaGlsZSxcbiAgc3dpdGNoTWFwLFxuICB0YXAsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0RGV0YWlsc1NlcnZpY2Uge1xuICBjYXJ0SWQkOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIGdldENoZWNrb3V0RGV0YWlsc0xvYWRlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U2VydmljZTogQ2hlY2tvdXRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dERlbGl2ZXJ5U2VydmljZTogQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0UGF5bWVudFNlcnZpY2U6IENoZWNrb3V0UGF5bWVudFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZVxuICApIHtcbiAgICB0aGlzLmNhcnRJZCQgPSB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpLnBpcGUoXG4gICAgICBtYXAoY2FydERhdGEgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgKGNhcnREYXRhLnVzZXIgJiYgY2FydERhdGEudXNlci51aWQgPT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUykgfHxcbiAgICAgICAgICB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmlzR3Vlc3RDYXJ0KClcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIGNhcnREYXRhLmd1aWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhcnREYXRhLmNvZGU7XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcihjYXJ0SWQgPT4gISFjYXJ0SWQpXG4gICAgKTtcblxuICAgIHRoaXMuZ2V0Q2hlY2tvdXREZXRhaWxzTG9hZGVkJCA9IHRoaXMuY2FydElkJC5waXBlKFxuICAgICAgdGFwKGNhcnRJZCA9PiB0aGlzLmNoZWNrb3V0U2VydmljZS5sb2FkQ2hlY2tvdXREZXRhaWxzKGNhcnRJZCkpLFxuICAgICAgc2hhcmVSZXBsYXkoMSksXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy5jaGVja291dFNlcnZpY2UuZ2V0Q2hlY2tvdXREZXRhaWxzTG9hZGVkKCkpLFxuICAgICAgc2tpcFdoaWxlKGxvYWRlZCA9PiAhbG9hZGVkKVxuICAgICk7XG4gIH1cblxuICBnZXREZWxpdmVyeUFkZHJlc3MoKTogT2JzZXJ2YWJsZTxBZGRyZXNzPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2hlY2tvdXREZXRhaWxzTG9hZGVkJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuZ2V0RGVsaXZlcnlBZGRyZXNzKCkpXG4gICAgKTtcbiAgfVxuXG4gIGdldFNlbGVjdGVkRGVsaXZlcnlNb2RlQ29kZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmdldENoZWNrb3V0RGV0YWlsc0xvYWRlZCQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoKSA9PlxuICAgICAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLmdldFNlbGVjdGVkRGVsaXZlcnlNb2RlQ29kZSgpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGdldFBheW1lbnREZXRhaWxzKCk6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHM+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDaGVja291dERldGFpbHNMb2FkZWQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy5jaGVja291dFBheW1lbnRTZXJ2aWNlLmdldFBheW1lbnREZXRhaWxzKCkpXG4gICAgKTtcbiAgfVxufVxuIl19