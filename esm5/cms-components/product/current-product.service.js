import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { FeatureConfigService, Product, ProductScope, ProductService, RoutingService, } from '@spartacus/core';
import { filter, map, switchMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var CurrentProductService = /** @class */ (function () {
    function CurrentProductService(routingService, productService, features) {
        this.routingService = routingService;
        this.productService = productService;
        this.features = features;
        this.DEFAULT_PRODUCT_SCOPE = this.features && this.features.isLevel('1.4') ? ProductScope.DETAILS : '';
    }
    CurrentProductService.prototype.getProduct = function (scopes) {
        var _this = this;
        return this.routingService.getRouterState().pipe(map(function (state) { return state.state.params['productCode']; }), filter(Boolean), switchMap(function (productCode) {
            return _this.productService.get(productCode, 
            // TODO deprecated since 1.4 - should be replaced with 'scopes || this.DEFAULT_PRODUCT_SCOPE'
            _this.features && _this.features.isLevel('1.4')
                ? scopes || _this.DEFAULT_PRODUCT_SCOPE
                : undefined
            // deprecated END
            );
        }));
    };
    CurrentProductService.ctorParameters = function () { return [
        { type: RoutingService },
        { type: ProductService },
        { type: FeatureConfigService }
    ]; };
    CurrentProductService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CurrentProductService_Factory() { return new CurrentProductService(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.ProductService), i0.ɵɵinject(i1.FeatureConfigService)); }, token: CurrentProductService, providedIn: "root" });
    CurrentProductService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CurrentProductService);
    return CurrentProductService;
}());
export { CurrentProductService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudC1wcm9kdWN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsT0FBTyxFQUNQLFlBQVksRUFDWixjQUFjLEVBQ2QsY0FBYyxHQUNmLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUt4RDtJQWFFLCtCQUNVLGNBQThCLEVBQzlCLGNBQThCLEVBQzVCLFFBQStCO1FBRmpDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDNUIsYUFBUSxHQUFSLFFBQVEsQ0FBdUI7UUFHeEIsMEJBQXFCLEdBQ3RDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUh6RSxDQUFDO0lBS0osMENBQVUsR0FBVixVQUNFLE1BQTBEO1FBRDVELGlCQWlCQztRQWRDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQzlDLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFqQyxDQUFpQyxDQUFDLEVBQy9DLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixTQUFTLENBQUMsVUFBQyxXQUFtQjtZQUM1QixPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUNyQixXQUFXO1lBQ1gsNkZBQTZGO1lBQzdGLEtBQUksQ0FBQyxRQUFRLElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUMzQyxDQUFDLENBQUMsTUFBTSxJQUFJLEtBQUksQ0FBQyxxQkFBcUI7Z0JBQ3RDLENBQUMsQ0FBQyxTQUFTO1lBQ2IsaUJBQWlCO2FBQ2xCO1FBUEQsQ0FPQyxDQUNGLENBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQXpCeUIsY0FBYztnQkFDZCxjQUFjO2dCQUNqQixvQkFBb0I7OztJQWhCaEMscUJBQXFCO1FBSGpDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxxQkFBcUIsQ0F3Q2pDO2dDQXRERDtDQXNEQyxBQXhDRCxJQXdDQztTQXhDWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBGZWF0dXJlQ29uZmlnU2VydmljZSxcbiAgUHJvZHVjdCxcbiAgUHJvZHVjdFNjb3BlLFxuICBQcm9kdWN0U2VydmljZSxcbiAgUm91dGluZ1NlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSxcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVuaWZpZWQtc2lnbmF0dXJlc1xuICAgIGZlYXR1cmVzPzogRmVhdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKTtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgMS40XG4gICAqL1xuICBjb25zdHJ1Y3Rvcihyb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGZlYXR1cmVzPzogRmVhdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIHByb3RlY3RlZCByZWFkb25seSBERUZBVUxUX1BST0RVQ1RfU0NPUEUgPVxuICAgIHRoaXMuZmVhdHVyZXMgJiYgdGhpcy5mZWF0dXJlcy5pc0xldmVsKCcxLjQnKSA/IFByb2R1Y3RTY29wZS5ERVRBSUxTIDogJyc7XG5cbiAgZ2V0UHJvZHVjdChcbiAgICBzY29wZXM/OiAoUHJvZHVjdFNjb3BlIHwgc3RyaW5nKVtdIHwgUHJvZHVjdFNjb3BlIHwgc3RyaW5nXG4gICk6IE9ic2VydmFibGU8UHJvZHVjdD4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICAgIG1hcChzdGF0ZSA9PiBzdGF0ZS5zdGF0ZS5wYXJhbXNbJ3Byb2R1Y3RDb2RlJ10pLFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgc3dpdGNoTWFwKChwcm9kdWN0Q29kZTogc3RyaW5nKSA9PlxuICAgICAgICB0aGlzLnByb2R1Y3RTZXJ2aWNlLmdldChcbiAgICAgICAgICBwcm9kdWN0Q29kZSxcbiAgICAgICAgICAvLyBUT0RPIGRlcHJlY2F0ZWQgc2luY2UgMS40IC0gc2hvdWxkIGJlIHJlcGxhY2VkIHdpdGggJ3Njb3BlcyB8fCB0aGlzLkRFRkFVTFRfUFJPRFVDVF9TQ09QRSdcbiAgICAgICAgICB0aGlzLmZlYXR1cmVzICYmIHRoaXMuZmVhdHVyZXMuaXNMZXZlbCgnMS40JylcbiAgICAgICAgICAgID8gc2NvcGVzIHx8IHRoaXMuREVGQVVMVF9QUk9EVUNUX1NDT1BFXG4gICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgIC8vIGRlcHJlY2F0ZWQgRU5EXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG59XG4iXX0=