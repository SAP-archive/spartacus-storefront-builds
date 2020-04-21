import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService, OrderEntry, Product, WishListService, } from '@spartacus/core';
import { filter, map, tap } from 'rxjs/operators';
import { ICON_TYPE } from '../../../cms-components/misc/icon/icon.model';
import { CurrentProductService } from '../../product/current-product.service';
var AddToWishListComponent = /** @class */ (function () {
    function AddToWishListComponent(wishListService, currentProductService, authService) {
        var _this = this;
        this.wishListService = wishListService;
        this.currentProductService = currentProductService;
        this.authService = authService;
        this.product$ = this.currentProductService.getProduct().pipe(filter(function (product) { return Boolean(product); }), tap(function (product) { return _this.setStockInfo(product); }));
        this.wishListEntries$ = this.wishListService.getWishList().pipe(filter(function (wishlist) { return Boolean(wishlist); }), map(function (wishList) { return wishList.entries; }));
        this.userLoggedIn$ = this.authService.isUserLoggedIn();
        this.loading$ = this.wishListService.getWishListLoading();
        this.hasStock = false;
        this.iconTypes = ICON_TYPE;
    }
    AddToWishListComponent.prototype.add = function (product) {
        this.wishListService.addEntry(product.code);
    };
    AddToWishListComponent.prototype.remove = function (entry) {
        this.wishListService.removeEntry(entry);
    };
    AddToWishListComponent.prototype.getProductInWishList = function (product, entries) {
        var item = entries.find(function (entry) { return entry.product.code === product.code; });
        return item;
    };
    AddToWishListComponent.prototype.setStockInfo = function (product) {
        this.hasStock =
            product.stock && product.stock.stockLevelStatus !== 'outOfStock';
    };
    AddToWishListComponent.ctorParameters = function () { return [
        { type: WishListService },
        { type: CurrentProductService },
        { type: AuthService }
    ]; };
    AddToWishListComponent = __decorate([
        Component({
            selector: 'cx-add-to-wishlist',
            template: "<ng-container *ngIf=\"product$ | async as product\">\n  <ng-container *ngIf=\"userLoggedIn$ | async; else loginPrompt\">\n    <ng-container *ngIf=\"wishListEntries$ | async as entries\">\n      <ng-container *ngIf=\"hasStock\">\n        <div\n          *ngIf=\"getProductInWishList(product, entries) as entry; else addItem\"\n        >\n          <button\n            class=\"btn btn-link button-remove cx-action-link\"\n            (click)=\"remove(entry)\"\n            [disabled]=\"loading$ | async\"\n          >\n            <cx-icon [type]=\"iconTypes.HEART\"></cx-icon>\n            <span class=\"button-text\">{{\n              'addToWishList.remove' | cxTranslate\n            }}</span>\n          </button>\n        </div>\n        <ng-template #addItem>\n          <button\n            class=\"btn btn-link button-add cx-action-link\"\n            (click)=\"add(product)\"\n            [disabled]=\"loading$ | async\"\n          >\n            <cx-icon [type]=\"iconTypes.EMPTY_HEART\"></cx-icon>\n            <span class=\"button-text\">{{\n              'addToWishList.add' | cxTranslate\n            }}</span>\n          </button>\n        </ng-template>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n</ng-container>\n\n<ng-template #loginPrompt>\n  <ng-container *ngIf=\"hasStock\">\n    <a\n      class=\"btn btn-link button-add-link cx-action-link\"\n      [routerLink]=\"{ cxRoute: 'login' } | cxUrl\"\n    >\n      <cx-icon [type]=\"iconTypes.EMPTY_HEART\"></cx-icon>\n      <span class=\"button-text\">{{\n        'addToWishList.anonymous' | cxTranslate\n      }}</span>\n    </a>\n  </ng-container>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], AddToWishListComponent);
    return AddToWishListComponent;
}());
export { AddToWishListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLXdpc2gtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jYXJ0L2FkZC10by13aXNobGlzdC9hZGQtdG8td2lzaC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQ0wsV0FBVyxFQUNYLFVBQVUsRUFDVixPQUFPLEVBQ1AsZUFBZSxHQUNoQixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN6RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQU85RTtJQW1CRSxnQ0FDWSxlQUFnQyxFQUNoQyxxQkFBNEMsRUFDNUMsV0FBd0I7UUFIcEMsaUJBSUk7UUFIUSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQXJCcEMsYUFBUSxHQUF3QixJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUMxRSxNQUFNLENBQUMsVUFBQyxPQUFPLElBQUssT0FBQSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQWhCLENBQWdCLENBQUMsRUFDckMsR0FBRyxDQUFDLFVBQUMsT0FBTyxJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUM3QyxDQUFDO1FBRUYscUJBQWdCLEdBRVosSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQ3pDLE1BQU0sQ0FBQyxVQUFDLFFBQVEsSUFBSyxPQUFBLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBakIsQ0FBaUIsQ0FBQyxFQUN2QyxHQUFHLENBQUMsVUFBQyxRQUFRLElBQUssT0FBQSxRQUFRLENBQUMsT0FBTyxFQUFoQixDQUFnQixDQUFDLENBQ3BDLENBQUM7UUFFRixrQkFBYSxHQUF3QixJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZFLGFBQVEsR0FBd0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBRTFFLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsY0FBUyxHQUFHLFNBQVMsQ0FBQztJQU1uQixDQUFDO0lBRUosb0NBQUcsR0FBSCxVQUFJLE9BQWdCO1FBQ2xCLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsdUNBQU0sR0FBTixVQUFPLEtBQWlCO1FBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxxREFBb0IsR0FBcEIsVUFBcUIsT0FBZ0IsRUFBRSxPQUFxQjtRQUMxRCxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLElBQUksRUFBbkMsQ0FBbUMsQ0FBQyxDQUFDO1FBQzFFLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVPLDZDQUFZLEdBQXBCLFVBQXFCLE9BQWdCO1FBQ25DLElBQUksQ0FBQyxRQUFRO1lBQ1gsT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixLQUFLLFlBQVksQ0FBQztJQUNyRSxDQUFDOztnQkFyQjRCLGVBQWU7Z0JBQ1QscUJBQXFCO2dCQUMvQixXQUFXOztJQXRCekIsc0JBQXNCO1FBTGxDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsbW9EQUFnRDtZQUNoRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO09BQ1csc0JBQXNCLENBMENsQztJQUFELDZCQUFDO0NBQUEsQUExQ0QsSUEwQ0M7U0ExQ1ksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQXV0aFNlcnZpY2UsXG4gIE9yZGVyRW50cnksXG4gIFByb2R1Y3QsXG4gIFdpc2hMaXN0U2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5tb2RlbCc7XG5pbXBvcnQgeyBDdXJyZW50UHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9wcm9kdWN0L2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYWRkLXRvLXdpc2hsaXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC10by13aXNoLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQWRkVG9XaXNoTGlzdENvbXBvbmVudCB7XG4gIHByb2R1Y3QkOiBPYnNlcnZhYmxlPFByb2R1Y3Q+ID0gdGhpcy5jdXJyZW50UHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdCgpLnBpcGUoXG4gICAgZmlsdGVyKChwcm9kdWN0KSA9PiBCb29sZWFuKHByb2R1Y3QpKSxcbiAgICB0YXAoKHByb2R1Y3QpID0+IHRoaXMuc2V0U3RvY2tJbmZvKHByb2R1Y3QpKVxuICApO1xuXG4gIHdpc2hMaXN0RW50cmllcyQ6IE9ic2VydmFibGU8XG4gICAgT3JkZXJFbnRyeVtdXG4gID4gPSB0aGlzLndpc2hMaXN0U2VydmljZS5nZXRXaXNoTGlzdCgpLnBpcGUoXG4gICAgZmlsdGVyKCh3aXNobGlzdCkgPT4gQm9vbGVhbih3aXNobGlzdCkpLFxuICAgIG1hcCgod2lzaExpc3QpID0+IHdpc2hMaXN0LmVudHJpZXMpXG4gICk7XG5cbiAgdXNlckxvZ2dlZEluJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4oKTtcbiAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLndpc2hMaXN0U2VydmljZS5nZXRXaXNoTGlzdExvYWRpbmcoKTtcblxuICBoYXNTdG9jayA9IGZhbHNlO1xuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHdpc2hMaXN0U2VydmljZTogV2lzaExpc3RTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjdXJyZW50UHJvZHVjdFNlcnZpY2U6IEN1cnJlbnRQcm9kdWN0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICkge31cblxuICBhZGQocHJvZHVjdDogUHJvZHVjdCk6IHZvaWQge1xuICAgIHRoaXMud2lzaExpc3RTZXJ2aWNlLmFkZEVudHJ5KHByb2R1Y3QuY29kZSk7XG4gIH1cblxuICByZW1vdmUoZW50cnk6IE9yZGVyRW50cnkpOiB2b2lkIHtcbiAgICB0aGlzLndpc2hMaXN0U2VydmljZS5yZW1vdmVFbnRyeShlbnRyeSk7XG4gIH1cblxuICBnZXRQcm9kdWN0SW5XaXNoTGlzdChwcm9kdWN0OiBQcm9kdWN0LCBlbnRyaWVzOiBPcmRlckVudHJ5W10pOiBPcmRlckVudHJ5IHtcbiAgICBjb25zdCBpdGVtID0gZW50cmllcy5maW5kKChlbnRyeSkgPT4gZW50cnkucHJvZHVjdC5jb2RlID09PSBwcm9kdWN0LmNvZGUpO1xuICAgIHJldHVybiBpdGVtO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTdG9ja0luZm8ocHJvZHVjdDogUHJvZHVjdCk6IHZvaWQge1xuICAgIHRoaXMuaGFzU3RvY2sgPVxuICAgICAgcHJvZHVjdC5zdG9jayAmJiBwcm9kdWN0LnN0b2NrLnN0b2NrTGV2ZWxTdGF0dXMgIT09ICdvdXRPZlN0b2NrJztcbiAgfVxufVxuIl19