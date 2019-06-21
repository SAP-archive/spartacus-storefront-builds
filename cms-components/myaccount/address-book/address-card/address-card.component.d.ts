import { EventEmitter } from '@angular/core';
import { Address, UserAddressService } from '@spartacus/core';
export declare class AddressCardComponent {
    private userAddressService;
    editMode: boolean;
    isDefault: boolean;
    address: Address;
    editEvent: EventEmitter<any>;
    constructor(userAddressService: UserAddressService);
    openEditFormEvent(): void;
    cancelEdit(): void;
    setEditMode(): void;
    setAddressAsDefault(addressId: string): void;
    deleteAddress(addressId: string): void;
}
