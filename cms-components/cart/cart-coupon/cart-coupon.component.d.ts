import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cart, CartService, CartVoucherService, AuthService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class CartCouponComponent implements OnInit, OnDestroy {
    private cartService;
    private authService;
    private cartVoucherService;
    private formBuilder;
    form: FormGroup;
    cartIsLoading$: Observable<boolean>;
    submitDisabled$: Observable<boolean>;
    cart$: Observable<Cart>;
    cartId: string;
    private subscription;
    constructor(cartService: CartService, authService: AuthService, cartVoucherService: CartVoucherService, formBuilder: FormBuilder);
    ngOnInit(): void;
    onSuccess(success: boolean): void;
    applyVoucher(): void;
    ngOnDestroy(): void;
}
