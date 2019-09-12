/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CartService, CheckoutService, CheckoutDeliveryService, CheckoutPaymentService, } from '@spartacus/core';
import { map, shareReplay, skipWhile, switchMap, tap, filter, } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var CheckoutDetailsService = /** @class */ (function () {
    function CheckoutDetailsService(checkoutService, checkoutDeliveryService, checkoutPaymentService, cartService) {
        var _this = this;
        this.checkoutService = checkoutService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutPaymentService = checkoutPaymentService;
        this.cartService = cartService;
        this.cartId$ = this.cartService.getActive().pipe(map((/**
         * @param {?} cartData
         * @return {?}
         */
        function (cartData) { return cartData.code; })), filter((/**
         * @param {?} cartId
         * @return {?}
         */
        function (cartId) { return !!cartId; })));
        this.getCheckoutDetailsLoaded$ = this.cartId$.pipe(tap((/**
         * @param {?} cartId
         * @return {?}
         */
        function (cartId) { return _this.checkoutService.loadCheckoutDetails(cartId); })), shareReplay(1), switchMap((/**
         * @return {?}
         */
        function () { return _this.checkoutService.getCheckoutDetailsLoaded(); })), skipWhile((/**
         * @param {?} loaded
         * @return {?}
         */
        function (loaded) { return !loaded; })));
    }
    /**
     * @return {?}
     */
    CheckoutDetailsService.prototype.getDeliveryAddress = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.getCheckoutDetailsLoaded$.pipe(switchMap((/**
         * @return {?}
         */
        function () { return _this.checkoutDeliveryService.getDeliveryAddress(); })));
    };
    /**
     * @return {?}
     */
    CheckoutDetailsService.prototype.getSelectedDeliveryModeCode = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.getCheckoutDetailsLoaded$.pipe(switchMap((/**
         * @return {?}
         */
        function () {
            return _this.checkoutDeliveryService.getSelectedDeliveryModeCode();
        })));
    };
    /**
     * @return {?}
     */
    CheckoutDetailsService.prototype.getPaymentDetails = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.getCheckoutDetailsLoaded$.pipe(switchMap((/**
         * @return {?}
         */
        function () { return _this.checkoutPaymentService.getPaymentDetails(); })));
    };
    CheckoutDetailsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CheckoutDetailsService.ctorParameters = function () { return [
        { type: CheckoutService },
        { type: CheckoutDeliveryService },
        { type: CheckoutPaymentService },
        { type: CartService }
    ]; };
    /** @nocollapse */ CheckoutDetailsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CheckoutDetailsService_Factory() { return new CheckoutDetailsService(i0.ɵɵinject(i1.CheckoutService), i0.ɵɵinject(i1.CheckoutDeliveryService), i0.ɵɵinject(i1.CheckoutPaymentService), i0.ɵɵinject(i1.CartService)); }, token: CheckoutDetailsService, providedIn: "root" });
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
    CheckoutDetailsService.prototype.checkoutDeliveryService;
    /**
     * @type {?}
     * @private
     */
    CheckoutDetailsService.prototype.checkoutPaymentService;
    /**
     * @type {?}
     * @private
     */
    CheckoutDetailsService.prototype.cartService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtZGV0YWlscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvc2VydmljZXMvY2hlY2tvdXQtZGV0YWlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFFTCxXQUFXLEVBQ1gsZUFBZSxFQUVmLHVCQUF1QixFQUN2QixzQkFBc0IsR0FDdkIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQ0wsR0FBRyxFQUNILFdBQVcsRUFDWCxTQUFTLEVBQ1QsU0FBUyxFQUNULEdBQUcsRUFDSCxNQUFNLEdBQ1AsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBRXhCO0lBT0UsZ0NBQ1UsZUFBZ0MsRUFDaEMsdUJBQWdELEVBQ2hELHNCQUE4QyxFQUM5QyxXQUF3QjtRQUpsQyxpQkFpQkM7UUFoQlMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUM5QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUVoQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUM5QyxHQUFHOzs7O1FBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFiLENBQWEsRUFBQyxFQUM5QixNQUFNOzs7O1FBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxDQUFDLENBQUMsTUFBTSxFQUFSLENBQVEsRUFBQyxDQUMzQixDQUFDO1FBRUYsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUNoRCxHQUFHOzs7O1FBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxFQUFoRCxDQUFnRCxFQUFDLEVBQy9ELFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFDZCxTQUFTOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyx3QkFBd0IsRUFBRSxFQUEvQyxDQUErQyxFQUFDLEVBQ2hFLFNBQVM7Ozs7UUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLENBQUMsTUFBTSxFQUFQLENBQU8sRUFBQyxDQUM3QixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELG1EQUFrQjs7O0lBQWxCO1FBQUEsaUJBSUM7UUFIQyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQ3hDLFNBQVM7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsdUJBQXVCLENBQUMsa0JBQWtCLEVBQUUsRUFBakQsQ0FBaUQsRUFBQyxDQUNuRSxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELDREQUEyQjs7O0lBQTNCO1FBQUEsaUJBTUM7UUFMQyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQ3hDLFNBQVM7OztRQUFDO1lBQ1IsT0FBQSxLQUFJLENBQUMsdUJBQXVCLENBQUMsMkJBQTJCLEVBQUU7UUFBMUQsQ0FBMEQsRUFDM0QsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELGtEQUFpQjs7O0lBQWpCO1FBQUEsaUJBSUM7UUFIQyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQ3hDLFNBQVM7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsc0JBQXNCLENBQUMsaUJBQWlCLEVBQUUsRUFBL0MsQ0FBK0MsRUFBQyxDQUNqRSxDQUFDO0lBQ0osQ0FBQzs7Z0JBNUNGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBakJDLGVBQWU7Z0JBRWYsdUJBQXVCO2dCQUN2QixzQkFBc0I7Z0JBSnRCLFdBQVc7OztpQ0FIYjtDQWdFQyxBQTdDRCxJQTZDQztTQTFDWSxzQkFBc0I7OztJQUNqQyx5Q0FBNEI7O0lBQzVCLDJEQUErQzs7Ozs7SUFHN0MsaURBQXdDOzs7OztJQUN4Qyx5REFBd0Q7Ozs7O0lBQ3hELHdEQUFzRDs7Ozs7SUFDdEQsNkNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWRkcmVzcyxcbiAgQ2FydFNlcnZpY2UsXG4gIENoZWNrb3V0U2VydmljZSxcbiAgUGF5bWVudERldGFpbHMsXG4gIENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICBDaGVja291dFBheW1lbnRTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgbWFwLFxuICBzaGFyZVJlcGxheSxcbiAgc2tpcFdoaWxlLFxuICBzd2l0Y2hNYXAsXG4gIHRhcCxcbiAgZmlsdGVyLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dERldGFpbHNTZXJ2aWNlIHtcbiAgY2FydElkJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICBnZXRDaGVja291dERldGFpbHNMb2FkZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGVja291dERlbGl2ZXJ5U2VydmljZTogQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGVja291dFBheW1lbnRTZXJ2aWNlOiBDaGVja291dFBheW1lbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuY2FydElkJCA9IHRoaXMuY2FydFNlcnZpY2UuZ2V0QWN0aXZlKCkucGlwZShcbiAgICAgIG1hcChjYXJ0RGF0YSA9PiBjYXJ0RGF0YS5jb2RlKSxcbiAgICAgIGZpbHRlcihjYXJ0SWQgPT4gISFjYXJ0SWQpXG4gICAgKTtcblxuICAgIHRoaXMuZ2V0Q2hlY2tvdXREZXRhaWxzTG9hZGVkJCA9IHRoaXMuY2FydElkJC5waXBlKFxuICAgICAgdGFwKGNhcnRJZCA9PiB0aGlzLmNoZWNrb3V0U2VydmljZS5sb2FkQ2hlY2tvdXREZXRhaWxzKGNhcnRJZCkpLFxuICAgICAgc2hhcmVSZXBsYXkoMSksXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy5jaGVja291dFNlcnZpY2UuZ2V0Q2hlY2tvdXREZXRhaWxzTG9hZGVkKCkpLFxuICAgICAgc2tpcFdoaWxlKGxvYWRlZCA9PiAhbG9hZGVkKVxuICAgICk7XG4gIH1cblxuICBnZXREZWxpdmVyeUFkZHJlc3MoKTogT2JzZXJ2YWJsZTxBZGRyZXNzPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2hlY2tvdXREZXRhaWxzTG9hZGVkJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuZ2V0RGVsaXZlcnlBZGRyZXNzKCkpXG4gICAgKTtcbiAgfVxuXG4gIGdldFNlbGVjdGVkRGVsaXZlcnlNb2RlQ29kZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmdldENoZWNrb3V0RGV0YWlsc0xvYWRlZCQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoKSA9PlxuICAgICAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLmdldFNlbGVjdGVkRGVsaXZlcnlNb2RlQ29kZSgpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGdldFBheW1lbnREZXRhaWxzKCk6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHM+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDaGVja291dERldGFpbHNMb2FkZWQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy5jaGVja291dFBheW1lbnRTZXJ2aWNlLmdldFBheW1lbnREZXRhaWxzKCkpXG4gICAgKTtcbiAgfVxufVxuIl19