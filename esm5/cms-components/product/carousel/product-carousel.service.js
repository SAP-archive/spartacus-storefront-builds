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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXJvdXNlbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9jYXJvdXNlbC9wcm9kdWN0LWNhcm91c2VsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUNMLE9BQU8sRUFDUCxnQkFBZ0IsRUFDaEIsdUJBQXVCLEVBQ3ZCLGNBQWMsRUFDZCxtQkFBbUIsR0FDcEIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFNN0M7SUFDRSxnQ0FDWSxjQUE4QixFQUM5QixnQkFBeUMsRUFDekMsbUJBQXdDO1FBRnhDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXlCO1FBQ3pDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFDakQsQ0FBQztJQUVKOztPQUVHO0lBQ0gsNENBQVcsR0FBWCxVQUFZLElBQVk7UUFBeEIsaUJBS0M7UUFKQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDdkMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLEdBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FDN0MsQ0FBQztJQUNKLENBQUM7SUFFRCxxREFBb0IsR0FBcEIsVUFDRSxJQUFZLEVBQ1osYUFBcUIsRUFDckIsWUFBcUIsRUFDckIsb0JBQTZCO1FBSi9CLGlCQWNDO1FBUkMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQ3hELE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHLENBQUMsVUFBQyxJQUF3QjtZQUMzQixPQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHO2dCQUNWLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFlBQVksRUFBRSxvQkFBb0IsQ0FBQztZQUFuRSxDQUFtRSxDQUNwRTtRQUZELENBRUMsQ0FDRixDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSywrQ0FBYyxHQUF0QixVQUNFLE1BQWUsRUFDZixZQUFtQixFQUNuQixvQkFBMkI7UUFEM0IsNkJBQUEsRUFBQSxtQkFBbUI7UUFDbkIscUNBQUEsRUFBQSwyQkFBMkI7UUFFM0IsSUFBTSxJQUFJLEdBQXdCLEVBQUUsQ0FBQztRQUNyQyxJQUFJLFlBQVksRUFBRTtZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDMUI7UUFDRCxJQUFJLG9CQUFvQixJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUU7WUFDdkUsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQztTQUMxQztRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUMxQyxJQUFJLENBQUMsS0FBSyxHQUFHO2dCQUNYLFNBQVMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU87Z0JBQ2hDLE1BQU0sRUFBRSxTQUFTO2FBQ2xCLENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQztZQUM5QyxPQUFPLEVBQUUsU0FBUztZQUNsQixNQUFNLEVBQUUsTUFBTTtTQUNmLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Z0JBekQyQixjQUFjO2dCQUNaLHVCQUF1QjtnQkFDcEIsbUJBQW1COzs7SUFKekMsc0JBQXNCO1FBSGxDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxzQkFBc0IsQ0E0RGxDO2lDQTNFRDtDQTJFQyxBQTVERCxJQTREQztTQTVEWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBQcm9kdWN0LFxuICBQcm9kdWN0UmVmZXJlbmNlLFxuICBQcm9kdWN0UmVmZXJlbmNlU2VydmljZSxcbiAgUHJvZHVjdFNlcnZpY2UsXG4gIFNlbWFudGljUGF0aFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByb2R1Y3RDYXJvdXNlbEl0ZW0gfSBmcm9tICcuL3Byb2R1Y3QtY2Fyb3VzZWwubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdENhcm91c2VsU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJlZmVyZW5jZVNlcnZpY2U6IFByb2R1Y3RSZWZlcmVuY2VTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBzZW1hbnRpY1BhdGhTZXJ2aWNlOiBTZW1hbnRpY1BhdGhTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogTG9hZHMgdGhlIHByb2R1Y3QgZGF0YSBhbmQgY29udmVydHMgaXQgYENhcm91c2VsSXRlbWAuXG4gICAqL1xuICBsb2FkUHJvZHVjdChjb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFByb2R1Y3RDYXJvdXNlbEl0ZW0+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0U2VydmljZS5nZXQoY29kZSkucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIG1hcChwcm9kdWN0ID0+IHRoaXMuY29udmVydFByb2R1Y3QocHJvZHVjdCkpXG4gICAgKTtcbiAgfVxuXG4gIGdldFByb2R1Y3RSZWZlcmVuY2VzKFxuICAgIGNvZGU6IHN0cmluZyxcbiAgICByZWZlcmVuY2VUeXBlOiBzdHJpbmcsXG4gICAgZGlzcGxheVRpdGxlOiBib29sZWFuLFxuICAgIGRpc3BsYXlQcm9kdWN0UHJpY2VzOiBib29sZWFuXG4gICk6IE9ic2VydmFibGU8UHJvZHVjdENhcm91c2VsSXRlbVtdPiB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlU2VydmljZS5nZXQoY29kZSwgcmVmZXJlbmNlVHlwZSkucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIG1hcCgocmVmczogUHJvZHVjdFJlZmVyZW5jZVtdKSA9PlxuICAgICAgICByZWZzLm1hcChyZWYgPT5cbiAgICAgICAgICB0aGlzLmNvbnZlcnRQcm9kdWN0KHJlZi50YXJnZXQsIGRpc3BsYXlUaXRsZSwgZGlzcGxheVByb2R1Y3RQcmljZXMpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHRoZSBwcm9kdWN0IHRvIGEgZ2VuZXJpYyBDYXJvdXNlbEl0ZW1cbiAgICovXG4gIHByaXZhdGUgY29udmVydFByb2R1Y3QoXG4gICAgc291cmNlOiBQcm9kdWN0LFxuICAgIGRpc3BsYXlUaXRsZSA9IHRydWUsXG4gICAgZGlzcGxheVByb2R1Y3RQcmljZXMgPSB0cnVlXG4gICk6IFByb2R1Y3RDYXJvdXNlbEl0ZW0ge1xuICAgIGNvbnN0IGl0ZW06IFByb2R1Y3RDYXJvdXNlbEl0ZW0gPSB7fTtcbiAgICBpZiAoZGlzcGxheVRpdGxlKSB7XG4gICAgICBpdGVtLnRpdGxlID0gc291cmNlLm5hbWU7XG4gICAgfVxuICAgIGlmIChkaXNwbGF5UHJvZHVjdFByaWNlcyAmJiBzb3VyY2UucHJpY2UgJiYgc291cmNlLnByaWNlLmZvcm1hdHRlZFZhbHVlKSB7XG4gICAgICBpdGVtLnByaWNlID0gc291cmNlLnByaWNlLmZvcm1hdHRlZFZhbHVlO1xuICAgIH1cbiAgICBpZiAoc291cmNlLmltYWdlcyAmJiBzb3VyY2UuaW1hZ2VzLlBSSU1BUlkpIHtcbiAgICAgIGl0ZW0ubWVkaWEgPSB7XG4gICAgICAgIGNvbnRhaW5lcjogc291cmNlLmltYWdlcy5QUklNQVJZLFxuICAgICAgICBmb3JtYXQ6ICdwcm9kdWN0JyxcbiAgICAgIH07XG4gICAgfVxuICAgIGl0ZW0ucm91dGUgPSB0aGlzLnNlbWFudGljUGF0aFNlcnZpY2UudHJhbnNmb3JtKHtcbiAgICAgIGN4Um91dGU6ICdwcm9kdWN0JyxcbiAgICAgIHBhcmFtczogc291cmNlLFxuICAgIH0pO1xuICAgIHJldHVybiBpdGVtO1xuICB9XG59XG4iXX0=