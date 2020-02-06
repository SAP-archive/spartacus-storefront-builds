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
        state => state.nextState.params.productCode)), switchMap((/**
         * @param {?} productCode
         * @return {?}
         */
        (productCode) => {
            if (Boolean(productCode)) {
                return this.productService.get(productCode, ProductScope.VARIANTS);
            }
            else {
                return of(undefined);
            }
        })), map((/**
         * @param {?} product
         * @return {?}
         */
        (product) => {
            if (Boolean(product) && !product.purchasable) {
                /** @type {?} */
                const variant = this.findVariant(product.variantOptions);
                // below call might looks redundant but in fact this data is going to be loaded anyways
                // we're just calling it earlier and storing
                this.productService
                    .get(variant.code, ProductScope.LIST)
                    .pipe(filter(Boolean), take(1))
                    .subscribe((/**
                 * @param {?} _product
                 * @return {?}
                 */
                (_product) => {
                    this.routingService.go({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12YXJpYW50Lmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LXZhcmlhbnRzL2d1YXJkcy9wcm9kdWN0LXZhcmlhbnQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUVMLGNBQWMsRUFFZCxjQUFjLEVBQ2QsWUFBWSxHQUNiLE1BQU0saUJBQWlCLENBQUM7OztBQUt6QixNQUFNLE9BQU8sbUJBQW1COzs7OztJQUM5QixZQUNVLGNBQThCLEVBQzlCLGNBQThCO1FBRDlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDckMsQ0FBQzs7OztJQUVKLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUM5QyxHQUFHOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUMsRUFDaEQsU0FBUzs7OztRQUFDLENBQUMsV0FBbUIsRUFBRSxFQUFFO1lBQ2hDLElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUN4QixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDcEU7aUJBQU07Z0JBQ0wsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDdEI7UUFDSCxDQUFDLEVBQUMsRUFDRixHQUFHOzs7O1FBQUMsQ0FBQyxPQUFnQixFQUFFLEVBQUU7WUFDdkIsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFOztzQkFDdEMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQztnQkFDeEQsdUZBQXVGO2dCQUN2Riw0Q0FBNEM7Z0JBQzVDLElBQUksQ0FBQyxjQUFjO3FCQUNoQixHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDO3FCQUNwQyxJQUFJLENBQ0gsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUjtxQkFDQSxTQUFTOzs7O2dCQUFDLENBQUMsUUFBaUIsRUFBRSxFQUFFO29CQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQzt3QkFDckIsT0FBTyxFQUFFLFNBQVM7d0JBQ2xCLE1BQU0sRUFBRSxRQUFRO3FCQUNqQixDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxFQUFDLENBQUM7Z0JBQ0wsT0FBTyxLQUFLLENBQUM7YUFDZDtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQzthQUNiO1FBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFFBQXlCOztjQUM3QixPQUFPLEdBQW9CLFFBQVEsQ0FBQyxNQUFNOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDekQsT0FBTyxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNyRSxDQUFDLEVBQUM7UUFDRixPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7WUFqREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBUkMsY0FBYztZQUVkLGNBQWM7Ozs7Ozs7O0lBU1osNkNBQXNDOzs7OztJQUN0Qyw2Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW5BY3RpdmF0ZSwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGZpbHRlciwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFZhcmlhbnRPcHRpb24sXG4gIFByb2R1Y3RTZXJ2aWNlLFxuICBQcm9kdWN0LFxuICBSb3V0aW5nU2VydmljZSxcbiAgUHJvZHVjdFNjb3BlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFZhcmlhbnRHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIGNhbkFjdGl2YXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcbiAgICByZXR1cm4gdGhpcy5yb3V0aW5nU2VydmljZS5nZXRSb3V0ZXJTdGF0ZSgpLnBpcGUoXG4gICAgICBtYXAoc3RhdGUgPT4gc3RhdGUubmV4dFN0YXRlLnBhcmFtcy5wcm9kdWN0Q29kZSksXG4gICAgICBzd2l0Y2hNYXAoKHByb2R1Y3RDb2RlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKEJvb2xlYW4ocHJvZHVjdENvZGUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdFNlcnZpY2UuZ2V0KHByb2R1Y3RDb2RlLCBQcm9kdWN0U2NvcGUuVkFSSUFOVFMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBvZih1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgocHJvZHVjdDogUHJvZHVjdCkgPT4ge1xuICAgICAgICBpZiAoQm9vbGVhbihwcm9kdWN0KSAmJiAhcHJvZHVjdC5wdXJjaGFzYWJsZSkge1xuICAgICAgICAgIGNvbnN0IHZhcmlhbnQgPSB0aGlzLmZpbmRWYXJpYW50KHByb2R1Y3QudmFyaWFudE9wdGlvbnMpO1xuICAgICAgICAgIC8vIGJlbG93IGNhbGwgbWlnaHQgbG9va3MgcmVkdW5kYW50IGJ1dCBpbiBmYWN0IHRoaXMgZGF0YSBpcyBnb2luZyB0byBiZSBsb2FkZWQgYW55d2F5c1xuICAgICAgICAgIC8vIHdlJ3JlIGp1c3QgY2FsbGluZyBpdCBlYXJsaWVyIGFuZCBzdG9yaW5nXG4gICAgICAgICAgdGhpcy5wcm9kdWN0U2VydmljZVxuICAgICAgICAgICAgLmdldCh2YXJpYW50LmNvZGUsIFByb2R1Y3RTY29wZS5MSVNUKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgICAgICAgICAgdGFrZSgxKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoX3Byb2R1Y3Q6IFByb2R1Y3QpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7XG4gICAgICAgICAgICAgICAgY3hSb3V0ZTogJ3Byb2R1Y3QnLFxuICAgICAgICAgICAgICAgIHBhcmFtczogX3Byb2R1Y3QsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBmaW5kVmFyaWFudCh2YXJpYW50czogVmFyaWFudE9wdGlvbltdKTogVmFyaWFudE9wdGlvbiB7XG4gICAgY29uc3QgcmVzdWx0czogVmFyaWFudE9wdGlvbltdID0gdmFyaWFudHMuZmlsdGVyKHZhcmlhbnQgPT4ge1xuICAgICAgcmV0dXJuIHZhcmlhbnQuc3RvY2sgJiYgdmFyaWFudC5zdG9jay5zdG9ja0xldmVsID8gdmFyaWFudCA6IGZhbHNlO1xuICAgIH0pO1xuICAgIHJldHVybiAhcmVzdWx0cy5sZW5ndGggJiYgdmFyaWFudHMubGVuZ3RoID8gdmFyaWFudHNbMF0gOiByZXN1bHRzWzBdO1xuICB9XG59XG4iXX0=