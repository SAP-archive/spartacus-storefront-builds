/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { of } from 'rxjs';
import { map, switchMap, filter, take } from 'rxjs/operators';
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
        function (state) { return state.nextState.params.productCode; })), switchMap((/**
         * @param {?} productCode
         * @return {?}
         */
        function (productCode) {
            if (Boolean(productCode)) {
                return _this.productService.get(productCode, ProductScope.VARIANTS);
            }
            else {
                return of(undefined);
            }
        })), map((/**
         * @param {?} product
         * @return {?}
         */
        function (product) {
            if (Boolean(product) && !product.purchasable) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12YXJpYW50Lmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LXZhcmlhbnRzL2d1YXJkcy9wcm9kdWN0LXZhcmlhbnQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUVMLGNBQWMsRUFFZCxjQUFjLEVBQ2QsWUFBWSxHQUNiLE1BQU0saUJBQWlCLENBQUM7OztBQUV6QjtJQUlFLDZCQUNVLGNBQThCLEVBQzlCLGNBQThCO1FBRDlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDckMsQ0FBQzs7OztJQUVKLHlDQUFXOzs7SUFBWDtRQUFBLGlCQWlDQztRQWhDQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUM5QyxHQUFHOzs7O1FBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQWxDLENBQWtDLEVBQUMsRUFDaEQsU0FBUzs7OztRQUFDLFVBQUMsV0FBbUI7WUFDNUIsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQ3hCLE9BQU8sS0FBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNwRTtpQkFBTTtnQkFDTCxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUN0QjtRQUNILENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7UUFBQyxVQUFDLE9BQWdCO1lBQ25CLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRTs7b0JBQ3RDLE9BQU8sR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7Z0JBQ3hELHVGQUF1RjtnQkFDdkYsNENBQTRDO2dCQUM1QyxLQUFJLENBQUMsY0FBYztxQkFDaEIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQztxQkFDcEMsSUFBSSxDQUNILE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1I7cUJBQ0EsU0FBUzs7OztnQkFBQyxVQUFDLFFBQWlCO29CQUMzQixLQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQzt3QkFDckIsT0FBTyxFQUFFLFNBQVM7d0JBQ2xCLE1BQU0sRUFBRSxRQUFRO3FCQUNqQixDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxFQUFDLENBQUM7Z0JBQ0wsT0FBTyxLQUFLLENBQUM7YUFDZDtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQzthQUNiO1FBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQseUNBQVc7Ozs7SUFBWCxVQUFZLFFBQXlCOztZQUM3QixPQUFPLEdBQW9CLFFBQVEsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxPQUFPO1lBQ3RELE9BQU8sT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDckUsQ0FBQyxFQUFDO1FBQ0YsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7Z0JBakRGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUkMsY0FBYztnQkFFZCxjQUFjOzs7OEJBUmhCO0NBOERDLEFBbERELElBa0RDO1NBL0NZLG1CQUFtQjs7Ozs7O0lBRTVCLDZDQUFzQzs7Ozs7SUFDdEMsNkNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFVybFRyZWUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBmaWx0ZXIsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBWYXJpYW50T3B0aW9uLFxuICBQcm9kdWN0U2VydmljZSxcbiAgUHJvZHVjdCxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFByb2R1Y3RTY29wZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RWYXJpYW50R3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge31cblxuICBjYW5BY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0Um91dGVyU3RhdGUoKS5waXBlKFxuICAgICAgbWFwKHN0YXRlID0+IHN0YXRlLm5leHRTdGF0ZS5wYXJhbXMucHJvZHVjdENvZGUpLFxuICAgICAgc3dpdGNoTWFwKChwcm9kdWN0Q29kZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChCb29sZWFuKHByb2R1Y3RDb2RlKSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RTZXJ2aWNlLmdldChwcm9kdWN0Q29kZSwgUHJvZHVjdFNjb3BlLlZBUklBTlRTKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gb2YodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAoKHByb2R1Y3Q6IFByb2R1Y3QpID0+IHtcbiAgICAgICAgaWYgKEJvb2xlYW4ocHJvZHVjdCkgJiYgIXByb2R1Y3QucHVyY2hhc2FibGUpIHtcbiAgICAgICAgICBjb25zdCB2YXJpYW50ID0gdGhpcy5maW5kVmFyaWFudChwcm9kdWN0LnZhcmlhbnRPcHRpb25zKTtcbiAgICAgICAgICAvLyBiZWxvdyBjYWxsIG1pZ2h0IGxvb2tzIHJlZHVuZGFudCBidXQgaW4gZmFjdCB0aGlzIGRhdGEgaXMgZ29pbmcgdG8gYmUgbG9hZGVkIGFueXdheXNcbiAgICAgICAgICAvLyB3ZSdyZSBqdXN0IGNhbGxpbmcgaXQgZWFybGllciBhbmQgc3RvcmluZ1xuICAgICAgICAgIHRoaXMucHJvZHVjdFNlcnZpY2VcbiAgICAgICAgICAgIC5nZXQodmFyaWFudC5jb2RlLCBQcm9kdWN0U2NvcGUuTElTVClcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICAgICAgICAgIHRha2UoMSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKF9wcm9kdWN0OiBQcm9kdWN0KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oe1xuICAgICAgICAgICAgICAgIGN4Um91dGU6ICdwcm9kdWN0JyxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IF9wcm9kdWN0LFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZmluZFZhcmlhbnQodmFyaWFudHM6IFZhcmlhbnRPcHRpb25bXSk6IFZhcmlhbnRPcHRpb24ge1xuICAgIGNvbnN0IHJlc3VsdHM6IFZhcmlhbnRPcHRpb25bXSA9IHZhcmlhbnRzLmZpbHRlcih2YXJpYW50ID0+IHtcbiAgICAgIHJldHVybiB2YXJpYW50LnN0b2NrICYmIHZhcmlhbnQuc3RvY2suc3RvY2tMZXZlbCA/IHZhcmlhbnQgOiBmYWxzZTtcbiAgICB9KTtcbiAgICByZXR1cm4gIXJlc3VsdHMubGVuZ3RoICYmIHZhcmlhbnRzLmxlbmd0aCA/IHZhcmlhbnRzWzBdIDogcmVzdWx0c1swXTtcbiAgfVxufVxuIl19