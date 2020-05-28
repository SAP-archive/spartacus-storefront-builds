import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CheckoutService, RoutingService } from '@spartacus/core';
import { Subscription } from 'rxjs';
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
}
