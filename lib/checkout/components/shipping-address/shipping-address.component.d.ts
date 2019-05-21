import { OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Address, CartDataService, CartService, CheckoutService, RoutingService, UserService, TranslationService } from '@spartacus/core';
import { CheckoutStepType } from '../../model/checkout-step.model';
import { CheckoutConfigService } from '../../checkout-config.service';
import { Card } from '../../../../shared/components/card/card.component';
export interface CardWithAddress {
    card: Card;
    address: Address;
}
export declare class ShippingAddressComponent implements OnInit, OnDestroy {
    protected userService: UserService;
    protected cartData: CartDataService;
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
    constructor(userService: UserService, cartData: CartDataService, cartService: CartService, routingService: RoutingService, checkoutService: CheckoutService, checkoutConfigService: CheckoutConfigService, activatedRoute: ActivatedRoute, translation: TranslationService);
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
