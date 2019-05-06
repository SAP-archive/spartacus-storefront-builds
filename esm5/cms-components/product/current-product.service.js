/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ProductService, RoutingService } from '@spartacus/core';
import { filter, map, switchMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var CurrentProductService = /** @class */ (function () {
    function CurrentProductService(routingService, productService) {
        this.routingService = routingService;
        this.productService = productService;
    }
    /**
     * @return {?}
     */
    CurrentProductService.prototype.getProduct = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.routingService.getRouterState().pipe(map(function (state) { return state.state.params['productCode']; }), filter(function (productCode) { return !!productCode; }), switchMap(function (productCode) { return _this.productService.get(productCode); }));
    };
    CurrentProductService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CurrentProductService.ctorParameters = function () { return [
        { type: RoutingService },
        { type: ProductService }
    ]; };
    /** @nocollapse */ CurrentProductService.ngInjectableDef = i0.defineInjectable({ factory: function CurrentProductService_Factory() { return new CurrentProductService(i0.inject(i1.RoutingService), i0.inject(i1.ProductService)); }, token: CurrentProductService, providedIn: "root" });
    return CurrentProductService;
}());
export { CurrentProductService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CurrentProductService.prototype.routingService;
    /**
     * @type {?}
     * @private
     */
    CurrentProductService.prototype.productService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudC1wcm9kdWN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFhLE1BQU0saUJBQWlCLENBQUM7QUFFNUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUV4RDtJQUlFLCtCQUNVLGNBQThCLEVBQzlCLGNBQThCO1FBRDlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDckMsQ0FBQzs7OztJQUVKLDBDQUFVOzs7SUFBVjtRQUFBLGlCQU1DO1FBTEMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FDOUMsR0FBRyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQWpDLENBQWlDLENBQUMsRUFDL0MsTUFBTSxDQUFDLFVBQUEsV0FBVyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFdBQVcsRUFBYixDQUFhLENBQUMsRUFDcEMsU0FBUyxDQUFDLFVBQUMsV0FBbUIsSUFBSyxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFwQyxDQUFvQyxDQUFDLENBQ3pFLENBQUM7SUFDSixDQUFDOztnQkFmRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQU53QixjQUFjO2dCQUE5QixjQUFjOzs7Z0NBRHZCO0NBcUJDLEFBaEJELElBZ0JDO1NBYlkscUJBQXFCOzs7Ozs7SUFFOUIsK0NBQXNDOzs7OztJQUN0QywrQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0U2VydmljZSwgUm91dGluZ1NlcnZpY2UsIFVJUHJvZHVjdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2VcbiAgKSB7fVxuXG4gIGdldFByb2R1Y3QoKTogT2JzZXJ2YWJsZTxVSVByb2R1Y3Q+IHtcbiAgICByZXR1cm4gdGhpcy5yb3V0aW5nU2VydmljZS5nZXRSb3V0ZXJTdGF0ZSgpLnBpcGUoXG4gICAgICBtYXAoc3RhdGUgPT4gc3RhdGUuc3RhdGUucGFyYW1zWydwcm9kdWN0Q29kZSddKSxcbiAgICAgIGZpbHRlcihwcm9kdWN0Q29kZSA9PiAhIXByb2R1Y3RDb2RlKSxcbiAgICAgIHN3aXRjaE1hcCgocHJvZHVjdENvZGU6IHN0cmluZykgPT4gdGhpcy5wcm9kdWN0U2VydmljZS5nZXQocHJvZHVjdENvZGUpKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==