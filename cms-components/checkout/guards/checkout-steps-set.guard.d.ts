import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CheckoutCostCenterService, PaymentTypeService, RoutingConfigService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CheckoutStep } from '../model/checkout-step.model';
import { CheckoutDetailsService } from '../services/checkout-details.service';
import { CheckoutStepService } from '../services/checkout-step.service';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutStepsSetGuard implements CanActivate {
    protected paymentTypeService: PaymentTypeService;
    protected checkoutStepService: CheckoutStepService;
    protected checkoutDetailsService: CheckoutDetailsService;
    protected routingConfigService: RoutingConfigService;
    protected checkoutCostCenterService: CheckoutCostCenterService;
    protected router: Router;
    constructor(paymentTypeService: PaymentTypeService, checkoutStepService: CheckoutStepService, checkoutDetailsService: CheckoutDetailsService, routingConfigService: RoutingConfigService, checkoutCostCenterService: CheckoutCostCenterService, router: Router);
    canActivate(route: ActivatedRouteSnapshot, _: RouterStateSnapshot): Observable<boolean | UrlTree>;
    protected isStepSet(step: CheckoutStep, isAccountPayment: any): Observable<boolean | UrlTree>;
    protected isPaymentTypeSet(step: CheckoutStep): Observable<boolean | UrlTree>;
    protected isShippingAddressAndCostCenterSet(step: CheckoutStep, isAccountPayment: boolean): Observable<boolean | UrlTree>;
    protected isDeliveryModeSet(step: CheckoutStep): Observable<boolean | UrlTree>;
    protected isPaymentDetailsSet(step: CheckoutStep): Observable<boolean | UrlTree>;
    private getUrl;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutStepsSetGuard, never>;
}

//# sourceMappingURL=checkout-steps-set.guard.d.ts.map