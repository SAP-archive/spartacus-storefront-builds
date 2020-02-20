import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Address, CartService, CheckoutDeliveryService, CheckoutPaymentService, CheckoutService, OCC_USER_ID_ANONYMOUS, PaymentDetails, } from '@spartacus/core';
import { filter, map, shareReplay, skipWhile, switchMap, tap, } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var CheckoutDetailsService = /** @class */ (function () {
    function CheckoutDetailsService(checkoutService, checkoutDeliveryService, checkoutPaymentService, cartService) {
        var _this = this;
        this.checkoutService = checkoutService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutPaymentService = checkoutPaymentService;
        this.cartService = cartService;
        this.cartId$ = this.cartService.getActive().pipe(map(function (cartData) {
            if ((cartData.user && cartData.user.uid === OCC_USER_ID_ANONYMOUS) ||
                _this.cartService.isGuestCart()) {
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
        { type: CartService }
    ]; };
    CheckoutDetailsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutDetailsService_Factory() { return new CheckoutDetailsService(i0.ɵɵinject(i1.CheckoutService), i0.ɵɵinject(i1.CheckoutDeliveryService), i0.ɵɵinject(i1.CheckoutPaymentService), i0.ɵɵinject(i1.CartService)); }, token: CheckoutDetailsService, providedIn: "root" });
    CheckoutDetailsService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CheckoutDetailsService);
    return CheckoutDetailsService;
}());
export { CheckoutDetailsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtZGV0YWlscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvc2VydmljZXMvY2hlY2tvdXQtZGV0YWlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxPQUFPLEVBQ1AsV0FBVyxFQUNYLHVCQUF1QixFQUN2QixzQkFBc0IsRUFDdEIsZUFBZSxFQUNmLHFCQUFxQixFQUNyQixjQUFjLEdBQ2YsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQ0wsTUFBTSxFQUNOLEdBQUcsRUFDSCxXQUFXLEVBQ1gsU0FBUyxFQUNULFNBQVMsRUFDVCxHQUFHLEdBQ0osTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBS3hCO0lBSUUsZ0NBQ1UsZUFBZ0MsRUFDaEMsdUJBQWdELEVBQ2hELHNCQUE4QyxFQUM5QyxXQUF3QjtRQUpsQyxpQkF5QkM7UUF4QlMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUM5QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUVoQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUM5QyxHQUFHLENBQUMsVUFBQSxRQUFRO1lBQ1YsSUFDRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUsscUJBQXFCLENBQUM7Z0JBQzlELEtBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEVBQzlCO2dCQUNBLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQzthQUN0QjtZQUNELE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztRQUN2QixDQUFDLENBQUMsRUFDRixNQUFNLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxDQUFDLENBQUMsTUFBTSxFQUFSLENBQVEsQ0FBQyxDQUMzQixDQUFDO1FBRUYsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUNoRCxHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxFQUFoRCxDQUFnRCxDQUFDLEVBQy9ELFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFDZCxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsd0JBQXdCLEVBQUUsRUFBL0MsQ0FBK0MsQ0FBQyxFQUNoRSxTQUFTLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxDQUFDLE1BQU0sRUFBUCxDQUFPLENBQUMsQ0FDN0IsQ0FBQztJQUNKLENBQUM7SUFFRCxtREFBa0IsR0FBbEI7UUFBQSxpQkFJQztRQUhDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FDeEMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsdUJBQXVCLENBQUMsa0JBQWtCLEVBQUUsRUFBakQsQ0FBaUQsQ0FBQyxDQUNuRSxDQUFDO0lBQ0osQ0FBQztJQUVELDREQUEyQixHQUEzQjtRQUFBLGlCQU1DO1FBTEMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUN4QyxTQUFTLENBQUM7WUFDUixPQUFBLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQywyQkFBMkIsRUFBRTtRQUExRCxDQUEwRCxDQUMzRCxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsa0RBQWlCLEdBQWpCO1FBQUEsaUJBSUM7UUFIQyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQ3hDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLHNCQUFzQixDQUFDLGlCQUFpQixFQUFFLEVBQS9DLENBQStDLENBQUMsQ0FDakUsQ0FBQztJQUNKLENBQUM7O2dCQTVDMEIsZUFBZTtnQkFDUCx1QkFBdUI7Z0JBQ3hCLHNCQUFzQjtnQkFDakMsV0FBVzs7O0lBUnZCLHNCQUFzQjtRQUhsQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csc0JBQXNCLENBa0RsQztpQ0F6RUQ7Q0F5RUMsQUFsREQsSUFrREM7U0FsRFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWRkcmVzcyxcbiAgQ2FydFNlcnZpY2UsXG4gIENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICBDaGVja291dFBheW1lbnRTZXJ2aWNlLFxuICBDaGVja291dFNlcnZpY2UsXG4gIE9DQ19VU0VSX0lEX0FOT05ZTU9VUyxcbiAgUGF5bWVudERldGFpbHMsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBmaWx0ZXIsXG4gIG1hcCxcbiAgc2hhcmVSZXBsYXksXG4gIHNraXBXaGlsZSxcbiAgc3dpdGNoTWFwLFxuICB0YXAsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0RGV0YWlsc1NlcnZpY2Uge1xuICBjYXJ0SWQkOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIGdldENoZWNrb3V0RGV0YWlsc0xvYWRlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjaGVja291dFNlcnZpY2U6IENoZWNrb3V0U2VydmljZSxcbiAgICBwcml2YXRlIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgICBwcml2YXRlIGNoZWNrb3V0UGF5bWVudFNlcnZpY2U6IENoZWNrb3V0UGF5bWVudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5jYXJ0SWQkID0gdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKS5waXBlKFxuICAgICAgbWFwKGNhcnREYXRhID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIChjYXJ0RGF0YS51c2VyICYmIGNhcnREYXRhLnVzZXIudWlkID09PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMpIHx8XG4gICAgICAgICAgdGhpcy5jYXJ0U2VydmljZS5pc0d1ZXN0Q2FydCgpXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiBjYXJ0RGF0YS5ndWlkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYXJ0RGF0YS5jb2RlO1xuICAgICAgfSksXG4gICAgICBmaWx0ZXIoY2FydElkID0+ICEhY2FydElkKVxuICAgICk7XG5cbiAgICB0aGlzLmdldENoZWNrb3V0RGV0YWlsc0xvYWRlZCQgPSB0aGlzLmNhcnRJZCQucGlwZShcbiAgICAgIHRhcChjYXJ0SWQgPT4gdGhpcy5jaGVja291dFNlcnZpY2UubG9hZENoZWNrb3V0RGV0YWlscyhjYXJ0SWQpKSxcbiAgICAgIHNoYXJlUmVwbGF5KDEpLFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmdldENoZWNrb3V0RGV0YWlsc0xvYWRlZCgpKSxcbiAgICAgIHNraXBXaGlsZShsb2FkZWQgPT4gIWxvYWRlZClcbiAgICApO1xuICB9XG5cbiAgZ2V0RGVsaXZlcnlBZGRyZXNzKCk6IE9ic2VydmFibGU8QWRkcmVzcz4ge1xuICAgIHJldHVybiB0aGlzLmdldENoZWNrb3V0RGV0YWlsc0xvYWRlZCQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLmdldERlbGl2ZXJ5QWRkcmVzcygpKVxuICAgICk7XG4gIH1cblxuICBnZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZUNvZGUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDaGVja291dERldGFpbHNMb2FkZWQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKCkgPT5cbiAgICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5nZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZUNvZGUoKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBnZXRQYXltZW50RGV0YWlscygpOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2hlY2tvdXREZXRhaWxzTG9hZGVkJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMuY2hlY2tvdXRQYXltZW50U2VydmljZS5nZXRQYXltZW50RGV0YWlscygpKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==