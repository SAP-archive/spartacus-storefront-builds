import { Address, CartService, CheckoutDeliveryService, CheckoutPaymentService, CheckoutService, PaymentDetails } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class CheckoutDetailsService {
    private checkoutService;
    private checkoutDeliveryService;
    private checkoutPaymentService;
    private cartService;
    cartId$: Observable<string>;
    getCheckoutDetailsLoaded$: Observable<boolean>;
    constructor(checkoutService: CheckoutService, checkoutDeliveryService: CheckoutDeliveryService, checkoutPaymentService: CheckoutPaymentService, cartService: CartService);
    getDeliveryAddress(): Observable<Address>;
    getSelectedDeliveryModeCode(): Observable<string>;
    getPaymentDetails(): Observable<PaymentDetails>;
}
