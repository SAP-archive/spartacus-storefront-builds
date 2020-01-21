/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RoutingService, VariantQualifier, } from '@spartacus/core';
var VariantSizeSelectorComponent = /** @class */ (function () {
    function VariantSizeSelectorComponent(routingService) {
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
        if (code) {
            this.routingService.go({
                cxRoute: 'product',
                params: { code: code },
            });
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
    VariantSizeSelectorComponent.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFudC1zaXplLXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC12YXJpYW50cy92YXJpYW50LXNpemUtc2VsZWN0b3IvdmFyaWFudC1zaXplLXNlbGVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUVMLGNBQWMsRUFFZCxnQkFBZ0IsR0FFakIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QjtJQU1FLHNDQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFBRyxDQUFDOzs7OztJQVF0RCxpREFBVTs7OztJQUFWLFVBQVcsSUFBWTtRQUNyQixJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO2dCQUNyQixPQUFPLEVBQUUsU0FBUztnQkFDbEIsTUFBTSxFQUFFLEVBQUUsSUFBSSxNQUFBLEVBQUU7YUFDakIsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBQ0QsNERBQXFCOzs7O0lBQXJCLFVBQXNCLFVBQW9DOztZQUNsRCxHQUFHLEdBQUcsVUFBVSxDQUFDLElBQUk7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxTQUFTLEtBQUssZ0JBQWdCLENBQUMsSUFBSSxFQUFyQyxDQUFxQyxFQUFDO1FBQ3ZFLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Z0JBMUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxvc0JBQXFEO29CQUNyRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBVkMsY0FBYzs7OzBCQWNiLEtBQUs7MkJBR0wsS0FBSzs7SUFnQlIsbUNBQUM7Q0FBQSxBQTNCRCxJQTJCQztTQXRCWSw0QkFBNEI7OztJQUd2QywrQ0FDaUI7O0lBRWpCLGdEQUNxQjs7Ozs7SUFOVCxzREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUHJvZHVjdCxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIEJhc2VPcHRpb24sXG4gIFZhcmlhbnRRdWFsaWZpZXIsXG4gIFZhcmlhbnRPcHRpb25RdWFsaWZpZXIsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXZhcmlhbnQtc2l6ZS1zZWxlY3RvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi92YXJpYW50LXNpemUtc2VsZWN0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVmFyaWFudFNpemVTZWxlY3RvckNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlKSB7fVxuXG4gIEBJbnB1dCgpXG4gIHByb2R1Y3Q6IFByb2R1Y3Q7XG5cbiAgQElucHV0KClcbiAgdmFyaWFudHM6IEJhc2VPcHRpb247XG5cbiAgY2hhbmdlU2l6ZShjb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoY29kZSkge1xuICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7XG4gICAgICAgIGN4Um91dGU6ICdwcm9kdWN0JyxcbiAgICAgICAgcGFyYW1zOiB7IGNvZGUgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBnZXRWYXJpYW50T3B0aW9uVmFsdWUocXVhbGlmaWVyczogVmFyaWFudE9wdGlvblF1YWxpZmllcltdKSB7XG4gICAgY29uc3Qgb2JqID0gcXVhbGlmaWVycy5maW5kKHEgPT4gcS5xdWFsaWZpZXIgPT09IFZhcmlhbnRRdWFsaWZpZXIuU0laRSk7XG4gICAgcmV0dXJuIG9iaiA/IG9iai52YWx1ZSA6ICcnO1xuICB9XG59XG4iXX0=