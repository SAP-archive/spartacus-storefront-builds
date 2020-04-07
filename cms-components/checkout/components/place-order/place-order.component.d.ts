import { OnInit, OnDestroy } from '@angular/core';
import { CheckoutService, RoutingService } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class PlaceOrderComponent implements OnInit, OnDestroy {
    protected checkoutService: CheckoutService;
    protected routingService: RoutingService;
    protected fb: FormBuilder;
    placeOrderSubscription: Subscription;
    checkoutSubmitForm: import("@angular/forms").FormGroup;
    constructor(checkoutService: CheckoutService, routingService: RoutingService, fb: FormBuilder);
    submitForm(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PlaceOrderComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PlaceOrderComponent, "cx-place-order", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2Utb3JkZXIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInBsYWNlLW9yZGVyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7QUFVQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGVja291dFNlcnZpY2UsIFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQbGFjZU9yZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByb3RlY3RlZCBjaGVja291dFNlcnZpY2U6IENoZWNrb3V0U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBmYjogRm9ybUJ1aWxkZXI7XG4gICAgcGxhY2VPcmRlclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIGNoZWNrb3V0U3VibWl0Rm9ybTogaW1wb3J0KFwiQGFuZ3VsYXIvZm9ybXNcIikuRm9ybUdyb3VwO1xuICAgIGNvbnN0cnVjdG9yKGNoZWNrb3V0U2VydmljZTogQ2hlY2tvdXRTZXJ2aWNlLCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsIGZiOiBGb3JtQnVpbGRlcik7XG4gICAgc3VibWl0Rm9ybSgpOiB2b2lkO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==