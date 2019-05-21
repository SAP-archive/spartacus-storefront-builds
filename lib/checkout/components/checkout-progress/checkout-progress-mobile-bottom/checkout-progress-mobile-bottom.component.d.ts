import { OnInit } from '@angular/core';
import { RoutingService, RoutingConfigService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CheckoutConfig } from '../../../config/checkout-config';
import { CheckoutStep } from '../../../model/checkout-step.model';
export declare class CheckoutProgressMobileBottomComponent implements OnInit {
    protected config: CheckoutConfig;
    protected routingService: RoutingService;
    protected routingConfigService: RoutingConfigService;
    constructor(config: CheckoutConfig, routingService: RoutingService, routingConfigService: RoutingConfigService);
    steps: Array<CheckoutStep>;
    routerState$: Observable<any>;
    activeStepIndex: number;
    activeStepUrl: string;
    ngOnInit(): void;
}
