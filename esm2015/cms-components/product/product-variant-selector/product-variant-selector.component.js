/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OccConfig, RoutingService, } from '@spartacus/core';
import { CurrentProductService } from '../current-product.service';
export class ProductVariantSelectorComponent {
    /**
     * @param {?} routingService
     * @param {?} currentProductService
     * @param {?} config
     */
    constructor(routingService, currentProductService, config) {
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
    getVariantName(variant) {
        return variant.variantType.toLowerCase().includes('style')
            ? 'Style'
            : 'Size';
    }
    /**
     * @param {?} selected
     * @return {?}
     */
    getSelectedVariantValue(selected) {
        return selected.variantOptionQualifiers[0].value;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    routeToVariant(url) {
        this.routingService.goByUrl(url);
        return null;
    }
}
ProductVariantSelectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-variant-selector',
                template: "<div class=\"variant-section\" *ngIf=\"(product$ | async) as product\">\n  <div\n    class=\"variant-selector\"\n    *ngFor=\"let variant of product.baseOptions; let i = index\"\n  >\n    <ng-container\n      [ngTemplateOutlet]=\"\n        variant.variantType.toLowerCase().includes('style')\n          ? styleSelector\n          : sizeSelector\n      \"\n      [ngTemplateOutletContext]=\"{ variant: variant }\"\n    ></ng-container>\n  </div>\n\n  <ng-template #styleSelector let-variant=\"variant\">\n    <div class=\"variant-name\">\n      {{ getVariantName(variant)\n      }}<span class=\"variant-selected styleName\"\n        >: {{ getSelectedVariantValue(variant.selected) }}</span\n      >\n    </div>\n    <ul class=\"variant-list\">\n      <li *ngFor=\"let option of variant.options\">\n        <a\n          [routerLink]=\"\n            { cxRoute: 'product', params: { code: option.code } } | cxUrl\n          \"\n          class=\"colorVariant\"\n        >\n          <img\n            src=\"{{ baseUrl }}{{ option.variantOptionQualifiers[0].image.url }}\"\n            title=\"{{ option.variantOptionQualifiers[0].value }}\"\n            alt=\"{{ option.variantOptionQualifiers[0].value }}\"\n          />\n        </a>\n      </li>\n    </ul>\n  </ng-template>\n\n  <ng-template #sizeSelector let-variant=\"variant\">\n    <div class=\"variant-name\">\n      {{ getVariantName(variant)\n      }}<span class=\"variant-selected styleName\"\n        >: {{ getSelectedVariantValue(variant.selected) }}</span\n      >\n    </div>\n    <select\n      (change)=\"routeToVariant($event.target.value)\"\n      id=\"{{ getVariantName(variant) }}\"\n      class=\"form-control variant-select\"\n    >\n      <option\n        *ngFor=\"let option of variant.options\"\n        value=\"{{ option.url }}\"\n        [selected]=\"option.code === product.code\"\n        >{{ option.variantOptionQualifiers[0].value }}</option\n      >\n    </select>\n    <a href=\"#\" class=\"size-guide\" title=\"{{ sizeGuideLabel }}\">{{\n      sizeGuideLabel\n    }}</a>\n  </ng-template>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ProductVariantSelectorComponent.ctorParameters = () => [
    { type: RoutingService },
    { type: CurrentProductService },
    { type: OccConfig }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12YXJpYW50LXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC12YXJpYW50LXNlbGVjdG9yL3Byb2R1Y3QtdmFyaWFudC1zZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUNMLFNBQVMsRUFFVCxjQUFjLEdBRWYsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQU9uRSxNQUFNLE9BQU8sK0JBQStCOzs7Ozs7SUFDMUMsWUFDVSxjQUE4QixFQUM5QixxQkFBNEMsRUFDNUMsTUFBaUI7UUFGakIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUczQixhQUFRLEdBQXdCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN4RSxtQkFBYyxHQUFHLGFBQWEsQ0FBQztRQUMvQixZQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUp2QyxDQUFDOzs7OztJQU1KLGNBQWMsQ0FBQyxPQUFPO1FBQ3BCLE9BQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBQ3hELENBQUMsQ0FBQyxPQUFPO1lBQ1QsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNiLENBQUM7Ozs7O0lBRUQsdUJBQXVCLENBQUMsUUFBdUI7UUFDN0MsT0FBTyxRQUFRLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ25ELENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLEdBQVc7UUFDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7WUE3QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLDZpRUFBd0Q7Z0JBQ3hELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBVkMsY0FBYztZQUlQLHFCQUFxQjtZQU41QixTQUFTOzs7O0lBb0JULG1EQUF3RTs7SUFDeEUseURBQStCOztJQUMvQixrREFBMEM7Ozs7O0lBUHhDLHlEQUFzQzs7Ozs7SUFDdEMsZ0VBQW9EOzs7OztJQUNwRCxpREFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBPY2NDb25maWcsXG4gIFByb2R1Y3QsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBWYXJpYW50T3B0aW9uLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vY3VycmVudC1wcm9kdWN0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LXZhcmlhbnQtc2VsZWN0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC12YXJpYW50LXNlbGVjdG9yLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RWYXJpYW50U2VsZWN0b3JDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcml2YXRlIGN1cnJlbnRQcm9kdWN0U2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgY29uZmlnOiBPY2NDb25maWdcbiAgKSB7fVxuXG4gIHByb2R1Y3QkOiBPYnNlcnZhYmxlPFByb2R1Y3Q+ID0gdGhpcy5jdXJyZW50UHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdCgpO1xuICBzaXplR3VpZGVMYWJlbCA9ICdTdHlsZSBHdWlkZSc7XG4gIGJhc2VVcmwgPSB0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5iYXNlVXJsO1xuXG4gIGdldFZhcmlhbnROYW1lKHZhcmlhbnQpIHtcbiAgICByZXR1cm4gdmFyaWFudC52YXJpYW50VHlwZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdzdHlsZScpXG4gICAgICA/ICdTdHlsZSdcbiAgICAgIDogJ1NpemUnO1xuICB9XG5cbiAgZ2V0U2VsZWN0ZWRWYXJpYW50VmFsdWUoc2VsZWN0ZWQ6IFZhcmlhbnRPcHRpb24pOiBzdHJpbmcge1xuICAgIHJldHVybiBzZWxlY3RlZC52YXJpYW50T3B0aW9uUXVhbGlmaWVyc1swXS52YWx1ZTtcbiAgfVxuXG4gIHJvdXRlVG9WYXJpYW50KHVybDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nb0J5VXJsKHVybCk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiJdfQ==