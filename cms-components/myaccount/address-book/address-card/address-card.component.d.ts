import { EventEmitter } from '@angular/core';
import { Address, UserService } from '@spartacus/core';
export declare class AddressCardComponent {
    private userService;
    editMode: boolean;
    isDefault: boolean;
    userId: string;
    address: Address;
    editEvent: EventEmitter<any>;
    constructor(userService: UserService);
    openEditFormEvent(): void;
    cancelEdit(): void;
    setEditMode(): void;
    setAddressAsDefault(addressId: string): void;
    deleteAddress(addressId: string): void;
}
