import { ActiveCartService, Address, CheckoutDeliveryService, CheckoutPaymentService, CheckoutService, PaymentDetails } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class CheckoutDetailsService {
    protected checkoutService: CheckoutService;
    protected checkoutDeliveryService: CheckoutDeliveryService;
    protected checkoutPaymentService: CheckoutPaymentService;
    protected activeCartService: ActiveCartService;
    cartId$: Observable<string>;
    getCheckoutDetailsLoaded$: Observable<boolean>;
    constructor(checkoutService: CheckoutService, checkoutDeliveryService: CheckoutDeliveryService, checkoutPaymentService: CheckoutPaymentService, activeCartService: ActiveCartService);
    getDeliveryAddress(): Observable<Address>;
    getSelectedDeliveryModeCode(): Observable<string>;
    getPaymentDetails(): Observable<PaymentDetails>;
}
