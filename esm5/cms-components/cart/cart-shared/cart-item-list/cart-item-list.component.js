/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService, FeatureConfigService, PromotionLocation, SelectiveCartService, } from '@spartacus/core';
import { map, startWith } from 'rxjs/operators';
var CartItemListComponent = /** @class */ (function () {
    function CartItemListComponent(cartService, selectiveCartService, featureConfig) {
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
    Object.defineProperty(CartItemListComponent.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return this._items;
        },
        set: /**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            this.resolveItems(items);
            this.createForm();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartItemListComponent.prototype, "setLoading", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!this.readonly) {
                // Whenver the cart is loading, we disable the complete form
                // to avoid any user interaction with the cart.
                value
                    ? this.form.disable({ emitEvent: false })
                    : this.form.enable({ emitEvent: false });
            }
        },
        enumerable: true,
        configurable: true
    });
    //TODO remove feature flag for #5958
    //TODO remove feature flag for #5958
    /**
     * @return {?}
     */
    CartItemListComponent.prototype.isSaveForLaterEnabled = 
    //TODO remove feature flag for #5958
    /**
     * @return {?}
     */
    function () {
        if (this.featureConfig) {
            return this.featureConfig.isEnabled('saveForLater');
        }
        return false;
    };
    //TODO remove feature flag for #5958
    /**
     * The items we're getting form the input do not have a consistent model.
     * In case of a `consignmentEntry`, we need to normalize the data from the orderEntry.
     */
    //TODO remove feature flag for #5958
    /**
     * The items we're getting form the input do not have a consistent model.
     * In case of a `consignmentEntry`, we need to normalize the data from the orderEntry.
     * @private
     * @param {?} items
     * @return {?}
     */
    CartItemListComponent.prototype.resolveItems = 
    //TODO remove feature flag for #5958
    /**
     * The items we're getting form the input do not have a consistent model.
     * In case of a `consignmentEntry`, we need to normalize the data from the orderEntry.
     * @private
     * @param {?} items
     * @return {?}
     */
    function (items) {
        if (items.every((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.hasOwnProperty('orderEntry'); }))) {
            this._items = items.map((/**
             * @param {?} consignmentEntry
             * @return {?}
             */
            function (consignmentEntry) {
                /** @type {?} */
                var entry = Object.assign({}, ((/** @type {?} */ (consignmentEntry))).orderEntry);
                entry.quantity = consignmentEntry.quantity;
                return entry;
            }));
        }
        else {
            this._items = items;
        }
    };
    /**
     * @private
     * @return {?}
     */
    CartItemListComponent.prototype.createForm = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.form = new FormGroup({});
        this._items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            var code = item.product.code;
            /** @type {?} */
            var group = new FormGroup({
                entryNumber: new FormControl(((/** @type {?} */ (item))).entryNumber),
                quantity: new FormControl(item.quantity, { updateOn: 'blur' }),
            });
            if (!item.updateable || _this.readonly) {
                group.disable();
            }
            _this.form.addControl(code, group);
        }));
    };
    /**
     * @param {?} item
     * @return {?}
     */
    CartItemListComponent.prototype.removeEntry = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (this.selectiveCartService && this.options.isSaveForLater) {
            this.selectiveCartService.removeEntry(item);
        }
        else {
            this.cartService.removeEntry(item);
        }
        delete this.form.controls[item.product.code];
    };
    /**
     * @param {?} item
     * @return {?}
     */
    CartItemListComponent.prototype.getControl = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        return this.form.get(item.product.code).valueChanges.pipe(
        // tslint:disable-next-line:deprecation
        startWith(null), map((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                _this.cartService.updateEntry(value.entryNumber, value.quantity);
            }
        })), map((/**
         * @return {?}
         */
        function () { return (/** @type {?} */ (_this.form.get(item.product.code))); })));
    };
    /**
     * @param {?} item
     * @return {?}
     */
    CartItemListComponent.prototype.getPotentialProductPromotionsForItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var e_1, _a, e_2, _b;
        /** @type {?} */
        var entryPromotions = [];
        //don't show promotions in saveforlater
        if (this.options.isSaveForLater) {
            return entryPromotions;
        }
        if (this.potentialProductPromotions &&
            this.potentialProductPromotions.length > 0) {
            try {
                for (var _c = tslib_1.__values(this.potentialProductPromotions), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var promotion = _d.value;
                    if (promotion.description &&
                        promotion.consumedEntries &&
                        promotion.consumedEntries.length > 0) {
                        try {
                            for (var _e = (e_2 = void 0, tslib_1.__values(promotion.consumedEntries)), _f = _e.next(); !_f.done; _f = _e.next()) {
                                var consumedEntry = _f.value;
                                if (this.isConsumedByEntry(consumedEntry, item)) {
                                    entryPromotions.push(promotion);
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return entryPromotions;
    };
    /**
     * @private
     * @param {?} consumedEntry
     * @param {?} entry
     * @return {?}
     */
    CartItemListComponent.prototype.isConsumedByEntry = /**
     * @private
     * @param {?} consumedEntry
     * @param {?} entry
     * @return {?}
     */
    function (consumedEntry, entry) {
        var e_3, _a;
        /** @type {?} */
        var consumedEntryNumber = consumedEntry.orderEntryNumber;
        if (entry.entries && entry.entries.length > 0) {
            try {
                for (var _b = tslib_1.__values(entry.entries), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var subEntry = _c.value;
                    if (subEntry.entryNumber === consumedEntryNumber) {
                        return true;
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return false;
        }
        else {
            return consumedEntryNumber === entry.entryNumber;
        }
    };
    CartItemListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-cart-item-list',
                    template: "<div *ngIf=\"hasHeader\" class=\"d-none d-md-block d-lg-block d-xl-block\">\n  <div class=\"cx-item-list-header row\">\n    <div class=\"cx-item-list-desc col-md-5 col-lg-5 col-xl-6\">\n      {{ 'cartItems.description' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-price col-md-3 col-lg-2 col-xl-2\">\n      {{ 'cartItems.itemPrice' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-qty col-md-2 col-lg-3 col-xl-2\">\n      {{ 'cartItems.quantity' | cxTranslate }}\n    </div>\n\n    <ng-container\n      *ngIf=\"\n        isSaveForLaterEnabled() && options.isSaveForLater;\n        else totalHeader\n      \"\n    >\n      <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n        {{ 'saveForLaterItems.stock' | cxTranslate }}\n      </div>\n    </ng-container>\n  </div>\n</div>\n\n<div class=\"cx-item-list-row\" *ngFor=\"let item of items; let i = index\">\n  <div\n    class=\"cx-item-list-items\"\n    *ngIf=\"getControl(item) | async as control\"\n    [class.is-changed]=\"control.get('quantity').dirty\"\n  >\n    <cx-cart-item\n      [item]=\"item\"\n      [quantityControl]=\"control.get('quantity')\"\n      [readonly]=\"readonly\"\n      [potentialProductPromotions]=\"getPotentialProductPromotionsForItem(item)\"\n      [promotionLocation]=\"promotionLocation\"\n      [options]=\"options\"\n    >\n    </cx-cart-item>\n  </div>\n</div>\n\n<ng-template #totalHeader>\n  <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n    {{ 'cartItems.total' | cxTranslate }}\n  </div>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CartItemListComponent.ctorParameters = function () { return [
        { type: CartService },
        { type: SelectiveCartService },
        { type: FeatureConfigService }
    ]; };
    CartItemListComponent.propDecorators = {
        readonly: [{ type: Input }],
        hasHeader: [{ type: Input }],
        options: [{ type: Input }],
        items: [{ type: Input, args: ['items',] }],
        potentialProductPromotions: [{ type: Input }],
        promotionLocation: [{ type: Input }],
        setLoading: [{ type: Input, args: ['cartIsLoading',] }]
    };
    return CartItemListComponent;
}());
export { CartItemListComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LXNoYXJlZC9jYXJ0LWl0ZW0tbGlzdC9jYXJ0LWl0ZW0tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFDTCxXQUFXLEVBRVgsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUVqQixvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTWhEO0lBd0RFLCtCQUNZLFdBQXdCLEVBQ3hCLG9CQUEyQyxFQUM3QyxhQUFvQztRQUZsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXVCO1FBQzdDLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtRQXJEckMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVqQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWpCLFlBQU8sR0FBNkI7WUFDM0MsY0FBYyxFQUFFLEtBQUs7WUFDckIsV0FBVyxFQUFFLElBQUk7U0FDbEIsQ0FBQztRQUVNLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFlbkIsK0JBQTBCLEdBQXNCLEVBQUUsQ0FBQztRQUNuRCxzQkFBaUIsR0FBc0IsaUJBQWlCLENBQUMsVUFBVSxDQUFDO0lBNkIxRSxDQUFDO0lBMUNKLHNCQUlJLHdDQUFLOzs7O1FBSVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7Ozs7UUFW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QUFDLE9BQU87NkNBWWIsS0FBSztvQ0FDTCxLQUFLOzZCQUVMLEtBQUssU0FBQyxlQUFlOztJQXNJeEIsNEJBQUM7Q0FBQSxBQXZLRCxJQXVLQztTQWxLWSxxQkFBcUI7OztJQUNoQyx5Q0FBMEI7O0lBRTFCLDBDQUEwQjs7SUFFMUIsd0NBR0U7Ozs7O0lBRUYsdUNBQTRCOztJQUM1QixxQ0FBZ0I7O0lBY2hCLDJEQUE0RDs7SUFDNUQsa0RBQTZFOzs7OztJQTBCM0UsNENBQWtDOzs7OztJQUNsQyxxREFBcUQ7Ozs7O0lBQ3JELDhDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQ2FydFNlcnZpY2UsXG4gIENvbnNpZ25tZW50RW50cnksXG4gIEZlYXR1cmVDb25maWdTZXJ2aWNlLFxuICBQcm9tb3Rpb25Mb2NhdGlvbixcbiAgUHJvbW90aW9uUmVzdWx0LFxuICBTZWxlY3RpdmVDYXJ0U2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgQ2FydEl0ZW1Db21wb25lbnRPcHRpb25zLFxuICBJdGVtLFxufSBmcm9tICcuLi9jYXJ0LWl0ZW0vY2FydC1pdGVtLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNhcnQtaXRlbS1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcnQtaXRlbS1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENhcnRJdGVtTGlzdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHJlYWRvbmx5ID0gZmFsc2U7XG5cbiAgQElucHV0KCkgaGFzSGVhZGVyID0gdHJ1ZTtcblxuICBASW5wdXQoKSBvcHRpb25zOiBDYXJ0SXRlbUNvbXBvbmVudE9wdGlvbnMgPSB7XG4gICAgaXNTYXZlRm9yTGF0ZXI6IGZhbHNlLFxuICAgIG9wdGlvbmFsQnRuOiBudWxsLFxuICB9O1xuXG4gIHByaXZhdGUgX2l0ZW1zOiBJdGVtW10gPSBbXTtcbiAgZm9ybTogRm9ybUdyb3VwO1xuXG4gIEBJbnB1dCgnaXRlbXMnKVxuICAvLyBUT0RPOiBjdXJyZW50bHkgd2UncmUgZ2V0dGluZyBhIG5ldyBhcnJheSBvZiBpdGVtcyBpZiB0aGUgY2FydCBjaGFuZ2VzLlxuICAvLyBwcmV0dHkgYW5ub3lpbmcgYXMgaXQgZm9yY2VzIGEgcmVwYWludCBvbiB0aGUgc2NyZWVuLFxuICAvLyB3aGljaCBpcyBub3RpY2FibGUgaW4gdGhlIFVJLlxuICBzZXQgaXRlbXMoaXRlbXM6IEl0ZW1bXSkge1xuICAgIHRoaXMucmVzb2x2ZUl0ZW1zKGl0ZW1zKTtcbiAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcbiAgfVxuICBnZXQgaXRlbXMoKTogSXRlbVtdIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gIH1cblxuICBASW5wdXQoKSBwb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9uczogUHJvbW90aW9uUmVzdWx0W10gPSBbXTtcbiAgQElucHV0KCkgcHJvbW90aW9uTG9jYXRpb246IFByb21vdGlvbkxvY2F0aW9uID0gUHJvbW90aW9uTG9jYXRpb24uQWN0aXZlQ2FydDtcblxuICBASW5wdXQoJ2NhcnRJc0xvYWRpbmcnKSBzZXQgc2V0TG9hZGluZyh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICghdGhpcy5yZWFkb25seSkge1xuICAgICAgLy8gV2hlbnZlciB0aGUgY2FydCBpcyBsb2FkaW5nLCB3ZSBkaXNhYmxlIHRoZSBjb21wbGV0ZSBmb3JtXG4gICAgICAvLyB0byBhdm9pZCBhbnkgdXNlciBpbnRlcmFjdGlvbiB3aXRoIHRoZSBjYXJ0LlxuICAgICAgdmFsdWVcbiAgICAgICAgPyB0aGlzLmZvcm0uZGlzYWJsZSh7IGVtaXRFdmVudDogZmFsc2UgfSlcbiAgICAgICAgOiB0aGlzLmZvcm0uZW5hYmxlKHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgc2VsZWN0aXZlQ2FydFNlcnZpY2U6IFNlbGVjdGl2ZUNhcnRTZXJ2aWNlLFxuICAgIGZlYXR1cmVDb25maWc6IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICk7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuNVxuICAgKiBBZGQgc2VsZWN0aXZlQ2FydFNlcnZpY2UgYXV0aFNlcnZpY2Ugcm91dGluZ1NlcnZpY2UgYW5kIGZlYXR1cmVDb25maWcgZm9yIHNhdmUgZm9yIGxhdGVyLlxuICAgKiBSZW1vdmUgaXNzdWU6ICM1OTU4XG4gICAqL1xuICBjb25zdHJ1Y3RvcihjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHNlbGVjdGl2ZUNhcnRTZXJ2aWNlPzogU2VsZWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmZWF0dXJlQ29uZmlnPzogRmVhdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIC8vVE9ETyByZW1vdmUgZmVhdHVyZSBmbGFnIGZvciAjNTk1OFxuICBpc1NhdmVGb3JMYXRlckVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZmVhdHVyZUNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZmVhdHVyZUNvbmZpZy5pc0VuYWJsZWQoJ3NhdmVGb3JMYXRlcicpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy9UT0RPIHJlbW92ZSBmZWF0dXJlIGZsYWcgZm9yICM1OTU4XG5cbiAgLyoqXG4gICAqIFRoZSBpdGVtcyB3ZSdyZSBnZXR0aW5nIGZvcm0gdGhlIGlucHV0IGRvIG5vdCBoYXZlIGEgY29uc2lzdGVudCBtb2RlbC5cbiAgICogSW4gY2FzZSBvZiBhIGBjb25zaWdubWVudEVudHJ5YCwgd2UgbmVlZCB0byBub3JtYWxpemUgdGhlIGRhdGEgZnJvbSB0aGUgb3JkZXJFbnRyeS5cbiAgICovXG4gIHByaXZhdGUgcmVzb2x2ZUl0ZW1zKGl0ZW1zOiBJdGVtW10pOiB2b2lkIHtcbiAgICBpZiAoaXRlbXMuZXZlcnkoaXRlbSA9PiBpdGVtLmhhc093blByb3BlcnR5KCdvcmRlckVudHJ5JykpKSB7XG4gICAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zLm1hcChjb25zaWdubWVudEVudHJ5ID0+IHtcbiAgICAgICAgY29uc3QgZW50cnkgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIHt9LFxuICAgICAgICAgIChjb25zaWdubWVudEVudHJ5IGFzIENvbnNpZ25tZW50RW50cnkpLm9yZGVyRW50cnlcbiAgICAgICAgKTtcbiAgICAgICAgZW50cnkucXVhbnRpdHkgPSBjb25zaWdubWVudEVudHJ5LnF1YW50aXR5O1xuICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faXRlbXMgPSBpdGVtcztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUZvcm0oKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cCh7fSk7XG4gICAgdGhpcy5faXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGNvbnN0IHsgY29kZSB9ID0gaXRlbS5wcm9kdWN0O1xuICAgICAgY29uc3QgZ3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgICAgZW50cnlOdW1iZXI6IG5ldyBGb3JtQ29udHJvbCgoPGFueT5pdGVtKS5lbnRyeU51bWJlciksXG4gICAgICAgIHF1YW50aXR5OiBuZXcgRm9ybUNvbnRyb2woaXRlbS5xdWFudGl0eSwgeyB1cGRhdGVPbjogJ2JsdXInIH0pLFxuICAgICAgfSk7XG4gICAgICBpZiAoIWl0ZW0udXBkYXRlYWJsZSB8fCB0aGlzLnJlYWRvbmx5KSB7XG4gICAgICAgIGdyb3VwLmRpc2FibGUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZm9ybS5hZGRDb250cm9sKGNvZGUsIGdyb3VwKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUVudHJ5KGl0ZW06IEl0ZW0pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zZWxlY3RpdmVDYXJ0U2VydmljZSAmJiB0aGlzLm9wdGlvbnMuaXNTYXZlRm9yTGF0ZXIpIHtcbiAgICAgIHRoaXMuc2VsZWN0aXZlQ2FydFNlcnZpY2UucmVtb3ZlRW50cnkoaXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2FydFNlcnZpY2UucmVtb3ZlRW50cnkoaXRlbSk7XG4gICAgfVxuICAgIGRlbGV0ZSB0aGlzLmZvcm0uY29udHJvbHNbaXRlbS5wcm9kdWN0LmNvZGVdO1xuICB9XG5cbiAgZ2V0Q29udHJvbChpdGVtOiBJdGVtKTogT2JzZXJ2YWJsZTxGb3JtR3JvdXA+IHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLmdldChpdGVtLnByb2R1Y3QuY29kZSkudmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGVwcmVjYXRpb25cbiAgICAgIHN0YXJ0V2l0aChudWxsKSxcbiAgICAgIG1hcCh2YWx1ZSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgIHRoaXMuY2FydFNlcnZpY2UudXBkYXRlRW50cnkodmFsdWUuZW50cnlOdW1iZXIsIHZhbHVlLnF1YW50aXR5KTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAoKCkgPT4gPEZvcm1Hcm91cD50aGlzLmZvcm0uZ2V0KGl0ZW0ucHJvZHVjdC5jb2RlKSlcbiAgICApO1xuICB9XG5cbiAgZ2V0UG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnNGb3JJdGVtKGl0ZW06IEl0ZW0pOiBQcm9tb3Rpb25SZXN1bHRbXSB7XG4gICAgY29uc3QgZW50cnlQcm9tb3Rpb25zOiBQcm9tb3Rpb25SZXN1bHRbXSA9IFtdO1xuICAgIC8vZG9uJ3Qgc2hvdyBwcm9tb3Rpb25zIGluIHNhdmVmb3JsYXRlclxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNTYXZlRm9yTGF0ZXIpIHtcbiAgICAgIHJldHVybiBlbnRyeVByb21vdGlvbnM7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIHRoaXMucG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnMgJiZcbiAgICAgIHRoaXMucG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnMubGVuZ3RoID4gMFxuICAgICkge1xuICAgICAgZm9yIChjb25zdCBwcm9tb3Rpb24gb2YgdGhpcy5wb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9ucykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvbW90aW9uLmRlc2NyaXB0aW9uICYmXG4gICAgICAgICAgcHJvbW90aW9uLmNvbnN1bWVkRW50cmllcyAmJlxuICAgICAgICAgIHByb21vdGlvbi5jb25zdW1lZEVudHJpZXMubGVuZ3RoID4gMFxuICAgICAgICApIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IGNvbnN1bWVkRW50cnkgb2YgcHJvbW90aW9uLmNvbnN1bWVkRW50cmllcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNDb25zdW1lZEJ5RW50cnkoY29uc3VtZWRFbnRyeSwgaXRlbSkpIHtcbiAgICAgICAgICAgICAgZW50cnlQcm9tb3Rpb25zLnB1c2gocHJvbW90aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVudHJ5UHJvbW90aW9ucztcbiAgfVxuXG4gIHByaXZhdGUgaXNDb25zdW1lZEJ5RW50cnkoY29uc3VtZWRFbnRyeTogYW55LCBlbnRyeTogYW55KTogYm9vbGVhbiB7XG4gICAgY29uc3QgY29uc3VtZWRFbnRyeU51bWJlciA9IGNvbnN1bWVkRW50cnkub3JkZXJFbnRyeU51bWJlcjtcbiAgICBpZiAoZW50cnkuZW50cmllcyAmJiBlbnRyeS5lbnRyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAoY29uc3Qgc3ViRW50cnkgb2YgZW50cnkuZW50cmllcykge1xuICAgICAgICBpZiAoc3ViRW50cnkuZW50cnlOdW1iZXIgPT09IGNvbnN1bWVkRW50cnlOdW1iZXIpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY29uc3VtZWRFbnRyeU51bWJlciA9PT0gZW50cnkuZW50cnlOdW1iZXI7XG4gICAgfVxuICB9XG59XG4iXX0=