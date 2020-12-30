import { ComponentRef, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CheckoutService, ORDER_TYPE, RoutingService, ScheduleReplenishmentForm } from '@spartacus/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LaunchDialogService } from '../../../../layout/launch-dialog/index';
import { CheckoutReplenishmentFormService } from '../../services/checkout-replenishment-form-service';
import * as ɵngcc0 from '@angular/core';
export declare class PlaceOrderComponent implements OnInit, OnDestroy {
    protected checkoutService: CheckoutService;
    protected routingService: RoutingService;
    protected fb: FormBuilder;
    protected checkoutReplenishmentFormService: CheckoutReplenishmentFormService;
    protected launchDialogService: LaunchDialogService;
    protected vcr: ViewContainerRef;
    private subscription;
    currentOrderType: ORDER_TYPE;
    scheduleReplenishmentFormData: ScheduleReplenishmentForm;
    placedOrder: void | Observable<ComponentRef<any>>;
    daysOfWeekNotChecked$: BehaviorSubject<boolean>;
    checkoutSubmitForm: FormGroup;
    get termsAndConditionInvalid(): Boolean;
    constructor(checkoutService: CheckoutService, routingService: RoutingService, fb: FormBuilder, checkoutReplenishmentFormService: CheckoutReplenishmentFormService, launchDialogService: LaunchDialogService, vcr: ViewContainerRef);
    submitForm(): void;
    ngOnInit(): void;
    onSuccess(data: boolean): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PlaceOrderComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PlaceOrderComponent, "cx-place-order", never, {}, {}, never, never>;
}

//# sourceMappingURL=place-order.component.d.ts.map