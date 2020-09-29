import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CheckoutStep } from '../../../model/checkout-step.model';
import { CheckoutStepService } from '../../../services/checkout-step.service';
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
}
