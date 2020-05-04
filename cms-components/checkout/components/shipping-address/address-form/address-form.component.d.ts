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
    countrySelected(country: Country): void;
    regionSelected(region: Region): void;
    toggleDefaultAddress(): void;
    back(): void;
    verifyAddress(): void;
    openSuggestedAddress(results: AddressValidation): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AddressFormComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AddressFormComponent, "cx-address-form", never, { "setAsDefaultField": "setAsDefaultField"; "showCancelBtn": "showCancelBtn"; "addressData": "addressData"; "actionBtnLabel": "actionBtnLabel"; "cancelBtnLabel": "cancelBtnLabel"; "showTitleCode": "showTitleCode"; }, { "submitAddress": "submitAddress"; "backToAddress": "backToAddress"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1mb3JtLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJhZGRyZXNzLWZvcm0uY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFkZHJlc3MsIEFkZHJlc3NWYWxpZGF0aW9uLCBDaGVja291dERlbGl2ZXJ5U2VydmljZSwgQ291bnRyeSwgR2xvYmFsTWVzc2FnZVNlcnZpY2UsIFJlZ2lvbiwgVGl0bGUsIFVzZXJBZGRyZXNzU2VydmljZSwgVXNlclNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1vZGFsUmVmLCBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9pbmRleCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBZGRyZXNzRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcm90ZWN0ZWQgZmI6IEZvcm1CdWlsZGVyO1xuICAgIHByb3RlY3RlZCBjaGVja291dERlbGl2ZXJ5U2VydmljZTogQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgdXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2U7XG4gICAgY291bnRyaWVzJDogT2JzZXJ2YWJsZTxDb3VudHJ5W10+O1xuICAgIHRpdGxlcyQ6IE9ic2VydmFibGU8VGl0bGVbXT47XG4gICAgcmVnaW9ucyQ6IE9ic2VydmFibGU8UmVnaW9uW10+O1xuICAgIHNlbGVjdGVkQ291bnRyeSQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+O1xuICAgIGFkZHJlc3NEYXRhOiBBZGRyZXNzO1xuICAgIGFjdGlvbkJ0bkxhYmVsOiBzdHJpbmc7XG4gICAgY2FuY2VsQnRuTGFiZWw6IHN0cmluZztcbiAgICBzZXRBc0RlZmF1bHRGaWVsZDogYm9vbGVhbjtcbiAgICBzaG93VGl0bGVDb2RlOiBib29sZWFuO1xuICAgIHNob3dDYW5jZWxCdG46IGJvb2xlYW47XG4gICAgc3VibWl0QWRkcmVzczogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgYmFja1RvQWRkcmVzczogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgYWRkcmVzc1ZlcmlmeVN1YjogU3Vic2NyaXB0aW9uO1xuICAgIHJlZ2lvbnNTdWI6IFN1YnNjcmlwdGlvbjtcbiAgICBzdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWY6IE1vZGFsUmVmO1xuICAgIGFkZHJlc3NGb3JtOiBGb3JtR3JvdXA7XG4gICAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyLCBjaGVja291dERlbGl2ZXJ5U2VydmljZTogQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgdXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2UsIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSwgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgY291bnRyeVNlbGVjdGVkKGNvdW50cnk6IENvdW50cnkpOiB2b2lkO1xuICAgIHJlZ2lvblNlbGVjdGVkKHJlZ2lvbjogUmVnaW9uKTogdm9pZDtcbiAgICB0b2dnbGVEZWZhdWx0QWRkcmVzcygpOiB2b2lkO1xuICAgIGJhY2soKTogdm9pZDtcbiAgICB2ZXJpZnlBZGRyZXNzKCk6IHZvaWQ7XG4gICAgb3BlblN1Z2dlc3RlZEFkZHJlc3MocmVzdWx0czogQWRkcmVzc1ZhbGlkYXRpb24pOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=