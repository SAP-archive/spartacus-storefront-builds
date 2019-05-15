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
import { SuggestedAddressDialogComponent } from '../../shipping-address/address-form/suggested-addresses-dialog/suggested-addresses-dialog.component'; // tslint:disable-line
// tslint:disable-line
import { ICON_TYPES } from '../../../../../../cms-components/misc/icon/index';
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
        this.iconTypes = ICON_TYPES;
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
                template: "<!-- FORM -->\n<div [formGroup]=\"payment\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <div class=\"form-group\">\n        <ng-container *ngIf=\"(cardTypes$ | async) as cardTypes\">\n          <div *ngIf=\"cardTypes.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'paymentForm.paymentType' | cxTranslate\n              }}</span>\n              <ng-select\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"cardTypes\"\n                bindLabel=\"name\"\n                bindValue=\"code\"\n                placeholder=\"{{ 'paymentForm.selectOne' | cxTranslate }}\"\n                (change)=\"paymentSelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'paymentForm.accountHolderName.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            required\n            placeholder=\"{{\n              'paymentForm.accountHolderName.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"accountHolderName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'paymentForm.cardNumber' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            formControlName=\"cardNumber\"\n          />\n        </label>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content\">{{\n              'paymentForm.expirationDate' | cxTranslate\n            }}</span>\n            <div class=\"cx-payment-form-exp-date row\">\n              <div class=\"col-sm-6 col-md-5\">\n                <ng-select\n                  [searchable]=\"false\"\n                  [clearable]=\"false\"\n                  [items]=\"months\"\n                  bindLabel=\"name\"\n                  bindValue=\"expiryMonth\"\n                  placeholder=\"{{ 'paymentForm.monthMask' | cxTranslate }}\"\n                  (change)=\"monthSelected($event)\"\n                >\n                </ng-select>\n              </div>\n              <div class=\"col-sm-6 col-md-7\">\n                <ng-select\n                  [searchable]=\"false\"\n                  [clearable]=\"false\"\n                  [items]=\"years\"\n                  bindLabel=\"name\"\n                  bindValue=\"expiryYear\"\n                  placeholder=\"{{ 'paymentForm.yearMask' | cxTranslate }}\"\n                  (change)=\"yearSelected($event)\"\n                >\n                </ng-select>\n              </div>\n            </div>\n          </label>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content\">\n              {{ 'paymentForm.securityCode' | cxTranslate }}\n              <cx-icon\n                [type]=\"iconTypes.INFO\"\n                class=\"cx-payment-form-tooltip\"\n                placement=\"right\"\n                ngbTooltip=\"Card Verification Value\"\n                alt=\"\"\n              ></cx-icon>\n            </span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"cVVNumber\"\n              required\n              formControlName=\"cvn\"\n            />\n          </label>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"form-check\">\n          <label>\n            <input\n              type=\"checkbox\"\n              class=\"form-check-input\"\n              (change)=\"toggleDefaultPaymentMethod()\"\n            />\n            <span class=\"form-check-label\">{{\n              'paymentForm.saveAsDefault' | cxTranslate\n            }}</span>\n          </label>\n        </div>\n      </div>\n\n      <!-- BILLING -->\n      <div class=\"cx-payment-form-billing\">\n        <div class=\"cx-payment-form-billing-address\">\n          {{ 'paymentForm.billingAddress' | cxTranslate }}\n        </div>\n\n        <!-- SAME AS SHIPPING CHECKBOX -->\n        <ng-container *ngIf=\"(showSameAsShippingAddressCheckbox() | async)\">\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  class=\"form-check-input\"\n                  [checked]=\"sameAsShippingAddress\"\n                  (change)=\"toggleSameAsShippingAddress()\"\n                />\n                <span class=\"form-check-label\">{{\n                  'paymentForm.sameAsShippingAddress' | cxTranslate\n                }}</span>\n              </label>\n            </div>\n          </div>\n        </ng-container>\n\n        <!-- BILLING INFO COMPONENT -->\n        <ng-container\n          *ngIf=\"\n            (sameAsShippingAddress && shippingAddress$\n              | async) as shippingAddress;\n            else billingAddressForm\n          \"\n        >\n          <cx-card [content]=\"getAddressCardContent(shippingAddress)\"></cx-card>\n        </ng-container>\n\n        <ng-template #billingAddressForm>\n          <cx-billing-address-form\n            [billingAddress]=\"billingAddress\"\n            [countries$]=\"countries$\"\n          ></cx-billing-address-form>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n\n  <!-- BUTTON SECTION -->\n  <div class=\"cx-checkout-btns row\">\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        *ngIf=\"paymentMethodsCount === 0\"\n        class=\"btn btn-block btn-action\"\n        (click)=\"back()\"\n      >\n        {{ 'common.back' | cxTranslate }}\n      </button>\n      <button\n        *ngIf=\"paymentMethodsCount > 0\"\n        class=\"btn btn-block btn-action\"\n        (click)=\"close()\"\n      >\n        {{ 'paymentForm.changePayment' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"isContinueButtonDisabled()\"\n        (click)=\"next()\"\n      >\n        {{ 'common.continue' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jaGVja291dC9jb21wb25lbnRzL211bHRpLXN0ZXAtY2hlY2tvdXQvcGF5bWVudC1tZXRob2QvcGF5bWVudC1mb3JtL3BheW1lbnQtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBZSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFJTCxlQUFlLEVBRWYsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixXQUFXLEdBQ1osTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsYUFBYSxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUUxQyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxxR0FBcUcsQ0FBQyxDQUFDLHNCQUFzQjs7QUFDN0ssT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBVTlFLE1BQU0sT0FBTyxvQkFBb0I7Ozs7Ozs7O0lBa0QvQixZQUNZLGVBQWdDLEVBQ2hDLFdBQXdCLEVBQ3hCLG9CQUEwQyxFQUM1QyxFQUFlLEVBQ2YsWUFBc0I7UUFKcEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDNUMsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLGlC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NEI7O0lBRTVCLHNDQUNpQzs7SUFFakMseUNBQ29DOztJQUVwQyw4Q0FDeUM7O0lBRXpDLHVDQVVHOztJQUVILDhDQVVHOzs7OztJQUdELCtDQUEwQzs7Ozs7SUFDMUMsMkNBQWtDOzs7OztJQUNsQyxvREFBb0Q7Ozs7O0lBQ3BELGtDQUF1Qjs7Ozs7SUFDdkIsNENBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmdiTW9kYWwsIE5nYk1vZGFsUmVmIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHtcbiAgQWRkcmVzcyxcbiAgQWRkcmVzc1ZhbGlkYXRpb24sXG4gIENhcmRUeXBlLFxuICBDaGVja291dFNlcnZpY2UsXG4gIENvdW50cnksXG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbiAgVXNlclNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbmltcG9ydCB7IFN1Z2dlc3RlZEFkZHJlc3NEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zaGlwcGluZy1hZGRyZXNzL2FkZHJlc3MtZm9ybS9zdWdnZXN0ZWQtYWRkcmVzc2VzLWRpYWxvZy9zdWdnZXN0ZWQtYWRkcmVzc2VzLWRpYWxvZy5jb21wb25lbnQnOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG5pbXBvcnQgeyBJQ09OX1RZUEVTIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2luZGV4JztcblxudHlwZSBtb250aFR5cGUgPSB7IGlkOiBudW1iZXI7IG5hbWU6IHN0cmluZyB9O1xudHlwZSB5ZWFyVHlwZSA9IHsgaWQ6IG51bWJlcjsgbmFtZTogbnVtYmVyIH07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXBheW1lbnQtZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXltZW50LWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUGF5bWVudEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGljb25UeXBlcyA9IElDT05fVFlQRVM7XG5cbiAgcHJpdmF0ZSBjaGVja2JveFN1YjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGFkZHJlc3NWZXJpZnlTdWI6IFN1YnNjcmlwdGlvbjtcbiAgc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmOiBOZ2JNb2RhbFJlZjtcbiAgbW9udGhzOiBtb250aFR5cGVbXSA9IFtdO1xuICB5ZWFyczogeWVhclR5cGVbXSA9IFtdO1xuXG4gIGNhcmRUeXBlcyQ6IE9ic2VydmFibGU8Q2FyZFR5cGVbXT47XG4gIHNoaXBwaW5nQWRkcmVzcyQ6IE9ic2VydmFibGU8QWRkcmVzcz47XG4gIGNvdW50cmllcyQ6IE9ic2VydmFibGU8Q291bnRyeVtdPjtcbiAgc2FtZUFzU2hpcHBpbmdBZGRyZXNzID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwYXltZW50TWV0aG9kc0NvdW50OiBudW1iZXI7XG5cbiAgQE91dHB1dCgpXG4gIGdvQmFjayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBPdXRwdXQoKVxuICBjbG9zZUZvcm0gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAT3V0cHV0KClcbiAgYWRkUGF5bWVudEluZm8gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwYXltZW50OiBGb3JtR3JvdXAgPSB0aGlzLmZiLmdyb3VwKHtcbiAgICBkZWZhdWx0UGF5bWVudDogW2ZhbHNlXSxcbiAgICBhY2NvdW50SG9sZGVyTmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICBjYXJkTnVtYmVyOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIGNhcmRUeXBlOiB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGNvZGU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgfSksXG4gICAgZXhwaXJ5TW9udGg6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgZXhwaXJ5WWVhcjogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICBjdm46IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gIH0pO1xuXG4gIGJpbGxpbmdBZGRyZXNzOiBGb3JtR3JvdXAgPSB0aGlzLmZiLmdyb3VwKHtcbiAgICBmaXJzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgbGFzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgbGluZTE6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgbGluZTI6IFsnJ10sXG4gICAgdG93bjogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICBjb3VudHJ5OiB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGlzb2NvZGU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgfSksXG4gICAgcG9zdGFsQ29kZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U2VydmljZTogQ2hlY2tvdXRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWxcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZXhwTW9udGhBbmRZZWFyKCk7XG4gICAgdGhpcy5jb3VudHJpZXMkID0gdGhpcy51c2VyU2VydmljZS5nZXRBbGxCaWxsaW5nQ291bnRyaWVzKCkucGlwZShcbiAgICAgIHRhcChjb3VudHJpZXMgPT4ge1xuICAgICAgICAvLyBJZiB0aGUgc3RvcmUgaXMgZW1wdHkgZmV0Y2ggY291bnRyaWVzLiBUaGlzIGlzIGFsc28gdXNlZCB3aGVuIGNoYW5naW5nIGxhbmd1YWdlLlxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoY291bnRyaWVzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvYWRCaWxsaW5nQ291bnRyaWVzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuY2FyZFR5cGVzJCA9IHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmdldENhcmRUeXBlcygpLnBpcGUoXG4gICAgICB0YXAoY2FyZFR5cGVzID0+IHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGNhcmRUeXBlcykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5jaGVja291dFNlcnZpY2UubG9hZFN1cHBvcnRlZENhcmRUeXBlcygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLnNoaXBwaW5nQWRkcmVzcyQgPSB0aGlzLmNoZWNrb3V0U2VydmljZS5nZXREZWxpdmVyeUFkZHJlc3MoKTtcblxuICAgIHRoaXMuY2hlY2tib3hTdWIgPSB0aGlzLnNob3dTYW1lQXNTaGlwcGluZ0FkZHJlc3NDaGVja2JveCgpLnN1YnNjcmliZShcbiAgICAgIChzaG91bGRTaG93Q2hlY2tib3g6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgLy8gdGhpcyBvcGVyYXRpb24gbWFrZXMgc3VyZSB0aGUgY2hlY2tib3ggaXMgbm90IGNoZWNrZWQgaWYgbm90IHNob3duIGFuZCB2aWNlIHZlcnNhXG4gICAgICAgIHRoaXMuc2FtZUFzU2hpcHBpbmdBZGRyZXNzID0gc2hvdWxkU2hvd0NoZWNrYm94O1xuICAgICAgfVxuICAgICk7XG5cbiAgICAvLyB2ZXJpZnkgdGhlIG5ldyBhZGRlZCBhZGRyZXNzXG4gICAgdGhpcy5hZGRyZXNzVmVyaWZ5U3ViID0gdGhpcy5jaGVja291dFNlcnZpY2VcbiAgICAgIC5nZXRBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cygpXG4gICAgICAuc3Vic2NyaWJlKChyZXN1bHRzOiBBZGRyZXNzVmFsaWRhdGlvbikgPT4ge1xuICAgICAgICBpZiAocmVzdWx0cyA9PT0gJ0ZBSUwnKSB7XG4gICAgICAgICAgdGhpcy5jaGVja291dFNlcnZpY2UuY2xlYXJBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cygpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdHMuZGVjaXNpb24gPT09ICdBQ0NFUFQnKSB7XG4gICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0cy5kZWNpc2lvbiA9PT0gJ1JFSkVDVCcpIHtcbiAgICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICAgIHsga2V5OiAnYWRkcmVzc0Zvcm0uaW52YWxpZEFkZHJlc3MnIH0sXG4gICAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUlxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5jaGVja291dFNlcnZpY2UuY2xlYXJBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cygpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdHMuZGVjaXNpb24gPT09ICdSRVZJRVcnKSB7XG4gICAgICAgICAgdGhpcy5vcGVuU3VnZ2VzdGVkQWRkcmVzcyhyZXN1bHRzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBleHBNb250aEFuZFllYXIoKTogdm9pZCB7XG4gICAgY29uc3QgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIHRoaXMueWVhcnMucHVzaCh7IGlkOiBpICsgMSwgbmFtZTogeWVhciArIGkgfSk7XG4gICAgfVxuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDEyOyBqKyspIHtcbiAgICAgIGlmIChqIDwgMTApIHtcbiAgICAgICAgdGhpcy5tb250aHMucHVzaCh7IGlkOiBqLCBuYW1lOiAnMCcgKyBqLnRvU3RyaW5nKCkgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1vbnRocy5wdXNoKHsgaWQ6IGosIG5hbWU6IGoudG9TdHJpbmcoKSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0b2dnbGVEZWZhdWx0UGF5bWVudE1ldGhvZCgpOiB2b2lkIHtcbiAgICB0aGlzLnBheW1lbnQudmFsdWUuZGVmYXVsdFBheW1lbnQgPSAhdGhpcy5wYXltZW50LnZhbHVlLmRlZmF1bHRQYXltZW50O1xuICB9XG5cbiAgcGF5bWVudFNlbGVjdGVkKGNhcmQ6IENhcmRUeXBlKTogdm9pZCB7XG4gICAgdGhpcy5wYXltZW50Wydjb250cm9scyddLmNhcmRUeXBlWydjb250cm9scyddLmNvZGUuc2V0VmFsdWUoY2FyZC5jb2RlKTtcbiAgfVxuXG4gIG1vbnRoU2VsZWN0ZWQobW9udGg6IG1vbnRoVHlwZSk6IHZvaWQge1xuICAgIHRoaXMucGF5bWVudFsnY29udHJvbHMnXS5leHBpcnlNb250aC5zZXRWYWx1ZShtb250aC5uYW1lKTtcbiAgfVxuXG4gIHllYXJTZWxlY3RlZCh5ZWFyOiB5ZWFyVHlwZSk6IHZvaWQge1xuICAgIHRoaXMucGF5bWVudFsnY29udHJvbHMnXS5leHBpcnlZZWFyLnNldFZhbHVlKHllYXIubmFtZSk7XG4gIH1cblxuICB0b2dnbGVTYW1lQXNTaGlwcGluZ0FkZHJlc3MoKTogdm9pZCB7XG4gICAgdGhpcy5zYW1lQXNTaGlwcGluZ0FkZHJlc3MgPSAhdGhpcy5zYW1lQXNTaGlwcGluZ0FkZHJlc3M7XG4gIH1cblxuICBpc0NvbnRpbnVlQnV0dG9uRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMucGF5bWVudC5pbnZhbGlkIHx8XG4gICAgICAoIXRoaXMuc2FtZUFzU2hpcHBpbmdBZGRyZXNzICYmIHRoaXMuYmlsbGluZ0FkZHJlc3MuaW52YWxpZClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBzaGlwcGluZyBhZGRyZXNzIGNhbiBhbHNvIGJlIGEgYmlsbGluZyBhZGRyZXNzXG4gICAqXG4gICAqIEBtZW1iZXJvZiBQYXltZW50Rm9ybUNvbXBvbmVudFxuICAgKi9cbiAgc2hvd1NhbWVBc1NoaXBwaW5nQWRkcmVzc0NoZWNrYm94KCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KHRoaXMuY291bnRyaWVzJCwgdGhpcy5zaGlwcGluZ0FkZHJlc3MkKS5waXBlKFxuICAgICAgbWFwKChbY291bnRyaWVzLCBhZGRyZXNzXSkgPT4ge1xuICAgICAgICByZXR1cm4gISFjb3VudHJpZXMuZmlsdGVyKFxuICAgICAgICAgIChjb3VudHJ5OiBDb3VudHJ5KTogYm9vbGVhbiA9PlxuICAgICAgICAgICAgY291bnRyeS5pc29jb2RlID09PSBhZGRyZXNzLmNvdW50cnkuaXNvY29kZVxuICAgICAgICApLmxlbmd0aDtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldEFkZHJlc3NDYXJkQ29udGVudChhZGRyZXNzOiBBZGRyZXNzKTogQ2FyZCB7XG4gICAgbGV0IHJlZ2lvbiA9ICcnO1xuICAgIGlmIChhZGRyZXNzLnJlZ2lvbiAmJiBhZGRyZXNzLnJlZ2lvbi5pc29jb2RlKSB7XG4gICAgICByZWdpb24gPSBhZGRyZXNzLnJlZ2lvbi5pc29jb2RlICsgJywgJztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGV4dEJvbGQ6IGFkZHJlc3MuZmlyc3ROYW1lICsgJyAnICsgYWRkcmVzcy5sYXN0TmFtZSxcbiAgICAgIHRleHQ6IFtcbiAgICAgICAgYWRkcmVzcy5saW5lMSxcbiAgICAgICAgYWRkcmVzcy5saW5lMixcbiAgICAgICAgYWRkcmVzcy50b3duICsgJywgJyArIHJlZ2lvbiArIGFkZHJlc3MuY291bnRyeS5pc29jb2RlLFxuICAgICAgICBhZGRyZXNzLnBvc3RhbENvZGUsXG4gICAgICAgIGFkZHJlc3MucGhvbmUsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICBvcGVuU3VnZ2VzdGVkQWRkcmVzcyhyZXN1bHRzOiBBZGRyZXNzVmFsaWRhdGlvbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5zdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWYpIHtcbiAgICAgIHRoaXMuc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihcbiAgICAgICAgU3VnZ2VzdGVkQWRkcmVzc0RpYWxvZ0NvbXBvbmVudCxcbiAgICAgICAgeyBjZW50ZXJlZDogdHJ1ZSwgc2l6ZTogJ2xnJyB9XG4gICAgICApO1xuICAgICAgdGhpcy5zdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWYuY29tcG9uZW50SW5zdGFuY2UuZW50ZXJlZEFkZHJlc3MgPSB0aGlzLmJpbGxpbmdBZGRyZXNzLnZhbHVlO1xuICAgICAgdGhpcy5zdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWYuY29tcG9uZW50SW5zdGFuY2Uuc3VnZ2VzdGVkQWRkcmVzc2VzID1cbiAgICAgICAgcmVzdWx0cy5zdWdnZXN0ZWRBZGRyZXNzZXM7XG4gICAgICB0aGlzLnN1Z2dlc3RlZEFkZHJlc3NNb2RhbFJlZi5yZXN1bHRcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNsZWFyQWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKTtcbiAgICAgICAgICB0aGlzLnN1Z2dlc3RlZEFkZHJlc3NNb2RhbFJlZiA9IG51bGw7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgLy8gdGhpcyAgY2FsbGJhY2sgaXMgY2FsbGVkIHdoZW4gbW9kYWwgaXMgY2xvc2VkIHdpdGggRXNjIGtleSBvciBjbGlja2luZyBiYWNrZHJvcFxuICAgICAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNsZWFyQWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKTtcbiAgICAgICAgICB0aGlzLnN1Z2dlc3RlZEFkZHJlc3NNb2RhbFJlZiA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2VGb3JtLmVtaXQoKTtcbiAgfVxuXG4gIGJhY2soKTogdm9pZCB7XG4gICAgdGhpcy5nb0JhY2suZW1pdCgpO1xuICB9XG5cbiAgdmVyaWZ5QWRkcmVzcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zYW1lQXNTaGlwcGluZ0FkZHJlc3MpIHtcbiAgICAgIHRoaXMubmV4dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoZWNrb3V0U2VydmljZS52ZXJpZnlBZGRyZXNzKHRoaXMuYmlsbGluZ0FkZHJlc3MudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG5leHQoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRQYXltZW50SW5mby5lbWl0KHtcbiAgICAgIHBheW1lbnREZXRhaWxzOiB0aGlzLnBheW1lbnQudmFsdWUsXG4gICAgICBiaWxsaW5nQWRkcmVzczogdGhpcy5zYW1lQXNTaGlwcGluZ0FkZHJlc3NcbiAgICAgICAgPyBudWxsXG4gICAgICAgIDogdGhpcy5iaWxsaW5nQWRkcmVzcy52YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmNoZWNrYm94U3ViKSB7XG4gICAgICB0aGlzLmNoZWNrYm94U3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmFkZHJlc3NWZXJpZnlTdWIpIHtcbiAgICAgIHRoaXMuYWRkcmVzc1ZlcmlmeVN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19