import { ActivatedRoute } from '@angular/router';
import { PaymentType, PaymentTypeService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CheckoutStepService } from '../../services/checkout-step.service';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PaymentTypeComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PaymentTypeComponent, "cx-payment-type", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC10eXBlLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJwYXltZW50LXR5cGUuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBheW1lbnRUeXBlLCBQYXltZW50VHlwZVNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdGVwU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NoZWNrb3V0LXN0ZXAuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQYXltZW50VHlwZUNvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIHBheW1lbnRUeXBlU2VydmljZTogUGF5bWVudFR5cGVTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjaGVja291dFN0ZXBTZXJ2aWNlOiBDaGVja291dFN0ZXBTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGU7XG4gICAgcHJpdmF0ZSBfcG9OdW1iZXJJbnB1dDtcbiAgICB0eXBlU2VsZWN0ZWQ6IHN0cmluZztcbiAgICBjYXJ0UG9OdW1iZXI6IHN0cmluZztcbiAgICBwYXltZW50VHlwZXMkOiBPYnNlcnZhYmxlPFBheW1lbnRUeXBlW10+O1xuICAgIHR5cGVTZWxlY3RlZCQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICBjYXJ0UG9OdW1iZXIkOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgY29uc3RydWN0b3IocGF5bWVudFR5cGVTZXJ2aWNlOiBQYXltZW50VHlwZVNlcnZpY2UsIGNoZWNrb3V0U3RlcFNlcnZpY2U6IENoZWNrb3V0U3RlcFNlcnZpY2UsIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSk7XG4gICAgY2hhbmdlVHlwZShjb2RlOiBzdHJpbmcpOiB2b2lkO1xuICAgIG5leHQoKTogdm9pZDtcbiAgICBiYWNrKCk6IHZvaWQ7XG59XG4iXX0=