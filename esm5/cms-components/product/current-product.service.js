import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Product, ProductScope, ProductService, RoutingService, } from '@spartacus/core';
import { of } from 'rxjs';
import { distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var CurrentProductService = /** @class */ (function () {
    function CurrentProductService(routingService, productService) {
        this.routingService = routingService;
        this.productService = productService;
        this.DEFAULT_PRODUCT_SCOPE = ProductScope.DETAILS;
    }
    /**
     * Will emit current product or null, if there is no current product (i.e. we are not on PDP)
     *
     * @param scopes
     */
    CurrentProductService.prototype.getProduct = function (scopes) {
        var _this = this;
        return this.routingService.getRouterState().pipe(map(function (state) { return state.state.params['productCode']; }), switchMap(function (productCode) {
            return productCode
                ? _this.productService.get(productCode, scopes || _this.DEFAULT_PRODUCT_SCOPE)
                : of(null);
        }), filter(function (x) { return x !== undefined; }), distinctUntilChanged());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudC1wcm9kdWN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxPQUFPLEVBQ1AsWUFBWSxFQUNaLGNBQWMsRUFDZCxjQUFjLEdBQ2YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFLOUU7SUFDRSwrQkFDVSxjQUE4QixFQUM5QixjQUE4QjtRQUQ5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBR3JCLDBCQUFxQixHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUM7SUFGN0QsQ0FBQztJQUlKOzs7O09BSUc7SUFDSCwwQ0FBVSxHQUFWLFVBQ0UsTUFBMEQ7UUFENUQsaUJBZ0JDO1FBYkMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FDOUMsR0FBRyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQWpDLENBQWlDLENBQUMsRUFDL0MsU0FBUyxDQUFDLFVBQUMsV0FBbUI7WUFDNUIsT0FBTyxXQUFXO2dCQUNoQixDQUFDLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQ3JCLFdBQVcsRUFDWCxNQUFNLElBQUksS0FBSSxDQUFDLHFCQUFxQixDQUNyQztnQkFDSCxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLEVBQ0YsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLFNBQVMsRUFBZixDQUFlLENBQUMsRUFDNUIsb0JBQW9CLEVBQUUsQ0FDdkIsQ0FBQztJQUNKLENBQUM7O2dCQTNCeUIsY0FBYztnQkFDZCxjQUFjOzs7SUFIN0IscUJBQXFCO1FBSGpDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxxQkFBcUIsQ0E4QmpDO2dDQTNDRDtDQTJDQyxBQTlCRCxJQThCQztTQTlCWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBQcm9kdWN0LFxuICBQcm9kdWN0U2NvcGUsXG4gIFByb2R1Y3RTZXJ2aWNlLFxuICBSb3V0aW5nU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEN1cnJlbnRQcm9kdWN0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlXG4gICkge31cblxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgREVGQVVMVF9QUk9EVUNUX1NDT1BFID0gUHJvZHVjdFNjb3BlLkRFVEFJTFM7XG5cbiAgLyoqXG4gICAqIFdpbGwgZW1pdCBjdXJyZW50IHByb2R1Y3Qgb3IgbnVsbCwgaWYgdGhlcmUgaXMgbm8gY3VycmVudCBwcm9kdWN0IChpLmUuIHdlIGFyZSBub3Qgb24gUERQKVxuICAgKlxuICAgKiBAcGFyYW0gc2NvcGVzXG4gICAqL1xuICBnZXRQcm9kdWN0KFxuICAgIHNjb3Blcz86IChQcm9kdWN0U2NvcGUgfCBzdHJpbmcpW10gfCBQcm9kdWN0U2NvcGUgfCBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxQcm9kdWN0IHwgbnVsbD4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICAgIG1hcChzdGF0ZSA9PiBzdGF0ZS5zdGF0ZS5wYXJhbXNbJ3Byb2R1Y3RDb2RlJ10pLFxuICAgICAgc3dpdGNoTWFwKChwcm9kdWN0Q29kZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHJldHVybiBwcm9kdWN0Q29kZVxuICAgICAgICAgID8gdGhpcy5wcm9kdWN0U2VydmljZS5nZXQoXG4gICAgICAgICAgICAgIHByb2R1Y3RDb2RlLFxuICAgICAgICAgICAgICBzY29wZXMgfHwgdGhpcy5ERUZBVUxUX1BST0RVQ1RfU0NPUEVcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IG9mKG51bGwpO1xuICAgICAgfSksXG4gICAgICBmaWx0ZXIoeCA9PiB4ICE9PSB1bmRlZmluZWQpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==