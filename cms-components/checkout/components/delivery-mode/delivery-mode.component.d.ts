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
    checkoutStepUrlNext: string;
    checkoutStepUrlPrevious: string;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktbW9kZS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiZGVsaXZlcnktbW9kZS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDaGVja291dERlbGl2ZXJ5U2VydmljZSwgRGVsaXZlcnlNb2RlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdGVwU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NoZWNrb3V0LXN0ZXAuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEZWxpdmVyeU1vZGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBmYjtcbiAgICBwcml2YXRlIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlO1xuICAgIHByaXZhdGUgY2hlY2tvdXRDb25maWdTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjaGVja291dFN0ZXBTZXJ2aWNlOiBDaGVja291dFN0ZXBTZXJ2aWNlO1xuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU7XG4gICAgc3VwcG9ydGVkRGVsaXZlcnlNb2RlcyQ6IE9ic2VydmFibGU8RGVsaXZlcnlNb2RlW10+O1xuICAgIHNlbGVjdGVkRGVsaXZlcnlNb2RlJDogT2JzZXJ2YWJsZTxEZWxpdmVyeU1vZGU+O1xuICAgIGN1cnJlbnREZWxpdmVyeU1vZGVJZDogc3RyaW5nO1xuICAgIGNoZWNrb3V0U3RlcFVybE5leHQ6IHN0cmluZztcbiAgICBjaGVja291dFN0ZXBVcmxQcmV2aW91czogc3RyaW5nO1xuICAgIHByaXZhdGUgYWxsb3dSZWRpcmVjdDtcbiAgICBiYWNrQnRuVGV4dDogc3RyaW5nO1xuICAgIGRlbGl2ZXJ5TW9kZVN1YjogU3Vic2NyaXB0aW9uO1xuICAgIG1vZGU6IEZvcm1Hcm91cDtcbiAgICBjb25zdHJ1Y3RvcihmYjogRm9ybUJ1aWxkZXIsIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZSwgY2hlY2tvdXRDb25maWdTZXJ2aWNlOiBDaGVja291dENvbmZpZ1NlcnZpY2UsIGNoZWNrb3V0U3RlcFNlcnZpY2U6IENoZWNrb3V0U3RlcFNlcnZpY2UsIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBjaGFuZ2VNb2RlKGNvZGU6IHN0cmluZyk6IHZvaWQ7XG4gICAgbmV4dCgpOiB2b2lkO1xuICAgIGJhY2soKTogdm9pZDtcbiAgICBnZXQgZGVsaXZlcnlNb2RlSW52YWxpZCgpOiBib29sZWFuO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=