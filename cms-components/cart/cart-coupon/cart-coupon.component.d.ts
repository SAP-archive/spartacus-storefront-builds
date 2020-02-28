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
    submitDisabled$: Observable<boolean>;
    cart$: Observable<Cart>;
    cartId: string;
    applicableCoupons: CustomerCoupon[];
    filteredCoupons: CustomerCoupon[];
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
    filter(query: string): void;
    open(): void;
    close(event: UIEvent): void;
    disableClose(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartCouponComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CartCouponComponent, "cx-cart-coupon", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24uY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNhcnQtY291cG9uLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9DQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlLCBDYXJ0LCBDYXJ0U2VydmljZSwgQ2FydFZvdWNoZXJTZXJ2aWNlLCBDdXN0b21lckNvdXBvbiwgQ3VzdG9tZXJDb3Vwb25TZXJ2aWNlLCBGZWF0dXJlQ29uZmlnU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDYXJ0Q291cG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgY2FydFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTtcbiAgICBwcml2YXRlIGNhcnRWb3VjaGVyU2VydmljZTtcbiAgICBwcml2YXRlIGZvcm1CdWlsZGVyO1xuICAgIHByb3RlY3RlZCBjdXN0b21lckNvdXBvblNlcnZpY2U/OiBDdXN0b21lckNvdXBvblNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGZlYXR1cmVDb25maWc/OiBGZWF0dXJlQ29uZmlnU2VydmljZTtcbiAgICBNQVhfQ1VTVE9NRVJfQ09VUE9OX1BBR0U6IG51bWJlcjtcbiAgICBmb3JtOiBGb3JtR3JvdXA7XG4gICAgY2FydElzTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgc3VibWl0RGlzYWJsZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIGNhcnQkOiBPYnNlcnZhYmxlPENhcnQ+O1xuICAgIGNhcnRJZDogc3RyaW5nO1xuICAgIGFwcGxpY2FibGVDb3Vwb25zOiBDdXN0b21lckNvdXBvbltdO1xuICAgIGZpbHRlcmVkQ291cG9uczogQ3VzdG9tZXJDb3Vwb25bXTtcbiAgICBwcml2YXRlIGlnbm9yZUNsb3NlRXZlbnQ7XG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb247XG4gICAgY291cG9uQm94SXNBY3RpdmU6IGJvb2xlYW47XG4gICAgY29uc3RydWN0b3IoY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIGNhcnRWb3VjaGVyU2VydmljZTogQ2FydFZvdWNoZXJTZXJ2aWNlLCBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIGN1c3RvbWVyQ291cG9uU2VydmljZTogQ3VzdG9tZXJDb3Vwb25TZXJ2aWNlLCBmZWF0dXJlQ29uZmlnOiBGZWF0dXJlQ29uZmlnU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS41XG4gICAgICogQWRkIGN1c3RvbWVyQ291cG9uU2VydmljZSxmZWF0dXJlQ29uZmlnIGZvciBjdXN0b21lciBjb3Vwb24gZmVhdHVyZS5cbiAgICAgKiBSZW1vdmUgaXNzdWU6ICM1OTcxXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIGNhcnRWb3VjaGVyU2VydmljZTogQ2FydFZvdWNoZXJTZXJ2aWNlLCBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIG9uRXJyb3IoZXJyb3I6IGJvb2xlYW4pOiB2b2lkO1xuICAgIG9uU3VjY2VzcyhzdWNjZXNzOiBib29sZWFuKTogdm9pZDtcbiAgICBwcm90ZWN0ZWQgZ2V0QXBwbGljYWJsZUN1c3RvbWVyQ291cG9ucyhjYXJ0OiBDYXJ0LCBjb3Vwb25zOiBDdXN0b21lckNvdXBvbltdKTogdm9pZDtcbiAgICBhcHBseVZvdWNoZXIoKTogdm9pZDtcbiAgICBhcHBseUN1c3RvbWVyQ291cG9uKGNvdXBvbklkOiBzdHJpbmcpOiB2b2lkO1xuICAgIGZpbHRlcihxdWVyeTogc3RyaW5nKTogdm9pZDtcbiAgICBvcGVuKCk6IHZvaWQ7XG4gICAgY2xvc2UoZXZlbnQ6IFVJRXZlbnQpOiB2b2lkO1xuICAgIGRpc2FibGVDbG9zZSgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=