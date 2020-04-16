import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActiveCartService, ConsignmentEntry, PromotionLocation, SelectiveCartService, } from '@spartacus/core';
import { map, startWith } from 'rxjs/operators';
let CartItemListComponent = class CartItemListComponent {
    constructor(activeCartService, selectiveCartService) {
        this.activeCartService = activeCartService;
        this.selectiveCartService = selectiveCartService;
        this.readonly = false;
        this.hasHeader = true;
        this.options = {
            isSaveForLater: false,
            optionalBtn: null,
        };
        this._items = [];
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
    /**
     * The items we're getting form the input do not have a consistent model.
     * In case of a `consignmentEntry`, we need to normalize the data from the orderEntry.
     */
    resolveItems(items) {
        if (items.every((item) => item.hasOwnProperty('orderEntry'))) {
            this._items = items.map((consignmentEntry) => {
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
        this._items.forEach((item) => {
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
            this.activeCartService.removeEntry(item);
        }
        delete this.form.controls[item.product.code];
    }
    getControl(item) {
        return this.form.get(item.product.code).valueChanges.pipe(
        // tslint:disable-next-line:deprecation
        startWith(null), map((value) => {
            if (value && this.selectiveCartService && this.options.isSaveForLater) {
                this.selectiveCartService.updateEntry(value.entryNumber, value.quantity);
            }
            else if (value) {
                this.activeCartService.updateEntry(value.entryNumber, value.quantity);
            }
        }), map(() => this.form.get(item.product.code)));
    }
};
CartItemListComponent.ctorParameters = () => [
    { type: ActiveCartService },
    { type: SelectiveCartService }
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
], CartItemListComponent.prototype, "promotionLocation", void 0);
__decorate([
    Input('cartIsLoading')
], CartItemListComponent.prototype, "setLoading", null);
CartItemListComponent = __decorate([
    Component({
        selector: 'cx-cart-item-list',
        template: "<div *ngIf=\"hasHeader\" class=\"d-none d-md-block d-lg-block d-xl-block\">\n  <div class=\"cx-item-list-header row\">\n    <div class=\"cx-item-list-desc col-md-5 col-lg-5 col-xl-6\">\n      {{ 'cartItems.description' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-price col-md-3 col-lg-2 col-xl-2\">\n      {{ 'cartItems.itemPrice' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-qty col-md-2 col-lg-3 col-xl-2\">\n      {{ 'cartItems.quantity' | cxTranslate }}\n    </div>\n\n    <ng-container *ngIf=\"options.isSaveForLater; else totalHeader\">\n      <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n        {{ 'saveForLaterItems.stock' | cxTranslate }}\n      </div>\n    </ng-container>\n  </div>\n</div>\n\n<div class=\"cx-item-list-row\" *ngFor=\"let item of items; let i = index\">\n  <div\n    class=\"cx-item-list-items\"\n    *ngIf=\"getControl(item) | async as control\"\n    [class.is-changed]=\"control.get('quantity').dirty\"\n  >\n    <cx-cart-item\n      [item]=\"item\"\n      [quantityControl]=\"control.get('quantity')\"\n      [readonly]=\"readonly\"\n      [promotionLocation]=\"promotionLocation\"\n      [options]=\"options\"\n    >\n    </cx-cart-item>\n  </div>\n</div>\n\n<ng-template #totalHeader>\n  <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n    {{ 'cartItems.total' | cxTranslate }}\n  </div>\n</ng-template>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], CartItemListComponent);
export { CartItemListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LXNoYXJlZC9jYXJ0LWl0ZW0tbGlzdC9jYXJ0LWl0ZW0tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLG9CQUFvQixHQUNyQixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFXaEQsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7SUFxQ2hDLFlBQ1ksaUJBQW9DLEVBQ3BDLG9CQUEwQztRQUQxQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUF0QzdDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUVqQixZQUFPLEdBQTZCO1lBQzNDLGNBQWMsRUFBRSxLQUFLO1lBQ3JCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUM7UUFFTSxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBZW5CLHNCQUFpQixHQUFzQixpQkFBaUIsQ0FBQyxVQUFVLENBQUM7SUFlMUUsQ0FBQztJQXZCSixJQUFJLEtBQUssQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7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LENBQUMsb0JBQW9CLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUU7Z0JBQ3JFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQ25DLEtBQUssQ0FBQyxXQUFXLEVBQ2pCLEtBQUssQ0FBQyxRQUFRLENBQ2YsQ0FBQzthQUNIO2lCQUFNLElBQUksS0FBSyxFQUFFO2dCQUNoQixJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3ZFO1FBQ0gsQ0FBQyxDQUFDLEVBQ0YsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FDdkQsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBOztZQWhFZ0MsaUJBQWlCO1lBQ2Qsb0JBQW9COztBQXRDN0M7SUFBUixLQUFLLEVBQUU7dURBQWtCO0FBRWpCO0lBQVIsS0FBSyxFQUFFO3dEQUFrQjtBQUVqQjtJQUFSLEtBQUssRUFBRTtzREFHTjtBQVNGO0lBSkMsS0FBSyxDQUFDLE9BQU8sQ0FBQztrREFPZDtBQUtRO0lBQVIsS0FBSyxFQUFFO2dFQUFxRTtBQUVyRDtJQUF2QixLQUFLLENBQUMsZUFBZSxDQUFDO3VEQVF0QjtBQW5DVSxxQkFBcUI7SUFMakMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixzNENBQThDO1FBQzlDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7R0FDVyxxQkFBcUIsQ0FzR2pDO1NBdEdZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQWN0aXZlQ2FydFNlcnZpY2UsXG4gIENvbnNpZ25tZW50RW50cnksXG4gIFByb21vdGlvbkxvY2F0aW9uLFxuICBTZWxlY3RpdmVDYXJ0U2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgQ2FydEl0ZW1Db21wb25lbnRPcHRpb25zLFxuICBJdGVtLFxufSBmcm9tICcuLi9jYXJ0LWl0ZW0vY2FydC1pdGVtLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNhcnQtaXRlbS1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcnQtaXRlbS1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENhcnRJdGVtTGlzdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHJlYWRvbmx5ID0gZmFsc2U7XG5cbiAgQElucHV0KCkgaGFzSGVhZGVyID0gdHJ1ZTtcblxuICBASW5wdXQoKSBvcHRpb25zOiBDYXJ0SXRlbUNvbXBvbmVudE9wdGlvbnMgPSB7XG4gICAgaXNTYXZlRm9yTGF0ZXI6IGZhbHNlLFxuICAgIG9wdGlvbmFsQnRuOiBudWxsLFxuICB9O1xuXG4gIHByaXZhdGUgX2l0ZW1zOiBJdGVtW10gPSBbXTtcbiAgZm9ybTogRm9ybUdyb3VwO1xuXG4gIEBJbnB1dCgnaXRlbXMnKVxuICAvLyBUT0RPOiBjdXJyZW50bHkgd2UncmUgZ2V0dGluZyBhIG5ldyBhcnJheSBvZiBpdGVtcyBpZiB0aGUgY2FydCBjaGFuZ2VzLlxuICAvLyBwcmV0dHkgYW5ub3lpbmcgYXMgaXQgZm9yY2VzIGEgcmVwYWludCBvbiB0aGUgc2NyZWVuLFxuICAvLyB3aGljaCBpcyBub3RpY2FibGUgaW4gdGhlIFVJLlxuICBzZXQgaXRlbXMoaXRlbXM6IEl0ZW1bXSkge1xuICAgIHRoaXMucmVzb2x2ZUl0ZW1zKGl0ZW1zKTtcbiAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcbiAgfVxuICBnZXQgaXRlbXMoKTogSXRlbVtdIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gIH1cblxuICBASW5wdXQoKSBwcm9tb3Rpb25Mb2NhdGlvbjogUHJvbW90aW9uTG9jYXRpb24gPSBQcm9tb3Rpb25Mb2NhdGlvbi5BY3RpdmVDYXJ0O1xuXG4gIEBJbnB1dCgnY2FydElzTG9hZGluZycpIHNldCBzZXRMb2FkaW5nKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKCF0aGlzLnJlYWRvbmx5KSB7XG4gICAgICAvLyBXaGVudmVyIHRoZSBjYXJ0IGlzIGxvYWRpbmcsIHdlIGRpc2FibGUgdGhlIGNvbXBsZXRlIGZvcm1cbiAgICAgIC8vIHRvIGF2b2lkIGFueSB1c2VyIGludGVyYWN0aW9uIHdpdGggdGhlIGNhcnQuXG4gICAgICB2YWx1ZVxuICAgICAgICA/IHRoaXMuZm9ybS5kaXNhYmxlKHsgZW1pdEV2ZW50OiBmYWxzZSB9KVxuICAgICAgICA6IHRoaXMuZm9ybS5lbmFibGUoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHNlbGVjdGl2ZUNhcnRTZXJ2aWNlOiBTZWxlY3RpdmVDYXJ0U2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFRoZSBpdGVtcyB3ZSdyZSBnZXR0aW5nIGZvcm0gdGhlIGlucHV0IGRvIG5vdCBoYXZlIGEgY29uc2lzdGVudCBtb2RlbC5cbiAgICogSW4gY2FzZSBvZiBhIGBjb25zaWdubWVudEVudHJ5YCwgd2UgbmVlZCB0byBub3JtYWxpemUgdGhlIGRhdGEgZnJvbSB0aGUgb3JkZXJFbnRyeS5cbiAgICovXG4gIHByaXZhdGUgcmVzb2x2ZUl0ZW1zKGl0ZW1zOiBJdGVtW10pOiB2b2lkIHtcbiAgICBpZiAoaXRlbXMuZXZlcnkoKGl0ZW0pID0+IGl0ZW0uaGFzT3duUHJvcGVydHkoJ29yZGVyRW50cnknKSkpIHtcbiAgICAgIHRoaXMuX2l0ZW1zID0gaXRlbXMubWFwKChjb25zaWdubWVudEVudHJ5KSA9PiB7XG4gICAgICAgIGNvbnN0IGVudHJ5ID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICB7fSxcbiAgICAgICAgICAoY29uc2lnbm1lbnRFbnRyeSBhcyBDb25zaWdubWVudEVudHJ5KS5vcmRlckVudHJ5XG4gICAgICAgICk7XG4gICAgICAgIGVudHJ5LnF1YW50aXR5ID0gY29uc2lnbm1lbnRFbnRyeS5xdWFudGl0eTtcbiAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVGb3JtKCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoe30pO1xuICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IHsgY29kZSB9ID0gaXRlbS5wcm9kdWN0O1xuICAgICAgY29uc3QgZ3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgICAgZW50cnlOdW1iZXI6IG5ldyBGb3JtQ29udHJvbCgoPGFueT5pdGVtKS5lbnRyeU51bWJlciksXG4gICAgICAgIHF1YW50aXR5OiBuZXcgRm9ybUNvbnRyb2woaXRlbS5xdWFudGl0eSwgeyB1cGRhdGVPbjogJ2JsdXInIH0pLFxuICAgICAgfSk7XG4gICAgICBpZiAoIWl0ZW0udXBkYXRlYWJsZSB8fCB0aGlzLnJlYWRvbmx5KSB7XG4gICAgICAgIGdyb3VwLmRpc2FibGUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZm9ybS5hZGRDb250cm9sKGNvZGUsIGdyb3VwKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUVudHJ5KGl0ZW06IEl0ZW0pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zZWxlY3RpdmVDYXJ0U2VydmljZSAmJiB0aGlzLm9wdGlvbnMuaXNTYXZlRm9yTGF0ZXIpIHtcbiAgICAgIHRoaXMuc2VsZWN0aXZlQ2FydFNlcnZpY2UucmVtb3ZlRW50cnkoaXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UucmVtb3ZlRW50cnkoaXRlbSk7XG4gICAgfVxuICAgIGRlbGV0ZSB0aGlzLmZvcm0uY29udHJvbHNbaXRlbS5wcm9kdWN0LmNvZGVdO1xuICB9XG5cbiAgZ2V0Q29udHJvbChpdGVtOiBJdGVtKTogT2JzZXJ2YWJsZTxGb3JtR3JvdXA+IHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLmdldChpdGVtLnByb2R1Y3QuY29kZSkudmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGVwcmVjYXRpb25cbiAgICAgIHN0YXJ0V2l0aChudWxsKSxcbiAgICAgIG1hcCgodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlICYmIHRoaXMuc2VsZWN0aXZlQ2FydFNlcnZpY2UgJiYgdGhpcy5vcHRpb25zLmlzU2F2ZUZvckxhdGVyKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RpdmVDYXJ0U2VydmljZS51cGRhdGVFbnRyeShcbiAgICAgICAgICAgIHZhbHVlLmVudHJ5TnVtYmVyLFxuICAgICAgICAgICAgdmFsdWUucXVhbnRpdHlcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZS51cGRhdGVFbnRyeSh2YWx1ZS5lbnRyeU51bWJlciwgdmFsdWUucXVhbnRpdHkpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgoKSA9PiA8Rm9ybUdyb3VwPnRoaXMuZm9ybS5nZXQoaXRlbS5wcm9kdWN0LmNvZGUpKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==