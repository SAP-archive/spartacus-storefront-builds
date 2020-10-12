import { Observable } from 'rxjs';
import { CheckoutStep } from '../../model/checkout-step.model';
import { CheckoutStepService } from '../../services/checkout-step.service';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutProgressComponent {
    protected checkoutStepService: CheckoutStepService;
    private _steps$;
    constructor(checkoutStepService: CheckoutStepService);
    activeStepIndex: number;
    activeStepIndex$: Observable<number>;
    get steps$(): Observable<CheckoutStep[]>;
    getTabIndex(stepIndex: number): number;
    isActive(index: number): boolean;
    isDisabled(index: number): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutProgressComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CheckoutProgressComponent, "cx-checkout-progress", never, {}, {}, never, never>;
}

//# sourceMappingURL=checkout-progress.component.d.ts.map