/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { WishListService } from '@spartacus/core';
var WishListComponent = /** @class */ (function () {
    function WishListComponent(wishListService) {
        this.wishListService = wishListService;
        this.wishList$ = this.wishListService.getWishList();
        this.loading$ = this.wishListService.getWishListLoading();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    WishListComponent.prototype.removeEntry = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.wishListService.removeEntry(item);
    };
    WishListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-wish-list',
                    template: "<ng-container *ngIf=\"wishList$ | async as wishList\">\n  <ng-container *ngIf=\"wishList?.entries?.length > 0; else emptyWishList\">\n    <div class=\"d-none d-md-block d-lg-block d-xl-block\">\n      <div class=\"cx-item-list-header row\">\n        <div class=\"cx-item-list-desc col-md-7 col-lg-6 col-xl-6\">\n          {{ 'cartItems.description' | cxTranslate }}\n        </div>\n        <div class=\"cx-item-list-price col-md-3 col-lg-4 col-xl-4\">\n          {{ 'cartItems.itemPrice' | cxTranslate }}\n        </div>\n        <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n          {{ 'cartItems.total' | cxTranslate }}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"cx-item-list-row\" *ngFor=\"let entry of wishList?.entries\">\n      <cx-wish-list-item\n        [cartEntry]=\"entry\"\n        [isLoading]=\"loading$ | async\"\n        class=\"cx-wish-list-items\"\n        (remove)=\"removeEntry($event)\"\n      ></cx-wish-list-item>\n    </div>\n  </ng-container>\n</ng-container>\n\n<ng-template #emptyWishList>\n  <h2>{{ 'wishlist.empty' | cxTranslate }}</h2>\n</ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    WishListComponent.ctorParameters = function () { return [
        { type: WishListService }
    ]; };
    return WishListComponent;
}());
export { WishListComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3dpc2gtbGlzdC9jb21wb25lbnRzL3dpc2gtbGlzdC93aXNoLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBb0IsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHcEU7SUFRRSwyQkFBc0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBSHRELGNBQVMsR0FBcUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqRSxhQUFRLEdBQXdCLElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUVqQixDQUFDOzs7OztJQUUxRCx1Q0FBVzs7OztJQUFYLFVBQVksSUFBZ0I7UUFDMUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4Qiw0bUNBQXlDO2lCQUMxQzs7OztnQkFOMEIsZUFBZTs7SUFnQjFDLHdCQUFDO0NBQUEsQUFiRCxJQWFDO1NBVFksaUJBQWlCOzs7SUFDNUIsc0NBQWlFOztJQUNqRSxxQ0FBMEU7Ozs7O0lBRTlELDRDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FydCwgT3JkZXJFbnRyeSwgV2lzaExpc3RTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtd2lzaC1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dpc2gtbGlzdC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFdpc2hMaXN0Q29tcG9uZW50IHtcbiAgd2lzaExpc3QkOiBPYnNlcnZhYmxlPENhcnQ+ID0gdGhpcy53aXNoTGlzdFNlcnZpY2UuZ2V0V2lzaExpc3QoKTtcbiAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLndpc2hMaXN0U2VydmljZS5nZXRXaXNoTGlzdExvYWRpbmcoKTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgd2lzaExpc3RTZXJ2aWNlOiBXaXNoTGlzdFNlcnZpY2UpIHt9XG5cbiAgcmVtb3ZlRW50cnkoaXRlbTogT3JkZXJFbnRyeSkge1xuICAgIHRoaXMud2lzaExpc3RTZXJ2aWNlLnJlbW92ZUVudHJ5KGl0ZW0pO1xuICB9XG59XG4iXX0=