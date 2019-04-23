/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
var ProductAttributesComponent = /** @class */ (function () {
    function ProductAttributesComponent() {
    }
    ProductAttributesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-attributes',
                    template: "<table *ngFor=\"let class of product?.classifications\">\n  <th>\n    <h3>{{ class.name }}</h3>\n  </th>\n  <tr *ngFor=\"let feature of class.features\">\n    <td>{{ feature.name }}</td>\n    <td>\n      <ul>\n        <li *ngFor=\"let featureValue of feature?.featureValues\">\n          {{ featureValue?.value }}\n        </li>\n      </ul>\n    </td>\n  </tr>\n</table>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    ProductAttributesComponent.propDecorators = {
        product: [{ type: Input }]
    };
    return ProductAttributesComponent;
}());
export { ProductAttributesComponent };
if (false) {
    /** @type {?} */
    ProductAttributesComponent.prototype.product;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1hdHRyaWJ1dGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9wcm9kdWN0L2NvbXBvbmVudHMvcHJvZHVjdC10YWJzL3Byb2R1Y3QtYXR0cmlidXRlcy9wcm9kdWN0LWF0dHJpYnV0ZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcxRTtJQUFBO0lBT0EsQ0FBQzs7Z0JBUEEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLGlZQUFrRDtvQkFDbEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7MEJBRUUsS0FBSzs7SUFDUixpQ0FBQztDQUFBLEFBUEQsSUFPQztTQUZZLDBCQUEwQjs7O0lBQ3JDLDZDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1hdHRyaWJ1dGVzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtYXR0cmlidXRlcy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0QXR0cmlidXRlc0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHByb2R1Y3Q6IFByb2R1Y3Q7XG59XG4iXX0=