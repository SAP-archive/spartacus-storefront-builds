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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1kZXRhaWxzL2NvbnRhaW5lci9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBR2xELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRW5FO0lBYUUsaUNBQXNCLGtCQUF5QztRQUF6Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXVCO0lBQUcsQ0FBQztJQUpuRSxzQkFBSSw0Q0FBTzs7OztRQUFYO1lBQ0UsT0FBTyx1QkFBdUIsQ0FBQyxPQUFPLENBQUM7UUFDekMsQ0FBQzs7O09BQUE7Ozs7SUFJRCwwQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBWk0sK0JBQU8sR0FBRyxvQkFBb0IsQ0FBQzs7Z0JBTHZDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixtWUFBK0M7aUJBQ2hEOzs7O2dCQU5RLHFCQUFxQjs7SUFxQjlCLDhCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FkWSx1QkFBdUI7OztJQUNsQyxnQ0FBc0M7O0lBRXRDLDJDQUFnQzs7Ozs7SUFNcEIscURBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVJUHJvZHVjdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDdXJyZW50UHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9jdXJyZW50LXByb2R1Y3Quc2VydmljZSc7XG5pbXBvcnQgeyBQcm9kdWN0RGV0YWlsT3V0bGV0cyB9IGZyb20gJy4uLy4uL3Byb2R1Y3Qtb3V0bGV0cy5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtZGV0YWlscycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0RGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHN0YXRpYyBvdXRsZXRzID0gUHJvZHVjdERldGFpbE91dGxldHM7XG5cbiAgcHJvZHVjdCQ6IE9ic2VydmFibGU8VUlQcm9kdWN0PjtcblxuICBnZXQgb3V0bGV0cygpOiBhbnkge1xuICAgIHJldHVybiBQcm9kdWN0RGV0YWlsc0NvbXBvbmVudC5vdXRsZXRzO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGN1cnJlbnRQYWdlU2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucHJvZHVjdCQgPSB0aGlzLmN1cnJlbnRQYWdlU2VydmljZS5nZXRQcm9kdWN0KCk7XG4gIH1cbn1cbiJdfQ==