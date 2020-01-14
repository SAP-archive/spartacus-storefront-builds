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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LXNoYXJlZC9jYXJ0LWl0ZW0tbGlzdC9jYXJ0LWl0ZW0tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUNMLFdBQVcsRUFFWCxpQkFBaUIsRUFDakIsb0JBQW9CLEVBQ3BCLG9CQUFvQixHQUNyQixNQUFNLGlCQUFpQixDQUFDO0FBTXpCO0lBNkRFLCtCQUNZLFdBQXdCLEVBQ3hCLEVBQWUsRUFDZixvQkFBMkMsRUFDN0MsYUFBb0M7UUFIbEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBdUI7UUFDN0Msa0JBQWEsR0FBYixhQUFhLENBQXVCO1FBM0Q5QyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBR25CLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFHakIsWUFBTyxHQUE2QjtZQUNsQyxjQUFjLEVBQUUsS0FBSztZQUNyQixXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDO1FBRUYsK0JBQTBCLEdBQXNCLEVBQUUsQ0FBQztRQUduRCxzQkFBaUIsR0FBc0IsaUJBQWlCLENBQUMsVUFBVSxDQUFDO1FBaUJwRSxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUV0QixTQUFJLEdBQWMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFNUIsV0FBTSxHQUFXLEVBQUUsQ0FBQztJQXlCekIsQ0FBQztJQTVDSixzQkFDSSx3Q0FBSzs7OztRQW9C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QUNpQjs7SUFFakIsd0NBSUU7O0lBQ0YsMkRBQ21EOztJQUVuRCxrREFDb0U7O0lBZ0JwRSw4Q0FDc0I7O0lBRXRCLHFDQUFvQzs7Ozs7SUFFcEMsdUNBQTRCOzs7OztJQXFCMUIsNENBQWtDOzs7OztJQUNsQyxtQ0FBeUI7Ozs7O0lBQ3pCLHFEQUFxRDs7Ozs7SUFDckQsOENBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQ2FydFNlcnZpY2UsXG4gIFByb21vdGlvblJlc3VsdCxcbiAgUHJvbW90aW9uTG9jYXRpb24sXG4gIFNlbGVjdGl2ZUNhcnRTZXJ2aWNlLFxuICBGZWF0dXJlQ29uZmlnU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7XG4gIEl0ZW0sXG4gIENhcnRJdGVtQ29tcG9uZW50T3B0aW9ucyxcbn0gZnJvbSAnLi4vY2FydC1pdGVtL2NhcnQtaXRlbS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jYXJ0LWl0ZW0tbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJ0LWl0ZW0tbGlzdC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENhcnRJdGVtTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGlzUmVhZE9ubHkgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBoYXNIZWFkZXIgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIG9wdGlvbnM6IENhcnRJdGVtQ29tcG9uZW50T3B0aW9ucyA9IHtcbiAgICBpc1NhdmVGb3JMYXRlcjogZmFsc2UsXG4gICAgb3B0aW9uYWxCdG46IG51bGwsXG4gIH07XG4gIEBJbnB1dCgpXG4gIHBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zOiBQcm9tb3Rpb25SZXN1bHRbXSA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIHByb21vdGlvbkxvY2F0aW9uOiBQcm9tb3Rpb25Mb2NhdGlvbiA9IFByb21vdGlvbkxvY2F0aW9uLkFjdGl2ZUNhcnQ7XG5cbiAgQElucHV0KClcbiAgc2V0IGl0ZW1zKF9pdGVtcykge1xuICAgIHRoaXMuX2l0ZW1zID0gX2l0ZW1zO1xuICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGNvbnN0IHsgY29kZSB9ID0gaXRlbS5wcm9kdWN0O1xuICAgICAgaWYgKCF0aGlzLmZvcm0uY29udHJvbHNbY29kZV0pIHtcbiAgICAgICAgdGhpcy5mb3JtLnNldENvbnRyb2woY29kZSwgdGhpcy5jcmVhdGVFbnRyeUZvcm1Hcm91cChpdGVtKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBlbnRyeUZvcm0gPSB0aGlzLmZvcm0uY29udHJvbHNbY29kZV0gYXMgRm9ybUdyb3VwO1xuICAgICAgICBlbnRyeUZvcm0uY29udHJvbHMucXVhbnRpdHkuc2V0VmFsdWUoaXRlbS5xdWFudGl0eSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBjYXJ0SXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgZm9ybTogRm9ybUdyb3VwID0gdGhpcy5mYi5ncm91cCh7fSk7XG5cbiAgcHJpdmF0ZSBfaXRlbXM6IEl0ZW1bXSA9IFtdO1xuXG4gIGdldCBpdGVtcygpOiBJdGVtW10ge1xuICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBmYjogRm9ybUJ1aWxkZXIsXG4gICAgc2VsZWN0aXZlQ2FydFNlcnZpY2U6IFNlbGVjdGl2ZUNhcnRTZXJ2aWNlLFxuICAgIGZlYXR1cmVDb25maWc6IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICk7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuNVxuICAgKiBBZGQgc2VsZWN0aXZlQ2FydFNlcnZpY2UgYXV0aFNlcnZpY2Ugcm91dGluZ1NlcnZpY2UgYW5kIGZlYXR1cmVDb25maWcgZm9yIHNhdmUgZm9yIGxhdGVyLlxuICAgKiBSZW1vdmUgaXNzdWU6ICM1OTU4XG4gICAqL1xuICBjb25zdHJ1Y3RvcihjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsIGZiOiBGb3JtQnVpbGRlcik7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByb3RlY3RlZCBzZWxlY3RpdmVDYXJ0U2VydmljZT86IFNlbGVjdGl2ZUNhcnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgZmVhdHVyZUNvbmZpZz86IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICkge31cblxuICAvLyBUT0RPIHJlbW92ZSBmb3IgMi4wIC0gbGVmdCB0byBrZWVwIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgbmdPbkluaXQoKTogdm9pZCB7fVxuXG4gIC8vVE9ETyByZW1vdmUgZmVhdHVyZSBmbGFnIGZvciAjNTk1OFxuICBpc1NhdmVGb3JMYXRlckVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZmVhdHVyZUNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZmVhdHVyZUNvbmZpZy5pc0VuYWJsZWQoJ3NhdmVGb3JMYXRlcicpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy9UT0RPIHJlbW92ZSBmZWF0dXJlIGZsYWcgZm9yICM1OTU4XG5cbiAgcmVtb3ZlRW50cnkoaXRlbTogSXRlbSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNlbGVjdGl2ZUNhcnRTZXJ2aWNlICYmIHRoaXMub3B0aW9ucy5pc1NhdmVGb3JMYXRlcikge1xuICAgICAgdGhpcy5zZWxlY3RpdmVDYXJ0U2VydmljZS5yZW1vdmVFbnRyeShpdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYXJ0U2VydmljZS5yZW1vdmVFbnRyeShpdGVtKTtcbiAgICB9XG4gICAgZGVsZXRlIHRoaXMuZm9ybS5jb250cm9sc1tpdGVtLnByb2R1Y3QuY29kZV07XG4gIH1cblxuICB1cGRhdGVFbnRyeSh7XG4gICAgaXRlbSxcbiAgICB1cGRhdGVkUXVhbnRpdHksXG4gIH06IHtcbiAgICBpdGVtOiBhbnk7XG4gICAgdXBkYXRlZFF1YW50aXR5OiBudW1iZXI7XG4gIH0pOiB2b2lkIHtcbiAgICB0aGlzLmNhcnRTZXJ2aWNlLnVwZGF0ZUVudHJ5KGl0ZW0uZW50cnlOdW1iZXIsIHVwZGF0ZWRRdWFudGl0eSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUVudHJ5Rm9ybUdyb3VwKGVudHJ5KTogRm9ybUdyb3VwIHtcbiAgICByZXR1cm4gdGhpcy5mYi5ncm91cCh7XG4gICAgICBlbnRyeU51bWJlcjogZW50cnkuZW50cnlOdW1iZXIsXG4gICAgICBxdWFudGl0eTogZW50cnkucXVhbnRpdHksXG4gICAgfSk7XG4gIH1cblxuICBnZXRQb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9uc0Zvckl0ZW0oaXRlbTogSXRlbSk6IFByb21vdGlvblJlc3VsdFtdIHtcbiAgICBjb25zdCBlbnRyeVByb21vdGlvbnM6IFByb21vdGlvblJlc3VsdFtdID0gW107XG4gICAgLy9kb24ndCBzaG93IHByb21vdGlvbnMgaW4gc2F2ZWZvcmxhdGVyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc1NhdmVGb3JMYXRlcikge1xuICAgICAgcmV0dXJuIGVudHJ5UHJvbW90aW9ucztcbiAgICB9XG4gICAgaWYgKFxuICAgICAgdGhpcy5wb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9ucyAmJlxuICAgICAgdGhpcy5wb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9ucy5sZW5ndGggPiAwXG4gICAgKSB7XG4gICAgICBmb3IgKGNvbnN0IHByb21vdGlvbiBvZiB0aGlzLnBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9tb3Rpb24uZGVzY3JpcHRpb24gJiZcbiAgICAgICAgICBwcm9tb3Rpb24uY29uc3VtZWRFbnRyaWVzICYmXG4gICAgICAgICAgcHJvbW90aW9uLmNvbnN1bWVkRW50cmllcy5sZW5ndGggPiAwXG4gICAgICAgICkge1xuICAgICAgICAgIGZvciAoY29uc3QgY29uc3VtZWRFbnRyeSBvZiBwcm9tb3Rpb24uY29uc3VtZWRFbnRyaWVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0NvbnN1bWVkQnlFbnRyeShjb25zdW1lZEVudHJ5LCBpdGVtKSkge1xuICAgICAgICAgICAgICBlbnRyeVByb21vdGlvbnMucHVzaChwcm9tb3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZW50cnlQcm9tb3Rpb25zO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0NvbnN1bWVkQnlFbnRyeShjb25zdW1lZEVudHJ5OiBhbnksIGVudHJ5OiBhbnkpOiBib29sZWFuIHtcbiAgICBjb25zdCBjb25zdW1lZEVudHJ5TnVtYmVyID0gY29uc3VtZWRFbnRyeS5vcmRlckVudHJ5TnVtYmVyO1xuICAgIGlmIChlbnRyeS5lbnRyaWVzICYmIGVudHJ5LmVudHJpZXMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChjb25zdCBzdWJFbnRyeSBvZiBlbnRyeS5lbnRyaWVzKSB7XG4gICAgICAgIGlmIChzdWJFbnRyeS5lbnRyeU51bWJlciA9PT0gY29uc3VtZWRFbnRyeU51bWJlcikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjb25zdW1lZEVudHJ5TnVtYmVyID09PSBlbnRyeS5lbnRyeU51bWJlcjtcbiAgICB9XG4gIH1cbn1cbiJdfQ==