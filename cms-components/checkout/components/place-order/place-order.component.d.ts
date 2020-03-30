import { OnInit, OnDestroy } from '@angular/core';
import { CheckoutService, RoutingService } from '@spartacus/core';
import { Subscription } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class PlaceOrderComponent implements OnInit, OnDestroy {
    private checkoutService;
    private routingService;
    tAndCToggler: boolean;
    placeOrderSubscription: Subscription;
    constructor(checkoutService: CheckoutService, routingService: RoutingService);
    toggleTAndC(): void;
    placeOrder(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PlaceOrderComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PlaceOrderComponent, "cx-place-order", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2Utb3JkZXIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInBsYWNlLW9yZGVyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7OztBQVVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoZWNrb3V0U2VydmljZSwgUm91dGluZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQbGFjZU9yZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgY2hlY2tvdXRTZXJ2aWNlO1xuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U7XG4gICAgdEFuZENUb2dnbGVyOiBib29sZWFuO1xuICAgIHBsYWNlT3JkZXJTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICBjb25zdHJ1Y3RvcihjaGVja291dFNlcnZpY2U6IENoZWNrb3V0U2VydmljZSwgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlKTtcbiAgICB0b2dnbGVUQW5kQygpOiB2b2lkO1xuICAgIHBsYWNlT3JkZXIoKTogdm9pZDtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=