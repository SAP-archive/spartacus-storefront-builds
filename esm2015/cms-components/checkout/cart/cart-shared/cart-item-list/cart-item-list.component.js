/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '@spartacus/core';
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
        this.items = [];
        this.potentialProductPromotions = [];
        this.cartIsLoading = false;
        this.form = this.fb.group({});
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.items.forEach(item => {
            const { code } = item.product;
            if (!this.form.controls[code]) {
                this.form.setControl(code, this.createEntryFormGroup(item));
            }
            else {
                /** @type {?} */
                const entryForm = (/** @type {?} */ (this.form.controls[code]));
                entryForm.controls.quantity.setValue(item.quantity);
            }
        });
    }
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
     * @private
     * @param {?} consumedEntry
     * @param {?} entry
     * @return {?}
     */
    isConsumedByEntry(consumedEntry, entry) {
        /** @type {?} */
        const consumendEntryNumber = consumedEntry.orderEntryNumber;
        if (entry.entries && entry.entries.length > 0) {
            for (const subEntry of entry.entries) {
                if (subEntry.entryNumber === consumendEntryNumber) {
                    return true;
                }
            }
            return false;
        }
        else {
            return consumendEntryNumber === entry.entryNumber;
        }
    }
}
CartItemListComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-cart-item-list',
                template: "<div *ngIf=\"hasHeader\" class=\"d-none d-md-block d-lg-block d-xl-block\">\n  <div class=\"cx-item-list-header row\">\n    <div class=\"cx-item-list-desc col-md-5 col-lg-5 col-xl-6\">\n      {{ 'cartItems.description' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-price col-md-3 col-lg-2 col-xl-2\">\n      {{ 'cartItems.itemPrice' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-qty col-md-2 col-lg-3 col-xl-2\">\n      {{ 'cartItems.quantity' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n      {{ 'cartItems.total' | cxTranslate }}\n    </div>\n  </div>\n</div>\n\n<div [formGroup]=\"form\">\n  <div class=\"cx-item-list-row\" *ngFor=\"let item of items\">\n    <div class=\"cx-item-list-items\">\n      <cx-cart-item\n        [parent]=\"form.controls[item.product.code]\"\n        [item]=\"item\"\n        [potentialProductPromotions]=\"\n          getPotentialProductPromotionsForItem(item)\n        \"\n        [isReadOnly]=\"isReadOnly\"\n        (remove)=\"removeEntry($event)\"\n        [cartIsLoading]=\"cartIsLoading\"\n        (update)=\"updateEntry($event)\"\n      >\n      </cx-cart-item>\n    </div>\n  </div>\n</div>\n"
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
    items: [{ type: Input }],
    potentialProductPromotions: [{ type: Input }],
    cartIsLoading: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CartItemListComponent.prototype.isReadOnly;
    /** @type {?} */
    CartItemListComponent.prototype.hasHeader;
    /** @type {?} */
    CartItemListComponent.prototype.items;
    /** @type {?} */
    CartItemListComponent.prototype.potentialProductPromotions;
    /** @type {?} */
    CartItemListComponent.prototype.cartIsLoading;
    /** @type {?} */
    CartItemListComponent.prototype.form;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY2FydC9jYXJ0LXNoYXJlZC9jYXJ0LWl0ZW0tbGlzdC9jYXJ0LWl0ZW0tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFtQixNQUFNLGlCQUFpQixDQUFDO0FBTy9ELE1BQU0sT0FBTyxxQkFBcUI7Ozs7O0lBa0JoQyxZQUFzQixXQUF3QixFQUFZLEVBQWU7UUFBbkQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBWSxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBaEJ6RSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBR25CLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFHakIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUduQiwrQkFBMEIsR0FBc0IsRUFBRSxDQUFDO1FBR25ELGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRXRCLFNBQUksR0FBYyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUV3QyxDQUFDOzs7O0lBRTdFLFFBQVE7UUFDTixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtrQkFDbEIsRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTztZQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsb0JBQW9C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T25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ2FydFNlcnZpY2UsIFByb21vdGlvblJlc3VsdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi4vY2FydC1pdGVtL2NhcnQtaXRlbS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jYXJ0LWl0ZW0tbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJ0LWl0ZW0tbGlzdC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENhcnRJdGVtTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGlzUmVhZE9ubHkgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBoYXNIZWFkZXIgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIGl0ZW1zOiBJdGVtW10gPSBbXTtcblxuICBASW5wdXQoKVxuICBwb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9uczogUHJvbW90aW9uUmVzdWx0W10gPSBbXTtcblxuICBASW5wdXQoKVxuICBjYXJ0SXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgZm9ybTogRm9ybUdyb3VwID0gdGhpcy5mYi5ncm91cCh7fSk7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSwgcHJvdGVjdGVkIGZiOiBGb3JtQnVpbGRlcikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBjb25zdCB7IGNvZGUgfSA9IGl0ZW0ucHJvZHVjdDtcbiAgICAgIGlmICghdGhpcy5mb3JtLmNvbnRyb2xzW2NvZGVdKSB7XG4gICAgICAgIHRoaXMuZm9ybS5zZXRDb250cm9sKGNvZGUsIHRoaXMuY3JlYXRlRW50cnlGb3JtR3JvdXAoaXRlbSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZW50cnlGb3JtID0gdGhpcy5mb3JtLmNvbnRyb2xzW2NvZGVdIGFzIEZvcm1Hcm91cDtcbiAgICAgICAgZW50cnlGb3JtLmNvbnRyb2xzLnF1YW50aXR5LnNldFZhbHVlKGl0ZW0ucXVhbnRpdHkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlRW50cnkoaXRlbTogSXRlbSk6IHZvaWQge1xuICAgIHRoaXMuY2FydFNlcnZpY2UucmVtb3ZlRW50cnkoaXRlbSk7XG4gICAgZGVsZXRlIHRoaXMuZm9ybS5jb250cm9sc1tpdGVtLnByb2R1Y3QuY29kZV07XG4gIH1cblxuICB1cGRhdGVFbnRyeSh7XG4gICAgaXRlbSxcbiAgICB1cGRhdGVkUXVhbnRpdHksXG4gIH06IHtcbiAgICBpdGVtOiBhbnk7XG4gICAgdXBkYXRlZFF1YW50aXR5OiBudW1iZXI7XG4gIH0pOiB2b2lkIHtcbiAgICB0aGlzLmNhcnRTZXJ2aWNlLnVwZGF0ZUVudHJ5KGl0ZW0uZW50cnlOdW1iZXIsIHVwZGF0ZWRRdWFudGl0eSk7XG4gIH1cblxuICBnZXRQb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9uc0Zvckl0ZW0oaXRlbTogSXRlbSk6IFByb21vdGlvblJlc3VsdFtdIHtcbiAgICBjb25zdCBlbnRyeVByb21vdGlvbnM6IFByb21vdGlvblJlc3VsdFtdID0gW107XG4gICAgaWYgKFxuICAgICAgdGhpcy5wb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9ucyAmJlxuICAgICAgdGhpcy5wb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9ucy5sZW5ndGggPiAwXG4gICAgKSB7XG4gICAgICBmb3IgKGNvbnN0IHByb21vdGlvbiBvZiB0aGlzLnBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9tb3Rpb24uZGVzY3JpcHRpb24gJiZcbiAgICAgICAgICBwcm9tb3Rpb24uY29uc3VtZWRFbnRyaWVzICYmXG4gICAgICAgICAgcHJvbW90aW9uLmNvbnN1bWVkRW50cmllcy5sZW5ndGggPiAwXG4gICAgICAgICkge1xuICAgICAgICAgIGZvciAoY29uc3QgY29uc3VtZWRFbnRyeSBvZiBwcm9tb3Rpb24uY29uc3VtZWRFbnRyaWVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0NvbnN1bWVkQnlFbnRyeShjb25zdW1lZEVudHJ5LCBpdGVtKSkge1xuICAgICAgICAgICAgICBlbnRyeVByb21vdGlvbnMucHVzaChwcm9tb3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZW50cnlQcm9tb3Rpb25zO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVFbnRyeUZvcm1Hcm91cChlbnRyeSk6IEZvcm1Hcm91cCB7XG4gICAgcmV0dXJuIHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgZW50cnlOdW1iZXI6IGVudHJ5LmVudHJ5TnVtYmVyLFxuICAgICAgcXVhbnRpdHk6IGVudHJ5LnF1YW50aXR5LFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0NvbnN1bWVkQnlFbnRyeShjb25zdW1lZEVudHJ5OiBhbnksIGVudHJ5OiBhbnkpOiBib29sZWFuIHtcbiAgICBjb25zdCBjb25zdW1lbmRFbnRyeU51bWJlciA9IGNvbnN1bWVkRW50cnkub3JkZXJFbnRyeU51bWJlcjtcbiAgICBpZiAoZW50cnkuZW50cmllcyAmJiBlbnRyeS5lbnRyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAoY29uc3Qgc3ViRW50cnkgb2YgZW50cnkuZW50cmllcykge1xuICAgICAgICBpZiAoc3ViRW50cnkuZW50cnlOdW1iZXIgPT09IGNvbnN1bWVuZEVudHJ5TnVtYmVyKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbnN1bWVuZEVudHJ5TnVtYmVyID09PSBlbnRyeS5lbnRyeU51bWJlcjtcbiAgICB9XG4gIH1cbn1cbiJdfQ==