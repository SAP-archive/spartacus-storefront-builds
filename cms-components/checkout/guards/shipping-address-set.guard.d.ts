import { CanActivate, Router, UrlTree } from '@angular/router';
import { RoutingConfigService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CheckoutStepService } from '../services/checkout-step.service';
import { CheckoutDetailsService } from '../services/checkout-details.service';
import * as ɵngcc0 from '@angular/core';
export declare class ShippingAddressSetGuard implements CanActivate {
    private checkoutDetailsService;
    private checkoutStepService;
    private routingConfigService;
    private router;
    constructor(checkoutDetailsService: CheckoutDetailsService, checkoutStepService: CheckoutStepService, routingConfigService: RoutingConfigService, router: Router);
    canActivate(): Observable<boolean | UrlTree>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ShippingAddressSetGuard, never>;
}

//# sourceMappingURL=shipping-address-set.guard.d.ts.map