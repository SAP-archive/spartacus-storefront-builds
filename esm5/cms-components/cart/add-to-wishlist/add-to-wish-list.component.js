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
            template: "<ng-container *ngIf=\"product$ | async as product\">\n  <ng-container *ngIf=\"userLoggedIn$ | async; else loginPrompt\">\n    <ng-container *ngIf=\"wishListEntries$ | async as entries\">\n      <ng-container *ngIf=\"hasStock\">\n        <div\n          *ngIf=\"getProductInWishList(product, entries) as entry; else addItem\"\n        >\n          <button\n            class=\"btn btn-link button-remove\"\n            (click)=\"remove(entry)\"\n            [disabled]=\"loading$ | async\"\n          >\n            <cx-icon [type]=\"iconTypes.HEART\"></cx-icon>\n            <span class=\"button-text\">{{\n              'addToWishList.remove' | cxTranslate\n            }}</span>\n          </button>\n        </div>\n        <ng-template #addItem>\n          <button\n            class=\"btn btn-link button-add\"\n            (click)=\"add(product)\"\n            [disabled]=\"loading$ | async\"\n          >\n            <cx-icon [type]=\"iconTypes.EMPTY_HEART\"></cx-icon>\n            <span class=\"button-text\">{{\n              'addToWishList.add' | cxTranslate\n            }}</span>\n          </button>\n        </ng-template>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n</ng-container>\n\n<ng-template #loginPrompt>\n  <ng-container *ngIf=\"hasStock\">\n    <a\n      class=\"btn btn-link button-add-link\"\n      [routerLink]=\"{ cxRoute: 'login' } | cxUrl\"\n    >\n      <cx-icon [type]=\"iconTypes.EMPTY_HEART\"></cx-icon>\n      <span class=\"button-text\">{{\n        'addToWishList.anonymous' | cxTranslate\n      }}</span>\n    </a>\n  </ng-container>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], AddToWishListComponent);
    return AddToWishListComponent;
}());
export { AddToWishListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLXdpc2gtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jYXJ0L2FkZC10by13aXNobGlzdC9hZGQtdG8td2lzaC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQ0wsV0FBVyxFQUNYLFVBQVUsRUFDVixPQUFPLEVBQ1AsZUFBZSxHQUNoQixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN6RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQU85RTtJQW1CRSxnQ0FDWSxlQUFnQyxFQUNoQyxxQkFBNEMsRUFDNUMsV0FBd0I7UUFIcEMsaUJBSUk7UUFIUSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQXJCcEMsYUFBUSxHQUF3QixJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUMxRSxNQUFNLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQWhCLENBQWdCLENBQUMsRUFDbkMsR0FBRyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUMzQyxDQUFDO1FBRUYscUJBQWdCLEdBRVosSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQ3pDLE1BQU0sQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBakIsQ0FBaUIsQ0FBQyxFQUNyQyxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsT0FBTyxFQUFoQixDQUFnQixDQUFDLENBQ2xDLENBQUM7UUFFRixrQkFBYSxHQUF3QixJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZFLGFBQVEsR0FBd0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBRTFFLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsY0FBUyxHQUFHLFNBQVMsQ0FBQztJQU1uQixDQUFDO0lBRUosb0NBQUcsR0FBSCxVQUFJLE9BQWdCO1FBQ2xCLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsdUNBQU0sR0FBTixVQUFPLEtBQWlCO1FBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxxREFBb0IsR0FBcEIsVUFBcUIsT0FBZ0IsRUFBRSxPQUFxQjtRQUMxRCxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLElBQUksRUFBbkMsQ0FBbUMsQ0FBQyxDQUFDO1FBQ3hFLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVPLDZDQUFZLEdBQXBCLFVBQXFCLE9BQWdCO1FBQ25DLElBQUksQ0FBQyxRQUFRO1lBQ1gsT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixLQUFLLFlBQVksQ0FBQztJQUNyRSxDQUFDOztnQkFyQjRCLGVBQWU7Z0JBQ1QscUJBQXFCO2dCQUMvQixXQUFXOztJQXRCekIsc0JBQXNCO1FBTGxDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsc2xEQUFnRDtZQUNoRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO09BQ1csc0JBQXNCLENBMENsQztJQUFELDZCQUFDO0NBQUEsQUExQ0QsSUEwQ0M7U0ExQ1ksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQXV0aFNlcnZpY2UsXG4gIE9yZGVyRW50cnksXG4gIFByb2R1Y3QsXG4gIFdpc2hMaXN0U2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5tb2RlbCc7XG5pbXBvcnQgeyBDdXJyZW50UHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9wcm9kdWN0L2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYWRkLXRvLXdpc2hsaXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC10by13aXNoLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQWRkVG9XaXNoTGlzdENvbXBvbmVudCB7XG4gIHByb2R1Y3QkOiBPYnNlcnZhYmxlPFByb2R1Y3Q+ID0gdGhpcy5jdXJyZW50UHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdCgpLnBpcGUoXG4gICAgZmlsdGVyKHByb2R1Y3QgPT4gQm9vbGVhbihwcm9kdWN0KSksXG4gICAgdGFwKHByb2R1Y3QgPT4gdGhpcy5zZXRTdG9ja0luZm8ocHJvZHVjdCkpXG4gICk7XG5cbiAgd2lzaExpc3RFbnRyaWVzJDogT2JzZXJ2YWJsZTxcbiAgICBPcmRlckVudHJ5W11cbiAgPiA9IHRoaXMud2lzaExpc3RTZXJ2aWNlLmdldFdpc2hMaXN0KCkucGlwZShcbiAgICBmaWx0ZXIod2lzaGxpc3QgPT4gQm9vbGVhbih3aXNobGlzdCkpLFxuICAgIG1hcCh3aXNoTGlzdCA9PiB3aXNoTGlzdC5lbnRyaWVzKVxuICApO1xuXG4gIHVzZXJMb2dnZWRJbiQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKCk7XG4gIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy53aXNoTGlzdFNlcnZpY2UuZ2V0V2lzaExpc3RMb2FkaW5nKCk7XG5cbiAgaGFzU3RvY2sgPSBmYWxzZTtcbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB3aXNoTGlzdFNlcnZpY2U6IFdpc2hMaXN0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY3VycmVudFByb2R1Y3RTZXJ2aWNlOiBDdXJyZW50UHJvZHVjdFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxuICApIHt9XG5cbiAgYWRkKHByb2R1Y3Q6IFByb2R1Y3QpOiB2b2lkIHtcbiAgICB0aGlzLndpc2hMaXN0U2VydmljZS5hZGRFbnRyeShwcm9kdWN0LmNvZGUpO1xuICB9XG5cbiAgcmVtb3ZlKGVudHJ5OiBPcmRlckVudHJ5KTogdm9pZCB7XG4gICAgdGhpcy53aXNoTGlzdFNlcnZpY2UucmVtb3ZlRW50cnkoZW50cnkpO1xuICB9XG5cbiAgZ2V0UHJvZHVjdEluV2lzaExpc3QocHJvZHVjdDogUHJvZHVjdCwgZW50cmllczogT3JkZXJFbnRyeVtdKTogT3JkZXJFbnRyeSB7XG4gICAgY29uc3QgaXRlbSA9IGVudHJpZXMuZmluZChlbnRyeSA9PiBlbnRyeS5wcm9kdWN0LmNvZGUgPT09IHByb2R1Y3QuY29kZSk7XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICBwcml2YXRlIHNldFN0b2NrSW5mbyhwcm9kdWN0OiBQcm9kdWN0KTogdm9pZCB7XG4gICAgdGhpcy5oYXNTdG9jayA9XG4gICAgICBwcm9kdWN0LnN0b2NrICYmIHByb2R1Y3Quc3RvY2suc3RvY2tMZXZlbFN0YXR1cyAhPT0gJ291dE9mU3RvY2snO1xuICB9XG59XG4iXX0=