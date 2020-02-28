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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1mb3JtLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJhZGRyZXNzLWZvcm0uY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0E7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFkZHJlc3MsIEFkZHJlc3NWYWxpZGF0aW9uLCBDaGVja291dERlbGl2ZXJ5U2VydmljZSwgQ291bnRyeSwgR2xvYmFsTWVzc2FnZVNlcnZpY2UsIFJlZ2lvbiwgVGl0bGUsIFVzZXJBZGRyZXNzU2VydmljZSwgVXNlclNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1vZGFsUmVmLCBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9pbmRleCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBZGRyZXNzRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIGZiO1xuICAgIHByb3RlY3RlZCBjaGVja291dERlbGl2ZXJ5U2VydmljZTogQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgdXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZTtcbiAgICBwcml2YXRlIG1vZGFsU2VydmljZTtcbiAgICBjb3VudHJpZXMkOiBPYnNlcnZhYmxlPENvdW50cnlbXT47XG4gICAgdGl0bGVzJDogT2JzZXJ2YWJsZTxUaXRsZVtdPjtcbiAgICByZWdpb25zJDogT2JzZXJ2YWJsZTxSZWdpb25bXT47XG4gICAgc2VsZWN0ZWRDb3VudHJ5JDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz47XG4gICAgYWRkcmVzc0RhdGE6IEFkZHJlc3M7XG4gICAgYWN0aW9uQnRuTGFiZWw6IHN0cmluZztcbiAgICBjYW5jZWxCdG5MYWJlbDogc3RyaW5nO1xuICAgIHNldEFzRGVmYXVsdEZpZWxkOiBib29sZWFuO1xuICAgIHNob3dUaXRsZUNvZGU6IGJvb2xlYW47XG4gICAgc2hvd0NhbmNlbEJ0bjogYm9vbGVhbjtcbiAgICBzdWJtaXRBZGRyZXNzOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBiYWNrVG9BZGRyZXNzOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBhZGRyZXNzVmVyaWZ5U3ViOiBTdWJzY3JpcHRpb247XG4gICAgcmVnaW9uc1N1YjogU3Vic2NyaXB0aW9uO1xuICAgIHN1Z2dlc3RlZEFkZHJlc3NNb2RhbFJlZjogTW9kYWxSZWY7XG4gICAgYWRkcmVzczogRm9ybUdyb3VwO1xuICAgIGNvbnN0cnVjdG9yKGZiOiBGb3JtQnVpbGRlciwgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLCB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHVzZXJBZGRyZXNzU2VydmljZTogVXNlckFkZHJlc3NTZXJ2aWNlLCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIHRpdGxlU2VsZWN0ZWQodGl0bGU6IFRpdGxlKTogdm9pZDtcbiAgICBjb3VudHJ5U2VsZWN0ZWQoY291bnRyeTogQ291bnRyeSk6IHZvaWQ7XG4gICAgcmVnaW9uU2VsZWN0ZWQocmVnaW9uOiBSZWdpb24pOiB2b2lkO1xuICAgIHRvZ2dsZURlZmF1bHRBZGRyZXNzKCk6IHZvaWQ7XG4gICAgYmFjaygpOiB2b2lkO1xuICAgIHZlcmlmeUFkZHJlc3MoKTogdm9pZDtcbiAgICBvcGVuU3VnZ2VzdGVkQWRkcmVzcyhyZXN1bHRzOiBBZGRyZXNzVmFsaWRhdGlvbik6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==