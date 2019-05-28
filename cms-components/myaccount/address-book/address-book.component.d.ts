import { OnInit } from '@angular/core';
import { Address } from '@spartacus/core';
import { Observable } from 'rxjs';
import { AddressBookComponentService } from './address-book.component.service';
export declare class AddressBookComponent implements OnInit {
    service: AddressBookComponentService;
    addresses$: Observable<Address[]>;
    addressesStateLoading$: Observable<boolean>;
    currentAddress: Address;
    showAddAddressForm: boolean;
    showEditAddressForm: boolean;
    constructor(service: AddressBookComponentService);
    ngOnInit(): void;
    addAddressButtonHandle(): void;
    editAddressButtonHandle(address: Address): void;
    addAddressSubmit(address: Address): void;
    addAddressCancel(): void;
    editAddressSubmit(address: Address): void;
    editAddressCancel(): void;
}
