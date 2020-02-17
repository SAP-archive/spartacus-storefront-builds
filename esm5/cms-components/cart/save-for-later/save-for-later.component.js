/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SelectiveCartService, ActiveCartService, CmsService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
var SaveForLaterComponent = /** @class */ (function () {
    function SaveForLaterComponent(cmsService, cartService, selectiveCartService) {
        this.cmsService = cmsService;
        this.cartService = cartService;
        this.selectiveCartService = selectiveCartService;
    }
    /**
     * @return {?}
     */
    SaveForLaterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.isCartEmpty$ = this.cartService
            .getActive()
            .pipe(map((/**
         * @param {?} cart
         * @return {?}
         */
        function (cart) { return !(cart && cart.totalItems && cart.totalItems > 0); })));
        this.saveForLater$ = this.selectiveCartService.getCart();
        this.entries$ = this.selectiveCartService
            .getEntries()
            .pipe(filter((/**
         * @param {?} entries
         * @return {?}
         */
        function (entries) { return entries.length > 0; })));
        this.cartLoaded$ = combineLatest([
            this.cartService.getLoaded(),
            this.selectiveCartService.getLoaded(),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), cartLoaded = _b[0], sflLoaded = _b[1];
            return cartLoaded && sflLoaded;
        })));
        this.data$ = this.cmsService.getComponentData('EmptyCartParagraphComponent');
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SaveForLaterComponent.prototype.moveToCart = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.selectiveCartService.removeEntry(item);
        this.cartService.addEntry(item.product.code, item.quantity);
    };
    SaveForLaterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-save-for-later',
                    template: "<ng-container *ngIf=\"isCartEmpty$ | async\">\n  <p\n    *ngIf=\"data$ | async as data\"\n    [innerHTML]=\"data.content\"\n    class=\"cx-empty-cart-info\"\n  ></p>\n</ng-container>\n\n<ng-container *ngIf=\"saveForLater$ | async as saveForLater\">\n  <ng-container *ngIf=\"entries$ | async as entries\">\n    <div *ngIf=\"saveForLater.totalItems > 0\" class=\"cart-details-wrapper\">\n      <div class=\"cx-total\">\n        {{\n          'saveForLaterItems.itemTotal'\n            | cxTranslate: { count: saveForLater.totalItems }\n        }}\n      </div>\n      <cx-cart-item-list\n        [items]=\"entries\"\n        [readonly]=\"true\"\n        [cartIsLoading]=\"!(cartLoaded$ | async)\"\n        [options]=\"{\n          isSaveForLater: true,\n          optionalBtn: moveToCartBtn\n        }\"\n      ></cx-cart-item-list>\n    </div>\n  </ng-container>\n</ng-container>\n\n<ng-template let-ctx #moveToCartBtn>\n  <div class=\"col-md-3 col-lg-3 col-xl-3 cx-sfl-btn\">\n    <button\n      class=\"link\"\n      [disabled]=\"ctx.loading\"\n      (click)=\"moveToCart(ctx.item)\"\n    >\n      {{ 'saveForLaterItems.moveToCart' | cxTranslate }}\n    </button>\n  </div>\n</ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    SaveForLaterComponent.ctorParameters = function () { return [
        { type: CmsService },
        { type: ActiveCartService },
        { type: SelectiveCartService }
    ]; };
    return SaveForLaterComponent;
}());
export { SaveForLaterComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZS1mb3ItbGF0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9zYXZlLWZvci1sYXRlci9zYXZlLWZvci1sYXRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFDTCxvQkFBb0IsRUFHcEIsaUJBQWlCLEVBRWpCLFVBQVUsR0FDWCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUc3QztJQVlFLCtCQUNZLFVBQXNCLEVBQ3RCLFdBQThCLEVBQzlCLG9CQUEwQztRQUYxQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQUM5Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ25ELENBQUM7Ozs7SUFFSix3Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXO2FBQ2pDLFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsRUFBakQsQ0FBaUQsRUFBQyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsb0JBQW9CO2FBQ3RDLFVBQVUsRUFBRTthQUNaLElBQUksQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsRUFBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUM7WUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUU7WUFDNUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsRUFBRTtTQUN0QyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLEVBQXVCO2dCQUF2QiwwQkFBdUIsRUFBdEIsa0JBQVUsRUFBRSxpQkFBUztZQUFNLE9BQUEsVUFBVSxJQUFJLFNBQVM7UUFBdkIsQ0FBdUIsRUFBQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUMzQyw2QkFBNkIsQ0FDOUIsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsMENBQVU7Ozs7SUFBVixVQUFXLElBQVU7UUFDbkIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Z0JBdENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixvckNBQThDO2lCQUMvQzs7OztnQkFUQyxVQUFVO2dCQUZWLGlCQUFpQjtnQkFIakIsb0JBQW9COztJQWtEdEIsNEJBQUM7Q0FBQSxBQXZDRCxJQXVDQztTQW5DWSxxQkFBcUI7OztJQUNoQyw4Q0FBZ0M7O0lBQ2hDLHNDQUF3Qjs7SUFDeEIseUNBQW1DOztJQUNuQyw0Q0FBaUM7O0lBQ2pDLHNDQUF5Qzs7SUFDekMsNkNBQWtDOzs7OztJQUdoQywyQ0FBZ0M7Ozs7O0lBQ2hDLDRDQUF3Qzs7Ozs7SUFDeEMscURBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFNlbGVjdGl2ZUNhcnRTZXJ2aWNlLFxuICBDYXJ0LFxuICBPcmRlckVudHJ5LFxuICBBY3RpdmVDYXJ0U2VydmljZSxcbiAgQ21zUGFyYWdyYXBoQ29tcG9uZW50LFxuICBDbXNTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi4vY2FydC1zaGFyZWQvY2FydC1pdGVtL2NhcnQtaXRlbS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zYXZlLWZvci1sYXRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zYXZlLWZvci1sYXRlci5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNhdmVGb3JMYXRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHNhdmVGb3JMYXRlciQ6IE9ic2VydmFibGU8Q2FydD47XG4gIGNhcnQkOiBPYnNlcnZhYmxlPENhcnQ+O1xuICBlbnRyaWVzJDogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+O1xuICBjYXJ0TG9hZGVkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgZGF0YSQ6IE9ic2VydmFibGU8Q21zUGFyYWdyYXBoQ29tcG9uZW50PjtcbiAgaXNDYXJ0RW1wdHkkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHNlbGVjdGl2ZUNhcnRTZXJ2aWNlOiBTZWxlY3RpdmVDYXJ0U2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pc0NhcnRFbXB0eSQgPSB0aGlzLmNhcnRTZXJ2aWNlXG4gICAgICAuZ2V0QWN0aXZlKClcbiAgICAgIC5waXBlKG1hcChjYXJ0ID0+ICEoY2FydCAmJiBjYXJ0LnRvdGFsSXRlbXMgJiYgY2FydC50b3RhbEl0ZW1zID4gMCkpKTtcbiAgICB0aGlzLnNhdmVGb3JMYXRlciQgPSB0aGlzLnNlbGVjdGl2ZUNhcnRTZXJ2aWNlLmdldENhcnQoKTtcbiAgICB0aGlzLmVudHJpZXMkID0gdGhpcy5zZWxlY3RpdmVDYXJ0U2VydmljZVxuICAgICAgLmdldEVudHJpZXMoKVxuICAgICAgLnBpcGUoZmlsdGVyKGVudHJpZXMgPT4gZW50cmllcy5sZW5ndGggPiAwKSk7XG4gICAgdGhpcy5jYXJ0TG9hZGVkJCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5jYXJ0U2VydmljZS5nZXRMb2FkZWQoKSxcbiAgICAgIHRoaXMuc2VsZWN0aXZlQ2FydFNlcnZpY2UuZ2V0TG9hZGVkKCksXG4gICAgXSkucGlwZShtYXAoKFtjYXJ0TG9hZGVkLCBzZmxMb2FkZWRdKSA9PiBjYXJ0TG9hZGVkICYmIHNmbExvYWRlZCkpO1xuICAgIHRoaXMuZGF0YSQgPSB0aGlzLmNtc1NlcnZpY2UuZ2V0Q29tcG9uZW50RGF0YShcbiAgICAgICdFbXB0eUNhcnRQYXJhZ3JhcGhDb21wb25lbnQnXG4gICAgKTtcbiAgfVxuXG4gIG1vdmVUb0NhcnQoaXRlbTogSXRlbSkge1xuICAgIHRoaXMuc2VsZWN0aXZlQ2FydFNlcnZpY2UucmVtb3ZlRW50cnkoaXRlbSk7XG4gICAgdGhpcy5jYXJ0U2VydmljZS5hZGRFbnRyeShpdGVtLnByb2R1Y3QuY29kZSwgaXRlbS5xdWFudGl0eSk7XG4gIH1cbn1cbiJdfQ==