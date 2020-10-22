import { ActivatedRoute } from '@angular/router';
import { RoutingConfigService, RoutingService } from '@spartacus/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CheckoutConfig } from '../config/checkout-config';
import { CheckoutStep, CheckoutStepType } from '../model/checkout-step.model';
export declare class CheckoutStepService {
    protected routingService: RoutingService;
    protected checkoutConfig: CheckoutConfig;
    protected routingConfigService: RoutingConfigService;
    allSteps: CheckoutStep[];
    readonly steps$: BehaviorSubject<CheckoutStep[]>;
    readonly activeStepIndex$: Observable<number>;
    constructor(routingService: RoutingService, checkoutConfig: CheckoutConfig, routingConfigService: RoutingConfigService);
    back(activatedRoute: ActivatedRoute): void;
    next(activatedRoute: ActivatedRoute): void;
    goToStepWithIndex(stepIndex: number): void;
    getBackBntText(activatedRoute: ActivatedRoute): string;
    resetSteps(): void;
    disableEnableStep(currentStepType: CheckoutStepType, disabled: boolean): void;
    getCheckoutStep(currentStepType: CheckoutStepType): CheckoutStep;
    getCheckoutStepRoute(currentStepType: CheckoutStepType): string;
    getFirstCheckoutStepRoute(): string;
    getNextCheckoutStepUrl(activatedRoute: ActivatedRoute): string;
    getPreviousCheckoutStepUrl(activatedRoute: ActivatedRoute): string;
    getCurrentStepIndex(activatedRoute: ActivatedRoute): number;
    private getStepUrlFromActivatedRoute;
    private getStepUrlFromStepRoute;
    private getCheckoutStepIndex;
}
