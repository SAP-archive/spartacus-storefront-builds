import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Product, ProductScope, ProductService, RoutingService, } from '@spartacus/core';
import { map, switchMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var CurrentProductService = /** @class */ (function () {
    function CurrentProductService(routingService, productService) {
        this.routingService = routingService;
        this.productService = productService;
        this.DEFAULT_PRODUCT_SCOPE = ProductScope.DETAILS;
    }
    CurrentProductService.prototype.getProduct = function (scopes) {
        var _this = this;
        return this.routingService.getRouterState().pipe(map(function (state) { return state.state.params['productCode']; }), switchMap(function (productCode) {
            return _this.productService.get(productCode, scopes || _this.DEFAULT_PRODUCT_SCOPE);
        }));
    };
    CurrentProductService.ctorParameters = function () { return [
        { type: RoutingService },
        { type: ProductService }
    ]; };
    CurrentProductService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CurrentProductService_Factory() { return new CurrentProductService(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.ProductService)); }, token: CurrentProductService, providedIn: "root" });
    CurrentProductService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CurrentProductService);
    return CurrentProductService;
}());
export { CurrentProductService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudC1wcm9kdWN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxPQUFPLEVBQ1AsWUFBWSxFQUNaLGNBQWMsRUFDZCxjQUFjLEdBQ2YsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFLaEQ7SUFDRSwrQkFDVSxjQUE4QixFQUM5QixjQUE4QjtRQUQ5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBR3JCLDBCQUFxQixHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUM7SUFGN0QsQ0FBQztJQUlKLDBDQUFVLEdBQVYsVUFDRSxNQUEwRDtRQUQ1RCxpQkFZQztRQVRDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQzlDLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFqQyxDQUFpQyxDQUFDLEVBQy9DLFNBQVMsQ0FBQyxVQUFDLFdBQW1CO1lBQzVCLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQ3JCLFdBQVcsRUFDWCxNQUFNLElBQUksS0FBSSxDQUFDLHFCQUFxQixDQUNyQztRQUhELENBR0MsQ0FDRixDQUNGLENBQUM7SUFDSixDQUFDOztnQkFsQnlCLGNBQWM7Z0JBQ2QsY0FBYzs7O0lBSDdCLHFCQUFxQjtRQUhqQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1cscUJBQXFCLENBcUJqQztnQ0FsQ0Q7Q0FrQ0MsQUFyQkQsSUFxQkM7U0FyQlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUHJvZHVjdCxcbiAgUHJvZHVjdFNjb3BlLFxuICBQcm9kdWN0U2VydmljZSxcbiAgUm91dGluZ1NlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEN1cnJlbnRQcm9kdWN0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlXG4gICkge31cblxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgREVGQVVMVF9QUk9EVUNUX1NDT1BFID0gUHJvZHVjdFNjb3BlLkRFVEFJTFM7XG5cbiAgZ2V0UHJvZHVjdChcbiAgICBzY29wZXM/OiAoUHJvZHVjdFNjb3BlIHwgc3RyaW5nKVtdIHwgUHJvZHVjdFNjb3BlIHwgc3RyaW5nXG4gICk6IE9ic2VydmFibGU8UHJvZHVjdD4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICAgIG1hcChzdGF0ZSA9PiBzdGF0ZS5zdGF0ZS5wYXJhbXNbJ3Byb2R1Y3RDb2RlJ10pLFxuICAgICAgc3dpdGNoTWFwKChwcm9kdWN0Q29kZTogc3RyaW5nKSA9PlxuICAgICAgICB0aGlzLnByb2R1Y3RTZXJ2aWNlLmdldChcbiAgICAgICAgICBwcm9kdWN0Q29kZSxcbiAgICAgICAgICBzY29wZXMgfHwgdGhpcy5ERUZBVUxUX1BST0RVQ1RfU0NPUEVcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==