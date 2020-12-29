import { Component } from '@angular/core';
import { ActiveCartService, CmsService, SelectiveCartService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
export class SaveForLaterComponent {
    constructor(cmsService, cartService, selectiveCartService) {
        this.cmsService = cmsService;
        this.cartService = cartService;
        this.selectiveCartService = selectiveCartService;
    }
    ngOnInit() {
        this.isCartEmpty$ = this.cartService
            .getActive()
            .pipe(map((cart) => !(cart && cart.totalItems && cart.totalItems > 0)));
        this.saveForLater$ = this.selectiveCartService.getCart();
        this.entries$ = this.selectiveCartService
            .getEntries()
            .pipe(filter((entries) => entries.length > 0));
        // TODO(#10547): Switch in 4.0 `selectiveCartService.getLoaded` to `selectiveCartService.isStable` method
        this.cartLoaded$ = combineLatest([
            this.cartService.isStable(),
            this.selectiveCartService.getLoaded(),
        ]).pipe(map(([cartLoaded, sflLoaded]) => cartLoaded && sflLoaded));
        this.data$ = this.cmsService.getComponentData('EmptyCartParagraphComponent');
    }
    moveToCart(item) {
        this.selectiveCartService.removeEntry(item);
        this.cartService.addEntry(item.product.code, item.quantity);
    }
}
SaveForLaterComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-save-for-later',
                template: "<ng-container *ngIf=\"isCartEmpty$ | async\">\n  <p\n    *ngIf=\"data$ | async as data\"\n    [innerHTML]=\"data.content\"\n    class=\"cx-empty-cart-info\"\n  ></p>\n</ng-container>\n\n<ng-container *ngIf=\"saveForLater$ | async as saveForLater\">\n  <ng-container *ngIf=\"entries$ | async as entries\">\n    <div *ngIf=\"saveForLater.totalItems > 0\" class=\"cart-details-wrapper\">\n      <div class=\"cx-total\">\n        {{\n          'saveForLaterItems.itemTotal'\n            | cxTranslate: { count: saveForLater.totalItems }\n        }}\n      </div>\n      <cx-cart-item-list\n        [items]=\"entries\"\n        [readonly]=\"false\"\n        [cartIsLoading]=\"!(cartLoaded$ | async)\"\n        [options]=\"{\n          isSaveForLater: true,\n          optionalBtn: moveToCartBtn\n        }\"\n      ></cx-cart-item-list>\n    </div>\n  </ng-container>\n</ng-container>\n\n<ng-template let-ctx #moveToCartBtn>\n  <div class=\"col-md-3 col-lg-3 col-xl-3 cx-sfl-btn\">\n    <button\n      class=\"link cx-action-link\"\n      [disabled]=\"ctx.loading\"\n      (click)=\"moveToCart(ctx.item)\"\n      type=\"button\"\n    >\n      {{ 'saveForLaterItems.moveToCart' | cxTranslate }}\n    </button>\n  </div>\n</ng-template>\n"
            },] }
];
SaveForLaterComponent.ctorParameters = () => [
    { type: CmsService },
    { type: ActiveCartService },
    { type: SelectiveCartService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZS1mb3ItbGF0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvY2FydC9zYXZlLWZvci1sYXRlci9zYXZlLWZvci1sYXRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQ0wsaUJBQWlCLEVBR2pCLFVBQVUsRUFFVixvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFNN0MsTUFBTSxPQUFPLHFCQUFxQjtJQVFoQyxZQUNZLFVBQXNCLEVBQ3RCLFdBQThCLEVBQzlCLG9CQUEwQztRQUYxQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQUM5Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ25ELENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVzthQUNqQyxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsb0JBQW9CO2FBQ3RDLFVBQVUsRUFBRTthQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCx5R0FBeUc7UUFDekcsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUM7WUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUU7WUFDM0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsRUFBRTtTQUN0QyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQzNDLDZCQUE2QixDQUM5QixDQUFDO0lBQ0osQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFnQjtRQUN6QixJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7WUF2Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLDJ0Q0FBOEM7YUFDL0M7OztZQVZDLFVBQVU7WUFIVixpQkFBaUI7WUFLakIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFjdGl2ZUNhcnRTZXJ2aWNlLFxuICBDYXJ0LFxuICBDbXNQYXJhZ3JhcGhDb21wb25lbnQsXG4gIENtc1NlcnZpY2UsXG4gIE9yZGVyRW50cnksXG4gIFNlbGVjdGl2ZUNhcnRTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXNhdmUtZm9yLWxhdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NhdmUtZm9yLWxhdGVyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2F2ZUZvckxhdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgc2F2ZUZvckxhdGVyJDogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgY2FydCQ6IE9ic2VydmFibGU8Q2FydD47XG4gIGVudHJpZXMkOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT47XG4gIGNhcnRMb2FkZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBkYXRhJDogT2JzZXJ2YWJsZTxDbXNQYXJhZ3JhcGhDb21wb25lbnQ+O1xuICBpc0NhcnRFbXB0eSQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgc2VsZWN0aXZlQ2FydFNlcnZpY2U6IFNlbGVjdGl2ZUNhcnRTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlzQ2FydEVtcHR5JCA9IHRoaXMuY2FydFNlcnZpY2VcbiAgICAgIC5nZXRBY3RpdmUoKVxuICAgICAgLnBpcGUobWFwKChjYXJ0KSA9PiAhKGNhcnQgJiYgY2FydC50b3RhbEl0ZW1zICYmIGNhcnQudG90YWxJdGVtcyA+IDApKSk7XG4gICAgdGhpcy5zYXZlRm9yTGF0ZXIkID0gdGhpcy5zZWxlY3RpdmVDYXJ0U2VydmljZS5nZXRDYXJ0KCk7XG4gICAgdGhpcy5lbnRyaWVzJCA9IHRoaXMuc2VsZWN0aXZlQ2FydFNlcnZpY2VcbiAgICAgIC5nZXRFbnRyaWVzKClcbiAgICAgIC5waXBlKGZpbHRlcigoZW50cmllcykgPT4gZW50cmllcy5sZW5ndGggPiAwKSk7XG4gICAgLy8gVE9ETygjMTA1NDcpOiBTd2l0Y2ggaW4gNC4wIGBzZWxlY3RpdmVDYXJ0U2VydmljZS5nZXRMb2FkZWRgIHRvIGBzZWxlY3RpdmVDYXJ0U2VydmljZS5pc1N0YWJsZWAgbWV0aG9kXG4gICAgdGhpcy5jYXJ0TG9hZGVkJCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5jYXJ0U2VydmljZS5pc1N0YWJsZSgpLFxuICAgICAgdGhpcy5zZWxlY3RpdmVDYXJ0U2VydmljZS5nZXRMb2FkZWQoKSxcbiAgICBdKS5waXBlKG1hcCgoW2NhcnRMb2FkZWQsIHNmbExvYWRlZF0pID0+IGNhcnRMb2FkZWQgJiYgc2ZsTG9hZGVkKSk7XG4gICAgdGhpcy5kYXRhJCA9IHRoaXMuY21zU2VydmljZS5nZXRDb21wb25lbnREYXRhKFxuICAgICAgJ0VtcHR5Q2FydFBhcmFncmFwaENvbXBvbmVudCdcbiAgICApO1xuICB9XG5cbiAgbW92ZVRvQ2FydChpdGVtOiBPcmRlckVudHJ5KSB7XG4gICAgdGhpcy5zZWxlY3RpdmVDYXJ0U2VydmljZS5yZW1vdmVFbnRyeShpdGVtKTtcbiAgICB0aGlzLmNhcnRTZXJ2aWNlLmFkZEVudHJ5KGl0ZW0ucHJvZHVjdC5jb2RlLCBpdGVtLnF1YW50aXR5KTtcbiAgfVxufVxuIl19