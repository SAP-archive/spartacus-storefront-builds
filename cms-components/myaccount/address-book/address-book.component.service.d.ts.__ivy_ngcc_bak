import { Address, CheckoutDeliveryService, UserAddressService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class AddressBookComponentService {
    protected userAddressService: UserAddressService;
    protected checkoutDeliveryService: CheckoutDeliveryService;
    constructor(userAddressService: UserAddressService, checkoutDeliveryService: CheckoutDeliveryService);
    getAddresses(): Observable<Address[]>;
    getAddressesStateLoading(): Observable<boolean>;
    loadAddresses(): void;
    addUserAddress(address: Address): void;
    updateUserAddress(addressId: string, address: Address): void;
}
