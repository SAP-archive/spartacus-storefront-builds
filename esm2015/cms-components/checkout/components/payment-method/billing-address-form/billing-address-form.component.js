/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserAddressService } from '@spartacus/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
export class BillingAddressFormComponent {
    /**
     * @param {?} userAddressService
     */
    constructor(userAddressService) {
        this.userAddressService = userAddressService;
        this.selectedCountry$ = new BehaviorSubject('');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.regions$ = this.selectedCountry$.pipe(switchMap((/**
         * @param {?} country
         * @return {?}
         */
        country => this.userAddressService.getRegions(country))), tap((/**
         * @param {?} regions
         * @return {?}
         */
        regions => {
            /** @type {?} */
            const regionControl = this.billingAddress.get('region.isocodeShort');
            if (regions.length > 0) {
                regionControl.enable();
            }
            else {
                regionControl.disable();
            }
        })));
    }
    /**
     * @param {?} country
     * @return {?}
     */
    countrySelected(country) {
        this.billingAddress['controls'].country['controls'].isocode.setValue(country.isocode);
        this.selectedCountry$.next(country.isocode);
    }
    /**
     * @param {?} region
     * @return {?}
     */
    regionSelected(region) {
        this.billingAddress['controls'].region['controls'].isocodeShort.setValue(region.isocodeShort);
    }
}
BillingAddressFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-billing-address-form',
                template: "<div [formGroup]=\"billingAddress\">\n  <div class=\"form-group\">\n    <ng-container *ngIf=\"(countries$ | async) as countries\">\n      <div *ngIf=\"countries.length !== 0\">\n        <label aria-required=\"true\">\n          <span class=\"label-content required\">{{\n            'addressForm.country' | cxTranslate\n          }}</span>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"countries\"\n            bindLabel=\"name\"\n            bindValue=\"isocode\"\n            placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n            (change)=\"countrySelected($event)\"\n          >\n          </ng-select>\n        </label>\n      </div>\n    </ng-container>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content required\">{{\n        'addressForm.firstName.label' | cxTranslate\n      }}</span>\n      <input\n        class=\"form-control\"\n        type=\"text\"\n        required\n        placeholder=\"{{ 'addressForm.firstName.placeholder' | cxTranslate }}\"\n        formControlName=\"firstName\"\n      />\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content required\">{{\n        'addressForm.lastName.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        required\n        placeholder=\"{{ 'addressForm.lastName.placeholder' | cxTranslate }}\"\n        formControlName=\"lastName\"\n      />\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content required\">{{\n        'addressForm.address1' | cxTranslate\n      }}</span>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        required\n        placeholder=\"{{ 'addressForm.streetAddress' | cxTranslate }}\"\n        formControlName=\"line1\"\n      />\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'addressForm.address2' | cxTranslate\n      }}</span>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        placeholder=\"{{ 'addressForm.aptSuite' | cxTranslate }}\"\n        formControlName=\"line2\"\n      />\n    </label>\n  </div>\n  <div class=\"row\">\n    <div class=\"form-group col-md-6\">\n      <label>\n        <span class=\"label-content required\">{{\n          'addressForm.city.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          required\n          placeholder=\"{{ 'addressForm.city.placeholder' | cxTranslate }}\"\n          formControlName=\"town\"\n        />\n      </label>\n    </div>\n    <div class=\"form-group col-md-6\">\n      <ng-container\n        *ngIf=\"(regions$ | async) as regions\"\n        formGroupName=\"region\"\n      >\n        <div *ngIf=\"regions.length !== 0\">\n          <label aria-required=\"true\">\n            <span class=\"label-content required\">{{\n              'addressForm.state' | cxTranslate\n            }}</span>\n            <ng-select\n              class=\"region-select\"\n              formControlName=\"isocodeShort\"\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"regions\"\n              bindLabel=\"{{ regions[0].name ? 'name' : 'isocodeShort' }}\"\n              bindValue=\"{{ regions[0].name ? 'isocodeShort' : 'region' }}\"\n              placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n              (change)=\"regionSelected($event)\"\n            >\n            </ng-select>\n          </label>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"form-group col-md-6\">\n      <label>\n        <span class=\"label-content required\">{{\n          'addressForm.zipCode.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          required\n          placeholder=\"{{ 'addressForm.zipCode.placeholder' | cxTranslate }}\"\n          formControlName=\"postalCode\"\n        />\n      </label>\n    </div>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
