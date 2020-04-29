import { __decorate, __read } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address, AddressValidation, CardType, CheckoutDeliveryService, CheckoutPaymentService, Country, GlobalMessageService, GlobalMessageType, Region, StateUtils, UserAddressService, UserPaymentService, } from '@spartacus/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { ModalRef, ModalService, } from '../../../../../shared/components/modal/index';
import { ICON_TYPE } from '../../../../misc/icon/index';
import { SuggestedAddressDialogComponent } from '../../shipping-address/address-form/suggested-addresses-dialog/suggested-addresses-dialog.component'; // tslint:disable-line
var PaymentFormComponent = /** @class */ (function () {
    function PaymentFormComponent(checkoutPaymentService, checkoutDeliveryService, userPaymentService, globalMessageService, fb, modalService, userAddressService) {
        this.checkoutPaymentService = checkoutPaymentService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.userPaymentService = userPaymentService;
        this.globalMessageService = globalMessageService;
        this.fb = fb;
        this.modalService = modalService;
        this.userAddressService = userAddressService;
        this.iconTypes = ICON_TYPE;
        this.months = [];
        this.years = [];
        this.sameAsShippingAddress = true;
        this.selectedCountry$ = new BehaviorSubject('');
        this.goBack = new EventEmitter();
        this.closeForm = new EventEmitter();
        this.setPaymentDetails = new EventEmitter();
        this.paymentForm = this.fb.group({
            cardType: this.fb.group({
                code: [null, Validators.required],
            }),
            accountHolderName: ['', Validators.required],
            cardNumber: ['', Validators.required],
            expiryMonth: [null, Validators.required],
            expiryYear: [null, Validators.required],
            cvn: ['', Validators.required],
            defaultPayment: [false],
        });
        this.billingAddressForm = this.fb.group({
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
    PaymentFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.expMonthAndYear();
        this.countries$ = this.userPaymentService.getAllBillingCountries().pipe(tap(function (countries) {
            // If the store is empty fetch countries. This is also used when changing language.
            if (Object.keys(countries).length === 0) {
                _this.userPaymentService.loadBillingCountries();
            }
        }));
        this.cardTypes$ = this.checkoutPaymentService.getCardTypes().pipe(tap(function (cardTypes) {
            if (Object.keys(cardTypes).length === 0) {
                _this.checkoutPaymentService.loadSupportedCardTypes();
            }
        }));
        this.shippingAddress$ = this.checkoutDeliveryService.getDeliveryAddress();
        this.loading$ = this.checkoutPaymentService.getSetPaymentDetailsResultProcess();
        this.showSameAsShippingAddressCheckbox$ = combineLatest([
            this.countries$,
            this.shippingAddress$,
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 2), countries = _b[0], address = _b[1];
            return ((address === null || address === void 0 ? void 0 : address.country) &&
                !!countries.filter(function (country) {
                    return country.isocode === address.country.isocode;
                }).length);
        }), tap(function (shouldShowCheckbox) {
            _this.sameAsShippingAddress = shouldShowCheckbox;
        }));
        // verify the new added address
        this.addressVerifySub = this.checkoutDeliveryService
            .getAddressVerificationResults()
            .subscribe(function (results) {
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
        });
        this.regions$ = this.selectedCountry$.pipe(switchMap(function (country) { return _this.userAddressService.getRegions(country); }), tap(function (regions) {
            var regionControl = _this.billingAddressForm.get('region.isocodeShort');
            if (regions.length > 0) {
                regionControl.enable();
            }
            else {
                regionControl.disable();
            }
        }));
    };
    PaymentFormComponent.prototype.expMonthAndYear = function () {
        var year = new Date().getFullYear();
        for (var i = 0; i < 10; i++) {
            this.years.push(year + i);
        }
        for (var j = 1; j <= 12; j++) {
            if (j < 10) {
                this.months.push("0" + j);
            }
            else {
                this.months.push(j.toString());
            }
        }
    };
    PaymentFormComponent.prototype.toggleDefaultPaymentMethod = function () {
        this.paymentForm.value.defaultPayment = !this.paymentForm.value
            .defaultPayment;
    };
    PaymentFormComponent.prototype.toggleSameAsShippingAddress = function () {
        this.sameAsShippingAddress = !this.sameAsShippingAddress;
    };
    PaymentFormComponent.prototype.getAddressCardContent = function (address) {
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
    PaymentFormComponent.prototype.openSuggestedAddress = function (results) {
        var _this = this;
        if (!this.suggestedAddressModalRef) {
            this.suggestedAddressModalRef = this.modalService.open(SuggestedAddressDialogComponent, { centered: true, size: 'lg' });
            this.suggestedAddressModalRef.componentInstance.enteredAddress = this.billingAddressForm.value;
            this.suggestedAddressModalRef.componentInstance.suggestedAddresses =
                results.suggestedAddresses;
            this.suggestedAddressModalRef.result
                .then(function () {
                _this.checkoutDeliveryService.clearAddressVerificationResults();
                _this.suggestedAddressModalRef = null;
            })
                .catch(function () {
                // this  callback is called when modal is closed with Esc key or clicking backdrop
                _this.checkoutDeliveryService.clearAddressVerificationResults();
                _this.suggestedAddressModalRef = null;
            });
        }
    };
    PaymentFormComponent.prototype.close = function () {
        this.closeForm.emit();
    };
    PaymentFormComponent.prototype.back = function () {
        this.goBack.emit();
    };
    PaymentFormComponent.prototype.verifyAddress = function () {
        if (this.sameAsShippingAddress) {
            this.next();
        }
        else {
            this.checkoutDeliveryService.verifyAddress(this.billingAddressForm.value);
        }
    };
    PaymentFormComponent.prototype.countrySelected = function (country) {
        this.billingAddressForm.get('country.isocode').setValue(country.isocode);
        this.selectedCountry$.next(country.isocode);
    };
    PaymentFormComponent.prototype.next = function () {
        if (this.paymentForm.valid) {
            if (this.sameAsShippingAddress) {
                this.setPaymentDetails.emit({
                    paymentDetails: this.paymentForm.value,
                    billingAddress: null,
                });
            }
            else {
                if (this.billingAddressForm.valid) {
                    this.setPaymentDetails.emit({
                        paymentDetails: this.paymentForm.value,
                        billingAddress: this.billingAddressForm.value,
                    });
                }
                else {
                    this.billingAddressForm.markAllAsTouched();
                }
            }
        }
        else {
            this.paymentForm.markAllAsTouched();
            if (!this.sameAsShippingAddress) {
                this.billingAddressForm.markAllAsTouched();
            }
        }
    };
    PaymentFormComponent.prototype.ngOnDestroy = function () {
        if (this.addressVerifySub) {
            this.addressVerifySub.unsubscribe();
        }
    };
    PaymentFormComponent.ctorParameters = function () { return [
        { type: CheckoutPaymentService },
        { type: CheckoutDeliveryService },
        { type: UserPaymentService },
        { type: GlobalMessageService },
        { type: FormBuilder },
        { type: ModalService },
        { type: UserAddressService }
    ]; };
    __decorate([
        Input()
    ], PaymentFormComponent.prototype, "setAsDefaultField", void 0);
    __decorate([
        Input()
    ], PaymentFormComponent.prototype, "paymentMethodsCount", void 0);
    __decorate([
        Output()
    ], PaymentFormComponent.prototype, "goBack", void 0);
    __decorate([
        Output()
    ], PaymentFormComponent.prototype, "closeForm", void 0);
    __decorate([
        Output()
    ], PaymentFormComponent.prototype, "setPaymentDetails", void 0);
    PaymentFormComponent = __decorate([
        Component({
            selector: 'cx-payment-form',
            template: "<!-- FORM -->\n<ng-container *ngIf=\"!(loading$ | async).loading; else spinner\">\n  <form (ngSubmit)=\"next()\" [formGroup]=\"paymentForm\">\n    <div class=\"row\">\n      <div class=\"col-md-12 col-xl-10\">\n        <div class=\"form-group\" formGroupName=\"cardType\">\n          <ng-container *ngIf=\"cardTypes$ | async as cardTypes\">\n            <div *ngIf=\"cardTypes.length !== 0\">\n              <label aria-required=\"true\">\n                <span class=\"label-content required\">{{\n                  'paymentForm.paymentType' | cxTranslate\n                }}</span>\n                <ng-select\n                  [searchable]=\"false\"\n                  [clearable]=\"false\"\n                  [items]=\"cardTypes\"\n                  bindLabel=\"name\"\n                  bindValue=\"code\"\n                  placeholder=\"{{ 'paymentForm.selectOne' | cxTranslate }}\"\n                  formControlName=\"code\"\n                >\n                </ng-select>\n                <cx-form-errors\n                  [control]=\"paymentForm.get('cardType.code')\"\n                ></cx-form-errors>\n              </label>\n            </div>\n          </ng-container>\n        </div>\n\n        <div class=\"form-group\">\n          <label>\n            <span class=\"label-content\">{{\n              'paymentForm.accountHolderName.label' | cxTranslate\n            }}</span>\n            <input\n              class=\"form-control\"\n              type=\"text\"\n              placeholder=\"{{\n                'paymentForm.accountHolderName.placeholder' | cxTranslate\n              }}\"\n              formControlName=\"accountHolderName\"\n            />\n            <cx-form-errors\n              [control]=\"paymentForm.get('accountHolderName')\"\n            ></cx-form-errors>\n          </label>\n        </div>\n\n        <div class=\"form-group\">\n          <label>\n            <span class=\"label-content\">{{\n              'paymentForm.cardNumber' | cxTranslate\n            }}</span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"cardNumber\"\n            />\n            <cx-form-errors\n              [control]=\"paymentForm.get('cardNumber')\"\n            ></cx-form-errors>\n          </label>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"form-group col-md-8\">\n            <label>\n              <span class=\"label-content\">{{\n                'paymentForm.expirationDate' | cxTranslate\n              }}</span>\n              <div class=\"cx-payment-form-exp-date\">\n                <div class=\"cx-payment-form-exp-date-wrapper\">\n                  <ng-select\n                    [searchable]=\"false\"\n                    [clearable]=\"false\"\n                    [items]=\"months\"\n                    placeholder=\"{{ 'paymentForm.monthMask' | cxTranslate }}\"\n                    formControlName=\"expiryMonth\"\n                  >\n                  </ng-select>\n                  <cx-form-errors\n                    [control]=\"paymentForm.get('expiryMonth')\"\n                  ></cx-form-errors>\n                </div>\n                <div class=\"cx-payment-form-exp-date-wrapper\">\n                  <ng-select\n                    [searchable]=\"false\"\n                    [clearable]=\"false\"\n                    [items]=\"years\"\n                    placeholder=\"{{ 'paymentForm.yearMask' | cxTranslate }}\"\n                    formControlName=\"expiryYear\"\n                  >\n                  </ng-select>\n                  <cx-form-errors\n                    [control]=\"paymentForm.get('expiryYear')\"\n                  ></cx-form-errors>\n                </div>\n              </div>\n            </label>\n          </div>\n\n          <div class=\"form-group col-md-4\">\n            <label>\n              <span class=\"label-content\">\n                {{ 'paymentForm.securityCode' | cxTranslate }}\n                <cx-icon\n                  [type]=\"iconTypes.INFO\"\n                  class=\"cx-payment-form-tooltip\"\n                  placement=\"right\"\n                  title=\"{{ 'paymentForm.securityCodeTitle' | cxTranslate }}\"\n                  alt=\"\"\n                ></cx-icon>\n              </span>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"cVVNumber\"\n                formControlName=\"cvn\"\n              />\n              <cx-form-errors\n                [control]=\"paymentForm.get('cvn')\"\n              ></cx-form-errors>\n            </label>\n          </div>\n        </div>\n\n        <div class=\"form-group\" *ngIf=\"setAsDefaultField\">\n          <div class=\"form-check\">\n            <label>\n              <input\n                type=\"checkbox\"\n                class=\"form-check-input\"\n                (change)=\"toggleDefaultPaymentMethod()\"\n              />\n              <span class=\"form-check-label\">{{\n                'paymentForm.setAsDefault' | cxTranslate\n              }}</span>\n            </label>\n          </div>\n        </div>\n\n        <!-- BILLING -->\n        <div class=\"cx-payment-form-billing\">\n          <div class=\"cx-payment-form-billing-address\">\n            {{ 'paymentForm.billingAddress' | cxTranslate }}\n          </div>\n\n          <!-- SAME AS SHIPPING CHECKBOX -->\n          <ng-container *ngIf=\"showSameAsShippingAddressCheckbox$ | async\">\n            <div class=\"form-group\">\n              <div class=\"form-check\">\n                <label>\n                  <input\n                    type=\"checkbox\"\n                    class=\"form-check-input\"\n                    [checked]=\"sameAsShippingAddress\"\n                    (change)=\"toggleSameAsShippingAddress()\"\n                  />\n                  <span class=\"form-check-label\">{{\n                    'paymentForm.sameAsShippingAddress' | cxTranslate\n                  }}</span>\n                </label>\n              </div>\n            </div>\n          </ng-container>\n\n          <!-- BILLING INFO COMPONENT -->\n          <ng-container\n            *ngIf=\"\n              sameAsShippingAddress && shippingAddress$\n                | async as shippingAddress;\n              else billingAddress\n            \"\n          >\n            <cx-card\n              [content]=\"getAddressCardContent(shippingAddress)\"\n            ></cx-card>\n          </ng-container>\n\n          <ng-template #billingAddress>\n            <div [formGroup]=\"billingAddressForm\">\n              <div class=\"form-group\" formGroupName=\"country\">\n                <ng-container *ngIf=\"countries$ | async as countries\">\n                  <div *ngIf=\"countries.length !== 0\">\n                    <label aria-required=\"true\">\n                      <span class=\"label-content required\">{{\n                        'addressForm.country' | cxTranslate\n                      }}</span>\n                      <ng-select\n                        [searchable]=\"true\"\n                        [clearable]=\"false\"\n                        [items]=\"countries\"\n                        bindLabel=\"name\"\n                        bindValue=\"isocode\"\n                        placeholder=\"{{\n                          'addressForm.selectOne' | cxTranslate\n                        }}\"\n                        (change)=\"countrySelected($event)\"\n                        formControlName=\"isocode\"\n                      >\n                      </ng-select>\n                      <cx-form-errors\n                        [control]=\"billingAddressForm.get('country.isocode')\"\n                      ></cx-form-errors>\n                    </label>\n                  </div>\n                </ng-container>\n              </div>\n              <div class=\"form-group\">\n                <label>\n                  <span class=\"label-content required\">{{\n                    'addressForm.firstName.label' | cxTranslate\n                  }}</span>\n                  <input\n                    class=\"form-control\"\n                    type=\"text\"\n                    placeholder=\"{{\n                      'addressForm.firstName.placeholder' | cxTranslate\n                    }}\"\n                    formControlName=\"firstName\"\n                  />\n                  <cx-form-errors\n                    [control]=\"billingAddressForm.get('firstName')\"\n                  ></cx-form-errors>\n                </label>\n              </div>\n              <div class=\"form-group\">\n                <label>\n                  <span class=\"label-content required\">{{\n                    'addressForm.lastName.label' | cxTranslate\n                  }}</span>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    placeholder=\"{{\n                      'addressForm.lastName.placeholder' | cxTranslate\n                    }}\"\n                    formControlName=\"lastName\"\n                  />\n                  <cx-form-errors\n                    [control]=\"billingAddressForm.get('lastName')\"\n                  ></cx-form-errors>\n                </label>\n              </div>\n              <div class=\"form-group\">\n                <label>\n                  <span class=\"label-content required\">{{\n                    'addressForm.address1' | cxTranslate\n                  }}</span>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    placeholder=\"{{\n                      'addressForm.streetAddress' | cxTranslate\n                    }}\"\n                    formControlName=\"line1\"\n                  />\n                  <cx-form-errors\n                    [control]=\"billingAddressForm.get('line1')\"\n                  ></cx-form-errors>\n                </label>\n              </div>\n              <div class=\"form-group\">\n                <label>\n                  <span class=\"label-content\">{{\n                    'addressForm.address2' | cxTranslate\n                  }}</span>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    placeholder=\"{{ 'addressForm.aptSuite' | cxTranslate }}\"\n                    formControlName=\"line2\"\n                  />\n                </label>\n              </div>\n              <div class=\"row\">\n                <div class=\"form-group col-md-6\">\n                  <label>\n                    <span class=\"label-content required\">{{\n                      'addressForm.city.label' | cxTranslate\n                    }}</span>\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      placeholder=\"{{\n                        'addressForm.city.placeholder' | cxTranslate\n                      }}\"\n                      formControlName=\"town\"\n                    />\n                    <cx-form-errors\n                      [control]=\"billingAddressForm.get('town')\"\n                    ></cx-form-errors>\n                  </label>\n                </div>\n                <div class=\"form-group col-md-6\">\n                  <label>\n                    <span class=\"label-content required\">{{\n                      'addressForm.zipCode.label' | cxTranslate\n                    }}</span>\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      placeholder=\"{{\n                        'addressForm.zipCode.placeholder' | cxTranslate\n                      }}\"\n                      formControlName=\"postalCode\"\n                    />\n                    <cx-form-errors\n                      [control]=\"billingAddressForm.get('postalCode')\"\n                    ></cx-form-errors>\n                  </label>\n                </div>\n                <ng-container\n                  *ngIf=\"regions$ | async as regions\"\n                  formGroupName=\"region\"\n                >\n                  <ng-container *ngIf=\"regions.length !== 0\">\n                    <div class=\"form-group col-md-6\">\n                      <label aria-required=\"true\">\n                        <span class=\"label-content required\">{{\n                          'addressForm.state' | cxTranslate\n                        }}</span>\n                        <ng-select\n                          class=\"region-select\"\n                          formControlName=\"isocodeShort\"\n                          [searchable]=\"true\"\n                          [clearable]=\"false\"\n                          [items]=\"regions\"\n                          bindLabel=\"{{\n                            regions[0].name ? 'name' : 'isocodeShort'\n                          }}\"\n                          bindValue=\"{{\n                            regions[0].name ? 'isocodeShort' : 'region'\n                          }}\"\n                          placeholder=\"{{\n                            'addressForm.selectOne' | cxTranslate\n                          }}\"\n                        >\n                        </ng-select>\n                        <cx-form-errors\n                          [control]=\"\n                            billingAddressForm.get('region.isocodeShort')\n                          \"\n                        ></cx-form-errors>\n                      </label>\n                    </div>\n                  </ng-container>\n                </ng-container>\n              </div>\n            </div>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n\n    <!-- BUTTON SECTION -->\n    <div class=\"cx-checkout-btns row\">\n      <div class=\"col-md-12 col-lg-6\">\n        <button\n          *ngIf=\"paymentMethodsCount === 0\"\n          class=\"btn btn-block btn-action\"\n          (click)=\"back()\"\n        >\n          {{ 'common.back' | cxTranslate }}\n        </button>\n        <button\n          *ngIf=\"paymentMethodsCount > 0\"\n          class=\"btn btn-block btn-action\"\n          (click)=\"close()\"\n        >\n          {{ 'paymentForm.changePayment' | cxTranslate }}\n        </button>\n      </div>\n      <div class=\"col-md-12 col-lg-6\">\n        <button class=\"btn btn-block btn-primary\" type=\"submit\">\n          {{ 'common.continue' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n  </form>\n</ng-container>\n\n<ng-template #spinner>\n  <cx-spinner></cx-spinner>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], PaymentFormComponent);
    return PaymentFormComponent;
}());
export { PaymentFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NoZWNrb3V0L2NvbXBvbmVudHMvcGF5bWVudC1tZXRob2QvcGF5bWVudC1mb3JtL3BheW1lbnQtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFDTCxPQUFPLEVBQ1AsaUJBQWlCLEVBQ2pCLFFBQVEsRUFDUix1QkFBdUIsRUFDdkIsc0JBQXNCLEVBQ3RCLE9BQU8sRUFDUCxvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLE1BQU0sRUFDTixVQUFVLEVBQ1Ysa0JBQWtCLEVBQ2xCLGtCQUFrQixHQUNuQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUNoRixPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQ0wsUUFBUSxFQUNSLFlBQVksR0FDYixNQUFNLDhDQUE4QyxDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxxR0FBcUcsQ0FBQyxDQUFDLHNCQUFzQjtBQU83SztJQTJERSw4QkFDWSxzQkFBOEMsRUFDOUMsdUJBQWdELEVBQ2hELGtCQUFzQyxFQUN0QyxvQkFBMEMsRUFDMUMsRUFBZSxFQUNmLFlBQTBCLEVBQzFCLGtC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QUFDLGtCQUFrQixDQUFDLEtBQUs7cUJBQzlDLENBQUMsQ0FBQztpQkFDSjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztpQkFDNUM7YUFDRjtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFFcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixFQUFFLENBQUM7YUFDNUM7U0FDRjtJQUNILENBQUM7SUFFRCwwQ0FBVyxHQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7Z0JBdk1tQyxzQkFBc0I7Z0JBQ3JCLHVCQUF1QjtnQkFDNUIsa0JBQWtCO2dCQUNoQixvQkFBb0I7Z0JBQ3RDLFdBQVc7Z0JBQ0QsWUFBWTtnQkFDTixrQkFBa0I7O0lBaERsRDtRQURDLEtBQUssRUFBRTttRUFDbUI7SUFHM0I7UUFEQyxLQUFLLEVBQUU7cUVBQ29CO0lBRzVCO1FBREMsTUFBTSxFQUFFO3dEQUN3QjtJQUdqQztRQURDLE1BQU0sRUFBRTsyREFDMkI7SUFHcEM7UUFEQyxNQUFNLEVBQUU7bUVBQ21DO0lBOUJqQyxvQkFBb0I7UUFMaEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQiw2NmNBQTRDO1lBQzVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVyxvQkFBb0IsQ0FvUWhDO0lBQUQsMkJBQUM7Q0FBQSxBQXBRRCxJQW9RQztTQXBRWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBBZGRyZXNzLFxuICBBZGRyZXNzVmFsaWRhdGlvbixcbiAgQ2FyZFR5cGUsXG4gIENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICBDaGVja291dFBheW1lbnRTZXJ2aWNlLFxuICBDb3VudHJ5LFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIFJlZ2lvbixcbiAgU3RhdGVVdGlscyxcbiAgVXNlckFkZHJlc3NTZXJ2aWNlLFxuICBVc2VyUGF5bWVudFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JzsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuaW1wb3J0IHtcbiAgTW9kYWxSZWYsXG4gIE1vZGFsU2VydmljZSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvaW5kZXgnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vLi4vbWlzYy9pY29uL2luZGV4JztcbmltcG9ydCB7IFN1Z2dlc3RlZEFkZHJlc3NEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zaGlwcGluZy1hZGRyZXNzL2FkZHJlc3MtZm9ybS9zdWdnZXN0ZWQtYWRkcmVzc2VzLWRpYWxvZy9zdWdnZXN0ZWQtYWRkcmVzc2VzLWRpYWxvZy5jb21wb25lbnQnOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXBheW1lbnQtZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXltZW50LWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUGF5bWVudEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcblxuICBwcml2YXRlIGFkZHJlc3NWZXJpZnlTdWI6IFN1YnNjcmlwdGlvbjtcbiAgc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmOiBNb2RhbFJlZjtcbiAgbW9udGhzOiBzdHJpbmdbXSA9IFtdO1xuICB5ZWFyczogbnVtYmVyW10gPSBbXTtcblxuICBjYXJkVHlwZXMkOiBPYnNlcnZhYmxlPENhcmRUeXBlW10+O1xuICBzaGlwcGluZ0FkZHJlc3MkOiBPYnNlcnZhYmxlPEFkZHJlc3M+O1xuICBjb3VudHJpZXMkOiBPYnNlcnZhYmxlPENvdW50cnlbXT47XG4gIGxvYWRpbmckOiBPYnNlcnZhYmxlPFN0YXRlVXRpbHMuTG9hZGVyU3RhdGU8dm9pZD4+O1xuICBzYW1lQXNTaGlwcGluZ0FkZHJlc3MgPSB0cnVlO1xuICByZWdpb25zJDogT2JzZXJ2YWJsZTxSZWdpb25bXT47XG4gIHNlbGVjdGVkQ291bnRyeSQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCcnKTtcbiAgc2hvd1NhbWVBc1NoaXBwaW5nQWRkcmVzc0NoZWNrYm94JDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICBASW5wdXQoKVxuICBzZXRBc0RlZmF1bHRGaWVsZDogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBwYXltZW50TWV0aG9kc0NvdW50OiBudW1iZXI7XG5cbiAgQE91dHB1dCgpXG4gIGdvQmFjayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBPdXRwdXQoKVxuICBjbG9zZUZvcm0gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAT3V0cHV0KClcbiAgc2V0UGF5bWVudERldGFpbHMgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwYXltZW50Rm9ybTogRm9ybUdyb3VwID0gdGhpcy5mYi5ncm91cCh7XG4gICAgY2FyZFR5cGU6IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgY29kZTogW251bGwsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIH0pLFxuICAgIGFjY291bnRIb2xkZXJOYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIGNhcmROdW1iZXI6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgZXhwaXJ5TW9udGg6IFtudWxsLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICBleHBpcnlZZWFyOiBbbnVsbCwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgY3ZuOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIGRlZmF1bHRQYXltZW50OiBbZmFsc2VdLFxuICB9KTtcblxuICBiaWxsaW5nQWRkcmVzc0Zvcm06IEZvcm1Hcm91cCA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgIGZpcnN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICBsYXN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICBsaW5lMTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICBsaW5lMjogWycnXSxcbiAgICB0b3duOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIHJlZ2lvbjogdGhpcy5mYi5ncm91cCh7XG4gICAgICBpc29jb2RlU2hvcnQ6IFtudWxsLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9KSxcbiAgICBjb3VudHJ5OiB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGlzb2NvZGU6IFtudWxsLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9KSxcbiAgICBwb3N0YWxDb2RlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICB9KTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRQYXltZW50U2VydmljZTogQ2hlY2tvdXRQYXltZW50U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB1c2VyUGF5bWVudFNlcnZpY2U6IFVzZXJQYXltZW50U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJvdGVjdGVkIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB1c2VyQWRkcmVzc1NlcnZpY2U6IFVzZXJBZGRyZXNzU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5leHBNb250aEFuZFllYXIoKTtcbiAgICB0aGlzLmNvdW50cmllcyQgPSB0aGlzLnVzZXJQYXltZW50U2VydmljZS5nZXRBbGxCaWxsaW5nQ291bnRyaWVzKCkucGlwZShcbiAgICAgIHRhcCgoY291bnRyaWVzKSA9PiB7XG4gICAgICAgIC8vIElmIHRoZSBzdG9yZSBpcyBlbXB0eSBmZXRjaCBjb3VudHJpZXMuIFRoaXMgaXMgYWxzbyB1c2VkIHdoZW4gY2hhbmdpbmcgbGFuZ3VhZ2UuXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhjb3VudHJpZXMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMudXNlclBheW1lbnRTZXJ2aWNlLmxvYWRCaWxsaW5nQ291bnRyaWVzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuY2FyZFR5cGVzJCA9IHRoaXMuY2hlY2tvdXRQYXltZW50U2VydmljZS5nZXRDYXJkVHlwZXMoKS5waXBlKFxuICAgICAgdGFwKChjYXJkVHlwZXMpID0+IHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGNhcmRUeXBlcykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5jaGVja291dFBheW1lbnRTZXJ2aWNlLmxvYWRTdXBwb3J0ZWRDYXJkVHlwZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5zaGlwcGluZ0FkZHJlc3MkID0gdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5nZXREZWxpdmVyeUFkZHJlc3MoKTtcbiAgICB0aGlzLmxvYWRpbmckID0gdGhpcy5jaGVja291dFBheW1lbnRTZXJ2aWNlLmdldFNldFBheW1lbnREZXRhaWxzUmVzdWx0UHJvY2VzcygpO1xuXG4gICAgdGhpcy5zaG93U2FtZUFzU2hpcHBpbmdBZGRyZXNzQ2hlY2tib3gkID0gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmNvdW50cmllcyQsXG4gICAgICB0aGlzLnNoaXBwaW5nQWRkcmVzcyQsXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW2NvdW50cmllcywgYWRkcmVzc10pID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBhZGRyZXNzPy5jb3VudHJ5ICYmXG4gICAgICAgICAgISFjb3VudHJpZXMuZmlsdGVyKFxuICAgICAgICAgICAgKGNvdW50cnk6IENvdW50cnkpOiBib29sZWFuID0+XG4gICAgICAgICAgICAgIGNvdW50cnkuaXNvY29kZSA9PT0gYWRkcmVzcy5jb3VudHJ5Lmlzb2NvZGVcbiAgICAgICAgICApLmxlbmd0aFxuICAgICAgICApO1xuICAgICAgfSksXG4gICAgICB0YXAoKHNob3VsZFNob3dDaGVja2JveCkgPT4ge1xuICAgICAgICB0aGlzLnNhbWVBc1NoaXBwaW5nQWRkcmVzcyA9IHNob3VsZFNob3dDaGVja2JveDtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIHZlcmlmeSB0aGUgbmV3IGFkZGVkIGFkZHJlc3NcbiAgICB0aGlzLmFkZHJlc3NWZXJpZnlTdWIgPSB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlXG4gICAgICAuZ2V0QWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKVxuICAgICAgLnN1YnNjcmliZSgocmVzdWx0czogQWRkcmVzc1ZhbGlkYXRpb24pID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdHMuZGVjaXNpb24gPT09ICdGQUlMJykge1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuY2xlYXJBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cygpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdHMuZGVjaXNpb24gPT09ICdBQ0NFUFQnKSB7XG4gICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0cy5kZWNpc2lvbiA9PT0gJ1JFSkVDVCcpIHtcbiAgICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICAgIHsga2V5OiAnYWRkcmVzc0Zvcm0uaW52YWxpZEFkZHJlc3MnIH0sXG4gICAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUlxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5jbGVhckFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzKCk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0cy5kZWNpc2lvbiA9PT0gJ1JFVklFVycpIHtcbiAgICAgICAgICB0aGlzLm9wZW5TdWdnZXN0ZWRBZGRyZXNzKHJlc3VsdHMpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIHRoaXMucmVnaW9ucyQgPSB0aGlzLnNlbGVjdGVkQ291bnRyeSQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoY291bnRyeSkgPT4gdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UuZ2V0UmVnaW9ucyhjb3VudHJ5KSksXG4gICAgICB0YXAoKHJlZ2lvbnMpID0+IHtcbiAgICAgICAgY29uc3QgcmVnaW9uQ29udHJvbCA9IHRoaXMuYmlsbGluZ0FkZHJlc3NGb3JtLmdldChcbiAgICAgICAgICAncmVnaW9uLmlzb2NvZGVTaG9ydCdcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHJlZ2lvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHJlZ2lvbkNvbnRyb2wuZW5hYmxlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVnaW9uQ29udHJvbC5kaXNhYmxlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGV4cE1vbnRoQW5kWWVhcigpOiB2b2lkIHtcbiAgICBjb25zdCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICB0aGlzLnllYXJzLnB1c2goeWVhciArIGkpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDEyOyBqKyspIHtcbiAgICAgIGlmIChqIDwgMTApIHtcbiAgICAgICAgdGhpcy5tb250aHMucHVzaChgMCR7an1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubW9udGhzLnB1c2goai50b1N0cmluZygpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0b2dnbGVEZWZhdWx0UGF5bWVudE1ldGhvZCgpOiB2b2lkIHtcbiAgICB0aGlzLnBheW1lbnRGb3JtLnZhbHVlLmRlZmF1bHRQYXltZW50ID0gIXRoaXMucGF5bWVudEZvcm0udmFsdWVcbiAgICAgIC5kZWZhdWx0UGF5bWVudDtcbiAgfVxuXG4gIHRvZ2dsZVNhbWVBc1NoaXBwaW5nQWRkcmVzcygpOiB2b2lkIHtcbiAgICB0aGlzLnNhbWVBc1NoaXBwaW5nQWRkcmVzcyA9ICF0aGlzLnNhbWVBc1NoaXBwaW5nQWRkcmVzcztcbiAgfVxuXG4gIGdldEFkZHJlc3NDYXJkQ29udGVudChhZGRyZXNzOiBBZGRyZXNzKTogQ2FyZCB7XG4gICAgbGV0IHJlZ2lvbiA9ICcnO1xuICAgIGlmIChhZGRyZXNzLnJlZ2lvbiAmJiBhZGRyZXNzLnJlZ2lvbi5pc29jb2RlKSB7XG4gICAgICByZWdpb24gPSBhZGRyZXNzLnJlZ2lvbi5pc29jb2RlICsgJywgJztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGV4dEJvbGQ6IGFkZHJlc3MuZmlyc3ROYW1lICsgJyAnICsgYWRkcmVzcy5sYXN0TmFtZSxcbiAgICAgIHRleHQ6IFtcbiAgICAgICAgYWRkcmVzcy5saW5lMSxcbiAgICAgICAgYWRkcmVzcy5saW5lMixcbiAgICAgICAgYWRkcmVzcy50b3duICsgJywgJyArIHJlZ2lvbiArIGFkZHJlc3MuY291bnRyeS5pc29jb2RlLFxuICAgICAgICBhZGRyZXNzLnBvc3RhbENvZGUsXG4gICAgICAgIGFkZHJlc3MucGhvbmUsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICBvcGVuU3VnZ2VzdGVkQWRkcmVzcyhyZXN1bHRzOiBBZGRyZXNzVmFsaWRhdGlvbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5zdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWYpIHtcbiAgICAgIHRoaXMuc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihcbiAgICAgICAgU3VnZ2VzdGVkQWRkcmVzc0RpYWxvZ0NvbXBvbmVudCxcbiAgICAgICAgeyBjZW50ZXJlZDogdHJ1ZSwgc2l6ZTogJ2xnJyB9XG4gICAgICApO1xuICAgICAgdGhpcy5zdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWYuY29tcG9uZW50SW5zdGFuY2UuZW50ZXJlZEFkZHJlc3MgPSB0aGlzLmJpbGxpbmdBZGRyZXNzRm9ybS52YWx1ZTtcbiAgICAgIHRoaXMuc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmLmNvbXBvbmVudEluc3RhbmNlLnN1Z2dlc3RlZEFkZHJlc3NlcyA9XG4gICAgICAgIHJlc3VsdHMuc3VnZ2VzdGVkQWRkcmVzc2VzO1xuICAgICAgdGhpcy5zdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWYucmVzdWx0XG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLmNsZWFyQWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKTtcbiAgICAgICAgICB0aGlzLnN1Z2dlc3RlZEFkZHJlc3NNb2RhbFJlZiA9IG51bGw7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgLy8gdGhpcyAgY2FsbGJhY2sgaXMgY2FsbGVkIHdoZW4gbW9kYWwgaXMgY2xvc2VkIHdpdGggRXNjIGtleSBvciBjbGlja2luZyBiYWNrZHJvcFxuICAgICAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuY2xlYXJBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cygpO1xuICAgICAgICAgIHRoaXMuc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5jbG9zZUZvcm0uZW1pdCgpO1xuICB9XG5cbiAgYmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLmdvQmFjay5lbWl0KCk7XG4gIH1cblxuICB2ZXJpZnlBZGRyZXNzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNhbWVBc1NoaXBwaW5nQWRkcmVzcykge1xuICAgICAgdGhpcy5uZXh0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UudmVyaWZ5QWRkcmVzcyh0aGlzLmJpbGxpbmdBZGRyZXNzRm9ybS52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgY291bnRyeVNlbGVjdGVkKGNvdW50cnk6IENvdW50cnkpOiB2b2lkIHtcbiAgICB0aGlzLmJpbGxpbmdBZGRyZXNzRm9ybS5nZXQoJ2NvdW50cnkuaXNvY29kZScpLnNldFZhbHVlKGNvdW50cnkuaXNvY29kZSk7XG4gICAgdGhpcy5zZWxlY3RlZENvdW50cnkkLm5leHQoY291bnRyeS5pc29jb2RlKTtcbiAgfVxuXG4gIG5leHQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGF5bWVudEZvcm0udmFsaWQpIHtcbiAgICAgIGlmICh0aGlzLnNhbWVBc1NoaXBwaW5nQWRkcmVzcykge1xuICAgICAgICB0aGlzLnNldFBheW1lbnREZXRhaWxzLmVtaXQoe1xuICAgICAgICAgIHBheW1lbnREZXRhaWxzOiB0aGlzLnBheW1lbnRGb3JtLnZhbHVlLFxuICAgICAgICAgIGJpbGxpbmdBZGRyZXNzOiBudWxsLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLmJpbGxpbmdBZGRyZXNzRm9ybS52YWxpZCkge1xuICAgICAgICAgIHRoaXMuc2V0UGF5bWVudERldGFpbHMuZW1pdCh7XG4gICAgICAgICAgICBwYXltZW50RGV0YWlsczogdGhpcy5wYXltZW50Rm9ybS52YWx1ZSxcbiAgICAgICAgICAgIGJpbGxpbmdBZGRyZXNzOiB0aGlzLmJpbGxpbmdBZGRyZXNzRm9ybS52YWx1ZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmJpbGxpbmdBZGRyZXNzRm9ybS5tYXJrQWxsQXNUb3VjaGVkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYXltZW50Rm9ybS5tYXJrQWxsQXNUb3VjaGVkKCk7XG5cbiAgICAgIGlmICghdGhpcy5zYW1lQXNTaGlwcGluZ0FkZHJlc3MpIHtcbiAgICAgICAgdGhpcy5iaWxsaW5nQWRkcmVzc0Zvcm0ubWFya0FsbEFzVG91Y2hlZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmFkZHJlc3NWZXJpZnlTdWIpIHtcbiAgICAgIHRoaXMuYWRkcmVzc1ZlcmlmeVN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19