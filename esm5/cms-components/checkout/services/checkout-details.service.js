/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        function () { return _this.checkoutService.getDeliveryAddress(); })));
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
        function () { return _this.checkoutService.getSelectedDeliveryModeCode(); })));
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
        function () { return _this.checkoutService.getPaymentDetails(); })));
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
    /** @nocollapse */ CheckoutDetailsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CheckoutDetailsService_Factory() { return new CheckoutDetailsService(i0.ɵɵinject(i1.CheckoutService), i0.ɵɵinject(i1.CartService)); }, token: CheckoutDetailsService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtZGV0YWlscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvc2VydmljZXMvY2hlY2tvdXQtZGV0YWlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFFTCxXQUFXLEVBQ1gsZUFBZSxHQUVoQixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFDTCxHQUFHLEVBQ0gsV0FBVyxFQUNYLFNBQVMsRUFDVCxTQUFTLEVBQ1QsR0FBRyxFQUNILE1BQU0sR0FDUCxNQUFNLGdCQUFnQixDQUFDOzs7QUFFeEI7SUFPRSxnQ0FDVSxlQUFnQyxFQUNoQyxXQUF3QjtRQUZsQyxpQkFlQztRQWRTLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUVoQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUM5QyxHQUFHOzs7O1FBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFiLENBQWEsRUFBQyxFQUM5QixNQUFNOzs7O1FBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxDQUFDLENBQUMsTUFBTSxFQUFSLENBQVEsRUFBQyxDQUMzQixDQUFDO1FBRUYsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUNoRCxHQUFHOzs7O1FBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxFQUFoRCxDQUFnRCxFQUFDLEVBQy9ELFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFDZCxTQUFTOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyx3QkFBd0IsRUFBRSxFQUEvQyxDQUErQyxFQUFDLEVBQ2hFLFNBQVM7Ozs7UUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLENBQUMsTUFBTSxFQUFQLENBQU8sRUFBQyxDQUM3QixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELG1EQUFrQjs7O0lBQWxCO1FBQUEsaUJBSUM7UUFIQyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQ3hDLFNBQVM7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixFQUFFLEVBQXpDLENBQXlDLEVBQUMsQ0FDM0QsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCw0REFBMkI7OztJQUEzQjtRQUFBLGlCQUlDO1FBSEMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUN4QyxTQUFTOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQywyQkFBMkIsRUFBRSxFQUFsRCxDQUFrRCxFQUFDLENBQ3BFLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsa0RBQWlCOzs7SUFBakI7UUFBQSxpQkFJQztRQUhDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FDeEMsU0FBUzs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLEVBQUUsRUFBeEMsQ0FBd0MsRUFBQyxDQUMxRCxDQUFDO0lBQ0osQ0FBQzs7Z0JBeENGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBZkMsZUFBZTtnQkFEZixXQUFXOzs7aUNBSGI7Q0EwREMsQUF6Q0QsSUF5Q0M7U0F0Q1ksc0JBQXNCOzs7SUFDakMseUNBQTRCOztJQUM1QiwyREFBK0M7Ozs7O0lBRzdDLGlEQUF3Qzs7Ozs7SUFDeEMsNkNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWRkcmVzcyxcbiAgQ2FydFNlcnZpY2UsXG4gIENoZWNrb3V0U2VydmljZSxcbiAgUGF5bWVudERldGFpbHMsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBtYXAsXG4gIHNoYXJlUmVwbGF5LFxuICBza2lwV2hpbGUsXG4gIHN3aXRjaE1hcCxcbiAgdGFwLFxuICBmaWx0ZXIsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0RGV0YWlsc1NlcnZpY2Uge1xuICBjYXJ0SWQkOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIGdldENoZWNrb3V0RGV0YWlsc0xvYWRlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjaGVja291dFNlcnZpY2U6IENoZWNrb3V0U2VydmljZSxcbiAgICBwcml2YXRlIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZVxuICApIHtcbiAgICB0aGlzLmNhcnRJZCQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpLnBpcGUoXG4gICAgICBtYXAoY2FydERhdGEgPT4gY2FydERhdGEuY29kZSksXG4gICAgICBmaWx0ZXIoY2FydElkID0+ICEhY2FydElkKVxuICAgICk7XG5cbiAgICB0aGlzLmdldENoZWNrb3V0RGV0YWlsc0xvYWRlZCQgPSB0aGlzLmNhcnRJZCQucGlwZShcbiAgICAgIHRhcChjYXJ0SWQgPT4gdGhpcy5jaGVja291dFNlcnZpY2UubG9hZENoZWNrb3V0RGV0YWlscyhjYXJ0SWQpKSxcbiAgICAgIHNoYXJlUmVwbGF5KDEpLFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmdldENoZWNrb3V0RGV0YWlsc0xvYWRlZCgpKSxcbiAgICAgIHNraXBXaGlsZShsb2FkZWQgPT4gIWxvYWRlZClcbiAgICApO1xuICB9XG5cbiAgZ2V0RGVsaXZlcnlBZGRyZXNzKCk6IE9ic2VydmFibGU8QWRkcmVzcz4ge1xuICAgIHJldHVybiB0aGlzLmdldENoZWNrb3V0RGV0YWlsc0xvYWRlZCQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLmNoZWNrb3V0U2VydmljZS5nZXREZWxpdmVyeUFkZHJlc3MoKSlcbiAgICApO1xuICB9XG5cbiAgZ2V0U2VsZWN0ZWREZWxpdmVyeU1vZGVDb2RlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2hlY2tvdXREZXRhaWxzTG9hZGVkJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmdldFNlbGVjdGVkRGVsaXZlcnlNb2RlQ29kZSgpKVxuICAgICk7XG4gIH1cblxuICBnZXRQYXltZW50RGV0YWlscygpOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2hlY2tvdXREZXRhaWxzTG9hZGVkJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmdldFBheW1lbnREZXRhaWxzKCkpXG4gICAgKTtcbiAgfVxufVxuIl19