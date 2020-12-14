import { ActivatedRoute } from '@angular/router';
import { PaymentType, PaymentTypeService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CheckoutStepService } from '../../services/checkout-step.service';
export declare class PaymentTypeComponent {
    protected paymentTypeService: PaymentTypeService;
    protected checkoutStepService: CheckoutStepService;
    protected activatedRoute: ActivatedRoute;
    private _poNumberInput;
    typeSelected: string;
    cartPoNumber: string;
    paymentTypes$: Observable<PaymentType[]>;
    typeSelected$: Observable<string>;
    cartPoNumber$: Observable<string>;
    constructor(paymentTypeService: PaymentTypeService, checkoutStepService: CheckoutStepService, activatedRoute: ActivatedRoute);
    changeType(code: string): void;
    next(): void;
    back(): void;
}
