/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { filter } from 'rxjs/operators';
import { CartService } from '@spartacus/core';
export class CartTotalsComponent {
    /**
     * @param {?} cartService
     */
    constructor(cartService) {
        this.cartService = cartService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.cart$ = this.cartService.getActive();
        this.entries$ = this.cartService
            .getEntries()
            .pipe(filter(entries => entries.length > 0));
    }
}
CartTotalsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-cart-totals',
                template: "<ng-container *ngIf=\"(cart$ | async) as cart\">\n  <ng-container *ngIf=\"(entries$ | async) as entries\">\n    <div class=\"cart-totals-wrapper\">\n      <cx-order-summary [cart]=\"cart\"></cx-order-summary>\n      <button\n        [routerLink]=\"{ route: 'checkout' } | cxTranslateUrl\"\n        *ngIf=\"entries.length\"\n        class=\"btn btn-primary btn-block\"\n        type=\"button\"\n      >\n        {{ 'cartDetails.proceedToCheckout' | cxTranslate }}\n      </button>\n    </div>\n  </ng-container>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".cart-totals-wrapper{padding:2rem 1rem}cx-order-summary{padding:0}"]
            }] }
];
/** @nocollapse */
CartTotalsComponent.ctorParameters = () => [
    { type: CartService }
];
if (false) {
    /** @type {?} */
    CartTotalsComponent.prototype.cart$;
    /** @type {?} */
    CartTotalsComponent.prototype.entries$;
    /**
     * @type {?}
     * @protected
     */
    CartTotalsComponent.prototype.cartService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC10b3RhbHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY2FydC9jYXJ0LXRvdGFscy9jYXJ0LXRvdGFscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFM0UsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhDLE9BQU8sRUFBd0IsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFRcEUsTUFBTSxPQUFPLG1CQUFtQjs7OztJQUk5QixZQUFzQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFHLENBQUM7Ozs7SUFFbEQsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXO2FBQzdCLFVBQVUsRUFBRTthQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7O1lBakJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQiw2aEJBQTJDO2dCQUUzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7WUFQOEIsV0FBVzs7OztJQVN4QyxvQ0FBMEI7O0lBQzFCLHVDQUFxQzs7Ozs7SUFFekIsMENBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFVJQ2FydCwgVUlPcmRlckVudHJ5LCBDYXJ0U2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNhcnQtdG90YWxzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcnQtdG90YWxzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FydC10b3RhbHMuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENhcnRUb3RhbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjYXJ0JDogT2JzZXJ2YWJsZTxVSUNhcnQ+O1xuICBlbnRyaWVzJDogT2JzZXJ2YWJsZTxVSU9yZGVyRW50cnlbXT47XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNhcnQkID0gdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKTtcbiAgICB0aGlzLmVudHJpZXMkID0gdGhpcy5jYXJ0U2VydmljZVxuICAgICAgLmdldEVudHJpZXMoKVxuICAgICAgLnBpcGUoZmlsdGVyKGVudHJpZXMgPT4gZW50cmllcy5sZW5ndGggPiAwKSk7XG4gIH1cbn1cbiJdfQ==