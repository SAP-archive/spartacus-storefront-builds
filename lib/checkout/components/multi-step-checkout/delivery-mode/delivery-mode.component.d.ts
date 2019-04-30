import { EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DeliveryMode, CheckoutService } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
export declare class DeliveryModeComponent implements OnInit, OnDestroy {
    private fb;
    private checkoutService;
    goToStep: EventEmitter<number>;
    supportedDeliveryModes$: Observable<DeliveryMode[]>;
    selectedDeliveryMode$: Observable<DeliveryMode>;
    currentDeliveryModeId: string;
    changedOption: boolean;
    deliveryModeSub: Subscription;
    mode: FormGroup;
    constructor(fb: FormBuilder, checkoutService: CheckoutService);
    ngOnInit(): void;
    changeMode(code: string): void;
    next(): void;
    back(): void;
    readonly deliveryModeInvalid: boolean;
    ngOnDestroy(): void;
}
