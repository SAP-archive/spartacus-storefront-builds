/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ProductReferenceService, ProductService, SemanticPathService, } from '@spartacus/core';
import { filter, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
export class ProductCarouselService {
    /**
     * @param {?} productService
     * @param {?} referenceService
     * @param {?} semanticPathService
     */
    constructor(productService, referenceService, semanticPathService) {
        this.productService = productService;
        this.referenceService = referenceService;
        this.semanticPathService = semanticPathService;
    }
    /**
     * Loads the product data and converts it `CarouselItem`.
     * @param {?} code
     * @return {?}
     */
    loadProduct(code) {
        return this.productService.get(code).pipe(filter(Boolean), map((/**
         * @param {?} product
         * @return {?}
         */
        product => this.convertProduct(product))));
    }
    /**
     * @param {?} code
     * @param {?} referenceType
     * @param {?} displayTitle
     * @param {?} displayProductPrices
     * @return {?}
     */
    getProductReferences(code, referenceType, displayTitle, displayProductPrices) {
        return this.referenceService.get(code, referenceType).pipe(filter(Boolean), map((/**
         * @param {?} refs
         * @return {?}
         */
        (refs) => refs.map((/**
         * @param {?} ref
         * @return {?}
         */
        ref => this.convertProduct(ref.target, displayTitle, displayProductPrices))))));
    }
    /**
     * Converts the product to a generic CarouselItem
     * @private
     * @param {?} source
     * @param {?=} displayTitle
     * @param {?=} displayProductPrices
     * @return {?}
     */
    convertProduct(source, displayTitle = true, displayProductPrices = true) {
        /** @type {?} */
        const item = {};
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
    }
}
ProductCarouselService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ProductCarouselService.ctorParameters = () => [
    { type: ProductService },
    { type: ProductReferenceService },
    { type: SemanticPathService }
];
/** @nocollapse */ ProductCarouselService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ProductCarouselService_Factory() { return new ProductCarouselService(i0.ɵɵinject(i1.ProductService), i0.ɵɵinject(i1.ProductReferenceService), i0.ɵɵinject(i1.SemanticPathService)); }, token: ProductCarouselService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ProductCarouselService.prototype.productService;
    /**
     * @type {?}
     * @protected
     */
    ProductCarouselService.prototype.referenceService;
    /**
     * @type {?}
     * @protected
     */
    ProductCarouselService.prototype.semanticPathService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXJvdXNlbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9jYXJvdXNlbC9wcm9kdWN0LWNhcm91c2VsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUdMLHVCQUF1QixFQUN2QixjQUFjLEVBQ2QsbUJBQW1CLEdBQ3BCLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBTTdDLE1BQU0sT0FBTyxzQkFBc0I7Ozs7OztJQUNqQyxZQUNZLGNBQThCLEVBQzlCLGdCQUF5QyxFQUN6QyxtQkFBd0M7UUFGeEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBeUI7UUFDekMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUNqRCxDQUFDOzs7Ozs7SUFLSixXQUFXLENBQUMsSUFBWTtRQUN0QixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDdkMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLEdBQUc7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUMsQ0FDN0MsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7O0lBRUQsb0JBQW9CLENBQ2xCLElBQVksRUFDWixhQUFxQixFQUNyQixZQUFxQixFQUNyQixvQkFBNkI7UUFFN0IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQ3hELE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHOzs7O1FBQUMsQ0FBQyxJQUF3QixFQUFFLEVBQUUsQ0FDL0IsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUNiLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLENBQUMsRUFDcEUsRUFDRixDQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7Ozs7SUFLTyxjQUFjLENBQ3BCLE1BQWUsRUFDZixZQUFZLEdBQUcsSUFBSSxFQUNuQixvQkFBb0IsR0FBRyxJQUFJOztjQUVyQixJQUFJLEdBQXdCLEVBQUU7UUFDcEMsSUFBSSxZQUFZLEVBQUU7WUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxvQkFBb0IsSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFO1lBQ3ZFLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7U0FDMUM7UUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDMUMsSUFBSSxDQUFDLEtBQUssR0FBRztnQkFDWCxTQUFTLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPO2dCQUNoQyxNQUFNLEVBQUUsU0FBUzthQUNsQixDQUFDO1NBQ0g7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUM7WUFDOUMsT0FBTyxFQUFFLFNBQVM7WUFDbEIsTUFBTSxFQUFFLE1BQU07U0FDZixDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7OztZQTlERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFUQyxjQUFjO1lBRGQsdUJBQXVCO1lBRXZCLG1CQUFtQjs7Ozs7Ozs7SUFXakIsZ0RBQXdDOzs7OztJQUN4QyxrREFBbUQ7Ozs7O0lBQ25ELHFEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFByb2R1Y3QsXG4gIFByb2R1Y3RSZWZlcmVuY2UsXG4gIFByb2R1Y3RSZWZlcmVuY2VTZXJ2aWNlLFxuICBQcm9kdWN0U2VydmljZSxcbiAgU2VtYW50aWNQYXRoU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUHJvZHVjdENhcm91c2VsSXRlbSB9IGZyb20gJy4vcHJvZHVjdC1jYXJvdXNlbC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0Q2Fyb3VzZWxTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcmVmZXJlbmNlU2VydmljZTogUHJvZHVjdFJlZmVyZW5jZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHNlbWFudGljUGF0aFNlcnZpY2U6IFNlbWFudGljUGF0aFNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBMb2FkcyB0aGUgcHJvZHVjdCBkYXRhIGFuZCBjb252ZXJ0cyBpdCBgQ2Fyb3VzZWxJdGVtYC5cbiAgICovXG4gIGxvYWRQcm9kdWN0KGNvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8UHJvZHVjdENhcm91c2VsSXRlbT4ge1xuICAgIHJldHVybiB0aGlzLnByb2R1Y3RTZXJ2aWNlLmdldChjb2RlKS5waXBlKFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgbWFwKHByb2R1Y3QgPT4gdGhpcy5jb252ZXJ0UHJvZHVjdChwcm9kdWN0KSlcbiAgICApO1xuICB9XG5cbiAgZ2V0UHJvZHVjdFJlZmVyZW5jZXMoXG4gICAgY29kZTogc3RyaW5nLFxuICAgIHJlZmVyZW5jZVR5cGU6IHN0cmluZyxcbiAgICBkaXNwbGF5VGl0bGU6IGJvb2xlYW4sXG4gICAgZGlzcGxheVByb2R1Y3RQcmljZXM6IGJvb2xlYW5cbiAgKTogT2JzZXJ2YWJsZTxQcm9kdWN0Q2Fyb3VzZWxJdGVtW10+IHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2VTZXJ2aWNlLmdldChjb2RlLCByZWZlcmVuY2VUeXBlKS5waXBlKFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgbWFwKChyZWZzOiBQcm9kdWN0UmVmZXJlbmNlW10pID0+XG4gICAgICAgIHJlZnMubWFwKHJlZiA9PlxuICAgICAgICAgIHRoaXMuY29udmVydFByb2R1Y3QocmVmLnRhcmdldCwgZGlzcGxheVRpdGxlLCBkaXNwbGF5UHJvZHVjdFByaWNlcylcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdGhlIHByb2R1Y3QgdG8gYSBnZW5lcmljIENhcm91c2VsSXRlbVxuICAgKi9cbiAgcHJpdmF0ZSBjb252ZXJ0UHJvZHVjdChcbiAgICBzb3VyY2U6IFByb2R1Y3QsXG4gICAgZGlzcGxheVRpdGxlID0gdHJ1ZSxcbiAgICBkaXNwbGF5UHJvZHVjdFByaWNlcyA9IHRydWVcbiAgKTogUHJvZHVjdENhcm91c2VsSXRlbSB7XG4gICAgY29uc3QgaXRlbTogUHJvZHVjdENhcm91c2VsSXRlbSA9IHt9O1xuICAgIGlmIChkaXNwbGF5VGl0bGUpIHtcbiAgICAgIGl0ZW0udGl0bGUgPSBzb3VyY2UubmFtZTtcbiAgICB9XG4gICAgaWYgKGRpc3BsYXlQcm9kdWN0UHJpY2VzICYmIHNvdXJjZS5wcmljZSAmJiBzb3VyY2UucHJpY2UuZm9ybWF0dGVkVmFsdWUpIHtcbiAgICAgIGl0ZW0ucHJpY2UgPSBzb3VyY2UucHJpY2UuZm9ybWF0dGVkVmFsdWU7XG4gICAgfVxuICAgIGlmIChzb3VyY2UuaW1hZ2VzICYmIHNvdXJjZS5pbWFnZXMuUFJJTUFSWSkge1xuICAgICAgaXRlbS5tZWRpYSA9IHtcbiAgICAgICAgY29udGFpbmVyOiBzb3VyY2UuaW1hZ2VzLlBSSU1BUlksXG4gICAgICAgIGZvcm1hdDogJ3Byb2R1Y3QnLFxuICAgICAgfTtcbiAgICB9XG4gICAgaXRlbS5yb3V0ZSA9IHRoaXMuc2VtYW50aWNQYXRoU2VydmljZS50cmFuc2Zvcm0oe1xuICAgICAgY3hSb3V0ZTogJ3Byb2R1Y3QnLFxuICAgICAgcGFyYW1zOiBzb3VyY2UsXG4gICAgfSk7XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cbn1cbiJdfQ==