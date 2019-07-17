import { ActivatedRoute } from '@angular/router';
import { RoutingConfigService } from '@spartacus/core';
import { CheckoutConfig } from '../config/checkout-config';
import { CheckoutStep, CheckoutStepType } from '../model/checkout-step.model';
export declare class CheckoutConfigService {
    private checkoutConfig;
    private routingConfigService;
    steps: CheckoutStep[];
    constructor(checkoutConfig: CheckoutConfig, routingConfigService: RoutingConfigService);
    getCheckoutStep(currentStepType: CheckoutStepType): CheckoutStep;
    getNextCheckoutStepUrl(activatedRoute: ActivatedRoute): string;
    getPreviousCheckoutStepUrl(activatedRoute: ActivatedRoute): string;
    getCurrentStepIndex(activatedRoute: ActivatedRoute): number;
    private getStepUrlFromActivatedRoute;
    private getStepUrlFromStepRoute;
    private getCheckoutStepIndex;
}
