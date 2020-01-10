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
        return (/** @type {?} */ (form.get('entries').get(entry.entryNumber.toString())));
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
                template: "<div *ngIf=\"form$ | async as form\">\n  <button\n    *ngIf=\"!isConfirmation\"\n    class=\"btn btn-link cx-action-link\"\n    (click)=\"setAll(form)\"\n  >\n    {{ 'orderDetails.cancellationAndReturn.setAll' | cxTranslate }}\n  </button>\n\n  <div class=\"d-none d-md-block\">\n    <div class=\"cx-item-list-header row\">\n      <div class=\"cx-item-list-desc col-md-5 col-xl-6\">\n        {{ 'orderDetails.cancellationAndReturn.item' | cxTranslate }}\n      </div>\n      <div class=\"cx-item-list-price col-2\">\n        {{ 'orderDetails.cancellationAndReturn.itemPrice' | cxTranslate }}\n      </div>\n      <div *ngIf=\"!isConfirmation\" class=\"cx-item-list-qty col-md-3 col-xl-2\">\n        {{ 'orderDetails.cancellationAndReturn.quantity' | cxTranslate }}\n      </div>\n      <div class=\"cx-item-list-qty col-2\">\n        {{\n          (isCancellation()\n            ? 'orderDetails.cancellationAndReturn.cancelQty'\n            : 'orderDetails.cancellationAndReturn.returnQty') | cxTranslate\n        }}\n      </div>\n      <div *ngIf=\"isConfirmation\" class=\"cx-item-list-total col-md-3  col-xl-2\">\n        {{ 'orderDetails.cancellationAndReturn.totalPrice' | cxTranslate }}\n      </div>\n    </div>\n  </div>\n\n  <div class=\"cx-item-list-row\" *ngFor=\"let item of entries; let i = index\">\n    <div class=\"row cx-item-list-items\">\n      <!-- Item Image -->\n      <cx-media\n        class=\"col-2 cx-image-container\"\n        [container]=\"item.product.images?.PRIMARY\"\n        format=\"thumbnail\"\n      ></cx-media>\n\n      <!-- Item Information -->\n      <div class=\"cx-info col-10\">\n        <div class=\"cx-info-container row\">\n          <!-- Item Description -->\n          <div class=\"col-md-3 col-xl-5\">\n            <div *ngIf=\"item.product.name\" class=\"cx-name\">\n              {{ item.product.name }}\n            </div>\n            <div *ngIf=\"item.product.code\" class=\"cx-code\">\n              {{ 'cartItems.id' | cxTranslate }} {{ item.product.code }}\n            </div>\n            <!-- Variants -->\n            <div\n              *ngFor=\"let variant of item.product.variantOptionQualifiers\"\n              class=\"cx-property\"\n            >\n              <div class=\"cx-label\">{{ variant.name }}</div>\n              <div class=\"cx-value\">{{ variant.value }}</div>\n            </div>\n          </div>\n          <!-- Price -->\n          <div\n            *ngIf=\"item.basePrice\"\n            class=\"cx-price col-md-3 col-lg-3 col-xl-2\"\n          >\n            <div class=\"cx-label d-block d-md-none d-lg-none d-xl-none\">\n              {{ 'orderDetails.cancellationAndReturn.itemPrice' | cxTranslate }}\n            </div>\n            <div *ngIf=\"item.basePrice\" class=\"cx-value\">\n              {{ item.basePrice?.formattedValue }}\n            </div>\n          </div>\n          <!-- item Quantity -->\n          <div *ngIf=\"!isConfirmation\" class=\"cx-request-qty col-md-3\">\n            <div\n              class=\"cx-label d-block d-md-none d-lg-none d-xl-none\"\n              placement=\"left\"\n              title=\"{{ 'cartItems.quantityTitle' | cxTranslate }}\"\n            >\n              {{ 'orderDetails.cancellationAndReturn.quantity' | cxTranslate }}\n            </div>\n            <div class=\"cx-value\">\n              {{ getMaxAmendQuantity(item) }}\n            </div>\n          </div>\n          <!-- Amended Quantity -->\n          <div class=\"cx-quantity col-md-3 col-xl-2\">\n            <div class=\"cx-label d-block d-md-none d-lg-none d-xl-none\">\n              {{\n                (isCancellation()\n                  ? 'orderDetails.cancellationAndReturn.cancelQty'\n                  : 'orderDetails.cancellationAndReturn.returnQty')\n                  | cxTranslate\n              }}\n            </div>\n\n            <cx-item-counter\n              [min]=\"0\"\n              [max]=\"getMaxAmendQuantity(item)\"\n              [isValueChangeable]=\"!isConfirmation\"\n              [formControl]=\"getControl(form, item)\"\n            >\n            </cx-item-counter>\n          </div>\n          <!-- Total Price -->\n          <div *ngIf=\"isConfirmation\" class=\"cx-total col-3\">\n            <div class=\"cx-label d-block d-md-none\">\n              {{\n                'orderDetails.cancellationAndReturn.totalPrice' | cxTranslate\n              }}\n            </div>\n            <div class=\"cx-value\">\n              {{ getItemPrice(item)?.formattedValue }}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1lbmQtb3JkZXItaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL2FtZW5kLW9yZGVyL2FtZW5kLW9yZGVyLWl0ZW1zL2FtZW5kLW9yZGVyLWl0ZW1zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFPM0QsTUFBTSxPQUFPLDRCQUE0Qjs7OztJQU12QyxZQUFzQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUpqRCxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUVoQyxVQUFLLEdBQTBCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUVILENBQUM7Ozs7OztJQUU5RCxVQUFVLENBQUMsSUFBZSxFQUFFLEtBQWlCO1FBQzNDLE9BQU8sbUJBQWEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFBLENBQUM7SUFDNUUsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsSUFBZTtRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQ3ZFLENBQUM7SUFDSixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxLQUFpQjtRQUM1QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxLQUFpQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7O0lBRUQsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ2pELENBQUM7OztZQWpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsNmdKQUFpRDtnQkFDakQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFOUSxpQkFBaUI7OztzQkFRdkIsS0FBSzs2QkFDTCxLQUFLOzs7O0lBRE4sK0NBQStCOztJQUMvQixzREFBZ0M7O0lBRWhDLDZDQUFnRTs7Ozs7SUFFcEQseURBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPcmRlckVudHJ5LCBQcmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPcmRlckFtZW5kU2VydmljZSB9IGZyb20gJy4uL2FtZW5kLW9yZGVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1hbWVuZC1vcmRlci1pdGVtcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbWVuZC1vcmRlci1pdGVtcy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDYW5jZWxPclJldHVybkl0ZW1zQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZW50cmllczogT3JkZXJFbnRyeVtdO1xuICBASW5wdXQoKSBpc0NvbmZpcm1hdGlvbiA9IGZhbHNlO1xuXG4gIGZvcm0kOiBPYnNlcnZhYmxlPEZvcm1Hcm91cD4gPSB0aGlzLm9yZGVyQW1lbmRTZXJ2aWNlLmdldEZvcm0oKTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgb3JkZXJBbWVuZFNlcnZpY2U6IE9yZGVyQW1lbmRTZXJ2aWNlKSB7fVxuXG4gIGdldENvbnRyb2woZm9ybTogRm9ybUdyb3VwLCBlbnRyeTogT3JkZXJFbnRyeSk6IEZvcm1Db250cm9sIHtcbiAgICByZXR1cm4gPEZvcm1Db250cm9sPmZvcm0uZ2V0KCdlbnRyaWVzJykuZ2V0KGVudHJ5LmVudHJ5TnVtYmVyLnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgc2V0QWxsKGZvcm06IEZvcm1Hcm91cCk6IHZvaWQge1xuICAgIHRoaXMuZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+XG4gICAgICB0aGlzLmdldENvbnRyb2woZm9ybSwgZW50cnkpLnNldFZhbHVlKHRoaXMuZ2V0TWF4QW1lbmRRdWFudGl0eShlbnRyeSkpXG4gICAgKTtcbiAgfVxuXG4gIGdldEl0ZW1QcmljZShlbnRyeTogT3JkZXJFbnRyeSk6IFByaWNlIHtcbiAgICByZXR1cm4gdGhpcy5vcmRlckFtZW5kU2VydmljZS5nZXRBbWVuZGVkUHJpY2UoZW50cnkpO1xuICB9XG5cbiAgZ2V0TWF4QW1lbmRRdWFudGl0eShlbnRyeTogT3JkZXJFbnRyeSkge1xuICAgIHJldHVybiB0aGlzLm9yZGVyQW1lbmRTZXJ2aWNlLmdldE1heEFtZW5kUXVhbnRpdHkoZW50cnkpO1xuICB9XG5cbiAgaXNDYW5jZWxsYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub3JkZXJBbWVuZFNlcnZpY2UuaXNDYW5jZWxsYXRpb24oKTtcbiAgfVxufVxuIl19