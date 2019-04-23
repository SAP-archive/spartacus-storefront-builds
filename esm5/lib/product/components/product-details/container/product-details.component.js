/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output } from '@angular/core';
import { CurrentProductService } from '../../../../ui/pages/product-page/current-product.service';
import { ProductDetailOutlets } from '../../../product-outlets.model';
var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(currentPageService) {
        this.currentPageService = currentPageService;
        this.openReview = new EventEmitter();
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
    /**
     * @return {?}
     */
    ProductDetailsComponent.prototype.launchReview = /**
     * @return {?}
     */
    function () {
        this.openReview.emit();
    };
    ProductDetailsComponent.outlets = ProductDetailOutlets;
    ProductDetailsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-details',
                    template: "<ng-container *ngIf=\"(product$ | async) as product\">\n  <ng-container *cxOutlet=\"outlets.PAGE\">\n    <ng-container *cxOutlet=\"outlets.SUMMARY\">\n      <cx-product-summary\n        class=\"container\"\n        [product]=\"product\"\n        (openReview)=\"launchReview()\"\n      >\n        <cx-product-images [product]=\"product\"></cx-product-images>\n      </cx-product-summary>\n    </ng-container> </ng-container\n></ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    ProductDetailsComponent.ctorParameters = function () { return [
        { type: CurrentProductService }
    ]; };
    ProductDetailsComponent.propDecorators = {
        openReview: [{ type: Output }]
    };
    return ProductDetailsComponent;
}());
export { ProductDetailsComponent };
if (false) {
    /** @type {?} */
    ProductDetailsComponent.outlets;
    /** @type {?} */
    ProductDetailsComponent.prototype.openReview;
    /** @type {?} */
    ProductDetailsComponent.prototype.product$;
    /**
     * @type {?}
     * @protected
     */
    ProductDetailsComponent.prototype.currentPageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9wcm9kdWN0L2NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWxzL2NvbnRhaW5lci9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHeEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDbEcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFdEU7SUFlRSxpQ0FBc0Isa0JBQXlDO1FBQXpDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBdUI7UUFSckQsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFRd0IsQ0FBQztJQUpuRSxzQkFBSSw0Q0FBTzs7OztRQUFYO1lBQ0UsT0FBTyx1QkFBdUIsQ0FBQyxPQUFPLENBQUM7UUFDekMsQ0FBQzs7O09BQUE7Ozs7SUFJRCwwQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN2RCxDQUFDOzs7O0lBRUQsOENBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBbEJNLCtCQUFPLEdBQUcsb0JBQW9CLENBQUM7O2dCQUx2QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsc2NBQStDO2lCQUNoRDs7OztnQkFOUSxxQkFBcUI7Ozs2QkFVM0IsTUFBTTs7SUFpQlQsOEJBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQXBCWSx1QkFBdUI7OztJQUNsQyxnQ0FBc0M7O0lBRXRDLDZDQUEwQzs7SUFFMUMsMkNBQThCOzs7OztJQU1sQixxREFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vdWkvcGFnZXMvcHJvZHVjdC1wYWdlL2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3REZXRhaWxPdXRsZXRzIH0gZnJvbSAnLi4vLi4vLi4vcHJvZHVjdC1vdXRsZXRzLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1kZXRhaWxzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3REZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgc3RhdGljIG91dGxldHMgPSBQcm9kdWN0RGV0YWlsT3V0bGV0cztcblxuICBAT3V0cHV0KCkgb3BlblJldmlldyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwcm9kdWN0JDogT2JzZXJ2YWJsZTxQcm9kdWN0PjtcblxuICBnZXQgb3V0bGV0cygpOiBhbnkge1xuICAgIHJldHVybiBQcm9kdWN0RGV0YWlsc0NvbXBvbmVudC5vdXRsZXRzO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGN1cnJlbnRQYWdlU2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucHJvZHVjdCQgPSB0aGlzLmN1cnJlbnRQYWdlU2VydmljZS5nZXRQcm9kdWN0KCk7XG4gIH1cblxuICBsYXVuY2hSZXZpZXcoKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuUmV2aWV3LmVtaXQoKTtcbiAgfVxufVxuIl19