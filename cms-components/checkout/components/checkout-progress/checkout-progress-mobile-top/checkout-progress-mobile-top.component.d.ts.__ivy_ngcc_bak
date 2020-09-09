import { OnInit } from '@angular/core';
import { ActiveCartService, Cart, RoutingConfigService, RoutingService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CheckoutConfig } from '../../../config/checkout-config';
import { CheckoutStep } from '../../../model/checkout-step.model';
export declare class CheckoutProgressMobileTopComponent implements OnInit {
    protected config: CheckoutConfig;
    protected routingService: RoutingService;
    protected routingConfigService: RoutingConfigService;
    protected activeCartService: ActiveCartService;
    constructor(config: CheckoutConfig, routingService: RoutingService, routingConfigService: RoutingConfigService, activeCartService: ActiveCartService);
    steps: Array<CheckoutStep>;
    routerState$: Observable<any>;
    cart$: Observable<Cart>;
    activeStepIndex: number;
    activeStepUrl: string;
    ngOnInit(): void;
}
