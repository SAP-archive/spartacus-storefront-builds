import { OnInit, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { RoutingService, Address, CartDataService, UserService } from '@spartacus/core';
import { Card } from '../../../../ui/components/card/card.component';
export declare class ShippingAddressComponent implements OnInit {
    protected userService: UserService;
    protected cartData: CartDataService;
    protected routingService: RoutingService;
    existingAddresses$: Observable<Address[]>;
    newAddressFormManuallyOpened: boolean;
    cards: Card[];
    isLoading$: Observable<boolean>;
    selectedAddress: Address;
    addAddress: EventEmitter<any>;
    constructor(userService: UserService, cartData: CartDataService, routingService: RoutingService);
    ngOnInit(): void;
    getCardContent(address: Address): Card;
    addressSelected(address: Address, index: number): void;
    next(): void;
    addNewAddress(address: Address): void;
    showNewAddressForm(): void;
    hideNewAddressForm(goBack?: boolean): void;
    back(): void;
}
