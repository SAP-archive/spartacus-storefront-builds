import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { ActiveCartService, Cart } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { CheckoutStep } from '../../../model/checkout-step.model';
import { CheckoutStepService } from '../../../services/checkout-step.service';
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
}
