/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
var ProductGridItemComponent = /** @class */ (function () {
    function ProductGridItemComponent() {
    }
    ProductGridItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-grid-item',
                    template: "<a\n  [routerLink]=\"\n    { route: 'product', params: product | stripHtml } | cxTranslateUrl\n  \"\n  class=\"cx-product-image-container\"\n>\n  <cx-picture\n    class=\"cx-product-image\"\n    [imageContainer]=\"product.images?.PRIMARY\"\n    imageFormat=\"product\"\n    [imageAlt]=\"product.summary\"\n  ></cx-picture>\n</a>\n<a\n  [routerLink]=\"\n    { route: 'product', params: product | stripHtml } | cxTranslateUrl\n  \"\n  class=\"cx-product-name\"\n  [innerHTML]=\"product.name\"\n  >{{ product.name }}</a\n>\n\n<div class=\"cx-product-rating\">\n  <cx-star-rating\n    [rating]=\"product?.averageRating\"\n    [disabled]=\"true\"\n  ></cx-star-rating>\n</div>\n<div class=\"cx-product-price-container\">\n  <div class=\"cx-product-price\" aria-label=\"Product price\">\n    {{ product.price.formattedValue }}\n  </div>\n</div>\n\n<cx-add-to-cart\n  *ngIf=\"product.stock.stockLevelStatus !== 'outOfStock'\"\n  [productCode]=\"product.code\"\n></cx-add-to-cart>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    ProductGridItemComponent.propDecorators = {
        product: [{ type: Input }]
    };
    return ProductGridItemComponent;
}());
export { ProductGridItemComponent };
if (false) {
    /** @type {?} */
    ProductGridItemComponent.prototype.product;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1ncmlkLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3Byb2R1Y3QvY29tcG9uZW50cy9wcm9kdWN0LWxpc3QvcHJvZHVjdC1ncmlkLWl0ZW0vcHJvZHVjdC1ncmlkLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRTtJQUFBO0lBT0EsQ0FBQzs7Z0JBUEEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLDA5QkFBaUQ7b0JBQ2pELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OzBCQUVFLEtBQUs7O0lBQ1IsK0JBQUM7Q0FBQSxBQVBELElBT0M7U0FGWSx3QkFBd0I7OztJQUNuQywyQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LWdyaWQtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LWdyaWQtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0R3JpZEl0ZW1Db21wb25lbnQge1xuICBASW5wdXQoKSBwcm9kdWN0OiBhbnk7XG59XG4iXX0=