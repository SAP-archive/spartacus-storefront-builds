import { __decorate } from "tslib";
import { of } from 'rxjs';
import { map, switchMap, filter, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { VariantOption, ProductService, Product, RoutingService, ProductScope, } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var ProductVariantGuard = /** @class */ (function () {
    function ProductVariantGuard(productService, routingService) {
        this.productService = productService;
        this.routingService = routingService;
    }
    ProductVariantGuard.prototype.canActivate = function () {
        var _this = this;
        return this.routingService.getRouterState().pipe(map(function (state) { return state.nextState.params.productCode; }), switchMap(function (productCode) {
            // if open pdp from smartedit
            if (!productCode) {
                return of(true);
            }
            return _this.productService.get(productCode, ProductScope.VARIANTS).pipe(filter(Boolean), map(function (product) {
                if (!product.purchasable) {
                    var variant = _this.findVariant(product.variantOptions);
                    // below call might looks redundant but in fact this data is going to be loaded anyways
                    // we're just calling it earlier and storing
                    _this.productService
                        .get(variant.code, ProductScope.LIST)
                        .pipe(filter(Boolean), take(1))
                        .subscribe(function (_product) {
                        _this.routingService.go({
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
    };
    ProductVariantGuard.prototype.findVariant = function (variants) {
        var results = variants.filter(function (variant) {
            return variant.stock && variant.stock.stockLevel ? variant : false;
        });
        return !results.length && variants.length ? variants[0] : results[0];
    };
    ProductVariantGuard.ctorParameters = function () { return [
        { type: ProductService },
        { type: RoutingService }
    ]; };
    ProductVariantGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProductVariantGuard_Factory() { return new ProductVariantGuard(i0.ɵɵinject(i1.ProductService), i0.ɵɵinject(i1.RoutingService)); }, token: ProductVariantGuard, providedIn: "root" });
    ProductVariantGuard = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], ProductVariantGuard);
    return ProductVariantGuard;
}());
export { ProductVariantGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12YXJpYW50Lmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LXZhcmlhbnRzL2d1YXJkcy9wcm9kdWN0LXZhcmlhbnQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUNMLGFBQWEsRUFDYixjQUFjLEVBQ2QsT0FBTyxFQUNQLGNBQWMsRUFDZCxZQUFZLEdBQ2IsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBS3pCO0lBQ0UsNkJBQ1UsY0FBOEIsRUFDOUIsY0FBOEI7UUFEOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNyQyxDQUFDO0lBRUoseUNBQVcsR0FBWDtRQUFBLGlCQWlDQztRQWhDQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUM5QyxHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQWxDLENBQWtDLENBQUMsRUFDaEQsU0FBUyxDQUFDLFVBQUMsV0FBbUI7WUFDNUIsNkJBQTZCO1lBQzdCLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pCO1lBRUQsT0FBTyxLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDckUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLEdBQUcsQ0FBQyxVQUFDLE9BQWdCO2dCQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRTtvQkFDeEIsSUFBTSxPQUFPLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQ3pELHVGQUF1RjtvQkFDdkYsNENBQTRDO29CQUM1QyxLQUFJLENBQUMsY0FBYzt5QkFDaEIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQzt5QkFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQzlCLFNBQVMsQ0FBQyxVQUFDLFFBQWlCO3dCQUMzQixLQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQzs0QkFDckIsT0FBTyxFQUFFLFNBQVM7NEJBQ2xCLE1BQU0sRUFBRSxRQUFRO3lCQUNqQixDQUFDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7b0JBQ0wsT0FBTyxLQUFLLENBQUM7aUJBQ2Q7cUJBQU07b0JBQ0wsT0FBTyxJQUFJLENBQUM7aUJBQ2I7WUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCx5Q0FBVyxHQUFYLFVBQVksUUFBeUI7UUFDbkMsSUFBTSxPQUFPLEdBQW9CLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQSxPQUFPO1lBQ3RELE9BQU8sT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDckUsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDOztnQkE1Q3lCLGNBQWM7Z0JBQ2QsY0FBYzs7O0lBSDdCLG1CQUFtQjtRQUgvQixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csbUJBQW1CLENBK0MvQjs4QkE5REQ7Q0E4REMsQUEvQ0QsSUErQ0M7U0EvQ1ksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFVybFRyZWUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBmaWx0ZXIsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBWYXJpYW50T3B0aW9uLFxuICBQcm9kdWN0U2VydmljZSxcbiAgUHJvZHVjdCxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFByb2R1Y3RTY29wZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RWYXJpYW50R3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge31cblxuICBjYW5BY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0Um91dGVyU3RhdGUoKS5waXBlKFxuICAgICAgbWFwKHN0YXRlID0+IHN0YXRlLm5leHRTdGF0ZS5wYXJhbXMucHJvZHVjdENvZGUpLFxuICAgICAgc3dpdGNoTWFwKChwcm9kdWN0Q29kZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIC8vIGlmIG9wZW4gcGRwIGZyb20gc21hcnRlZGl0XG4gICAgICAgIGlmICghcHJvZHVjdENvZGUpIHtcbiAgICAgICAgICByZXR1cm4gb2YodHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0U2VydmljZS5nZXQocHJvZHVjdENvZGUsIFByb2R1Y3RTY29wZS5WQVJJQU5UUykucGlwZShcbiAgICAgICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICAgICAgbWFwKChwcm9kdWN0OiBQcm9kdWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXByb2R1Y3QucHVyY2hhc2FibGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgdmFyaWFudCA9IHRoaXMuZmluZFZhcmlhbnQocHJvZHVjdC52YXJpYW50T3B0aW9ucyk7XG4gICAgICAgICAgICAgIC8vIGJlbG93IGNhbGwgbWlnaHQgbG9va3MgcmVkdW5kYW50IGJ1dCBpbiBmYWN0IHRoaXMgZGF0YSBpcyBnb2luZyB0byBiZSBsb2FkZWQgYW55d2F5c1xuICAgICAgICAgICAgICAvLyB3ZSdyZSBqdXN0IGNhbGxpbmcgaXQgZWFybGllciBhbmQgc3RvcmluZ1xuICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RTZXJ2aWNlXG4gICAgICAgICAgICAgICAgLmdldCh2YXJpYW50LmNvZGUsIFByb2R1Y3RTY29wZS5MSVNUKVxuICAgICAgICAgICAgICAgIC5waXBlKGZpbHRlcihCb29sZWFuKSwgdGFrZSgxKSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChfcHJvZHVjdDogUHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7XG4gICAgICAgICAgICAgICAgICAgIGN4Um91dGU6ICdwcm9kdWN0JyxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBfcHJvZHVjdCxcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZmluZFZhcmlhbnQodmFyaWFudHM6IFZhcmlhbnRPcHRpb25bXSk6IFZhcmlhbnRPcHRpb24ge1xuICAgIGNvbnN0IHJlc3VsdHM6IFZhcmlhbnRPcHRpb25bXSA9IHZhcmlhbnRzLmZpbHRlcih2YXJpYW50ID0+IHtcbiAgICAgIHJldHVybiB2YXJpYW50LnN0b2NrICYmIHZhcmlhbnQuc3RvY2suc3RvY2tMZXZlbCA/IHZhcmlhbnQgOiBmYWxzZTtcbiAgICB9KTtcbiAgICByZXR1cm4gIXJlc3VsdHMubGVuZ3RoICYmIHZhcmlhbnRzLmxlbmd0aCA/IHZhcmlhbnRzWzBdIDogcmVzdWx0c1swXTtcbiAgfVxufVxuIl19