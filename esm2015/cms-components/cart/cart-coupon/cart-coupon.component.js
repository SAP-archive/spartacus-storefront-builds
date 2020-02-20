import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, Cart, CartService, CartVoucherService, CustomerCoupon, CustomerCouponSearchResult, CustomerCouponService, FeatureConfigService, OCC_USER_ID_ANONYMOUS, } from '@spartacus/core';
import { combineLatest, Subscription } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
let CartCouponComponent = class CartCouponComponent {
    constructor(cartService, authService, cartVoucherService, formBuilder, customerCouponService, featureConfig) {
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
    ngOnInit() {
        if (this.customerCouponService) {
            this.customerCouponService.loadCustomerCoupons(this.MAX_CUSTOMER_COUPON_PAGE);
        }
        if (this.featureConfig && this.featureConfig.isLevel('1.5')) {
            this.cart$ = combineLatest([
                this.cartService.getActive(),
                this.authService.getOccUserId(),
                this.customerCouponService.getCustomerCoupons(this.MAX_CUSTOMER_COUPON_PAGE),
            ]).pipe(tap(([cart, userId, customerCoupons]) => {
                this.cartId =
                    userId === OCC_USER_ID_ANONYMOUS ? cart.guid : cart.code;
                this.getApplicableCustomerCoupons(cart, customerCoupons.coupons);
            }), map(([cart]) => cart));
        }
        //TODO(issue:#5971) Deprecated since 1.5
        else {
            this.cart$ = combineLatest([
                this.cartService.getActive(),
                this.authService.getOccUserId(),
            ]).pipe(tap(([cart, userId]) => (this.cartId =
                userId === OCC_USER_ID_ANONYMOUS ? cart.guid : cart.code)), map(([cart]) => cart));
        }
        //TODO(issue:#5971) Deprecated since 1.5
        this.cartIsLoading$ = this.cartService
            .getLoaded()
            .pipe(map(loaded => !loaded));
        this.cartVoucherService.resetAddVoucherProcessingState();
        this.form = this.formBuilder.group({
            couponCode: ['', [Validators.required]],
        });
        this.submitDisabled$ = combineLatest([
            this.cartIsLoading$,
            this.form.valueChanges.pipe(startWith(true), map(() => this.form.valid)),
            this.cartVoucherService.getAddVoucherResultLoading(),
        ]).pipe(map(([cartIsLoading, btnEnabled, addVoucherIsLoading]) => cartIsLoading || !btnEnabled || addVoucherIsLoading));
        this.subscription.add(this.cartVoucherService
            .getAddVoucherResultSuccess()
            .subscribe(success => {
            this.onSuccess(success);
        }));
        this.subscription.add(this.cartVoucherService.getAddVoucherResultError().subscribe(error => {
            this.onError(error);
        }));
    }
    onError(error) {
        if (error) {
            this.customerCouponService.loadCustomerCoupons(this.MAX_CUSTOMER_COUPON_PAGE);
            this.cartVoucherService.resetAddVoucherProcessingState();
        }
    }
    onSuccess(success) {
        if (success) {
            this.form.reset();
            this.cartVoucherService.resetAddVoucherProcessingState();
        }
    }
    getApplicableCustomerCoupons(cart, coupons) {
        this.applicableCoupons = coupons || [];
        if (cart.appliedVouchers) {
            cart.appliedVouchers.forEach(appliedVoucher => {
                this.applicableCoupons = this.applicableCoupons.filter(coupon => coupon.couponId !== appliedVoucher.code);
            });
        }
        this.filteredCoupons = this.applicableCoupons;
    }
    applyVoucher() {
        this.cartVoucherService.addVoucher(this.form.value.couponCode, this.cartId);
    }
    applyCustomerCoupon(couponId) {
        this.cartVoucherService.addVoucher(couponId, this.cartId);
        this.couponBoxIsActive = false;
    }
    filter(query) {
        const filterValue = query.toLowerCase();
        this.filteredCoupons = this.applicableCoupons.filter(coupon => coupon.couponId.toLowerCase().indexOf(filterValue) > -1);
    }
    open() {
        this.filteredCoupons = this.applicableCoupons;
        if (this.applicableCoupons.length > 0) {
            this.couponBoxIsActive = true;
        }
    }
    close(event) {
        if (!this.ignoreCloseEvent) {
            this.couponBoxIsActive = false;
            if (event && event.target) {
                event.target.blur();
            }
        }
        this.ignoreCloseEvent = false;
    }
    disableClose() {
        this.ignoreCloseEvent = true;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.cartVoucherService.resetAddVoucherProcessingState();
    }
};
CartCouponComponent.ctorParameters = () => [
    { type: CartService },
    { type: AuthService },
    { type: CartVoucherService },
    { type: FormBuilder },
    { type: CustomerCouponService },
    { type: FeatureConfigService }
];
CartCouponComponent = __decorate([
    Component({
        selector: 'cx-cart-coupon',
        template: "<ng-container *ngIf=\"cart$ | async as cart\">\n  <div class=\"cx-cart-coupon-title\">\n    {{ 'voucher.coupon' | cxTranslate }}\n  </div>\n  <div class=\"form-group \">\n    <ng-container *cxFeatureLevel=\"'1.5'\">\n      <form (submit)=\"applyVoucher()\" [formGroup]=\"form\" autocomplete=\"off\">\n        <div class=\"row\">\n          <div class=\"col-md-8\">\n            <div class=\"cx-apply-voucher\">\n              <input\n                #couponInput\n                class=\"form-control input-coupon-code\"\n                id=\"applyVoucher\"\n                formControlName=\"couponCode\"\n                [placeholder]=\"'voucher.placeholder' | cxTranslate\"\n                aria-label=\"applyVoucher\"\n                (focus)=\"open()\"\n                (input)=\"filter(couponInput.value)\"\n                (blur)=\"close($event)\"\n                (keydown.escape)=\"close($event)\"\n                autocomplete=\"off\"\n              />\n\n              <div [class.couponbox-is-active]=\"couponBoxIsActive\">\n                <div\n                  *ngIf=\"filteredCoupons && filteredCoupons.length > 0\"\n                  class=\"cx-customer-coupons\"\n                  (click)=\"close($event)\"\n                >\n                  <div class=\"coupons\" (mousedown)=\"disableClose()\">\n                    <a\n                      *ngFor=\"let coupon of filteredCoupons\"\n                      (click)=\"applyCustomerCoupon(coupon.couponId)\"\n                    >\n                      <div class=\"coupon-id\">{{ coupon.couponId }}</div>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-md-4\">\n            <button\n              class=\"btn btn-block btn-action apply-coupon-button\"\n              type=\"submit\"\n              [disabled]=\"submitDisabled$ | async\"\n              [class.disabled]=\"submitDisabled$ | async\"\n            >\n              {{ 'voucher.apply' | cxTranslate }}\n            </button>\n          </div>\n        </div>\n      </form>\n    </ng-container>\n\n    <ng-container *cxFeatureLevel=\"'!1.5'\">\n      <form (submit)=\"applyVoucher()\" [formGroup]=\"form\">\n        <div class=\"row\">\n          <div class=\"col-md-8\">\n            <input\n              type=\"text\"\n              class=\"form-control input-coupon-code\"\n              id=\"applyVoucher\"\n              formControlName=\"couponCode\"\n              placeholder=\"{{ 'voucher.placeholder' | cxTranslate }}\"\n            />\n          </div>\n          <div class=\"col-md-4\">\n            <button\n              class=\"btn btn-block btn-action apply-coupon-button\"\n              type=\"submit\"\n              [disabled]=\"submitDisabled$ | async\"\n              [class.disabled]=\"submitDisabled$ | async\"\n            >\n              {{ 'voucher.apply' | cxTranslate }}\n            </button>\n          </div>\n        </div>\n      </form>\n    </ng-container>\n  </div>\n\n  <cx-applied-coupons\n    [vouchers]=\"cart.appliedVouchers\"\n    [cartIsLoading]=\"cartIsLoading$ | async\"\n    [isReadOnly]=\"false\"\n  >\n  </cx-applied-coupons>\n</ng-container>\n"
    })
], CartCouponComponent);
export { CartCouponComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LWNvdXBvbi9jYXJ0LWNvdXBvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFDTCxXQUFXLEVBQ1gsSUFBSSxFQUNKLFdBQVcsRUFDWCxrQkFBa0IsRUFDbEIsY0FBYyxFQUNkLDBCQUEwQixFQUMxQixxQkFBcUIsRUFDckIsb0JBQW9CLEVBQ3BCLHFCQUFxQixHQUN0QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTXJELElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBb0M5QixZQUNVLFdBQXdCLEVBQ3hCLFdBQXdCLEVBQ3hCLGtCQUFzQyxFQUN0QyxXQUF3QixFQUN0QixxQkFBNkMsRUFDN0MsYUFBb0M7UUFMdEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN0QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXdCO1FBQzdDLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtRQXpDaEQsNkJBQXdCLEdBQUcsR0FBRyxDQUFDO1FBU3ZCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUV6QixpQkFBWSxH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SSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1lBQy9CLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7Z0JBQ1gsS0FBSyxDQUFDLE1BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNwQztTQUNGO1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztRQUNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyw4QkFBOEIsRUFBRSxDQUFDO0lBQzNELENBQUM7Q0FDRixDQUFBOztZQXJLd0IsV0FBVztZQUNYLFdBQVc7WUFDSixrQkFBa0I7WUFDekIsV0FBVztZQUNFLHFCQUFxQjtZQUM3QixvQkFBb0I7O0FBMUNyQyxtQkFBbUI7SUFKL0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQiw2ckdBQTJDO0tBQzVDLENBQUM7R0FDVyxtQkFBbUIsQ0EwTS9CO1NBMU1ZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBBdXRoU2VydmljZSxcbiAgQ2FydCxcbiAgQ2FydFNlcnZpY2UsXG4gIENhcnRWb3VjaGVyU2VydmljZSxcbiAgQ3VzdG9tZXJDb3Vwb24sXG4gIEN1c3RvbWVyQ291cG9uU2VhcmNoUmVzdWx0LFxuICBDdXN0b21lckNvdXBvblNlcnZpY2UsXG4gIEZlYXR1cmVDb25maWdTZXJ2aWNlLFxuICBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3RhcnRXaXRoLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNhcnQtY291cG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcnQtY291cG9uLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydENvdXBvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgTUFYX0NVU1RPTUVSX0NPVVBPTl9QQUdFID0gMTAwO1xuICBmb3JtOiBGb3JtR3JvdXA7XG4gIGNhcnRJc0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBzdWJtaXREaXNhYmxlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGNhcnQkOiBPYnNlcnZhYmxlPENhcnQ+O1xuICBjYXJ0SWQ6IHN0cmluZztcbiAgYXBwbGljYWJsZUNvdXBvbnM6IEN1c3RvbWVyQ291cG9uW107XG4gIGZpbHRlcmVkQ291cG9uczogQ3VzdG9tZXJDb3Vwb25bXTtcblxuICBwcml2YXRlIGlnbm9yZUNsb3NlRXZlbnQgPSBmYWxzZTtcblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBjb3Vwb25Cb3hJc0FjdGl2ZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgY2FydFZvdWNoZXJTZXJ2aWNlOiBDYXJ0Vm91Y2hlclNlcnZpY2UsXG4gICAgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIGN1c3RvbWVyQ291cG9uU2VydmljZTogQ3VzdG9tZXJDb3Vwb25TZXJ2aWNlLFxuICAgIGZlYXR1cmVDb25maWc6IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICk7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxLjVcbiAgICogQWRkIGN1c3RvbWVyQ291cG9uU2VydmljZSxmZWF0dXJlQ29uZmlnIGZvciBjdXN0b21lciBjb3Vwb24gZmVhdHVyZS5cbiAgICogUmVtb3ZlIGlzc3VlOiAjNTk3MVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBjYXJ0Vm91Y2hlclNlcnZpY2U6IENhcnRWb3VjaGVyU2VydmljZSxcbiAgICBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXJcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIGNhcnRWb3VjaGVyU2VydmljZTogQ2FydFZvdWNoZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIHByb3RlY3RlZCBjdXN0b21lckNvdXBvblNlcnZpY2U/OiBDdXN0b21lckNvdXBvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGZlYXR1cmVDb25maWc/OiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuY3VzdG9tZXJDb3Vwb25TZXJ2aWNlKSB7XG4gICAgICB0aGlzLmN1c3RvbWVyQ291cG9uU2VydmljZS5sb2FkQ3VzdG9tZXJDb3Vwb25zKFxuICAgICAgICB0aGlzLk1BWF9DVVNUT01FUl9DT1VQT05fUEFHRVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZmVhdHVyZUNvbmZpZyAmJiB0aGlzLmZlYXR1cmVDb25maWcuaXNMZXZlbCgnMS41JykpIHtcbiAgICAgIHRoaXMuY2FydCQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKSxcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKSxcbiAgICAgICAgdGhpcy5jdXN0b21lckNvdXBvblNlcnZpY2UuZ2V0Q3VzdG9tZXJDb3Vwb25zKFxuICAgICAgICAgIHRoaXMuTUFYX0NVU1RPTUVSX0NPVVBPTl9QQUdFXG4gICAgICAgICksXG4gICAgICBdKS5waXBlKFxuICAgICAgICB0YXAoXG4gICAgICAgICAgKFtjYXJ0LCB1c2VySWQsIGN1c3RvbWVyQ291cG9uc106IFtcbiAgICAgICAgICAgIENhcnQsXG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBDdXN0b21lckNvdXBvblNlYXJjaFJlc3VsdFxuICAgICAgICAgIF0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2FydElkID1cbiAgICAgICAgICAgICAgdXNlcklkID09PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgPyBjYXJ0Lmd1aWQgOiBjYXJ0LmNvZGU7XG4gICAgICAgICAgICB0aGlzLmdldEFwcGxpY2FibGVDdXN0b21lckNvdXBvbnMoY2FydCwgY3VzdG9tZXJDb3Vwb25zLmNvdXBvbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgKSxcbiAgICAgICAgbWFwKChbY2FydF06IFtDYXJ0LCBzdHJpbmcsIEN1c3RvbWVyQ291cG9uU2VhcmNoUmVzdWx0XSkgPT4gY2FydClcbiAgICAgICk7XG4gICAgfVxuICAgIC8vVE9ETyhpc3N1ZTojNTk3MSkgRGVwcmVjYXRlZCBzaW5jZSAxLjVcbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuY2FydCQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKSxcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKSxcbiAgICAgIF0pLnBpcGUoXG4gICAgICAgIHRhcChcbiAgICAgICAgICAoW2NhcnQsIHVzZXJJZF06IFtDYXJ0LCBzdHJpbmddKSA9PlxuICAgICAgICAgICAgKHRoaXMuY2FydElkID1cbiAgICAgICAgICAgICAgdXNlcklkID09PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgPyBjYXJ0Lmd1aWQgOiBjYXJ0LmNvZGUpXG4gICAgICAgICksXG4gICAgICAgIG1hcCgoW2NhcnRdOiBbQ2FydCwgc3RyaW5nXSkgPT4gY2FydClcbiAgICAgICk7XG4gICAgfVxuICAgIC8vVE9ETyhpc3N1ZTojNTk3MSkgRGVwcmVjYXRlZCBzaW5jZSAxLjVcblxuICAgIHRoaXMuY2FydElzTG9hZGluZyQgPSB0aGlzLmNhcnRTZXJ2aWNlXG4gICAgICAuZ2V0TG9hZGVkKClcbiAgICAgIC5waXBlKG1hcChsb2FkZWQgPT4gIWxvYWRlZCkpO1xuXG4gICAgdGhpcy5jYXJ0Vm91Y2hlclNlcnZpY2UucmVzZXRBZGRWb3VjaGVyUHJvY2Vzc2luZ1N0YXRlKCk7XG5cbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGNvdXBvbkNvZGU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICB9KTtcblxuICAgIHRoaXMuc3VibWl0RGlzYWJsZWQkID0gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmNhcnRJc0xvYWRpbmckLFxuICAgICAgdGhpcy5mb3JtLnZhbHVlQ2hhbmdlcy5waXBlKFxuICAgICAgICBzdGFydFdpdGgodHJ1ZSksXG4gICAgICAgIG1hcCgoKSA9PiB0aGlzLmZvcm0udmFsaWQpXG4gICAgICApLFxuICAgICAgdGhpcy5jYXJ0Vm91Y2hlclNlcnZpY2UuZ2V0QWRkVm91Y2hlclJlc3VsdExvYWRpbmcoKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKFxuICAgICAgICAoW2NhcnRJc0xvYWRpbmcsIGJ0bkVuYWJsZWQsIGFkZFZvdWNoZXJJc0xvYWRpbmddKSA9PlxuICAgICAgICAgIGNhcnRJc0xvYWRpbmcgfHwgIWJ0bkVuYWJsZWQgfHwgYWRkVm91Y2hlcklzTG9hZGluZ1xuICAgICAgKVxuICAgICk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLmNhcnRWb3VjaGVyU2VydmljZVxuICAgICAgICAuZ2V0QWRkVm91Y2hlclJlc3VsdFN1Y2Nlc3MoKVxuICAgICAgICAuc3Vic2NyaWJlKHN1Y2Nlc3MgPT4ge1xuICAgICAgICAgIHRoaXMub25TdWNjZXNzKHN1Y2Nlc3MpO1xuICAgICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLmNhcnRWb3VjaGVyU2VydmljZS5nZXRBZGRWb3VjaGVyUmVzdWx0RXJyb3IoKS5zdWJzY3JpYmUoZXJyb3IgPT4ge1xuICAgICAgICB0aGlzLm9uRXJyb3IoZXJyb3IpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uRXJyb3IoZXJyb3I6IGJvb2xlYW4pIHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHRoaXMuY3VzdG9tZXJDb3Vwb25TZXJ2aWNlLmxvYWRDdXN0b21lckNvdXBvbnMoXG4gICAgICAgIHRoaXMuTUFYX0NVU1RPTUVSX0NPVVBPTl9QQUdFXG4gICAgICApO1xuICAgICAgdGhpcy5jYXJ0Vm91Y2hlclNlcnZpY2UucmVzZXRBZGRWb3VjaGVyUHJvY2Vzc2luZ1N0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgb25TdWNjZXNzKHN1Y2Nlc3M6IGJvb2xlYW4pIHtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgdGhpcy5mb3JtLnJlc2V0KCk7XG4gICAgICB0aGlzLmNhcnRWb3VjaGVyU2VydmljZS5yZXNldEFkZFZvdWNoZXJQcm9jZXNzaW5nU3RhdGUoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0QXBwbGljYWJsZUN1c3RvbWVyQ291cG9ucyhcbiAgICBjYXJ0OiBDYXJ0LFxuICAgIGNvdXBvbnM6IEN1c3RvbWVyQ291cG9uW11cbiAgKTogdm9pZCB7XG4gICAgdGhpcy5hcHBsaWNhYmxlQ291cG9ucyA9IGNvdXBvbnMgfHwgW107XG4gICAgaWYgKGNhcnQuYXBwbGllZFZvdWNoZXJzKSB7XG4gICAgICBjYXJ0LmFwcGxpZWRWb3VjaGVycy5mb3JFYWNoKGFwcGxpZWRWb3VjaGVyID0+IHtcbiAgICAgICAgdGhpcy5hcHBsaWNhYmxlQ291cG9ucyA9IHRoaXMuYXBwbGljYWJsZUNvdXBvbnMuZmlsdGVyKFxuICAgICAgICAgIGNvdXBvbiA9PiBjb3Vwb24uY291cG9uSWQgIT09IGFwcGxpZWRWb3VjaGVyLmNvZGVcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmZpbHRlcmVkQ291cG9ucyA9IHRoaXMuYXBwbGljYWJsZUNvdXBvbnM7XG4gIH1cblxuICBhcHBseVZvdWNoZXIoKTogdm9pZCB7XG4gICAgdGhpcy5jYXJ0Vm91Y2hlclNlcnZpY2UuYWRkVm91Y2hlcih0aGlzLmZvcm0udmFsdWUuY291cG9uQ29kZSwgdGhpcy5jYXJ0SWQpO1xuICB9XG4gIGFwcGx5Q3VzdG9tZXJDb3Vwb24oY291cG9uSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY2FydFZvdWNoZXJTZXJ2aWNlLmFkZFZvdWNoZXIoY291cG9uSWQsIHRoaXMuY2FydElkKTtcbiAgICB0aGlzLmNvdXBvbkJveElzQWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICBmaWx0ZXIocXVlcnk6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gcXVlcnkudG9Mb3dlckNhc2UoKTtcblxuICAgIHRoaXMuZmlsdGVyZWRDb3Vwb25zID0gdGhpcy5hcHBsaWNhYmxlQ291cG9ucy5maWx0ZXIoXG4gICAgICBjb3Vwb24gPT4gY291cG9uLmNvdXBvbklkLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXJWYWx1ZSkgPiAtMVxuICAgICk7XG4gIH1cblxuICBvcGVuKCk6IHZvaWQge1xuICAgIHRoaXMuZmlsdGVyZWRDb3Vwb25zID0gdGhpcy5hcHBsaWNhYmxlQ291cG9ucztcbiAgICBpZiAodGhpcy5hcHBsaWNhYmxlQ291cG9ucy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmNvdXBvbkJveElzQWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBjbG9zZShldmVudDogVUlFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pZ25vcmVDbG9zZUV2ZW50KSB7XG4gICAgICB0aGlzLmNvdXBvbkJveElzQWN0aXZlID0gZmFsc2U7XG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgICg8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5ibHVyKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuaWdub3JlQ2xvc2VFdmVudCA9IGZhbHNlO1xuICB9XG5cbiAgZGlzYWJsZUNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuaWdub3JlQ2xvc2VFdmVudCA9IHRydWU7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHRoaXMuY2FydFZvdWNoZXJTZXJ2aWNlLnJlc2V0QWRkVm91Y2hlclByb2Nlc3NpbmdTdGF0ZSgpO1xuICB9XG59XG4iXX0=