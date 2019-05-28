import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address, CartService, CheckoutService, RoutingService, TranslationService, UserService } from '@spartacus/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Card } from '../../../../shared/components/card/card.component';
import { CheckoutConfigService } from '../../checkout-config.service';
import { CheckoutStepType } from '../../model/checkout-step.model';
export interface CardWithAddress {
    card: Card;
    address: Address;
}
export declare class ShippingAddressComponent implements OnInit, OnDestroy {
    protected userService: UserService;
    protected cartService: CartService;
    protected routingService: RoutingService;
    protected checkoutService: CheckoutService;
    private checkoutConfigService;
    private activatedRoute;
    private translation;
    existingAddresses$: Observable<Address[]>;
    newAddressFormManuallyOpened: boolean;
    cards: Card[];
    isLoading$: Observable<boolean>;
    selectedAddress: Address;
    goTo: CheckoutStepType;
    setAddress: Address;
    setAddressSub: Subscription;
    selectedAddressSub: Subscription;
    selectedAddress$: BehaviorSubject<Address>;
    cards$: Observable<CardWithAddress[]>;
    checkoutStepUrlNext: string;
    checkoutStepUrlPrevious: string;
    constructor(userService: UserService, cartService: CartService, routingService: RoutingService, checkoutService: CheckoutService, checkoutConfigService: CheckoutConfigService, activatedRoute: ActivatedRoute, translation: TranslationService);
    ngOnInit(): void;
    getCardContent(address: Address, selected: any, textDefaultShippingAddress: string, textShipToThisAddress: string, textSelected: string): Card;
    addressSelected(address: Address): void;
    next(): void;
    addAddress({ newAddress, address, }: {
        newAddress: boolean;
        address: Address;
    }): void;
    addNewAddress(address: Address): void;
    showNewAddressForm(): void;
    hideNewAddressForm(goBack?: boolean): void;
    goNext(): void;
    back(): void;
    ngOnDestroy(): void;
}
