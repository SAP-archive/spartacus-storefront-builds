import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Cart, OrderEntry, WishListService } from '@spartacus/core';
let WishListComponent = class WishListComponent {
    constructor(wishListService) {
        this.wishListService = wishListService;
        this.wishList$ = this.wishListService.getWishList();
        this.loading$ = this.wishListService.getWishListLoading();
    }
    removeEntry(item) {
        this.wishListService.removeEntry(item);
    }
};
WishListComponent.ctorParameters = () => [
    { type: WishListService }
];
WishListComponent = __decorate([
    Component({
        selector: 'cx-wish-list',
        template: "<ng-container *ngIf=\"wishList$ | async as wishList\">\n  <ng-container *ngIf=\"wishList?.entries?.length > 0; else emptyWishList\">\n    <div class=\"d-none d-md-block d-lg-block d-xl-block\">\n      <div class=\"cx-item-list-header row\">\n        <div class=\"cx-item-list-desc col-md-7 col-lg-6 col-xl-6\">\n          {{ 'cartItems.description' | cxTranslate }}\n        </div>\n        <div class=\"cx-item-list-price col-md-3 col-lg-4 col-xl-4\">\n          {{ 'cartItems.itemPrice' | cxTranslate }}\n        </div>\n        <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n          {{ 'cartItems.total' | cxTranslate }}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"cx-item-list-row\" *ngFor=\"let entry of wishList?.entries\">\n      <cx-wish-list-item\n        [cartEntry]=\"entry\"\n        [isLoading]=\"loading$ | async\"\n        class=\"cx-wish-list-items\"\n        (remove)=\"removeEntry($event)\"\n      ></cx-wish-list-item>\n    </div>\n  </ng-container>\n</ng-container>\n\n<ng-template #emptyWishList>\n  <h2>{{ 'wishlist.empty' | cxTranslate }}</h2>\n</ng-template>\n"
    })
], WishListComponent);
export { WishListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3dpc2gtbGlzdC9jb21wb25lbnRzL3dpc2gtbGlzdC93aXNoLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBT3BFLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBSTVCLFlBQXNCLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUh0RCxjQUFTLEdBQXFCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakUsYUFBUSxHQUF3QixJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFFakIsQ0FBQztJQUUxRCxXQUFXLENBQUMsSUFBZ0I7UUFDMUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNGLENBQUE7O1lBTHdDLGVBQWU7O0FBSjNDLGlCQUFpQjtJQUo3QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztRQUN4Qiw0bUNBQXlDO0tBQzFDLENBQUM7R0FDVyxpQkFBaUIsQ0FTN0I7U0FUWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhcnQsIE9yZGVyRW50cnksIFdpc2hMaXN0U2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXdpc2gtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi93aXNoLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBXaXNoTGlzdENvbXBvbmVudCB7XG4gIHdpc2hMaXN0JDogT2JzZXJ2YWJsZTxDYXJ0PiA9IHRoaXMud2lzaExpc3RTZXJ2aWNlLmdldFdpc2hMaXN0KCk7XG4gIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy53aXNoTGlzdFNlcnZpY2UuZ2V0V2lzaExpc3RMb2FkaW5nKCk7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHdpc2hMaXN0U2VydmljZTogV2lzaExpc3RTZXJ2aWNlKSB7fVxuXG4gIHJlbW92ZUVudHJ5KGl0ZW06IE9yZGVyRW50cnkpIHtcbiAgICB0aGlzLndpc2hMaXN0U2VydmljZS5yZW1vdmVFbnRyeShpdGVtKTtcbiAgfVxufVxuIl19