import { Injectable } from '@angular/core';
import { Router, } from '@angular/router';
import { ProductScope, ProductService, SemanticPathService, } from '@spartacus/core';
import { of } from 'rxjs';
import { filter, map, switchMap, take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "@angular/router";
export class ProductVariantGuard {
    constructor(productService, semanticPathService, router) {
        this.productService = productService;
        this.semanticPathService = semanticPathService;
        this.router = router;
    }
    canActivate(activatedRoute) {
        var _a;
        const productCode = (_a = activatedRoute.params) === null || _a === void 0 ? void 0 : _a.productCode;
        if (!productCode) {
            return of(true);
        }
        return this.productService.get(productCode, ProductScope.VARIANTS).pipe(filter(Boolean), switchMap((product) => {
            if (!product.purchasable) {
                const variant = this.findVariant(product.variantOptions);
                // below call might looks redundant but in fact this data is going to be loaded anyways
                // we're just calling it earlier and storing
                return this.productService.get(variant.code, ProductScope.LIST).pipe(filter(Boolean), take(1), map((_product) => {
                    return this.router.createUrlTree(this.semanticPathService.transform({
                        cxRoute: 'product',
                        params: _product,
                    }));
                }));
            }
            else {
                return of(true);
            }
        }));
    }
    findVariant(variants) {
        const results = variants.filter((variant) => {
            return variant.stock && variant.stock.stockLevel ? variant : false;
        });
        return !results.length && variants.length ? variants[0] : results[0];
    }
}
ProductVariantGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProductVariantGuard_Factory() { return new ProductVariantGuard(i0.ɵɵinject(i1.ProductService), i0.ɵɵinject(i1.SemanticPathService), i0.ɵɵinject(i2.Router)); }, token: ProductVariantGuard, providedIn: "root" });
ProductVariantGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ProductVariantGuard.ctorParameters = () => [
    { type: ProductService },
    { type: SemanticPathService },
    { type: Router }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12YXJpYW50Lmd1YXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LXZhcmlhbnRzL2d1YXJkcy9wcm9kdWN0LXZhcmlhbnQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBR0wsTUFBTSxHQUVQLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUVMLFlBQVksRUFDWixjQUFjLEVBQ2QsbUJBQW1CLEdBRXBCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFLOUQsTUFBTSxPQUFPLG1CQUFtQjtJQUM5QixZQUNZLGNBQThCLEVBQzlCLG1CQUF3QyxFQUN4QyxNQUFjO1FBRmQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUN2QixDQUFDO0lBRUosV0FBVyxDQUNULGNBQXNDOztRQUV0QyxNQUFNLFdBQVcsU0FBRyxjQUFjLENBQUMsTUFBTSwwQ0FBRSxXQUFXLENBQUM7UUFDdkQsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQjtRQUVELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQ3JFLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixTQUFTLENBQUMsQ0FBQyxPQUFnQixFQUFFLEVBQUU7WUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUU7Z0JBQ3hCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUN6RCx1RkFBdUY7Z0JBQ3ZGLDRDQUE0QztnQkFDNUMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ2xFLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsR0FBRyxDQUFDLENBQUMsUUFBaUIsRUFBRSxFQUFFO29CQUN4QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUM5QixJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDO3dCQUNqQyxPQUFPLEVBQUUsU0FBUzt3QkFDbEIsTUFBTSxFQUFFLFFBQVE7cUJBQ2pCLENBQUMsQ0FDSCxDQUFDO2dCQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7YUFDSDtpQkFBTTtnQkFDTCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNqQjtRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsV0FBVyxDQUFDLFFBQXlCO1FBQ25DLE1BQU0sT0FBTyxHQUFvQixRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDM0QsT0FBTyxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNyRSxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7WUFqREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFUQyxjQUFjO1lBQ2QsbUJBQW1CO1lBUG5CLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICBDYW5BY3RpdmF0ZSxcbiAgUm91dGVyLFxuICBVcmxUcmVlLFxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgUHJvZHVjdCxcbiAgUHJvZHVjdFNjb3BlLFxuICBQcm9kdWN0U2VydmljZSxcbiAgU2VtYW50aWNQYXRoU2VydmljZSxcbiAgVmFyaWFudE9wdGlvbixcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFZhcmlhbnRHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgc2VtYW50aWNQYXRoU2VydmljZTogU2VtYW50aWNQYXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXJcbiAgKSB7fVxuXG4gIGNhbkFjdGl2YXRlKFxuICAgIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90XG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcbiAgICBjb25zdCBwcm9kdWN0Q29kZSA9IGFjdGl2YXRlZFJvdXRlLnBhcmFtcz8ucHJvZHVjdENvZGU7XG4gICAgaWYgKCFwcm9kdWN0Q29kZSkge1xuICAgICAgcmV0dXJuIG9mKHRydWUpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnByb2R1Y3RTZXJ2aWNlLmdldChwcm9kdWN0Q29kZSwgUHJvZHVjdFNjb3BlLlZBUklBTlRTKS5waXBlKFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgc3dpdGNoTWFwKChwcm9kdWN0OiBQcm9kdWN0KSA9PiB7XG4gICAgICAgIGlmICghcHJvZHVjdC5wdXJjaGFzYWJsZSkge1xuICAgICAgICAgIGNvbnN0IHZhcmlhbnQgPSB0aGlzLmZpbmRWYXJpYW50KHByb2R1Y3QudmFyaWFudE9wdGlvbnMpO1xuICAgICAgICAgIC8vIGJlbG93IGNhbGwgbWlnaHQgbG9va3MgcmVkdW5kYW50IGJ1dCBpbiBmYWN0IHRoaXMgZGF0YSBpcyBnb2luZyB0byBiZSBsb2FkZWQgYW55d2F5c1xuICAgICAgICAgIC8vIHdlJ3JlIGp1c3QgY2FsbGluZyBpdCBlYXJsaWVyIGFuZCBzdG9yaW5nXG4gICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdFNlcnZpY2UuZ2V0KHZhcmlhbnQuY29kZSwgUHJvZHVjdFNjb3BlLkxJU1QpLnBpcGUoXG4gICAgICAgICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgICAgbWFwKChfcHJvZHVjdDogUHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZXIuY3JlYXRlVXJsVHJlZShcbiAgICAgICAgICAgICAgICB0aGlzLnNlbWFudGljUGF0aFNlcnZpY2UudHJhbnNmb3JtKHtcbiAgICAgICAgICAgICAgICAgIGN4Um91dGU6ICdwcm9kdWN0JyxcbiAgICAgICAgICAgICAgICAgIHBhcmFtczogX3Byb2R1Y3QsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gb2YodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGZpbmRWYXJpYW50KHZhcmlhbnRzOiBWYXJpYW50T3B0aW9uW10pOiBWYXJpYW50T3B0aW9uIHtcbiAgICBjb25zdCByZXN1bHRzOiBWYXJpYW50T3B0aW9uW10gPSB2YXJpYW50cy5maWx0ZXIoKHZhcmlhbnQpID0+IHtcbiAgICAgIHJldHVybiB2YXJpYW50LnN0b2NrICYmIHZhcmlhbnQuc3RvY2suc3RvY2tMZXZlbCA/IHZhcmlhbnQgOiBmYWxzZTtcbiAgICB9KTtcbiAgICByZXR1cm4gIXJlc3VsdHMubGVuZ3RoICYmIHZhcmlhbnRzLmxlbmd0aCA/IHZhcmlhbnRzWzBdIDogcmVzdWx0c1swXTtcbiAgfVxufVxuIl19