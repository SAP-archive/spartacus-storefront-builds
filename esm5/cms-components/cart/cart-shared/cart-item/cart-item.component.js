/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FeatureConfigService } from '@spartacus/core';
import { PromotionLocation } from '@spartacus/core';
import { PromotionService } from '../../../../shared/services/promotion/promotion.service';
/**
 * @record
 */
export function Item() { }
if (false) {
    /** @type {?|undefined} */
    Item.prototype.product;
    /** @type {?|undefined} */
    Item.prototype.quantity;
    /** @type {?|undefined} */
    Item.prototype.basePrice;
    /** @type {?|undefined} */
    Item.prototype.totalPrice;
    /** @type {?|undefined} */
    Item.prototype.updateable;
}
/**
 * @record
 */
export function CartItemComponentOptions() { }
if (false) {
    /** @type {?|undefined} */
    CartItemComponentOptions.prototype.isSaveForLater;
    /** @type {?|undefined} */
    CartItemComponentOptions.prototype.optionalBtn;
}
var CartItemComponent = /** @class */ (function () {
    function CartItemComponent(promotionService, featureConfig) {
        this.promotionService = promotionService;
        this.featureConfig = featureConfig;
        this.compact = false;
        this.isReadOnly = false;
        this.cartIsLoading = false;
        this.options = {
            isSaveForLater: false,
            optionalBtn: null,
        };
        this.promotionLocation = PromotionLocation.ActiveCart;
        this.remove = new EventEmitter();
        this.update = new EventEmitter();
        this.view = new EventEmitter();
    }
    /**
     * @return {?}
     */
    CartItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.appliedProductPromotions$ = this.promotionService.getProductPromotionForEntry(this.item, this.promotionLocation);
    };
    //TODO remove feature flag for #5958
    //TODO remove feature flag for #5958
    /**
     * @return {?}
     */
    CartItemComponent.prototype.isSaveForLaterEnabled = 
    //TODO remove feature flag for #5958
    /**
     * @return {?}
     */
    function () {
        if (this.featureConfig) {
            return this.featureConfig.isEnabled('saveForLater');
        }
        return false;
    };
    //TODO remove feature flag for #5958
    //TODO remove feature flag for #5958
    /**
     * @param {?} product
     * @return {?}
     */
    CartItemComponent.prototype.isProductOutOfStock = 
    //TODO remove feature flag for #5958
    /**
     * @param {?} product
     * @return {?}
     */
    function (product) {
        // TODO Move stocklevelstatuses across the app to an enum
        return (product &&
            product.stock &&
            product.stock.stockLevelStatus === 'outOfStock');
    };
    /**
     * @param {?} updatedQuantity
     * @return {?}
     */
    CartItemComponent.prototype.updateItem = /**
     * @param {?} updatedQuantity
     * @return {?}
     */
    function (updatedQuantity) {
        this.update.emit({ item: this.item, updatedQuantity: updatedQuantity });
    };
    /**
     * @return {?}
     */
    CartItemComponent.prototype.removeItem = /**
     * @return {?}
     */
    function () {
        this.remove.emit(this.item);
    };
    /**
     * @return {?}
     */
    CartItemComponent.prototype.viewItem = /**
     * @return {?}
     */
    function () {
        this.view.emit();
    };
    CartItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-cart-item',
                    template: "<div [ngClass]=\"compact ? 'cx-compact row' : 'row'\">\n  <!-- Item Image -->\n  <div class=\"col-2 cx-image-container\">\n    <a\n      [routerLink]=\"{ cxRoute: 'product', params: item.product } | cxUrl\"\n      (click)=\"viewItem()\"\n    >\n      <cx-media\n        [container]=\"item.product.images?.PRIMARY\"\n        format=\"thumbnail\"\n      ></cx-media>\n    </a>\n  </div>\n  <!-- Item Information -->\n  <div class=\"cx-info col-10\">\n    <div class=\"cx-info-container row \">\n      <!-- Item Description -->\n      <div [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-5'\">\n        <div *ngIf=\"item.product.name\" class=\"cx-name\">\n          <a\n            class=\"cx-link\"\n            [routerLink]=\"{ cxRoute: 'product', params: item.product } | cxUrl\"\n            (click)=\"viewItem()\"\n            >{{ item.product.name }}</a\n          >\n        </div>\n        <div *ngIf=\"item.product.code\" class=\"cx-code\">\n          {{ 'cartItems.id' | cxTranslate }} {{ item.product.code }}\n        </div>\n        <!-- Variants -->\n        <ng-container *cxFeatureLevel=\"'!1.5'\">\n          <div\n            *ngFor=\"let variant of item.product.variantOptionQualifiers\"\n            class=\"cx-property\"\n          >\n            <div class=\"cx-label\">{{ variant.name }}</div>\n            <div class=\"cx-value\">{{ variant.value }}</div>\n          </div>\n        </ng-container>\n        <ng-container *cxFeatureLevel=\"'1.5'\">\n          <ng-container *ngIf=\"item.product.baseOptions?.length\">\n            <div\n              *ngFor=\"\n                let variant of item.product.baseOptions[0]?.selected\n                  ?.variantOptionQualifiers\n              \"\n              class=\"cx-property\"\n            >\n              <div class=\"cx-label\" *ngIf=\"variant.name && variant.value\">\n                {{ variant.name }}: {{ variant.value }}\n              </div>\n            </div>\n          </ng-container>\n        </ng-container>\n      </div>\n      <!-- Item Price -->\n      <div\n        *ngIf=\"item.basePrice\"\n        class=\"cx-price\"\n        [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n      >\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n        >\n          {{ 'cartItems.itemPrice' | cxTranslate }}\n        </div>\n        <div *ngIf=\"item.basePrice\" class=\"cx-value\">\n          {{ item.basePrice?.formattedValue }}\n        </div>\n      </div>\n      <!-- Item Quantity -->\n      <div class=\"cx-quantity\" [ngClass]=\"compact ? '' : ' col-3'\">\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n          placement=\"left\"\n          title=\"{{ 'cartItems.quantityTitle' | cxTranslate }}\"\n        >\n          {{ 'cartItems.quantity' | cxTranslate }}\n        </div>\n\n        <div *ngIf=\"isReadOnly\" class=\"cx-value\">\n          {{ item.quantity }}\n        </div>\n        <div\n          *ngIf=\"!isReadOnly && parent\"\n          class=\"cx-value\"\n          [formGroup]=\"parent\"\n        >\n          <cx-item-counter\n            [isValueChangeable]=\"item.updateable\"\n            [step]=\"1\"\n            [min]=\"1\"\n            [max]=\"item.product.stock?.stockLevel || 1000\"\n            (update)=\"updateItem($event)\"\n            [cartIsLoading]=\"cartIsLoading\"\n            formControlName=\"quantity\"\n          >\n          </cx-item-counter>\n        </div>\n      </div>\n      <!-- Total -->\n      <ng-container\n        *ngIf=\"isSaveForLaterEnabled() && options.isSaveForLater; else total\"\n      >\n        <div\n          class=\"cx-total\"\n          [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n        >\n          <div\n            class=\"cx-label\"\n            [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n          >\n            {{ 'saveForLaterItems.stock' | cxTranslate }}\n          </div>\n          <div\n            *ngIf=\"item.product?.stock?.stockLevel >= 0; else forceInstock\"\n            class=\"cx-value\"\n          >\n            {{ item.product.stock.stockLevel }}\n          </div>\n          <ng-template #forceInstock\n            ><div class=\"cx-value\">\n              {{ 'saveForLaterItems.forceInStock' | cxTranslate }}\n            </div></ng-template\n          >\n        </div>\n      </ng-container>\n    </div>\n    <!-- Availability -->\n    <div\n      *ngIf=\"isProductOutOfStock(item.product)\"\n      class=\"cx-availability col-12\"\n    >\n      {{ 'productSummary.outOfStock' | cxTranslate }}\n    </div>\n    <!-- Promotion -->\n    <ng-container *cxFeatureLevel=\"'!1.5'\">\n      <cx-promotions [promotions]=\"potentialProductPromotions\"></cx-promotions>\n    </ng-container>\n\n    <ng-container *cxFeatureLevel=\"'1.5'\">\n      <ng-container\n        *ngIf=\"appliedProductPromotions$ | async as appliedProductPromotions\"\n      >\n        <cx-promotions [promotions]=\"appliedProductPromotions\"></cx-promotions>\n      </ng-container>\n    </ng-container>\n    <!-- Actions -->\n\n    <div\n      *ngIf=\"(!isReadOnly || options.isSaveForLater) && item.updateable\"\n      class=\"cx-actions col-12\"\n    >\n      <ng-container *ngIf=\"!isProductOutOfStock(item.product)\">\n        <ng-container\n          *ngTemplateOutlet=\"\n            options.optionalBtn;\n            context: { $implicit: { loading: cartIsLoading, item: item } }\n          \"\n        ></ng-container>\n      </ng-container>\n\n      <div class=\"col-md-3 col-lg-3 col-xl-3 cx-remove-btn\">\n        <button class=\"link\" [disabled]=\"cartIsLoading\" (click)=\"removeItem()\">\n          {{ 'common.remove' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #total>\n  <div\n    *ngIf=\"item.totalPrice\"\n    class=\"cx-total\"\n    [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n  >\n    <div\n      class=\"cx-label\"\n      [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n    >\n      {{ 'cartItems.total' | cxTranslate }}\n    </div>\n    <div class=\"cx-value\">{{ item.totalPrice.formattedValue }}</div>\n  </div>\n</ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    CartItemComponent.ctorParameters = function () { return [
        { type: PromotionService },
        { type: FeatureConfigService }
    ]; };
    CartItemComponent.propDecorators = {
        compact: [{ type: Input }],
        item: [{ type: Input }],
        isReadOnly: [{ type: Input }],
        cartIsLoading: [{ type: Input }],
        options: [{ type: Input }],
        promotionLocation: [{ type: Input }],
        potentialProductPromotions: [{ type: Input }],
        remove: [{ type: Output }],
        update: [{ type: Output }],
        view: [{ type: Output }],
        parent: [{ type: Input }]
    };
    return CartItemComponent;
}());
export { CartItemComponent };
if (false) {
    /** @type {?} */
    CartItemComponent.prototype.compact;
    /** @type {?} */
    CartItemComponent.prototype.item;
    /** @type {?} */
    CartItemComponent.prototype.isReadOnly;
    /** @type {?} */
    CartItemComponent.prototype.cartIsLoading;
    /** @type {?} */
    CartItemComponent.prototype.options;
    /** @type {?} */
    CartItemComponent.prototype.promotionLocation;
    /** @type {?} */
    CartItemComponent.prototype.potentialProductPromotions;
    /** @type {?} */
    CartItemComponent.prototype.remove;
    /** @type {?} */
    CartItemComponent.prototype.update;
    /** @type {?} */
    CartItemComponent.prototype.view;
    /** @type {?} */
    CartItemComponent.prototype.parent;
    /** @type {?} */
    CartItemComponent.prototype.appliedProductPromotions$;
    /**
     * @type {?}
     * @protected
     */
    CartItemComponent.prototype.promotionService;
    /**
     * @type {?}
     * @private
     */
    CartItemComponent.prototype.featureConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NhcnQvY2FydC1zaGFyZWQvY2FydC1pdGVtL2NhcnQtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBbUIsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQzs7OztBQUUzRiwwQkFNQzs7O0lBTEMsdUJBQWM7O0lBQ2Qsd0JBQWU7O0lBQ2YseUJBQWdCOztJQUNoQiwwQkFBaUI7O0lBQ2pCLDBCQUFxQjs7Ozs7QUFHdkIsOENBR0M7OztJQUZDLGtEQUF5Qjs7SUFDekIsK0NBQWtCOztBQUdwQjtJQWtERSwyQkFDWSxnQkFBa0MsRUFDcEMsYUFBb0M7UUFEbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBdUI7UUE5QzlDLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFLaEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUVuQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUd0QixZQUFPLEdBQTZCO1lBQ2xDLGNBQWMsRUFBRSxLQUFLO1lBQ3JCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUM7UUFFRixzQkFBaUIsR0FBc0IsaUJBQWlCLENBQUMsVUFBVSxDQUFDO1FBTXBFLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRWpDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRWpDLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBc0I1QixDQUFDOzs7O0lBRUosb0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQywyQkFBMkIsQ0FDaEYsSUFBSSxDQUFDLElBQUksRUFDVCxJQUFJLENBQUMsaUJBQWlCLENBQ3ZCLENBQUM7SUFDSixDQUFDO0lBRUQsb0NBQW9DOzs7OztJQUNwQyxpREFBcUI7Ozs7O0lBQXJCO1FBQ0UsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDckQ7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDRCxvQ0FBb0M7Ozs7OztJQUVwQywrQ0FBbUI7Ozs7OztJQUFuQixVQUFvQixPQUFZO1FBQzlCLHlEQUF5RDtRQUN6RCxPQUFPLENBQ0wsT0FBTztZQUNQLE9BQU8sQ0FBQyxLQUFLO1lBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsS0FBSyxZQUFZLENBQ2hELENBQUM7SUFDSixDQUFDOzs7OztJQUVELHNDQUFVOzs7O0lBQVYsVUFBVyxlQUF1QjtRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLGVBQWUsaUJBQUEsRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7OztJQUVELHNDQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsb0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuQixDQUFDOztnQkExRkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4Qixtck1BQXlDO2lCQUMxQzs7OztnQkFsQlEsZ0JBQWdCO2dCQUhoQixvQkFBb0I7OzswQkF1QjFCLEtBQUs7dUJBRUwsS0FBSzs2QkFHTCxLQUFLO2dDQUVMLEtBQUs7MEJBR0wsS0FBSztvQ0FLTCxLQUFLOzZDQUdMLEtBQUs7eUJBR0wsTUFBTTt5QkFFTixNQUFNO3VCQUVOLE1BQU07eUJBR04sS0FBSzs7SUEwRFIsd0JBQUM7Q0FBQSxBQTNGRCxJQTJGQztTQXZGWSxpQkFBaUI7OztJQUM1QixvQ0FDZ0I7O0lBQ2hCLGlDQUNXOztJQUVYLHVDQUNtQjs7SUFDbkIsMENBQ3NCOztJQUV0QixvQ0FJRTs7SUFDRiw4Q0FDb0U7O0lBRXBFLHVEQUNrQzs7SUFFbEMsbUNBQ2lDOztJQUNqQyxtQ0FDaUM7O0lBQ2pDLGlDQUMrQjs7SUFFL0IsbUNBQ2tCOztJQUVsQixzREFBeUQ7Ozs7O0lBZXZELDZDQUE0Qzs7Ozs7SUFDNUMsMENBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRmVhdHVyZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUHJvbW90aW9uUmVzdWx0LCBQcm9tb3Rpb25Mb2NhdGlvbiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcm9tb3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3Byb21vdGlvbi9wcm9tb3Rpb24uc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSXRlbSB7XG4gIHByb2R1Y3Q/OiBhbnk7XG4gIHF1YW50aXR5PzogYW55O1xuICBiYXNlUHJpY2U/OiBhbnk7XG4gIHRvdGFsUHJpY2U/OiBhbnk7XG4gIHVwZGF0ZWFibGU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhcnRJdGVtQ29tcG9uZW50T3B0aW9ucyB7XG4gIGlzU2F2ZUZvckxhdGVyPzogYm9vbGVhbjtcbiAgb3B0aW9uYWxCdG4/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNhcnQtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJ0LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGNvbXBhY3QgPSBmYWxzZTtcbiAgQElucHV0KClcbiAgaXRlbTogSXRlbTtcblxuICBASW5wdXQoKVxuICBpc1JlYWRPbmx5ID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGNhcnRJc0xvYWRpbmcgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBvcHRpb25zOiBDYXJ0SXRlbUNvbXBvbmVudE9wdGlvbnMgPSB7XG4gICAgaXNTYXZlRm9yTGF0ZXI6IGZhbHNlLFxuICAgIG9wdGlvbmFsQnRuOiBudWxsLFxuICB9O1xuICBASW5wdXQoKVxuICBwcm9tb3Rpb25Mb2NhdGlvbjogUHJvbW90aW9uTG9jYXRpb24gPSBQcm9tb3Rpb25Mb2NhdGlvbi5BY3RpdmVDYXJ0O1xuXG4gIEBJbnB1dCgpXG4gIHBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zOiBhbnlbXTtcblxuICBAT3V0cHV0KClcbiAgcmVtb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIHZpZXcgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBASW5wdXQoKVxuICBwYXJlbnQ6IEZvcm1Hcm91cDtcblxuICBhcHBsaWVkUHJvZHVjdFByb21vdGlvbnMkOiBPYnNlcnZhYmxlPFByb21vdGlvblJlc3VsdFtdPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm9tb3Rpb25TZXJ2aWNlOiBQcm9tb3Rpb25TZXJ2aWNlLFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1bmlmaWVkLXNpZ25hdHVyZXNcbiAgICBmZWF0dXJlQ29uZmlnOiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApO1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS41XG4gICAqIEFkZCBmZWF0dXJlQ29uZmlnIGZvciBzYXZlIGZvciBsYXRlci5cbiAgICogUmVtb3ZlIGlzc3VlOiAjNTk1OFxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvbW90aW9uU2VydmljZTogUHJvbW90aW9uU2VydmljZSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHByb21vdGlvblNlcnZpY2U6IFByb21vdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmZWF0dXJlQ29uZmlnPzogRmVhdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYXBwbGllZFByb2R1Y3RQcm9tb3Rpb25zJCA9IHRoaXMucHJvbW90aW9uU2VydmljZS5nZXRQcm9kdWN0UHJvbW90aW9uRm9yRW50cnkoXG4gICAgICB0aGlzLml0ZW0sXG4gICAgICB0aGlzLnByb21vdGlvbkxvY2F0aW9uXG4gICAgKTtcbiAgfVxuXG4gIC8vVE9ETyByZW1vdmUgZmVhdHVyZSBmbGFnIGZvciAjNTk1OFxuICBpc1NhdmVGb3JMYXRlckVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZmVhdHVyZUNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZmVhdHVyZUNvbmZpZy5pc0VuYWJsZWQoJ3NhdmVGb3JMYXRlcicpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy9UT0RPIHJlbW92ZSBmZWF0dXJlIGZsYWcgZm9yICM1OTU4XG5cbiAgaXNQcm9kdWN0T3V0T2ZTdG9jayhwcm9kdWN0OiBhbnkpIHtcbiAgICAvLyBUT0RPIE1vdmUgc3RvY2tsZXZlbHN0YXR1c2VzIGFjcm9zcyB0aGUgYXBwIHRvIGFuIGVudW1cbiAgICByZXR1cm4gKFxuICAgICAgcHJvZHVjdCAmJlxuICAgICAgcHJvZHVjdC5zdG9jayAmJlxuICAgICAgcHJvZHVjdC5zdG9jay5zdG9ja0xldmVsU3RhdHVzID09PSAnb3V0T2ZTdG9jaydcbiAgICApO1xuICB9XG5cbiAgdXBkYXRlSXRlbSh1cGRhdGVkUXVhbnRpdHk6IG51bWJlcikge1xuICAgIHRoaXMudXBkYXRlLmVtaXQoeyBpdGVtOiB0aGlzLml0ZW0sIHVwZGF0ZWRRdWFudGl0eSB9KTtcbiAgfVxuXG4gIHJlbW92ZUl0ZW0oKSB7XG4gICAgdGhpcy5yZW1vdmUuZW1pdCh0aGlzLml0ZW0pO1xuICB9XG5cbiAgdmlld0l0ZW0oKSB7XG4gICAgdGhpcy52aWV3LmVtaXQoKTtcbiAgfVxufVxuIl19