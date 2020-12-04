import { OnInit } from '@angular/core';
import { ActiveCartService, Cart } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CheckoutStep } from '../../../model/checkout-step.model';
import { CheckoutStepService } from '../../../services/checkout-step.service';
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
}
