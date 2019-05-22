/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { CmsService } from '@spartacus/core';
import { CurrentProductService } from '../../current-product.service';
import { ProductDetailOutlets } from '../../product-outlets.model';
export class ProductDetailsComponent {
    /**
     * @param {?} currentPageService
     * @param {?} cmsService
     */
    constructor(currentPageService, cmsService) {
        this.currentPageService = currentPageService;
        this.cmsService = cmsService;
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
        this.page$ = this.cmsService.getCurrentPage();
    }
}
ProductDetailsComponent.outlets = ProductDetailOutlets;
ProductDetailsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-details',
                template: "<ng-container *ngIf=\"(product$ | async) as product\">\n  <ng-container *cxOutlet=\"outlets.SUMMARY\">\n    <cx-product-summary [product]=\"product\"> </cx-product-summary>\n  </ng-container>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
ProductDetailsComponent.ctorParameters = () => [
    { type: CurrentProductService },
    { type: CmsService }
];
if (false) {
    /** @type {?} */
    ProductDetailsComponent.outlets;
    /** @type {?} */
    ProductDetailsComponent.prototype.product$;
    /** @type {?} */
    ProductDetailsComponent.prototype.page$;
    /**
     * @type {?}
     * @protected
     */
    ProductDetailsComponent.prototype.currentPageService;
    /**
     * @type {?}
     * @private
     */
    ProductDetailsComponent.prototype.cmsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1kZXRhaWxzL2NvbnRhaW5lci9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQWlCLE1BQU0saUJBQWlCLENBQUM7QUFFNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDdEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFNbkUsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7SUFVbEMsWUFDWSxrQkFBeUMsRUFDM0MsVUFBc0I7UUFEcEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUF1QjtRQUMzQyxlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQzdCLENBQUM7Ozs7SUFQSixJQUFJLE9BQU87UUFDVCxPQUFPLHVCQUF1QixDQUFDLE9BQU8sQ0FBQztJQUN6QyxDQUFDOzs7O0lBT0QsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRXJELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNoRCxDQUFDOztBQWxCTSwrQkFBTyxHQUFHLG9CQUFvQixDQUFDOztZQUx2QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsOE5BQStDO2FBQ2hEOzs7O1lBTlEscUJBQXFCO1lBRnJCLFVBQVU7Ozs7SUFVakIsZ0NBQXNDOztJQUV0QywyQ0FBOEI7O0lBQzlCLHdDQUF3Qjs7Ozs7SUFPdEIscURBQW1EOzs7OztJQUNuRCw2Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zU2VydmljZSwgUGFnZSwgUHJvZHVjdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDdXJyZW50UHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9jdXJyZW50LXByb2R1Y3Quc2VydmljZSc7XG5pbXBvcnQgeyBQcm9kdWN0RGV0YWlsT3V0bGV0cyB9IGZyb20gJy4uLy4uL3Byb2R1Y3Qtb3V0bGV0cy5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtZGV0YWlscycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0RGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHN0YXRpYyBvdXRsZXRzID0gUHJvZHVjdERldGFpbE91dGxldHM7XG5cbiAgcHJvZHVjdCQ6IE9ic2VydmFibGU8UHJvZHVjdD47XG4gIHBhZ2UkOiBPYnNlcnZhYmxlPFBhZ2U+O1xuXG4gIGdldCBvdXRsZXRzKCk6IGFueSB7XG4gICAgcmV0dXJuIFByb2R1Y3REZXRhaWxzQ29tcG9uZW50Lm91dGxldHM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY3VycmVudFBhZ2VTZXJ2aWNlOiBDdXJyZW50UHJvZHVjdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnByb2R1Y3QkID0gdGhpcy5jdXJyZW50UGFnZVNlcnZpY2UuZ2V0UHJvZHVjdCgpO1xuXG4gICAgdGhpcy5wYWdlJCA9IHRoaXMuY21zU2VydmljZS5nZXRDdXJyZW50UGFnZSgpO1xuICB9XG59XG4iXX0=