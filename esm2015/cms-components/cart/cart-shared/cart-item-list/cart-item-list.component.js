/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService, PromotionLocation, SelectiveCartService, FeatureConfigService, } from '@spartacus/core';
export class CartItemListComponent {
    /**
     * @param {?} cartService
     * @param {?} fb
     * @param {?=} selectiveCartService
     * @param {?=} featureConfig
     */
    constructor(cartService, fb, selectiveCartService, featureConfig) {
        this.cartService = cartService;
        this.fb = fb;
        this.selectiveCartService = selectiveCartService;
        this.featureConfig = featureConfig;
        this.isReadOnly = false;
        this.hasHeader = true;
        this.options = {
            isSaveForLater: false,
            optionalBtn: null,
        };
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
        if (_items.every((/**
         * @param {?} item
         * @return {?}
         */
        item => item.hasOwnProperty('orderEntry')))) {
            this._items = _items.map((/**
             * @param {?} consignmentEntry
             * @return {?}
             */
            consignmentEntry => {
                /** @type {?} */
                const entry = Object.assign({}, ((/** @type {?} */ (consignmentEntry))).orderEntry);
                entry.quantity = consignmentEntry.quantity;
                return entry;
            }));
        }
        else {
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
     * @param {?} item
     * @return {?}
     */
    removeEntry(item) {
        if (this.selectiveCartService && this.options.isSaveForLater) {
            this.selectiveCartService.removeEntry(item);
        }
        else {
            this.cartService.removeEntry(item);
        }
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
        //don't show promotions in saveforlater
        if (this.options.isSaveForLater) {
            return entryPromotions;
        }
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
                template: "<div *ngIf=\"hasHeader\" class=\"d-none d-md-block d-lg-block d-xl-block\">\n  <div class=\"cx-item-list-header row\">\n    <div class=\"cx-item-list-desc col-md-5 col-lg-5 col-xl-6\">\n      {{ 'cartItems.description' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-price col-md-3 col-lg-2 col-xl-2\">\n      {{ 'cartItems.itemPrice' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-qty col-md-2 col-lg-3 col-xl-2\">\n      {{ 'cartItems.quantity' | cxTranslate }}\n    </div>\n\n    <ng-container\n      *ngIf=\"\n        isSaveForLaterEnabled() && options.isSaveForLater;\n        else totalHeader\n      \"\n    >\n      <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n        {{ 'saveForLaterItems.stock' | cxTranslate }}\n      </div>\n    </ng-container>\n  </div>\n</div>\n\n<div [formGroup]=\"form\">\n  <div class=\"cx-item-list-row\" *ngFor=\"let item of items\">\n    <div class=\"cx-item-list-items\">\n      <ng-container *cxFeatureLevel=\"'!1.5'\">\n        <cx-cart-item\n          [parent]=\"form.controls[item.product.code]\"\n          [item]=\"item\"\n          [isReadOnly]=\"isReadOnly\"\n          [potentialProductPromotions]=\"\n            getPotentialProductPromotionsForItem(item)\n          \"\n          [cartIsLoading]=\"cartIsLoading\"\n          (remove)=\"removeEntry($event)\"\n          (update)=\"updateEntry($event)\"\n        >\n        </cx-cart-item>\n      </ng-container>\n\n      <ng-container *cxFeatureLevel=\"'1.5'\">\n        <cx-cart-item\n          [parent]=\"form.controls[item.product.code]\"\n          [item]=\"item\"\n          [isReadOnly]=\"isReadOnly\"\n          [promotionLocation]=\"promotionLocation\"\n          [cartIsLoading]=\"cartIsLoading\"\n          (remove)=\"removeEntry($event)\"\n          (update)=\"updateEntry($event)\"\n          [options]=\"options\"\n        >\n        </cx-cart-item>\n      </ng-container>\n    </div>\n  </div>\n</div>\n\n<ng-template #totalHeader>\n  <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n    {{ 'cartItems.total' | cxTranslate }}\n  </div>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
CartItemListComponent.ctorParameters = () => [
    { type: CartService },
    { type: FormBuilder },
    { type: SelectiveCartService },
    { type: FeatureConfigService }
];
CartItemListComponent.propDecorators = {
    isReadOnly: [{ type: Input }],
    hasHeader: [{ type: Input }],
    options: [{ type: Input }],
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
    CartItemListComponent.prototype.options;
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
    /**
     * @type {?}
     * @protected
     */
    CartItemListComponent.prototype.selectiveCartService;
    /**
     * @type {?}
     * @private
     */
    CartItemListComponent.prototype.featureConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LXNoYXJlZC9jYXJ0LWl0ZW0tbGlzdC9jYXJ0LWl0ZW0tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQ0wsV0FBVyxFQUVYLGlCQUFpQixFQUNqQixvQkFBb0IsRUFDcEIsb0JBQW9CLEdBRXJCLE1BQU0saUJBQWlCLENBQUM7QUFVekIsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7OztJQW9FaEMsWUFDWSxXQUF3QixFQUN4QixFQUFlLEVBQ2Ysb0JBQTJDLEVBQzdDLGFBQW9DO1FBSGxDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXVCO1FBQzdDLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtRQXRFOUMsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUduQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBR2pCLFlBQU8sR0FBNkI7WUFDbEMsY0FBYyxFQUFFLEtBQUs7WUFDckIsV0FBVyxFQUFFLElBQUk7U0FDbEIsQ0FBQztRQUVGLCtCQUEwQixHQUFzQixFQUFFLENBQUM7UUFHbkQsc0JBQWlCLEdBQXNCLGlCQUFpQixDQUFDLFVBQVUsQ0FBQztRQTRCcEUsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFFdEIsU0FBSSxHQUFjLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTVCLFdBQU0sR0FBVyxFQUFFLENBQUM7SUF5QnpCLENBQUM7Ozs7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TCxLQUFLO3NCQUdMLEtBQUs7eUNBS0wsS0FBSztnQ0FHTCxLQUFLO29CQUdMLEtBQUs7NEJBeUJMLEtBQUs7Ozs7SUExQ04sMkNBQ21COztJQUVuQiwwQ0FDaUI7O0lBRWpCLHdDQUlFOztJQUNGLDJEQUNtRDs7SUFFbkQsa0RBQ29FOztJQTJCcEUsOENBQ3NCOztJQUV0QixxQ0FBb0M7Ozs7O0lBRXBDLHVDQUE0Qjs7Ozs7SUFxQjFCLDRDQUFrQzs7Ozs7SUFDbEMsbUNBQXlCOzs7OztJQUN6QixxREFBcUQ7Ozs7O0lBQ3JELDhDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIENhcnRTZXJ2aWNlLFxuICBQcm9tb3Rpb25SZXN1bHQsXG4gIFByb21vdGlvbkxvY2F0aW9uLFxuICBTZWxlY3RpdmVDYXJ0U2VydmljZSxcbiAgRmVhdHVyZUNvbmZpZ1NlcnZpY2UsXG4gIENvbnNpZ25tZW50RW50cnksXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQge1xuICBJdGVtLFxuICBDYXJ0SXRlbUNvbXBvbmVudE9wdGlvbnMsXG59IGZyb20gJy4uL2NhcnQtaXRlbS9jYXJ0LWl0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2FydC1pdGVtLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FydC1pdGVtLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0SXRlbUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBpc1JlYWRPbmx5ID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgaGFzSGVhZGVyID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBvcHRpb25zOiBDYXJ0SXRlbUNvbXBvbmVudE9wdGlvbnMgPSB7XG4gICAgaXNTYXZlRm9yTGF0ZXI6IGZhbHNlLFxuICAgIG9wdGlvbmFsQnRuOiBudWxsLFxuICB9O1xuICBASW5wdXQoKVxuICBwb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9uczogUHJvbW90aW9uUmVzdWx0W10gPSBbXTtcblxuICBASW5wdXQoKVxuICBwcm9tb3Rpb25Mb2NhdGlvbjogUHJvbW90aW9uTG9jYXRpb24gPSBQcm9tb3Rpb25Mb2NhdGlvbi5BY3RpdmVDYXJ0O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBpdGVtcyhfaXRlbXMpIHtcbiAgICBpZiAoX2l0ZW1zLmV2ZXJ5KGl0ZW0gPT4gaXRlbS5oYXNPd25Qcm9wZXJ0eSgnb3JkZXJFbnRyeScpKSkge1xuICAgICAgdGhpcy5faXRlbXMgPSBfaXRlbXMubWFwKGNvbnNpZ25tZW50RW50cnkgPT4ge1xuICAgICAgICBjb25zdCBlbnRyeSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAge30sXG4gICAgICAgICAgKGNvbnNpZ25tZW50RW50cnkgYXMgQ29uc2lnbm1lbnRFbnRyeSkub3JkZXJFbnRyeVxuICAgICAgICApO1xuICAgICAgICBlbnRyeS5xdWFudGl0eSA9IGNvbnNpZ25tZW50RW50cnkucXVhbnRpdHk7XG4gICAgICAgIHJldHVybiBlbnRyeTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9pdGVtcyA9IF9pdGVtcztcbiAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgeyBjb2RlIH0gPSBpdGVtLnByb2R1Y3Q7XG4gICAgICAgIGlmICghdGhpcy5mb3JtLmNvbnRyb2xzW2NvZGVdKSB7XG4gICAgICAgICAgdGhpcy5mb3JtLnNldENvbnRyb2woY29kZSwgdGhpcy5jcmVhdGVFbnRyeUZvcm1Hcm91cChpdGVtKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZW50cnlGb3JtID0gdGhpcy5mb3JtLmNvbnRyb2xzW2NvZGVdIGFzIEZvcm1Hcm91cDtcbiAgICAgICAgICBlbnRyeUZvcm0uY29udHJvbHMucXVhbnRpdHkuc2V0VmFsdWUoaXRlbS5xdWFudGl0eSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGNhcnRJc0xvYWRpbmcgPSBmYWxzZTtcblxuICBmb3JtOiBGb3JtR3JvdXAgPSB0aGlzLmZiLmdyb3VwKHt9KTtcblxuICBwcml2YXRlIF9pdGVtczogSXRlbVtdID0gW107XG5cbiAgZ2V0IGl0ZW1zKCk6IEl0ZW1bXSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIGZiOiBGb3JtQnVpbGRlcixcbiAgICBzZWxlY3RpdmVDYXJ0U2VydmljZTogU2VsZWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgZmVhdHVyZUNvbmZpZzogRmVhdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKTtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS41XG4gICAqIEFkZCBzZWxlY3RpdmVDYXJ0U2VydmljZSBhdXRoU2VydmljZSByb3V0aW5nU2VydmljZSBhbmQgZmVhdHVyZUNvbmZpZyBmb3Igc2F2ZSBmb3IgbGF0ZXIuXG4gICAqIFJlbW92ZSBpc3N1ZTogIzU5NThcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSwgZmI6IEZvcm1CdWlsZGVyKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJvdGVjdGVkIHNlbGVjdGl2ZUNhcnRTZXJ2aWNlPzogU2VsZWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmZWF0dXJlQ29uZmlnPzogRmVhdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIC8vIFRPRE8gcmVtb3ZlIGZvciAyLjAgLSBsZWZ0IHRvIGtlZXAgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICBuZ09uSW5pdCgpOiB2b2lkIHt9XG5cbiAgLy9UT0RPIHJlbW92ZSBmZWF0dXJlIGZsYWcgZm9yICM1OTU4XG4gIGlzU2F2ZUZvckxhdGVyRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5mZWF0dXJlQ29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5mZWF0dXJlQ29uZmlnLmlzRW5hYmxlZCgnc2F2ZUZvckxhdGVyJyk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvL1RPRE8gcmVtb3ZlIGZlYXR1cmUgZmxhZyBmb3IgIzU5NThcblxuICByZW1vdmVFbnRyeShpdGVtOiBJdGVtKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2VsZWN0aXZlQ2FydFNlcnZpY2UgJiYgdGhpcy5vcHRpb25zLmlzU2F2ZUZvckxhdGVyKSB7XG4gICAgICB0aGlzLnNlbGVjdGl2ZUNhcnRTZXJ2aWNlLnJlbW92ZUVudHJ5KGl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhcnRTZXJ2aWNlLnJlbW92ZUVudHJ5KGl0ZW0pO1xuICAgIH1cbiAgICBkZWxldGUgdGhpcy5mb3JtLmNvbnRyb2xzW2l0ZW0ucHJvZHVjdC5jb2RlXTtcbiAgfVxuXG4gIHVwZGF0ZUVudHJ5KHtcbiAgICBpdGVtLFxuICAgIHVwZGF0ZWRRdWFudGl0eSxcbiAgfToge1xuICAgIGl0ZW06IGFueTtcbiAgICB1cGRhdGVkUXVhbnRpdHk6IG51bWJlcjtcbiAgfSk6IHZvaWQge1xuICAgIHRoaXMuY2FydFNlcnZpY2UudXBkYXRlRW50cnkoaXRlbS5lbnRyeU51bWJlciwgdXBkYXRlZFF1YW50aXR5KTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRW50cnlGb3JtR3JvdXAoZW50cnkpOiBGb3JtR3JvdXAge1xuICAgIHJldHVybiB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGVudHJ5TnVtYmVyOiBlbnRyeS5lbnRyeU51bWJlcixcbiAgICAgIHF1YW50aXR5OiBlbnRyeS5xdWFudGl0eSxcbiAgICB9KTtcbiAgfVxuXG4gIGdldFBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zRm9ySXRlbShpdGVtOiBJdGVtKTogUHJvbW90aW9uUmVzdWx0W10ge1xuICAgIGNvbnN0IGVudHJ5UHJvbW90aW9uczogUHJvbW90aW9uUmVzdWx0W10gPSBbXTtcbiAgICAvL2Rvbid0IHNob3cgcHJvbW90aW9ucyBpbiBzYXZlZm9ybGF0ZXJcbiAgICBpZiAodGhpcy5vcHRpb25zLmlzU2F2ZUZvckxhdGVyKSB7XG4gICAgICByZXR1cm4gZW50cnlQcm9tb3Rpb25zO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICB0aGlzLnBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zICYmXG4gICAgICB0aGlzLnBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zLmxlbmd0aCA+IDBcbiAgICApIHtcbiAgICAgIGZvciAoY29uc3QgcHJvbW90aW9uIG9mIHRoaXMucG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnMpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb21vdGlvbi5kZXNjcmlwdGlvbiAmJlxuICAgICAgICAgIHByb21vdGlvbi5jb25zdW1lZEVudHJpZXMgJiZcbiAgICAgICAgICBwcm9tb3Rpb24uY29uc3VtZWRFbnRyaWVzLmxlbmd0aCA+IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBjb25zdW1lZEVudHJ5IG9mIHByb21vdGlvbi5jb25zdW1lZEVudHJpZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ29uc3VtZWRCeUVudHJ5KGNvbnN1bWVkRW50cnksIGl0ZW0pKSB7XG4gICAgICAgICAgICAgIGVudHJ5UHJvbW90aW9ucy5wdXNoKHByb21vdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbnRyeVByb21vdGlvbnM7XG4gIH1cblxuICBwcml2YXRlIGlzQ29uc3VtZWRCeUVudHJ5KGNvbnN1bWVkRW50cnk6IGFueSwgZW50cnk6IGFueSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNvbnN1bWVkRW50cnlOdW1iZXIgPSBjb25zdW1lZEVudHJ5Lm9yZGVyRW50cnlOdW1iZXI7XG4gICAgaWYgKGVudHJ5LmVudHJpZXMgJiYgZW50cnkuZW50cmllcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGNvbnN0IHN1YkVudHJ5IG9mIGVudHJ5LmVudHJpZXMpIHtcbiAgICAgICAgaWYgKHN1YkVudHJ5LmVudHJ5TnVtYmVyID09PSBjb25zdW1lZEVudHJ5TnVtYmVyKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbnN1bWVkRW50cnlOdW1iZXIgPT09IGVudHJ5LmVudHJ5TnVtYmVyO1xuICAgIH1cbiAgfVxufVxuIl19