/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CartService, CheckoutService, } from '@spartacus/core';
import { map, shareReplay, skipWhile, switchMap, tap } from 'rxjs/operators';
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
        this.cartId$ = this.cartService
            .getActive()
            .pipe(map(cartData => cartData.code));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtZGV0YWlscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvc2VydmljZXMvY2hlY2tvdXQtZGV0YWlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFFTCxXQUFXLEVBQ1gsZUFBZSxHQUVoQixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUs3RSxNQUFNLE9BQU8sc0JBQXNCOzs7OztJQUlqQyxZQUNVLGVBQWdDLEVBQ2hDLFdBQXdCO1FBRHhCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUVoQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXO2FBQzVCLFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUV4QyxJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ2hELEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUMsRUFDL0QsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUNkLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLHdCQUF3QixFQUFFLENBQUMsRUFDaEUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FDN0IsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUN4QyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQzNELENBQUM7SUFDSixDQUFDOzs7O0lBRUQsMkJBQTJCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FDeEMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsMkJBQTJCLEVBQUUsQ0FBQyxDQUNwRSxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FDeEMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUMxRCxDQUFDO0lBQ0osQ0FBQzs7O1lBdkNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVJDLGVBQWU7WUFEZixXQUFXOzs7OztJQVdYLHlDQUE0Qjs7SUFDNUIsMkRBQStDOzs7OztJQUc3QyxpREFBd0M7Ozs7O0lBQ3hDLDZDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFkZHJlc3MsXG4gIENhcnRTZXJ2aWNlLFxuICBDaGVja291dFNlcnZpY2UsXG4gIFBheW1lbnREZXRhaWxzLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzaGFyZVJlcGxheSwgc2tpcFdoaWxlLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0RGV0YWlsc1NlcnZpY2Uge1xuICBjYXJ0SWQkOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIGdldENoZWNrb3V0RGV0YWlsc0xvYWRlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjaGVja291dFNlcnZpY2U6IENoZWNrb3V0U2VydmljZSxcbiAgICBwcml2YXRlIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZVxuICApIHtcbiAgICB0aGlzLmNhcnRJZCQgPSB0aGlzLmNhcnRTZXJ2aWNlXG4gICAgICAuZ2V0QWN0aXZlKClcbiAgICAgIC5waXBlKG1hcChjYXJ0RGF0YSA9PiBjYXJ0RGF0YS5jb2RlKSk7XG5cbiAgICB0aGlzLmdldENoZWNrb3V0RGV0YWlsc0xvYWRlZCQgPSB0aGlzLmNhcnRJZCQucGlwZShcbiAgICAgIHRhcChjYXJ0SWQgPT4gdGhpcy5jaGVja291dFNlcnZpY2UubG9hZENoZWNrb3V0RGV0YWlscyhjYXJ0SWQpKSxcbiAgICAgIHNoYXJlUmVwbGF5KDEpLFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmdldENoZWNrb3V0RGV0YWlsc0xvYWRlZCgpKSxcbiAgICAgIHNraXBXaGlsZShsb2FkZWQgPT4gIWxvYWRlZClcbiAgICApO1xuICB9XG5cbiAgZ2V0RGVsaXZlcnlBZGRyZXNzKCk6IE9ic2VydmFibGU8QWRkcmVzcz4ge1xuICAgIHJldHVybiB0aGlzLmdldENoZWNrb3V0RGV0YWlsc0xvYWRlZCQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLmNoZWNrb3V0U2VydmljZS5nZXREZWxpdmVyeUFkZHJlc3MoKSlcbiAgICApO1xuICB9XG5cbiAgZ2V0U2VsZWN0ZWREZWxpdmVyeU1vZGVDb2RlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2hlY2tvdXREZXRhaWxzTG9hZGVkJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmdldFNlbGVjdGVkRGVsaXZlcnlNb2RlQ29kZSgpKVxuICAgICk7XG4gIH1cblxuICBnZXRQYXltZW50RGV0YWlscygpOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2hlY2tvdXREZXRhaWxzTG9hZGVkJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmdldFBheW1lbnREZXRhaWxzKCkpXG4gICAgKTtcbiAgfVxufVxuIl19