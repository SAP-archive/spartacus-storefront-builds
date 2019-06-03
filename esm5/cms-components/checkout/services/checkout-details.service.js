/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CartService, CheckoutService, } from '@spartacus/core';
import { map, shareReplay, skipWhile, switchMap, tap, filter, } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var CheckoutDetailsService = /** @class */ (function () {
    function CheckoutDetailsService(checkoutService, cartService) {
        var _this = this;
        this.checkoutService = checkoutService;
        this.cartService = cartService;
        this.cartId$ = this.cartService.getActive().pipe(map(function (cartData) { return cartData.code; }), filter(function (cartId) { return !!cartId; }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtZGV0YWlscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvc2VydmljZXMvY2hlY2tvdXQtZGV0YWlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFFTCxXQUFXLEVBQ1gsZUFBZSxHQUVoQixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFDTCxHQUFHLEVBQ0gsV0FBVyxFQUNYLFNBQVMsRUFDVCxTQUFTLEVBQ1QsR0FBRyxFQUNILE1BQU0sR0FDUCxNQUFNLGdCQUFnQixDQUFDOzs7QUFFeEI7SUFPRSxnQ0FDVSxlQUFnQyxFQUNoQyxXQUF3QjtRQUZsQyxpQkFlQztRQWRTLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUVoQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUM5QyxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFiLENBQWEsQ0FBQyxFQUM5QixNQUFNLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxDQUFDLENBQUMsTUFBTSxFQUFSLENBQVEsQ0FBQyxDQUMzQixDQUFDO1FBRUYsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUNoRCxHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxFQUFoRCxDQUFnRCxDQUFDLEVBQy9ELFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFDZCxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsd0JBQXdCLEVBQUUsRUFBL0MsQ0FBK0MsQ0FBQyxFQUNoRSxTQUFTLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxDQUFDLE1BQU0sRUFBUCxDQUFPLENBQUMsQ0FDN0IsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxtREFBa0I7OztJQUFsQjtRQUFBLGlCQUlDO1FBSEMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUN4QyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLEVBQUUsRUFBekMsQ0FBeUMsQ0FBQyxDQUMzRCxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELDREQUEyQjs7O0lBQTNCO1FBQUEsaUJBSUM7UUFIQyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQ3hDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQywyQkFBMkIsRUFBRSxFQUFsRCxDQUFrRCxDQUFDLENBQ3BFLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsa0RBQWlCOzs7SUFBakI7UUFBQSxpQkFJQztRQUhDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FDeEMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixFQUFFLEVBQXhDLENBQXdDLENBQUMsQ0FDMUQsQ0FBQztJQUNKLENBQUM7O2dCQXhDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQWZDLGVBQWU7Z0JBRGYsV0FBVzs7O2lDQUhiO0NBMERDLEFBekNELElBeUNDO1NBdENZLHNCQUFzQjs7O0lBQ2pDLHlDQUE0Qjs7SUFDNUIsMkRBQStDOzs7OztJQUc3QyxpREFBd0M7Ozs7O0lBQ3hDLDZDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFkZHJlc3MsXG4gIENhcnRTZXJ2aWNlLFxuICBDaGVja291dFNlcnZpY2UsXG4gIFBheW1lbnREZXRhaWxzLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgbWFwLFxuICBzaGFyZVJlcGxheSxcbiAgc2tpcFdoaWxlLFxuICBzd2l0Y2hNYXAsXG4gIHRhcCxcbiAgZmlsdGVyLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dERldGFpbHNTZXJ2aWNlIHtcbiAgY2FydElkJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICBnZXRDaGVja291dERldGFpbHNMb2FkZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5jYXJ0SWQkID0gdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKS5waXBlKFxuICAgICAgbWFwKGNhcnREYXRhID0+IGNhcnREYXRhLmNvZGUpLFxuICAgICAgZmlsdGVyKGNhcnRJZCA9PiAhIWNhcnRJZClcbiAgICApO1xuXG4gICAgdGhpcy5nZXRDaGVja291dERldGFpbHNMb2FkZWQkID0gdGhpcy5jYXJ0SWQkLnBpcGUoXG4gICAgICB0YXAoY2FydElkID0+IHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmxvYWRDaGVja291dERldGFpbHMoY2FydElkKSksXG4gICAgICBzaGFyZVJlcGxheSgxKSxcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLmNoZWNrb3V0U2VydmljZS5nZXRDaGVja291dERldGFpbHNMb2FkZWQoKSksXG4gICAgICBza2lwV2hpbGUobG9hZGVkID0+ICFsb2FkZWQpXG4gICAgKTtcbiAgfVxuXG4gIGdldERlbGl2ZXJ5QWRkcmVzcygpOiBPYnNlcnZhYmxlPEFkZHJlc3M+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDaGVja291dERldGFpbHNMb2FkZWQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy5jaGVja291dFNlcnZpY2UuZ2V0RGVsaXZlcnlBZGRyZXNzKCkpXG4gICAgKTtcbiAgfVxuXG4gIGdldFNlbGVjdGVkRGVsaXZlcnlNb2RlQ29kZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmdldENoZWNrb3V0RGV0YWlsc0xvYWRlZCQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLmNoZWNrb3V0U2VydmljZS5nZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZUNvZGUoKSlcbiAgICApO1xuICB9XG5cbiAgZ2V0UGF5bWVudERldGFpbHMoKTogT2JzZXJ2YWJsZTxQYXltZW50RGV0YWlscz4ge1xuICAgIHJldHVybiB0aGlzLmdldENoZWNrb3V0RGV0YWlsc0xvYWRlZCQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLmNoZWNrb3V0U2VydmljZS5nZXRQYXltZW50RGV0YWlscygpKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==