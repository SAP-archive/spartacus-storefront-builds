/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { CurrentProductService } from '../../../../ui/pages/product-page/current-product.service';
import { ProductDetailOutlets } from '../../../product-outlets.model';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9wcm9kdWN0L2NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWxzL2NvbnRhaW5lci9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBR2xELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXRFO0lBYUUsaUNBQXNCLGtCQUF5QztRQUF6Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXVCO0lBQUcsQ0FBQztJQUpuRSxzQkFBSSw0Q0FBTzs7OztRQUFYO1lBQ0UsT0FBTyx1QkFBdUIsQ0FBQyxPQUFPLENBQUM7UUFDekMsQ0FBQzs7O09BQUE7Ozs7SUFJRCwwQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBWk0sK0JBQU8sR0FBRyxvQkFBb0IsQ0FBQzs7Z0JBTHZDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixtWUFBK0M7aUJBQ2hEOzs7O2dCQU5RLHFCQUFxQjs7SUFxQjlCLDhCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FkWSx1QkFBdUI7OztJQUNsQyxnQ0FBc0M7O0lBRXRDLDJDQUFnQzs7Ozs7SUFNcEIscURBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFVJUHJvZHVjdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDdXJyZW50UHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi91aS9wYWdlcy9wcm9kdWN0LXBhZ2UvY3VycmVudC1wcm9kdWN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdERldGFpbE91dGxldHMgfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0LW91dGxldHMubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LWRldGFpbHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdERldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBzdGF0aWMgb3V0bGV0cyA9IFByb2R1Y3REZXRhaWxPdXRsZXRzO1xuXG4gIHByb2R1Y3QkOiBPYnNlcnZhYmxlPFVJUHJvZHVjdD47XG5cbiAgZ2V0IG91dGxldHMoKTogYW55IHtcbiAgICByZXR1cm4gUHJvZHVjdERldGFpbHNDb21wb25lbnQub3V0bGV0cztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjdXJyZW50UGFnZVNlcnZpY2U6IEN1cnJlbnRQcm9kdWN0U2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnByb2R1Y3QkID0gdGhpcy5jdXJyZW50UGFnZVNlcnZpY2UuZ2V0UHJvZHVjdCgpO1xuICB9XG59XG4iXX0=