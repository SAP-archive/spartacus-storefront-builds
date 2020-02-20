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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12YXJpYW50Lmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LXZhcmlhbnRzL2d1YXJkcy9wcm9kdWN0LXZhcmlhbnQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUNMLGFBQWEsRUFDYixjQUFjLEVBQ2QsT0FBTyxFQUNQLGNBQWMsRUFDZCxZQUFZLEdBQ2IsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBS3pCO0lBQ0UsNkJBQ1UsY0FBOEIsRUFDOUIsY0FBOEI7UUFEOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNyQyxDQUFDO0lBRUoseUNBQVcsR0FBWDtRQUFBLGlCQW9DQztRQW5DQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUM5QyxHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQWxDLENBQWtDLENBQUMsRUFDaEQsU0FBUyxDQUFDLFVBQUMsV0FBbUI7WUFDNUIsNkJBQTZCO1lBQzdCLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pCO1lBRUQsT0FBTyxLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDckUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLEdBQUcsQ0FBQyxVQUFDLE9BQWdCO2dCQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRTtvQkFDeEIsSUFBTSxPQUFPLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQ3pELHVGQUF1RjtvQkFDdkYsNENBQTRDO29CQUM1QyxLQUFJLENBQUMsY0FBYzt5QkFDaEIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQzt5QkFDcEMsSUFBSSxDQUNILE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1I7eUJBQ0EsU0FBUyxDQUFDLFVBQUMsUUFBaUI7d0JBQzNCLEtBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDOzRCQUNyQixPQUFPLEVBQUUsU0FBUzs0QkFDbEIsTUFBTSxFQUFFLFFBQVE7eUJBQ2pCLENBQUMsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQztvQkFDTCxPQUFPLEtBQUssQ0FBQztpQkFDZDtxQkFBTTtvQkFDTCxPQUFPLElBQUksQ0FBQztpQkFDYjtZQUNILENBQUMsQ0FBQyxDQUNILENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELHlDQUFXLEdBQVgsVUFBWSxRQUF5QjtRQUNuQyxJQUFNLE9BQU8sR0FBb0IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFBLE9BQU87WUFDdEQsT0FBTyxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNyRSxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7O2dCQS9DeUIsY0FBYztnQkFDZCxjQUFjOzs7SUFIN0IsbUJBQW1CO1FBSC9CLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxtQkFBbUIsQ0FrRC9COzhCQWpFRDtDQWlFQyxBQWxERCxJQWtEQztTQWxEWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW5BY3RpdmF0ZSwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGZpbHRlciwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFZhcmlhbnRPcHRpb24sXG4gIFByb2R1Y3RTZXJ2aWNlLFxuICBQcm9kdWN0LFxuICBSb3V0aW5nU2VydmljZSxcbiAgUHJvZHVjdFNjb3BlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFZhcmlhbnRHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIGNhbkFjdGl2YXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcbiAgICByZXR1cm4gdGhpcy5yb3V0aW5nU2VydmljZS5nZXRSb3V0ZXJTdGF0ZSgpLnBpcGUoXG4gICAgICBtYXAoc3RhdGUgPT4gc3RhdGUubmV4dFN0YXRlLnBhcmFtcy5wcm9kdWN0Q29kZSksXG4gICAgICBzd2l0Y2hNYXAoKHByb2R1Y3RDb2RlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgLy8gaWYgb3BlbiBwZHAgZnJvbSBzbWFydGVkaXRcbiAgICAgICAgaWYgKCFwcm9kdWN0Q29kZSkge1xuICAgICAgICAgIHJldHVybiBvZih0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RTZXJ2aWNlLmdldChwcm9kdWN0Q29kZSwgUHJvZHVjdFNjb3BlLlZBUklBTlRTKS5waXBlKFxuICAgICAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgICAgICBtYXAoKHByb2R1Y3Q6IFByb2R1Y3QpID0+IHtcbiAgICAgICAgICAgIGlmICghcHJvZHVjdC5wdXJjaGFzYWJsZSkge1xuICAgICAgICAgICAgICBjb25zdCB2YXJpYW50ID0gdGhpcy5maW5kVmFyaWFudChwcm9kdWN0LnZhcmlhbnRPcHRpb25zKTtcbiAgICAgICAgICAgICAgLy8gYmVsb3cgY2FsbCBtaWdodCBsb29rcyByZWR1bmRhbnQgYnV0IGluIGZhY3QgdGhpcyBkYXRhIGlzIGdvaW5nIHRvIGJlIGxvYWRlZCBhbnl3YXlzXG4gICAgICAgICAgICAgIC8vIHdlJ3JlIGp1c3QgY2FsbGluZyBpdCBlYXJsaWVyIGFuZCBzdG9yaW5nXG4gICAgICAgICAgICAgIHRoaXMucHJvZHVjdFNlcnZpY2VcbiAgICAgICAgICAgICAgICAuZ2V0KHZhcmlhbnQuY29kZSwgUHJvZHVjdFNjb3BlLkxJU1QpXG4gICAgICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICAgICAgICAgICAgICB0YWtlKDEpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKF9wcm9kdWN0OiBQcm9kdWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHtcbiAgICAgICAgICAgICAgICAgICAgY3hSb3V0ZTogJ3Byb2R1Y3QnLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IF9wcm9kdWN0LFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBmaW5kVmFyaWFudCh2YXJpYW50czogVmFyaWFudE9wdGlvbltdKTogVmFyaWFudE9wdGlvbiB7XG4gICAgY29uc3QgcmVzdWx0czogVmFyaWFudE9wdGlvbltdID0gdmFyaWFudHMuZmlsdGVyKHZhcmlhbnQgPT4ge1xuICAgICAgcmV0dXJuIHZhcmlhbnQuc3RvY2sgJiYgdmFyaWFudC5zdG9jay5zdG9ja0xldmVsID8gdmFyaWFudCA6IGZhbHNlO1xuICAgIH0pO1xuICAgIHJldHVybiAhcmVzdWx0cy5sZW5ndGggJiYgdmFyaWFudHMubGVuZ3RoID8gdmFyaWFudHNbMF0gOiByZXN1bHRzWzBdO1xuICB9XG59XG4iXX0=