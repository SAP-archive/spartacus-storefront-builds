import { OnInit } from '@angular/core';
import { ActiveCartService, Cart } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CheckoutStep } from '../../../model/checkout-step.model';
import { CheckoutStepService } from '../../../services/checkout-step.service';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutProgressMobileTopComponent implements OnInit {
    protected activeCartService: ActiveCartService;
    protected checkoutStepService: CheckoutStepService;
    private _steps$;
    constructor(activeCartService: ActiveCartService, checkoutStepService: CheckoutStepService);
    cart$: Observable<Cart>;
    activeStepIndex: number;
    activeStepIndex$: Observable<number>;
    get steps$(): Observable<CheckoutStep[]>;
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutProgressMobileTopComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CheckoutProgressMobileTopComponent, "cx-checkout-progress-mobile-top", never, {}, {}, never, never>;
}

//# sourceMappingURL=checkout-progress-mobile-top.component.d.ts.map