/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
var ProductAttributesComponent = /** @class */ (function () {
    function ProductAttributesComponent() {
    }
    ProductAttributesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-attributes',
                    template: "<table *ngFor=\"let class of product?.classifications\">\n  <th>\n    <h3>{{ class.name }}</h3>\n  </th>\n  <tr *ngFor=\"let feature of class.features\">\n    <td>{{ feature.name }}</td>\n    <td>\n      <ul>\n        <li *ngFor=\"let featureValue of feature?.featureValues\">\n          {{ featureValue?.value }}\n        </li>\n      </ul>\n    </td>\n  </tr>\n</table>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["table{width:var(--cx-width,100%);margin:var(--cx-margin,0 0 30px 0)}table th h3{margin:var(--cx-margin,0 0 18px 0)}table tr{border-top:var(--cx-border-top,1px solid var(--cx-g-color-light));border-bottom:var(--cx-border-bottom,1px solid var(--cx-g-color-light))}table td{padding:var(--cx-padding,12px 0 12px 0);vertical-align:var(--cx-vertical-align,top);width:var(--cx-width,50%)}table ul{list-style:var(--cx-list-style,none);padding:var(--cx-padding,0 0 0 0)}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1hdHRyaWJ1dGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9wcm9kdWN0L2NvbXBvbmVudHMvcHJvZHVjdC10YWJzL3Byb2R1Y3QtYXR0cmlidXRlcy9wcm9kdWN0LWF0dHJpYnV0ZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRTtJQUFBO0lBU0EsQ0FBQzs7Z0JBVEEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLGlZQUFrRDtvQkFFbEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7OzBCQUVFLEtBQUs7O0lBRVIsaUNBQUM7Q0FBQSxBQVRELElBU0M7U0FIWSwwQkFBMEI7OztJQUNyQyw2Q0FDYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtYXR0cmlidXRlcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LWF0dHJpYnV0ZXMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9kdWN0LWF0dHJpYnV0ZXMuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RBdHRyaWJ1dGVzQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgcHJvZHVjdDogYW55O1xufVxuIl19