/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductScope } from '@spartacus/core';
import { CurrentProductService } from '../../current-product.service';
var ProductAttributesComponent = /** @class */ (function () {
    function ProductAttributesComponent(currentProductService) {
        this.currentProductService = currentProductService;
        this.product$ = this.currentProductService.getProduct(ProductScope.ATTRIBUTES);
    }
    // TODO deprecated since 1.4, remove
    // TODO deprecated since 1.4, remove
    /**
     * @return {?}
     */
    ProductAttributesComponent.prototype.ngOnInit = 
    // TODO deprecated since 1.4, remove
    /**
     * @return {?}
     */
    function () { };
    ProductAttributesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-attributes',
                    template: "<ng-container *ngIf=\"product$ | async as product\">\n  <div class=\"container\">\n    <h2>{{ 'productDetails.specification' | cxTranslate }}</h2>\n    <table *ngFor=\"let class of product?.classifications\">\n      <th>\n        <h3>{{ class.name }}</h3>\n      </th>\n      <tr *ngFor=\"let feature of class.features\">\n        <td>{{ feature.name }}</td>\n        <td>\n          <ul>\n            <li *ngFor=\"let featureValue of feature?.featureValues\">\n              {{ featureValue?.value }}\n            </li>\n          </ul>\n        </td>\n      </tr>\n    </table>\n  </div>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ProductAttributesComponent.ctorParameters = function () { return [
        { type: CurrentProductService }
    ]; };
    return ProductAttributesComponent;
}());
export { ProductAttributesComponent };
if (false) {
    /** @type {?} */
    ProductAttributesComponent.prototype.product$;
    /**
     * @type {?}
     * @protected
     */
    ProductAttributesComponent.prototype.currentProductService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1hdHRyaWJ1dGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC10YWJzL3Byb2R1Y3QtYXR0cmlidXRlcy9wcm9kdWN0LWF0dHJpYnV0ZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBVyxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUV0RTtJQVVFLG9DQUFzQixxQkFBNEM7UUFBNUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUpsRSxhQUFRLEdBQXdCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQ25FLFlBQVksQ0FBQyxVQUFVLENBQ3hCLENBQUM7SUFFbUUsQ0FBQztJQUV0RSxvQ0FBb0M7Ozs7O0lBQ3BDLDZDQUFROzs7OztJQUFSLGNBQVksQ0FBQzs7Z0JBYmQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLDRtQkFBa0Q7b0JBQ2xELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFOUSxxQkFBcUI7O0lBZ0I5QixpQ0FBQztDQUFBLEFBZEQsSUFjQztTQVRZLDBCQUEwQjs7O0lBQ3JDLDhDQUVFOzs7OztJQUVVLDJEQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdCwgUHJvZHVjdFNjb3BlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uLy4uL2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1hdHRyaWJ1dGVzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtYXR0cmlidXRlcy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0QXR0cmlidXRlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByb2R1Y3QkOiBPYnNlcnZhYmxlPFByb2R1Y3Q+ID0gdGhpcy5jdXJyZW50UHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdChcbiAgICBQcm9kdWN0U2NvcGUuQVRUUklCVVRFU1xuICApO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjdXJyZW50UHJvZHVjdFNlcnZpY2U6IEN1cnJlbnRQcm9kdWN0U2VydmljZSkge31cblxuICAvLyBUT0RPIGRlcHJlY2F0ZWQgc2luY2UgMS40LCByZW1vdmVcbiAgbmdPbkluaXQoKSB7fVxufVxuIl19