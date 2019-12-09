/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CheckoutDeliveryService, GlobalMessageService, GlobalMessageType, UserAddressService, UserService, } from '@spartacus/core';
import { BehaviorSubject } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { ModalService, } from '../../../../../shared/components/modal/index';
import { SuggestedAddressDialogComponent } from './suggested-addresses-dialog/suggested-addresses-dialog.component';
import { sortTitles } from '../../../../../shared/utils/forms/title-utils';
var AddressFormComponent = /** @class */ (function () {
    function AddressFormComponent(fb, checkoutDeliveryService, userService, userAddressService, globalMessageService, modalService) {
        this.fb = fb;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.userService = userService;
        this.userAddressService = userAddressService;
        this.globalMessageService = globalMessageService;
        this.modalService = modalService;
        this.selectedCountry$ = new BehaviorSubject('');
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
        this.countries$ = this.userAddressService.getDeliveryCountries().pipe(tap((/**
         * @param {?} countries
         * @return {?}
         */
        function (countries) {
            if (Object.keys(countries).length === 0) {
                _this.userAddressService.loadDeliveryCountries();
            }
        })));
        // Fetching titles
        this.titles$ = this.userService.getTitles().pipe(tap((/**
         * @param {?} titles
         * @return {?}
         */
        function (titles) {
            if (Object.keys(titles).length === 0) {
                _this.userService.loadTitles();
            }
        })), map((/**
         * @param {?} titles
         * @return {?}
         */
        function (titles) {
            titles.sort(sortTitles);
            /** @type {?} */
            var noneTitle = { code: '', name: 'Title' };
            return tslib_1.__spread([noneTitle], titles);
        })));
        // Fetching regions
        this.regions$ = this.selectedCountry$.pipe(switchMap((/**
         * @param {?} country
         * @return {?}
         */
        function (country) { return _this.userAddressService.getRegions(country); })), tap((/**
         * @param {?} regions
         * @return {?}
         */
        function (regions) {
            /** @type {?} */
            var regionControl = _this.address.get('region.isocode');
            if (regions && regions.length > 0) {
                regionControl.enable();
            }
            else {
                regionControl.disable();
            }
        })));
        // verify the new added address
        this.addressVerifySub = this.checkoutDeliveryService
            .getAddressVerificationResults()
            .subscribe((/**
         * @param {?} results
         * @return {?}
         */
        function (results) {
            if (results === 'FAIL') {
                _this.checkoutDeliveryService.clearAddressVerificationResults();
            }
            else if (results.decision === 'ACCEPT') {
                _this.submitAddress.emit(_this.address.value);
            }
            else if (results.decision === 'REJECT') {
                // TODO: Workaround: allow server for decide is titleCode mandatory (if yes, provide personalized message)
                if (results.errors.errors.some((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) { return error.subject === 'titleCode'; }))) {
                    _this.globalMessageService.add({ key: 'addressForm.titleRequired' }, GlobalMessageType.MSG_TYPE_ERROR);
                }
                else {
                    _this.globalMessageService.add({ key: 'addressForm.invalidAddress' }, GlobalMessageType.MSG_TYPE_ERROR);
                }
                _this.checkoutDeliveryService.clearAddressVerificationResults();
            }
            else if (results.decision === 'REVIEW') {
                _this.openSuggestedAddress(results);
            }
        }));
        if (this.addressData && Object.keys(this.addressData).length !== 0) {
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
        this.selectedCountry$.next(country.isocode);
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
        var _this = this;
        if (this.address.controls['region'].value.isocode) {
            this.regionsSub = this.regions$.pipe(take(1)).subscribe((/**
             * @param {?} regions
             * @return {?}
             */
            function (regions) {
                /** @type {?} */
                var obj = regions.find((/**
                 * @param {?} region
                 * @return {?}
                 */
                function (region) {
                    return region.isocode === _this.address.controls['region'].value.isocode;
                }));
                Object.assign(_this.address.value.region, {
                    isocodeShort: obj.isocodeShort,
                });
            }));
        }
        if (this.address.dirty) {
            this.checkoutDeliveryService.verifyAddress(this.address.value);
        }
        else {
            // address form value not changed
            // ignore duplicate address
            this.submitAddress.emit(undefined);
        }
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
                .then((/**
             * @param {?} address
             * @return {?}
             */
            function (address) {
                _this.checkoutDeliveryService.clearAddressVerificationResults();
                if (address) {
                    address = Object.assign({
                        titleCode: _this.address.value.titleCode,
                        phone: _this.address.value.phone,
                        selected: true,
                    }, address);
                    _this.submitAddress.emit(address);
                }
                _this.suggestedAddressModalRef = null;
            }))
                .catch((/**
             * @return {?}
             */
            function () {
                // this  callback is called when modal is closed with Esc key or clicking backdrop
                _this.checkoutDeliveryService.clearAddressVerificationResults();
                /** @type {?} */
                var address = Object.assign({
                    selected: true,
                }, _this.address.value);
                _this.submitAddress.emit(address);
                _this.suggestedAddressModalRef = null;
            }));
        }
    };
    /**
     * @return {?}
     */
    AddressFormComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.checkoutDeliveryService.clearAddressVerificationResults();
        if (this.addressVerifySub) {
            this.addressVerifySub.unsubscribe();
        }
        if (this.regionsSub) {
            this.regionsSub.unsubscribe();
        }
    };
    AddressFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-address-form',
                    template: "<div [formGroup]=\"address\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <div class=\"form-group\" formGroupName=\"country\">\n        <ng-container *ngIf=\"countries$ | async as countries\">\n          <div *ngIf=\"countries.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'addressForm.country' | cxTranslate\n              }}</span>\n              <ng-select\n                class=\"country-select\"\n                formControlName=\"isocode\"\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [items]=\"countries\"\n                bindLabel=\"name\"\n                bindValue=\"isocode\"\n                placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n                (change)=\"countrySelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"form-group\" *ngIf=\"showTitleCode\">\n        <ng-container *ngIf=\"titles$ | async as titles\">\n          <div *ngIf=\"titles.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'addressForm.title' | cxTranslate\n              }}</span>\n              <ng-select\n                formControlName=\"titleCode\"\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"titles\"\n                bindLabel=\"name\"\n                bindValue=\"code\"\n                (change)=\"titleSelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.firstName.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            required\n            placeholder=\"{{\n              'addressForm.firstName.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"firstName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.lastName.label' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            placeholder=\"{{ 'addressForm.lastName.placeholder' | cxTranslate }}\"\n            formControlName=\"lastName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.address1' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            placeholder=\"{{ 'addressForm.streetAddress' | cxTranslate }}\"\n            formControlName=\"line1\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'addressForm.address2' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"{{ 'addressForm.aptSuite' | cxTranslate }}\"\n            formControlName=\"line2\"\n          />\n        </label>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content required\">{{\n              'addressForm.city.label' | cxTranslate\n            }}</span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              required\n              placeholder=\"{{ 'addressForm.city.placeholder' | cxTranslate }}\"\n              formControlName=\"town\"\n            />\n          </label>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <ng-container\n            *ngIf=\"regions$ | async as regions\"\n            formGroupName=\"region\"\n          >\n            <div *ngIf=\"regions.length !== 0\">\n              <label aria-required=\"true\">\n                <span class=\"label-content required\">{{\n                  'addressForm.state' | cxTranslate\n                }}</span>\n                <ng-select\n                  class=\"region-select\"\n                  formControlName=\"isocode\"\n                  [searchable]=\"true\"\n                  [clearable]=\"false\"\n                  [items]=\"regions\"\n                  bindLabel=\"{{ regions[0].name ? 'name' : 'isocode' }}\"\n                  bindValue=\"{{ regions[0].name ? 'isocode' : 'region' }}\"\n                  placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n                  (change)=\"regionSelected($event)\"\n                >\n                </ng-select>\n              </label>\n            </div>\n          </ng-container>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content required\">{{\n              'addressForm.zipCode.label' | cxTranslate\n            }}</span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              required\n              placeholder=\"{{\n                'addressForm.zipCode.placeholder' | cxTranslate\n              }}\"\n              formControlName=\"postalCode\"\n            />\n          </label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'addressForm.phoneNumber.label' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"{{\n              'addressForm.phoneNumber.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"phone\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\" *ngIf=\"setAsDefaultField\">\n        <div class=\"form-check\">\n          <label>\n            <input\n              type=\"checkbox\"\n              class=\"form-check-input\"\n              formControlName=\"defaultAddress\"\n              (change)=\"toggleDefaultAddress()\"\n            />\n            <span class=\"form-check-label\">{{\n              'addressForm.setAsDefault' | cxTranslate\n            }}</span>\n          </label>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"cx-checkout-btns row\">\n    <div class=\"col-md-12 col-lg-6\" *ngIf=\"showCancelBtn\">\n      <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n        {{ cancelBtnLabel || ('addressForm.chooseAddress' | cxTranslate) }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"address.invalid\"\n        (click)=\"verifyAddress()\"\n      >\n        {{ actionBtnLabel || ('common.continue' | cxTranslate) }}\n      </button>\n    </div>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    AddressFormComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: CheckoutDeliveryService },
        { type: UserService },
        { type: UserAddressService },
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
    AddressFormComponent.prototype.selectedCountry$;
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
    AddressFormComponent.prototype.regionsSub;
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
    AddressFormComponent.prototype.checkoutDeliveryService;
    /**
     * @type {?}
     * @protected
     */
    AddressFormComponent.prototype.userService;
    /**
     * @type {?}
     * @protected
     */
    AddressFormComponent.prototype.userAddressService;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NoZWNrb3V0L2NvbXBvbmVudHMvc2hpcHBpbmctYWRkcmVzcy9hZGRyZXNzLWZvcm0vYWRkcmVzcy1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUdMLHVCQUF1QixFQUV2QixvQkFBb0IsRUFDcEIsaUJBQWlCLEVBR2pCLGtCQUFrQixFQUNsQixXQUFXLEdBQ1osTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsZUFBZSxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUNqRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0QsT0FBTyxFQUVMLFlBQVksR0FDYixNQUFNLDhDQUE4QyxDQUFDO0FBQ3RELE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUUzRTtJQXlERSw4QkFDVSxFQUFlLEVBQ2IsdUJBQWdELEVBQ2hELFdBQXdCLEVBQ3hCLGtCQUFzQyxFQUN0QyxvQkFBMEMsRUFDNUMsWUFBMEI7UUFMMUIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNiLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFv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O0lBQy9CLDBDQUFrQzs7SUFDbEMsdUNBQTZCOztJQUM3Qix3Q0FBK0I7O0lBQy9CLGdEQUE0RTs7SUFFNUUsMkNBQ3FCOztJQUVyQiw4Q0FDdUI7O0lBRXZCLDhDQUN1Qjs7SUFFdkIsaURBQzJCOztJQUUzQiw2Q0FDdUI7O0lBRXZCLDZDQUNxQjs7SUFFckIsNkNBQ3dDOztJQUV4Qyw2Q0FDd0M7O0lBRXhDLGdEQUErQjs7SUFDL0IsMENBQXlCOztJQUN6Qix3REFBbUM7O0lBRW5DLHVDQWdCRzs7Ozs7SUFHRCxrQ0FBdUI7Ozs7O0lBQ3ZCLHVEQUEwRDs7Ozs7SUFDMUQsMkNBQWtDOzs7OztJQUNsQyxrREFBZ0Q7Ozs7O0lBQ2hELG9EQUFvRDs7Ozs7SUFDcEQsNENBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQWRkcmVzcyxcbiAgQWRkcmVzc1ZhbGlkYXRpb24sXG4gIENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICBDb3VudHJ5LFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIFJlZ2lvbixcbiAgVGl0bGUsXG4gIFVzZXJBZGRyZXNzU2VydmljZSxcbiAgVXNlclNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIHRha2UsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIE1vZGFsUmVmLFxuICBNb2RhbFNlcnZpY2UsXG59IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL2luZGV4JztcbmltcG9ydCB7IFN1Z2dlc3RlZEFkZHJlc3NEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3N1Z2dlc3RlZC1hZGRyZXNzZXMtZGlhbG9nL3N1Z2dlc3RlZC1hZGRyZXNzZXMtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBzb3J0VGl0bGVzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2hhcmVkL3V0aWxzL2Zvcm1zL3RpdGxlLXV0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYWRkcmVzcy1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZHJlc3MtZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRyZXNzRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY291bnRyaWVzJDogT2JzZXJ2YWJsZTxDb3VudHJ5W10+O1xuICB0aXRsZXMkOiBPYnNlcnZhYmxlPFRpdGxlW10+O1xuICByZWdpb25zJDogT2JzZXJ2YWJsZTxSZWdpb25bXT47XG4gIHNlbGVjdGVkQ291bnRyeSQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCcnKTtcblxuICBASW5wdXQoKVxuICBhZGRyZXNzRGF0YTogQWRkcmVzcztcblxuICBASW5wdXQoKVxuICBhY3Rpb25CdG5MYWJlbDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGNhbmNlbEJ0bkxhYmVsOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0QXNEZWZhdWx0RmllbGQ6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgc2hvd1RpdGxlQ29kZTogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBzaG93Q2FuY2VsQnRuID0gdHJ1ZTtcblxuICBAT3V0cHV0KClcbiAgc3VibWl0QWRkcmVzcyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBPdXRwdXQoKVxuICBiYWNrVG9BZGRyZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgYWRkcmVzc1ZlcmlmeVN1YjogU3Vic2NyaXB0aW9uO1xuICByZWdpb25zU3ViOiBTdWJzY3JpcHRpb247XG4gIHN1Z2dlc3RlZEFkZHJlc3NNb2RhbFJlZjogTW9kYWxSZWY7XG5cbiAgYWRkcmVzczogRm9ybUdyb3VwID0gdGhpcy5mYi5ncm91cCh7XG4gICAgZGVmYXVsdEFkZHJlc3M6IFtmYWxzZV0sXG4gICAgdGl0bGVDb2RlOiBbJyddLFxuICAgIGZpcnN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICBsYXN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICBsaW5lMTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICBsaW5lMjogWycnXSxcbiAgICB0b3duOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIHJlZ2lvbjogdGhpcy5mYi5ncm91cCh7XG4gICAgICBpc29jb2RlOiBbbnVsbCwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgfSksXG4gICAgY291bnRyeTogdGhpcy5mYi5ncm91cCh7XG4gICAgICBpc29jb2RlOiBbbnVsbCwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgfSksXG4gICAgcG9zdGFsQ29kZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICBwaG9uZTogJycsXG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByb3RlY3RlZCBjaGVja291dERlbGl2ZXJ5U2VydmljZTogQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBGZXRjaGluZyBjb3VudHJpZXNcbiAgICB0aGlzLmNvdW50cmllcyQgPSB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS5nZXREZWxpdmVyeUNvdW50cmllcygpLnBpcGUoXG4gICAgICB0YXAoY291bnRyaWVzID0+IHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGNvdW50cmllcykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UubG9hZERlbGl2ZXJ5Q291bnRyaWVzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIEZldGNoaW5nIHRpdGxlc1xuICAgIHRoaXMudGl0bGVzJCA9IHRoaXMudXNlclNlcnZpY2UuZ2V0VGl0bGVzKCkucGlwZShcbiAgICAgIHRhcCh0aXRsZXMgPT4ge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModGl0bGVzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvYWRUaXRsZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAodGl0bGVzID0+IHtcbiAgICAgICAgdGl0bGVzLnNvcnQoc29ydFRpdGxlcyk7XG4gICAgICAgIGNvbnN0IG5vbmVUaXRsZSA9IHsgY29kZTogJycsIG5hbWU6ICdUaXRsZScgfTtcbiAgICAgICAgcmV0dXJuIFtub25lVGl0bGUsIC4uLnRpdGxlc107XG4gICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBGZXRjaGluZyByZWdpb25zXG4gICAgdGhpcy5yZWdpb25zJCA9IHRoaXMuc2VsZWN0ZWRDb3VudHJ5JC5waXBlKFxuICAgICAgc3dpdGNoTWFwKGNvdW50cnkgPT4gdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UuZ2V0UmVnaW9ucyhjb3VudHJ5KSksXG4gICAgICB0YXAocmVnaW9ucyA9PiB7XG4gICAgICAgIGNvbnN0IHJlZ2lvbkNvbnRyb2wgPSB0aGlzLmFkZHJlc3MuZ2V0KCdyZWdpb24uaXNvY29kZScpO1xuICAgICAgICBpZiAocmVnaW9ucyAmJiByZWdpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICByZWdpb25Db250cm9sLmVuYWJsZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlZ2lvbkNvbnRyb2wuZGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICAvLyB2ZXJpZnkgdGhlIG5ldyBhZGRlZCBhZGRyZXNzXG4gICAgdGhpcy5hZGRyZXNzVmVyaWZ5U3ViID0gdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZVxuICAgICAgLmdldEFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzKClcbiAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdHM6IEFkZHJlc3NWYWxpZGF0aW9uKSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHRzID09PSAnRkFJTCcpIHtcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLmNsZWFyQWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHRzLmRlY2lzaW9uID09PSAnQUNDRVBUJykge1xuICAgICAgICAgIHRoaXMuc3VibWl0QWRkcmVzcy5lbWl0KHRoaXMuYWRkcmVzcy52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0cy5kZWNpc2lvbiA9PT0gJ1JFSkVDVCcpIHtcbiAgICAgICAgICAvLyBUT0RPOiBXb3JrYXJvdW5kOiBhbGxvdyBzZXJ2ZXIgZm9yIGRlY2lkZSBpcyB0aXRsZUNvZGUgbWFuZGF0b3J5IChpZiB5ZXMsIHByb3ZpZGUgcGVyc29uYWxpemVkIG1lc3NhZ2UpXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgcmVzdWx0cy5lcnJvcnMuZXJyb3JzLnNvbWUoZXJyb3IgPT4gZXJyb3Iuc3ViamVjdCA9PT0gJ3RpdGxlQ29kZScpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICAgICAgeyBrZXk6ICdhZGRyZXNzRm9ybS50aXRsZVJlcXVpcmVkJyB9LFxuICAgICAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgICAgICAgIHsga2V5OiAnYWRkcmVzc0Zvcm0uaW52YWxpZEFkZHJlc3MnIH0sXG4gICAgICAgICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLmNsZWFyQWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHRzLmRlY2lzaW9uID09PSAnUkVWSUVXJykge1xuICAgICAgICAgIHRoaXMub3BlblN1Z2dlc3RlZEFkZHJlc3MocmVzdWx0cyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuYWRkcmVzc0RhdGEgJiYgT2JqZWN0LmtleXModGhpcy5hZGRyZXNzRGF0YSkubGVuZ3RoICE9PSAwKSB7XG4gICAgICB0aGlzLmFkZHJlc3MucGF0Y2hWYWx1ZSh0aGlzLmFkZHJlc3NEYXRhKTtcblxuICAgICAgdGhpcy5jb3VudHJ5U2VsZWN0ZWQodGhpcy5hZGRyZXNzRGF0YS5jb3VudHJ5KTtcbiAgICAgIGlmICh0aGlzLmFkZHJlc3NEYXRhLnJlZ2lvbikge1xuICAgICAgICB0aGlzLnJlZ2lvblNlbGVjdGVkKHRoaXMuYWRkcmVzc0RhdGEucmVnaW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0aXRsZVNlbGVjdGVkKHRpdGxlOiBUaXRsZSk6IHZvaWQge1xuICAgIHRoaXMuYWRkcmVzc1snY29udHJvbHMnXS50aXRsZUNvZGUuc2V0VmFsdWUodGl0bGUuY29kZSk7XG4gIH1cblxuICBjb3VudHJ5U2VsZWN0ZWQoY291bnRyeTogQ291bnRyeSk6IHZvaWQge1xuICAgIHRoaXMuYWRkcmVzc1snY29udHJvbHMnXS5jb3VudHJ5Wydjb250cm9scyddLmlzb2NvZGUuc2V0VmFsdWUoXG4gICAgICBjb3VudHJ5Lmlzb2NvZGVcbiAgICApO1xuICAgIHRoaXMuc2VsZWN0ZWRDb3VudHJ5JC5uZXh0KGNvdW50cnkuaXNvY29kZSk7XG4gIH1cblxuICByZWdpb25TZWxlY3RlZChyZWdpb246IFJlZ2lvbik6IHZvaWQge1xuICAgIHRoaXMuYWRkcmVzc1snY29udHJvbHMnXS5yZWdpb25bJ2NvbnRyb2xzJ10uaXNvY29kZS5zZXRWYWx1ZShcbiAgICAgIHJlZ2lvbi5pc29jb2RlXG4gICAgKTtcbiAgfVxuXG4gIHRvZ2dsZURlZmF1bHRBZGRyZXNzKCk6IHZvaWQge1xuICAgIHRoaXMuYWRkcmVzc1snY29udHJvbHMnXS5kZWZhdWx0QWRkcmVzcy5zZXRWYWx1ZShcbiAgICAgIHRoaXMuYWRkcmVzcy52YWx1ZS5kZWZhdWx0QWRkcmVzc1xuICAgICk7XG4gIH1cblxuICBiYWNrKCk6IHZvaWQge1xuICAgIHRoaXMuYmFja1RvQWRkcmVzcy5lbWl0KCk7XG4gIH1cblxuICB2ZXJpZnlBZGRyZXNzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFkZHJlc3MuY29udHJvbHNbJ3JlZ2lvbiddLnZhbHVlLmlzb2NvZGUpIHtcbiAgICAgIHRoaXMucmVnaW9uc1N1YiA9IHRoaXMucmVnaW9ucyQucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUocmVnaW9ucyA9PiB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHJlZ2lvbnMuZmluZChcbiAgICAgICAgICByZWdpb24gPT5cbiAgICAgICAgICAgIHJlZ2lvbi5pc29jb2RlID09PSB0aGlzLmFkZHJlc3MuY29udHJvbHNbJ3JlZ2lvbiddLnZhbHVlLmlzb2NvZGVcbiAgICAgICAgKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmFkZHJlc3MudmFsdWUucmVnaW9uLCB7XG4gICAgICAgICAgaXNvY29kZVNob3J0OiBvYmouaXNvY29kZVNob3J0LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFkZHJlc3MuZGlydHkpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UudmVyaWZ5QWRkcmVzcyh0aGlzLmFkZHJlc3MudmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBhZGRyZXNzIGZvcm0gdmFsdWUgbm90IGNoYW5nZWRcbiAgICAgIC8vIGlnbm9yZSBkdXBsaWNhdGUgYWRkcmVzc1xuICAgICAgdGhpcy5zdWJtaXRBZGRyZXNzLmVtaXQodW5kZWZpbmVkKTtcbiAgICB9XG4gIH1cblxuICBvcGVuU3VnZ2VzdGVkQWRkcmVzcyhyZXN1bHRzOiBBZGRyZXNzVmFsaWRhdGlvbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5zdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWYpIHtcbiAgICAgIHRoaXMuc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihcbiAgICAgICAgU3VnZ2VzdGVkQWRkcmVzc0RpYWxvZ0NvbXBvbmVudCxcbiAgICAgICAgeyBjZW50ZXJlZDogdHJ1ZSwgc2l6ZTogJ2xnJyB9XG4gICAgICApO1xuICAgICAgdGhpcy5zdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWYuY29tcG9uZW50SW5zdGFuY2UuZW50ZXJlZEFkZHJlc3MgPSB0aGlzLmFkZHJlc3MudmFsdWU7XG4gICAgICB0aGlzLnN1Z2dlc3RlZEFkZHJlc3NNb2RhbFJlZi5jb21wb25lbnRJbnN0YW5jZS5zdWdnZXN0ZWRBZGRyZXNzZXMgPVxuICAgICAgICByZXN1bHRzLnN1Z2dlc3RlZEFkZHJlc3NlcztcbiAgICAgIHRoaXMuc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmLnJlc3VsdFxuICAgICAgICAudGhlbihhZGRyZXNzID0+IHtcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLmNsZWFyQWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKTtcbiAgICAgICAgICBpZiAoYWRkcmVzcykge1xuICAgICAgICAgICAgYWRkcmVzcyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZUNvZGU6IHRoaXMuYWRkcmVzcy52YWx1ZS50aXRsZUNvZGUsXG4gICAgICAgICAgICAgICAgcGhvbmU6IHRoaXMuYWRkcmVzcy52YWx1ZS5waG9uZSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYWRkcmVzc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuc3VibWl0QWRkcmVzcy5lbWl0KGFkZHJlc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnN1Z2dlc3RlZEFkZHJlc3NNb2RhbFJlZiA9IG51bGw7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgLy8gdGhpcyAgY2FsbGJhY2sgaXMgY2FsbGVkIHdoZW4gbW9kYWwgaXMgY2xvc2VkIHdpdGggRXNjIGtleSBvciBjbGlja2luZyBiYWNrZHJvcFxuICAgICAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuY2xlYXJBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cygpO1xuICAgICAgICAgIGNvbnN0IGFkZHJlc3MgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLmFkZHJlc3MudmFsdWVcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuc3VibWl0QWRkcmVzcy5lbWl0KGFkZHJlc3MpO1xuICAgICAgICAgIHRoaXMuc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5jbGVhckFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzKCk7XG5cbiAgICBpZiAodGhpcy5hZGRyZXNzVmVyaWZ5U3ViKSB7XG4gICAgICB0aGlzLmFkZHJlc3NWZXJpZnlTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yZWdpb25zU3ViKSB7XG4gICAgICB0aGlzLnJlZ2lvbnNTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==