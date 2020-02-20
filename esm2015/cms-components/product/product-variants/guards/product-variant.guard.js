import { __decorate } from "tslib";
import { of } from 'rxjs';
import { map, switchMap, filter, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { VariantOption, ProductService, Product, RoutingService, ProductScope, } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
let ProductVariantGuard = class ProductVariantGuard {
    constructor(productService, routingService) {
        this.productService = productService;
        this.routingService = routingService;
    }
    canActivate() {
        return this.routingService.getRouterState().pipe(map(state => state.nextState.params.productCode), switchMap((productCode) => {
            // if open pdp from smartedit
            if (!productCode) {
                return of(true);
            }
            return this.productService.get(productCode, ProductScope.VARIANTS).pipe(filter(Boolean), map((product) => {
                if (!product.purchasable) {
                    const variant = this.findVariant(product.variantOptions);
                    // below call might looks redundant but in fact this data is going to be loaded anyways
                    // we're just calling it earlier and storing
                    this.productService
                        .get(variant.code, ProductScope.LIST)
                        .pipe(filter(Boolean), take(1))
                        .subscribe((_product) => {
                        this.routingService.go({
                            cxRoute: 'product',
                            params: _product,
                        });
                    });
                    return false;
                }
                else {
                    return true;
                }
            }));
        }));
    }
    findVariant(variants) {
        const results = variants.filter(variant => {
            return variant.stock && variant.stock.stockLevel ? variant : false;
        });
        return !results.length && variants.length ? variants[0] : results[0];
    }
};
ProductVariantGuard.ctorParameters = () => [
    { type: ProductService },
    { type: RoutingService }
];
ProductVariantGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProductVariantGuard_Factory() { return new ProductVariantGuard(i0.ɵɵinject(i1.ProductService), i0.ɵɵinject(i1.RoutingService)); }, token: ProductVariantGuard, providedIn: "root" });
ProductVariantGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ProductVariantGuard);
export { ProductVariantGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12YXJpYW50Lmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LXZhcmlhbnRzL2d1YXJkcy9wcm9kdWN0LXZhcmlhbnQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUNMLGFBQWEsRUFDYixjQUFjLEVBQ2QsT0FBTyxFQUNQLGNBQWMsRUFDZCxZQUFZLEdBQ2IsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBS3pCLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBQzlCLFlBQ1UsY0FBOEIsRUFDOUIsY0FBOEI7UUFEOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNyQyxDQUFDO0lBRUosV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQzlDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUNoRCxTQUFTLENBQUMsQ0FBQyxXQUFtQixFQUFFLEVBQUU7WUFDaEMsNkJBQTZCO1lBQzdCLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pCO1lBRUQsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDckUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLEdBQUcsQ0FBQyxDQUFDLE9BQWdCLEVBQUUsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUU7b0JBQ3hCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUN6RCx1RkFBdUY7b0JBQ3ZGLDRDQUE0QztvQkFDNUMsSUFBSSxDQUFDLGNBQWM7eUJBQ2hCLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUM7eUJBQ3BDLElBQUksQ0FDSCxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNSO3lCQUNBLFNBQVMsQ0FBQyxDQUFDLFFBQWlCLEVBQUUsRUFBRTt3QkFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUM7NEJBQ3JCLE9BQU8sRUFBRSxTQUFTOzRCQUNsQixNQUFNLEVBQUUsUUFBUTt5QkFDakIsQ0FBQyxDQUFDO29CQUNMLENBQUMsQ0FBQyxDQUFDO29CQUNMLE9BQU8sS0FBSyxDQUFDO2lCQUNkO3FCQUFNO29CQUNMLE9BQU8sSUFBSSxDQUFDO2lCQUNiO1lBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsV0FBVyxDQUFDLFFBQXlCO1FBQ25DLE1BQU0sT0FBTyxHQUFvQixRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3pELE9BQU8sT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDckUsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0NBQ0YsQ0FBQTs7WUFoRDJCLGNBQWM7WUFDZCxjQUFjOzs7QUFIN0IsbUJBQW1CO0lBSC9CLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxtQkFBbUIsQ0FrRC9CO1NBbERZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbkFjdGl2YXRlLCBVcmxUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgZmlsdGVyLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgVmFyaWFudE9wdGlvbixcbiAgUHJvZHVjdFNlcnZpY2UsXG4gIFByb2R1Y3QsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBQcm9kdWN0U2NvcGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0VmFyaWFudEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG5cbiAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICAgIG1hcChzdGF0ZSA9PiBzdGF0ZS5uZXh0U3RhdGUucGFyYW1zLnByb2R1Y3RDb2RlKSxcbiAgICAgIHN3aXRjaE1hcCgocHJvZHVjdENvZGU6IHN0cmluZykgPT4ge1xuICAgICAgICAvLyBpZiBvcGVuIHBkcCBmcm9tIHNtYXJ0ZWRpdFxuICAgICAgICBpZiAoIXByb2R1Y3RDb2RlKSB7XG4gICAgICAgICAgcmV0dXJuIG9mKHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdFNlcnZpY2UuZ2V0KHByb2R1Y3RDb2RlLCBQcm9kdWN0U2NvcGUuVkFSSUFOVFMpLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgICAgIG1hcCgocHJvZHVjdDogUHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFwcm9kdWN0LnB1cmNoYXNhYmxlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhcmlhbnQgPSB0aGlzLmZpbmRWYXJpYW50KHByb2R1Y3QudmFyaWFudE9wdGlvbnMpO1xuICAgICAgICAgICAgICAvLyBiZWxvdyBjYWxsIG1pZ2h0IGxvb2tzIHJlZHVuZGFudCBidXQgaW4gZmFjdCB0aGlzIGRhdGEgaXMgZ29pbmcgdG8gYmUgbG9hZGVkIGFueXdheXNcbiAgICAgICAgICAgICAgLy8gd2UncmUganVzdCBjYWxsaW5nIGl0IGVhcmxpZXIgYW5kIHN0b3JpbmdcbiAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0U2VydmljZVxuICAgICAgICAgICAgICAgIC5nZXQodmFyaWFudC5jb2RlLCBQcm9kdWN0U2NvcGUuTElTVClcbiAgICAgICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgICAgICAgICAgICAgIHRha2UoMSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgoX3Byb2R1Y3Q6IFByb2R1Y3QpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oe1xuICAgICAgICAgICAgICAgICAgICBjeFJvdXRlOiAncHJvZHVjdCcsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczogX3Byb2R1Y3QsXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGZpbmRWYXJpYW50KHZhcmlhbnRzOiBWYXJpYW50T3B0aW9uW10pOiBWYXJpYW50T3B0aW9uIHtcbiAgICBjb25zdCByZXN1bHRzOiBWYXJpYW50T3B0aW9uW10gPSB2YXJpYW50cy5maWx0ZXIodmFyaWFudCA9PiB7XG4gICAgICByZXR1cm4gdmFyaWFudC5zdG9jayAmJiB2YXJpYW50LnN0b2NrLnN0b2NrTGV2ZWwgPyB2YXJpYW50IDogZmFsc2U7XG4gICAgfSk7XG4gICAgcmV0dXJuICFyZXN1bHRzLmxlbmd0aCAmJiB2YXJpYW50cy5sZW5ndGggPyB2YXJpYW50c1swXSA6IHJlc3VsdHNbMF07XG4gIH1cbn1cbiJdfQ==