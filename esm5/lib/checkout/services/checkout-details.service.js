/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { map, shareReplay, skipWhile, switchMap, tap, withLatestFrom, } from 'rxjs/operators';
import { CheckoutService, CartService, AuthService, } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var CheckoutDetailsService = /** @class */ (function () {
    function CheckoutDetailsService(authService, checkoutService, cartService) {
        var _this = this;
        this.authService = authService;
        this.checkoutService = checkoutService;
        this.cartService = cartService;
        this.userId$ = this.authService
            .getUserToken()
            .pipe(map(function (userData) { return userData.userId; }));
        this.cartId$ = this.cartService
            .getActive()
            .pipe(map(function (cartData) { return cartData.code; }));
        this.getCheckoutDetailsLoaded$ = this.userId$.pipe(withLatestFrom(this.cartId$), tap(function (_a) {
            var _b = tslib_1.__read(_a, 2), userId = _b[0], cartId = _b[1];
            return _this.checkoutService.loadCheckoutDetails(userId, cartId);
        }), shareReplay(1), switchMap(function () { return _this.checkoutService.getCheckoutDetailsLoaded(); }), skipWhile(function (loaded) { return !loaded; }));
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
        { type: AuthService },
        { type: CheckoutService },
        { type: CartService }
    ]; };
    /** @nocollapse */ CheckoutDetailsService.ngInjectableDef = i0.defineInjectable({ factory: function CheckoutDetailsService_Factory() { return new CheckoutDetailsService(i0.inject(i1.AuthService), i0.inject(i1.CheckoutService), i0.inject(i1.CartService)); }, token: CheckoutDetailsService, providedIn: "root" });
    return CheckoutDetailsService;
}());
export { CheckoutDetailsService };
if (false) {
    /** @type {?} */
    CheckoutDetailsService.prototype.userId$;
    /** @type {?} */
    CheckoutDetailsService.prototype.cartId$;
    /** @type {?} */
    CheckoutDetailsService.prototype.getCheckoutDetailsLoaded$;
    /**
     * @type {?}
     * @private
     */
    CheckoutDetailsService.prototype.authService;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtZGV0YWlscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2NoZWNrb3V0L3NlcnZpY2VzL2NoZWNrb3V0LWRldGFpbHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUNMLEdBQUcsRUFDSCxXQUFXLEVBQ1gsU0FBUyxFQUNULFNBQVMsRUFDVCxHQUFHLEVBQ0gsY0FBYyxHQUNmLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUdMLGVBQWUsRUFDZixXQUFXLEVBQ1gsV0FBVyxHQUNaLE1BQU0saUJBQWlCLENBQUM7OztBQUV6QjtJQVFFLGdDQUNVLFdBQXdCLEVBQ3hCLGVBQWdDLEVBQ2hDLFdBQXdCO1FBSGxDLGlCQXNCQztRQXJCUyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFFaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVzthQUM1QixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLE1BQU0sRUFBZixDQUFlLENBQUMsQ0FBQyxDQUFDO1FBRTFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVc7YUFDNUIsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQWIsQ0FBYSxDQUFDLENBQUMsQ0FBQztRQUV4QyxJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ2hELGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQzVCLEdBQUcsQ0FBQyxVQUFDLEVBQWtDO2dCQUFsQywwQkFBa0MsRUFBakMsY0FBTSxFQUFFLGNBQU07WUFDbEIsT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFBeEQsQ0FBd0QsQ0FDekQsRUFDRCxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQ2QsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLHdCQUF3QixFQUFFLEVBQS9DLENBQStDLENBQUMsRUFDaEUsU0FBUyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsQ0FBQyxNQUFNLEVBQVAsQ0FBTyxDQUFDLENBQzdCLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsbURBQWtCOzs7SUFBbEI7UUFBQSxpQkFJQztRQUhDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FDeEMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixFQUFFLEVBQXpDLENBQXlDLENBQUMsQ0FDM0QsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCw0REFBMkI7OztJQUEzQjtRQUFBLGlCQUlDO1FBSEMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUN4QyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsMkJBQTJCLEVBQUUsRUFBbEQsQ0FBa0QsQ0FBQyxDQUNwRSxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELGtEQUFpQjs7O0lBQWpCO1FBQUEsaUJBSUM7UUFIQyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQ3hDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxFQUF4QyxDQUF3QyxDQUFDLENBQzFELENBQUM7SUFDSixDQUFDOztnQkFoREYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFMQyxXQUFXO2dCQUZYLGVBQWU7Z0JBQ2YsV0FBVzs7O2lDQWZiO0NBb0VDLEFBakRELElBaURDO1NBOUNZLHNCQUFzQjs7O0lBQ2pDLHlDQUE0Qjs7SUFDNUIseUNBQTRCOztJQUM1QiwyREFBK0M7Ozs7O0lBRzdDLDZDQUFnQzs7Ozs7SUFDaEMsaURBQXdDOzs7OztJQUN4Qyw2Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBtYXAsXG4gIHNoYXJlUmVwbGF5LFxuICBza2lwV2hpbGUsXG4gIHN3aXRjaE1hcCxcbiAgdGFwLFxuICB3aXRoTGF0ZXN0RnJvbSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBBZGRyZXNzLFxuICBQYXltZW50RGV0YWlscyxcbiAgQ2hlY2tvdXRTZXJ2aWNlLFxuICBDYXJ0U2VydmljZSxcbiAgQXV0aFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dERldGFpbHNTZXJ2aWNlIHtcbiAgdXNlcklkJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICBjYXJ0SWQkOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIGdldENoZWNrb3V0RGV0YWlsc0xvYWRlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGVja291dFNlcnZpY2U6IENoZWNrb3V0U2VydmljZSxcbiAgICBwcml2YXRlIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZVxuICApIHtcbiAgICB0aGlzLnVzZXJJZCQgPSB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAuZ2V0VXNlclRva2VuKClcbiAgICAgIC5waXBlKG1hcCh1c2VyRGF0YSA9PiB1c2VyRGF0YS51c2VySWQpKTtcblxuICAgIHRoaXMuY2FydElkJCA9IHRoaXMuY2FydFNlcnZpY2VcbiAgICAgIC5nZXRBY3RpdmUoKVxuICAgICAgLnBpcGUobWFwKGNhcnREYXRhID0+IGNhcnREYXRhLmNvZGUpKTtcblxuICAgIHRoaXMuZ2V0Q2hlY2tvdXREZXRhaWxzTG9hZGVkJCA9IHRoaXMudXNlcklkJC5waXBlKFxuICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5jYXJ0SWQkKSxcbiAgICAgIHRhcCgoW3VzZXJJZCwgY2FydElkXTogW3N0cmluZywgc3RyaW5nXSkgPT5cbiAgICAgICAgdGhpcy5jaGVja291dFNlcnZpY2UubG9hZENoZWNrb3V0RGV0YWlscyh1c2VySWQsIGNhcnRJZClcbiAgICAgICksXG4gICAgICBzaGFyZVJlcGxheSgxKSxcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLmNoZWNrb3V0U2VydmljZS5nZXRDaGVja291dERldGFpbHNMb2FkZWQoKSksXG4gICAgICBza2lwV2hpbGUobG9hZGVkID0+ICFsb2FkZWQpXG4gICAgKTtcbiAgfVxuXG4gIGdldERlbGl2ZXJ5QWRkcmVzcygpOiBPYnNlcnZhYmxlPEFkZHJlc3M+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDaGVja291dERldGFpbHNMb2FkZWQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy5jaGVja291dFNlcnZpY2UuZ2V0RGVsaXZlcnlBZGRyZXNzKCkpXG4gICAgKTtcbiAgfVxuXG4gIGdldFNlbGVjdGVkRGVsaXZlcnlNb2RlQ29kZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmdldENoZWNrb3V0RGV0YWlsc0xvYWRlZCQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLmNoZWNrb3V0U2VydmljZS5nZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZUNvZGUoKSlcbiAgICApO1xuICB9XG5cbiAgZ2V0UGF5bWVudERldGFpbHMoKTogT2JzZXJ2YWJsZTxQYXltZW50RGV0YWlscz4ge1xuICAgIHJldHVybiB0aGlzLmdldENoZWNrb3V0RGV0YWlsc0xvYWRlZCQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLmNoZWNrb3V0U2VydmljZS5nZXRQYXltZW50RGV0YWlscygpKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==