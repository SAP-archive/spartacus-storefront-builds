import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Address, AddressValidation, CardType, CheckoutService, Country, GlobalMessageService, UserService } from '@spartacus/core';
import { ICON_TYPE } from '../../../../../cms-components/misc/icon/index';
import { Card } from '../../../../../shared/components/card/card.component';
declare type monthType = {
    id: number;
    name: string;
};
declare type yearType = {
    id: number;
    name: number;
};
export declare class PaymentFormComponent implements OnInit, OnDestroy {
    protected checkoutService: CheckoutService;
    protected userService: UserService;
    protected globalMessageService: GlobalMessageService;
    private fb;
    private modalService;
    iconTypes: typeof ICON_TYPE;
    private checkboxSub;
    private addressVerifySub;
    suggestedAddressModalRef: NgbModalRef;
    months: monthType[];
    years: yearType[];
    cardTypes$: Observable<CardType[]>;
    shippingAddress$: Observable<Address>;
    countries$: Observable<Country[]>;
    sameAsShippingAddress: boolean;
    paymentMethodsCount: number;
    goBack: EventEmitter<any>;
    closeForm: EventEmitter<any>;
    addPaymentInfo: EventEmitter<any>;
    payment: FormGroup;
    billingAddress: FormGroup;
    constructor(checkoutService: CheckoutService, userService: UserService, globalMessageService: GlobalMessageService, fb: FormBuilder, modalService: NgbModal);
    ngOnInit(): void;
    expMonthAndYear(): void;
    toggleDefaultPaymentMethod(): void;
    paymentSelected(card: CardType): void;
    monthSelected(month: monthType): void;
    yearSelected(year: yearType): void;
    toggleSameAsShippingAddress(): void;
    isContinueButtonDisabled(): boolean;
    /**
     * Check if the shipping address can also be a billing address
     *
     * @memberof PaymentFormComponent
     */
    showSameAsShippingAddressCheckbox(): Observable<boolean>;
    getAddressCardContent(address: Address): Card;
    openSuggestedAddress(results: AddressValidation): void;
    close(): void;
    back(): void;
    verifyAddress(): void;
    next(): void;
    ngOnDestroy(): void;
}
export {};
