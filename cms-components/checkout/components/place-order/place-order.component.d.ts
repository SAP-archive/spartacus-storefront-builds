import { ComponentRef, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CheckoutService, ORDER_TYPE, RoutingService, ScheduleReplenishmentForm } from '@spartacus/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LaunchDialogService } from '../../../../layout/launch-dialog/index';
import { CheckoutReplenishmentFormService } from '../../services/checkout-replenishment-form-service';
export declare class PlaceOrderComponent implements OnInit, OnDestroy {
    protected checkoutService: CheckoutService;
    protected checkoutReplenishmentFormService: CheckoutReplenishmentFormService;
    protected routingService: RoutingService;
    protected launchDialogService: LaunchDialogService;
    protected fb: FormBuilder;
    protected vcr: ViewContainerRef;
    private subscription;
    currentOrderType: ORDER_TYPE;
    scheduleReplenishmentFormData: ScheduleReplenishmentForm;
    placedOrder: void | Observable<ComponentRef<any>>;
    daysOfWeekNotChecked$: BehaviorSubject<boolean>;
    checkoutSubmitForm: FormGroup;
    get termsAndConditionInvalid(): Boolean;
    constructor(checkoutService: CheckoutService, checkoutReplenishmentFormService: CheckoutReplenishmentFormService, routingService: RoutingService, launchDialogService: LaunchDialogService, fb: FormBuilder, vcr: ViewContainerRef);
    submitForm(): void;
    ngOnInit(): void;
    onSuccess(data: boolean): void;
    ngOnDestroy(): void;
}
