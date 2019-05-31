/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CheckoutService, GlobalMessageService, GlobalMessageType, UserService, } from '@spartacus/core';
import { ICON_TYPE } from '../../../../../cms-components/misc/icon/index';
// tslint:disable-line
import { SuggestedAddressDialogComponent } from '../../shipping-address/address-form/suggested-addresses-dialog/suggested-addresses-dialog.component'; // tslint:disable-line
// tslint:disable-line
import { ModalService, } from '../../../../../shared/components/modal/index';
var PaymentFormComponent = /** @class */ (function () {
    function PaymentFormComponent(checkoutService, userService, globalMessageService, fb, modalService) {
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
    PaymentFormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.expMonthAndYear();
        this.countries$ = this.userService.getAllBillingCountries().pipe(tap(function (countries) {
            // If the store is empty fetch countries. This is also used when changing language.
            if (Object.keys(countries).length === 0) {
                _this.userService.loadBillingCountries();
            }
        }));
        this.cardTypes$ = this.checkoutService.getCardTypes().pipe(tap(function (cardTypes) {
            if (Object.keys(cardTypes).length === 0) {
                _this.checkoutService.loadSupportedCardTypes();
            }
        }));
        this.shippingAddress$ = this.checkoutService.getDeliveryAddress();
        this.checkboxSub = this.showSameAsShippingAddressCheckbox().subscribe(function (shouldShowCheckbox) {
            // this operation makes sure the checkbox is not checked if not shown and vice versa
            _this.sameAsShippingAddress = shouldShowCheckbox;
        });
        // verify the new added address
        this.addressVerifySub = this.checkoutService
            .getAddressVerificationResults()
            .subscribe(function (results) {
            if (results === 'FAIL') {
                _this.checkoutService.clearAddressVerificationResults();
            }
            else if (results.decision === 'ACCEPT') {
                _this.next();
            }
            else if (results.decision === 'REJECT') {
                _this.globalMessageService.add({ key: 'addressForm.invalidAddress' }, GlobalMessageType.MSG_TYPE_ERROR);
                _this.checkoutService.clearAddressVerificationResults();
            }
            else if (results.decision === 'REVIEW') {
                _this.openSuggestedAddress(results);
            }
        });
    };
    /**
     * @return {?}
     */
    PaymentFormComponent.prototype.expMonthAndYear = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var year = new Date().getFullYear();
        for (var i = 0; i < 10; i++) {
            this.years.push({ id: i + 1, name: year + i });
        }
        for (var j = 1; j <= 12; j++) {
            if (j < 10) {
                this.months.push({ id: j, name: '0' + j.toString() });
            }
            else {
                this.months.push({ id: j, name: j.toString() });
            }
        }
    };
    /**
     * @return {?}
     */
    PaymentFormComponent.prototype.toggleDefaultPaymentMethod = /**
     * @return {?}
     */
    function () {
        this.payment.value.defaultPayment = !this.payment.value.defaultPayment;
    };
    /**
     * @param {?} card
     * @return {?}
     */
    PaymentFormComponent.prototype.paymentSelected = /**
     * @param {?} card
     * @return {?}
     */
    function (card) {
        this.payment['controls'].cardType['controls'].code.setValue(card.code);
    };
    /**
     * @param {?} month
     * @return {?}
     */
    PaymentFormComponent.prototype.monthSelected = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        this.payment['controls'].expiryMonth.setValue(month.name);
    };
    /**
     * @param {?} year
     * @return {?}
     */
    PaymentFormComponent.prototype.yearSelected = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this.payment['controls'].expiryYear.setValue(year.name);
    };
    /**
     * @return {?}
     */
    PaymentFormComponent.prototype.toggleSameAsShippingAddress = /**
     * @return {?}
     */
    function () {
        this.sameAsShippingAddress = !this.sameAsShippingAddress;
    };
    /**
     * @return {?}
     */
    PaymentFormComponent.prototype.isContinueButtonDisabled = /**
     * @return {?}
     */
    function () {
        return (this.payment.invalid ||
            (!this.sameAsShippingAddress && this.billingAddress.invalid));
    };
    /**
     * Check if the shipping address can also be a billing address
     *
     * @memberof PaymentFormComponent
     */
    /**
     * Check if the shipping address can also be a billing address
     *
     * \@memberof PaymentFormComponent
     * @return {?}
     */
    PaymentFormComponent.prototype.showSameAsShippingAddressCheckbox = /**
     * Check if the shipping address can also be a billing address
     *
     * \@memberof PaymentFormComponent
     * @return {?}
     */
    function () {
        return combineLatest(this.countries$, this.shippingAddress$).pipe(map(function (_a) {
            var _b = tslib_1.__read(_a, 2), countries = _b[0], address = _b[1];
            return !!countries.filter(function (country) {
                return country.isocode === address.country.isocode;
            }).length;
        }));
    };
    /**
     * @param {?} address
     * @return {?}
     */
    PaymentFormComponent.prototype.getAddressCardContent = /**
     * @param {?} address
     * @return {?}
     */
    function (address) {
        /** @type {?} */
        var region = '';
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
    };
    /**
     * @param {?} results
     * @return {?}
     */
    PaymentFormComponent.prototype.openSuggestedAddress = /**
     * @param {?} results
     * @return {?}
     */
    function (results) {
        var _this = this;
        if (!this.suggestedAddressModalRef) {
            this.suggestedAddressModalRef = this.modalService.open(SuggestedAddressDialogComponent, { centered: true, size: 'lg' });
            this.suggestedAddressModalRef.componentInstance.enteredAddress = this.billingAddress.value;
            this.suggestedAddressModalRef.componentInstance.suggestedAddresses =
                results.suggestedAddresses;
            this.suggestedAddressModalRef.result
                .then(function () {
                _this.checkoutService.clearAddressVerificationResults();
                _this.suggestedAddressModalRef = null;
            })
                .catch(function () {
                // this  callback is called when modal is closed with Esc key or clicking backdrop
                _this.checkoutService.clearAddressVerificationResults();
                _this.suggestedAddressModalRef = null;
            });
        }
    };
    /**
     * @return {?}
     */
    PaymentFormComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.closeForm.emit();
    };
    /**
     * @return {?}
     */
    PaymentFormComponent.prototype.back = /**
     * @return {?}
     */
    function () {
        this.goBack.emit();
    };
    /**
     * @return {?}
     */
    PaymentFormComponent.prototype.verifyAddress = /**
     * @return {?}
     */
    function () {
        if (this.sameAsShippingAddress) {
            this.next();
        }
        else {
            this.checkoutService.verifyAddress(this.billingAddress.value);
        }
    };
    /**
     * @return {?}
     */
    PaymentFormComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        this.addPaymentInfo.emit({
            paymentDetails: this.payment.value,
            billingAddress: this.sameAsShippingAddress
                ? null
                : this.billingAddress.value,
        });
    };
    /**
     * @return {?}
     */
    PaymentFormComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.checkboxSub) {
            this.checkboxSub.unsubscribe();
        }
        if (this.addressVerifySub) {
            this.addressVerifySub.unsubscribe();
        }
    };
    PaymentFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-payment-form',
                    template: "<!-- FORM -->\n<div [formGroup]=\"payment\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <div class=\"form-group\">\n        <ng-container *ngIf=\"(cardTypes$ | async) as cardTypes\">\n          <div *ngIf=\"cardTypes.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'paymentForm.paymentType' | cxTranslate\n              }}</span>\n              <ng-select\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"cardTypes\"\n                bindLabel=\"name\"\n                bindValue=\"code\"\n                placeholder=\"{{ 'paymentForm.selectOne' | cxTranslate }}\"\n                (change)=\"paymentSelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'paymentForm.accountHolderName.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            required\n            placeholder=\"{{\n              'paymentForm.accountHolderName.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"accountHolderName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'paymentForm.cardNumber' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            formControlName=\"cardNumber\"\n          />\n        </label>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content\">{{\n              'paymentForm.expirationDate' | cxTranslate\n            }}</span>\n            <div class=\"cx-payment-form-exp-date row\">\n              <div class=\"col-sm-6 col-md-5\">\n                <ng-select\n                  [searchable]=\"false\"\n                  [clearable]=\"false\"\n                  [items]=\"months\"\n                  bindLabel=\"name\"\n                  bindValue=\"expiryMonth\"\n                  placeholder=\"{{ 'paymentForm.monthMask' | cxTranslate }}\"\n                  (change)=\"monthSelected($event)\"\n                >\n                </ng-select>\n              </div>\n              <div class=\"col-sm-6 col-md-7\">\n                <ng-select\n                  [searchable]=\"false\"\n                  [clearable]=\"false\"\n                  [items]=\"years\"\n                  bindLabel=\"name\"\n                  bindValue=\"expiryYear\"\n                  placeholder=\"{{ 'paymentForm.yearMask' | cxTranslate }}\"\n                  (change)=\"yearSelected($event)\"\n                >\n                </ng-select>\n              </div>\n            </div>\n          </label>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content\">\n              {{ 'paymentForm.securityCode' | cxTranslate }}\n              <cx-icon\n                [type]=\"iconTypes.INFO\"\n                class=\"cx-payment-form-tooltip\"\n                placement=\"right\"\n                title=\"{{ 'paymentForm.securityCodeTitle' | cxTranslate }}\"\n                alt=\"\"\n              ></cx-icon>\n            </span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"cVVNumber\"\n              required\n              formControlName=\"cvn\"\n            />\n          </label>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"form-check\">\n          <label>\n            <input\n              type=\"checkbox\"\n              class=\"form-check-input\"\n              (change)=\"toggleDefaultPaymentMethod()\"\n            />\n            <span class=\"form-check-label\">{{\n              'paymentForm.setAsDefault' | cxTranslate\n            }}</span>\n          </label>\n        </div>\n      </div>\n\n      <!-- BILLING -->\n      <div class=\"cx-payment-form-billing\">\n        <div class=\"cx-payment-form-billing-address\">\n          {{ 'paymentForm.billingAddress' | cxTranslate }}\n        </div>\n\n        <!-- SAME AS SHIPPING CHECKBOX -->\n        <ng-container *ngIf=\"(showSameAsShippingAddressCheckbox() | async)\">\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  class=\"form-check-input\"\n                  [checked]=\"sameAsShippingAddress\"\n                  (change)=\"toggleSameAsShippingAddress()\"\n                />\n                <span class=\"form-check-label\">{{\n                  'paymentForm.sameAsShippingAddress' | cxTranslate\n                }}</span>\n              </label>\n            </div>\n          </div>\n        </ng-container>\n\n        <!-- BILLING INFO COMPONENT -->\n        <ng-container\n          *ngIf=\"\n            (sameAsShippingAddress && shippingAddress$\n              | async) as shippingAddress;\n            else billingAddressForm\n          \"\n        >\n          <cx-card [content]=\"getAddressCardContent(shippingAddress)\"></cx-card>\n        </ng-container>\n\n        <ng-template #billingAddressForm>\n          <cx-billing-address-form\n            [billingAddress]=\"billingAddress\"\n            [countries$]=\"countries$\"\n          >\n          </cx-billing-address-form>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n\n  <!-- BUTTON SECTION -->\n  <div class=\"cx-checkout-btns row\">\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        *ngIf=\"paymentMethodsCount === 0\"\n        class=\"btn btn-block btn-action\"\n        (click)=\"back()\"\n      >\n        {{ 'common.back' | cxTranslate }}\n      </button>\n      <button\n        *ngIf=\"paymentMethodsCount > 0\"\n        class=\"btn btn-block btn-action\"\n        (click)=\"close()\"\n      >\n        {{ 'paymentForm.changePayment' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"isContinueButtonDisabled()\"\n        (click)=\"next()\"\n      >\n        {{ 'common.continue' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    PaymentFormComponent.ctorParameters = function () { return [
        { type: CheckoutService },
        { type: UserService },
        { type: GlobalMessageService },
        { type: FormBuilder },
        { type: ModalService }
    ]; };
    PaymentFormComponent.propDecorators = {
        paymentMethodsCount: [{ type: Input }],
        goBack: [{ type: Output }],
        closeForm: [{ type: Output }],
        addPaymentInfo: [{ type: Output }]
    };
    return PaymentFormComponent;
}());
export { PaymentFormComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jaGVja291dC9jb21wb25lbnRzL3BheW1lbnQtbWV0aG9kL3BheW1lbnQtZm9ybS9wYXltZW50LWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFDLE9BQU8sRUFJTCxlQUFlLEVBRWYsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixXQUFXLEdBQ1osTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0NBQStDLENBQUM7O0FBRTFFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHFHQUFxRyxDQUFDLENBQUMsc0JBQXNCOztBQUM3SyxPQUFPLEVBRUwsWUFBWSxHQUNiLE1BQU0sOENBQThDLENBQUM7QUFLdEQ7SUF1REUsOEJBQ1ksZUFBZ0MsRUFDaEMsV0FBd0IsRUFDeEIsb0JBQTBDLEVBQzVDLEVBQWUsRUFDZixZQUEwQjtRQUp4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUM1QyxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YsaUJBQVksR0FBWixZQUFZLENBQWM7UUF0RHBDLGNBQVMsR0FBRyxTQUFTLENB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Qjs7Ozs7SUFFdEIsMkNBQWtDOzs7OztJQUNsQyxnREFBdUM7O0lBQ3ZDLHdEQUFtQzs7SUFDbkMsc0NBQXlCOztJQUN6QixxQ0FBdUI7O0lBRXZCLDBDQUFtQzs7SUFDbkMsZ0RBQXNDOztJQUN0QywwQ0FBa0M7O0lBQ2xDLHFEQUE2Qjs7SUFFN0IsbURBQzRCOztJQUU1QixzQ0FDaUM7O0lBRWpDLHlDQUNvQzs7SUFFcEMsOENBQ3lDOztJQUV6Qyx1Q0FVRzs7SUFFSCw4Q0FVRzs7Ozs7SUFHRCwrQ0FBMEM7Ozs7O0lBQzFDLDJDQUFrQzs7Ozs7SUFDbEMsb0RBQW9EOzs7OztJQUNwRCxrQ0FBdUI7Ozs7O0lBQ3ZCLDRDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIEFkZHJlc3MsXG4gIEFkZHJlc3NWYWxpZGF0aW9uLFxuICBDYXJkVHlwZSxcbiAgQ2hlY2tvdXRTZXJ2aWNlLFxuICBDb3VudHJ5LFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIFVzZXJTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2luZGV4JztcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JzsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuaW1wb3J0IHsgU3VnZ2VzdGVkQWRkcmVzc0RpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL3NoaXBwaW5nLWFkZHJlc3MvYWRkcmVzcy1mb3JtL3N1Z2dlc3RlZC1hZGRyZXNzZXMtZGlhbG9nL3N1Z2dlc3RlZC1hZGRyZXNzZXMtZGlhbG9nLmNvbXBvbmVudCc7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbmltcG9ydCB7XG4gIE1vZGFsUmVmLFxuICBNb2RhbFNlcnZpY2UsXG59IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL2luZGV4JztcblxudHlwZSBtb250aFR5cGUgPSB7IGlkOiBudW1iZXI7IG5hbWU6IHN0cmluZyB9O1xudHlwZSB5ZWFyVHlwZSA9IHsgaWQ6IG51bWJlcjsgbmFtZTogbnVtYmVyIH07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXBheW1lbnQtZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXltZW50LWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUGF5bWVudEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcblxuICBwcml2YXRlIGNoZWNrYm94U3ViOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgYWRkcmVzc1ZlcmlmeVN1YjogU3Vic2NyaXB0aW9uO1xuICBzdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWY6IE1vZGFsUmVmO1xuICBtb250aHM6IG1vbnRoVHlwZVtdID0gW107XG4gIHllYXJzOiB5ZWFyVHlwZVtdID0gW107XG5cbiAgY2FyZFR5cGVzJDogT2JzZXJ2YWJsZTxDYXJkVHlwZVtdPjtcbiAgc2hpcHBpbmdBZGRyZXNzJDogT2JzZXJ2YWJsZTxBZGRyZXNzPjtcbiAgY291bnRyaWVzJDogT2JzZXJ2YWJsZTxDb3VudHJ5W10+O1xuICBzYW1lQXNTaGlwcGluZ0FkZHJlc3MgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHBheW1lbnRNZXRob2RzQ291bnQ6IG51bWJlcjtcblxuICBAT3V0cHV0KClcbiAgZ29CYWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQE91dHB1dCgpXG4gIGNsb3NlRm9ybSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBPdXRwdXQoKVxuICBhZGRQYXltZW50SW5mbyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHBheW1lbnQ6IEZvcm1Hcm91cCA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgIGRlZmF1bHRQYXltZW50OiBbZmFsc2VdLFxuICAgIGFjY291bnRIb2xkZXJOYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIGNhcmROdW1iZXI6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgY2FyZFR5cGU6IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgY29kZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9KSxcbiAgICBleHBpcnlNb250aDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICBleHBpcnlZZWFyOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIGN2bjogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgfSk7XG5cbiAgYmlsbGluZ0FkZHJlc3M6IEZvcm1Hcm91cCA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgIGZpcnN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICBsYXN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICBsaW5lMTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICBsaW5lMjogWycnXSxcbiAgICB0b3duOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIGNvdW50cnk6IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgaXNvY29kZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9KSxcbiAgICBwb3N0YWxDb2RlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICB9KTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZXhwTW9udGhBbmRZZWFyKCk7XG4gICAgdGhpcy5jb3VudHJpZXMkID0gdGhpcy51c2VyU2VydmljZS5nZXRBbGxCaWxsaW5nQ291bnRyaWVzKCkucGlwZShcbiAgICAgIHRhcChjb3VudHJpZXMgPT4ge1xuICAgICAgICAvLyBJZiB0aGUgc3RvcmUgaXMgZW1wdHkgZmV0Y2ggY291bnRyaWVzLiBUaGlzIGlzIGFsc28gdXNlZCB3aGVuIGNoYW5naW5nIGxhbmd1YWdlLlxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoY291bnRyaWVzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvYWRCaWxsaW5nQ291bnRyaWVzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuY2FyZFR5cGVzJCA9IHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmdldENhcmRUeXBlcygpLnBpcGUoXG4gICAgICB0YXAoY2FyZFR5cGVzID0+IHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGNhcmRUeXBlcykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5jaGVja291dFNlcnZpY2UubG9hZFN1cHBvcnRlZENhcmRUeXBlcygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLnNoaXBwaW5nQWRkcmVzcyQgPSB0aGlzLmNoZWNrb3V0U2VydmljZS5nZXREZWxpdmVyeUFkZHJlc3MoKTtcblxuICAgIHRoaXMuY2hlY2tib3hTdWIgPSB0aGlzLnNob3dTYW1lQXNTaGlwcGluZ0FkZHJlc3NDaGVja2JveCgpLnN1YnNjcmliZShcbiAgICAgIChzaG91bGRTaG93Q2hlY2tib3g6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgLy8gdGhpcyBvcGVyYXRpb24gbWFrZXMgc3VyZSB0aGUgY2hlY2tib3ggaXMgbm90IGNoZWNrZWQgaWYgbm90IHNob3duIGFuZCB2aWNlIHZlcnNhXG4gICAgICAgIHRoaXMuc2FtZUFzU2hpcHBpbmdBZGRyZXNzID0gc2hvdWxkU2hvd0NoZWNrYm94O1xuICAgICAgfVxuICAgICk7XG5cbiAgICAvLyB2ZXJpZnkgdGhlIG5ldyBhZGRlZCBhZGRyZXNzXG4gICAgdGhpcy5hZGRyZXNzVmVyaWZ5U3ViID0gdGhpcy5jaGVja291dFNlcnZpY2VcbiAgICAgIC5nZXRBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cygpXG4gICAgICAuc3Vic2NyaWJlKChyZXN1bHRzOiBBZGRyZXNzVmFsaWRhdGlvbikgPT4ge1xuICAgICAgICBpZiAocmVzdWx0cyA9PT0gJ0ZBSUwnKSB7XG4gICAgICAgICAgdGhpcy5jaGVja291dFNlcnZpY2UuY2xlYXJBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cygpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdHMuZGVjaXNpb24gPT09ICdBQ0NFUFQnKSB7XG4gICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0cy5kZWNpc2lvbiA9PT0gJ1JFSkVDVCcpIHtcbiAgICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICAgIHsga2V5OiAnYWRkcmVzc0Zvcm0uaW52YWxpZEFkZHJlc3MnIH0sXG4gICAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUlxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5jaGVja291dFNlcnZpY2UuY2xlYXJBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cygpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdHMuZGVjaXNpb24gPT09ICdSRVZJRVcnKSB7XG4gICAgICAgICAgdGhpcy5vcGVuU3VnZ2VzdGVkQWRkcmVzcyhyZXN1bHRzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBleHBNb250aEFuZFllYXIoKTogdm9pZCB7XG4gICAgY29uc3QgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIHRoaXMueWVhcnMucHVzaCh7IGlkOiBpICsgMSwgbmFtZTogeWVhciArIGkgfSk7XG4gICAgfVxuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDEyOyBqKyspIHtcbiAgICAgIGlmIChqIDwgMTApIHtcbiAgICAgICAgdGhpcy5tb250aHMucHVzaCh7IGlkOiBqLCBuYW1lOiAnMCcgKyBqLnRvU3RyaW5nKCkgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1vbnRocy5wdXNoKHsgaWQ6IGosIG5hbWU6IGoudG9TdHJpbmcoKSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0b2dnbGVEZWZhdWx0UGF5bWVudE1ldGhvZCgpOiB2b2lkIHtcbiAgICB0aGlzLnBheW1lbnQudmFsdWUuZGVmYXVsdFBheW1lbnQgPSAhdGhpcy5wYXltZW50LnZhbHVlLmRlZmF1bHRQYXltZW50O1xuICB9XG5cbiAgcGF5bWVudFNlbGVjdGVkKGNhcmQ6IENhcmRUeXBlKTogdm9pZCB7XG4gICAgdGhpcy5wYXltZW50Wydjb250cm9scyddLmNhcmRUeXBlWydjb250cm9scyddLmNvZGUuc2V0VmFsdWUoY2FyZC5jb2RlKTtcbiAgfVxuXG4gIG1vbnRoU2VsZWN0ZWQobW9udGg6IG1vbnRoVHlwZSk6IHZvaWQge1xuICAgIHRoaXMucGF5bWVudFsnY29udHJvbHMnXS5leHBpcnlNb250aC5zZXRWYWx1ZShtb250aC5uYW1lKTtcbiAgfVxuXG4gIHllYXJTZWxlY3RlZCh5ZWFyOiB5ZWFyVHlwZSk6IHZvaWQge1xuICAgIHRoaXMucGF5bWVudFsnY29udHJvbHMnXS5leHBpcnlZZWFyLnNldFZhbHVlKHllYXIubmFtZSk7XG4gIH1cblxuICB0b2dnbGVTYW1lQXNTaGlwcGluZ0FkZHJlc3MoKTogdm9pZCB7XG4gICAgdGhpcy5zYW1lQXNTaGlwcGluZ0FkZHJlc3MgPSAhdGhpcy5zYW1lQXNTaGlwcGluZ0FkZHJlc3M7XG4gIH1cblxuICBpc0NvbnRpbnVlQnV0dG9uRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMucGF5bWVudC5pbnZhbGlkIHx8XG4gICAgICAoIXRoaXMuc2FtZUFzU2hpcHBpbmdBZGRyZXNzICYmIHRoaXMuYmlsbGluZ0FkZHJlc3MuaW52YWxpZClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBzaGlwcGluZyBhZGRyZXNzIGNhbiBhbHNvIGJlIGEgYmlsbGluZyBhZGRyZXNzXG4gICAqXG4gICAqIEBtZW1iZXJvZiBQYXltZW50Rm9ybUNvbXBvbmVudFxuICAgKi9cbiAgc2hvd1NhbWVBc1NoaXBwaW5nQWRkcmVzc0NoZWNrYm94KCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KHRoaXMuY291bnRyaWVzJCwgdGhpcy5zaGlwcGluZ0FkZHJlc3MkKS5waXBlKFxuICAgICAgbWFwKChbY291bnRyaWVzLCBhZGRyZXNzXSkgPT4ge1xuICAgICAgICByZXR1cm4gISFjb3VudHJpZXMuZmlsdGVyKFxuICAgICAgICAgIChjb3VudHJ5OiBDb3VudHJ5KTogYm9vbGVhbiA9PlxuICAgICAgICAgICAgY291bnRyeS5pc29jb2RlID09PSBhZGRyZXNzLmNvdW50cnkuaXNvY29kZVxuICAgICAgICApLmxlbmd0aDtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldEFkZHJlc3NDYXJkQ29udGVudChhZGRyZXNzOiBBZGRyZXNzKTogQ2FyZCB7XG4gICAgbGV0IHJlZ2lvbiA9ICcnO1xuICAgIGlmIChhZGRyZXNzLnJlZ2lvbiAmJiBhZGRyZXNzLnJlZ2lvbi5pc29jb2RlKSB7XG4gICAgICByZWdpb24gPSBhZGRyZXNzLnJlZ2lvbi5pc29jb2RlICsgJywgJztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGV4dEJvbGQ6IGFkZHJlc3MuZmlyc3ROYW1lICsgJyAnICsgYWRkcmVzcy5sYXN0TmFtZSxcbiAgICAgIHRleHQ6IFtcbiAgICAgICAgYWRkcmVzcy5saW5lMSxcbiAgICAgICAgYWRkcmVzcy5saW5lMixcbiAgICAgICAgYWRkcmVzcy50b3duICsgJywgJyArIHJlZ2lvbiArIGFkZHJlc3MuY291bnRyeS5pc29jb2RlLFxuICAgICAgICBhZGRyZXNzLnBvc3RhbENvZGUsXG4gICAgICAgIGFkZHJlc3MucGhvbmUsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICBvcGVuU3VnZ2VzdGVkQWRkcmVzcyhyZXN1bHRzOiBBZGRyZXNzVmFsaWRhdGlvbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5zdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWYpIHtcbiAgICAgIHRoaXMuc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihcbiAgICAgICAgU3VnZ2VzdGVkQWRkcmVzc0RpYWxvZ0NvbXBvbmVudCxcbiAgICAgICAgeyBjZW50ZXJlZDogdHJ1ZSwgc2l6ZTogJ2xnJyB9XG4gICAgICApO1xuICAgICAgdGhpcy5zdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWYuY29tcG9uZW50SW5zdGFuY2UuZW50ZXJlZEFkZHJlc3MgPSB0aGlzLmJpbGxpbmdBZGRyZXNzLnZhbHVlO1xuICAgICAgdGhpcy5zdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWYuY29tcG9uZW50SW5zdGFuY2Uuc3VnZ2VzdGVkQWRkcmVzc2VzID1cbiAgICAgICAgcmVzdWx0cy5zdWdnZXN0ZWRBZGRyZXNzZXM7XG4gICAgICB0aGlzLnN1Z2dlc3RlZEFkZHJlc3NNb2RhbFJlZi5yZXN1bHRcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNsZWFyQWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKTtcbiAgICAgICAgICB0aGlzLnN1Z2dlc3RlZEFkZHJlc3NNb2RhbFJlZiA9IG51bGw7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgLy8gdGhpcyAgY2FsbGJhY2sgaXMgY2FsbGVkIHdoZW4gbW9kYWwgaXMgY2xvc2VkIHdpdGggRXNjIGtleSBvciBjbGlja2luZyBiYWNrZHJvcFxuICAgICAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNsZWFyQWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKTtcbiAgICAgICAgICB0aGlzLnN1Z2dlc3RlZEFkZHJlc3NNb2RhbFJlZiA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2VGb3JtLmVtaXQoKTtcbiAgfVxuXG4gIGJhY2soKTogdm9pZCB7XG4gICAgdGhpcy5nb0JhY2suZW1pdCgpO1xuICB9XG5cbiAgdmVyaWZ5QWRkcmVzcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zYW1lQXNTaGlwcGluZ0FkZHJlc3MpIHtcbiAgICAgIHRoaXMubmV4dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoZWNrb3V0U2VydmljZS52ZXJpZnlBZGRyZXNzKHRoaXMuYmlsbGluZ0FkZHJlc3MudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG5leHQoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRQYXltZW50SW5mby5lbWl0KHtcbiAgICAgIHBheW1lbnREZXRhaWxzOiB0aGlzLnBheW1lbnQudmFsdWUsXG4gICAgICBiaWxsaW5nQWRkcmVzczogdGhpcy5zYW1lQXNTaGlwcGluZ0FkZHJlc3NcbiAgICAgICAgPyBudWxsXG4gICAgICAgIDogdGhpcy5iaWxsaW5nQWRkcmVzcy52YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmNoZWNrYm94U3ViKSB7XG4gICAgICB0aGlzLmNoZWNrYm94U3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmFkZHJlc3NWZXJpZnlTdWIpIHtcbiAgICAgIHRoaXMuYWRkcmVzc1ZlcmlmeVN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19