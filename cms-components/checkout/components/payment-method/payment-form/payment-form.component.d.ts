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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PaymentFormComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PaymentFormComponent, "cx-payment-form", never, { "setAsDefaultField": "setAsDefaultField"; "paymentMethodsCount": "paymentMethodsCount"; }, { "goBack": "goBack"; "closeForm": "closeForm"; "setPaymentDetails": "setPaymentDetails"; }, never, never>;
}
export {};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1mb3JtLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJwYXltZW50LWZvcm0uY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0RBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFkZHJlc3MsIEFkZHJlc3NWYWxpZGF0aW9uLCBDYXJkVHlwZSwgQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsIENoZWNrb3V0UGF5bWVudFNlcnZpY2UsIENvdW50cnksIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLCBMb2FkZXJTdGF0ZSwgVXNlclBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsUmVmLCBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9pbmRleCc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi8uLi9taXNjL2ljb24vaW5kZXgnO1xuZGVjbGFyZSB0eXBlIG1vbnRoVHlwZSA9IHtcbiAgICBpZDogbnVtYmVyO1xuICAgIG5hbWU6IHN0cmluZztcbn07XG5kZWNsYXJlIHR5cGUgeWVhclR5cGUgPSB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBuYW1lOiBudW1iZXI7XG59O1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUGF5bWVudEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0UGF5bWVudFNlcnZpY2U6IENoZWNrb3V0UGF5bWVudFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgdXNlclBheW1lbnRTZXJ2aWNlOiBVc2VyUGF5bWVudFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZTtcbiAgICBwcml2YXRlIGZiO1xuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlO1xuICAgIGljb25UeXBlczogdHlwZW9mIElDT05fVFlQRTtcbiAgICBwcml2YXRlIGNoZWNrYm94U3ViO1xuICAgIHByaXZhdGUgYWRkcmVzc1ZlcmlmeVN1YjtcbiAgICBzdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWY6IE1vZGFsUmVmO1xuICAgIG1vbnRoczogbW9udGhUeXBlW107XG4gICAgeWVhcnM6IHllYXJUeXBlW107XG4gICAgY2FyZFR5cGVzJDogT2JzZXJ2YWJsZTxDYXJkVHlwZVtdPjtcbiAgICBzaGlwcGluZ0FkZHJlc3MkOiBPYnNlcnZhYmxlPEFkZHJlc3M+O1xuICAgIGNvdW50cmllcyQ6IE9ic2VydmFibGU8Q291bnRyeVtdPjtcbiAgICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxMb2FkZXJTdGF0ZTx2b2lkPj47XG4gICAgc2FtZUFzU2hpcHBpbmdBZGRyZXNzOiBib29sZWFuO1xuICAgIHNldEFzRGVmYXVsdEZpZWxkOiBib29sZWFuO1xuICAgIHBheW1lbnRNZXRob2RzQ291bnQ6IG51bWJlcjtcbiAgICBnb0JhY2s6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGNsb3NlRm9ybTogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgc2V0UGF5bWVudERldGFpbHM6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIHBheW1lbnQ6IEZvcm1Hcm91cDtcbiAgICBiaWxsaW5nQWRkcmVzczogRm9ybUdyb3VwO1xuICAgIGNvbnN0cnVjdG9yKGNoZWNrb3V0UGF5bWVudFNlcnZpY2U6IENoZWNrb3V0UGF5bWVudFNlcnZpY2UsIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZSwgdXNlclBheW1lbnRTZXJ2aWNlOiBVc2VyUGF5bWVudFNlcnZpY2UsIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSwgZmI6IEZvcm1CdWlsZGVyLCBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBleHBNb250aEFuZFllYXIoKTogdm9pZDtcbiAgICB0b2dnbGVEZWZhdWx0UGF5bWVudE1ldGhvZCgpOiB2b2lkO1xuICAgIHBheW1lbnRTZWxlY3RlZChjYXJkOiBDYXJkVHlwZSk6IHZvaWQ7XG4gICAgbW9udGhTZWxlY3RlZChtb250aDogbW9udGhUeXBlKTogdm9pZDtcbiAgICB5ZWFyU2VsZWN0ZWQoeWVhcjogeWVhclR5cGUpOiB2b2lkO1xuICAgIHRvZ2dsZVNhbWVBc1NoaXBwaW5nQWRkcmVzcygpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBzaGlwcGluZyBhZGRyZXNzIGNhbiBhbHNvIGJlIGEgYmlsbGluZyBhZGRyZXNzXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgUGF5bWVudEZvcm1Db21wb25lbnRcbiAgICAgKi9cbiAgICBzaG93U2FtZUFzU2hpcHBpbmdBZGRyZXNzQ2hlY2tib3goKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBnZXRBZGRyZXNzQ2FyZENvbnRlbnQoYWRkcmVzczogQWRkcmVzcyk6IENhcmQ7XG4gICAgb3BlblN1Z2dlc3RlZEFkZHJlc3MocmVzdWx0czogQWRkcmVzc1ZhbGlkYXRpb24pOiB2b2lkO1xuICAgIGNsb3NlKCk6IHZvaWQ7XG4gICAgYmFjaygpOiB2b2lkO1xuICAgIHZlcmlmeUFkZHJlc3MoKTogdm9pZDtcbiAgICBuZXh0KCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbmV4cG9ydCB7fTtcbiJdfQ==