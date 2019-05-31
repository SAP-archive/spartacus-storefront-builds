import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Address, AddressValidation, CheckoutService, Country, GlobalMessageService, Region, Title, UserService } from '@spartacus/core';
import { ModalRef, ModalService } from '../../../../../shared/components/modal/index';
export declare class AddressFormComponent implements OnInit, OnDestroy {
    private fb;
    protected checkoutService: CheckoutService;
    protected userService: UserService;
    protected globalMessageService: GlobalMessageService;
    private modalService;
    countries$: Observable<Country[]>;
    titles$: Observable<Title[]>;
    regions$: Observable<Region[]>;
    addressData: Address;
    actionBtnLabel: string;
    cancelBtnLabel: string;
    setAsDefaultField: boolean;
    showTitleCode: boolean;
    showCancelBtn: boolean;
    submitAddress: EventEmitter<any>;
    backToAddress: EventEmitter<any>;
    addressVerifySub: Subscription;
    suggestedAddressModalRef: ModalRef;
    address: FormGroup;
    constructor(fb: FormBuilder, checkoutService: CheckoutService, userService: UserService, globalMessageService: GlobalMessageService, modalService: ModalService);
    ngOnInit(): void;
    titleSelected(title: Title): void;
    countrySelected(country: Country): void;
    regionSelected(region: Region): void;
    toggleDefaultAddress(): void;
    back(): void;
    verifyAddress(): void;
    openSuggestedAddress(results: AddressValidation): void;
    ngOnDestroy(): void;
}
