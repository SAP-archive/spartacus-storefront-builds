/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map, tap } from 'rxjs/operators';
import { CheckoutService, GlobalMessageService, GlobalMessageType, UserService, } from '@spartacus/core';
import { SuggestedAddressDialogComponent } from './suggested-addresses-dialog/suggested-addresses-dialog.component';
export class AddressFormComponent {
    /**
     * @param {?} fb
     * @param {?} checkoutService
     * @param {?} userService
     * @param {?} globalMessageService
     * @param {?} modalService
     */
    constructor(fb, checkoutService, userService, globalMessageService, modalService) {
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
    ngOnInit() {
        // Fetching countries
        this.countries$ = this.userService.getDeliveryCountries().pipe(tap(countries => {
            if (Object.keys(countries).length === 0) {
                this.userService.loadDeliveryCountries();
            }
        }));
        // Fetching titles
        this.titles$ = this.userService.getTitles().pipe(tap(titles => {
            if (Object.keys(titles).length === 0) {
                this.userService.loadTitles();
            }
        }), map(titles => {
            /** @type {?} */
            const noneTitle = { code: '', name: 'Title' };
            return [noneTitle, ...titles];
        }));
        // Fetching regions
        this.regions$ = this.userService.getRegions().pipe(tap(regions => {
            /** @type {?} */
            const regionControl = this.address.get('region.isocode');
            if (Object.keys(regions).length === 0) {
                regionControl.disable();
                /** @type {?} */
                const countryIsoCode = this.address.get('country.isocode').value;
                if (countryIsoCode) {
                    this.userService.loadRegions(countryIsoCode);
                }
            }
            else {
                regionControl.enable();
            }
        }));
        // verify the new added address
        this.addressVerifySub = this.checkoutService
            .getAddressVerificationResults()
            .subscribe((results) => {
            if (results === 'FAIL') {
                this.checkoutService.clearAddressVerificationResults();
            }
            else if (results.decision === 'ACCEPT') {
                this.submitAddress.emit(this.address.value);
            }
            else if (results.decision === 'REJECT') {
                // TODO: Workaround: allow server for decide is titleCode mandatory (if yes, provide personalized message)
                if (results.errors.errors.some(error => error.subject === 'titleCode')) {
                    this.globalMessageService.add({
                        type: GlobalMessageType.MSG_TYPE_ERROR,
                        text: 'Title is required',
                    });
                }
                else {
                    this.globalMessageService.add({
                        type: GlobalMessageType.MSG_TYPE_ERROR,
                        text: 'Invalid Address',
                    });
                }
                this.checkoutService.clearAddressVerificationResults();
            }
            else if (results.decision === 'REVIEW') {
                this.openSuggestedAddress(results);
            }
        });
        if (this.addressData) {
            this.address.patchValue(this.addressData);
            this.countrySelected(this.addressData.country);
            if (this.addressData.region) {
                this.regionSelected(this.addressData.region);
            }
        }
    }
    /**
     * @param {?} title
     * @return {?}
     */
    titleSelected(title) {
        this.address['controls'].titleCode.setValue(title.code);
    }
    /**
     * @param {?} country
     * @return {?}
     */
    countrySelected(country) {
        this.address['controls'].country['controls'].isocode.setValue(country.isocode);
        this.userService.loadRegions(country.isocode);
    }
    /**
     * @param {?} region
     * @return {?}
     */
    regionSelected(region) {
        this.address['controls'].region['controls'].isocode.setValue(region.isocode);
    }
    /**
     * @return {?}
     */
    toggleDefaultAddress() {
        this.address['controls'].defaultAddress.setValue(this.address.value.defaultAddress);
    }
    /**
     * @return {?}
     */
    back() {
        this.backToAddress.emit();
    }
    /**
     * @return {?}
     */
    verifyAddress() {
        this.checkoutService.verifyAddress(this.address.value);
    }
    /**
     * @param {?} results
     * @return {?}
     */
    openSuggestedAddress(results) {
        if (!this.suggestedAddressModalRef) {
            this.suggestedAddressModalRef = this.modalService.open(SuggestedAddressDialogComponent, { centered: true, size: 'lg' });
            this.suggestedAddressModalRef.componentInstance.enteredAddress = this.address.value;
            this.suggestedAddressModalRef.componentInstance.suggestedAddresses =
                results.suggestedAddresses;
            this.suggestedAddressModalRef.result
                .then(address => {
                this.checkoutService.clearAddressVerificationResults();
                if (address) {
                    address = Object.assign({
                        titleCode: this.address.value.titleCode,
                        phone: this.address.value.phone,
                        selected: true,
                    }, address);
                    this.submitAddress.emit(address);
                }
                this.suggestedAddressModalRef = null;
            })
                .catch(() => {
                // this  callback is called when modal is closed with Esc key or clicking backdrop
                this.checkoutService.clearAddressVerificationResults();
                /** @type {?} */
                const address = Object.assign({
                    selected: true,
                }, this.address.value);
                this.submitAddress.emit(address);
                this.suggestedAddressModalRef = null;
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.checkoutService.clearAddressVerificationResults();
        if (this.addressVerifySub) {
            this.addressVerifySub.unsubscribe();
        }
    }
}
AddressFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-address-form',
                template: "<div [formGroup]=\"address\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <div class=\"form-group\" *ngIf=\"showTitleCode\">\n        <ng-container *ngIf=\"(titles$ | async) as titles\">\n          <div *ngIf=\"titles.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'addressForm.title' | cxTranslate\n              }}</span>\n              <ng-select\n                formControlName=\"titleCode\"\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"titles\"\n                bindLabel=\"name\"\n                bindValue=\"code\"\n                (change)=\"titleSelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.firstName.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            required\n            placeholder=\"{{\n              'addressForm.firstName.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"firstName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.lastName.label' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            placeholder=\"{{ 'addressForm.lastName.placeholder' | cxTranslate }}\"\n            formControlName=\"lastName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.address1' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            placeholder=\"{{ 'addressForm.streetAddress' | cxTranslate }}\"\n            formControlName=\"line1\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'addressForm.address2' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"{{ 'addressForm.aptSuite' | cxTranslate }}\"\n            formControlName=\"line2\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\" formGroupName=\"country\">\n        <ng-container *ngIf=\"(countries$ | async) as countries\">\n          <div *ngIf=\"countries.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'addressForm.country' | cxTranslate\n              }}</span>\n              <ng-select\n                class=\"country-select\"\n                formControlName=\"isocode\"\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"countries\"\n                bindLabel=\"name\"\n                bindValue=\"isocode\"\n                placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n                (change)=\"countrySelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content required\">{{\n              'addressForm.city.label' | cxTranslate\n            }}</span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              required\n              placeholder=\"{{ 'addressForm.city.placeholder' | cxTranslate }}\"\n              formControlName=\"town\"\n            />\n          </label>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <ng-container\n            *ngIf=\"(regions$ | async) as regions\"\n            formGroupName=\"region\"\n          >\n            <div *ngIf=\"regions.length !== 0\">\n              <label aria-required=\"true\">\n                <span class=\"label-content required\">{{\n                  'addressForm.state' | cxTranslate\n                }}</span>\n                <ng-container *ngIf=\"regions[0].name\">\n                  <ng-select\n                    class=\"region-select\"\n                    formControlName=\"isocode\"\n                    [searchable]=\"false\"\n                    [clearable]=\"false\"\n                    [items]=\"regions\"\n                    bindLabel=\"name\"\n                    bindValue=\"isocode\"\n                    placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n                    (change)=\"regionSelected($event)\"\n                  >\n                  </ng-select>\n                </ng-container>\n                <ng-container *ngIf=\"!regions[0].name\">\n                  <ng-select\n                    class=\"region-select\"\n                    [searchable]=\"false\"\n                    [clearable]=\"false\"\n                    [items]=\"regions\"\n                    bindLabel=\"isocode\"\n                    bindValue=\"region\"\n                    placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n                    (change)=\"regionSelected($event)\"\n                  >\n                  </ng-select>\n                </ng-container>\n              </label>\n            </div>\n          </ng-container>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content required\">{{\n              'addressForm.zipCode.label' | cxTranslate\n            }}</span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              required\n              placeholder=\"{{\n                'addressForm.zipCode.placeholder' | cxTranslate\n              }}\"\n              formControlName=\"postalCode\"\n            />\n          </label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'addressForm.phoneNumber.label' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"{{\n              'addressForm.phoneNumber.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"phone\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\" *ngIf=\"setAsDefaultField !== false\">\n        <div class=\"form-check\">\n          <label>\n            <input\n              type=\"checkbox\"\n              class=\"form-check-input\"\n              formControlName=\"defaultAddress\"\n              (change)=\"toggleDefaultAddress()\"\n            />\n            <span class=\"form-check-label\">{{\n              'addressForm.setAsDefault' | cxTranslate\n            }}</span>\n          </label>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"cx-checkout-btns row\">\n    <div class=\"col-md-12 col-lg-6\">\n      <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n        {{ cancelBtnLabel || ('addressForm.chooseAddress' | cxTranslate) }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"address.invalid\"\n        (click)=\"verifyAddress()\"\n      >\n        {{ actionBtnLabel || ('common.continue' | cxTranslate) }}\n      </button>\n    </div>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
AddressFormComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: CheckoutService },
    { type: UserService },
    { type: GlobalMessageService },
    { type: NgbModal }
];
AddressFormComponent.propDecorators = {
    addressData: [{ type: Input }],
    actionBtnLabel: [{ type: Input }],
    cancelBtnLabel: [{ type: Input }],
    setAsDefaultField: [{ type: Input }],
    showTitleCode: [{ type: Input }],
    submitAddress: [{ type: Output }],
    backToAddress: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jaGVja291dC9jb21wb25lbnRzL211bHRpLXN0ZXAtY2hlY2tvdXQvc2hpcHBpbmctYWRkcmVzcy9hZGRyZXNzLWZvcm0vYWRkcmVzcy1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFlLE1BQU0sNEJBQTRCLENBQUM7QUFFbkUsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxQyxPQUFPLEVBR0wsZUFBZSxFQUVmLG9CQUFvQixFQUNwQixpQkFBaUIsRUFHakIsV0FBVyxHQUNaLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFPcEgsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7Ozs7SUErQy9CLFlBQ1UsRUFBZSxFQUNiLGVBQWdDLEVBQ2hDLFdBQXdCLEVBQ3hCLG9CQUEwQyxFQUM1QyxZQUFzQjtRQUp0QixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2Isb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDNUMsaUJBQVksR0FBWixZQUFZLENBQVU7UUEvQmhDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUd4QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFL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QUN2QiwrQ0FBMEM7Ozs7O0lBQzFDLDJDQUFrQzs7Ozs7SUFDbEMsb0RBQW9EOzs7OztJQUNwRCw0Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ2JNb2RhbCwgTmdiTW9kYWxSZWYgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBBZGRyZXNzLFxuICBBZGRyZXNzVmFsaWRhdGlvbixcbiAgQ2hlY2tvdXRTZXJ2aWNlLFxuICBDb3VudHJ5LFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIFJlZ2lvbixcbiAgVGl0bGUsXG4gIFVzZXJTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgU3VnZ2VzdGVkQWRkcmVzc0RpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vc3VnZ2VzdGVkLWFkZHJlc3Nlcy1kaWFsb2cvc3VnZ2VzdGVkLWFkZHJlc3Nlcy1kaWFsb2cuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYWRkcmVzcy1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZHJlc3MtZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRyZXNzRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY291bnRyaWVzJDogT2JzZXJ2YWJsZTxDb3VudHJ5W10+O1xuICB0aXRsZXMkOiBPYnNlcnZhYmxlPFRpdGxlW10+O1xuICByZWdpb25zJDogT2JzZXJ2YWJsZTxSZWdpb25bXT47XG5cbiAgQElucHV0KClcbiAgYWRkcmVzc0RhdGE6IEFkZHJlc3M7XG5cbiAgQElucHV0KClcbiAgYWN0aW9uQnRuTGFiZWw6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBjYW5jZWxCdG5MYWJlbDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNldEFzRGVmYXVsdEZpZWxkOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHNob3dUaXRsZUNvZGU6IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpXG4gIHN1Ym1pdEFkZHJlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAT3V0cHV0KClcbiAgYmFja1RvQWRkcmVzcyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGFkZHJlc3NWZXJpZnlTdWI6IFN1YnNjcmlwdGlvbjtcbiAgc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmOiBOZ2JNb2RhbFJlZjtcblxuICBhZGRyZXNzOiBGb3JtR3JvdXAgPSB0aGlzLmZiLmdyb3VwKHtcbiAgICBkZWZhdWx0QWRkcmVzczogW2ZhbHNlXSxcbiAgICB0aXRsZUNvZGU6IFsnJ10sXG4gICAgZmlyc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIGxhc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIGxpbmUxOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIGxpbmUyOiBbJyddLFxuICAgIHRvd246IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgcmVnaW9uOiB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGlzb2NvZGU6IFtudWxsLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9KSxcbiAgICBjb3VudHJ5OiB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGlzb2NvZGU6IFtudWxsLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9KSxcbiAgICBwb3N0YWxDb2RlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIHBob25lOiAnJyxcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U2VydmljZTogQ2hlY2tvdXRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWxcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIEZldGNoaW5nIGNvdW50cmllc1xuICAgIHRoaXMuY291bnRyaWVzJCA9IHRoaXMudXNlclNlcnZpY2UuZ2V0RGVsaXZlcnlDb3VudHJpZXMoKS5waXBlKFxuICAgICAgdGFwKGNvdW50cmllcyA9PiB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhjb3VudHJpZXMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UubG9hZERlbGl2ZXJ5Q291bnRyaWVzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIEZldGNoaW5nIHRpdGxlc1xuICAgIHRoaXMudGl0bGVzJCA9IHRoaXMudXNlclNlcnZpY2UuZ2V0VGl0bGVzKCkucGlwZShcbiAgICAgIHRhcCh0aXRsZXMgPT4ge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModGl0bGVzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvYWRUaXRsZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAodGl0bGVzID0+IHtcbiAgICAgICAgY29uc3Qgbm9uZVRpdGxlID0geyBjb2RlOiAnJywgbmFtZTogJ1RpdGxlJyB9O1xuICAgICAgICByZXR1cm4gW25vbmVUaXRsZSwgLi4udGl0bGVzXTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIEZldGNoaW5nIHJlZ2lvbnNcbiAgICB0aGlzLnJlZ2lvbnMkID0gdGhpcy51c2VyU2VydmljZS5nZXRSZWdpb25zKCkucGlwZShcbiAgICAgIHRhcChyZWdpb25zID0+IHtcbiAgICAgICAgY29uc3QgcmVnaW9uQ29udHJvbCA9IHRoaXMuYWRkcmVzcy5nZXQoJ3JlZ2lvbi5pc29jb2RlJyk7XG5cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHJlZ2lvbnMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJlZ2lvbkNvbnRyb2wuZGlzYWJsZSgpO1xuICAgICAgICAgIGNvbnN0IGNvdW50cnlJc29Db2RlID0gdGhpcy5hZGRyZXNzLmdldCgnY291bnRyeS5pc29jb2RlJykudmFsdWU7XG4gICAgICAgICAgaWYgKGNvdW50cnlJc29Db2RlKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvYWRSZWdpb25zKGNvdW50cnlJc29Db2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVnaW9uQ29udHJvbC5lbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgLy8gdmVyaWZ5IHRoZSBuZXcgYWRkZWQgYWRkcmVzc1xuICAgIHRoaXMuYWRkcmVzc1ZlcmlmeVN1YiA9IHRoaXMuY2hlY2tvdXRTZXJ2aWNlXG4gICAgICAuZ2V0QWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKVxuICAgICAgLnN1YnNjcmliZSgocmVzdWx0czogQWRkcmVzc1ZhbGlkYXRpb24pID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdHMgPT09ICdGQUlMJykge1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNsZWFyQWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHRzLmRlY2lzaW9uID09PSAnQUNDRVBUJykge1xuICAgICAgICAgIHRoaXMuc3VibWl0QWRkcmVzcy5lbWl0KHRoaXMuYWRkcmVzcy52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0cy5kZWNpc2lvbiA9PT0gJ1JFSkVDVCcpIHtcbiAgICAgICAgICAvLyBUT0RPOiBXb3JrYXJvdW5kOiBhbGxvdyBzZXJ2ZXIgZm9yIGRlY2lkZSBpcyB0aXRsZUNvZGUgbWFuZGF0b3J5IChpZiB5ZXMsIHByb3ZpZGUgcGVyc29uYWxpemVkIG1lc3NhZ2UpXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgcmVzdWx0cy5lcnJvcnMuZXJyb3JzLnNvbWUoZXJyb3IgPT4gZXJyb3Iuc3ViamVjdCA9PT0gJ3RpdGxlQ29kZScpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZCh7XG4gICAgICAgICAgICAgIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SLFxuICAgICAgICAgICAgICB0ZXh0OiAnVGl0bGUgaXMgcmVxdWlyZWQnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKHtcbiAgICAgICAgICAgICAgdHlwZTogR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1IsXG4gICAgICAgICAgICAgIHRleHQ6ICdJbnZhbGlkIEFkZHJlc3MnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNsZWFyQWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHRzLmRlY2lzaW9uID09PSAnUkVWSUVXJykge1xuICAgICAgICAgIHRoaXMub3BlblN1Z2dlc3RlZEFkZHJlc3MocmVzdWx0cyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuYWRkcmVzc0RhdGEpIHtcbiAgICAgIHRoaXMuYWRkcmVzcy5wYXRjaFZhbHVlKHRoaXMuYWRkcmVzc0RhdGEpO1xuXG4gICAgICB0aGlzLmNvdW50cnlTZWxlY3RlZCh0aGlzLmFkZHJlc3NEYXRhLmNvdW50cnkpO1xuICAgICAgaWYgKHRoaXMuYWRkcmVzc0RhdGEucmVnaW9uKSB7XG4gICAgICAgIHRoaXMucmVnaW9uU2VsZWN0ZWQodGhpcy5hZGRyZXNzRGF0YS5yZWdpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRpdGxlU2VsZWN0ZWQodGl0bGU6IFRpdGxlKTogdm9pZCB7XG4gICAgdGhpcy5hZGRyZXNzWydjb250cm9scyddLnRpdGxlQ29kZS5zZXRWYWx1ZSh0aXRsZS5jb2RlKTtcbiAgfVxuXG4gIGNvdW50cnlTZWxlY3RlZChjb3VudHJ5OiBDb3VudHJ5KTogdm9pZCB7XG4gICAgdGhpcy5hZGRyZXNzWydjb250cm9scyddLmNvdW50cnlbJ2NvbnRyb2xzJ10uaXNvY29kZS5zZXRWYWx1ZShcbiAgICAgIGNvdW50cnkuaXNvY29kZVxuICAgICk7XG4gICAgdGhpcy51c2VyU2VydmljZS5sb2FkUmVnaW9ucyhjb3VudHJ5Lmlzb2NvZGUpO1xuICB9XG5cbiAgcmVnaW9uU2VsZWN0ZWQocmVnaW9uOiBSZWdpb24pOiB2b2lkIHtcbiAgICB0aGlzLmFkZHJlc3NbJ2NvbnRyb2xzJ10ucmVnaW9uWydjb250cm9scyddLmlzb2NvZGUuc2V0VmFsdWUoXG4gICAgICByZWdpb24uaXNvY29kZVxuICAgICk7XG4gIH1cblxuICB0b2dnbGVEZWZhdWx0QWRkcmVzcygpOiB2b2lkIHtcbiAgICB0aGlzLmFkZHJlc3NbJ2NvbnRyb2xzJ10uZGVmYXVsdEFkZHJlc3Muc2V0VmFsdWUoXG4gICAgICB0aGlzLmFkZHJlc3MudmFsdWUuZGVmYXVsdEFkZHJlc3NcbiAgICApO1xuICB9XG5cbiAgYmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLmJhY2tUb0FkZHJlc3MuZW1pdCgpO1xuICB9XG5cbiAgdmVyaWZ5QWRkcmVzcygpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0U2VydmljZS52ZXJpZnlBZGRyZXNzKHRoaXMuYWRkcmVzcy52YWx1ZSk7XG4gIH1cblxuICBvcGVuU3VnZ2VzdGVkQWRkcmVzcyhyZXN1bHRzOiBBZGRyZXNzVmFsaWRhdGlvbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5zdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWYpIHtcbiAgICAgIHRoaXMuc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihcbiAgICAgICAgU3VnZ2VzdGVkQWRkcmVzc0RpYWxvZ0NvbXBvbmVudCxcbiAgICAgICAgeyBjZW50ZXJlZDogdHJ1ZSwgc2l6ZTogJ2xnJyB9XG4gICAgICApO1xuICAgICAgdGhpcy5zdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWYuY29tcG9uZW50SW5zdGFuY2UuZW50ZXJlZEFkZHJlc3MgPSB0aGlzLmFkZHJlc3MudmFsdWU7XG4gICAgICB0aGlzLnN1Z2dlc3RlZEFkZHJlc3NNb2RhbFJlZi5jb21wb25lbnRJbnN0YW5jZS5zdWdnZXN0ZWRBZGRyZXNzZXMgPVxuICAgICAgICByZXN1bHRzLnN1Z2dlc3RlZEFkZHJlc3NlcztcbiAgICAgIHRoaXMuc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmLnJlc3VsdFxuICAgICAgICAudGhlbihhZGRyZXNzID0+IHtcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5jbGVhckFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzKCk7XG4gICAgICAgICAgaWYgKGFkZHJlc3MpIHtcbiAgICAgICAgICAgIGFkZHJlc3MgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGVDb2RlOiB0aGlzLmFkZHJlc3MudmFsdWUudGl0bGVDb2RlLFxuICAgICAgICAgICAgICAgIHBob25lOiB0aGlzLmFkZHJlc3MudmFsdWUucGhvbmUsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGFkZHJlc3NcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLnN1Ym1pdEFkZHJlc3MuZW1pdChhZGRyZXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWYgPSBudWxsO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgIC8vIHRoaXMgIGNhbGxiYWNrIGlzIGNhbGxlZCB3aGVuIG1vZGFsIGlzIGNsb3NlZCB3aXRoIEVzYyBrZXkgb3IgY2xpY2tpbmcgYmFja2Ryb3BcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5jbGVhckFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzKCk7XG4gICAgICAgICAgY29uc3QgYWRkcmVzcyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXMuYWRkcmVzcy52YWx1ZVxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5zdWJtaXRBZGRyZXNzLmVtaXQoYWRkcmVzcyk7XG4gICAgICAgICAgdGhpcy5zdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWYgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5jbGVhckFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzKCk7XG5cbiAgICBpZiAodGhpcy5hZGRyZXNzVmVyaWZ5U3ViKSB7XG4gICAgICB0aGlzLmFkZHJlc3NWZXJpZnlTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==