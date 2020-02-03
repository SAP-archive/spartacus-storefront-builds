/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { OccConfig, VariantQualifier, ProductService, ProductScope, RoutingService, } from '@spartacus/core';
import { filter, take } from 'rxjs/operators';
var VariantStyleSelectorComponent = /** @class */ (function () {
    function VariantStyleSelectorComponent(config, productService, routingService) {
        this.config = config;
        this.productService = productService;
        this.routingService = routingService;
        this.variantQualifier = VariantQualifier;
    }
    /**
     * @param {?} qualifiers
     * @return {?}
     */
    VariantStyleSelectorComponent.prototype.getVariantOptionValue = /**
     * @param {?} qualifiers
     * @return {?}
     */
    function (qualifiers) {
        /** @type {?} */
        var obj = qualifiers.find((/**
         * @param {?} q
         * @return {?}
         */
        function (q) { return q.qualifier === VariantQualifier.STYLE; }));
        return obj ? obj.value : '';
    };
    /**
     * @param {?} variantOptionQualifiers
     * @return {?}
     */
    VariantStyleSelectorComponent.prototype.getVariantThumbnailUrl = /**
     * @param {?} variantOptionQualifiers
     * @return {?}
     */
    function (variantOptionQualifiers) {
        /** @type {?} */
        var qualifier = variantOptionQualifiers.find((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.image; }));
        return qualifier
            ? "" + this.config.backend.occ.baseUrl + qualifier.image.url
            : '';
    };
    /**
     * @param {?} code
     * @return {?}
     */
    VariantStyleSelectorComponent.prototype.changeStyle = /**
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
    VariantStyleSelectorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-variant-style-selector',
                    template: "<ng-container>\n  <div class=\"variant-selector\">\n    <div *ngIf=\"variants.selected\" class=\"variant-name\">\n      {{ 'variant.style' | cxTranslate }}:\n      <span class=\"style-name\">{{\n        getVariantOptionValue(variants?.selected.variantOptionQualifiers)\n      }}</span>\n    </div>\n    <ul class=\"variant-list\">\n      <li\n        *ngFor=\"let v of variants?.options\"\n        [ngClass]=\"{\n          'selected-variant': v.code === variants?.selected.code\n        }\"\n      >\n        <img\n          (click)=\"changeStyle(v.code)\"\n          src=\"{{ getVariantThumbnailUrl(v.variantOptionQualifiers) }}\"\n          title=\"{{ getVariantOptionValue(v.variantOptionQualifiers) }}\"\n          alt=\"{{ getVariantOptionValue(v.variantOptionQualifiers) }}\"\n        />\n      </li>\n    </ul>\n  </div>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    VariantStyleSelectorComponent.ctorParameters = function () { return [
        { type: OccConfig },
        { type: ProductService },
        { type: RoutingService }
    ]; };
    VariantStyleSelectorComponent.propDecorators = {
        variants: [{ type: Input }]
    };
    return VariantStyleSelectorComponent;
}());
export { VariantStyleSelectorComponent };
if (false) {
    /** @type {?} */
    VariantStyleSelectorComponent.prototype.variantQualifier;
    /** @type {?} */
    VariantStyleSelectorComponent.prototype.variants;
    /**
     * @type {?}
     * @private
     */
    VariantStyleSelectorComponent.prototype.config;
    /**
     * @type {?}
     * @private
     */
    VariantStyleSelectorComponent.prototype.productService;
    /**
     * @type {?}
     * @private
     */
    VariantStyleSelectorComponent.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFudC1zdHlsZS1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtdmFyaWFudHMvdmFyaWFudC1zdHlsZS1zZWxlY3Rvci92YXJpYW50LXN0eWxlLXNlbGVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUNMLFNBQVMsRUFFVCxnQkFBZ0IsRUFHaEIsY0FBYyxFQUNkLFlBQVksRUFDWixjQUFjLEdBQ2YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDO0lBTUUsdUNBQ1UsTUFBaUIsRUFDakIsY0FBOEIsRUFDOUIsY0FBOEI7UUFGOUIsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBR3hDLHFCQUFnQixHQUFHLGdCQUFnQixDQUFDO0lBRmpDLENBQUM7Ozs7O0lBT0osNkRBQXFCOzs7O0lBQXJCLFVBQXNCLFVBQW9DOztZQUNsRCxHQUFHLEdBQUcsVUFBVSxDQUFDLElBQUk7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxTQUFTLEtBQUssZ0JBQWdCLENBQUMsS0FBSyxFQUF0QyxDQUFzQyxFQUFDO1FBQ3hFLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCw4REFBc0I7Ozs7SUFBdEIsVUFDRSx1QkFBaUQ7O1lBRTNDLFNBQVMsR0FBRyx1QkFBdUIsQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsRUFBQztRQUNsRSxPQUFPLFNBQVM7WUFDZCxDQUFDLENBQUMsS0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBSztZQUM1RCxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ1QsQ0FBQzs7Ozs7SUFFRCxtREFBVzs7OztJQUFYLFVBQVksSUFBWTtRQUF4QixpQkFrQkM7UUFqQkMsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsY0FBYztpQkFDaEIsR0FBRyxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDO2lCQUM1QixJQUFJO1lBQ0gsdUZBQXVGO1lBQ3ZGLDRDQUE0QztZQUM1QyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNSO2lCQUNBLFNBQVM7Ozs7WUFBQyxVQUFDLE9BQWdCO2dCQUMxQixLQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQztvQkFDckIsT0FBTyxFQUFFLFNBQVM7b0JBQ2xCLE1BQU0sRUFBRSxPQUFPO2lCQUNoQixDQUFDLENBQUM7WUFDTCxDQUFDLEVBQUMsQ0FBQztTQUNOO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOztnQkFqREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLDAxQkFBc0Q7b0JBQ3RELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFmQyxTQUFTO2dCQUtULGNBQWM7Z0JBRWQsY0FBYzs7OzJCQWtCYixLQUFLOztJQW9DUixvQ0FBQztDQUFBLEFBbERELElBa0RDO1NBN0NZLDZCQUE2Qjs7O0lBT3hDLHlEQUFvQzs7SUFFcEMsaURBQ3FCOzs7OztJQVJuQiwrQ0FBeUI7Ozs7O0lBQ3pCLHVEQUFzQzs7Ozs7SUFDdEMsdURBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE9jY0NvbmZpZyxcbiAgQmFzZU9wdGlvbixcbiAgVmFyaWFudFF1YWxpZmllcixcbiAgVmFyaWFudE9wdGlvblF1YWxpZmllcixcbiAgUHJvZHVjdCxcbiAgUHJvZHVjdFNlcnZpY2UsXG4gIFByb2R1Y3RTY29wZSxcbiAgUm91dGluZ1NlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXZhcmlhbnQtc3R5bGUtc2VsZWN0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vdmFyaWFudC1zdHlsZS1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBWYXJpYW50U3R5bGVTZWxlY3RvckNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnOiBPY2NDb25maWcsXG4gICAgcHJpdmF0ZSBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIHZhcmlhbnRRdWFsaWZpZXIgPSBWYXJpYW50UXVhbGlmaWVyO1xuXG4gIEBJbnB1dCgpXG4gIHZhcmlhbnRzOiBCYXNlT3B0aW9uO1xuXG4gIGdldFZhcmlhbnRPcHRpb25WYWx1ZShxdWFsaWZpZXJzOiBWYXJpYW50T3B0aW9uUXVhbGlmaWVyW10pIHtcbiAgICBjb25zdCBvYmogPSBxdWFsaWZpZXJzLmZpbmQocSA9PiBxLnF1YWxpZmllciA9PT0gVmFyaWFudFF1YWxpZmllci5TVFlMRSk7XG4gICAgcmV0dXJuIG9iaiA/IG9iai52YWx1ZSA6ICcnO1xuICB9XG5cbiAgZ2V0VmFyaWFudFRodW1ibmFpbFVybChcbiAgICB2YXJpYW50T3B0aW9uUXVhbGlmaWVyczogVmFyaWFudE9wdGlvblF1YWxpZmllcltdXG4gICk6IHN0cmluZyB7XG4gICAgY29uc3QgcXVhbGlmaWVyID0gdmFyaWFudE9wdGlvblF1YWxpZmllcnMuZmluZChpdGVtID0+IGl0ZW0uaW1hZ2UpO1xuICAgIHJldHVybiBxdWFsaWZpZXJcbiAgICAgID8gYCR7dGhpcy5jb25maWcuYmFja2VuZC5vY2MuYmFzZVVybH0ke3F1YWxpZmllci5pbWFnZS51cmx9YFxuICAgICAgOiAnJztcbiAgfVxuXG4gIGNoYW5nZVN0eWxlKGNvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChjb2RlKSB7XG4gICAgICB0aGlzLnByb2R1Y3RTZXJ2aWNlXG4gICAgICAgIC5nZXQoY29kZSwgUHJvZHVjdFNjb3BlLkxJU1QpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIC8vIGJlbG93IGNhbGwgbWlnaHQgbG9va3MgcmVkdW5kYW50IGJ1dCBpbiBmYWN0IHRoaXMgZGF0YSBpcyBnb2luZyB0byBiZSBsb2FkZWQgYW55d2F5c1xuICAgICAgICAgIC8vIHdlJ3JlIGp1c3QgY2FsbGluZyBpdCBlYXJsaWVyIGFuZCBzdG9yaW5nXG4gICAgICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgICAgIHRha2UoMSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChwcm9kdWN0OiBQcm9kdWN0KSA9PiB7XG4gICAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7XG4gICAgICAgICAgICBjeFJvdXRlOiAncHJvZHVjdCcsXG4gICAgICAgICAgICBwYXJhbXM6IHByb2R1Y3QsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIl19