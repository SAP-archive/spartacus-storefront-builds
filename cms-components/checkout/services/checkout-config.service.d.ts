import { DeliveryMode } from '@spartacus/core';
import { CheckoutConfig } from '../config/checkout-config';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutConfigService {
    private checkoutConfig;
    private express;
    private guest;
    private defaultDeliveryMode;
    constructor(checkoutConfig: CheckoutConfig);
    protected compareDeliveryCost(deliveryMode1: DeliveryMode, deliveryMode2: DeliveryMode): number;
    protected findMatchingDeliveryMode(deliveryModes: DeliveryMode[], index?: number): string;
    getPreferredDeliveryMode(deliveryModes: DeliveryMode[]): string;
    isExpressCheckout(): boolean;
    isGuestCheckout(): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutConfigService, never>;
}

//# sourceMappingURL=checkout-config.service.d.ts.map