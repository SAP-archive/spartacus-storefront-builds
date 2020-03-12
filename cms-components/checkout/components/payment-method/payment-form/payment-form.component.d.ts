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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1mb3JtLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJwYXltZW50LWZvcm0uY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNEQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBZGRyZXNzLCBBZGRyZXNzVmFsaWRhdGlvbiwgQ2FyZFR5cGUsIENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLCBDaGVja291dFBheW1lbnRTZXJ2aWNlLCBDb3VudHJ5LCBHbG9iYWxNZXNzYWdlU2VydmljZSwgTG9hZGVyU3RhdGUsIFVzZXJQYXltZW50U2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RhbFJlZiwgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvaW5kZXgnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vLi4vbWlzYy9pY29uL2luZGV4JztcbmRlY2xhcmUgdHlwZSBtb250aFR5cGUgPSB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBuYW1lOiBzdHJpbmc7XG59O1xuZGVjbGFyZSB0eXBlIHllYXJUeXBlID0ge1xuICAgIGlkOiBudW1iZXI7XG4gICAgbmFtZTogbnVtYmVyO1xufTtcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFBheW1lbnRGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByb3RlY3RlZCBjaGVja291dFBheW1lbnRTZXJ2aWNlOiBDaGVja291dFBheW1lbnRTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjaGVja291dERlbGl2ZXJ5U2VydmljZTogQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHVzZXJQYXltZW50U2VydmljZTogVXNlclBheW1lbnRTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2U7XG4gICAgcHJpdmF0ZSBmYjtcbiAgICBwcml2YXRlIG1vZGFsU2VydmljZTtcbiAgICBpY29uVHlwZXM6IHR5cGVvZiBJQ09OX1RZUEU7XG4gICAgcHJpdmF0ZSBjaGVja2JveFN1YjtcbiAgICBwcml2YXRlIGFkZHJlc3NWZXJpZnlTdWI7XG4gICAgc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmOiBNb2RhbFJlZjtcbiAgICBtb250aHM6IG1vbnRoVHlwZVtdO1xuICAgIHllYXJzOiB5ZWFyVHlwZVtdO1xuICAgIGNhcmRUeXBlcyQ6IE9ic2VydmFibGU8Q2FyZFR5cGVbXT47XG4gICAgc2hpcHBpbmdBZGRyZXNzJDogT2JzZXJ2YWJsZTxBZGRyZXNzPjtcbiAgICBjb3VudHJpZXMkOiBPYnNlcnZhYmxlPENvdW50cnlbXT47XG4gICAgbG9hZGluZyQ6IE9ic2VydmFibGU8TG9hZGVyU3RhdGU8dm9pZD4+O1xuICAgIHNhbWVBc1NoaXBwaW5nQWRkcmVzczogYm9vbGVhbjtcbiAgICBzZXRBc0RlZmF1bHRGaWVsZDogYm9vbGVhbjtcbiAgICBwYXltZW50TWV0aG9kc0NvdW50OiBudW1iZXI7XG4gICAgZ29CYWNrOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBjbG9zZUZvcm06IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIHNldFBheW1lbnREZXRhaWxzOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBwYXltZW50OiBGb3JtR3JvdXA7XG4gICAgYmlsbGluZ0FkZHJlc3M6IEZvcm1Hcm91cDtcbiAgICBjb25zdHJ1Y3RvcihjaGVja291dFBheW1lbnRTZXJ2aWNlOiBDaGVja291dFBheW1lbnRTZXJ2aWNlLCBjaGVja291dERlbGl2ZXJ5U2VydmljZTogQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsIHVzZXJQYXltZW50U2VydmljZTogVXNlclBheW1lbnRTZXJ2aWNlLCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsIGZiOiBGb3JtQnVpbGRlciwgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgZXhwTW9udGhBbmRZZWFyKCk6IHZvaWQ7XG4gICAgdG9nZ2xlRGVmYXVsdFBheW1lbnRNZXRob2QoKTogdm9pZDtcbiAgICBwYXltZW50U2VsZWN0ZWQoY2FyZDogQ2FyZFR5cGUpOiB2b2lkO1xuICAgIG1vbnRoU2VsZWN0ZWQobW9udGg6IG1vbnRoVHlwZSk6IHZvaWQ7XG4gICAgeWVhclNlbGVjdGVkKHllYXI6IHllYXJUeXBlKTogdm9pZDtcbiAgICB0b2dnbGVTYW1lQXNTaGlwcGluZ0FkZHJlc3MoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgc2hpcHBpbmcgYWRkcmVzcyBjYW4gYWxzbyBiZSBhIGJpbGxpbmcgYWRkcmVzc1xuICAgICAqXG4gICAgICogQG1lbWJlcm9mIFBheW1lbnRGb3JtQ29tcG9uZW50XG4gICAgICovXG4gICAgc2hvd1NhbWVBc1NoaXBwaW5nQWRkcmVzc0NoZWNrYm94KCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgZ2V0QWRkcmVzc0NhcmRDb250ZW50KGFkZHJlc3M6IEFkZHJlc3MpOiBDYXJkO1xuICAgIG9wZW5TdWdnZXN0ZWRBZGRyZXNzKHJlc3VsdHM6IEFkZHJlc3NWYWxpZGF0aW9uKTogdm9pZDtcbiAgICBjbG9zZSgpOiB2b2lkO1xuICAgIGJhY2soKTogdm9pZDtcbiAgICB2ZXJpZnlBZGRyZXNzKCk6IHZvaWQ7XG4gICAgbmV4dCgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG5leHBvcnQge307XG4iXX0=