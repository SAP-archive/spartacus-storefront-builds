/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { WishListService } from '@spartacus/core';
var WishListItemComponent = /** @class */ (function () {
    function WishListItemComponent(wishListService) {
        this.wishListService = wishListService;
    }
    /**
     * @param {?} entry
     * @return {?}
     */
    WishListItemComponent.prototype.remove = /**
     * @param {?} entry
     * @return {?}
     */
    function (entry) {
        this.wishListService.removeEntry(entry);
    };
    WishListItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-wish-list-item',
                    template: "<div class=\"row\">\n  <div class=\"col-12 col-md-4\">\n    <a\n      [routerLink]=\"{ cxRoute: 'product', params: cartEntry.product } | cxUrl\"\n      class=\"cx-product-image-container\"\n    >\n      <cx-media\n        class=\"cx-product-image\"\n        [container]=\"cartEntry.product.images?.PRIMARY\"\n        format=\"product\"\n        [alt]=\"cartEntry.product.summary\"\n      ></cx-media>\n    </a>\n  </div>\n  <div class=\"col-12 col-md-8\">\n    <a\n      [routerLink]=\"{ cxRoute: 'product', params: cartEntry.product } | cxUrl\"\n      class=\"cx-product-name\"\n      [innerHtml]=\"cartEntry.product.name\"\n    ></a>\n    <cx-star-rating\n      [rating]=\"cartEntry.product?.averageRating\"\n      [disabled]=\"true\"\n    ></cx-star-rating>\n    <div class=\"cx-product-price\" aria-label=\"Product price\">\n      {{ cartEntry.basePrice?.formattedValue }}\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12 col-md-8\"></div>\n      <div class=\"col-12 col-md-4\">\n        <cx-add-to-cart\n          *ngIf=\"cartEntry.product.stock.stockLevelStatus !== 'outOfStock'\"\n          [showQuantity]=\"false\"\n          [product]=\"cartEntry.product\"\n        ></cx-add-to-cart>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12 col-md-8\"></div>\n      <div class=\"col-12 col-md-4\">\n        <button class=\"btn btn-link\" (click)=\"remove(cartEntry)\">\n          {{ 'wishList.remove' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    WishListItemComponent.ctorParameters = function () { return [
        { type: WishListService }
    ]; };
    WishListItemComponent.propDecorators = {
        cartEntry: [{ type: Input }]
    };
    return WishListItemComponent;
}());
export { WishListItemComponent };
if (false) {
    /** @type {?} */
    WishListItemComponent.prototype.cartEntry;
    /**
     * @type {?}
     * @protected
     */
    WishListItemComponent.prototype.wishListService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvd2lzaC1saXN0L2NvbXBvbmVudHMvd2lzaC1saXN0LWl0ZW0vd2lzaC1saXN0LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFbEQ7SUFRRSwrQkFBc0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQUcsQ0FBQzs7Ozs7SUFFMUQsc0NBQU07Ozs7SUFBTixVQUFPLEtBQVU7UUFDZixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDOztnQkFaRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0Isb2dEQUE4QztvQkFDOUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQU5RLGVBQWU7Ozs0QkFRckIsS0FBSzs7SUFPUiw0QkFBQztDQUFBLEFBYkQsSUFhQztTQVJZLHFCQUFxQjs7O0lBQ2hDLDBDQUF3Qjs7Ozs7SUFFWixnREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2lzaExpc3RTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtd2lzaC1saXN0LWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vd2lzaC1saXN0LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgV2lzaExpc3RJdGVtQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY2FydEVudHJ5OiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHdpc2hMaXN0U2VydmljZTogV2lzaExpc3RTZXJ2aWNlKSB7fVxuXG4gIHJlbW92ZShlbnRyeTogYW55KSB7XG4gICAgdGhpcy53aXNoTGlzdFNlcnZpY2UucmVtb3ZlRW50cnkoZW50cnkpO1xuICB9XG59XG4iXX0=