/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CartService, CheckoutService, } from '@spartacus/core';
import { map, shareReplay, skipWhile, switchMap, tap, filter, } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
export class CheckoutDetailsService {
    /**
     * @param {?} checkoutService
     * @param {?} cartService
     */
    constructor(checkoutService, cartService) {
        this.checkoutService = checkoutService;
        this.cartService = cartService;
        this.cartId$ = this.cartService.getActive().pipe(map(cartData => cartData.code), filter(cartId => !!cartId));
        this.getCheckoutDetailsLoaded$ = this.cartId$.pipe(tap(cartId => this.checkoutService.loadCheckoutDetails(cartId)), shareReplay(1), switchMap(() => this.checkoutService.getCheckoutDetailsLoaded()), skipWhile(loaded => !loaded));
    }
    /**
     * @return {?}
     */
    getDeliveryAddress() {
        return this.getCheckoutDetailsLoaded$.pipe(switchMap(() => this.checkoutService.getDeliveryAddress()));
    }
    /**
     * @return {?}
     */
    getSelectedDeliveryModeCode() {
        return this.getCheckoutDetailsLoaded$.pipe(switchMap(() => this.checkoutService.getSelectedDeliveryModeCode()));
    }
    /**
     * @return {?}
     */
    getPaymentDetails() {
        return this.getCheckoutDetailsLoaded$.pipe(switchMap(() => this.checkoutService.getPaymentDetails()));
    }
}
CheckoutDetailsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CheckoutDetailsService.ctorParameters = () => [
    { type: CheckoutService },
    { type: CartService }
];
/** @nocollapse */ CheckoutDetailsService.ngInjectableDef = i0.defineInjectable({ factory: function CheckoutDetailsService_Factory() { return new CheckoutDetailsService(i0.inject(i1.CheckoutService), i0.inject(i1.CartService)); }, token: CheckoutDetailsService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtZGV0YWlscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvc2VydmljZXMvY2hlY2tvdXQtZGV0YWlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFFTCxXQUFXLEVBQ1gsZUFBZSxHQUVoQixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFDTCxHQUFHLEVBQ0gsV0FBVyxFQUNYLFNBQVMsRUFDVCxTQUFTLEVBQ1QsR0FBRyxFQUNILE1BQU0sR0FDUCxNQUFNLGdCQUFnQixDQUFDOzs7QUFLeEIsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFJakMsWUFDVSxlQUFnQyxFQUNoQyxXQUF3QjtRQUR4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFFaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FDOUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUM5QixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQzNCLENBQUM7UUFFRixJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ2hELEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUMsRUFDL0QsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUNkLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLHdCQUF3QixFQUFFLENBQUMsRUFDaEUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FDN0IsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUN4QyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQzNELENBQUM7SUFDSixDQUFDOzs7O0lBRUQsMkJBQTJCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FDeEMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsMkJBQTJCLEVBQUUsQ0FBQyxDQUNwRSxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FDeEMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUMxRCxDQUFDO0lBQ0osQ0FBQzs7O1lBeENGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQWZDLGVBQWU7WUFEZixXQUFXOzs7OztJQWtCWCx5Q0FBNEI7O0lBQzVCLDJEQUErQzs7Ozs7SUFHN0MsaURBQXdDOzs7OztJQUN4Qyw2Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBZGRyZXNzLFxuICBDYXJ0U2VydmljZSxcbiAgQ2hlY2tvdXRTZXJ2aWNlLFxuICBQYXltZW50RGV0YWlscyxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIG1hcCxcbiAgc2hhcmVSZXBsYXksXG4gIHNraXBXaGlsZSxcbiAgc3dpdGNoTWFwLFxuICB0YXAsXG4gIGZpbHRlcixcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXREZXRhaWxzU2VydmljZSB7XG4gIGNhcnRJZCQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgZ2V0Q2hlY2tvdXREZXRhaWxzTG9hZGVkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNoZWNrb3V0U2VydmljZTogQ2hlY2tvdXRTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuY2FydElkJCA9IHRoaXMuY2FydFNlcnZpY2UuZ2V0QWN0aXZlKCkucGlwZShcbiAgICAgIG1hcChjYXJ0RGF0YSA9PiBjYXJ0RGF0YS5jb2RlKSxcbiAgICAgIGZpbHRlcihjYXJ0SWQgPT4gISFjYXJ0SWQpXG4gICAgKTtcblxuICAgIHRoaXMuZ2V0Q2hlY2tvdXREZXRhaWxzTG9hZGVkJCA9IHRoaXMuY2FydElkJC5waXBlKFxuICAgICAgdGFwKGNhcnRJZCA9PiB0aGlzLmNoZWNrb3V0U2VydmljZS5sb2FkQ2hlY2tvdXREZXRhaWxzKGNhcnRJZCkpLFxuICAgICAgc2hhcmVSZXBsYXkoMSksXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy5jaGVja291dFNlcnZpY2UuZ2V0Q2hlY2tvdXREZXRhaWxzTG9hZGVkKCkpLFxuICAgICAgc2tpcFdoaWxlKGxvYWRlZCA9PiAhbG9hZGVkKVxuICAgICk7XG4gIH1cblxuICBnZXREZWxpdmVyeUFkZHJlc3MoKTogT2JzZXJ2YWJsZTxBZGRyZXNzPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2hlY2tvdXREZXRhaWxzTG9hZGVkJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmdldERlbGl2ZXJ5QWRkcmVzcygpKVxuICAgICk7XG4gIH1cblxuICBnZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZUNvZGUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDaGVja291dERldGFpbHNMb2FkZWQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy5jaGVja291dFNlcnZpY2UuZ2V0U2VsZWN0ZWREZWxpdmVyeU1vZGVDb2RlKCkpXG4gICAgKTtcbiAgfVxuXG4gIGdldFBheW1lbnREZXRhaWxzKCk6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHM+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDaGVja291dERldGFpbHNMb2FkZWQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy5jaGVja291dFNlcnZpY2UuZ2V0UGF5bWVudERldGFpbHMoKSlcbiAgICApO1xuICB9XG59XG4iXX0=