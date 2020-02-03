/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { VariantType } from '@spartacus/core';
import { CurrentProductService } from '../current-product.service';
import { tap, filter, distinctUntilChanged } from 'rxjs/operators';
export class ProductVariantsComponent {
    /**
     * @param {?} currentProductService
     */
    constructor(currentProductService) {
        this.currentProductService = currentProductService;
        this.variants = [];
        this.variantType = VariantType;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.product$ = this.currentProductService.getProduct().pipe(filter((/**
         * @param {?} product
         * @return {?}
         */
        product => !!(product && product.baseOptions))), distinctUntilChanged(), tap((/**
         * @param {?} product
         * @return {?}
         */
        product => {
            product.baseOptions.forEach((/**
             * @param {?} option
             * @return {?}
             */
            option => {
                if (option && option.variantType) {
                    this.variants[option.variantType] = option;
                }
            }));
        })));
    }
}
ProductVariantsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-variants',
                template: "<ng-container *ngIf=\"product$ | async as product\">\n  <div class=\"variant-section\" *ngIf=\"product.baseOptions?.length\">\n    <cx-variant-style-selector\n      *ngIf=\"variants[variantType.STYLE]\"\n      [variants]=\"variants[variantType.STYLE]\"\n    ></cx-variant-style-selector>\n    <cx-variant-size-selector\n      *ngIf=\"variants[variantType.SIZE]\"\n      [product]=\"product\"\n      [variants]=\"variants[variantType.SIZE]\"\n    ></cx-variant-size-selector>\n    <cx-variant-color-selector\n      *ngIf=\"variants[variantType.COLOR]\"\n      [product]=\"product\"\n      [variants]=\"variants[variantType.COLOR]\"\n    ></cx-variant-color-selector>\n  </div>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ProductVariantsComponent.ctorParameters = () => [
    { type: CurrentProductService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12YXJpYW50cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtdmFyaWFudHMvcHJvZHVjdC12YXJpYW50cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUF1QixXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVuRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBT25FLE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUFDbkMsWUFBb0IscUJBQTRDO1FBQTVDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFFaEUsYUFBUSxHQUFpQixFQUFFLENBQUM7UUFDNUIsZ0JBQVcsR0FBRyxXQUFXLENBQUM7SUFIeUMsQ0FBQzs7OztJQU1wRSxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUMxRCxNQUFNOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFDLEVBQ3JELG9CQUFvQixFQUFFLEVBQ3RCLEdBQUc7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNaLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTzs7OztZQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNuQyxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsV0FBVyxFQUFFO29CQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxNQUFNLENBQUM7aUJBQzVDO1lBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7O1lBeEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixrc0JBQWdEO2dCQUNoRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQVBRLHFCQUFxQjs7OztJQVc1Qiw0Q0FBNEI7O0lBQzVCLCtDQUEwQjs7SUFDMUIsNENBQThCOzs7OztJQUpsQix5REFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3QsIEJhc2VPcHRpb24sIFZhcmlhbnRUeXBlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uL2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcbmltcG9ydCB7IHRhcCwgZmlsdGVyLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC12YXJpYW50cycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LXZhcmlhbnRzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RWYXJpYW50c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY3VycmVudFByb2R1Y3RTZXJ2aWNlOiBDdXJyZW50UHJvZHVjdFNlcnZpY2UpIHt9XG5cbiAgdmFyaWFudHM6IEJhc2VPcHRpb25bXSA9IFtdO1xuICB2YXJpYW50VHlwZSA9IFZhcmlhbnRUeXBlO1xuICBwcm9kdWN0JDogT2JzZXJ2YWJsZTxQcm9kdWN0PjtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnByb2R1Y3QkID0gdGhpcy5jdXJyZW50UHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdCgpLnBpcGUoXG4gICAgICBmaWx0ZXIocHJvZHVjdCA9PiAhIShwcm9kdWN0ICYmIHByb2R1Y3QuYmFzZU9wdGlvbnMpKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICB0YXAocHJvZHVjdCA9PiB7XG4gICAgICAgIHByb2R1Y3QuYmFzZU9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLnZhcmlhbnRUeXBlKSB7XG4gICAgICAgICAgICB0aGlzLnZhcmlhbnRzW29wdGlvbi52YXJpYW50VHlwZV0gPSBvcHRpb247XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19