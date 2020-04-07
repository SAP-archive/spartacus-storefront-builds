import { __decorate, __read } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address, AddressValidation, CardType, CheckoutDeliveryService, CheckoutPaymentService, Country, GlobalMessageService, GlobalMessageType, LoaderState, UserPaymentService, Region, UserAddressService, } from '@spartacus/core';
import { combineLatest, BehaviorSubject } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';
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
        this.checkboxSub = this.showSameAsShippingAddressCheckbox().subscribe(function (shouldShowCheckbox) {
            // this operation makes sure the checkbox is not checked if not shown and vice versa
            _this.sameAsShippingAddress = shouldShowCheckbox;
        });
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
    PaymentFormComponent.prototype.paymentSelected = function (card) {
        this.paymentForm.get('cardType.code').setValue(card.code);
    };
    PaymentFormComponent.prototype.monthSelected = function (month) {
        this.paymentForm.get('expiryMonth').setValue(month);
    };
    PaymentFormComponent.prototype.yearSelected = function (year) {
        this.paymentForm.get('expiryYear').setValue(year);
    };
    PaymentFormComponent.prototype.toggleSameAsShippingAddress = function () {
        this.sameAsShippingAddress = !this.sameAsShippingAddress;
    };
    /**
     * Check if the shipping address can also be a billing address
     *
     * @memberof PaymentFormComponent
     */
    PaymentFormComponent.prototype.showSameAsShippingAddressCheckbox = function () {
        return combineLatest([this.countries$, this.shippingAddress$]).pipe(map(function (_a) {
            var _b = __read(_a, 2), countries = _b[0], address = _b[1];
            return ((address === null || address === void 0 ? void 0 : address.country) &&
                !!countries.filter(function (country) {
                    return country.isocode === address.country.isocode;
                }).length);
        }));
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
    PaymentFormComponent.prototype.regionSelected = function (region) {
        this.billingAddressForm
            .get('region.isocodeShort')
            .setValue(region.isocodeShort);
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
        if (this.checkboxSub) {
            this.checkboxSub.unsubscribe();
        }
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
            template: "<!-- FORM -->\n<ng-container *ngIf=\"!(loading$ | async).loading; else spinner\">\n  <form (ngSubmit)=\"next()\" [formGroup]=\"paymentForm\">\n    <div class=\"row\">\n      <div class=\"col-md-12 col-xl-10\">\n        <div class=\"form-group\" formGroupName=\"cardType\">\n          <ng-container *ngIf=\"cardTypes$ | async as cardTypes\">\n            <div *ngIf=\"cardTypes.length !== 0\">\n              <label aria-required=\"true\">\n                <span class=\"label-content required\">{{\n                  'paymentForm.paymentType' | cxTranslate\n                }}</span>\n                <ng-select\n                  [searchable]=\"false\"\n                  [clearable]=\"false\"\n                  [items]=\"cardTypes\"\n                  bindLabel=\"name\"\n                  bindValue=\"code\"\n                  placeholder=\"{{ 'paymentForm.selectOne' | cxTranslate }}\"\n                  (change)=\"paymentSelected($event)\"\n                  formControlName=\"code\"\n                >\n                </ng-select>\n                <cx-form-errors\n                  [control]=\"paymentForm.get('cardType.code')\"\n                ></cx-form-errors>\n              </label>\n            </div>\n          </ng-container>\n        </div>\n        <div class=\"form-group\">\n          <label>\n            <span class=\"label-content\">{{\n              'paymentForm.accountHolderName.label' | cxTranslate\n            }}</span>\n            <input\n              class=\"form-control\"\n              type=\"text\"\n              placeholder=\"{{\n                'paymentForm.accountHolderName.placeholder' | cxTranslate\n              }}\"\n              formControlName=\"accountHolderName\"\n            />\n            <cx-form-errors\n              [control]=\"paymentForm.get('accountHolderName')\"\n            ></cx-form-errors>\n          </label>\n        </div>\n        <div class=\"form-group\">\n          <label>\n            <span class=\"label-content\">{{\n              'paymentForm.cardNumber' | cxTranslate\n            }}</span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"cardNumber\"\n            />\n            <cx-form-errors\n              [control]=\"paymentForm.get('cardNumber')\"\n            ></cx-form-errors>\n          </label>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"form-group col-md-8\">\n            <label>\n              <span class=\"label-content\">{{\n                'paymentForm.expirationDate' | cxTranslate\n              }}</span>\n              <div class=\"cx-payment-form-exp-date\">\n                <div class=\"cx-payment-form-exp-date-wrapper\">\n                  <ng-select\n                    [searchable]=\"false\"\n                    [clearable]=\"false\"\n                    [items]=\"months\"\n                    placeholder=\"{{ 'paymentForm.monthMask' | cxTranslate }}\"\n                    (change)=\"monthSelected($event)\"\n                    formControlName=\"expiryMonth\"\n                  >\n                  </ng-select>\n                  <cx-form-errors\n                    [control]=\"paymentForm.get('expiryMonth')\"\n                  ></cx-form-errors>\n                </div>\n                <div class=\"cx-payment-form-exp-date-wrapper\">\n                  <ng-select\n                    [searchable]=\"false\"\n                    [clearable]=\"false\"\n                    [items]=\"years\"\n                    placeholder=\"{{ 'paymentForm.yearMask' | cxTranslate }}\"\n                    (change)=\"yearSelected($event)\"\n                    formControlName=\"expiryYear\"\n                  >\n                  </ng-select>\n                  <cx-form-errors\n                    [control]=\"paymentForm.get('expiryYear')\"\n                  ></cx-form-errors>\n                </div>\n              </div>\n            </label>\n          </div>\n          <div class=\"form-group col-md-4\">\n            <label>\n              <span class=\"label-content\">\n                {{ 'paymentForm.securityCode' | cxTranslate }}\n                <cx-icon\n                  [type]=\"iconTypes.INFO\"\n                  class=\"cx-payment-form-tooltip\"\n                  placement=\"right\"\n                  title=\"{{ 'paymentForm.securityCodeTitle' | cxTranslate }}\"\n                  alt=\"\"\n                ></cx-icon>\n              </span>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"cVVNumber\"\n                formControlName=\"cvn\"\n              />\n              <cx-form-errors\n                [control]=\"paymentForm.get('cvn')\"\n              ></cx-form-errors>\n            </label>\n          </div>\n        </div>\n\n        <div class=\"form-group\" *ngIf=\"setAsDefaultField\">\n          <div class=\"form-check\">\n            <label>\n              <input\n                type=\"checkbox\"\n                class=\"form-check-input\"\n                (change)=\"toggleDefaultPaymentMethod()\"\n              />\n              <span class=\"form-check-label\">{{\n                'paymentForm.setAsDefault' | cxTranslate\n              }}</span>\n            </label>\n          </div>\n        </div>\n\n        <!-- BILLING -->\n        <div class=\"cx-payment-form-billing\">\n          <div class=\"cx-payment-form-billing-address\">\n            {{ 'paymentForm.billingAddress' | cxTranslate }}\n          </div>\n\n          <!-- SAME AS SHIPPING CHECKBOX -->\n          <ng-container *ngIf=\"showSameAsShippingAddressCheckbox() | async\">\n            <div class=\"form-group\">\n              <div class=\"form-check\">\n                <label>\n                  <input\n                    type=\"checkbox\"\n                    class=\"form-check-input\"\n                    [checked]=\"sameAsShippingAddress\"\n                    (change)=\"toggleSameAsShippingAddress()\"\n                  />\n                  <span class=\"form-check-label\">{{\n                    'paymentForm.sameAsShippingAddress' | cxTranslate\n                  }}</span>\n                </label>\n              </div>\n            </div>\n          </ng-container>\n\n          <!-- BILLING INFO COMPONENT -->\n          <ng-container\n            *ngIf=\"\n              sameAsShippingAddress && shippingAddress$\n                | async as shippingAddress;\n              else billingAddress\n            \"\n          >\n            <cx-card\n              [content]=\"getAddressCardContent(shippingAddress)\"\n            ></cx-card>\n          </ng-container>\n\n          <ng-template #billingAddress>\n            <div [formGroup]=\"billingAddressForm\">\n              <div class=\"form-group\" formGroupName=\"country\">\n                <ng-container *ngIf=\"countries$ | async as countries\">\n                  <div *ngIf=\"countries.length !== 0\">\n                    <label aria-required=\"true\">\n                      <span class=\"label-content required\">{{\n                        'addressForm.country' | cxTranslate\n                      }}</span>\n                      <ng-select\n                        [searchable]=\"true\"\n                        [clearable]=\"false\"\n                        [items]=\"countries\"\n                        bindLabel=\"name\"\n                        bindValue=\"isocode\"\n                        placeholder=\"{{\n                          'addressForm.selectOne' | cxTranslate\n                        }}\"\n                        (change)=\"countrySelected($event)\"\n                        formControlName=\"isocode\"\n                      >\n                      </ng-select>\n                      <cx-form-errors\n                        [control]=\"billingAddressForm.get('country.isocode')\"\n                      ></cx-form-errors>\n                    </label>\n                  </div>\n                </ng-container>\n              </div>\n              <div class=\"form-group\">\n                <label>\n                  <span class=\"label-content required\">{{\n                    'addressForm.firstName.label' | cxTranslate\n                  }}</span>\n                  <input\n                    class=\"form-control\"\n                    type=\"text\"\n                    placeholder=\"{{\n                      'addressForm.firstName.placeholder' | cxTranslate\n                    }}\"\n                    formControlName=\"firstName\"\n                  />\n                  <cx-form-errors\n                    [control]=\"billingAddressForm.get('firstName')\"\n                  ></cx-form-errors>\n                </label>\n              </div>\n              <div class=\"form-group\">\n                <label>\n                  <span class=\"label-content required\">{{\n                    'addressForm.lastName.label' | cxTranslate\n                  }}</span>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    placeholder=\"{{\n                      'addressForm.lastName.placeholder' | cxTranslate\n                    }}\"\n                    formControlName=\"lastName\"\n                  />\n                  <cx-form-errors\n                    [control]=\"billingAddressForm.get('lastName')\"\n                  ></cx-form-errors>\n                </label>\n              </div>\n              <div class=\"form-group\">\n                <label>\n                  <span class=\"label-content required\">{{\n                    'addressForm.address1' | cxTranslate\n                  }}</span>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    placeholder=\"{{\n                      'addressForm.streetAddress' | cxTranslate\n                    }}\"\n                    formControlName=\"line1\"\n                  />\n                  <cx-form-errors\n                    [control]=\"billingAddressForm.get('line1')\"\n                  ></cx-form-errors>\n                </label>\n              </div>\n              <div class=\"form-group\">\n                <label>\n                  <span class=\"label-content\">{{\n                    'addressForm.address2' | cxTranslate\n                  }}</span>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    placeholder=\"{{ 'addressForm.aptSuite' | cxTranslate }}\"\n                    formControlName=\"line2\"\n                  />\n                </label>\n              </div>\n              <div class=\"row\">\n                <div class=\"form-group col-md-6\">\n                  <label>\n                    <span class=\"label-content required\">{{\n                      'addressForm.city.label' | cxTranslate\n                    }}</span>\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      placeholder=\"{{\n                        'addressForm.city.placeholder' | cxTranslate\n                      }}\"\n                      formControlName=\"town\"\n                    />\n                    <cx-form-errors\n                      [control]=\"billingAddressForm.get('town')\"\n                    ></cx-form-errors>\n                  </label>\n                </div>\n                <div class=\"form-group col-md-6\">\n                  <label>\n                    <span class=\"label-content required\">{{\n                      'addressForm.zipCode.label' | cxTranslate\n                    }}</span>\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      placeholder=\"{{\n                        'addressForm.zipCode.placeholder' | cxTranslate\n                      }}\"\n                      formControlName=\"postalCode\"\n                    />\n                    <cx-form-errors\n                      [control]=\"billingAddressForm.get('postalCode')\"\n                    ></cx-form-errors>\n                  </label>\n                </div>\n                <ng-container\n                  *ngIf=\"regions$ | async as regions\"\n                  formGroupName=\"region\"\n                >\n                  <ng-container *ngIf=\"regions.length !== 0\">\n                    <div class=\"form-group col-md-6\">\n                      <label aria-required=\"true\">\n                        <span class=\"label-content required\">{{\n                          'addressForm.state' | cxTranslate\n                        }}</span>\n                        <ng-select\n                          class=\"region-select\"\n                          formControlName=\"isocodeShort\"\n                          [searchable]=\"true\"\n                          [clearable]=\"false\"\n                          [items]=\"regions\"\n                          bindLabel=\"{{\n                            regions[0].name ? 'name' : 'isocodeShort'\n                          }}\"\n                          bindValue=\"{{\n                            regions[0].name ? 'isocodeShort' : 'region'\n                          }}\"\n                          placeholder=\"{{\n                            'addressForm.selectOne' | cxTranslate\n                          }}\"\n                          (change)=\"regionSelected($event)\"\n                        >\n                        </ng-select>\n                        <cx-form-errors\n                          [control]=\"\n                            billingAddressForm.get('region.isocodeShort')\n                          \"\n                        ></cx-form-errors>\n                      </label>\n                    </div>\n                  </ng-container>\n                </ng-container>\n              </div>\n            </div>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n\n    <!-- BUTTON SECTION -->\n    <div class=\"cx-checkout-btns row\">\n      <div class=\"col-md-12 col-lg-6\">\n        <button\n          *ngIf=\"paymentMethodsCount === 0\"\n          class=\"btn btn-block btn-action\"\n          (click)=\"back()\"\n        >\n          {{ 'common.back' | cxTranslate }}\n        </button>\n        <button\n          *ngIf=\"paymentMethodsCount > 0\"\n          class=\"btn btn-block btn-action\"\n          (click)=\"close()\"\n        >\n          {{ 'paymentForm.changePayment' | cxTranslate }}\n        </button>\n      </div>\n      <div class=\"col-md-12 col-lg-6\">\n        <button class=\"btn btn-block btn-primary\" type=\"submit\">\n          {{ 'common.continue' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n  </form>\n</ng-container>\n\n<ng-template #spinner>\n  <cx-spinner></cx-spinner>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], PaymentFormComponent);
    return PaymentFormComponent;
}());
export { PaymentFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NoZWNrb3V0L2NvbXBvbmVudHMvcGF5bWVudC1tZXRob2QvcGF5bWVudC1mb3JtL3BheW1lbnQtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFDTCxPQUFPLEVBQ1AsaUJBQWlCLEVBQ2pCLFFBQVEsRUFDUix1QkFBdUIsRUFDdkIsc0JBQXNCLEVBQ3RCLE9BQU8sRUFDUCxvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLFdBQVcsRUFDWCxrQkFBa0IsRUFDbEIsTUFBTSxFQUNOLGtCQUFrQixHQUNuQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQTRCLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRixPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQ0wsUUFBUSxFQUNSLFlBQVksR0FDYixNQUFNLDhDQUE4QyxDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxxR0FBcUcsQ0FBQyxDQUFDLHNCQUFzQjtBQU83SztJQTJERSw4QkFDWSxzQkFBOEMsRUFDOUMsdUJBQWdELEVBQ2hELGtCQUFzQyxFQUN0QyxvQkFBMEMsRUFDMUMsRUFBZSxFQUNmLFlBQTBCLEVBQzFCLGtC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QUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7Z0JBcE9tQyxzQkFBc0I7Z0JBQ3JCLHVCQUF1QjtnQkFDNUIsa0JBQWtCO2dCQUNoQixvQkFBb0I7Z0JBQ3RDLFdBQVc7Z0JBQ0QsWUFBWTtnQkFDTixrQkFBa0I7O0lBaERsRDtRQURDLEtBQUssRUFBRTttRUFDbUI7SUFHM0I7UUFEQyxLQUFLLEVBQUU7cUVBQ29CO0lBRzVCO1FBREMsTUFBTSxFQUFFO3dEQUN3QjtJQUdqQztRQURDLE1BQU0sRUFBRTsyREFDMkI7SUFHcEM7UUFEQyxNQUFNLEVBQUU7bUVBQ21DO0lBOUJqQyxvQkFBb0I7UUFMaEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQiw4b2RBQTRDO1lBQzVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVyxvQkFBb0IsQ0FpU2hDO0lBQUQsMkJBQUM7Q0FBQSxBQWpTRCxJQWlTQztTQWpTWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBBZGRyZXNzLFxuICBBZGRyZXNzVmFsaWRhdGlvbixcbiAgQ2FyZFR5cGUsXG4gIENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICBDaGVja291dFBheW1lbnRTZXJ2aWNlLFxuICBDb3VudHJ5LFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIExvYWRlclN0YXRlLFxuICBVc2VyUGF5bWVudFNlcnZpY2UsXG4gIFJlZ2lvbixcbiAgVXNlckFkZHJlc3NTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbmltcG9ydCB7XG4gIE1vZGFsUmVmLFxuICBNb2RhbFNlcnZpY2UsXG59IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL2luZGV4JztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uLy4uL21pc2MvaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBTdWdnZXN0ZWRBZGRyZXNzRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc2hpcHBpbmctYWRkcmVzcy9hZGRyZXNzLWZvcm0vc3VnZ2VzdGVkLWFkZHJlc3Nlcy1kaWFsb2cvc3VnZ2VzdGVkLWFkZHJlc3Nlcy1kaWFsb2cuY29tcG9uZW50JzsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wYXltZW50LWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vcGF5bWVudC1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFBheW1lbnRGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG5cbiAgcHJpdmF0ZSBjaGVja2JveFN1YjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGFkZHJlc3NWZXJpZnlTdWI6IFN1YnNjcmlwdGlvbjtcbiAgc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmOiBNb2RhbFJlZjtcbiAgbW9udGhzOiBzdHJpbmdbXSA9IFtdO1xuICB5ZWFyczogbnVtYmVyW10gPSBbXTtcblxuICBjYXJkVHlwZXMkOiBPYnNlcnZhYmxlPENhcmRUeXBlW10+O1xuICBzaGlwcGluZ0FkZHJlc3MkOiBPYnNlcnZhYmxlPEFkZHJlc3M+O1xuICBjb3VudHJpZXMkOiBPYnNlcnZhYmxlPENvdW50cnlbXT47XG4gIGxvYWRpbmckOiBPYnNlcnZhYmxlPExvYWRlclN0YXRlPHZvaWQ+PjtcbiAgc2FtZUFzU2hpcHBpbmdBZGRyZXNzID0gdHJ1ZTtcbiAgcmVnaW9ucyQ6IE9ic2VydmFibGU8UmVnaW9uW10+O1xuICBzZWxlY3RlZENvdW50cnkkOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPignJyk7XG5cbiAgQElucHV0KClcbiAgc2V0QXNEZWZhdWx0RmllbGQ6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgcGF5bWVudE1ldGhvZHNDb3VudDogbnVtYmVyO1xuXG4gIEBPdXRwdXQoKVxuICBnb0JhY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAT3V0cHV0KClcbiAgY2xvc2VGb3JtID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHNldFBheW1lbnREZXRhaWxzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcGF5bWVudEZvcm06IEZvcm1Hcm91cCA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgIGNhcmRUeXBlOiB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGNvZGU6IFtudWxsLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9KSxcbiAgICBhY2NvdW50SG9sZGVyTmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICBjYXJkTnVtYmVyOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIGV4cGlyeU1vbnRoOiBbbnVsbCwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgZXhwaXJ5WWVhcjogW251bGwsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIGN2bjogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICBkZWZhdWx0UGF5bWVudDogW2ZhbHNlXSxcbiAgfSk7XG5cbiAgYmlsbGluZ0FkZHJlc3NGb3JtOiBGb3JtR3JvdXAgPSB0aGlzLmZiLmdyb3VwKHtcbiAgICBmaXJzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgbGFzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgbGluZTE6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgbGluZTI6IFsnJ10sXG4gICAgdG93bjogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICByZWdpb246IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgaXNvY29kZVNob3J0OiBbbnVsbCwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgfSksXG4gICAgY291bnRyeTogdGhpcy5mYi5ncm91cCh7XG4gICAgICBpc29jb2RlOiBbbnVsbCwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgfSksXG4gICAgcG9zdGFsQ29kZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0UGF5bWVudFNlcnZpY2U6IENoZWNrb3V0UGF5bWVudFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdXNlclBheW1lbnRTZXJ2aWNlOiBVc2VyUGF5bWVudFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByb3RlY3RlZCBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZXhwTW9udGhBbmRZZWFyKCk7XG4gICAgdGhpcy5jb3VudHJpZXMkID0gdGhpcy51c2VyUGF5bWVudFNlcnZpY2UuZ2V0QWxsQmlsbGluZ0NvdW50cmllcygpLnBpcGUoXG4gICAgICB0YXAoKGNvdW50cmllcykgPT4ge1xuICAgICAgICAvLyBJZiB0aGUgc3RvcmUgaXMgZW1wdHkgZmV0Y2ggY291bnRyaWVzLiBUaGlzIGlzIGFsc28gdXNlZCB3aGVuIGNoYW5naW5nIGxhbmd1YWdlLlxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoY291bnRyaWVzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLnVzZXJQYXltZW50U2VydmljZS5sb2FkQmlsbGluZ0NvdW50cmllcygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLmNhcmRUeXBlcyQgPSB0aGlzLmNoZWNrb3V0UGF5bWVudFNlcnZpY2UuZ2V0Q2FyZFR5cGVzKCkucGlwZShcbiAgICAgIHRhcCgoY2FyZFR5cGVzKSA9PiB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhjYXJkVHlwZXMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXRQYXltZW50U2VydmljZS5sb2FkU3VwcG9ydGVkQ2FyZFR5cGVzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuc2hpcHBpbmdBZGRyZXNzJCA9IHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuZ2V0RGVsaXZlcnlBZGRyZXNzKCk7XG4gICAgdGhpcy5sb2FkaW5nJCA9IHRoaXMuY2hlY2tvdXRQYXltZW50U2VydmljZS5nZXRTZXRQYXltZW50RGV0YWlsc1Jlc3VsdFByb2Nlc3MoKTtcblxuICAgIHRoaXMuY2hlY2tib3hTdWIgPSB0aGlzLnNob3dTYW1lQXNTaGlwcGluZ0FkZHJlc3NDaGVja2JveCgpLnN1YnNjcmliZShcbiAgICAgIChzaG91bGRTaG93Q2hlY2tib3g6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgLy8gdGhpcyBvcGVyYXRpb24gbWFrZXMgc3VyZSB0aGUgY2hlY2tib3ggaXMgbm90IGNoZWNrZWQgaWYgbm90IHNob3duIGFuZCB2aWNlIHZlcnNhXG4gICAgICAgIHRoaXMuc2FtZUFzU2hpcHBpbmdBZGRyZXNzID0gc2hvdWxkU2hvd0NoZWNrYm94O1xuICAgICAgfVxuICAgICk7XG5cbiAgICAvLyB2ZXJpZnkgdGhlIG5ldyBhZGRlZCBhZGRyZXNzXG4gICAgdGhpcy5hZGRyZXNzVmVyaWZ5U3ViID0gdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZVxuICAgICAgLmdldEFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzKClcbiAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdHM6IEFkZHJlc3NWYWxpZGF0aW9uKSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHRzLmRlY2lzaW9uID09PSAnRkFJTCcpIHtcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLmNsZWFyQWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHRzLmRlY2lzaW9uID09PSAnQUNDRVBUJykge1xuICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdHMuZGVjaXNpb24gPT09ICdSRUpFQ1QnKSB7XG4gICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgICAgICB7IGtleTogJ2FkZHJlc3NGb3JtLmludmFsaWRBZGRyZXNzJyB9LFxuICAgICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuY2xlYXJBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cygpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdHMuZGVjaXNpb24gPT09ICdSRVZJRVcnKSB7XG4gICAgICAgICAgdGhpcy5vcGVuU3VnZ2VzdGVkQWRkcmVzcyhyZXN1bHRzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB0aGlzLnJlZ2lvbnMkID0gdGhpcy5zZWxlY3RlZENvdW50cnkkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKGNvdW50cnkpID0+IHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmdldFJlZ2lvbnMoY291bnRyeSkpLFxuICAgICAgdGFwKChyZWdpb25zKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZ2lvbkNvbnRyb2wgPSB0aGlzLmJpbGxpbmdBZGRyZXNzRm9ybS5nZXQoXG4gICAgICAgICAgJ3JlZ2lvbi5pc29jb2RlU2hvcnQnXG4gICAgICAgICk7XG4gICAgICAgIGlmIChyZWdpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICByZWdpb25Db250cm9sLmVuYWJsZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlZ2lvbkNvbnRyb2wuZGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBleHBNb250aEFuZFllYXIoKTogdm9pZCB7XG4gICAgY29uc3QgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgdGhpcy55ZWFycy5wdXNoKHllYXIgKyBpKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBqID0gMTsgaiA8PSAxMjsgaisrKSB7XG4gICAgICBpZiAoaiA8IDEwKSB7XG4gICAgICAgIHRoaXMubW9udGhzLnB1c2goYDAke2p9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1vbnRocy5wdXNoKGoudG9TdHJpbmcoKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlRGVmYXVsdFBheW1lbnRNZXRob2QoKTogdm9pZCB7XG4gICAgdGhpcy5wYXltZW50Rm9ybS52YWx1ZS5kZWZhdWx0UGF5bWVudCA9ICF0aGlzLnBheW1lbnRGb3JtLnZhbHVlXG4gICAgICAuZGVmYXVsdFBheW1lbnQ7XG4gIH1cblxuICBwYXltZW50U2VsZWN0ZWQoY2FyZDogQ2FyZFR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLnBheW1lbnRGb3JtLmdldCgnY2FyZFR5cGUuY29kZScpLnNldFZhbHVlKGNhcmQuY29kZSk7XG4gIH1cblxuICBtb250aFNlbGVjdGVkKG1vbnRoOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnBheW1lbnRGb3JtLmdldCgnZXhwaXJ5TW9udGgnKS5zZXRWYWx1ZShtb250aCk7XG4gIH1cblxuICB5ZWFyU2VsZWN0ZWQoeWVhcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wYXltZW50Rm9ybS5nZXQoJ2V4cGlyeVllYXInKS5zZXRWYWx1ZSh5ZWFyKTtcbiAgfVxuXG4gIHRvZ2dsZVNhbWVBc1NoaXBwaW5nQWRkcmVzcygpOiB2b2lkIHtcbiAgICB0aGlzLnNhbWVBc1NoaXBwaW5nQWRkcmVzcyA9ICF0aGlzLnNhbWVBc1NoaXBwaW5nQWRkcmVzcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgc2hpcHBpbmcgYWRkcmVzcyBjYW4gYWxzbyBiZSBhIGJpbGxpbmcgYWRkcmVzc1xuICAgKlxuICAgKiBAbWVtYmVyb2YgUGF5bWVudEZvcm1Db21wb25lbnRcbiAgICovXG4gIHNob3dTYW1lQXNTaGlwcGluZ0FkZHJlc3NDaGVja2JveCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbdGhpcy5jb3VudHJpZXMkLCB0aGlzLnNoaXBwaW5nQWRkcmVzcyRdKS5waXBlKFxuICAgICAgbWFwKChbY291bnRyaWVzLCBhZGRyZXNzXSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIGFkZHJlc3M/LmNvdW50cnkgJiZcbiAgICAgICAgICAhIWNvdW50cmllcy5maWx0ZXIoXG4gICAgICAgICAgICAoY291bnRyeTogQ291bnRyeSk6IGJvb2xlYW4gPT5cbiAgICAgICAgICAgICAgY291bnRyeS5pc29jb2RlID09PSBhZGRyZXNzLmNvdW50cnkuaXNvY29kZVxuICAgICAgICAgICkubGVuZ3RoXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRBZGRyZXNzQ2FyZENvbnRlbnQoYWRkcmVzczogQWRkcmVzcyk6IENhcmQge1xuICAgIGxldCByZWdpb24gPSAnJztcbiAgICBpZiAoYWRkcmVzcy5yZWdpb24gJiYgYWRkcmVzcy5yZWdpb24uaXNvY29kZSkge1xuICAgICAgcmVnaW9uID0gYWRkcmVzcy5yZWdpb24uaXNvY29kZSArICcsICc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHRCb2xkOiBhZGRyZXNzLmZpcnN0TmFtZSArICcgJyArIGFkZHJlc3MubGFzdE5hbWUsXG4gICAgICB0ZXh0OiBbXG4gICAgICAgIGFkZHJlc3MubGluZTEsXG4gICAgICAgIGFkZHJlc3MubGluZTIsXG4gICAgICAgIGFkZHJlc3MudG93biArICcsICcgKyByZWdpb24gKyBhZGRyZXNzLmNvdW50cnkuaXNvY29kZSxcbiAgICAgICAgYWRkcmVzcy5wb3N0YWxDb2RlLFxuICAgICAgICBhZGRyZXNzLnBob25lLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgb3BlblN1Z2dlc3RlZEFkZHJlc3MocmVzdWx0czogQWRkcmVzc1ZhbGlkYXRpb24pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmKSB7XG4gICAgICB0aGlzLnN1Z2dlc3RlZEFkZHJlc3NNb2RhbFJlZiA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oXG4gICAgICAgIFN1Z2dlc3RlZEFkZHJlc3NEaWFsb2dDb21wb25lbnQsXG4gICAgICAgIHsgY2VudGVyZWQ6IHRydWUsIHNpemU6ICdsZycgfVxuICAgICAgKTtcbiAgICAgIHRoaXMuc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmLmNvbXBvbmVudEluc3RhbmNlLmVudGVyZWRBZGRyZXNzID0gdGhpcy5iaWxsaW5nQWRkcmVzc0Zvcm0udmFsdWU7XG4gICAgICB0aGlzLnN1Z2dlc3RlZEFkZHJlc3NNb2RhbFJlZi5jb21wb25lbnRJbnN0YW5jZS5zdWdnZXN0ZWRBZGRyZXNzZXMgPVxuICAgICAgICByZXN1bHRzLnN1Z2dlc3RlZEFkZHJlc3NlcztcbiAgICAgIHRoaXMuc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmLnJlc3VsdFxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5jbGVhckFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzKCk7XG4gICAgICAgICAgdGhpcy5zdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWYgPSBudWxsO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgIC8vIHRoaXMgIGNhbGxiYWNrIGlzIGNhbGxlZCB3aGVuIG1vZGFsIGlzIGNsb3NlZCB3aXRoIEVzYyBrZXkgb3IgY2xpY2tpbmcgYmFja2Ryb3BcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLmNsZWFyQWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKTtcbiAgICAgICAgICB0aGlzLnN1Z2dlc3RlZEFkZHJlc3NNb2RhbFJlZiA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2VGb3JtLmVtaXQoKTtcbiAgfVxuXG4gIGJhY2soKTogdm9pZCB7XG4gICAgdGhpcy5nb0JhY2suZW1pdCgpO1xuICB9XG5cbiAgdmVyaWZ5QWRkcmVzcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zYW1lQXNTaGlwcGluZ0FkZHJlc3MpIHtcbiAgICAgIHRoaXMubmV4dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLnZlcmlmeUFkZHJlc3ModGhpcy5iaWxsaW5nQWRkcmVzc0Zvcm0udmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGNvdW50cnlTZWxlY3RlZChjb3VudHJ5OiBDb3VudHJ5KTogdm9pZCB7XG4gICAgdGhpcy5iaWxsaW5nQWRkcmVzc0Zvcm0uZ2V0KCdjb3VudHJ5Lmlzb2NvZGUnKS5zZXRWYWx1ZShjb3VudHJ5Lmlzb2NvZGUpO1xuICAgIHRoaXMuc2VsZWN0ZWRDb3VudHJ5JC5uZXh0KGNvdW50cnkuaXNvY29kZSk7XG4gIH1cblxuICByZWdpb25TZWxlY3RlZChyZWdpb246IFJlZ2lvbik6IHZvaWQge1xuICAgIHRoaXMuYmlsbGluZ0FkZHJlc3NGb3JtXG4gICAgICAuZ2V0KCdyZWdpb24uaXNvY29kZVNob3J0JylcbiAgICAgIC5zZXRWYWx1ZShyZWdpb24uaXNvY29kZVNob3J0KTtcbiAgfVxuXG4gIG5leHQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGF5bWVudEZvcm0udmFsaWQpIHtcbiAgICAgIGlmICh0aGlzLnNhbWVBc1NoaXBwaW5nQWRkcmVzcykge1xuICAgICAgICB0aGlzLnNldFBheW1lbnREZXRhaWxzLmVtaXQoe1xuICAgICAgICAgIHBheW1lbnREZXRhaWxzOiB0aGlzLnBheW1lbnRGb3JtLnZhbHVlLFxuICAgICAgICAgIGJpbGxpbmdBZGRyZXNzOiBudWxsLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLmJpbGxpbmdBZGRyZXNzRm9ybS52YWxpZCkge1xuICAgICAgICAgIHRoaXMuc2V0UGF5bWVudERldGFpbHMuZW1pdCh7XG4gICAgICAgICAgICBwYXltZW50RGV0YWlsczogdGhpcy5wYXltZW50Rm9ybS52YWx1ZSxcbiAgICAgICAgICAgIGJpbGxpbmdBZGRyZXNzOiB0aGlzLmJpbGxpbmdBZGRyZXNzRm9ybS52YWx1ZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmJpbGxpbmdBZGRyZXNzRm9ybS5tYXJrQWxsQXNUb3VjaGVkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYXltZW50Rm9ybS5tYXJrQWxsQXNUb3VjaGVkKCk7XG5cbiAgICAgIGlmICghdGhpcy5zYW1lQXNTaGlwcGluZ0FkZHJlc3MpIHtcbiAgICAgICAgdGhpcy5iaWxsaW5nQWRkcmVzc0Zvcm0ubWFya0FsbEFzVG91Y2hlZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmNoZWNrYm94U3ViKSB7XG4gICAgICB0aGlzLmNoZWNrYm94U3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmFkZHJlc3NWZXJpZnlTdWIpIHtcbiAgICAgIHRoaXMuYWRkcmVzc1ZlcmlmeVN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19