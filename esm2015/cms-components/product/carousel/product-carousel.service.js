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
        refs => refs.map((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXJvdXNlbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9jYXJvdXNlbC9wcm9kdWN0LWNhcm91c2VsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixjQUFjLEVBQ2QsbUJBQW1CLEdBQ3BCLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBTTdDLE1BQU0sT0FBTyxzQkFBc0I7Ozs7OztJQUNqQyxZQUNZLGNBQThCLEVBQzlCLGdCQUF5QyxFQUN6QyxtQkFBd0M7UUFGeEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBeUI7UUFDekMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUNqRCxDQUFDOzs7Ozs7SUFLSixXQUFXLENBQUMsSUFBWTtRQUN0QixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDdkMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLEdBQUc7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUMsQ0FDN0MsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7O0lBRUQsb0JBQW9CLENBQ2xCLElBQVksRUFDWixhQUFxQixFQUNyQixZQUFxQixFQUNyQixvQkFBNkI7UUFFN0IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQ3hELE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDVCxJQUFJLENBQUMsR0FBRzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQ2IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFlBQVksRUFBRSxvQkFBb0IsQ0FBQyxFQUNwRSxFQUNGLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7OztJQUtPLGNBQWMsQ0FDcEIsTUFBZSxFQUNmLFlBQVksR0FBRyxJQUFJLEVBQ25CLG9CQUFvQixHQUFHLElBQUk7O2NBRXJCLElBQUksR0FBaUIsRUFBRTtRQUM3QixJQUFJLFlBQVksRUFBRTtZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDMUI7UUFDRCxJQUFJLG9CQUFvQixJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUU7WUFDdkUsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQztTQUMxQztRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUMxQyxJQUFJLENBQUMsS0FBSyxHQUFHO2dCQUNYLFNBQVMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU87Z0JBQ2hDLE1BQU0sRUFBRSxTQUFTO2FBQ2xCLENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQztZQUM5QyxPQUFPLEVBQUUsU0FBUztZQUNsQixNQUFNLEVBQUUsTUFBTTtTQUNmLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7O1lBOURGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVRDLGNBQWM7WUFEZCx1QkFBdUI7WUFFdkIsbUJBQW1COzs7Ozs7OztJQVdqQixnREFBd0M7Ozs7O0lBQ3hDLGtEQUFtRDs7Ozs7SUFDbkQscURBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUHJvZHVjdCxcbiAgUHJvZHVjdFJlZmVyZW5jZVNlcnZpY2UsXG4gIFByb2R1Y3RTZXJ2aWNlLFxuICBTZW1hbnRpY1BhdGhTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDYXJvdXNlbEl0ZW0gfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0Q2Fyb3VzZWxTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcmVmZXJlbmNlU2VydmljZTogUHJvZHVjdFJlZmVyZW5jZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHNlbWFudGljUGF0aFNlcnZpY2U6IFNlbWFudGljUGF0aFNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBMb2FkcyB0aGUgcHJvZHVjdCBkYXRhIGFuZCBjb252ZXJ0cyBpdCBgQ2Fyb3VzZWxJdGVtYC5cbiAgICovXG4gIGxvYWRQcm9kdWN0KGNvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8Q2Fyb3VzZWxJdGVtPiB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdFNlcnZpY2UuZ2V0KGNvZGUpLnBpcGUoXG4gICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICBtYXAocHJvZHVjdCA9PiB0aGlzLmNvbnZlcnRQcm9kdWN0KHByb2R1Y3QpKVxuICAgICk7XG4gIH1cblxuICBnZXRQcm9kdWN0UmVmZXJlbmNlcyhcbiAgICBjb2RlOiBzdHJpbmcsXG4gICAgcmVmZXJlbmNlVHlwZTogc3RyaW5nLFxuICAgIGRpc3BsYXlUaXRsZTogYm9vbGVhbixcbiAgICBkaXNwbGF5UHJvZHVjdFByaWNlczogYm9vbGVhblxuICApOiBPYnNlcnZhYmxlPENhcm91c2VsSXRlbVtdPiB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlU2VydmljZS5nZXQoY29kZSwgcmVmZXJlbmNlVHlwZSkucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIG1hcChyZWZzID0+XG4gICAgICAgIHJlZnMubWFwKHJlZiA9PlxuICAgICAgICAgIHRoaXMuY29udmVydFByb2R1Y3QocmVmLnRhcmdldCwgZGlzcGxheVRpdGxlLCBkaXNwbGF5UHJvZHVjdFByaWNlcylcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdGhlIHByb2R1Y3QgdG8gYSBnZW5lcmljIENhcm91c2VsSXRlbVxuICAgKi9cbiAgcHJpdmF0ZSBjb252ZXJ0UHJvZHVjdChcbiAgICBzb3VyY2U6IFByb2R1Y3QsXG4gICAgZGlzcGxheVRpdGxlID0gdHJ1ZSxcbiAgICBkaXNwbGF5UHJvZHVjdFByaWNlcyA9IHRydWVcbiAgKTogQ2Fyb3VzZWxJdGVtIHtcbiAgICBjb25zdCBpdGVtOiBDYXJvdXNlbEl0ZW0gPSB7fTtcbiAgICBpZiAoZGlzcGxheVRpdGxlKSB7XG4gICAgICBpdGVtLnRpdGxlID0gc291cmNlLm5hbWU7XG4gICAgfVxuICAgIGlmIChkaXNwbGF5UHJvZHVjdFByaWNlcyAmJiBzb3VyY2UucHJpY2UgJiYgc291cmNlLnByaWNlLmZvcm1hdHRlZFZhbHVlKSB7XG4gICAgICBpdGVtLnByaWNlID0gc291cmNlLnByaWNlLmZvcm1hdHRlZFZhbHVlO1xuICAgIH1cbiAgICBpZiAoc291cmNlLmltYWdlcyAmJiBzb3VyY2UuaW1hZ2VzLlBSSU1BUlkpIHtcbiAgICAgIGl0ZW0ubWVkaWEgPSB7XG4gICAgICAgIGNvbnRhaW5lcjogc291cmNlLmltYWdlcy5QUklNQVJZLFxuICAgICAgICBmb3JtYXQ6ICdwcm9kdWN0JyxcbiAgICAgIH07XG4gICAgfVxuICAgIGl0ZW0ucm91dGUgPSB0aGlzLnNlbWFudGljUGF0aFNlcnZpY2UudHJhbnNmb3JtKHtcbiAgICAgIGN4Um91dGU6ICdwcm9kdWN0JyxcbiAgICAgIHBhcmFtczogc291cmNlLFxuICAgIH0pO1xuICAgIHJldHVybiBpdGVtO1xuICB9XG59XG4iXX0=