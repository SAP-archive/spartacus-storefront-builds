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
                template: "<div [ngClass]=\"compact ? 'cx-compact row' : 'row'\">\n  <!-- Item Image -->\n  <div class=\"col-2 cx-image-container\">\n    <a\n      [routerLink]=\"{ route: 'product', params: item.product } | cxTranslateUrl\"\n    >\n      <cx-picture\n        [imageContainer]=\"item.product.images?.PRIMARY\"\n        imageFormat=\"thumbnail\"\n      ></cx-picture>\n    </a>\n  </div>\n  <!-- Item Information -->\n  <div class=\"cx-info col-10\">\n    <div class=\"cx-info-container row \">\n      <!-- Item Description -->\n      <div [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-5'\">\n        <div *ngIf=\"item.product.name\" class=\"cx-name\">\n          <a\n            class=\"cx-link\"\n            [routerLink]=\"\n              { route: 'product', params: item.product } | cxTranslateUrl\n            \"\n            >{{ item.product.name }}</a\n          >\n        </div>\n        <div *ngIf=\"item.product.code\" class=\"cx-code\">\n          {{ 'cartItems.id' | cxTranslate }} {{ item.product.code }}\n        </div>\n        <!-- Variants -->\n        <div\n          *ngFor=\"let variant of item.product.variantOptionQualifiers\"\n          class=\"cx-property\"\n        >\n          <div class=\"cx-label\">{{ variant.name }}</div>\n          <div class=\"cx-value\">{{ variant.value }}</div>\n        </div>\n      </div>\n      <!-- Item Price -->\n      <div\n        *ngIf=\"item.basePrice\"\n        class=\"cx-price\"\n        [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n      >\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n        >\n          {{ 'cartItems.item' | cxTranslate }}\n        </div>\n        <div *ngIf=\"item.basePrice\" class=\"cx-value\">\n          {{ item.basePrice?.formattedValue }}\n        </div>\n      </div>\n      <!-- Item Quantity -->\n      <div\n        *ngIf=\"item.quantity\"\n        class=\"cx-quantity\"\n        [ngClass]=\"compact ? '' : ' col-3'\"\n      >\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n          placement=\"left\"\n          ngbTooltip=\"The quantity represents the total number of this item in your cart.\"\n        >\n          {{ 'cartItems.quantity' | cxTranslate }}\n        </div>\n        <div *ngIf=\"isReadOnly\" class=\"cx-value\">{{ item.quantity }}</div>\n        <div\n          *ngIf=\"!isReadOnly && parent\"\n          class=\"cx-value\"\n          [formGroup]=\"parent\"\n        >\n          <cx-item-counter\n            isValueChangeable=\"true\"\n            [step]=\"1\"\n            [min]=\"1\"\n            [max]=\"item.product.stock?.stockLevel || 1000\"\n            (update)=\"updateItem($event)\"\n            [cartIsLoading]=\"cartIsLoading\"\n            formControlName=\"quantity\"\n          >\n          </cx-item-counter>\n        </div>\n      </div>\n      <!-- Total -->\n      <div\n        *ngIf=\"item.totalPrice\"\n        class=\"cx-total\"\n        [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n      >\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n        >\n          {{ 'cartItems.total' | cxTranslate }}\n        </div>\n        <div class=\"cx-value\">{{ item.totalPrice.formattedValue }}</div>\n      </div>\n    </div>\n    <!-- Availability -->\n    <div *ngIf=\"isProductOutOfStock(item)\" class=\"cx-availability col-12\">\n      {{ 'productSummary.outOfStock' | cxTranslate }}\n    </div>\n    <!-- Promotion -->\n    <cx-promotions [promotions]=\"potentialProductPromotions\"></cx-promotions>\n    <!-- Actions -->\n    <div *ngIf=\"!isReadOnly\" class=\"cx-actions col-12\">\n      <button\n        class=\"link\"\n        [class.disabled]=\"cartIsLoading\"\n        [disabled]=\"cartIsLoading\"\n        (click)=\"removeItem()\"\n      >\n        {{ 'common.remove' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NoZWNrb3V0L2NhcnQvY2FydC1zaGFyZWQvY2FydC1pdGVtL2NhcnQtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRTNDLDBCQUtDOzs7SUFKQyx1QkFBYzs7SUFDZCx3QkFBZTs7SUFDZix5QkFBZ0I7O0lBQ2hCLDBCQUFpQjs7QUFRbkIsTUFBTSxPQUFPLGlCQUFpQjtJQUw5QjtRQU9FLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFNaEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUVuQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUd0QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVqQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQXVCbkMsQ0FBQzs7OztJQWxCQyxRQUFRLEtBQUksQ0FBQzs7Ozs7SUFFYixtQkFBbUIsQ0FBQyxPQUFPO1FBQ3pCLHlEQUF5RDtRQUN6RCxPQUFPLENBQ0wsT0FBTztZQUNQLE9BQU8sQ0FBQyxLQUFLO1lBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsS0FBSyxZQUFZLENBQ2hELENBQUM7SUFDSixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxlQUF1QjtRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBMUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsczlIQUF5Qzs7YUFFMUM7OztzQkFFRSxLQUFLO21CQUVMLEtBQUs7eUNBRUwsS0FBSzt5QkFFTCxLQUFLOzRCQUVMLEtBQUs7cUJBR0wsTUFBTTtxQkFFTixNQUFNO3FCQUdOLEtBQUs7Ozs7SUFoQk4sb0NBQ2dCOztJQUNoQixpQ0FDVzs7SUFDWCx1REFDa0M7O0lBQ2xDLHVDQUNtQjs7SUFDbkIsMENBQ3NCOztJQUV0QixtQ0FDaUM7O0lBQ2pDLG1DQUNpQzs7SUFFakMsbUNBQ2tCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEl0ZW0ge1xuICBwcm9kdWN0PzogYW55O1xuICBxdWFudGl0eT86IGFueTtcbiAgYmFzZVByaWNlPzogYW55O1xuICB0b3RhbFByaWNlPzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jYXJ0LWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FydC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FydC1pdGVtLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENhcnRJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgY29tcGFjdCA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBpdGVtOiBJdGVtO1xuICBASW5wdXQoKVxuICBwb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9uczogYW55W107XG4gIEBJbnB1dCgpXG4gIGlzUmVhZE9ubHkgPSBmYWxzZTtcbiAgQElucHV0KClcbiAgY2FydElzTG9hZGluZyA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKVxuICByZW1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIHVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBJbnB1dCgpXG4gIHBhcmVudDogRm9ybUdyb3VwO1xuXG4gIG5nT25Jbml0KCkge31cblxuICBpc1Byb2R1Y3RPdXRPZlN0b2NrKHByb2R1Y3QpIHtcbiAgICAvLyBUT0RPIE1vdmUgc3RvY2tsZXZlbHN0YXR1c2VzIGFjcm9zcyB0aGUgYXBwIHRvIGFuIGVudW1cbiAgICByZXR1cm4gKFxuICAgICAgcHJvZHVjdCAmJlxuICAgICAgcHJvZHVjdC5zdG9jayAmJlxuICAgICAgcHJvZHVjdC5zdG9jay5zdG9ja0xldmVsU3RhdHVzID09PSAnb3V0T2ZTdG9jaydcbiAgICApO1xuICB9XG5cbiAgdXBkYXRlSXRlbSh1cGRhdGVkUXVhbnRpdHk6IG51bWJlcikge1xuICAgIHRoaXMudXBkYXRlLmVtaXQoeyBpdGVtOiB0aGlzLml0ZW0sIHVwZGF0ZWRRdWFudGl0eSB9KTtcbiAgfVxuXG4gIHJlbW92ZUl0ZW0oKSB7XG4gICAgdGhpcy5yZW1vdmUuZW1pdCh0aGlzLml0ZW0pO1xuICB9XG59XG4iXX0=