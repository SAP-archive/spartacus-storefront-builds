/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService, WishListService, } from '@spartacus/core';
import { filter, map, tap } from 'rxjs/operators';
import { ICON_TYPE } from '../../../cms-components/misc/index';
import { CurrentProductService } from '../../product/current-product.service';
var AddToWishListComponent = /** @class */ (function () {
    function AddToWishListComponent(wishListService, currentProductService, authService) {
        var _this = this;
        this.wishListService = wishListService;
        this.currentProductService = currentProductService;
        this.authService = authService;
        this.product$ = this.currentProductService.getProduct().pipe(filter((/**
         * @param {?} product
         * @return {?}
         */
        function (product) { return Boolean(product); })), tap((/**
         * @param {?} product
         * @return {?}
         */
        function (product) { return _this.setStockInfo(product); })));
        this.wishListEntries$ = this.wishListService.getWishList().pipe(filter((/**
         * @param {?} wishlist
         * @return {?}
         */
        function (wishlist) { return Boolean(wishlist); })), map((/**
         * @param {?} wishList
         * @return {?}
         */
        function (wishList) { return wishList.entries; })));
        this.userLoggedIn$ = this.authService.isUserLoggedIn();
        this.loading$ = this.wishListService.getWishListLoading();
        this.hasStock = false;
        this.iconTypes = ICON_TYPE;
    }
    /**
     * @param {?} product
     * @return {?}
     */
    AddToWishListComponent.prototype.add = /**
     * @param {?} product
     * @return {?}
     */
    function (product) {
        this.wishListService.addEntry(product.code);
    };
    /**
     * @param {?} entry
     * @return {?}
     */
    AddToWishListComponent.prototype.remove = /**
     * @param {?} entry
     * @return {?}
     */
    function (entry) {
        this.wishListService.removeEntry(entry);
    };
    /**
     * @param {?} product
     * @param {?} entries
     * @return {?}
     */
    AddToWishListComponent.prototype.getProductInWishList = /**
     * @param {?} product
     * @param {?} entries
     * @return {?}
     */
    function (product, entries) {
        /** @type {?} */
        var item = entries.find((/**
         * @param {?} entry
         * @return {?}
         */
        function (entry) { return entry.product.code === product.code; }));
        return item;
    };
    /**
     * @private
     * @param {?} product
     * @return {?}
     */
    AddToWishListComponent.prototype.setStockInfo = /**
     * @private
     * @param {?} product
     * @return {?}
     */
    function (product) {
        this.hasStock =
            product.stock && product.stock.stockLevelStatus !== 'outOfStock';
    };
    AddToWishListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-add-to-wishlist',
                    template: "<ng-container *ngIf=\"product$ | async as product\">\n  <ng-container *ngIf=\"userLoggedIn$ | async; else loginPrompt\">\n    <ng-container *ngIf=\"wishListEntries$ | async as entries\">\n      <ng-container *ngIf=\"hasStock\">\n        <div\n          *ngIf=\"getProductInWishList(product, entries) as entry; else addItem\"\n        >\n          <button\n            class=\"btn btn-link button-remove\"\n            (click)=\"remove(entry)\"\n            [disabled]=\"loading$ | async\"\n          >\n            <cx-icon [type]=\"iconTypes.HEART\"></cx-icon>\n            <span class=\"button-text\">{{\n              'addToWishList.remove' | cxTranslate\n            }}</span>\n          </button>\n        </div>\n        <ng-template #addItem>\n          <button\n            class=\"btn btn-link button-add\"\n            (click)=\"add(product)\"\n            [disabled]=\"loading$ | async\"\n          >\n            <cx-icon [type]=\"iconTypes.EMPTY_HEART\"></cx-icon>\n            <span class=\"button-text\">{{\n              'addToWishList.add' | cxTranslate\n            }}</span>\n          </button>\n        </ng-template>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n</ng-container>\n\n<ng-template #loginPrompt>\n  <ng-container *ngIf=\"hasStock\">\n    <a\n      class=\"btn btn-link button-add-link\"\n      [routerLink]=\"{ cxRoute: 'login' } | cxUrl\"\n    >\n      <cx-icon [type]=\"iconTypes.EMPTY_HEART\"></cx-icon>\n      <span class=\"button-text\">{{\n        'addToWishList.anonymous' | cxTranslate\n      }}</span>\n    </a>\n  </ng-container>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    AddToWishListComponent.ctorParameters = function () { return [
        { type: WishListService },
        { type: CurrentProductService },
        { type: AuthService }
    ]; };
    return AddToWishListComponent;
}());
export { AddToWishListComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLXdpc2gtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jYXJ0L2FkZC10by13aXNobGlzdC9hZGQtdG8td2lzaC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQ0wsV0FBVyxFQUdYLGVBQWUsR0FDaEIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDL0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFOUU7SUF3QkUsZ0NBQ1ksZUFBZ0MsRUFDaEMscUJBQTRDLEVBQzVDLFdBQXdCO1FBSHBDLGlCQUlJO1FBSFEsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFyQnBDLGFBQVEsR0FBd0IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FDMUUsTUFBTTs7OztRQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFoQixDQUFnQixFQUFDLEVBQ25DLEdBQUc7Ozs7UUFBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQTFCLENBQTBCLEVBQUMsQ0FDM0MsQ0FBQztRQUVGLHFCQUFnQixHQUVaLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUN6QyxNQUFNOzs7O1FBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQWpCLENBQWlCLEVBQUMsRUFDckMsR0FBRzs7OztRQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLE9BQU8sRUFBaEIsQ0FBZ0IsRUFBQyxDQUNsQyxDQUFDO1FBRUYsa0JBQWEsR0FBd0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2RSxhQUFRLEdBQXdCLElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUUxRSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxTQUFTLENBQUM7SUFNbkIsQ0FBQzs7Ozs7SUFFSixvQ0FBRzs7OztJQUFILFVBQUksT0FBZ0I7UUFDbEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBRUQsdUNBQU07Ozs7SUFBTixVQUFPLEtBQWlCO1FBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7OztJQUVELHFEQUFvQjs7Ozs7SUFBcEIsVUFBcUIsT0FBZ0IsRUFBRSxPQUFxQjs7WUFDcEQsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsSUFBSSxFQUFuQyxDQUFtQyxFQUFDO1FBQ3ZFLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7O0lBRU8sNkNBQVk7Ozs7O0lBQXBCLFVBQXFCLE9BQWdCO1FBQ25DLElBQUksQ0FBQyxRQUFRO1lBQ1gsT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixLQUFLLFlBQVksQ0FBQztJQUNyRSxDQUFDOztnQkE5Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLHNsREFBZ0Q7b0JBQ2hELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFYQyxlQUFlO2dCQUtSLHFCQUFxQjtnQkFSNUIsV0FBVzs7SUF5RGIsNkJBQUM7Q0FBQSxBQS9DRCxJQStDQztTQTFDWSxzQkFBc0I7OztJQUNqQywwQ0FHRTs7SUFFRixrREFLRTs7SUFFRiwrQ0FBdUU7O0lBQ3ZFLDBDQUEwRTs7SUFFMUUsMENBQWlCOztJQUNqQiwyQ0FBc0I7Ozs7O0lBR3BCLGlEQUEwQzs7Ozs7SUFDMUMsdURBQXNEOzs7OztJQUN0RCw2Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBdXRoU2VydmljZSxcbiAgT3JkZXJFbnRyeSxcbiAgUHJvZHVjdCxcbiAgV2lzaExpc3RTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaW5kZXgnO1xuaW1wb3J0IHsgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcHJvZHVjdC9jdXJyZW50LXByb2R1Y3Quc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWFkZC10by13aXNobGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGQtdG8td2lzaC1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEFkZFRvV2lzaExpc3RDb21wb25lbnQge1xuICBwcm9kdWN0JDogT2JzZXJ2YWJsZTxQcm9kdWN0PiA9IHRoaXMuY3VycmVudFByb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3QoKS5waXBlKFxuICAgIGZpbHRlcihwcm9kdWN0ID0+IEJvb2xlYW4ocHJvZHVjdCkpLFxuICAgIHRhcChwcm9kdWN0ID0+IHRoaXMuc2V0U3RvY2tJbmZvKHByb2R1Y3QpKVxuICApO1xuXG4gIHdpc2hMaXN0RW50cmllcyQ6IE9ic2VydmFibGU8XG4gICAgT3JkZXJFbnRyeVtdXG4gID4gPSB0aGlzLndpc2hMaXN0U2VydmljZS5nZXRXaXNoTGlzdCgpLnBpcGUoXG4gICAgZmlsdGVyKHdpc2hsaXN0ID0+IEJvb2xlYW4od2lzaGxpc3QpKSxcbiAgICBtYXAod2lzaExpc3QgPT4gd2lzaExpc3QuZW50cmllcylcbiAgKTtcblxuICB1c2VyTG9nZ2VkSW4kOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5hdXRoU2VydmljZS5pc1VzZXJMb2dnZWRJbigpO1xuICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMud2lzaExpc3RTZXJ2aWNlLmdldFdpc2hMaXN0TG9hZGluZygpO1xuXG4gIGhhc1N0b2NrID0gZmFsc2U7XG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgd2lzaExpc3RTZXJ2aWNlOiBXaXNoTGlzdFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGN1cnJlbnRQcm9kdWN0U2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgKSB7fVxuXG4gIGFkZChwcm9kdWN0OiBQcm9kdWN0KTogdm9pZCB7XG4gICAgdGhpcy53aXNoTGlzdFNlcnZpY2UuYWRkRW50cnkocHJvZHVjdC5jb2RlKTtcbiAgfVxuXG4gIHJlbW92ZShlbnRyeTogT3JkZXJFbnRyeSk6IHZvaWQge1xuICAgIHRoaXMud2lzaExpc3RTZXJ2aWNlLnJlbW92ZUVudHJ5KGVudHJ5KTtcbiAgfVxuXG4gIGdldFByb2R1Y3RJbldpc2hMaXN0KHByb2R1Y3Q6IFByb2R1Y3QsIGVudHJpZXM6IE9yZGVyRW50cnlbXSk6IE9yZGVyRW50cnkge1xuICAgIGNvbnN0IGl0ZW0gPSBlbnRyaWVzLmZpbmQoZW50cnkgPT4gZW50cnkucHJvZHVjdC5jb2RlID09PSBwcm9kdWN0LmNvZGUpO1xuICAgIHJldHVybiBpdGVtO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTdG9ja0luZm8ocHJvZHVjdDogUHJvZHVjdCk6IHZvaWQge1xuICAgIHRoaXMuaGFzU3RvY2sgPVxuICAgICAgcHJvZHVjdC5zdG9jayAmJiBwcm9kdWN0LnN0b2NrLnN0b2NrTGV2ZWxTdGF0dXMgIT09ICdvdXRPZlN0b2NrJztcbiAgfVxufVxuIl19