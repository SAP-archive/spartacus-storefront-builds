/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CheckoutDeliveryService, CheckoutPaymentService, GlobalMessageService, GlobalMessageType, UserPaymentService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';
// tslint:disable-line
import { ModalService, } from '../../../../../shared/components/modal/index';
import { ICON_TYPE } from '../../../../misc/icon/index';
import { SuggestedAddressDialogComponent } from '../../shipping-address/address-form/suggested-addresses-dialog/suggested-addresses-dialog.component'; // tslint:disable-line
var PaymentFormComponent = /** @class */ (function () {
    function PaymentFormComponent(checkoutPaymentService, checkoutDeliveryService, userPaymentService, globalMessageService, fb, modalService) {
        this.checkoutPaymentService = checkoutPaymentService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.userPaymentService = userPaymentService;
        this.globalMessageService = globalMessageService;
        this.fb = fb;
        this.modalService = modalService;
        this.iconTypes = ICON_TYPE;
        this.months = [];
        this.years = [];
        this.sameAsShippingAddress = true;
        this.goBack = new EventEmitter();
        this.closeForm = new EventEmitter();
        this.setPaymentDetails = new EventEmitter();
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
            region: this.fb.group({
                isocodeShort: [null, Validators.required],
            }),
            country: this.fb.group({
                isocode: [null, Validators.required],
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
        this.countries$ = this.userPaymentService.getAllBillingCountries().pipe(tap((/**
         * @param {?} countries
         * @return {?}
         */
        function (countries) {
            // If the store is empty fetch countries. This is also used when changing language.
            if (Object.keys(countries).length === 0) {
                _this.userPaymentService.loadBillingCountries();
            }
        })));
        this.cardTypes$ = this.checkoutPaymentService.getCardTypes().pipe(tap((/**
         * @param {?} cardTypes
         * @return {?}
         */
        function (cardTypes) {
            if (Object.keys(cardTypes).length === 0) {
                _this.checkoutPaymentService.loadSupportedCardTypes();
            }
        })));
        this.shippingAddress$ = this.checkoutDeliveryService.getDeliveryAddress();
        this.loading$ = this.checkoutPaymentService.getSetPaymentDetailsResultProcess();
        this.checkboxSub = this.showSameAsShippingAddressCheckbox().subscribe((/**
         * @param {?} shouldShowCheckbox
         * @return {?}
         */
        function (shouldShowCheckbox) {
            // this operation makes sure the checkbox is not checked if not shown and vice versa
            _this.sameAsShippingAddress = shouldShowCheckbox;
        }));
        // verify the new added address
        this.addressVerifySub = this.checkoutDeliveryService
            .getAddressVerificationResults()
            .subscribe((/**
         * @param {?} results
         * @return {?}
         */
        function (results) {
            if (results.decision === 'FAIL') {
                _this.checkoutDeliveryService.clearAddressVerificationResults();
            }
            else if (results.decision === 'ACCEPT') {
                _this.next();
            }
            else if (results.decision === 'REJECT') {
                _this.globalMessageService.add({ key: 'addressForm.invalidAddress' }, GlobalMessageType.MSG_TYPE_ERROR);
                _this.checkoutDeliveryService.clearAddressVerificationResults();
            }
            else if (results.decision === 'REVIEW') {
                _this.openSuggestedAddress(results);
            }
        }));
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
        return combineLatest([this.countries$, this.shippingAddress$]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), countries = _b[0], address = _b[1];
            return (address !== undefined &&
                address.country !== undefined &&
                !!countries.filter((/**
                 * @param {?} country
                 * @return {?}
                 */
                function (country) {
                    return country.isocode === address.country.isocode;
                })).length);
        })));
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
                .then((/**
             * @return {?}
             */
            function () {
                _this.checkoutDeliveryService.clearAddressVerificationResults();
                _this.suggestedAddressModalRef = null;
            }))
                .catch((/**
             * @return {?}
             */
            function () {
                // this  callback is called when modal is closed with Esc key or clicking backdrop
                _this.checkoutDeliveryService.clearAddressVerificationResults();
                _this.suggestedAddressModalRef = null;
            }));
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
            this.checkoutDeliveryService.verifyAddress(this.billingAddress.value);
        }
    };
    /**
     * @return {?}
     */
    PaymentFormComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        this.setPaymentDetails.emit({
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
                    template: "<!-- FORM -->\n<div *ngIf=\"!(loading$ | async).loading; else spinner\" [formGroup]=\"payment\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <div class=\"form-group\">\n        <ng-container *ngIf=\"cardTypes$ | async as cardTypes\">\n          <div *ngIf=\"cardTypes.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'paymentForm.paymentType' | cxTranslate\n              }}</span>\n              <ng-select\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"cardTypes\"\n                bindLabel=\"name\"\n                bindValue=\"code\"\n                placeholder=\"{{ 'paymentForm.selectOne' | cxTranslate }}\"\n                (change)=\"paymentSelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'paymentForm.accountHolderName.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            required\n            placeholder=\"{{\n              'paymentForm.accountHolderName.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"accountHolderName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'paymentForm.cardNumber' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            formControlName=\"cardNumber\"\n          />\n        </label>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content\">{{\n              'paymentForm.expirationDate' | cxTranslate\n            }}</span>\n          </label>\n          <div class=\"cx-payment-form-exp-date row\">\n            <div class=\"col-sm-6 col-md-5\">\n              <ng-select\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"months\"\n                bindLabel=\"name\"\n                bindValue=\"expiryMonth\"\n                placeholder=\"{{ 'paymentForm.monthMask' | cxTranslate }}\"\n                (change)=\"monthSelected($event)\"\n              >\n              </ng-select>\n            </div>\n            <div class=\"col-sm-6 col-md-7\">\n              <ng-select\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"years\"\n                bindLabel=\"name\"\n                bindValue=\"expiryYear\"\n                placeholder=\"{{ 'paymentForm.yearMask' | cxTranslate }}\"\n                (change)=\"yearSelected($event)\"\n              >\n              </ng-select>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content\">\n              {{ 'paymentForm.securityCode' | cxTranslate }}\n              <cx-icon\n                [type]=\"iconTypes.INFO\"\n                class=\"cx-payment-form-tooltip\"\n                placement=\"right\"\n                title=\"{{ 'paymentForm.securityCodeTitle' | cxTranslate }}\"\n                alt=\"\"\n              ></cx-icon>\n            </span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"cVVNumber\"\n              required\n              formControlName=\"cvn\"\n            />\n          </label>\n        </div>\n      </div>\n\n      <div class=\"form-group\" *ngIf=\"setAsDefaultField\">\n        <div class=\"form-check\">\n          <label>\n            <input\n              type=\"checkbox\"\n              class=\"form-check-input\"\n              (change)=\"toggleDefaultPaymentMethod()\"\n            />\n            <span class=\"form-check-label\">{{\n              'paymentForm.setAsDefault' | cxTranslate\n            }}</span>\n          </label>\n        </div>\n      </div>\n\n      <!-- BILLING -->\n      <div class=\"cx-payment-form-billing\">\n        <div class=\"cx-payment-form-billing-address\">\n          {{ 'paymentForm.billingAddress' | cxTranslate }}\n        </div>\n\n        <!-- SAME AS SHIPPING CHECKBOX -->\n        <ng-container *ngIf=\"showSameAsShippingAddressCheckbox() | async\">\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  class=\"form-check-input\"\n                  [checked]=\"sameAsShippingAddress\"\n                  (change)=\"toggleSameAsShippingAddress()\"\n                />\n                <span class=\"form-check-label\">{{\n                  'paymentForm.sameAsShippingAddress' | cxTranslate\n                }}</span>\n              </label>\n            </div>\n          </div>\n        </ng-container>\n\n        <!-- BILLING INFO COMPONENT -->\n        <ng-container\n          *ngIf=\"\n            sameAsShippingAddress && shippingAddress$\n              | async as shippingAddress;\n            else billingAddressForm\n          \"\n        >\n          <cx-card [content]=\"getAddressCardContent(shippingAddress)\"></cx-card>\n        </ng-container>\n\n        <ng-template #billingAddressForm>\n          <cx-billing-address-form\n            [billingAddress]=\"billingAddress\"\n            [countries$]=\"countries$\"\n          >\n          </cx-billing-address-form>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n\n  <!-- BUTTON SECTION -->\n  <div class=\"cx-checkout-btns row\">\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        *ngIf=\"paymentMethodsCount === 0\"\n        class=\"btn btn-block btn-action\"\n        (click)=\"back()\"\n      >\n        {{ 'common.back' | cxTranslate }}\n      </button>\n      <button\n        *ngIf=\"paymentMethodsCount > 0\"\n        class=\"btn btn-block btn-action\"\n        (click)=\"close()\"\n      >\n        {{ 'paymentForm.changePayment' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"isContinueButtonDisabled()\"\n        (click)=\"next()\"\n      >\n        {{ 'common.continue' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n\n<ng-template #spinner>\n  <cx-spinner></cx-spinner>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    PaymentFormComponent.ctorParameters = function () { return [
        { type: CheckoutPaymentService },
        { type: CheckoutDeliveryService },
        { type: UserPaymentService },
        { type: GlobalMessageService },
        { type: FormBuilder },
        { type: ModalService }
    ]; };
    PaymentFormComponent.propDecorators = {
        setAsDefaultField: [{ type: Input }],
        paymentMethodsCount: [{ type: Input }],
        goBack: [{ type: Output }],
        closeForm: [{ type: Output }],
        setPaymentDetails: [{ type: Output }]
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
    PaymentFormComponent.prototype.loading$;
    /** @type {?} */
    PaymentFormComponent.prototype.sameAsShippingAddress;
    /** @type {?} */
    PaymentFormComponent.prototype.setAsDefaultField;
    /** @type {?} */
    PaymentFormComponent.prototype.paymentMethodsCount;
    /** @type {?} */
    PaymentFormComponent.prototype.goBack;
    /** @type {?} */
    PaymentFormComponent.prototype.closeForm;
    /** @type {?} */
    PaymentFormComponent.prototype.setPaymentDetails;
    /** @type {?} */
    PaymentFormComponent.prototype.payment;
    /** @type {?} */
    PaymentFormComponent.prototype.billingAddress;
    /**
     * @type {?}
     * @protected
     */
    PaymentFormComponent.prototype.checkoutPaymentService;
    /**
     * @type {?}
     * @protected
     */
    PaymentFormComponent.prototype.checkoutDeliveryService;
    /**
     * @type {?}
     * @protected
     */
    PaymentFormComponent.prototype.userPaymentService;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NoZWNrb3V0L2NvbXBvbmVudHMvcGF5bWVudC1tZXRob2QvcGF5bWVudC1mb3JtL3BheW1lbnQtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFJTCx1QkFBdUIsRUFDdkIsc0JBQXNCLEVBRXRCLG9CQUFvQixFQUNwQixpQkFBaUIsRUFFakIsa0JBQWtCLEdBQ25CLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBNEIsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFMUMsT0FBTyxFQUVMLFlBQVksR0FDYixNQUFNLDhDQUE4QyxDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxxR0FBcUcsQ0FBQyxDQUFDLHNCQUFzQjtBQUs3SztJQThERSw4QkFDWSxzQkFBOEMsRUFDOUMsdUJBQWdELEVBQ2hELGtCQUFzQyxFQUN0QyxvQkFBMEMsRUFDNUMsRUFBZSxFQUNmLFlBQTBCO1FBTHhCLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDOUMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLHlCQUFvQixHQUFwQixvQkFB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LENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7Z0JBN1BGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQiw0ak5BQTRDO29CQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBeEJDLHNCQUFzQjtnQkFEdEIsdUJBQXVCO2dCQU12QixrQkFBa0I7Z0JBSGxCLG9CQUFvQjtnQkFSYixXQUFXO2dCQWtCbEIsWUFBWTs7O29DQTRCWCxLQUFLO3NDQUdMLEtBQUs7eUJBR0wsTUFBTTs0QkFHTixNQUFNO29DQUdOLE1BQU07O0lBOE5ULDJCQUFDO0NBQUEsQUE5UEQsSUE4UEM7U0F6UFksb0JBQW9COzs7SUFDL0IseUNBQXNCOzs7OztJQUV0QiwyQ0FBa0M7Ozs7O0lBQ2xDLGdEQUF1Qzs7SUFDdkMsd0RBQW1DOztJQUNuQyxzQ0FBeUI7O0lBQ3pCLHFDQUF1Qjs7SUFFdkIsMENBQW1DOztJQUNuQyxnREFBc0M7O0lBQ3RDLDBDQUFrQzs7SUFDbEMsd0NBQXdDOztJQUN4QyxxREFBNkI7O0lBRTdCLGlEQUMyQjs7SUFFM0IsbURBQzRCOztJQUU1QixzQ0FDaUM7O0lBRWpDLHlDQUNvQzs7SUFFcEMsaURBQzRDOztJQUU1Qyx1Q0FVRzs7SUFFSCw4Q0FhRzs7Ozs7SUFHRCxzREFBd0Q7Ozs7O0lBQ3hELHVEQUEwRDs7Ozs7SUFDMUQsa0RBQWdEOzs7OztJQUNoRCxvREFBb0Q7Ozs7O0lBQ3BELGtDQUF1Qjs7Ozs7SUFDdkIsNENBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQWRkcmVzcyxcbiAgQWRkcmVzc1ZhbGlkYXRpb24sXG4gIENhcmRUeXBlLFxuICBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgQ2hlY2tvdXRQYXltZW50U2VydmljZSxcbiAgQ291bnRyeSxcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxuICBMb2FkZXJTdGF0ZSxcbiAgVXNlclBheW1lbnRTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JzsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuaW1wb3J0IHtcbiAgTW9kYWxSZWYsXG4gIE1vZGFsU2VydmljZSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvaW5kZXgnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vLi4vbWlzYy9pY29uL2luZGV4JztcbmltcG9ydCB7IFN1Z2dlc3RlZEFkZHJlc3NEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zaGlwcGluZy1hZGRyZXNzL2FkZHJlc3MtZm9ybS9zdWdnZXN0ZWQtYWRkcmVzc2VzLWRpYWxvZy9zdWdnZXN0ZWQtYWRkcmVzc2VzLWRpYWxvZy5jb21wb25lbnQnOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG5cbnR5cGUgbW9udGhUeXBlID0geyBpZDogbnVtYmVyOyBuYW1lOiBzdHJpbmcgfTtcbnR5cGUgeWVhclR5cGUgPSB7IGlkOiBudW1iZXI7IG5hbWU6IG51bWJlciB9O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wYXltZW50LWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vcGF5bWVudC1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFBheW1lbnRGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG5cbiAgcHJpdmF0ZSBjaGVja2JveFN1YjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGFkZHJlc3NWZXJpZnlTdWI6IFN1YnNjcmlwdGlvbjtcbiAgc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmOiBNb2RhbFJlZjtcbiAgbW9udGhzOiBtb250aFR5cGVbXSA9IFtdO1xuICB5ZWFyczogeWVhclR5cGVbXSA9IFtdO1xuXG4gIGNhcmRUeXBlcyQ6IE9ic2VydmFibGU8Q2FyZFR5cGVbXT47XG4gIHNoaXBwaW5nQWRkcmVzcyQ6IE9ic2VydmFibGU8QWRkcmVzcz47XG4gIGNvdW50cmllcyQ6IE9ic2VydmFibGU8Q291bnRyeVtdPjtcbiAgbG9hZGluZyQ6IE9ic2VydmFibGU8TG9hZGVyU3RhdGU8dm9pZD4+O1xuICBzYW1lQXNTaGlwcGluZ0FkZHJlc3MgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHNldEFzRGVmYXVsdEZpZWxkOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHBheW1lbnRNZXRob2RzQ291bnQ6IG51bWJlcjtcblxuICBAT3V0cHV0KClcbiAgZ29CYWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQE91dHB1dCgpXG4gIGNsb3NlRm9ybSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBPdXRwdXQoKVxuICBzZXRQYXltZW50RGV0YWlscyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHBheW1lbnQ6IEZvcm1Hcm91cCA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgIGRlZmF1bHRQYXltZW50OiBbZmFsc2VdLFxuICAgIGFjY291bnRIb2xkZXJOYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIGNhcmROdW1iZXI6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgY2FyZFR5cGU6IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgY29kZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9KSxcbiAgICBleHBpcnlNb250aDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICBleHBpcnlZZWFyOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIGN2bjogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgfSk7XG5cbiAgYmlsbGluZ0FkZHJlc3M6IEZvcm1Hcm91cCA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgIGZpcnN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICBsYXN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICBsaW5lMTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICBsaW5lMjogWycnXSxcbiAgICB0b3duOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIHJlZ2lvbjogdGhpcy5mYi5ncm91cCh7XG4gICAgICBpc29jb2RlU2hvcnQ6IFtudWxsLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9KSxcbiAgICBjb3VudHJ5OiB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGlzb2NvZGU6IFtudWxsLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9KSxcbiAgICBwb3N0YWxDb2RlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICB9KTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRQYXltZW50U2VydmljZTogQ2hlY2tvdXRQYXltZW50U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB1c2VyUGF5bWVudFNlcnZpY2U6IFVzZXJQYXltZW50U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZXhwTW9udGhBbmRZZWFyKCk7XG4gICAgdGhpcy5jb3VudHJpZXMkID0gdGhpcy51c2VyUGF5bWVudFNlcnZpY2UuZ2V0QWxsQmlsbGluZ0NvdW50cmllcygpLnBpcGUoXG4gICAgICB0YXAoY291bnRyaWVzID0+IHtcbiAgICAgICAgLy8gSWYgdGhlIHN0b3JlIGlzIGVtcHR5IGZldGNoIGNvdW50cmllcy4gVGhpcyBpcyBhbHNvIHVzZWQgd2hlbiBjaGFuZ2luZyBsYW5ndWFnZS5cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGNvdW50cmllcykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy51c2VyUGF5bWVudFNlcnZpY2UubG9hZEJpbGxpbmdDb3VudHJpZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5jYXJkVHlwZXMkID0gdGhpcy5jaGVja291dFBheW1lbnRTZXJ2aWNlLmdldENhcmRUeXBlcygpLnBpcGUoXG4gICAgICB0YXAoY2FyZFR5cGVzID0+IHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGNhcmRUeXBlcykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5jaGVja291dFBheW1lbnRTZXJ2aWNlLmxvYWRTdXBwb3J0ZWRDYXJkVHlwZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5zaGlwcGluZ0FkZHJlc3MkID0gdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5nZXREZWxpdmVyeUFkZHJlc3MoKTtcbiAgICB0aGlzLmxvYWRpbmckID0gdGhpcy5jaGVja291dFBheW1lbnRTZXJ2aWNlLmdldFNldFBheW1lbnREZXRhaWxzUmVzdWx0UHJvY2VzcygpO1xuXG4gICAgdGhpcy5jaGVja2JveFN1YiA9IHRoaXMuc2hvd1NhbWVBc1NoaXBwaW5nQWRkcmVzc0NoZWNrYm94KCkuc3Vic2NyaWJlKFxuICAgICAgKHNob3VsZFNob3dDaGVja2JveDogYm9vbGVhbikgPT4ge1xuICAgICAgICAvLyB0aGlzIG9wZXJhdGlvbiBtYWtlcyBzdXJlIHRoZSBjaGVja2JveCBpcyBub3QgY2hlY2tlZCBpZiBub3Qgc2hvd24gYW5kIHZpY2UgdmVyc2FcbiAgICAgICAgdGhpcy5zYW1lQXNTaGlwcGluZ0FkZHJlc3MgPSBzaG91bGRTaG93Q2hlY2tib3g7XG4gICAgICB9XG4gICAgKTtcblxuICAgIC8vIHZlcmlmeSB0aGUgbmV3IGFkZGVkIGFkZHJlc3NcbiAgICB0aGlzLmFkZHJlc3NWZXJpZnlTdWIgPSB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlXG4gICAgICAuZ2V0QWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKVxuICAgICAgLnN1YnNjcmliZSgocmVzdWx0czogQWRkcmVzc1ZhbGlkYXRpb24pID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdHMuZGVjaXNpb24gPT09ICdGQUlMJykge1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuY2xlYXJBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cygpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdHMuZGVjaXNpb24gPT09ICdBQ0NFUFQnKSB7XG4gICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0cy5kZWNpc2lvbiA9PT0gJ1JFSkVDVCcpIHtcbiAgICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICAgIHsga2V5OiAnYWRkcmVzc0Zvcm0uaW52YWxpZEFkZHJlc3MnIH0sXG4gICAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUlxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5jbGVhckFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzKCk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0cy5kZWNpc2lvbiA9PT0gJ1JFVklFVycpIHtcbiAgICAgICAgICB0aGlzLm9wZW5TdWdnZXN0ZWRBZGRyZXNzKHJlc3VsdHMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIGV4cE1vbnRoQW5kWWVhcigpOiB2b2lkIHtcbiAgICBjb25zdCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgdGhpcy55ZWFycy5wdXNoKHsgaWQ6IGkgKyAxLCBuYW1lOiB5ZWFyICsgaSB9KTtcbiAgICB9XG4gICAgZm9yIChsZXQgaiA9IDE7IGogPD0gMTI7IGorKykge1xuICAgICAgaWYgKGogPCAxMCkge1xuICAgICAgICB0aGlzLm1vbnRocy5wdXNoKHsgaWQ6IGosIG5hbWU6ICcwJyArIGoudG9TdHJpbmcoKSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubW9udGhzLnB1c2goeyBpZDogaiwgbmFtZTogai50b1N0cmluZygpIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZURlZmF1bHRQYXltZW50TWV0aG9kKCk6IHZvaWQge1xuICAgIHRoaXMucGF5bWVudC52YWx1ZS5kZWZhdWx0UGF5bWVudCA9ICF0aGlzLnBheW1lbnQudmFsdWUuZGVmYXVsdFBheW1lbnQ7XG4gIH1cblxuICBwYXltZW50U2VsZWN0ZWQoY2FyZDogQ2FyZFR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLnBheW1lbnRbJ2NvbnRyb2xzJ10uY2FyZFR5cGVbJ2NvbnRyb2xzJ10uY29kZS5zZXRWYWx1ZShjYXJkLmNvZGUpO1xuICB9XG5cbiAgbW9udGhTZWxlY3RlZChtb250aDogbW9udGhUeXBlKTogdm9pZCB7XG4gICAgdGhpcy5wYXltZW50Wydjb250cm9scyddLmV4cGlyeU1vbnRoLnNldFZhbHVlKG1vbnRoLm5hbWUpO1xuICB9XG5cbiAgeWVhclNlbGVjdGVkKHllYXI6IHllYXJUeXBlKTogdm9pZCB7XG4gICAgdGhpcy5wYXltZW50Wydjb250cm9scyddLmV4cGlyeVllYXIuc2V0VmFsdWUoeWVhci5uYW1lKTtcbiAgfVxuXG4gIHRvZ2dsZVNhbWVBc1NoaXBwaW5nQWRkcmVzcygpOiB2b2lkIHtcbiAgICB0aGlzLnNhbWVBc1NoaXBwaW5nQWRkcmVzcyA9ICF0aGlzLnNhbWVBc1NoaXBwaW5nQWRkcmVzcztcbiAgfVxuXG4gIGlzQ29udGludWVCdXR0b25EaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5wYXltZW50LmludmFsaWQgfHxcbiAgICAgICghdGhpcy5zYW1lQXNTaGlwcGluZ0FkZHJlc3MgJiYgdGhpcy5iaWxsaW5nQWRkcmVzcy5pbnZhbGlkKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIHNoaXBwaW5nIGFkZHJlc3MgY2FuIGFsc28gYmUgYSBiaWxsaW5nIGFkZHJlc3NcbiAgICpcbiAgICogQG1lbWJlcm9mIFBheW1lbnRGb3JtQ29tcG9uZW50XG4gICAqL1xuICBzaG93U2FtZUFzU2hpcHBpbmdBZGRyZXNzQ2hlY2tib3goKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW3RoaXMuY291bnRyaWVzJCwgdGhpcy5zaGlwcGluZ0FkZHJlc3MkXSkucGlwZShcbiAgICAgIG1hcCgoW2NvdW50cmllcywgYWRkcmVzc10pID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBhZGRyZXNzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICBhZGRyZXNzLmNvdW50cnkgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICEhY291bnRyaWVzLmZpbHRlcihcbiAgICAgICAgICAgIChjb3VudHJ5OiBDb3VudHJ5KTogYm9vbGVhbiA9PlxuICAgICAgICAgICAgICBjb3VudHJ5Lmlzb2NvZGUgPT09IGFkZHJlc3MuY291bnRyeS5pc29jb2RlXG4gICAgICAgICAgKS5sZW5ndGhcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldEFkZHJlc3NDYXJkQ29udGVudChhZGRyZXNzOiBBZGRyZXNzKTogQ2FyZCB7XG4gICAgbGV0IHJlZ2lvbiA9ICcnO1xuICAgIGlmIChhZGRyZXNzLnJlZ2lvbiAmJiBhZGRyZXNzLnJlZ2lvbi5pc29jb2RlKSB7XG4gICAgICByZWdpb24gPSBhZGRyZXNzLnJlZ2lvbi5pc29jb2RlICsgJywgJztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGV4dEJvbGQ6IGFkZHJlc3MuZmlyc3ROYW1lICsgJyAnICsgYWRkcmVzcy5sYXN0TmFtZSxcbiAgICAgIHRleHQ6IFtcbiAgICAgICAgYWRkcmVzcy5saW5lMSxcbiAgICAgICAgYWRkcmVzcy5saW5lMixcbiAgICAgICAgYWRkcmVzcy50b3duICsgJywgJyArIHJlZ2lvbiArIGFkZHJlc3MuY291bnRyeS5pc29jb2RlLFxuICAgICAgICBhZGRyZXNzLnBvc3RhbENvZGUsXG4gICAgICAgIGFkZHJlc3MucGhvbmUsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICBvcGVuU3VnZ2VzdGVkQWRkcmVzcyhyZXN1bHRzOiBBZGRyZXNzVmFsaWRhdGlvbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5zdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWYpIHtcbiAgICAgIHRoaXMuc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihcbiAgICAgICAgU3VnZ2VzdGVkQWRkcmVzc0RpYWxvZ0NvbXBvbmVudCxcbiAgICAgICAgeyBjZW50ZXJlZDogdHJ1ZSwgc2l6ZTogJ2xnJyB9XG4gICAgICApO1xuICAgICAgdGhpcy5zdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWYuY29tcG9uZW50SW5zdGFuY2UuZW50ZXJlZEFkZHJlc3MgPSB0aGlzLmJpbGxpbmdBZGRyZXNzLnZhbHVlO1xuICAgICAgdGhpcy5zdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWYuY29tcG9uZW50SW5zdGFuY2Uuc3VnZ2VzdGVkQWRkcmVzc2VzID1cbiAgICAgICAgcmVzdWx0cy5zdWdnZXN0ZWRBZGRyZXNzZXM7XG4gICAgICB0aGlzLnN1Z2dlc3RlZEFkZHJlc3NNb2RhbFJlZi5yZXN1bHRcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuY2xlYXJBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cygpO1xuICAgICAgICAgIHRoaXMuc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmID0gbnVsbDtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAvLyB0aGlzICBjYWxsYmFjayBpcyBjYWxsZWQgd2hlbiBtb2RhbCBpcyBjbG9zZWQgd2l0aCBFc2Mga2V5IG9yIGNsaWNraW5nIGJhY2tkcm9wXG4gICAgICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5jbGVhckFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzKCk7XG4gICAgICAgICAgdGhpcy5zdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWYgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlRm9ybS5lbWl0KCk7XG4gIH1cblxuICBiYWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZ29CYWNrLmVtaXQoKTtcbiAgfVxuXG4gIHZlcmlmeUFkZHJlc3MoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2FtZUFzU2hpcHBpbmdBZGRyZXNzKSB7XG4gICAgICB0aGlzLm5leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS52ZXJpZnlBZGRyZXNzKHRoaXMuYmlsbGluZ0FkZHJlc3MudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG5leHQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRQYXltZW50RGV0YWlscy5lbWl0KHtcbiAgICAgIHBheW1lbnREZXRhaWxzOiB0aGlzLnBheW1lbnQudmFsdWUsXG4gICAgICBiaWxsaW5nQWRkcmVzczogdGhpcy5zYW1lQXNTaGlwcGluZ0FkZHJlc3NcbiAgICAgICAgPyBudWxsXG4gICAgICAgIDogdGhpcy5iaWxsaW5nQWRkcmVzcy52YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmNoZWNrYm94U3ViKSB7XG4gICAgICB0aGlzLmNoZWNrYm94U3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmFkZHJlc3NWZXJpZnlTdWIpIHtcbiAgICAgIHRoaXMuYWRkcmVzc1ZlcmlmeVN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19