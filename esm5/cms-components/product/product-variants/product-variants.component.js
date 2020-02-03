/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { VariantType } from '@spartacus/core';
import { CurrentProductService } from '../current-product.service';
import { tap, filter, distinctUntilChanged } from 'rxjs/operators';
var ProductVariantsComponent = /** @class */ (function () {
    function ProductVariantsComponent(currentProductService) {
        this.currentProductService = currentProductService;
        this.variants = [];
        this.variantType = VariantType;
    }
    /**
     * @return {?}
     */
    ProductVariantsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.product$ = this.currentProductService.getProduct().pipe(filter((/**
         * @param {?} product
         * @return {?}
         */
        function (product) { return !!(product && product.baseOptions); })), distinctUntilChanged(), tap((/**
         * @param {?} product
         * @return {?}
         */
        function (product) {
            product.baseOptions.forEach((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                if (option && option.variantType) {
                    _this.variants[option.variantType] = option;
                }
            }));
        })));
    };
    ProductVariantsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-variants',
                    template: "<ng-container *ngIf=\"product$ | async as product\">\n  <div class=\"variant-section\" *ngIf=\"product.baseOptions?.length\">\n    <cx-variant-style-selector\n      *ngIf=\"variants[variantType.STYLE]\"\n      [variants]=\"variants[variantType.STYLE]\"\n    ></cx-variant-style-selector>\n    <cx-variant-size-selector\n      *ngIf=\"variants[variantType.SIZE]\"\n      [product]=\"product\"\n      [variants]=\"variants[variantType.SIZE]\"\n    ></cx-variant-size-selector>\n    <cx-variant-color-selector\n      *ngIf=\"variants[variantType.COLOR]\"\n      [product]=\"product\"\n      [variants]=\"variants[variantType.COLOR]\"\n    ></cx-variant-color-selector>\n  </div>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ProductVariantsComponent.ctorParameters = function () { return [
        { type: CurrentProductService }
    ]; };
    return ProductVariantsComponent;
}());
export { ProductVariantsComponent };
if (false) {
    /** @type {?} */
    ProductVariantsComponent.prototype.variants;
    /** @type {?} */
    ProductVariantsComponent.prototype.variantType;
    /** @type {?} */
    ProductVariantsComponent.prototype.product$;
    /**
     * @type {?}
     * @private
     */
    ProductVariantsComponent.prototype.currentProductService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12YXJpYW50cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtdmFyaWFudHMvcHJvZHVjdC12YXJpYW50cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUF1QixXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVuRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5FO0lBTUUsa0NBQW9CLHFCQUE0QztRQUE1QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBRWhFLGFBQVEsR0FBaUIsRUFBRSxDQUFDO1FBQzVCLGdCQUFXLEdBQUcsV0FBVyxDQUFDO0lBSHlDLENBQUM7Ozs7SUFNcEUsMkNBQVE7OztJQUFSO1FBQUEsaUJBWUM7UUFYQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQzFELE1BQU07Ozs7UUFBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQWxDLENBQWtDLEVBQUMsRUFDckQsb0JBQW9CLEVBQUUsRUFDdEIsR0FBRzs7OztRQUFDLFVBQUEsT0FBTztZQUNULE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTzs7OztZQUFDLFVBQUEsTUFBTTtnQkFDaEMsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLFdBQVcsRUFBRTtvQkFDaEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsTUFBTSxDQUFDO2lCQUM1QztZQUNILENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7O2dCQXhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0Isa3NCQUFnRDtvQkFDaEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQVBRLHFCQUFxQjs7SUE0QjlCLCtCQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0FwQlksd0JBQXdCOzs7SUFHbkMsNENBQTRCOztJQUM1QiwrQ0FBMEI7O0lBQzFCLDRDQUE4Qjs7Ozs7SUFKbEIseURBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0LCBCYXNlT3B0aW9uLCBWYXJpYW50VHlwZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDdXJyZW50UHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi9jdXJyZW50LXByb2R1Y3Quc2VydmljZSc7XG5pbXBvcnQgeyB0YXAsIGZpbHRlciwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtdmFyaWFudHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC12YXJpYW50cy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0VmFyaWFudHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGN1cnJlbnRQcm9kdWN0U2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlKSB7fVxuXG4gIHZhcmlhbnRzOiBCYXNlT3B0aW9uW10gPSBbXTtcbiAgdmFyaWFudFR5cGUgPSBWYXJpYW50VHlwZTtcbiAgcHJvZHVjdCQ6IE9ic2VydmFibGU8UHJvZHVjdD47XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5wcm9kdWN0JCA9IHRoaXMuY3VycmVudFByb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3QoKS5waXBlKFxuICAgICAgZmlsdGVyKHByb2R1Y3QgPT4gISEocHJvZHVjdCAmJiBwcm9kdWN0LmJhc2VPcHRpb25zKSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgdGFwKHByb2R1Y3QgPT4ge1xuICAgICAgICBwcm9kdWN0LmJhc2VPcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi52YXJpYW50VHlwZSkge1xuICAgICAgICAgICAgdGhpcy52YXJpYW50c1tvcHRpb24udmFyaWFudFR5cGVdID0gb3B0aW9uO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==