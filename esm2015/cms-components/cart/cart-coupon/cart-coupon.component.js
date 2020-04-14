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
        // TODO(#7241): Replace process subscriptions with event listeners and drop process for ADD_VOUCHER
        this.subscription.add(this.cartVoucherService
            .getAddVoucherResultSuccess()
            .subscribe((success) => {
            this.onSuccess(success);
        }));
        // TODO(#7241): Replace process subscriptions with event listeners and drop process for ADD_VOUCHER
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LWNvdXBvbi9jYXJ0LWNvdXBvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsV0FBVyxFQUNYLElBQUksRUFDSixrQkFBa0IsRUFDbEIsY0FBYyxFQUNkLDBCQUEwQixFQUMxQixxQkFBcUIsRUFDckIsb0JBQW9CLEVBQ3BCLHFCQUFxQixHQUN0QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFNMUMsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFjOUIsWUFDWSxXQUF3QixFQUN4QixrQkFBc0MsRUFDdEMsV0FBd0IsRUFDeEIscUJBQTRDLEVBQzVDLGFBQW1DLEVBQ25DLGlCQUFvQztRQUxwQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFuQmhELDZCQUF3QixHQUFHLEdBQUcsQ0FBQztRQU92QixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFFekIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTFDLHNCQUFpQixHQUFHLEtBQUssQ0FBQztJQVN2QixDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzlCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxtQkFBbUIsQ0FDNUMsSUFBSSxDQUFDLHdCQUF3QixDQUM5QixDQUFDO1NBQ0g7UUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDM0QsSUFBSSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFO2dCQUMvQixJQUFJLENBQUMscUJBQXFCLENBQUMsa0JBQWtCLENBQzNDLElBQUksQ0FBQyx3QkFBd0IsQ0FDOUI7YUFDRixDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUcsQ0FDRCxDQUFDLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxlQUFlLENBSTlCLEVBQUUsRUFBRTtnQkFDSCxJQUFJLENBQUMsTUFBTTtvQkFDVCxNQUFNLEtBQUsscUJBQXFCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQzNELElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ25FLENBQUMsQ0FDRixFQUNELEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUE2QyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FDbEUsQ0FBQztTQUNIO1FBQ0Qsd0NBQXdDO2FBQ25DO1lBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFO2FBQ2hDLENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRyxDQUNELENBQUMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFpQixFQUFFLEVBQUUsQ0FDakMsQ0FBQyxJQUFJLENBQUMsTUFBTTtnQkFDVixNQUFNLEtBQUsscUJBQXFCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FDOUQsRUFDRCxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBaUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQ3RDLENBQUM7U0FDSDtRQUNELHdDQUF3QztRQUV4QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUI7YUFDekMsUUFBUSxFQUFFO2FBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBRWxDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyw4QkFBOEIsRUFBRSxDQUFDO1FBRXpELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDdkMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3hDLENBQUMsQ0FBQztRQUVILG1HQUFtRztRQUNuRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsSUFBSSxDQUFDLGtCQUFrQjthQUNwQiwwQkFBMEIsRUFBRTthQUM1QixTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUNMLENBQUM7UUFFRixtR0FBbUc7UUFDbkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQ25CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ3JFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFUyxPQUFPLENBQUMsS0FBYztRQUM5QixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxtQkFBbUIsQ0FDNUMsSUFBSSxDQUFDLHdCQUF3QixDQUM5QixDQUFDO1lBQ0YsSUFBSSxDQUFDLGtCQUFrQixDQUFDLDhCQUE4QixFQUFFLENBQUM7U0FDMUQ7SUFDSCxDQUFDO0lBRUQsU0FBUyxDQUFDLE9BQWdCO1FBQ3hCLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsa0JBQWtCLENBQUMsOEJBQThCLEVBQUUsQ0FBQztTQUMxRDtJQUNILENBQUM7SUFFUyw0QkFBNEIsQ0FDcEMsSUFBVSxFQUNWLE9BQXlCO1FBRXpCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ3ZDLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUM5QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FDcEQsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssY0FBYyxDQUFDLElBQUksQ0FDcEQsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUU7WUFDekIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUNoQyxJQUFJLENBQUMsTUFBTSxDQUNaLENBQUM7U0FDSDthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUVELG1CQUFtQixDQUFDLFFBQWdCO1FBQ2xDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxLQUFLLENBQUMsS0FBYztRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQzFCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7WUFDL0IsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDWCxLQUFLLENBQUMsTUFBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3BDO1NBQ0Y7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztJQUMvQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLDhCQUE4QixFQUFFLENBQUM7SUFDM0QsQ0FBQztDQUNGLENBQUE7O1lBakowQixXQUFXO1lBQ0osa0JBQWtCO1lBQ3pCLFdBQVc7WUFDRCxxQkFBcUI7WUFDN0Isb0JBQW9CO1lBQ2hCLGlCQUFpQjs7QUFwQnJDLG1CQUFtQjtJQUovQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLGs2REFBMkM7S0FDNUMsQ0FBQztHQUNXLG1CQUFtQixDQWdLL0I7U0FoS1ksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIEFjdGl2ZUNhcnRTZXJ2aWNlLFxuICBBdXRoU2VydmljZSxcbiAgQ2FydCxcbiAgQ2FydFZvdWNoZXJTZXJ2aWNlLFxuICBDdXN0b21lckNvdXBvbixcbiAgQ3VzdG9tZXJDb3Vwb25TZWFyY2hSZXN1bHQsXG4gIEN1c3RvbWVyQ291cG9uU2VydmljZSxcbiAgRmVhdHVyZUNvbmZpZ1NlcnZpY2UsXG4gIE9DQ19VU0VSX0lEX0FOT05ZTU9VUyxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNhcnQtY291cG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcnQtY291cG9uLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydENvdXBvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgTUFYX0NVU1RPTUVSX0NPVVBPTl9QQUdFID0gMTAwO1xuICBjb3Vwb25Gb3JtOiBGb3JtR3JvdXA7XG4gIGNhcnRJc0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBjYXJ0JDogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgY2FydElkOiBzdHJpbmc7XG4gIGFwcGxpY2FibGVDb3Vwb25zOiBDdXN0b21lckNvdXBvbltdO1xuXG4gIHByaXZhdGUgaWdub3JlQ2xvc2VFdmVudCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGNvdXBvbkJveElzQWN0aXZlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2FydFZvdWNoZXJTZXJ2aWNlOiBDYXJ0Vm91Y2hlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICBwcm90ZWN0ZWQgY3VzdG9tZXJDb3Vwb25TZXJ2aWNlOiBDdXN0b21lckNvdXBvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGZlYXR1cmVDb25maWc6IEZlYXR1cmVDb25maWdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmN1c3RvbWVyQ291cG9uU2VydmljZSkge1xuICAgICAgdGhpcy5jdXN0b21lckNvdXBvblNlcnZpY2UubG9hZEN1c3RvbWVyQ291cG9ucyhcbiAgICAgICAgdGhpcy5NQVhfQ1VTVE9NRVJfQ09VUE9OX1BBR0VcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICh0aGlzLmZlYXR1cmVDb25maWcgJiYgdGhpcy5mZWF0dXJlQ29uZmlnLmlzTGV2ZWwoJzEuNScpKSB7XG4gICAgICB0aGlzLmNhcnQkID0gY29tYmluZUxhdGVzdChbXG4gICAgICAgIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuZ2V0QWN0aXZlKCksXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0T2NjVXNlcklkKCksXG4gICAgICAgIHRoaXMuY3VzdG9tZXJDb3Vwb25TZXJ2aWNlLmdldEN1c3RvbWVyQ291cG9ucyhcbiAgICAgICAgICB0aGlzLk1BWF9DVVNUT01FUl9DT1VQT05fUEFHRVxuICAgICAgICApLFxuICAgICAgXSkucGlwZShcbiAgICAgICAgdGFwKFxuICAgICAgICAgIChbY2FydCwgdXNlcklkLCBjdXN0b21lckNvdXBvbnNdOiBbXG4gICAgICAgICAgICBDYXJ0LFxuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgQ3VzdG9tZXJDb3Vwb25TZWFyY2hSZXN1bHRcbiAgICAgICAgICBdKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNhcnRJZCA9XG4gICAgICAgICAgICAgIHVzZXJJZCA9PT0gT0NDX1VTRVJfSURfQU5PTllNT1VTID8gY2FydC5ndWlkIDogY2FydC5jb2RlO1xuICAgICAgICAgICAgdGhpcy5nZXRBcHBsaWNhYmxlQ3VzdG9tZXJDb3Vwb25zKGNhcnQsIGN1c3RvbWVyQ291cG9ucy5jb3Vwb25zKTtcbiAgICAgICAgICB9XG4gICAgICAgICksXG4gICAgICAgIG1hcCgoW2NhcnRdOiBbQ2FydCwgc3RyaW5nLCBDdXN0b21lckNvdXBvblNlYXJjaFJlc3VsdF0pID0+IGNhcnQpXG4gICAgICApO1xuICAgIH1cbiAgICAvL1RPRE8oaXNzdWU6IzU5NzEpIERlcHJlY2F0ZWQgc2luY2UgMS41XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmNhcnQkID0gY29tYmluZUxhdGVzdChbXG4gICAgICAgIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuZ2V0QWN0aXZlKCksXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0T2NjVXNlcklkKCksXG4gICAgICBdKS5waXBlKFxuICAgICAgICB0YXAoXG4gICAgICAgICAgKFtjYXJ0LCB1c2VySWRdOiBbQ2FydCwgc3RyaW5nXSkgPT5cbiAgICAgICAgICAgICh0aGlzLmNhcnRJZCA9XG4gICAgICAgICAgICAgIHVzZXJJZCA9PT0gT0NDX1VTRVJfSURfQU5PTllNT1VTID8gY2FydC5ndWlkIDogY2FydC5jb2RlKVxuICAgICAgICApLFxuICAgICAgICBtYXAoKFtjYXJ0XTogW0NhcnQsIHN0cmluZ10pID0+IGNhcnQpXG4gICAgICApO1xuICAgIH1cbiAgICAvL1RPRE8oaXNzdWU6IzU5NzEpIERlcHJlY2F0ZWQgc2luY2UgMS41XG5cbiAgICB0aGlzLmNhcnRJc0xvYWRpbmckID0gdGhpcy5hY3RpdmVDYXJ0U2VydmljZVxuICAgICAgLmlzU3RhYmxlKClcbiAgICAgIC5waXBlKG1hcCgobG9hZGVkKSA9PiAhbG9hZGVkKSk7XG5cbiAgICB0aGlzLmNhcnRWb3VjaGVyU2VydmljZS5yZXNldEFkZFZvdWNoZXJQcm9jZXNzaW5nU3RhdGUoKTtcblxuICAgIHRoaXMuY291cG9uRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgY291cG9uQ29kZTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgIH0pO1xuXG4gICAgLy8gVE9ETygjNzI0MSk6IFJlcGxhY2UgcHJvY2VzcyBzdWJzY3JpcHRpb25zIHdpdGggZXZlbnQgbGlzdGVuZXJzIGFuZCBkcm9wIHByb2Nlc3MgZm9yIEFERF9WT1VDSEVSXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5jYXJ0Vm91Y2hlclNlcnZpY2VcbiAgICAgICAgLmdldEFkZFZvdWNoZXJSZXN1bHRTdWNjZXNzKClcbiAgICAgICAgLnN1YnNjcmliZSgoc3VjY2VzcykgPT4ge1xuICAgICAgICAgIHRoaXMub25TdWNjZXNzKHN1Y2Nlc3MpO1xuICAgICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBUT0RPKCM3MjQxKTogUmVwbGFjZSBwcm9jZXNzIHN1YnNjcmlwdGlvbnMgd2l0aCBldmVudCBsaXN0ZW5lcnMgYW5kIGRyb3AgcHJvY2VzcyBmb3IgQUREX1ZPVUNIRVJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLmNhcnRWb3VjaGVyU2VydmljZS5nZXRBZGRWb3VjaGVyUmVzdWx0RXJyb3IoKS5zdWJzY3JpYmUoKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMub25FcnJvcihlcnJvcik7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgb25FcnJvcihlcnJvcjogYm9vbGVhbikge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgdGhpcy5jdXN0b21lckNvdXBvblNlcnZpY2UubG9hZEN1c3RvbWVyQ291cG9ucyhcbiAgICAgICAgdGhpcy5NQVhfQ1VTVE9NRVJfQ09VUE9OX1BBR0VcbiAgICAgICk7XG4gICAgICB0aGlzLmNhcnRWb3VjaGVyU2VydmljZS5yZXNldEFkZFZvdWNoZXJQcm9jZXNzaW5nU3RhdGUoKTtcbiAgICB9XG4gIH1cblxuICBvblN1Y2Nlc3Moc3VjY2VzczogYm9vbGVhbikge1xuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICB0aGlzLmNvdXBvbkZvcm0ucmVzZXQoKTtcbiAgICAgIHRoaXMuY2FydFZvdWNoZXJTZXJ2aWNlLnJlc2V0QWRkVm91Y2hlclByb2Nlc3NpbmdTdGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRBcHBsaWNhYmxlQ3VzdG9tZXJDb3Vwb25zKFxuICAgIGNhcnQ6IENhcnQsXG4gICAgY291cG9uczogQ3VzdG9tZXJDb3Vwb25bXVxuICApOiB2b2lkIHtcbiAgICB0aGlzLmFwcGxpY2FibGVDb3Vwb25zID0gY291cG9ucyB8fCBbXTtcbiAgICBpZiAoY2FydC5hcHBsaWVkVm91Y2hlcnMpIHtcbiAgICAgIGNhcnQuYXBwbGllZFZvdWNoZXJzLmZvckVhY2goKGFwcGxpZWRWb3VjaGVyKSA9PiB7XG4gICAgICAgIHRoaXMuYXBwbGljYWJsZUNvdXBvbnMgPSB0aGlzLmFwcGxpY2FibGVDb3Vwb25zLmZpbHRlcihcbiAgICAgICAgICAoY291cG9uKSA9PiBjb3Vwb24uY291cG9uSWQgIT09IGFwcGxpZWRWb3VjaGVyLmNvZGVcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFwcGx5Vm91Y2hlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb3Vwb25Gb3JtLnZhbGlkKSB7XG4gICAgICB0aGlzLmNhcnRWb3VjaGVyU2VydmljZS5hZGRWb3VjaGVyKFxuICAgICAgICB0aGlzLmNvdXBvbkZvcm0udmFsdWUuY291cG9uQ29kZSxcbiAgICAgICAgdGhpcy5jYXJ0SWRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY291cG9uRm9ybS5tYXJrQWxsQXNUb3VjaGVkKCk7XG4gICAgfVxuICB9XG5cbiAgYXBwbHlDdXN0b21lckNvdXBvbihjb3Vwb25JZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jYXJ0Vm91Y2hlclNlcnZpY2UuYWRkVm91Y2hlcihjb3Vwb25JZCwgdGhpcy5jYXJ0SWQpO1xuICAgIHRoaXMuY291cG9uQm94SXNBY3RpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGNsb3NlKGV2ZW50OiBVSUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlnbm9yZUNsb3NlRXZlbnQpIHtcbiAgICAgIHRoaXMuY291cG9uQm94SXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIGlmIChldmVudCAmJiBldmVudC50YXJnZXQpIHtcbiAgICAgICAgKDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpLmJsdXIoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5pZ25vcmVDbG9zZUV2ZW50ID0gZmFsc2U7XG4gIH1cblxuICBkaXNhYmxlQ2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5pZ25vcmVDbG9zZUV2ZW50ID0gdHJ1ZTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgdGhpcy5jYXJ0Vm91Y2hlclNlcnZpY2UucmVzZXRBZGRWb3VjaGVyUHJvY2Vzc2luZ1N0YXRlKCk7XG4gIH1cbn1cbiJdfQ==