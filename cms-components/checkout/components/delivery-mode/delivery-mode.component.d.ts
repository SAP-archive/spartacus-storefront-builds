import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CheckoutDeliveryService, DeliveryMode } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { CheckoutConfigService } from '../../services/checkout-config.service';
import { CheckoutStepService } from '../../services/checkout-step.service';
import * as ɵngcc0 from '@angular/core';
export declare class DeliveryModeComponent implements OnInit, OnDestroy {
    private fb;
    private checkoutDeliveryService;
    private checkoutConfigService;
    protected checkoutStepService: CheckoutStepService;
    private activatedRoute;
    supportedDeliveryModes$: Observable<DeliveryMode[]>;
    selectedDeliveryMode$: Observable<DeliveryMode>;
    currentDeliveryModeId: string;
    continueButtonPressed: boolean;
    private allowRedirect;
    backBtnText: string;
    deliveryModeSub: Subscription;
    mode: FormGroup;
    constructor(fb: FormBuilder, checkoutDeliveryService: CheckoutDeliveryService, checkoutConfigService: CheckoutConfigService, checkoutStepService: CheckoutStepService, activatedRoute: ActivatedRoute);
    ngOnInit(): void;
    changeMode(code: string): void;
    next(): void;
    back(): void;
    get deliveryModeInvalid(): boolean;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DeliveryModeComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DeliveryModeComponent, "cx-delivery-mode", never, {}, {}, never, never>;
}

//# sourceMappingURL=delivery-mode.component.d.ts.map