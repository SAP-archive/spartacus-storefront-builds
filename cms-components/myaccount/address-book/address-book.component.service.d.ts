import { Address, CheckoutDeliveryService, FeatureConfigService, UserAddressService } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class AddressBookComponentService {
    private userAddressService;
    protected checkoutDeliveryService?: CheckoutDeliveryService;
    private featureConfigService?;
    constructor(userAddressService: UserAddressService, checkoutDeliveryService: CheckoutDeliveryService, featureConfigService: FeatureConfigService);
    /**
     * @deprecated since version 1.2
     *  Use constructor(userAddressService: UserAddressService,
     *  checkoutDeliveryService: CheckoutDeliveryService
     *  featureConfigService: FeatureConfigService) instead
     *
     *  TODO(issue:#4309) Deprecated since 1.2.0
     */
    constructor(userAddressService: UserAddressService);
    getAddresses(): Observable<Address[]>;
    getAddressesStateLoading(): Observable<boolean>;
    loadAddresses(): void;
    addUserAddress(address: Address): void;
    updateUserAddress(addressId: string, address: Address): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AddressBookComponentService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<AddressBookComponentService>;
}

//# sourceMappingURL=address-book.component.service.d.ts.map