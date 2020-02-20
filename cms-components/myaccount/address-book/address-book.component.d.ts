import { OnInit } from '@angular/core';
import { Address } from '@spartacus/core';
import { Observable } from 'rxjs';
import { AddressBookComponentService } from './address-book.component.service';
import * as ɵngcc0 from '@angular/core';
export declare class AddressBookComponent implements OnInit {
    service: AddressBookComponentService;
    addresses$: Observable<Address[]>;
    addressesStateLoading$: Observable<boolean>;
    currentAddress: Address;
    showAddAddressForm: boolean;
    showEditAddressForm: boolean;
    constructor(service: AddressBookComponentService);
    ngOnInit(): void;
    addAddressButtonHandle(): void;
    editAddressButtonHandle(address: Address): void;
    addAddressSubmit(address: Address): void;
    addAddressCancel(): void;
    editAddressSubmit(address: Address): void;
    editAddressCancel(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AddressBookComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AddressBookComponent, "cx-address-book", never, {}, {}, never>;
}

//# sourceMappingURL=address-book.component.d.ts.map