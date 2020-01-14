/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { SelectiveCartService, ActiveCartService, CmsService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
export class SaveForLaterComponent {
    /**
     * @param {?} cmsService
     * @param {?} cartService
     * @param {?} selectiveCartService
     */
    constructor(cmsService, cartService, selectiveCartService) {
        this.cmsService = cmsService;
        this.cartService = cartService;
        this.selectiveCartService = selectiveCartService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isCartEmpty$ = this.cartService
            .getActive()
            .pipe(map((/**
         * @param {?} cart
         * @return {?}
         */
        cart => !(cart && cart.totalItems && cart.totalItems > 0))));
        this.saveForLater$ = this.selectiveCartService.getCart();
        this.entries$ = this.selectiveCartService
            .getEntries()
            .pipe(filter((/**
         * @param {?} entries
         * @return {?}
         */
        entries => entries.length > 0)));
        this.cartLoaded$ = combineLatest([
            this.cartService.getLoaded(),
            this.selectiveCartService.getLoaded(),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([cartLoaded, sflLoaded]) => cartLoaded && sflLoaded)));
        this.data$ = this.cmsService.getComponentData('EmptyCartParagraphComponent');
    }
    /**
     * @param {?} item
     * @return {?}
     */
    moveToCart(item) {
        this.selectiveCartService.removeEntry(item);
        this.cartService.addEntry(item.product.code, item.quantity);
    }
}
SaveForLaterComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-save-for-later',
                template: "<ng-container *ngIf=\"isCartEmpty$ | async\">\n  <p\n    *ngIf=\"data$ | async as data\"\n    [innerHTML]=\"data.content\"\n    class=\"cx-empty-cart-info\"\n  ></p>\n</ng-container>\n\n<ng-container *ngIf=\"saveForLater$ | async as saveForLater\">\n  <ng-container *ngIf=\"entries$ | async as entries\">\n    <div *ngIf=\"saveForLater.totalItems > 0\" class=\"cart-details-wrapper\">\n      <div class=\"cx-total\">\n        {{\n          'saveForLaterItems.itemTotal'\n            | cxTranslate: { count: saveForLater.totalItems }\n        }}\n      </div>\n      <cx-cart-item-list\n        [items]=\"entries\"\n        [isReadOnly]=\"true\"\n        [cartIsLoading]=\"!(cartLoaded$ | async)\"\n        [options]=\"{\n          isSaveForLater: true,\n          optionalBtn: moveToCartBtn\n        }\"\n      ></cx-cart-item-list>\n    </div>\n  </ng-container>\n</ng-container>\n\n<ng-template let-ctx #moveToCartBtn>\n  <div class=\"col-md-3 col-lg-3 col-xl-3 cx-sfl-btn\">\n    <button\n      class=\"link\"\n      [disabled]=\"ctx.loading\"\n      (click)=\"moveToCart(ctx.item)\"\n    >\n      {{ 'saveForLaterItems.moveToCart' | cxTranslate }}\n    </button>\n  </div>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
