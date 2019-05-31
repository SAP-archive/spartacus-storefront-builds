/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { map, tap } from 'rxjs/operators';
import { CheckoutService, GlobalMessageService, GlobalMessageType, UserService, } from '@spartacus/core';
import { SuggestedAddressDialogComponent } from './suggested-addresses-dialog/suggested-addresses-dialog.component';
import { ModalService, } from '../../../../../shared/components/modal/index';
var AddressFormComponent = /** @class */ (function () {
    function AddressFormComponent(fb, checkoutService, userService, globalMessageService, modalService) {
        this.fb = fb;
        this.checkoutService = checkoutService;
        this.userService = userService;
        this.globalMessageService = globalMessageService;
        this.modalService = modalService;
        this.showCancelBtn = true;
        this.submitAddress = new EventEmitter();
        this.backToAddress = new EventEmitter();
        this.address = this.fb.group({
            defaultAddress: [false],
            titleCode: [''],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            line1: ['', Validators.required],
            line2: [''],
            town: ['', Validators.required],
            region: this.fb.group({
                isocode: [null, Validators.required],
            }),
            country: this.fb.group({
                isocode: [null, Validators.required],
            }),
            postalCode: ['', Validators.required],
            phone: '',
        });
    }
    /**
     * @return {?}
     */
    AddressFormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Fetching countries
        this.countries$ = this.userService.getDeliveryCountries().pipe(tap(function (countries) {
            if (Object.keys(countries).length === 0) {
                _this.userService.loadDeliveryCountries();
            }
        }));
        // Fetching titles
        this.titles$ = this.userService.getTitles().pipe(tap(function (titles) {
            if (Object.keys(titles).length === 0) {
                _this.userService.loadTitles();
            }
        }), map(function (titles) {
            /** @type {?} */
            var noneTitle = { code: '', name: 'Title' };
            return tslib_1.__spread([noneTitle], titles);
        }));
        // Fetching regions
        this.regions$ = this.userService.getRegions().pipe(tap(function (regions) {
            /** @type {?} */
            var regionControl = _this.address.get('region.isocode');
            if (Object.keys(regions).length === 0) {
                regionControl.disable();
                /** @type {?} */
                var countryIsoCode = _this.address.get('country.isocode').value;
                if (countryIsoCode) {
                    _this.userService.loadRegions(countryIsoCode);
                }
            }
            else {
                regionControl.enable();
            }
        }));
        // verify the new added address
        this.addressVerifySub = this.checkoutService
            .getAddressVerificationResults()
            .subscribe(function (results) {
            if (results === 'FAIL') {
                _this.checkoutService.clearAddressVerificationResults();
            }
            else if (results.decision === 'ACCEPT') {
                _this.submitAddress.emit(_this.address.value);
            }
            else if (results.decision === 'REJECT') {
                // TODO: Workaround: allow server for decide is titleCode mandatory (if yes, provide personalized message)
                if (results.errors.errors.some(function (error) { return error.subject === 'titleCode'; })) {
                    _this.globalMessageService.add({ key: 'addressForm.titleRequired' }, GlobalMessageType.MSG_TYPE_ERROR);
                }
                else {
                    _this.globalMessageService.add({ key: 'addressForm.invalidAddress' }, GlobalMessageType.MSG_TYPE_ERROR);
                }
                _this.checkoutService.clearAddressVerificationResults();
            }
            else if (results.decision === 'REVIEW') {
                _this.openSuggestedAddress(results);
            }
        });
        if (this.addressData) {
            this.address.patchValue(this.addressData);
            this.countrySelected(this.addressData.country);
            if (this.addressData.region) {
                this.regionSelected(this.addressData.region);
            }
        }
    };
    /**
     * @param {?} title
     * @return {?}
     */
    AddressFormComponent.prototype.titleSelected = /**
     * @param {?} title
     * @return {?}
     */
    function (title) {
        this.address['controls'].titleCode.setValue(title.code);
    };
    /**
     * @param {?} country
     * @return {?}
     */
    AddressFormComponent.prototype.countrySelected = /**
     * @param {?} country
     * @return {?}
     */
    function (country) {
        this.address['controls'].country['controls'].isocode.setValue(country.isocode);
        this.userService.loadRegions(country.isocode);
    };
    /**
     * @param {?} region
     * @return {?}
     */
    AddressFormComponent.prototype.regionSelected = /**
     * @param {?} region
     * @return {?}
     */
    function (region) {
        this.address['controls'].region['controls'].isocode.setValue(region.isocode);
    };
    /**
     * @return {?}
     */
    AddressFormComponent.prototype.toggleDefaultAddress = /**
     * @return {?}
     */
    function () {
        this.address['controls'].defaultAddress.setValue(this.address.value.defaultAddress);
    };
    /**
     * @return {?}
     */
    AddressFormComponent.prototype.back = /**
     * @return {?}
     */
    function () {
        this.backToAddress.emit();
    };
    /**
     * @return {?}
     */
    AddressFormComponent.prototype.verifyAddress = /**
     * @return {?}
     */
    function () {
        this.checkoutService.verifyAddress(this.address.value);
    };
    /**
     * @param {?} results
     * @return {?}
     */
    AddressFormComponent.prototype.openSuggestedAddress = /**
     * @param {?} results
     * @return {?}
     */
    function (results) {
        var _this = this;
        if (!this.suggestedAddressModalRef) {
            this.suggestedAddressModalRef = this.modalService.open(SuggestedAddressDialogComponent, { centered: true, size: 'lg' });
            this.suggestedAddressModalRef.componentInstance.enteredAddress = this.address.value;
            this.suggestedAddressModalRef.componentInstance.suggestedAddresses =
                results.suggestedAddresses;
            this.suggestedAddressModalRef.result
                .then(function (address) {
                _this.checkoutService.clearAddressVerificationResults();
                if (address) {
                    address = Object.assign({
                        titleCode: _this.address.value.titleCode,
                        phone: _this.address.value.phone,
                        selected: true,
                    }, address);
                    _this.submitAddress.emit(address);
                }
                _this.suggestedAddressModalRef = null;
            })
                .catch(function () {
                // this  callback is called when modal is closed with Esc key or clicking backdrop
                _this.checkoutService.clearAddressVerificationResults();
                /** @type {?} */
                var address = Object.assign({
                    selected: true,
                }, _this.address.value);
                _this.submitAddress.emit(address);
                _this.suggestedAddressModalRef = null;
            });
        }
    };
    /**
     * @return {?}
     */
    AddressFormComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.checkoutService.clearAddressVerificationResults();
        if (this.addressVerifySub) {
            this.addressVerifySub.unsubscribe();
        }
    };
    AddressFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-address-form',
                    template: "<div [formGroup]=\"address\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <div class=\"form-group\" formGroupName=\"country\">\n        <ng-container *ngIf=\"(countries$ | async) as countries\">\n          <div *ngIf=\"countries.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'addressForm.country' | cxTranslate\n              }}</span>\n              <ng-select\n                class=\"country-select\"\n                formControlName=\"isocode\"\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"countries\"\n                bindLabel=\"name\"\n                bindValue=\"isocode\"\n                placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n                (change)=\"countrySelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"form-group\" *ngIf=\"showTitleCode\">\n        <ng-container *ngIf=\"(titles$ | async) as titles\">\n          <div *ngIf=\"titles.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'addressForm.title' | cxTranslate\n              }}</span>\n              <ng-select\n                formControlName=\"titleCode\"\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"titles\"\n                bindLabel=\"name\"\n                bindValue=\"code\"\n                (change)=\"titleSelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.firstName.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            required\n            placeholder=\"{{\n              'addressForm.firstName.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"firstName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.lastName.label' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            placeholder=\"{{ 'addressForm.lastName.placeholder' | cxTranslate }}\"\n            formControlName=\"lastName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.address1' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            placeholder=\"{{ 'addressForm.streetAddress' | cxTranslate }}\"\n            formControlName=\"line1\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'addressForm.address2' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"{{ 'addressForm.aptSuite' | cxTranslate }}\"\n            formControlName=\"line2\"\n          />\n        </label>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content required\">{{\n              'addressForm.city.label' | cxTranslate\n            }}</span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              required\n              placeholder=\"{{ 'addressForm.city.placeholder' | cxTranslate }}\"\n              formControlName=\"town\"\n            />\n          </label>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <ng-container\n            *ngIf=\"(regions$ | async) as regions\"\n            formGroupName=\"region\"\n          >\n            <div *ngIf=\"regions.length !== 0\">\n              <label aria-required=\"true\">\n                <span class=\"label-content required\">{{\n                  'addressForm.state' | cxTranslate\n                }}</span>\n                <ng-container *ngIf=\"regions[0].name\">\n                  <ng-select\n                    class=\"region-select\"\n                    formControlName=\"isocode\"\n                    [searchable]=\"false\"\n                    [clearable]=\"false\"\n                    [items]=\"regions\"\n                    bindLabel=\"name\"\n                    bindValue=\"isocode\"\n                    placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n                    (change)=\"regionSelected($event)\"\n                  >\n                  </ng-select>\n                </ng-container>\n                <ng-container *ngIf=\"!regions[0].name\">\n                  <ng-select\n                    class=\"region-select\"\n                    [searchable]=\"false\"\n                    [clearable]=\"false\"\n                    [items]=\"regions\"\n                    bindLabel=\"isocode\"\n                    bindValue=\"region\"\n                    placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n                    (change)=\"regionSelected($event)\"\n                  >\n                  </ng-select>\n                </ng-container>\n              </label>\n            </div>\n          </ng-container>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content required\">{{\n              'addressForm.zipCode.label' | cxTranslate\n            }}</span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              required\n              placeholder=\"{{\n                'addressForm.zipCode.placeholder' | cxTranslate\n              }}\"\n              formControlName=\"postalCode\"\n            />\n          </label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'addressForm.phoneNumber.label' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"{{\n              'addressForm.phoneNumber.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"phone\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\" *ngIf=\"setAsDefaultField !== false\">\n        <div class=\"form-check\">\n          <label>\n            <input\n              type=\"checkbox\"\n              class=\"form-check-input\"\n              formControlName=\"defaultAddress\"\n              (change)=\"toggleDefaultAddress()\"\n            />\n            <span class=\"form-check-label\">{{\n              'addressForm.setAsDefault' | cxTranslate\n            }}</span>\n          </label>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"cx-checkout-btns row\">\n    <div class=\"col-md-12 col-lg-6\" *ngIf=\"showCancelBtn\">\n      <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n        {{ cancelBtnLabel || ('addressForm.chooseAddress' | cxTranslate) }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"address.invalid\"\n        (click)=\"verifyAddress()\"\n      >\n        {{ actionBtnLabel || ('common.continue' | cxTranslate) }}\n      </button>\n    </div>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    AddressFormComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: CheckoutService },
        { type: UserService },
        { type: GlobalMessageService },
        { type: ModalService }
    ]; };
    AddressFormComponent.propDecorators = {
        addressData: [{ type: Input }],
        actionBtnLabel: [{ type: Input }],
        cancelBtnLabel: [{ type: Input }],
        setAsDefaultField: [{ type: Input }],
        showTitleCode: [{ type: Input }],
        showCancelBtn: [{ type: Input }],
        submitAddress: [{ type: Output }],
        backToAddress: [{ type: Output }]
    };
    return AddressFormComponent;
}());
export { AddressFormComponent };
if (false) {
    /** @type {?} */
    AddressFormComponent.prototype.countries$;
    /** @type {?} */
    AddressFormComponent.prototype.titles$;
    /** @type {?} */
    AddressFormComponent.prototype.regions$;
    /** @type {?} */
    AddressFormComponent.prototype.addressData;
    /** @type {?} */
    AddressFormComponent.prototype.actionBtnLabel;
    /** @type {?} */
    AddressFormComponent.prototype.cancelBtnLabel;
    /** @type {?} */
    AddressFormComponent.prototype.setAsDefaultField;
    /** @type {?} */
    AddressFormComponent.prototype.showTitleCode;
    /** @type {?} */
    AddressFormComponent.prototype.showCancelBtn;
    /** @type {?} */
    AddressFormComponent.prototype.submitAddress;
    /** @type {?} */
    AddressFormComponent.prototype.backToAddress;
    /** @type {?} */
    AddressFormComponent.prototype.addressVerifySub;
    /** @type {?} */
    AddressFormComponent.prototype.suggestedAddressModalRef;
    /** @type {?} */
    AddressFormComponent.prototype.address;
    /**
     * @type {?}
     * @private
     */
    AddressFormComponent.prototype.fb;
    /**
     * @type {?}
     * @protected
     */
    AddressFormComponent.prototype.checkoutService;
    /**
     * @type {?}
     * @protected
     */
    AddressFormComponent.prototype.userService;
    /**
     * @type {?}
     * @protected
     */
    AddressFormComponent.prototype.globalMessageService;
    /**
     * @type {?}
     * @private
     */
    AddressFormComponent.prototype.modalService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jaGVja291dC9jb21wb25lbnRzL3NoaXBwaW5nLWFkZHJlc3MvYWRkcmVzcy1mb3JtL2FkZHJlc3MtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXBFLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUMsT0FBTyxFQUdMLGVBQWUsRUFFZixvQkFBb0IsRUFDcEIsaUJBQWlCLEVBR2pCLFdBQVcsR0FDWixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQ3BILE9BQU8sRUFFTCxZQUFZLEdBQ2IsTUFBTSw4Q0FBOEMsQ0FBQztBQUV0RDtJQXVERSw4QkFDVSxFQUFlLEVBQ2IsZUFBZ0MsRUFDaEMsV0FBd0IsRUFDeEIsb0JBQTBDLEVBQzVDLFlBQTBCO1FBSjFCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDYixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUM1QyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQWxDcEMsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFHckIsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBR3hDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUt4QyxZQUFPLEdBQWMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDakMsY0FBYyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNmLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3BDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ25DLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ2hDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNYLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQy9CLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnQkFDcEIsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7YUFDckMsQ0FBQztZQUNGLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnQkFDckIsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7YUFDckMsQ0FBQztZQUNGLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3JDLEtBQUssRUFBRSxFQUFFO1NBQ1YsQ0FBQyxDQUFDO0lBUUEsQ0FBQzs7OztJQUVKLHVDQUFROzs7SUFBUjtRQUFBLGlCQTZFQztRQTVFQyxxQkFBcUI7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixFQUFFLENBQUMsSUFBSSxDQUM1RCxHQUFHLENBQUMsVUFBQSxTQUFTO1lBQ1gsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3ZDLEtBQUksQ0FBQyxXQUFXLENBQUMscUJBQXFCLEVBQUUsQ0FBQzthQUMxQztRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7UUFFRixrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FDOUMsR0FBRyxDQUFDLFVBQUEsTUFBTTtZQUNSLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUNwQyxLQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQy9CO1FBQ0gsQ0FBQyxDQUFDLEVBQ0YsR0FBRyxDQUFDLFVBQUEsTUFBTTs7Z0JBQ0YsU0FBUyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO1lBQzdDLHlCQUFRLFNBQVMsR0FBSyxNQUFNLEVBQUU7UUFDaEMsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUVGLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUNoRCxHQUFHLENBQUMsVUFBQSxPQUFPOztnQkFDSCxhQUFhLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7WUFFeEQsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3JDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7b0JBQ2xCLGNBQWMsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEtBQUs7Z0JBQ2hFLElBQUksY0FBYyxFQUFFO29CQUNsQixLQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztpQkFDOUM7YUFDRjtpQkFBTTtnQkFDTCxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDeEI7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO1FBRUYsK0JBQStCO1FBQy9CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZUFBZTthQUN6Qyw2QkFBNkIsRUFBRTthQUMvQixTQUFTLENBQUMsVUFBQyxPQUEwQjtZQUNwQyxJQUFJLE9BQU8sS0FBSyxNQUFNLEVBQUU7Z0JBQ3RCLEtBQUksQ0FBQyxlQUFlLENBQUMsK0JBQStCLEVBQUUsQ0FBQzthQUN4RDtpQkFBTSxJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO2dCQUN4QyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzdDO2lCQUFNLElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUU7Z0JBQ3hDLDBHQUEwRztnQkFDMUcsSUFDRSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsT0FBTyxLQUFLLFdBQVcsRUFBN0IsQ0FBNkIsQ0FBQyxFQUNsRTtvQkFDQSxLQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMzQixFQUFFLEdBQUcsRUFBRSwyQkFBMkIsRUFBRSxFQUNwQyxpQkFBaUIsQ0FBQyxjQUFjLENBQ2pDLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsS0FBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FDM0IsRUFBRSxHQUFHLEVBQUUsNEJBQTRCLEVBQUUsRUFDckMsaUJBQWlCLENBQUMsY0FBYyxDQUNqQyxDQUFDO2lCQUNIO2dCQUNELEtBQUksQ0FBQyxlQUFlLENBQUMsK0JBQStCLEVBQUUsQ0FBQzthQUN4RDtpQkFBTSxJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO2dCQUN4QyxLQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDcEM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVMLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFMUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQy9DLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM5QztTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFRCw0Q0FBYTs7OztJQUFiLFVBQWMsS0FBWTtRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUM7Ozs7O0lBRUQsOENBQWU7Ozs7SUFBZixVQUFnQixPQUFnQjtRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUMzRCxPQUFPLENBQUMsT0FBTyxDQUNoQixDQUFDO1FBQ0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7O0lBRUQsNkNBQWM7Ozs7SUFBZCxVQUFlLE1BQWM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FDMUQsTUFBTSxDQUFDLE9BQU8sQ0FDZixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELG1EQUFvQjs7O0lBQXBCO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQ2xDLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsbUNBQUk7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsNENBQWE7OztJQUFiO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7OztJQUVELG1EQUFvQjs7OztJQUFwQixVQUFxQixPQUEwQjtRQUEvQyxpQkFzQ0M7UUFyQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRTtZQUNsQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQ3BELCtCQUErQixFQUMvQixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUMvQixDQUFDO1lBQ0YsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGlCQUFpQixDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNwRixJQUFJLENBQUMsd0JBQXdCLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCO2dCQUNoRSxPQUFPLENBQUMsa0JBQWtCLENBQUM7WUFDN0IsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU07aUJBQ2pDLElBQUksQ0FBQyxVQUFBLE9BQU87Z0JBQ1gsS0FBSSxDQUFDLGVBQWUsQ0FBQywrQkFBK0IsRUFBRSxDQUFDO2dCQUN2RCxJQUFJLE9BQU8sRUFBRTtvQkFDWCxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FDckI7d0JBQ0UsU0FBUyxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVM7d0JBQ3ZDLEtBQUssRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLO3dCQUMvQixRQUFRLEVBQUUsSUFBSTtxQkFDZixFQUNELE9BQU8sQ0FDUixDQUFDO29CQUNGLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNsQztnQkFDRCxLQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDO1lBQ3ZDLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUM7Z0JBQ0wsa0ZBQWtGO2dCQUNsRixLQUFJLENBQUMsZUFBZSxDQUFDLCtCQUErQixFQUFFLENBQUM7O29CQUNqRCxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FDM0I7b0JBQ0UsUUFBUSxFQUFFLElBQUk7aUJBQ2YsRUFDRCxLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FDbkI7Z0JBQ0QsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2pDLEtBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUM7WUFDdkMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNILENBQUM7Ozs7SUFFRCwwQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLCtCQUErQixFQUFFLENBQUM7UUFFdkQsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7Z0JBM05GLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQix5dFBBQTRDO29CQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBekJRLFdBQVc7Z0JBT2xCLGVBQWU7Z0JBTWYsV0FBVztnQkFKWCxvQkFBb0I7Z0JBU3BCLFlBQVk7Ozs4QkFhWCxLQUFLO2lDQUdMLEtBQUs7aUNBR0wsS0FBSztvQ0FHTCxLQUFLO2dDQUdMLEtBQUs7Z0NBR0wsS0FBSztnQ0FHTCxNQUFNO2dDQUdOLE1BQU07O0lBNkxULDJCQUFDO0NBQUEsQUE1TkQsSUE0TkM7U0F2Tlksb0JBQW9COzs7SUFDL0IsMENBQWtDOztJQUNsQyx1Q0FBNkI7O0lBQzdCLHdDQUErQjs7SUFFL0IsMkNBQ3FCOztJQUVyQiw4Q0FDdUI7O0lBRXZCLDhDQUN1Qjs7SUFFdkIsaURBQzJCOztJQUUzQiw2Q0FDdUI7O0lBRXZCLDZDQUNxQjs7SUFFckIsNkNBQ3dDOztJQUV4Qyw2Q0FDd0M7O0lBRXhDLGdEQUErQjs7SUFDL0Isd0RBQW1DOztJQUVuQyx1Q0FnQkc7Ozs7O0lBR0Qsa0NBQXVCOzs7OztJQUN2QiwrQ0FBMEM7Ozs7O0lBQzFDLDJDQUFrQzs7Ozs7SUFDbEMsb0RBQW9EOzs7OztJQUNwRCw0Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBBZGRyZXNzLFxuICBBZGRyZXNzVmFsaWRhdGlvbixcbiAgQ2hlY2tvdXRTZXJ2aWNlLFxuICBDb3VudHJ5LFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIFJlZ2lvbixcbiAgVGl0bGUsXG4gIFVzZXJTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgU3VnZ2VzdGVkQWRkcmVzc0RpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vc3VnZ2VzdGVkLWFkZHJlc3Nlcy1kaWFsb2cvc3VnZ2VzdGVkLWFkZHJlc3Nlcy1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIE1vZGFsUmVmLFxuICBNb2RhbFNlcnZpY2UsXG59IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYWRkcmVzcy1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZHJlc3MtZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRyZXNzRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY291bnRyaWVzJDogT2JzZXJ2YWJsZTxDb3VudHJ5W10+O1xuICB0aXRsZXMkOiBPYnNlcnZhYmxlPFRpdGxlW10+O1xuICByZWdpb25zJDogT2JzZXJ2YWJsZTxSZWdpb25bXT47XG5cbiAgQElucHV0KClcbiAgYWRkcmVzc0RhdGE6IEFkZHJlc3M7XG5cbiAgQElucHV0KClcbiAgYWN0aW9uQnRuTGFiZWw6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBjYW5jZWxCdG5MYWJlbDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNldEFzRGVmYXVsdEZpZWxkOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHNob3dUaXRsZUNvZGU6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgc2hvd0NhbmNlbEJ0biA9IHRydWU7XG5cbiAgQE91dHB1dCgpXG4gIHN1Ym1pdEFkZHJlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAT3V0cHV0KClcbiAgYmFja1RvQWRkcmVzcyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGFkZHJlc3NWZXJpZnlTdWI6IFN1YnNjcmlwdGlvbjtcbiAgc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmOiBNb2RhbFJlZjtcblxuICBhZGRyZXNzOiBGb3JtR3JvdXAgPSB0aGlzLmZiLmdyb3VwKHtcbiAgICBkZWZhdWx0QWRkcmVzczogW2ZhbHNlXSxcbiAgICB0aXRsZUNvZGU6IFsnJ10sXG4gICAgZmlyc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIGxhc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIGxpbmUxOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIGxpbmUyOiBbJyddLFxuICAgIHRvd246IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgcmVnaW9uOiB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGlzb2NvZGU6IFtudWxsLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9KSxcbiAgICBjb3VudHJ5OiB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGlzb2NvZGU6IFtudWxsLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9KSxcbiAgICBwb3N0YWxDb2RlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIHBob25lOiAnJyxcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U2VydmljZTogQ2hlY2tvdXRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBGZXRjaGluZyBjb3VudHJpZXNcbiAgICB0aGlzLmNvdW50cmllcyQgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldERlbGl2ZXJ5Q291bnRyaWVzKCkucGlwZShcbiAgICAgIHRhcChjb3VudHJpZXMgPT4ge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMoY291bnRyaWVzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvYWREZWxpdmVyeUNvdW50cmllcygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBGZXRjaGluZyB0aXRsZXNcbiAgICB0aGlzLnRpdGxlcyQgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldFRpdGxlcygpLnBpcGUoXG4gICAgICB0YXAodGl0bGVzID0+IHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRpdGxlcykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2FkVGl0bGVzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKHRpdGxlcyA9PiB7XG4gICAgICAgIGNvbnN0IG5vbmVUaXRsZSA9IHsgY29kZTogJycsIG5hbWU6ICdUaXRsZScgfTtcbiAgICAgICAgcmV0dXJuIFtub25lVGl0bGUsIC4uLnRpdGxlc107XG4gICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBGZXRjaGluZyByZWdpb25zXG4gICAgdGhpcy5yZWdpb25zJCA9IHRoaXMudXNlclNlcnZpY2UuZ2V0UmVnaW9ucygpLnBpcGUoXG4gICAgICB0YXAocmVnaW9ucyA9PiB7XG4gICAgICAgIGNvbnN0IHJlZ2lvbkNvbnRyb2wgPSB0aGlzLmFkZHJlc3MuZ2V0KCdyZWdpb24uaXNvY29kZScpO1xuXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhyZWdpb25zKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZWdpb25Db250cm9sLmRpc2FibGUoKTtcbiAgICAgICAgICBjb25zdCBjb3VudHJ5SXNvQ29kZSA9IHRoaXMuYWRkcmVzcy5nZXQoJ2NvdW50cnkuaXNvY29kZScpLnZhbHVlO1xuICAgICAgICAgIGlmIChjb3VudHJ5SXNvQ29kZSkge1xuICAgICAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2FkUmVnaW9ucyhjb3VudHJ5SXNvQ29kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlZ2lvbkNvbnRyb2wuZW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIHZlcmlmeSB0aGUgbmV3IGFkZGVkIGFkZHJlc3NcbiAgICB0aGlzLmFkZHJlc3NWZXJpZnlTdWIgPSB0aGlzLmNoZWNrb3V0U2VydmljZVxuICAgICAgLmdldEFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzKClcbiAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdHM6IEFkZHJlc3NWYWxpZGF0aW9uKSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHRzID09PSAnRkFJTCcpIHtcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5jbGVhckFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzKCk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0cy5kZWNpc2lvbiA9PT0gJ0FDQ0VQVCcpIHtcbiAgICAgICAgICB0aGlzLnN1Ym1pdEFkZHJlc3MuZW1pdCh0aGlzLmFkZHJlc3MudmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdHMuZGVjaXNpb24gPT09ICdSRUpFQ1QnKSB7XG4gICAgICAgICAgLy8gVE9ETzogV29ya2Fyb3VuZDogYWxsb3cgc2VydmVyIGZvciBkZWNpZGUgaXMgdGl0bGVDb2RlIG1hbmRhdG9yeSAoaWYgeWVzLCBwcm92aWRlIHBlcnNvbmFsaXplZCBtZXNzYWdlKVxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHJlc3VsdHMuZXJyb3JzLmVycm9ycy5zb21lKGVycm9yID0+IGVycm9yLnN1YmplY3QgPT09ICd0aXRsZUNvZGUnKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgICAgICAgIHsga2V5OiAnYWRkcmVzc0Zvcm0udGl0bGVSZXF1aXJlZCcgfSxcbiAgICAgICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICAgICAgICB7IGtleTogJ2FkZHJlc3NGb3JtLmludmFsaWRBZGRyZXNzJyB9LFxuICAgICAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jaGVja291dFNlcnZpY2UuY2xlYXJBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cygpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdHMuZGVjaXNpb24gPT09ICdSRVZJRVcnKSB7XG4gICAgICAgICAgdGhpcy5vcGVuU3VnZ2VzdGVkQWRkcmVzcyhyZXN1bHRzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICBpZiAodGhpcy5hZGRyZXNzRGF0YSkge1xuICAgICAgdGhpcy5hZGRyZXNzLnBhdGNoVmFsdWUodGhpcy5hZGRyZXNzRGF0YSk7XG5cbiAgICAgIHRoaXMuY291bnRyeVNlbGVjdGVkKHRoaXMuYWRkcmVzc0RhdGEuY291bnRyeSk7XG4gICAgICBpZiAodGhpcy5hZGRyZXNzRGF0YS5yZWdpb24pIHtcbiAgICAgICAgdGhpcy5yZWdpb25TZWxlY3RlZCh0aGlzLmFkZHJlc3NEYXRhLnJlZ2lvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdGl0bGVTZWxlY3RlZCh0aXRsZTogVGl0bGUpOiB2b2lkIHtcbiAgICB0aGlzLmFkZHJlc3NbJ2NvbnRyb2xzJ10udGl0bGVDb2RlLnNldFZhbHVlKHRpdGxlLmNvZGUpO1xuICB9XG5cbiAgY291bnRyeVNlbGVjdGVkKGNvdW50cnk6IENvdW50cnkpOiB2b2lkIHtcbiAgICB0aGlzLmFkZHJlc3NbJ2NvbnRyb2xzJ10uY291bnRyeVsnY29udHJvbHMnXS5pc29jb2RlLnNldFZhbHVlKFxuICAgICAgY291bnRyeS5pc29jb2RlXG4gICAgKTtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvYWRSZWdpb25zKGNvdW50cnkuaXNvY29kZSk7XG4gIH1cblxuICByZWdpb25TZWxlY3RlZChyZWdpb246IFJlZ2lvbik6IHZvaWQge1xuICAgIHRoaXMuYWRkcmVzc1snY29udHJvbHMnXS5yZWdpb25bJ2NvbnRyb2xzJ10uaXNvY29kZS5zZXRWYWx1ZShcbiAgICAgIHJlZ2lvbi5pc29jb2RlXG4gICAgKTtcbiAgfVxuXG4gIHRvZ2dsZURlZmF1bHRBZGRyZXNzKCk6IHZvaWQge1xuICAgIHRoaXMuYWRkcmVzc1snY29udHJvbHMnXS5kZWZhdWx0QWRkcmVzcy5zZXRWYWx1ZShcbiAgICAgIHRoaXMuYWRkcmVzcy52YWx1ZS5kZWZhdWx0QWRkcmVzc1xuICAgICk7XG4gIH1cblxuICBiYWNrKCk6IHZvaWQge1xuICAgIHRoaXMuYmFja1RvQWRkcmVzcy5lbWl0KCk7XG4gIH1cblxuICB2ZXJpZnlBZGRyZXNzKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLnZlcmlmeUFkZHJlc3ModGhpcy5hZGRyZXNzLnZhbHVlKTtcbiAgfVxuXG4gIG9wZW5TdWdnZXN0ZWRBZGRyZXNzKHJlc3VsdHM6IEFkZHJlc3NWYWxpZGF0aW9uKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnN1Z2dlc3RlZEFkZHJlc3NNb2RhbFJlZikge1xuICAgICAgdGhpcy5zdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWYgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKFxuICAgICAgICBTdWdnZXN0ZWRBZGRyZXNzRGlhbG9nQ29tcG9uZW50LFxuICAgICAgICB7IGNlbnRlcmVkOiB0cnVlLCBzaXplOiAnbGcnIH1cbiAgICAgICk7XG4gICAgICB0aGlzLnN1Z2dlc3RlZEFkZHJlc3NNb2RhbFJlZi5jb21wb25lbnRJbnN0YW5jZS5lbnRlcmVkQWRkcmVzcyA9IHRoaXMuYWRkcmVzcy52YWx1ZTtcbiAgICAgIHRoaXMuc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmLmNvbXBvbmVudEluc3RhbmNlLnN1Z2dlc3RlZEFkZHJlc3NlcyA9XG4gICAgICAgIHJlc3VsdHMuc3VnZ2VzdGVkQWRkcmVzc2VzO1xuICAgICAgdGhpcy5zdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWYucmVzdWx0XG4gICAgICAgIC50aGVuKGFkZHJlc3MgPT4ge1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNsZWFyQWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKTtcbiAgICAgICAgICBpZiAoYWRkcmVzcykge1xuICAgICAgICAgICAgYWRkcmVzcyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZUNvZGU6IHRoaXMuYWRkcmVzcy52YWx1ZS50aXRsZUNvZGUsXG4gICAgICAgICAgICAgICAgcGhvbmU6IHRoaXMuYWRkcmVzcy52YWx1ZS5waG9uZSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYWRkcmVzc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuc3VibWl0QWRkcmVzcy5lbWl0KGFkZHJlc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnN1Z2dlc3RlZEFkZHJlc3NNb2RhbFJlZiA9IG51bGw7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgLy8gdGhpcyAgY2FsbGJhY2sgaXMgY2FsbGVkIHdoZW4gbW9kYWwgaXMgY2xvc2VkIHdpdGggRXNjIGtleSBvciBjbGlja2luZyBiYWNrZHJvcFxuICAgICAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNsZWFyQWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKTtcbiAgICAgICAgICBjb25zdCBhZGRyZXNzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy5hZGRyZXNzLnZhbHVlXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnN1Ym1pdEFkZHJlc3MuZW1pdChhZGRyZXNzKTtcbiAgICAgICAgICB0aGlzLnN1Z2dlc3RlZEFkZHJlc3NNb2RhbFJlZiA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNsZWFyQWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKTtcblxuICAgIGlmICh0aGlzLmFkZHJlc3NWZXJpZnlTdWIpIHtcbiAgICAgIHRoaXMuYWRkcmVzc1ZlcmlmeVN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19