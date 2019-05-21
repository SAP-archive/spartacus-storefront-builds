/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CartService } from '@spartacus/core';
export class CheckoutOrderSummaryComponent {
    /**
     * @param {?} cartService
     */
    constructor(cartService) {
        this.cartService = cartService;
        this.cart$ = this.cartService.getActive();
    }
}
CheckoutOrderSummaryComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-checkout-order-summary',
                template: "<cx-order-summary [cart]=\"cart$ | async\"></cx-order-summary>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CheckoutOrderSummaryComponent.ctorParameters = () => [
    { type: CartService }
];
if (false) {
    /** @type {?} */
    CheckoutOrderSummaryComponent.prototype.cart$;
    /**
     * @type {?}
     * @protected
     */
    CheckoutOrderSummaryComponent.prototype.cartService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtb3JkZXItc3VtbWFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvY29tcG9uZW50cy9jaGVja291dC1vcmRlci1zdW1tYXJ5L2NoZWNrb3V0LW9yZGVyLXN1bW1hcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5FLE9BQU8sRUFBRSxXQUFXLEVBQVEsTUFBTSxpQkFBaUIsQ0FBQztBQU1wRCxNQUFNLE9BQU8sNkJBQTZCOzs7O0lBR3hDLFlBQXNCLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQzVDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM1QyxDQUFDOzs7WUFWRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsNEVBQXNEO2dCQUN0RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQUxRLFdBQVc7Ozs7SUFPbEIsOENBQXdCOzs7OztJQUVaLG9EQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhcnRTZXJ2aWNlLCBDYXJ0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNoZWNrb3V0LW9yZGVyLXN1bW1hcnknLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tvdXQtb3JkZXItc3VtbWFyeS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dE9yZGVyU3VtbWFyeUNvbXBvbmVudCB7XG4gIGNhcnQkOiBPYnNlcnZhYmxlPENhcnQ+O1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UpIHtcbiAgICB0aGlzLmNhcnQkID0gdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKTtcbiAgfVxufVxuIl19