import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CheckoutDeliveryService, DeliveryMode } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { CheckoutConfigService } from '../../services/checkout-config.service';
import { CheckoutStepService } from '../../services/checkout-step.service';
export declare class DeliveryModeComponent implements OnInit, OnDestroy {
    private fb;
    private checkoutDeliveryService;
    private checkoutConfigService;
    private activatedRoute;
    protected checkoutStepService: CheckoutStepService;
    supportedDeliveryModes$: Observable<DeliveryMode[]>;
    selectedDeliveryMode$: Observable<DeliveryMode>;
    continueButtonPressed: boolean;
    backBtnText: string;
    deliveryModeSub: Subscription;
    mode: FormGroup;
    constructor(fb: FormBuilder, checkoutDeliveryService: CheckoutDeliveryService, checkoutConfigService: CheckoutConfigService, activatedRoute: ActivatedRoute, checkoutStepService: CheckoutStepService);
    ngOnInit(): void;
    changeMode(code: string): void;
    next(): void;
    back(): void;
    get deliveryModeInvalid(): boolean;
    ngOnDestroy(): void;
}
