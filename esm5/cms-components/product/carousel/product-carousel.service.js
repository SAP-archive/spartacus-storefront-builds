import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Product, ProductReference, ProductReferenceService, ProductService, SemanticPathService, } from '@spartacus/core';
import { filter, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var ProductCarouselService = /** @class */ (function () {
    function ProductCarouselService(productService, referenceService, semanticPathService) {
        this.productService = productService;
        this.referenceService = referenceService;
        this.semanticPathService = semanticPathService;
    }
    /**
     * Loads the product data and converts it `CarouselItem`.
     */
    ProductCarouselService.prototype.loadProduct = function (code) {
        var _this = this;
        return this.productService.get(code).pipe(filter(Boolean), map(function (product) { return _this.convertProduct(product); }));
    };
    ProductCarouselService.prototype.getProductReferences = function (code, referenceType, displayTitle, displayProductPrices) {
        var _this = this;
        return this.referenceService.get(code, referenceType).pipe(filter(Boolean), map(function (refs) {
            return refs.map(function (ref) {
                return _this.convertProduct(ref.target, displayTitle, displayProductPrices);
            });
        }));
    };
    /**
     * Converts the product to a generic CarouselItem
     */
    ProductCarouselService.prototype.convertProduct = function (source, displayTitle, displayProductPrices) {
        if (displayTitle === void 0) { displayTitle = true; }
        if (displayProductPrices === void 0) { displayProductPrices = true; }
        var item = {};
        if (displayTitle) {
            item.title = source.name;
        }
        if (displayProductPrices && source.price && source.price.formattedValue) {
            item.price = source.price.formattedValue;
        }
        if (source.images && source.images.PRIMARY) {
            item.media = {
                container: source.images.PRIMARY,
                format: 'product',
            };
        }
        item.route = this.semanticPathService.transform({
            cxRoute: 'product',
            params: source,
        });
        return item;
    };
    ProductCarouselService.ctorParameters = function () { return [
        { type: ProductService },
        { type: ProductReferenceService },
        { type: SemanticPathService }
    ]; };
    ProductCarouselService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProductCarouselService_Factory() { return new ProductCarouselService(i0.ɵɵinject(i1.ProductService), i0.ɵɵinject(i1.ProductReferenceService), i0.ɵɵinject(i1.SemanticPathService)); }, token: ProductCarouselService, providedIn: "root" });
    ProductCarouselService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], ProductCarouselService);
    return ProductCarouselService;
}());
export { ProductCarouselService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXJvdXNlbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9jYXJvdXNlbC9wcm9kdWN0LWNhcm91c2VsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUNMLE9BQU8sRUFDUCxnQkFBZ0IsRUFDaEIsdUJBQXVCLEVBQ3ZCLGNBQWMsRUFDZCxtQkFBbUIsR0FDcEIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFNN0M7SUFDRSxnQ0FDWSxjQUE4QixFQUM5QixnQkFBeUMsRUFDekMsbUJBQXdDO1FBRnhDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXlCO1FBQ3pDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFDakQsQ0FBQztJQUVKOztPQUVHO0lBQ0gsNENBQVcsR0FBWCxVQUFZLElBQVk7UUFBeEIsaUJBS0M7UUFKQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDdkMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLEdBQUcsQ0FBQyxVQUFDLE9BQU8sSUFBSyxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FDL0MsQ0FBQztJQUNKLENBQUM7SUFFRCxxREFBb0IsR0FBcEIsVUFDRSxJQUFZLEVBQ1osYUFBcUIsRUFDckIsWUFBcUIsRUFDckIsb0JBQTZCO1FBSi9CLGlCQWNDO1FBUkMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQ3hELE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHLENBQUMsVUFBQyxJQUF3QjtZQUMzQixPQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHO2dCQUNYLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFlBQVksRUFBRSxvQkFBb0IsQ0FBQztZQUFuRSxDQUFtRSxDQUNwRTtRQUZELENBRUMsQ0FDRixDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSywrQ0FBYyxHQUF0QixVQUNFLE1BQWUsRUFDZixZQUFtQixFQUNuQixvQkFBMkI7UUFEM0IsNkJBQUEsRUFBQSxtQkFBbUI7UUFDbkIscUNBQUEsRUFBQSwyQkFBMkI7UUFFM0IsSUFBTSxJQUFJLEdBQXdCLEVBQUUsQ0FBQztRQUNyQyxJQUFJLFlBQVksRUFBRTtZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDMUI7UUFDRCxJQUFJLG9CQUFvQixJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUU7WUFDdkUsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQztTQUMxQztRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUMxQyxJQUFJLENBQUMsS0FBSyxHQUFHO2dCQUNYLFNBQVMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU87Z0JBQ2hDLE1BQU0sRUFBRSxTQUFTO2FBQ2xCLENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQztZQUM5QyxPQUFPLEVBQUUsU0FBUztZQUNsQixNQUFNLEVBQUUsTUFBTTtTQUNmLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Z0JBekQyQixjQUFjO2dCQUNaLHVCQUF1QjtnQkFDcEIsbUJBQW1COzs7SUFKekMsc0JBQXNCO1FBSGxDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxzQkFBc0IsQ0E0RGxDO2lDQTNFRDtDQTJFQyxBQTVERCxJQTREQztTQTVEWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBQcm9kdWN0LFxuICBQcm9kdWN0UmVmZXJlbmNlLFxuICBQcm9kdWN0UmVmZXJlbmNlU2VydmljZSxcbiAgUHJvZHVjdFNlcnZpY2UsXG4gIFNlbWFudGljUGF0aFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByb2R1Y3RDYXJvdXNlbEl0ZW0gfSBmcm9tICcuL3Byb2R1Y3QtY2Fyb3VzZWwubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdENhcm91c2VsU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJlZmVyZW5jZVNlcnZpY2U6IFByb2R1Y3RSZWZlcmVuY2VTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBzZW1hbnRpY1BhdGhTZXJ2aWNlOiBTZW1hbnRpY1BhdGhTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogTG9hZHMgdGhlIHByb2R1Y3QgZGF0YSBhbmQgY29udmVydHMgaXQgYENhcm91c2VsSXRlbWAuXG4gICAqL1xuICBsb2FkUHJvZHVjdChjb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFByb2R1Y3RDYXJvdXNlbEl0ZW0+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0U2VydmljZS5nZXQoY29kZSkucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIG1hcCgocHJvZHVjdCkgPT4gdGhpcy5jb252ZXJ0UHJvZHVjdChwcm9kdWN0KSlcbiAgICApO1xuICB9XG5cbiAgZ2V0UHJvZHVjdFJlZmVyZW5jZXMoXG4gICAgY29kZTogc3RyaW5nLFxuICAgIHJlZmVyZW5jZVR5cGU6IHN0cmluZyxcbiAgICBkaXNwbGF5VGl0bGU6IGJvb2xlYW4sXG4gICAgZGlzcGxheVByb2R1Y3RQcmljZXM6IGJvb2xlYW5cbiAgKTogT2JzZXJ2YWJsZTxQcm9kdWN0Q2Fyb3VzZWxJdGVtW10+IHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2VTZXJ2aWNlLmdldChjb2RlLCByZWZlcmVuY2VUeXBlKS5waXBlKFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgbWFwKChyZWZzOiBQcm9kdWN0UmVmZXJlbmNlW10pID0+XG4gICAgICAgIHJlZnMubWFwKChyZWYpID0+XG4gICAgICAgICAgdGhpcy5jb252ZXJ0UHJvZHVjdChyZWYudGFyZ2V0LCBkaXNwbGF5VGl0bGUsIGRpc3BsYXlQcm9kdWN0UHJpY2VzKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyB0aGUgcHJvZHVjdCB0byBhIGdlbmVyaWMgQ2Fyb3VzZWxJdGVtXG4gICAqL1xuICBwcml2YXRlIGNvbnZlcnRQcm9kdWN0KFxuICAgIHNvdXJjZTogUHJvZHVjdCxcbiAgICBkaXNwbGF5VGl0bGUgPSB0cnVlLFxuICAgIGRpc3BsYXlQcm9kdWN0UHJpY2VzID0gdHJ1ZVxuICApOiBQcm9kdWN0Q2Fyb3VzZWxJdGVtIHtcbiAgICBjb25zdCBpdGVtOiBQcm9kdWN0Q2Fyb3VzZWxJdGVtID0ge307XG4gICAgaWYgKGRpc3BsYXlUaXRsZSkge1xuICAgICAgaXRlbS50aXRsZSA9IHNvdXJjZS5uYW1lO1xuICAgIH1cbiAgICBpZiAoZGlzcGxheVByb2R1Y3RQcmljZXMgJiYgc291cmNlLnByaWNlICYmIHNvdXJjZS5wcmljZS5mb3JtYXR0ZWRWYWx1ZSkge1xuICAgICAgaXRlbS5wcmljZSA9IHNvdXJjZS5wcmljZS5mb3JtYXR0ZWRWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHNvdXJjZS5pbWFnZXMgJiYgc291cmNlLmltYWdlcy5QUklNQVJZKSB7XG4gICAgICBpdGVtLm1lZGlhID0ge1xuICAgICAgICBjb250YWluZXI6IHNvdXJjZS5pbWFnZXMuUFJJTUFSWSxcbiAgICAgICAgZm9ybWF0OiAncHJvZHVjdCcsXG4gICAgICB9O1xuICAgIH1cbiAgICBpdGVtLnJvdXRlID0gdGhpcy5zZW1hbnRpY1BhdGhTZXJ2aWNlLnRyYW5zZm9ybSh7XG4gICAgICBjeFJvdXRlOiAncHJvZHVjdCcsXG4gICAgICBwYXJhbXM6IHNvdXJjZSxcbiAgICB9KTtcbiAgICByZXR1cm4gaXRlbTtcbiAgfVxufVxuIl19