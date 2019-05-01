/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
}
export class CartItemComponent {
    constructor() {
        this.compact = false;
        this.isReadOnly = false;
        this.cartIsLoading = false;
        this.remove = new EventEmitter();
        this.update = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
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
}
CartItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-cart-item',
                template: "<div [ngClass]=\"compact ? 'cx-compact row' : 'row'\">\n  <!-- Item Image -->\n  <div class=\"col-2 cx-image-container\">\n    <a\n      [routerLink]=\"{ route: 'product', params: item.product } | cxTranslateUrl\"\n    >\n      <cx-media\n        [container]=\"item.product.images?.PRIMARY\"\n        format=\"thumbnail\"\n      ></cx-media>\n    </a>\n  </div>\n  <!-- Item Information -->\n  <div class=\"cx-info col-10\">\n    <div class=\"cx-info-container row \">\n      <!-- Item Description -->\n      <div [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-5'\">\n        <div *ngIf=\"item.product.name\" class=\"cx-name\">\n          <a\n            class=\"cx-link\"\n            [routerLink]=\"\n              { route: 'product', params: item.product } | cxTranslateUrl\n            \"\n            >{{ item.product.name }}</a\n          >\n        </div>\n        <div *ngIf=\"item.product.code\" class=\"cx-code\">\n          {{ 'cartItems.id' | cxTranslate }} {{ item.product.code }}\n        </div>\n        <!-- Variants -->\n        <div\n          *ngFor=\"let variant of item.product.variantOptionQualifiers\"\n          class=\"cx-property\"\n        >\n          <div class=\"cx-label\">{{ variant.name }}</div>\n          <div class=\"cx-value\">{{ variant.value }}</div>\n        </div>\n      </div>\n      <!-- Item Price -->\n      <div\n        *ngIf=\"item.basePrice\"\n        class=\"cx-price\"\n        [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n      >\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n        >\n          {{ 'cartItems.item' | cxTranslate }}\n        </div>\n        <div *ngIf=\"item.basePrice\" class=\"cx-value\">\n          {{ item.basePrice?.formattedValue }}\n        </div>\n      </div>\n      <!-- Item Quantity -->\n      <div\n        *ngIf=\"item.quantity\"\n        class=\"cx-quantity\"\n        [ngClass]=\"compact ? '' : ' col-3'\"\n      >\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n          placement=\"left\"\n          ngbTooltip=\"The quantity represents the total number of this item in your cart.\"\n        >\n          {{ 'cartItems.quantity' | cxTranslate }}\n        </div>\n        <div *ngIf=\"isReadOnly\" class=\"cx-value\">{{ item.quantity }}</div>\n        <div\n          *ngIf=\"!isReadOnly && parent\"\n          class=\"cx-value\"\n          [formGroup]=\"parent\"\n        >\n          <cx-item-counter\n            isValueChangeable=\"true\"\n            [step]=\"1\"\n            [min]=\"1\"\n            [max]=\"item.product.stock?.stockLevel || 1000\"\n            (update)=\"updateItem($event)\"\n            [cartIsLoading]=\"cartIsLoading\"\n            formControlName=\"quantity\"\n          >\n          </cx-item-counter>\n        </div>\n      </div>\n      <!-- Total -->\n      <div\n        *ngIf=\"item.totalPrice\"\n        class=\"cx-total\"\n        [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n      >\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n        >\n          {{ 'cartItems.total' | cxTranslate }}\n        </div>\n        <div class=\"cx-value\">{{ item.totalPrice.formattedValue }}</div>\n      </div>\n    </div>\n    <!-- Availability -->\n    <div *ngIf=\"isProductOutOfStock(item)\" class=\"cx-availability col-12\">\n      {{ 'productSummary.outOfStock' | cxTranslate }}\n    </div>\n    <!-- Promotion -->\n    <cx-promotions [promotions]=\"potentialProductPromotions\"></cx-promotions>\n    <!-- Actions -->\n    <div *ngIf=\"!isReadOnly\" class=\"cx-actions col-12\">\n      <button\n        class=\"link\"\n        [class.disabled]=\"cartIsLoading\"\n        [disabled]=\"cartIsLoading\"\n        (click)=\"removeItem()\"\n      >\n        {{ 'common.remove' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n"
            }] }
];
CartItemComponent.propDecorators = {
    compact: [{ type: Input }],
    item: [{ type: Input }],
    potentialProductPromotions: [{ type: Input }],
    isReadOnly: [{ type: Input }],
    cartIsLoading: [{ type: Input }],
    remove: [{ type: Output }],
    update: [{ type: Output }],
    parent: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CartItemComponent.prototype.compact;
    /** @type {?} */
    CartItemComponent.prototype.item;
    /** @type {?} */
    CartItemComponent.prototype.potentialProductPromotions;
    /** @type {?} */
    CartItemComponent.prototype.isReadOnly;
    /** @type {?} */
    CartItemComponent.prototype.cartIsLoading;
    /** @type {?} */
    CartItemComponent.prototype.remove;
    /** @type {?} */
    CartItemComponent.prototype.update;
    /** @type {?} */
    CartItemComponent.prototype.parent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NoZWNrb3V0L2NhcnQvY2FydC1zaGFyZWQvY2FydC1pdGVtL2NhcnQtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRTNDLDBCQUtDOzs7SUFKQyx1QkFBYzs7SUFDZCx3QkFBZTs7SUFDZix5QkFBZ0I7O0lBQ2hCLDBCQUFpQjs7QUFPbkIsTUFBTSxPQUFPLGlCQUFpQjtJQUo5QjtRQU1FLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFNaEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUVuQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUd0QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVqQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQXVCbkMsQ0FBQzs7OztJQWxCQyxRQUFRLEtBQUksQ0FBQzs7Ozs7SUFFYixtQkFBbUIsQ0FBQyxPQUFPO1FBQ3pCLHlEQUF5RDtRQUN6RCxPQUFPLENBQ0wsT0FBTztZQUNQLE9BQU8sQ0FBQyxLQUFLO1lBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsS0FBSyxZQUFZLENBQ2hELENBQUM7SUFDSixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxlQUF1QjtRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBekNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsdzhIQUF5QzthQUMxQzs7O3NCQUVFLEtBQUs7bUJBRUwsS0FBSzt5Q0FFTCxLQUFLO3lCQUVMLEtBQUs7NEJBRUwsS0FBSztxQkFHTCxNQUFNO3FCQUVOLE1BQU07cUJBR04sS0FBSzs7OztJQWhCTixvQ0FDZ0I7O0lBQ2hCLGlDQUNXOztJQUNYLHVEQUNrQzs7SUFDbEMsdUNBQ21COztJQUNuQiwwQ0FDc0I7O0lBRXRCLG1DQUNpQzs7SUFDakMsbUNBQ2lDOztJQUVqQyxtQ0FDa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSXRlbSB7XG4gIHByb2R1Y3Q/OiBhbnk7XG4gIHF1YW50aXR5PzogYW55O1xuICBiYXNlUHJpY2U/OiBhbnk7XG4gIHRvdGFsUHJpY2U/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNhcnQtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJ0LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGNvbXBhY3QgPSBmYWxzZTtcbiAgQElucHV0KClcbiAgaXRlbTogSXRlbTtcbiAgQElucHV0KClcbiAgcG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnM6IGFueVtdO1xuICBASW5wdXQoKVxuICBpc1JlYWRPbmx5ID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGNhcnRJc0xvYWRpbmcgPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgcmVtb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBASW5wdXQoKVxuICBwYXJlbnQ6IEZvcm1Hcm91cDtcblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgaXNQcm9kdWN0T3V0T2ZTdG9jayhwcm9kdWN0KSB7XG4gICAgLy8gVE9ETyBNb3ZlIHN0b2NrbGV2ZWxzdGF0dXNlcyBhY3Jvc3MgdGhlIGFwcCB0byBhbiBlbnVtXG4gICAgcmV0dXJuIChcbiAgICAgIHByb2R1Y3QgJiZcbiAgICAgIHByb2R1Y3Quc3RvY2sgJiZcbiAgICAgIHByb2R1Y3Quc3RvY2suc3RvY2tMZXZlbFN0YXR1cyA9PT0gJ291dE9mU3RvY2snXG4gICAgKTtcbiAgfVxuXG4gIHVwZGF0ZUl0ZW0odXBkYXRlZFF1YW50aXR5OiBudW1iZXIpIHtcbiAgICB0aGlzLnVwZGF0ZS5lbWl0KHsgaXRlbTogdGhpcy5pdGVtLCB1cGRhdGVkUXVhbnRpdHkgfSk7XG4gIH1cblxuICByZW1vdmVJdGVtKCkge1xuICAgIHRoaXMucmVtb3ZlLmVtaXQodGhpcy5pdGVtKTtcbiAgfVxufVxuIl19