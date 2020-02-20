import { Address, CartService, CheckoutDeliveryService, CheckoutPaymentService, CheckoutService, PaymentDetails } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutDetailsService>;
}

//# sourceMappingURL=checkout-details.service.d.ts.map