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
                    this.globalMessageService.add({ key: 'addressForm.titleRequired' }, GlobalMessageType.MSG_TYPE_ERROR);
                }
                else {
                    this.globalMessageService.add({ key: 'addressForm.invalidAddress' }, GlobalMessageType.MSG_TYPE_ERROR);
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
                template: "<div [formGroup]=\"address\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <div class=\"form-group\" *ngIf=\"showTitleCode\">\n        <ng-container *ngIf=\"(titles$ | async) as titles\">\n          <div *ngIf=\"titles.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'addressForm.title' | cxTranslate\n              }}</span>\n              <ng-select\n                formControlName=\"titleCode\"\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"titles\"\n                bindLabel=\"name\"\n                bindValue=\"code\"\n                (change)=\"titleSelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.firstName.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            required\n            placeholder=\"{{\n              'addressForm.firstName.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"firstName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.lastName.label' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            placeholder=\"{{ 'addressForm.lastName.placeholder' | cxTranslate }}\"\n            formControlName=\"lastName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.address1' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            placeholder=\"{{ 'addressForm.streetAddress' | cxTranslate }}\"\n            formControlName=\"line1\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'addressForm.address2' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"{{ 'addressForm.aptSuite' | cxTranslate }}\"\n            formControlName=\"line2\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\" formGroupName=\"country\">\n        <ng-container *ngIf=\"(countries$ | async) as countries\">\n          <div *ngIf=\"countries.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'addressForm.country' | cxTranslate\n              }}</span>\n              <ng-select\n                class=\"country-select\"\n                formControlName=\"isocode\"\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"countries\"\n                bindLabel=\"name\"\n                bindValue=\"isocode\"\n                placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n                (change)=\"countrySelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content required\">{{\n              'addressForm.city.label' | cxTranslate\n            }}</span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              required\n              placeholder=\"{{ 'addressForm.city.placeholder' | cxTranslate }}\"\n              formControlName=\"town\"\n            />\n          </label>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <ng-container\n            *ngIf=\"(regions$ | async) as regions\"\n            formGroupName=\"region\"\n          >\n            <div *ngIf=\"regions.length !== 0\">\n              <label aria-required=\"true\">\n                <span class=\"label-content required\">{{\n                  'addressForm.state' | cxTranslate\n                }}</span>\n                <ng-container *ngIf=\"regions[0].name\">\n                  <ng-select\n                    class=\"region-select\"\n                    formControlName=\"isocode\"\n                    [searchable]=\"false\"\n                    [clearable]=\"false\"\n                    [items]=\"regions\"\n                    bindLabel=\"name\"\n                    bindValue=\"isocode\"\n                    placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n                    (change)=\"regionSelected($event)\"\n                  >\n                  </ng-select>\n                </ng-container>\n                <ng-container *ngIf=\"!regions[0].name\">\n                  <ng-select\n                    class=\"region-select\"\n                    [searchable]=\"false\"\n                    [clearable]=\"false\"\n                    [items]=\"regions\"\n                    bindLabel=\"isocode\"\n                    bindValue=\"region\"\n                    placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n                    (change)=\"regionSelected($event)\"\n                  >\n                  </ng-select>\n                </ng-container>\n              </label>\n            </div>\n          </ng-container>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content required\">{{\n              'addressForm.zipCode.label' | cxTranslate\n            }}</span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              required\n              placeholder=\"{{\n                'addressForm.zipCode.placeholder' | cxTranslate\n              }}\"\n              formControlName=\"postalCode\"\n            />\n          </label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'addressForm.phoneNumber.label' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"{{\n              'addressForm.phoneNumber.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"phone\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\" *ngIf=\"setAsDefaultField !== false\">\n        <div class=\"form-check\">\n          <label>\n            <input\n              type=\"checkbox\"\n              class=\"form-check-input\"\n              formControlName=\"defaultAddress\"\n              (change)=\"toggleDefaultAddress()\"\n            />\n            <span class=\"form-check-label\">{{\n              'addressForm.setAsDefault' | cxTranslate\n            }}</span>\n          </label>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"cx-checkout-btns row\">\n    <div class=\"col-md-12 col-lg-6\" *ngIf=\"showCancelBtn\">\n      <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n        {{ cancelBtnLabel || ('addressForm.chooseAddress' | cxTranslate) }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"address.invalid\"\n        (click)=\"verifyAddress()\"\n      >\n        {{ actionBtnLabel || ('common.continue' | cxTranslate) }}\n      </button>\n    </div>\n  </div>\n</div>\n",
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
    showCancelBtn: [{ type: Input }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jaGVja291dC9jb21wb25lbnRzL3NoaXBwaW5nLWFkZHJlc3MvYWRkcmVzcy1mb3JtL2FkZHJlc3MtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBZSxNQUFNLDRCQUE0QixDQUFDO0FBRW5FLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUMsT0FBTyxFQUdMLGVBQWUsRUFFZixvQkFBb0IsRUFDcEIsaUJBQWlCLEVBR2pCLFdBQVcsR0FDWixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBT3BILE1BQU0sT0FBTyxvQkFBb0I7Ozs7Ozs7O0lBa0QvQixZQUNVLEVBQWUsRUFDYixlQUFnQyxFQUNoQyxXQUF3QixFQUN4QixvQkFBMEMsRUFDNUMsWUFBc0I7UUFKdEIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNiLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzVDLGlCQUFZLEdBQVosWUFBWSxDQUFVO1FBbENoQyxrQkFBYSxHQUFHLElBQUksQ0FBQztRQUdyQixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFHeEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxD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Ozs7OztJQUN2QiwrQ0FBMEM7Ozs7O0lBQzFDLDJDQUFrQzs7Ozs7SUFDbEMsb0RBQW9EOzs7OztJQUNwRCw0Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ2JNb2RhbCwgTmdiTW9kYWxSZWYgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBBZGRyZXNzLFxuICBBZGRyZXNzVmFsaWRhdGlvbixcbiAgQ2hlY2tvdXRTZXJ2aWNlLFxuICBDb3VudHJ5LFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIFJlZ2lvbixcbiAgVGl0bGUsXG4gIFVzZXJTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgU3VnZ2VzdGVkQWRkcmVzc0RpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vc3VnZ2VzdGVkLWFkZHJlc3Nlcy1kaWFsb2cvc3VnZ2VzdGVkLWFkZHJlc3Nlcy1kaWFsb2cuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYWRkcmVzcy1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZHJlc3MtZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRyZXNzRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY291bnRyaWVzJDogT2JzZXJ2YWJsZTxDb3VudHJ5W10+O1xuICB0aXRsZXMkOiBPYnNlcnZhYmxlPFRpdGxlW10+O1xuICByZWdpb25zJDogT2JzZXJ2YWJsZTxSZWdpb25bXT47XG5cbiAgQElucHV0KClcbiAgYWRkcmVzc0RhdGE6IEFkZHJlc3M7XG5cbiAgQElucHV0KClcbiAgYWN0aW9uQnRuTGFiZWw6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBjYW5jZWxCdG5MYWJlbDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNldEFzRGVmYXVsdEZpZWxkOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHNob3dUaXRsZUNvZGU6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgc2hvd0NhbmNlbEJ0biA9IHRydWU7XG5cbiAgQE91dHB1dCgpXG4gIHN1Ym1pdEFkZHJlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAT3V0cHV0KClcbiAgYmFja1RvQWRkcmVzcyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGFkZHJlc3NWZXJpZnlTdWI6IFN1YnNjcmlwdGlvbjtcbiAgc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmOiBOZ2JNb2RhbFJlZjtcblxuICBhZGRyZXNzOiBGb3JtR3JvdXAgPSB0aGlzLmZiLmdyb3VwKHtcbiAgICBkZWZhdWx0QWRkcmVzczogW2ZhbHNlXSxcbiAgICB0aXRsZUNvZGU6IFsnJ10sXG4gICAgZmlyc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIGxhc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIGxpbmUxOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIGxpbmUyOiBbJyddLFxuICAgIHRvd246IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgcmVnaW9uOiB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGlzb2NvZGU6IFtudWxsLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9KSxcbiAgICBjb3VudHJ5OiB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGlzb2NvZGU6IFtudWxsLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9KSxcbiAgICBwb3N0YWxDb2RlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIHBob25lOiAnJyxcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U2VydmljZTogQ2hlY2tvdXRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWxcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIEZldGNoaW5nIGNvdW50cmllc1xuICAgIHRoaXMuY291bnRyaWVzJCA9IHRoaXMudXNlclNlcnZpY2UuZ2V0RGVsaXZlcnlDb3VudHJpZXMoKS5waXBlKFxuICAgICAgdGFwKGNvdW50cmllcyA9PiB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhjb3VudHJpZXMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UubG9hZERlbGl2ZXJ5Q291bnRyaWVzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIEZldGNoaW5nIHRpdGxlc1xuICAgIHRoaXMudGl0bGVzJCA9IHRoaXMudXNlclNlcnZpY2UuZ2V0VGl0bGVzKCkucGlwZShcbiAgICAgIHRhcCh0aXRsZXMgPT4ge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModGl0bGVzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvYWRUaXRsZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAodGl0bGVzID0+IHtcbiAgICAgICAgY29uc3Qgbm9uZVRpdGxlID0geyBjb2RlOiAnJywgbmFtZTogJ1RpdGxlJyB9O1xuICAgICAgICByZXR1cm4gW25vbmVUaXRsZSwgLi4udGl0bGVzXTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIEZldGNoaW5nIHJlZ2lvbnNcbiAgICB0aGlzLnJlZ2lvbnMkID0gdGhpcy51c2VyU2VydmljZS5nZXRSZWdpb25zKCkucGlwZShcbiAgICAgIHRhcChyZWdpb25zID0+IHtcbiAgICAgICAgY29uc3QgcmVnaW9uQ29udHJvbCA9IHRoaXMuYWRkcmVzcy5nZXQoJ3JlZ2lvbi5pc29jb2RlJyk7XG5cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHJlZ2lvbnMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJlZ2lvbkNvbnRyb2wuZGlzYWJsZSgpO1xuICAgICAgICAgIGNvbnN0IGNvdW50cnlJc29Db2RlID0gdGhpcy5hZGRyZXNzLmdldCgnY291bnRyeS5pc29jb2RlJykudmFsdWU7XG4gICAgICAgICAgaWYgKGNvdW50cnlJc29Db2RlKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvYWRSZWdpb25zKGNvdW50cnlJc29Db2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVnaW9uQ29udHJvbC5lbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgLy8gdmVyaWZ5IHRoZSBuZXcgYWRkZWQgYWRkcmVzc1xuICAgIHRoaXMuYWRkcmVzc1ZlcmlmeVN1YiA9IHRoaXMuY2hlY2tvdXRTZXJ2aWNlXG4gICAgICAuZ2V0QWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKVxuICAgICAgLnN1YnNjcmliZSgocmVzdWx0czogQWRkcmVzc1ZhbGlkYXRpb24pID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdHMgPT09ICdGQUlMJykge1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNsZWFyQWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHRzLmRlY2lzaW9uID09PSAnQUNDRVBUJykge1xuICAgICAgICAgIHRoaXMuc3VibWl0QWRkcmVzcy5lbWl0KHRoaXMuYWRkcmVzcy52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0cy5kZWNpc2lvbiA9PT0gJ1JFSkVDVCcpIHtcbiAgICAgICAgICAvLyBUT0RPOiBXb3JrYXJvdW5kOiBhbGxvdyBzZXJ2ZXIgZm9yIGRlY2lkZSBpcyB0aXRsZUNvZGUgbWFuZGF0b3J5IChpZiB5ZXMsIHByb3ZpZGUgcGVyc29uYWxpemVkIG1lc3NhZ2UpXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgcmVzdWx0cy5lcnJvcnMuZXJyb3JzLnNvbWUoZXJyb3IgPT4gZXJyb3Iuc3ViamVjdCA9PT0gJ3RpdGxlQ29kZScpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICAgICAgeyBrZXk6ICdhZGRyZXNzRm9ybS50aXRsZVJlcXVpcmVkJyB9LFxuICAgICAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgICAgICAgIHsga2V5OiAnYWRkcmVzc0Zvcm0uaW52YWxpZEFkZHJlc3MnIH0sXG4gICAgICAgICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5jbGVhckFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzKCk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0cy5kZWNpc2lvbiA9PT0gJ1JFVklFVycpIHtcbiAgICAgICAgICB0aGlzLm9wZW5TdWdnZXN0ZWRBZGRyZXNzKHJlc3VsdHMpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIGlmICh0aGlzLmFkZHJlc3NEYXRhKSB7XG4gICAgICB0aGlzLmFkZHJlc3MucGF0Y2hWYWx1ZSh0aGlzLmFkZHJlc3NEYXRhKTtcblxuICAgICAgdGhpcy5jb3VudHJ5U2VsZWN0ZWQodGhpcy5hZGRyZXNzRGF0YS5jb3VudHJ5KTtcbiAgICAgIGlmICh0aGlzLmFkZHJlc3NEYXRhLnJlZ2lvbikge1xuICAgICAgICB0aGlzLnJlZ2lvblNlbGVjdGVkKHRoaXMuYWRkcmVzc0RhdGEucmVnaW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0aXRsZVNlbGVjdGVkKHRpdGxlOiBUaXRsZSk6IHZvaWQge1xuICAgIHRoaXMuYWRkcmVzc1snY29udHJvbHMnXS50aXRsZUNvZGUuc2V0VmFsdWUodGl0bGUuY29kZSk7XG4gIH1cblxuICBjb3VudHJ5U2VsZWN0ZWQoY291bnRyeTogQ291bnRyeSk6IHZvaWQge1xuICAgIHRoaXMuYWRkcmVzc1snY29udHJvbHMnXS5jb3VudHJ5Wydjb250cm9scyddLmlzb2NvZGUuc2V0VmFsdWUoXG4gICAgICBjb3VudHJ5Lmlzb2NvZGVcbiAgICApO1xuICAgIHRoaXMudXNlclNlcnZpY2UubG9hZFJlZ2lvbnMoY291bnRyeS5pc29jb2RlKTtcbiAgfVxuXG4gIHJlZ2lvblNlbGVjdGVkKHJlZ2lvbjogUmVnaW9uKTogdm9pZCB7XG4gICAgdGhpcy5hZGRyZXNzWydjb250cm9scyddLnJlZ2lvblsnY29udHJvbHMnXS5pc29jb2RlLnNldFZhbHVlKFxuICAgICAgcmVnaW9uLmlzb2NvZGVcbiAgICApO1xuICB9XG5cbiAgdG9nZ2xlRGVmYXVsdEFkZHJlc3MoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRyZXNzWydjb250cm9scyddLmRlZmF1bHRBZGRyZXNzLnNldFZhbHVlKFxuICAgICAgdGhpcy5hZGRyZXNzLnZhbHVlLmRlZmF1bHRBZGRyZXNzXG4gICAgKTtcbiAgfVxuXG4gIGJhY2soKTogdm9pZCB7XG4gICAgdGhpcy5iYWNrVG9BZGRyZXNzLmVtaXQoKTtcbiAgfVxuXG4gIHZlcmlmeUFkZHJlc3MoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dFNlcnZpY2UudmVyaWZ5QWRkcmVzcyh0aGlzLmFkZHJlc3MudmFsdWUpO1xuICB9XG5cbiAgb3BlblN1Z2dlc3RlZEFkZHJlc3MocmVzdWx0czogQWRkcmVzc1ZhbGlkYXRpb24pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmKSB7XG4gICAgICB0aGlzLnN1Z2dlc3RlZEFkZHJlc3NNb2RhbFJlZiA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oXG4gICAgICAgIFN1Z2dlc3RlZEFkZHJlc3NEaWFsb2dDb21wb25lbnQsXG4gICAgICAgIHsgY2VudGVyZWQ6IHRydWUsIHNpemU6ICdsZycgfVxuICAgICAgKTtcbiAgICAgIHRoaXMuc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmLmNvbXBvbmVudEluc3RhbmNlLmVudGVyZWRBZGRyZXNzID0gdGhpcy5hZGRyZXNzLnZhbHVlO1xuICAgICAgdGhpcy5zdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWYuY29tcG9uZW50SW5zdGFuY2Uuc3VnZ2VzdGVkQWRkcmVzc2VzID1cbiAgICAgICAgcmVzdWx0cy5zdWdnZXN0ZWRBZGRyZXNzZXM7XG4gICAgICB0aGlzLnN1Z2dlc3RlZEFkZHJlc3NNb2RhbFJlZi5yZXN1bHRcbiAgICAgICAgLnRoZW4oYWRkcmVzcyA9PiB7XG4gICAgICAgICAgdGhpcy5jaGVja291dFNlcnZpY2UuY2xlYXJBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cygpO1xuICAgICAgICAgIGlmIChhZGRyZXNzKSB7XG4gICAgICAgICAgICBhZGRyZXNzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlQ29kZTogdGhpcy5hZGRyZXNzLnZhbHVlLnRpdGxlQ29kZSxcbiAgICAgICAgICAgICAgICBwaG9uZTogdGhpcy5hZGRyZXNzLnZhbHVlLnBob25lLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBhZGRyZXNzXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5zdWJtaXRBZGRyZXNzLmVtaXQoYWRkcmVzcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmID0gbnVsbDtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAvLyB0aGlzICBjYWxsYmFjayBpcyBjYWxsZWQgd2hlbiBtb2RhbCBpcyBjbG9zZWQgd2l0aCBFc2Mga2V5IG9yIGNsaWNraW5nIGJhY2tkcm9wXG4gICAgICAgICAgdGhpcy5jaGVja291dFNlcnZpY2UuY2xlYXJBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cygpO1xuICAgICAgICAgIGNvbnN0IGFkZHJlc3MgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLmFkZHJlc3MudmFsdWVcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuc3VibWl0QWRkcmVzcy5lbWl0KGFkZHJlc3MpO1xuICAgICAgICAgIHRoaXMuc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5jaGVja291dFNlcnZpY2UuY2xlYXJBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cygpO1xuXG4gICAgaWYgKHRoaXMuYWRkcmVzc1ZlcmlmeVN1Yikge1xuICAgICAgdGhpcy5hZGRyZXNzVmVyaWZ5U3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=