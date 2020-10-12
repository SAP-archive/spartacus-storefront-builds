import { Observable } from 'rxjs';
import { CheckoutStep } from '../../../model/checkout-step.model';
import { CheckoutStepService } from '../../../services/checkout-step.service';
export declare class CheckoutProgressMobileBottomComponent {
    protected checkoutStepService: CheckoutStepService;
    private _steps$;
    constructor(checkoutStepService: CheckoutStepService);
    activeStepIndex: number;
    activeStepIndex$: Observable<number>;
    get steps$(): Observable<CheckoutStep[]>;
}
