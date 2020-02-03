/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RoutingService, VariantQualifier, ProductService, ProductScope, } from '@spartacus/core';
import { filter, take } from 'rxjs/operators';
export class VariantSizeSelectorComponent {
    /**
     * @param {?} productService
     * @param {?} routingService
     */
    constructor(productService, routingService) {
        this.productService = productService;
        this.routingService = routingService;
    }
    /**
     * @param {?} code
     * @return {?}
     */
    changeSize(code) {
        if (code) {
            this.productService
                .get(code, ProductScope.LIST)
                .pipe(
            // below call might looks redundant but in fact this data is going to be loaded anyways
            // we're just calling it earlier and storing
            filter(Boolean), take(1))
                .subscribe((/**
             * @param {?} product
             * @return {?}
             */
            (product) => {
                this.routingService.go({
                    cxRoute: 'product',
                    params: product,
                });
            }));
        }
        return null;
    }
    /**
     * @param {?} qualifiers
     * @return {?}
     */
    getVariantOptionValue(qualifiers) {
        /** @type {?} */
        const obj = qualifiers.find((/**
         * @param {?} q
         * @return {?}
         */
        q => q.qualifier === VariantQualifier.SIZE));
        return obj ? obj.value : '';
    }
}
VariantSizeSelectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-variant-size-selector',
                template: "<ng-container>\n  <div class=\"variant-selector\">\n    <div class=\"variant-name\">{{ 'variant.size' | cxTranslate }}:</div>\n    <select\n      (change)=\"changeSize($event.target.value)\"\n      class=\"form-control variant-select\"\n    >\n      <option\n        *ngFor=\"let v of variants?.options\"\n        value=\"{{ v.code }}\"\n        [selected]=\"v.code === product?.code\"\n        >{{ getVariantOptionValue(v.variantOptionQualifiers) }}</option\n      >\n    </select>\n    <a\n      href=\"#\"\n      class=\"size-guide\"\n      title=\"{{ 'variant.sizeGuideLabel' | cxTranslate }}\"\n    >\n      {{ 'variant.sizeGuideLabel' | cxTranslate }}\n    </a>\n  </div>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
VariantSizeSelectorComponent.ctorParameters = () => [
    { type: ProductService },
    { type: RoutingService }
];
VariantSizeSelectorComponent.propDecorators = {
    product: [{ type: Input }],
    variants: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    VariantSizeSelectorComponent.prototype.product;
    /** @type {?} */
    VariantSizeSelectorComponent.prototype.variants;
    /**
     * @type {?}
     * @private
     */
    VariantSizeSelectorComponent.prototype.productService;
    /**
     * @type {?}
     * @private
     */
    VariantSizeSelectorComponent.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFudC1zaXplLXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC12YXJpYW50cy92YXJpYW50LXNpemUtc2VsZWN0b3IvdmFyaWFudC1zaXplLXNlbGVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUVMLGNBQWMsRUFFZCxnQkFBZ0IsRUFFaEIsY0FBYyxFQUNkLFlBQVksR0FDYixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPOUMsTUFBTSxPQUFPLDRCQUE0Qjs7Ozs7SUFDdkMsWUFDVSxjQUE4QixFQUM5QixjQUE4QjtRQUQ5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ3JDLENBQUM7Ozs7O0lBUUosVUFBVSxDQUFDLElBQVk7UUFDckIsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsY0FBYztpQkFDaEIsR0FBRyxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDO2lCQUM1QixJQUFJO1lBQ0gsdUZBQXVGO1lBQ3ZGLDRDQUE0QztZQUM1QyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNSO2lCQUNBLFNBQVM7Ozs7WUFBQyxDQUFDLE9BQWdCLEVBQUUsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUM7b0JBQ3JCLE9BQU8sRUFBRSxTQUFTO29CQUNsQixNQUFNLEVBQUUsT0FBTztpQkFDaEIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDLENBQUM7U0FDTjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFDRCxxQkFBcUIsQ0FBQyxVQUFvQzs7Y0FDbEQsR0FBRyxHQUFHLFVBQVUsQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxLQUFLLGdCQUFnQixDQUFDLElBQUksRUFBQztRQUN2RSxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzlCLENBQUM7OztZQXZDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsb3NCQUFxRDtnQkFDckQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFUQyxjQUFjO1lBSmQsY0FBYzs7O3NCQW9CYixLQUFLO3VCQUdMLEtBQUs7Ozs7SUFITiwrQ0FDaUI7O0lBRWpCLGdEQUNxQjs7Ozs7SUFSbkIsc0RBQXNDOzs7OztJQUN0QyxzREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUHJvZHVjdCxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIEJhc2VPcHRpb24sXG4gIFZhcmlhbnRRdWFsaWZpZXIsXG4gIFZhcmlhbnRPcHRpb25RdWFsaWZpZXIsXG4gIFByb2R1Y3RTZXJ2aWNlLFxuICBQcm9kdWN0U2NvcGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXZhcmlhbnQtc2l6ZS1zZWxlY3RvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi92YXJpYW50LXNpemUtc2VsZWN0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVmFyaWFudFNpemVTZWxlY3RvckNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge31cblxuICBASW5wdXQoKVxuICBwcm9kdWN0OiBQcm9kdWN0O1xuXG4gIEBJbnB1dCgpXG4gIHZhcmlhbnRzOiBCYXNlT3B0aW9uO1xuXG4gIGNoYW5nZVNpemUoY29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKGNvZGUpIHtcbiAgICAgIHRoaXMucHJvZHVjdFNlcnZpY2VcbiAgICAgICAgLmdldChjb2RlLCBQcm9kdWN0U2NvcGUuTElTVClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgLy8gYmVsb3cgY2FsbCBtaWdodCBsb29rcyByZWR1bmRhbnQgYnV0IGluIGZhY3QgdGhpcyBkYXRhIGlzIGdvaW5nIHRvIGJlIGxvYWRlZCBhbnl3YXlzXG4gICAgICAgICAgLy8gd2UncmUganVzdCBjYWxsaW5nIGl0IGVhcmxpZXIgYW5kIHN0b3JpbmdcbiAgICAgICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICAgICAgdGFrZSgxKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKHByb2R1Y3Q6IFByb2R1Y3QpID0+IHtcbiAgICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHtcbiAgICAgICAgICAgIGN4Um91dGU6ICdwcm9kdWN0JyxcbiAgICAgICAgICAgIHBhcmFtczogcHJvZHVjdCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGdldFZhcmlhbnRPcHRpb25WYWx1ZShxdWFsaWZpZXJzOiBWYXJpYW50T3B0aW9uUXVhbGlmaWVyW10pIHtcbiAgICBjb25zdCBvYmogPSBxdWFsaWZpZXJzLmZpbmQocSA9PiBxLnF1YWxpZmllciA9PT0gVmFyaWFudFF1YWxpZmllci5TSVpFKTtcbiAgICByZXR1cm4gb2JqID8gb2JqLnZhbHVlIDogJyc7XG4gIH1cbn1cbiJdfQ==