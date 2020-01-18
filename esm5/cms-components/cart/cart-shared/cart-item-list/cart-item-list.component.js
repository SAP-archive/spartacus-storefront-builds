/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService, PromotionLocation, SelectiveCartService, FeatureConfigService, } from '@spartacus/core';
var CartItemListComponent = /** @class */ (function () {
    function CartItemListComponent(cartService, fb, selectiveCartService, featureConfig) {
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
            if (_items.every((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.hasOwnProperty('orderEntry'); }))) {
                this._items = _items.map((/**
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
            }
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
    //TODO remove feature flag for #5958
    /**
     * @param {?} item
     * @return {?}
     */
    CartItemListComponent.prototype.removeEntry = 
    //TODO remove feature flag for #5958
    /**
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
                    template: "<div *ngIf=\"hasHeader\" class=\"d-none d-md-block d-lg-block d-xl-block\">\n  <div class=\"cx-item-list-header row\">\n    <div class=\"cx-item-list-desc col-md-5 col-lg-5 col-xl-6\">\n      {{ 'cartItems.description' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-price col-md-3 col-lg-2 col-xl-2\">\n      {{ 'cartItems.itemPrice' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-qty col-md-2 col-lg-3 col-xl-2\">\n      {{ 'cartItems.quantity' | cxTranslate }}\n    </div>\n\n    <ng-container\n      *ngIf=\"\n        isSaveForLaterEnabled() && options.isSaveForLater;\n        else totalHeader\n      \"\n    >\n      <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n        {{ 'saveForLaterItems.stock' | cxTranslate }}\n      </div>\n    </ng-container>\n  </div>\n</div>\n\n<div [formGroup]=\"form\">\n  <div class=\"cx-item-list-row\" *ngFor=\"let item of items\">\n    <div class=\"cx-item-list-items\">\n      <ng-container *cxFeatureLevel=\"'!1.5'\">\n        <cx-cart-item\n          [parent]=\"form.controls[item.product.code]\"\n          [item]=\"item\"\n          [isReadOnly]=\"isReadOnly\"\n          [potentialProductPromotions]=\"\n            getPotentialProductPromotionsForItem(item)\n          \"\n          [cartIsLoading]=\"cartIsLoading\"\n          (remove)=\"removeEntry($event)\"\n          (update)=\"updateEntry($event)\"\n        >\n        </cx-cart-item>\n      </ng-container>\n\n      <ng-container *cxFeatureLevel=\"'1.5'\">\n        <cx-cart-item\n          [parent]=\"form.controls[item.product.code]\"\n          [item]=\"item\"\n          [isReadOnly]=\"isReadOnly\"\n          [promotionLocation]=\"promotionLocation\"\n          [cartIsLoading]=\"cartIsLoading\"\n          (remove)=\"removeEntry($event)\"\n          (update)=\"updateEntry($event)\"\n          [options]=\"options\"\n        >\n        </cx-cart-item>\n      </ng-container>\n    </div>\n  </div>\n</div>\n\n<ng-template #totalHeader>\n  <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n    {{ 'cartItems.total' | cxTranslate }}\n  </div>\n</ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    CartItemListComponent.ctorParameters = function () { return [
        { type: CartService },
        { type: FormBuilder },
        { type: SelectiveCartService },
        { type: FeatureConfigService }
    ]; };
    CartItemListComponent.propDecorators = {
        isReadOnly: [{ type: Input }],
        hasHeader: [{ type: Input }],
        options: [{ type: Input }],
        potentialProductPromotions: [{ type: Input }],
        promotionLocation: [{ type: Input }],
        items: [{ type: Input }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LXNoYXJlZC9jYXJ0LWl0ZW0tbGlzdC9jYXJ0LWl0ZW0tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUNMLFdBQVcsRUFFWCxpQkFBaUIsRUFDakIsb0JBQW9CLEVBQ3BCLG9CQUFvQixHQUVyQixNQUFNLGlCQUFpQixDQUFDO0FBTXpCO0lBd0VFLCtCQUNZLFdBQXdCLEVBQ3hCLEVBQWUsRUFDZixvQkFBMkMsRUFDN0MsYUFBb0M7UUFIbEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBdUI7UUFDN0Msa0JBQWEsR0FBYixhQUFhLENBQXVCO1FBdEU5QyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBR25CLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFHakIsWUFBTyxHQUE2QjtZQUNsQyxjQUFjLEVBQUUsS0FBSztZQUNyQixXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDO1FBRUYsK0JBQTBCLEdBQXNCLEVBQUUsQ0FBQztRQUduRCxzQkFBaUIsR0FBc0IsaUJBQWlCLENBQUMsVUFBVSxDQUFDO1FBNEJwRSxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUV0QixTQUFJLEdBQWMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFNUIsV0FBTSxHQUFXLEVBQUUsQ0FBQztJQXlCekIsQ0FBQztJQXZESixzQkFDSSx3Q0FBSzs7OztRQStC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QUFDO3FCQUNiO2lCQUNGOzs7Ozs7Ozs7WUFDRCxPQUFPLEtBQUssQ0FBQztTQUNkO2FBQU07WUFDTCxPQUFPLG1CQUFtQixLQUFLLEtBQUssQ0FBQyxXQUFXLENBQUM7U0FDbEQ7SUFDSCxDQUFDOztnQkE1SkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLHNsRUFBOEM7aUJBQy9DOzs7O2dCQWZDLFdBQVc7Z0JBRkosV0FBVztnQkFLbEIsb0JBQW9CO2dCQUNwQixvQkFBb0I7Ozs2QkFhbkIsS0FBSzs0QkFHTCxLQUFLOzBCQUdMLEtBQUs7NkNBS0wsS0FBSztvQ0FHTCxLQUFLO3dCQUdMLEtBQUs7Z0NBeUJMLEtBQUs7O0lBOEdSLDRCQUFDO0NBQUEsQUE3SkQsSUE2SkM7U0F6SlkscUJBQXFCOzs7SUFDaEMsMkNBQ21COztJQUVuQiwwQ0FDaUI7O0lBRWpCLHdDQUlFOztJQUNGLDJEQUNtRDs7SUFFbkQsa0RBQ29FOztJQTJCcEUsOENBQ3NCOztJQUV0QixxQ0FBb0M7Ozs7O0lBRXBDLHVDQUE0Qjs7Ozs7SUFxQjFCLDRDQUFrQzs7Ozs7SUFDbEMsbUNBQXlCOzs7OztJQUN6QixxREFBcUQ7Ozs7O0lBQ3JELDhDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIENhcnRTZXJ2aWNlLFxuICBQcm9tb3Rpb25SZXN1bHQsXG4gIFByb21vdGlvbkxvY2F0aW9uLFxuICBTZWxlY3RpdmVDYXJ0U2VydmljZSxcbiAgRmVhdHVyZUNvbmZpZ1NlcnZpY2UsXG4gIENvbnNpZ25tZW50RW50cnksXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQge1xuICBJdGVtLFxuICBDYXJ0SXRlbUNvbXBvbmVudE9wdGlvbnMsXG59IGZyb20gJy4uL2NhcnQtaXRlbS9jYXJ0LWl0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2FydC1pdGVtLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FydC1pdGVtLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0SXRlbUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBpc1JlYWRPbmx5ID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgaGFzSGVhZGVyID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBvcHRpb25zOiBDYXJ0SXRlbUNvbXBvbmVudE9wdGlvbnMgPSB7XG4gICAgaXNTYXZlRm9yTGF0ZXI6IGZhbHNlLFxuICAgIG9wdGlvbmFsQnRuOiBudWxsLFxuICB9O1xuICBASW5wdXQoKVxuICBwb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9uczogUHJvbW90aW9uUmVzdWx0W10gPSBbXTtcblxuICBASW5wdXQoKVxuICBwcm9tb3Rpb25Mb2NhdGlvbjogUHJvbW90aW9uTG9jYXRpb24gPSBQcm9tb3Rpb25Mb2NhdGlvbi5BY3RpdmVDYXJ0O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBpdGVtcyhfaXRlbXMpIHtcbiAgICBpZiAoX2l0ZW1zLmV2ZXJ5KGl0ZW0gPT4gaXRlbS5oYXNPd25Qcm9wZXJ0eSgnb3JkZXJFbnRyeScpKSkge1xuICAgICAgdGhpcy5faXRlbXMgPSBfaXRlbXMubWFwKGNvbnNpZ25tZW50RW50cnkgPT4ge1xuICAgICAgICBjb25zdCBlbnRyeSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAge30sXG4gICAgICAgICAgKGNvbnNpZ25tZW50RW50cnkgYXMgQ29uc2lnbm1lbnRFbnRyeSkub3JkZXJFbnRyeVxuICAgICAgICApO1xuICAgICAgICBlbnRyeS5xdWFudGl0eSA9IGNvbnNpZ25tZW50RW50cnkucXVhbnRpdHk7XG4gICAgICAgIHJldHVybiBlbnRyeTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9pdGVtcyA9IF9pdGVtcztcbiAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgeyBjb2RlIH0gPSBpdGVtLnByb2R1Y3Q7XG4gICAgICAgIGlmICghdGhpcy5mb3JtLmNvbnRyb2xzW2NvZGVdKSB7XG4gICAgICAgICAgdGhpcy5mb3JtLnNldENvbnRyb2woY29kZSwgdGhpcy5jcmVhdGVFbnRyeUZvcm1Hcm91cChpdGVtKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZW50cnlGb3JtID0gdGhpcy5mb3JtLmNvbnRyb2xzW2NvZGVdIGFzIEZvcm1Hcm91cDtcbiAgICAgICAgICBlbnRyeUZvcm0uY29udHJvbHMucXVhbnRpdHkuc2V0VmFsdWUoaXRlbS5xdWFudGl0eSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGNhcnRJc0xvYWRpbmcgPSBmYWxzZTtcblxuICBmb3JtOiBGb3JtR3JvdXAgPSB0aGlzLmZiLmdyb3VwKHt9KTtcblxuICBwcml2YXRlIF9pdGVtczogSXRlbVtdID0gW107XG5cbiAgZ2V0IGl0ZW1zKCk6IEl0ZW1bXSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIGZiOiBGb3JtQnVpbGRlcixcbiAgICBzZWxlY3RpdmVDYXJ0U2VydmljZTogU2VsZWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgZmVhdHVyZUNvbmZpZzogRmVhdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKTtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS41XG4gICAqIEFkZCBzZWxlY3RpdmVDYXJ0U2VydmljZSBhdXRoU2VydmljZSByb3V0aW5nU2VydmljZSBhbmQgZmVhdHVyZUNvbmZpZyBmb3Igc2F2ZSBmb3IgbGF0ZXIuXG4gICAqIFJlbW92ZSBpc3N1ZTogIzU5NThcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSwgZmI6IEZvcm1CdWlsZGVyKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJvdGVjdGVkIHNlbGVjdGl2ZUNhcnRTZXJ2aWNlPzogU2VsZWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmZWF0dXJlQ29uZmlnPzogRmVhdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIC8vIFRPRE8gcmVtb3ZlIGZvciAyLjAgLSBsZWZ0IHRvIGtlZXAgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICBuZ09uSW5pdCgpOiB2b2lkIHt9XG5cbiAgLy9UT0RPIHJlbW92ZSBmZWF0dXJlIGZsYWcgZm9yICM1OTU4XG4gIGlzU2F2ZUZvckxhdGVyRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5mZWF0dXJlQ29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5mZWF0dXJlQ29uZmlnLmlzRW5hYmxlZCgnc2F2ZUZvckxhdGVyJyk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvL1RPRE8gcmVtb3ZlIGZlYXR1cmUgZmxhZyBmb3IgIzU5NThcblxuICByZW1vdmVFbnRyeShpdGVtOiBJdGVtKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2VsZWN0aXZlQ2FydFNlcnZpY2UgJiYgdGhpcy5vcHRpb25zLmlzU2F2ZUZvckxhdGVyKSB7XG4gICAgICB0aGlzLnNlbGVjdGl2ZUNhcnRTZXJ2aWNlLnJlbW92ZUVudHJ5KGl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhcnRTZXJ2aWNlLnJlbW92ZUVudHJ5KGl0ZW0pO1xuICAgIH1cbiAgICBkZWxldGUgdGhpcy5mb3JtLmNvbnRyb2xzW2l0ZW0ucHJvZHVjdC5jb2RlXTtcbiAgfVxuXG4gIHVwZGF0ZUVudHJ5KHtcbiAgICBpdGVtLFxuICAgIHVwZGF0ZWRRdWFudGl0eSxcbiAgfToge1xuICAgIGl0ZW06IGFueTtcbiAgICB1cGRhdGVkUXVhbnRpdHk6IG51bWJlcjtcbiAgfSk6IHZvaWQge1xuICAgIHRoaXMuY2FydFNlcnZpY2UudXBkYXRlRW50cnkoaXRlbS5lbnRyeU51bWJlciwgdXBkYXRlZFF1YW50aXR5KTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRW50cnlGb3JtR3JvdXAoZW50cnkpOiBGb3JtR3JvdXAge1xuICAgIHJldHVybiB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGVudHJ5TnVtYmVyOiBlbnRyeS5lbnRyeU51bWJlcixcbiAgICAgIHF1YW50aXR5OiBlbnRyeS5xdWFudGl0eSxcbiAgICB9KTtcbiAgfVxuXG4gIGdldFBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zRm9ySXRlbShpdGVtOiBJdGVtKTogUHJvbW90aW9uUmVzdWx0W10ge1xuICAgIGNvbnN0IGVudHJ5UHJvbW90aW9uczogUHJvbW90aW9uUmVzdWx0W10gPSBbXTtcbiAgICAvL2Rvbid0IHNob3cgcHJvbW90aW9ucyBpbiBzYXZlZm9ybGF0ZXJcbiAgICBpZiAodGhpcy5vcHRpb25zLmlzU2F2ZUZvckxhdGVyKSB7XG4gICAgICByZXR1cm4gZW50cnlQcm9tb3Rpb25zO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICB0aGlzLnBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zICYmXG4gICAgICB0aGlzLnBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zLmxlbmd0aCA+IDBcbiAgICApIHtcbiAgICAgIGZvciAoY29uc3QgcHJvbW90aW9uIG9mIHRoaXMucG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnMpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb21vdGlvbi5kZXNjcmlwdGlvbiAmJlxuICAgICAgICAgIHByb21vdGlvbi5jb25zdW1lZEVudHJpZXMgJiZcbiAgICAgICAgICBwcm9tb3Rpb24uY29uc3VtZWRFbnRyaWVzLmxlbmd0aCA+IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBjb25zdW1lZEVudHJ5IG9mIHByb21vdGlvbi5jb25zdW1lZEVudHJpZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ29uc3VtZWRCeUVudHJ5KGNvbnN1bWVkRW50cnksIGl0ZW0pKSB7XG4gICAgICAgICAgICAgIGVudHJ5UHJvbW90aW9ucy5wdXNoKHByb21vdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbnRyeVByb21vdGlvbnM7XG4gIH1cblxuICBwcml2YXRlIGlzQ29uc3VtZWRCeUVudHJ5KGNvbnN1bWVkRW50cnk6IGFueSwgZW50cnk6IGFueSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNvbnN1bWVkRW50cnlOdW1iZXIgPSBjb25zdW1lZEVudHJ5Lm9yZGVyRW50cnlOdW1iZXI7XG4gICAgaWYgKGVudHJ5LmVudHJpZXMgJiYgZW50cnkuZW50cmllcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGNvbnN0IHN1YkVudHJ5IG9mIGVudHJ5LmVudHJpZXMpIHtcbiAgICAgICAgaWYgKHN1YkVudHJ5LmVudHJ5TnVtYmVyID09PSBjb25zdW1lZEVudHJ5TnVtYmVyKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbnN1bWVkRW50cnlOdW1iZXIgPT09IGVudHJ5LmVudHJ5TnVtYmVyO1xuICAgIH1cbiAgfVxufVxuIl19