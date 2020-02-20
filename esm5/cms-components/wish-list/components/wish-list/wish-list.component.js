import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Cart, OrderEntry, WishListService } from '@spartacus/core';
var WishListComponent = /** @class */ (function () {
    function WishListComponent(wishListService) {
        this.wishListService = wishListService;
        this.wishList$ = this.wishListService.getWishList();
        this.loading$ = this.wishListService.getWishListLoading();
    }
    WishListComponent.prototype.removeEntry = function (item) {
        this.wishListService.removeEntry(item);
    };
    WishListComponent.ctorParameters = function () { return [
        { type: WishListService }
    ]; };
    WishListComponent = __decorate([
        Component({
            selector: 'cx-wish-list',
            template: "<ng-container *ngIf=\"wishList$ | async as wishList\">\n  <ng-container *ngIf=\"wishList?.entries?.length > 0; else emptyWishList\">\n    <div class=\"d-none d-md-block d-lg-block d-xl-block\">\n      <div class=\"cx-item-list-header row\">\n        <div class=\"cx-item-list-desc col-md-7 col-lg-6 col-xl-6\">\n          {{ 'cartItems.description' | cxTranslate }}\n        </div>\n        <div class=\"cx-item-list-price col-md-3 col-lg-4 col-xl-4\">\n          {{ 'cartItems.itemPrice' | cxTranslate }}\n        </div>\n        <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n          {{ 'cartItems.total' | cxTranslate }}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"cx-item-list-row\" *ngFor=\"let entry of wishList?.entries\">\n      <cx-wish-list-item\n        [cartEntry]=\"entry\"\n        [isLoading]=\"loading$ | async\"\n        class=\"cx-wish-list-items\"\n        (remove)=\"removeEntry($event)\"\n      ></cx-wish-list-item>\n    </div>\n  </ng-container>\n</ng-container>\n\n<ng-template #emptyWishList>\n  <h2>{{ 'wishlist.empty' | cxTranslate }}</h2>\n</ng-template>\n"
        })
    ], WishListComponent);
    return WishListComponent;
}());
export { WishListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3dpc2gtbGlzdC9jb21wb25lbnRzL3dpc2gtbGlzdC93aXNoLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBT3BFO0lBSUUsMkJBQXNCLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUh0RCxjQUFTLEdBQXFCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakUsYUFBUSxHQUF3QixJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFFakIsQ0FBQztJQUUxRCx1Q0FBVyxHQUFYLFVBQVksSUFBZ0I7UUFDMUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Z0JBSnNDLGVBQWU7O0lBSjNDLGlCQUFpQjtRQUo3QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4Qiw0bUNBQXlDO1NBQzFDLENBQUM7T0FDVyxpQkFBaUIsQ0FTN0I7SUFBRCx3QkFBQztDQUFBLEFBVEQsSUFTQztTQVRZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FydCwgT3JkZXJFbnRyeSwgV2lzaExpc3RTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtd2lzaC1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dpc2gtbGlzdC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFdpc2hMaXN0Q29tcG9uZW50IHtcbiAgd2lzaExpc3QkOiBPYnNlcnZhYmxlPENhcnQ+ID0gdGhpcy53aXNoTGlzdFNlcnZpY2UuZ2V0V2lzaExpc3QoKTtcbiAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLndpc2hMaXN0U2VydmljZS5nZXRXaXNoTGlzdExvYWRpbmcoKTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgd2lzaExpc3RTZXJ2aWNlOiBXaXNoTGlzdFNlcnZpY2UpIHt9XG5cbiAgcmVtb3ZlRW50cnkoaXRlbTogT3JkZXJFbnRyeSkge1xuICAgIHRoaXMud2lzaExpc3RTZXJ2aWNlLnJlbW92ZUVudHJ5KGl0ZW0pO1xuICB9XG59XG4iXX0=