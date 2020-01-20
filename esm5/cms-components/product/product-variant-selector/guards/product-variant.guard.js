/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { filter, map, switchMap } from 'rxjs/operators';
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
                _this.routingService.goByUrl("product/" + variant.code);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12YXJpYW50Lmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LXZhcmlhbnQtc2VsZWN0b3IvZ3VhcmRzL3Byb2R1Y3QtdmFyaWFudC5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBRUwsY0FBYyxFQUVkLGNBQWMsRUFDZCxZQUFZLEdBQ2IsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBRXpCO0lBSUUsNkJBQ1UsY0FBOEIsRUFDOUIsY0FBOEI7UUFEOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNyQyxDQUFDOzs7O0lBRUoseUNBQVc7OztJQUFYO1FBQUEsaUJBa0JDO1FBakJDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQzlDLEdBQUc7Ozs7UUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBbEMsQ0FBa0MsRUFBQyxFQUNoRCxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsU0FBUzs7OztRQUFDLFVBQUMsV0FBbUI7WUFDNUIsT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQztRQUEzRCxDQUEyRCxFQUM1RCxFQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHOzs7O1FBQUMsVUFBQyxPQUFnQjtZQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRTs7b0JBQ2xCLE9BQU8sR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7Z0JBQ3hELEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLGFBQVcsT0FBTyxDQUFDLElBQU0sQ0FBQyxDQUFDO2dCQUN2RCxPQUFPLEtBQUssQ0FBQzthQUNkO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDO2FBQ2I7UUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCx5Q0FBVzs7OztJQUFYLFVBQVksUUFBeUI7O1lBQzdCLE9BQU8sR0FBb0IsUUFBUSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLE9BQU87WUFDdEQsT0FBTyxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNyRSxDQUFDLEVBQUM7UUFDRixPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDOztnQkFsQ0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFSQyxjQUFjO2dCQUVkLGNBQWM7Ozs4QkFSaEI7Q0ErQ0MsQUFuQ0QsSUFtQ0M7U0FoQ1ksbUJBQW1COzs7Ozs7SUFFNUIsNkNBQXNDOzs7OztJQUN0Qyw2Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW5BY3RpdmF0ZSwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgVmFyaWFudE9wdGlvbixcbiAgUHJvZHVjdFNlcnZpY2UsXG4gIFByb2R1Y3QsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBQcm9kdWN0U2NvcGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0VmFyaWFudEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG5cbiAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICAgIG1hcChzdGF0ZSA9PiBzdGF0ZS5uZXh0U3RhdGUucGFyYW1zLnByb2R1Y3RDb2RlKSxcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIHN3aXRjaE1hcCgocHJvZHVjdENvZGU6IHN0cmluZykgPT5cbiAgICAgICAgdGhpcy5wcm9kdWN0U2VydmljZS5nZXQocHJvZHVjdENvZGUsIFByb2R1Y3RTY29wZS5WQVJJQU5UUylcbiAgICAgICksXG4gICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICBtYXAoKHByb2R1Y3Q6IFByb2R1Y3QpID0+IHtcbiAgICAgICAgaWYgKCFwcm9kdWN0LnB1cmNoYXNhYmxlKSB7XG4gICAgICAgICAgY29uc3QgdmFyaWFudCA9IHRoaXMuZmluZFZhcmlhbnQocHJvZHVjdC52YXJpYW50T3B0aW9ucyk7XG4gICAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nb0J5VXJsKGBwcm9kdWN0LyR7dmFyaWFudC5jb2RlfWApO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZmluZFZhcmlhbnQodmFyaWFudHM6IFZhcmlhbnRPcHRpb25bXSk6IFZhcmlhbnRPcHRpb24ge1xuICAgIGNvbnN0IHJlc3VsdHM6IFZhcmlhbnRPcHRpb25bXSA9IHZhcmlhbnRzLmZpbHRlcih2YXJpYW50ID0+IHtcbiAgICAgIHJldHVybiB2YXJpYW50LnN0b2NrICYmIHZhcmlhbnQuc3RvY2suc3RvY2tMZXZlbCA/IHZhcmlhbnQgOiBmYWxzZTtcbiAgICB9KTtcbiAgICByZXR1cm4gIXJlc3VsdHMubGVuZ3RoICYmIHZhcmlhbnRzLmxlbmd0aCA/IHZhcmlhbnRzWzBdIDogcmVzdWx0c1swXTtcbiAgfVxufVxuIl19