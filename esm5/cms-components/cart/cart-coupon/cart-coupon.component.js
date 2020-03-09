import { __decorate, __read } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, Cart, CartService, CartVoucherService, CustomerCoupon, CustomerCouponSearchResult, CustomerCouponService, FeatureConfigService, OCC_USER_ID_ANONYMOUS, } from '@spartacus/core';
import { combineLatest, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
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
    CartCouponComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.customerCouponService) {
            this.customerCouponService.loadCustomerCoupons(this.MAX_CUSTOMER_COUPON_PAGE);
        }
        if (this.featureConfig && this.featureConfig.isLevel('1.5')) {
            this.cart$ = combineLatest([
                this.cartService.getActive(),
                this.authService.getOccUserId(),
                this.customerCouponService.getCustomerCoupons(this.MAX_CUSTOMER_COUPON_PAGE),
            ]).pipe(tap(function (_a) {
                var _b = __read(_a, 3), cart = _b[0], userId = _b[1], customerCoupons = _b[2];
                _this.cartId =
                    userId === OCC_USER_ID_ANONYMOUS ? cart.guid : cart.code;
                _this.getApplicableCustomerCoupons(cart, customerCoupons.coupons);
            }), map(function (_a) {
                var _b = __read(_a, 1), cart = _b[0];
                return cart;
            }));
        }
        //TODO(issue:#5971) Deprecated since 1.5
        else {
            this.cart$ = combineLatest([
                this.cartService.getActive(),
                this.authService.getOccUserId(),
            ]).pipe(tap(function (_a) {
                var _b = __read(_a, 2), cart = _b[0], userId = _b[1];
                return (_this.cartId =
                    userId === OCC_USER_ID_ANONYMOUS ? cart.guid : cart.code);
            }), map(function (_a) {
                var _b = __read(_a, 1), cart = _b[0];
                return cart;
            }));
        }
        //TODO(issue:#5971) Deprecated since 1.5
        this.cartIsLoading$ = this.cartService
            .getLoaded()
            .pipe(map(function (loaded) { return !loaded; }));
        this.cartVoucherService.resetAddVoucherProcessingState();
        this.form = this.formBuilder.group({
            couponCode: ['', [Validators.required]],
        });
        this.subscription.add(this.cartVoucherService
            .getAddVoucherResultSuccess()
            .subscribe(function (success) {
            _this.onSuccess(success);
        }));
        this.subscription.add(this.cartVoucherService.getAddVoucherResultError().subscribe(function (error) {
            _this.onError(error);
        }));
    };
    CartCouponComponent.prototype.onError = function (error) {
        if (error) {
            this.customerCouponService.loadCustomerCoupons(this.MAX_CUSTOMER_COUPON_PAGE);
            this.cartVoucherService.resetAddVoucherProcessingState();
        }
    };
    CartCouponComponent.prototype.onSuccess = function (success) {
        if (success) {
            this.form.reset();
            this.cartVoucherService.resetAddVoucherProcessingState();
        }
    };
    CartCouponComponent.prototype.getApplicableCustomerCoupons = function (cart, coupons) {
        var _this = this;
        this.applicableCoupons = coupons || [];
        if (cart.appliedVouchers) {
            cart.appliedVouchers.forEach(function (appliedVoucher) {
                _this.applicableCoupons = _this.applicableCoupons.filter(function (coupon) { return coupon.couponId !== appliedVoucher.code; });
            });
        }
    };
    CartCouponComponent.prototype.applyVoucher = function () {
        if (!this.form.valid) {
            this.form.markAsTouched();
            return;
        }
        this.cartVoucherService.addVoucher(this.form.value.couponCode, this.cartId);
    };
    CartCouponComponent.prototype.applyCustomerCoupon = function (couponId) {
        this.cartVoucherService.addVoucher(couponId, this.cartId);
        this.couponBoxIsActive = false;
    };
    CartCouponComponent.prototype.close = function (event) {
        if (!this.ignoreCloseEvent) {
            this.couponBoxIsActive = false;
            if (event && event.target) {
                event.target.blur();
            }
        }
        this.ignoreCloseEvent = false;
    };
    CartCouponComponent.prototype.disableClose = function () {
        this.ignoreCloseEvent = true;
    };
    CartCouponComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.cartVoucherService.resetAddVoucherProcessingState();
    };
    CartCouponComponent.ctorParameters = function () { return [
        { type: CartService },
        { type: AuthService },
        { type: CartVoucherService },
        { type: FormBuilder },
        { type: CustomerCouponService },
        { type: FeatureConfigService }
    ]; };
    CartCouponComponent = __decorate([
        Component({
            selector: 'cx-cart-coupon',
            template: "<ng-container *ngIf=\"cart$ | async as cart\">\n  <div class=\"cx-cart-coupon-title\">\n    {{ 'voucher.coupon' | cxTranslate }}\n  </div>\n  <div class=\"form-group \">\n    <form (submit)=\"applyVoucher()\" [formGroup]=\"form\">\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n          <input\n            type=\"text\"\n            class=\"form-control input-coupon-code\"\n            id=\"applyVoucher\"\n            formControlName=\"couponCode\"\n            placeholder=\"{{ 'voucher.placeholder' | cxTranslate }}\"\n          />\n        </div>\n        <div class=\"col-md-4\">\n          <button\n            class=\"btn btn-block btn-action apply-coupon-button\"\n            type=\"submit\"\n            [disabled]=\"cartIsLoading$ | async\"\n            [class.disabled]=\"cartIsLoading$ | async\"\n          >\n            {{ 'voucher.apply' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n\n  <cx-applied-coupons\n    [vouchers]=\"cart.appliedVouchers\"\n    [cartIsLoading]=\"cartIsLoading$ | async\"\n    [isReadOnly]=\"false\"\n  >\n  </cx-applied-coupons>\n\n  <ng-container *ngIf=\"applicableCoupons && applicableCoupons.length > 0\">\n    <div class=\"cx-available-coupon\">\n      <div class=\"title cx-cart-coupon-title\">\n        {{ 'voucher.availableCoupons' | cxTranslate }}\n      </div>\n      <div class=\"message\">\n        {{ 'voucher.availableCouponsLabel' | cxTranslate }}\n      </div>\n      <div class=\"scroll\">\n        <div class=\"coupons card \" *ngFor=\"let coupon of applicableCoupons\">\n          <button\n            (click)=\"applyCustomerCoupon(coupon.couponId)\"\n            class=\"coupon-id link\"\n            [disabled]=\"cartIsLoading$ | async\"\n            [class.disabled]=\"cartIsLoading$ | async\"\n          >\n            {{ coupon.couponId }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n</ng-container>\n"
        })
    ], CartCouponComponent);
    return CartCouponComponent;
}());
export { CartCouponComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LWNvdXBvbi9jYXJ0LWNvdXBvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFDTCxXQUFXLEVBQ1gsSUFBSSxFQUNKLFdBQVcsRUFDWCxrQkFBa0IsRUFDbEIsY0FBYyxFQUNkLDBCQUEwQixFQUMxQixxQkFBcUIsRUFDckIsb0JBQW9CLEVBQ3BCLHFCQUFxQixHQUN0QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFNMUM7SUFrQ0UsNkJBQ1UsV0FBd0IsRUFDeEIsV0FBd0IsRUFDeEIsa0JBQXNDLEVBQ3RDLFdBQXdCLEVBQ3RCLHFCQUE2QyxFQUM3QyxhQUFvQztRQUx0QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3RCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBd0I7UUFDN0Msa0JBQWEsR0FBYixhQUFhLENBQXVCO1FBdkNoRCw2QkFBd0IsR0FBRyxHQUFHLENBQUM7UUFPdkIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBRXpCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUxQyxzQkFBaUIsR0FB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OUtELElBOEtDO1NBOUtZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBBdXRoU2VydmljZSxcbiAgQ2FydCxcbiAgQ2FydFNlcnZpY2UsXG4gIENhcnRWb3VjaGVyU2VydmljZSxcbiAgQ3VzdG9tZXJDb3Vwb24sXG4gIEN1c3RvbWVyQ291cG9uU2VhcmNoUmVzdWx0LFxuICBDdXN0b21lckNvdXBvblNlcnZpY2UsXG4gIEZlYXR1cmVDb25maWdTZXJ2aWNlLFxuICBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jYXJ0LWNvdXBvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJ0LWNvdXBvbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENhcnRDb3Vwb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIE1BWF9DVVNUT01FUl9DT1VQT05fUEFHRSA9IDEwMDtcbiAgZm9ybTogRm9ybUdyb3VwO1xuICBjYXJ0SXNMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgY2FydCQ6IE9ic2VydmFibGU8Q2FydD47XG4gIGNhcnRJZDogc3RyaW5nO1xuICBhcHBsaWNhYmxlQ291cG9uczogQ3VzdG9tZXJDb3Vwb25bXTtcblxuICBwcml2YXRlIGlnbm9yZUNsb3NlRXZlbnQgPSBmYWxzZTtcblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBjb3Vwb25Cb3hJc0FjdGl2ZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgY2FydFZvdWNoZXJTZXJ2aWNlOiBDYXJ0Vm91Y2hlclNlcnZpY2UsXG4gICAgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIGN1c3RvbWVyQ291cG9uU2VydmljZTogQ3VzdG9tZXJDb3Vwb25TZXJ2aWNlLFxuICAgIGZlYXR1cmVDb25maWc6IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICk7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxLjVcbiAgICogQWRkIGN1c3RvbWVyQ291cG9uU2VydmljZSxmZWF0dXJlQ29uZmlnIGZvciBjdXN0b21lciBjb3Vwb24gZmVhdHVyZS5cbiAgICogUmVtb3ZlIGlzc3VlOiAjNTk3MVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBjYXJ0Vm91Y2hlclNlcnZpY2U6IENhcnRWb3VjaGVyU2VydmljZSxcbiAgICBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXJcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIGNhcnRWb3VjaGVyU2VydmljZTogQ2FydFZvdWNoZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIHByb3RlY3RlZCBjdXN0b21lckNvdXBvblNlcnZpY2U/OiBDdXN0b21lckNvdXBvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGZlYXR1cmVDb25maWc/OiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuY3VzdG9tZXJDb3Vwb25TZXJ2aWNlKSB7XG4gICAgICB0aGlzLmN1c3RvbWVyQ291cG9uU2VydmljZS5sb2FkQ3VzdG9tZXJDb3Vwb25zKFxuICAgICAgICB0aGlzLk1BWF9DVVNUT01FUl9DT1VQT05fUEFHRVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZmVhdHVyZUNvbmZpZyAmJiB0aGlzLmZlYXR1cmVDb25maWcuaXNMZXZlbCgnMS41JykpIHtcbiAgICAgIHRoaXMuY2FydCQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKSxcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKSxcbiAgICAgICAgdGhpcy5jdXN0b21lckNvdXBvblNlcnZpY2UuZ2V0Q3VzdG9tZXJDb3Vwb25zKFxuICAgICAgICAgIHRoaXMuTUFYX0NVU1RPTUVSX0NPVVBPTl9QQUdFXG4gICAgICAgICksXG4gICAgICBdKS5waXBlKFxuICAgICAgICB0YXAoXG4gICAgICAgICAgKFtjYXJ0LCB1c2VySWQsIGN1c3RvbWVyQ291cG9uc106IFtcbiAgICAgICAgICAgIENhcnQsXG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBDdXN0b21lckNvdXBvblNlYXJjaFJlc3VsdFxuICAgICAgICAgIF0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2FydElkID1cbiAgICAgICAgICAgICAgdXNlcklkID09PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgPyBjYXJ0Lmd1aWQgOiBjYXJ0LmNvZGU7XG4gICAgICAgICAgICB0aGlzLmdldEFwcGxpY2FibGVDdXN0b21lckNvdXBvbnMoY2FydCwgY3VzdG9tZXJDb3Vwb25zLmNvdXBvbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgKSxcbiAgICAgICAgbWFwKChbY2FydF06IFtDYXJ0LCBzdHJpbmcsIEN1c3RvbWVyQ291cG9uU2VhcmNoUmVzdWx0XSkgPT4gY2FydClcbiAgICAgICk7XG4gICAgfVxuICAgIC8vVE9ETyhpc3N1ZTojNTk3MSkgRGVwcmVjYXRlZCBzaW5jZSAxLjVcbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuY2FydCQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKSxcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKSxcbiAgICAgIF0pLnBpcGUoXG4gICAgICAgIHRhcChcbiAgICAgICAgICAoW2NhcnQsIHVzZXJJZF06IFtDYXJ0LCBzdHJpbmddKSA9PlxuICAgICAgICAgICAgKHRoaXMuY2FydElkID1cbiAgICAgICAgICAgICAgdXNlcklkID09PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgPyBjYXJ0Lmd1aWQgOiBjYXJ0LmNvZGUpXG4gICAgICAgICksXG4gICAgICAgIG1hcCgoW2NhcnRdOiBbQ2FydCwgc3RyaW5nXSkgPT4gY2FydClcbiAgICAgICk7XG4gICAgfVxuICAgIC8vVE9ETyhpc3N1ZTojNTk3MSkgRGVwcmVjYXRlZCBzaW5jZSAxLjVcblxuICAgIHRoaXMuY2FydElzTG9hZGluZyQgPSB0aGlzLmNhcnRTZXJ2aWNlXG4gICAgICAuZ2V0TG9hZGVkKClcbiAgICAgIC5waXBlKG1hcChsb2FkZWQgPT4gIWxvYWRlZCkpO1xuXG4gICAgdGhpcy5jYXJ0Vm91Y2hlclNlcnZpY2UucmVzZXRBZGRWb3VjaGVyUHJvY2Vzc2luZ1N0YXRlKCk7XG5cbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGNvdXBvbkNvZGU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICB9KTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMuY2FydFZvdWNoZXJTZXJ2aWNlXG4gICAgICAgIC5nZXRBZGRWb3VjaGVyUmVzdWx0U3VjY2VzcygpXG4gICAgICAgIC5zdWJzY3JpYmUoc3VjY2VzcyA9PiB7XG4gICAgICAgICAgdGhpcy5vblN1Y2Nlc3Moc3VjY2Vzcyk7XG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMuY2FydFZvdWNoZXJTZXJ2aWNlLmdldEFkZFZvdWNoZXJSZXN1bHRFcnJvcigpLnN1YnNjcmliZShlcnJvciA9PiB7XG4gICAgICAgIHRoaXMub25FcnJvcihlcnJvcik7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgb25FcnJvcihlcnJvcjogYm9vbGVhbikge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgdGhpcy5jdXN0b21lckNvdXBvblNlcnZpY2UubG9hZEN1c3RvbWVyQ291cG9ucyhcbiAgICAgICAgdGhpcy5NQVhfQ1VTVE9NRVJfQ09VUE9OX1BBR0VcbiAgICAgICk7XG4gICAgICB0aGlzLmNhcnRWb3VjaGVyU2VydmljZS5yZXNldEFkZFZvdWNoZXJQcm9jZXNzaW5nU3RhdGUoKTtcbiAgICB9XG4gIH1cblxuICBvblN1Y2Nlc3Moc3VjY2VzczogYm9vbGVhbikge1xuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICB0aGlzLmZvcm0ucmVzZXQoKTtcbiAgICAgIHRoaXMuY2FydFZvdWNoZXJTZXJ2aWNlLnJlc2V0QWRkVm91Y2hlclByb2Nlc3NpbmdTdGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRBcHBsaWNhYmxlQ3VzdG9tZXJDb3Vwb25zKFxuICAgIGNhcnQ6IENhcnQsXG4gICAgY291cG9uczogQ3VzdG9tZXJDb3Vwb25bXVxuICApOiB2b2lkIHtcbiAgICB0aGlzLmFwcGxpY2FibGVDb3Vwb25zID0gY291cG9ucyB8fCBbXTtcbiAgICBpZiAoY2FydC5hcHBsaWVkVm91Y2hlcnMpIHtcbiAgICAgIGNhcnQuYXBwbGllZFZvdWNoZXJzLmZvckVhY2goYXBwbGllZFZvdWNoZXIgPT4ge1xuICAgICAgICB0aGlzLmFwcGxpY2FibGVDb3Vwb25zID0gdGhpcy5hcHBsaWNhYmxlQ291cG9ucy5maWx0ZXIoXG4gICAgICAgICAgY291cG9uID0+IGNvdXBvbi5jb3Vwb25JZCAhPT0gYXBwbGllZFZvdWNoZXIuY29kZVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgYXBwbHlWb3VjaGVyKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5mb3JtLnZhbGlkKSB7XG4gICAgICB0aGlzLmZvcm0ubWFya0FzVG91Y2hlZCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNhcnRWb3VjaGVyU2VydmljZS5hZGRWb3VjaGVyKHRoaXMuZm9ybS52YWx1ZS5jb3Vwb25Db2RlLCB0aGlzLmNhcnRJZCk7XG4gIH1cbiAgYXBwbHlDdXN0b21lckNvdXBvbihjb3Vwb25JZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jYXJ0Vm91Y2hlclNlcnZpY2UuYWRkVm91Y2hlcihjb3Vwb25JZCwgdGhpcy5jYXJ0SWQpO1xuICAgIHRoaXMuY291cG9uQm94SXNBY3RpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGNsb3NlKGV2ZW50OiBVSUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlnbm9yZUNsb3NlRXZlbnQpIHtcbiAgICAgIHRoaXMuY291cG9uQm94SXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIGlmIChldmVudCAmJiBldmVudC50YXJnZXQpIHtcbiAgICAgICAgKDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpLmJsdXIoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5pZ25vcmVDbG9zZUV2ZW50ID0gZmFsc2U7XG4gIH1cblxuICBkaXNhYmxlQ2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5pZ25vcmVDbG9zZUV2ZW50ID0gdHJ1ZTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgdGhpcy5jYXJ0Vm91Y2hlclNlcnZpY2UucmVzZXRBZGRWb3VjaGVyUHJvY2Vzc2luZ1N0YXRlKCk7XG4gIH1cbn1cbiJdfQ==