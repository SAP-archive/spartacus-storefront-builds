import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Address, CartDataService, CartService, CheckoutService, RoutingService, UserService, TranslationService } from '@spartacus/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Card } from '../../../../../shared/components/card/card.component';
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
    private translation;
    existingAddresses$: Observable<Address[]>;
    newAddressFormManuallyOpened: boolean;
    cards: Card[];
    isLoading$: Observable<boolean>;
    selectedAddress: Address;
    goTo: number;
    setAddress: Address;
    setAddressSub: Subscription;
    selectedAddressSub: Subscription;
    selectedAddress$: BehaviorSubject<Address>;
    cards$: Observable<CardWithAddress[]>;
    goToStep: EventEmitter<any>;
    constructor(userService: UserService, cartData: CartDataService, cartService: CartService, routingService: RoutingService, checkoutService: CheckoutService, translation: TranslationService);
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
    back(): void;
    ngOnDestroy(): void;
}
