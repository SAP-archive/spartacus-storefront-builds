/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { OccConfig, VariantQualifier, } from '@spartacus/core';
var VariantStyleSelectorComponent = /** @class */ (function () {
    function VariantStyleSelectorComponent(config) {
        this.config = config;
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
    VariantStyleSelectorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-variant-style-selector',
                    template: "<ng-container>\n  <div class=\"variant-selector\">\n    <div *ngIf=\"variants.selected\" class=\"variant-name\">\n      {{ 'variant.style' | cxTranslate }}:\n      <span class=\"style-name\">{{\n        getVariantOptionValue(variants?.selected.variantOptionQualifiers)\n      }}</span>\n    </div>\n    <ul class=\"variant-list\">\n      <li\n        *ngFor=\"let v of variants?.options\"\n        [ngClass]=\"{\n          'selected-variant': v.code === variants?.selected.code\n        }\"\n      >\n        <a\n          [routerLink]=\"\n            { cxRoute: 'product', params: { code: v.code } } | cxUrl\n          \"\n          class=\"colorVariant\"\n        >\n          <img\n            src=\"{{ getVariantThumbnailUrl(v.variantOptionQualifiers) }}\"\n            title=\"{{ getVariantOptionValue(v.variantOptionQualifiers) }}\"\n            alt=\"{{ getVariantOptionValue(v.variantOptionQualifiers) }}\"\n          />\n        </a>\n      </li>\n    </ul>\n  </div>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    VariantStyleSelectorComponent.ctorParameters = function () { return [
        { type: OccConfig }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFudC1zdHlsZS1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtdmFyaWFudHMvdmFyaWFudC1zdHlsZS1zZWxlY3Rvci92YXJpYW50LXN0eWxlLXNlbGVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUNMLFNBQVMsRUFFVCxnQkFBZ0IsR0FFakIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QjtJQU1FLHVDQUFvQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBRXJDLHFCQUFnQixHQUFHLGdCQUFnQixDQUFDO0lBRkksQ0FBQzs7Ozs7SUFPekMsNkRBQXFCOzs7O0lBQXJCLFVBQXNCLFVBQW9DOztZQUNsRCxHQUFHLEdBQUcsVUFBVSxDQUFDLElBQUk7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxTQUFTLEtBQUssZ0JBQWdCLENBQUMsS0FBSyxFQUF0QyxDQUFzQyxFQUFDO1FBQ3hFLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCw4REFBc0I7Ozs7SUFBdEIsVUFDRSx1QkFBaUQ7O1lBRTNDLFNBQVMsR0FBRyx1QkFBdUIsQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsRUFBQztRQUNsRSxPQUFPLFNBQVM7WUFDZCxDQUFDLENBQUMsS0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBSztZQUM1RCxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ1QsQ0FBQzs7Z0JBekJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQywrK0JBQXNEO29CQUN0RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBVkMsU0FBUzs7OzJCQWdCUixLQUFLOztJQWdCUixvQ0FBQztDQUFBLEFBMUJELElBMEJDO1NBckJZLDZCQUE2Qjs7O0lBR3hDLHlEQUFvQzs7SUFFcEMsaURBQ3FCOzs7OztJQUxULCtDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBPY2NDb25maWcsXG4gIEJhc2VPcHRpb24sXG4gIFZhcmlhbnRRdWFsaWZpZXIsXG4gIFZhcmlhbnRPcHRpb25RdWFsaWZpZXIsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXZhcmlhbnQtc3R5bGUtc2VsZWN0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vdmFyaWFudC1zdHlsZS1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBWYXJpYW50U3R5bGVTZWxlY3RvckNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnOiBPY2NDb25maWcpIHt9XG5cbiAgdmFyaWFudFF1YWxpZmllciA9IFZhcmlhbnRRdWFsaWZpZXI7XG5cbiAgQElucHV0KClcbiAgdmFyaWFudHM6IEJhc2VPcHRpb247XG5cbiAgZ2V0VmFyaWFudE9wdGlvblZhbHVlKHF1YWxpZmllcnM6IFZhcmlhbnRPcHRpb25RdWFsaWZpZXJbXSkge1xuICAgIGNvbnN0IG9iaiA9IHF1YWxpZmllcnMuZmluZChxID0+IHEucXVhbGlmaWVyID09PSBWYXJpYW50UXVhbGlmaWVyLlNUWUxFKTtcbiAgICByZXR1cm4gb2JqID8gb2JqLnZhbHVlIDogJyc7XG4gIH1cblxuICBnZXRWYXJpYW50VGh1bWJuYWlsVXJsKFxuICAgIHZhcmlhbnRPcHRpb25RdWFsaWZpZXJzOiBWYXJpYW50T3B0aW9uUXVhbGlmaWVyW11cbiAgKTogc3RyaW5nIHtcbiAgICBjb25zdCBxdWFsaWZpZXIgPSB2YXJpYW50T3B0aW9uUXVhbGlmaWVycy5maW5kKGl0ZW0gPT4gaXRlbS5pbWFnZSk7XG4gICAgcmV0dXJuIHF1YWxpZmllclxuICAgICAgPyBgJHt0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5iYXNlVXJsfSR7cXVhbGlmaWVyLmltYWdlLnVybH1gXG4gICAgICA6ICcnO1xuICB9XG59XG4iXX0=