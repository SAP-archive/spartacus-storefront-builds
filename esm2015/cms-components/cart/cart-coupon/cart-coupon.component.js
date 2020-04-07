import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActiveCartService, AuthService, Cart, CartVoucherService, CustomerCoupon, CustomerCouponSearchResult, CustomerCouponService, FeatureConfigService, OCC_USER_ID_ANONYMOUS, } from '@spartacus/core';
import { combineLatest, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
let CartCouponComponent = class CartCouponComponent {
    constructor(authService, cartVoucherService, formBuilder, customerCouponService, featureConfig, activeCartService) {
        this.authService = authService;
        this.cartVoucherService = cartVoucherService;
        this.formBuilder = formBuilder;
        this.customerCouponService = customerCouponService;
        this.featureConfig = featureConfig;
        this.activeCartService = activeCartService;
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
                this.activeCartService.getActive(),
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
                this.activeCartService.getActive(),
                this.authService.getOccUserId(),
            ]).pipe(tap(([cart, userId]) => (this.cartId =
                userId === OCC_USER_ID_ANONYMOUS ? cart.guid : cart.code)), map(([cart]) => cart));
        }
        //TODO(issue:#5971) Deprecated since 1.5
        this.cartIsLoading$ = this.activeCartService
            .isStable()
            .pipe(map((loaded) => !loaded));
        this.cartVoucherService.resetAddVoucherProcessingState();
        this.couponForm = this.formBuilder.group({
            couponCode: ['', [Validators.required]],
        });
        this.subscription.add(this.cartVoucherService
            .getAddVoucherResultSuccess()
            .subscribe((success) => {
            this.onSuccess(success);
        }));
        this.subscription.add(this.cartVoucherService.getAddVoucherResultError().subscribe((error) => {
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
            this.couponForm.reset();
            this.cartVoucherService.resetAddVoucherProcessingState();
        }
    }
    getApplicableCustomerCoupons(cart, coupons) {
        this.applicableCoupons = coupons || [];
        if (cart.appliedVouchers) {
            cart.appliedVouchers.forEach((appliedVoucher) => {
                this.applicableCoupons = this.applicableCoupons.filter((coupon) => coupon.couponId !== appliedVoucher.code);
            });
        }
    }
    applyVoucher() {
        if (this.couponForm.valid) {
            this.cartVoucherService.addVoucher(this.couponForm.value.couponCode, this.cartId);
        }
        else {
            this.couponForm.markAllAsTouched();
        }
    }
    applyCustomerCoupon(couponId) {
        this.cartVoucherService.addVoucher(couponId, this.cartId);
        this.couponBoxIsActive = false;
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
    { type: AuthService },
    { type: CartVoucherService },
    { type: FormBuilder },
    { type: CustomerCouponService },
    { type: FeatureConfigService },
    { type: ActiveCartService }
];
CartCouponComponent = __decorate([
    Component({
        selector: 'cx-cart-coupon',
        template: "<ng-container *ngIf=\"cart$ | async as cart\">\n  <div class=\"cx-cart-coupon-title\">\n    {{ 'voucher.coupon' | cxTranslate }}\n  </div>\n  <div class=\"form-group\">\n    <form (ngSubmit)=\"applyVoucher()\" [formGroup]=\"couponForm\">\n      <div class=\"cx-cart-coupon-container\">\n        <input\n          type=\"text\"\n          class=\"form-control input-coupon-code\"\n          formControlName=\"couponCode\"\n          placeholder=\"{{ 'voucher.placeholder' | cxTranslate }}\"\n        />\n        <button\n          class=\"btn btn-block btn-action apply-coupon-button\"\n          type=\"submit\"\n          [disabled]=\"cartIsLoading$ | async\"\n          [class.disabled]=\"cartIsLoading$ | async\"\n        >\n          {{ 'voucher.apply' | cxTranslate }}\n        </button>\n        <cx-form-errors\n          [control]=\"couponForm.get('couponCode')\"\n        ></cx-form-errors>\n      </div>\n    </form>\n  </div>\n\n  <cx-applied-coupons\n    [vouchers]=\"cart.appliedVouchers\"\n    [cartIsLoading]=\"cartIsLoading$ | async\"\n    [isReadOnly]=\"false\"\n  >\n  </cx-applied-coupons>\n\n  <ng-container *ngIf=\"applicableCoupons && applicableCoupons.length > 0\">\n    <div class=\"cx-available-coupon\">\n      <div class=\"title cx-cart-coupon-title\">\n        {{ 'voucher.availableCoupons' | cxTranslate }}\n      </div>\n      <div class=\"message\">\n        {{ 'voucher.availableCouponsLabel' | cxTranslate }}\n      </div>\n      <div class=\"scroll\">\n        <div class=\"coupons card\" *ngFor=\"let coupon of applicableCoupons\">\n          <button\n            (click)=\"applyCustomerCoupon(coupon.couponId)\"\n            class=\"coupon-id link\"\n            [disabled]=\"cartIsLoading$ | async\"\n            [class.disabled]=\"cartIsLoading$ | async\"\n          >\n            {{ coupon.couponId }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n</ng-container>\n"
    })
], CartCouponComponent);
export { CartCouponComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LWNvdXBvbi9jYXJ0LWNvdXBvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsV0FBVyxFQUNYLElBQUksRUFDSixrQkFBa0IsRUFDbEIsY0FBYyxFQUNkLDBCQUEwQixFQUMxQixxQkFBcUIsRUFDckIsb0JBQW9CLEVBQ3BCLHFCQUFxQixHQUN0QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFNMUMsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFjOUIsWUFDWSxXQUF3QixFQUN4QixrQkFBc0MsRUFDdEMsV0FBd0IsRUFDeEIscUJBQTRDLEVBQzVDLGFBQW1DLEVBQ25DLGlCQUFvQztRQUxwQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFuQmhELDZCQUF3QixHQUFHLEdBQUcsQ0FBQztRQU92QixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFFekIsaUJBQVksR0FB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QUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUNwQztJQUNILENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxRQUFnQjtRQUNsQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDO0lBRUQsS0FBSyxDQUFDLEtBQWM7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1lBQy9CLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7Z0JBQ1gsS0FBSyxDQUFDLE1BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNwQztTQUNGO1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztRQUNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyw4QkFBOEIsRUFBRSxDQUFDO0lBQzNELENBQUM7Q0FDRixDQUFBOztZQS9JMEIsV0FBVztZQUNKLGtCQUFrQjtZQUN6QixXQUFXO1lBQ0QscUJBQXFCO1lBQzdCLG9CQUFvQjtZQUNoQixpQkFBaUI7O0FBcEJyQyxtQkFBbUI7SUFKL0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixrNkRBQTJDO0tBQzVDLENBQUM7R0FDVyxtQkFBbUIsQ0E4Si9CO1NBOUpZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBBY3RpdmVDYXJ0U2VydmljZSxcbiAgQXV0aFNlcnZpY2UsXG4gIENhcnQsXG4gIENhcnRWb3VjaGVyU2VydmljZSxcbiAgQ3VzdG9tZXJDb3Vwb24sXG4gIEN1c3RvbWVyQ291cG9uU2VhcmNoUmVzdWx0LFxuICBDdXN0b21lckNvdXBvblNlcnZpY2UsXG4gIEZlYXR1cmVDb25maWdTZXJ2aWNlLFxuICBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jYXJ0LWNvdXBvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJ0LWNvdXBvbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENhcnRDb3Vwb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIE1BWF9DVVNUT01FUl9DT1VQT05fUEFHRSA9IDEwMDtcbiAgY291cG9uRm9ybTogRm9ybUdyb3VwO1xuICBjYXJ0SXNMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgY2FydCQ6IE9ic2VydmFibGU8Q2FydD47XG4gIGNhcnRJZDogc3RyaW5nO1xuICBhcHBsaWNhYmxlQ291cG9uczogQ3VzdG9tZXJDb3Vwb25bXTtcblxuICBwcml2YXRlIGlnbm9yZUNsb3NlRXZlbnQgPSBmYWxzZTtcblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBjb3Vwb25Cb3hJc0FjdGl2ZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNhcnRWb3VjaGVyU2VydmljZTogQ2FydFZvdWNoZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgcHJvdGVjdGVkIGN1c3RvbWVyQ291cG9uU2VydmljZTogQ3VzdG9tZXJDb3Vwb25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBmZWF0dXJlQ29uZmlnOiBGZWF0dXJlQ29uZmlnU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5jdXN0b21lckNvdXBvblNlcnZpY2UpIHtcbiAgICAgIHRoaXMuY3VzdG9tZXJDb3Vwb25TZXJ2aWNlLmxvYWRDdXN0b21lckNvdXBvbnMoXG4gICAgICAgIHRoaXMuTUFYX0NVU1RPTUVSX0NPVVBPTl9QQUdFXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAodGhpcy5mZWF0dXJlQ29uZmlnICYmIHRoaXMuZmVhdHVyZUNvbmZpZy5pc0xldmVsKCcxLjUnKSkge1xuICAgICAgdGhpcy5jYXJ0JCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgICB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpLFxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldE9jY1VzZXJJZCgpLFxuICAgICAgICB0aGlzLmN1c3RvbWVyQ291cG9uU2VydmljZS5nZXRDdXN0b21lckNvdXBvbnMoXG4gICAgICAgICAgdGhpcy5NQVhfQ1VTVE9NRVJfQ09VUE9OX1BBR0VcbiAgICAgICAgKSxcbiAgICAgIF0pLnBpcGUoXG4gICAgICAgIHRhcChcbiAgICAgICAgICAoW2NhcnQsIHVzZXJJZCwgY3VzdG9tZXJDb3Vwb25zXTogW1xuICAgICAgICAgICAgQ2FydCxcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIEN1c3RvbWVyQ291cG9uU2VhcmNoUmVzdWx0XG4gICAgICAgICAgXSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYXJ0SWQgPVxuICAgICAgICAgICAgICB1c2VySWQgPT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUyA/IGNhcnQuZ3VpZCA6IGNhcnQuY29kZTtcbiAgICAgICAgICAgIHRoaXMuZ2V0QXBwbGljYWJsZUN1c3RvbWVyQ291cG9ucyhjYXJ0LCBjdXN0b21lckNvdXBvbnMuY291cG9ucyk7XG4gICAgICAgICAgfVxuICAgICAgICApLFxuICAgICAgICBtYXAoKFtjYXJ0XTogW0NhcnQsIHN0cmluZywgQ3VzdG9tZXJDb3Vwb25TZWFyY2hSZXN1bHRdKSA9PiBjYXJ0KVxuICAgICAgKTtcbiAgICB9XG4gICAgLy9UT0RPKGlzc3VlOiM1OTcxKSBEZXByZWNhdGVkIHNpbmNlIDEuNVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5jYXJ0JCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgICB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpLFxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldE9jY1VzZXJJZCgpLFxuICAgICAgXSkucGlwZShcbiAgICAgICAgdGFwKFxuICAgICAgICAgIChbY2FydCwgdXNlcklkXTogW0NhcnQsIHN0cmluZ10pID0+XG4gICAgICAgICAgICAodGhpcy5jYXJ0SWQgPVxuICAgICAgICAgICAgICB1c2VySWQgPT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUyA/IGNhcnQuZ3VpZCA6IGNhcnQuY29kZSlcbiAgICAgICAgKSxcbiAgICAgICAgbWFwKChbY2FydF06IFtDYXJ0LCBzdHJpbmddKSA9PiBjYXJ0KVxuICAgICAgKTtcbiAgICB9XG4gICAgLy9UT0RPKGlzc3VlOiM1OTcxKSBEZXByZWNhdGVkIHNpbmNlIDEuNVxuXG4gICAgdGhpcy5jYXJ0SXNMb2FkaW5nJCA9IHRoaXMuYWN0aXZlQ2FydFNlcnZpY2VcbiAgICAgIC5pc1N0YWJsZSgpXG4gICAgICAucGlwZShtYXAoKGxvYWRlZCkgPT4gIWxvYWRlZCkpO1xuXG4gICAgdGhpcy5jYXJ0Vm91Y2hlclNlcnZpY2UucmVzZXRBZGRWb3VjaGVyUHJvY2Vzc2luZ1N0YXRlKCk7XG5cbiAgICB0aGlzLmNvdXBvbkZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGNvdXBvbkNvZGU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICB9KTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMuY2FydFZvdWNoZXJTZXJ2aWNlXG4gICAgICAgIC5nZXRBZGRWb3VjaGVyUmVzdWx0U3VjY2VzcygpXG4gICAgICAgIC5zdWJzY3JpYmUoKHN1Y2Nlc3MpID0+IHtcbiAgICAgICAgICB0aGlzLm9uU3VjY2VzcyhzdWNjZXNzKTtcbiAgICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5jYXJ0Vm91Y2hlclNlcnZpY2UuZ2V0QWRkVm91Y2hlclJlc3VsdEVycm9yKCkuc3Vic2NyaWJlKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLm9uRXJyb3IoZXJyb3IpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uRXJyb3IoZXJyb3I6IGJvb2xlYW4pIHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHRoaXMuY3VzdG9tZXJDb3Vwb25TZXJ2aWNlLmxvYWRDdXN0b21lckNvdXBvbnMoXG4gICAgICAgIHRoaXMuTUFYX0NVU1RPTUVSX0NPVVBPTl9QQUdFXG4gICAgICApO1xuICAgICAgdGhpcy5jYXJ0Vm91Y2hlclNlcnZpY2UucmVzZXRBZGRWb3VjaGVyUHJvY2Vzc2luZ1N0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgb25TdWNjZXNzKHN1Y2Nlc3M6IGJvb2xlYW4pIHtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgdGhpcy5jb3Vwb25Gb3JtLnJlc2V0KCk7XG4gICAgICB0aGlzLmNhcnRWb3VjaGVyU2VydmljZS5yZXNldEFkZFZvdWNoZXJQcm9jZXNzaW5nU3RhdGUoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0QXBwbGljYWJsZUN1c3RvbWVyQ291cG9ucyhcbiAgICBjYXJ0OiBDYXJ0LFxuICAgIGNvdXBvbnM6IEN1c3RvbWVyQ291cG9uW11cbiAgKTogdm9pZCB7XG4gICAgdGhpcy5hcHBsaWNhYmxlQ291cG9ucyA9IGNvdXBvbnMgfHwgW107XG4gICAgaWYgKGNhcnQuYXBwbGllZFZvdWNoZXJzKSB7XG4gICAgICBjYXJ0LmFwcGxpZWRWb3VjaGVycy5mb3JFYWNoKChhcHBsaWVkVm91Y2hlcikgPT4ge1xuICAgICAgICB0aGlzLmFwcGxpY2FibGVDb3Vwb25zID0gdGhpcy5hcHBsaWNhYmxlQ291cG9ucy5maWx0ZXIoXG4gICAgICAgICAgKGNvdXBvbikgPT4gY291cG9uLmNvdXBvbklkICE9PSBhcHBsaWVkVm91Y2hlci5jb2RlXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhcHBseVZvdWNoZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY291cG9uRm9ybS52YWxpZCkge1xuICAgICAgdGhpcy5jYXJ0Vm91Y2hlclNlcnZpY2UuYWRkVm91Y2hlcihcbiAgICAgICAgdGhpcy5jb3Vwb25Gb3JtLnZhbHVlLmNvdXBvbkNvZGUsXG4gICAgICAgIHRoaXMuY2FydElkXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvdXBvbkZvcm0ubWFya0FsbEFzVG91Y2hlZCgpO1xuICAgIH1cbiAgfVxuXG4gIGFwcGx5Q3VzdG9tZXJDb3Vwb24oY291cG9uSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY2FydFZvdWNoZXJTZXJ2aWNlLmFkZFZvdWNoZXIoY291cG9uSWQsIHRoaXMuY2FydElkKTtcbiAgICB0aGlzLmNvdXBvbkJveElzQWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICBjbG9zZShldmVudDogVUlFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pZ25vcmVDbG9zZUV2ZW50KSB7XG4gICAgICB0aGlzLmNvdXBvbkJveElzQWN0aXZlID0gZmFsc2U7XG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgICg8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5ibHVyKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuaWdub3JlQ2xvc2VFdmVudCA9IGZhbHNlO1xuICB9XG5cbiAgZGlzYWJsZUNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuaWdub3JlQ2xvc2VFdmVudCA9IHRydWU7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHRoaXMuY2FydFZvdWNoZXJTZXJ2aWNlLnJlc2V0QWRkVm91Y2hlclByb2Nlc3NpbmdTdGF0ZSgpO1xuICB9XG59XG4iXX0=