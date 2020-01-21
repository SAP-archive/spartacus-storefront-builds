/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { RoutingService, VariantQualifier, } from '@spartacus/core';
export class VariantColorSelectorComponent {
    /**
     * @param {?} routingService
     */
    constructor(routingService) {
        this.routingService = routingService;
    }
    /**
     * @param {?} code
     * @return {?}
     */
    changeColor(code) {
        if (code) {
            this.routingService.go({
                cxRoute: 'product',
                params: { code },
            });
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
        q => q.qualifier === VariantQualifier.COLOR));
        return obj ? obj.value : '';
    }
}
VariantColorSelectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-variant-color-selector',
                template: "<ng-container>\n  <div class=\"variant-selector\">\n    <div class=\"variant-name\">{{ 'variant.color' | cxTranslate }}:</div>\n    <select\n      (change)=\"changeColor($event.target.value)\"\n      class=\"form-control variant-select\"\n    >\n      <option\n        *ngFor=\"let v of variants?.options\"\n        value=\"{{ v.code }}\"\n        [selected]=\"v.code === product?.code\"\n        >{{ getVariantOptionValue(v.variantOptionQualifiers) }}</option\n      >\n    </select>\n  </div>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
VariantColorSelectorComponent.ctorParameters = () => [
    { type: RoutingService }
];
VariantColorSelectorComponent.propDecorators = {
    product: [{ type: Input }],
    variants: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFudC1jb2xvci1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtdmFyaWFudHMvdmFyaWFudC1jb2xvci1zZWxlY3Rvci92YXJpYW50LWNvbG9yLXNlbGVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUVMLGNBQWMsRUFFZCxnQkFBZ0IsR0FFakIsTUFBTSxpQkFBaUIsQ0FBQztBQU96QixNQUFNLE9BQU8sNkJBQTZCOzs7O0lBQ3hDLFlBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUFHLENBQUM7Ozs7O0lBUXRELFdBQVcsQ0FBQyxJQUFZO1FBQ3RCLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUM7Z0JBQ3JCLE9BQU8sRUFBRSxTQUFTO2dCQUNsQixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUU7YUFDakIsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBQ0QscUJBQXFCLENBQUMsVUFBb0M7O2NBQ2xELEdBQUcsR0FBRyxVQUFVLENBQUMsSUFBSTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsS0FBSyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUM7UUFDeEUsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7WUExQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLDZnQkFBc0Q7Z0JBQ3RELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBVkMsY0FBYzs7O3NCQWNiLEtBQUs7dUJBR0wsS0FBSzs7OztJQUhOLGdEQUNpQjs7SUFFakIsaURBQ3FCOzs7OztJQU5ULHVEQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBQcm9kdWN0LFxuICBSb3V0aW5nU2VydmljZSxcbiAgQmFzZU9wdGlvbixcbiAgVmFyaWFudFF1YWxpZmllcixcbiAgVmFyaWFudE9wdGlvblF1YWxpZmllcixcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtdmFyaWFudC1jb2xvci1zZWxlY3RvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi92YXJpYW50LWNvbG9yLXNlbGVjdG9yLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFZhcmlhbnRDb2xvclNlbGVjdG9yQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UpIHt9XG5cbiAgQElucHV0KClcbiAgcHJvZHVjdDogUHJvZHVjdDtcblxuICBASW5wdXQoKVxuICB2YXJpYW50czogQmFzZU9wdGlvbjtcblxuICBjaGFuZ2VDb2xvcihjb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoY29kZSkge1xuICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7XG4gICAgICAgIGN4Um91dGU6ICdwcm9kdWN0JyxcbiAgICAgICAgcGFyYW1zOiB7IGNvZGUgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBnZXRWYXJpYW50T3B0aW9uVmFsdWUocXVhbGlmaWVyczogVmFyaWFudE9wdGlvblF1YWxpZmllcltdKSB7XG4gICAgY29uc3Qgb2JqID0gcXVhbGlmaWVycy5maW5kKHEgPT4gcS5xdWFsaWZpZXIgPT09IFZhcmlhbnRRdWFsaWZpZXIuQ09MT1IpO1xuICAgIHJldHVybiBvYmogPyBvYmoudmFsdWUgOiAnJztcbiAgfVxufVxuIl19