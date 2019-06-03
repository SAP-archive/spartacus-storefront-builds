import { Address, CartService, CheckoutService, PaymentDetails } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class CheckoutDetailsService {
    private checkoutService;
    private cartService;
    cartId$: Observable<string>;
    getCheckoutDetailsLoaded$: Observable<boolean>;
    constructor(checkoutService: CheckoutService, cartService: CartService);
    getDeliveryAddress(): Observable<Address>;
    getSelectedDeliveryModeCode(): Observable<string>;
    getPaymentDetails(): Observable<PaymentDetails>;
}
