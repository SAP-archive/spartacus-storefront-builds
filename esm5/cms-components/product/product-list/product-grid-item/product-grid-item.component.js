import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
var ProductGridItemComponent = /** @class */ (function () {
    function ProductGridItemComponent() {
    }
    __decorate([
        Input()
    ], ProductGridItemComponent.prototype, "product", void 0);
    ProductGridItemComponent = __decorate([
        Component({
            selector: 'cx-product-grid-item',
            template: "<a\n  [routerLink]=\"{ cxRoute: 'product', params: product } | cxUrl\"\n  class=\"cx-product-image-container\"\n>\n  <cx-media\n    class=\"cx-product-image\"\n    [container]=\"product.images?.PRIMARY\"\n    format=\"product\"\n    [alt]=\"product.summary\"\n  ></cx-media>\n</a>\n<a\n  [routerLink]=\"{ cxRoute: 'product', params: product } | cxUrl\"\n  class=\"cx-product-name\"\n  [innerHTML]=\"product.nameHtml\"\n></a>\n\n<div class=\"cx-product-rating\">\n  <cx-star-rating\n    *ngIf=\"product.averageRating\"\n    [rating]=\"product?.averageRating\"\n    [disabled]=\"true\"\n  ></cx-star-rating>\n  <div *ngIf=\"!product.averageRating\">\n    {{ 'productDetails.noReviews' | cxTranslate }}\n  </div>\n</div>\n<div class=\"cx-product-price-container\">\n  <div class=\"cx-product-price\" aria-label=\"Product price\">\n    {{ product.price?.formattedValue }}\n  </div>\n</div>\n\n<ng-container *cxFeatureLevel=\"'1.5'\">\n  <div class=\"cx-variant-style-icons\" *ngIf=\"product.variantOptions\">\n    <cx-variant-style-icons\n      [variants]=\"product.variantOptions\"\n    ></cx-variant-style-icons>\n  </div>\n</ng-container>\n\n<cx-add-to-cart\n  *ngIf=\"product.stock?.stockLevelStatus !== 'outOfStock'\"\n  [showQuantity]=\"false\"\n  [product]=\"product\"\n></cx-add-to-cart>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ProductGridItemComponent);
    return ProductGridItemComponent;
}());
export { ProductGridItemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1ncmlkLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWxpc3QvcHJvZHVjdC1ncmlkLWl0ZW0vcHJvZHVjdC1ncmlkLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8xRTtJQUFBO0lBRUEsQ0FBQztJQURVO1FBQVIsS0FBSyxFQUFFOzZEQUFjO0lBRFgsd0JBQXdCO1FBTHBDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMseXhDQUFpRDtZQUNqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO09BQ1csd0JBQXdCLENBRXBDO0lBQUQsK0JBQUM7Q0FBQSxBQUZELElBRUM7U0FGWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LWdyaWQtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LWdyaWQtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0R3JpZEl0ZW1Db21wb25lbnQge1xuICBASW5wdXQoKSBwcm9kdWN0OiBhbnk7XG59XG4iXX0=