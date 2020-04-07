import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Address, AddressValidation, CheckoutDeliveryService, Country, GlobalMessageService, Region, Title, UserAddressService, UserService } from '@spartacus/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ModalRef, ModalService } from '../../../../../shared/components/modal/index';
import * as ɵngcc0 from '@angular/core';
export declare class AddressFormComponent implements OnInit, OnDestroy {
    protected fb: FormBuilder;
    protected checkoutDeliveryService: CheckoutDeliveryService;
    protected userService: UserService;
    protected userAddressService: UserAddressService;
    protected globalMessageService: GlobalMessageService;
    protected modalService: ModalService;
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
    addressForm: FormGroup;
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AddressFormComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AddressFormComponent, "cx-address-form", never, { "showCancelBtn": "showCancelBtn"; "addressData": "addressData"; "actionBtnLabel": "actionBtnLabel"; "cancelBtnLabel": "cancelBtnLabel"; "setAsDefaultField": "setAsDefaultField"; "showTitleCode": "showTitleCode"; }, { "submitAddress": "submitAddress"; "backToAddress": "backToAddress"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1mb3JtLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJhZGRyZXNzLWZvcm0uY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBZGRyZXNzLCBBZGRyZXNzVmFsaWRhdGlvbiwgQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsIENvdW50cnksIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLCBSZWdpb24sIFRpdGxlLCBVc2VyQWRkcmVzc1NlcnZpY2UsIFVzZXJTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBNb2RhbFJlZiwgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvaW5kZXgnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQWRkcmVzc0Zvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJvdGVjdGVkIGZiOiBGb3JtQnVpbGRlcjtcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCB1c2VyU2VydmljZTogVXNlclNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHVzZXJBZGRyZXNzU2VydmljZTogVXNlckFkZHJlc3NTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlO1xuICAgIGNvdW50cmllcyQ6IE9ic2VydmFibGU8Q291bnRyeVtdPjtcbiAgICB0aXRsZXMkOiBPYnNlcnZhYmxlPFRpdGxlW10+O1xuICAgIHJlZ2lvbnMkOiBPYnNlcnZhYmxlPFJlZ2lvbltdPjtcbiAgICBzZWxlY3RlZENvdW50cnkkOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPjtcbiAgICBhZGRyZXNzRGF0YTogQWRkcmVzcztcbiAgICBhY3Rpb25CdG5MYWJlbDogc3RyaW5nO1xuICAgIGNhbmNlbEJ0bkxhYmVsOiBzdHJpbmc7XG4gICAgc2V0QXNEZWZhdWx0RmllbGQ6IGJvb2xlYW47XG4gICAgc2hvd1RpdGxlQ29kZTogYm9vbGVhbjtcbiAgICBzaG93Q2FuY2VsQnRuOiBib29sZWFuO1xuICAgIHN1Ym1pdEFkZHJlc3M6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGJhY2tUb0FkZHJlc3M6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGFkZHJlc3NWZXJpZnlTdWI6IFN1YnNjcmlwdGlvbjtcbiAgICByZWdpb25zU3ViOiBTdWJzY3JpcHRpb247XG4gICAgc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmOiBNb2RhbFJlZjtcbiAgICBhZGRyZXNzRm9ybTogRm9ybUdyb3VwO1xuICAgIGNvbnN0cnVjdG9yKGZiOiBGb3JtQnVpbGRlciwgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLCB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHVzZXJBZGRyZXNzU2VydmljZTogVXNlckFkZHJlc3NTZXJ2aWNlLCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIHRpdGxlU2VsZWN0ZWQodGl0bGU6IFRpdGxlKTogdm9pZDtcbiAgICBjb3VudHJ5U2VsZWN0ZWQoY291bnRyeTogQ291bnRyeSk6IHZvaWQ7XG4gICAgcmVnaW9uU2VsZWN0ZWQocmVnaW9uOiBSZWdpb24pOiB2b2lkO1xuICAgIHRvZ2dsZURlZmF1bHRBZGRyZXNzKCk6IHZvaWQ7XG4gICAgYmFjaygpOiB2b2lkO1xuICAgIHZlcmlmeUFkZHJlc3MoKTogdm9pZDtcbiAgICBvcGVuU3VnZ2VzdGVkQWRkcmVzcyhyZXN1bHRzOiBBZGRyZXNzVmFsaWRhdGlvbik6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==