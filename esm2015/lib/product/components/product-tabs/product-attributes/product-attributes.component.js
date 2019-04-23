/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
export class ProductAttributesComponent {
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
if (false) {
    /** @type {?} */
    ProductAttributesComponent.prototype.product;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1hdHRyaWJ1dGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9wcm9kdWN0L2NvbXBvbmVudHMvcHJvZHVjdC10YWJzL3Byb2R1Y3QtYXR0cmlidXRlcy9wcm9kdWN0LWF0dHJpYnV0ZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVExRSxNQUFNLE9BQU8sMEJBQTBCOzs7WUFMdEMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLGlZQUFrRDtnQkFDbEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OztzQkFFRSxLQUFLOzs7O0lBQU4sNkNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LWF0dHJpYnV0ZXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1hdHRyaWJ1dGVzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RBdHRyaWJ1dGVzQ29tcG9uZW50IHtcbiAgQElucHV0KCkgcHJvZHVjdDogUHJvZHVjdDtcbn1cbiJdfQ==