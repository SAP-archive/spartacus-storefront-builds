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

//# sourceMappingURL=place-order.component.d.ts.map