/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { filter, map, switchMap, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ProductService, RoutingService, ProductScope, } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var ProductVariantGuard = /** @class */ (function () {
    function ProductVariantGuard(productService, routingService) {
        this.productService = productService;
        this.routingService = routingService;
    }
    /**
     * @return {?}
     */
    ProductVariantGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.routingService.getRouterState().pipe(map((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.nextState.params.productCode; })), filter(Boolean), switchMap((/**
         * @param {?} productCode
         * @return {?}
         */
        function (productCode) {
            return _this.productService.get(productCode, ProductScope.VARIANTS);
        })), filter(Boolean), map((/**
         * @param {?} product
         * @return {?}
         */
        function (product) {
            if (!product.purchasable) {
                /** @type {?} */
                var variant = _this.findVariant(product.variantOptions);
                // below call might looks redundant but in fact this data is going to be loaded anyways
                // we're just calling it earlier and storing
                _this.productService
                    .get(variant.code, ProductScope.LIST)
                    .pipe(filter(Boolean), take(1))
                    .subscribe((/**
                 * @param {?} _product
                 * @return {?}
                 */
                function (_product) {
                    _this.routingService.go({
                        cxRoute: 'product',
                        params: _product,
                    });
                }));
                return false;
            }
            else {
                return true;
            }
        })));
    };
    /**
     * @param {?} variants
     * @return {?}
     */
    ProductVariantGuard.prototype.findVariant = /**
     * @param {?} variants
     * @return {?}
     */
    function (variants) {
        /** @type {?} */
        var results = variants.filter((/**
         * @param {?} variant
         * @return {?}
         */
        function (variant) {
            return variant.stock && variant.stock.stockLevel ? variant : false;
        }));
        return !results.length && variants.length ? variants[0] : results[0];
    };
    ProductVariantGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ProductVariantGuard.ctorParameters = function () { return [
        { type: ProductService },
        { type: RoutingService }
    ]; };
    /** @nocollapse */ ProductVariantGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ProductVariantGuard_Factory() { return new ProductVariantGuard(i0.ɵɵinject(i1.ProductService), i0.ɵɵinject(i1.RoutingService)); }, token: ProductVariantGuard, providedIn: "root" });
    return ProductVariantGuard;
}());
export { ProductVariantGuard };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProductVariantGuard.prototype.productService;
    /**
     * @type {?}
     * @private
     */
    ProductVariantGuard.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12YXJpYW50Lmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LXZhcmlhbnRzL2d1YXJkcy9wcm9kdWN0LXZhcmlhbnQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFFTCxjQUFjLEVBRWQsY0FBYyxFQUNkLFlBQVksR0FDYixNQUFNLGlCQUFpQixDQUFDOzs7QUFFekI7SUFJRSw2QkFDVSxjQUE4QixFQUM5QixjQUE4QjtRQUQ5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ3JDLENBQUM7Ozs7SUFFSix5Q0FBVzs7O0lBQVg7UUFBQSxpQkErQkM7UUE5QkMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FDOUMsR0FBRzs7OztRQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFsQyxDQUFrQyxFQUFDLEVBQ2hELE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixTQUFTOzs7O1FBQUMsVUFBQyxXQUFtQjtZQUM1QixPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDO1FBQTNELENBQTJELEVBQzVELEVBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLEdBQUc7Ozs7UUFBQyxVQUFDLE9BQWdCO1lBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFOztvQkFDbEIsT0FBTyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQztnQkFDeEQsdUZBQXVGO2dCQUN2Riw0Q0FBNEM7Z0JBQzVDLEtBQUksQ0FBQyxjQUFjO3FCQUNoQixHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDO3FCQUNwQyxJQUFJLENBQ0gsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUjtxQkFDQSxTQUFTOzs7O2dCQUFDLFVBQUMsUUFBaUI7b0JBQzNCLEtBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO3dCQUNyQixPQUFPLEVBQUUsU0FBUzt3QkFDbEIsTUFBTSxFQUFFLFFBQVE7cUJBQ2pCLENBQUMsQ0FBQztnQkFDTCxDQUFDLEVBQUMsQ0FBQztnQkFDTCxPQUFPLEtBQUssQ0FBQzthQUNkO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDO2FBQ2I7UUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCx5Q0FBVzs7OztJQUFYLFVBQVksUUFBeUI7O1lBQzdCLE9BQU8sR0FBb0IsUUFBUSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLE9BQU87WUFDdEQsT0FBTyxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNyRSxDQUFDLEVBQUM7UUFDRixPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDOztnQkEvQ0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFSQyxjQUFjO2dCQUVkLGNBQWM7Ozs4QkFSaEI7Q0E0REMsQUFoREQsSUFnREM7U0E3Q1ksbUJBQW1COzs7Ozs7SUFFNUIsNkNBQXNDOzs7OztJQUN0Qyw2Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW5BY3RpdmF0ZSwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgVmFyaWFudE9wdGlvbixcbiAgUHJvZHVjdFNlcnZpY2UsXG4gIFByb2R1Y3QsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBQcm9kdWN0U2NvcGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0VmFyaWFudEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG5cbiAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICAgIG1hcChzdGF0ZSA9PiBzdGF0ZS5uZXh0U3RhdGUucGFyYW1zLnByb2R1Y3RDb2RlKSxcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIHN3aXRjaE1hcCgocHJvZHVjdENvZGU6IHN0cmluZykgPT5cbiAgICAgICAgdGhpcy5wcm9kdWN0U2VydmljZS5nZXQocHJvZHVjdENvZGUsIFByb2R1Y3RTY29wZS5WQVJJQU5UUylcbiAgICAgICksXG4gICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICBtYXAoKHByb2R1Y3Q6IFByb2R1Y3QpID0+IHtcbiAgICAgICAgaWYgKCFwcm9kdWN0LnB1cmNoYXNhYmxlKSB7XG4gICAgICAgICAgY29uc3QgdmFyaWFudCA9IHRoaXMuZmluZFZhcmlhbnQocHJvZHVjdC52YXJpYW50T3B0aW9ucyk7XG4gICAgICAgICAgLy8gYmVsb3cgY2FsbCBtaWdodCBsb29rcyByZWR1bmRhbnQgYnV0IGluIGZhY3QgdGhpcyBkYXRhIGlzIGdvaW5nIHRvIGJlIGxvYWRlZCBhbnl3YXlzXG4gICAgICAgICAgLy8gd2UncmUganVzdCBjYWxsaW5nIGl0IGVhcmxpZXIgYW5kIHN0b3JpbmdcbiAgICAgICAgICB0aGlzLnByb2R1Y3RTZXJ2aWNlXG4gICAgICAgICAgICAuZ2V0KHZhcmlhbnQuY29kZSwgUHJvZHVjdFNjb3BlLkxJU1QpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgICAgICAgICB0YWtlKDEpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChfcHJvZHVjdDogUHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHtcbiAgICAgICAgICAgICAgICBjeFJvdXRlOiAncHJvZHVjdCcsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBfcHJvZHVjdCxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGZpbmRWYXJpYW50KHZhcmlhbnRzOiBWYXJpYW50T3B0aW9uW10pOiBWYXJpYW50T3B0aW9uIHtcbiAgICBjb25zdCByZXN1bHRzOiBWYXJpYW50T3B0aW9uW10gPSB2YXJpYW50cy5maWx0ZXIodmFyaWFudCA9PiB7XG4gICAgICByZXR1cm4gdmFyaWFudC5zdG9jayAmJiB2YXJpYW50LnN0b2NrLnN0b2NrTGV2ZWwgPyB2YXJpYW50IDogZmFsc2U7XG4gICAgfSk7XG4gICAgcmV0dXJuICFyZXN1bHRzLmxlbmd0aCAmJiB2YXJpYW50cy5sZW5ndGggPyB2YXJpYW50c1swXSA6IHJlc3VsdHNbMF07XG4gIH1cbn1cbiJdfQ==