/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FeatureConfigService, ProductService, RoutingService, } from '@spartacus/core';
import { filter, map, switchMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
export class CurrentProductService {
    /**
     * @param {?} routingService
     * @param {?} productService
     * @param {?=} features
     */
    constructor(routingService, productService, features) {
        this.routingService = routingService;
        this.productService = productService;
        this.features = features;
        this.PRODUCT_SCOPE = this.features && this.features.isLevel('1.4') ? ['details'] : '';
    }
    /**
     * @return {?}
     */
    getProduct() {
        return this.routingService.getRouterState().pipe(map((/**
         * @param {?} state
         * @return {?}
         */
        state => state.state.params['productCode'])), filter(Boolean), switchMap((/**
         * @param {?} productCode
         * @return {?}
         */
        (productCode) => this.productService.get(productCode, this.PRODUCT_SCOPE))));
    }
}
CurrentProductService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CurrentProductService.ctorParameters = () => [
    { type: RoutingService },
    { type: ProductService },
    { type: FeatureConfigService }
];
/** @nocollapse */ CurrentProductService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CurrentProductService_Factory() { return new CurrentProductService(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.ProductService), i0.ɵɵinject(i1.FeatureConfigService)); }, token: CurrentProductService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CurrentProductService.prototype.PRODUCT_SCOPE;
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
    /**
     * @type {?}
     * @protected
     */
    CurrentProductService.prototype.features;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudC1wcm9kdWN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxvQkFBb0IsRUFFcEIsY0FBYyxFQUNkLGNBQWMsR0FDZixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFLeEQsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7O0lBQ2hDLFlBQ1UsY0FBOEIsRUFDOUIsY0FBOEIsRUFDNUIsUUFBK0I7UUFGakMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM1QixhQUFRLEdBQVIsUUFBUSxDQUF1QjtRQUd4QixrQkFBYSxHQUM5QixJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFIaEUsQ0FBQzs7OztJQUtKLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUM5QyxHQUFHOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBQyxFQUMvQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsU0FBUzs7OztRQUFDLENBQUMsV0FBbUIsRUFBRSxFQUFFLENBQ2hDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQ3pELENBQ0YsQ0FBQztJQUNKLENBQUM7OztZQXJCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFQQyxjQUFjO1lBRGQsY0FBYztZQUZkLG9CQUFvQjs7Ozs7Ozs7SUFrQnBCLDhDQUNtRTs7Ozs7SUFOakUsK0NBQXNDOzs7OztJQUN0QywrQ0FBc0M7Ozs7O0lBQ3RDLHlDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEZlYXR1cmVDb25maWdTZXJ2aWNlLFxuICBQcm9kdWN0LFxuICBQcm9kdWN0U2VydmljZSxcbiAgUm91dGluZ1NlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGZlYXR1cmVzPzogRmVhdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIHByb3RlY3RlZCByZWFkb25seSBQUk9EVUNUX1NDT1BFID1cbiAgICB0aGlzLmZlYXR1cmVzICYmIHRoaXMuZmVhdHVyZXMuaXNMZXZlbCgnMS40JykgPyBbJ2RldGFpbHMnXSA6ICcnO1xuXG4gIGdldFByb2R1Y3QoKTogT2JzZXJ2YWJsZTxQcm9kdWN0PiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0Um91dGVyU3RhdGUoKS5waXBlKFxuICAgICAgbWFwKHN0YXRlID0+IHN0YXRlLnN0YXRlLnBhcmFtc1sncHJvZHVjdENvZGUnXSksXG4gICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICBzd2l0Y2hNYXAoKHByb2R1Y3RDb2RlOiBzdHJpbmcpID0+XG4gICAgICAgIHRoaXMucHJvZHVjdFNlcnZpY2UuZ2V0KHByb2R1Y3RDb2RlLCB0aGlzLlBST0RVQ1RfU0NPUEUpXG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuIl19