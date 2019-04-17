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
                    template: "<ng-container *ngIf=\"(product$ | async) as product\">\n  <ng-container *cxOutlet=\"outlets.PAGE\">\n    <ng-container *cxOutlet=\"outlets.SUMMARY\">\n      <cx-product-summary\n        class=\"container\"\n        [product]=\"product\"\n        (openReview)=\"launchReview()\"\n      >\n        <cx-product-images [product]=\"product\"></cx-product-images>\n      </cx-product-summary>\n    </ng-container> </ng-container\n></ng-container>\n",
                    styles: ["cx-product-summary{margin-bottom:var(--cx-margin-bottom,40px)}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9wcm9kdWN0L2NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWxzL2NvbnRhaW5lci9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJeEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDbEcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFdEU7SUFnQkUsaUNBQXNCLGtCQUF5QztRQUF6Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXVCO1FBUnJELGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBUXdCLENBQUM7SUFKbkUsc0JBQUksNENBQU87Ozs7UUFBWDtZQUNFLE9BQU8sdUJBQXVCLENBQUMsT0FBTyxDQUFDO1FBQ3pDLENBQUM7OztPQUFBOzs7O0lBSUQsMENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdkQsQ0FBQzs7OztJQUVELDhDQUFZOzs7SUFBWjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQWxCTSwrQkFBTyxHQUFHLG9CQUFvQixDQUFDOztnQkFOdkMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLHNjQUErQzs7aUJBRWhEOzs7O2dCQVBRLHFCQUFxQjs7OzZCQVczQixNQUFNOztJQWlCVCw4QkFBQztDQUFBLEFBekJELElBeUJDO1NBcEJZLHVCQUF1Qjs7O0lBQ2xDLGdDQUFzQzs7SUFFdEMsNkNBQTBDOztJQUUxQywyQ0FBOEI7Ozs7O0lBTWxCLHFEQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3VpL3BhZ2VzL3Byb2R1Y3QtcGFnZS9jdXJyZW50LXByb2R1Y3Quc2VydmljZSc7XG5pbXBvcnQgeyBQcm9kdWN0RGV0YWlsT3V0bGV0cyB9IGZyb20gJy4uLy4uLy4uL3Byb2R1Y3Qtb3V0bGV0cy5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtZGV0YWlscycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdERldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBzdGF0aWMgb3V0bGV0cyA9IFByb2R1Y3REZXRhaWxPdXRsZXRzO1xuXG4gIEBPdXRwdXQoKSBvcGVuUmV2aWV3ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHByb2R1Y3QkOiBPYnNlcnZhYmxlPFByb2R1Y3Q+O1xuXG4gIGdldCBvdXRsZXRzKCkge1xuICAgIHJldHVybiBQcm9kdWN0RGV0YWlsc0NvbXBvbmVudC5vdXRsZXRzO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGN1cnJlbnRQYWdlU2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucHJvZHVjdCQgPSB0aGlzLmN1cnJlbnRQYWdlU2VydmljZS5nZXRQcm9kdWN0KCk7XG4gIH1cblxuICBsYXVuY2hSZXZpZXcoKSB7XG4gICAgdGhpcy5vcGVuUmV2aWV3LmVtaXQoKTtcbiAgfVxufVxuIl19