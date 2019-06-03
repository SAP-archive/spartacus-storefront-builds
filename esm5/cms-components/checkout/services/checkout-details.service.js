/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CartService, CheckoutService, } from '@spartacus/core';
import { map, shareReplay, skipWhile, switchMap, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var CheckoutDetailsService = /** @class */ (function () {
    function CheckoutDetailsService(checkoutService, cartService) {
        var _this = this;
        this.checkoutService = checkoutService;
        this.cartService = cartService;
        this.cartId$ = this.cartService
            .getActive()
            .pipe(map(function (cartData) { return cartData.code; }));
        this.getCheckoutDetailsLoaded$ = this.cartId$.pipe(tap(function (cartId) { return _this.checkoutService.loadCheckoutDetails(cartId); }), shareReplay(1), switchMap(function () { return _this.checkoutService.getCheckoutDetailsLoaded(); }), skipWhile(function (loaded) { return !loaded; }));
    }
    /**
     * @return {?}
     */
    CheckoutDetailsService.prototype.getDeliveryAddress = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.getCheckoutDetailsLoaded$.pipe(switchMap(function () { return _this.checkoutService.getDeliveryAddress(); }));
    };
    /**
     * @return {?}
     */
    CheckoutDetailsService.prototype.getSelectedDeliveryModeCode = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.getCheckoutDetailsLoaded$.pipe(switchMap(function () { return _this.checkoutService.getSelectedDeliveryModeCode(); }));
    };
    /**
     * @return {?}
     */
    CheckoutDetailsService.prototype.getPaymentDetails = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.getCheckoutDetailsLoaded$.pipe(switchMap(function () { return _this.checkoutService.getPaymentDetails(); }));
    };
    CheckoutDetailsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CheckoutDetailsService.ctorParameters = function () { return [
        { type: CheckoutService },
        { type: CartService }
    ]; };
    /** @nocollapse */ CheckoutDetailsService.ngInjectableDef = i0.defineInjectable({ factory: function CheckoutDetailsService_Factory() { return new CheckoutDetailsService(i0.inject(i1.CheckoutService), i0.inject(i1.CartService)); }, token: CheckoutDetailsService, providedIn: "root" });
    return CheckoutDetailsService;
}());
export { CheckoutDetailsService };
if (false) {
    /** @type {?} */
    CheckoutDetailsService.prototype.cartId$;
    /** @type {?} */
    CheckoutDetailsService.prototype.getCheckoutDetailsLoaded$;
    /**
     * @type {?}
     * @private
     */
    CheckoutDetailsService.prototype.checkoutService;
    /**
     * @type {?}
     * @private
     */
    CheckoutDetailsService.prototype.cartService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtZGV0YWlscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvc2VydmljZXMvY2hlY2tvdXQtZGV0YWlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFFTCxXQUFXLEVBQ1gsZUFBZSxHQUVoQixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUU3RTtJQU9FLGdDQUNVLGVBQWdDLEVBQ2hDLFdBQXdCO1FBRmxDLGlCQWNDO1FBYlMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRWhDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVc7YUFDNUIsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQWIsQ0FBYSxDQUFDLENBQUMsQ0FBQztRQUV4QyxJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ2hELEdBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLEVBQWhELENBQWdELENBQUMsRUFDL0QsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUNkLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyx3QkFBd0IsRUFBRSxFQUEvQyxDQUErQyxDQUFDLEVBQ2hFLFNBQVMsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLENBQUMsTUFBTSxFQUFQLENBQU8sQ0FBQyxDQUM3QixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELG1EQUFrQjs7O0lBQWxCO1FBQUEsaUJBSUM7UUFIQyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQ3hDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsRUFBRSxFQUF6QyxDQUF5QyxDQUFDLENBQzNELENBQUM7SUFDSixDQUFDOzs7O0lBRUQsNERBQTJCOzs7SUFBM0I7UUFBQSxpQkFJQztRQUhDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FDeEMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLDJCQUEyQixFQUFFLEVBQWxELENBQWtELENBQUMsQ0FDcEUsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxrREFBaUI7OztJQUFqQjtRQUFBLGlCQUlDO1FBSEMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUN4QyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLEVBQUUsRUFBeEMsQ0FBd0MsQ0FBQyxDQUMxRCxDQUFDO0lBQ0osQ0FBQzs7Z0JBdkNGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUkMsZUFBZTtnQkFEZixXQUFXOzs7aUNBSGI7Q0FrREMsQUF4Q0QsSUF3Q0M7U0FyQ1ksc0JBQXNCOzs7SUFDakMseUNBQTRCOztJQUM1QiwyREFBK0M7Ozs7O0lBRzdDLGlEQUF3Qzs7Ozs7SUFDeEMsNkNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWRkcmVzcyxcbiAgQ2FydFNlcnZpY2UsXG4gIENoZWNrb3V0U2VydmljZSxcbiAgUGF5bWVudERldGFpbHMsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHNoYXJlUmVwbGF5LCBza2lwV2hpbGUsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXREZXRhaWxzU2VydmljZSB7XG4gIGNhcnRJZCQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgZ2V0Q2hlY2tvdXREZXRhaWxzTG9hZGVkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNoZWNrb3V0U2VydmljZTogQ2hlY2tvdXRTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuY2FydElkJCA9IHRoaXMuY2FydFNlcnZpY2VcbiAgICAgIC5nZXRBY3RpdmUoKVxuICAgICAgLnBpcGUobWFwKGNhcnREYXRhID0+IGNhcnREYXRhLmNvZGUpKTtcblxuICAgIHRoaXMuZ2V0Q2hlY2tvdXREZXRhaWxzTG9hZGVkJCA9IHRoaXMuY2FydElkJC5waXBlKFxuICAgICAgdGFwKGNhcnRJZCA9PiB0aGlzLmNoZWNrb3V0U2VydmljZS5sb2FkQ2hlY2tvdXREZXRhaWxzKGNhcnRJZCkpLFxuICAgICAgc2hhcmVSZXBsYXkoMSksXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy5jaGVja291dFNlcnZpY2UuZ2V0Q2hlY2tvdXREZXRhaWxzTG9hZGVkKCkpLFxuICAgICAgc2tpcFdoaWxlKGxvYWRlZCA9PiAhbG9hZGVkKVxuICAgICk7XG4gIH1cblxuICBnZXREZWxpdmVyeUFkZHJlc3MoKTogT2JzZXJ2YWJsZTxBZGRyZXNzPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2hlY2tvdXREZXRhaWxzTG9hZGVkJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmdldERlbGl2ZXJ5QWRkcmVzcygpKVxuICAgICk7XG4gIH1cblxuICBnZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZUNvZGUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDaGVja291dERldGFpbHNMb2FkZWQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy5jaGVja291dFNlcnZpY2UuZ2V0U2VsZWN0ZWREZWxpdmVyeU1vZGVDb2RlKCkpXG4gICAgKTtcbiAgfVxuXG4gIGdldFBheW1lbnREZXRhaWxzKCk6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHM+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDaGVja291dERldGFpbHNMb2FkZWQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy5jaGVja291dFNlcnZpY2UuZ2V0UGF5bWVudERldGFpbHMoKSlcbiAgICApO1xuICB9XG59XG4iXX0=