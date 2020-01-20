/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FeatureConfigService, ProductScope, ProductService, RoutingService, } from '@spartacus/core';
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
    /**
     * @param {?=} scopes
     * @return {?}
     */
    CurrentProductService.prototype.getProduct = /**
     * @param {?=} scopes
     * @return {?}
     */
    function (scopes) {
        var _this = this;
        return this.routingService.getRouterState().pipe(map((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.state.params['productCode']; })), filter(Boolean), switchMap((/**
         * @param {?} productCode
         * @return {?}
         */
        function (productCode) {
            return _this.productService.get(productCode, 
            // TODO deprecated since 1.4 - should be replaced with 'scopes || this.DEFAULT_PRODUCT_SCOPE'
            _this.features && _this.features.isLevel('1.4')
                ? scopes || _this.DEFAULT_PRODUCT_SCOPE
                : undefined
            // deprecated END
            );
        })));
    };
    CurrentProductService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CurrentProductService.ctorParameters = function () { return [
        { type: RoutingService },
        { type: ProductService },
        { type: FeatureConfigService }
    ]; };
    /** @nocollapse */ CurrentProductService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CurrentProductService_Factory() { return new CurrentProductService(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.ProductService), i0.ɵɵinject(i1.FeatureConfigService)); }, token: CurrentProductService, providedIn: "root" });
    return CurrentProductService;
}());
export { CurrentProductService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CurrentProductService.prototype.DEFAULT_PRODUCT_SCOPE;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudC1wcm9kdWN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxvQkFBb0IsRUFFcEIsWUFBWSxFQUNaLGNBQWMsRUFDZCxjQUFjLEdBQ2YsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBRXhEO0lBZ0JFLCtCQUNVLGNBQThCLEVBQzlCLGNBQThCLEVBQzVCLFFBQStCO1FBRmpDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDNUIsYUFBUSxHQUFSLFFBQVEsQ0FBdUI7UUFHeEIsMEJBQXFCLEdBQ3RDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUh6RSxDQUFDOzs7OztJQUtKLDBDQUFVOzs7O0lBQVYsVUFDRSxNQUEwRDtRQUQ1RCxpQkFpQkM7UUFkQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUM5QyxHQUFHOzs7O1FBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBakMsQ0FBaUMsRUFBQyxFQUMvQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsU0FBUzs7OztRQUFDLFVBQUMsV0FBbUI7WUFDNUIsT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FDckIsV0FBVztZQUNYLDZGQUE2RjtZQUM3RixLQUFJLENBQUMsUUFBUSxJQUFJLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDM0MsQ0FBQyxDQUFDLE1BQU0sSUFBSSxLQUFJLENBQUMscUJBQXFCO2dCQUN0QyxDQUFDLENBQUMsU0FBUztZQUNiLGlCQUFpQjthQUNsQjtRQVBELENBT0MsRUFDRixDQUNGLENBQUM7SUFDSixDQUFDOztnQkExQ0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFQQyxjQUFjO2dCQURkLGNBQWM7Z0JBSGQsb0JBQW9COzs7Z0NBRnRCO0NBc0RDLEFBM0NELElBMkNDO1NBeENZLHFCQUFxQjs7Ozs7O0lBbUJoQyxzREFDNEU7Ozs7O0lBTjFFLCtDQUFzQzs7Ozs7SUFDdEMsK0NBQXNDOzs7OztJQUN0Qyx5Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBGZWF0dXJlQ29uZmlnU2VydmljZSxcbiAgUHJvZHVjdCxcbiAgUHJvZHVjdFNjb3BlLFxuICBQcm9kdWN0U2VydmljZSxcbiAgUm91dGluZ1NlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSxcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVuaWZpZWQtc2lnbmF0dXJlc1xuICAgIGZlYXR1cmVzPzogRmVhdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKTtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgMS40XG4gICAqL1xuICBjb25zdHJ1Y3Rvcihyb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGZlYXR1cmVzPzogRmVhdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIHByb3RlY3RlZCByZWFkb25seSBERUZBVUxUX1BST0RVQ1RfU0NPUEUgPVxuICAgIHRoaXMuZmVhdHVyZXMgJiYgdGhpcy5mZWF0dXJlcy5pc0xldmVsKCcxLjQnKSA/IFByb2R1Y3RTY29wZS5ERVRBSUxTIDogJyc7XG5cbiAgZ2V0UHJvZHVjdChcbiAgICBzY29wZXM/OiAoUHJvZHVjdFNjb3BlIHwgc3RyaW5nKVtdIHwgUHJvZHVjdFNjb3BlIHwgc3RyaW5nXG4gICk6IE9ic2VydmFibGU8UHJvZHVjdD4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICAgIG1hcChzdGF0ZSA9PiBzdGF0ZS5zdGF0ZS5wYXJhbXNbJ3Byb2R1Y3RDb2RlJ10pLFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgc3dpdGNoTWFwKChwcm9kdWN0Q29kZTogc3RyaW5nKSA9PlxuICAgICAgICB0aGlzLnByb2R1Y3RTZXJ2aWNlLmdldChcbiAgICAgICAgICBwcm9kdWN0Q29kZSxcbiAgICAgICAgICAvLyBUT0RPIGRlcHJlY2F0ZWQgc2luY2UgMS40IC0gc2hvdWxkIGJlIHJlcGxhY2VkIHdpdGggJ3Njb3BlcyB8fCB0aGlzLkRFRkFVTFRfUFJPRFVDVF9TQ09QRSdcbiAgICAgICAgICB0aGlzLmZlYXR1cmVzICYmIHRoaXMuZmVhdHVyZXMuaXNMZXZlbCgnMS40JylcbiAgICAgICAgICAgID8gc2NvcGVzIHx8IHRoaXMuREVGQVVMVF9QUk9EVUNUX1NDT1BFXG4gICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgIC8vIGRlcHJlY2F0ZWQgRU5EXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG59XG4iXX0=