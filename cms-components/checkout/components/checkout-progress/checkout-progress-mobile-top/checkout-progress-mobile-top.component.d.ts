import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { ActiveCartService, Cart } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { CheckoutStep } from '../../../model/checkout-step.model';
import { CheckoutStepService } from '../../../services/checkout-step.service';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutProgressMobileTopComponent implements OnInit, OnDestroy {
    protected checkoutStepService: CheckoutStepService;
    protected activeCartService: ActiveCartService;
    protected cdr: ChangeDetectorRef;
    constructor(checkoutStepService: CheckoutStepService, activeCartService: ActiveCartService, cdr: ChangeDetectorRef);
    cart$: Observable<Cart>;
    steps: CheckoutStep[];
    activeStepIndex: number;
    activeStepIndex$: Observable<number>;
    subscription: Subscription;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutProgressMobileTopComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CheckoutProgressMobileTopComponent, "cx-checkout-progress-mobile-top", never, {}, {}, never, never>;
}

//# sourceMappingURL=checkout-progress-mobile-top.component.d.ts.map