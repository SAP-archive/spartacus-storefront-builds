/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { OrderAmendService } from '../amend-order.service';
var CancelOrReturnItemsComponent = /** @class */ (function () {
    function CancelOrReturnItemsComponent(orderAmendService) {
        this.orderAmendService = orderAmendService;
        this.isConfirmation = false;
        this.form$ = this.orderAmendService.getForm();
    }
    /**
     * @param {?} form
     * @param {?} entry
     * @return {?}
     */
    CancelOrReturnItemsComponent.prototype.getControl = /**
     * @param {?} form
     * @param {?} entry
     * @return {?}
     */
    function (form, entry) {
        /** @type {?} */
        var control = (/** @type {?} */ ((form.get('entries').get(entry.entryNumber.toString()))));
        if (this.isConfirmation) {
            control.disable();
        }
        return control;
    };
    /**
     * @param {?} form
     * @return {?}
     */
    CancelOrReturnItemsComponent.prototype.setAll = /**
     * @param {?} form
     * @return {?}
     */
    function (form) {
        var _this = this;
        this.entries.forEach((/**
         * @param {?} entry
         * @return {?}
         */
        function (entry) {
            return _this.getControl(form, entry).setValue(_this.getMaxAmendQuantity(entry));
        }));
    };
    /**
     * @param {?} entry
     * @return {?}
     */
    CancelOrReturnItemsComponent.prototype.getItemPrice = /**
     * @param {?} entry
     * @return {?}
     */
    function (entry) {
        return this.orderAmendService.getAmendedPrice(entry);
    };
    /**
     * @param {?} entry
     * @return {?}
     */
    CancelOrReturnItemsComponent.prototype.getMaxAmendQuantity = /**
     * @param {?} entry
     * @return {?}
     */
    function (entry) {
        return this.orderAmendService.getMaxAmendQuantity(entry);
    };
    /**
     * @return {?}
     */
    CancelOrReturnItemsComponent.prototype.isCancellation = /**
     * @return {?}
     */
    function () {
        return this.orderAmendService.isCancellation();
    };
    CancelOrReturnItemsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-amend-order-items',
                    template: "<div *ngIf=\"form$ | async as form\">\n  <button\n    *ngIf=\"!isConfirmation\"\n    class=\"btn btn-link cx-action-link\"\n    (click)=\"setAll(form)\"\n  >\n    {{ 'orderDetails.cancellationAndReturn.setAll' | cxTranslate }}\n  </button>\n\n  <div class=\"d-none d-md-block\">\n    <div class=\"cx-item-list-header row\">\n      <div class=\"cx-item-list-desc col-md-5 col-xl-6\">\n        {{ 'orderDetails.cancellationAndReturn.item' | cxTranslate }}\n      </div>\n      <div class=\"cx-item-list-price col-2\">\n        {{ 'orderDetails.cancellationAndReturn.itemPrice' | cxTranslate }}\n      </div>\n      <div *ngIf=\"!isConfirmation\" class=\"cx-item-list-qty col-md-3 col-xl-2\">\n        {{ 'orderDetails.cancellationAndReturn.quantity' | cxTranslate }}\n      </div>\n      <div class=\"cx-item-list-qty col-2\">\n        {{\n          (isCancellation()\n            ? 'orderDetails.cancellationAndReturn.cancelQty'\n            : 'orderDetails.cancellationAndReturn.returnQty') | cxTranslate\n        }}\n      </div>\n      <div *ngIf=\"isConfirmation\" class=\"cx-item-list-total col-md-3  col-xl-2\">\n        {{ 'orderDetails.cancellationAndReturn.totalPrice' | cxTranslate }}\n      </div>\n    </div>\n  </div>\n\n  <div class=\"cx-item-list-row\" *ngFor=\"let item of entries; let i = index\">\n    <div class=\"row cx-item-list-items\">\n      <!-- Item Image -->\n      <cx-media\n        class=\"col-2 cx-image-container\"\n        [container]=\"item.product.images?.PRIMARY\"\n        format=\"thumbnail\"\n      ></cx-media>\n\n      <!-- Item Information -->\n      <div class=\"cx-info col-10\">\n        <div class=\"cx-info-container row\">\n          <!-- Item Description -->\n          <div class=\"col-md-3 col-xl-5\">\n            <div *ngIf=\"item.product.name\" class=\"cx-name\">\n              {{ item.product.name }}\n            </div>\n            <div *ngIf=\"item.product.code\" class=\"cx-code\">\n              {{ 'cartItems.id' | cxTranslate }} {{ item.product.code }}\n            </div>\n            <!-- Variants -->\n            <ng-container *cxFeatureLevel=\"'!1.5'\">\n              <div\n                *ngFor=\"let variant of item.product.variantOptionQualifiers\"\n                class=\"cx-property\"\n              >\n                <div class=\"cx-label\">{{ variant.name }}</div>\n                <div class=\"cx-value\">{{ variant.value }}</div>\n              </div>\n            </ng-container>\n            <ng-container *cxFeatureLevel=\"'1.5'\">\n              <ng-container *ngIf=\"item.product.baseOptions?.length\">\n                <div\n                  *ngFor=\"\n                    let variant of item.product.baseOptions[0]?.selected\n                      ?.variantOptionQualifiers\n                  \"\n                  class=\"cx-property\"\n                >\n                  <div class=\"cx-label\" *ngIf=\"variant.name\">\n                    {{ variant.name }}:\n                  </div>\n                  <div class=\"cx-value\" *ngIf=\"variant.value\">\n                    {{ variant.value }}\n                  </div>\n                </div>\n              </ng-container>\n            </ng-container>\n          </div>\n          <!-- Price -->\n          <div\n            *ngIf=\"item.basePrice\"\n            class=\"cx-price col-md-3 col-lg-3 col-xl-2\"\n          >\n            <div class=\"cx-label d-block d-md-none d-lg-none d-xl-none\">\n              {{ 'orderDetails.cancellationAndReturn.itemPrice' | cxTranslate }}\n            </div>\n            <div *ngIf=\"item.basePrice\" class=\"cx-value\">\n              {{ item.basePrice?.formattedValue }}\n            </div>\n          </div>\n          <!-- item Quantity -->\n          <div *ngIf=\"!isConfirmation\" class=\"cx-request-qty col-md-3\">\n            <div\n              class=\"cx-label d-block d-md-none d-lg-none d-xl-none\"\n              placement=\"left\"\n              title=\"{{ 'cartItems.quantityTitle' | cxTranslate }}\"\n            >\n              {{ 'orderDetails.cancellationAndReturn.quantity' | cxTranslate }}\n            </div>\n            <div class=\"cx-value\">\n              {{ getMaxAmendQuantity(item) }}\n            </div>\n          </div>\n          <!-- Amended Quantity -->\n          <div class=\"cx-quantity col-md-3 col-xl-2\">\n            <div class=\"cx-label d-block d-md-none d-lg-none d-xl-none\">\n              {{\n                (isCancellation()\n                  ? 'orderDetails.cancellationAndReturn.cancelQty'\n                  : 'orderDetails.cancellationAndReturn.returnQty')\n                  | cxTranslate\n              }}\n            </div>\n\n            <cx-item-counter\n              [min]=\"0\"\n              [max]=\"getMaxAmendQuantity(item)\"\n              [control]=\"getControl(form, item)\"\n              [readonly]=\"isConfirmation\"\n            >\n            </cx-item-counter>\n          </div>\n          <!-- Total Price -->\n          <div *ngIf=\"isConfirmation\" class=\"cx-total col-3\">\n            <div class=\"cx-label d-block d-md-none\">\n              {{\n                'orderDetails.cancellationAndReturn.totalPrice' | cxTranslate\n              }}\n            </div>\n            <div class=\"cx-value\">\n              {{ getItemPrice(item)?.formattedValue }}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CancelOrReturnItemsComponent.ctorParameters = function () { return [
        { type: OrderAmendService }
    ]; };
    CancelOrReturnItemsComponent.propDecorators = {
        entries: [{ type: Input }],
        isConfirmation: [{ type: Input }]
    };
    return CancelOrReturnItemsComponent;
}());
export { CancelOrReturnItemsComponent };
if (false) {
    /** @type {?} */
    CancelOrReturnItemsComponent.prototype.entries;
    /** @type {?} */
    CancelOrReturnItemsComponent.prototype.isConfirmation;
    /** @type {?} */
    CancelOrReturnItemsComponent.prototype.form$;
    /**
     * @type {?}
     * @protected
     */
    CancelOrReturnItemsComponent.prototype.orderAmendService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1lbmQtb3JkZXItaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL2FtZW5kLW9yZGVyL2FtZW5kLW9yZGVyLWl0ZW1zL2FtZW5kLW9yZGVyLWl0ZW1zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFM0Q7SUFXRSxzQ0FBc0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFKakQsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFFaEMsVUFBSyxHQUEwQixJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUM7SUFFSCxDQUFDOzs7Ozs7SUFFOUQsaURBQVU7Ozs7O0lBQVYsVUFBVyxJQUFlLEVBQUUsS0FBaUI7O1lBQ3JDLE9BQU8sR0FBRyxtQkFBYSxDQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQ3RELEVBQUE7UUFDRCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ25CO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7Ozs7SUFFRCw2Q0FBTTs7OztJQUFOLFVBQU8sSUFBZTtRQUF0QixpQkFJQztRQUhDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsS0FBSztZQUN4QixPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFBdEUsQ0FBc0UsRUFDdkUsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsbURBQVk7Ozs7SUFBWixVQUFhLEtBQWlCO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUVELDBEQUFtQjs7OztJQUFuQixVQUFvQixLQUFpQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7O0lBRUQscURBQWM7OztJQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDakQsQ0FBQzs7Z0JBdkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxpMEtBQWlEO29CQUNqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBTlEsaUJBQWlCOzs7MEJBUXZCLEtBQUs7aUNBQ0wsS0FBSzs7SUFpQ1IsbUNBQUM7Q0FBQSxBQXhDRCxJQXdDQztTQW5DWSw0QkFBNEI7OztJQUN2QywrQ0FBK0I7O0lBQy9CLHNEQUFnQzs7SUFFaEMsNkNBQWdFOzs7OztJQUVwRCx5REFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9yZGVyRW50cnksIFByaWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE9yZGVyQW1lbmRTZXJ2aWNlIH0gZnJvbSAnLi4vYW1lbmQtb3JkZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWFtZW5kLW9yZGVyLWl0ZW1zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FtZW5kLW9yZGVyLWl0ZW1zLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENhbmNlbE9yUmV0dXJuSXRlbXNDb21wb25lbnQge1xuICBASW5wdXQoKSBlbnRyaWVzOiBPcmRlckVudHJ5W107XG4gIEBJbnB1dCgpIGlzQ29uZmlybWF0aW9uID0gZmFsc2U7XG5cbiAgZm9ybSQ6IE9ic2VydmFibGU8Rm9ybUdyb3VwPiA9IHRoaXMub3JkZXJBbWVuZFNlcnZpY2UuZ2V0Rm9ybSgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBvcmRlckFtZW5kU2VydmljZTogT3JkZXJBbWVuZFNlcnZpY2UpIHt9XG5cbiAgZ2V0Q29udHJvbChmb3JtOiBGb3JtR3JvdXAsIGVudHJ5OiBPcmRlckVudHJ5KTogRm9ybUNvbnRyb2wge1xuICAgIGNvbnN0IGNvbnRyb2wgPSA8Rm9ybUNvbnRyb2w+KFxuICAgICAgZm9ybS5nZXQoJ2VudHJpZXMnKS5nZXQoZW50cnkuZW50cnlOdW1iZXIudG9TdHJpbmcoKSlcbiAgICApO1xuICAgIGlmICh0aGlzLmlzQ29uZmlybWF0aW9uKSB7XG4gICAgICBjb250cm9sLmRpc2FibGUoKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRyb2w7XG4gIH1cblxuICBzZXRBbGwoZm9ybTogRm9ybUdyb3VwKTogdm9pZCB7XG4gICAgdGhpcy5lbnRyaWVzLmZvckVhY2goZW50cnkgPT5cbiAgICAgIHRoaXMuZ2V0Q29udHJvbChmb3JtLCBlbnRyeSkuc2V0VmFsdWUodGhpcy5nZXRNYXhBbWVuZFF1YW50aXR5KGVudHJ5KSlcbiAgICApO1xuICB9XG5cbiAgZ2V0SXRlbVByaWNlKGVudHJ5OiBPcmRlckVudHJ5KTogUHJpY2Uge1xuICAgIHJldHVybiB0aGlzLm9yZGVyQW1lbmRTZXJ2aWNlLmdldEFtZW5kZWRQcmljZShlbnRyeSk7XG4gIH1cblxuICBnZXRNYXhBbWVuZFF1YW50aXR5KGVudHJ5OiBPcmRlckVudHJ5KSB7XG4gICAgcmV0dXJuIHRoaXMub3JkZXJBbWVuZFNlcnZpY2UuZ2V0TWF4QW1lbmRRdWFudGl0eShlbnRyeSk7XG4gIH1cblxuICBpc0NhbmNlbGxhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vcmRlckFtZW5kU2VydmljZS5pc0NhbmNlbGxhdGlvbigpO1xuICB9XG59XG4iXX0=