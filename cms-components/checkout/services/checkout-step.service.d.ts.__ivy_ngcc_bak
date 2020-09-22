import { ActivatedRoute } from '@angular/router';
import { RoutingConfigService, RoutingService } from '@spartacus/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CheckoutStep, CheckoutStepType } from '../model/checkout-step.model';
import { CheckoutConfigService } from './checkout-config.service';
export declare class CheckoutStepService {
    protected routingService: RoutingService;
    protected checkoutConfigService: CheckoutConfigService;
    protected routingConfigService: RoutingConfigService;
    allSteps: CheckoutStep[];
    readonly steps$: BehaviorSubject<CheckoutStep[]>;
    readonly activeStepIndex$: Observable<number>;
    constructor(routingService: RoutingService, checkoutConfigService: CheckoutConfigService, routingConfigService: RoutingConfigService);
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
