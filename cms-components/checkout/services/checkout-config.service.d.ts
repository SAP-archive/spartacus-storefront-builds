import { ActivatedRoute } from '@angular/router';
import { DeliveryMode, RoutingConfigService } from '@spartacus/core';
import { CheckoutConfig } from '../config/checkout-config';
import { CheckoutStep, CheckoutStepType } from '../model/checkout-step.model';
export declare class CheckoutConfigService {
    private checkoutConfig;
    private routingConfigService;
    steps: CheckoutStep[];
    private express;
    private guest;
    private defaultDeliveryMode;
    constructor(checkoutConfig: CheckoutConfig, routingConfigService: RoutingConfigService);
    getCheckoutStep(currentStepType: CheckoutStepType): CheckoutStep;
    getCheckoutStepRoute(currentStepType: CheckoutStepType): string;
    getFirstCheckoutStepRoute(): string;
    getNextCheckoutStepUrl(activatedRoute: ActivatedRoute): string;
    getPreviousCheckoutStepUrl(activatedRoute: ActivatedRoute): string;
    getCurrentStepIndex(activatedRoute: ActivatedRoute): number | null;
    protected compareDeliveryCost(deliveryMode1: DeliveryMode, deliveryMode2: DeliveryMode): number;
    protected findMatchingDeliveryMode(deliveryModes: DeliveryMode[], index?: number): string;
    getPreferredDeliveryMode(deliveryModes: DeliveryMode[]): string;
    isExpressCheckout(): boolean;
    isGuestCheckout(): boolean;
    private getStepUrlFromActivatedRoute;
    private getStepUrlFromStepRoute;
    private getCheckoutStepIndex;
}
