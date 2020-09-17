import { ActivatedRoute } from '@angular/router';
import { DeliveryMode, RoutingConfigService } from '@spartacus/core';
import { CheckoutConfig } from '../config/checkout-config';
import { CheckoutStep, CheckoutStepType } from '../model/checkout-step.model';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutConfigService {
    private checkoutConfig;
    private routingConfigService;
    steps: CheckoutStep[];
    private express;
    private guest;
    private defaultDeliveryMode;
    constructor(checkoutConfig: CheckoutConfig, routingConfigService: RoutingConfigService);
    /**
     * will be removed, there is same function in checkout-step.service
     */
    getCheckoutStep(currentStepType: CheckoutStepType): CheckoutStep;
    /**
     * will be removed, there is same function in checkout-step.service
     */
    getCheckoutStepRoute(currentStepType: CheckoutStepType): string;
    /**
     * will be removed, there is same function in checkout-step.service
     */
    getFirstCheckoutStepRoute(): string;
    /**
     * will be removed, there is same function in checkout-step.service
     */
    getNextCheckoutStepUrl(activatedRoute: ActivatedRoute): string;
    /**
     * will be removed, there is same function in checkout-step.service
     */
    getPreviousCheckoutStepUrl(activatedRoute: ActivatedRoute): string;
    /**
     * will be removed, there is same function in checkout-step.service
     */
    getCurrentStepIndex(activatedRoute: ActivatedRoute): number | null;
    protected compareDeliveryCost(deliveryMode1: DeliveryMode, deliveryMode2: DeliveryMode): number;
    protected findMatchingDeliveryMode(deliveryModes: DeliveryMode[], index?: number): string;
    getPreferredDeliveryMode(deliveryModes: DeliveryMode[]): string;
    isExpressCheckout(): boolean;
    isGuestCheckout(): boolean;
    /**
     * will be removed, there is same function in checkout-step.service
     */
    private getStepUrlFromActivatedRoute;
    /**
     * will be removed, there is same function in checkout-step.service
     */
    private getStepUrlFromStepRoute;
    /**
     * will be removed, there is same function in checkout-step.service
     */
    private getCheckoutStepIndex;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutConfigService, never>;
}

//# sourceMappingURL=checkout-config.service.d.ts.map