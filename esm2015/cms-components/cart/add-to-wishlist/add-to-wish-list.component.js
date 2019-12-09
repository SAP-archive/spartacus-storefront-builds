/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService, WishListService, } from '@spartacus/core';
import { filter, map, tap } from 'rxjs/operators';
import { ICON_TYPE } from '../../../cms-components/misc/index';
import { CurrentProductService } from '../../product/current-product.service';
export class AddToWishListComponent {
    /**
     * @param {?} wishListService
     * @param {?} currentProductService
     * @param {?} authService
     */
    constructor(wishListService, currentProductService, authService) {
        this.wishListService = wishListService;
        this.currentProductService = currentProductService;
        this.authService = authService;
        this.product$ = this.currentProductService.getProduct().pipe(filter((/**
         * @param {?} product
         * @return {?}
         */
        product => Boolean(product))), tap((/**
         * @param {?} product
         * @return {?}
         */
        product => this.setStockInfo(product))));
        this.wishListEntries$ = this.wishListService.getWishList().pipe(filter((/**
         * @param {?} wishlist
         * @return {?}
         */
        wishlist => Boolean(wishlist))), map((/**
         * @param {?} wishList
         * @return {?}
         */
        wishList => wishList.entries)));
        this.userLoggedIn$ = this.authService.isUserLoggedIn();
        this.loading$ = this.wishListService.getWishListLoading();
        this.hasStock = false;
        this.iconTypes = ICON_TYPE;
    }
    /**
     * @param {?} product
     * @return {?}
     */
    add(product) {
        this.wishListService.addEntry(product.code);
    }
    /**
     * @param {?} entry
     * @return {?}
     */
    remove(entry) {
        this.wishListService.removeEntry(entry);
    }
    /**
     * @param {?} product
     * @param {?} entries
     * @return {?}
     */
    getProductInWishList(product, entries) {
        /** @type {?} */
        const item = entries.find((/**
         * @param {?} entry
         * @return {?}
         */
        entry => entry.product.code === product.code));
        return item;
    }
    /**
     * @private
     * @param {?} product
     * @return {?}
     */
    setStockInfo(product) {
        this.hasStock =
            product.stock && product.stock.stockLevelStatus !== 'outOfStock';
    }
}
AddToWishListComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-add-to-wishlist',
                template: "<ng-container *ngIf=\"userLoggedIn$ | async\">\n  <ng-container *ngIf=\"product$ | async as product\">\n    <ng-container *ngIf=\"wishListEntries$ | async as entries\">\n      <ng-container *ngIf=\"hasStock\">\n        <div\n          *ngIf=\"getProductInWishList(product, entries) as entry; else addItem\"\n        >\n          <span\n            >{{ 'addToWishList.inWishList' | cxTranslate }} (<button\n              class=\"btn btn-link button-remove\"\n              (click)=\"remove(entry)\"\n              [disabled]=\"loading$ | async\"\n            >\n              {{ 'addToWishList.remove' | cxTranslate }}</button\n            >)</span\n          >\n        </div>\n        <ng-template #addItem>\n          <button\n            class=\"btn btn-link button-add\"\n            (click)=\"add(product)\"\n            [disabled]=\"loading$ | async\"\n          >\n            <cx-icon [type]=\"iconTypes.HEART\"></cx-icon>\n            {{ 'addToWishList.add' | cxTranslate }}\n          </button>\n        </ng-template>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
