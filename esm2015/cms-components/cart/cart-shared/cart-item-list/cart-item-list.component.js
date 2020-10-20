import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActiveCartService, PromotionLocation, SelectiveCartService, } from '@spartacus/core';
import { map, startWith } from 'rxjs/operators';
export class CartItemListComponent {
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
        if (!items) {
            this._items = [];
            return;
        }
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
            const controlName = this.getControlName(item);
            const group = new FormGroup({
                entryNumber: new FormControl(item.entryNumber),
                quantity: new FormControl(item.quantity, { updateOn: 'blur' }),
            });
            if (!item.updateable || this.readonly) {
                group.disable();
            }
            this.form.addControl(controlName, group);
        });
    }
    getControlName(item) {
        return item.entryNumber.toString();
    }
    removeEntry(item) {
        if (this.selectiveCartService && this.options.isSaveForLater) {
            this.selectiveCartService.removeEntry(item);
        }
        else {
            this.activeCartService.removeEntry(item);
        }
        delete this.form.controls[this.getControlName(item)];
    }
    getControl(item) {
        return this.form.get(this.getControlName(item)).valueChanges.pipe(
        // tslint:disable-next-line:deprecation
        startWith(null), map((value) => {
            if (value && this.selectiveCartService && this.options.isSaveForLater) {
                this.selectiveCartService.updateEntry(value.entryNumber, value.quantity);
            }
            else if (value) {
                this.activeCartService.updateEntry(value.entryNumber, value.quantity);
            }
        }), map(() => this.form.get(this.getControlName(item))));
    }
}
CartItemListComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-cart-item-list',
                template: "<div *ngIf=\"hasHeader\" class=\"d-none d-md-block d-lg-block d-xl-block\">\n  <div class=\"cx-item-list-header row\">\n    <div class=\"cx-item-list-desc col-md-5 col-lg-5 col-xl-6\">\n      {{ 'cartItems.description' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-price col-md-3 col-lg-2 col-xl-2\">\n      {{ 'cartItems.itemPrice' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-qty col-md-2 col-lg-3 col-xl-2\">\n      {{ 'cartItems.quantity' | cxTranslate }}\n    </div>\n\n    <ng-container *ngIf=\"options.isSaveForLater; else totalHeader\">\n      <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n        {{ 'saveForLaterItems.stock' | cxTranslate }}\n      </div>\n    </ng-container>\n  </div>\n</div>\n\n<div class=\"cx-item-list-row\" *ngFor=\"let item of items; let i = index\">\n  <div\n    class=\"cx-item-list-items\"\n    *ngIf=\"getControl(item) | async as control\"\n    [class.is-changed]=\"control.get('quantity').dirty\"\n  >\n    <cx-cart-item\n      [item]=\"item\"\n      [quantityControl]=\"control.get('quantity')\"\n      [readonly]=\"readonly\"\n      [promotionLocation]=\"promotionLocation\"\n      [options]=\"options\"\n    >\n    </cx-cart-item>\n  </div>\n</div>\n\n<ng-template #totalHeader>\n  <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n    {{ 'cartItems.total' | cxTranslate }}\n  </div>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
