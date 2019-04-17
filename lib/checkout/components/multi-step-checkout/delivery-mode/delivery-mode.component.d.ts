import { EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DeliveryMode, CheckoutService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class DeliveryModeComponent implements OnInit {
    private fb;
    private service;
    selectedShippingMethod: string;
    selectMode: EventEmitter<any>;
    backStep: EventEmitter<any>;
    supportedDeliveryModes$: Observable<DeliveryMode[]>;
    leave: boolean;
    mode: FormGroup;
    constructor(fb: FormBuilder, service: CheckoutService);
    ngOnInit(): void;
    next(): void;
    back(): void;
    readonly deliveryModeInvalid: boolean;
}
