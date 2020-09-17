import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CheckoutStep } from '../../../model/checkout-step.model';
import { CheckoutStepService } from '../../../services/checkout-step.service';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutProgressMobileBottomComponent implements OnInit, OnDestroy {
    protected checkoutStepService: CheckoutStepService;
    protected cdr: ChangeDetectorRef;
    constructor(checkoutStepService: CheckoutStepService, cdr: ChangeDetectorRef);
    steps: CheckoutStep[];
    activeStepIndex: number;
    activeStepIndex$: Observable<number>;
    subscription: Subscription;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutProgressMobileBottomComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CheckoutProgressMobileBottomComponent, "cx-checkout-progress-mobile-bottom", never, {}, {}, never, never>;
}

//# sourceMappingURL=checkout-progress-mobile-bottom.component.d.ts.map