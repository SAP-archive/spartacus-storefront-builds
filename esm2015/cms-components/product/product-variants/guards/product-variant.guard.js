/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { filter, map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ProductService, RoutingService, ProductScope, } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
export class ProductVariantGuard {
    /**
     * @param {?} productService
     * @param {?} routingService
     */
    constructor(productService, routingService) {
        this.productService = productService;
        this.routingService = routingService;
    }
    /**
     * @return {?}
     */
    canActivate() {
        return this.routingService.getRouterState().pipe(map((/**
         * @param {?} state
         * @return {?}
         */
        state => state.nextState.params.productCode)), filter(Boolean), switchMap((/**
         * @param {?} productCode
         * @return {?}
         */
        (productCode) => this.productService.get(productCode, ProductScope.VARIANTS))), filter(Boolean), map((/**
         * @param {?} product
         * @return {?}
         */
        (product) => {
            if (!product.purchasable) {
                /** @type {?} */
                const variant = this.findVariant(product.variantOptions);
                this.routingService.go({
                    cxRoute: 'product',
                    params: { code: variant.code, name: product.name },
                });
                return false;
            }
            else {
                return true;
            }
        })));
    }
    /**
     * @param {?} variants
     * @return {?}
     */
    findVariant(variants) {
        /** @type {?} */
        const results = variants.filter((/**
         * @param {?} variant
         * @return {?}
         */
        variant => {
            return variant.stock && variant.stock.stockLevel ? variant : false;
        }));
        return !results.length && variants.length ? variants[0] : results[0];
    }
}
ProductVariantGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ProductVariantGuard.ctorParameters = () => [
    { type: ProductService },
    { type: RoutingService }
];
/** @nocollapse */ ProductVariantGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ProductVariantGuard_Factory() { return new ProductVariantGuard(i0.ɵɵinject(i1.ProductService), i0.ɵɵinject(i1.RoutingService)); }, token: ProductVariantGuard, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12YXJpYW50Lmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LXZhcmlhbnRzL2d1YXJkcy9wcm9kdWN0LXZhcmlhbnQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUVMLGNBQWMsRUFFZCxjQUFjLEVBQ2QsWUFBWSxHQUNiLE1BQU0saUJBQWlCLENBQUM7OztBQUt6QixNQUFNLE9BQU8sbUJBQW1COzs7OztJQUM5QixZQUNVLGNBQThCLEVBQzlCLGNBQThCO1FBRDlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDckMsQ0FBQzs7OztJQUVKLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUM5QyxHQUFHOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUMsRUFDaEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLFNBQVM7Ozs7UUFBQyxDQUFDLFdBQW1CLEVBQUUsRUFBRSxDQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUM1RCxFQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHOzs7O1FBQUMsQ0FBQyxPQUFnQixFQUFFLEVBQUU7WUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUU7O3NCQUNsQixPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDO2dCQUN4RCxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQztvQkFDckIsT0FBTyxFQUFFLFNBQVM7b0JBQ2xCLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFO2lCQUNuRCxDQUFDLENBQUM7Z0JBQ0gsT0FBTyxLQUFLLENBQUM7YUFDZDtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQzthQUNiO1FBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFFBQXlCOztjQUM3QixPQUFPLEdBQW9CLFFBQVEsQ0FBQyxNQUFNOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDekQsT0FBTyxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNyRSxDQUFDLEVBQUM7UUFDRixPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7WUFyQ0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBUkMsY0FBYztZQUVkLGNBQWM7Ozs7Ozs7O0lBU1osNkNBQXNDOzs7OztJQUN0Qyw2Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW5BY3RpdmF0ZSwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgVmFyaWFudE9wdGlvbixcbiAgUHJvZHVjdFNlcnZpY2UsXG4gIFByb2R1Y3QsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBQcm9kdWN0U2NvcGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0VmFyaWFudEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG5cbiAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICAgIG1hcChzdGF0ZSA9PiBzdGF0ZS5uZXh0U3RhdGUucGFyYW1zLnByb2R1Y3RDb2RlKSxcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIHN3aXRjaE1hcCgocHJvZHVjdENvZGU6IHN0cmluZykgPT5cbiAgICAgICAgdGhpcy5wcm9kdWN0U2VydmljZS5nZXQocHJvZHVjdENvZGUsIFByb2R1Y3RTY29wZS5WQVJJQU5UUylcbiAgICAgICksXG4gICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICBtYXAoKHByb2R1Y3Q6IFByb2R1Y3QpID0+IHtcbiAgICAgICAgaWYgKCFwcm9kdWN0LnB1cmNoYXNhYmxlKSB7XG4gICAgICAgICAgY29uc3QgdmFyaWFudCA9IHRoaXMuZmluZFZhcmlhbnQocHJvZHVjdC52YXJpYW50T3B0aW9ucyk7XG4gICAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7XG4gICAgICAgICAgICBjeFJvdXRlOiAncHJvZHVjdCcsXG4gICAgICAgICAgICBwYXJhbXM6IHsgY29kZTogdmFyaWFudC5jb2RlLCBuYW1lOiBwcm9kdWN0Lm5hbWUgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGZpbmRWYXJpYW50KHZhcmlhbnRzOiBWYXJpYW50T3B0aW9uW10pOiBWYXJpYW50T3B0aW9uIHtcbiAgICBjb25zdCByZXN1bHRzOiBWYXJpYW50T3B0aW9uW10gPSB2YXJpYW50cy5maWx0ZXIodmFyaWFudCA9PiB7XG4gICAgICByZXR1cm4gdmFyaWFudC5zdG9jayAmJiB2YXJpYW50LnN0b2NrLnN0b2NrTGV2ZWwgPyB2YXJpYW50IDogZmFsc2U7XG4gICAgfSk7XG4gICAgcmV0dXJuICFyZXN1bHRzLmxlbmd0aCAmJiB2YXJpYW50cy5sZW5ndGggPyB2YXJpYW50c1swXSA6IHJlc3VsdHNbMF07XG4gIH1cbn1cbiJdfQ==