AddToWishListComponent.ctorParameters = () => [
    { type: WishListService },
    { type: CurrentProductService },
    { type: AuthService }
];
if (false) {
    /** @type {?} */
    AddToWishListComponent.prototype.product$;
    /** @type {?} */
    AddToWishListComponent.prototype.wishListEntries$;
    /** @type {?} */
    AddToWishListComponent.prototype.userLoggedIn$;
    /** @type {?} */
    AddToWishListComponent.prototype.loading$;
    /** @type {?} */
    AddToWishListComponent.prototype.hasStock;
    /** @type {?} */
    AddToWishListComponent.prototype.iconTypes;
    /**
     * @type {?}
     * @protected
     */
    AddToWishListComponent.prototype.wishListService;
    /**
     * @type {?}
     * @protected
     */
    AddToWishListComponent.prototype.currentProductService;
    /**
     * @type {?}
     * @protected
     */
    AddToWishListComponent.prototype.authService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLXdpc2gtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jYXJ0L2FkZC10by13aXNobGlzdC9hZGQtdG8td2lzaC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQ0wsV0FBVyxFQUdYLGVBQWUsR0FDaEIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDL0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFPOUUsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7O0lBbUJqQyxZQUNZLGVBQWdDLEVBQ2hDLHFCQUE0QyxFQUM1QyxXQUF3QjtRQUZ4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQXJCcEMsYUFBUSxHQUF3QixJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUMxRSxNQUFNOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUMsRUFDbkMsR0FBRzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUMzQyxDQUFDO1FBRUYscUJBQWdCLEdBRVosSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQ3pDLE1BQU07Ozs7UUFBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBQyxFQUNyQyxHQUFHOzs7O1FBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFDLENBQ2xDLENBQUM7UUFFRixrQkFBYSxHQUF3QixJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZFLGFBQVEsR0FBd0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBRTFFLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsY0FBUyxHQUFHLFNBQVMsQ0FBQztJQU1uQixDQUFDOzs7OztJQUVKLEdBQUcsQ0FBQyxPQUFnQjtRQUNsQixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBaUI7UUFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7O0lBRUQsb0JBQW9CLENBQUMsT0FBZ0IsRUFBRSxPQUFxQjs7Y0FDcEQsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsSUFBSSxFQUFDO1FBQ3ZFLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7O0lBRU8sWUFBWSxDQUFDLE9BQWdCO1FBQ25DLElBQUksQ0FBQyxRQUFRO1lBQ1gsT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixLQUFLLFlBQVksQ0FBQztJQUNyRSxDQUFDOzs7WUE5Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLGttQ0FBZ0Q7Z0JBQ2hELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBWEMsZUFBZTtZQUtSLHFCQUFxQjtZQVI1QixXQUFXOzs7O0lBZ0JYLDBDQUdFOztJQUVGLGtEQUtFOztJQUVGLCtDQUF1RTs7SUFDdkUsMENBQTBFOztJQUUxRSwwQ0FBaUI7O0lBQ2pCLDJDQUFzQjs7Ozs7SUFHcEIsaURBQTBDOzs7OztJQUMxQyx1REFBc0Q7Ozs7O0lBQ3RELDZDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEF1dGhTZXJ2aWNlLFxuICBPcmRlckVudHJ5LFxuICBQcm9kdWN0LFxuICBXaXNoTGlzdFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pbmRleCc7XG5pbXBvcnQgeyBDdXJyZW50UHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9wcm9kdWN0L2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYWRkLXRvLXdpc2hsaXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC10by13aXNoLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQWRkVG9XaXNoTGlzdENvbXBvbmVudCB7XG4gIHByb2R1Y3QkOiBPYnNlcnZhYmxlPFByb2R1Y3Q+ID0gdGhpcy5jdXJyZW50UHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdCgpLnBpcGUoXG4gICAgZmlsdGVyKHByb2R1Y3QgPT4gQm9vbGVhbihwcm9kdWN0KSksXG4gICAgdGFwKHByb2R1Y3QgPT4gdGhpcy5zZXRTdG9ja0luZm8ocHJvZHVjdCkpXG4gICk7XG5cbiAgd2lzaExpc3RFbnRyaWVzJDogT2JzZXJ2YWJsZTxcbiAgICBPcmRlckVudHJ5W11cbiAgPiA9IHRoaXMud2lzaExpc3RTZXJ2aWNlLmdldFdpc2hMaXN0KCkucGlwZShcbiAgICBmaWx0ZXIod2lzaGxpc3QgPT4gQm9vbGVhbih3aXNobGlzdCkpLFxuICAgIG1hcCh3aXNoTGlzdCA9PiB3aXNoTGlzdC5lbnRyaWVzKVxuICApO1xuXG4gIHVzZXJMb2dnZWRJbiQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKCk7XG4gIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy53aXNoTGlzdFNlcnZpY2UuZ2V0V2lzaExpc3RMb2FkaW5nKCk7XG5cbiAgaGFzU3RvY2sgPSBmYWxzZTtcbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB3aXNoTGlzdFNlcnZpY2U6IFdpc2hMaXN0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY3VycmVudFByb2R1Y3RTZXJ2aWNlOiBDdXJyZW50UHJvZHVjdFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxuICApIHt9XG5cbiAgYWRkKHByb2R1Y3Q6IFByb2R1Y3QpOiB2b2lkIHtcbiAgICB0aGlzLndpc2hMaXN0U2VydmljZS5hZGRFbnRyeShwcm9kdWN0LmNvZGUpO1xuICB9XG5cbiAgcmVtb3ZlKGVudHJ5OiBPcmRlckVudHJ5KTogdm9pZCB7XG4gICAgdGhpcy53aXNoTGlzdFNlcnZpY2UucmVtb3ZlRW50cnkoZW50cnkpO1xuICB9XG5cbiAgZ2V0UHJvZHVjdEluV2lzaExpc3QocHJvZHVjdDogUHJvZHVjdCwgZW50cmllczogT3JkZXJFbnRyeVtdKTogT3JkZXJFbnRyeSB7XG4gICAgY29uc3QgaXRlbSA9IGVudHJpZXMuZmluZChlbnRyeSA9PiBlbnRyeS5wcm9kdWN0LmNvZGUgPT09IHByb2R1Y3QuY29kZSk7XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICBwcml2YXRlIHNldFN0b2NrSW5mbyhwcm9kdWN0OiBQcm9kdWN0KTogdm9pZCB7XG4gICAgdGhpcy5oYXNTdG9jayA9XG4gICAgICBwcm9kdWN0LnN0b2NrICYmIHByb2R1Y3Quc3RvY2suc3RvY2tMZXZlbFN0YXR1cyAhPT0gJ291dE9mU3RvY2snO1xuICB9XG59XG4iXX0=