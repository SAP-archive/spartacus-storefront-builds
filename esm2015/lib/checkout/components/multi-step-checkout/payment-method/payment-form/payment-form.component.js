/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CheckoutService, GlobalMessageService, GlobalMessageType, UserService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ICON_TYPE } from '../../../../../../cms-components/misc/icon/index';
// tslint:disable-line
import { SuggestedAddressDialogComponent } from '../../shipping-address/address-form/suggested-addresses-dialog/suggested-addresses-dialog.component'; // tslint:disable-line
export class PaymentFormComponent {
    /**
     * @param {?} checkoutService
     * @param {?} userService
     * @param {?} globalMessageService
     * @param {?} fb
     * @param {?} modalService
     */
    constructor(checkoutService, userService, globalMessageService, fb, modalService) {
        this.checkoutService = checkoutService;
        this.userService = userService;
        this.globalMessageService = globalMessageService;
        this.fb = fb;
        this.modalService = modalService;
        this.iconTypes = ICON_TYPE;
        this.months = [];
        this.years = [];
        this.sameAsShippingAddress = true;
        this.goBack = new EventEmitter();
        this.closeForm = new EventEmitter();
        this.addPaymentInfo = new EventEmitter();
        this.payment = this.fb.group({
            defaultPayment: [false],
            accountHolderName: ['', Validators.required],
            cardNumber: ['', Validators.required],
            cardType: this.fb.group({
                code: ['', Validators.required],
            }),
            expiryMonth: ['', Validators.required],
            expiryYear: ['', Validators.required],
            cvn: ['', Validators.required],
        });
        this.billingAddress = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            line1: ['', Validators.required],
            line2: [''],
            town: ['', Validators.required],
            country: this.fb.group({
                isocode: ['', Validators.required],
            }),
            postalCode: ['', Validators.required],
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.expMonthAndYear();
        this.countries$ = this.userService.getAllBillingCountries().pipe(tap(countries => {
            // If the store is empty fetch countries. This is also used when changing language.
            if (Object.keys(countries).length === 0) {
                this.userService.loadBillingCountries();
            }
        }));
        this.cardTypes$ = this.checkoutService.getCardTypes().pipe(tap(cardTypes => {
            if (Object.keys(cardTypes).length === 0) {
                this.checkoutService.loadSupportedCardTypes();
            }
        }));
        this.shippingAddress$ = this.checkoutService.getDeliveryAddress();
        this.checkboxSub = this.showSameAsShippingAddressCheckbox().subscribe((shouldShowCheckbox) => {
            // this operation makes sure the checkbox is not checked if not shown and vice versa
            this.sameAsShippingAddress = shouldShowCheckbox;
        });
        // verify the new added address
        this.addressVerifySub = this.checkoutService
            .getAddressVerificationResults()
            .subscribe((results) => {
            if (results === 'FAIL') {
                this.checkoutService.clearAddressVerificationResults();
            }
            else if (results.decision === 'ACCEPT') {
                this.next();
            }
            else if (results.decision === 'REJECT') {
                this.globalMessageService.add({ key: 'addressForm.invalidAddress' }, GlobalMessageType.MSG_TYPE_ERROR);
                this.checkoutService.clearAddressVerificationResults();
            }
            else if (results.decision === 'REVIEW') {
                this.openSuggestedAddress(results);
            }
        });
    }
    /**
     * @return {?}
     */
    expMonthAndYear() {
        /** @type {?} */
        const year = new Date().getFullYear();
        for (let i = 0; i < 10; i++) {
            this.years.push({ id: i + 1, name: year + i });
        }
        for (let j = 1; j <= 12; j++) {
            if (j < 10) {
                this.months.push({ id: j, name: '0' + j.toString() });
            }
            else {
                this.months.push({ id: j, name: j.toString() });
            }
        }
    }
    /**
     * @return {?}
     */
    toggleDefaultPaymentMethod() {
        this.payment.value.defaultPayment = !this.payment.value.defaultPayment;
    }
    /**
     * @param {?} card
     * @return {?}
     */
    paymentSelected(card) {
        this.payment['controls'].cardType['controls'].code.setValue(card.code);
    }
    /**
     * @param {?} month
     * @return {?}
     */
    monthSelected(month) {
        this.payment['controls'].expiryMonth.setValue(month.name);
    }
    /**
     * @param {?} year
     * @return {?}
     */
    yearSelected(year) {
        this.payment['controls'].expiryYear.setValue(year.name);
    }
    /**
     * @return {?}
     */
    toggleSameAsShippingAddress() {
        this.sameAsShippingAddress = !this.sameAsShippingAddress;
    }
    /**
     * @return {?}
     */
    isContinueButtonDisabled() {
        return (this.payment.invalid ||
            (!this.sameAsShippingAddress && this.billingAddress.invalid));
    }
    /**
     * Check if the shipping address can also be a billing address
     *
     * \@memberof PaymentFormComponent
     * @return {?}
     */
    showSameAsShippingAddressCheckbox() {
        return combineLatest(this.countries$, this.shippingAddress$).pipe(map(([countries, address]) => {
            return !!countries.filter((country) => country.isocode === address.country.isocode).length;
        }));
    }
    /**
     * @param {?} address
     * @return {?}
     */
    getAddressCardContent(address) {
        /** @type {?} */
        let region = '';
        if (address.region && address.region.isocode) {
            region = address.region.isocode + ', ';
        }
        return {
            textBold: address.firstName + ' ' + address.lastName,
            text: [
                address.line1,
                address.line2,
                address.town + ', ' + region + address.country.isocode,
                address.postalCode,
                address.phone,
            ],
        };
    }
    /**
     * @param {?} results
     * @return {?}
     */
    openSuggestedAddress(results) {
        if (!this.suggestedAddressModalRef) {
            this.suggestedAddressModalRef = this.modalService.open(SuggestedAddressDialogComponent, { centered: true, size: 'lg' });
            this.suggestedAddressModalRef.componentInstance.enteredAddress = this.billingAddress.value;
            this.suggestedAddressModalRef.componentInstance.suggestedAddresses =
                results.suggestedAddresses;
            this.suggestedAddressModalRef.result
                .then(() => {
                this.checkoutService.clearAddressVerificationResults();
                this.suggestedAddressModalRef = null;
            })
                .catch(() => {
                // this  callback is called when modal is closed with Esc key or clicking backdrop
                this.checkoutService.clearAddressVerificationResults();
                this.suggestedAddressModalRef = null;
            });
        }
    }
    /**
     * @return {?}
     */
    close() {
        this.closeForm.emit();
    }
    /**
     * @return {?}
     */
    back() {
        this.goBack.emit();
    }
    /**
     * @return {?}
     */
    verifyAddress() {
        if (this.sameAsShippingAddress) {
            this.next();
        }
        else {
            this.checkoutService.verifyAddress(this.billingAddress.value);
        }
    }
    /**
     * @return {?}
     */
    next() {
        this.addPaymentInfo.emit({
            paymentDetails: this.payment.value,
            billingAddress: this.sameAsShippingAddress
                ? null
                : this.billingAddress.value,
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.checkboxSub) {
            this.checkboxSub.unsubscribe();
        }
        if (this.addressVerifySub) {
            this.addressVerifySub.unsubscribe();
        }
    }
}
PaymentFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-payment-form',
                template: "<!-- FORM -->\n<div [formGroup]=\"payment\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <div class=\"form-group\">\n        <ng-container *ngIf=\"(cardTypes$ | async) as cardTypes\">\n          <div *ngIf=\"cardTypes.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'paymentForm.paymentType' | cxTranslate\n              }}</span>\n              <ng-select\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"cardTypes\"\n                bindLabel=\"name\"\n                bindValue=\"code\"\n                placeholder=\"{{ 'paymentForm.selectOne' | cxTranslate }}\"\n                (change)=\"paymentSelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'paymentForm.accountHolderName.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            required\n            placeholder=\"{{\n              'paymentForm.accountHolderName.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"accountHolderName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'paymentForm.cardNumber' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            formControlName=\"cardNumber\"\n          />\n        </label>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content\">{{\n              'paymentForm.expirationDate' | cxTranslate\n            }}</span>\n            <div class=\"cx-payment-form-exp-date row\">\n              <div class=\"col-sm-6 col-md-5\">\n                <ng-select\n                  [searchable]=\"false\"\n                  [clearable]=\"false\"\n                  [items]=\"months\"\n                  bindLabel=\"name\"\n                  bindValue=\"expiryMonth\"\n                  placeholder=\"{{ 'paymentForm.monthMask' | cxTranslate }}\"\n                  (change)=\"monthSelected($event)\"\n                >\n                </ng-select>\n              </div>\n              <div class=\"col-sm-6 col-md-7\">\n                <ng-select\n                  [searchable]=\"false\"\n                  [clearable]=\"false\"\n                  [items]=\"years\"\n                  bindLabel=\"name\"\n                  bindValue=\"expiryYear\"\n                  placeholder=\"{{ 'paymentForm.yearMask' | cxTranslate }}\"\n                  (change)=\"yearSelected($event)\"\n                >\n                </ng-select>\n              </div>\n            </div>\n          </label>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content\">\n              {{ 'paymentForm.securityCode' | cxTranslate }}\n              <cx-icon\n                [type]=\"iconTypes.INFO\"\n                class=\"cx-payment-form-tooltip\"\n                placement=\"right\"\n                title=\"{{ 'paymentForm.securityCodeTitle' | cxTranslate }}\"\n                alt=\"\"\n              ></cx-icon>\n            </span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"cVVNumber\"\n              required\n              formControlName=\"cvn\"\n            />\n          </label>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"form-check\">\n          <label>\n            <input\n              type=\"checkbox\"\n              class=\"form-check-input\"\n              (change)=\"toggleDefaultPaymentMethod()\"\n            />\n            <span class=\"form-check-label\">{{\n              'paymentForm.saveAsDefault' | cxTranslate\n            }}</span>\n          </label>\n        </div>\n      </div>\n\n      <!-- BILLING -->\n      <div class=\"cx-payment-form-billing\">\n        <div class=\"cx-payment-form-billing-address\">\n          {{ 'paymentForm.billingAddress' | cxTranslate }}\n        </div>\n\n        <!-- SAME AS SHIPPING CHECKBOX -->\n        <ng-container *ngIf=\"(showSameAsShippingAddressCheckbox() | async)\">\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  class=\"form-check-input\"\n                  [checked]=\"sameAsShippingAddress\"\n                  (change)=\"toggleSameAsShippingAddress()\"\n                />\n                <span class=\"form-check-label\">{{\n                  'paymentForm.sameAsShippingAddress' | cxTranslate\n                }}</span>\n              </label>\n            </div>\n          </div>\n        </ng-container>\n\n        <!-- BILLING INFO COMPONENT -->\n        <ng-container\n          *ngIf=\"\n            (sameAsShippingAddress && shippingAddress$\n              | async) as shippingAddress;\n            else billingAddressForm\n          \"\n        >\n          <cx-card [content]=\"getAddressCardContent(shippingAddress)\"></cx-card>\n        </ng-container>\n\n        <ng-template #billingAddressForm>\n          <cx-billing-address-form\n            [billingAddress]=\"billingAddress\"\n            [countries$]=\"countries$\"\n          >\n          </cx-billing-address-form>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n\n  <!-- BUTTON SECTION -->\n  <div class=\"cx-checkout-btns row\">\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        *ngIf=\"paymentMethodsCount === 0\"\n        class=\"btn btn-block btn-action\"\n        (click)=\"back()\"\n      >\n        {{ 'common.back' | cxTranslate }}\n      </button>\n      <button\n        *ngIf=\"paymentMethodsCount > 0\"\n        class=\"btn btn-block btn-action\"\n        (click)=\"close()\"\n      >\n        {{ 'paymentForm.changePayment' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"isContinueButtonDisabled()\"\n        (click)=\"next()\"\n      >\n        {{ 'common.continue' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
PaymentFormComponent.ctorParameters = () => [
    { type: CheckoutService },
    { type: UserService },
    { type: GlobalMessageService },
    { type: FormBuilder },
    { type: NgbModal }
];
PaymentFormComponent.propDecorators = {
    paymentMethodsCount: [{ type: Input }],
    goBack: [{ type: Output }],
    closeForm: [{ type: Output }],
    addPaymentInfo: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    PaymentFormComponent.prototype.iconTypes;
    /**
     * @type {?}
     * @private
     */
    PaymentFormComponent.prototype.checkboxSub;
    /**
     * @type {?}
     * @private
     */
    PaymentFormComponent.prototype.addressVerifySub;
    /** @type {?} */
    PaymentFormComponent.prototype.suggestedAddressModalRef;
    /** @type {?} */
    PaymentFormComponent.prototype.months;
    /** @type {?} */
    PaymentFormComponent.prototype.years;
    /** @type {?} */
    PaymentFormComponent.prototype.cardTypes$;
    /** @type {?} */
    PaymentFormComponent.prototype.shippingAddress$;
    /** @type {?} */
    PaymentFormComponent.prototype.countries$;
    /** @type {?} */
    PaymentFormComponent.prototype.sameAsShippingAddress;
    /** @type {?} */
    PaymentFormComponent.prototype.paymentMethodsCount;
    /** @type {?} */
    PaymentFormComponent.prototype.goBack;
    /** @type {?} */
    PaymentFormComponent.prototype.closeForm;
    /** @type {?} */
    PaymentFormComponent.prototype.addPaymentInfo;
    /** @type {?} */
    PaymentFormComponent.prototype.payment;
    /** @type {?} */
    PaymentFormComponent.prototype.billingAddress;
    /**
     * @type {?}
     * @protected
     */
    PaymentFormComponent.prototype.checkoutService;
    /**
     * @type {?}
     * @protected
     */
    PaymentFormComponent.prototype.userService;
    /**
     * @type {?}
     * @protected
     */
    PaymentFormComponent.prototype.globalMessageService;
    /**
     * @type {?}
     * @private
     */
    PaymentFormComponent.prototype.fb;
    /**
     * @type {?}
     * @private
     */
    PaymentFormComponent.prototype.modalService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jaGVja291dC9jb21wb25lbnRzL211bHRpLXN0ZXAtY2hlY2tvdXQvcGF5bWVudC1tZXRob2QvcGF5bWVudC1mb3JtL3BheW1lbnQtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBZSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFJTCxlQUFlLEVBRWYsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixXQUFXLEdBQ1osTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrREFBa0QsQ0FBQzs7QUFFN0UsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0scUdBQXFHLENBQUMsQ0FBQyxzQkFBc0I7QUFVN0ssTUFBTSxPQUFPLG9CQUFvQjs7Ozs7Ozs7SUFrRC9CLFlBQ1ksZUFBZ0MsRUFDaEMsV0FBd0IsRUFDeEIsb0JBQTBDLEVBQzVDLEVBQWUsRUFDZixZQUFzQjtRQUpwQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUM1QyxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YsaUJB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Qjs7SUFFNUIsc0NBQ2lDOztJQUVqQyx5Q0FDb0M7O0lBRXBDLDhDQUN5Qzs7SUFFekMsdUNBVUc7O0lBRUgsOENBVUc7Ozs7O0lBR0QsK0NBQTBDOzs7OztJQUMxQywyQ0FBa0M7Ozs7O0lBQ2xDLG9EQUFvRDs7Ozs7SUFDcEQsa0NBQXVCOzs7OztJQUN2Qiw0Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ2JNb2RhbCwgTmdiTW9kYWxSZWYgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQge1xuICBBZGRyZXNzLFxuICBBZGRyZXNzVmFsaWRhdGlvbixcbiAgQ2FyZFR5cGUsXG4gIENoZWNrb3V0U2VydmljZSxcbiAgQ291bnRyeSxcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxuICBVc2VyU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaW5kZXgnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQnOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG5pbXBvcnQgeyBTdWdnZXN0ZWRBZGRyZXNzRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc2hpcHBpbmctYWRkcmVzcy9hZGRyZXNzLWZvcm0vc3VnZ2VzdGVkLWFkZHJlc3Nlcy1kaWFsb2cvc3VnZ2VzdGVkLWFkZHJlc3Nlcy1kaWFsb2cuY29tcG9uZW50JzsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuXG50eXBlIG1vbnRoVHlwZSA9IHsgaWQ6IG51bWJlcjsgbmFtZTogc3RyaW5nIH07XG50eXBlIHllYXJUeXBlID0geyBpZDogbnVtYmVyOyBuYW1lOiBudW1iZXIgfTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcGF5bWVudC1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BheW1lbnQtZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50Rm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFO1xuXG4gIHByaXZhdGUgY2hlY2tib3hTdWI6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBhZGRyZXNzVmVyaWZ5U3ViOiBTdWJzY3JpcHRpb247XG4gIHN1Z2dlc3RlZEFkZHJlc3NNb2RhbFJlZjogTmdiTW9kYWxSZWY7XG4gIG1vbnRoczogbW9udGhUeXBlW10gPSBbXTtcbiAgeWVhcnM6IHllYXJUeXBlW10gPSBbXTtcblxuICBjYXJkVHlwZXMkOiBPYnNlcnZhYmxlPENhcmRUeXBlW10+O1xuICBzaGlwcGluZ0FkZHJlc3MkOiBPYnNlcnZhYmxlPEFkZHJlc3M+O1xuICBjb3VudHJpZXMkOiBPYnNlcnZhYmxlPENvdW50cnlbXT47XG4gIHNhbWVBc1NoaXBwaW5nQWRkcmVzcyA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcGF5bWVudE1ldGhvZHNDb3VudDogbnVtYmVyO1xuXG4gIEBPdXRwdXQoKVxuICBnb0JhY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAT3V0cHV0KClcbiAgY2xvc2VGb3JtID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQE91dHB1dCgpXG4gIGFkZFBheW1lbnRJbmZvID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcGF5bWVudDogRm9ybUdyb3VwID0gdGhpcy5mYi5ncm91cCh7XG4gICAgZGVmYXVsdFBheW1lbnQ6IFtmYWxzZV0sXG4gICAgYWNjb3VudEhvbGRlck5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgY2FyZE51bWJlcjogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICBjYXJkVHlwZTogdGhpcy5mYi5ncm91cCh7XG4gICAgICBjb2RlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIH0pLFxuICAgIGV4cGlyeU1vbnRoOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIGV4cGlyeVllYXI6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgY3ZuOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICB9KTtcblxuICBiaWxsaW5nQWRkcmVzczogRm9ybUdyb3VwID0gdGhpcy5mYi5ncm91cCh7XG4gICAgZmlyc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIGxhc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIGxpbmUxOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIGxpbmUyOiBbJyddLFxuICAgIHRvd246IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgY291bnRyeTogdGhpcy5mYi5ncm91cCh7XG4gICAgICBpc29jb2RlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIH0pLFxuICAgIHBvc3RhbENvZGU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjaGVja291dFNlcnZpY2U6IENoZWNrb3V0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmV4cE1vbnRoQW5kWWVhcigpO1xuICAgIHRoaXMuY291bnRyaWVzJCA9IHRoaXMudXNlclNlcnZpY2UuZ2V0QWxsQmlsbGluZ0NvdW50cmllcygpLnBpcGUoXG4gICAgICB0YXAoY291bnRyaWVzID0+IHtcbiAgICAgICAgLy8gSWYgdGhlIHN0b3JlIGlzIGVtcHR5IGZldGNoIGNvdW50cmllcy4gVGhpcyBpcyBhbHNvIHVzZWQgd2hlbiBjaGFuZ2luZyBsYW5ndWFnZS5cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGNvdW50cmllcykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2FkQmlsbGluZ0NvdW50cmllcygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLmNhcmRUeXBlcyQgPSB0aGlzLmNoZWNrb3V0U2VydmljZS5nZXRDYXJkVHlwZXMoKS5waXBlKFxuICAgICAgdGFwKGNhcmRUeXBlcyA9PiB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhjYXJkVHlwZXMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmxvYWRTdXBwb3J0ZWRDYXJkVHlwZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5zaGlwcGluZ0FkZHJlc3MkID0gdGhpcy5jaGVja291dFNlcnZpY2UuZ2V0RGVsaXZlcnlBZGRyZXNzKCk7XG5cbiAgICB0aGlzLmNoZWNrYm94U3ViID0gdGhpcy5zaG93U2FtZUFzU2hpcHBpbmdBZGRyZXNzQ2hlY2tib3goKS5zdWJzY3JpYmUoXG4gICAgICAoc2hvdWxkU2hvd0NoZWNrYm94OiBib29sZWFuKSA9PiB7XG4gICAgICAgIC8vIHRoaXMgb3BlcmF0aW9uIG1ha2VzIHN1cmUgdGhlIGNoZWNrYm94IGlzIG5vdCBjaGVja2VkIGlmIG5vdCBzaG93biBhbmQgdmljZSB2ZXJzYVxuICAgICAgICB0aGlzLnNhbWVBc1NoaXBwaW5nQWRkcmVzcyA9IHNob3VsZFNob3dDaGVja2JveDtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgLy8gdmVyaWZ5IHRoZSBuZXcgYWRkZWQgYWRkcmVzc1xuICAgIHRoaXMuYWRkcmVzc1ZlcmlmeVN1YiA9IHRoaXMuY2hlY2tvdXRTZXJ2aWNlXG4gICAgICAuZ2V0QWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKVxuICAgICAgLnN1YnNjcmliZSgocmVzdWx0czogQWRkcmVzc1ZhbGlkYXRpb24pID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdHMgPT09ICdGQUlMJykge1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNsZWFyQWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHRzLmRlY2lzaW9uID09PSAnQUNDRVBUJykge1xuICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdHMuZGVjaXNpb24gPT09ICdSRUpFQ1QnKSB7XG4gICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgICAgICB7IGtleTogJ2FkZHJlc3NGb3JtLmludmFsaWRBZGRyZXNzJyB9LFxuICAgICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNsZWFyQWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHRzLmRlY2lzaW9uID09PSAnUkVWSUVXJykge1xuICAgICAgICAgIHRoaXMub3BlblN1Z2dlc3RlZEFkZHJlc3MocmVzdWx0cyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgZXhwTW9udGhBbmRZZWFyKCk6IHZvaWQge1xuICAgIGNvbnN0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICB0aGlzLnllYXJzLnB1c2goeyBpZDogaSArIDEsIG5hbWU6IHllYXIgKyBpIH0pO1xuICAgIH1cbiAgICBmb3IgKGxldCBqID0gMTsgaiA8PSAxMjsgaisrKSB7XG4gICAgICBpZiAoaiA8IDEwKSB7XG4gICAgICAgIHRoaXMubW9udGhzLnB1c2goeyBpZDogaiwgbmFtZTogJzAnICsgai50b1N0cmluZygpIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tb250aHMucHVzaCh7IGlkOiBqLCBuYW1lOiBqLnRvU3RyaW5nKCkgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlRGVmYXVsdFBheW1lbnRNZXRob2QoKTogdm9pZCB7XG4gICAgdGhpcy5wYXltZW50LnZhbHVlLmRlZmF1bHRQYXltZW50ID0gIXRoaXMucGF5bWVudC52YWx1ZS5kZWZhdWx0UGF5bWVudDtcbiAgfVxuXG4gIHBheW1lbnRTZWxlY3RlZChjYXJkOiBDYXJkVHlwZSk6IHZvaWQge1xuICAgIHRoaXMucGF5bWVudFsnY29udHJvbHMnXS5jYXJkVHlwZVsnY29udHJvbHMnXS5jb2RlLnNldFZhbHVlKGNhcmQuY29kZSk7XG4gIH1cblxuICBtb250aFNlbGVjdGVkKG1vbnRoOiBtb250aFR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLnBheW1lbnRbJ2NvbnRyb2xzJ10uZXhwaXJ5TW9udGguc2V0VmFsdWUobW9udGgubmFtZSk7XG4gIH1cblxuICB5ZWFyU2VsZWN0ZWQoeWVhcjogeWVhclR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLnBheW1lbnRbJ2NvbnRyb2xzJ10uZXhwaXJ5WWVhci5zZXRWYWx1ZSh5ZWFyLm5hbWUpO1xuICB9XG5cbiAgdG9nZ2xlU2FtZUFzU2hpcHBpbmdBZGRyZXNzKCk6IHZvaWQge1xuICAgIHRoaXMuc2FtZUFzU2hpcHBpbmdBZGRyZXNzID0gIXRoaXMuc2FtZUFzU2hpcHBpbmdBZGRyZXNzO1xuICB9XG5cbiAgaXNDb250aW51ZUJ1dHRvbkRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnBheW1lbnQuaW52YWxpZCB8fFxuICAgICAgKCF0aGlzLnNhbWVBc1NoaXBwaW5nQWRkcmVzcyAmJiB0aGlzLmJpbGxpbmdBZGRyZXNzLmludmFsaWQpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgc2hpcHBpbmcgYWRkcmVzcyBjYW4gYWxzbyBiZSBhIGJpbGxpbmcgYWRkcmVzc1xuICAgKlxuICAgKiBAbWVtYmVyb2YgUGF5bWVudEZvcm1Db21wb25lbnRcbiAgICovXG4gIHNob3dTYW1lQXNTaGlwcGluZ0FkZHJlc3NDaGVja2JveCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdCh0aGlzLmNvdW50cmllcyQsIHRoaXMuc2hpcHBpbmdBZGRyZXNzJCkucGlwZShcbiAgICAgIG1hcCgoW2NvdW50cmllcywgYWRkcmVzc10pID0+IHtcbiAgICAgICAgcmV0dXJuICEhY291bnRyaWVzLmZpbHRlcihcbiAgICAgICAgICAoY291bnRyeTogQ291bnRyeSk6IGJvb2xlYW4gPT5cbiAgICAgICAgICAgIGNvdW50cnkuaXNvY29kZSA9PT0gYWRkcmVzcy5jb3VudHJ5Lmlzb2NvZGVcbiAgICAgICAgKS5sZW5ndGg7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRBZGRyZXNzQ2FyZENvbnRlbnQoYWRkcmVzczogQWRkcmVzcyk6IENhcmQge1xuICAgIGxldCByZWdpb24gPSAnJztcbiAgICBpZiAoYWRkcmVzcy5yZWdpb24gJiYgYWRkcmVzcy5yZWdpb24uaXNvY29kZSkge1xuICAgICAgcmVnaW9uID0gYWRkcmVzcy5yZWdpb24uaXNvY29kZSArICcsICc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHRCb2xkOiBhZGRyZXNzLmZpcnN0TmFtZSArICcgJyArIGFkZHJlc3MubGFzdE5hbWUsXG4gICAgICB0ZXh0OiBbXG4gICAgICAgIGFkZHJlc3MubGluZTEsXG4gICAgICAgIGFkZHJlc3MubGluZTIsXG4gICAgICAgIGFkZHJlc3MudG93biArICcsICcgKyByZWdpb24gKyBhZGRyZXNzLmNvdW50cnkuaXNvY29kZSxcbiAgICAgICAgYWRkcmVzcy5wb3N0YWxDb2RlLFxuICAgICAgICBhZGRyZXNzLnBob25lLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgb3BlblN1Z2dlc3RlZEFkZHJlc3MocmVzdWx0czogQWRkcmVzc1ZhbGlkYXRpb24pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmKSB7XG4gICAgICB0aGlzLnN1Z2dlc3RlZEFkZHJlc3NNb2RhbFJlZiA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oXG4gICAgICAgIFN1Z2dlc3RlZEFkZHJlc3NEaWFsb2dDb21wb25lbnQsXG4gICAgICAgIHsgY2VudGVyZWQ6IHRydWUsIHNpemU6ICdsZycgfVxuICAgICAgKTtcbiAgICAgIHRoaXMuc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmLmNvbXBvbmVudEluc3RhbmNlLmVudGVyZWRBZGRyZXNzID0gdGhpcy5iaWxsaW5nQWRkcmVzcy52YWx1ZTtcbiAgICAgIHRoaXMuc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmLmNvbXBvbmVudEluc3RhbmNlLnN1Z2dlc3RlZEFkZHJlc3NlcyA9XG4gICAgICAgIHJlc3VsdHMuc3VnZ2VzdGVkQWRkcmVzc2VzO1xuICAgICAgdGhpcy5zdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWYucmVzdWx0XG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5jbGVhckFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzKCk7XG4gICAgICAgICAgdGhpcy5zdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWYgPSBudWxsO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgIC8vIHRoaXMgIGNhbGxiYWNrIGlzIGNhbGxlZCB3aGVuIG1vZGFsIGlzIGNsb3NlZCB3aXRoIEVzYyBrZXkgb3IgY2xpY2tpbmcgYmFja2Ryb3BcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5jbGVhckFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzKCk7XG4gICAgICAgICAgdGhpcy5zdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWYgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlRm9ybS5lbWl0KCk7XG4gIH1cblxuICBiYWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZ29CYWNrLmVtaXQoKTtcbiAgfVxuXG4gIHZlcmlmeUFkZHJlc3MoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2FtZUFzU2hpcHBpbmdBZGRyZXNzKSB7XG4gICAgICB0aGlzLm5leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGVja291dFNlcnZpY2UudmVyaWZ5QWRkcmVzcyh0aGlzLmJpbGxpbmdBZGRyZXNzLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBuZXh0KCk6IHZvaWQge1xuICAgIHRoaXMuYWRkUGF5bWVudEluZm8uZW1pdCh7XG4gICAgICBwYXltZW50RGV0YWlsczogdGhpcy5wYXltZW50LnZhbHVlLFxuICAgICAgYmlsbGluZ0FkZHJlc3M6IHRoaXMuc2FtZUFzU2hpcHBpbmdBZGRyZXNzXG4gICAgICAgID8gbnVsbFxuICAgICAgICA6IHRoaXMuYmlsbGluZ0FkZHJlc3MudmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5jaGVja2JveFN1Yikge1xuICAgICAgdGhpcy5jaGVja2JveFN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5hZGRyZXNzVmVyaWZ5U3ViKSB7XG4gICAgICB0aGlzLmFkZHJlc3NWZXJpZnlTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==