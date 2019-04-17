/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map, tap } from 'rxjs/operators';
import { CheckoutService, GlobalMessageService, GlobalMessageType, UserService, } from '@spartacus/core';
import { SuggestedAddressDialogComponent } from './suggested-addresses-dialog/suggested-addresses-dialog.component';
var AddressFormComponent = /** @class */ (function () {
    function AddressFormComponent(fb, checkoutService, userService, globalMessageService, modalService) {
        this.fb = fb;
        this.checkoutService = checkoutService;
        this.userService = userService;
        this.globalMessageService = globalMessageService;
        this.modalService = modalService;
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
                    _this.globalMessageService.add({
                        type: GlobalMessageType.MSG_TYPE_ERROR,
                        text: 'Title is required',
                    });
                }
                else {
                    _this.globalMessageService.add({
                        type: GlobalMessageType.MSG_TYPE_ERROR,
                        text: 'Invalid Address',
                    });
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
                    template: "<div [formGroup]=\"address\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <div class=\"form-group\" *ngIf=\"showTitleCode\">\n        <ng-container *ngIf=\"(titles$ | async) as titles\">\n          <div *ngIf=\"titles.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'address.label.title' | cxTranslate\n              }}</span>\n              <ng-select\n                formControlName=\"titleCode\"\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"titles\"\n                bindLabel=\"name\"\n                bindValue=\"code\"\n                (change)=\"titleSelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'address.label.firstName' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            required\n            placeholder=\"{{ 'address.placeholder.firstName' | cxTranslate }}\"\n            formControlName=\"firstName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'address.label.lastName' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            placeholder=\"{{ 'address.placeholder.lastName' | cxTranslate }}\"\n            formControlName=\"lastName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'address.label.address1' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            placeholder=\"{{\n              'address.placeholder.streetAddress' | cxTranslate\n            }}\"\n            formControlName=\"line1\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'address.label.address2' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"{{ 'address.placeholder.aptSuite' | cxTranslate }}\"\n            formControlName=\"line2\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\" formGroupName=\"country\">\n        <ng-container *ngIf=\"(countries$ | async) as countries\">\n          <div *ngIf=\"countries.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'address.label.country' | cxTranslate\n              }}</span>\n              <ng-select\n                class=\"country-select\"\n                formControlName=\"isocode\"\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"countries\"\n                bindLabel=\"name\"\n                bindValue=\"isocode\"\n                placeholder=\"{{\n                  'address.placeholder.selectOne' | cxTranslate\n                }}\"\n                (change)=\"countrySelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content required\">{{\n              'address.label.city' | cxTranslate\n            }}</span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              required\n              placeholder=\"{{ 'address.placeholder.city' | cxTranslate }}\"\n              formControlName=\"town\"\n            />\n          </label>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <ng-container\n            *ngIf=\"(regions$ | async) as regions\"\n            formGroupName=\"region\"\n          >\n            <div *ngIf=\"regions.length !== 0\">\n              <label aria-required=\"true\">\n                <span class=\"label-content required\">{{\n                  'address.label.state' | cxTranslate\n                }}</span>\n                <ng-container *ngIf=\"regions[0].name\">\n                  <ng-select\n                    class=\"region-select\"\n                    formControlName=\"isocode\"\n                    [searchable]=\"false\"\n                    [clearable]=\"false\"\n                    [items]=\"regions\"\n                    bindLabel=\"name\"\n                    bindValue=\"isocode\"\n                    placeholder=\"{{\n                      'address.placeholder.selectOne' | cxTranslate\n                    }}\"\n                    (change)=\"regionSelected($event)\"\n                  >\n                  </ng-select>\n                </ng-container>\n                <ng-container *ngIf=\"!regions[0].name\">\n                  <ng-select\n                    class=\"region-select\"\n                    [searchable]=\"false\"\n                    [clearable]=\"false\"\n                    [items]=\"regions\"\n                    bindLabel=\"isocode\"\n                    bindValue=\"region\"\n                    placeholder=\"{{\n                      'address.placeholder.selectOne' | cxTranslate\n                    }}\"\n                    (change)=\"regionSelected($event)\"\n                  >\n                  </ng-select>\n                </ng-container>\n              </label>\n            </div>\n          </ng-container>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content required\">{{\n              'address.label.zipCode' | cxTranslate\n            }}</span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              required\n              placeholder=\"{{ 'address.placeholder.zipCode' | cxTranslate }}\"\n              formControlName=\"postalCode\"\n            />\n          </label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'address.label.phoneNumber' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"{{ 'address.placeholder.phoneNumber' | cxTranslate }}\"\n            formControlName=\"phone\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\" *ngIf=\"setAsDefaultField !== false\">\n        <div class=\"form-check\">\n          <label>\n            <input\n              type=\"checkbox\"\n              class=\"form-check-input\"\n              formControlName=\"defaultAddress\"\n              (change)=\"toggleDefaultAddress()\"\n            />\n            <span class=\"form-check-label\">{{\n              'common.action.setAsDefault' | cxTranslate\n            }}</span>\n          </label>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"cx-checkout-btns row\">\n    <div class=\"col-md-12 col-lg-6\">\n      <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n        {{ cancelBtnLabel || ('address.action.chooseAddress' | cxTranslate) }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"address.invalid\"\n        (click)=\"verifyAddress()\"\n      >\n        {{ actionBtnLabel || ('common.action.continue' | cxTranslate) }}\n      </button>\n    </div>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/@media (max-width:991.98px){:host{display:var(--cx-display,block);background-color:var(--cx-background-color,var(--cx-g-color-background))}.col-md-12{padding:var(--cx-padding,0 4.375rem)}.container{width:var(--cx-width,100%)}}@media (max-width:767.98px){.col-md-12{padding:var(--cx-padding,0 2.25rem)}}.cx-checkout-btns{padding:var(--cx-padding,1rem 0);justify-content:var(--cx-justify-content,flex-end)}@media (max-width:767.98px){.cx-checkout-btns{padding:var(--cx-padding,1.25rem 0)}}@media (max-width:991.98px){.cx-checkout-btns{padding:var(--cx-padding,1.25rem 0)}.cx-checkout-btns .btn-action{margin:var(--cx-margin,0 0 1rem)}.cx-checkout-body.row{padding:var(--cx-padding,0)}}.cx-checkout-title{text-transform:var(--cx-text-transform,capitalize);margin:var(--cx-margin,0 auto);padding:var(--cx-padding,2.375rem 0 1.75rem 0)}.cx-checkout-body{display:var(--cx-display,flex);align-items:var(--cx-align-items,stretch)}.cx-checkout-text{margin-bottom:var(--cx-margin,1.25rem)}@media (max-width:991.98px){.cx-checkout-text{padding-left:var(--cx-padding,3.5rem)}}@media (max-width:767.98px){.cx-checkout-text{padding-left:var(--cx-padding,1.5rem)}}.cx-spinner{padding-top:var(--cx-padding,30px);padding-bottom:var(--cx-padding,30px)}"]
                }] }
    ];
    /** @nocollapse */
    AddressFormComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: CheckoutService },
        { type: UserService },
        { type: GlobalMessageService },
        { type: NgbModal }
    ]; };
    AddressFormComponent.propDecorators = {
        addressData: [{ type: Input }],
        actionBtnLabel: [{ type: Input }],
        cancelBtnLabel: [{ type: Input }],
        setAsDefaultField: [{ type: Input }],
        showTitleCode: [{ type: Input }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jaGVja291dC9jb21wb25lbnRzL211bHRpLXN0ZXAtY2hlY2tvdXQvc2hpcHBpbmctYWRkcmVzcy9hZGRyZXNzLWZvcm0vYWRkcmVzcy1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBZSxNQUFNLDRCQUE0QixDQUFDO0FBRW5FLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUMsT0FBTyxFQUdMLGVBQWUsRUFFZixvQkFBb0IsRUFDcEIsaUJBQWlCLEVBR2pCLFdBQVcsR0FDWixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBRXBIO0lBcURFLDhCQUNVLEVBQWUsRUFDYixlQUFnQyxFQUNoQyxXQUF3QixFQUN4QixvQkFBMEMsRUFDNUMsWUFBc0I7UUFKdEIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNiLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzVDLGlCQUFZLEdBQVosWUFBWSxDQUFVO1FBL0JoQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFHeEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBS3hDLFlBQU8sR0FBYyxJQUFJLENBQUMs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QUN3Qzs7SUFFeEMsNkNBQ3dDOztJQUV4QyxnREFBK0I7O0lBQy9CLHdEQUFzQzs7SUFFdEMsdUNBZ0JHOzs7OztJQUdELGtDQUF1Qjs7Ozs7SUFDdkIsK0NBQTBDOzs7OztJQUMxQywyQ0FBa0M7Ozs7O0lBQ2xDLG9EQUFvRDs7Ozs7SUFDcEQsNENBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmdiTW9kYWwsIE5nYk1vZGFsUmVmIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgQWRkcmVzcyxcbiAgQWRkcmVzc1ZhbGlkYXRpb24sXG4gIENoZWNrb3V0U2VydmljZSxcbiAgQ291bnRyeSxcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxuICBSZWdpb24sXG4gIFRpdGxlLFxuICBVc2VyU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFN1Z2dlc3RlZEFkZHJlc3NEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3N1Z2dlc3RlZC1hZGRyZXNzZXMtZGlhbG9nL3N1Z2dlc3RlZC1hZGRyZXNzZXMtZGlhbG9nLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWFkZHJlc3MtZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGRyZXNzLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZGRyZXNzLWZvcm0uY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEFkZHJlc3NGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjb3VudHJpZXMkOiBPYnNlcnZhYmxlPENvdW50cnlbXT47XG4gIHRpdGxlcyQ6IE9ic2VydmFibGU8VGl0bGVbXT47XG4gIHJlZ2lvbnMkOiBPYnNlcnZhYmxlPFJlZ2lvbltdPjtcblxuICBASW5wdXQoKVxuICBhZGRyZXNzRGF0YTogQWRkcmVzcztcblxuICBASW5wdXQoKVxuICBhY3Rpb25CdG5MYWJlbDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGNhbmNlbEJ0bkxhYmVsOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0QXNEZWZhdWx0RmllbGQ6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgc2hvd1RpdGxlQ29kZTogYm9vbGVhbjtcblxuICBAT3V0cHV0KClcbiAgc3VibWl0QWRkcmVzcyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBPdXRwdXQoKVxuICBiYWNrVG9BZGRyZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgYWRkcmVzc1ZlcmlmeVN1YjogU3Vic2NyaXB0aW9uO1xuICBzdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWY6IE5nYk1vZGFsUmVmO1xuXG4gIGFkZHJlc3M6IEZvcm1Hcm91cCA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgIGRlZmF1bHRBZGRyZXNzOiBbZmFsc2VdLFxuICAgIHRpdGxlQ29kZTogWycnXSxcbiAgICBmaXJzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgbGFzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgbGluZTE6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgbGluZTI6IFsnJ10sXG4gICAgdG93bjogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICByZWdpb246IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgaXNvY29kZTogW251bGwsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIH0pLFxuICAgIGNvdW50cnk6IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgaXNvY29kZTogW251bGwsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIH0pLFxuICAgIHBvc3RhbENvZGU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgcGhvbmU6ICcnLFxuICB9KTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbFxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gRmV0Y2hpbmcgY291bnRyaWVzXG4gICAgdGhpcy5jb3VudHJpZXMkID0gdGhpcy51c2VyU2VydmljZS5nZXREZWxpdmVyeUNvdW50cmllcygpLnBpcGUoXG4gICAgICB0YXAoY291bnRyaWVzID0+IHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGNvdW50cmllcykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2FkRGVsaXZlcnlDb3VudHJpZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgLy8gRmV0Y2hpbmcgdGl0bGVzXG4gICAgdGhpcy50aXRsZXMkID0gdGhpcy51c2VyU2VydmljZS5nZXRUaXRsZXMoKS5waXBlKFxuICAgICAgdGFwKHRpdGxlcyA9PiB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aXRsZXMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UubG9hZFRpdGxlcygpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCh0aXRsZXMgPT4ge1xuICAgICAgICBjb25zdCBub25lVGl0bGUgPSB7IGNvZGU6ICcnLCBuYW1lOiAnVGl0bGUnIH07XG4gICAgICAgIHJldHVybiBbbm9uZVRpdGxlLCAuLi50aXRsZXNdO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgLy8gRmV0Y2hpbmcgcmVnaW9uc1xuICAgIHRoaXMucmVnaW9ucyQgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldFJlZ2lvbnMoKS5waXBlKFxuICAgICAgdGFwKHJlZ2lvbnMgPT4ge1xuICAgICAgICBjb25zdCByZWdpb25Db250cm9sID0gdGhpcy5hZGRyZXNzLmdldCgncmVnaW9uLmlzb2NvZGUnKTtcblxuICAgICAgICBpZiAoT2JqZWN0LmtleXMocmVnaW9ucykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmVnaW9uQ29udHJvbC5kaXNhYmxlKCk7XG4gICAgICAgICAgY29uc3QgY291bnRyeUlzb0NvZGUgPSB0aGlzLmFkZHJlc3MuZ2V0KCdjb3VudHJ5Lmlzb2NvZGUnKS52YWx1ZTtcbiAgICAgICAgICBpZiAoY291bnRyeUlzb0NvZGUpIHtcbiAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UubG9hZFJlZ2lvbnMoY291bnRyeUlzb0NvZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWdpb25Db250cm9sLmVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICAvLyB2ZXJpZnkgdGhlIG5ldyBhZGRlZCBhZGRyZXNzXG4gICAgdGhpcy5hZGRyZXNzVmVyaWZ5U3ViID0gdGhpcy5jaGVja291dFNlcnZpY2VcbiAgICAgIC5nZXRBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cygpXG4gICAgICAuc3Vic2NyaWJlKChyZXN1bHRzOiBBZGRyZXNzVmFsaWRhdGlvbikgPT4ge1xuICAgICAgICBpZiAocmVzdWx0cyA9PT0gJ0ZBSUwnKSB7XG4gICAgICAgICAgdGhpcy5jaGVja291dFNlcnZpY2UuY2xlYXJBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cygpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdHMuZGVjaXNpb24gPT09ICdBQ0NFUFQnKSB7XG4gICAgICAgICAgdGhpcy5zdWJtaXRBZGRyZXNzLmVtaXQodGhpcy5hZGRyZXNzLnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHRzLmRlY2lzaW9uID09PSAnUkVKRUNUJykge1xuICAgICAgICAgIC8vIFRPRE86IFdvcmthcm91bmQ6IGFsbG93IHNlcnZlciBmb3IgZGVjaWRlIGlzIHRpdGxlQ29kZSBtYW5kYXRvcnkgKGlmIHllcywgcHJvdmlkZSBwZXJzb25hbGl6ZWQgbWVzc2FnZSlcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICByZXN1bHRzLmVycm9ycy5lcnJvcnMuc29tZShlcnJvciA9PiBlcnJvci5zdWJqZWN0ID09PSAndGl0bGVDb2RlJylcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKHtcbiAgICAgICAgICAgICAgdHlwZTogR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1IsXG4gICAgICAgICAgICAgIHRleHQ6ICdUaXRsZSBpcyByZXF1aXJlZCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoe1xuICAgICAgICAgICAgICB0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUixcbiAgICAgICAgICAgICAgdGV4dDogJ0ludmFsaWQgQWRkcmVzcycsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jaGVja291dFNlcnZpY2UuY2xlYXJBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cygpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdHMuZGVjaXNpb24gPT09ICdSRVZJRVcnKSB7XG4gICAgICAgICAgdGhpcy5vcGVuU3VnZ2VzdGVkQWRkcmVzcyhyZXN1bHRzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICBpZiAodGhpcy5hZGRyZXNzRGF0YSkge1xuICAgICAgdGhpcy5hZGRyZXNzLnBhdGNoVmFsdWUodGhpcy5hZGRyZXNzRGF0YSk7XG5cbiAgICAgIHRoaXMuY291bnRyeVNlbGVjdGVkKHRoaXMuYWRkcmVzc0RhdGEuY291bnRyeSk7XG4gICAgICBpZiAodGhpcy5hZGRyZXNzRGF0YS5yZWdpb24pIHtcbiAgICAgICAgdGhpcy5yZWdpb25TZWxlY3RlZCh0aGlzLmFkZHJlc3NEYXRhLnJlZ2lvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdGl0bGVTZWxlY3RlZCh0aXRsZTogVGl0bGUpOiB2b2lkIHtcbiAgICB0aGlzLmFkZHJlc3NbJ2NvbnRyb2xzJ10udGl0bGVDb2RlLnNldFZhbHVlKHRpdGxlLmNvZGUpO1xuICB9XG5cbiAgY291bnRyeVNlbGVjdGVkKGNvdW50cnk6IENvdW50cnkpOiB2b2lkIHtcbiAgICB0aGlzLmFkZHJlc3NbJ2NvbnRyb2xzJ10uY291bnRyeVsnY29udHJvbHMnXS5pc29jb2RlLnNldFZhbHVlKFxuICAgICAgY291bnRyeS5pc29jb2RlXG4gICAgKTtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvYWRSZWdpb25zKGNvdW50cnkuaXNvY29kZSk7XG4gIH1cblxuICByZWdpb25TZWxlY3RlZChyZWdpb246IFJlZ2lvbik6IHZvaWQge1xuICAgIHRoaXMuYWRkcmVzc1snY29udHJvbHMnXS5yZWdpb25bJ2NvbnRyb2xzJ10uaXNvY29kZS5zZXRWYWx1ZShcbiAgICAgIHJlZ2lvbi5pc29jb2RlXG4gICAgKTtcbiAgfVxuXG4gIHRvZ2dsZURlZmF1bHRBZGRyZXNzKCk6IHZvaWQge1xuICAgIHRoaXMuYWRkcmVzc1snY29udHJvbHMnXS5kZWZhdWx0QWRkcmVzcy5zZXRWYWx1ZShcbiAgICAgIHRoaXMuYWRkcmVzcy52YWx1ZS5kZWZhdWx0QWRkcmVzc1xuICAgICk7XG4gIH1cblxuICBiYWNrKCk6IHZvaWQge1xuICAgIHRoaXMuYmFja1RvQWRkcmVzcy5lbWl0KCk7XG4gIH1cblxuICB2ZXJpZnlBZGRyZXNzKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLnZlcmlmeUFkZHJlc3ModGhpcy5hZGRyZXNzLnZhbHVlKTtcbiAgfVxuXG4gIG9wZW5TdWdnZXN0ZWRBZGRyZXNzKHJlc3VsdHM6IEFkZHJlc3NWYWxpZGF0aW9uKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnN1Z2dlc3RlZEFkZHJlc3NNb2RhbFJlZikge1xuICAgICAgdGhpcy5zdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWYgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKFxuICAgICAgICBTdWdnZXN0ZWRBZGRyZXNzRGlhbG9nQ29tcG9uZW50LFxuICAgICAgICB7IGNlbnRlcmVkOiB0cnVlLCBzaXplOiAnbGcnIH1cbiAgICAgICk7XG4gICAgICB0aGlzLnN1Z2dlc3RlZEFkZHJlc3NNb2RhbFJlZi5jb21wb25lbnRJbnN0YW5jZS5lbnRlcmVkQWRkcmVzcyA9IHRoaXMuYWRkcmVzcy52YWx1ZTtcbiAgICAgIHRoaXMuc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmLmNvbXBvbmVudEluc3RhbmNlLnN1Z2dlc3RlZEFkZHJlc3NlcyA9XG4gICAgICAgIHJlc3VsdHMuc3VnZ2VzdGVkQWRkcmVzc2VzO1xuICAgICAgdGhpcy5zdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWYucmVzdWx0XG4gICAgICAgIC50aGVuKGFkZHJlc3MgPT4ge1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNsZWFyQWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKTtcbiAgICAgICAgICBpZiAoYWRkcmVzcykge1xuICAgICAgICAgICAgYWRkcmVzcyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZUNvZGU6IHRoaXMuYWRkcmVzcy52YWx1ZS50aXRsZUNvZGUsXG4gICAgICAgICAgICAgICAgcGhvbmU6IHRoaXMuYWRkcmVzcy52YWx1ZS5waG9uZSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYWRkcmVzc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuc3VibWl0QWRkcmVzcy5lbWl0KGFkZHJlc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnN1Z2dlc3RlZEFkZHJlc3NNb2RhbFJlZiA9IG51bGw7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgLy8gdGhpcyAgY2FsbGJhY2sgaXMgY2FsbGVkIHdoZW4gbW9kYWwgaXMgY2xvc2VkIHdpdGggRXNjIGtleSBvciBjbGlja2luZyBiYWNrZHJvcFxuICAgICAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNsZWFyQWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKTtcbiAgICAgICAgICBjb25zdCBhZGRyZXNzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy5hZGRyZXNzLnZhbHVlXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnN1Ym1pdEFkZHJlc3MuZW1pdChhZGRyZXNzKTtcbiAgICAgICAgICB0aGlzLnN1Z2dlc3RlZEFkZHJlc3NNb2RhbFJlZiA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNsZWFyQWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKTtcblxuICAgIGlmICh0aGlzLmFkZHJlc3NWZXJpZnlTdWIpIHtcbiAgICAgIHRoaXMuYWRkcmVzc1ZlcmlmeVN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19