CartItemListComponent.ctorParameters = () => [
    { type: ActiveCartService },
    { type: SelectiveCartService }
];
CartItemListComponent.propDecorators = {
    readonly: [{ type: Input }],
    hasHeader: [{ type: Input }],
    options: [{ type: Input }],
    items: [{ type: Input, args: ['items',] }],
    promotionLocation: [{ type: Input }],
    setLoading: [{ type: Input, args: ['cartIsLoading',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LXNoYXJlZC9jYXJ0LWl0ZW0tbGlzdC9jYXJ0LWl0ZW0tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQ0wsaUJBQWlCLEVBRWpCLGlCQUFpQixFQUNqQixvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBV2hELE1BQU0sT0FBTyxxQkFBcUI7SUFxQ2hDLFlBQ1ksaUJBQW9DLEVBQ3BDLG9CQUEwQztRQUQxQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUF0QzdDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUVqQixZQUFPLEdBQTZCO1lBQzNDLGNBQWMsRUFBRSxLQUFLO1lBQ3JCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUM7UUFFTSxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBZW5CLHNCQUFpQixHQUFzQixpQkFBaUIsQ0FBQyxVQUFVLENBQUM7SUFlMUUsQ0FBQztJQTNCSixJQUlJLEtBQUssQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFDRCxJ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QUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJO1FBQy9ELHVDQUF1QztRQUN2QyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQ2YsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDWixJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsb0JBQW9CLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUU7Z0JBQ3JFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQ25DLEtBQUssQ0FBQyxXQUFXLEVBQ2pCLEtBQUssQ0FBQyxRQUFRLENBQ2YsQ0FBQzthQUNIO2lCQUFNLElBQUksS0FBSyxFQUFFO2dCQUNoQixJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3ZFO1FBQ0gsQ0FBQyxDQUFDLEVBQ0YsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUMvRCxDQUFDO0lBQ0osQ0FBQzs7O1lBbkhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixzNENBQThDO2dCQUM5QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O1lBaEJDLGlCQUFpQjtZQUdqQixvQkFBb0I7Ozt1QkFlbkIsS0FBSzt3QkFFTCxLQUFLO3NCQUVMLEtBQUs7b0JBUUwsS0FBSyxTQUFDLE9BQU87Z0NBWWIsS0FBSzt5QkFFTCxLQUFLLFNBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQWN0aXZlQ2FydFNlcnZpY2UsXG4gIENvbnNpZ25tZW50RW50cnksXG4gIFByb21vdGlvbkxvY2F0aW9uLFxuICBTZWxlY3RpdmVDYXJ0U2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgQ2FydEl0ZW1Db21wb25lbnRPcHRpb25zLFxuICBJdGVtLFxufSBmcm9tICcuLi9jYXJ0LWl0ZW0vY2FydC1pdGVtLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNhcnQtaXRlbS1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcnQtaXRlbS1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENhcnRJdGVtTGlzdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHJlYWRvbmx5ID0gZmFsc2U7XG5cbiAgQElucHV0KCkgaGFzSGVhZGVyID0gdHJ1ZTtcblxuICBASW5wdXQoKSBvcHRpb25zOiBDYXJ0SXRlbUNvbXBvbmVudE9wdGlvbnMgPSB7XG4gICAgaXNTYXZlRm9yTGF0ZXI6IGZhbHNlLFxuICAgIG9wdGlvbmFsQnRuOiBudWxsLFxuICB9O1xuXG4gIHByaXZhdGUgX2l0ZW1zOiBJdGVtW10gPSBbXTtcbiAgZm9ybTogRm9ybUdyb3VwO1xuXG4gIEBJbnB1dCgnaXRlbXMnKVxuICAvLyBUT0RPOiBjdXJyZW50bHkgd2UncmUgZ2V0dGluZyBhIG5ldyBhcnJheSBvZiBpdGVtcyBpZiB0aGUgY2FydCBjaGFuZ2VzLlxuICAvLyBwcmV0dHkgYW5ub3lpbmcgYXMgaXQgZm9yY2VzIGEgcmVwYWludCBvbiB0aGUgc2NyZWVuLFxuICAvLyB3aGljaCBpcyBub3RpY2FibGUgaW4gdGhlIFVJLlxuICBzZXQgaXRlbXMoaXRlbXM6IEl0ZW1bXSkge1xuICAgIHRoaXMucmVzb2x2ZUl0ZW1zKGl0ZW1zKTtcbiAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcbiAgfVxuICBnZXQgaXRlbXMoKTogSXRlbVtdIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gIH1cblxuICBASW5wdXQoKSBwcm9tb3Rpb25Mb2NhdGlvbjogUHJvbW90aW9uTG9jYXRpb24gPSBQcm9tb3Rpb25Mb2NhdGlvbi5BY3RpdmVDYXJ0O1xuXG4gIEBJbnB1dCgnY2FydElzTG9hZGluZycpIHNldCBzZXRMb2FkaW5nKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKCF0aGlzLnJlYWRvbmx5KSB7XG4gICAgICAvLyBXaGVudmVyIHRoZSBjYXJ0IGlzIGxvYWRpbmcsIHdlIGRpc2FibGUgdGhlIGNvbXBsZXRlIGZvcm1cbiAgICAgIC8vIHRvIGF2b2lkIGFueSB1c2VyIGludGVyYWN0aW9uIHdpdGggdGhlIGNhcnQuXG4gICAgICB2YWx1ZVxuICAgICAgICA/IHRoaXMuZm9ybS5kaXNhYmxlKHsgZW1pdEV2ZW50OiBmYWxzZSB9KVxuICAgICAgICA6IHRoaXMuZm9ybS5lbmFibGUoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHNlbGVjdGl2ZUNhcnRTZXJ2aWNlOiBTZWxlY3RpdmVDYXJ0U2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFRoZSBpdGVtcyB3ZSdyZSBnZXR0aW5nIGZvcm0gdGhlIGlucHV0IGRvIG5vdCBoYXZlIGEgY29uc2lzdGVudCBtb2RlbC5cbiAgICogSW4gY2FzZSBvZiBhIGBjb25zaWdubWVudEVudHJ5YCwgd2UgbmVlZCB0byBub3JtYWxpemUgdGhlIGRhdGEgZnJvbSB0aGUgb3JkZXJFbnRyeS5cbiAgICovXG4gIHByaXZhdGUgcmVzb2x2ZUl0ZW1zKGl0ZW1zOiBJdGVtW10pOiB2b2lkIHtcbiAgICBpZiAoIWl0ZW1zKSB7XG4gICAgICB0aGlzLl9pdGVtcyA9IFtdO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpdGVtcy5ldmVyeSgoaXRlbSkgPT4gaXRlbS5oYXNPd25Qcm9wZXJ0eSgnb3JkZXJFbnRyeScpKSkge1xuICAgICAgdGhpcy5faXRlbXMgPSBpdGVtcy5tYXAoKGNvbnNpZ25tZW50RW50cnkpID0+IHtcbiAgICAgICAgY29uc3QgZW50cnkgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIHt9LFxuICAgICAgICAgIChjb25zaWdubWVudEVudHJ5IGFzIENvbnNpZ25tZW50RW50cnkpLm9yZGVyRW50cnlcbiAgICAgICAgKTtcbiAgICAgICAgZW50cnkucXVhbnRpdHkgPSBjb25zaWdubWVudEVudHJ5LnF1YW50aXR5O1xuICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faXRlbXMgPSBpdGVtcztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUZvcm0oKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cCh7fSk7XG4gICAgdGhpcy5faXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgY29udHJvbE5hbWUgPSB0aGlzLmdldENvbnRyb2xOYW1lKGl0ZW0pO1xuICAgICAgY29uc3QgZ3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgICAgZW50cnlOdW1iZXI6IG5ldyBGb3JtQ29udHJvbChpdGVtLmVudHJ5TnVtYmVyKSxcbiAgICAgICAgcXVhbnRpdHk6IG5ldyBGb3JtQ29udHJvbChpdGVtLnF1YW50aXR5LCB7IHVwZGF0ZU9uOiAnYmx1cicgfSksXG4gICAgICB9KTtcbiAgICAgIGlmICghaXRlbS51cGRhdGVhYmxlIHx8IHRoaXMucmVhZG9ubHkpIHtcbiAgICAgICAgZ3JvdXAuZGlzYWJsZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5mb3JtLmFkZENvbnRyb2woY29udHJvbE5hbWUsIGdyb3VwKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDb250cm9sTmFtZShpdGVtOiBJdGVtKTogc3RyaW5nIHtcbiAgICByZXR1cm4gaXRlbS5lbnRyeU51bWJlci50b1N0cmluZygpO1xuICB9XG5cbiAgcmVtb3ZlRW50cnkoaXRlbTogSXRlbSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNlbGVjdGl2ZUNhcnRTZXJ2aWNlICYmIHRoaXMub3B0aW9ucy5pc1NhdmVGb3JMYXRlcikge1xuICAgICAgdGhpcy5zZWxlY3RpdmVDYXJ0U2VydmljZS5yZW1vdmVFbnRyeShpdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5yZW1vdmVFbnRyeShpdGVtKTtcbiAgICB9XG4gICAgZGVsZXRlIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmdldENvbnRyb2xOYW1lKGl0ZW0pXTtcbiAgfVxuXG4gIGdldENvbnRyb2woaXRlbTogSXRlbSk6IE9ic2VydmFibGU8Rm9ybUdyb3VwPiB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5nZXQodGhpcy5nZXRDb250cm9sTmFtZShpdGVtKSkudmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGVwcmVjYXRpb25cbiAgICAgIHN0YXJ0V2l0aChudWxsKSxcbiAgICAgIG1hcCgodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlICYmIHRoaXMuc2VsZWN0aXZlQ2FydFNlcnZpY2UgJiYgdGhpcy5vcHRpb25zLmlzU2F2ZUZvckxhdGVyKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RpdmVDYXJ0U2VydmljZS51cGRhdGVFbnRyeShcbiAgICAgICAgICAgIHZhbHVlLmVudHJ5TnVtYmVyLFxuICAgICAgICAgICAgdmFsdWUucXVhbnRpdHlcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZS51cGRhdGVFbnRyeSh2YWx1ZS5lbnRyeU51bWJlciwgdmFsdWUucXVhbnRpdHkpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgoKSA9PiA8Rm9ybUdyb3VwPnRoaXMuZm9ybS5nZXQodGhpcy5nZXRDb250cm9sTmFtZShpdGVtKSkpXG4gICAgKTtcbiAgfVxufVxuIl19