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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LXNoYXJlZC9jYXJ0LWl0ZW0tbGlzdC9jYXJ0LWl0ZW0tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQ0wsaUJBQWlCLEVBRWpCLGlCQUFpQixFQUNqQixvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBV2hELE1BQU0sT0FBTyxxQkFBcUI7SUFxQ2hDLFlBQ1ksaUJBQW9DLEVBQ3BDLG9CQUEwQztRQUQxQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUF0QzdDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUVqQixZQUFPLEdBQTZCO1lBQzNDLGNBQWMsRUFBRSxLQUFLO1lBQ3JCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUM7UUFFTSxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBZW5CLHNCQUFpQixHQUFzQixpQkFBaUIsQ0FBQyxVQUFVLENBQUM7SUFlMUUsQ0FBQztJQTNCSixJQUlJLEtBQUssQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFDRCxJ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O1FBQ3ZDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFDZixHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNaLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRTtnQkFDckUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FDbkMsS0FBSyxDQUFDLFdBQVcsRUFDakIsS0FBSyxDQUFDLFFBQVEsQ0FDZixDQUFDO2FBQ0g7aUJBQU0sSUFBSSxLQUFLLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDdkU7UUFDSCxDQUFDLENBQUMsRUFDRixHQUFHLENBQUMsR0FBRyxFQUFFLENBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQy9ELENBQUM7SUFDSixDQUFDOzs7WUE5R0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLHM0Q0FBOEM7Z0JBQzlDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7WUFoQkMsaUJBQWlCO1lBR2pCLG9CQUFvQjs7O3VCQWVuQixLQUFLO3dCQUVMLEtBQUs7c0JBRUwsS0FBSztvQkFRTCxLQUFLLFNBQUMsT0FBTztnQ0FZYixLQUFLO3lCQUVMLEtBQUssU0FBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBBY3RpdmVDYXJ0U2VydmljZSxcbiAgQ29uc2lnbm1lbnRFbnRyeSxcbiAgUHJvbW90aW9uTG9jYXRpb24sXG4gIFNlbGVjdGl2ZUNhcnRTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzdGFydFdpdGggfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBDYXJ0SXRlbUNvbXBvbmVudE9wdGlvbnMsXG4gIEl0ZW0sXG59IGZyb20gJy4uL2NhcnQtaXRlbS9jYXJ0LWl0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2FydC1pdGVtLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FydC1pdGVtLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydEl0ZW1MaXN0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgcmVhZG9ubHkgPSBmYWxzZTtcblxuICBASW5wdXQoKSBoYXNIZWFkZXIgPSB0cnVlO1xuXG4gIEBJbnB1dCgpIG9wdGlvbnM6IENhcnRJdGVtQ29tcG9uZW50T3B0aW9ucyA9IHtcbiAgICBpc1NhdmVGb3JMYXRlcjogZmFsc2UsXG4gICAgb3B0aW9uYWxCdG46IG51bGwsXG4gIH07XG5cbiAgcHJpdmF0ZSBfaXRlbXM6IEl0ZW1bXSA9IFtdO1xuICBmb3JtOiBGb3JtR3JvdXA7XG5cbiAgQElucHV0KCdpdGVtcycpXG4gIC8vIFRPRE86IGN1cnJlbnRseSB3ZSdyZSBnZXR0aW5nIGEgbmV3IGFycmF5IG9mIGl0ZW1zIGlmIHRoZSBjYXJ0IGNoYW5nZXMuXG4gIC8vIHByZXR0eSBhbm5veWluZyBhcyBpdCBmb3JjZXMgYSByZXBhaW50IG9uIHRoZSBzY3JlZW4sXG4gIC8vIHdoaWNoIGlzIG5vdGljYWJsZSBpbiB0aGUgVUkuXG4gIHNldCBpdGVtcyhpdGVtczogSXRlbVtdKSB7XG4gICAgdGhpcy5yZXNvbHZlSXRlbXMoaXRlbXMpO1xuICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xuICB9XG4gIGdldCBpdGVtcygpOiBJdGVtW10ge1xuICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgfVxuXG4gIEBJbnB1dCgpIHByb21vdGlvbkxvY2F0aW9uOiBQcm9tb3Rpb25Mb2NhdGlvbiA9IFByb21vdGlvbkxvY2F0aW9uLkFjdGl2ZUNhcnQ7XG5cbiAgQElucHV0KCdjYXJ0SXNMb2FkaW5nJykgc2V0IHNldExvYWRpbmcodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAoIXRoaXMucmVhZG9ubHkpIHtcbiAgICAgIC8vIFdoZW52ZXIgdGhlIGNhcnQgaXMgbG9hZGluZywgd2UgZGlzYWJsZSB0aGUgY29tcGxldGUgZm9ybVxuICAgICAgLy8gdG8gYXZvaWQgYW55IHVzZXIgaW50ZXJhY3Rpb24gd2l0aCB0aGUgY2FydC5cbiAgICAgIHZhbHVlXG4gICAgICAgID8gdGhpcy5mb3JtLmRpc2FibGUoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pXG4gICAgICAgIDogdGhpcy5mb3JtLmVuYWJsZSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgc2VsZWN0aXZlQ2FydFNlcnZpY2U6IFNlbGVjdGl2ZUNhcnRTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogVGhlIGl0ZW1zIHdlJ3JlIGdldHRpbmcgZm9ybSB0aGUgaW5wdXQgZG8gbm90IGhhdmUgYSBjb25zaXN0ZW50IG1vZGVsLlxuICAgKiBJbiBjYXNlIG9mIGEgYGNvbnNpZ25tZW50RW50cnlgLCB3ZSBuZWVkIHRvIG5vcm1hbGl6ZSB0aGUgZGF0YSBmcm9tIHRoZSBvcmRlckVudHJ5LlxuICAgKi9cbiAgcHJpdmF0ZSByZXNvbHZlSXRlbXMoaXRlbXM6IEl0ZW1bXSk6IHZvaWQge1xuICAgIGlmIChpdGVtcy5ldmVyeSgoaXRlbSkgPT4gaXRlbS5oYXNPd25Qcm9wZXJ0eSgnb3JkZXJFbnRyeScpKSkge1xuICAgICAgdGhpcy5faXRlbXMgPSBpdGVtcy5tYXAoKGNvbnNpZ25tZW50RW50cnkpID0+IHtcbiAgICAgICAgY29uc3QgZW50cnkgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIHt9LFxuICAgICAgICAgIChjb25zaWdubWVudEVudHJ5IGFzIENvbnNpZ25tZW50RW50cnkpLm9yZGVyRW50cnlcbiAgICAgICAgKTtcbiAgICAgICAgZW50cnkucXVhbnRpdHkgPSBjb25zaWdubWVudEVudHJ5LnF1YW50aXR5O1xuICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faXRlbXMgPSBpdGVtcztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUZvcm0oKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cCh7fSk7XG4gICAgdGhpcy5faXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgY29udHJvbE5hbWUgPSB0aGlzLmdldENvbnRyb2xOYW1lKGl0ZW0pO1xuICAgICAgY29uc3QgZ3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgICAgZW50cnlOdW1iZXI6IG5ldyBGb3JtQ29udHJvbChpdGVtLmVudHJ5TnVtYmVyKSxcbiAgICAgICAgcXVhbnRpdHk6IG5ldyBGb3JtQ29udHJvbChpdGVtLnF1YW50aXR5LCB7IHVwZGF0ZU9uOiAnYmx1cicgfSksXG4gICAgICB9KTtcbiAgICAgIGlmICghaXRlbS51cGRhdGVhYmxlIHx8IHRoaXMucmVhZG9ubHkpIHtcbiAgICAgICAgZ3JvdXAuZGlzYWJsZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5mb3JtLmFkZENvbnRyb2woY29udHJvbE5hbWUsIGdyb3VwKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDb250cm9sTmFtZShpdGVtOiBJdGVtKTogc3RyaW5nIHtcbiAgICByZXR1cm4gaXRlbS5lbnRyeU51bWJlci50b1N0cmluZygpO1xuICB9XG5cbiAgcmVtb3ZlRW50cnkoaXRlbTogSXRlbSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNlbGVjdGl2ZUNhcnRTZXJ2aWNlICYmIHRoaXMub3B0aW9ucy5pc1NhdmVGb3JMYXRlcikge1xuICAgICAgdGhpcy5zZWxlY3RpdmVDYXJ0U2VydmljZS5yZW1vdmVFbnRyeShpdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5yZW1vdmVFbnRyeShpdGVtKTtcbiAgICB9XG4gICAgZGVsZXRlIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmdldENvbnRyb2xOYW1lKGl0ZW0pXTtcbiAgfVxuXG4gIGdldENvbnRyb2woaXRlbTogSXRlbSk6IE9ic2VydmFibGU8Rm9ybUdyb3VwPiB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5nZXQodGhpcy5nZXRDb250cm9sTmFtZShpdGVtKSkudmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGVwcmVjYXRpb25cbiAgICAgIHN0YXJ0V2l0aChudWxsKSxcbiAgICAgIG1hcCgodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlICYmIHRoaXMuc2VsZWN0aXZlQ2FydFNlcnZpY2UgJiYgdGhpcy5vcHRpb25zLmlzU2F2ZUZvckxhdGVyKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RpdmVDYXJ0U2VydmljZS51cGRhdGVFbnRyeShcbiAgICAgICAgICAgIHZhbHVlLmVudHJ5TnVtYmVyLFxuICAgICAgICAgICAgdmFsdWUucXVhbnRpdHlcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZS51cGRhdGVFbnRyeSh2YWx1ZS5lbnRyeU51bWJlciwgdmFsdWUucXVhbnRpdHkpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgoKSA9PiA8Rm9ybUdyb3VwPnRoaXMuZm9ybS5nZXQodGhpcy5nZXRDb250cm9sTmFtZShpdGVtKSkpXG4gICAgKTtcbiAgfVxufVxuIl19