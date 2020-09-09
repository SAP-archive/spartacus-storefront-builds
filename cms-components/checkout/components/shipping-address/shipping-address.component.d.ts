import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiveCartService, Address, CheckoutDeliveryService, RoutingService, TranslationService, UserAddressService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { Card } from '../../../../shared/components/card/card.component';
import { CheckoutConfigService } from '../../services/checkout-config.service';
export interface CardWithAddress {
    card: Card;
    address: Address;
}
export declare class ShippingAddressComponent implements OnInit {
    protected userAddressService: UserAddressService;
    protected routingService: RoutingService;
    protected checkoutDeliveryService: CheckoutDeliveryService;
    protected checkoutConfigService: CheckoutConfigService;
    protected activatedRoute: ActivatedRoute;
    protected translation: TranslationService;
    protected activeCartService: ActiveCartService;
    existingAddresses$: Observable<Address[]>;
    newAddressFormManuallyOpened: boolean;
    isLoading$: Observable<boolean>;
    cards$: Observable<CardWithAddress[]>;
    selectedAddress$: Observable<Address>;
    forceLoader: boolean;
    isGuestCheckout: boolean;
    constructor(userAddressService: UserAddressService, routingService: RoutingService, checkoutDeliveryService: CheckoutDeliveryService, checkoutConfigService: CheckoutConfigService, activatedRoute: ActivatedRoute, translation: TranslationService, activeCartService: ActiveCartService);
    ngOnInit(): void;
    getCardContent(address: Address, selected: any, textDefaultShippingAddress: string, textShipToThisAddress: string, textSelected: string): Card;
    selectAddress(address: Address): void;
    addAddress(address: Address): void;
    showNewAddressForm(): void;
    hideNewAddressForm(goPrevious?: boolean): void;
    goNext(): void;
    goPrevious(): void;
}
