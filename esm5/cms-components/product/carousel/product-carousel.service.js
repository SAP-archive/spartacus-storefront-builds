/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ProductReferenceService, ProductService, SemanticPathService, } from '@spartacus/core';
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
    /**
     * Loads the product data and converts it `CarouselItem`.
     * @param {?} code
     * @return {?}
     */
    ProductCarouselService.prototype.loadProduct = /**
     * Loads the product data and converts it `CarouselItem`.
     * @param {?} code
     * @return {?}
     */
    function (code) {
        var _this = this;
        return this.productService.get(code).pipe(filter(Boolean), map((/**
         * @param {?} product
         * @return {?}
         */
        function (product) { return _this.convertProduct(product); })));
    };
    /**
     * @param {?} code
     * @param {?} referenceType
     * @param {?} displayTitle
     * @param {?} displayProductPrices
     * @return {?}
     */
    ProductCarouselService.prototype.getProductReferences = /**
     * @param {?} code
     * @param {?} referenceType
     * @param {?} displayTitle
     * @param {?} displayProductPrices
     * @return {?}
     */
    function (code, referenceType, displayTitle, displayProductPrices) {
        var _this = this;
        return this.referenceService.get(code, referenceType).pipe(filter(Boolean), map((/**
         * @param {?} refs
         * @return {?}
         */
        function (refs) {
            return refs.map((/**
             * @param {?} ref
             * @return {?}
             */
            function (ref) {
                return _this.convertProduct(ref.target, displayTitle, displayProductPrices);
            }));
        })));
    };
    /**
     * Converts the product to a generic CarouselItem
     */
    /**
     * Converts the product to a generic CarouselItem
     * @private
     * @param {?} source
     * @param {?=} displayTitle
     * @param {?=} displayProductPrices
     * @return {?}
     */
    ProductCarouselService.prototype.convertProduct = /**
     * Converts the product to a generic CarouselItem
     * @private
     * @param {?} source
     * @param {?=} displayTitle
     * @param {?=} displayProductPrices
     * @return {?}
     */
    function (source, displayTitle, displayProductPrices) {
        if (displayTitle === void 0) { displayTitle = true; }
        if (displayProductPrices === void 0) { displayProductPrices = true; }
        /** @type {?} */
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
    ProductCarouselService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ProductCarouselService.ctorParameters = function () { return [
        { type: ProductService },
        { type: ProductReferenceService },
        { type: SemanticPathService }
    ]; };
    /** @nocollapse */ ProductCarouselService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ProductCarouselService_Factory() { return new ProductCarouselService(i0.ɵɵinject(i1.ProductService), i0.ɵɵinject(i1.ProductReferenceService), i0.ɵɵinject(i1.SemanticPathService)); }, token: ProductCarouselService, providedIn: "root" });
    return ProductCarouselService;
}());
export { ProductCarouselService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXJvdXNlbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9jYXJvdXNlbC9wcm9kdWN0LWNhcm91c2VsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixjQUFjLEVBQ2QsbUJBQW1CLEdBQ3BCLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBRzdDO0lBSUUsZ0NBQ1ksY0FBOEIsRUFDOUIsZ0JBQXlDLEVBQ3pDLG1CQUF3QztRQUZ4QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF5QjtRQUN6Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBQ2pELENBQUM7SUFFSjs7T0FFRzs7Ozs7O0lBQ0gsNENBQVc7Ozs7O0lBQVgsVUFBWSxJQUFZO1FBQXhCLGlCQUtDO1FBSkMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ3ZDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHOzs7O1FBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUE1QixDQUE0QixFQUFDLENBQzdDLENBQUM7SUFDSixDQUFDOzs7Ozs7OztJQUVELHFEQUFvQjs7Ozs7OztJQUFwQixVQUNFLElBQVksRUFDWixhQUFxQixFQUNyQixZQUFxQixFQUNyQixvQkFBNkI7UUFKL0IsaUJBY0M7UUFSQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FDeEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLEdBQUc7Ozs7UUFBQyxVQUFBLElBQUk7WUFDTixPQUFBLElBQUksQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxHQUFHO2dCQUNWLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFlBQVksRUFBRSxvQkFBb0IsQ0FBQztZQUFuRSxDQUFtRSxFQUNwRTtRQUZELENBRUMsRUFDRixDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7Ozs7OztJQUNLLCtDQUFjOzs7Ozs7OztJQUF0QixVQUNFLE1BQWUsRUFDZixZQUFtQixFQUNuQixvQkFBMkI7UUFEM0IsNkJBQUEsRUFBQSxtQkFBbUI7UUFDbkIscUNBQUEsRUFBQSwyQkFBMkI7O1lBRXJCLElBQUksR0FBaUIsRUFBRTtRQUM3QixJQUFJLFlBQVksRUFBRTtZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDMUI7UUFDRCxJQUFJLG9CQUFvQixJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUU7WUFDdkUsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQztTQUMxQztRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUMxQyxJQUFJLENBQUMsS0FBSyxHQUFHO2dCQUNYLFNBQVMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU87Z0JBQ2hDLE1BQU0sRUFBRSxTQUFTO2FBQ2xCLENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQztZQUM5QyxPQUFPLEVBQUUsU0FBUztZQUNsQixNQUFNLEVBQUUsTUFBTTtTQUNmLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Z0JBOURGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBVEMsY0FBYztnQkFEZCx1QkFBdUI7Z0JBRXZCLG1CQUFtQjs7O2lDQUxyQjtDQTBFQyxBQS9ERCxJQStEQztTQTVEWSxzQkFBc0I7Ozs7OztJQUUvQixnREFBd0M7Ozs7O0lBQ3hDLGtEQUFtRDs7Ozs7SUFDbkQscURBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUHJvZHVjdCxcbiAgUHJvZHVjdFJlZmVyZW5jZVNlcnZpY2UsXG4gIFByb2R1Y3RTZXJ2aWNlLFxuICBTZW1hbnRpY1BhdGhTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDYXJvdXNlbEl0ZW0gfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0Q2Fyb3VzZWxTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcmVmZXJlbmNlU2VydmljZTogUHJvZHVjdFJlZmVyZW5jZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHNlbWFudGljUGF0aFNlcnZpY2U6IFNlbWFudGljUGF0aFNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBMb2FkcyB0aGUgcHJvZHVjdCBkYXRhIGFuZCBjb252ZXJ0cyBpdCBgQ2Fyb3VzZWxJdGVtYC5cbiAgICovXG4gIGxvYWRQcm9kdWN0KGNvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8Q2Fyb3VzZWxJdGVtPiB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdFNlcnZpY2UuZ2V0KGNvZGUpLnBpcGUoXG4gICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICBtYXAocHJvZHVjdCA9PiB0aGlzLmNvbnZlcnRQcm9kdWN0KHByb2R1Y3QpKVxuICAgICk7XG4gIH1cblxuICBnZXRQcm9kdWN0UmVmZXJlbmNlcyhcbiAgICBjb2RlOiBzdHJpbmcsXG4gICAgcmVmZXJlbmNlVHlwZTogc3RyaW5nLFxuICAgIGRpc3BsYXlUaXRsZTogYm9vbGVhbixcbiAgICBkaXNwbGF5UHJvZHVjdFByaWNlczogYm9vbGVhblxuICApOiBPYnNlcnZhYmxlPENhcm91c2VsSXRlbVtdPiB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlU2VydmljZS5nZXQoY29kZSwgcmVmZXJlbmNlVHlwZSkucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIG1hcChyZWZzID0+XG4gICAgICAgIHJlZnMubWFwKHJlZiA9PlxuICAgICAgICAgIHRoaXMuY29udmVydFByb2R1Y3QocmVmLnRhcmdldCwgZGlzcGxheVRpdGxlLCBkaXNwbGF5UHJvZHVjdFByaWNlcylcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdGhlIHByb2R1Y3QgdG8gYSBnZW5lcmljIENhcm91c2VsSXRlbVxuICAgKi9cbiAgcHJpdmF0ZSBjb252ZXJ0UHJvZHVjdChcbiAgICBzb3VyY2U6IFByb2R1Y3QsXG4gICAgZGlzcGxheVRpdGxlID0gdHJ1ZSxcbiAgICBkaXNwbGF5UHJvZHVjdFByaWNlcyA9IHRydWVcbiAgKTogQ2Fyb3VzZWxJdGVtIHtcbiAgICBjb25zdCBpdGVtOiBDYXJvdXNlbEl0ZW0gPSB7fTtcbiAgICBpZiAoZGlzcGxheVRpdGxlKSB7XG4gICAgICBpdGVtLnRpdGxlID0gc291cmNlLm5hbWU7XG4gICAgfVxuICAgIGlmIChkaXNwbGF5UHJvZHVjdFByaWNlcyAmJiBzb3VyY2UucHJpY2UgJiYgc291cmNlLnByaWNlLmZvcm1hdHRlZFZhbHVlKSB7XG4gICAgICBpdGVtLnByaWNlID0gc291cmNlLnByaWNlLmZvcm1hdHRlZFZhbHVlO1xuICAgIH1cbiAgICBpZiAoc291cmNlLmltYWdlcyAmJiBzb3VyY2UuaW1hZ2VzLlBSSU1BUlkpIHtcbiAgICAgIGl0ZW0ubWVkaWEgPSB7XG4gICAgICAgIGNvbnRhaW5lcjogc291cmNlLmltYWdlcy5QUklNQVJZLFxuICAgICAgICBmb3JtYXQ6ICdwcm9kdWN0JyxcbiAgICAgIH07XG4gICAgfVxuICAgIGl0ZW0ucm91dGUgPSB0aGlzLnNlbWFudGljUGF0aFNlcnZpY2UudHJhbnNmb3JtKHtcbiAgICAgIGN4Um91dGU6ICdwcm9kdWN0JyxcbiAgICAgIHBhcmFtczogc291cmNlLFxuICAgIH0pO1xuICAgIHJldHVybiBpdGVtO1xuICB9XG59XG4iXX0=