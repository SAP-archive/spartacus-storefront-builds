import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Product, ProductScope, ProductService, RoutingService, } from '@spartacus/core';
import { of } from 'rxjs';
import { distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
let CurrentProductService = class CurrentProductService {
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
        return this.routingService.getRouterState().pipe(map(state => state.state.params['productCode']), switchMap((productCode) => {
            return productCode
                ? this.productService.get(productCode, scopes || this.DEFAULT_PRODUCT_SCOPE)
                : of(null);
        }), filter(x => x !== undefined), distinctUntilChanged());
    }
};
CurrentProductService.ctorParameters = () => [
    { type: RoutingService },
    { type: ProductService }
];
CurrentProductService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CurrentProductService_Factory() { return new CurrentProductService(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.ProductService)); }, token: CurrentProductService, providedIn: "root" });
CurrentProductService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CurrentProductService);
export { CurrentProductService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudC1wcm9kdWN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxPQUFPLEVBQ1AsWUFBWSxFQUNaLGNBQWMsRUFDZCxjQUFjLEdBQ2YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFLOUUsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7SUFDaEMsWUFDVSxjQUE4QixFQUM5QixjQUE4QjtRQUQ5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBR3JCLDBCQUFxQixHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUM7SUFGN0QsQ0FBQztJQUlKOzs7O09BSUc7SUFDSCxVQUFVLENBQ1IsTUFBMEQ7UUFFMUQsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FDOUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsRUFDL0MsU0FBUyxDQUFDLENBQUMsV0FBbUIsRUFBRSxFQUFFO1lBQ2hDLE9BQU8sV0FBVztnQkFDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUNyQixXQUFXLEVBQ1gsTUFBTSxJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FDckM7Z0JBQ0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNmLENBQUMsQ0FBQyxFQUNGLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUMsRUFDNUIsb0JBQW9CLEVBQUUsQ0FDdkIsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBOztZQTVCMkIsY0FBYztZQUNkLGNBQWM7OztBQUg3QixxQkFBcUI7SUFIakMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLHFCQUFxQixDQThCakM7U0E5QlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUHJvZHVjdCxcbiAgUHJvZHVjdFNjb3BlLFxuICBQcm9kdWN0U2VydmljZSxcbiAgUm91dGluZ1NlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDdXJyZW50UHJvZHVjdFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcml2YXRlIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZVxuICApIHt9XG5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IERFRkFVTFRfUFJPRFVDVF9TQ09QRSA9IFByb2R1Y3RTY29wZS5ERVRBSUxTO1xuXG4gIC8qKlxuICAgKiBXaWxsIGVtaXQgY3VycmVudCBwcm9kdWN0IG9yIG51bGwsIGlmIHRoZXJlIGlzIG5vIGN1cnJlbnQgcHJvZHVjdCAoaS5lLiB3ZSBhcmUgbm90IG9uIFBEUClcbiAgICpcbiAgICogQHBhcmFtIHNjb3Blc1xuICAgKi9cbiAgZ2V0UHJvZHVjdChcbiAgICBzY29wZXM/OiAoUHJvZHVjdFNjb3BlIHwgc3RyaW5nKVtdIHwgUHJvZHVjdFNjb3BlIHwgc3RyaW5nXG4gICk6IE9ic2VydmFibGU8UHJvZHVjdCB8IG51bGw+IHtcbiAgICByZXR1cm4gdGhpcy5yb3V0aW5nU2VydmljZS5nZXRSb3V0ZXJTdGF0ZSgpLnBpcGUoXG4gICAgICBtYXAoc3RhdGUgPT4gc3RhdGUuc3RhdGUucGFyYW1zWydwcm9kdWN0Q29kZSddKSxcbiAgICAgIHN3aXRjaE1hcCgocHJvZHVjdENvZGU6IHN0cmluZykgPT4ge1xuICAgICAgICByZXR1cm4gcHJvZHVjdENvZGVcbiAgICAgICAgICA/IHRoaXMucHJvZHVjdFNlcnZpY2UuZ2V0KFxuICAgICAgICAgICAgICBwcm9kdWN0Q29kZSxcbiAgICAgICAgICAgICAgc2NvcGVzIHx8IHRoaXMuREVGQVVMVF9QUk9EVUNUX1NDT1BFXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBvZihudWxsKTtcbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKHggPT4geCAhPT0gdW5kZWZpbmVkKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG59XG4iXX0=