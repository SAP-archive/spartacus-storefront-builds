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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24uY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNhcnQtY291cG9uLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSwgQ2FydCwgQ2FydFNlcnZpY2UsIENhcnRWb3VjaGVyU2VydmljZSwgQ3VzdG9tZXJDb3Vwb24sIEN1c3RvbWVyQ291cG9uU2VydmljZSwgRmVhdHVyZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2FydENvdXBvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIGNhcnRTZXJ2aWNlO1xuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBjYXJ0Vm91Y2hlclNlcnZpY2U7XG4gICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjtcbiAgICBwcm90ZWN0ZWQgY3VzdG9tZXJDb3Vwb25TZXJ2aWNlPzogQ3VzdG9tZXJDb3Vwb25TZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBmZWF0dXJlQ29uZmlnPzogRmVhdHVyZUNvbmZpZ1NlcnZpY2U7XG4gICAgTUFYX0NVU1RPTUVSX0NPVVBPTl9QQUdFOiBudW1iZXI7XG4gICAgZm9ybTogRm9ybUdyb3VwO1xuICAgIGNhcnRJc0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIGNhcnQkOiBPYnNlcnZhYmxlPENhcnQ+O1xuICAgIGNhcnRJZDogc3RyaW5nO1xuICAgIGFwcGxpY2FibGVDb3Vwb25zOiBDdXN0b21lckNvdXBvbltdO1xuICAgIHByaXZhdGUgaWdub3JlQ2xvc2VFdmVudDtcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbjtcbiAgICBjb3Vwb25Cb3hJc0FjdGl2ZTogYm9vbGVhbjtcbiAgICBjb25zdHJ1Y3RvcihjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgY2FydFZvdWNoZXJTZXJ2aWNlOiBDYXJ0Vm91Y2hlclNlcnZpY2UsIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgY3VzdG9tZXJDb3Vwb25TZXJ2aWNlOiBDdXN0b21lckNvdXBvblNlcnZpY2UsIGZlYXR1cmVDb25maWc6IEZlYXR1cmVDb25maWdTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxLjVcbiAgICAgKiBBZGQgY3VzdG9tZXJDb3Vwb25TZXJ2aWNlLGZlYXR1cmVDb25maWcgZm9yIGN1c3RvbWVyIGNvdXBvbiBmZWF0dXJlLlxuICAgICAqIFJlbW92ZSBpc3N1ZTogIzU5NzFcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgY2FydFZvdWNoZXJTZXJ2aWNlOiBDYXJ0Vm91Y2hlclNlcnZpY2UsIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcik7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBwcm90ZWN0ZWQgb25FcnJvcihlcnJvcjogYm9vbGVhbik6IHZvaWQ7XG4gICAgb25TdWNjZXNzKHN1Y2Nlc3M6IGJvb2xlYW4pOiB2b2lkO1xuICAgIHByb3RlY3RlZCBnZXRBcHBsaWNhYmxlQ3VzdG9tZXJDb3Vwb25zKGNhcnQ6IENhcnQsIGNvdXBvbnM6IEN1c3RvbWVyQ291cG9uW10pOiB2b2lkO1xuICAgIGFwcGx5Vm91Y2hlcigpOiB2b2lkO1xuICAgIGFwcGx5Q3VzdG9tZXJDb3Vwb24oY291cG9uSWQ6IHN0cmluZyk6IHZvaWQ7XG4gICAgY2xvc2UoZXZlbnQ6IFVJRXZlbnQpOiB2b2lkO1xuICAgIGRpc2FibGVDbG9zZSgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=