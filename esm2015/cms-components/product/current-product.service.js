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
     * Returns an observable for the current product
     * @returns Product
     * @returns null if product can't be found
     *
     * @param scopes
     */
    getProduct(scopes) {
        return this.routingService.getRouterState().pipe(map((state) => state.state.params['productCode']), distinctUntilChanged(), switchMap((productCode) => {
            return productCode
                ? this.productService.get(productCode, scopes || this.DEFAULT_PRODUCT_SCOPE)
                : of(null);
        }), filter((product) => product !== undefined));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudC1wcm9kdWN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9wcm9kdWN0L2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUVMLFlBQVksRUFDWixjQUFjLEVBQ2QsY0FBYyxHQUNmLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBSzlFLE1BQU0sT0FBTyxxQkFBcUI7SUFDaEMsWUFDVSxjQUE4QixFQUM5QixjQUE4QjtRQUQ5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBR3JCLDBCQUFxQixHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUM7SUFGN0QsQ0FBQztJQUlKOzs7Ozs7T0FNRztJQUNILFVBQVUsQ0FDUixNQUEwRDtRQUUxRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUM5QyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQ2pELG9CQUFvQixFQUFFLEVBQ3RCLFNBQVMsQ0FBQyxDQUFDLFdBQW1CLEVBQUUsRUFBRTtZQUNoQyxPQUFPLFdBQVc7Z0JBQ2hCLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FDckIsV0FBVyxFQUNYLE1BQU0sSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQ3JDO2dCQUNILENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDZixDQUFDLENBQUMsRUFDRixNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUMsQ0FDM0MsQ0FBQztJQUNKLENBQUM7Ozs7WUFsQ0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFQQyxjQUFjO1lBRGQsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFByb2R1Y3QsXG4gIFByb2R1Y3RTY29wZSxcbiAgUHJvZHVjdFNlcnZpY2UsXG4gIFJvdXRpbmdTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2VcbiAgKSB7fVxuXG4gIHByb3RlY3RlZCByZWFkb25seSBERUZBVUxUX1BST0RVQ1RfU0NPUEUgPSBQcm9kdWN0U2NvcGUuREVUQUlMUztcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIGZvciB0aGUgY3VycmVudCBwcm9kdWN0XG4gICAqIEByZXR1cm5zIFByb2R1Y3RcbiAgICogQHJldHVybnMgbnVsbCBpZiBwcm9kdWN0IGNhbid0IGJlIGZvdW5kXG4gICAqXG4gICAqIEBwYXJhbSBzY29wZXNcbiAgICovXG4gIGdldFByb2R1Y3QoXG4gICAgc2NvcGVzPzogKFByb2R1Y3RTY29wZSB8IHN0cmluZylbXSB8IFByb2R1Y3RTY29wZSB8IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPFByb2R1Y3QgfCBudWxsPiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0Um91dGVyU3RhdGUoKS5waXBlKFxuICAgICAgbWFwKChzdGF0ZSkgPT4gc3RhdGUuc3RhdGUucGFyYW1zWydwcm9kdWN0Q29kZSddKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICBzd2l0Y2hNYXAoKHByb2R1Y3RDb2RlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIHByb2R1Y3RDb2RlXG4gICAgICAgICAgPyB0aGlzLnByb2R1Y3RTZXJ2aWNlLmdldChcbiAgICAgICAgICAgICAgcHJvZHVjdENvZGUsXG4gICAgICAgICAgICAgIHNjb3BlcyB8fCB0aGlzLkRFRkFVTFRfUFJPRFVDVF9TQ09QRVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogb2YobnVsbCk7XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcigocHJvZHVjdCkgPT4gcHJvZHVjdCAhPT0gdW5kZWZpbmVkKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==