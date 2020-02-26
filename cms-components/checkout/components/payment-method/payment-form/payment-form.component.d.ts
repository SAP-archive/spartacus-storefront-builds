import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Address, AddressValidation, CardType, CheckoutDeliveryService, CheckoutPaymentService, Country, GlobalMessageService, LoaderState, UserPaymentService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { Card } from '../../../../../shared/components/card/card.component';
import { ModalRef, ModalService } from '../../../../../shared/components/modal/index';
import { ICON_TYPE } from '../../../../misc/icon/index';
import * as ɵngcc0 from '@angular/core';
declare type monthType = {
    id: number;
    name: string;
};
declare type yearType = {
    id: number;
    name: number;
};
export declare class PaymentFormComponent implements OnInit, OnDestroy {
    protected checkoutPaymentService: CheckoutPaymentService;
    protected checkoutDeliveryService: CheckoutDeliveryService;
    protected userPaymentService: UserPaymentService;
    protected globalMessageService: GlobalMessageService;
    private fb;
    private modalService;
    iconTypes: typeof ICON_TYPE;
    private checkboxSub;
    private addressVerifySub;
    suggestedAddressModalRef: ModalRef;
    months: monthType[];
    years: yearType[];
    cardTypes$: Observable<CardType[]>;
    shippingAddress$: Observable<Address>;
    countries$: Observable<Country[]>;
    loading$: Observable<LoaderState<void>>;
    sameAsShippingAddress: boolean;
    setAsDefaultField: boolean;
    paymentMethodsCount: number;
    goBack: EventEmitter<any>;
    closeForm: EventEmitter<any>;
    setPaymentDetails: EventEmitter<any>;
    payment: FormGroup;
    billingAddress: FormGroup;
    constructor(checkoutPaymentService: CheckoutPaymentService, checkoutDeliveryService: CheckoutDeliveryService, userPaymentService: UserPaymentService, globalMessageService: GlobalMessageService, fb: FormBuilder, modalService: ModalService);
    ngOnInit(): void;
    expMonthAndYear(): void;
    toggleDefaultPaymentMethod(): void;
    paymentSelected(card: CardType): void;
    monthSelected(month: monthType): void;
    yearSelected(year: yearType): void;
    toggleSameAsShippingAddress(): void;
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PaymentFormComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PaymentFormComponent, "cx-payment-form", never, {
    "setAsDefaultField": "setAsDefaultField";
    "paymentMethodsCount": "paymentMethodsCount";
}, {
    "goBack": "goBack";
    "closeForm": "closeForm";
    "setPaymentDetails": "setPaymentDetails";
}, never>;
}
export {};

//# sourceMappingURL=payment-form.component.d.ts.map