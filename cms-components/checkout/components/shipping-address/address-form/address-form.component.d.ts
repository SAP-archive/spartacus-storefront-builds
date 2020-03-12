import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Address, AddressValidation, CheckoutDeliveryService, Country, GlobalMessageService, Region, Title, UserAddressService, UserService } from '@spartacus/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ModalRef, ModalService } from '../../../../../shared/components/modal/index';
import * as ɵngcc0 from '@angular/core';
export declare class AddressFormComponent implements OnInit, OnDestroy {
    private fb;
    protected checkoutDeliveryService: CheckoutDeliveryService;
    protected userService: UserService;
    protected userAddressService: UserAddressService;
    protected globalMessageService: GlobalMessageService;
    private modalService;
    countries$: Observable<Country[]>;
    titles$: Observable<Title[]>;
    regions$: Observable<Region[]>;
    selectedCountry$: BehaviorSubject<string>;
    addressData: Address;
    actionBtnLabel: string;
    cancelBtnLabel: string;
    setAsDefaultField: boolean;
    showTitleCode: boolean;
    showCancelBtn: boolean;
    submitAddress: EventEmitter<any>;
    backToAddress: EventEmitter<any>;
    addressVerifySub: Subscription;
    regionsSub: Subscription;
    suggestedAddressModalRef: ModalRef;
    address: FormGroup;
    constructor(fb: FormBuilder, checkoutDeliveryService: CheckoutDeliveryService, userService: UserService, userAddressService: UserAddressService, globalMessageService: GlobalMessageService, modalService: ModalService);
    ngOnInit(): void;
    titleSelected(title: Title): void;
    countrySelected(country: Country): void;
    regionSelected(region: Region): void;
    toggleDefaultAddress(): void;
    back(): void;
    verifyAddress(): void;
    openSuggestedAddress(results: AddressValidation): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AddressFormComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AddressFormComponent, "cx-address-form", never, {
    "showCancelBtn": "showCancelBtn";
    "addressData": "addressData";
    "actionBtnLabel": "actionBtnLabel";
    "cancelBtnLabel": "cancelBtnLabel";
    "setAsDefaultField": "setAsDefaultField";
    "showTitleCode": "showTitleCode";
}, {
    "submitAddress": "submitAddress";
    "backToAddress": "backToAddress";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1mb3JtLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJhZGRyZXNzLWZvcm0uY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWRkcmVzcywgQWRkcmVzc1ZhbGlkYXRpb24sIENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLCBDb3VudHJ5LCBHbG9iYWxNZXNzYWdlU2VydmljZSwgUmVnaW9uLCBUaXRsZSwgVXNlckFkZHJlc3NTZXJ2aWNlLCBVc2VyU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTW9kYWxSZWYsIE1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL2luZGV4JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFkZHJlc3NGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgZmI7XG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCB1c2VyQWRkcmVzc1NlcnZpY2U6IFVzZXJBZGRyZXNzU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlO1xuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlO1xuICAgIGNvdW50cmllcyQ6IE9ic2VydmFibGU8Q291bnRyeVtdPjtcbiAgICB0aXRsZXMkOiBPYnNlcnZhYmxlPFRpdGxlW10+O1xuICAgIHJlZ2lvbnMkOiBPYnNlcnZhYmxlPFJlZ2lvbltdPjtcbiAgICBzZWxlY3RlZENvdW50cnkkOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPjtcbiAgICBhZGRyZXNzRGF0YTogQWRkcmVzcztcbiAgICBhY3Rpb25CdG5MYWJlbDogc3RyaW5nO1xuICAgIGNhbmNlbEJ0bkxhYmVsOiBzdHJpbmc7XG4gICAgc2V0QXNEZWZhdWx0RmllbGQ6IGJvb2xlYW47XG4gICAgc2hvd1RpdGxlQ29kZTogYm9vbGVhbjtcbiAgICBzaG93Q2FuY2VsQnRuOiBib29sZWFuO1xuICAgIHN1Ym1pdEFkZHJlc3M6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGJhY2tUb0FkZHJlc3M6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGFkZHJlc3NWZXJpZnlTdWI6IFN1YnNjcmlwdGlvbjtcbiAgICByZWdpb25zU3ViOiBTdWJzY3JpcHRpb247XG4gICAgc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmOiBNb2RhbFJlZjtcbiAgICBhZGRyZXNzOiBGb3JtR3JvdXA7XG4gICAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyLCBjaGVja291dERlbGl2ZXJ5U2VydmljZTogQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgdXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2UsIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSwgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgdGl0bGVTZWxlY3RlZCh0aXRsZTogVGl0bGUpOiB2b2lkO1xuICAgIGNvdW50cnlTZWxlY3RlZChjb3VudHJ5OiBDb3VudHJ5KTogdm9pZDtcbiAgICByZWdpb25TZWxlY3RlZChyZWdpb246IFJlZ2lvbik6IHZvaWQ7XG4gICAgdG9nZ2xlRGVmYXVsdEFkZHJlc3MoKTogdm9pZDtcbiAgICBiYWNrKCk6IHZvaWQ7XG4gICAgdmVyaWZ5QWRkcmVzcygpOiB2b2lkO1xuICAgIG9wZW5TdWdnZXN0ZWRBZGRyZXNzKHJlc3VsdHM6IEFkZHJlc3NWYWxpZGF0aW9uKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19