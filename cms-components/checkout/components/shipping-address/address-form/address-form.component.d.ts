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
    addresses$: Observable<Address[]>;
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

//# sourceMappingURL=address-form.component.d.ts.map