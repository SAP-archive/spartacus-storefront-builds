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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AddressFormComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AddressFormComponent, "cx-address-form", never, { "showCancelBtn": "showCancelBtn"; "addressData": "addressData"; "actionBtnLabel": "actionBtnLabel"; "cancelBtnLabel": "cancelBtnLabel"; "setAsDefaultField": "setAsDefaultField"; "showTitleCode": "showTitleCode"; }, { "submitAddress": "submitAddress"; "backToAddress": "backToAddress"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1mb3JtLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJhZGRyZXNzLWZvcm0uY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBZGRyZXNzLCBBZGRyZXNzVmFsaWRhdGlvbiwgQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsIENvdW50cnksIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLCBSZWdpb24sIFRpdGxlLCBVc2VyQWRkcmVzc1NlcnZpY2UsIFVzZXJTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBNb2RhbFJlZiwgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvaW5kZXgnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQWRkcmVzc0Zvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBmYjtcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCB1c2VyU2VydmljZTogVXNlclNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHVzZXJBZGRyZXNzU2VydmljZTogVXNlckFkZHJlc3NTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2U7XG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U7XG4gICAgY291bnRyaWVzJDogT2JzZXJ2YWJsZTxDb3VudHJ5W10+O1xuICAgIHRpdGxlcyQ6IE9ic2VydmFibGU8VGl0bGVbXT47XG4gICAgcmVnaW9ucyQ6IE9ic2VydmFibGU8UmVnaW9uW10+O1xuICAgIHNlbGVjdGVkQ291bnRyeSQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+O1xuICAgIGFkZHJlc3NEYXRhOiBBZGRyZXNzO1xuICAgIGFjdGlvbkJ0bkxhYmVsOiBzdHJpbmc7XG4gICAgY2FuY2VsQnRuTGFiZWw6IHN0cmluZztcbiAgICBzZXRBc0RlZmF1bHRGaWVsZDogYm9vbGVhbjtcbiAgICBzaG93VGl0bGVDb2RlOiBib29sZWFuO1xuICAgIHNob3dDYW5jZWxCdG46IGJvb2xlYW47XG4gICAgc3VibWl0QWRkcmVzczogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgYmFja1RvQWRkcmVzczogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgYWRkcmVzc1ZlcmlmeVN1YjogU3Vic2NyaXB0aW9uO1xuICAgIHJlZ2lvbnNTdWI6IFN1YnNjcmlwdGlvbjtcbiAgICBzdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWY6IE1vZGFsUmVmO1xuICAgIGFkZHJlc3M6IEZvcm1Hcm91cDtcbiAgICBjb25zdHJ1Y3RvcihmYjogRm9ybUJ1aWxkZXIsIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZSwgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCB1c2VyQWRkcmVzc1NlcnZpY2U6IFVzZXJBZGRyZXNzU2VydmljZSwgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLCBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICB0aXRsZVNlbGVjdGVkKHRpdGxlOiBUaXRsZSk6IHZvaWQ7XG4gICAgY291bnRyeVNlbGVjdGVkKGNvdW50cnk6IENvdW50cnkpOiB2b2lkO1xuICAgIHJlZ2lvblNlbGVjdGVkKHJlZ2lvbjogUmVnaW9uKTogdm9pZDtcbiAgICB0b2dnbGVEZWZhdWx0QWRkcmVzcygpOiB2b2lkO1xuICAgIGJhY2soKTogdm9pZDtcbiAgICB2ZXJpZnlBZGRyZXNzKCk6IHZvaWQ7XG4gICAgb3BlblN1Z2dlc3RlZEFkZHJlc3MocmVzdWx0czogQWRkcmVzc1ZhbGlkYXRpb24pOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=