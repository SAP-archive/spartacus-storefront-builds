import { __decorate, __read } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, Cart, CartService, CartVoucherService, CustomerCoupon, CustomerCouponSearchResult, CustomerCouponService, FeatureConfigService, OCC_USER_ID_ANONYMOUS, } from '@spartacus/core';
import { combineLatest, Subscription } from 'rxjs';
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
        this.submitDisabled$ = combineLatest([
            this.cartIsLoading$,
            this.form.valueChanges.pipe(startWith(true), map(function () { return _this.form.valid; })),
            this.cartVoucherService.getAddVoucherResultLoading(),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 3), cartIsLoading = _b[0], btnEnabled = _b[1], addVoucherIsLoading = _b[2];
            return cartIsLoading || !btnEnabled || addVoucherIsLoading;
        }));
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
        this.filteredCoupons = this.applicableCoupons;
    };
    CartCouponComponent.prototype.applyVoucher = function () {
        this.cartVoucherService.addVoucher(this.form.value.couponCode, this.cartId);
    };
    CartCouponComponent.prototype.applyCustomerCoupon = function (couponId) {
        this.cartVoucherService.addVoucher(couponId, this.cartId);
        this.couponBoxIsActive = false;
    };
    CartCouponComponent.prototype.filter = function (query) {
        var filterValue = query.toLowerCase();
        this.filteredCoupons = this.applicableCoupons.filter(function (coupon) { return coupon.couponId.toLowerCase().indexOf(filterValue) > -1; });
    };
    CartCouponComponent.prototype.open = function () {
        this.filteredCoupons = this.applicableCoupons;
        if (this.applicableCoupons.length > 0) {
            this.couponBoxIsActive = true;
        }
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
            template: "<ng-container *ngIf=\"cart$ | async as cart\">\n  <div class=\"cx-cart-coupon-title\">\n    {{ 'voucher.coupon' | cxTranslate }}\n  </div>\n  <div class=\"form-group \">\n    <ng-container *cxFeatureLevel=\"'1.5'\">\n      <form (submit)=\"applyVoucher()\" [formGroup]=\"form\" autocomplete=\"off\">\n        <div class=\"row\">\n          <div class=\"col-md-8\">\n            <div class=\"cx-apply-voucher\">\n              <input\n                #couponInput\n                class=\"form-control input-coupon-code\"\n                id=\"applyVoucher\"\n                formControlName=\"couponCode\"\n                [placeholder]=\"'voucher.placeholder' | cxTranslate\"\n                aria-label=\"applyVoucher\"\n                (focus)=\"open()\"\n                (input)=\"filter(couponInput.value)\"\n                (blur)=\"close($event)\"\n                (keydown.escape)=\"close($event)\"\n                autocomplete=\"off\"\n              />\n\n              <div [class.couponbox-is-active]=\"couponBoxIsActive\">\n                <div\n                  *ngIf=\"filteredCoupons && filteredCoupons.length > 0\"\n                  class=\"cx-customer-coupons\"\n                  (click)=\"close($event)\"\n                >\n                  <div class=\"coupons\" (mousedown)=\"disableClose()\">\n                    <a\n                      *ngFor=\"let coupon of filteredCoupons\"\n                      (click)=\"applyCustomerCoupon(coupon.couponId)\"\n                    >\n                      <div class=\"coupon-id\">{{ coupon.couponId }}</div>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-md-4\">\n            <button\n              class=\"btn btn-block btn-action apply-coupon-button\"\n              type=\"submit\"\n              [disabled]=\"submitDisabled$ | async\"\n              [class.disabled]=\"submitDisabled$ | async\"\n            >\n              {{ 'voucher.apply' | cxTranslate }}\n            </button>\n          </div>\n        </div>\n      </form>\n    </ng-container>\n\n    <ng-container *cxFeatureLevel=\"'!1.5'\">\n      <form (submit)=\"applyVoucher()\" [formGroup]=\"form\">\n        <div class=\"row\">\n          <div class=\"col-md-8\">\n            <input\n              type=\"text\"\n              class=\"form-control input-coupon-code\"\n              id=\"applyVoucher\"\n              formControlName=\"couponCode\"\n              placeholder=\"{{ 'voucher.placeholder' | cxTranslate }}\"\n            />\n          </div>\n          <div class=\"col-md-4\">\n            <button\n              class=\"btn btn-block btn-action apply-coupon-button\"\n              type=\"submit\"\n              [disabled]=\"submitDisabled$ | async\"\n              [class.disabled]=\"submitDisabled$ | async\"\n            >\n              {{ 'voucher.apply' | cxTranslate }}\n            </button>\n          </div>\n        </div>\n      </form>\n    </ng-container>\n  </div>\n\n  <cx-applied-coupons\n    [vouchers]=\"cart.appliedVouchers\"\n    [cartIsLoading]=\"cartIsLoading$ | async\"\n    [isReadOnly]=\"false\"\n  >\n  </cx-applied-coupons>\n</ng-container>\n"
        })
    ], CartCouponComponent);
    return CartCouponComponent;
}());
export { CartCouponComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LWNvdXBvbi9jYXJ0LWNvdXBvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFDTCxXQUFXLEVBQ1gsSUFBSSxFQUNKLFdBQVcsRUFDWCxrQkFBa0IsRUFDbEIsY0FBYyxFQUNkLDBCQUEwQixFQUMxQixxQkFBcUIsRUFDckIsb0JBQW9CLEVBQ3BCLHFCQUFxQixHQUN0QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTXJEO0lBb0NFLDZCQUNVLFdBQXdCLEVBQ3hCLFdBQXdCLEVBQ3hCLGtCQUFzQyxFQUN0QyxXQUF3QixFQUN0QixxQkFBNkMsRUFDN0MsYUFBb0M7UUFMdEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN0QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXdCO1FBQzdDLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtRQXpDaEQsNkJBQXdCLEdBQUcsR0FBRyxDQUFDO1FBU3ZCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUV6QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFMUMs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QUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUM5QyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7U0FDL0I7SUFDSCxDQUFDO0lBRUQsbUNBQUssR0FBTCxVQUFNLEtBQWM7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1lBQy9CLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7Z0JBQ1gsS0FBSyxDQUFDLE1BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNwQztTQUNGO1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBRUQsMENBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUVELHlDQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztRQUNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyw4QkFBOEIsRUFBRSxDQUFDO0lBQzNELENBQUM7O2dCQXBLc0IsV0FBVztnQkFDWCxXQUFXO2dCQUNKLGtCQUFrQjtnQkFDekIsV0FBVztnQkFDRSxxQkFBcUI7Z0JBQzdCLG9CQUFvQjs7SUExQ3JDLG1CQUFtQjtRQUovQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLDZyR0FBMkM7U0FDNUMsQ0FBQztPQUNXLG1CQUFtQixDQTBNL0I7SUFBRCwwQkFBQztDQUFBLEFBMU1ELElBME1DO1NBMU1ZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBBdXRoU2VydmljZSxcbiAgQ2FydCxcbiAgQ2FydFNlcnZpY2UsXG4gIENhcnRWb3VjaGVyU2VydmljZSxcbiAgQ3VzdG9tZXJDb3Vwb24sXG4gIEN1c3RvbWVyQ291cG9uU2VhcmNoUmVzdWx0LFxuICBDdXN0b21lckNvdXBvblNlcnZpY2UsXG4gIEZlYXR1cmVDb25maWdTZXJ2aWNlLFxuICBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3RhcnRXaXRoLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNhcnQtY291cG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcnQtY291cG9uLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydENvdXBvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgTUFYX0NVU1RPTUVSX0NPVVBPTl9QQUdFID0gMTAwO1xuICBmb3JtOiBGb3JtR3JvdXA7XG4gIGNhcnRJc0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBzdWJtaXREaXNhYmxlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGNhcnQkOiBPYnNlcnZhYmxlPENhcnQ+O1xuICBjYXJ0SWQ6IHN0cmluZztcbiAgYXBwbGljYWJsZUNvdXBvbnM6IEN1c3RvbWVyQ291cG9uW107XG4gIGZpbHRlcmVkQ291cG9uczogQ3VzdG9tZXJDb3Vwb25bXTtcblxuICBwcml2YXRlIGlnbm9yZUNsb3NlRXZlbnQgPSBmYWxzZTtcblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBjb3Vwb25Cb3hJc0FjdGl2ZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgY2FydFZvdWNoZXJTZXJ2aWNlOiBDYXJ0Vm91Y2hlclNlcnZpY2UsXG4gICAgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIGN1c3RvbWVyQ291cG9uU2VydmljZTogQ3VzdG9tZXJDb3Vwb25TZXJ2aWNlLFxuICAgIGZlYXR1cmVDb25maWc6IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICk7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxLjVcbiAgICogQWRkIGN1c3RvbWVyQ291cG9uU2VydmljZSxmZWF0dXJlQ29uZmlnIGZvciBjdXN0b21lciBjb3Vwb24gZmVhdHVyZS5cbiAgICogUmVtb3ZlIGlzc3VlOiAjNTk3MVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBjYXJ0Vm91Y2hlclNlcnZpY2U6IENhcnRWb3VjaGVyU2VydmljZSxcbiAgICBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXJcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIGNhcnRWb3VjaGVyU2VydmljZTogQ2FydFZvdWNoZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIHByb3RlY3RlZCBjdXN0b21lckNvdXBvblNlcnZpY2U/OiBDdXN0b21lckNvdXBvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGZlYXR1cmVDb25maWc/OiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuY3VzdG9tZXJDb3Vwb25TZXJ2aWNlKSB7XG4gICAgICB0aGlzLmN1c3RvbWVyQ291cG9uU2VydmljZS5sb2FkQ3VzdG9tZXJDb3Vwb25zKFxuICAgICAgICB0aGlzLk1BWF9DVVNUT01FUl9DT1VQT05fUEFHRVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZmVhdHVyZUNvbmZpZyAmJiB0aGlzLmZlYXR1cmVDb25maWcuaXNMZXZlbCgnMS41JykpIHtcbiAgICAgIHRoaXMuY2FydCQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKSxcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKSxcbiAgICAgICAgdGhpcy5jdXN0b21lckNvdXBvblNlcnZpY2UuZ2V0Q3VzdG9tZXJDb3Vwb25zKFxuICAgICAgICAgIHRoaXMuTUFYX0NVU1RPTUVSX0NPVVBPTl9QQUdFXG4gICAgICAgICksXG4gICAgICBdKS5waXBlKFxuICAgICAgICB0YXAoXG4gICAgICAgICAgKFtjYXJ0LCB1c2VySWQsIGN1c3RvbWVyQ291cG9uc106IFtcbiAgICAgICAgICAgIENhcnQsXG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBDdXN0b21lckNvdXBvblNlYXJjaFJlc3VsdFxuICAgICAgICAgIF0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2FydElkID1cbiAgICAgICAgICAgICAgdXNlcklkID09PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgPyBjYXJ0Lmd1aWQgOiBjYXJ0LmNvZGU7XG4gICAgICAgICAgICB0aGlzLmdldEFwcGxpY2FibGVDdXN0b21lckNvdXBvbnMoY2FydCwgY3VzdG9tZXJDb3Vwb25zLmNvdXBvbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgKSxcbiAgICAgICAgbWFwKChbY2FydF06IFtDYXJ0LCBzdHJpbmcsIEN1c3RvbWVyQ291cG9uU2VhcmNoUmVzdWx0XSkgPT4gY2FydClcbiAgICAgICk7XG4gICAgfVxuICAgIC8vVE9ETyhpc3N1ZTojNTk3MSkgRGVwcmVjYXRlZCBzaW5jZSAxLjVcbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuY2FydCQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKSxcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKSxcbiAgICAgIF0pLnBpcGUoXG4gICAgICAgIHRhcChcbiAgICAgICAgICAoW2NhcnQsIHVzZXJJZF06IFtDYXJ0LCBzdHJpbmddKSA9PlxuICAgICAgICAgICAgKHRoaXMuY2FydElkID1cbiAgICAgICAgICAgICAgdXNlcklkID09PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgPyBjYXJ0Lmd1aWQgOiBjYXJ0LmNvZGUpXG4gICAgICAgICksXG4gICAgICAgIG1hcCgoW2NhcnRdOiBbQ2FydCwgc3RyaW5nXSkgPT4gY2FydClcbiAgICAgICk7XG4gICAgfVxuICAgIC8vVE9ETyhpc3N1ZTojNTk3MSkgRGVwcmVjYXRlZCBzaW5jZSAxLjVcblxuICAgIHRoaXMuY2FydElzTG9hZGluZyQgPSB0aGlzLmNhcnRTZXJ2aWNlXG4gICAgICAuZ2V0TG9hZGVkKClcbiAgICAgIC5waXBlKG1hcChsb2FkZWQgPT4gIWxvYWRlZCkpO1xuXG4gICAgdGhpcy5jYXJ0Vm91Y2hlclNlcnZpY2UucmVzZXRBZGRWb3VjaGVyUHJvY2Vzc2luZ1N0YXRlKCk7XG5cbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGNvdXBvbkNvZGU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICB9KTtcblxuICAgIHRoaXMuc3VibWl0RGlzYWJsZWQkID0gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmNhcnRJc0xvYWRpbmckLFxuICAgICAgdGhpcy5mb3JtLnZhbHVlQ2hhbmdlcy5waXBlKFxuICAgICAgICBzdGFydFdpdGgodHJ1ZSksXG4gICAgICAgIG1hcCgoKSA9PiB0aGlzLmZvcm0udmFsaWQpXG4gICAgICApLFxuICAgICAgdGhpcy5jYXJ0Vm91Y2hlclNlcnZpY2UuZ2V0QWRkVm91Y2hlclJlc3VsdExvYWRpbmcoKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKFxuICAgICAgICAoW2NhcnRJc0xvYWRpbmcsIGJ0bkVuYWJsZWQsIGFkZFZvdWNoZXJJc0xvYWRpbmddKSA9PlxuICAgICAgICAgIGNhcnRJc0xvYWRpbmcgfHwgIWJ0bkVuYWJsZWQgfHwgYWRkVm91Y2hlcklzTG9hZGluZ1xuICAgICAgKVxuICAgICk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLmNhcnRWb3VjaGVyU2VydmljZVxuICAgICAgICAuZ2V0QWRkVm91Y2hlclJlc3VsdFN1Y2Nlc3MoKVxuICAgICAgICAuc3Vic2NyaWJlKHN1Y2Nlc3MgPT4ge1xuICAgICAgICAgIHRoaXMub25TdWNjZXNzKHN1Y2Nlc3MpO1xuICAgICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLmNhcnRWb3VjaGVyU2VydmljZS5nZXRBZGRWb3VjaGVyUmVzdWx0RXJyb3IoKS5zdWJzY3JpYmUoZXJyb3IgPT4ge1xuICAgICAgICB0aGlzLm9uRXJyb3IoZXJyb3IpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uRXJyb3IoZXJyb3I6IGJvb2xlYW4pIHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHRoaXMuY3VzdG9tZXJDb3Vwb25TZXJ2aWNlLmxvYWRDdXN0b21lckNvdXBvbnMoXG4gICAgICAgIHRoaXMuTUFYX0NVU1RPTUVSX0NPVVBPTl9QQUdFXG4gICAgICApO1xuICAgICAgdGhpcy5jYXJ0Vm91Y2hlclNlcnZpY2UucmVzZXRBZGRWb3VjaGVyUHJvY2Vzc2luZ1N0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgb25TdWNjZXNzKHN1Y2Nlc3M6IGJvb2xlYW4pIHtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgdGhpcy5mb3JtLnJlc2V0KCk7XG4gICAgICB0aGlzLmNhcnRWb3VjaGVyU2VydmljZS5yZXNldEFkZFZvdWNoZXJQcm9jZXNzaW5nU3RhdGUoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0QXBwbGljYWJsZUN1c3RvbWVyQ291cG9ucyhcbiAgICBjYXJ0OiBDYXJ0LFxuICAgIGNvdXBvbnM6IEN1c3RvbWVyQ291cG9uW11cbiAgKTogdm9pZCB7XG4gICAgdGhpcy5hcHBsaWNhYmxlQ291cG9ucyA9IGNvdXBvbnMgfHwgW107XG4gICAgaWYgKGNhcnQuYXBwbGllZFZvdWNoZXJzKSB7XG4gICAgICBjYXJ0LmFwcGxpZWRWb3VjaGVycy5mb3JFYWNoKGFwcGxpZWRWb3VjaGVyID0+IHtcbiAgICAgICAgdGhpcy5hcHBsaWNhYmxlQ291cG9ucyA9IHRoaXMuYXBwbGljYWJsZUNvdXBvbnMuZmlsdGVyKFxuICAgICAgICAgIGNvdXBvbiA9PiBjb3Vwb24uY291cG9uSWQgIT09IGFwcGxpZWRWb3VjaGVyLmNvZGVcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmZpbHRlcmVkQ291cG9ucyA9IHRoaXMuYXBwbGljYWJsZUNvdXBvbnM7XG4gIH1cblxuICBhcHBseVZvdWNoZXIoKTogdm9pZCB7XG4gICAgdGhpcy5jYXJ0Vm91Y2hlclNlcnZpY2UuYWRkVm91Y2hlcih0aGlzLmZvcm0udmFsdWUuY291cG9uQ29kZSwgdGhpcy5jYXJ0SWQpO1xuICB9XG4gIGFwcGx5Q3VzdG9tZXJDb3Vwb24oY291cG9uSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY2FydFZvdWNoZXJTZXJ2aWNlLmFkZFZvdWNoZXIoY291cG9uSWQsIHRoaXMuY2FydElkKTtcbiAgICB0aGlzLmNvdXBvbkJveElzQWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICBmaWx0ZXIocXVlcnk6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gcXVlcnkudG9Mb3dlckNhc2UoKTtcblxuICAgIHRoaXMuZmlsdGVyZWRDb3Vwb25zID0gdGhpcy5hcHBsaWNhYmxlQ291cG9ucy5maWx0ZXIoXG4gICAgICBjb3Vwb24gPT4gY291cG9uLmNvdXBvbklkLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXJWYWx1ZSkgPiAtMVxuICAgICk7XG4gIH1cblxuICBvcGVuKCk6IHZvaWQge1xuICAgIHRoaXMuZmlsdGVyZWRDb3Vwb25zID0gdGhpcy5hcHBsaWNhYmxlQ291cG9ucztcbiAgICBpZiAodGhpcy5hcHBsaWNhYmxlQ291cG9ucy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmNvdXBvbkJveElzQWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBjbG9zZShldmVudDogVUlFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pZ25vcmVDbG9zZUV2ZW50KSB7XG4gICAgICB0aGlzLmNvdXBvbkJveElzQWN0aXZlID0gZmFsc2U7XG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgICg8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5ibHVyKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuaWdub3JlQ2xvc2VFdmVudCA9IGZhbHNlO1xuICB9XG5cbiAgZGlzYWJsZUNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuaWdub3JlQ2xvc2VFdmVudCA9IHRydWU7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHRoaXMuY2FydFZvdWNoZXJTZXJ2aWNlLnJlc2V0QWRkVm91Y2hlclByb2Nlc3NpbmdTdGF0ZSgpO1xuICB9XG59XG4iXX0=