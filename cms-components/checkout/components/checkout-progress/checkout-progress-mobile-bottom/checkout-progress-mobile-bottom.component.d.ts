import { Observable } from 'rxjs';
import { CheckoutStep } from '../../../model/checkout-step.model';
import { CheckoutStepService } from '../../../services/checkout-step.service';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutProgressMobileBottomComponent {
    protected checkoutStepService: CheckoutStepService;
    private _steps$;
    constructor(checkoutStepService: CheckoutStepService);
    activeStepIndex: number;
    activeStepIndex$: Observable<number>;
    get steps$(): Observable<CheckoutStep[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutProgressMobileBottomComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CheckoutProgressMobileBottomComponent, "cx-checkout-progress-mobile-bottom", never, {}, {}, never, never>;
}

//# sourceMappingURL=checkout-progress-mobile-bottom.component.d.ts.map