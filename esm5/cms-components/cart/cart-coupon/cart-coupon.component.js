import { __decorate, __read } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActiveCartService, Cart, CartVoucherService, CustomerCoupon, CustomerCouponSearchResult, CustomerCouponService, } from '@spartacus/core';
import { combineLatest, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
var CartCouponComponent = /** @class */ (function () {
    function CartCouponComponent(cartVoucherService, formBuilder, customerCouponService, activeCartService) {
        this.cartVoucherService = cartVoucherService;
        this.formBuilder = formBuilder;
        this.customerCouponService = customerCouponService;
        this.activeCartService = activeCartService;
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
        this.cart$ = combineLatest([
            this.activeCartService.getActive(),
            this.activeCartService.getActiveCartId(),
            this.customerCouponService.getCustomerCoupons(this.MAX_CUSTOMER_COUPON_PAGE),
        ]).pipe(tap(function (_a) {
            var _b = __read(_a, 3), cart = _b[0], activeCardId = _b[1], customerCoupons = _b[2];
            _this.cartId = activeCardId;
            _this.getApplicableCustomerCoupons(cart, customerCoupons.coupons);
        }), map(function (_a) {
            var _b = __read(_a, 1), cart = _b[0];
            return cart;
        }));
        this.cartIsLoading$ = this.activeCartService
            .isStable()
            .pipe(map(function (loaded) { return !loaded; }));
        this.cartVoucherService.resetAddVoucherProcessingState();
        this.couponForm = this.formBuilder.group({
            couponCode: ['', [Validators.required]],
        });
        // TODO(#7241): Replace process subscriptions with event listeners and drop process for ADD_VOUCHER
        this.subscription.add(this.cartVoucherService
            .getAddVoucherResultSuccess()
            .subscribe(function (success) {
            _this.onSuccess(success);
        }));
        // TODO(#7241): Replace process subscriptions with event listeners and drop process for ADD_VOUCHER
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
            this.couponForm.reset();
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
        if (this.couponForm.valid) {
            this.cartVoucherService.addVoucher(this.couponForm.value.couponCode, this.cartId);
        }
        else {
            this.couponForm.markAllAsTouched();
        }
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
        { type: CartVoucherService },
        { type: FormBuilder },
        { type: CustomerCouponService },
        { type: ActiveCartService }
    ]; };
    CartCouponComponent = __decorate([
        Component({
            selector: 'cx-cart-coupon',
            template: "<ng-container *ngIf=\"cart$ | async as cart\">\n  <div class=\"cx-cart-coupon-title\">\n    {{ 'voucher.coupon' | cxTranslate }}\n  </div>\n  <div class=\"form-group\">\n    <form (ngSubmit)=\"applyVoucher()\" [formGroup]=\"couponForm\">\n      <div class=\"cx-cart-coupon-container\">\n        <input\n          type=\"text\"\n          class=\"form-control input-coupon-code\"\n          formControlName=\"couponCode\"\n          placeholder=\"{{ 'voucher.placeholder' | cxTranslate }}\"\n        />\n        <button\n          class=\"btn btn-block btn-action apply-coupon-button\"\n          type=\"submit\"\n          [disabled]=\"cartIsLoading$ | async\"\n          [class.disabled]=\"cartIsLoading$ | async\"\n        >\n          {{ 'voucher.apply' | cxTranslate }}\n        </button>\n        <cx-form-errors\n          [control]=\"couponForm.get('couponCode')\"\n        ></cx-form-errors>\n      </div>\n    </form>\n  </div>\n\n  <cx-applied-coupons\n    [vouchers]=\"cart.appliedVouchers\"\n    [cartIsLoading]=\"cartIsLoading$ | async\"\n    [isReadOnly]=\"false\"\n  >\n  </cx-applied-coupons>\n\n  <ng-container *ngIf=\"applicableCoupons && applicableCoupons.length > 0\">\n    <div class=\"cx-available-coupon\">\n      <div class=\"title cx-cart-coupon-title\">\n        {{ 'voucher.availableCoupons' | cxTranslate }}\n      </div>\n      <div class=\"message\">\n        {{ 'voucher.availableCouponsLabel' | cxTranslate }}\n      </div>\n      <div class=\"scroll\">\n        <div class=\"coupons card\" *ngFor=\"let coupon of applicableCoupons\">\n          <button\n            (click)=\"applyCustomerCoupon(coupon.couponId)\"\n            class=\"coupon-id link\"\n            [disabled]=\"cartIsLoading$ | async\"\n            [class.disabled]=\"cartIsLoading$ | async\"\n          >\n            {{ coupon.couponId }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n</ng-container>\n"
        })
    ], CartCouponComponent);
    return CartCouponComponent;
}());
export { CartCouponComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LWNvdXBvbi9jYXJ0LWNvdXBvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsSUFBSSxFQUNKLGtCQUFrQixFQUNsQixjQUFjLEVBQ2QsMEJBQTBCLEVBQzFCLHFCQUFxQixHQUN0QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFNMUM7SUFjRSw2QkFDWSxrQkFBc0MsRUFDdEMsV0FBd0IsRUFDeEIscUJBQTRDLEVBQzVDLGlCQUFvQztRQUhwQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQWpCaEQsNkJBQXdCLEdBQUcsR0FBRyxDQUFDO1FBT3ZCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUV6QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFMUMsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO0lBT3ZCLENBQUM7SUFFSixzQ0FBUSxHQUFSO1FBQUEsaUJBb0RDO1FBbkRDLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzlCLElBQUksQ0FBQyxxQkFBcUIs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QztJQUMzRCxDQUFDOztnQkE3SCtCLGtCQUFrQjtnQkFDekIsV0FBVztnQkFDRCxxQkFBcUI7Z0JBQ3pCLGlCQUFpQjs7SUFsQnJDLG1CQUFtQjtRQUovQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLGs2REFBMkM7U0FDNUMsQ0FBQztPQUNXLG1CQUFtQixDQTZJL0I7SUFBRCwwQkFBQztDQUFBLEFBN0lELElBNklDO1NBN0lZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBBY3RpdmVDYXJ0U2VydmljZSxcbiAgQ2FydCxcbiAgQ2FydFZvdWNoZXJTZXJ2aWNlLFxuICBDdXN0b21lckNvdXBvbixcbiAgQ3VzdG9tZXJDb3Vwb25TZWFyY2hSZXN1bHQsXG4gIEN1c3RvbWVyQ291cG9uU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNhcnQtY291cG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcnQtY291cG9uLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydENvdXBvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgTUFYX0NVU1RPTUVSX0NPVVBPTl9QQUdFID0gMTAwO1xuICBjb3Vwb25Gb3JtOiBGb3JtR3JvdXA7XG4gIGNhcnRJc0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBjYXJ0JDogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgY2FydElkOiBzdHJpbmc7XG4gIGFwcGxpY2FibGVDb3Vwb25zOiBDdXN0b21lckNvdXBvbltdO1xuXG4gIHByaXZhdGUgaWdub3JlQ2xvc2VFdmVudCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGNvdXBvbkJveElzQWN0aXZlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNhcnRWb3VjaGVyU2VydmljZTogQ2FydFZvdWNoZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgcHJvdGVjdGVkIGN1c3RvbWVyQ291cG9uU2VydmljZTogQ3VzdG9tZXJDb3Vwb25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmN1c3RvbWVyQ291cG9uU2VydmljZSkge1xuICAgICAgdGhpcy5jdXN0b21lckNvdXBvblNlcnZpY2UubG9hZEN1c3RvbWVyQ291cG9ucyhcbiAgICAgICAgdGhpcy5NQVhfQ1VTVE9NRVJfQ09VUE9OX1BBR0VcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy5jYXJ0JCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5nZXRBY3RpdmUoKSxcbiAgICAgIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuZ2V0QWN0aXZlQ2FydElkKCksXG4gICAgICB0aGlzLmN1c3RvbWVyQ291cG9uU2VydmljZS5nZXRDdXN0b21lckNvdXBvbnMoXG4gICAgICAgIHRoaXMuTUFYX0NVU1RPTUVSX0NPVVBPTl9QQUdFXG4gICAgICApLFxuICAgIF0pLnBpcGUoXG4gICAgICB0YXAoXG4gICAgICAgIChbY2FydCwgYWN0aXZlQ2FyZElkLCBjdXN0b21lckNvdXBvbnNdOiBbXG4gICAgICAgICAgQ2FydCxcbiAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgQ3VzdG9tZXJDb3Vwb25TZWFyY2hSZXN1bHRcbiAgICAgICAgXSkgPT4ge1xuICAgICAgICAgIHRoaXMuY2FydElkID0gYWN0aXZlQ2FyZElkO1xuICAgICAgICAgIHRoaXMuZ2V0QXBwbGljYWJsZUN1c3RvbWVyQ291cG9ucyhjYXJ0LCBjdXN0b21lckNvdXBvbnMuY291cG9ucyk7XG4gICAgICAgIH1cbiAgICAgICksXG4gICAgICBtYXAoKFtjYXJ0XTogW0NhcnQsIHN0cmluZywgQ3VzdG9tZXJDb3Vwb25TZWFyY2hSZXN1bHRdKSA9PiBjYXJ0KVxuICAgICk7XG5cbiAgICB0aGlzLmNhcnRJc0xvYWRpbmckID0gdGhpcy5hY3RpdmVDYXJ0U2VydmljZVxuICAgICAgLmlzU3RhYmxlKClcbiAgICAgIC5waXBlKG1hcCgobG9hZGVkKSA9PiAhbG9hZGVkKSk7XG5cbiAgICB0aGlzLmNhcnRWb3VjaGVyU2VydmljZS5yZXNldEFkZFZvdWNoZXJQcm9jZXNzaW5nU3RhdGUoKTtcblxuICAgIHRoaXMuY291cG9uRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgY291cG9uQ29kZTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgIH0pO1xuXG4gICAgLy8gVE9ETygjNzI0MSk6IFJlcGxhY2UgcHJvY2VzcyBzdWJzY3JpcHRpb25zIHdpdGggZXZlbnQgbGlzdGVuZXJzIGFuZCBkcm9wIHByb2Nlc3MgZm9yIEFERF9WT1VDSEVSXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5jYXJ0Vm91Y2hlclNlcnZpY2VcbiAgICAgICAgLmdldEFkZFZvdWNoZXJSZXN1bHRTdWNjZXNzKClcbiAgICAgICAgLnN1YnNjcmliZSgoc3VjY2VzcykgPT4ge1xuICAgICAgICAgIHRoaXMub25TdWNjZXNzKHN1Y2Nlc3MpO1xuICAgICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBUT0RPKCM3MjQxKTogUmVwbGFjZSBwcm9jZXNzIHN1YnNjcmlwdGlvbnMgd2l0aCBldmVudCBsaXN0ZW5lcnMgYW5kIGRyb3AgcHJvY2VzcyBmb3IgQUREX1ZPVUNIRVJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLmNhcnRWb3VjaGVyU2VydmljZS5nZXRBZGRWb3VjaGVyUmVzdWx0RXJyb3IoKS5zdWJzY3JpYmUoKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMub25FcnJvcihlcnJvcik7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgb25FcnJvcihlcnJvcjogYm9vbGVhbikge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgdGhpcy5jdXN0b21lckNvdXBvblNlcnZpY2UubG9hZEN1c3RvbWVyQ291cG9ucyhcbiAgICAgICAgdGhpcy5NQVhfQ1VTVE9NRVJfQ09VUE9OX1BBR0VcbiAgICAgICk7XG4gICAgICB0aGlzLmNhcnRWb3VjaGVyU2VydmljZS5yZXNldEFkZFZvdWNoZXJQcm9jZXNzaW5nU3RhdGUoKTtcbiAgICB9XG4gIH1cblxuICBvblN1Y2Nlc3Moc3VjY2VzczogYm9vbGVhbikge1xuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICB0aGlzLmNvdXBvbkZvcm0ucmVzZXQoKTtcbiAgICAgIHRoaXMuY2FydFZvdWNoZXJTZXJ2aWNlLnJlc2V0QWRkVm91Y2hlclByb2Nlc3NpbmdTdGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRBcHBsaWNhYmxlQ3VzdG9tZXJDb3Vwb25zKFxuICAgIGNhcnQ6IENhcnQsXG4gICAgY291cG9uczogQ3VzdG9tZXJDb3Vwb25bXVxuICApOiB2b2lkIHtcbiAgICB0aGlzLmFwcGxpY2FibGVDb3Vwb25zID0gY291cG9ucyB8fCBbXTtcbiAgICBpZiAoY2FydC5hcHBsaWVkVm91Y2hlcnMpIHtcbiAgICAgIGNhcnQuYXBwbGllZFZvdWNoZXJzLmZvckVhY2goKGFwcGxpZWRWb3VjaGVyKSA9PiB7XG4gICAgICAgIHRoaXMuYXBwbGljYWJsZUNvdXBvbnMgPSB0aGlzLmFwcGxpY2FibGVDb3Vwb25zLmZpbHRlcihcbiAgICAgICAgICAoY291cG9uKSA9PiBjb3Vwb24uY291cG9uSWQgIT09IGFwcGxpZWRWb3VjaGVyLmNvZGVcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFwcGx5Vm91Y2hlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb3Vwb25Gb3JtLnZhbGlkKSB7XG4gICAgICB0aGlzLmNhcnRWb3VjaGVyU2VydmljZS5hZGRWb3VjaGVyKFxuICAgICAgICB0aGlzLmNvdXBvbkZvcm0udmFsdWUuY291cG9uQ29kZSxcbiAgICAgICAgdGhpcy5jYXJ0SWRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY291cG9uRm9ybS5tYXJrQWxsQXNUb3VjaGVkKCk7XG4gICAgfVxuICB9XG5cbiAgYXBwbHlDdXN0b21lckNvdXBvbihjb3Vwb25JZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jYXJ0Vm91Y2hlclNlcnZpY2UuYWRkVm91Y2hlcihjb3Vwb25JZCwgdGhpcy5jYXJ0SWQpO1xuICAgIHRoaXMuY291cG9uQm94SXNBY3RpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGNsb3NlKGV2ZW50OiBVSUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlnbm9yZUNsb3NlRXZlbnQpIHtcbiAgICAgIHRoaXMuY291cG9uQm94SXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIGlmIChldmVudCAmJiBldmVudC50YXJnZXQpIHtcbiAgICAgICAgKDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpLmJsdXIoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5pZ25vcmVDbG9zZUV2ZW50ID0gZmFsc2U7XG4gIH1cblxuICBkaXNhYmxlQ2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5pZ25vcmVDbG9zZUV2ZW50ID0gdHJ1ZTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgdGhpcy5jYXJ0Vm91Y2hlclNlcnZpY2UucmVzZXRBZGRWb3VjaGVyUHJvY2Vzc2luZ1N0YXRlKCk7XG4gIH1cbn1cbiJdfQ==