SaveForLaterComponent.ctorParameters = () => [
    { type: CmsService },
    { type: ActiveCartService },
    { type: SelectiveCartService }
];
if (false) {
    /** @type {?} */
    SaveForLaterComponent.prototype.saveForLater$;
    /** @type {?} */
    SaveForLaterComponent.prototype.cart$;
    /** @type {?} */
    SaveForLaterComponent.prototype.entries$;
    /** @type {?} */
    SaveForLaterComponent.prototype.cartLoaded$;
    /** @type {?} */
    SaveForLaterComponent.prototype.data$;
    /** @type {?} */
    SaveForLaterComponent.prototype.isCartEmpty$;
    /**
     * @type {?}
     * @protected
     */
    SaveForLaterComponent.prototype.cmsService;
    /**
     * @type {?}
     * @protected
     */
    SaveForLaterComponent.prototype.cartService;
    /**
     * @type {?}
     * @protected
     */
    SaveForLaterComponent.prototype.selectiveCartService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZS1mb3ItbGF0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9zYXZlLWZvci1sYXRlci9zYXZlLWZvci1sYXRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUNMLG9CQUFvQixFQUdwQixpQkFBaUIsRUFFakIsVUFBVSxHQUNYLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzdDLE1BQU0sT0FBTyxxQkFBcUI7Ozs7OztJQVFoQyxZQUNZLFVBQXNCLEVBQ3RCLFdBQThCLEVBQzlCLG9CQUEwQztRQUYxQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQUM5Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ25ELENBQUM7Ozs7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVzthQUNqQyxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsR0FBRzs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLG9CQUFvQjthQUN0QyxVQUFVLEVBQUU7YUFDWixJQUFJLENBQUMsTUFBTTs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDO1lBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFO1lBQzVCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUU7U0FDdEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxJQUFJLFNBQVMsRUFBQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUMzQyw2QkFBNkIsQ0FDOUIsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLElBQVU7UUFDbkIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7O1lBdENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixzckNBQThDO2FBQy9DOzs7O1lBVEMsVUFBVTtZQUZWLGlCQUFpQjtZQUhqQixvQkFBb0I7Ozs7SUFnQnBCLDhDQUFnQzs7SUFDaEMsc0NBQXdCOztJQUN4Qix5Q0FBbUM7O0lBQ25DLDRDQUFpQzs7SUFDakMsc0NBQXlDOztJQUN6Qyw2Q0FBa0M7Ozs7O0lBR2hDLDJDQUFnQzs7Ozs7SUFDaEMsNENBQXdDOzs7OztJQUN4QyxxREFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgU2VsZWN0aXZlQ2FydFNlcnZpY2UsXG4gIENhcnQsXG4gIE9yZGVyRW50cnksXG4gIEFjdGl2ZUNhcnRTZXJ2aWNlLFxuICBDbXNQYXJhZ3JhcGhDb21wb25lbnQsXG4gIENtc1NlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEl0ZW0gfSBmcm9tICcuLi9jYXJ0LXNoYXJlZC9jYXJ0LWl0ZW0vY2FydC1pdGVtLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXNhdmUtZm9yLWxhdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NhdmUtZm9yLWxhdGVyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2F2ZUZvckxhdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgc2F2ZUZvckxhdGVyJDogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgY2FydCQ6IE9ic2VydmFibGU8Q2FydD47XG4gIGVudHJpZXMkOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT47XG4gIGNhcnRMb2FkZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBkYXRhJDogT2JzZXJ2YWJsZTxDbXNQYXJhZ3JhcGhDb21wb25lbnQ+O1xuICBpc0NhcnRFbXB0eSQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgc2VsZWN0aXZlQ2FydFNlcnZpY2U6IFNlbGVjdGl2ZUNhcnRTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlzQ2FydEVtcHR5JCA9IHRoaXMuY2FydFNlcnZpY2VcbiAgICAgIC5nZXRBY3RpdmUoKVxuICAgICAgLnBpcGUobWFwKGNhcnQgPT4gIShjYXJ0ICYmIGNhcnQudG90YWxJdGVtcyAmJiBjYXJ0LnRvdGFsSXRlbXMgPiAwKSkpO1xuICAgIHRoaXMuc2F2ZUZvckxhdGVyJCA9IHRoaXMuc2VsZWN0aXZlQ2FydFNlcnZpY2UuZ2V0Q2FydCgpO1xuICAgIHRoaXMuZW50cmllcyQgPSB0aGlzLnNlbGVjdGl2ZUNhcnRTZXJ2aWNlXG4gICAgICAuZ2V0RW50cmllcygpXG4gICAgICAucGlwZShmaWx0ZXIoZW50cmllcyA9PiBlbnRyaWVzLmxlbmd0aCA+IDApKTtcbiAgICB0aGlzLmNhcnRMb2FkZWQkID0gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmNhcnRTZXJ2aWNlLmdldExvYWRlZCgpLFxuICAgICAgdGhpcy5zZWxlY3RpdmVDYXJ0U2VydmljZS5nZXRMb2FkZWQoKSxcbiAgICBdKS5waXBlKG1hcCgoW2NhcnRMb2FkZWQsIHNmbExvYWRlZF0pID0+IGNhcnRMb2FkZWQgJiYgc2ZsTG9hZGVkKSk7XG4gICAgdGhpcy5kYXRhJCA9IHRoaXMuY21zU2VydmljZS5nZXRDb21wb25lbnREYXRhKFxuICAgICAgJ0VtcHR5Q2FydFBhcmFncmFwaENvbXBvbmVudCdcbiAgICApO1xuICB9XG5cbiAgbW92ZVRvQ2FydChpdGVtOiBJdGVtKSB7XG4gICAgdGhpcy5zZWxlY3RpdmVDYXJ0U2VydmljZS5yZW1vdmVFbnRyeShpdGVtKTtcbiAgICB0aGlzLmNhcnRTZXJ2aWNlLmFkZEVudHJ5KGl0ZW0ucHJvZHVjdC5jb2RlLCBpdGVtLnF1YW50aXR5KTtcbiAgfVxufVxuIl19