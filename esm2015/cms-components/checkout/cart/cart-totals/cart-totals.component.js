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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC10b3RhbHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY2FydC9jYXJ0LXRvdGFscy9jYXJ0LXRvdGFscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFM0UsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhDLE9BQU8sRUFBb0IsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFRaEUsTUFBTSxPQUFPLG1CQUFtQjs7OztJQUk5QixZQUFzQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFHLENBQUM7Ozs7SUFFbEQsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXO2FBQzdCLFVBQVUsRUFBRTthQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7O1lBakJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQiw2aEJBQTJDO2dCQUUzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7WUFQMEIsV0FBVzs7OztJQVNwQyxvQ0FBd0I7O0lBQ3hCLHVDQUFtQzs7Ozs7SUFFdkIsMENBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IENhcnQsIE9yZGVyRW50cnksIENhcnRTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2FydC10b3RhbHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FydC10b3RhbHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJ0LXRvdGFscy5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydFRvdGFsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNhcnQkOiBPYnNlcnZhYmxlPENhcnQ+O1xuICBlbnRyaWVzJDogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+O1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jYXJ0JCA9IHRoaXMuY2FydFNlcnZpY2UuZ2V0QWN0aXZlKCk7XG4gICAgdGhpcy5lbnRyaWVzJCA9IHRoaXMuY2FydFNlcnZpY2VcbiAgICAgIC5nZXRFbnRyaWVzKClcbiAgICAgIC5waXBlKGZpbHRlcihlbnRyaWVzID0+IGVudHJpZXMubGVuZ3RoID4gMCkpO1xuICB9XG59XG4iXX0=