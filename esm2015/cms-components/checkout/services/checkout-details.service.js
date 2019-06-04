/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        () => this.checkoutService.getDeliveryAddress())));
    }
    /**
     * @return {?}
     */
    getSelectedDeliveryModeCode() {
        return this.getCheckoutDetailsLoaded$.pipe(switchMap((/**
         * @return {?}
         */
        () => this.checkoutService.getSelectedDeliveryModeCode())));
    }
    /**
     * @return {?}
     */
    getPaymentDetails() {
        return this.getCheckoutDetailsLoaded$.pipe(switchMap((/**
         * @return {?}
         */
        () => this.checkoutService.getPaymentDetails())));
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
/** @nocollapse */ CheckoutDetailsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CheckoutDetailsService_Factory() { return new CheckoutDetailsService(i0.ɵɵinject(i1.CheckoutService), i0.ɵɵinject(i1.CartService)); }, token: CheckoutDetailsService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtZGV0YWlscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvc2VydmljZXMvY2hlY2tvdXQtZGV0YWlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFFTCxXQUFXLEVBQ1gsZUFBZSxHQUVoQixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFDTCxHQUFHLEVBQ0gsV0FBVyxFQUNYLFNBQVMsRUFDVCxTQUFTLEVBQ1QsR0FBRyxFQUNILE1BQU0sR0FDUCxNQUFNLGdCQUFnQixDQUFDOzs7QUFLeEIsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFJakMsWUFDVSxlQUFnQyxFQUNoQyxXQUF3QjtRQUR4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFFaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FDOUMsR0FBRzs7OztRQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBQyxFQUM5QixNQUFNOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFDLENBQzNCLENBQUM7UUFFRixJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ2hELEdBQUc7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFDL0QsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUNkLFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsd0JBQXdCLEVBQUUsRUFBQyxFQUNoRSxTQUFTOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBQyxDQUM3QixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQ3hDLFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLEVBQUUsRUFBQyxDQUMzRCxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELDJCQUEyQjtRQUN6QixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQ3hDLFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsMkJBQTJCLEVBQUUsRUFBQyxDQUNwRSxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FDeEMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxFQUFDLENBQzFELENBQUM7SUFDSixDQUFDOzs7WUF4Q0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBZkMsZUFBZTtZQURmLFdBQVc7Ozs7O0lBa0JYLHlDQUE0Qjs7SUFDNUIsMkRBQStDOzs7OztJQUc3QyxpREFBd0M7Ozs7O0lBQ3hDLDZDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFkZHJlc3MsXG4gIENhcnRTZXJ2aWNlLFxuICBDaGVja291dFNlcnZpY2UsXG4gIFBheW1lbnREZXRhaWxzLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgbWFwLFxuICBzaGFyZVJlcGxheSxcbiAgc2tpcFdoaWxlLFxuICBzd2l0Y2hNYXAsXG4gIHRhcCxcbiAgZmlsdGVyLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dERldGFpbHNTZXJ2aWNlIHtcbiAgY2FydElkJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICBnZXRDaGVja291dERldGFpbHNMb2FkZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5jYXJ0SWQkID0gdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKS5waXBlKFxuICAgICAgbWFwKGNhcnREYXRhID0+IGNhcnREYXRhLmNvZGUpLFxuICAgICAgZmlsdGVyKGNhcnRJZCA9PiAhIWNhcnRJZClcbiAgICApO1xuXG4gICAgdGhpcy5nZXRDaGVja291dERldGFpbHNMb2FkZWQkID0gdGhpcy5jYXJ0SWQkLnBpcGUoXG4gICAgICB0YXAoY2FydElkID0+IHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmxvYWRDaGVja291dERldGFpbHMoY2FydElkKSksXG4gICAgICBzaGFyZVJlcGxheSgxKSxcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLmNoZWNrb3V0U2VydmljZS5nZXRDaGVja291dERldGFpbHNMb2FkZWQoKSksXG4gICAgICBza2lwV2hpbGUobG9hZGVkID0+ICFsb2FkZWQpXG4gICAgKTtcbiAgfVxuXG4gIGdldERlbGl2ZXJ5QWRkcmVzcygpOiBPYnNlcnZhYmxlPEFkZHJlc3M+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDaGVja291dERldGFpbHNMb2FkZWQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy5jaGVja291dFNlcnZpY2UuZ2V0RGVsaXZlcnlBZGRyZXNzKCkpXG4gICAgKTtcbiAgfVxuXG4gIGdldFNlbGVjdGVkRGVsaXZlcnlNb2RlQ29kZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmdldENoZWNrb3V0RGV0YWlsc0xvYWRlZCQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLmNoZWNrb3V0U2VydmljZS5nZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZUNvZGUoKSlcbiAgICApO1xuICB9XG5cbiAgZ2V0UGF5bWVudERldGFpbHMoKTogT2JzZXJ2YWJsZTxQYXltZW50RGV0YWlscz4ge1xuICAgIHJldHVybiB0aGlzLmdldENoZWNrb3V0RGV0YWlsc0xvYWRlZCQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLmNoZWNrb3V0U2VydmljZS5nZXRQYXltZW50RGV0YWlscygpKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==