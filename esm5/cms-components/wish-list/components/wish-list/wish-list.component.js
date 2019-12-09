/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AuthService, WishListService } from '@spartacus/core';
var WishListComponent = /** @class */ (function () {
    function WishListComponent(wishListService, authService) {
        this.wishListService = wishListService;
        this.authService = authService;
        this.wishList$ = this.wishListService.getWishList();
        this.userLoggedIn$ = this.authService.isUserLoggedIn();
        this.loading$ = this.wishListService.getWishListLoading();
    }
    WishListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-wish-list',
                    template: "<ng-container *ngIf=\"userLoggedIn$ | async\">\n  <div class=\"cx-page\" *ngIf=\"wishList$ | async as model\">\n    <ng-container *ngFor=\"let entry of model?.entries\">\n      <cx-wish-list-item\n        [cartEntry]=\"entry\"\n        class=\"cx-wish-list-item\"\n      ></cx-wish-list-item>\n    </ng-container>\n  </div>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    WishListComponent.ctorParameters = function () { return [
        { type: WishListService },
        { type: AuthService }
    ]; };
    return WishListComponent;
}());
export { WishListComponent };
if (false) {
    /** @type {?} */
    WishListComponent.prototype.wishList$;
    /** @type {?} */
    WishListComponent.prototype.userLoggedIn$;
    /** @type {?} */
    WishListComponent.prototype.loading$;
    /**
     * @type {?}
     * @protected
     */
    WishListComponent.prototype.wishListService;
    /**
     * @type {?}
     * @protected
     */
    WishListComponent.prototype.authService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3dpc2gtbGlzdC9jb21wb25lbnRzL3dpc2gtbGlzdC93aXNoLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxXQUFXLEVBQVEsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHckU7SUFVRSwyQkFDWSxlQUFnQyxFQUNoQyxXQUF3QjtRQUR4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFQcEMsY0FBUyxHQUFxQixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRWpFLGtCQUFhLEdBQXdCLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkUsYUFBUSxHQUF3QixJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFLdkUsQ0FBQzs7Z0JBYkwsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixrV0FBeUM7aUJBQzFDOzs7O2dCQU4yQixlQUFlO2dCQUFsQyxXQUFXOztJQWlCcEIsd0JBQUM7Q0FBQSxBQWRELElBY0M7U0FWWSxpQkFBaUI7OztJQUM1QixzQ0FBaUU7O0lBRWpFLDBDQUF1RTs7SUFDdkUscUNBQTBFOzs7OztJQUd4RSw0Q0FBMEM7Ozs7O0lBQzFDLHdDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UsIENhcnQsIFdpc2hMaXN0U2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXdpc2gtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi93aXNoLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBXaXNoTGlzdENvbXBvbmVudCB7XG4gIHdpc2hMaXN0JDogT2JzZXJ2YWJsZTxDYXJ0PiA9IHRoaXMud2lzaExpc3RTZXJ2aWNlLmdldFdpc2hMaXN0KCk7XG5cbiAgdXNlckxvZ2dlZEluJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4oKTtcbiAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLndpc2hMaXN0U2VydmljZS5nZXRXaXNoTGlzdExvYWRpbmcoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgd2lzaExpc3RTZXJ2aWNlOiBXaXNoTGlzdFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxuICApIHt9XG59XG4iXX0=