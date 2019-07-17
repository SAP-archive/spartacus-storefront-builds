import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CheckoutDeliveryService, DeliveryMode, RoutingService } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { CheckoutConfigService } from '../../services/checkout-config.service';
export declare class DeliveryModeComponent implements OnInit, OnDestroy {
    private fb;
    private checkoutDeliveryService;
    private routingService;
    private checkoutConfigService;
    private activatedRoute;
    supportedDeliveryModes$: Observable<DeliveryMode[]>;
    selectedDeliveryMode$: Observable<DeliveryMode>;
    currentDeliveryModeId: string;
    checkoutStepUrlNext: string;
    checkoutStepUrlPrevious: string;
    changedOption: boolean;
    deliveryModeSub: Subscription;
    mode: FormGroup;
    constructor(fb: FormBuilder, checkoutDeliveryService: CheckoutDeliveryService, routingService: RoutingService, checkoutConfigService: CheckoutConfigService, activatedRoute: ActivatedRoute);
    ngOnInit(): void;
    changeMode(code: string): void;
    next(): void;
    back(): void;
    readonly deliveryModeInvalid: boolean;
    ngOnDestroy(): void;
}
