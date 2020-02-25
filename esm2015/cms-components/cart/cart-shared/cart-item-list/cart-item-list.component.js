import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService, ConsignmentEntry, FeatureConfigService, PromotionLocation, PromotionResult, SelectiveCartService, } from '@spartacus/core';
import { map, startWith } from 'rxjs/operators';
let CartItemListComponent = class CartItemListComponent {
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
    set items(items) {
        this.resolveItems(items);
        this.createForm();
    }
    get items() {
        return this._items;
    }
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
     */
    resolveItems(items) {
        if (items.every(item => item.hasOwnProperty('orderEntry'))) {
            this._items = items.map(consignmentEntry => {
                const entry = Object.assign({}, consignmentEntry.orderEntry);
                entry.quantity = consignmentEntry.quantity;
                return entry;
            });
        }
        else {
            this._items = items;
        }
    }
    createForm() {
        this.form = new FormGroup({});
        this._items.forEach(item => {
            const { code } = item.product;
            const group = new FormGroup({
                entryNumber: new FormControl(item.entryNumber),
                quantity: new FormControl(item.quantity, { updateOn: 'blur' }),
            });
            if (!item.updateable || this.readonly) {
                group.disable();
            }
            this.form.addControl(code, group);
        });
    }
    removeEntry(item) {
        if (this.selectiveCartService && this.options.isSaveForLater) {
            this.selectiveCartService.removeEntry(item);
        }
        else {
            this.cartService.removeEntry(item);
        }
        delete this.form.controls[item.product.code];
    }
    getControl(item) {
        return this.form.get(item.product.code).valueChanges.pipe(
        // tslint:disable-next-line:deprecation
        startWith(null), map(value => {
            if (value && this.selectiveCartService && this.options.isSaveForLater) {
                this.selectiveCartService.updateEntry(value.entryNumber, value.quantity);
            }
            else if (value) {
                this.cartService.updateEntry(value.entryNumber, value.quantity);
            }
        }), map(() => this.form.get(item.product.code)));
    }
    getPotentialProductPromotionsForItem(item) {
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
    isConsumedByEntry(consumedEntry, entry) {
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
};
CartItemListComponent.ctorParameters = () => [
    { type: CartService },
    { type: SelectiveCartService },
    { type: FeatureConfigService }
];
__decorate([
    Input()
], CartItemListComponent.prototype, "readonly", void 0);
__decorate([
    Input()
], CartItemListComponent.prototype, "hasHeader", void 0);
__decorate([
    Input()
], CartItemListComponent.prototype, "options", void 0);
__decorate([
    Input('items')
], CartItemListComponent.prototype, "items", null);
__decorate([
    Input()
], CartItemListComponent.prototype, "potentialProductPromotions", void 0);
__decorate([
    Input()
], CartItemListComponent.prototype, "promotionLocation", void 0);
__decorate([
    Input('cartIsLoading')
], CartItemListComponent.prototype, "setLoading", null);
CartItemListComponent = __decorate([
    Component({
        selector: 'cx-cart-item-list',
        template: "<div *ngIf=\"hasHeader\" class=\"d-none d-md-block d-lg-block d-xl-block\">\n  <div class=\"cx-item-list-header row\">\n    <div class=\"cx-item-list-desc col-md-5 col-lg-5 col-xl-6\">\n      {{ 'cartItems.description' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-price col-md-3 col-lg-2 col-xl-2\">\n      {{ 'cartItems.itemPrice' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-qty col-md-2 col-lg-3 col-xl-2\">\n      {{ 'cartItems.quantity' | cxTranslate }}\n    </div>\n\n    <ng-container\n      *ngIf=\"\n        isSaveForLaterEnabled() && options.isSaveForLater;\n        else totalHeader\n      \"\n    >\n      <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n        {{ 'saveForLaterItems.stock' | cxTranslate }}\n      </div>\n    </ng-container>\n  </div>\n</div>\n\n<div class=\"cx-item-list-row\" *ngFor=\"let item of items; let i = index\">\n  <div\n    class=\"cx-item-list-items\"\n    *ngIf=\"getControl(item) | async as control\"\n    [class.is-changed]=\"control.get('quantity').dirty\"\n  >\n    <cx-cart-item\n      [item]=\"item\"\n      [quantityControl]=\"control.get('quantity')\"\n      [readonly]=\"readonly\"\n      [potentialProductPromotions]=\"getPotentialProductPromotionsForItem(item)\"\n      [promotionLocation]=\"promotionLocation\"\n      [options]=\"options\"\n    >\n    </cx-cart-item>\n  </div>\n</div>\n\n<ng-template #totalHeader>\n  <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n    {{ 'cartItems.total' | cxTranslate }}\n  </div>\n</ng-template>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], CartItemListComponent);
export { CartItemListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LXNoYXJlZC9jYXJ0LWl0ZW0tbGlzdC9jYXJ0LWl0ZW0tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUNMLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixlQUFlLEVBQ2Ysb0JBQW9CLEdBQ3JCLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVdoRCxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQW1EaEMsWUFDWSxXQUF3QixFQUN4QixvQkFBMkMsRUFDN0MsYUFBb0M7UUFGbEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUF1QjtRQUM3QyxrQkFBYSxHQUFiLGFBQWEsQ0FBdUI7UUFyRHJDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUVqQixZQUFPLEdBQTZCO1lBQzNDLGNBQWMsRUFBRSxLQUFLO1lBQ3JCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUM7UUFFTSxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBZW5CLCtCQUEwQixHQUFzQixFQUFFLENBQUM7UUFDbkQsc0JBQWlCLEdBQXNCLGlCQUFpQixDQUFDLFVBQVUsQ0FBQztJQTZCMUUsQ0FBQztJQXRDSixJQUFJLEtBQUssQ0FBQyxLQUFh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O0lBTGpDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsNGhEQUE4QztRQUM5QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO0dBQ1cscUJBQXFCLENBdUtqQztTQXZLWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIENhcnRTZXJ2aWNlLFxuICBDb25zaWdubWVudEVudHJ5LFxuICBGZWF0dXJlQ29uZmlnU2VydmljZSxcbiAgUHJvbW90aW9uTG9jYXRpb24sXG4gIFByb21vdGlvblJlc3VsdCxcbiAgU2VsZWN0aXZlQ2FydFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIENhcnRJdGVtQ29tcG9uZW50T3B0aW9ucyxcbiAgSXRlbSxcbn0gZnJvbSAnLi4vY2FydC1pdGVtL2NhcnQtaXRlbS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jYXJ0LWl0ZW0tbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJ0LWl0ZW0tbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0SXRlbUxpc3RDb21wb25lbnQge1xuICBASW5wdXQoKSByZWFkb25seSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGhhc0hlYWRlciA9IHRydWU7XG5cbiAgQElucHV0KCkgb3B0aW9uczogQ2FydEl0ZW1Db21wb25lbnRPcHRpb25zID0ge1xuICAgIGlzU2F2ZUZvckxhdGVyOiBmYWxzZSxcbiAgICBvcHRpb25hbEJ0bjogbnVsbCxcbiAgfTtcblxuICBwcml2YXRlIF9pdGVtczogSXRlbVtdID0gW107XG4gIGZvcm06IEZvcm1Hcm91cDtcblxuICBASW5wdXQoJ2l0ZW1zJylcbiAgLy8gVE9ETzogY3VycmVudGx5IHdlJ3JlIGdldHRpbmcgYSBuZXcgYXJyYXkgb2YgaXRlbXMgaWYgdGhlIGNhcnQgY2hhbmdlcy5cbiAgLy8gcHJldHR5IGFubm95aW5nIGFzIGl0IGZvcmNlcyBhIHJlcGFpbnQgb24gdGhlIHNjcmVlbixcbiAgLy8gd2hpY2ggaXMgbm90aWNhYmxlIGluIHRoZSBVSS5cbiAgc2V0IGl0ZW1zKGl0ZW1zOiBJdGVtW10pIHtcbiAgICB0aGlzLnJlc29sdmVJdGVtcyhpdGVtcyk7XG4gICAgdGhpcy5jcmVhdGVGb3JtKCk7XG4gIH1cbiAgZ2V0IGl0ZW1zKCk6IEl0ZW1bXSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICB9XG5cbiAgQElucHV0KCkgcG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnM6IFByb21vdGlvblJlc3VsdFtdID0gW107XG4gIEBJbnB1dCgpIHByb21vdGlvbkxvY2F0aW9uOiBQcm9tb3Rpb25Mb2NhdGlvbiA9IFByb21vdGlvbkxvY2F0aW9uLkFjdGl2ZUNhcnQ7XG5cbiAgQElucHV0KCdjYXJ0SXNMb2FkaW5nJykgc2V0IHNldExvYWRpbmcodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAoIXRoaXMucmVhZG9ubHkpIHtcbiAgICAgIC8vIFdoZW52ZXIgdGhlIGNhcnQgaXMgbG9hZGluZywgd2UgZGlzYWJsZSB0aGUgY29tcGxldGUgZm9ybVxuICAgICAgLy8gdG8gYXZvaWQgYW55IHVzZXIgaW50ZXJhY3Rpb24gd2l0aCB0aGUgY2FydC5cbiAgICAgIHZhbHVlXG4gICAgICAgID8gdGhpcy5mb3JtLmRpc2FibGUoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pXG4gICAgICAgIDogdGhpcy5mb3JtLmVuYWJsZSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIHNlbGVjdGl2ZUNhcnRTZXJ2aWNlOiBTZWxlY3RpdmVDYXJ0U2VydmljZSxcbiAgICBmZWF0dXJlQ29uZmlnOiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxLjVcbiAgICogQWRkIHNlbGVjdGl2ZUNhcnRTZXJ2aWNlIGF1dGhTZXJ2aWNlIHJvdXRpbmdTZXJ2aWNlIGFuZCBmZWF0dXJlQ29uZmlnIGZvciBzYXZlIGZvciBsYXRlci5cbiAgICogUmVtb3ZlIGlzc3VlOiAjNTk1OFxuICAgKi9cbiAgY29uc3RydWN0b3IoY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBzZWxlY3RpdmVDYXJ0U2VydmljZT86IFNlbGVjdGl2ZUNhcnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgZmVhdHVyZUNvbmZpZz86IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICkge31cblxuICAvL1RPRE8gcmVtb3ZlIGZlYXR1cmUgZmxhZyBmb3IgIzU5NThcbiAgaXNTYXZlRm9yTGF0ZXJFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmZlYXR1cmVDb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmZlYXR1cmVDb25maWcuaXNFbmFibGVkKCdzYXZlRm9yTGF0ZXInKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vVE9ETyByZW1vdmUgZmVhdHVyZSBmbGFnIGZvciAjNTk1OFxuXG4gIC8qKlxuICAgKiBUaGUgaXRlbXMgd2UncmUgZ2V0dGluZyBmb3JtIHRoZSBpbnB1dCBkbyBub3QgaGF2ZSBhIGNvbnNpc3RlbnQgbW9kZWwuXG4gICAqIEluIGNhc2Ugb2YgYSBgY29uc2lnbm1lbnRFbnRyeWAsIHdlIG5lZWQgdG8gbm9ybWFsaXplIHRoZSBkYXRhIGZyb20gdGhlIG9yZGVyRW50cnkuXG4gICAqL1xuICBwcml2YXRlIHJlc29sdmVJdGVtcyhpdGVtczogSXRlbVtdKTogdm9pZCB7XG4gICAgaWYgKGl0ZW1zLmV2ZXJ5KGl0ZW0gPT4gaXRlbS5oYXNPd25Qcm9wZXJ0eSgnb3JkZXJFbnRyeScpKSkge1xuICAgICAgdGhpcy5faXRlbXMgPSBpdGVtcy5tYXAoY29uc2lnbm1lbnRFbnRyeSA9PiB7XG4gICAgICAgIGNvbnN0IGVudHJ5ID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICB7fSxcbiAgICAgICAgICAoY29uc2lnbm1lbnRFbnRyeSBhcyBDb25zaWdubWVudEVudHJ5KS5vcmRlckVudHJ5XG4gICAgICAgICk7XG4gICAgICAgIGVudHJ5LnF1YW50aXR5ID0gY29uc2lnbm1lbnRFbnRyeS5xdWFudGl0eTtcbiAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVGb3JtKCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoe30pO1xuICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBjb25zdCB7IGNvZGUgfSA9IGl0ZW0ucHJvZHVjdDtcbiAgICAgIGNvbnN0IGdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICAgIGVudHJ5TnVtYmVyOiBuZXcgRm9ybUNvbnRyb2woKDxhbnk+aXRlbSkuZW50cnlOdW1iZXIpLFxuICAgICAgICBxdWFudGl0eTogbmV3IEZvcm1Db250cm9sKGl0ZW0ucXVhbnRpdHksIHsgdXBkYXRlT246ICdibHVyJyB9KSxcbiAgICAgIH0pO1xuICAgICAgaWYgKCFpdGVtLnVwZGF0ZWFibGUgfHwgdGhpcy5yZWFkb25seSkge1xuICAgICAgICBncm91cC5kaXNhYmxlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmZvcm0uYWRkQ29udHJvbChjb2RlLCBncm91cCk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVFbnRyeShpdGVtOiBJdGVtKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2VsZWN0aXZlQ2FydFNlcnZpY2UgJiYgdGhpcy5vcHRpb25zLmlzU2F2ZUZvckxhdGVyKSB7XG4gICAgICB0aGlzLnNlbGVjdGl2ZUNhcnRTZXJ2aWNlLnJlbW92ZUVudHJ5KGl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhcnRTZXJ2aWNlLnJlbW92ZUVudHJ5KGl0ZW0pO1xuICAgIH1cbiAgICBkZWxldGUgdGhpcy5mb3JtLmNvbnRyb2xzW2l0ZW0ucHJvZHVjdC5jb2RlXTtcbiAgfVxuXG4gIGdldENvbnRyb2woaXRlbTogSXRlbSk6IE9ic2VydmFibGU8Rm9ybUdyb3VwPiB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5nZXQoaXRlbS5wcm9kdWN0LmNvZGUpLnZhbHVlQ2hhbmdlcy5waXBlKFxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRlcHJlY2F0aW9uXG4gICAgICBzdGFydFdpdGgobnVsbCksXG4gICAgICBtYXAodmFsdWUgPT4ge1xuICAgICAgICBpZiAodmFsdWUgJiYgdGhpcy5zZWxlY3RpdmVDYXJ0U2VydmljZSAmJiB0aGlzLm9wdGlvbnMuaXNTYXZlRm9yTGF0ZXIpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGl2ZUNhcnRTZXJ2aWNlLnVwZGF0ZUVudHJ5KFxuICAgICAgICAgICAgdmFsdWUuZW50cnlOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZS5xdWFudGl0eVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUpIHtcbiAgICAgICAgICB0aGlzLmNhcnRTZXJ2aWNlLnVwZGF0ZUVudHJ5KHZhbHVlLmVudHJ5TnVtYmVyLCB2YWx1ZS5xdWFudGl0eSk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKCgpID0+IDxGb3JtR3JvdXA+dGhpcy5mb3JtLmdldChpdGVtLnByb2R1Y3QuY29kZSkpXG4gICAgKTtcbiAgfVxuXG4gIGdldFBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zRm9ySXRlbShpdGVtOiBJdGVtKTogUHJvbW90aW9uUmVzdWx0W10ge1xuICAgIGNvbnN0IGVudHJ5UHJvbW90aW9uczogUHJvbW90aW9uUmVzdWx0W10gPSBbXTtcbiAgICAvL2Rvbid0IHNob3cgcHJvbW90aW9ucyBpbiBzYXZlZm9ybGF0ZXJcbiAgICBpZiAodGhpcy5vcHRpb25zLmlzU2F2ZUZvckxhdGVyKSB7XG4gICAgICByZXR1cm4gZW50cnlQcm9tb3Rpb25zO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICB0aGlzLnBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zICYmXG4gICAgICB0aGlzLnBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zLmxlbmd0aCA+IDBcbiAgICApIHtcbiAgICAgIGZvciAoY29uc3QgcHJvbW90aW9uIG9mIHRoaXMucG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnMpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb21vdGlvbi5kZXNjcmlwdGlvbiAmJlxuICAgICAgICAgIHByb21vdGlvbi5jb25zdW1lZEVudHJpZXMgJiZcbiAgICAgICAgICBwcm9tb3Rpb24uY29uc3VtZWRFbnRyaWVzLmxlbmd0aCA+IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBjb25zdW1lZEVudHJ5IG9mIHByb21vdGlvbi5jb25zdW1lZEVudHJpZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ29uc3VtZWRCeUVudHJ5KGNvbnN1bWVkRW50cnksIGl0ZW0pKSB7XG4gICAgICAgICAgICAgIGVudHJ5UHJvbW90aW9ucy5wdXNoKHByb21vdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbnRyeVByb21vdGlvbnM7XG4gIH1cblxuICBwcml2YXRlIGlzQ29uc3VtZWRCeUVudHJ5KGNvbnN1bWVkRW50cnk6IGFueSwgZW50cnk6IGFueSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNvbnN1bWVkRW50cnlOdW1iZXIgPSBjb25zdW1lZEVudHJ5Lm9yZGVyRW50cnlOdW1iZXI7XG4gICAgaWYgKGVudHJ5LmVudHJpZXMgJiYgZW50cnkuZW50cmllcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGNvbnN0IHN1YkVudHJ5IG9mIGVudHJ5LmVudHJpZXMpIHtcbiAgICAgICAgaWYgKHN1YkVudHJ5LmVudHJ5TnVtYmVyID09PSBjb25zdW1lZEVudHJ5TnVtYmVyKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbnN1bWVkRW50cnlOdW1iZXIgPT09IGVudHJ5LmVudHJ5TnVtYmVyO1xuICAgIH1cbiAgfVxufVxuIl19