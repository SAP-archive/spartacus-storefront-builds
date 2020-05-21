import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CheckoutService, RoutingService } from '@spartacus/core';
import { Subscription } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class PlaceOrderComponent implements OnInit, OnDestroy {
    protected checkoutService: CheckoutService;
    protected routingService: RoutingService;
    protected fb: FormBuilder;
    placeOrderSubscription: Subscription;
    checkoutSubmitForm: FormGroup;
    constructor(checkoutService: CheckoutService, routingService: RoutingService, fb: FormBuilder);
    submitForm(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PlaceOrderComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PlaceOrderComponent, "cx-place-order", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2Utb3JkZXIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInBsYWNlLW9yZGVyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7QUFVQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTZXJ2aWNlLCBSb3V0aW5nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFBsYWNlT3JkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U2VydmljZTogQ2hlY2tvdXRTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGZiOiBGb3JtQnVpbGRlcjtcbiAgICBwbGFjZU9yZGVyU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgY2hlY2tvdXRTdWJtaXRGb3JtOiBGb3JtR3JvdXA7XG4gICAgY29uc3RydWN0b3IoY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2UsIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSwgZmI6IEZvcm1CdWlsZGVyKTtcbiAgICBzdWJtaXRGb3JtKCk6IHZvaWQ7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19