BillingAddressFormComponent.ctorParameters = () => [
    { type: UserAddressService }
];
BillingAddressFormComponent.propDecorators = {
    billingAddress: [{ type: Input }],
    countries$: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BillingAddressFormComponent.prototype.regions$;
    /** @type {?} */
    BillingAddressFormComponent.prototype.billingAddress;
    /** @type {?} */
    BillingAddressFormComponent.prototype.countries$;
    /** @type {?} */
    BillingAddressFormComponent.prototype.selectedCountry$;
    /**
     * @type {?}
     * @protected
     */
    BillingAddressFormComponent.prototype.userAddressService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy1hZGRyZXNzLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9wYXltZW50LW1ldGhvZC9iaWxsaW5nLWFkZHJlc3MtZm9ybS9iaWxsaW5nLWFkZHJlc3MtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssR0FFTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFtQixrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPaEQsTUFBTSxPQUFPLDJCQUEyQjs7OztJQVV0QyxZQUFzQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUY1RCxxQkFBZ0IsR0FBNEIsSUFBSSxlQUFlLENBQVMsRUFBRSxDQUFDLENBQUM7SUFFYixDQUFDOzs7O0lBRWhFLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQ3hDLFNBQVM7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUMsRUFDakUsR0FBRzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFOztrQkFDTixhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUM7WUFDcEUsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDdEIsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ3hCO2lCQUFNO2dCQUNMLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUN6QjtRQUNILENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxPQUFnQjtRQUM5QixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUNsRSxPQUFPLENBQUMsT0FBTyxDQUNoQixDQUFDO1FBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsTUFBYztRQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUN0RSxNQUFNLENBQUMsWUFBWSxDQUNwQixDQUFDO0lBQ0osQ0FBQzs7O1lBMUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxvb0lBQW9EO2dCQUNwRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQVJ5QixrQkFBa0I7Ozs2QkFZekMsS0FBSzt5QkFHTCxLQUFLOzs7O0lBTE4sK0NBQStCOztJQUUvQixxREFDMEI7O0lBRTFCLGlEQUNrQzs7SUFDbEMsdURBQTRFOzs7OztJQUVoRSx5REFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvdW50cnksIFJlZ2lvbiwgVXNlckFkZHJlc3NTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWJpbGxpbmctYWRkcmVzcy1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JpbGxpbmctYWRkcmVzcy1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEJpbGxpbmdBZGRyZXNzRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHJlZ2lvbnMkOiBPYnNlcnZhYmxlPFJlZ2lvbltdPjtcblxuICBASW5wdXQoKVxuICBiaWxsaW5nQWRkcmVzczogRm9ybUdyb3VwO1xuXG4gIEBJbnB1dCgpXG4gIGNvdW50cmllcyQ6IE9ic2VydmFibGU8Q291bnRyeVtdPjtcbiAgc2VsZWN0ZWRDb3VudHJ5JDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oJycpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB1c2VyQWRkcmVzc1NlcnZpY2U6IFVzZXJBZGRyZXNzU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlZ2lvbnMkID0gdGhpcy5zZWxlY3RlZENvdW50cnkkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoY291bnRyeSA9PiB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS5nZXRSZWdpb25zKGNvdW50cnkpKSxcbiAgICAgIHRhcChyZWdpb25zID0+IHtcbiAgICAgICAgY29uc3QgcmVnaW9uQ29udHJvbCA9IHRoaXMuYmlsbGluZ0FkZHJlc3MuZ2V0KCdyZWdpb24uaXNvY29kZVNob3J0Jyk7XG4gICAgICAgIGlmIChyZWdpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICByZWdpb25Db250cm9sLmVuYWJsZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlZ2lvbkNvbnRyb2wuZGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBjb3VudHJ5U2VsZWN0ZWQoY291bnRyeTogQ291bnRyeSk6IHZvaWQge1xuICAgIHRoaXMuYmlsbGluZ0FkZHJlc3NbJ2NvbnRyb2xzJ10uY291bnRyeVsnY29udHJvbHMnXS5pc29jb2RlLnNldFZhbHVlKFxuICAgICAgY291bnRyeS5pc29jb2RlXG4gICAgKTtcbiAgICB0aGlzLnNlbGVjdGVkQ291bnRyeSQubmV4dChjb3VudHJ5Lmlzb2NvZGUpO1xuICB9XG5cbiAgcmVnaW9uU2VsZWN0ZWQocmVnaW9uOiBSZWdpb24pOiB2b2lkIHtcbiAgICB0aGlzLmJpbGxpbmdBZGRyZXNzWydjb250cm9scyddLnJlZ2lvblsnY29udHJvbHMnXS5pc29jb2RlU2hvcnQuc2V0VmFsdWUoXG4gICAgICByZWdpb24uaXNvY29kZVNob3J0XG4gICAgKTtcbiAgfVxufVxuIl19