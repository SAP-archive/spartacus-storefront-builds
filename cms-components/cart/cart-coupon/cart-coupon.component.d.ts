import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActiveCartService, Cart, CartVoucherService, CustomerCoupon, CustomerCouponService } from '@spartacus/core';
import { Observable } from 'rxjs';
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
}
