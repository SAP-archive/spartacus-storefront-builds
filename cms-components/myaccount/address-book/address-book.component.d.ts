import { OnInit } from '@angular/core';
import { Address, TranslationService, UserAddressService, CheckoutDeliveryService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { AddressBookComponentService } from './address-book.component.service';
import { Card } from '../../../shared/components/card';
import * as ɵngcc0 from '@angular/core';
export declare class AddressBookComponent implements OnInit {
    service: AddressBookComponentService;
    protected translation: TranslationService;
    protected userAddressService: UserAddressService;
    protected checkoutDeliveryService: CheckoutDeliveryService;
    addresses$: Observable<Address[]>;
    cards$: Observable<Card[]>;
    addressesStateLoading$: Observable<boolean>;
    currentAddress: Address;
    showAddAddressForm: boolean;
    showEditAddressForm: boolean;
    editCard: string;
    constructor(service: AddressBookComponentService, translation: TranslationService, userAddressService: UserAddressService, checkoutDeliveryService: CheckoutDeliveryService);
    ngOnInit(): void;
    addAddressButtonHandle(): void;
    editAddressButtonHandle(address: Address): void;
    addAddressSubmit(address: Address): void;
    addAddressCancel(): void;
    editAddressSubmit(address: Address): void;
    editAddressCancel(): void;
    getCardContent(address: Address): Observable<{
        textBold: string;
        text: string[];
        actions: {
            name: string;
            event: string;
        }[];
        header: string;
        deleteMsg: string;
    }>;
    setAddressAsDefault(addressId: string): void;
    deleteAddress(addressId: string): void;
    setEdit(addressId: string): void;
    cancelCard(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AddressBookComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AddressBookComponent, "cx-address-book", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1ib29rLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJhZGRyZXNzLWJvb2suY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQ0E7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBZGRyZXNzLCBUcmFuc2xhdGlvblNlcnZpY2UsIFVzZXJBZGRyZXNzU2VydmljZSwgQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWRkcmVzc0Jvb2tDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi9hZGRyZXNzLWJvb2suY29tcG9uZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQWRkcmVzc0Jvb2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHNlcnZpY2U6IEFkZHJlc3NCb29rQ29tcG9uZW50U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgdXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZTtcbiAgICBhZGRyZXNzZXMkOiBPYnNlcnZhYmxlPEFkZHJlc3NbXT47XG4gICAgY2FyZHMkOiBPYnNlcnZhYmxlPENhcmRbXT47XG4gICAgYWRkcmVzc2VzU3RhdGVMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBjdXJyZW50QWRkcmVzczogQWRkcmVzcztcbiAgICBzaG93QWRkQWRkcmVzc0Zvcm06IGJvb2xlYW47XG4gICAgc2hvd0VkaXRBZGRyZXNzRm9ybTogYm9vbGVhbjtcbiAgICBlZGl0Q2FyZDogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHNlcnZpY2U6IEFkZHJlc3NCb29rQ29tcG9uZW50U2VydmljZSwgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZSwgdXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2UsIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBhZGRBZGRyZXNzQnV0dG9uSGFuZGxlKCk6IHZvaWQ7XG4gICAgZWRpdEFkZHJlc3NCdXR0b25IYW5kbGUoYWRkcmVzczogQWRkcmVzcyk6IHZvaWQ7XG4gICAgYWRkQWRkcmVzc1N1Ym1pdChhZGRyZXNzOiBBZGRyZXNzKTogdm9pZDtcbiAgICBhZGRBZGRyZXNzQ2FuY2VsKCk6IHZvaWQ7XG4gICAgZWRpdEFkZHJlc3NTdWJtaXQoYWRkcmVzczogQWRkcmVzcyk6IHZvaWQ7XG4gICAgZWRpdEFkZHJlc3NDYW5jZWwoKTogdm9pZDtcbiAgICBnZXRDYXJkQ29udGVudChhZGRyZXNzOiBBZGRyZXNzKTogT2JzZXJ2YWJsZTx7XG4gICAgICAgIHRleHRCb2xkOiBzdHJpbmc7XG4gICAgICAgIHRleHQ6IHN0cmluZ1tdO1xuICAgICAgICBhY3Rpb25zOiB7XG4gICAgICAgICAgICBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICBldmVudDogc3RyaW5nO1xuICAgICAgICB9W107XG4gICAgICAgIGhlYWRlcjogc3RyaW5nO1xuICAgICAgICBkZWxldGVNc2c6IHN0cmluZztcbiAgICB9PjtcbiAgICBzZXRBZGRyZXNzQXNEZWZhdWx0KGFkZHJlc3NJZDogc3RyaW5nKTogdm9pZDtcbiAgICBkZWxldGVBZGRyZXNzKGFkZHJlc3NJZDogc3RyaW5nKTogdm9pZDtcbiAgICBzZXRFZGl0KGFkZHJlc3NJZDogc3RyaW5nKTogdm9pZDtcbiAgICBjYW5jZWxDYXJkKCk6IHZvaWQ7XG59XG4iXX0=