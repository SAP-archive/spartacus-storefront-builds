/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CartService, CheckoutService, CheckoutDeliveryService, CheckoutPaymentService, } from '@spartacus/core';
import { map, shareReplay, skipWhile, switchMap, tap, filter, } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
export class CheckoutDetailsService {
    /**
     * @param {?} checkoutService
     * @param {?} checkoutDeliveryService
     * @param {?} checkoutPaymentService
     * @param {?} cartService
     */
    constructor(checkoutService, checkoutDeliveryService, checkoutPaymentService, cartService) {
        this.checkoutService = checkoutService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutPaymentService = checkoutPaymentService;
        this.cartService = cartService;
        this.cartId$ = this.cartService.getActive().pipe(map((/**
         * @param {?} cartData
         * @return {?}
         */
        cartData => cartData.code)), filter((/**
         * @param {?} cartId
         * @return {?}
         */
        cartId => !!cartId)));
        this.getCheckoutDetailsLoaded$ = this.cartId$.pipe(tap((/**
         * @param {?} cartId
         * @return {?}
         */
        cartId => this.checkoutService.loadCheckoutDetails(cartId))), shareReplay(1), switchMap((/**
         * @return {?}
         */
        () => this.checkoutService.getCheckoutDetailsLoaded())), skipWhile((/**
         * @param {?} loaded
         * @return {?}
         */
        loaded => !loaded)));
    }
    /**
     * @return {?}
     */
    getDeliveryAddress() {
        return this.getCheckoutDetailsLoaded$.pipe(switchMap((/**
         * @return {?}
         */
        () => this.checkoutDeliveryService.getDeliveryAddress())));
    }
    /**
     * @return {?}
     */
    getSelectedDeliveryModeCode() {
        return this.getCheckoutDetailsLoaded$.pipe(switchMap((/**
         * @return {?}
         */
        () => this.checkoutDeliveryService.getSelectedDeliveryModeCode())));
    }
    /**
     * @return {?}
     */
    getPaymentDetails() {
        return this.getCheckoutDetailsLoaded$.pipe(switchMap((/**
         * @return {?}
         */
        () => this.checkoutPaymentService.getPaymentDetails())));
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
    { type: CheckoutDeliveryService },
    { type: CheckoutPaymentService },
    { type: CartService }
];
/** @nocollapse */ CheckoutDetailsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CheckoutDetailsService_Factory() { return new CheckoutDetailsService(i0.ɵɵinject(i1.CheckoutService), i0.ɵɵinject(i1.CheckoutDeliveryService), i0.ɵɵinject(i1.CheckoutPaymentService), i0.ɵɵinject(i1.CartService)); }, token: CheckoutDetailsService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtZGV0YWlscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvc2VydmljZXMvY2hlY2tvdXQtZGV0YWlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFFTCxXQUFXLEVBQ1gsZUFBZSxFQUVmLHVCQUF1QixFQUN2QixzQkFBc0IsR0FDdkIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQ0wsR0FBRyxFQUNILFdBQVcsRUFDWCxTQUFTLEVBQ1QsU0FBUyxFQUNULEdBQUcsRUFDSCxNQUFNLEdBQ1AsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBS3hCLE1BQU0sT0FBTyxzQkFBc0I7Ozs7Ozs7SUFJakMsWUFDVSxlQUFnQyxFQUNoQyx1QkFBZ0QsRUFDaEQsc0JBQThDLEVBQzlDLFdBQXdCO1FBSHhCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDOUMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFFaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FDOUMsR0FBRzs7OztRQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBQyxFQUM5QixNQUFNOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFDLENBQzNCLENBQUM7UUFFRixJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ2hELEdBQUc7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFDL0QsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUNkLFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsd0JBQXdCLEVBQUUsRUFBQyxFQUNoRSxTQUFTOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBQyxDQUM3QixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQ3hDLFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxrQkFBa0IsRUFBRSxFQUFDLENBQ25FLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsMkJBQTJCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FDeEMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFLENBQ2IsSUFBSSxDQUFDLHVCQUF1QixDQUFDLDJCQUEyQixFQUFFLEVBQzNELENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxpQkFBaUI7UUFDZixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQ3hDLFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxpQkFBaUIsRUFBRSxFQUFDLENBQ2pFLENBQUM7SUFDSixDQUFDOzs7WUE1Q0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBakJDLGVBQWU7WUFFZix1QkFBdUI7WUFDdkIsc0JBQXNCO1lBSnRCLFdBQVc7Ozs7O0lBb0JYLHlDQUE0Qjs7SUFDNUIsMkRBQStDOzs7OztJQUc3QyxpREFBd0M7Ozs7O0lBQ3hDLHlEQUF3RDs7Ozs7SUFDeEQsd0RBQXNEOzs7OztJQUN0RCw2Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBZGRyZXNzLFxuICBDYXJ0U2VydmljZSxcbiAgQ2hlY2tvdXRTZXJ2aWNlLFxuICBQYXltZW50RGV0YWlscyxcbiAgQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gIENoZWNrb3V0UGF5bWVudFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBtYXAsXG4gIHNoYXJlUmVwbGF5LFxuICBza2lwV2hpbGUsXG4gIHN3aXRjaE1hcCxcbiAgdGFwLFxuICBmaWx0ZXIsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0RGV0YWlsc1NlcnZpY2Uge1xuICBjYXJ0SWQkOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIGdldENoZWNrb3V0RGV0YWlsc0xvYWRlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjaGVja291dFNlcnZpY2U6IENoZWNrb3V0U2VydmljZSxcbiAgICBwcml2YXRlIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgICBwcml2YXRlIGNoZWNrb3V0UGF5bWVudFNlcnZpY2U6IENoZWNrb3V0UGF5bWVudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5jYXJ0SWQkID0gdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKS5waXBlKFxuICAgICAgbWFwKGNhcnREYXRhID0+IGNhcnREYXRhLmNvZGUpLFxuICAgICAgZmlsdGVyKGNhcnRJZCA9PiAhIWNhcnRJZClcbiAgICApO1xuXG4gICAgdGhpcy5nZXRDaGVja291dERldGFpbHNMb2FkZWQkID0gdGhpcy5jYXJ0SWQkLnBpcGUoXG4gICAgICB0YXAoY2FydElkID0+IHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmxvYWRDaGVja291dERldGFpbHMoY2FydElkKSksXG4gICAgICBzaGFyZVJlcGxheSgxKSxcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLmNoZWNrb3V0U2VydmljZS5nZXRDaGVja291dERldGFpbHNMb2FkZWQoKSksXG4gICAgICBza2lwV2hpbGUobG9hZGVkID0+ICFsb2FkZWQpXG4gICAgKTtcbiAgfVxuXG4gIGdldERlbGl2ZXJ5QWRkcmVzcygpOiBPYnNlcnZhYmxlPEFkZHJlc3M+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDaGVja291dERldGFpbHNMb2FkZWQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5nZXREZWxpdmVyeUFkZHJlc3MoKSlcbiAgICApO1xuICB9XG5cbiAgZ2V0U2VsZWN0ZWREZWxpdmVyeU1vZGVDb2RlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2hlY2tvdXREZXRhaWxzTG9hZGVkJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKCgpID0+XG4gICAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuZ2V0U2VsZWN0ZWREZWxpdmVyeU1vZGVDb2RlKClcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgZ2V0UGF5bWVudERldGFpbHMoKTogT2JzZXJ2YWJsZTxQYXltZW50RGV0YWlscz4ge1xuICAgIHJldHVybiB0aGlzLmdldENoZWNrb3V0RGV0YWlsc0xvYWRlZCQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLmNoZWNrb3V0UGF5bWVudFNlcnZpY2UuZ2V0UGF5bWVudERldGFpbHMoKSlcbiAgICApO1xuICB9XG59XG4iXX0=