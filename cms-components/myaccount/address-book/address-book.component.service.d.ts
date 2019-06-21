import { Address, UserAddressService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class AddressBookComponentService {
    private userAddressService;
    constructor(userAddressService: UserAddressService);
    getAddresses(): Observable<Address[]>;
    getAddressesStateLoading(): Observable<boolean>;
    loadAddresses(): void;
    addUserAddress(address: Address): void;
    updateUserAddress(addressId: string, address: Address): void;
}
