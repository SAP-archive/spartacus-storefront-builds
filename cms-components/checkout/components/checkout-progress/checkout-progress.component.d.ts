import { Observable } from 'rxjs';
import { CheckoutStep } from '../../model/checkout-step.model';
import { CheckoutStepService } from '../../services/checkout-step.service';
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
}
