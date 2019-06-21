/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
var CartItemComponent = /** @class */ (function () {
    function CartItemComponent() {
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
    CartItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} product
     * @return {?}
     */
    CartItemComponent.prototype.isProductOutOfStock = /**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NhcnQvY2FydC1zaGFyZWQvY2FydC1pdGVtL2NhcnQtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRTNDLDBCQUtDOzs7SUFKQyx1QkFBYzs7SUFDZCx3QkFBZTs7SUFDZix5QkFBZ0I7O0lBQ2hCLDBCQUFpQjs7QUFHbkI7SUFBQTtRQU1FLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFNaEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUVuQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUd0QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVqQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVqQyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQTJCakMsQ0FBQzs7OztJQXRCQyxvQ0FBUTs7O0lBQVIsY0FBWSxDQUFDOzs7OztJQUViLCtDQUFtQjs7OztJQUFuQixVQUFvQixPQUFPO1FBQ3pCLHlEQUF5RDtRQUN6RCxPQUFPLENBQ0wsT0FBTztZQUNQLE9BQU8sQ0FBQyxLQUFLO1lBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsS0FBSyxZQUFZLENBQ2hELENBQUM7SUFDSixDQUFDOzs7OztJQUVELHNDQUFVOzs7O0lBQVYsVUFBVyxlQUF1QjtRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLGVBQWUsaUJBQUEsRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7OztJQUVELHNDQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsb0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuQixDQUFDOztnQkEvQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixtOEhBQXlDO2lCQUMxQzs7OzBCQUVFLEtBQUs7dUJBRUwsS0FBSzs2Q0FFTCxLQUFLOzZCQUVMLEtBQUs7Z0NBRUwsS0FBSzt5QkFHTCxNQUFNO3lCQUVOLE1BQU07dUJBRU4sTUFBTTt5QkFHTixLQUFLOztJQXlCUix3QkFBQztDQUFBLEFBaERELElBZ0RDO1NBNUNZLGlCQUFpQjs7O0lBQzVCLG9DQUNnQjs7SUFDaEIsaUNBQ1c7O0lBQ1gsdURBQ2tDOztJQUNsQyx1Q0FDbUI7O0lBQ25CLDBDQUNzQjs7SUFFdEIsbUNBQ2lDOztJQUNqQyxtQ0FDaUM7O0lBQ2pDLGlDQUMrQjs7SUFFL0IsbUNBQ2tCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEl0ZW0ge1xuICBwcm9kdWN0PzogYW55O1xuICBxdWFudGl0eT86IGFueTtcbiAgYmFzZVByaWNlPzogYW55O1xuICB0b3RhbFByaWNlPzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jYXJ0LWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FydC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBjb21wYWN0ID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGl0ZW06IEl0ZW07XG4gIEBJbnB1dCgpXG4gIHBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zOiBhbnlbXTtcbiAgQElucHV0KClcbiAgaXNSZWFkT25seSA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBjYXJ0SXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpXG4gIHJlbW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgdXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICB2aWV3ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQElucHV0KClcbiAgcGFyZW50OiBGb3JtR3JvdXA7XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIGlzUHJvZHVjdE91dE9mU3RvY2socHJvZHVjdCkge1xuICAgIC8vIFRPRE8gTW92ZSBzdG9ja2xldmVsc3RhdHVzZXMgYWNyb3NzIHRoZSBhcHAgdG8gYW4gZW51bVxuICAgIHJldHVybiAoXG4gICAgICBwcm9kdWN0ICYmXG4gICAgICBwcm9kdWN0LnN0b2NrICYmXG4gICAgICBwcm9kdWN0LnN0b2NrLnN0b2NrTGV2ZWxTdGF0dXMgPT09ICdvdXRPZlN0b2NrJ1xuICAgICk7XG4gIH1cblxuICB1cGRhdGVJdGVtKHVwZGF0ZWRRdWFudGl0eTogbnVtYmVyKSB7XG4gICAgdGhpcy51cGRhdGUuZW1pdCh7IGl0ZW06IHRoaXMuaXRlbSwgdXBkYXRlZFF1YW50aXR5IH0pO1xuICB9XG5cbiAgcmVtb3ZlSXRlbSgpIHtcbiAgICB0aGlzLnJlbW92ZS5lbWl0KHRoaXMuaXRlbSk7XG4gIH1cblxuICB2aWV3SXRlbSgpIHtcbiAgICB0aGlzLnZpZXcuZW1pdCgpO1xuICB9XG59XG4iXX0=