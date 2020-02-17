/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FeatureConfigService, PromotionLocation, } from '@spartacus/core';
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
        this.readonly = false;
        this.view = new EventEmitter();
        this.promotionLocation = PromotionLocation.ActiveCart;
        // TODO: evaluate whether this is generic enough
        this.options = {
            isSaveForLater: false,
            optionalBtn: null,
        };
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
     * @return {?}
     */
    CartItemComponent.prototype.removeItem = /**
     * @return {?}
     */
    function () {
        this.quantityControl.setValue(0);
        this.quantityControl.markAsDirty();
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
                    template: "<div [ngClass]=\"compact ? 'cx-compact row' : 'row'\">\n  <!-- Item Image -->\n  <div class=\"col-2 cx-image-container\">\n    <a\n      [routerLink]=\"{ cxRoute: 'product', params: item.product } | cxUrl\"\n      (click)=\"viewItem()\"\n    >\n      <cx-media\n        [container]=\"item.product.images?.PRIMARY\"\n        format=\"thumbnail\"\n      ></cx-media>\n    </a>\n  </div>\n  <!-- Item Information -->\n  <div class=\"cx-info col-10\">\n    <div class=\"cx-info-container row \">\n      <!-- Item Description -->\n      <div [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-5'\">\n        <div *ngIf=\"item.product.name\" class=\"cx-name\">\n          <a\n            class=\"cx-link\"\n            [routerLink]=\"{ cxRoute: 'product', params: item.product } | cxUrl\"\n            (click)=\"viewItem()\"\n            >{{ item.product.name }}</a\n          >\n        </div>\n        <div *ngIf=\"item.product.code\" class=\"cx-code\">\n          {{ 'cartItems.id' | cxTranslate }} {{ item.product.code }}\n        </div>\n        <!-- Variants -->\n        <ng-container *cxFeatureLevel=\"'!1.5'\">\n          <div\n            *ngFor=\"let variant of item.product.variantOptionQualifiers\"\n            class=\"cx-property\"\n          >\n            <div class=\"cx-label\">{{ variant.name }}</div>\n            <div class=\"cx-value\">{{ variant.value }}</div>\n          </div>\n        </ng-container>\n        <ng-container *cxFeatureLevel=\"'1.5'\">\n          <ng-container *ngIf=\"item.product.baseOptions?.length\">\n            <div\n              *ngFor=\"\n                let variant of item.product.baseOptions[0]?.selected\n                  ?.variantOptionQualifiers\n              \"\n              class=\"cx-property\"\n            >\n              <div class=\"cx-label\" *ngIf=\"variant.name && variant.value\">\n                {{ variant.name }}: {{ variant.value }}\n              </div>\n            </div>\n          </ng-container>\n        </ng-container>\n      </div>\n      <!-- Item Price -->\n      <div\n        *ngIf=\"item.basePrice\"\n        class=\"cx-price\"\n        [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n      >\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n        >\n          {{ 'cartItems.itemPrice' | cxTranslate }}\n        </div>\n        <div *ngIf=\"item.basePrice\" class=\"cx-value\">\n          {{ item.basePrice?.formattedValue }}\n        </div>\n      </div>\n      <!-- Item Quantity -->\n      <div class=\"cx-quantity\" [ngClass]=\"compact ? '' : ' col-3'\">\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n          placement=\"left\"\n          title=\"{{ 'cartItems.quantityTitle' | cxTranslate }}\"\n        >\n          {{ 'cartItems.quantity' | cxTranslate }}\n        </div>\n        <div class=\"cx-value\">\n          <cx-item-counter\n            [control]=\"quantityControl\"\n            [readonly]=\"!item.updateable || readonly\"\n            [max]=\"item.product.stock?.stockLevel || 1000\"\n            [allowZero]=\"true\"\n          >\n          </cx-item-counter>\n        </div>\n      </div>\n      <!-- Total -->\n      <ng-container\n        *ngIf=\"isSaveForLaterEnabled() && options.isSaveForLater; else total\"\n      >\n        <div\n          class=\"cx-total\"\n          [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n        >\n          <div\n            class=\"cx-label\"\n            [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n          >\n            {{ 'saveForLaterItems.stock' | cxTranslate }}\n          </div>\n          <div\n            *ngIf=\"item.product?.stock?.stockLevel >= 0; else forceInstock\"\n            class=\"cx-value\"\n          >\n            {{ item.product.stock.stockLevel }}\n          </div>\n          <ng-template #forceInstock\n            ><div class=\"cx-value\">\n              {{ 'saveForLaterItems.forceInStock' | cxTranslate }}\n            </div></ng-template\n          >\n        </div>\n      </ng-container>\n    </div>\n    <!-- Availability -->\n    <div\n      *ngIf=\"isProductOutOfStock(item.product)\"\n      class=\"cx-availability col-12\"\n    >\n      {{ 'productSummary.outOfStock' | cxTranslate }}\n    </div>\n    <!-- Promotion -->\n    <ng-container *cxFeatureLevel=\"'!1.5'\">\n      <cx-promotions [promotions]=\"potentialProductPromotions\"></cx-promotions>\n    </ng-container>\n\n    <ng-container *cxFeatureLevel=\"'1.5'\">\n      <ng-container\n        *ngIf=\"appliedProductPromotions$ | async as appliedProductPromotions\"\n      >\n        <cx-promotions [promotions]=\"appliedProductPromotions\"></cx-promotions>\n      </ng-container>\n    </ng-container>\n\n    <!-- Actions -->\n    <div\n      *ngIf=\"(!readonly || options.isSaveForLater) && item.updateable\"\n      class=\"cx-actions col-12\"\n    >\n      <ng-container *ngIf=\"!isProductOutOfStock(item.product)\">\n        <ng-container\n          *ngTemplateOutlet=\"\n            options.optionalBtn;\n            context: {\n              $implicit: { loading: quantityControl.disabled, item: item }\n            }\n          \"\n        ></ng-container>\n      </ng-container>\n\n      <div class=\"col-md-3 cx-remove-btn\">\n        <button\n          class=\"link\"\n          [disabled]=\"quantityControl.disabled\"\n          (click)=\"removeItem()\"\n        >\n          {{ 'common.remove' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #total>\n  <div\n    *ngIf=\"item.totalPrice\"\n    class=\"cx-total\"\n    [ngClass]=\"compact ? '' : ' col-md-3 col-xl-2'\"\n  >\n    <div\n      class=\"cx-label\"\n      [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n    >\n      {{ 'cartItems.total' | cxTranslate }}\n    </div>\n    <div class=\"cx-value\">{{ item.totalPrice.formattedValue }}</div>\n  </div>\n</ng-template>\n"
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
        potentialProductPromotions: [{ type: Input }],
        readonly: [{ type: Input }],
        quantityControl: [{ type: Input }],
        view: [{ type: Output }],
        promotionLocation: [{ type: Input }],
        options: [{ type: Input }]
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
    CartItemComponent.prototype.potentialProductPromotions;
    /** @type {?} */
    CartItemComponent.prototype.readonly;
    /** @type {?} */
    CartItemComponent.prototype.quantityControl;
    /** @type {?} */
    CartItemComponent.prototype.view;
    /** @type {?} */
    CartItemComponent.prototype.promotionLocation;
    /** @type {?} */
    CartItemComponent.prototype.options;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NhcnQvY2FydC1zaGFyZWQvY2FydC1pdGVtL2NhcnQtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsaUJBQWlCLEdBRWxCLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seURBQXlELENBQUM7Ozs7QUFFM0YsMEJBTUM7OztJQUxDLHVCQUFjOztJQUNkLHdCQUFlOztJQUNmLHlCQUFnQjs7SUFDaEIsMEJBQWlCOztJQUNqQiwwQkFBcUI7Ozs7O0FBR3ZCLDhDQUdDOzs7SUFGQyxrREFBeUI7O0lBQ3pCLCtDQUFrQjs7QUFHcEI7SUFtQ0UsMkJBQ1ksZ0JBQWtDLEVBQ3BDLGFBQW9DO1FBRGxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDcEMsa0JBQWEsR0FBYixhQUFhLENBQXVCO1FBaENyQyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBR2hCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFHaEIsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFaEMsc0JBQWlCLEdBQXNCLGlCQUFpQixDQUFDLFVBQVUsQ0FBQzs7UUFHcEUsWUFBTyxHQUE2QjtZQUMzQyxjQUFjLEVBQUUsS0FBSztZQUNyQixXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDO0lBbUJDLENBQUM7Ozs7SUFFSixvQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLDJCQUEyQixDQUNoRixJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxpQkFBaUIsQ0FDdkIsQ0FBQztJQUNKLENBQUM7SUFFRCxvQ0FBb0M7Ozs7O0lBQ3BDLGlEQUFxQjs7Ozs7SUFBckI7UUFDRSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNyRDtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNELG9DQUFvQzs7Ozs7O0lBRXBDLCtDQUFtQjs7Ozs7O0lBQW5CLFVBQW9CLE9BQVk7UUFDOUIseURBQXlEO1FBQ3pELE9BQU8sQ0FDTCxPQUFPO1lBQ1AsT0FBTyxDQUFDLEtBQUs7WUFDYixPQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixLQUFLLFlBQVksQ0FDaEQsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxzQ0FBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxvQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ25CLENBQUM7O2dCQXhFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLGk4TEFBeUM7aUJBQzFDOzs7O2dCQWxCUSxnQkFBZ0I7Z0JBTHZCLG9CQUFvQjs7OzBCQXlCbkIsS0FBSzt1QkFDTCxLQUFLOzZDQUNMLEtBQUs7MkJBQ0wsS0FBSztrQ0FDTCxLQUFLO3VCQUVMLE1BQU07b0NBRU4sS0FBSzswQkFHTCxLQUFLOztJQXlEUix3QkFBQztDQUFBLEFBekVELElBeUVDO1NBckVZLGlCQUFpQjs7O0lBQzVCLG9DQUF5Qjs7SUFDekIsaUNBQW9COztJQUNwQix1REFBMkM7O0lBQzNDLHFDQUEwQjs7SUFDMUIsNENBQXNDOztJQUV0QyxpQ0FBeUM7O0lBRXpDLDhDQUE2RTs7SUFHN0Usb0NBR0U7O0lBRUYsc0RBQXlEOzs7OztJQWV2RCw2Q0FBNEM7Ozs7O0lBQzVDLDBDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgRmVhdHVyZUNvbmZpZ1NlcnZpY2UsXG4gIFByb21vdGlvbkxvY2F0aW9uLFxuICBQcm9tb3Rpb25SZXN1bHQsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcm9tb3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3Byb21vdGlvbi9wcm9tb3Rpb24uc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSXRlbSB7XG4gIHByb2R1Y3Q/OiBhbnk7XG4gIHF1YW50aXR5PzogYW55O1xuICBiYXNlUHJpY2U/OiBhbnk7XG4gIHRvdGFsUHJpY2U/OiBhbnk7XG4gIHVwZGF0ZWFibGU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhcnRJdGVtQ29tcG9uZW50T3B0aW9ucyB7XG4gIGlzU2F2ZUZvckxhdGVyPzogYm9vbGVhbjtcbiAgb3B0aW9uYWxCdG4/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNhcnQtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJ0LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNvbXBhY3QgPSBmYWxzZTtcbiAgQElucHV0KCkgaXRlbTogSXRlbTtcbiAgQElucHV0KCkgcG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnM6IGFueVtdO1xuICBASW5wdXQoKSByZWFkb25seSA9IGZhbHNlO1xuICBASW5wdXQoKSBxdWFudGl0eUNvbnRyb2w6IEZvcm1Db250cm9sO1xuXG4gIEBPdXRwdXQoKSB2aWV3ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQElucHV0KCkgcHJvbW90aW9uTG9jYXRpb246IFByb21vdGlvbkxvY2F0aW9uID0gUHJvbW90aW9uTG9jYXRpb24uQWN0aXZlQ2FydDtcblxuICAvLyBUT0RPOiBldmFsdWF0ZSB3aGV0aGVyIHRoaXMgaXMgZ2VuZXJpYyBlbm91Z2hcbiAgQElucHV0KCkgb3B0aW9uczogQ2FydEl0ZW1Db21wb25lbnRPcHRpb25zID0ge1xuICAgIGlzU2F2ZUZvckxhdGVyOiBmYWxzZSxcbiAgICBvcHRpb25hbEJ0bjogbnVsbCxcbiAgfTtcblxuICBhcHBsaWVkUHJvZHVjdFByb21vdGlvbnMkOiBPYnNlcnZhYmxlPFByb21vdGlvblJlc3VsdFtdPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm9tb3Rpb25TZXJ2aWNlOiBQcm9tb3Rpb25TZXJ2aWNlLFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1bmlmaWVkLXNpZ25hdHVyZXNcbiAgICBmZWF0dXJlQ29uZmlnOiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApO1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS41XG4gICAqIEFkZCBmZWF0dXJlQ29uZmlnIGZvciBzYXZlIGZvciBsYXRlci5cbiAgICogUmVtb3ZlIGlzc3VlOiAjNTk1OFxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvbW90aW9uU2VydmljZTogUHJvbW90aW9uU2VydmljZSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHByb21vdGlvblNlcnZpY2U6IFByb21vdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmZWF0dXJlQ29uZmlnPzogRmVhdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYXBwbGllZFByb2R1Y3RQcm9tb3Rpb25zJCA9IHRoaXMucHJvbW90aW9uU2VydmljZS5nZXRQcm9kdWN0UHJvbW90aW9uRm9yRW50cnkoXG4gICAgICB0aGlzLml0ZW0sXG4gICAgICB0aGlzLnByb21vdGlvbkxvY2F0aW9uXG4gICAgKTtcbiAgfVxuXG4gIC8vVE9ETyByZW1vdmUgZmVhdHVyZSBmbGFnIGZvciAjNTk1OFxuICBpc1NhdmVGb3JMYXRlckVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZmVhdHVyZUNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZmVhdHVyZUNvbmZpZy5pc0VuYWJsZWQoJ3NhdmVGb3JMYXRlcicpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy9UT0RPIHJlbW92ZSBmZWF0dXJlIGZsYWcgZm9yICM1OTU4XG5cbiAgaXNQcm9kdWN0T3V0T2ZTdG9jayhwcm9kdWN0OiBhbnkpIHtcbiAgICAvLyBUT0RPIE1vdmUgc3RvY2tsZXZlbHN0YXR1c2VzIGFjcm9zcyB0aGUgYXBwIHRvIGFuIGVudW1cbiAgICByZXR1cm4gKFxuICAgICAgcHJvZHVjdCAmJlxuICAgICAgcHJvZHVjdC5zdG9jayAmJlxuICAgICAgcHJvZHVjdC5zdG9jay5zdG9ja0xldmVsU3RhdHVzID09PSAnb3V0T2ZTdG9jaydcbiAgICApO1xuICB9XG5cbiAgcmVtb3ZlSXRlbSgpIHtcbiAgICB0aGlzLnF1YW50aXR5Q29udHJvbC5zZXRWYWx1ZSgwKTtcbiAgICB0aGlzLnF1YW50aXR5Q29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICB9XG5cbiAgdmlld0l0ZW0oKSB7XG4gICAgdGhpcy52aWV3LmVtaXQoKTtcbiAgfVxufVxuIl19