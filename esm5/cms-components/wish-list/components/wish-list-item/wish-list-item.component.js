/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
var WishListItemComponent = /** @class */ (function () {
    function WishListItemComponent() {
        this.isLoading = false;
        this.remove = new EventEmitter();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    WishListItemComponent.prototype.removeEntry = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.remove.emit(item);
    };
    WishListItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-wish-list-item',
                    template: "<div class=\"row\">\n  <!-- Item Image -->\n  <div class=\"cx-image-container col-2\">\n    <a [routerLink]=\"{ cxRoute: 'product', params: cartEntry.product } | cxUrl\">\n      <cx-media\n        [container]=\"cartEntry.product.images?.PRIMARY\"\n        format=\"thumbnail\"\n      ></cx-media>\n    </a>\n  </div>\n  <!-- Item Information -->\n  <div class=\"cx-info col-10\">\n    <div class=\"cx-info-container row \">\n      <!-- Item Description -->\n      <div class=\"col-md-5 col-lg-5 col-xl-5\">\n        <div *ngIf=\"cartEntry.product.name\" class=\"cx-name\">\n          <a\n            class=\"cx-link\"\n            [routerLink]=\"\n              { cxRoute: 'product', params: cartEntry.product } | cxUrl\n            \"\n            >{{ cartEntry.product.name }}</a\n          >\n        </div>\n        <div *ngIf=\"cartEntry.product.code\" class=\"cx-code\">\n          {{ 'cartItems.id' | cxTranslate }} {{ cartEntry.product.code }}\n        </div>\n        <!-- Variants -->\n        <!-- TODO #5593 <div\n          *ngFor=\"let variant of cartEntry.product.variantOptionQualifiers\"\n          class=\"cx-property\"\n        >\n          <div class=\"cx-label\">{{ variant.name }}</div>\n          <div class=\"cx-value\">{{ variant.value }}</div>\n        </div> -->\n      </div>\n      <!-- Item Price -->\n      <div\n        *ngIf=\"cartEntry.basePrice\"\n        class=\"cx-price col-md-3 col-lg-4 col-xl-4\"\n      >\n        <div class=\"cx-label d-block d-md-none d-lg-none d-xl-none\">\n          {{ 'cartItems.itemPrice' | cxTranslate }}\n        </div>\n        <div *ngIf=\"cartEntry.basePrice\" class=\"cx-value\">\n          {{ cartEntry.basePrice?.formattedValue }}\n        </div>\n      </div>\n      <!-- Item Quantity -->\n      <!-- <div *ngIf=\"cartEntry.quantity\" class=\"cx-quantity col-3\">\n        <div\n          class=\"cx-label d-block d-md-none d-lg-none d-xl-none\"\n          placement=\"left\"\n          title=\"{{ 'cartItems.quantityTitle' | cxTranslate }}\"\n        >\n          {{ 'cartItems.quantity' | cxTranslate }}\n        </div>\n        <div class=\"cx-value\">{{ cartEntry.quantity }}</div>\n      </div> -->\n      <!-- Total -->\n      <div class=\"col-sm-8 col-md-4 col-lg-3 col-xl-3 cx-add-to-cart\">\n        <cx-add-to-cart\n          *ngIf=\"cartEntry.product.stock.stockLevelStatus !== 'outOfStock'\"\n          [showQuantity]=\"false\"\n          [product]=\"cartEntry.product\"\n        ></cx-add-to-cart>\n      </div>\n    </div>\n    <div class=\"cx-return-button col-12\">\n      <button\n        class=\"btn btn-link\"\n        (click)=\"removeEntry(cartEntry)\"\n        [disabled]=\"isLoading\"\n      >\n        {{ 'common.remove' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    WishListItemComponent.propDecorators = {
        isLoading: [{ type: Input }],
        cartEntry: [{ type: Input }],
        remove: [{ type: Output }]
    };
    return WishListItemComponent;
}());
export { WishListItemComponent };
if (false) {
    /** @type {?} */
    WishListItemComponent.prototype.isLoading;
    /** @type {?} */
    WishListItemComponent.prototype.cartEntry;
    /** @type {?} */
    WishListItemComponent.prototype.remove;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvd2lzaC1saXN0L2NvbXBvbmVudHMvd2lzaC1saXN0LWl0ZW0vd2lzaC1saXN0LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUd2QjtJQUFBO1FBT0UsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUlsQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUsxQyxDQUFDOzs7OztJQUhDLDJDQUFXOzs7O0lBQVgsVUFBWSxJQUFnQjtRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDOztnQkFmRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsMnVGQUE4QztvQkFDOUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7NEJBRUUsS0FBSzs0QkFFTCxLQUFLO3lCQUVMLE1BQU07O0lBTVQsNEJBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQVhZLHFCQUFxQjs7O0lBQ2hDLDBDQUNrQjs7SUFDbEIsMENBQStCOztJQUUvQix1Q0FDd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3JkZXJFbnRyeSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXdpc2gtbGlzdC1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dpc2gtbGlzdC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFdpc2hMaXN0SXRlbUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGlzTG9hZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBjYXJ0RW50cnk6IE9yZGVyRW50cnk7XG5cbiAgQE91dHB1dCgpXG4gIHJlbW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8T3JkZXJFbnRyeT4oKTtcblxuICByZW1vdmVFbnRyeShpdGVtOiBPcmRlckVudHJ5KSB7XG4gICAgdGhpcy5yZW1vdmUuZW1pdChpdGVtKTtcbiAgfVxufVxuIl19