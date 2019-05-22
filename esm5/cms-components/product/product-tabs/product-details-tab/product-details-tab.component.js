/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CurrentProductService } from '../../current-product.service';
var ProductDetailsTabComponent = /** @class */ (function () {
    function ProductDetailsTabComponent(currentProductService) {
        this.currentProductService = currentProductService;
    }
    /**
     * @return {?}
     */
    ProductDetailsTabComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.product$ = this.currentProductService.getProduct();
    };
    ProductDetailsTabComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-details-tab',
                    template: "<ng-container *ngIf=\"(product$ | async) as product\">\n  <div class=\"container\" [innerHTML]=\"product?.description\"></div>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ProductDetailsTabComponent.ctorParameters = function () { return [
        { type: CurrentProductService }
    ]; };
    return ProductDetailsTabComponent;
}());
export { ProductDetailsTabComponent };
if (false) {
    /** @type {?} */
    ProductDetailsTabComponent.prototype.product$;
    /**
     * @type {?}
     * @protected
     */
    ProductDetailsTabComponent.prototype.currentProductService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kZXRhaWxzLXRhYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtdGFicy9wcm9kdWN0LWRldGFpbHMtdGFiL3Byb2R1Y3QtZGV0YWlscy10YWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRzNFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRXRFO0lBUUUsb0NBQXNCLHFCQUE0QztRQUE1QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBQUcsQ0FBQzs7OztJQUV0RSw2Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxRCxDQUFDOztnQkFaRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsNkpBQW1EO29CQUNuRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBTlEscUJBQXFCOztJQWU5QixpQ0FBQztDQUFBLEFBYkQsSUFhQztTQVJZLDBCQUEwQjs7O0lBQ3JDLDhDQUE4Qjs7Ozs7SUFFbEIsMkRBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uLy4uL2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1kZXRhaWxzLXRhYicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LWRldGFpbHMtdGFiLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3REZXRhaWxzVGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJvZHVjdCQ6IE9ic2VydmFibGU8UHJvZHVjdD47XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGN1cnJlbnRQcm9kdWN0U2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucHJvZHVjdCQgPSB0aGlzLmN1cnJlbnRQcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0KCk7XG4gIH1cbn1cbiJdfQ==