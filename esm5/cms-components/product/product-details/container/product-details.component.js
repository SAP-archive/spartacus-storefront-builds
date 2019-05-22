/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { CurrentProductService } from '../../current-product.service';
import { ProductDetailOutlets } from '../../product-outlets.model';
var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(currentPageService) {
        this.currentPageService = currentPageService;
    }
    Object.defineProperty(ProductDetailsComponent.prototype, "outlets", {
        get: /**
         * @return {?}
         */
        function () {
            return ProductDetailsComponent.outlets;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ProductDetailsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.product$ = this.currentPageService.getProduct();
    };
    ProductDetailsComponent.outlets = ProductDetailOutlets;
    ProductDetailsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-details',
                    template: "<ng-container *ngIf=\"(product$ | async) as product\">\n  <ng-container *cxOutlet=\"outlets.PAGE\">\n    <ng-container *cxOutlet=\"outlets.SUMMARY\">\n      <cx-product-summary class=\"container\" [product]=\"product\">\n        <cx-product-images [product]=\"product\"></cx-product-images>\n      </cx-product-summary>\n    </ng-container> </ng-container\n></ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    ProductDetailsComponent.ctorParameters = function () { return [
        { type: CurrentProductService }
    ]; };
    return ProductDetailsComponent;
}());
export { ProductDetailsComponent };
if (false) {
    /** @type {?} */
    ProductDetailsComponent.outlets;
    /** @type {?} */
    ProductDetailsComponent.prototype.product$;
    /**
     * @type {?}
     * @protected
     */
    ProductDetailsComponent.prototype.currentPageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1kZXRhaWxzL2NvbnRhaW5lci9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBR2xELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRW5FO0lBYUUsaUNBQXNCLGtCQUF5QztRQUF6Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXVCO0lBQUcsQ0FBQztJQUpuRSxzQkFBSSw0Q0FBTzs7OztRQUFYO1lBQ0UsT0FBTyx1QkFBdUIsQ0FBQyxPQUFPLENBQUM7UUFDekMsQ0FBQzs7O09BQUE7Ozs7SUFJRCwwQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBWk0sK0JBQU8sR0FBRyxvQkFBb0IsQ0FBQzs7Z0JBTHZDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixtWUFBK0M7aUJBQ2hEOzs7O2dCQU5RLHFCQUFxQjs7SUFxQjlCLDhCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FkWSx1QkFBdUI7OztJQUNsQyxnQ0FBc0M7O0lBRXRDLDJDQUE4Qjs7Ozs7SUFNbEIscURBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY3VycmVudC1wcm9kdWN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdERldGFpbE91dGxldHMgfSBmcm9tICcuLi8uLi9wcm9kdWN0LW91dGxldHMubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LWRldGFpbHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdERldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBzdGF0aWMgb3V0bGV0cyA9IFByb2R1Y3REZXRhaWxPdXRsZXRzO1xuXG4gIHByb2R1Y3QkOiBPYnNlcnZhYmxlPFByb2R1Y3Q+O1xuXG4gIGdldCBvdXRsZXRzKCk6IGFueSB7XG4gICAgcmV0dXJuIFByb2R1Y3REZXRhaWxzQ29tcG9uZW50Lm91dGxldHM7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY3VycmVudFBhZ2VTZXJ2aWNlOiBDdXJyZW50UHJvZHVjdFNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5wcm9kdWN0JCA9IHRoaXMuY3VycmVudFBhZ2VTZXJ2aWNlLmdldFByb2R1Y3QoKTtcbiAgfVxufVxuIl19