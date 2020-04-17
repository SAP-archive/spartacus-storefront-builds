import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Address, AddressValidation, CardType, CheckoutDeliveryService, CheckoutPaymentService, Country, GlobalMessageService, UserPaymentService, Region, UserAddressService, StateUtils } from '@spartacus/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Card } from '../../../../../shared/components/card/card.component';
import { ModalRef, ModalService } from '../../../../../shared/components/modal/index';
import { ICON_TYPE } from '../../../../misc/icon/index';
import * as ɵngcc0 from '@angular/core';
export declare class PaymentFormComponent implements OnInit, OnDestroy {
    protected checkoutPaymentService: CheckoutPaymentService;
    protected checkoutDeliveryService: CheckoutDeliveryService;
    protected userPaymentService: UserPaymentService;
    protected globalMessageService: GlobalMessageService;
    protected fb: FormBuilder;
    protected modalService: ModalService;
    protected userAddressService: UserAddressService;
    iconTypes: typeof ICON_TYPE;
    private checkboxSub;
    private addressVerifySub;
    suggestedAddressModalRef: ModalRef;
    months: string[];
    years: number[];
    cardTypes$: Observable<CardType[]>;
    shippingAddress$: Observable<Address>;
    countries$: Observable<Country[]>;
    loading$: Observable<StateUtils.LoaderState<void>>;
    sameAsShippingAddress: boolean;
    regions$: Observable<Region[]>;
    selectedCountry$: BehaviorSubject<string>;
    setAsDefaultField: boolean;
    paymentMethodsCount: number;
    goBack: EventEmitter<any>;
    closeForm: EventEmitter<any>;
    setPaymentDetails: EventEmitter<any>;
    paymentForm: FormGroup;
    billingAddressForm: FormGroup;
    constructor(checkoutPaymentService: CheckoutPaymentService, checkoutDeliveryService: CheckoutDeliveryService, userPaymentService: UserPaymentService, globalMessageService: GlobalMessageService, fb: FormBuilder, modalService: ModalService, userAddressService: UserAddressService);
    ngOnInit(): void;
    expMonthAndYear(): void;
    toggleDefaultPaymentMethod(): void;
    paymentSelected(card: CardType): void;
    monthSelected(month: string): void;
    yearSelected(year: number): void;
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
    countrySelected(country: Country): void;
    regionSelected(region: Region): void;
    next(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PaymentFormComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PaymentFormComponent, "cx-payment-form", never, { "setAsDefaultField": "setAsDefaultField"; "paymentMethodsCount": "paymentMethodsCount"; }, { "goBack": "goBack"; "closeForm": "closeForm"; "setPaymentDetails": "setPaymentDetails"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1mb3JtLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJwYXltZW50LWZvcm0uY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFkZHJlc3MsIEFkZHJlc3NWYWxpZGF0aW9uLCBDYXJkVHlwZSwgQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsIENoZWNrb3V0UGF5bWVudFNlcnZpY2UsIENvdW50cnksIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLCBVc2VyUGF5bWVudFNlcnZpY2UsIFJlZ2lvbiwgVXNlckFkZHJlc3NTZXJ2aWNlLCBTdGF0ZVV0aWxzIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kYWxSZWYsIE1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL2luZGV4JztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uLy4uL21pc2MvaWNvbi9pbmRleCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQYXltZW50Rm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRQYXltZW50U2VydmljZTogQ2hlY2tvdXRQYXltZW50U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCB1c2VyUGF5bWVudFNlcnZpY2U6IFVzZXJQYXltZW50U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBmYjogRm9ybUJ1aWxkZXI7XG4gICAgcHJvdGVjdGVkIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCB1c2VyQWRkcmVzc1NlcnZpY2U6IFVzZXJBZGRyZXNzU2VydmljZTtcbiAgICBpY29uVHlwZXM6IHR5cGVvZiBJQ09OX1RZUEU7XG4gICAgcHJpdmF0ZSBjaGVja2JveFN1YjtcbiAgICBwcml2YXRlIGFkZHJlc3NWZXJpZnlTdWI7XG4gICAgc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmOiBNb2RhbFJlZjtcbiAgICBtb250aHM6IHN0cmluZ1tdO1xuICAgIHllYXJzOiBudW1iZXJbXTtcbiAgICBjYXJkVHlwZXMkOiBPYnNlcnZhYmxlPENhcmRUeXBlW10+O1xuICAgIHNoaXBwaW5nQWRkcmVzcyQ6IE9ic2VydmFibGU8QWRkcmVzcz47XG4gICAgY291bnRyaWVzJDogT2JzZXJ2YWJsZTxDb3VudHJ5W10+O1xuICAgIGxvYWRpbmckOiBPYnNlcnZhYmxlPFN0YXRlVXRpbHMuTG9hZGVyU3RhdGU8dm9pZD4+O1xuICAgIHNhbWVBc1NoaXBwaW5nQWRkcmVzczogYm9vbGVhbjtcbiAgICByZWdpb25zJDogT2JzZXJ2YWJsZTxSZWdpb25bXT47XG4gICAgc2VsZWN0ZWRDb3VudHJ5JDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz47XG4gICAgc2V0QXNEZWZhdWx0RmllbGQ6IGJvb2xlYW47XG4gICAgcGF5bWVudE1ldGhvZHNDb3VudDogbnVtYmVyO1xuICAgIGdvQmFjazogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgY2xvc2VGb3JtOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBzZXRQYXltZW50RGV0YWlsczogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgcGF5bWVudEZvcm06IEZvcm1Hcm91cDtcbiAgICBiaWxsaW5nQWRkcmVzc0Zvcm06IEZvcm1Hcm91cDtcbiAgICBjb25zdHJ1Y3RvcihjaGVja291dFBheW1lbnRTZXJ2aWNlOiBDaGVja291dFBheW1lbnRTZXJ2aWNlLCBjaGVja291dERlbGl2ZXJ5U2VydmljZTogQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsIHVzZXJQYXltZW50U2VydmljZTogVXNlclBheW1lbnRTZXJ2aWNlLCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsIGZiOiBGb3JtQnVpbGRlciwgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsIHVzZXJBZGRyZXNzU2VydmljZTogVXNlckFkZHJlc3NTZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIGV4cE1vbnRoQW5kWWVhcigpOiB2b2lkO1xuICAgIHRvZ2dsZURlZmF1bHRQYXltZW50TWV0aG9kKCk6IHZvaWQ7XG4gICAgcGF5bWVudFNlbGVjdGVkKGNhcmQ6IENhcmRUeXBlKTogdm9pZDtcbiAgICBtb250aFNlbGVjdGVkKG1vbnRoOiBzdHJpbmcpOiB2b2lkO1xuICAgIHllYXJTZWxlY3RlZCh5ZWFyOiBudW1iZXIpOiB2b2lkO1xuICAgIHRvZ2dsZVNhbWVBc1NoaXBwaW5nQWRkcmVzcygpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBzaGlwcGluZyBhZGRyZXNzIGNhbiBhbHNvIGJlIGEgYmlsbGluZyBhZGRyZXNzXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgUGF5bWVudEZvcm1Db21wb25lbnRcbiAgICAgKi9cbiAgICBzaG93U2FtZUFzU2hpcHBpbmdBZGRyZXNzQ2hlY2tib3goKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBnZXRBZGRyZXNzQ2FyZENvbnRlbnQoYWRkcmVzczogQWRkcmVzcyk6IENhcmQ7XG4gICAgb3BlblN1Z2dlc3RlZEFkZHJlc3MocmVzdWx0czogQWRkcmVzc1ZhbGlkYXRpb24pOiB2b2lkO1xuICAgIGNsb3NlKCk6IHZvaWQ7XG4gICAgYmFjaygpOiB2b2lkO1xuICAgIHZlcmlmeUFkZHJlc3MoKTogdm9pZDtcbiAgICBjb3VudHJ5U2VsZWN0ZWQoY291bnRyeTogQ291bnRyeSk6IHZvaWQ7XG4gICAgcmVnaW9uU2VsZWN0ZWQocmVnaW9uOiBSZWdpb24pOiB2b2lkO1xuICAgIG5leHQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19