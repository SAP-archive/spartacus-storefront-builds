/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from '@angular/core';
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
                template: "<div *ngIf=\"hasHeader\" class=\"d-none d-md-block d-lg-block d-xl-block\">\n  <div class=\"cx-item-list-header row\">\n    <div class=\"cx-item-list-desc col-md-5 col-lg-5 col-xl-6\">\n      {{ 'cartItems.description' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-price col-md-3 col-lg-2 col-xl-2\">\n      {{ 'cartItems.itemPrice' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-qty col-md-2 col-lg-3 col-xl-2\">\n      {{ 'cartItems.quantity' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n      {{ 'cartItems.total' | cxTranslate }}\n    </div>\n  </div>\n</div>\n\n<div [formGroup]=\"form\">\n  <div class=\"cx-item-list-row\" *ngFor=\"let item of items\">\n    <div class=\"cx-item-list-items\">\n      <cx-cart-item\n        [parent]=\"form.controls[item.product.code]\"\n        [item]=\"item\"\n        [potentialProductPromotions]=\"\n          getPotentialProductPromotionsForItem(item)\n        \"\n        [isReadOnly]=\"isReadOnly\"\n        (remove)=\"removeEntry($event)\"\n        [cartIsLoading]=\"cartIsLoading\"\n        (update)=\"updateEntry($event)\"\n      >\n      </cx-cart-item>\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-item-list-header{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);margin:var(--cx-margin,0);padding:var(--cx-padding,1.125rem 0);text-transform:var(--cx-text-transform,uppercase);color:var(--cx-color,var(--cx-g-color-secondary));border-width:var(--cx-border-width,0 0 1px 0);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light))}.cx-item-list-desc{text-align:var(--cx-text-align,left);padding:var(--cx-padding,0)}.cx-item-list-price,.cx-item-list-qty{text-align:var(--cx-text-align,center)}@media (max-width:991.98px){.cx-item-list-price,.cx-item-list-qty{text-align:var(--cx-text-align,left)}}.cx-item-list-total{text-align:var(--cx-text-align,right);padding:var(--cx-padding,0)}.cx-item-list-row{padding:var(--cx-padding,1.25rem 0);border-width:var(--cx-border-width,0 0 1px 0);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light))}@media (max-width:991.98px){.cx-item-list-header{padding:var(--cx-padding,1.125rem 2.5rem)}.cx-item-list-items{padding:var(--cx-padding,0 2.5rem)}}@media (max-width:767.98px){.cx-item-list-items{padding:var(--cx-padding,0 0 0 1rem)}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2NhcnQvY2FydC1zaGFyZWQvY2FydC1pdGVtLWxpc3QvY2FydC1pdGVtLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLFdBQVcsRUFBbUIsTUFBTSxpQkFBaUIsQ0FBQztBQVUvRCxNQUFNLE9BQU8scUJBQXFCOzs7OztJQWtCaEMsWUFBc0IsV0FBd0IsRUFBWSxFQUFlO1FBQW5ELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVksT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQWhCekUsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUduQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBR2pCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFHbkIsK0JBQTBCLEdBQXNCLEVBQUUsQ0FBQztRQUduRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUV0QixTQUFJLEdBQWMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFd0MsQ0FBQzs7OztJQUU3RSxRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7a0JBQ2xCLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU87WUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElB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aW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQ2FydFNlcnZpY2UsIFByb21vdGlvblJlc3VsdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmltcG9ydCB7IEl0ZW0gfSBmcm9tICcuLi8uLi9jYXJ0LXNoYXJlZC9jYXJ0LWl0ZW0vY2FydC1pdGVtLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNhcnQtaXRlbS1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcnQtaXRlbS1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FydC1pdGVtLWxpc3QuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydEl0ZW1MaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgaXNSZWFkT25seSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGhhc0hlYWRlciA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgaXRlbXM6IEl0ZW1bXSA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIHBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zOiBQcm9tb3Rpb25SZXN1bHRbXSA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIGNhcnRJc0xvYWRpbmcgPSBmYWxzZTtcblxuICBmb3JtOiBGb3JtR3JvdXAgPSB0aGlzLmZiLmdyb3VwKHt9KTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLCBwcm90ZWN0ZWQgZmI6IEZvcm1CdWlsZGVyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGNvbnN0IHsgY29kZSB9ID0gaXRlbS5wcm9kdWN0O1xuICAgICAgaWYgKCF0aGlzLmZvcm0uY29udHJvbHNbY29kZV0pIHtcbiAgICAgICAgdGhpcy5mb3JtLnNldENvbnRyb2woY29kZSwgdGhpcy5jcmVhdGVFbnRyeUZvcm1Hcm91cChpdGVtKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBlbnRyeUZvcm0gPSB0aGlzLmZvcm0uY29udHJvbHNbY29kZV0gYXMgRm9ybUdyb3VwO1xuICAgICAgICBlbnRyeUZvcm0uY29udHJvbHMucXVhbnRpdHkuc2V0VmFsdWUoaXRlbS5xdWFudGl0eSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVFbnRyeShpdGVtOiBJdGVtKTogdm9pZCB7XG4gICAgdGhpcy5jYXJ0U2VydmljZS5yZW1vdmVFbnRyeShpdGVtKTtcbiAgICBkZWxldGUgdGhpcy5mb3JtLmNvbnRyb2xzW2l0ZW0ucHJvZHVjdC5jb2RlXTtcbiAgfVxuXG4gIHVwZGF0ZUVudHJ5KHtcbiAgICBpdGVtLFxuICAgIHVwZGF0ZWRRdWFudGl0eSxcbiAgfToge1xuICAgIGl0ZW06IGFueTtcbiAgICB1cGRhdGVkUXVhbnRpdHk6IG51bWJlcjtcbiAgfSk6IHZvaWQge1xuICAgIHRoaXMuY2FydFNlcnZpY2UudXBkYXRlRW50cnkoaXRlbS5lbnRyeU51bWJlciwgdXBkYXRlZFF1YW50aXR5KTtcbiAgfVxuXG4gIGdldFBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zRm9ySXRlbShpdGVtOiBJdGVtKTogUHJvbW90aW9uUmVzdWx0W10ge1xuICAgIGNvbnN0IGVudHJ5UHJvbW90aW9uczogUHJvbW90aW9uUmVzdWx0W10gPSBbXTtcbiAgICBpZiAoXG4gICAgICB0aGlzLnBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zICYmXG4gICAgICB0aGlzLnBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zLmxlbmd0aCA+IDBcbiAgICApIHtcbiAgICAgIGZvciAoY29uc3QgcHJvbW90aW9uIG9mIHRoaXMucG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnMpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb21vdGlvbi5kZXNjcmlwdGlvbiAmJlxuICAgICAgICAgIHByb21vdGlvbi5jb25zdW1lZEVudHJpZXMgJiZcbiAgICAgICAgICBwcm9tb3Rpb24uY29uc3VtZWRFbnRyaWVzLmxlbmd0aCA+IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBjb25zdW1lZEVudHJ5IG9mIHByb21vdGlvbi5jb25zdW1lZEVudHJpZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ29uc3VtZWRCeUVudHJ5KGNvbnN1bWVkRW50cnksIGl0ZW0pKSB7XG4gICAgICAgICAgICAgIGVudHJ5UHJvbW90aW9ucy5wdXNoKHByb21vdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbnRyeVByb21vdGlvbnM7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUVudHJ5Rm9ybUdyb3VwKGVudHJ5KTogRm9ybUdyb3VwIHtcbiAgICByZXR1cm4gdGhpcy5mYi5ncm91cCh7XG4gICAgICBlbnRyeU51bWJlcjogZW50cnkuZW50cnlOdW1iZXIsXG4gICAgICBxdWFudGl0eTogZW50cnkucXVhbnRpdHksXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGlzQ29uc3VtZWRCeUVudHJ5KGNvbnN1bWVkRW50cnk6IGFueSwgZW50cnk6IGFueSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNvbnN1bWVuZEVudHJ5TnVtYmVyID0gY29uc3VtZWRFbnRyeS5vcmRlckVudHJ5TnVtYmVyO1xuICAgIGlmIChlbnRyeS5lbnRyaWVzICYmIGVudHJ5LmVudHJpZXMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChjb25zdCBzdWJFbnRyeSBvZiBlbnRyeS5lbnRyaWVzKSB7XG4gICAgICAgIGlmIChzdWJFbnRyeS5lbnRyeU51bWJlciA9PT0gY29uc3VtZW5kRW50cnlOdW1iZXIpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY29uc3VtZW5kRW50cnlOdW1iZXIgPT09IGVudHJ5LmVudHJ5TnVtYmVyO1xuICAgIH1cbiAgfVxufVxuIl19