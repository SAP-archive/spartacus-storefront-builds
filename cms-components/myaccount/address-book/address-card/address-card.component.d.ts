import { EventEmitter } from '@angular/core';
import { Address, CheckoutDeliveryService, FeatureConfigService, UserAddressService } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
export declare class AddressCardComponent {
    private userAddressService;
    protected checkoutDeliveryService?: CheckoutDeliveryService;
    private featureConfigService?;
    editMode: boolean;
    isDefault: boolean;
    address: Address;
    editEvent: EventEmitter<any>;
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
    openEditFormEvent(): void;
    cancelEdit(): void;
    setEditMode(): void;
    setAddressAsDefault(addressId: string): void;
    deleteAddress(addressId: string): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AddressCardComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AddressCardComponent, "cx-address-card", never, {
    "address": "address";
}, {
    "editEvent": "editEvent";
}, never>;
}

//# sourceMappingURL=address-card.component.d.ts.map