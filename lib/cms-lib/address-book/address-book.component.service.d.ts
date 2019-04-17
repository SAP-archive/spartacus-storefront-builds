import { Observable } from 'rxjs';
import { UserService, Address } from '@spartacus/core';
export declare class AddressBookComponentService {
    private userService;
    constructor(userService: UserService);
    getAddresses(): Observable<Address[]>;
    getAddressesStateLoading(): Observable<boolean>;
    getUserId(): Observable<string>;
    loadAddresses(userId: string): void;
    addUserAddress(userId: string, address: Address): void;
    updateUserAddress(userId: string, addressId: string, address: Address): void;
}
