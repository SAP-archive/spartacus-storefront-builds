import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActiveCartService, AuthService, Cart, CartVoucherService, CustomerCoupon, CustomerCouponService, FeatureConfigService } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class CartCouponComponent implements OnInit, OnDestroy {
    protected authService: AuthService;
    protected cartVoucherService: CartVoucherService;
    protected formBuilder: FormBuilder;
    protected customerCouponService: CustomerCouponService;
    protected featureConfig: FeatureConfigService;
    protected activeCartService: ActiveCartService;
    MAX_CUSTOMER_COUPON_PAGE: number;
    couponForm: FormGroup;
    cartIsLoading$: Observable<boolean>;
    cart$: Observable<Cart>;
    cartId: string;
    applicableCoupons: CustomerCoupon[];
    private ignoreCloseEvent;
    private subscription;
    couponBoxIsActive: boolean;
    constructor(authService: AuthService, cartVoucherService: CartVoucherService, formBuilder: FormBuilder, customerCouponService: CustomerCouponService, featureConfig: FeatureConfigService, activeCartService: ActiveCartService);
    ngOnInit(): void;
    protected onError(error: boolean): void;
    onSuccess(success: boolean): void;
    protected getApplicableCustomerCoupons(cart: Cart, coupons: CustomerCoupon[]): void;
    applyVoucher(): void;
    applyCustomerCoupon(couponId: string): void;
    close(event: UIEvent): void;
    disableClose(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartCouponComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CartCouponComponent, "cx-cart-coupon", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24uY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNhcnQtY291cG9uLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBY3RpdmVDYXJ0U2VydmljZSwgQXV0aFNlcnZpY2UsIENhcnQsIENhcnRWb3VjaGVyU2VydmljZSwgQ3VzdG9tZXJDb3Vwb24sIEN1c3RvbWVyQ291cG9uU2VydmljZSwgRmVhdHVyZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2FydENvdXBvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjYXJ0Vm91Y2hlclNlcnZpY2U6IENhcnRWb3VjaGVyU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyO1xuICAgIHByb3RlY3RlZCBjdXN0b21lckNvdXBvblNlcnZpY2U6IEN1c3RvbWVyQ291cG9uU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgZmVhdHVyZUNvbmZpZzogRmVhdHVyZUNvbmZpZ1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZTtcbiAgICBNQVhfQ1VTVE9NRVJfQ09VUE9OX1BBR0U6IG51bWJlcjtcbiAgICBjb3Vwb25Gb3JtOiBGb3JtR3JvdXA7XG4gICAgY2FydElzTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgY2FydCQ6IE9ic2VydmFibGU8Q2FydD47XG4gICAgY2FydElkOiBzdHJpbmc7XG4gICAgYXBwbGljYWJsZUNvdXBvbnM6IEN1c3RvbWVyQ291cG9uW107XG4gICAgcHJpdmF0ZSBpZ25vcmVDbG9zZUV2ZW50O1xuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uO1xuICAgIGNvdXBvbkJveElzQWN0aXZlOiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgY2FydFZvdWNoZXJTZXJ2aWNlOiBDYXJ0Vm91Y2hlclNlcnZpY2UsIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgY3VzdG9tZXJDb3Vwb25TZXJ2aWNlOiBDdXN0b21lckNvdXBvblNlcnZpY2UsIGZlYXR1cmVDb25maWc6IEZlYXR1cmVDb25maWdTZXJ2aWNlLCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIG9uRXJyb3IoZXJyb3I6IGJvb2xlYW4pOiB2b2lkO1xuICAgIG9uU3VjY2VzcyhzdWNjZXNzOiBib29sZWFuKTogdm9pZDtcbiAgICBwcm90ZWN0ZWQgZ2V0QXBwbGljYWJsZUN1c3RvbWVyQ291cG9ucyhjYXJ0OiBDYXJ0LCBjb3Vwb25zOiBDdXN0b21lckNvdXBvbltdKTogdm9pZDtcbiAgICBhcHBseVZvdWNoZXIoKTogdm9pZDtcbiAgICBhcHBseUN1c3RvbWVyQ291cG9uKGNvdXBvbklkOiBzdHJpbmcpOiB2b2lkO1xuICAgIGNsb3NlKGV2ZW50OiBVSUV2ZW50KTogdm9pZDtcbiAgICBkaXNhYmxlQ2xvc2UoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19