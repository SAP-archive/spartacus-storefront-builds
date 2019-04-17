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
var CartItemComponent = /** @class */ (function () {
    function CartItemComponent() {
        this.compact = false;
        this.isReadOnly = false;
        this.cartIsLoading = false;
        this.remove = new EventEmitter();
        this.update = new EventEmitter();
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
    CartItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-cart-item',
                    template: "<div [ngClass]=\"compact ? 'cx-compact row' : 'row'\">\n  <!-- Item Image -->\n  <div class=\"col-2 cx-image-container\">\n    <a\n      [routerLink]=\"\n        { route: [{ name: 'product', params: item.product }] } | cxTranslateUrl\n      \"\n    >\n      <cx-picture\n        [imageContainer]=\"item.product.images?.PRIMARY\"\n        imageFormat=\"thumbnail\"\n      ></cx-picture>\n    </a>\n  </div>\n  <!-- Item Information -->\n  <div class=\"cx-info col-10\">\n    <div class=\"cx-info-container row \">\n      <!-- Item Description -->\n      <div [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-5'\">\n        <div *ngIf=\"item.product.name\" class=\"cx-name\">\n          <a\n            class=\"cx-link\"\n            [routerLink]=\"\n              { route: [{ name: 'product', params: item.product }] }\n                | cxTranslateUrl\n            \"\n            >{{ item.product.name }}</a\n          >\n        </div>\n        <div *ngIf=\"item.product.code\" class=\"cx-code\">\n          {{ 'cartItems.label.id' | cxTranslate }} {{ item.product.code }}\n        </div>\n        <!-- Variants -->\n        <div\n          *ngFor=\"let variant of item.product.variantOptionQualifiers\"\n          class=\"cx-property\"\n        >\n          <div class=\"cx-label\">{{ variant.name }}</div>\n          <div class=\"cx-value\">{{ variant.value }}</div>\n        </div>\n      </div>\n      <!-- Item Price -->\n      <div\n        *ngIf=\"item.basePrice\"\n        class=\"cx-price\"\n        [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n      >\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n        >\n          {{ 'cartItems.label.item' | cxTranslate }}\n        </div>\n        <div *ngIf=\"item.basePrice\" class=\"cx-value\">\n          {{ item.basePrice?.formattedValue }}\n        </div>\n      </div>\n      <!-- Item Quantity -->\n      <div\n        *ngIf=\"item.quantity\"\n        class=\"cx-quantity\"\n        [ngClass]=\"compact ? '' : ' col-3'\"\n      >\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n          placement=\"left\"\n          ngbTooltip=\"The quantity represents the total number of this item in your cart.\"\n        >\n          {{ 'cartItems.label.quantity' | cxTranslate }}\n        </div>\n        <div *ngIf=\"isReadOnly\" class=\"cx-value\">{{ item.quantity }}</div>\n        <div\n          *ngIf=\"!isReadOnly && parent\"\n          class=\"cx-value\"\n          [formGroup]=\"parent\"\n        >\n          <cx-item-counter\n            isValueChangeable=\"true\"\n            [step]=\"1\"\n            [min]=\"1\"\n            [max]=\"item.product.stock?.stockLevel || 1000\"\n            (update)=\"updateItem($event)\"\n            [cartIsLoading]=\"cartIsLoading\"\n            formControlName=\"quantity\"\n          >\n          </cx-item-counter>\n        </div>\n      </div>\n      <!-- Total -->\n      <div\n        *ngIf=\"item.totalPrice\"\n        class=\"cx-total\"\n        [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n      >\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n        >\n          {{ 'cartItems.label.total' | cxTranslate }}\n        </div>\n        <div class=\"cx-value\">{{ item.totalPrice.formattedValue }}</div>\n      </div>\n    </div>\n    <!-- Availability -->\n    <div *ngIf=\"isProductOutOfStock(item)\" class=\"cx-availability col-12\">\n      {{ item.product.stock?.stockLevelStatus }}\n    </div>\n    <!-- Promotion -->\n    <cx-promotions [promotions]=\"potentialProductPromotions\"></cx-promotions>\n    <!-- Actions -->\n    <div *ngIf=\"!isReadOnly\" class=\"cx-actions col-12\">\n      <button\n        class=\"link\"\n        [class.disabled]=\"cartIsLoading\"\n        [disabled]=\"cartIsLoading\"\n        (click)=\"removeItem()\"\n      >\n        {{ 'common.action.remove' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n",
                    styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-name{font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);overflow-wrap:var(--cx-overflow-wrap,break-word);padding:var(--cx-padding,0)}.cx-name .cx-link{color:var(--cx-color,var(--cx-g-color-text));-webkit-text-decoration:var(--cx-text-decoration,none);text-decoration:var(--cx-text-decoration,none)}.cx-name .cx-link:hover{color:var(--cx-color,var(--cx-g-color-primary))}.cx-code{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.22222);color:var(--cx-color,var(--cx-g-color-secondary));padding:var(--cx-padding,.625rem 0)}.cx-property{display:var(--cx-display,flex)}.cx-label{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);overflow-wrap:var(--cx-overflow-wrap,break-word);padding-right:1rem}.cx-value{font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);overflow-wrap:var(--cx-overflow-wrap,break-word);font-weight:var(--cx-g-font-weight-normal,400)}@media (max-width:767.98px){.cx-info-container{display:var(--cx-display,flex);flex-direction:var(--cx-flex-direction,column)}.cx-label{min-width:var(--cx-min-width,5rem)}.cx-value{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.22222)}}.cx-price{display:var(--cx-display,flex);justify-content:var(--cx-justify-content,center);align-items:var(--cx-align-items,center);font-size:var(--cx-font-size,1rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);font-weight:400}@media (max-width:767.98px){.cx-price{justify-content:var(--cx-justify-content,flex-start)}}.cx-price .cx-old{-webkit-text-decoration:var(--cx-text-decoration,line-through);text-decoration:var(--cx-text-decoration,line-through);color:var(--cx-color,var(--cx-g-color-secondary));padding:var(--cx-padding,0 1rem 0 0)}.cx-price .cx-new{color:var(--cx-color,var(--cx-g-color-primary))}.cx-quantity{display:var(--cx-display,flex);justify-content:var(--cx-justify-content,center);align-items:var(--cx-align-items,center)}@media (max-width:767.98px){.cx-quantity{justify-content:var(--cx-justify-content,flex-start)}}.cx-total{display:var(--cx-display,flex);justify-content:var(--cx-justify-content,flex-end);align-items:var(--cx-align-items,center)}@media (max-width:767.98px){.cx-total{justify-content:var(--cx-justify-content,flex-start)}}.cx-promo{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);color:var(--cx-color,var(--cx-g-color-success));padding:var(--cx-padding,.75rem 0);margin:var(--cx-margin,0)}.cx-availability{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);color:var(--cx-color,var(--cx-g-color-danger));padding:var(--cx-padding,.75rem 0);margin:var(--cx-margin,0)}.cx-actions{display:var(--cx-display,flex);justify-content:var(--cx-justify-content,flex-end);padding:var(--cx-padding,0)}@media (max-width:767.98px){.cx-actions{display:var(--cx-display,flex);justify-content:var(--cx-justify-content,flex-start);padding:var(--cx-padding,0)}}.cx-actions button.link{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);color:var(--cx-color,var(--cx-g-color-text))}.cx-compact{display:var(--cx-display,flex);flex-direction:var(--cx-flex-direction,row)}.cx-compact .cx-image-container{padding:var(--cx-padding,0)}.cx-compact .cx-info-container{display:var(--cx-display,flex);flex-direction:var(--cx-flex-direction,column);margin:var(--cx-margin,0)}.cx-compact .cx-actions,.cx-compact .cx-price,.cx-compact .cx-quantity,.cx-compact .cx-total{justify-content:var(--cx-justify-content,flex-start);padding:var(--cx-padding,0)}.cx-compact .cx-actions .cx-label,.cx-compact .cx-price .cx-label,.cx-compact .cx-quantity .cx-label,.cx-compact .cx-total .cx-label{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);min-width:var(--cx-min-width,5rem)}.cx-compact .cx-actions .cx-value,.cx-compact .cx-price .cx-value,.cx-compact .cx-quantity .cx-value,.cx-compact .cx-total .cx-value{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.22222)}.cx-compact .cx-actions button.link,.cx-compact .cx-price button.link,.cx-compact .cx-quantity button.link,.cx-compact .cx-total button.link{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);color:var(--cx-color,var(--cx-g-color-text))}"]
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
    CartItemComponent.prototype.parent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jYXJ0L2NhcnQtc2hhcmVkL2NhcnQtaXRlbS9jYXJ0LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUUzQywwQkFLQzs7O0lBSkMsdUJBQWM7O0lBQ2Qsd0JBQWU7O0lBQ2YseUJBQWdCOztJQUNoQiwwQkFBaUI7O0FBR25CO0lBQUE7UUFPRSxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBTWhCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFbkIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFHdEIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFakMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUF1Qm5DLENBQUM7Ozs7SUFsQkMsb0NBQVE7OztJQUFSLGNBQVksQ0FBQzs7Ozs7SUFFYiwrQ0FBbUI7Ozs7SUFBbkIsVUFBb0IsT0FBTztRQUN6Qix5REFBeUQ7UUFDekQsT0FBTyxDQUNMLE9BQU87WUFDUCxPQUFPLENBQUMsS0FBSztZQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEtBQUssWUFBWSxDQUNoRCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxzQ0FBVTs7OztJQUFWLFVBQVcsZUFBdUI7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxlQUFlLGlCQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7SUFFRCxzQ0FBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBMUNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsMmlJQUF5Qzs7aUJBRTFDOzs7MEJBRUUsS0FBSzt1QkFFTCxLQUFLOzZDQUVMLEtBQUs7NkJBRUwsS0FBSztnQ0FFTCxLQUFLO3lCQUdMLE1BQU07eUJBRU4sTUFBTTt5QkFHTixLQUFLOztJQXFCUix3QkFBQztDQUFBLEFBM0NELElBMkNDO1NBdENZLGlCQUFpQjs7O0lBQzVCLG9DQUNnQjs7SUFDaEIsaUNBQ1c7O0lBQ1gsdURBQ2tDOztJQUNsQyx1Q0FDbUI7O0lBQ25CLDBDQUNzQjs7SUFFdEIsbUNBQ2lDOztJQUNqQyxtQ0FDaUM7O0lBRWpDLG1DQUNrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGludGVyZmFjZSBJdGVtIHtcbiAgcHJvZHVjdD86IGFueTtcbiAgcXVhbnRpdHk/OiBhbnk7XG4gIGJhc2VQcmljZT86IGFueTtcbiAgdG90YWxQcmljZT86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2FydC1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcnQtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhcnQtaXRlbS5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGNvbXBhY3QgPSBmYWxzZTtcbiAgQElucHV0KClcbiAgaXRlbTogSXRlbTtcbiAgQElucHV0KClcbiAgcG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnM6IGFueVtdO1xuICBASW5wdXQoKVxuICBpc1JlYWRPbmx5ID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGNhcnRJc0xvYWRpbmcgPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgcmVtb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBASW5wdXQoKVxuICBwYXJlbnQ6IEZvcm1Hcm91cDtcblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgaXNQcm9kdWN0T3V0T2ZTdG9jayhwcm9kdWN0KSB7XG4gICAgLy8gVE9ETyBNb3ZlIHN0b2NrbGV2ZWxzdGF0dXNlcyBhY3Jvc3MgdGhlIGFwcCB0byBhbiBlbnVtXG4gICAgcmV0dXJuIChcbiAgICAgIHByb2R1Y3QgJiZcbiAgICAgIHByb2R1Y3Quc3RvY2sgJiZcbiAgICAgIHByb2R1Y3Quc3RvY2suc3RvY2tMZXZlbFN0YXR1cyA9PT0gJ291dE9mU3RvY2snXG4gICAgKTtcbiAgfVxuXG4gIHVwZGF0ZUl0ZW0odXBkYXRlZFF1YW50aXR5OiBudW1iZXIpIHtcbiAgICB0aGlzLnVwZGF0ZS5lbWl0KHsgaXRlbTogdGhpcy5pdGVtLCB1cGRhdGVkUXVhbnRpdHkgfSk7XG4gIH1cblxuICByZW1vdmVJdGVtKCkge1xuICAgIHRoaXMucmVtb3ZlLmVtaXQodGhpcy5pdGVtKTtcbiAgfVxufVxuIl19