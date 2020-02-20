import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RoutingService, CartService, Cart, RoutingConfigService } from '@spartacus/core';
import { CheckoutConfig } from '../../../config/checkout-config';
import { CheckoutStep } from '../../../model/checkout-step.model';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutProgressMobileTopComponent implements OnInit {
    protected config: CheckoutConfig;
    protected routingService: RoutingService;
    protected cartService: CartService;
    protected routingConfigService: RoutingConfigService;
    constructor(config: CheckoutConfig, routingService: RoutingService, cartService: CartService, routingConfigService: RoutingConfigService);
    steps: Array<CheckoutStep>;
    routerState$: Observable<any>;
    cart$: Observable<Cart>;
    activeStepIndex: number;
    activeStepUrl: string;
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutProgressMobileTopComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CheckoutProgressMobileTopComponent, "cx-checkout-progress-mobile-top", never, {}, {}, never>;
}

//# sourceMappingURL=checkout-progress-mobile-top.component.d.ts.map