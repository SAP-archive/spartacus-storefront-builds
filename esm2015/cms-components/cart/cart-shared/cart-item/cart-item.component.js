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
export class CartItemComponent {
    /**
     * @param {?} promotionService
     * @param {?=} featureConfig
     */
    constructor(promotionService, featureConfig) {
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
    ngOnInit() {
        this.appliedProductPromotions$ = this.promotionService.getProductPromotionForEntry(this.item, this.promotionLocation);
    }
    //TODO remove feature flag for #5958
    /**
     * @return {?}
     */
    isSaveForLaterEnabled() {
        if (this.featureConfig) {
            return this.featureConfig.isEnabled('saveForLater');
        }
        return false;
    }
    //TODO remove feature flag for #5958
    /**
     * @param {?} product
     * @return {?}
     */
    isProductOutOfStock(product) {
        // TODO Move stocklevelstatuses across the app to an enum
        return (product &&
            product.stock &&
            product.stock.stockLevelStatus === 'outOfStock');
    }
    /**
     * @param {?} updatedQuantity
     * @return {?}
     */
    updateItem(updatedQuantity) {
        this.update.emit({ item: this.item, updatedQuantity });
    }
    /**
     * @return {?}
     */
    removeItem() {
        this.remove.emit(this.item);
    }
    /**
     * @return {?}
     */
    viewItem() {
        this.view.emit();
    }
}
CartItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-cart-item',
                template: "<div [ngClass]=\"compact ? 'cx-compact row' : 'row'\">\n  <!-- Item Image -->\n  <div class=\"col-2 cx-image-container\">\n    <a\n      [routerLink]=\"{ cxRoute: 'product', params: item.product } | cxUrl\"\n      (click)=\"viewItem()\"\n    >\n      <cx-media\n        [container]=\"item.product.images?.PRIMARY\"\n        format=\"thumbnail\"\n      ></cx-media>\n    </a>\n  </div>\n  <!-- Item Information -->\n  <div class=\"cx-info col-10\">\n    <div class=\"cx-info-container row \">\n      <!-- Item Description -->\n      <div [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-5'\">\n        <div *ngIf=\"item.product.name\" class=\"cx-name\">\n          <a\n            class=\"cx-link\"\n            [routerLink]=\"{ cxRoute: 'product', params: item.product } | cxUrl\"\n            (click)=\"viewItem()\"\n            >{{ item.product.name }}</a\n          >\n        </div>\n        <div *ngIf=\"item.product.code\" class=\"cx-code\">\n          {{ 'cartItems.id' | cxTranslate }} {{ item.product.code }}\n        </div>\n        <!-- Variants -->\n        <ng-container *cxFeatureLevel=\"'!1.5'\">\n          <div\n            *ngFor=\"let variant of item.product.variantOptionQualifiers\"\n            class=\"cx-property\"\n          >\n            <div class=\"cx-label\">{{ variant.name }}</div>\n            <div class=\"cx-value\">{{ variant.value }}</div>\n          </div>\n        </ng-container>\n        <ng-container *cxFeatureLevel=\"'1.5'\">\n          <ng-container *ngIf=\"item.product.baseOptions?.length\">\n            <div\n              *ngFor=\"\n                let variant of item.product.baseOptions[0]?.selected\n                  ?.variantOptionQualifiers\n              \"\n              class=\"cx-property\"\n            >\n              <div class=\"cx-label\" *ngIf=\"variant.name && variant.value\">\n                {{ variant.name }}: {{ variant.value }}\n              </div>\n            </div>\n          </ng-container>\n        </ng-container>\n      </div>\n      <!-- Item Price -->\n      <div\n        *ngIf=\"item.basePrice\"\n        class=\"cx-price\"\n        [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n      >\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n        >\n          {{ 'cartItems.itemPrice' | cxTranslate }}\n        </div>\n        <div *ngIf=\"item.basePrice\" class=\"cx-value\">\n          {{ item.basePrice?.formattedValue }}\n        </div>\n      </div>\n      <!-- Item Quantity -->\n      <div class=\"cx-quantity\" [ngClass]=\"compact ? '' : ' col-3'\">\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n          placement=\"left\"\n          title=\"{{ 'cartItems.quantityTitle' | cxTranslate }}\"\n        >\n          {{ 'cartItems.quantity' | cxTranslate }}\n        </div>\n\n        <div *ngIf=\"isReadOnly\" class=\"cx-value\">\n          {{ item.quantity }}\n        </div>\n        <div\n          *ngIf=\"!isReadOnly && parent\"\n          class=\"cx-value\"\n          [formGroup]=\"parent\"\n        >\n          <cx-item-counter\n            [isValueChangeable]=\"item.updateable\"\n            [step]=\"1\"\n            [min]=\"1\"\n            [max]=\"item.product.stock?.stockLevel || 1000\"\n            (update)=\"updateItem($event)\"\n            [cartIsLoading]=\"cartIsLoading\"\n            formControlName=\"quantity\"\n          >\n          </cx-item-counter>\n        </div>\n      </div>\n      <!-- Total -->\n      <ng-container\n        *ngIf=\"isSaveForLaterEnabled() && options.isSaveForLater; else total\"\n      >\n        <div\n          class=\"cx-total\"\n          [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n        >\n          <div\n            class=\"cx-label\"\n            [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n          >\n            {{ 'saveForLaterItems.stock' | cxTranslate }}\n          </div>\n          <div\n            *ngIf=\"item.product?.stock?.stockLevel >= 0; else forceInstock\"\n            class=\"cx-value\"\n          >\n            {{ item.product.stock.stockLevel }}\n          </div>\n          <ng-template #forceInstock\n            ><div class=\"cx-value\">\n              {{ 'saveForLaterItems.forceInStock' | cxTranslate }}\n            </div></ng-template\n          >\n        </div>\n      </ng-container>\n    </div>\n    <!-- Availability -->\n    <div\n      *ngIf=\"isProductOutOfStock(item.product)\"\n      class=\"cx-availability col-12\"\n    >\n      {{ 'productSummary.outOfStock' | cxTranslate }}\n    </div>\n    <!-- Promotion -->\n    <ng-container *cxFeatureLevel=\"'!1.5'\">\n      <cx-promotions [promotions]=\"potentialProductPromotions\"></cx-promotions>\n    </ng-container>\n\n    <ng-container *cxFeatureLevel=\"'1.5'\">\n      <ng-container\n        *ngIf=\"appliedProductPromotions$ | async as appliedProductPromotions\"\n      >\n        <cx-promotions [promotions]=\"appliedProductPromotions\"></cx-promotions>\n      </ng-container>\n    </ng-container>\n    <!-- Actions -->\n\n    <div\n      *ngIf=\"(!isReadOnly || options.isSaveForLater) && item.updateable\"\n      class=\"cx-actions col-12\"\n    >\n      <ng-container *ngIf=\"!isProductOutOfStock(item.product)\">\n        <ng-container\n          *ngTemplateOutlet=\"\n            options.optionalBtn;\n            context: { $implicit: { loading: cartIsLoading, item: item } }\n          \"\n        ></ng-container>\n      </ng-container>\n\n      <div class=\"col-md-3 col-lg-3 col-xl-3 cx-remove-btn\">\n        <button class=\"link\" [disabled]=\"cartIsLoading\" (click)=\"removeItem()\">\n          {{ 'common.remove' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #total>\n  <div\n    *ngIf=\"item.totalPrice\"\n    class=\"cx-total\"\n    [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n  >\n    <div\n      class=\"cx-label\"\n      [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n    >\n      {{ 'cartItems.total' | cxTranslate }}\n    </div>\n    <div class=\"cx-value\">{{ item.totalPrice.formattedValue }}</div>\n  </div>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
CartItemComponent.ctorParameters = () => [
    { type: PromotionService },
    { type: FeatureConfigService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NhcnQvY2FydC1zaGFyZWQvY2FydC1pdGVtL2NhcnQtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBbUIsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQzs7OztBQUUzRiwwQkFNQzs7O0lBTEMsdUJBQWM7O0lBQ2Qsd0JBQWU7O0lBQ2YseUJBQWdCOztJQUNoQiwwQkFBaUI7O0lBQ2pCLDBCQUFxQjs7Ozs7QUFHdkIsOENBR0M7OztJQUZDLGtEQUF5Qjs7SUFDekIsK0NBQWtCOztBQU9wQixNQUFNLE9BQU8saUJBQWlCOzs7OztJQThDNUIsWUFDWSxnQkFBa0MsRUFDcEMsYUFBb0M7UUFEbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBdUI7UUE5QzlDLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFLaEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUVuQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUd0QixZQUFPLEdBQTZCO1lBQ2xDLGNBQWMsRUFBRSxLQUFLO1lBQ3JCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUM7UUFFRixzQkFBaUIsR0FBc0IsaUJBQWlCLENBQUMsVUFBVSxDQUFDO1FBTXBFLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRWpDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRWpDLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBc0I1QixDQUFDOzs7O0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsMkJBQTJCLENBQ2hGLElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSSxDQUFDLGlCQUFpQixDQUN2QixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFHRCxxQkFBcUI7UUFDbkIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDckQ7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7OztJQUdELG1CQUFtQixDQUFDLE9BQVk7UUFDOUIseURBQXlEO1FBQ3pELE9BQU8sQ0FDTCxPQUFPO1lBQ1AsT0FBTyxDQUFDLEtBQUs7WUFDYixPQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixLQUFLLFlBQVksQ0FDaEQsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLGVBQXVCO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7O1lBMUZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsbXJNQUF5QzthQUMxQzs7OztZQWxCUSxnQkFBZ0I7WUFIaEIsb0JBQW9COzs7c0JBdUIxQixLQUFLO21CQUVMLEtBQUs7eUJBR0wsS0FBSzs0QkFFTCxLQUFLO3NCQUdMLEtBQUs7Z0NBS0wsS0FBSzt5Q0FHTCxLQUFLO3FCQUdMLE1BQU07cUJBRU4sTUFBTTttQkFFTixNQUFNO3FCQUdOLEtBQUs7Ozs7SUE1Qk4sb0NBQ2dCOztJQUNoQixpQ0FDVzs7SUFFWCx1Q0FDbUI7O0lBQ25CLDBDQUNzQjs7SUFFdEIsb0NBSUU7O0lBQ0YsOENBQ29FOztJQUVwRSx1REFDa0M7O0lBRWxDLG1DQUNpQzs7SUFDakMsbUNBQ2lDOztJQUNqQyxpQ0FDK0I7O0lBRS9CLG1DQUNrQjs7SUFFbEIsc0RBQXlEOzs7OztJQWV2RCw2Q0FBNEM7Ozs7O0lBQzVDLDBDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZlYXR1cmVDb25maWdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFByb21vdGlvblJlc3VsdCwgUHJvbW90aW9uTG9jYXRpb24gfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJvbW90aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9wcm9tb3Rpb24vcHJvbW90aW9uLnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEl0ZW0ge1xuICBwcm9kdWN0PzogYW55O1xuICBxdWFudGl0eT86IGFueTtcbiAgYmFzZVByaWNlPzogYW55O1xuICB0b3RhbFByaWNlPzogYW55O1xuICB1cGRhdGVhYmxlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXJ0SXRlbUNvbXBvbmVudE9wdGlvbnMge1xuICBpc1NhdmVGb3JMYXRlcj86IGJvb2xlYW47XG4gIG9wdGlvbmFsQnRuPzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jYXJ0LWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FydC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBjb21wYWN0ID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGl0ZW06IEl0ZW07XG5cbiAgQElucHV0KClcbiAgaXNSZWFkT25seSA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBjYXJ0SXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgb3B0aW9uczogQ2FydEl0ZW1Db21wb25lbnRPcHRpb25zID0ge1xuICAgIGlzU2F2ZUZvckxhdGVyOiBmYWxzZSxcbiAgICBvcHRpb25hbEJ0bjogbnVsbCxcbiAgfTtcbiAgQElucHV0KClcbiAgcHJvbW90aW9uTG9jYXRpb246IFByb21vdGlvbkxvY2F0aW9uID0gUHJvbW90aW9uTG9jYXRpb24uQWN0aXZlQ2FydDtcblxuICBASW5wdXQoKVxuICBwb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9uczogYW55W107XG5cbiAgQE91dHB1dCgpXG4gIHJlbW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgdXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICB2aWV3ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQElucHV0KClcbiAgcGFyZW50OiBGb3JtR3JvdXA7XG5cbiAgYXBwbGllZFByb2R1Y3RQcm9tb3Rpb25zJDogT2JzZXJ2YWJsZTxQcm9tb3Rpb25SZXN1bHRbXT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvbW90aW9uU2VydmljZTogUHJvbW90aW9uU2VydmljZSxcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dW5pZmllZC1zaWduYXR1cmVzXG4gICAgZmVhdHVyZUNvbmZpZzogRmVhdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKTtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuNVxuICAgKiBBZGQgZmVhdHVyZUNvbmZpZyBmb3Igc2F2ZSBmb3IgbGF0ZXIuXG4gICAqIFJlbW92ZSBpc3N1ZTogIzU5NThcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb21vdGlvblNlcnZpY2U6IFByb21vdGlvblNlcnZpY2UpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBwcm9tb3Rpb25TZXJ2aWNlOiBQcm9tb3Rpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgZmVhdHVyZUNvbmZpZz86IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFwcGxpZWRQcm9kdWN0UHJvbW90aW9ucyQgPSB0aGlzLnByb21vdGlvblNlcnZpY2UuZ2V0UHJvZHVjdFByb21vdGlvbkZvckVudHJ5KFxuICAgICAgdGhpcy5pdGVtLFxuICAgICAgdGhpcy5wcm9tb3Rpb25Mb2NhdGlvblxuICAgICk7XG4gIH1cblxuICAvL1RPRE8gcmVtb3ZlIGZlYXR1cmUgZmxhZyBmb3IgIzU5NThcbiAgaXNTYXZlRm9yTGF0ZXJFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmZlYXR1cmVDb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmZlYXR1cmVDb25maWcuaXNFbmFibGVkKCdzYXZlRm9yTGF0ZXInKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vVE9ETyByZW1vdmUgZmVhdHVyZSBmbGFnIGZvciAjNTk1OFxuXG4gIGlzUHJvZHVjdE91dE9mU3RvY2socHJvZHVjdDogYW55KSB7XG4gICAgLy8gVE9ETyBNb3ZlIHN0b2NrbGV2ZWxzdGF0dXNlcyBhY3Jvc3MgdGhlIGFwcCB0byBhbiBlbnVtXG4gICAgcmV0dXJuIChcbiAgICAgIHByb2R1Y3QgJiZcbiAgICAgIHByb2R1Y3Quc3RvY2sgJiZcbiAgICAgIHByb2R1Y3Quc3RvY2suc3RvY2tMZXZlbFN0YXR1cyA9PT0gJ291dE9mU3RvY2snXG4gICAgKTtcbiAgfVxuXG4gIHVwZGF0ZUl0ZW0odXBkYXRlZFF1YW50aXR5OiBudW1iZXIpIHtcbiAgICB0aGlzLnVwZGF0ZS5lbWl0KHsgaXRlbTogdGhpcy5pdGVtLCB1cGRhdGVkUXVhbnRpdHkgfSk7XG4gIH1cblxuICByZW1vdmVJdGVtKCkge1xuICAgIHRoaXMucmVtb3ZlLmVtaXQodGhpcy5pdGVtKTtcbiAgfVxuXG4gIHZpZXdJdGVtKCkge1xuICAgIHRoaXMudmlldy5lbWl0KCk7XG4gIH1cbn1cbiJdfQ==