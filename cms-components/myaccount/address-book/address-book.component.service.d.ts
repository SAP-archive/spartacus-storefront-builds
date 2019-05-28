import { Address, UserService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class AddressBookComponentService {
    private userService;
    constructor(userService: UserService);
    getAddresses(): Observable<Address[]>;
    getAddressesStateLoading(): Observable<boolean>;
    loadAddresses(): void;
    addUserAddress(address: Address): void;
    updateUserAddress(addressId: string, address: Address): void;
}
