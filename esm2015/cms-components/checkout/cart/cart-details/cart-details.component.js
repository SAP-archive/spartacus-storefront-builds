/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartService } from '@spartacus/core';
import { filter } from 'rxjs/operators';
export class CartDetailsComponent {
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
        this.cartLoaded$ = this.cartService.getLoaded();
    }
    /**
     * @param {?} cart
     * @return {?}
     */
    getAllPromotionsForCart(cart) {
        /** @type {?} */
        const potentialPromotions = cart.potentialOrderPromotions || [];
        /** @type {?} */
        const appliedPromotions = cart.appliedOrderPromotions || [];
        return [...potentialPromotions, ...appliedPromotions];
    }
}
CartDetailsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-cart-details',
                template: "<ng-container *ngIf=\"(cart$ | async) as cart\">\n  <ng-container *ngIf=\"(entries$ | async) as entries\">\n    <div class=\"cart-details-wrapper\">\n      <h1>\n        {{ 'cartDetails.shoppingCart' | cxTranslate }} ({{\n          'cartDetails.id' | cxTranslate\n        }}\n        {{ cart?.code }})\n      </h1>\n      <div class=\"cx-total\">\n        {{\n          'cartItems.cartTotal'\n            | cxTranslate: { count: cart.deliveryItemsQuantity }\n        }}:\n        {{ cart.totalPrice?.formattedValue }}\n      </div>\n      <cx-promotions\n        [promotions]=\"getAllPromotionsForCart(cart)\"\n      ></cx-promotions>\n      <cx-cart-item-list\n        [items]=\"entries\"\n        [potentialProductPromotions]=\"cart.potentialProductPromotions\"\n        [cartIsLoading]=\"!(cartLoaded$ | async)\"\n      ></cx-cart-item-list>\n      <!-- NOT FOR MVP  <cx-cart-coupon></cx-cart-coupon> -->\n    </div>\n  </ng-container>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CartDetailsComponent.ctorParameters = () => [
    { type: CartService }
];
if (false) {
    /** @type {?} */
    CartDetailsComponent.prototype.cart$;
    /** @type {?} */
    CartDetailsComponent.prototype.entries$;
    /** @type {?} */
    CartDetailsComponent.prototype.cartLoaded$;
    /**
     * @type {?}
     * @protected
     */
    CartDetailsComponent.prototype.cartService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NoZWNrb3V0L2NhcnQvY2FydC1kZXRhaWxzL2NhcnQtZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFM0UsT0FBTyxFQUFFLFdBQVcsRUFBd0IsTUFBTSxpQkFBaUIsQ0FBQztBQUdwRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPeEMsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUsvQixZQUFzQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFHLENBQUM7Ozs7SUFFbEQsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXO2FBQzdCLFVBQVUsRUFBRTthQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xELENBQUM7Ozs7O0lBRUQsdUJBQXVCLENBQUMsSUFBWTs7Y0FDNUIsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixJQUFJLEVBQUU7O2NBQ3pELGlCQUFpQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsSUFBSSxFQUFFO1FBQzNELE9BQU8sQ0FBQyxHQUFHLG1CQUFtQixFQUFFLEdBQUcsaUJBQWlCLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7WUF4QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLHk4QkFBNEM7Z0JBQzVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBVFEsV0FBVzs7OztJQVdsQixxQ0FBMEI7O0lBQzFCLHdDQUFxQzs7SUFDckMsMkNBQWlDOzs7OztJQUVyQiwyQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2FydFNlcnZpY2UsIFVJQ2FydCwgVUlPcmRlckVudHJ5IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jYXJ0LWRldGFpbHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FydC1kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENhcnREZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY2FydCQ6IE9ic2VydmFibGU8VUlDYXJ0PjtcbiAgZW50cmllcyQ6IE9ic2VydmFibGU8VUlPcmRlckVudHJ5W10+O1xuICBjYXJ0TG9hZGVkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY2FydCQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpO1xuICAgIHRoaXMuZW50cmllcyQgPSB0aGlzLmNhcnRTZXJ2aWNlXG4gICAgICAuZ2V0RW50cmllcygpXG4gICAgICAucGlwZShmaWx0ZXIoZW50cmllcyA9PiBlbnRyaWVzLmxlbmd0aCA+IDApKTtcbiAgICB0aGlzLmNhcnRMb2FkZWQkID0gdGhpcy5jYXJ0U2VydmljZS5nZXRMb2FkZWQoKTtcbiAgfVxuXG4gIGdldEFsbFByb21vdGlvbnNGb3JDYXJ0KGNhcnQ6IFVJQ2FydCk6IFVJQ2FydFtdIHtcbiAgICBjb25zdCBwb3RlbnRpYWxQcm9tb3Rpb25zID0gY2FydC5wb3RlbnRpYWxPcmRlclByb21vdGlvbnMgfHwgW107XG4gICAgY29uc3QgYXBwbGllZFByb21vdGlvbnMgPSBjYXJ0LmFwcGxpZWRPcmRlclByb21vdGlvbnMgfHwgW107XG4gICAgcmV0dXJuIFsuLi5wb3RlbnRpYWxQcm9tb3Rpb25zLCAuLi5hcHBsaWVkUHJvbW90aW9uc107XG4gIH1cbn1cbiJdfQ==