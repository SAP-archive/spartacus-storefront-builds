import { OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DeliveryMode, CheckoutDeliveryService, RoutingService } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CheckoutConfigService } from '../../checkout-config.service';
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
