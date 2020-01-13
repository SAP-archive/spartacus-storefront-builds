/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CartService, CartVoucherService, AuthService, OCC_USER_ID_ANONYMOUS, CustomerCouponService, FeatureConfigService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { map, startWith, tap } from 'rxjs/operators';
var CartCouponComponent = /** @class */ (function () {
    function CartCouponComponent(cartService, authService, cartVoucherService, formBuilder, customerCouponService, featureConfig) {
        this.cartService = cartService;
        this.authService = authService;
        this.cartVoucherService = cartVoucherService;
        this.formBuilder = formBuilder;
        this.customerCouponService = customerCouponService;
        this.featureConfig = featureConfig;
        this.MAX_CUSTOMER_COUPON_PAGE = 100;
        this.ignoreCloseEvent = false;
        this.subscription = new Subscription();
        this.couponBoxIsActive = false;
    }
    /**
     * @return {?}
     */
    CartCouponComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.customerCouponService) {
            this.customerCouponService.loadCustomerCoupons(this.MAX_CUSTOMER_COUPON_PAGE);
        }
        if (this.featureConfig && this.featureConfig.isLevel('1.5')) {
            this.cart$ = combineLatest([
                this.cartService.getActive(),
                this.authService.getOccUserId(),
                this.customerCouponService.getCustomerCoupons(this.MAX_CUSTOMER_COUPON_PAGE),
            ]).pipe(tap((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = tslib_1.__read(_a, 3), cart = _b[0], userId = _b[1], customerCoupons = _b[2];
                _this.cartId =
                    userId === OCC_USER_ID_ANONYMOUS ? cart.guid : cart.code;
                _this.getApplicableCustomerCoupons(cart, customerCoupons.coupons);
            })), map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = tslib_1.__read(_a, 1), cart = _b[0];
                return cart;
            })));
        }
        //TODO(issue:#5971) Deprecated since 1.5
        else {
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
        }
        //TODO(issue:#5971) Deprecated since 1.5
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
        this.subscription.add(this.cartVoucherService.getAddVoucherResultError().subscribe((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            _this.onError(error);
        })));
    };
    /**
     * @protected
     * @param {?} error
     * @return {?}
     */
    CartCouponComponent.prototype.onError = /**
     * @protected
     * @param {?} error
     * @return {?}
     */
    function (error) {
        if (error) {
            this.customerCouponService.loadCustomerCoupons(this.MAX_CUSTOMER_COUPON_PAGE);
            this.cartVoucherService.resetAddVoucherProcessingState();
        }
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
     * @protected
     * @param {?} cart
     * @param {?} coupons
     * @return {?}
     */
    CartCouponComponent.prototype.getApplicableCustomerCoupons = /**
     * @protected
     * @param {?} cart
     * @param {?} coupons
     * @return {?}
     */
    function (cart, coupons) {
        var _this = this;
        this.applicableCoupons = coupons || [];
        if (cart.appliedVouchers) {
            cart.appliedVouchers.forEach((/**
             * @param {?} appliedVoucher
             * @return {?}
             */
            function (appliedVoucher) {
                _this.applicableCoupons = _this.applicableCoupons.filter((/**
                 * @param {?} coupon
                 * @return {?}
                 */
                function (coupon) { return coupon.couponId !== appliedVoucher.code; }));
            }));
        }
        this.filteredCoupons = this.applicableCoupons;
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
     * @param {?} couponId
     * @return {?}
     */
    CartCouponComponent.prototype.applyCustomerCoupon = /**
     * @param {?} couponId
     * @return {?}
     */
    function (couponId) {
        this.cartVoucherService.addVoucher(couponId, this.cartId);
        this.couponBoxIsActive = false;
    };
    /**
     * @param {?} query
     * @return {?}
     */
    CartCouponComponent.prototype.filter = /**
     * @param {?} query
     * @return {?}
     */
    function (query) {
        /** @type {?} */
        var filterValue = query.toLowerCase();
        this.filteredCoupons = this.applicableCoupons.filter((/**
         * @param {?} coupon
         * @return {?}
         */
        function (coupon) { return coupon.couponId.toLowerCase().indexOf(filterValue) > -1; }));
    };
    /**
     * @return {?}
     */
    CartCouponComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        this.filteredCoupons = this.applicableCoupons;
        if (this.applicableCoupons.length > 0) {
            this.couponBoxIsActive = true;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CartCouponComponent.prototype.close = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.ignoreCloseEvent) {
            this.couponBoxIsActive = false;
            if (event && event.target) {
                ((/** @type {?} */ (event.target))).blur();
            }
        }
        this.ignoreCloseEvent = false;
    };
    /**
     * @return {?}
     */
    CartCouponComponent.prototype.disableClose = /**
     * @return {?}
     */
    function () {
        this.ignoreCloseEvent = true;
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
                    template: "<ng-container *ngIf=\"cart$ | async as cart\">\n  <div class=\"cx-cart-coupon-title\">\n    {{ 'voucher.coupon' | cxTranslate }}\n  </div>\n  <div class=\"form-group \">\n    <ng-container *cxFeatureLevel=\"'1.5'\">\n      <form (submit)=\"applyVoucher()\" [formGroup]=\"form\" autocomplete=\"off\">\n        <div class=\"row\">\n          <div class=\"col-md-8\">\n            <div class=\"cx-apply-voucher\">\n              <input\n                #couponInput\n                class=\"form-control input-coupon-code\"\n                id=\"applyVoucher\"\n                formControlName=\"couponCode\"\n                [placeholder]=\"'voucher.placeholder' | cxTranslate\"\n                aria-label=\"applyVoucher\"\n                (focus)=\"open()\"\n                (input)=\"filter(couponInput.value)\"\n                (blur)=\"close($event)\"\n                (keydown.escape)=\"close($event)\"\n                autocomplete=\"off\"\n              />\n\n              <div [class.couponbox-is-active]=\"couponBoxIsActive\">\n                <div\n                  *ngIf=\"filteredCoupons && filteredCoupons.length > 0\"\n                  class=\"cx-customer-coupons\"\n                  (click)=\"close($event)\"\n                >\n                  <div class=\"coupons\" (mousedown)=\"disableClose()\">\n                    <a\n                      *ngFor=\"let coupon of filteredCoupons\"\n                      (click)=\"applyCustomerCoupon(coupon.couponId)\"\n                    >\n                      <div class=\"coupon-id\">{{ coupon.couponId }}</div>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-md-4\">\n            <button\n              class=\"btn btn-block btn-action apply-coupon-button\"\n              type=\"submit\"\n              [disabled]=\"submitDisabled$ | async\"\n              [class.disabled]=\"submitDisabled$ | async\"\n            >\n              {{ 'voucher.apply' | cxTranslate }}\n            </button>\n          </div>\n        </div>\n      </form>\n    </ng-container>\n\n    <ng-container *cxFeatureLevel=\"'!1.5'\">\n      <form (submit)=\"applyVoucher()\" [formGroup]=\"form\">\n        <div class=\"row\">\n          <div class=\"col-md-8\">\n            <input\n              type=\"text\"\n              class=\"form-control input-coupon-code\"\n              id=\"applyVoucher\"\n              formControlName=\"couponCode\"\n              placeholder=\"{{ 'voucher.placeholder' | cxTranslate }}\"\n            />\n          </div>\n          <div class=\"col-md-4\">\n            <button\n              class=\"btn btn-block btn-action apply-coupon-button\"\n              type=\"submit\"\n              [disabled]=\"submitDisabled$ | async\"\n              [class.disabled]=\"submitDisabled$ | async\"\n            >\n              {{ 'voucher.apply' | cxTranslate }}\n            </button>\n          </div>\n        </div>\n      </form>\n    </ng-container>\n  </div>\n\n  <cx-applied-coupons\n    [vouchers]=\"cart.appliedVouchers\"\n    [cartIsLoading]=\"cartIsLoading$ | async\"\n    [isReadOnly]=\"false\"\n  >\n  </cx-applied-coupons>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    CartCouponComponent.ctorParameters = function () { return [
        { type: CartService },
        { type: AuthService },
        { type: CartVoucherService },
        { type: FormBuilder },
        { type: CustomerCouponService },
        { type: FeatureConfigService }
    ]; };
    return CartCouponComponent;
}());
export { CartCouponComponent };
if (false) {
    /** @type {?} */
    CartCouponComponent.prototype.MAX_CUSTOMER_COUPON_PAGE;
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
    /** @type {?} */
    CartCouponComponent.prototype.applicableCoupons;
    /** @type {?} */
    CartCouponComponent.prototype.filteredCoupons;
    /**
     * @type {?}
     * @private
     */
    CartCouponComponent.prototype.ignoreCloseEvent;
    /**
     * @type {?}
     * @private
     */
    CartCouponComponent.prototype.subscription;
    /** @type {?} */
    CartCouponComponent.prototype.couponBoxIsActive;
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
    /**
     * @type {?}
     * @protected
     */
    CartCouponComponent.prototype.customerCouponService;
    /**
     * @type {?}
     * @protected
     */
    CartCouponComponent.prototype.featureConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LWNvdXBvbi9jYXJ0LWNvdXBvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFFTCxXQUFXLEVBQ1gsa0JBQWtCLEVBQ2xCLFdBQVcsRUFDWCxxQkFBcUIsRUFDckIscUJBQXFCLEVBR3JCLG9CQUFvQixHQUNyQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzFELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJEO0lBd0NFLDZCQUNVLFdBQXdCLEVBQ3hCLFdBQXdCLEVBQ3hCLGtCQUFzQyxFQUN0QyxXQUF3QixFQUN0QixxQkFBNkMsRUFDN0MsYUFBb0M7UUFMdEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN0QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXdCO1FBQzdDLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtRQXpDaEQsNkJBQXdCLEdBQUcsR0FBRyxDQUFDO1FBU3ZCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUV6QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFMUMsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO0lBNkJ2QixDQUFDOzs7O0lBRUosc0NBQVE7OztJQUFSO1FBQUEsaUJBaUZDO1FBaEZDLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzlCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxtQkFBbUIsQ0FDNUMsSUFBSSxDQUFDLHdCQUF3QixDQUM5QixDQUFDO1NBQ0g7UUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDM0QsSUFBSSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFO2dCQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRTtnQkFDL0IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGtCQUFrQixDQUMzQyxJQUFJLENBQUMsd0JBQXdCLENBQzlCO2FBQ0YsQ0FBQyxDQUFDLElBQUksQ0FDTCxHQUFHOzs7O1lBQ0QsVUFBQyxFQUlBO29CQUpBLDBCQUlBLEVBSkMsWUFBSSxFQUFFLGNBQU0sRUFBRSx1QkFBZTtnQkFLN0IsS0FBSSxDQUFDLE1BQU07b0JBQ1QsTUFBTSxLQUFLLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUMzRCxLQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNuRSxDQUFDLEVBQ0YsRUFDRCxHQUFHOzs7O1lBQUMsVUFBQyxFQUFrRDtvQkFBbEQsMEJBQWtELEVBQWpELFlBQUk7Z0JBQWtELE9BQUEsSUFBSTtZQUFKLENBQUksRUFBQyxDQUNsRSxDQUFDO1NBQ0g7UUFDRCx3Q0FBd0M7YUFDbkM7WUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztnQkFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFO2FBQ2hDLENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRzs7OztZQUNELFVBQUMsRUFBOEI7b0JBQTlCLDBCQUE4QixFQUE3QixZQUFJLEVBQUUsY0FBTTtnQkFDWixPQUFBLENBQUMsS0FBSSxDQUFDLE1BQU07b0JBQ1YsTUFBTSxLQUFLLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBRDNELENBQzJELEVBQzlELEVBQ0QsR0FBRzs7OztZQUFDLFVBQUMsRUFBc0I7b0JBQXRCLDBCQUFzQixFQUFyQixZQUFJO2dCQUFzQixPQUFBLElBQUk7WUFBSixDQUFJLEVBQUMsQ0FDdEMsQ0FBQztTQUNIO1FBQ0Qsd0NBQXdDO1FBRXhDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVc7YUFDbkMsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLENBQUMsTUFBTSxFQUFQLENBQU8sRUFBQyxDQUFDLENBQUM7UUFFaEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLDhCQUE4QixFQUFFLENBQUM7UUFFekQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNqQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDeEMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGVBQWUsR0FBRyxhQUFhLENBQUM7WUFDbkMsSUFBSSxDQUFDLGNBQWM7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUN6QixTQUFTLENBQUMsSUFBSSxDQUFDLEVBQ2YsR0FBRzs7O1lBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFmLENBQWUsRUFBQyxDQUMzQjtZQUNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQywwQkFBMEIsRUFBRTtTQUNyRCxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUc7Ozs7UUFDRCxVQUFDLEVBQWdEO2dCQUFoRCwwQkFBZ0QsRUFBL0MscUJBQWEsRUFBRSxrQkFBVSxFQUFFLDJCQUFtQjtZQUM5QyxPQUFBLGFBQWEsSUFBSSxDQUFDLFVBQVUsSUFBSSxtQkFBbUI7UUFBbkQsQ0FBbUQsRUFDdEQsQ0FDRixDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQ25CLElBQUksQ0FBQyxrQkFBa0I7YUFDcEIsMEJBQTBCLEVBQUU7YUFDNUIsU0FBUzs7OztRQUFDLFVBQUEsT0FBTztZQUNoQixLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUNMLENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHdCQUF3QixFQUFFLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsS0FBSztZQUNoRSxLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFUyxxQ0FBTzs7Ozs7SUFBakIsVUFBa0IsS0FBYztRQUM5QixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxtQkFBbUIsQ0FDNUMsSUFBSSxDQUFDLHdCQUF3QixDQUM5QixDQUFDO1lBQ0YsSUFBSSxDQUFDLGtCQUFrQixDQUFDLDhCQUE4QixFQUFFLENBQUM7U0FDMUQ7SUFDSCxDQUFDOzs7OztJQUVELHVDQUFTOzs7O0lBQVQsVUFBVSxPQUFnQjtRQUN4QixJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLDhCQUE4QixFQUFFLENBQUM7U0FDMUQ7SUFDSCxDQUFDOzs7Ozs7O0lBRVMsMERBQTRCOzs7Ozs7SUFBdEMsVUFDRSxJQUFVLEVBQ1YsT0FBeUI7UUFGM0IsaUJBYUM7UUFUQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUN2QyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxjQUFjO2dCQUN6QyxLQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU07Ozs7Z0JBQ3BELFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLFFBQVEsS0FBSyxjQUFjLENBQUMsSUFBSSxFQUF2QyxDQUF1QyxFQUNsRCxDQUFDO1lBQ0osQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUNELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCwwQ0FBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUUsQ0FBQzs7Ozs7SUFDRCxpREFBbUI7Ozs7SUFBbkIsVUFBb0IsUUFBZ0I7UUFDbEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCxvQ0FBTTs7OztJQUFOLFVBQU8sS0FBYTs7WUFDWixXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRTtRQUV2QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNOzs7O1FBQ2xELFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQXZELENBQXVELEVBQ2xFLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsa0NBQUk7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDOUMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1NBQy9CO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxtQ0FBSzs7OztJQUFMLFVBQU0sS0FBYztRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQzFCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7WUFDL0IsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDekIsQ0FBQyxtQkFBYSxLQUFLLENBQUMsTUFBTSxFQUFBLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNwQztTQUNGO1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsMENBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQseUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7UUFDRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsOEJBQThCLEVBQUUsQ0FBQztJQUMzRCxDQUFDOztnQkE3TUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLDZyR0FBMkM7aUJBQzVDOzs7O2dCQWhCQyxXQUFXO2dCQUVYLFdBQVc7Z0JBRFgsa0JBQWtCO2dCQUpYLFdBQVc7Z0JBT2xCLHFCQUFxQjtnQkFHckIsb0JBQW9COztJQW9OdEIsMEJBQUM7Q0FBQSxBQTlNRCxJQThNQztTQTFNWSxtQkFBbUI7OztJQUM5Qix1REFBK0I7O0lBQy9CLG1DQUFnQjs7SUFDaEIsNkNBQW9DOztJQUNwQyw4Q0FBcUM7O0lBQ3JDLG9DQUF3Qjs7SUFDeEIscUNBQWU7O0lBQ2YsZ0RBQW9DOztJQUNwQyw4Q0FBa0M7Ozs7O0lBRWxDLCtDQUFpQzs7Ozs7SUFFakMsMkNBQTBDOztJQUUxQyxnREFBMEI7Ozs7O0lBdUJ4QiwwQ0FBZ0M7Ozs7O0lBQ2hDLDBDQUFnQzs7Ozs7SUFDaEMsaURBQThDOzs7OztJQUM5QywwQ0FBZ0M7Ozs7O0lBQ2hDLG9EQUF1RDs7Ozs7SUFDdkQsNENBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIENhcnQsXG4gIENhcnRTZXJ2aWNlLFxuICBDYXJ0Vm91Y2hlclNlcnZpY2UsXG4gIEF1dGhTZXJ2aWNlLFxuICBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMsXG4gIEN1c3RvbWVyQ291cG9uU2VydmljZSxcbiAgQ3VzdG9tZXJDb3Vwb24sXG4gIEN1c3RvbWVyQ291cG9uU2VhcmNoUmVzdWx0LFxuICBGZWF0dXJlQ29uZmlnU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvaW50ZXJuYWwvU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IG1hcCwgc3RhcnRXaXRoLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNhcnQtY291cG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcnQtY291cG9uLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydENvdXBvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgTUFYX0NVU1RPTUVSX0NPVVBPTl9QQUdFID0gMTAwO1xuICBmb3JtOiBGb3JtR3JvdXA7XG4gIGNhcnRJc0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBzdWJtaXREaXNhYmxlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGNhcnQkOiBPYnNlcnZhYmxlPENhcnQ+O1xuICBjYXJ0SWQ6IHN0cmluZztcbiAgYXBwbGljYWJsZUNvdXBvbnM6IEN1c3RvbWVyQ291cG9uW107XG4gIGZpbHRlcmVkQ291cG9uczogQ3VzdG9tZXJDb3Vwb25bXTtcblxuICBwcml2YXRlIGlnbm9yZUNsb3NlRXZlbnQgPSBmYWxzZTtcblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBjb3Vwb25Cb3hJc0FjdGl2ZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgY2FydFZvdWNoZXJTZXJ2aWNlOiBDYXJ0Vm91Y2hlclNlcnZpY2UsXG4gICAgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIGN1c3RvbWVyQ291cG9uU2VydmljZTogQ3VzdG9tZXJDb3Vwb25TZXJ2aWNlLFxuICAgIGZlYXR1cmVDb25maWc6IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICk7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxLjVcbiAgICogQWRkIGN1c3RvbWVyQ291cG9uU2VydmljZSxmZWF0dXJlQ29uZmlnIGZvciBjdXN0b21lciBjb3Vwb24gZmVhdHVyZS5cbiAgICogUmVtb3ZlIGlzc3VlOiAjNTk3MVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBjYXJ0Vm91Y2hlclNlcnZpY2U6IENhcnRWb3VjaGVyU2VydmljZSxcbiAgICBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXJcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIGNhcnRWb3VjaGVyU2VydmljZTogQ2FydFZvdWNoZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIHByb3RlY3RlZCBjdXN0b21lckNvdXBvblNlcnZpY2U/OiBDdXN0b21lckNvdXBvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGZlYXR1cmVDb25maWc/OiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuY3VzdG9tZXJDb3Vwb25TZXJ2aWNlKSB7XG4gICAgICB0aGlzLmN1c3RvbWVyQ291cG9uU2VydmljZS5sb2FkQ3VzdG9tZXJDb3Vwb25zKFxuICAgICAgICB0aGlzLk1BWF9DVVNUT01FUl9DT1VQT05fUEFHRVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZmVhdHVyZUNvbmZpZyAmJiB0aGlzLmZlYXR1cmVDb25maWcuaXNMZXZlbCgnMS41JykpIHtcbiAgICAgIHRoaXMuY2FydCQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKSxcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKSxcbiAgICAgICAgdGhpcy5jdXN0b21lckNvdXBvblNlcnZpY2UuZ2V0Q3VzdG9tZXJDb3Vwb25zKFxuICAgICAgICAgIHRoaXMuTUFYX0NVU1RPTUVSX0NPVVBPTl9QQUdFXG4gICAgICAgICksXG4gICAgICBdKS5waXBlKFxuICAgICAgICB0YXAoXG4gICAgICAgICAgKFtjYXJ0LCB1c2VySWQsIGN1c3RvbWVyQ291cG9uc106IFtcbiAgICAgICAgICAgIENhcnQsXG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBDdXN0b21lckNvdXBvblNlYXJjaFJlc3VsdFxuICAgICAgICAgIF0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2FydElkID1cbiAgICAgICAgICAgICAgdXNlcklkID09PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgPyBjYXJ0Lmd1aWQgOiBjYXJ0LmNvZGU7XG4gICAgICAgICAgICB0aGlzLmdldEFwcGxpY2FibGVDdXN0b21lckNvdXBvbnMoY2FydCwgY3VzdG9tZXJDb3Vwb25zLmNvdXBvbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgKSxcbiAgICAgICAgbWFwKChbY2FydF06IFtDYXJ0LCBzdHJpbmcsIEN1c3RvbWVyQ291cG9uU2VhcmNoUmVzdWx0XSkgPT4gY2FydClcbiAgICAgICk7XG4gICAgfVxuICAgIC8vVE9ETyhpc3N1ZTojNTk3MSkgRGVwcmVjYXRlZCBzaW5jZSAxLjVcbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuY2FydCQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKSxcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKSxcbiAgICAgIF0pLnBpcGUoXG4gICAgICAgIHRhcChcbiAgICAgICAgICAoW2NhcnQsIHVzZXJJZF06IFtDYXJ0LCBzdHJpbmddKSA9PlxuICAgICAgICAgICAgKHRoaXMuY2FydElkID1cbiAgICAgICAgICAgICAgdXNlcklkID09PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgPyBjYXJ0Lmd1aWQgOiBjYXJ0LmNvZGUpXG4gICAgICAgICksXG4gICAgICAgIG1hcCgoW2NhcnRdOiBbQ2FydCwgc3RyaW5nXSkgPT4gY2FydClcbiAgICAgICk7XG4gICAgfVxuICAgIC8vVE9ETyhpc3N1ZTojNTk3MSkgRGVwcmVjYXRlZCBzaW5jZSAxLjVcblxuICAgIHRoaXMuY2FydElzTG9hZGluZyQgPSB0aGlzLmNhcnRTZXJ2aWNlXG4gICAgICAuZ2V0TG9hZGVkKClcbiAgICAgIC5waXBlKG1hcChsb2FkZWQgPT4gIWxvYWRlZCkpO1xuXG4gICAgdGhpcy5jYXJ0Vm91Y2hlclNlcnZpY2UucmVzZXRBZGRWb3VjaGVyUHJvY2Vzc2luZ1N0YXRlKCk7XG5cbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGNvdXBvbkNvZGU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICB9KTtcblxuICAgIHRoaXMuc3VibWl0RGlzYWJsZWQkID0gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmNhcnRJc0xvYWRpbmckLFxuICAgICAgdGhpcy5mb3JtLnZhbHVlQ2hhbmdlcy5waXBlKFxuICAgICAgICBzdGFydFdpdGgodHJ1ZSksXG4gICAgICAgIG1hcCgoKSA9PiB0aGlzLmZvcm0udmFsaWQpXG4gICAgICApLFxuICAgICAgdGhpcy5jYXJ0Vm91Y2hlclNlcnZpY2UuZ2V0QWRkVm91Y2hlclJlc3VsdExvYWRpbmcoKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKFxuICAgICAgICAoW2NhcnRJc0xvYWRpbmcsIGJ0bkVuYWJsZWQsIGFkZFZvdWNoZXJJc0xvYWRpbmddKSA9PlxuICAgICAgICAgIGNhcnRJc0xvYWRpbmcgfHwgIWJ0bkVuYWJsZWQgfHwgYWRkVm91Y2hlcklzTG9hZGluZ1xuICAgICAgKVxuICAgICk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLmNhcnRWb3VjaGVyU2VydmljZVxuICAgICAgICAuZ2V0QWRkVm91Y2hlclJlc3VsdFN1Y2Nlc3MoKVxuICAgICAgICAuc3Vic2NyaWJlKHN1Y2Nlc3MgPT4ge1xuICAgICAgICAgIHRoaXMub25TdWNjZXNzKHN1Y2Nlc3MpO1xuICAgICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLmNhcnRWb3VjaGVyU2VydmljZS5nZXRBZGRWb3VjaGVyUmVzdWx0RXJyb3IoKS5zdWJzY3JpYmUoZXJyb3IgPT4ge1xuICAgICAgICB0aGlzLm9uRXJyb3IoZXJyb3IpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uRXJyb3IoZXJyb3I6IGJvb2xlYW4pIHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHRoaXMuY3VzdG9tZXJDb3Vwb25TZXJ2aWNlLmxvYWRDdXN0b21lckNvdXBvbnMoXG4gICAgICAgIHRoaXMuTUFYX0NVU1RPTUVSX0NPVVBPTl9QQUdFXG4gICAgICApO1xuICAgICAgdGhpcy5jYXJ0Vm91Y2hlclNlcnZpY2UucmVzZXRBZGRWb3VjaGVyUHJvY2Vzc2luZ1N0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgb25TdWNjZXNzKHN1Y2Nlc3M6IGJvb2xlYW4pIHtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgdGhpcy5mb3JtLnJlc2V0KCk7XG4gICAgICB0aGlzLmNhcnRWb3VjaGVyU2VydmljZS5yZXNldEFkZFZvdWNoZXJQcm9jZXNzaW5nU3RhdGUoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0QXBwbGljYWJsZUN1c3RvbWVyQ291cG9ucyhcbiAgICBjYXJ0OiBDYXJ0LFxuICAgIGNvdXBvbnM6IEN1c3RvbWVyQ291cG9uW11cbiAgKTogdm9pZCB7XG4gICAgdGhpcy5hcHBsaWNhYmxlQ291cG9ucyA9IGNvdXBvbnMgfHwgW107XG4gICAgaWYgKGNhcnQuYXBwbGllZFZvdWNoZXJzKSB7XG4gICAgICBjYXJ0LmFwcGxpZWRWb3VjaGVycy5mb3JFYWNoKGFwcGxpZWRWb3VjaGVyID0+IHtcbiAgICAgICAgdGhpcy5hcHBsaWNhYmxlQ291cG9ucyA9IHRoaXMuYXBwbGljYWJsZUNvdXBvbnMuZmlsdGVyKFxuICAgICAgICAgIGNvdXBvbiA9PiBjb3Vwb24uY291cG9uSWQgIT09IGFwcGxpZWRWb3VjaGVyLmNvZGVcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmZpbHRlcmVkQ291cG9ucyA9IHRoaXMuYXBwbGljYWJsZUNvdXBvbnM7XG4gIH1cblxuICBhcHBseVZvdWNoZXIoKTogdm9pZCB7XG4gICAgdGhpcy5jYXJ0Vm91Y2hlclNlcnZpY2UuYWRkVm91Y2hlcih0aGlzLmZvcm0udmFsdWUuY291cG9uQ29kZSwgdGhpcy5jYXJ0SWQpO1xuICB9XG4gIGFwcGx5Q3VzdG9tZXJDb3Vwb24oY291cG9uSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY2FydFZvdWNoZXJTZXJ2aWNlLmFkZFZvdWNoZXIoY291cG9uSWQsIHRoaXMuY2FydElkKTtcbiAgICB0aGlzLmNvdXBvbkJveElzQWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICBmaWx0ZXIocXVlcnk6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gcXVlcnkudG9Mb3dlckNhc2UoKTtcblxuICAgIHRoaXMuZmlsdGVyZWRDb3Vwb25zID0gdGhpcy5hcHBsaWNhYmxlQ291cG9ucy5maWx0ZXIoXG4gICAgICBjb3Vwb24gPT4gY291cG9uLmNvdXBvbklkLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXJWYWx1ZSkgPiAtMVxuICAgICk7XG4gIH1cblxuICBvcGVuKCk6IHZvaWQge1xuICAgIHRoaXMuZmlsdGVyZWRDb3Vwb25zID0gdGhpcy5hcHBsaWNhYmxlQ291cG9ucztcbiAgICBpZiAodGhpcy5hcHBsaWNhYmxlQ291cG9ucy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmNvdXBvbkJveElzQWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBjbG9zZShldmVudDogVUlFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pZ25vcmVDbG9zZUV2ZW50KSB7XG4gICAgICB0aGlzLmNvdXBvbkJveElzQWN0aXZlID0gZmFsc2U7XG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgICg8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5ibHVyKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuaWdub3JlQ2xvc2VFdmVudCA9IGZhbHNlO1xuICB9XG5cbiAgZGlzYWJsZUNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuaWdub3JlQ2xvc2VFdmVudCA9IHRydWU7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHRoaXMuY2FydFZvdWNoZXJTZXJ2aWNlLnJlc2V0QWRkVm91Y2hlclByb2Nlc3NpbmdTdGF0ZSgpO1xuICB9XG59XG4iXX0=