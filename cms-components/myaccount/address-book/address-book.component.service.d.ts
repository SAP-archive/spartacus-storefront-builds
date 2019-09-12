import { Address, CheckoutDeliveryService, FeatureConfigService, UserAddressService } from '@spartacus/core';
import { Observable } from 'rxjs';
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
}
