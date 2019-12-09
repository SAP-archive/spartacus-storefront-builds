/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '@spartacus/core';
var CartItemListComponent = /** @class */ (function () {
    function CartItemListComponent(cartService, fb) {
        this.cartService = cartService;
        this.fb = fb;
        this.isReadOnly = false;
        this.hasHeader = true;
        this.potentialProductPromotions = [];
        this.cartIsLoading = false;
        this.form = this.fb.group({});
        this._items = [];
    }
    Object.defineProperty(CartItemListComponent.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return this._items;
        },
        set: /**
         * @param {?} _items
         * @return {?}
         */
        function (_items) {
            var _this = this;
            this._items = _items;
            this.items.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                var code = item.product.code;
                if (!_this.form.controls[code]) {
                    _this.form.setControl(code, _this.createEntryFormGroup(item));
                }
                else {
                    /** @type {?} */
                    var entryForm = (/** @type {?} */ (_this.form.controls[code]));
                    entryForm.controls.quantity.setValue(item.quantity);
                }
            }));
        },
        enumerable: true,
        configurable: true
    });
    // TODO remove for 2.0 - left to keep backward compatibility
    // TODO remove for 2.0 - left to keep backward compatibility
    /**
     * @return {?}
     */
    CartItemListComponent.prototype.ngOnInit = 
    // TODO remove for 2.0 - left to keep backward compatibility
    /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} item
     * @return {?}
     */
    CartItemListComponent.prototype.removeEntry = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.cartService.removeEntry(item);
        delete this.form.controls[item.product.code];
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    CartItemListComponent.prototype.updateEntry = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var item = _a.item, updatedQuantity = _a.updatedQuantity;
        this.cartService.updateEntry(item.entryNumber, updatedQuantity);
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
     * @param {?} entry
     * @return {?}
     */
    CartItemListComponent.prototype.createEntryFormGroup = /**
     * @private
     * @param {?} entry
     * @return {?}
     */
    function (entry) {
        return this.fb.group({
            entryNumber: entry.entryNumber,
            quantity: entry.quantity,
        });
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
                    template: "<div *ngIf=\"hasHeader\" class=\"d-none d-md-block d-lg-block d-xl-block\">\n  <div class=\"cx-item-list-header row\">\n    <div class=\"cx-item-list-desc col-md-5 col-lg-5 col-xl-6\">\n      {{ 'cartItems.description' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-price col-md-3 col-lg-2 col-xl-2\">\n      {{ 'cartItems.itemPrice' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-qty col-md-2 col-lg-3 col-xl-2\">\n      {{ 'cartItems.quantity' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n      {{ 'cartItems.total' | cxTranslate }}\n    </div>\n  </div>\n</div>\n\n<div [formGroup]=\"form\">\n  <div class=\"cx-item-list-row\" *ngFor=\"let item of items\">\n    <div class=\"cx-item-list-items\">\n      <cx-cart-item\n        [parent]=\"form.controls[item.product.code]\"\n        [item]=\"item\"\n        [potentialProductPromotions]=\"\n          getPotentialProductPromotionsForItem(item)\n        \"\n        [isReadOnly]=\"isReadOnly\"\n        (remove)=\"removeEntry($event)\"\n        [cartIsLoading]=\"cartIsLoading\"\n        (update)=\"updateEntry($event)\"\n      >\n      </cx-cart-item>\n    </div>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    CartItemListComponent.ctorParameters = function () { return [
        { type: CartService },
        { type: FormBuilder }
    ]; };
    CartItemListComponent.propDecorators = {
        isReadOnly: [{ type: Input }],
        hasHeader: [{ type: Input }],
        items: [{ type: Input }],
        potentialProductPromotions: [{ type: Input }],
        cartIsLoading: [{ type: Input }]
    };
    return CartItemListComponent;
}());
export { CartItemListComponent };
if (false) {
    /** @type {?} */
    CartItemListComponent.prototype.isReadOnly;
    /** @type {?} */
    CartItemListComponent.prototype.hasHeader;
    /** @type {?} */
    CartItemListComponent.prototype.potentialProductPromotions;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LXNoYXJlZC9jYXJ0LWl0ZW0tbGlzdC9jYXJ0LWl0ZW0tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBbUIsTUFBTSxpQkFBaUIsQ0FBQztBQUcvRDtJQXVDRSwrQkFBc0IsV0FBd0IsRUFBWSxFQUFlO1FBQW5ELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVksT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQWpDekUsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUduQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBaUJqQiwrQkFBMEIsR0FBc0IsRUFBRSxDQUFDO1FBR25ELGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRXRCLFNBQUksR0FBYyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUU1QixXQUFNLEdBQVcsRUFBRSxDQUFDO0lBTWdELENBQUM7SUE1QjdFLHNCQUNJLHdDQUFLOzs7O1FBdUJUO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7Ozs7O1FBMUJELFVBQ1UsTUFBTTtZQURoQixpQkFZQztZQVZDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTzs7OztZQUFDLFVBQUEsSUFBSTtnQkFDYixJQUFBLHdCQUFJO2dCQUNaLElBQUksQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMs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O1NBQ2xEO0lBQ0gsQ0FBQzs7Z0JBckdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3Qix5c0NBQThDO2lCQUMvQzs7OztnQkFOUSxXQUFXO2dCQURYLFdBQVc7Ozs2QkFTakIsS0FBSzs0QkFHTCxLQUFLO3dCQUdMLEtBQUs7NkNBY0wsS0FBSztnQ0FHTCxLQUFLOztJQTBFUiw0QkFBQztDQUFBLEFBdEdELElBc0dDO1NBbEdZLHFCQUFxQjs7O0lBQ2hDLDJDQUNtQjs7SUFFbkIsMENBQ2lCOztJQWdCakIsMkRBQ21EOztJQUVuRCw4Q0FDc0I7O0lBRXRCLHFDQUFvQzs7Ozs7SUFFcEMsdUNBQTRCOzs7OztJQU1oQiw0Q0FBa0M7Ozs7O0lBQUUsbUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ2FydFNlcnZpY2UsIFByb21vdGlvblJlc3VsdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi4vY2FydC1pdGVtL2NhcnQtaXRlbS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jYXJ0LWl0ZW0tbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJ0LWl0ZW0tbGlzdC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENhcnRJdGVtTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGlzUmVhZE9ubHkgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBoYXNIZWFkZXIgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBpdGVtcyhfaXRlbXMpIHtcbiAgICB0aGlzLl9pdGVtcyA9IF9pdGVtcztcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBjb25zdCB7IGNvZGUgfSA9IGl0ZW0ucHJvZHVjdDtcbiAgICAgIGlmICghdGhpcy5mb3JtLmNvbnRyb2xzW2NvZGVdKSB7XG4gICAgICAgIHRoaXMuZm9ybS5zZXRDb250cm9sKGNvZGUsIHRoaXMuY3JlYXRlRW50cnlGb3JtR3JvdXAoaXRlbSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZW50cnlGb3JtID0gdGhpcy5mb3JtLmNvbnRyb2xzW2NvZGVdIGFzIEZvcm1Hcm91cDtcbiAgICAgICAgZW50cnlGb3JtLmNvbnRyb2xzLnF1YW50aXR5LnNldFZhbHVlKGl0ZW0ucXVhbnRpdHkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgQElucHV0KClcbiAgcG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnM6IFByb21vdGlvblJlc3VsdFtdID0gW107XG5cbiAgQElucHV0KClcbiAgY2FydElzTG9hZGluZyA9IGZhbHNlO1xuXG4gIGZvcm06IEZvcm1Hcm91cCA9IHRoaXMuZmIuZ3JvdXAoe30pO1xuXG4gIHByaXZhdGUgX2l0ZW1zOiBJdGVtW10gPSBbXTtcblxuICBnZXQgaXRlbXMoKTogSXRlbVtdIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLCBwcm90ZWN0ZWQgZmI6IEZvcm1CdWlsZGVyKSB7fVxuXG4gIC8vIFRPRE8gcmVtb3ZlIGZvciAyLjAgLSBsZWZ0IHRvIGtlZXAgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICBuZ09uSW5pdCgpOiB2b2lkIHt9XG5cbiAgcmVtb3ZlRW50cnkoaXRlbTogSXRlbSk6IHZvaWQge1xuICAgIHRoaXMuY2FydFNlcnZpY2UucmVtb3ZlRW50cnkoaXRlbSk7XG4gICAgZGVsZXRlIHRoaXMuZm9ybS5jb250cm9sc1tpdGVtLnByb2R1Y3QuY29kZV07XG4gIH1cblxuICB1cGRhdGVFbnRyeSh7XG4gICAgaXRlbSxcbiAgICB1cGRhdGVkUXVhbnRpdHksXG4gIH06IHtcbiAgICBpdGVtOiBhbnk7XG4gICAgdXBkYXRlZFF1YW50aXR5OiBudW1iZXI7XG4gIH0pOiB2b2lkIHtcbiAgICB0aGlzLmNhcnRTZXJ2aWNlLnVwZGF0ZUVudHJ5KGl0ZW0uZW50cnlOdW1iZXIsIHVwZGF0ZWRRdWFudGl0eSk7XG4gIH1cblxuICBnZXRQb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9uc0Zvckl0ZW0oaXRlbTogSXRlbSk6IFByb21vdGlvblJlc3VsdFtdIHtcbiAgICBjb25zdCBlbnRyeVByb21vdGlvbnM6IFByb21vdGlvblJlc3VsdFtdID0gW107XG4gICAgaWYgKFxuICAgICAgdGhpcy5wb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9ucyAmJlxuICAgICAgdGhpcy5wb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9ucy5sZW5ndGggPiAwXG4gICAgKSB7XG4gICAgICBmb3IgKGNvbnN0IHByb21vdGlvbiBvZiB0aGlzLnBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9tb3Rpb24uZGVzY3JpcHRpb24gJiZcbiAgICAgICAgICBwcm9tb3Rpb24uY29uc3VtZWRFbnRyaWVzICYmXG4gICAgICAgICAgcHJvbW90aW9uLmNvbnN1bWVkRW50cmllcy5sZW5ndGggPiAwXG4gICAgICAgICkge1xuICAgICAgICAgIGZvciAoY29uc3QgY29uc3VtZWRFbnRyeSBvZiBwcm9tb3Rpb24uY29uc3VtZWRFbnRyaWVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0NvbnN1bWVkQnlFbnRyeShjb25zdW1lZEVudHJ5LCBpdGVtKSkge1xuICAgICAgICAgICAgICBlbnRyeVByb21vdGlvbnMucHVzaChwcm9tb3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZW50cnlQcm9tb3Rpb25zO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVFbnRyeUZvcm1Hcm91cChlbnRyeSk6IEZvcm1Hcm91cCB7XG4gICAgcmV0dXJuIHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgZW50cnlOdW1iZXI6IGVudHJ5LmVudHJ5TnVtYmVyLFxuICAgICAgcXVhbnRpdHk6IGVudHJ5LnF1YW50aXR5LFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0NvbnN1bWVkQnlFbnRyeShjb25zdW1lZEVudHJ5OiBhbnksIGVudHJ5OiBhbnkpOiBib29sZWFuIHtcbiAgICBjb25zdCBjb25zdW1lZEVudHJ5TnVtYmVyID0gY29uc3VtZWRFbnRyeS5vcmRlckVudHJ5TnVtYmVyO1xuICAgIGlmIChlbnRyeS5lbnRyaWVzICYmIGVudHJ5LmVudHJpZXMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChjb25zdCBzdWJFbnRyeSBvZiBlbnRyeS5lbnRyaWVzKSB7XG4gICAgICAgIGlmIChzdWJFbnRyeS5lbnRyeU51bWJlciA9PT0gY29uc3VtZWRFbnRyeU51bWJlcikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjb25zdW1lZEVudHJ5TnVtYmVyID09PSBlbnRyeS5lbnRyeU51bWJlcjtcbiAgICB9XG4gIH1cbn1cbiJdfQ==