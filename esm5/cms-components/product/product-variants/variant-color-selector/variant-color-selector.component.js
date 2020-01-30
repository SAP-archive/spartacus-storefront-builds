/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RoutingService, VariantQualifier, } from '@spartacus/core';
var VariantColorSelectorComponent = /** @class */ (function () {
    function VariantColorSelectorComponent(routingService) {
        this.routingService = routingService;
    }
    /**
     * @param {?} code
     * @param {?} name
     * @return {?}
     */
    VariantColorSelectorComponent.prototype.changeColor = /**
     * @param {?} code
     * @param {?} name
     * @return {?}
     */
    function (code, name) {
        if (code) {
            this.routingService.go({
                cxRoute: 'product',
                params: { code: code, name: name },
            });
        }
        return null;
    };
    /**
     * @param {?} qualifiers
     * @return {?}
     */
    VariantColorSelectorComponent.prototype.getVariantOptionValue = /**
     * @param {?} qualifiers
     * @return {?}
     */
    function (qualifiers) {
        /** @type {?} */
        var obj = qualifiers.find((/**
         * @param {?} q
         * @return {?}
         */
        function (q) { return q.qualifier === VariantQualifier.COLOR; }));
        return obj ? obj.value : '';
    };
    VariantColorSelectorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-variant-color-selector',
                    template: "<ng-container>\n  <div class=\"variant-selector\">\n    <div class=\"variant-name\">{{ 'variant.color' | cxTranslate }}:</div>\n\n    <select\n      (change)=\"changeColor($event.target.value, product?.name)\"\n      class=\"form-control variant-select\"\n    >\n      <option\n        *ngFor=\"let v of variants?.options\"\n        value=\"{{ v.code }}\"\n        [selected]=\"v.code === product?.code\"\n        >{{ getVariantOptionValue(v.variantOptionQualifiers) }}</option\n      >\n    </select>\n  </div>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    VariantColorSelectorComponent.ctorParameters = function () { return [
        { type: RoutingService }
    ]; };
    VariantColorSelectorComponent.propDecorators = {
        product: [{ type: Input }],
        variants: [{ type: Input }]
    };
    return VariantColorSelectorComponent;
}());
export { VariantColorSelectorComponent };
if (false) {
    /** @type {?} */
    VariantColorSelectorComponent.prototype.product;
    /** @type {?} */
    VariantColorSelectorComponent.prototype.variants;
    /**
     * @type {?}
     * @private
     */
    VariantColorSelectorComponent.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFudC1jb2xvci1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtdmFyaWFudHMvdmFyaWFudC1jb2xvci1zZWxlY3Rvci92YXJpYW50LWNvbG9yLXNlbGVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUdMLGNBQWMsRUFFZCxnQkFBZ0IsR0FDakIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QjtJQU1FLHVDQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFBRyxDQUFDOzs7Ozs7SUFRdEQsbURBQVc7Ozs7O0lBQVgsVUFBWSxJQUFZLEVBQUUsSUFBWTtRQUNwQyxJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO2dCQUNyQixPQUFPLEVBQUUsU0FBUztnQkFDbEIsTUFBTSxFQUFFLEVBQUUsSUFBSSxNQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUU7YUFDdkIsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBQ0QsNkRBQXFCOzs7O0lBQXJCLFVBQXNCLFVBQW9DOztZQUNsRCxHQUFHLEdBQUcsVUFBVSxDQUFDLElBQUk7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxTQUFTLEtBQUssZ0JBQWdCLENBQUMsS0FBSyxFQUF0QyxDQUFzQyxFQUFDO1FBQ3hFLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Z0JBMUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyw4aEJBQXNEO29CQUN0RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBVEMsY0FBYzs7OzBCQWFiLEtBQUs7MkJBR0wsS0FBSzs7SUFnQlIsb0NBQUM7Q0FBQSxBQTNCRCxJQTJCQztTQXRCWSw2QkFBNkI7OztJQUd4QyxnREFDaUI7O0lBRWpCLGlEQUNxQjs7Ozs7SUFOVCx1REFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQmFzZU9wdGlvbixcbiAgUHJvZHVjdCxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFZhcmlhbnRPcHRpb25RdWFsaWZpZXIsXG4gIFZhcmlhbnRRdWFsaWZpZXIsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXZhcmlhbnQtY29sb3Itc2VsZWN0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vdmFyaWFudC1jb2xvci1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBWYXJpYW50Q29sb3JTZWxlY3RvckNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlKSB7fVxuXG4gIEBJbnB1dCgpXG4gIHByb2R1Y3Q6IFByb2R1Y3Q7XG5cbiAgQElucHV0KClcbiAgdmFyaWFudHM6IEJhc2VPcHRpb247XG5cbiAgY2hhbmdlQ29sb3IoY29kZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoY29kZSkge1xuICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7XG4gICAgICAgIGN4Um91dGU6ICdwcm9kdWN0JyxcbiAgICAgICAgcGFyYW1zOiB7IGNvZGUsIG5hbWUgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBnZXRWYXJpYW50T3B0aW9uVmFsdWUocXVhbGlmaWVyczogVmFyaWFudE9wdGlvblF1YWxpZmllcltdKSB7XG4gICAgY29uc3Qgb2JqID0gcXVhbGlmaWVycy5maW5kKHEgPT4gcS5xdWFsaWZpZXIgPT09IFZhcmlhbnRRdWFsaWZpZXIuQ09MT1IpO1xuICAgIHJldHVybiBvYmogPyBvYmoudmFsdWUgOiAnJztcbiAgfVxufVxuIl19