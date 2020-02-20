import { Observable } from 'rxjs';
import { CheckoutDeliveryService, UserAddressService, UserPaymentService, CheckoutPaymentService } from '@spartacus/core';
import { CheckoutConfigService } from './checkout-config.service';
import { CheckoutDetailsService } from './checkout-details.service';
import * as ɵngcc0 from '@angular/core';
export declare class ExpressCheckoutService {
    protected userAddressService: UserAddressService;
    protected userPaymentService: UserPaymentService;
    protected checkoutDeliveryService: CheckoutDeliveryService;
    protected checkoutPaymentService: CheckoutPaymentService;
    protected checkoutDetailsService: CheckoutDetailsService;
    protected checkoutConfigService: CheckoutConfigService;
    private shippingAddressSet$;
    private deliveryModeSet$;
    private paymentMethodSet$;
    constructor(userAddressService: UserAddressService, userPaymentService: UserPaymentService, checkoutDeliveryService: CheckoutDeliveryService, checkoutPaymentService: CheckoutPaymentService, checkoutDetailsService: CheckoutDetailsService, checkoutConfigService: CheckoutConfigService);
    protected setShippingAddress(): void;
    protected setPaymentMethod(): void;
    protected setDeliveryMode(): void;
    protected resetCheckoutProcesses(): void;
    trySetDefaultCheckoutDetails(): Observable<boolean>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ExpressCheckoutService>;
}

//# sourceMappingURL=express-checkout.service.d.ts.map