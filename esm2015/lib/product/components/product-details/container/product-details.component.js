/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { CurrentProductService } from '../../../../ui/pages/product-page/current-product.service';
import { ProductDetailOutlets } from '../../../product-outlets.model';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9wcm9kdWN0L2NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWxzL2NvbnRhaW5lci9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBR2xELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBTXRFLE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFTbEMsWUFBc0Isa0JBQXlDO1FBQXpDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBdUI7SUFBRyxDQUFDOzs7O0lBSm5FLElBQUksT0FBTztRQUNULE9BQU8sdUJBQXVCLENBQUMsT0FBTyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFJRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdkQsQ0FBQzs7QUFaTSwrQkFBTyxHQUFHLG9CQUFvQixDQUFDOztZQUx2QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsbVlBQStDO2FBQ2hEOzs7O1lBTlEscUJBQXFCOzs7O0lBUTVCLGdDQUFzQzs7SUFFdEMsMkNBQWdDOzs7OztJQU1wQixxREFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVUlQcm9kdWN0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3VpL3BhZ2VzL3Byb2R1Y3QtcGFnZS9jdXJyZW50LXByb2R1Y3Quc2VydmljZSc7XG5pbXBvcnQgeyBQcm9kdWN0RGV0YWlsT3V0bGV0cyB9IGZyb20gJy4uLy4uLy4uL3Byb2R1Y3Qtb3V0bGV0cy5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtZGV0YWlscycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0RGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHN0YXRpYyBvdXRsZXRzID0gUHJvZHVjdERldGFpbE91dGxldHM7XG5cbiAgcHJvZHVjdCQ6IE9ic2VydmFibGU8VUlQcm9kdWN0PjtcblxuICBnZXQgb3V0bGV0cygpOiBhbnkge1xuICAgIHJldHVybiBQcm9kdWN0RGV0YWlsc0NvbXBvbmVudC5vdXRsZXRzO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGN1cnJlbnRQYWdlU2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucHJvZHVjdCQgPSB0aGlzLmN1cnJlbnRQYWdlU2VydmljZS5nZXRQcm9kdWN0KCk7XG4gIH1cbn1cbiJdfQ==