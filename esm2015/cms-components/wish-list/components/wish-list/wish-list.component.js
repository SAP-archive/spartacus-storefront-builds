/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { WishListService } from '@spartacus/core';
export class WishListComponent {
    /**
     * @param {?} wishListService
     */
    constructor(wishListService) {
        this.wishListService = wishListService;
        this.wishList$ = this.wishListService.getWishList();
        this.loading$ = this.wishListService.getWishListLoading();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    removeEntry(item) {
        this.wishListService.removeEntry(item);
    }
}
WishListComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-wish-list',
                template: "<ng-container *ngIf=\"wishList$ | async as wishList\">\n  <ng-container *ngIf=\"wishList?.entries?.length > 0; else emptyWishList\">\n    <div class=\"d-none d-md-block d-lg-block d-xl-block\">\n      <div class=\"cx-item-list-header row\">\n        <div class=\"cx-item-list-desc col-md-7 col-lg-6 col-xl-6\">\n          {{ 'cartItems.description' | cxTranslate }}\n        </div>\n        <div class=\"cx-item-list-price col-md-3 col-lg-4 col-xl-4\">\n          {{ 'cartItems.itemPrice' | cxTranslate }}\n        </div>\n        <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n          {{ 'cartItems.total' | cxTranslate }}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"cx-item-list-row\" *ngFor=\"let entry of wishList?.entries\">\n      <cx-wish-list-item\n        [cartEntry]=\"entry\"\n        [isLoading]=\"loading$ | async\"\n        class=\"cx-wish-list-items\"\n        (remove)=\"removeEntry($event)\"\n      ></cx-wish-list-item>\n    </div>\n  </ng-container>\n</ng-container>\n\n<ng-template #emptyWishList>\n  <h2>{{ 'wishlist.empty' | cxTranslate }}</h2>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
WishListComponent.ctorParameters = () => [
    { type: WishListService }
];
if (false) {
    /** @type {?} */
    WishListComponent.prototype.wishList$;
    /** @type {?} */
    WishListComponent.prototype.loading$;
    /**
     * @type {?}
     * @protected
     */
    WishListComponent.prototype.wishListService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3dpc2gtbGlzdC9jb21wb25lbnRzL3dpc2gtbGlzdC93aXNoLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBb0IsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFPcEUsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUk1QixZQUFzQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFIdEQsY0FBUyxHQUFxQixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pFLGFBQVEsR0FBd0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBRWpCLENBQUM7Ozs7O0lBRTFELFdBQVcsQ0FBQyxJQUFnQjtRQUMxQixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7WUFaRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLDRtQ0FBeUM7YUFDMUM7Ozs7WUFOMEIsZUFBZTs7OztJQVF4QyxzQ0FBaUU7O0lBQ2pFLHFDQUEwRTs7Ozs7SUFFOUQsNENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYXJ0LCBPcmRlckVudHJ5LCBXaXNoTGlzdFNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC13aXNoLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vd2lzaC1saXN0LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgV2lzaExpc3RDb21wb25lbnQge1xuICB3aXNoTGlzdCQ6IE9ic2VydmFibGU8Q2FydD4gPSB0aGlzLndpc2hMaXN0U2VydmljZS5nZXRXaXNoTGlzdCgpO1xuICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMud2lzaExpc3RTZXJ2aWNlLmdldFdpc2hMaXN0TG9hZGluZygpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB3aXNoTGlzdFNlcnZpY2U6IFdpc2hMaXN0U2VydmljZSkge31cblxuICByZW1vdmVFbnRyeShpdGVtOiBPcmRlckVudHJ5KSB7XG4gICAgdGhpcy53aXNoTGlzdFNlcnZpY2UucmVtb3ZlRW50cnkoaXRlbSk7XG4gIH1cbn1cbiJdfQ==