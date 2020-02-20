import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { CheckoutDetailsService } from '../services/checkout-details.service';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutDetailsLoadedGuard implements CanActivate {
    private checkoutDetailsService;
    constructor(checkoutDetailsService: CheckoutDetailsService);
    canActivate(): Observable<boolean>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutDetailsLoadedGuard>;
}

//# sourceMappingURL=checkout-details-loaded.guard.d.ts.map