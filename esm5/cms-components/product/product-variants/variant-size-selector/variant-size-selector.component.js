/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RoutingService, VariantQualifier, ProductService, ProductScope, } from '@spartacus/core';
import { filter, take } from 'rxjs/operators';
var VariantSizeSelectorComponent = /** @class */ (function () {
    function VariantSizeSelectorComponent(productService, routingService) {
        this.productService = productService;
        this.routingService = routingService;
    }
    /**
     * @param {?} code
     * @return {?}
     */
    VariantSizeSelectorComponent.prototype.changeSize = /**
     * @param {?} code
     * @return {?}
     */
    function (code) {
        var _this = this;
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
            function (product) {
                _this.routingService.go({
                    cxRoute: 'product',
                    params: product,
                });
            }));
        }
        return null;
    };
    /**
     * @param {?} qualifiers
     * @return {?}
     */
    VariantSizeSelectorComponent.prototype.getVariantOptionValue = /**
     * @param {?} qualifiers
     * @return {?}
     */
    function (qualifiers) {
        /** @type {?} */
        var obj = qualifiers.find((/**
         * @param {?} q
         * @return {?}
         */
        function (q) { return q.qualifier === VariantQualifier.SIZE; }));
        return obj ? obj.value : '';
    };
    VariantSizeSelectorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-variant-size-selector',
                    template: "<ng-container>\n  <div class=\"variant-selector\">\n    <div class=\"variant-name\">{{ 'variant.size' | cxTranslate }}:</div>\n    <select\n      (change)=\"changeSize($event.target.value)\"\n      class=\"form-control variant-select\"\n    >\n      <option\n        *ngFor=\"let v of variants?.options\"\n        value=\"{{ v.code }}\"\n        [selected]=\"v.code === product?.code\"\n        >{{ getVariantOptionValue(v.variantOptionQualifiers) }}</option\n      >\n    </select>\n    <a\n      href=\"#\"\n      class=\"size-guide\"\n      title=\"{{ 'variant.sizeGuideLabel' | cxTranslate }}\"\n    >\n      {{ 'variant.sizeGuideLabel' | cxTranslate }}\n    </a>\n  </div>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    VariantSizeSelectorComponent.ctorParameters = function () { return [
        { type: ProductService },
        { type: RoutingService }
    ]; };
    VariantSizeSelectorComponent.propDecorators = {
        product: [{ type: Input }],
        variants: [{ type: Input }]
    };
    return VariantSizeSelectorComponent;
}());
export { VariantSizeSelectorComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFudC1zaXplLXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC12YXJpYW50cy92YXJpYW50LXNpemUtc2VsZWN0b3IvdmFyaWFudC1zaXplLXNlbGVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUVMLGNBQWMsRUFFZCxnQkFBZ0IsRUFFaEIsY0FBYyxFQUNkLFlBQVksR0FDYixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUM7SUFNRSxzQ0FDVSxjQUE4QixFQUM5QixjQUE4QjtRQUQ5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ3JDLENBQUM7Ozs7O0lBUUosaURBQVU7Ozs7SUFBVixVQUFXLElBQVk7UUFBdkIsaUJBa0JDO1FBakJDLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLGNBQWM7aUJBQ2hCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQztpQkFDNUIsSUFBSTtZQUNILHVGQUF1RjtZQUN2Riw0Q0FBNEM7WUFDNUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUjtpQkFDQSxTQUFTOzs7O1lBQUMsVUFBQyxPQUFnQjtnQkFDMUIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUM7b0JBQ3JCLE9BQU8sRUFBRSxTQUFTO29CQUNsQixNQUFNLEVBQUUsT0FBTztpQkFDaEIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDLENBQUM7U0FDTjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFDRCw0REFBcUI7Ozs7SUFBckIsVUFBc0IsVUFBb0M7O1lBQ2xELEdBQUcsR0FBRyxVQUFVLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFNBQVMsS0FBSyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQXJDLENBQXFDLEVBQUM7UUFDdkUsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM5QixDQUFDOztnQkF2Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLG9zQkFBcUQ7b0JBQ3JELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFUQyxjQUFjO2dCQUpkLGNBQWM7OzswQkFvQmIsS0FBSzsyQkFHTCxLQUFLOztJQTBCUixtQ0FBQztDQUFBLEFBeENELElBd0NDO1NBbkNZLDRCQUE0Qjs7O0lBTXZDLCtDQUNpQjs7SUFFakIsZ0RBQ3FCOzs7OztJQVJuQixzREFBc0M7Ozs7O0lBQ3RDLHNEQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBQcm9kdWN0LFxuICBSb3V0aW5nU2VydmljZSxcbiAgQmFzZU9wdGlvbixcbiAgVmFyaWFudFF1YWxpZmllcixcbiAgVmFyaWFudE9wdGlvblF1YWxpZmllcixcbiAgUHJvZHVjdFNlcnZpY2UsXG4gIFByb2R1Y3RTY29wZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtdmFyaWFudC1zaXplLXNlbGVjdG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3ZhcmlhbnQtc2l6ZS1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBWYXJpYW50U2l6ZVNlbGVjdG9yQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIEBJbnB1dCgpXG4gIHByb2R1Y3Q6IFByb2R1Y3Q7XG5cbiAgQElucHV0KClcbiAgdmFyaWFudHM6IEJhc2VPcHRpb247XG5cbiAgY2hhbmdlU2l6ZShjb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoY29kZSkge1xuICAgICAgdGhpcy5wcm9kdWN0U2VydmljZVxuICAgICAgICAuZ2V0KGNvZGUsIFByb2R1Y3RTY29wZS5MSVNUKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICAvLyBiZWxvdyBjYWxsIG1pZ2h0IGxvb2tzIHJlZHVuZGFudCBidXQgaW4gZmFjdCB0aGlzIGRhdGEgaXMgZ29pbmcgdG8gYmUgbG9hZGVkIGFueXdheXNcbiAgICAgICAgICAvLyB3ZSdyZSBqdXN0IGNhbGxpbmcgaXQgZWFybGllciBhbmQgc3RvcmluZ1xuICAgICAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgICAgICB0YWtlKDEpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgocHJvZHVjdDogUHJvZHVjdCkgPT4ge1xuICAgICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oe1xuICAgICAgICAgICAgY3hSb3V0ZTogJ3Byb2R1Y3QnLFxuICAgICAgICAgICAgcGFyYW1zOiBwcm9kdWN0LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgZ2V0VmFyaWFudE9wdGlvblZhbHVlKHF1YWxpZmllcnM6IFZhcmlhbnRPcHRpb25RdWFsaWZpZXJbXSkge1xuICAgIGNvbnN0IG9iaiA9IHF1YWxpZmllcnMuZmluZChxID0+IHEucXVhbGlmaWVyID09PSBWYXJpYW50UXVhbGlmaWVyLlNJWkUpO1xuICAgIHJldHVybiBvYmogPyBvYmoudmFsdWUgOiAnJztcbiAgfVxufVxuIl19