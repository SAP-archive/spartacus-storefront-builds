import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address, CartService, CheckoutDeliveryService, RoutingService, TranslationService, UserAddressService } from '@spartacus/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Card } from '../../../../shared/components/card/card.component';
import { CheckoutStepType } from '../../model/checkout-step.model';
import { CheckoutConfigService } from '../../services/checkout-config.service';
export interface CardWithAddress {
    card: Card;
    address: Address;
}
export declare class ShippingAddressComponent implements OnInit, OnDestroy {
    protected userAddressService: UserAddressService;
    protected cartService: CartService;
    protected routingService: RoutingService;
    protected checkoutDeliveryService: CheckoutDeliveryService;
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
    isGuestCheckout: boolean;
    forceLoader: boolean;
    constructor(userAddressService: UserAddressService, cartService: CartService, routingService: RoutingService, checkoutDeliveryService: CheckoutDeliveryService, checkoutConfigService: CheckoutConfigService, activatedRoute: ActivatedRoute, translation: TranslationService);
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
