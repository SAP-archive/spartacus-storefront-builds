/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService, FeatureConfigService, PromotionLocation, SelectiveCartService, } from '@spartacus/core';
import { map, startWith } from 'rxjs/operators';
export class CartItemListComponent {
    /**
     * @param {?} cartService
     * @param {?=} selectiveCartService
     * @param {?=} featureConfig
     */
    constructor(cartService, selectiveCartService, featureConfig) {
        this.cartService = cartService;
        this.selectiveCartService = selectiveCartService;
        this.featureConfig = featureConfig;
        this.readonly = false;
        this.hasHeader = true;
        this.options = {
            isSaveForLater: false,
            optionalBtn: null,
        };
        this._items = [];
        this.potentialProductPromotions = [];
        this.promotionLocation = PromotionLocation.ActiveCart;
    }
    /**
     * @param {?} items
     * @return {?}
     */
    set items(items) {
        this.resolveItems(items);
        this.createForm();
    }
    /**
     * @return {?}
     */
    get items() {
        return this._items;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set setLoading(value) {
        if (!this.readonly) {
            // Whenver the cart is loading, we disable the complete form
            // to avoid any user interaction with the cart.
            value
                ? this.form.disable({ emitEvent: false })
                : this.form.enable({ emitEvent: false });
        }
    }
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
     * The items we're getting form the input do not have a consistent model.
     * In case of a `consignmentEntry`, we need to normalize the data from the orderEntry.
     * @private
     * @param {?} items
     * @return {?}
     */
    resolveItems(items) {
        if (items.every((/**
         * @param {?} item
         * @return {?}
         */
        item => item.hasOwnProperty('orderEntry')))) {
            this._items = items.map((/**
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
            this._items = items;
        }
    }
    /**
     * @private
     * @return {?}
     */
    createForm() {
        this.form = new FormGroup({});
        this._items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            const { code } = item.product;
            /** @type {?} */
            const group = new FormGroup({
                entryNumber: new FormControl(((/** @type {?} */ (item))).entryNumber),
                quantity: new FormControl(item.quantity, { updateOn: 'blur' }),
            });
            if (!item.updateable || this.readonly) {
                group.disable();
            }
            this.form.addControl(code, group);
        }));
    }
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
     * @param {?} item
     * @return {?}
     */
    getControl(item) {
        return this.form.get(item.product.code).valueChanges.pipe(
        // tslint:disable-next-line:deprecation
        startWith(null), map((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            if (value) {
                this.cartService.updateEntry(value.entryNumber, value.quantity);
            }
        })), map((/**
         * @return {?}
         */
        () => (/** @type {?} */ (this.form.get(item.product.code))))));
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
                template: "<div *ngIf=\"hasHeader\" class=\"d-none d-md-block d-lg-block d-xl-block\">\n  <div class=\"cx-item-list-header row\">\n    <div class=\"cx-item-list-desc col-md-5 col-lg-5 col-xl-6\">\n      {{ 'cartItems.description' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-price col-md-3 col-lg-2 col-xl-2\">\n      {{ 'cartItems.itemPrice' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-qty col-md-2 col-lg-3 col-xl-2\">\n      {{ 'cartItems.quantity' | cxTranslate }}\n    </div>\n\n    <ng-container\n      *ngIf=\"\n        isSaveForLaterEnabled() && options.isSaveForLater;\n        else totalHeader\n      \"\n    >\n      <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n        {{ 'saveForLaterItems.stock' | cxTranslate }}\n      </div>\n    </ng-container>\n  </div>\n</div>\n\n<div class=\"cx-item-list-row\" *ngFor=\"let item of items; let i = index\">\n  <div\n    class=\"cx-item-list-items\"\n    *ngIf=\"getControl(item) | async as control\"\n    [class.is-changed]=\"control.get('quantity').dirty\"\n  >\n    <cx-cart-item\n      [item]=\"item\"\n      [quantityControl]=\"control.get('quantity')\"\n      [readonly]=\"readonly\"\n      [potentialProductPromotions]=\"getPotentialProductPromotionsForItem(item)\"\n      [promotionLocation]=\"promotionLocation\"\n      [options]=\"options\"\n    >\n    </cx-cart-item>\n  </div>\n</div>\n\n<ng-template #totalHeader>\n  <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n    {{ 'cartItems.total' | cxTranslate }}\n  </div>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CartItemListComponent.ctorParameters = () => [
    { type: CartService },
    { type: SelectiveCartService },
    { type: FeatureConfigService }
];
CartItemListComponent.propDecorators = {
    readonly: [{ type: Input }],
    hasHeader: [{ type: Input }],
    options: [{ type: Input }],
    items: [{ type: Input, args: ['items',] }],
    potentialProductPromotions: [{ type: Input }],
    promotionLocation: [{ type: Input }],
    setLoading: [{ type: Input, args: ['cartIsLoading',] }]
};
if (false) {
    /** @type {?} */
    CartItemListComponent.prototype.readonly;
    /** @type {?} */
    CartItemListComponent.prototype.hasHeader;
    /** @type {?} */
    CartItemListComponent.prototype.options;
    /**
     * @type {?}
     * @private
     */
    CartItemListComponent.prototype._items;
    /** @type {?} */
    CartItemListComponent.prototype.form;
    /** @type {?} */
    CartItemListComponent.prototype.potentialProductPromotions;
    /** @type {?} */
    CartItemListComponent.prototype.promotionLocation;
    /**
     * @type {?}
     * @protected
     */
    CartItemListComponent.prototype.cartService;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LXNoYXJlZC9jYXJ0LWl0ZW0tbGlzdC9jYXJ0LWl0ZW0tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUNMLFdBQVcsRUFFWCxvQkFBb0IsRUFDcEIsaUJBQWlCLEVBRWpCLG9CQUFvQixHQUNyQixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFXaEQsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7O0lBbURoQyxZQUNZLFdBQXdCLEVBQ3hCLG9CQUEyQyxFQUM3QyxhQUFvQztRQUZsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXVCO1FBQzdDLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtRQXJEckMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVqQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWpCLFlBQU8sR0FBNkI7WUFDM0MsY0FBYyxFQUFFLEtBQUs7WUFDckIsV0FBVyxFQUFFLElBQUk7U0FDbEIsQ0FBQztRQUVNLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFlbkIsK0JBQTBCLEdBQXNCLEVBQUUsQ0FBQztRQUNuRCxzQkFBaUIsR0FBc0IsaUJBQWlCLENBQUMsVUFBVSxDQUFDO0lBNkIxRSxDQUFDOzs7OztJQTFDSixJQUlJLEtBQUssQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxZQUFZLENB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YXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBDYXJ0U2VydmljZSxcbiAgQ29uc2lnbm1lbnRFbnRyeSxcbiAgRmVhdHVyZUNvbmZpZ1NlcnZpY2UsXG4gIFByb21vdGlvbkxvY2F0aW9uLFxuICBQcm9tb3Rpb25SZXN1bHQsXG4gIFNlbGVjdGl2ZUNhcnRTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzdGFydFdpdGggfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBDYXJ0SXRlbUNvbXBvbmVudE9wdGlvbnMsXG4gIEl0ZW0sXG59IGZyb20gJy4uL2NhcnQtaXRlbS9jYXJ0LWl0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2FydC1pdGVtLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FydC1pdGVtLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydEl0ZW1MaXN0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgcmVhZG9ubHkgPSBmYWxzZTtcblxuICBASW5wdXQoKSBoYXNIZWFkZXIgPSB0cnVlO1xuXG4gIEBJbnB1dCgpIG9wdGlvbnM6IENhcnRJdGVtQ29tcG9uZW50T3B0aW9ucyA9IHtcbiAgICBpc1NhdmVGb3JMYXRlcjogZmFsc2UsXG4gICAgb3B0aW9uYWxCdG46IG51bGwsXG4gIH07XG5cbiAgcHJpdmF0ZSBfaXRlbXM6IEl0ZW1bXSA9IFtdO1xuICBmb3JtOiBGb3JtR3JvdXA7XG5cbiAgQElucHV0KCdpdGVtcycpXG4gIC8vIFRPRE86IGN1cnJlbnRseSB3ZSdyZSBnZXR0aW5nIGEgbmV3IGFycmF5IG9mIGl0ZW1zIGlmIHRoZSBjYXJ0IGNoYW5nZXMuXG4gIC8vIHByZXR0eSBhbm5veWluZyBhcyBpdCBmb3JjZXMgYSByZXBhaW50IG9uIHRoZSBzY3JlZW4sXG4gIC8vIHdoaWNoIGlzIG5vdGljYWJsZSBpbiB0aGUgVUkuXG4gIHNldCBpdGVtcyhpdGVtczogSXRlbVtdKSB7XG4gICAgdGhpcy5yZXNvbHZlSXRlbXMoaXRlbXMpO1xuICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xuICB9XG4gIGdldCBpdGVtcygpOiBJdGVtW10ge1xuICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgfVxuXG4gIEBJbnB1dCgpIHBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zOiBQcm9tb3Rpb25SZXN1bHRbXSA9IFtdO1xuICBASW5wdXQoKSBwcm9tb3Rpb25Mb2NhdGlvbjogUHJvbW90aW9uTG9jYXRpb24gPSBQcm9tb3Rpb25Mb2NhdGlvbi5BY3RpdmVDYXJ0O1xuXG4gIEBJbnB1dCgnY2FydElzTG9hZGluZycpIHNldCBzZXRMb2FkaW5nKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKCF0aGlzLnJlYWRvbmx5KSB7XG4gICAgICAvLyBXaGVudmVyIHRoZSBjYXJ0IGlzIGxvYWRpbmcsIHdlIGRpc2FibGUgdGhlIGNvbXBsZXRlIGZvcm1cbiAgICAgIC8vIHRvIGF2b2lkIGFueSB1c2VyIGludGVyYWN0aW9uIHdpdGggdGhlIGNhcnQuXG4gICAgICB2YWx1ZVxuICAgICAgICA/IHRoaXMuZm9ybS5kaXNhYmxlKHsgZW1pdEV2ZW50OiBmYWxzZSB9KVxuICAgICAgICA6IHRoaXMuZm9ybS5lbmFibGUoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBzZWxlY3RpdmVDYXJ0U2VydmljZTogU2VsZWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgZmVhdHVyZUNvbmZpZzogRmVhdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKTtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS41XG4gICAqIEFkZCBzZWxlY3RpdmVDYXJ0U2VydmljZSBhdXRoU2VydmljZSByb3V0aW5nU2VydmljZSBhbmQgZmVhdHVyZUNvbmZpZyBmb3Igc2F2ZSBmb3IgbGF0ZXIuXG4gICAqIFJlbW92ZSBpc3N1ZTogIzU5NThcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgc2VsZWN0aXZlQ2FydFNlcnZpY2U/OiBTZWxlY3RpdmVDYXJ0U2VydmljZSxcbiAgICBwcml2YXRlIGZlYXR1cmVDb25maWc/OiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgLy9UT0RPIHJlbW92ZSBmZWF0dXJlIGZsYWcgZm9yICM1OTU4XG4gIGlzU2F2ZUZvckxhdGVyRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5mZWF0dXJlQ29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5mZWF0dXJlQ29uZmlnLmlzRW5hYmxlZCgnc2F2ZUZvckxhdGVyJyk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvL1RPRE8gcmVtb3ZlIGZlYXR1cmUgZmxhZyBmb3IgIzU5NThcblxuICAvKipcbiAgICogVGhlIGl0ZW1zIHdlJ3JlIGdldHRpbmcgZm9ybSB0aGUgaW5wdXQgZG8gbm90IGhhdmUgYSBjb25zaXN0ZW50IG1vZGVsLlxuICAgKiBJbiBjYXNlIG9mIGEgYGNvbnNpZ25tZW50RW50cnlgLCB3ZSBuZWVkIHRvIG5vcm1hbGl6ZSB0aGUgZGF0YSBmcm9tIHRoZSBvcmRlckVudHJ5LlxuICAgKi9cbiAgcHJpdmF0ZSByZXNvbHZlSXRlbXMoaXRlbXM6IEl0ZW1bXSk6IHZvaWQge1xuICAgIGlmIChpdGVtcy5ldmVyeShpdGVtID0+IGl0ZW0uaGFzT3duUHJvcGVydHkoJ29yZGVyRW50cnknKSkpIHtcbiAgICAgIHRoaXMuX2l0ZW1zID0gaXRlbXMubWFwKGNvbnNpZ25tZW50RW50cnkgPT4ge1xuICAgICAgICBjb25zdCBlbnRyeSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAge30sXG4gICAgICAgICAgKGNvbnNpZ25tZW50RW50cnkgYXMgQ29uc2lnbm1lbnRFbnRyeSkub3JkZXJFbnRyeVxuICAgICAgICApO1xuICAgICAgICBlbnRyeS5xdWFudGl0eSA9IGNvbnNpZ25tZW50RW50cnkucXVhbnRpdHk7XG4gICAgICAgIHJldHVybiBlbnRyeTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRm9ybSgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKHt9KTtcbiAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgeyBjb2RlIH0gPSBpdGVtLnByb2R1Y3Q7XG4gICAgICBjb25zdCBncm91cCA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgICBlbnRyeU51bWJlcjogbmV3IEZvcm1Db250cm9sKCg8YW55Pml0ZW0pLmVudHJ5TnVtYmVyKSxcbiAgICAgICAgcXVhbnRpdHk6IG5ldyBGb3JtQ29udHJvbChpdGVtLnF1YW50aXR5LCB7IHVwZGF0ZU9uOiAnYmx1cicgfSksXG4gICAgICB9KTtcbiAgICAgIGlmICghaXRlbS51cGRhdGVhYmxlIHx8IHRoaXMucmVhZG9ubHkpIHtcbiAgICAgICAgZ3JvdXAuZGlzYWJsZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5mb3JtLmFkZENvbnRyb2woY29kZSwgZ3JvdXApO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlRW50cnkoaXRlbTogSXRlbSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNlbGVjdGl2ZUNhcnRTZXJ2aWNlICYmIHRoaXMub3B0aW9ucy5pc1NhdmVGb3JMYXRlcikge1xuICAgICAgdGhpcy5zZWxlY3RpdmVDYXJ0U2VydmljZS5yZW1vdmVFbnRyeShpdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYXJ0U2VydmljZS5yZW1vdmVFbnRyeShpdGVtKTtcbiAgICB9XG4gICAgZGVsZXRlIHRoaXMuZm9ybS5jb250cm9sc1tpdGVtLnByb2R1Y3QuY29kZV07XG4gIH1cblxuICBnZXRDb250cm9sKGl0ZW06IEl0ZW0pOiBPYnNlcnZhYmxlPEZvcm1Hcm91cD4ge1xuICAgIHJldHVybiB0aGlzLmZvcm0uZ2V0KGl0ZW0ucHJvZHVjdC5jb2RlKS52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkZXByZWNhdGlvblxuICAgICAgc3RhcnRXaXRoKG51bGwpLFxuICAgICAgbWFwKHZhbHVlID0+IHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5jYXJ0U2VydmljZS51cGRhdGVFbnRyeSh2YWx1ZS5lbnRyeU51bWJlciwgdmFsdWUucXVhbnRpdHkpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgoKSA9PiA8Rm9ybUdyb3VwPnRoaXMuZm9ybS5nZXQoaXRlbS5wcm9kdWN0LmNvZGUpKVxuICAgICk7XG4gIH1cblxuICBnZXRQb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9uc0Zvckl0ZW0oaXRlbTogSXRlbSk6IFByb21vdGlvblJlc3VsdFtdIHtcbiAgICBjb25zdCBlbnRyeVByb21vdGlvbnM6IFByb21vdGlvblJlc3VsdFtdID0gW107XG4gICAgLy9kb24ndCBzaG93IHByb21vdGlvbnMgaW4gc2F2ZWZvcmxhdGVyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc1NhdmVGb3JMYXRlcikge1xuICAgICAgcmV0dXJuIGVudHJ5UHJvbW90aW9ucztcbiAgICB9XG4gICAgaWYgKFxuICAgICAgdGhpcy5wb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9ucyAmJlxuICAgICAgdGhpcy5wb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9ucy5sZW5ndGggPiAwXG4gICAgKSB7XG4gICAgICBmb3IgKGNvbnN0IHByb21vdGlvbiBvZiB0aGlzLnBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9tb3Rpb24uZGVzY3JpcHRpb24gJiZcbiAgICAgICAgICBwcm9tb3Rpb24uY29uc3VtZWRFbnRyaWVzICYmXG4gICAgICAgICAgcHJvbW90aW9uLmNvbnN1bWVkRW50cmllcy5sZW5ndGggPiAwXG4gICAgICAgICkge1xuICAgICAgICAgIGZvciAoY29uc3QgY29uc3VtZWRFbnRyeSBvZiBwcm9tb3Rpb24uY29uc3VtZWRFbnRyaWVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0NvbnN1bWVkQnlFbnRyeShjb25zdW1lZEVudHJ5LCBpdGVtKSkge1xuICAgICAgICAgICAgICBlbnRyeVByb21vdGlvbnMucHVzaChwcm9tb3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZW50cnlQcm9tb3Rpb25zO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0NvbnN1bWVkQnlFbnRyeShjb25zdW1lZEVudHJ5OiBhbnksIGVudHJ5OiBhbnkpOiBib29sZWFuIHtcbiAgICBjb25zdCBjb25zdW1lZEVudHJ5TnVtYmVyID0gY29uc3VtZWRFbnRyeS5vcmRlckVudHJ5TnVtYmVyO1xuICAgIGlmIChlbnRyeS5lbnRyaWVzICYmIGVudHJ5LmVudHJpZXMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChjb25zdCBzdWJFbnRyeSBvZiBlbnRyeS5lbnRyaWVzKSB7XG4gICAgICAgIGlmIChzdWJFbnRyeS5lbnRyeU51bWJlciA9PT0gY29uc3VtZWRFbnRyeU51bWJlcikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjb25zdW1lZEVudHJ5TnVtYmVyID09PSBlbnRyeS5lbnRyeU51bWJlcjtcbiAgICB9XG4gIH1cbn1cbiJdfQ==