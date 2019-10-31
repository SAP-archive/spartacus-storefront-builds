/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CartService, CartVoucherService, AuthService, OCC_USER_ID_ANONYMOUS, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { map, startWith, tap } from 'rxjs/operators';
var CartCouponComponent = /** @class */ (function () {
    function CartCouponComponent(cartService, authService, cartVoucherService, formBuilder) {
        this.cartService = cartService;
        this.authService = authService;
        this.cartVoucherService = cartVoucherService;
        this.formBuilder = formBuilder;
        this.subscription = new Subscription();
    }
    /**
     * @return {?}
     */
    CartCouponComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.cart$ = combineLatest([
            this.cartService.getActive(),
            this.authService.getOccUserId(),
        ]).pipe(tap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), cart = _b[0], userId = _b[1];
            return (_this.cartId =
                userId === OCC_USER_ID_ANONYMOUS ? cart.guid : cart.code);
        })), map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 1), cart = _b[0];
            return cart;
        })));
        this.cartIsLoading$ = this.cartService
            .getLoaded()
            .pipe(map((/**
         * @param {?} loaded
         * @return {?}
         */
        function (loaded) { return !loaded; })));
        this.cartVoucherService.resetAddVoucherProcessingState();
        this.form = this.formBuilder.group({
            couponCode: ['', [Validators.required]],
        });
        this.submitDisabled$ = combineLatest([
            this.cartIsLoading$,
            this.form.valueChanges.pipe(startWith(true), map((/**
             * @return {?}
             */
            function () { return _this.form.valid; }))),
            this.cartVoucherService.getAddVoucherResultLoading(),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 3), cartIsLoading = _b[0], btnEnabled = _b[1], addVoucherIsLoading = _b[2];
            return cartIsLoading || !btnEnabled || addVoucherIsLoading;
        })));
        this.subscription.add(this.cartVoucherService
            .getAddVoucherResultSuccess()
            .subscribe((/**
         * @param {?} success
         * @return {?}
         */
        function (success) {
            _this.onSuccess(success);
        })));
    };
    /**
     * @param {?} success
     * @return {?}
     */
    CartCouponComponent.prototype.onSuccess = /**
     * @param {?} success
     * @return {?}
     */
    function (success) {
        if (success) {
            this.form.reset();
            this.cartVoucherService.resetAddVoucherProcessingState();
        }
    };
    /**
     * @return {?}
     */
    CartCouponComponent.prototype.applyVoucher = /**
     * @return {?}
     */
    function () {
        this.cartVoucherService.addVoucher(this.form.value.couponCode, this.cartId);
    };
    /**
     * @return {?}
     */
    CartCouponComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.cartVoucherService.resetAddVoucherProcessingState();
    };
    CartCouponComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-cart-coupon',
                    template: "<ng-container *ngIf=\"cart$ | async as cart\">\n  <div class=\"cx-cart-coupon-title\">\n    {{ 'voucher.coupon' | cxTranslate }}\n  </div>\n  <div class=\"form-group \">\n    <form (submit)=\"applyVoucher()\" [formGroup]=\"form\">\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n          <input\n            type=\"text\"\n            class=\"form-control input-coupon-code\"\n            id=\"applyVoucher\"\n            formControlName=\"couponCode\"\n            placeholder=\"{{ 'voucher.placeholder' | cxTranslate }}\"\n          />\n        </div>\n        <div class=\"col-md-4\">\n          <button\n            class=\"btn btn-block btn-action apply-coupon-button\"\n            type=\"submit\"\n            [disabled]=\"submitDisabled$ | async\"\n            [class.disabled]=\"submitDisabled$ | async\"\n          >\n            {{ 'voucher.apply' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n\n  <cx-applied-coupons\n    [vouchers]=\"cart.appliedVouchers\"\n    [cartIsLoading]=\"cartIsLoading$ | async\"\n    [isReadOnly]=\"false\"\n  >\n  </cx-applied-coupons>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    CartCouponComponent.ctorParameters = function () { return [
        { type: CartService },
        { type: AuthService },
        { type: CartVoucherService },
        { type: FormBuilder }
    ]; };
    return CartCouponComponent;
}());
export { CartCouponComponent };
if (false) {
    /** @type {?} */
    CartCouponComponent.prototype.form;
    /** @type {?} */
    CartCouponComponent.prototype.cartIsLoading$;
    /** @type {?} */
    CartCouponComponent.prototype.submitDisabled$;
    /** @type {?} */
    CartCouponComponent.prototype.cart$;
    /** @type {?} */
    CartCouponComponent.prototype.cartId;
    /**
     * @type {?}
     * @private
     */
    CartCouponComponent.prototype.subscription;
    /**
     * @type {?}
     * @private
     */
    CartCouponComponent.prototype.cartService;
    /**
     * @type {?}
     * @private
     */
    CartCouponComponent.prototype.authService;
    /**
     * @type {?}
     * @private
     */
    CartCouponComponent.prototype.cartVoucherService;
    /**
     * @type {?}
     * @private
     */
    CartCouponComponent.prototype.formBuilder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LWNvdXBvbi9jYXJ0LWNvdXBvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFFTCxXQUFXLEVBQ1gsa0JBQWtCLEVBQ2xCLFdBQVcsRUFDWCxxQkFBcUIsR0FDdEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRDtJQWFFLDZCQUNVLFdBQXdCLEVBQ3hCLFdBQXdCLEVBQ3hCLGtCQUFzQyxFQUN0QyxXQUF3QjtRQUh4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBTjFCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQU92QyxDQUFDOzs7O0lBRUosc0NBQVE7OztJQUFSO1FBQUEsaUJBNENDO1FBM0NDLElBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFO1lBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFO1NBQ2hDLENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FB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OztJQUNoQiw2Q0FBb0M7O0lBQ3BDLDhDQUFxQzs7SUFDckMsb0NBQXdCOztJQUN4QixxQ0FBZTs7Ozs7SUFFZiwyQ0FBMEM7Ozs7O0lBR3hDLDBDQUFnQzs7Ozs7SUFDaEMsMENBQWdDOzs7OztJQUNoQyxpREFBOEM7Ozs7O0lBQzlDLDBDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBDYXJ0LFxuICBDYXJ0U2VydmljZSxcbiAgQ2FydFZvdWNoZXJTZXJ2aWNlLFxuICBBdXRoU2VydmljZSxcbiAgT0NDX1VTRVJfSURfQU5PTllNT1VTLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9pbnRlcm5hbC9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgbWFwLCBzdGFydFdpdGgsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2FydC1jb3Vwb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FydC1jb3Vwb24uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0Q291cG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBmb3JtOiBGb3JtR3JvdXA7XG4gIGNhcnRJc0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBzdWJtaXREaXNhYmxlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGNhcnQkOiBPYnNlcnZhYmxlPENhcnQ+O1xuICBjYXJ0SWQ6IHN0cmluZztcblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIGNhcnRWb3VjaGVyU2VydmljZTogQ2FydFZvdWNoZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNhcnQkID0gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpLFxuICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKSxcbiAgICBdKS5waXBlKFxuICAgICAgdGFwKFxuICAgICAgICAoW2NhcnQsIHVzZXJJZF06IFtDYXJ0LCBzdHJpbmddKSA9PlxuICAgICAgICAgICh0aGlzLmNhcnRJZCA9XG4gICAgICAgICAgICB1c2VySWQgPT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUyA/IGNhcnQuZ3VpZCA6IGNhcnQuY29kZSlcbiAgICAgICksXG4gICAgICBtYXAoKFtjYXJ0XTogW0NhcnQsIHN0cmluZ10pID0+IGNhcnQpXG4gICAgKTtcblxuICAgIHRoaXMuY2FydElzTG9hZGluZyQgPSB0aGlzLmNhcnRTZXJ2aWNlXG4gICAgICAuZ2V0TG9hZGVkKClcbiAgICAgIC5waXBlKG1hcChsb2FkZWQgPT4gIWxvYWRlZCkpO1xuXG4gICAgdGhpcy5jYXJ0Vm91Y2hlclNlcnZpY2UucmVzZXRBZGRWb3VjaGVyUHJvY2Vzc2luZ1N0YXRlKCk7XG5cbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGNvdXBvbkNvZGU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICB9KTtcblxuICAgIHRoaXMuc3VibWl0RGlzYWJsZWQkID0gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmNhcnRJc0xvYWRpbmckLFxuICAgICAgdGhpcy5mb3JtLnZhbHVlQ2hhbmdlcy5waXBlKFxuICAgICAgICBzdGFydFdpdGgodHJ1ZSksXG4gICAgICAgIG1hcCgoKSA9PiB0aGlzLmZvcm0udmFsaWQpXG4gICAgICApLFxuICAgICAgdGhpcy5jYXJ0Vm91Y2hlclNlcnZpY2UuZ2V0QWRkVm91Y2hlclJlc3VsdExvYWRpbmcoKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKFxuICAgICAgICAoW2NhcnRJc0xvYWRpbmcsIGJ0bkVuYWJsZWQsIGFkZFZvdWNoZXJJc0xvYWRpbmddKSA9PlxuICAgICAgICAgIGNhcnRJc0xvYWRpbmcgfHwgIWJ0bkVuYWJsZWQgfHwgYWRkVm91Y2hlcklzTG9hZGluZ1xuICAgICAgKVxuICAgICk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLmNhcnRWb3VjaGVyU2VydmljZVxuICAgICAgICAuZ2V0QWRkVm91Y2hlclJlc3VsdFN1Y2Nlc3MoKVxuICAgICAgICAuc3Vic2NyaWJlKHN1Y2Nlc3MgPT4ge1xuICAgICAgICAgIHRoaXMub25TdWNjZXNzKHN1Y2Nlc3MpO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICBvblN1Y2Nlc3Moc3VjY2VzczogYm9vbGVhbikge1xuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICB0aGlzLmZvcm0ucmVzZXQoKTtcbiAgICAgIHRoaXMuY2FydFZvdWNoZXJTZXJ2aWNlLnJlc2V0QWRkVm91Y2hlclByb2Nlc3NpbmdTdGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGFwcGx5Vm91Y2hlcigpOiB2b2lkIHtcbiAgICB0aGlzLmNhcnRWb3VjaGVyU2VydmljZS5hZGRWb3VjaGVyKHRoaXMuZm9ybS52YWx1ZS5jb3Vwb25Db2RlLCB0aGlzLmNhcnRJZCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHRoaXMuY2FydFZvdWNoZXJTZXJ2aWNlLnJlc2V0QWRkVm91Y2hlclByb2Nlc3NpbmdTdGF0ZSgpO1xuICB9XG59XG4iXX0=