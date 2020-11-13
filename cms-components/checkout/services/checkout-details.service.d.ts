import { ActiveCartService, Address, CheckoutDeliveryService, CheckoutPaymentService, CheckoutService, PaymentDetails } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutDetailsService, never>;
}

//# sourceMappingURL=checkout-details.service.d.ts.map