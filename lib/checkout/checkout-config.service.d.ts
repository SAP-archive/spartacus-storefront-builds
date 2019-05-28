import { CheckoutConfig } from './config/checkout-config';
import { ActivatedRoute } from '@angular/router';
import { CheckoutStep, CheckoutStepType } from './model/checkout-step.model';
import { RoutingConfigService } from '@spartacus/core';
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
