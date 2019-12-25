/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService, PromotionLocation, } from '@spartacus/core';
export class CartItemListComponent {
    /**
     * @param {?} cartService
     * @param {?} fb
     */
    constructor(cartService, fb) {
        this.cartService = cartService;
        this.fb = fb;
        this.isReadOnly = false;
        this.hasHeader = true;
        this.potentialProductPromotions = [];
        this.promotionLocation = PromotionLocation.ActiveCart;
        this.cartIsLoading = false;
        this.form = this.fb.group({});
        this._items = [];
    }
    /**
     * @param {?} _items
     * @return {?}
     */
    set items(_items) {
        this._items = _items;
        this.items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            const { code } = item.product;
            if (!this.form.controls[code]) {
                this.form.setControl(code, this.createEntryFormGroup(item));
            }
            else {
                /** @type {?} */
                const entryForm = (/** @type {?} */ (this.form.controls[code]));
                entryForm.controls.quantity.setValue(item.quantity);
            }
        }));
    }
    /**
     * @return {?}
     */
    get items() {
        return this._items;
    }
    // TODO remove for 2.0 - left to keep backward compatibility
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} item
     * @return {?}
     */
    removeEntry(item) {
        this.cartService.removeEntry(item);
        delete this.form.controls[item.product.code];
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    updateEntry({ item, updatedQuantity, }) {
        this.cartService.updateEntry(item.entryNumber, updatedQuantity);
    }
    /**
     * @private
     * @param {?} entry
     * @return {?}
     */
    createEntryFormGroup(entry) {
        return this.fb.group({
            entryNumber: entry.entryNumber,
            quantity: entry.quantity,
        });
    }
    /**
     * @param {?} item
     * @return {?}
     */
    getPotentialProductPromotionsForItem(item) {
        /** @type {?} */
        const entryPromotions = [];
        if (this.potentialProductPromotions &&
            this.potentialProductPromotions.length > 0) {
            for (const promotion of this.potentialProductPromotions) {
                if (promotion.description &&
                    promotion.consumedEntries &&
                    promotion.consumedEntries.length > 0) {
                    for (const consumedEntry of promotion.consumedEntries) {
                        if (this.isConsumedByEntry(consumedEntry, item)) {
                            entryPromotions.push(promotion);
                        }
                    }
                }
            }
        }
        return entryPromotions;
    }
    /**
     * @private
     * @param {?} consumedEntry
     * @param {?} entry
     * @return {?}
     */
    isConsumedByEntry(consumedEntry, entry) {
        /** @type {?} */
        const consumedEntryNumber = consumedEntry.orderEntryNumber;
        if (entry.entries && entry.entries.length > 0) {
            for (const subEntry of entry.entries) {
                if (subEntry.entryNumber === consumedEntryNumber) {
                    return true;
                }
            }
            return false;
        }
        else {
            return consumedEntryNumber === entry.entryNumber;
        }
    }
}
CartItemListComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-cart-item-list',
                template: "<div *ngIf=\"hasHeader\" class=\"d-none d-md-block d-lg-block d-xl-block\">\n  <div class=\"cx-item-list-header row\">\n    <div class=\"cx-item-list-desc col-md-5 col-lg-5 col-xl-6\">\n      {{ 'cartItems.description' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-price col-md-3 col-lg-2 col-xl-2\">\n      {{ 'cartItems.itemPrice' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-qty col-md-2 col-lg-3 col-xl-2\">\n      {{ 'cartItems.quantity' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n      {{ 'cartItems.total' | cxTranslate }}\n    </div>\n  </div>\n</div>\n\n<div [formGroup]=\"form\">\n  <div class=\"cx-item-list-row\" *ngFor=\"let item of items\">\n    <div class=\"cx-item-list-items\">\n      <ng-container *cxFeatureLevel=\"'!1.4'\">\n        <cx-cart-item\n          [parent]=\"form.controls[item.product.code]\"\n          [item]=\"item\"\n          [isReadOnly]=\"isReadOnly\"\n          [potentialProductPromotions]=\"\n            getPotentialProductPromotionsForItem(item)\n          \"\n          [cartIsLoading]=\"cartIsLoading\"\n          (remove)=\"removeEntry($event)\"\n          (update)=\"updateEntry($event)\"\n        >\n        </cx-cart-item>\n      </ng-container>\n\n      <ng-container *cxFeatureLevel=\"'1.4'\">\n        <cx-cart-item\n          [parent]=\"form.controls[item.product.code]\"\n          [item]=\"item\"\n          [isReadOnly]=\"isReadOnly\"\n          [promotionLocation]=\"promotionLocation\"\n          [cartIsLoading]=\"cartIsLoading\"\n          (remove)=\"removeEntry($event)\"\n          (update)=\"updateEntry($event)\"\n        >\n        </cx-cart-item>\n      </ng-container>\n    </div>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
