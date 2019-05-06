/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { CurrentProductService } from '../../current-product.service';
import { ProductDetailOutlets } from '../../product-outlets.model';
export class ProductDetailsComponent {
    /**
     * @param {?} currentPageService
     */
    constructor(currentPageService) {
        this.currentPageService = currentPageService;
    }
    /**
     * @return {?}
     */
    get outlets() {
        return ProductDetailsComponent.outlets;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.product$ = this.currentPageService.getProduct();
    }
}
ProductDetailsComponent.outlets = ProductDetailOutlets;
ProductDetailsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-details',
                template: "<ng-container *ngIf=\"(product$ | async) as product\">\n  <ng-container *cxOutlet=\"outlets.PAGE\">\n    <ng-container *cxOutlet=\"outlets.SUMMARY\">\n      <cx-product-summary class=\"container\" [product]=\"product\">\n        <cx-product-images [product]=\"product\"></cx-product-images>\n      </cx-product-summary>\n    </ng-container> </ng-container\n></ng-container>\n"
            }] }
];
/** @nocollapse */
ProductDetailsComponent.ctorParameters = () => [
    { type: CurrentProductService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1kZXRhaWxzL2NvbnRhaW5lci9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBR2xELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBTW5FLE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFTbEMsWUFBc0Isa0JBQXlDO1FBQXpDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBdUI7SUFBRyxDQUFDOzs7O0lBSm5FLElBQUksT0FBTztRQUNULE9BQU8sdUJBQXVCLENBQUMsT0FBTyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFJRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdkQsQ0FBQzs7QUFaTSwrQkFBTyxHQUFHLG9CQUFvQixDQUFDOztZQUx2QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsbVlBQStDO2FBQ2hEOzs7O1lBTlEscUJBQXFCOzs7O0lBUTVCLGdDQUFzQzs7SUFFdEMsMkNBQWdDOzs7OztJQU1wQixxREFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVUlQcm9kdWN0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uLy4uL2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3REZXRhaWxPdXRsZXRzIH0gZnJvbSAnLi4vLi4vcHJvZHVjdC1vdXRsZXRzLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1kZXRhaWxzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3REZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgc3RhdGljIG91dGxldHMgPSBQcm9kdWN0RGV0YWlsT3V0bGV0cztcblxuICBwcm9kdWN0JDogT2JzZXJ2YWJsZTxVSVByb2R1Y3Q+O1xuXG4gIGdldCBvdXRsZXRzKCk6IGFueSB7XG4gICAgcmV0dXJuIFByb2R1Y3REZXRhaWxzQ29tcG9uZW50Lm91dGxldHM7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY3VycmVudFBhZ2VTZXJ2aWNlOiBDdXJyZW50UHJvZHVjdFNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5wcm9kdWN0JCA9IHRoaXMuY3VycmVudFBhZ2VTZXJ2aWNlLmdldFByb2R1Y3QoKTtcbiAgfVxufVxuIl19