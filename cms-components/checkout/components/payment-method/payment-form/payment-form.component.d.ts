import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Address, AddressValidation, CardType, CheckoutDeliveryService, CheckoutPaymentService, Country, GlobalMessageService, LoaderState, UserPaymentService, Region, UserAddressService } from '@spartacus/core';
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
    loading$: Observable<LoaderState<void>>;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1mb3JtLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJwYXltZW50LWZvcm0uY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFkZHJlc3MsIEFkZHJlc3NWYWxpZGF0aW9uLCBDYXJkVHlwZSwgQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsIENoZWNrb3V0UGF5bWVudFNlcnZpY2UsIENvdW50cnksIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLCBMb2FkZXJTdGF0ZSwgVXNlclBheW1lbnRTZXJ2aWNlLCBSZWdpb24sIFVzZXJBZGRyZXNzU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsUmVmLCBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9pbmRleCc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi8uLi9taXNjL2ljb24vaW5kZXgnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUGF5bWVudEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0UGF5bWVudFNlcnZpY2U6IENoZWNrb3V0UGF5bWVudFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgdXNlclBheW1lbnRTZXJ2aWNlOiBVc2VyUGF5bWVudFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgZmI6IEZvcm1CdWlsZGVyO1xuICAgIHByb3RlY3RlZCBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgdXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2U7XG4gICAgaWNvblR5cGVzOiB0eXBlb2YgSUNPTl9UWVBFO1xuICAgIHByaXZhdGUgY2hlY2tib3hTdWI7XG4gICAgcHJpdmF0ZSBhZGRyZXNzVmVyaWZ5U3ViO1xuICAgIHN1Z2dlc3RlZEFkZHJlc3NNb2RhbFJlZjogTW9kYWxSZWY7XG4gICAgbW9udGhzOiBzdHJpbmdbXTtcbiAgICB5ZWFyczogbnVtYmVyW107XG4gICAgY2FyZFR5cGVzJDogT2JzZXJ2YWJsZTxDYXJkVHlwZVtdPjtcbiAgICBzaGlwcGluZ0FkZHJlc3MkOiBPYnNlcnZhYmxlPEFkZHJlc3M+O1xuICAgIGNvdW50cmllcyQ6IE9ic2VydmFibGU8Q291bnRyeVtdPjtcbiAgICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxMb2FkZXJTdGF0ZTx2b2lkPj47XG4gICAgc2FtZUFzU2hpcHBpbmdBZGRyZXNzOiBib29sZWFuO1xuICAgIHJlZ2lvbnMkOiBPYnNlcnZhYmxlPFJlZ2lvbltdPjtcbiAgICBzZWxlY3RlZENvdW50cnkkOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPjtcbiAgICBzZXRBc0RlZmF1bHRGaWVsZDogYm9vbGVhbjtcbiAgICBwYXltZW50TWV0aG9kc0NvdW50OiBudW1iZXI7XG4gICAgZ29CYWNrOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBjbG9zZUZvcm06IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIHNldFBheW1lbnREZXRhaWxzOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBwYXltZW50Rm9ybTogRm9ybUdyb3VwO1xuICAgIGJpbGxpbmdBZGRyZXNzRm9ybTogRm9ybUdyb3VwO1xuICAgIGNvbnN0cnVjdG9yKGNoZWNrb3V0UGF5bWVudFNlcnZpY2U6IENoZWNrb3V0UGF5bWVudFNlcnZpY2UsIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZSwgdXNlclBheW1lbnRTZXJ2aWNlOiBVc2VyUGF5bWVudFNlcnZpY2UsIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSwgZmI6IEZvcm1CdWlsZGVyLCBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSwgdXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgZXhwTW9udGhBbmRZZWFyKCk6IHZvaWQ7XG4gICAgdG9nZ2xlRGVmYXVsdFBheW1lbnRNZXRob2QoKTogdm9pZDtcbiAgICBwYXltZW50U2VsZWN0ZWQoY2FyZDogQ2FyZFR5cGUpOiB2b2lkO1xuICAgIG1vbnRoU2VsZWN0ZWQobW9udGg6IHN0cmluZyk6IHZvaWQ7XG4gICAgeWVhclNlbGVjdGVkKHllYXI6IG51bWJlcik6IHZvaWQ7XG4gICAgdG9nZ2xlU2FtZUFzU2hpcHBpbmdBZGRyZXNzKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIHNoaXBwaW5nIGFkZHJlc3MgY2FuIGFsc28gYmUgYSBiaWxsaW5nIGFkZHJlc3NcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBQYXltZW50Rm9ybUNvbXBvbmVudFxuICAgICAqL1xuICAgIHNob3dTYW1lQXNTaGlwcGluZ0FkZHJlc3NDaGVja2JveCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIGdldEFkZHJlc3NDYXJkQ29udGVudChhZGRyZXNzOiBBZGRyZXNzKTogQ2FyZDtcbiAgICBvcGVuU3VnZ2VzdGVkQWRkcmVzcyhyZXN1bHRzOiBBZGRyZXNzVmFsaWRhdGlvbik6IHZvaWQ7XG4gICAgY2xvc2UoKTogdm9pZDtcbiAgICBiYWNrKCk6IHZvaWQ7XG4gICAgdmVyaWZ5QWRkcmVzcygpOiB2b2lkO1xuICAgIGNvdW50cnlTZWxlY3RlZChjb3VudHJ5OiBDb3VudHJ5KTogdm9pZDtcbiAgICByZWdpb25TZWxlY3RlZChyZWdpb246IFJlZ2lvbik6IHZvaWQ7XG4gICAgbmV4dCgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=