CartItemListComponent.ctorParameters = () => [
    { type: CartService },
    { type: FormBuilder }
];
CartItemListComponent.propDecorators = {
    isReadOnly: [{ type: Input }],
    hasHeader: [{ type: Input }],
    potentialProductPromotions: [{ type: Input }],
    promotionLocation: [{ type: Input }],
    items: [{ type: Input }],
    cartIsLoading: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CartItemListComponent.prototype.isReadOnly;
    /** @type {?} */
    CartItemListComponent.prototype.hasHeader;
    /** @type {?} */
    CartItemListComponent.prototype.potentialProductPromotions;
    /** @type {?} */
    CartItemListComponent.prototype.promotionLocation;
    /** @type {?} */
    CartItemListComponent.prototype.cartIsLoading;
    /** @type {?} */
    CartItemListComponent.prototype.form;
    /**
     * @type {?}
     * @private
     */
    CartItemListComponent.prototype._items;
    /**
     * @type {?}
     * @protected
     */
    CartItemListComponent.prototype.cartService;
    /**
     * @type {?}
     * @protected
     */
    CartItemListComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LXNoYXJlZC9jYXJ0LWl0ZW0tbGlzdC9jYXJ0LWl0ZW0tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQ0wsV0FBVyxFQUNYLGlCQUFpQixHQUVsQixNQUFNLGlCQUFpQixDQUFDO0FBT3pCLE1BQU0sT0FBTyxxQkFBcUI7Ozs7O0lBc0NoQyxZQUFzQixXQUF3QixFQUFZLEVBQWU7UUFBbkQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBWSxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBcEN6RSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBR25CLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFHakIsK0JBQTBCLEdBQXNCLEVBQUUsQ0FBQztRQUduRCxzQkFBaUIsR0FBc0IsaUJBQWlCLENBQUMsVUFBVSxDQUFDO1FBaUJwRSxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUV0QixTQUFJLEdBQWMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFNUIsV0FBTSxHQUFXLEVBQUUsQ0FBQztJQU1nRCxDQUFDOzs7OztJQXpCN0UsSUFDSSxLQUFLLENBQUMsTUFBTTtRQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTzs7OztRQUFDLElBQUksQ0FBQyxFQUFFO2tCQUNsQixFQUFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPO1lBQzdCLElBQUksQ0FBQyxJQUFJLENB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QUdMLEtBQUs7b0JBR0wsS0FBSzs0QkFjTCxLQUFLOzs7O0lBMUJOLDJDQUNtQjs7SUFFbkIsMENBQ2lCOztJQUVqQiwyREFDbUQ7O0lBRW5ELGtEQUNvRTs7SUFnQnBFLDhDQUNzQjs7SUFFdEIscUNBQW9DOzs7OztJQUVwQyx1Q0FBNEI7Ozs7O0lBTWhCLDRDQUFrQzs7Ozs7SUFBRSxtQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBDYXJ0U2VydmljZSxcbiAgUHJvbW90aW9uTG9jYXRpb24sXG4gIFByb21vdGlvblJlc3VsdCxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEl0ZW0gfSBmcm9tICcuLi9jYXJ0LWl0ZW0vY2FydC1pdGVtLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNhcnQtaXRlbS1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcnQtaXRlbS1saXN0LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydEl0ZW1MaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgaXNSZWFkT25seSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGhhc0hlYWRlciA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnM6IFByb21vdGlvblJlc3VsdFtdID0gW107XG5cbiAgQElucHV0KClcbiAgcHJvbW90aW9uTG9jYXRpb246IFByb21vdGlvbkxvY2F0aW9uID0gUHJvbW90aW9uTG9jYXRpb24uQWN0aXZlQ2FydDtcblxuICBASW5wdXQoKVxuICBzZXQgaXRlbXMoX2l0ZW1zKSB7XG4gICAgdGhpcy5faXRlbXMgPSBfaXRlbXM7XG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgeyBjb2RlIH0gPSBpdGVtLnByb2R1Y3Q7XG4gICAgICBpZiAoIXRoaXMuZm9ybS5jb250cm9sc1tjb2RlXSkge1xuICAgICAgICB0aGlzLmZvcm0uc2V0Q29udHJvbChjb2RlLCB0aGlzLmNyZWF0ZUVudHJ5Rm9ybUdyb3VwKGl0ZW0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGVudHJ5Rm9ybSA9IHRoaXMuZm9ybS5jb250cm9sc1tjb2RlXSBhcyBGb3JtR3JvdXA7XG4gICAgICAgIGVudHJ5Rm9ybS5jb250cm9scy5xdWFudGl0eS5zZXRWYWx1ZShpdGVtLnF1YW50aXR5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGNhcnRJc0xvYWRpbmcgPSBmYWxzZTtcblxuICBmb3JtOiBGb3JtR3JvdXAgPSB0aGlzLmZiLmdyb3VwKHt9KTtcblxuICBwcml2YXRlIF9pdGVtczogSXRlbVtdID0gW107XG5cbiAgZ2V0IGl0ZW1zKCk6IEl0ZW1bXSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSwgcHJvdGVjdGVkIGZiOiBGb3JtQnVpbGRlcikge31cblxuICAvLyBUT0RPIHJlbW92ZSBmb3IgMi4wIC0gbGVmdCB0byBrZWVwIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgbmdPbkluaXQoKTogdm9pZCB7fVxuXG4gIHJlbW92ZUVudHJ5KGl0ZW06IEl0ZW0pOiB2b2lkIHtcbiAgICB0aGlzLmNhcnRTZXJ2aWNlLnJlbW92ZUVudHJ5KGl0ZW0pO1xuICAgIGRlbGV0ZSB0aGlzLmZvcm0uY29udHJvbHNbaXRlbS5wcm9kdWN0LmNvZGVdO1xuICB9XG5cbiAgdXBkYXRlRW50cnkoe1xuICAgIGl0ZW0sXG4gICAgdXBkYXRlZFF1YW50aXR5LFxuICB9OiB7XG4gICAgaXRlbTogYW55O1xuICAgIHVwZGF0ZWRRdWFudGl0eTogbnVtYmVyO1xuICB9KTogdm9pZCB7XG4gICAgdGhpcy5jYXJ0U2VydmljZS51cGRhdGVFbnRyeShpdGVtLmVudHJ5TnVtYmVyLCB1cGRhdGVkUXVhbnRpdHkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVFbnRyeUZvcm1Hcm91cChlbnRyeSk6IEZvcm1Hcm91cCB7XG4gICAgcmV0dXJuIHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgZW50cnlOdW1iZXI6IGVudHJ5LmVudHJ5TnVtYmVyLFxuICAgICAgcXVhbnRpdHk6IGVudHJ5LnF1YW50aXR5LFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0UG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnNGb3JJdGVtKGl0ZW06IEl0ZW0pOiBQcm9tb3Rpb25SZXN1bHRbXSB7XG4gICAgY29uc3QgZW50cnlQcm9tb3Rpb25zOiBQcm9tb3Rpb25SZXN1bHRbXSA9IFtdO1xuICAgIGlmIChcbiAgICAgIHRoaXMucG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnMgJiZcbiAgICAgIHRoaXMucG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnMubGVuZ3RoID4gMFxuICAgICkge1xuICAgICAgZm9yIChjb25zdCBwcm9tb3Rpb24gb2YgdGhpcy5wb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9ucykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvbW90aW9uLmRlc2NyaXB0aW9uICYmXG4gICAgICAgICAgcHJvbW90aW9uLmNvbnN1bWVkRW50cmllcyAmJlxuICAgICAgICAgIHByb21vdGlvbi5jb25zdW1lZEVudHJpZXMubGVuZ3RoID4gMFxuICAgICAgICApIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IGNvbnN1bWVkRW50cnkgb2YgcHJvbW90aW9uLmNvbnN1bWVkRW50cmllcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNDb25zdW1lZEJ5RW50cnkoY29uc3VtZWRFbnRyeSwgaXRlbSkpIHtcbiAgICAgICAgICAgICAgZW50cnlQcm9tb3Rpb25zLnB1c2gocHJvbW90aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVudHJ5UHJvbW90aW9ucztcbiAgfVxuXG4gIHByaXZhdGUgaXNDb25zdW1lZEJ5RW50cnkoY29uc3VtZWRFbnRyeTogYW55LCBlbnRyeTogYW55KTogYm9vbGVhbiB7XG4gICAgY29uc3QgY29uc3VtZWRFbnRyeU51bWJlciA9IGNvbnN1bWVkRW50cnkub3JkZXJFbnRyeU51bWJlcjtcbiAgICBpZiAoZW50cnkuZW50cmllcyAmJiBlbnRyeS5lbnRyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAoY29uc3Qgc3ViRW50cnkgb2YgZW50cnkuZW50cmllcykge1xuICAgICAgICBpZiAoc3ViRW50cnkuZW50cnlOdW1iZXIgPT09IGNvbnN1bWVkRW50cnlOdW1iZXIpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY29uc3VtZWRFbnRyeU51bWJlciA9PT0gZW50cnkuZW50cnlOdW1iZXI7XG4gICAgfVxuICB9XG59XG4iXX0=