import { Injectable } from '@angular/core';
import { ProductScope, ProductService, RoutingService, } from '@spartacus/core';
import { of } from 'rxjs';
import { distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
export class CurrentProductService {
    constructor(routingService, productService) {
        this.routingService = routingService;
        this.productService = productService;
        this.DEFAULT_PRODUCT_SCOPE = ProductScope.DETAILS;
    }
    /**
     * Will emit current product or null, if there is no current product (i.e. we are not on PDP)
     *
     * @param scopes
     */
    getProduct(scopes) {
        return this.routingService.getRouterState().pipe(map((state) => state.state.params['productCode']), switchMap((productCode) => {
            return productCode
                ? this.productService.get(productCode, scopes || this.DEFAULT_PRODUCT_SCOPE)
                : of(null);
        }), filter((x) => x !== undefined), distinctUntilChanged());
    }
}
CurrentProductService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CurrentProductService_Factory() { return new CurrentProductService(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.ProductService)); }, token: CurrentProductService, providedIn: "root" });
CurrentProductService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
CurrentProductService.ctorParameters = () => [
    { type: RoutingService },
    { type: ProductService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudC1wcm9kdWN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9wcm9kdWN0L2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUVMLFlBQVksRUFDWixjQUFjLEVBQ2QsY0FBYyxHQUNmLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBSzlFLE1BQU0sT0FBTyxxQkFBcUI7SUFDaEMsWUFDVSxjQUE4QixFQUM5QixjQUE4QjtRQUQ5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBR3JCLDBCQUFxQixHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUM7SUFGN0QsQ0FBQztJQUlKOzs7O09BSUc7SUFDSCxVQUFVLENBQ1IsTUFBMEQ7UUFFMUQsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FDOUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUNqRCxTQUFTLENBQUMsQ0FBQyxXQUFtQixFQUFFLEVBQUU7WUFDaEMsT0FBTyxXQUFXO2dCQUNoQixDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQ3JCLFdBQVcsRUFDWCxNQUFNLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUNyQztnQkFDSCxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLEVBQ0YsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLEVBQzlCLG9CQUFvQixFQUFFLENBQ3ZCLENBQUM7SUFDSixDQUFDOzs7O1lBaENGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBUEMsY0FBYztZQURkLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBQcm9kdWN0LFxuICBQcm9kdWN0U2NvcGUsXG4gIFByb2R1Y3RTZXJ2aWNlLFxuICBSb3V0aW5nU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEN1cnJlbnRQcm9kdWN0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlXG4gICkge31cblxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgREVGQVVMVF9QUk9EVUNUX1NDT1BFID0gUHJvZHVjdFNjb3BlLkRFVEFJTFM7XG5cbiAgLyoqXG4gICAqIFdpbGwgZW1pdCBjdXJyZW50IHByb2R1Y3Qgb3IgbnVsbCwgaWYgdGhlcmUgaXMgbm8gY3VycmVudCBwcm9kdWN0IChpLmUuIHdlIGFyZSBub3Qgb24gUERQKVxuICAgKlxuICAgKiBAcGFyYW0gc2NvcGVzXG4gICAqL1xuICBnZXRQcm9kdWN0KFxuICAgIHNjb3Blcz86IChQcm9kdWN0U2NvcGUgfCBzdHJpbmcpW10gfCBQcm9kdWN0U2NvcGUgfCBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxQcm9kdWN0IHwgbnVsbD4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICAgIG1hcCgoc3RhdGUpID0+IHN0YXRlLnN0YXRlLnBhcmFtc1sncHJvZHVjdENvZGUnXSksXG4gICAgICBzd2l0Y2hNYXAoKHByb2R1Y3RDb2RlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIHByb2R1Y3RDb2RlXG4gICAgICAgICAgPyB0aGlzLnByb2R1Y3RTZXJ2aWNlLmdldChcbiAgICAgICAgICAgICAgcHJvZHVjdENvZGUsXG4gICAgICAgICAgICAgIHNjb3BlcyB8fCB0aGlzLkRFRkFVTFRfUFJPRFVDVF9TQ09QRVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogb2YobnVsbCk7XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcigoeCkgPT4geCAhPT0gdW5kZWZpbmVkKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG59XG4iXX0=