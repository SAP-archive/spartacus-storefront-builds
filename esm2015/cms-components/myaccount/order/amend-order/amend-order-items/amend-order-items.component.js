/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { OrderAmendService } from '../amend-order.service';
export class CancelOrReturnItemsComponent {
    /**
     * @param {?} orderAmendService
     */
    constructor(orderAmendService) {
        this.orderAmendService = orderAmendService;
        this.isConfirmation = false;
        this.form$ = this.orderAmendService.getForm();
    }
    /**
     * @param {?} form
     * @param {?} entry
     * @return {?}
     */
    getControl(form, entry) {
        /** @type {?} */
        const control = (/** @type {?} */ ((form.get('entries').get(entry.entryNumber.toString()))));
        if (this.isConfirmation) {
            control.disable();
        }
        return control;
    }
    /**
     * @param {?} form
     * @return {?}
     */
    setAll(form) {
        this.entries.forEach((/**
         * @param {?} entry
         * @return {?}
         */
        entry => this.getControl(form, entry).setValue(this.getMaxAmendQuantity(entry))));
    }
    /**
     * @param {?} entry
     * @return {?}
     */
    getItemPrice(entry) {
        return this.orderAmendService.getAmendedPrice(entry);
    }
    /**
     * @param {?} entry
     * @return {?}
     */
    getMaxAmendQuantity(entry) {
        return this.orderAmendService.getMaxAmendQuantity(entry);
    }
    /**
     * @return {?}
     */
    isCancellation() {
        return this.orderAmendService.isCancellation();
    }
}
CancelOrReturnItemsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-amend-order-items',
                template: "<div *ngIf=\"form$ | async as form\">\n  <button\n    *ngIf=\"!isConfirmation\"\n    class=\"btn btn-link cx-action-link\"\n    (click)=\"setAll(form)\"\n  >\n    {{ 'orderDetails.cancellationAndReturn.setAll' | cxTranslate }}\n  </button>\n\n  <div class=\"d-none d-md-block\">\n    <div class=\"cx-item-list-header row\">\n      <div class=\"cx-item-list-desc col-md-5 col-xl-6\">\n        {{ 'orderDetails.cancellationAndReturn.item' | cxTranslate }}\n      </div>\n      <div class=\"cx-item-list-price col-2\">\n        {{ 'orderDetails.cancellationAndReturn.itemPrice' | cxTranslate }}\n      </div>\n      <div *ngIf=\"!isConfirmation\" class=\"cx-item-list-qty col-md-3 col-xl-2\">\n        {{ 'orderDetails.cancellationAndReturn.quantity' | cxTranslate }}\n      </div>\n      <div class=\"cx-item-list-qty col-2\">\n        {{\n          (isCancellation()\n            ? 'orderDetails.cancellationAndReturn.cancelQty'\n            : 'orderDetails.cancellationAndReturn.returnQty') | cxTranslate\n        }}\n      </div>\n      <div *ngIf=\"isConfirmation\" class=\"cx-item-list-total col-md-3  col-xl-2\">\n        {{ 'orderDetails.cancellationAndReturn.totalPrice' | cxTranslate }}\n      </div>\n    </div>\n  </div>\n\n  <div class=\"cx-item-list-row\" *ngFor=\"let item of entries; let i = index\">\n    <div class=\"row cx-item-list-items\">\n      <!-- Item Image -->\n      <cx-media\n        class=\"col-2 cx-image-container\"\n        [container]=\"item.product.images?.PRIMARY\"\n        format=\"thumbnail\"\n      ></cx-media>\n\n      <!-- Item Information -->\n      <div class=\"cx-info col-10\">\n        <div class=\"cx-info-container row\">\n          <!-- Item Description -->\n          <div class=\"col-md-3 col-xl-5\">\n            <div *ngIf=\"item.product.name\" class=\"cx-name\">\n              {{ item.product.name }}\n            </div>\n            <div *ngIf=\"item.product.code\" class=\"cx-code\">\n              {{ 'cartItems.id' | cxTranslate }} {{ item.product.code }}\n            </div>\n            <!-- Variants -->\n            <ng-container *cxFeatureLevel=\"'!1.5'\">\n              <div\n                *ngFor=\"let variant of item.product.variantOptionQualifiers\"\n                class=\"cx-property\"\n              >\n                <div class=\"cx-label\">{{ variant.name }}</div>\n                <div class=\"cx-value\">{{ variant.value }}</div>\n              </div>\n            </ng-container>\n            <ng-container *cxFeatureLevel=\"'1.5'\">\n              <ng-container *ngIf=\"item.product.baseOptions?.length\">\n                <div\n                  *ngFor=\"\n                    let variant of item.product.baseOptions[0]?.selected\n                      ?.variantOptionQualifiers\n                  \"\n                  class=\"cx-property\"\n                >\n                  <div class=\"cx-label\" *ngIf=\"variant.name\">\n                    {{ variant.name }}:\n                  </div>\n                  <div class=\"cx-value\" *ngIf=\"variant.value\">\n                    {{ variant.value }}\n                  </div>\n                </div>\n              </ng-container>\n            </ng-container>\n          </div>\n          <!-- Price -->\n          <div\n            *ngIf=\"item.basePrice\"\n            class=\"cx-price col-md-3 col-lg-3 col-xl-2\"\n          >\n            <div class=\"cx-label d-block d-md-none d-lg-none d-xl-none\">\n              {{ 'orderDetails.cancellationAndReturn.itemPrice' | cxTranslate }}\n            </div>\n            <div *ngIf=\"item.basePrice\" class=\"cx-value\">\n              {{ item.basePrice?.formattedValue }}\n            </div>\n          </div>\n          <!-- item Quantity -->\n          <div *ngIf=\"!isConfirmation\" class=\"cx-request-qty col-md-3\">\n            <div\n              class=\"cx-label d-block d-md-none d-lg-none d-xl-none\"\n              placement=\"left\"\n              title=\"{{ 'cartItems.quantityTitle' | cxTranslate }}\"\n            >\n              {{ 'orderDetails.cancellationAndReturn.quantity' | cxTranslate }}\n            </div>\n            <div class=\"cx-value\">\n              {{ getMaxAmendQuantity(item) }}\n            </div>\n          </div>\n          <!-- Amended Quantity -->\n          <div class=\"cx-quantity col-md-3 col-xl-2\">\n            <div class=\"cx-label d-block d-md-none d-lg-none d-xl-none\">\n              {{\n                (isCancellation()\n                  ? 'orderDetails.cancellationAndReturn.cancelQty'\n                  : 'orderDetails.cancellationAndReturn.returnQty')\n                  | cxTranslate\n              }}\n            </div>\n\n            <cx-item-counter\n              [min]=\"0\"\n              [max]=\"getMaxAmendQuantity(item)\"\n              [control]=\"getControl(form, item)\"\n              [readonly]=\"isConfirmation\"\n            >\n            </cx-item-counter>\n          </div>\n          <!-- Total Price -->\n          <div *ngIf=\"isConfirmation\" class=\"cx-total col-3\">\n            <div class=\"cx-label d-block d-md-none\">\n              {{\n                'orderDetails.cancellationAndReturn.totalPrice' | cxTranslate\n              }}\n            </div>\n            <div class=\"cx-value\">\n              {{ getItemPrice(item)?.formattedValue }}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CancelOrReturnItemsComponent.ctorParameters = () => [
    { type: OrderAmendService }
];
CancelOrReturnItemsComponent.propDecorators = {
    entries: [{ type: Input }],
    isConfirmation: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1lbmQtb3JkZXItaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL2FtZW5kLW9yZGVyL2FtZW5kLW9yZGVyLWl0ZW1zL2FtZW5kLW9yZGVyLWl0ZW1zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFPM0QsTUFBTSxPQUFPLDRCQUE0Qjs7OztJQU12QyxZQUFzQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUpqRCxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUVoQyxVQUFLLEdBQTBCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUVILENBQUM7Ozs7OztJQUU5RCxVQUFVLENBQUMsSUFBZSxFQUFFLEtBQWlCOztjQUNyQyxPQUFPLEdBQUcsbUJBQWEsQ0FDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUN0RCxFQUFBO1FBQ0QsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNuQjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLElBQWU7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUN2RSxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsS0FBaUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7O0lBRUQsbUJBQW1CLENBQUMsS0FBaUI7UUFDbkMsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNqRCxDQUFDOzs7WUF2Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLGkwS0FBaUQ7Z0JBQ2pELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBTlEsaUJBQWlCOzs7c0JBUXZCLEtBQUs7NkJBQ0wsS0FBSzs7OztJQUROLCtDQUErQjs7SUFDL0Isc0RBQWdDOztJQUVoQyw2Q0FBZ0U7Ozs7O0lBRXBELHlEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT3JkZXJFbnRyeSwgUHJpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT3JkZXJBbWVuZFNlcnZpY2UgfSBmcm9tICcuLi9hbWVuZC1vcmRlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYW1lbmQtb3JkZXItaXRlbXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vYW1lbmQtb3JkZXItaXRlbXMuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FuY2VsT3JSZXR1cm5JdGVtc0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGVudHJpZXM6IE9yZGVyRW50cnlbXTtcbiAgQElucHV0KCkgaXNDb25maXJtYXRpb24gPSBmYWxzZTtcblxuICBmb3JtJDogT2JzZXJ2YWJsZTxGb3JtR3JvdXA+ID0gdGhpcy5vcmRlckFtZW5kU2VydmljZS5nZXRGb3JtKCk7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIG9yZGVyQW1lbmRTZXJ2aWNlOiBPcmRlckFtZW5kU2VydmljZSkge31cblxuICBnZXRDb250cm9sKGZvcm06IEZvcm1Hcm91cCwgZW50cnk6IE9yZGVyRW50cnkpOiBGb3JtQ29udHJvbCB7XG4gICAgY29uc3QgY29udHJvbCA9IDxGb3JtQ29udHJvbD4oXG4gICAgICBmb3JtLmdldCgnZW50cmllcycpLmdldChlbnRyeS5lbnRyeU51bWJlci50b1N0cmluZygpKVxuICAgICk7XG4gICAgaWYgKHRoaXMuaXNDb25maXJtYXRpb24pIHtcbiAgICAgIGNvbnRyb2wuZGlzYWJsZSgpO1xuICAgIH1cbiAgICByZXR1cm4gY29udHJvbDtcbiAgfVxuXG4gIHNldEFsbChmb3JtOiBGb3JtR3JvdXApOiB2b2lkIHtcbiAgICB0aGlzLmVudHJpZXMuZm9yRWFjaChlbnRyeSA9PlxuICAgICAgdGhpcy5nZXRDb250cm9sKGZvcm0sIGVudHJ5KS5zZXRWYWx1ZSh0aGlzLmdldE1heEFtZW5kUXVhbnRpdHkoZW50cnkpKVxuICAgICk7XG4gIH1cblxuICBnZXRJdGVtUHJpY2UoZW50cnk6IE9yZGVyRW50cnkpOiBQcmljZSB7XG4gICAgcmV0dXJuIHRoaXMub3JkZXJBbWVuZFNlcnZpY2UuZ2V0QW1lbmRlZFByaWNlKGVudHJ5KTtcbiAgfVxuXG4gIGdldE1heEFtZW5kUXVhbnRpdHkoZW50cnk6IE9yZGVyRW50cnkpIHtcbiAgICByZXR1cm4gdGhpcy5vcmRlckFtZW5kU2VydmljZS5nZXRNYXhBbWVuZFF1YW50aXR5KGVudHJ5KTtcbiAgfVxuXG4gIGlzQ2FuY2VsbGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm9yZGVyQW1lbmRTZXJ2aWNlLmlzQ2FuY2VsbGF0aW9uKCk7XG4gIH1cbn1cbiJdfQ==