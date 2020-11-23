import { OnInit } from '@angular/core';
import { Address, TranslationService, UserAddressService, CheckoutDeliveryService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { AddressBookComponentService } from './address-book.component.service';
import { Card } from '../../../shared/components/card';
export declare class AddressBookComponent implements OnInit {
    service: AddressBookComponentService;
    protected translation: TranslationService;
    protected userAddressService: UserAddressService;
    protected checkoutDeliveryService: CheckoutDeliveryService;
    addresses$: Observable<Address[]>;
    cards$: Observable<Card[]>;
    addressesStateLoading$: Observable<boolean>;
    currentAddress: Address;
    showAddAddressForm: boolean;
    showEditAddressForm: boolean;
    editCard: string;
    constructor(service: AddressBookComponentService, translation: TranslationService, userAddressService: UserAddressService, checkoutDeliveryService: CheckoutDeliveryService);
    ngOnInit(): void;
    addAddressButtonHandle(): void;
    editAddressButtonHandle(address: Address): void;
    addAddressSubmit(address: Address): void;
    addAddressCancel(): void;
    editAddressSubmit(address: Address): void;
    editAddressCancel(): void;
    getCardContent(address: Address): Observable<{
        textBold: string;
        text: string[];
        actions: {
            name: string;
            event: string;
        }[];
        header: string;
        deleteMsg: string;
    }>;
    setAddressAsDefault(addressId: string): void;
    deleteAddress(addressId: string): void;
    setEdit(addressId: string): void;
    cancelCard(): void;
}
