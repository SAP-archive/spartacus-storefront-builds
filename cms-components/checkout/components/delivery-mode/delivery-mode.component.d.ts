import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CheckoutDeliveryService, DeliveryMode, RoutingService } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { CheckoutConfigService } from '../../services/checkout-config.service';
import * as ɵngcc0 from '@angular/core';
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
    private allowRedirect;
    deliveryModeSub: Subscription;
    mode: FormGroup;
    constructor(fb: FormBuilder, checkoutDeliveryService: CheckoutDeliveryService, routingService: RoutingService, checkoutConfigService: CheckoutConfigService, activatedRoute: ActivatedRoute);
    ngOnInit(): void;
    changeMode(code: string): void;
    next(): void;
    back(): void;
    get deliveryModeInvalid(): boolean;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DeliveryModeComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DeliveryModeComponent, "cx-delivery-mode", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktbW9kZS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiZGVsaXZlcnktbW9kZS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsIERlbGl2ZXJ5TW9kZSwgUm91dGluZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDaGVja291dENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jaGVja291dC1jb25maWcuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEZWxpdmVyeU1vZGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBmYjtcbiAgICBwcml2YXRlIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlO1xuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U7XG4gICAgcHJpdmF0ZSBjaGVja291dENvbmZpZ1NlcnZpY2U7XG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTtcbiAgICBzdXBwb3J0ZWREZWxpdmVyeU1vZGVzJDogT2JzZXJ2YWJsZTxEZWxpdmVyeU1vZGVbXT47XG4gICAgc2VsZWN0ZWREZWxpdmVyeU1vZGUkOiBPYnNlcnZhYmxlPERlbGl2ZXJ5TW9kZT47XG4gICAgY3VycmVudERlbGl2ZXJ5TW9kZUlkOiBzdHJpbmc7XG4gICAgY2hlY2tvdXRTdGVwVXJsTmV4dDogc3RyaW5nO1xuICAgIGNoZWNrb3V0U3RlcFVybFByZXZpb3VzOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBhbGxvd1JlZGlyZWN0O1xuICAgIGRlbGl2ZXJ5TW9kZVN1YjogU3Vic2NyaXB0aW9uO1xuICAgIG1vZGU6IEZvcm1Hcm91cDtcbiAgICBjb25zdHJ1Y3RvcihmYjogRm9ybUJ1aWxkZXIsIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZSwgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLCBjaGVja291dENvbmZpZ1NlcnZpY2U6IENoZWNrb3V0Q29uZmlnU2VydmljZSwgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIGNoYW5nZU1vZGUoY29kZTogc3RyaW5nKTogdm9pZDtcbiAgICBuZXh0KCk6IHZvaWQ7XG4gICAgYmFjaygpOiB2b2lkO1xuICAgIGdldCBkZWxpdmVyeU1vZGVJbnZhbGlkKCk6IGJvb2xlYW47XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==