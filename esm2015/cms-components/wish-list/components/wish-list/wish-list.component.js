/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AuthService, WishListService } from '@spartacus/core';
export class WishListComponent {
    /**
     * @param {?} wishListService
     * @param {?} authService
     */
    constructor(wishListService, authService) {
        this.wishListService = wishListService;
        this.authService = authService;
        this.wishList$ = this.wishListService.getWishList();
        this.userLoggedIn$ = this.authService.isUserLoggedIn();
        this.loading$ = this.wishListService.getWishListLoading();
    }
}
WishListComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-wish-list',
                template: "<ng-container *ngIf=\"userLoggedIn$ | async\">\n  <div class=\"cx-page\" *ngIf=\"wishList$ | async as model\">\n    <ng-container *ngFor=\"let entry of model?.entries\">\n      <cx-wish-list-item\n        [cartEntry]=\"entry\"\n        class=\"cx-wish-list-item\"\n      ></cx-wish-list-item>\n    </ng-container>\n  </div>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
WishListComponent.ctorParameters = () => [
    { type: WishListService },
    { type: AuthService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3dpc2gtbGlzdC9jb21wb25lbnRzL3dpc2gtbGlzdC93aXNoLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxXQUFXLEVBQVEsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFPckUsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFNNUIsWUFDWSxlQUFnQyxFQUNoQyxXQUF3QjtRQUR4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFQcEMsY0FBUyxHQUFxQixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRWpFLGtCQUFhLEdBQXdCLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkUsYUFBUSxHQUF3QixJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFLdkUsQ0FBQzs7O1lBYkwsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixrV0FBeUM7YUFDMUM7Ozs7WUFOMkIsZUFBZTtZQUFsQyxXQUFXOzs7O0lBUWxCLHNDQUFpRTs7SUFFakUsMENBQXVFOztJQUN2RSxxQ0FBMEU7Ozs7O0lBR3hFLDRDQUEwQzs7Ozs7SUFDMUMsd0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSwgQ2FydCwgV2lzaExpc3RTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtd2lzaC1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dpc2gtbGlzdC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFdpc2hMaXN0Q29tcG9uZW50IHtcbiAgd2lzaExpc3QkOiBPYnNlcnZhYmxlPENhcnQ+ID0gdGhpcy53aXNoTGlzdFNlcnZpY2UuZ2V0V2lzaExpc3QoKTtcblxuICB1c2VyTG9nZ2VkSW4kOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5hdXRoU2VydmljZS5pc1VzZXJMb2dnZWRJbigpO1xuICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMud2lzaExpc3RTZXJ2aWNlLmdldFdpc2hMaXN0TG9hZGluZygpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB3aXNoTGlzdFNlcnZpY2U6IFdpc2hMaXN0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICkge31cbn1cbiJdfQ==