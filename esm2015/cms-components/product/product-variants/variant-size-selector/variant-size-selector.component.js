/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RoutingService, VariantQualifier, } from '@spartacus/core';
export class VariantSizeSelectorComponent {
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
    changeSize(code) {
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
    VariantSizeSelectorComponent.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFudC1zaXplLXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC12YXJpYW50cy92YXJpYW50LXNpemUtc2VsZWN0b3IvdmFyaWFudC1zaXplLXNlbGVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUVMLGNBQWMsRUFFZCxnQkFBZ0IsR0FFakIsTUFBTSxpQkFBaUIsQ0FBQztBQU96QixNQUFNLE9BQU8sNEJBQTRCOzs7O0lBQ3ZDLFlBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUFHLENBQUM7Ozs7O0lBUXRELFVBQVUsQ0FBQyxJQUFZO1FBQ3JCLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUM7Z0JBQ3JCLE9BQU8sRUFBRSxTQUFTO2dCQUNsQixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUU7YUFDakIsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBQ0QscUJBQXFCLENBQUMsVUFBb0M7O2NBQ2xELEdBQUcsR0FBRyxVQUFVLENBQUMsSUFBSTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsS0FBSyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUM7UUFDdkUsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7WUExQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLG9zQkFBcUQ7Z0JBQ3JELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBVkMsY0FBYzs7O3NCQWNiLEtBQUs7dUJBR0wsS0FBSzs7OztJQUhOLCtDQUNpQjs7SUFFakIsZ0RBQ3FCOzs7OztJQU5ULHNEQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBQcm9kdWN0LFxuICBSb3V0aW5nU2VydmljZSxcbiAgQmFzZU9wdGlvbixcbiAgVmFyaWFudFF1YWxpZmllcixcbiAgVmFyaWFudE9wdGlvblF1YWxpZmllcixcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtdmFyaWFudC1zaXplLXNlbGVjdG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3ZhcmlhbnQtc2l6ZS1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBWYXJpYW50U2l6ZVNlbGVjdG9yQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UpIHt9XG5cbiAgQElucHV0KClcbiAgcHJvZHVjdDogUHJvZHVjdDtcblxuICBASW5wdXQoKVxuICB2YXJpYW50czogQmFzZU9wdGlvbjtcblxuICBjaGFuZ2VTaXplKGNvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChjb2RlKSB7XG4gICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHtcbiAgICAgICAgY3hSb3V0ZTogJ3Byb2R1Y3QnLFxuICAgICAgICBwYXJhbXM6IHsgY29kZSB9LFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGdldFZhcmlhbnRPcHRpb25WYWx1ZShxdWFsaWZpZXJzOiBWYXJpYW50T3B0aW9uUXVhbGlmaWVyW10pIHtcbiAgICBjb25zdCBvYmogPSBxdWFsaWZpZXJzLmZpbmQocSA9PiBxLnF1YWxpZmllciA9PT0gVmFyaWFudFF1YWxpZmllci5TSVpFKTtcbiAgICByZXR1cm4gb2JqID8gb2JqLnZhbHVlIDogJyc7XG4gIH1cbn1cbiJdfQ==