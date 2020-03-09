import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService, Cart, CartService, CartVoucherService, CustomerCoupon, CustomerCouponService, FeatureConfigService } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class CartCouponComponent implements OnInit, OnDestroy {
    private cartService;
    private authService;
    private cartVoucherService;
    private formBuilder;
    protected customerCouponService?: CustomerCouponService;
    protected featureConfig?: FeatureConfigService;
    MAX_CUSTOMER_COUPON_PAGE: number;
    form: FormGroup;
    cartIsLoading$: Observable<boolean>;
    cart$: Observable<Cart>;
    cartId: string;
    applicableCoupons: CustomerCoupon[];
    private ignoreCloseEvent;
    private subscription;
    couponBoxIsActive: boolean;
    constructor(cartService: CartService, authService: AuthService, cartVoucherService: CartVoucherService, formBuilder: FormBuilder, customerCouponService: CustomerCouponService, featureConfig: FeatureConfigService);
    /**
     * @deprecated Since 1.5
     * Add customerCouponService,featureConfig for customer coupon feature.
     * Remove issue: #5971
     */
    constructor(cartService: CartService, authService: AuthService, cartVoucherService: CartVoucherService, formBuilder: FormBuilder);
    ngOnInit(): void;
    protected onError(error: boolean): void;
    onSuccess(success: boolean): void;
    protected getApplicableCustomerCoupons(cart: Cart, coupons: CustomerCoupon[]): void;
    applyVoucher(): void;
    applyCustomerCoupon(couponId: string): void;
    close(event: UIEvent): void;
    disableClose(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartCouponComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CartCouponComponent, "cx-cart-coupon", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24uY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNhcnQtY291cG9uLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UsIENhcnQsIENhcnRTZXJ2aWNlLCBDYXJ0Vm91Y2hlclNlcnZpY2UsIEN1c3RvbWVyQ291cG9uLCBDdXN0b21lckNvdXBvblNlcnZpY2UsIEZlYXR1cmVDb25maWdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENhcnRDb3Vwb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBjYXJ0U2VydmljZTtcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlO1xuICAgIHByaXZhdGUgY2FydFZvdWNoZXJTZXJ2aWNlO1xuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI7XG4gICAgcHJvdGVjdGVkIGN1c3RvbWVyQ291cG9uU2VydmljZT86IEN1c3RvbWVyQ291cG9uU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgZmVhdHVyZUNvbmZpZz86IEZlYXR1cmVDb25maWdTZXJ2aWNlO1xuICAgIE1BWF9DVVNUT01FUl9DT1VQT05fUEFHRTogbnVtYmVyO1xuICAgIGZvcm06IEZvcm1Hcm91cDtcbiAgICBjYXJ0SXNMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBjYXJ0JDogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgICBjYXJ0SWQ6IHN0cmluZztcbiAgICBhcHBsaWNhYmxlQ291cG9uczogQ3VzdG9tZXJDb3Vwb25bXTtcbiAgICBwcml2YXRlIGlnbm9yZUNsb3NlRXZlbnQ7XG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb247XG4gICAgY291cG9uQm94SXNBY3RpdmU6IGJvb2xlYW47XG4gICAgY29uc3RydWN0b3IoY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIGNhcnRWb3VjaGVyU2VydmljZTogQ2FydFZvdWNoZXJTZXJ2aWNlLCBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIGN1c3RvbWVyQ291cG9uU2VydmljZTogQ3VzdG9tZXJDb3Vwb25TZXJ2aWNlLCBmZWF0dXJlQ29uZmlnOiBGZWF0dXJlQ29uZmlnU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS41XG4gICAgICogQWRkIGN1c3RvbWVyQ291cG9uU2VydmljZSxmZWF0dXJlQ29uZmlnIGZvciBjdXN0b21lciBjb3Vwb24gZmVhdHVyZS5cbiAgICAgKiBSZW1vdmUgaXNzdWU6ICM1OTcxXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIGNhcnRWb3VjaGVyU2VydmljZTogQ2FydFZvdWNoZXJTZXJ2aWNlLCBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIG9uRXJyb3IoZXJyb3I6IGJvb2xlYW4pOiB2b2lkO1xuICAgIG9uU3VjY2VzcyhzdWNjZXNzOiBib29sZWFuKTogdm9pZDtcbiAgICBwcm90ZWN0ZWQgZ2V0QXBwbGljYWJsZUN1c3RvbWVyQ291cG9ucyhjYXJ0OiBDYXJ0LCBjb3Vwb25zOiBDdXN0b21lckNvdXBvbltdKTogdm9pZDtcbiAgICBhcHBseVZvdWNoZXIoKTogdm9pZDtcbiAgICBhcHBseUN1c3RvbWVyQ291cG9uKGNvdXBvbklkOiBzdHJpbmcpOiB2b2lkO1xuICAgIGNsb3NlKGV2ZW50OiBVSUV2ZW50KTogdm9pZDtcbiAgICBkaXNhYmxlQ2xvc2UoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19