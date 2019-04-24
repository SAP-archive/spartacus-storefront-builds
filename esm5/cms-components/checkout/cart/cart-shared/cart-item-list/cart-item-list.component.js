/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '@spartacus/core';
var CartItemListComponent = /** @class */ (function () {
    function CartItemListComponent(cartService, fb) {
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
    CartItemListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.items.forEach(function (item) {
            var code = item.product.code;
            if (!_this.form.controls[code]) {
                _this.form.setControl(code, _this.createEntryFormGroup(item));
            }
            else {
                /** @type {?} */
                var entryForm = (/** @type {?} */ (_this.form.controls[code]));
                entryForm.controls.quantity.setValue(item.quantity);
            }
        });
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
                            for (var _e = tslib_1.__values(promotion.consumedEntries), _f = _e.next(); !_f.done; _f = _e.next()) {
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
        var consumendEntryNumber = consumedEntry.orderEntryNumber;
        if (entry.entries && entry.entries.length > 0) {
            try {
                for (var _b = tslib_1.__values(entry.entries), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var subEntry = _c.value;
                    if (subEntry.entryNumber === consumendEntryNumber) {
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
            return consumendEntryNumber === entry.entryNumber;
        }
    };
    CartItemListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-cart-item-list',
                    template: "<div *ngIf=\"hasHeader\" class=\"d-none d-md-block d-lg-block d-xl-block\">\n  <div class=\"cx-item-list-header row\">\n    <div class=\"cx-item-list-desc col-md-5 col-lg-5 col-xl-6\">\n      {{ 'cartItems.description' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-price col-md-3 col-lg-2 col-xl-2\">\n      {{ 'cartItems.itemPrice' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-qty col-md-2 col-lg-3 col-xl-2\">\n      {{ 'cartItems.quantity' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n      {{ 'cartItems.total' | cxTranslate }}\n    </div>\n  </div>\n</div>\n\n<div [formGroup]=\"form\">\n  <div class=\"cx-item-list-row\" *ngFor=\"let item of items\">\n    <div class=\"cx-item-list-items\">\n      <cx-cart-item\n        [parent]=\"form.controls[item.product.code]\"\n        [item]=\"item\"\n        [potentialProductPromotions]=\"\n          getPotentialProductPromotionsForItem(item)\n        \"\n        [isReadOnly]=\"isReadOnly\"\n        (remove)=\"removeEntry($event)\"\n        [cartIsLoading]=\"cartIsLoading\"\n        (update)=\"updateEntry($event)\"\n      >\n      </cx-cart-item>\n    </div>\n  </div>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-item-list-header{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);margin:var(--cx-margin,0);padding:var(--cx-padding,1.125rem 0);text-transform:var(--cx-text-transform,uppercase);color:var(--cx-color,var(--cx-g-color-secondary));border-width:var(--cx-border-width,0 0 1px 0);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light))}.cx-item-list-desc{text-align:var(--cx-text-align,left);padding:var(--cx-padding,0)}.cx-item-list-price,.cx-item-list-qty{text-align:var(--cx-text-align,center)}@media (max-width:991.98px){.cx-item-list-price,.cx-item-list-qty{text-align:var(--cx-text-align,left)}}.cx-item-list-total{text-align:var(--cx-text-align,right);padding:var(--cx-padding,0)}.cx-item-list-row{padding:var(--cx-padding,1.25rem 0);border-width:var(--cx-border-width,0 0 1px 0);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light))}@media (max-width:991.98px){.cx-item-list-header{padding:var(--cx-padding,1.125rem 2.5rem)}.cx-item-list-items{padding:var(--cx-padding,0 2.5rem)}}@media (max-width:767.98px){.cx-item-list-items{padding:var(--cx-padding,0 0 0 1rem)}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY2FydC9jYXJ0LXNoYXJlZC9jYXJ0LWl0ZW0tbGlzdC9jYXJ0LWl0ZW0tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBbUIsTUFBTSxpQkFBaUIsQ0FBQztBQUcvRDtJQXdCRSwrQkFBc0IsV0FBd0IsRUFBWSxFQUFlO1FBQW5ELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVksT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQWhCekUsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUduQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBR2pCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFHbkIsK0JBQTBCLEdBQXNCLEVBQUUsQ0FBQztRQUduRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUV0QixTQUFJLEdBQWMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFd0MsQ0FBQzs7OztJQUU3RSx3Q0FBUTs7O0lBQVI7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtZQUNiLElBQUEsd0JBQUk7WUFDWixJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzdCLEtBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUMs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NEJBR0wsS0FBSzt3QkFHTCxLQUFLOzZDQUdMLEtBQUs7Z0NBR0wsS0FBSzs7SUE2RVIsNEJBQUM7Q0FBQSxBQWhHRCxJQWdHQztTQTFGWSxxQkFBcUI7OztJQUNoQywyQ0FDbUI7O0lBRW5CLDBDQUNpQjs7SUFFakIsc0NBQ21COztJQUVuQiwyREFDbUQ7O0lBRW5ELDhDQUNzQjs7SUFFdEIscUNBQW9DOzs7OztJQUV4Qiw0Q0FBa0M7Ozs7O0lBQUUsbUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENhcnRTZXJ2aWNlLCBQcm9tb3Rpb25SZXN1bHQgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4uL2NhcnQtaXRlbS9jYXJ0LWl0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2FydC1pdGVtLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FydC1pdGVtLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJ0LWl0ZW0tbGlzdC5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0SXRlbUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBpc1JlYWRPbmx5ID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgaGFzSGVhZGVyID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBpdGVtczogSXRlbVtdID0gW107XG5cbiAgQElucHV0KClcbiAgcG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnM6IFByb21vdGlvblJlc3VsdFtdID0gW107XG5cbiAgQElucHV0KClcbiAgY2FydElzTG9hZGluZyA9IGZhbHNlO1xuXG4gIGZvcm06IEZvcm1Hcm91cCA9IHRoaXMuZmIuZ3JvdXAoe30pO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsIHByb3RlY3RlZCBmYjogRm9ybUJ1aWxkZXIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgeyBjb2RlIH0gPSBpdGVtLnByb2R1Y3Q7XG4gICAgICBpZiAoIXRoaXMuZm9ybS5jb250cm9sc1tjb2RlXSkge1xuICAgICAgICB0aGlzLmZvcm0uc2V0Q29udHJvbChjb2RlLCB0aGlzLmNyZWF0ZUVudHJ5Rm9ybUdyb3VwKGl0ZW0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGVudHJ5Rm9ybSA9IHRoaXMuZm9ybS5jb250cm9sc1tjb2RlXSBhcyBGb3JtR3JvdXA7XG4gICAgICAgIGVudHJ5Rm9ybS5jb250cm9scy5xdWFudGl0eS5zZXRWYWx1ZShpdGVtLnF1YW50aXR5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUVudHJ5KGl0ZW06IEl0ZW0pOiB2b2lkIHtcbiAgICB0aGlzLmNhcnRTZXJ2aWNlLnJlbW92ZUVudHJ5KGl0ZW0pO1xuICAgIGRlbGV0ZSB0aGlzLmZvcm0uY29udHJvbHNbaXRlbS5wcm9kdWN0LmNvZGVdO1xuICB9XG5cbiAgdXBkYXRlRW50cnkoe1xuICAgIGl0ZW0sXG4gICAgdXBkYXRlZFF1YW50aXR5LFxuICB9OiB7XG4gICAgaXRlbTogYW55O1xuICAgIHVwZGF0ZWRRdWFudGl0eTogbnVtYmVyO1xuICB9KTogdm9pZCB7XG4gICAgdGhpcy5jYXJ0U2VydmljZS51cGRhdGVFbnRyeShpdGVtLmVudHJ5TnVtYmVyLCB1cGRhdGVkUXVhbnRpdHkpO1xuICB9XG5cbiAgZ2V0UG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnNGb3JJdGVtKGl0ZW06IEl0ZW0pOiBQcm9tb3Rpb25SZXN1bHRbXSB7XG4gICAgY29uc3QgZW50cnlQcm9tb3Rpb25zOiBQcm9tb3Rpb25SZXN1bHRbXSA9IFtdO1xuICAgIGlmIChcbiAgICAgIHRoaXMucG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnMgJiZcbiAgICAgIHRoaXMucG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnMubGVuZ3RoID4gMFxuICAgICkge1xuICAgICAgZm9yIChjb25zdCBwcm9tb3Rpb24gb2YgdGhpcy5wb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9ucykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvbW90aW9uLmRlc2NyaXB0aW9uICYmXG4gICAgICAgICAgcHJvbW90aW9uLmNvbnN1bWVkRW50cmllcyAmJlxuICAgICAgICAgIHByb21vdGlvbi5jb25zdW1lZEVudHJpZXMubGVuZ3RoID4gMFxuICAgICAgICApIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IGNvbnN1bWVkRW50cnkgb2YgcHJvbW90aW9uLmNvbnN1bWVkRW50cmllcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNDb25zdW1lZEJ5RW50cnkoY29uc3VtZWRFbnRyeSwgaXRlbSkpIHtcbiAgICAgICAgICAgICAgZW50cnlQcm9tb3Rpb25zLnB1c2gocHJvbW90aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVudHJ5UHJvbW90aW9ucztcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRW50cnlGb3JtR3JvdXAoZW50cnkpOiBGb3JtR3JvdXAge1xuICAgIHJldHVybiB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGVudHJ5TnVtYmVyOiBlbnRyeS5lbnRyeU51bWJlcixcbiAgICAgIHF1YW50aXR5OiBlbnRyeS5xdWFudGl0eSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaXNDb25zdW1lZEJ5RW50cnkoY29uc3VtZWRFbnRyeTogYW55LCBlbnRyeTogYW55KTogYm9vbGVhbiB7XG4gICAgY29uc3QgY29uc3VtZW5kRW50cnlOdW1iZXIgPSBjb25zdW1lZEVudHJ5Lm9yZGVyRW50cnlOdW1iZXI7XG4gICAgaWYgKGVudHJ5LmVudHJpZXMgJiYgZW50cnkuZW50cmllcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGNvbnN0IHN1YkVudHJ5IG9mIGVudHJ5LmVudHJpZXMpIHtcbiAgICAgICAgaWYgKHN1YkVudHJ5LmVudHJ5TnVtYmVyID09PSBjb25zdW1lbmRFbnRyeU51bWJlcikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjb25zdW1lbmRFbnRyeU51bWJlciA9PT0gZW50cnkuZW50cnlOdW1iZXI7XG4gICAgfVxuICB9XG59XG4iXX0=