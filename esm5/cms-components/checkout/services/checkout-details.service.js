/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CartService, CheckoutDeliveryService, CheckoutPaymentService, CheckoutService, OCC_USER_ID_ANONYMOUS, } from '@spartacus/core';
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
        this.cartId$ = this.cartService.getActive().pipe(map((/**
         * @param {?} cartData
         * @return {?}
         */
        function (cartData) {
            if ((cartData.user && cartData.user.uid === OCC_USER_ID_ANONYMOUS) ||
                _this.cartService.isGuestCart()) {
                return cartData.guid;
            }
            return cartData.code;
        })), filter((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtZGV0YWlscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvc2VydmljZXMvY2hlY2tvdXQtZGV0YWlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFFTCxXQUFXLEVBQ1gsdUJBQXVCLEVBQ3ZCLHNCQUFzQixFQUN0QixlQUFlLEVBQ2YscUJBQXFCLEdBRXRCLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUNMLE1BQU0sRUFDTixHQUFHLEVBQ0gsV0FBVyxFQUNYLFNBQVMsRUFDVCxTQUFTLEVBQ1QsR0FBRyxHQUNKLE1BQU0sZ0JBQWdCLENBQUM7OztBQUV4QjtJQU9FLGdDQUNVLGVBQWdDLEVBQ2hDLHVCQUFnRCxFQUNoRCxzQkFBOEMsRUFDOUMsV0FBd0I7UUFKbEMsaUJBeUJDO1FBeEJTLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDOUMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFFaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FDOUMsR0FBRzs7OztRQUFDLFVBQUEsUUFBUTtZQUNWLElBQ0UsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLHFCQUFxQixDQUFDO2dCQUM5RCxLQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxFQUM5QjtnQkFDQSxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7YUFDdEI7WUFDRCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDdkIsQ0FBQyxFQUFDLEVBQ0YsTUFBTTs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsQ0FBQyxDQUFDLE1BQU0sRUFBUixDQUFRLEVBQUMsQ0FDM0IsQ0FBQztRQUVGLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDaEQsR0FBRzs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsRUFBaEQsQ0FBZ0QsRUFBQyxFQUMvRCxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQ2QsU0FBUzs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsd0JBQXdCLEVBQUUsRUFBL0MsQ0FBK0MsRUFBQyxFQUNoRSxTQUFTOzs7O1FBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxDQUFDLE1BQU0sRUFBUCxDQUFPLEVBQUMsQ0FDN0IsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxtREFBa0I7OztJQUFsQjtRQUFBLGlCQUlDO1FBSEMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUN4QyxTQUFTOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLHVCQUF1QixDQUFDLGtCQUFrQixFQUFFLEVBQWpELENBQWlELEVBQUMsQ0FDbkUsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCw0REFBMkI7OztJQUEzQjtRQUFBLGlCQU1DO1FBTEMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUN4QyxTQUFTOzs7UUFBQztZQUNSLE9BQUEsS0FBSSxDQUFDLHVCQUF1QixDQUFDLDJCQUEyQixFQUFFO1FBQTFELENBQTBELEVBQzNELENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxrREFBaUI7OztJQUFqQjtRQUFBLGlCQUlDO1FBSEMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUN4QyxTQUFTOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLHNCQUFzQixDQUFDLGlCQUFpQixFQUFFLEVBQS9DLENBQStDLEVBQUMsQ0FDakUsQ0FBQztJQUNKLENBQUM7O2dCQXBERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQWhCQyxlQUFlO2dCQUZmLHVCQUF1QjtnQkFDdkIsc0JBQXNCO2dCQUZ0QixXQUFXOzs7aUNBSGI7Q0F5RUMsQUFyREQsSUFxREM7U0FsRFksc0JBQXNCOzs7SUFDakMseUNBQTRCOztJQUM1QiwyREFBK0M7Ozs7O0lBRzdDLGlEQUF3Qzs7Ozs7SUFDeEMseURBQXdEOzs7OztJQUN4RCx3REFBc0Q7Ozs7O0lBQ3RELDZDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFkZHJlc3MsXG4gIENhcnRTZXJ2aWNlLFxuICBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgQ2hlY2tvdXRQYXltZW50U2VydmljZSxcbiAgQ2hlY2tvdXRTZXJ2aWNlLFxuICBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMsXG4gIFBheW1lbnREZXRhaWxzLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZmlsdGVyLFxuICBtYXAsXG4gIHNoYXJlUmVwbGF5LFxuICBza2lwV2hpbGUsXG4gIHN3aXRjaE1hcCxcbiAgdGFwLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dERldGFpbHNTZXJ2aWNlIHtcbiAgY2FydElkJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICBnZXRDaGVja291dERldGFpbHNMb2FkZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGVja291dERlbGl2ZXJ5U2VydmljZTogQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGVja291dFBheW1lbnRTZXJ2aWNlOiBDaGVja291dFBheW1lbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuY2FydElkJCA9IHRoaXMuY2FydFNlcnZpY2UuZ2V0QWN0aXZlKCkucGlwZShcbiAgICAgIG1hcChjYXJ0RGF0YSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAoY2FydERhdGEudXNlciAmJiBjYXJ0RGF0YS51c2VyLnVpZCA9PT0gT0NDX1VTRVJfSURfQU5PTllNT1VTKSB8fFxuICAgICAgICAgIHRoaXMuY2FydFNlcnZpY2UuaXNHdWVzdENhcnQoKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gY2FydERhdGEuZ3VpZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FydERhdGEuY29kZTtcbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKGNhcnRJZCA9PiAhIWNhcnRJZClcbiAgICApO1xuXG4gICAgdGhpcy5nZXRDaGVja291dERldGFpbHNMb2FkZWQkID0gdGhpcy5jYXJ0SWQkLnBpcGUoXG4gICAgICB0YXAoY2FydElkID0+IHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmxvYWRDaGVja291dERldGFpbHMoY2FydElkKSksXG4gICAgICBzaGFyZVJlcGxheSgxKSxcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLmNoZWNrb3V0U2VydmljZS5nZXRDaGVja291dERldGFpbHNMb2FkZWQoKSksXG4gICAgICBza2lwV2hpbGUobG9hZGVkID0+ICFsb2FkZWQpXG4gICAgKTtcbiAgfVxuXG4gIGdldERlbGl2ZXJ5QWRkcmVzcygpOiBPYnNlcnZhYmxlPEFkZHJlc3M+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDaGVja291dERldGFpbHNMb2FkZWQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5nZXREZWxpdmVyeUFkZHJlc3MoKSlcbiAgICApO1xuICB9XG5cbiAgZ2V0U2VsZWN0ZWREZWxpdmVyeU1vZGVDb2RlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2hlY2tvdXREZXRhaWxzTG9hZGVkJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKCgpID0+XG4gICAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuZ2V0U2VsZWN0ZWREZWxpdmVyeU1vZGVDb2RlKClcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgZ2V0UGF5bWVudERldGFpbHMoKTogT2JzZXJ2YWJsZTxQYXltZW50RGV0YWlscz4ge1xuICAgIHJldHVybiB0aGlzLmdldENoZWNrb3V0RGV0YWlsc0xvYWRlZCQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLmNoZWNrb3V0UGF5bWVudFNlcnZpY2UuZ2V0UGF5bWVudERldGFpbHMoKSlcbiAgICApO1xuICB9XG59XG4iXX0=