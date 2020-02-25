import { __decorate, __read } from "tslib";
import { Component } from '@angular/core';
import { SelectiveCartService, Cart, OrderEntry, ActiveCartService, CmsParagraphComponent, CmsService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
var SaveForLaterComponent = /** @class */ (function () {
    function SaveForLaterComponent(cmsService, cartService, selectiveCartService) {
        this.cmsService = cmsService;
        this.cartService = cartService;
        this.selectiveCartService = selectiveCartService;
    }
    SaveForLaterComponent.prototype.ngOnInit = function () {
        this.isCartEmpty$ = this.cartService
            .getActive()
            .pipe(map(function (cart) { return !(cart && cart.totalItems && cart.totalItems > 0); }));
        this.saveForLater$ = this.selectiveCartService.getCart();
        this.entries$ = this.selectiveCartService
            .getEntries()
            .pipe(filter(function (entries) { return entries.length > 0; }));
        this.cartLoaded$ = combineLatest([
            this.cartService.getLoaded(),
            this.selectiveCartService.getLoaded(),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 2), cartLoaded = _b[0], sflLoaded = _b[1];
            return cartLoaded && sflLoaded;
        }));
        this.data$ = this.cmsService.getComponentData('EmptyCartParagraphComponent');
    };
    SaveForLaterComponent.prototype.moveToCart = function (item) {
        this.selectiveCartService.removeEntry(item);
        this.cartService.addEntry(item.product.code, item.quantity);
    };
    SaveForLaterComponent.ctorParameters = function () { return [
        { type: CmsService },
        { type: ActiveCartService },
        { type: SelectiveCartService }
    ]; };
    SaveForLaterComponent = __decorate([
        Component({
            selector: 'cx-save-for-later',
            template: "<ng-container *ngIf=\"isCartEmpty$ | async\">\n  <p\n    *ngIf=\"data$ | async as data\"\n    [innerHTML]=\"data.content\"\n    class=\"cx-empty-cart-info\"\n  ></p>\n</ng-container>\n\n<ng-container *ngIf=\"saveForLater$ | async as saveForLater\">\n  <ng-container *ngIf=\"entries$ | async as entries\">\n    <div *ngIf=\"saveForLater.totalItems > 0\" class=\"cart-details-wrapper\">\n      <div class=\"cx-total\">\n        {{\n          'saveForLaterItems.itemTotal'\n            | cxTranslate: { count: saveForLater.totalItems }\n        }}\n      </div>\n      <cx-cart-item-list\n        [items]=\"entries\"\n        [readonly]=\"false\"\n        [cartIsLoading]=\"!(cartLoaded$ | async)\"\n        [options]=\"{\n          isSaveForLater: true,\n          optionalBtn: moveToCartBtn\n        }\"\n      ></cx-cart-item-list>\n    </div>\n  </ng-container>\n</ng-container>\n\n<ng-template let-ctx #moveToCartBtn>\n  <div class=\"col-md-3 col-lg-3 col-xl-3 cx-sfl-btn\">\n    <button\n      class=\"link\"\n      [disabled]=\"ctx.loading\"\n      (click)=\"moveToCart(ctx.item)\"\n    >\n      {{ 'saveForLaterItems.moveToCart' | cxTranslate }}\n    </button>\n  </div>\n</ng-template>\n"
        })
    ], SaveForLaterComponent);
    return SaveForLaterComponent;
}());
export { SaveForLaterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZS1mb3ItbGF0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9zYXZlLWZvci1sYXRlci9zYXZlLWZvci1sYXRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixJQUFJLEVBQ0osVUFBVSxFQUNWLGlCQUFpQixFQUNqQixxQkFBcUIsRUFDckIsVUFBVSxHQUNYLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzdDO0lBUUUsK0JBQ1ksVUFBc0IsRUFDdEIsV0FBOEIsRUFDOUIsb0JBQTBDO1FBRjFDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO1FBQzlCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDbkQsQ0FBQztJQUVKLHdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXO2FBQ2pDLFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsRUFBakQsQ0FBaUQsQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsb0JBQW9CO2FBQ3RDLFVBQVUsRUFBRTthQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUM7WUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUU7WUFDNUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsRUFBRTtTQUN0QyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQXVCO2dCQUF2QixrQkFBdUIsRUFBdEIsa0JBQVUsRUFBRSxpQkFBUztZQUFNLE9BQUEsVUFBVSxJQUFJLFNBQVM7UUFBdkIsQ0FBdUIsQ0FBQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUMzQyw2QkFBNkIsQ0FDOUIsQ0FBQztJQUNKLENBQUM7SUFFRCwwQ0FBVSxHQUFWLFVBQVcsSUFBVTtRQUNuQixJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5RCxDQUFDOztnQkF6QnVCLFVBQVU7Z0JBQ1QsaUJBQWlCO2dCQUNSLG9CQUFvQjs7SUFYM0MscUJBQXFCO1FBSmpDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IscXJDQUE4QztTQUMvQyxDQUFDO09BQ1cscUJBQXFCLENBbUNqQztJQUFELDRCQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7U0FuQ1kscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFNlbGVjdGl2ZUNhcnRTZXJ2aWNlLFxuICBDYXJ0LFxuICBPcmRlckVudHJ5LFxuICBBY3RpdmVDYXJ0U2VydmljZSxcbiAgQ21zUGFyYWdyYXBoQ29tcG9uZW50LFxuICBDbXNTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi4vY2FydC1zaGFyZWQvY2FydC1pdGVtL2NhcnQtaXRlbS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zYXZlLWZvci1sYXRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zYXZlLWZvci1sYXRlci5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNhdmVGb3JMYXRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHNhdmVGb3JMYXRlciQ6IE9ic2VydmFibGU8Q2FydD47XG4gIGNhcnQkOiBPYnNlcnZhYmxlPENhcnQ+O1xuICBlbnRyaWVzJDogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+O1xuICBjYXJ0TG9hZGVkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgZGF0YSQ6IE9ic2VydmFibGU8Q21zUGFyYWdyYXBoQ29tcG9uZW50PjtcbiAgaXNDYXJ0RW1wdHkkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHNlbGVjdGl2ZUNhcnRTZXJ2aWNlOiBTZWxlY3RpdmVDYXJ0U2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pc0NhcnRFbXB0eSQgPSB0aGlzLmNhcnRTZXJ2aWNlXG4gICAgICAuZ2V0QWN0aXZlKClcbiAgICAgIC5waXBlKG1hcChjYXJ0ID0+ICEoY2FydCAmJiBjYXJ0LnRvdGFsSXRlbXMgJiYgY2FydC50b3RhbEl0ZW1zID4gMCkpKTtcbiAgICB0aGlzLnNhdmVGb3JMYXRlciQgPSB0aGlzLnNlbGVjdGl2ZUNhcnRTZXJ2aWNlLmdldENhcnQoKTtcbiAgICB0aGlzLmVudHJpZXMkID0gdGhpcy5zZWxlY3RpdmVDYXJ0U2VydmljZVxuICAgICAgLmdldEVudHJpZXMoKVxuICAgICAgLnBpcGUoZmlsdGVyKGVudHJpZXMgPT4gZW50cmllcy5sZW5ndGggPiAwKSk7XG4gICAgdGhpcy5jYXJ0TG9hZGVkJCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5jYXJ0U2VydmljZS5nZXRMb2FkZWQoKSxcbiAgICAgIHRoaXMuc2VsZWN0aXZlQ2FydFNlcnZpY2UuZ2V0TG9hZGVkKCksXG4gICAgXSkucGlwZShtYXAoKFtjYXJ0TG9hZGVkLCBzZmxMb2FkZWRdKSA9PiBjYXJ0TG9hZGVkICYmIHNmbExvYWRlZCkpO1xuICAgIHRoaXMuZGF0YSQgPSB0aGlzLmNtc1NlcnZpY2UuZ2V0Q29tcG9uZW50RGF0YShcbiAgICAgICdFbXB0eUNhcnRQYXJhZ3JhcGhDb21wb25lbnQnXG4gICAgKTtcbiAgfVxuXG4gIG1vdmVUb0NhcnQoaXRlbTogSXRlbSkge1xuICAgIHRoaXMuc2VsZWN0aXZlQ2FydFNlcnZpY2UucmVtb3ZlRW50cnkoaXRlbSk7XG4gICAgdGhpcy5jYXJ0U2VydmljZS5hZGRFbnRyeShpdGVtLnByb2R1Y3QuY29kZSwgaXRlbS5xdWFudGl0eSk7XG4gIH1cbn1cbiJdfQ==