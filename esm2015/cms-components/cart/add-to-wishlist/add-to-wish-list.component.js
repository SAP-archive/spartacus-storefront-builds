import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService, OrderEntry, Product, WishListService, } from '@spartacus/core';
import { filter, map, tap } from 'rxjs/operators';
import { ICON_TYPE } from '../../../cms-components/misc/icon/icon.model';
import { CurrentProductService } from '../../product/current-product.service';
let AddToWishListComponent = class AddToWishListComponent {
    constructor(wishListService, currentProductService, authService) {
        this.wishListService = wishListService;
        this.currentProductService = currentProductService;
        this.authService = authService;
        this.product$ = this.currentProductService.getProduct().pipe(filter(product => Boolean(product)), tap(product => this.setStockInfo(product)));
        this.wishListEntries$ = this.wishListService.getWishList().pipe(filter(wishlist => Boolean(wishlist)), map(wishList => wishList.entries));
        this.userLoggedIn$ = this.authService.isUserLoggedIn();
        this.loading$ = this.wishListService.getWishListLoading();
        this.hasStock = false;
        this.iconTypes = ICON_TYPE;
    }
    add(product) {
        this.wishListService.addEntry(product.code);
    }
    remove(entry) {
        this.wishListService.removeEntry(entry);
    }
    getProductInWishList(product, entries) {
        const item = entries.find(entry => entry.product.code === product.code);
        return item;
    }
    setStockInfo(product) {
        this.hasStock =
            product.stock && product.stock.stockLevelStatus !== 'outOfStock';
    }
};
AddToWishListComponent.ctorParameters = () => [
    { type: WishListService },
    { type: CurrentProductService },
    { type: AuthService }
];
AddToWishListComponent = __decorate([
    Component({
        selector: 'cx-add-to-wishlist',
        template: "<ng-container *ngIf=\"product$ | async as product\">\n  <ng-container *ngIf=\"userLoggedIn$ | async; else loginPrompt\">\n    <ng-container *ngIf=\"wishListEntries$ | async as entries\">\n      <ng-container *ngIf=\"hasStock\">\n        <div\n          *ngIf=\"getProductInWishList(product, entries) as entry; else addItem\"\n        >\n          <button\n            class=\"btn btn-link button-remove\"\n            (click)=\"remove(entry)\"\n            [disabled]=\"loading$ | async\"\n          >\n            <cx-icon [type]=\"iconTypes.HEART\"></cx-icon>\n            <span class=\"button-text\">{{\n              'addToWishList.remove' | cxTranslate\n            }}</span>\n          </button>\n        </div>\n        <ng-template #addItem>\n          <button\n            class=\"btn btn-link button-add\"\n            (click)=\"add(product)\"\n            [disabled]=\"loading$ | async\"\n          >\n            <cx-icon [type]=\"iconTypes.EMPTY_HEART\"></cx-icon>\n            <span class=\"button-text\">{{\n              'addToWishList.add' | cxTranslate\n            }}</span>\n          </button>\n        </ng-template>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n</ng-container>\n\n<ng-template #loginPrompt>\n  <ng-container *ngIf=\"hasStock\">\n    <a\n      class=\"btn btn-link button-add-link\"\n      [routerLink]=\"{ cxRoute: 'login' } | cxUrl\"\n    >\n      <cx-icon [type]=\"iconTypes.EMPTY_HEART\"></cx-icon>\n      <span class=\"button-text\">{{\n        'addToWishList.anonymous' | cxTranslate\n      }}</span>\n    </a>\n  </ng-container>\n</ng-template>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], AddToWishListComponent);
export { AddToWishListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLXdpc2gtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jYXJ0L2FkZC10by13aXNobGlzdC9hZGQtdG8td2lzaC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQ0wsV0FBVyxFQUNYLFVBQVUsRUFDVixPQUFPLEVBQ1AsZUFBZSxHQUNoQixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN6RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQU85RSxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQW1CakMsWUFDWSxlQUFnQyxFQUNoQyxxQkFBNEMsRUFDNUMsV0FBd0I7UUFGeEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFyQnBDLGFBQVEsR0FBd0IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FDMUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQ25DLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FDM0MsQ0FBQztRQUVGLHFCQUFnQixHQUVaLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUN6QyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsRUFDckMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUNsQyxDQUFDO1FBRUYsa0JBQWEsR0FBd0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2RSxhQUFRLEdBQXdCLElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUUxRSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxTQUFTLENBQUM7SUFNbkIsQ0FBQztJQUVKLEdBQUcsQ0FBQyxPQUFnQjtRQUNsQixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFpQjtRQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsb0JBQW9CLENBQUMsT0FBZ0IsRUFBRSxPQUFxQjtRQUMxRCxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hFLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVPLFlBQVksQ0FBQyxPQUFnQjtRQUNuQyxJQUFJLENBQUMsUUFBUTtZQUNYLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsS0FBSyxZQUFZLENBQUM7SUFDckUsQ0FBQztDQUNGLENBQUE7O1lBdEI4QixlQUFlO1lBQ1QscUJBQXFCO1lBQy9CLFdBQVc7O0FBdEJ6QixzQkFBc0I7SUFMbEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG9CQUFvQjtRQUM5QixzbERBQWdEO1FBQ2hELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7R0FDVyxzQkFBc0IsQ0EwQ2xDO1NBMUNZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEF1dGhTZXJ2aWNlLFxuICBPcmRlckVudHJ5LFxuICBQcm9kdWN0LFxuICBXaXNoTGlzdFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2ljb24ubW9kZWwnO1xuaW1wb3J0IHsgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcHJvZHVjdC9jdXJyZW50LXByb2R1Y3Quc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWFkZC10by13aXNobGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGQtdG8td2lzaC1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEFkZFRvV2lzaExpc3RDb21wb25lbnQge1xuICBwcm9kdWN0JDogT2JzZXJ2YWJsZTxQcm9kdWN0PiA9IHRoaXMuY3VycmVudFByb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3QoKS5waXBlKFxuICAgIGZpbHRlcihwcm9kdWN0ID0+IEJvb2xlYW4ocHJvZHVjdCkpLFxuICAgIHRhcChwcm9kdWN0ID0+IHRoaXMuc2V0U3RvY2tJbmZvKHByb2R1Y3QpKVxuICApO1xuXG4gIHdpc2hMaXN0RW50cmllcyQ6IE9ic2VydmFibGU8XG4gICAgT3JkZXJFbnRyeVtdXG4gID4gPSB0aGlzLndpc2hMaXN0U2VydmljZS5nZXRXaXNoTGlzdCgpLnBpcGUoXG4gICAgZmlsdGVyKHdpc2hsaXN0ID0+IEJvb2xlYW4od2lzaGxpc3QpKSxcbiAgICBtYXAod2lzaExpc3QgPT4gd2lzaExpc3QuZW50cmllcylcbiAgKTtcblxuICB1c2VyTG9nZ2VkSW4kOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5hdXRoU2VydmljZS5pc1VzZXJMb2dnZWRJbigpO1xuICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMud2lzaExpc3RTZXJ2aWNlLmdldFdpc2hMaXN0TG9hZGluZygpO1xuXG4gIGhhc1N0b2NrID0gZmFsc2U7XG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgd2lzaExpc3RTZXJ2aWNlOiBXaXNoTGlzdFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGN1cnJlbnRQcm9kdWN0U2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgKSB7fVxuXG4gIGFkZChwcm9kdWN0OiBQcm9kdWN0KTogdm9pZCB7XG4gICAgdGhpcy53aXNoTGlzdFNlcnZpY2UuYWRkRW50cnkocHJvZHVjdC5jb2RlKTtcbiAgfVxuXG4gIHJlbW92ZShlbnRyeTogT3JkZXJFbnRyeSk6IHZvaWQge1xuICAgIHRoaXMud2lzaExpc3RTZXJ2aWNlLnJlbW92ZUVudHJ5KGVudHJ5KTtcbiAgfVxuXG4gIGdldFByb2R1Y3RJbldpc2hMaXN0KHByb2R1Y3Q6IFByb2R1Y3QsIGVudHJpZXM6IE9yZGVyRW50cnlbXSk6IE9yZGVyRW50cnkge1xuICAgIGNvbnN0IGl0ZW0gPSBlbnRyaWVzLmZpbmQoZW50cnkgPT4gZW50cnkucHJvZHVjdC5jb2RlID09PSBwcm9kdWN0LmNvZGUpO1xuICAgIHJldHVybiBpdGVtO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTdG9ja0luZm8ocHJvZHVjdDogUHJvZHVjdCk6IHZvaWQge1xuICAgIHRoaXMuaGFzU3RvY2sgPVxuICAgICAgcHJvZHVjdC5zdG9jayAmJiBwcm9kdWN0LnN0b2NrLnN0b2NrTGV2ZWxTdGF0dXMgIT09ICdvdXRPZlN0b2NrJztcbiAgfVxufVxuIl19