import { Observable } from 'rxjs';
import { Address, PaymentDetails, CheckoutService, CartService, AuthService } from '@spartacus/core';
export declare class CheckoutDetailsService {
    private authService;
    private checkoutService;
    private cartService;
    userId$: Observable<string>;
    cartId$: Observable<string>;
    getCheckoutDetailsLoaded$: Observable<boolean>;
    constructor(authService: AuthService, checkoutService: CheckoutService, cartService: CartService);
    getDeliveryAddress(): Observable<Address>;
    getSelectedDeliveryModeCode(): Observable<string>;
    getPaymentDetails(): Observable<PaymentDetails>;
}
