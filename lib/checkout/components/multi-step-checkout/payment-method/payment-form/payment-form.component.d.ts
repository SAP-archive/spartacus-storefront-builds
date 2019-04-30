import { OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CheckoutService, CardType, Address, Country, UserService, GlobalMessageService, AddressValidation } from '@spartacus/core';
import { Observable } from 'rxjs';
import { Card } from '../../../../../ui/components/card/card.component';
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
    infoIconImgSrc: string;
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
