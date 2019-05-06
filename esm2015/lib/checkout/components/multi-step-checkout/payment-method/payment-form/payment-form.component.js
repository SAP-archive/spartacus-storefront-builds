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
// tslint:disable-line
import { infoIconImgSrc } from '../../../../../ui/images/info-icon';
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
        this.infoIconImgSrc = infoIconImgSrc;
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
                this.globalMessageService.add({
                    type: GlobalMessageType.MSG_TYPE_ERROR,
                    text: 'Invalid Address',
                });
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
                template: "<!-- FORM -->\n<div [formGroup]=\"payment\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <div class=\"form-group\">\n        <ng-container *ngIf=\"(cardTypes$ | async) as cardTypes\">\n          <div *ngIf=\"cardTypes.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'paymentForm.paymentType' | cxTranslate\n              }}</span>\n              <ng-select\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"cardTypes\"\n                bindLabel=\"name\"\n                bindValue=\"code\"\n                placeholder=\"{{ 'paymentForm.selectOne' | cxTranslate }}\"\n                (change)=\"paymentSelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'paymentForm.accountHolderName.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            required\n            placeholder=\"{{\n              'paymentForm.accountHolderName.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"accountHolderName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'paymentForm.cardNumber' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            formControlName=\"cardNumber\"\n          />\n        </label>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content\">{{\n              'paymentForm.expirationDate' | cxTranslate\n            }}</span>\n            <div class=\"cx-payment-form-exp-date row\">\n              <div class=\"col-sm-6 col-md-5\">\n                <ng-select\n                  [searchable]=\"false\"\n                  [clearable]=\"false\"\n                  [items]=\"months\"\n                  bindLabel=\"name\"\n                  bindValue=\"expiryMonth\"\n                  placeholder=\"{{ 'paymentForm.monthMask' | cxTranslate }}\"\n                  (change)=\"monthSelected($event)\"\n                >\n                </ng-select>\n              </div>\n              <div class=\"col-sm-6 col-md-7\">\n                <ng-select\n                  [searchable]=\"false\"\n                  [clearable]=\"false\"\n                  [items]=\"years\"\n                  bindLabel=\"name\"\n                  bindValue=\"expiryYear\"\n                  placeholder=\"{{ 'paymentForm.yearMask' | cxTranslate }}\"\n                  (change)=\"yearSelected($event)\"\n                >\n                </ng-select>\n              </div>\n            </div>\n          </label>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content\">\n              {{ 'paymentForm.securityCode' | cxTranslate }}\n              <img\n                class=\"cx-payment-form-tooltip\"\n                [src]=\"infoIconImgSrc\"\n                placement=\"right\"\n                ngbTooltip=\"Card Verification Value\"\n                alt=\"\"\n              />\n            </span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"cVVNumber\"\n              required\n              formControlName=\"cvn\"\n            />\n          </label>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"form-check\">\n          <label>\n            <input\n              type=\"checkbox\"\n              class=\"form-check-input\"\n              (change)=\"toggleDefaultPaymentMethod()\"\n            />\n            <span class=\"form-check-label\">{{\n              'paymentForm.saveAsDefault' | cxTranslate\n            }}</span>\n          </label>\n        </div>\n      </div>\n\n      <!-- BILLING -->\n      <div class=\"cx-payment-form-billing\">\n        <div class=\"cx-payment-form-billing-address\">\n          {{ 'paymentForm.billingAddress' | cxTranslate }}\n        </div>\n\n        <!-- SAME AS SHIPPING CHECKBOX -->\n        <ng-container *ngIf=\"(showSameAsShippingAddressCheckbox() | async)\">\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  class=\"form-check-input\"\n                  [checked]=\"sameAsShippingAddress\"\n                  (change)=\"toggleSameAsShippingAddress()\"\n                />\n                <span class=\"form-check-label\">{{\n                  'paymentForm.sameAsShippingAddress' | cxTranslate\n                }}</span>\n              </label>\n            </div>\n          </div>\n        </ng-container>\n\n        <!-- BILLING INFO COMPONENT -->\n        <ng-container\n          *ngIf=\"\n            (sameAsShippingAddress && shippingAddress$\n              | async) as shippingAddress;\n            else billingAddressForm\n          \"\n        >\n          <cx-card [content]=\"getAddressCardContent(shippingAddress)\"></cx-card>\n        </ng-container>\n\n        <ng-template #billingAddressForm>\n          <cx-billing-address-form\n            [billingAddress]=\"billingAddress\"\n            [countries$]=\"countries$\"\n          ></cx-billing-address-form>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n\n  <!-- BUTTON SECTION -->\n  <div class=\"cx-checkout-btns row\">\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        *ngIf=\"paymentMethodsCount === 0\"\n        class=\"btn btn-block btn-action\"\n        (click)=\"back()\"\n      >\n        {{ 'common.back' | cxTranslate }}\n      </button>\n      <button\n        *ngIf=\"paymentMethodsCount > 0\"\n        class=\"btn btn-block btn-action\"\n        (click)=\"close()\"\n      >\n        {{ 'paymentForm.changePayment' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"isContinueButtonDisabled()\"\n        (click)=\"next()\"\n      >\n        {{ 'common.continue' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n",
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
    /** @type {?} */
    PaymentFormComponent.prototype.infoIconImgSrc;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jaGVja291dC9jb21wb25lbnRzL211bHRpLXN0ZXAtY2hlY2tvdXQvcGF5bWVudC1tZXRob2QvcGF5bWVudC1mb3JtL3BheW1lbnQtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBZSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFJTCxlQUFlLEVBRWYsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixXQUFXLEdBQ1osTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUUxQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0scUdBQXFHLENBQUMsQ0FBQyxzQkFBc0I7QUFVN0ssTUFBTSxPQUFPLG9CQUFvQjs7Ozs7Ozs7SUFrRC9CLFlBQ1ksZUFBZ0MsRUFDaEMsV0FBd0IsRUFDeEIsb0JBQTBDLEVBQzVDLEVBQWUsRUFDZixZQUFzQjtRQUpwQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUM1QyxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YsaUJB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Qjs7SUFFNUIsc0NBQ2lDOztJQUVqQyx5Q0FDb0M7O0lBRXBDLDhDQUN5Qzs7SUFFekMsdUNBVUc7O0lBRUgsOENBVUc7O0lBRUgsOENBQWdDOzs7OztJQUc5QiwrQ0FBMEM7Ozs7O0lBQzFDLDJDQUFrQzs7Ozs7SUFDbEMsb0RBQW9EOzs7OztJQUNwRCxrQ0FBdUI7Ozs7O0lBQ3ZCLDRDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5nYk1vZGFsLCBOZ2JNb2RhbFJlZiB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7XG4gIEFkZHJlc3MsXG4gIEFkZHJlc3NWYWxpZGF0aW9uLFxuICBDYXJkVHlwZSxcbiAgQ2hlY2tvdXRTZXJ2aWNlLFxuICBDb3VudHJ5LFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIFVzZXJTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JzsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuaW1wb3J0IHsgaW5mb0ljb25JbWdTcmMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi91aS9pbWFnZXMvaW5mby1pY29uJztcbmltcG9ydCB7IFN1Z2dlc3RlZEFkZHJlc3NEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zaGlwcGluZy1hZGRyZXNzL2FkZHJlc3MtZm9ybS9zdWdnZXN0ZWQtYWRkcmVzc2VzLWRpYWxvZy9zdWdnZXN0ZWQtYWRkcmVzc2VzLWRpYWxvZy5jb21wb25lbnQnOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG5cbnR5cGUgbW9udGhUeXBlID0geyBpZDogbnVtYmVyOyBuYW1lOiBzdHJpbmcgfTtcbnR5cGUgeWVhclR5cGUgPSB7IGlkOiBudW1iZXI7IG5hbWU6IG51bWJlciB9O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wYXltZW50LWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vcGF5bWVudC1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFBheW1lbnRGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGNoZWNrYm94U3ViOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgYWRkcmVzc1ZlcmlmeVN1YjogU3Vic2NyaXB0aW9uO1xuICBzdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWY6IE5nYk1vZGFsUmVmO1xuICBtb250aHM6IG1vbnRoVHlwZVtdID0gW107XG4gIHllYXJzOiB5ZWFyVHlwZVtdID0gW107XG5cbiAgY2FyZFR5cGVzJDogT2JzZXJ2YWJsZTxDYXJkVHlwZVtdPjtcbiAgc2hpcHBpbmdBZGRyZXNzJDogT2JzZXJ2YWJsZTxBZGRyZXNzPjtcbiAgY291bnRyaWVzJDogT2JzZXJ2YWJsZTxDb3VudHJ5W10+O1xuICBzYW1lQXNTaGlwcGluZ0FkZHJlc3MgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHBheW1lbnRNZXRob2RzQ291bnQ6IG51bWJlcjtcblxuICBAT3V0cHV0KClcbiAgZ29CYWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQE91dHB1dCgpXG4gIGNsb3NlRm9ybSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBPdXRwdXQoKVxuICBhZGRQYXltZW50SW5mbyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHBheW1lbnQ6IEZvcm1Hcm91cCA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgIGRlZmF1bHRQYXltZW50OiBbZmFsc2VdLFxuICAgIGFjY291bnRIb2xkZXJOYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIGNhcmROdW1iZXI6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgY2FyZFR5cGU6IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgY29kZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9KSxcbiAgICBleHBpcnlNb250aDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICBleHBpcnlZZWFyOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIGN2bjogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgfSk7XG5cbiAgYmlsbGluZ0FkZHJlc3M6IEZvcm1Hcm91cCA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgIGZpcnN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICBsYXN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICBsaW5lMTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICBsaW5lMjogWycnXSxcbiAgICB0b3duOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIGNvdW50cnk6IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgaXNvY29kZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9KSxcbiAgICBwb3N0YWxDb2RlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICB9KTtcblxuICBpbmZvSWNvbkltZ1NyYyA9IGluZm9JY29uSW1nU3JjO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjaGVja291dFNlcnZpY2U6IENoZWNrb3V0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmV4cE1vbnRoQW5kWWVhcigpO1xuICAgIHRoaXMuY291bnRyaWVzJCA9IHRoaXMudXNlclNlcnZpY2UuZ2V0QWxsQmlsbGluZ0NvdW50cmllcygpLnBpcGUoXG4gICAgICB0YXAoY291bnRyaWVzID0+IHtcbiAgICAgICAgLy8gSWYgdGhlIHN0b3JlIGlzIGVtcHR5IGZldGNoIGNvdW50cmllcy4gVGhpcyBpcyBhbHNvIHVzZWQgd2hlbiBjaGFuZ2luZyBsYW5ndWFnZS5cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGNvdW50cmllcykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2FkQmlsbGluZ0NvdW50cmllcygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLmNhcmRUeXBlcyQgPSB0aGlzLmNoZWNrb3V0U2VydmljZS5nZXRDYXJkVHlwZXMoKS5waXBlKFxuICAgICAgdGFwKGNhcmRUeXBlcyA9PiB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhjYXJkVHlwZXMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmxvYWRTdXBwb3J0ZWRDYXJkVHlwZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5zaGlwcGluZ0FkZHJlc3MkID0gdGhpcy5jaGVja291dFNlcnZpY2UuZ2V0RGVsaXZlcnlBZGRyZXNzKCk7XG5cbiAgICB0aGlzLmNoZWNrYm94U3ViID0gdGhpcy5zaG93U2FtZUFzU2hpcHBpbmdBZGRyZXNzQ2hlY2tib3goKS5zdWJzY3JpYmUoXG4gICAgICAoc2hvdWxkU2hvd0NoZWNrYm94OiBib29sZWFuKSA9PiB7XG4gICAgICAgIC8vIHRoaXMgb3BlcmF0aW9uIG1ha2VzIHN1cmUgdGhlIGNoZWNrYm94IGlzIG5vdCBjaGVja2VkIGlmIG5vdCBzaG93biBhbmQgdmljZSB2ZXJzYVxuICAgICAgICB0aGlzLnNhbWVBc1NoaXBwaW5nQWRkcmVzcyA9IHNob3VsZFNob3dDaGVja2JveDtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgLy8gdmVyaWZ5IHRoZSBuZXcgYWRkZWQgYWRkcmVzc1xuICAgIHRoaXMuYWRkcmVzc1ZlcmlmeVN1YiA9IHRoaXMuY2hlY2tvdXRTZXJ2aWNlXG4gICAgICAuZ2V0QWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKVxuICAgICAgLnN1YnNjcmliZSgocmVzdWx0czogQWRkcmVzc1ZhbGlkYXRpb24pID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdHMgPT09ICdGQUlMJykge1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNsZWFyQWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHRzLmRlY2lzaW9uID09PSAnQUNDRVBUJykge1xuICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdHMuZGVjaXNpb24gPT09ICdSRUpFQ1QnKSB7XG4gICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoe1xuICAgICAgICAgICAgdHlwZTogR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1IsXG4gICAgICAgICAgICB0ZXh0OiAnSW52YWxpZCBBZGRyZXNzJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5jbGVhckFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzKCk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0cy5kZWNpc2lvbiA9PT0gJ1JFVklFVycpIHtcbiAgICAgICAgICB0aGlzLm9wZW5TdWdnZXN0ZWRBZGRyZXNzKHJlc3VsdHMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIGV4cE1vbnRoQW5kWWVhcigpOiB2b2lkIHtcbiAgICBjb25zdCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgdGhpcy55ZWFycy5wdXNoKHsgaWQ6IGkgKyAxLCBuYW1lOiB5ZWFyICsgaSB9KTtcbiAgICB9XG4gICAgZm9yIChsZXQgaiA9IDE7IGogPD0gMTI7IGorKykge1xuICAgICAgaWYgKGogPCAxMCkge1xuICAgICAgICB0aGlzLm1vbnRocy5wdXNoKHsgaWQ6IGosIG5hbWU6ICcwJyArIGoudG9TdHJpbmcoKSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubW9udGhzLnB1c2goeyBpZDogaiwgbmFtZTogai50b1N0cmluZygpIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZURlZmF1bHRQYXltZW50TWV0aG9kKCk6IHZvaWQge1xuICAgIHRoaXMucGF5bWVudC52YWx1ZS5kZWZhdWx0UGF5bWVudCA9ICF0aGlzLnBheW1lbnQudmFsdWUuZGVmYXVsdFBheW1lbnQ7XG4gIH1cblxuICBwYXltZW50U2VsZWN0ZWQoY2FyZDogQ2FyZFR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLnBheW1lbnRbJ2NvbnRyb2xzJ10uY2FyZFR5cGVbJ2NvbnRyb2xzJ10uY29kZS5zZXRWYWx1ZShjYXJkLmNvZGUpO1xuICB9XG5cbiAgbW9udGhTZWxlY3RlZChtb250aDogbW9udGhUeXBlKTogdm9pZCB7XG4gICAgdGhpcy5wYXltZW50Wydjb250cm9scyddLmV4cGlyeU1vbnRoLnNldFZhbHVlKG1vbnRoLm5hbWUpO1xuICB9XG5cbiAgeWVhclNlbGVjdGVkKHllYXI6IHllYXJUeXBlKTogdm9pZCB7XG4gICAgdGhpcy5wYXltZW50Wydjb250cm9scyddLmV4cGlyeVllYXIuc2V0VmFsdWUoeWVhci5uYW1lKTtcbiAgfVxuXG4gIHRvZ2dsZVNhbWVBc1NoaXBwaW5nQWRkcmVzcygpOiB2b2lkIHtcbiAgICB0aGlzLnNhbWVBc1NoaXBwaW5nQWRkcmVzcyA9ICF0aGlzLnNhbWVBc1NoaXBwaW5nQWRkcmVzcztcbiAgfVxuXG4gIGlzQ29udGludWVCdXR0b25EaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5wYXltZW50LmludmFsaWQgfHxcbiAgICAgICghdGhpcy5zYW1lQXNTaGlwcGluZ0FkZHJlc3MgJiYgdGhpcy5iaWxsaW5nQWRkcmVzcy5pbnZhbGlkKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIHNoaXBwaW5nIGFkZHJlc3MgY2FuIGFsc28gYmUgYSBiaWxsaW5nIGFkZHJlc3NcbiAgICpcbiAgICogQG1lbWJlcm9mIFBheW1lbnRGb3JtQ29tcG9uZW50XG4gICAqL1xuICBzaG93U2FtZUFzU2hpcHBpbmdBZGRyZXNzQ2hlY2tib3goKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QodGhpcy5jb3VudHJpZXMkLCB0aGlzLnNoaXBwaW5nQWRkcmVzcyQpLnBpcGUoXG4gICAgICBtYXAoKFtjb3VudHJpZXMsIGFkZHJlc3NdKSA9PiB7XG4gICAgICAgIHJldHVybiAhIWNvdW50cmllcy5maWx0ZXIoXG4gICAgICAgICAgKGNvdW50cnk6IENvdW50cnkpOiBib29sZWFuID0+XG4gICAgICAgICAgICBjb3VudHJ5Lmlzb2NvZGUgPT09IGFkZHJlc3MuY291bnRyeS5pc29jb2RlXG4gICAgICAgICkubGVuZ3RoO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0QWRkcmVzc0NhcmRDb250ZW50KGFkZHJlc3M6IEFkZHJlc3MpOiBDYXJkIHtcbiAgICBsZXQgcmVnaW9uID0gJyc7XG4gICAgaWYgKGFkZHJlc3MucmVnaW9uICYmIGFkZHJlc3MucmVnaW9uLmlzb2NvZGUpIHtcbiAgICAgIHJlZ2lvbiA9IGFkZHJlc3MucmVnaW9uLmlzb2NvZGUgKyAnLCAnO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB0ZXh0Qm9sZDogYWRkcmVzcy5maXJzdE5hbWUgKyAnICcgKyBhZGRyZXNzLmxhc3ROYW1lLFxuICAgICAgdGV4dDogW1xuICAgICAgICBhZGRyZXNzLmxpbmUxLFxuICAgICAgICBhZGRyZXNzLmxpbmUyLFxuICAgICAgICBhZGRyZXNzLnRvd24gKyAnLCAnICsgcmVnaW9uICsgYWRkcmVzcy5jb3VudHJ5Lmlzb2NvZGUsXG4gICAgICAgIGFkZHJlc3MucG9zdGFsQ29kZSxcbiAgICAgICAgYWRkcmVzcy5waG9uZSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIG9wZW5TdWdnZXN0ZWRBZGRyZXNzKHJlc3VsdHM6IEFkZHJlc3NWYWxpZGF0aW9uKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnN1Z2dlc3RlZEFkZHJlc3NNb2RhbFJlZikge1xuICAgICAgdGhpcy5zdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWYgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKFxuICAgICAgICBTdWdnZXN0ZWRBZGRyZXNzRGlhbG9nQ29tcG9uZW50LFxuICAgICAgICB7IGNlbnRlcmVkOiB0cnVlLCBzaXplOiAnbGcnIH1cbiAgICAgICk7XG4gICAgICB0aGlzLnN1Z2dlc3RlZEFkZHJlc3NNb2RhbFJlZi5jb21wb25lbnRJbnN0YW5jZS5lbnRlcmVkQWRkcmVzcyA9IHRoaXMuYmlsbGluZ0FkZHJlc3MudmFsdWU7XG4gICAgICB0aGlzLnN1Z2dlc3RlZEFkZHJlc3NNb2RhbFJlZi5jb21wb25lbnRJbnN0YW5jZS5zdWdnZXN0ZWRBZGRyZXNzZXMgPVxuICAgICAgICByZXN1bHRzLnN1Z2dlc3RlZEFkZHJlc3NlcztcbiAgICAgIHRoaXMuc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmLnJlc3VsdFxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jaGVja291dFNlcnZpY2UuY2xlYXJBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cygpO1xuICAgICAgICAgIHRoaXMuc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmID0gbnVsbDtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAvLyB0aGlzICBjYWxsYmFjayBpcyBjYWxsZWQgd2hlbiBtb2RhbCBpcyBjbG9zZWQgd2l0aCBFc2Mga2V5IG9yIGNsaWNraW5nIGJhY2tkcm9wXG4gICAgICAgICAgdGhpcy5jaGVja291dFNlcnZpY2UuY2xlYXJBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cygpO1xuICAgICAgICAgIHRoaXMuc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5jbG9zZUZvcm0uZW1pdCgpO1xuICB9XG5cbiAgYmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLmdvQmFjay5lbWl0KCk7XG4gIH1cblxuICB2ZXJpZnlBZGRyZXNzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNhbWVBc1NoaXBwaW5nQWRkcmVzcykge1xuICAgICAgdGhpcy5uZXh0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLnZlcmlmeUFkZHJlc3ModGhpcy5iaWxsaW5nQWRkcmVzcy52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgbmV4dCgpOiB2b2lkIHtcbiAgICB0aGlzLmFkZFBheW1lbnRJbmZvLmVtaXQoe1xuICAgICAgcGF5bWVudERldGFpbHM6IHRoaXMucGF5bWVudC52YWx1ZSxcbiAgICAgIGJpbGxpbmdBZGRyZXNzOiB0aGlzLnNhbWVBc1NoaXBwaW5nQWRkcmVzc1xuICAgICAgICA/IG51bGxcbiAgICAgICAgOiB0aGlzLmJpbGxpbmdBZGRyZXNzLnZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tib3hTdWIpIHtcbiAgICAgIHRoaXMuY2hlY2tib3hTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYWRkcmVzc1ZlcmlmeVN1Yikge1xuICAgICAgdGhpcy5hZGRyZXNzVmVyaWZ5U3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=