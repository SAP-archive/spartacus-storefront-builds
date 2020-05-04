import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address, AddressValidation, CheckoutDeliveryService, Country, ErrorModel, GlobalMessageService, GlobalMessageType, Region, Title, UserAddressService, UserService, } from '@spartacus/core';
import { BehaviorSubject } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { ModalRef, ModalService, } from '../../../../../shared/components/modal/index';
import { sortTitles } from '../../../../../shared/utils/forms/title-utils';
import { SuggestedAddressDialogComponent } from './suggested-addresses-dialog/suggested-addresses-dialog.component';
let AddressFormComponent = class AddressFormComponent {
    constructor(fb, checkoutDeliveryService, userService, userAddressService, globalMessageService, modalService) {
        this.fb = fb;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.userService = userService;
        this.userAddressService = userAddressService;
        this.globalMessageService = globalMessageService;
        this.modalService = modalService;
        this.selectedCountry$ = new BehaviorSubject('');
        this.setAsDefaultField = true;
        this.showCancelBtn = true;
        this.submitAddress = new EventEmitter();
        this.backToAddress = new EventEmitter();
        this.addressForm = this.fb.group({
            country: this.fb.group({
                isocode: [null, Validators.required],
            }),
            titleCode: [''],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            line1: ['', Validators.required],
            line2: [''],
            town: ['', Validators.required],
            region: this.fb.group({
                isocode: [null, Validators.required],
            }),
            postalCode: ['', Validators.required],
            phone: '',
            defaultAddress: [false],
        });
    }
    ngOnInit() {
        // Fetching countries
        this.countries$ = this.userAddressService.getDeliveryCountries().pipe(tap((countries) => {
            if (Object.keys(countries).length === 0) {
                this.userAddressService.loadDeliveryCountries();
            }
        }));
        // Fetching titles
        this.titles$ = this.userService.getTitles().pipe(tap((titles) => {
            if (Object.keys(titles).length === 0) {
                this.userService.loadTitles();
            }
        }), map((titles) => {
            titles.sort(sortTitles);
            const noneTitle = { code: '', name: 'Title' };
            return [noneTitle, ...titles];
        }));
        // Fetching regions
        this.regions$ = this.selectedCountry$.pipe(switchMap((country) => this.userAddressService.getRegions(country)), tap((regions) => {
            const regionControl = this.addressForm.get('region.isocode');
            if (regions && regions.length > 0) {
                regionControl.enable();
            }
            else {
                regionControl.disable();
            }
        }));
        // verify the new added address
        this.addressVerifySub = this.checkoutDeliveryService
            .getAddressVerificationResults()
            .subscribe((results) => {
            if (results.decision === 'FAIL') {
                this.checkoutDeliveryService.clearAddressVerificationResults();
            }
            else if (results.decision === 'ACCEPT') {
                this.submitAddress.emit(this.addressForm.value);
            }
            else if (results.decision === 'REJECT') {
                // TODO: Workaround: allow server for decide is titleCode mandatory (if yes, provide personalized message)
                if (results.errors.errors.some((error) => error.subject === 'titleCode')) {
                    this.globalMessageService.add({ key: 'addressForm.titleRequired' }, GlobalMessageType.MSG_TYPE_ERROR);
                }
                else {
                    this.globalMessageService.add({ key: 'addressForm.invalidAddress' }, GlobalMessageType.MSG_TYPE_ERROR);
                }
                this.checkoutDeliveryService.clearAddressVerificationResults();
            }
            else if (results.decision === 'REVIEW') {
                this.openSuggestedAddress(results);
            }
        });
        if (this.addressData && Object.keys(this.addressData).length !== 0) {
            this.addressForm.patchValue(this.addressData);
            this.countrySelected(this.addressData.country);
            if (this.addressData.region) {
                this.regionSelected(this.addressData.region);
            }
        }
    }
    countrySelected(country) {
        this.addressForm['controls'].country['controls'].isocode.setValue(country.isocode);
        this.selectedCountry$.next(country.isocode);
    }
    regionSelected(region) {
        this.addressForm['controls'].region['controls'].isocode.setValue(region.isocode);
    }
    toggleDefaultAddress() {
        this.addressForm['controls'].defaultAddress.setValue(this.addressForm.value.defaultAddress);
    }
    back() {
        this.backToAddress.emit();
    }
    verifyAddress() {
        if (this.addressForm.valid) {
            if (this.addressForm.get('region').value.isocode) {
                this.regionsSub = this.regions$.pipe(take(1)).subscribe((regions) => {
                    const obj = regions.find((region) => region.isocode ===
                        this.addressForm.controls['region'].value.isocode);
                    Object.assign(this.addressForm.value.region, {
                        isocodeShort: obj.isocodeShort,
                    });
                });
            }
            if (this.addressForm.dirty) {
                this.checkoutDeliveryService.verifyAddress(this.addressForm.value);
            }
            else {
                // address form value not changed
                // ignore duplicate address
                this.submitAddress.emit(undefined);
            }
        }
        else {
            this.addressForm.markAllAsTouched();
        }
    }
    openSuggestedAddress(results) {
        if (!this.suggestedAddressModalRef) {
            this.suggestedAddressModalRef = this.modalService.open(SuggestedAddressDialogComponent, { centered: true, size: 'lg' });
            this.suggestedAddressModalRef.componentInstance.enteredAddress = this.addressForm.value;
            this.suggestedAddressModalRef.componentInstance.suggestedAddresses =
                results.suggestedAddresses;
            this.suggestedAddressModalRef.result
                .then((address) => {
                this.checkoutDeliveryService.clearAddressVerificationResults();
                if (address) {
                    address = Object.assign({
                        titleCode: this.addressForm.value.titleCode,
                        phone: this.addressForm.value.phone,
                        selected: true,
                    }, address);
                    this.submitAddress.emit(address);
                }
                this.suggestedAddressModalRef = null;
            })
                .catch(() => {
                // this  callback is called when modal is closed with Esc key or clicking backdrop
                this.checkoutDeliveryService.clearAddressVerificationResults();
                const address = Object.assign({
                    selected: true,
                }, this.addressForm.value);
                this.submitAddress.emit(address);
                this.suggestedAddressModalRef = null;
            });
        }
    }
    ngOnDestroy() {
        this.checkoutDeliveryService.clearAddressVerificationResults();
        if (this.addressVerifySub) {
            this.addressVerifySub.unsubscribe();
        }
        if (this.regionsSub) {
            this.regionsSub.unsubscribe();
        }
    }
};
AddressFormComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: CheckoutDeliveryService },
    { type: UserService },
    { type: UserAddressService },
    { type: GlobalMessageService },
    { type: ModalService }
];
__decorate([
    Input()
], AddressFormComponent.prototype, "addressData", void 0);
__decorate([
    Input()
], AddressFormComponent.prototype, "actionBtnLabel", void 0);
__decorate([
    Input()
], AddressFormComponent.prototype, "cancelBtnLabel", void 0);
__decorate([
    Input()
], AddressFormComponent.prototype, "setAsDefaultField", void 0);
__decorate([
    Input()
], AddressFormComponent.prototype, "showTitleCode", void 0);
__decorate([
    Input()
], AddressFormComponent.prototype, "showCancelBtn", void 0);
__decorate([
    Output()
], AddressFormComponent.prototype, "submitAddress", void 0);
__decorate([
    Output()
], AddressFormComponent.prototype, "backToAddress", void 0);
AddressFormComponent = __decorate([
    Component({
        selector: 'cx-address-form',
        template: "<form (ngSubmit)=\"verifyAddress()\" [formGroup]=\"addressForm\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <div class=\"form-group\" formGroupName=\"country\">\n        <ng-container *ngIf=\"countries$ | async as countries\">\n          <div *ngIf=\"countries.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'addressForm.country' | cxTranslate\n              }}</span>\n              <ng-select\n                class=\"country-select\"\n                formControlName=\"isocode\"\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [items]=\"countries\"\n                bindLabel=\"name\"\n                bindValue=\"isocode\"\n                placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n                (change)=\"countrySelected($event)\"\n              >\n              </ng-select>\n              <cx-form-errors\n                [control]=\"addressForm.get('country.isocode')\"\n              ></cx-form-errors>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"form-group\" *ngIf=\"showTitleCode\">\n        <ng-container *ngIf=\"titles$ | async as titles\">\n          <div *ngIf=\"titles.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'addressForm.title' | cxTranslate\n              }}</span>\n              <ng-select\n                formControlName=\"titleCode\"\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"titles\"\n                bindLabel=\"name\"\n                bindValue=\"code\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.firstName.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            placeholder=\"{{\n              'addressForm.firstName.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"firstName\"\n          />\n          <cx-form-errors\n            [control]=\"addressForm.get('firstName')\"\n          ></cx-form-errors>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.lastName.label' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"{{ 'addressForm.lastName.placeholder' | cxTranslate }}\"\n            formControlName=\"lastName\"\n          />\n          <cx-form-errors\n            [control]=\"addressForm.get('lastName')\"\n          ></cx-form-errors>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.address1' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"{{ 'addressForm.streetAddress' | cxTranslate }}\"\n            formControlName=\"line1\"\n          />\n          <cx-form-errors [control]=\"addressForm.get('line1')\"></cx-form-errors>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'addressForm.address2' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"{{ 'addressForm.aptSuite' | cxTranslate }}\"\n            formControlName=\"line2\"\n          />\n        </label>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content required\">{{\n              'addressForm.city.label' | cxTranslate\n            }}</span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              placeholder=\"{{ 'addressForm.city.placeholder' | cxTranslate }}\"\n              formControlName=\"town\"\n            />\n            <cx-form-errors\n              [control]=\"addressForm.get('town')\"\n            ></cx-form-errors>\n          </label>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content required\">{{\n              'addressForm.zipCode.label' | cxTranslate\n            }}</span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              placeholder=\"{{\n                'addressForm.zipCode.placeholder' | cxTranslate\n              }}\"\n              formControlName=\"postalCode\"\n            />\n            <cx-form-errors\n              [control]=\"addressForm.get('postalCode')\"\n            ></cx-form-errors>\n          </label>\n        </div>\n        <ng-container\n          *ngIf=\"regions$ | async as regions\"\n          formGroupName=\"region\"\n        >\n          <ng-container *ngIf=\"regions.length !== 0\">\n            <div class=\"form-group col-md-6\">\n              <label aria-required=\"true\">\n                <span class=\"label-content required\">{{\n                  'addressForm.state' | cxTranslate\n                }}</span>\n                <ng-select\n                  class=\"region-select\"\n                  formControlName=\"isocode\"\n                  [searchable]=\"true\"\n                  [clearable]=\"false\"\n                  [items]=\"regions\"\n                  bindLabel=\"{{ regions[0].name ? 'name' : 'isocode' }}\"\n                  bindValue=\"{{ regions[0].name ? 'isocode' : 'region' }}\"\n                  placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n                >\n                </ng-select>\n                <cx-form-errors\n                  [control]=\"addressForm.get('region.isocode')\"\n                ></cx-form-errors>\n              </label>\n            </div>\n          </ng-container>\n        </ng-container>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'addressForm.phoneNumber.label' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"{{\n              'addressForm.phoneNumber.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"phone\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\" *ngIf=\"setAsDefaultField\">\n        <div class=\"form-check\">\n          <label>\n            <input\n              type=\"checkbox\"\n              class=\"form-check-input\"\n              formControlName=\"defaultAddress\"\n              (change)=\"toggleDefaultAddress()\"\n            />\n            <span class=\"form-check-label\">{{\n              'addressForm.setAsDefault' | cxTranslate\n            }}</span>\n          </label>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"cx-checkout-btns row\">\n    <div class=\"col-md-12 col-lg-6\" *ngIf=\"showCancelBtn\">\n      <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n        {{ cancelBtnLabel || ('addressForm.chooseAddress' | cxTranslate) }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">\n        {{ actionBtnLabel || ('common.continue' | cxTranslate) }}\n      </button>\n    </div>\n  </div>\n</form>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], AddressFormComponent);
export { AddressFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NoZWNrb3V0L2NvbXBvbmVudHMvc2hpcHBpbmctYWRkcmVzcy9hZGRyZXNzLWZvcm0vYWRkcmVzcy1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUNMLE9BQU8sRUFDUCxpQkFBaUIsRUFDakIsdUJBQXVCLEVBQ3ZCLE9BQU8sRUFDUCxVQUFVLEVBQ1Ysb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixNQUFNLEVBQ04sS0FBSyxFQUNMLGtCQUFrQixFQUNsQixXQUFXLEdBQ1osTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsZUFBZSxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUNqRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0QsT0FBTyxFQUNMLFFBQVEsRUFDUixZQUFZLEdBQ2IsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDM0UsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFPcEgsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFvRC9CLFlBQ1ksRUFBZSxFQUNmLHVCQUFnRCxFQUNoRCxXQUF3QixFQUN4QixrQkFBc0MsRUFDdEMsb0JBQTBDLEVBQzFDLFlBQTBCO1FBTDFC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QUNhO0FBR3JCO0lBREMsTUFBTSxFQUFFOzJEQUMrQjtBQUd4QztJQURDLE1BQU0sRUFBRTsyREFDK0I7QUE1QjdCLG9CQUFvQjtJQUxoQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLG9wUEFBNEM7UUFDNUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztHQUNXLG9CQUFvQixDQWdQaEM7U0FoUFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQWRkcmVzcyxcbiAgQWRkcmVzc1ZhbGlkYXRpb24sXG4gIENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICBDb3VudHJ5LFxuICBFcnJvck1vZGVsLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIFJlZ2lvbixcbiAgVGl0bGUsXG4gIFVzZXJBZGRyZXNzU2VydmljZSxcbiAgVXNlclNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIHRha2UsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIE1vZGFsUmVmLFxuICBNb2RhbFNlcnZpY2UsXG59IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL2luZGV4JztcbmltcG9ydCB7IHNvcnRUaXRsZXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zaGFyZWQvdXRpbHMvZm9ybXMvdGl0bGUtdXRpbHMnO1xuaW1wb3J0IHsgU3VnZ2VzdGVkQWRkcmVzc0RpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vc3VnZ2VzdGVkLWFkZHJlc3Nlcy1kaWFsb2cvc3VnZ2VzdGVkLWFkZHJlc3Nlcy1kaWFsb2cuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYWRkcmVzcy1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZHJlc3MtZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRyZXNzRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY291bnRyaWVzJDogT2JzZXJ2YWJsZTxDb3VudHJ5W10+O1xuICB0aXRsZXMkOiBPYnNlcnZhYmxlPFRpdGxlW10+O1xuICByZWdpb25zJDogT2JzZXJ2YWJsZTxSZWdpb25bXT47XG4gIHNlbGVjdGVkQ291bnRyeSQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCcnKTtcblxuICBASW5wdXQoKVxuICBhZGRyZXNzRGF0YTogQWRkcmVzcztcblxuICBASW5wdXQoKVxuICBhY3Rpb25CdG5MYWJlbDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGNhbmNlbEJ0bkxhYmVsOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0QXNEZWZhdWx0RmllbGQgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHNob3dUaXRsZUNvZGU6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgc2hvd0NhbmNlbEJ0biA9IHRydWU7XG5cbiAgQE91dHB1dCgpXG4gIHN1Ym1pdEFkZHJlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAT3V0cHV0KClcbiAgYmFja1RvQWRkcmVzcyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGFkZHJlc3NWZXJpZnlTdWI6IFN1YnNjcmlwdGlvbjtcbiAgcmVnaW9uc1N1YjogU3Vic2NyaXB0aW9uO1xuICBzdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWY6IE1vZGFsUmVmO1xuXG4gIGFkZHJlc3NGb3JtOiBGb3JtR3JvdXAgPSB0aGlzLmZiLmdyb3VwKHtcbiAgICBjb3VudHJ5OiB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGlzb2NvZGU6IFtudWxsLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9KSxcbiAgICB0aXRsZUNvZGU6IFsnJ10sXG4gICAgZmlyc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIGxhc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIGxpbmUxOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIGxpbmUyOiBbJyddLFxuICAgIHRvd246IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgcmVnaW9uOiB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGlzb2NvZGU6IFtudWxsLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9KSxcbiAgICBwb3N0YWxDb2RlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIHBob25lOiAnJyxcbiAgICBkZWZhdWx0QWRkcmVzczogW2ZhbHNlXSxcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGZiOiBGb3JtQnVpbGRlcixcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHVzZXJBZGRyZXNzU2VydmljZTogVXNlckFkZHJlc3NTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBGZXRjaGluZyBjb3VudHJpZXNcbiAgICB0aGlzLmNvdW50cmllcyQgPSB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS5nZXREZWxpdmVyeUNvdW50cmllcygpLnBpcGUoXG4gICAgICB0YXAoKGNvdW50cmllczogQ291bnRyeVtdKSA9PiB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhjb3VudHJpZXMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmxvYWREZWxpdmVyeUNvdW50cmllcygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBGZXRjaGluZyB0aXRsZXNcbiAgICB0aGlzLnRpdGxlcyQgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldFRpdGxlcygpLnBpcGUoXG4gICAgICB0YXAoKHRpdGxlczogVGl0bGVbXSkgPT4ge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModGl0bGVzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvYWRUaXRsZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAoKHRpdGxlcykgPT4ge1xuICAgICAgICB0aXRsZXMuc29ydChzb3J0VGl0bGVzKTtcbiAgICAgICAgY29uc3Qgbm9uZVRpdGxlID0geyBjb2RlOiAnJywgbmFtZTogJ1RpdGxlJyB9O1xuICAgICAgICByZXR1cm4gW25vbmVUaXRsZSwgLi4udGl0bGVzXTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIEZldGNoaW5nIHJlZ2lvbnNcbiAgICB0aGlzLnJlZ2lvbnMkID0gdGhpcy5zZWxlY3RlZENvdW50cnkkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKGNvdW50cnkpID0+IHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmdldFJlZ2lvbnMoY291bnRyeSkpLFxuICAgICAgdGFwKChyZWdpb25zOiBSZWdpb25bXSkgPT4ge1xuICAgICAgICBjb25zdCByZWdpb25Db250cm9sID0gdGhpcy5hZGRyZXNzRm9ybS5nZXQoJ3JlZ2lvbi5pc29jb2RlJyk7XG4gICAgICAgIGlmIChyZWdpb25zICYmIHJlZ2lvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHJlZ2lvbkNvbnRyb2wuZW5hYmxlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVnaW9uQ29udHJvbC5kaXNhYmxlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIHZlcmlmeSB0aGUgbmV3IGFkZGVkIGFkZHJlc3NcbiAgICB0aGlzLmFkZHJlc3NWZXJpZnlTdWIgPSB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlXG4gICAgICAuZ2V0QWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKVxuICAgICAgLnN1YnNjcmliZSgocmVzdWx0czogQWRkcmVzc1ZhbGlkYXRpb24pID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdHMuZGVjaXNpb24gPT09ICdGQUlMJykge1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuY2xlYXJBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cygpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdHMuZGVjaXNpb24gPT09ICdBQ0NFUFQnKSB7XG4gICAgICAgICAgdGhpcy5zdWJtaXRBZGRyZXNzLmVtaXQodGhpcy5hZGRyZXNzRm9ybS52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0cy5kZWNpc2lvbiA9PT0gJ1JFSkVDVCcpIHtcbiAgICAgICAgICAvLyBUT0RPOiBXb3JrYXJvdW5kOiBhbGxvdyBzZXJ2ZXIgZm9yIGRlY2lkZSBpcyB0aXRsZUNvZGUgbWFuZGF0b3J5IChpZiB5ZXMsIHByb3ZpZGUgcGVyc29uYWxpemVkIG1lc3NhZ2UpXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgcmVzdWx0cy5lcnJvcnMuZXJyb3JzLnNvbWUoXG4gICAgICAgICAgICAgIChlcnJvcjogRXJyb3JNb2RlbCkgPT4gZXJyb3Iuc3ViamVjdCA9PT0gJ3RpdGxlQ29kZSdcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICAgICAgICB7IGtleTogJ2FkZHJlc3NGb3JtLnRpdGxlUmVxdWlyZWQnIH0sXG4gICAgICAgICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICAgICAgeyBrZXk6ICdhZGRyZXNzRm9ybS5pbnZhbGlkQWRkcmVzcycgfSxcbiAgICAgICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuY2xlYXJBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cygpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdHMuZGVjaXNpb24gPT09ICdSRVZJRVcnKSB7XG4gICAgICAgICAgdGhpcy5vcGVuU3VnZ2VzdGVkQWRkcmVzcyhyZXN1bHRzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICBpZiAodGhpcy5hZGRyZXNzRGF0YSAmJiBPYmplY3Qua2V5cyh0aGlzLmFkZHJlc3NEYXRhKS5sZW5ndGggIT09IDApIHtcbiAgICAgIHRoaXMuYWRkcmVzc0Zvcm0ucGF0Y2hWYWx1ZSh0aGlzLmFkZHJlc3NEYXRhKTtcblxuICAgICAgdGhpcy5jb3VudHJ5U2VsZWN0ZWQodGhpcy5hZGRyZXNzRGF0YS5jb3VudHJ5KTtcbiAgICAgIGlmICh0aGlzLmFkZHJlc3NEYXRhLnJlZ2lvbikge1xuICAgICAgICB0aGlzLnJlZ2lvblNlbGVjdGVkKHRoaXMuYWRkcmVzc0RhdGEucmVnaW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb3VudHJ5U2VsZWN0ZWQoY291bnRyeTogQ291bnRyeSk6IHZvaWQge1xuICAgIHRoaXMuYWRkcmVzc0Zvcm1bJ2NvbnRyb2xzJ10uY291bnRyeVsnY29udHJvbHMnXS5pc29jb2RlLnNldFZhbHVlKFxuICAgICAgY291bnRyeS5pc29jb2RlXG4gICAgKTtcbiAgICB0aGlzLnNlbGVjdGVkQ291bnRyeSQubmV4dChjb3VudHJ5Lmlzb2NvZGUpO1xuICB9XG5cbiAgcmVnaW9uU2VsZWN0ZWQocmVnaW9uOiBSZWdpb24pOiB2b2lkIHtcbiAgICB0aGlzLmFkZHJlc3NGb3JtWydjb250cm9scyddLnJlZ2lvblsnY29udHJvbHMnXS5pc29jb2RlLnNldFZhbHVlKFxuICAgICAgcmVnaW9uLmlzb2NvZGVcbiAgICApO1xuICB9XG5cbiAgdG9nZ2xlRGVmYXVsdEFkZHJlc3MoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRyZXNzRm9ybVsnY29udHJvbHMnXS5kZWZhdWx0QWRkcmVzcy5zZXRWYWx1ZShcbiAgICAgIHRoaXMuYWRkcmVzc0Zvcm0udmFsdWUuZGVmYXVsdEFkZHJlc3NcbiAgICApO1xuICB9XG5cbiAgYmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLmJhY2tUb0FkZHJlc3MuZW1pdCgpO1xuICB9XG5cbiAgdmVyaWZ5QWRkcmVzcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hZGRyZXNzRm9ybS52YWxpZCkge1xuICAgICAgaWYgKHRoaXMuYWRkcmVzc0Zvcm0uZ2V0KCdyZWdpb24nKS52YWx1ZS5pc29jb2RlKSB7XG4gICAgICAgIHRoaXMucmVnaW9uc1N1YiA9IHRoaXMucmVnaW9ucyQucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKHJlZ2lvbnMpID0+IHtcbiAgICAgICAgICBjb25zdCBvYmogPSByZWdpb25zLmZpbmQoXG4gICAgICAgICAgICAocmVnaW9uKSA9PlxuICAgICAgICAgICAgICByZWdpb24uaXNvY29kZSA9PT1cbiAgICAgICAgICAgICAgdGhpcy5hZGRyZXNzRm9ybS5jb250cm9sc1sncmVnaW9uJ10udmFsdWUuaXNvY29kZVxuICAgICAgICAgICk7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmFkZHJlc3NGb3JtLnZhbHVlLnJlZ2lvbiwge1xuICAgICAgICAgICAgaXNvY29kZVNob3J0OiBvYmouaXNvY29kZVNob3J0LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuYWRkcmVzc0Zvcm0uZGlydHkpIHtcbiAgICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS52ZXJpZnlBZGRyZXNzKHRoaXMuYWRkcmVzc0Zvcm0udmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gYWRkcmVzcyBmb3JtIHZhbHVlIG5vdCBjaGFuZ2VkXG4gICAgICAgIC8vIGlnbm9yZSBkdXBsaWNhdGUgYWRkcmVzc1xuICAgICAgICB0aGlzLnN1Ym1pdEFkZHJlc3MuZW1pdCh1bmRlZmluZWQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZHJlc3NGb3JtLm1hcmtBbGxBc1RvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuICBvcGVuU3VnZ2VzdGVkQWRkcmVzcyhyZXN1bHRzOiBBZGRyZXNzVmFsaWRhdGlvbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5zdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWYpIHtcbiAgICAgIHRoaXMuc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihcbiAgICAgICAgU3VnZ2VzdGVkQWRkcmVzc0RpYWxvZ0NvbXBvbmVudCxcbiAgICAgICAgeyBjZW50ZXJlZDogdHJ1ZSwgc2l6ZTogJ2xnJyB9XG4gICAgICApO1xuICAgICAgdGhpcy5zdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWYuY29tcG9uZW50SW5zdGFuY2UuZW50ZXJlZEFkZHJlc3MgPSB0aGlzLmFkZHJlc3NGb3JtLnZhbHVlO1xuICAgICAgdGhpcy5zdWdnZXN0ZWRBZGRyZXNzTW9kYWxSZWYuY29tcG9uZW50SW5zdGFuY2Uuc3VnZ2VzdGVkQWRkcmVzc2VzID1cbiAgICAgICAgcmVzdWx0cy5zdWdnZXN0ZWRBZGRyZXNzZXM7XG4gICAgICB0aGlzLnN1Z2dlc3RlZEFkZHJlc3NNb2RhbFJlZi5yZXN1bHRcbiAgICAgICAgLnRoZW4oKGFkZHJlc3MpID0+IHtcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLmNsZWFyQWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKTtcbiAgICAgICAgICBpZiAoYWRkcmVzcykge1xuICAgICAgICAgICAgYWRkcmVzcyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZUNvZGU6IHRoaXMuYWRkcmVzc0Zvcm0udmFsdWUudGl0bGVDb2RlLFxuICAgICAgICAgICAgICAgIHBob25lOiB0aGlzLmFkZHJlc3NGb3JtLnZhbHVlLnBob25lLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBhZGRyZXNzXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5zdWJtaXRBZGRyZXNzLmVtaXQoYWRkcmVzcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmID0gbnVsbDtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAvLyB0aGlzICBjYWxsYmFjayBpcyBjYWxsZWQgd2hlbiBtb2RhbCBpcyBjbG9zZWQgd2l0aCBFc2Mga2V5IG9yIGNsaWNraW5nIGJhY2tkcm9wXG4gICAgICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5jbGVhckFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzKCk7XG4gICAgICAgICAgY29uc3QgYWRkcmVzcyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXMuYWRkcmVzc0Zvcm0udmFsdWVcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuc3VibWl0QWRkcmVzcy5lbWl0KGFkZHJlc3MpO1xuICAgICAgICAgIHRoaXMuc3VnZ2VzdGVkQWRkcmVzc01vZGFsUmVmID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5jbGVhckFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzKCk7XG5cbiAgICBpZiAodGhpcy5hZGRyZXNzVmVyaWZ5U3ViKSB7XG4gICAgICB0aGlzLmFkZHJlc3NWZXJpZnlTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yZWdpb25zU3ViKSB7XG4gICAgICB0aGlzLnJlZ2lvbnNTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==