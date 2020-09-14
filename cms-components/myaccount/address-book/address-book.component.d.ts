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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AddressBookComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AddressBookComponent, "cx-address-book", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1ib29rLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJhZGRyZXNzLWJvb2suY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFkZHJlc3MsIFRyYW5zbGF0aW9uU2VydmljZSwgVXNlckFkZHJlc3NTZXJ2aWNlLCBDaGVja291dERlbGl2ZXJ5U2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBZGRyZXNzQm9va0NvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuL2FkZHJlc3MtYm9vay5jb21wb25lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBZGRyZXNzQm9va0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgc2VydmljZTogQWRkcmVzc0Jvb2tDb21wb25lbnRTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlO1xuICAgIHByb3RlY3RlZCB1c2VyQWRkcmVzc1NlcnZpY2U6IFVzZXJBZGRyZXNzU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlO1xuICAgIGFkZHJlc3NlcyQ6IE9ic2VydmFibGU8QWRkcmVzc1tdPjtcbiAgICBjYXJkcyQ6IE9ic2VydmFibGU8Q2FyZFtdPjtcbiAgICBhZGRyZXNzZXNTdGF0ZUxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIGN1cnJlbnRBZGRyZXNzOiBBZGRyZXNzO1xuICAgIHNob3dBZGRBZGRyZXNzRm9ybTogYm9vbGVhbjtcbiAgICBzaG93RWRpdEFkZHJlc3NGb3JtOiBib29sZWFuO1xuICAgIGVkaXRDYXJkOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3Ioc2VydmljZTogQWRkcmVzc0Jvb2tDb21wb25lbnRTZXJ2aWNlLCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlLCB1c2VyQWRkcmVzc1NlcnZpY2U6IFVzZXJBZGRyZXNzU2VydmljZSwgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIGFkZEFkZHJlc3NCdXR0b25IYW5kbGUoKTogdm9pZDtcbiAgICBlZGl0QWRkcmVzc0J1dHRvbkhhbmRsZShhZGRyZXNzOiBBZGRyZXNzKTogdm9pZDtcbiAgICBhZGRBZGRyZXNzU3VibWl0KGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkO1xuICAgIGFkZEFkZHJlc3NDYW5jZWwoKTogdm9pZDtcbiAgICBlZGl0QWRkcmVzc1N1Ym1pdChhZGRyZXNzOiBBZGRyZXNzKTogdm9pZDtcbiAgICBlZGl0QWRkcmVzc0NhbmNlbCgpOiB2b2lkO1xuICAgIGdldENhcmRDb250ZW50KGFkZHJlc3M6IEFkZHJlc3MpOiBPYnNlcnZhYmxlPHtcbiAgICAgICAgdGV4dEJvbGQ6IHN0cmluZztcbiAgICAgICAgdGV4dDogc3RyaW5nW107XG4gICAgICAgIGFjdGlvbnM6IHtcbiAgICAgICAgICAgIG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgIGV2ZW50OiBzdHJpbmc7XG4gICAgICAgIH1bXTtcbiAgICAgICAgaGVhZGVyOiBzdHJpbmc7XG4gICAgICAgIGRlbGV0ZU1zZzogc3RyaW5nO1xuICAgIH0+O1xuICAgIHNldEFkZHJlc3NBc0RlZmF1bHQoYWRkcmVzc0lkOiBzdHJpbmcpOiB2b2lkO1xuICAgIGRlbGV0ZUFkZHJlc3MoYWRkcmVzc0lkOiBzdHJpbmcpOiB2b2lkO1xuICAgIHNldEVkaXQoYWRkcmVzc0lkOiBzdHJpbmcpOiB2b2lkO1xuICAgIGNhbmNlbENhcmQoKTogdm9pZDtcbn1cbiJdfQ==