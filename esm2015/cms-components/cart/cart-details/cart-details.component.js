/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartService, PromotionLocation, } from '@spartacus/core';
import { filter } from 'rxjs/operators';
import { PromotionService } from '../../../shared/services/promotion/promotion.service';
export class CartDetailsComponent {
    /**
     * @param {?} cartService
     * @param {?=} promotionService
     */
    constructor(cartService, promotionService) {
        this.cartService = cartService;
        this.promotionService = promotionService;
        this.promotionLocation = PromotionLocation.ActiveCart;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.cart$ = this.cartService.getActive();
        this.entries$ = this.cartService
            .getEntries()
            .pipe(filter((/**
         * @param {?} entries
         * @return {?}
         */
        entries => entries.length > 0)));
        this.cartLoaded$ = this.cartService.getLoaded();
        this.orderPromotions$ = this.promotionService.getOrderPromotions(this.promotionLocation);
    }
    /**
     * @deprecated Since 1.4
     * Use promotionService instead of the promotion inputs.
     * Remove issue: #5670
     * @param {?} cart
     * @return {?}
     */
    getAllPromotionsForCart(cart) {
        /** @type {?} */
        const potentialPromotions = [];
        potentialPromotions.push(...(cart.potentialOrderPromotions || []));
        potentialPromotions.push(...(cart.potentialProductPromotions || []));
        /** @type {?} */
        const appliedPromotions = [];
        appliedPromotions.push(...(cart.appliedOrderPromotions || []));
        appliedPromotions.push(...(cart.appliedProductPromotions || []));
        return [...potentialPromotions, ...appliedPromotions];
    }
}
CartDetailsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-cart-details',
                template: "<ng-container *ngIf=\"cart$ | async as cart\">\n  <ng-container *ngIf=\"entries$ | async as entries\">\n    <div class=\"cart-details-wrapper\">\n      <div class=\"cx-total\">\n        {{ 'cartDetails.cartName' | cxTranslate: { code: cart.code } }}\n      </div>\n\n      <ng-container *cxFeatureLevel=\"'!1.4'\">\n        <cx-promotions\n          [promotions]=\"getAllPromotionsForCart(cart)\"\n        ></cx-promotions>\n\n        <cx-cart-item-list\n          [items]=\"entries\"\n          [cartIsLoading]=\"!(cartLoaded$ | async)\"\n          [potentialProductPromotions]=\"cart.potentialProductPromotions\"\n        ></cx-cart-item-list>\n      </ng-container>\n\n      <ng-container *cxFeatureLevel=\"'1.4'\">\n        <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n          <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n        </ng-container>\n\n        <cx-cart-item-list\n          [items]=\"entries\"\n          [cartIsLoading]=\"!(cartLoaded$ | async)\"\n          [promotionLocation]=\"promotionLocation\"\n        ></cx-cart-item-list>\n      </ng-container>\n    </div>\n  </ng-container>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CartDetailsComponent.ctorParameters = () => [
    { type: CartService },
    { type: PromotionService }
];
if (false) {
    /** @type {?} */
    CartDetailsComponent.prototype.cart$;
    /** @type {?} */
    CartDetailsComponent.prototype.entries$;
    /** @type {?} */
    CartDetailsComponent.prototype.cartLoaded$;
    /** @type {?} */
    CartDetailsComponent.prototype.orderPromotions$;
    /** @type {?} */
    CartDetailsComponent.prototype.promotionLocation;
    /**
     * @type {?}
     * @protected
     */
    CartDetailsComponent.prototype.cartService;
    /**
     * @type {?}
     * @protected
     */
    CartDetailsComponent.prototype.promotionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NhcnQvY2FydC1kZXRhaWxzL2NhcnQtZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUVMLFdBQVcsRUFHWCxpQkFBaUIsR0FDbEIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFPeEYsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7SUFvQi9CLFlBQ1ksV0FBd0IsRUFDeEIsZ0JBQW1DO1FBRG5DLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBbUI7UUFqQi9DLHNCQUFpQixHQUFzQixpQkFBaUIsQ0FBQyxVQUFVLENBQUM7SUFrQmpFLENBQUM7Ozs7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVc7YUFDN0IsVUFBVSxFQUFFO2FBQ1osSUFBSSxDQUFDLE1BQU07Ozs7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FDOUQsSUFBSSxDQUFDLGlCQUFpQixDQUN2QixDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7SUFPRCx1QkFBdUIsQ0FBQyxJQUFVOztjQUMxQixtQkFBbUIsR0FBRyxFQUFFO1FBQzlCLG1CQUFtQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLHdCQUF3QixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkUsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQzs7Y0FFL0QsaUJBQWlCLEdBQUcsRUFBRTtRQUM1QixpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9ELGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLHdCQUF3QixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFakUsT0FBTyxDQUFDLEdBQUcsbUJBQW1CLEVBQUUsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7OztZQXhERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsNnBDQUE0QztnQkFDNUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFiQyxXQUFXO1lBT0osZ0JBQWdCOzs7O0lBUXZCLHFDQUF3Qjs7SUFDeEIsd0NBQW1DOztJQUNuQywyQ0FBaUM7O0lBQ2pDLGdEQUFnRDs7SUFDaEQsaURBQW9FOzs7OztJQWdCbEUsMkNBQWtDOzs7OztJQUNsQyxnREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENhcnQsXG4gIENhcnRTZXJ2aWNlLFxuICBPcmRlckVudHJ5LFxuICBQcm9tb3Rpb25SZXN1bHQsXG4gIFByb21vdGlvbkxvY2F0aW9uLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUHJvbW90aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9wcm9tb3Rpb24vcHJvbW90aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jYXJ0LWRldGFpbHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FydC1kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENhcnREZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY2FydCQ6IE9ic2VydmFibGU8Q2FydD47XG4gIGVudHJpZXMkOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT47XG4gIGNhcnRMb2FkZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBvcmRlclByb21vdGlvbnMkOiBPYnNlcnZhYmxlPFByb21vdGlvblJlc3VsdFtdPjtcbiAgcHJvbW90aW9uTG9jYXRpb246IFByb21vdGlvbkxvY2F0aW9uID0gUHJvbW90aW9uTG9jYXRpb24uQWN0aXZlQ2FydDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVuaWZpZWQtc2lnbmF0dXJlc1xuICAgIHByb21vdGlvblNlcnZpY2U6IFByb21vdGlvblNlcnZpY2VcbiAgKTtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS40XG4gICAqIFVzZSBwcm9tb3Rpb25TZXJ2aWNlIGluc3RlYWQgb2YgdGhlIHByb21vdGlvbiBpbnB1dHMuXG4gICAqIFJlbW92ZSBpc3N1ZTogIzU2NzBcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcHJvbW90aW9uU2VydmljZT86IFByb21vdGlvblNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY2FydCQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpO1xuICAgIHRoaXMuZW50cmllcyQgPSB0aGlzLmNhcnRTZXJ2aWNlXG4gICAgICAuZ2V0RW50cmllcygpXG4gICAgICAucGlwZShmaWx0ZXIoZW50cmllcyA9PiBlbnRyaWVzLmxlbmd0aCA+IDApKTtcbiAgICB0aGlzLmNhcnRMb2FkZWQkID0gdGhpcy5jYXJ0U2VydmljZS5nZXRMb2FkZWQoKTtcbiAgICB0aGlzLm9yZGVyUHJvbW90aW9ucyQgPSB0aGlzLnByb21vdGlvblNlcnZpY2UuZ2V0T3JkZXJQcm9tb3Rpb25zKFxuICAgICAgdGhpcy5wcm9tb3Rpb25Mb2NhdGlvblxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS40XG4gICAqIFVzZSBwcm9tb3Rpb25TZXJ2aWNlIGluc3RlYWQgb2YgdGhlIHByb21vdGlvbiBpbnB1dHMuXG4gICAqIFJlbW92ZSBpc3N1ZTogIzU2NzBcbiAgICovXG4gIGdldEFsbFByb21vdGlvbnNGb3JDYXJ0KGNhcnQ6IENhcnQpOiBhbnlbXSB7XG4gICAgY29uc3QgcG90ZW50aWFsUHJvbW90aW9ucyA9IFtdO1xuICAgIHBvdGVudGlhbFByb21vdGlvbnMucHVzaCguLi4oY2FydC5wb3RlbnRpYWxPcmRlclByb21vdGlvbnMgfHwgW10pKTtcbiAgICBwb3RlbnRpYWxQcm9tb3Rpb25zLnB1c2goLi4uKGNhcnQucG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnMgfHwgW10pKTtcblxuICAgIGNvbnN0IGFwcGxpZWRQcm9tb3Rpb25zID0gW107XG4gICAgYXBwbGllZFByb21vdGlvbnMucHVzaCguLi4oY2FydC5hcHBsaWVkT3JkZXJQcm9tb3Rpb25zIHx8IFtdKSk7XG4gICAgYXBwbGllZFByb21vdGlvbnMucHVzaCguLi4oY2FydC5hcHBsaWVkUHJvZHVjdFByb21vdGlvbnMgfHwgW10pKTtcblxuICAgIHJldHVybiBbLi4ucG90ZW50aWFsUHJvbW90aW9ucywgLi4uYXBwbGllZFByb21vdGlvbnNdO1xuICB9XG59XG4iXX0=