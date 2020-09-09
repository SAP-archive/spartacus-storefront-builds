import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActiveCartService, Cart, CartVoucherService, CustomerCoupon, CustomerCouponService } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class CartCouponComponent implements OnInit, OnDestroy {
    protected cartVoucherService: CartVoucherService;
    protected formBuilder: FormBuilder;
    protected customerCouponService: CustomerCouponService;
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
    constructor(cartVoucherService: CartVoucherService, formBuilder: FormBuilder, customerCouponService: CustomerCouponService, activeCartService: ActiveCartService);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24uY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNhcnQtY291cG9uLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWN0aXZlQ2FydFNlcnZpY2UsIENhcnQsIENhcnRWb3VjaGVyU2VydmljZSwgQ3VzdG9tZXJDb3Vwb24sIEN1c3RvbWVyQ291cG9uU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDYXJ0Q291cG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByb3RlY3RlZCBjYXJ0Vm91Y2hlclNlcnZpY2U6IENhcnRWb3VjaGVyU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyO1xuICAgIHByb3RlY3RlZCBjdXN0b21lckNvdXBvblNlcnZpY2U6IEN1c3RvbWVyQ291cG9uU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlO1xuICAgIE1BWF9DVVNUT01FUl9DT1VQT05fUEFHRTogbnVtYmVyO1xuICAgIGNvdXBvbkZvcm06IEZvcm1Hcm91cDtcbiAgICBjYXJ0SXNMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBjYXJ0JDogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgICBjYXJ0SWQ6IHN0cmluZztcbiAgICBhcHBsaWNhYmxlQ291cG9uczogQ3VzdG9tZXJDb3Vwb25bXTtcbiAgICBwcml2YXRlIGlnbm9yZUNsb3NlRXZlbnQ7XG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb247XG4gICAgY291cG9uQm94SXNBY3RpdmU6IGJvb2xlYW47XG4gICAgY29uc3RydWN0b3IoY2FydFZvdWNoZXJTZXJ2aWNlOiBDYXJ0Vm91Y2hlclNlcnZpY2UsIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgY3VzdG9tZXJDb3Vwb25TZXJ2aWNlOiBDdXN0b21lckNvdXBvblNlcnZpY2UsIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBwcm90ZWN0ZWQgb25FcnJvcihlcnJvcjogYm9vbGVhbik6IHZvaWQ7XG4gICAgb25TdWNjZXNzKHN1Y2Nlc3M6IGJvb2xlYW4pOiB2b2lkO1xuICAgIHByb3RlY3RlZCBnZXRBcHBsaWNhYmxlQ3VzdG9tZXJDb3Vwb25zKGNhcnQ6IENhcnQsIGNvdXBvbnM6IEN1c3RvbWVyQ291cG9uW10pOiB2b2lkO1xuICAgIGFwcGx5Vm91Y2hlcigpOiB2b2lkO1xuICAgIGFwcGx5Q3VzdG9tZXJDb3Vwb24oY291cG9uSWQ6IHN0cmluZyk6IHZvaWQ7XG4gICAgY2xvc2UoZXZlbnQ6IFVJRXZlbnQpOiB2b2lkO1xuICAgIGRpc2FibGVDbG9zZSgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=