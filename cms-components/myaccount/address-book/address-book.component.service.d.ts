import { Address, CheckoutDeliveryService, UserAddressService } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class AddressBookComponentService {
    protected userAddressService: UserAddressService;
    protected checkoutDeliveryService: CheckoutDeliveryService;
    constructor(userAddressService: UserAddressService, checkoutDeliveryService: CheckoutDeliveryService);
    getAddresses(): Observable<Address[]>;
    getAddressesStateLoading(): Observable<boolean>;
    loadAddresses(): void;
    addUserAddress(address: Address): void;
    updateUserAddress(addressId: string, address: Address): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AddressBookComponentService, never>;
}

//# sourceMappingURL=address-book.component.service.d.ts.map