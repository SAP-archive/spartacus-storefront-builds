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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXJvdXNlbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9jYXJvdXNlbC9wcm9kdWN0LWNhcm91c2VsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUdMLHVCQUF1QixFQUN2QixjQUFjLEVBQ2QsbUJBQW1CLEdBQ3BCLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBRzdDO0lBSUUsZ0NBQ1ksY0FBOEIsRUFDOUIsZ0JBQXlDLEVBQ3pDLG1CQUF3QztRQUZ4QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF5QjtRQUN6Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBQ2pELENBQUM7SUFFSjs7T0FFRzs7Ozs7O0lBQ0gsNENBQVc7Ozs7O0lBQVgsVUFBWSxJQUFZO1FBQXhCLGlCQUtDO1FBSkMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ3ZDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHOzs7O1FBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUE1QixDQUE0QixFQUFDLENBQzdDLENBQUM7SUFDSixDQUFDOzs7Ozs7OztJQUVELHFEQUFvQjs7Ozs7OztJQUFwQixVQUNFLElBQVksRUFDWixhQUFxQixFQUNyQixZQUFxQixFQUNyQixvQkFBNkI7UUFKL0IsaUJBY0M7UUFSQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FDeEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLEdBQUc7Ozs7UUFBQyxVQUFDLElBQXdCO1lBQzNCLE9BQUEsSUFBSSxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFBLEdBQUc7Z0JBQ1YsT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixDQUFDO1lBQW5FLENBQW1FLEVBQ3BFO1FBRkQsQ0FFQyxFQUNGLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRzs7Ozs7Ozs7O0lBQ0ssK0NBQWM7Ozs7Ozs7O0lBQXRCLFVBQ0UsTUFBZSxFQUNmLFlBQW1CLEVBQ25CLG9CQUEyQjtRQUQzQiw2QkFBQSxFQUFBLG1CQUFtQjtRQUNuQixxQ0FBQSxFQUFBLDJCQUEyQjs7WUFFckIsSUFBSSxHQUF3QixFQUFFO1FBQ3BDLElBQUksWUFBWSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztTQUMxQjtRQUNELElBQUksb0JBQW9CLElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRTtZQUN2RSxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDO1NBQzFDO1FBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQzFDLElBQUksQ0FBQyxLQUFLLEdBQUc7Z0JBQ1gsU0FBUyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTztnQkFDaEMsTUFBTSxFQUFFLFNBQVM7YUFDbEIsQ0FBQztTQUNIO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDO1lBQzlDLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLE1BQU0sRUFBRSxNQUFNO1NBQ2YsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOztnQkE5REYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFUQyxjQUFjO2dCQURkLHVCQUF1QjtnQkFFdkIsbUJBQW1COzs7aUNBTnJCO0NBMkVDLEFBL0RELElBK0RDO1NBNURZLHNCQUFzQjs7Ozs7O0lBRS9CLGdEQUF3Qzs7Ozs7SUFDeEMsa0RBQW1EOzs7OztJQUNuRCxxREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBQcm9kdWN0LFxuICBQcm9kdWN0UmVmZXJlbmNlLFxuICBQcm9kdWN0UmVmZXJlbmNlU2VydmljZSxcbiAgUHJvZHVjdFNlcnZpY2UsXG4gIFNlbWFudGljUGF0aFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByb2R1Y3RDYXJvdXNlbEl0ZW0gfSBmcm9tICcuL3Byb2R1Y3QtY2Fyb3VzZWwubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdENhcm91c2VsU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJlZmVyZW5jZVNlcnZpY2U6IFByb2R1Y3RSZWZlcmVuY2VTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBzZW1hbnRpY1BhdGhTZXJ2aWNlOiBTZW1hbnRpY1BhdGhTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogTG9hZHMgdGhlIHByb2R1Y3QgZGF0YSBhbmQgY29udmVydHMgaXQgYENhcm91c2VsSXRlbWAuXG4gICAqL1xuICBsb2FkUHJvZHVjdChjb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFByb2R1Y3RDYXJvdXNlbEl0ZW0+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0U2VydmljZS5nZXQoY29kZSkucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIG1hcChwcm9kdWN0ID0+IHRoaXMuY29udmVydFByb2R1Y3QocHJvZHVjdCkpXG4gICAgKTtcbiAgfVxuXG4gIGdldFByb2R1Y3RSZWZlcmVuY2VzKFxuICAgIGNvZGU6IHN0cmluZyxcbiAgICByZWZlcmVuY2VUeXBlOiBzdHJpbmcsXG4gICAgZGlzcGxheVRpdGxlOiBib29sZWFuLFxuICAgIGRpc3BsYXlQcm9kdWN0UHJpY2VzOiBib29sZWFuXG4gICk6IE9ic2VydmFibGU8UHJvZHVjdENhcm91c2VsSXRlbVtdPiB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlU2VydmljZS5nZXQoY29kZSwgcmVmZXJlbmNlVHlwZSkucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIG1hcCgocmVmczogUHJvZHVjdFJlZmVyZW5jZVtdKSA9PlxuICAgICAgICByZWZzLm1hcChyZWYgPT5cbiAgICAgICAgICB0aGlzLmNvbnZlcnRQcm9kdWN0KHJlZi50YXJnZXQsIGRpc3BsYXlUaXRsZSwgZGlzcGxheVByb2R1Y3RQcmljZXMpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHRoZSBwcm9kdWN0IHRvIGEgZ2VuZXJpYyBDYXJvdXNlbEl0ZW1cbiAgICovXG4gIHByaXZhdGUgY29udmVydFByb2R1Y3QoXG4gICAgc291cmNlOiBQcm9kdWN0LFxuICAgIGRpc3BsYXlUaXRsZSA9IHRydWUsXG4gICAgZGlzcGxheVByb2R1Y3RQcmljZXMgPSB0cnVlXG4gICk6IFByb2R1Y3RDYXJvdXNlbEl0ZW0ge1xuICAgIGNvbnN0IGl0ZW06IFByb2R1Y3RDYXJvdXNlbEl0ZW0gPSB7fTtcbiAgICBpZiAoZGlzcGxheVRpdGxlKSB7XG4gICAgICBpdGVtLnRpdGxlID0gc291cmNlLm5hbWU7XG4gICAgfVxuICAgIGlmIChkaXNwbGF5UHJvZHVjdFByaWNlcyAmJiBzb3VyY2UucHJpY2UgJiYgc291cmNlLnByaWNlLmZvcm1hdHRlZFZhbHVlKSB7XG4gICAgICBpdGVtLnByaWNlID0gc291cmNlLnByaWNlLmZvcm1hdHRlZFZhbHVlO1xuICAgIH1cbiAgICBpZiAoc291cmNlLmltYWdlcyAmJiBzb3VyY2UuaW1hZ2VzLlBSSU1BUlkpIHtcbiAgICAgIGl0ZW0ubWVkaWEgPSB7XG4gICAgICAgIGNvbnRhaW5lcjogc291cmNlLmltYWdlcy5QUklNQVJZLFxuICAgICAgICBmb3JtYXQ6ICdwcm9kdWN0JyxcbiAgICAgIH07XG4gICAgfVxuICAgIGl0ZW0ucm91dGUgPSB0aGlzLnNlbWFudGljUGF0aFNlcnZpY2UudHJhbnNmb3JtKHtcbiAgICAgIGN4Um91dGU6ICdwcm9kdWN0JyxcbiAgICAgIHBhcmFtczogc291cmNlLFxuICAgIH0pO1xuICAgIHJldHVybiBpdGVtO1xuICB9XG59XG4iXX0=