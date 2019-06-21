/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OccConfig, RoutingService, } from '@spartacus/core';
import { CurrentProductService } from '../current-product.service';
var ProductVariantSelectorComponent = /** @class */ (function () {
    function ProductVariantSelectorComponent(routingService, currentProductService, config) {
        this.routingService = routingService;
        this.currentProductService = currentProductService;
        this.config = config;
        this.product$ = this.currentProductService.getProduct();
        this.sizeGuideLabel = 'Style Guide';
        this.baseUrl = this.config.backend.occ.baseUrl;
    }
    /**
     * @param {?} variant
     * @return {?}
     */
    ProductVariantSelectorComponent.prototype.getVariantName = /**
     * @param {?} variant
     * @return {?}
     */
    function (variant) {
        return variant.variantType.toLowerCase().includes('style')
            ? 'Style'
            : 'Size';
    };
    /**
     * @param {?} selected
     * @return {?}
     */
    ProductVariantSelectorComponent.prototype.getSelectedVariantValue = /**
     * @param {?} selected
     * @return {?}
     */
    function (selected) {
        return selected.variantOptionQualifiers[0].value;
    };
    /**
     * @param {?} url
     * @return {?}
     */
    ProductVariantSelectorComponent.prototype.routeToVariant = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        this.routingService.goByUrl(url);
        return null;
    };
    ProductVariantSelectorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-variant-selector',
                    template: "<div class=\"variant-section\" *ngIf=\"(product$ | async) as product\">\n  <div\n    class=\"variant-selector\"\n    *ngFor=\"let variant of product.baseOptions; let i = index\"\n  >\n    <ng-container\n      [ngTemplateOutlet]=\"\n        variant.variantType.toLowerCase().includes('style')\n          ? styleSelector\n          : sizeSelector\n      \"\n      [ngTemplateOutletContext]=\"{ variant: variant }\"\n    ></ng-container>\n  </div>\n\n  <ng-template #styleSelector let-variant=\"variant\">\n    <div class=\"variant-name\">\n      {{ getVariantName(variant)\n      }}<span class=\"variant-selected styleName\"\n        >: {{ getSelectedVariantValue(variant.selected) }}</span\n      >\n    </div>\n    <ul class=\"variant-list\">\n      <li *ngFor=\"let option of variant.options\">\n        <a\n          [routerLink]=\"\n            { cxRoute: 'product', params: { code: option.code } } | cxUrl\n          \"\n          class=\"colorVariant\"\n        >\n          <img\n            src=\"{{ baseUrl }}{{ option.variantOptionQualifiers[0].image.url }}\"\n            title=\"{{ option.variantOptionQualifiers[0].value }}\"\n            alt=\"{{ option.variantOptionQualifiers[0].value }}\"\n          />\n        </a>\n      </li>\n    </ul>\n  </ng-template>\n\n  <ng-template #sizeSelector let-variant=\"variant\">\n    <div class=\"variant-name\">\n      {{ getVariantName(variant)\n      }}<span class=\"variant-selected styleName\"\n        >: {{ getSelectedVariantValue(variant.selected) }}</span\n      >\n    </div>\n    <select\n      (change)=\"routeToVariant($event.target.value)\"\n      id=\"{{ getVariantName(variant) }}\"\n      class=\"form-control variant-select\"\n    >\n      <option\n        *ngFor=\"let option of variant.options\"\n        value=\"{{ option.url }}\"\n        [selected]=\"option.code === product.code\"\n        >{{ option.variantOptionQualifiers[0].value }}</option\n      >\n    </select>\n    <a href=\"#\" class=\"size-guide\" title=\"{{ sizeGuideLabel }}\">{{\n      sizeGuideLabel\n    }}</a>\n  </ng-template>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ProductVariantSelectorComponent.ctorParameters = function () { return [
        { type: RoutingService },
        { type: CurrentProductService },
        { type: OccConfig }
    ]; };
    return ProductVariantSelectorComponent;
}());
export { ProductVariantSelectorComponent };
if (false) {
    /** @type {?} */
    ProductVariantSelectorComponent.prototype.product$;
    /** @type {?} */
    ProductVariantSelectorComponent.prototype.sizeGuideLabel;
    /** @type {?} */
    ProductVariantSelectorComponent.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    ProductVariantSelectorComponent.prototype.routingService;
    /**
     * @type {?}
     * @private
     */
    ProductVariantSelectorComponent.prototype.currentProductService;
    /**
     * @type {?}
     * @private
     */
    ProductVariantSelectorComponent.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12YXJpYW50LXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC12YXJpYW50LXNlbGVjdG9yL3Byb2R1Y3QtdmFyaWFudC1zZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUNMLFNBQVMsRUFFVCxjQUFjLEdBRWYsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVuRTtJQU1FLHlDQUNVLGNBQThCLEVBQzlCLHFCQUE0QyxFQUM1QyxNQUFpQjtRQUZqQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1QyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBRzNCLGFBQVEsR0FBd0IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3hFLG1CQUFjLEdBQUcsYUFBYSxDQUFDO1FBQy9CLFlBQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBSnZDLENBQUM7Ozs7O0lBTUosd0RBQWM7Ozs7SUFBZCxVQUFlLE9BQU87UUFDcEIsT0FBTyxPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDeEQsQ0FBQyxDQUFDLE9BQU87WUFDVCxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ2IsQ0FBQzs7Ozs7SUFFRCxpRUFBdUI7Ozs7SUFBdkIsVUFBd0IsUUFBdUI7UUFDN0MsT0FBTyxRQUFRLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ25ELENBQUM7Ozs7O0lBRUQsd0RBQWM7Ozs7SUFBZCxVQUFlLEdBQVc7UUFDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOztnQkE3QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLDZpRUFBd0Q7b0JBQ3hELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFWQyxjQUFjO2dCQUlQLHFCQUFxQjtnQkFONUIsU0FBUzs7SUFzQ1gsc0NBQUM7Q0FBQSxBQTlCRCxJQThCQztTQXpCWSwrQkFBK0I7OztJQU8xQyxtREFBd0U7O0lBQ3hFLHlEQUErQjs7SUFDL0Isa0RBQTBDOzs7OztJQVB4Qyx5REFBc0M7Ozs7O0lBQ3RDLGdFQUFvRDs7Ozs7SUFDcEQsaURBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgT2NjQ29uZmlnLFxuICBQcm9kdWN0LFxuICBSb3V0aW5nU2VydmljZSxcbiAgVmFyaWFudE9wdGlvbixcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uL2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC12YXJpYW50LXNlbGVjdG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtdmFyaWFudC1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0VmFyaWFudFNlbGVjdG9yQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjdXJyZW50UHJvZHVjdFNlcnZpY2U6IEN1cnJlbnRQcm9kdWN0U2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZzogT2NjQ29uZmlnXG4gICkge31cblxuICBwcm9kdWN0JDogT2JzZXJ2YWJsZTxQcm9kdWN0PiA9IHRoaXMuY3VycmVudFByb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3QoKTtcbiAgc2l6ZUd1aWRlTGFiZWwgPSAnU3R5bGUgR3VpZGUnO1xuICBiYXNlVXJsID0gdGhpcy5jb25maWcuYmFja2VuZC5vY2MuYmFzZVVybDtcblxuICBnZXRWYXJpYW50TmFtZSh2YXJpYW50KSB7XG4gICAgcmV0dXJuIHZhcmlhbnQudmFyaWFudFR5cGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnc3R5bGUnKVxuICAgICAgPyAnU3R5bGUnXG4gICAgICA6ICdTaXplJztcbiAgfVxuXG4gIGdldFNlbGVjdGVkVmFyaWFudFZhbHVlKHNlbGVjdGVkOiBWYXJpYW50T3B0aW9uKTogc3RyaW5nIHtcbiAgICByZXR1cm4gc2VsZWN0ZWQudmFyaWFudE9wdGlvblF1YWxpZmllcnNbMF0udmFsdWU7XG4gIH1cblxuICByb3V0ZVRvVmFyaWFudCh1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ29CeVVybCh1cmwpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iXX0=