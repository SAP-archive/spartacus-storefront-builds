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
        this.view = new EventEmitter();
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
                template: "<div [ngClass]=\"compact ? 'cx-compact row' : 'row'\">\n  <!-- Item Image -->\n  <div class=\"col-2 cx-image-container\">\n    <a\n      [routerLink]=\"{ cxRoute: 'product', params: item.product } | cxUrl\"\n      (click)=\"viewItem()\"\n    >\n      <cx-media\n        [container]=\"item.product.images?.PRIMARY\"\n        format=\"thumbnail\"\n      ></cx-media>\n    </a>\n  </div>\n  <!-- Item Information -->\n  <div class=\"cx-info col-10\">\n    <div class=\"cx-info-container row \">\n      <!-- Item Description -->\n      <div [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-5'\">\n        <div *ngIf=\"item.product.name\" class=\"cx-name\">\n          <a\n            class=\"cx-link\"\n            [routerLink]=\"{ cxRoute: 'product', params: item.product } | cxUrl\"\n            (click)=\"viewItem()\"\n            >{{ item.product.name }}</a\n          >\n        </div>\n        <div *ngIf=\"item.product.code\" class=\"cx-code\">\n          {{ 'cartItems.id' | cxTranslate }} {{ item.product.code }}\n        </div>\n        <!-- Variants -->\n        <div\n          *ngFor=\"let variant of item.product.variantOptionQualifiers\"\n          class=\"cx-property\"\n        >\n          <div class=\"cx-label\">{{ variant.name }}</div>\n          <div class=\"cx-value\">{{ variant.value }}</div>\n        </div>\n      </div>\n      <!-- Item Price -->\n      <div\n        *ngIf=\"item.basePrice\"\n        class=\"cx-price\"\n        [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n      >\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n        >\n          {{ 'cartItems.item' | cxTranslate }}\n        </div>\n        <div *ngIf=\"item.basePrice\" class=\"cx-value\">\n          {{ item.basePrice?.formattedValue }}\n        </div>\n      </div>\n      <!-- Item Quantity -->\n      <div\n        *ngIf=\"item.quantity\"\n        class=\"cx-quantity\"\n        [ngClass]=\"compact ? '' : ' col-3'\"\n      >\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n          placement=\"left\"\n          title=\"{{ 'cartItems.quantityTitle' | cxTranslate }}\"\n        >\n          {{ 'cartItems.quantity' | cxTranslate }}\n        </div>\n        <div *ngIf=\"isReadOnly\" class=\"cx-value\">{{ item.quantity }}</div>\n        <div\n          *ngIf=\"!isReadOnly && parent\"\n          class=\"cx-value\"\n          [formGroup]=\"parent\"\n        >\n          <cx-item-counter\n            isValueChangeable=\"true\"\n            [step]=\"1\"\n            [min]=\"1\"\n            [max]=\"item.product.stock?.stockLevel || 1000\"\n            (update)=\"updateItem($event)\"\n            [cartIsLoading]=\"cartIsLoading\"\n            formControlName=\"quantity\"\n          >\n          </cx-item-counter>\n        </div>\n      </div>\n      <!-- Total -->\n      <div\n        *ngIf=\"item.totalPrice\"\n        class=\"cx-total\"\n        [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n      >\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n        >\n          {{ 'cartItems.total' | cxTranslate }}\n        </div>\n        <div class=\"cx-value\">{{ item.totalPrice.formattedValue }}</div>\n      </div>\n    </div>\n    <!-- Availability -->\n    <div *ngIf=\"isProductOutOfStock(item)\" class=\"cx-availability col-12\">\n      {{ 'productSummary.outOfStock' | cxTranslate }}\n    </div>\n    <!-- Promotion -->\n    <cx-promotions [promotions]=\"potentialProductPromotions\"></cx-promotions>\n    <!-- Actions -->\n    <div *ngIf=\"!isReadOnly\" class=\"cx-actions col-12\">\n      <button\n        class=\"link\"\n        [class.disabled]=\"cartIsLoading\"\n        [disabled]=\"cartIsLoading\"\n        (click)=\"removeItem()\"\n      >\n        {{ 'common.remove' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n"
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
    view: [{ type: Output }],
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
    CartItemComponent.prototype.view;
    /** @type {?} */
    CartItemComponent.prototype.parent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NhcnQvY2FydC1zaGFyZWQvY2FydC1pdGVtL2NhcnQtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRTNDLDBCQUtDOzs7SUFKQyx1QkFBYzs7SUFDZCx3QkFBZTs7SUFDZix5QkFBZ0I7O0lBQ2hCLDBCQUFpQjs7QUFPbkIsTUFBTSxPQUFPLGlCQUFpQjtJQUo5QjtRQU1FLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFNaEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUVuQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUd0QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVqQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVqQyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQTJCakMsQ0FBQzs7OztJQXRCQyxRQUFRLEtBQUksQ0FBQzs7Ozs7SUFFYixtQkFBbUIsQ0FBQyxPQUFPO1FBQ3pCLHlEQUF5RDtRQUN6RCxPQUFPLENBQ0wsT0FBTztZQUNQLE9BQU8sQ0FBQyxLQUFLO1lBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsS0FBSyxZQUFZLENBQ2hELENBQUM7SUFDSixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxlQUF1QjtRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ25CLENBQUM7OztZQS9DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLG04SEFBeUM7YUFDMUM7OztzQkFFRSxLQUFLO21CQUVMLEtBQUs7eUNBRUwsS0FBSzt5QkFFTCxLQUFLOzRCQUVMLEtBQUs7cUJBR0wsTUFBTTtxQkFFTixNQUFNO21CQUVOLE1BQU07cUJBR04sS0FBSzs7OztJQWxCTixvQ0FDZ0I7O0lBQ2hCLGlDQUNXOztJQUNYLHVEQUNrQzs7SUFDbEMsdUNBQ21COztJQUNuQiwwQ0FDc0I7O0lBRXRCLG1DQUNpQzs7SUFDakMsbUNBQ2lDOztJQUNqQyxpQ0FDK0I7O0lBRS9CLG1DQUNrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGludGVyZmFjZSBJdGVtIHtcbiAgcHJvZHVjdD86IGFueTtcbiAgcXVhbnRpdHk/OiBhbnk7XG4gIGJhc2VQcmljZT86IGFueTtcbiAgdG90YWxQcmljZT86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2FydC1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcnQtaXRlbS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENhcnRJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgY29tcGFjdCA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBpdGVtOiBJdGVtO1xuICBASW5wdXQoKVxuICBwb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9uczogYW55W107XG4gIEBJbnB1dCgpXG4gIGlzUmVhZE9ubHkgPSBmYWxzZTtcbiAgQElucHV0KClcbiAgY2FydElzTG9hZGluZyA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKVxuICByZW1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIHVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgdmlldyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBJbnB1dCgpXG4gIHBhcmVudDogRm9ybUdyb3VwO1xuXG4gIG5nT25Jbml0KCkge31cblxuICBpc1Byb2R1Y3RPdXRPZlN0b2NrKHByb2R1Y3QpIHtcbiAgICAvLyBUT0RPIE1vdmUgc3RvY2tsZXZlbHN0YXR1c2VzIGFjcm9zcyB0aGUgYXBwIHRvIGFuIGVudW1cbiAgICByZXR1cm4gKFxuICAgICAgcHJvZHVjdCAmJlxuICAgICAgcHJvZHVjdC5zdG9jayAmJlxuICAgICAgcHJvZHVjdC5zdG9jay5zdG9ja0xldmVsU3RhdHVzID09PSAnb3V0T2ZTdG9jaydcbiAgICApO1xuICB9XG5cbiAgdXBkYXRlSXRlbSh1cGRhdGVkUXVhbnRpdHk6IG51bWJlcikge1xuICAgIHRoaXMudXBkYXRlLmVtaXQoeyBpdGVtOiB0aGlzLml0ZW0sIHVwZGF0ZWRRdWFudGl0eSB9KTtcbiAgfVxuXG4gIHJlbW92ZUl0ZW0oKSB7XG4gICAgdGhpcy5yZW1vdmUuZW1pdCh0aGlzLml0ZW0pO1xuICB9XG5cbiAgdmlld0l0ZW0oKSB7XG4gICAgdGhpcy52aWV3LmVtaXQoKTtcbiAgfVxufVxuIl19