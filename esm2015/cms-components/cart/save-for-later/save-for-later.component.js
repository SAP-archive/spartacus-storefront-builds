import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { SelectiveCartService, Cart, OrderEntry, ActiveCartService, CmsParagraphComponent, CmsService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
let SaveForLaterComponent = class SaveForLaterComponent {
    constructor(cmsService, cartService, selectiveCartService) {
        this.cmsService = cmsService;
        this.cartService = cartService;
        this.selectiveCartService = selectiveCartService;
    }
    ngOnInit() {
        this.isCartEmpty$ = this.cartService
            .getActive()
            .pipe(map(cart => !(cart && cart.totalItems && cart.totalItems > 0)));
        this.saveForLater$ = this.selectiveCartService.getCart();
        this.entries$ = this.selectiveCartService
            .getEntries()
            .pipe(filter(entries => entries.length > 0));
        this.cartLoaded$ = combineLatest([
            this.cartService.getLoaded(),
            this.selectiveCartService.getLoaded(),
        ]).pipe(map(([cartLoaded, sflLoaded]) => cartLoaded && sflLoaded));
        this.data$ = this.cmsService.getComponentData('EmptyCartParagraphComponent');
    }
    moveToCart(item) {
        this.selectiveCartService.removeEntry(item);
        this.cartService.addEntry(item.product.code, item.quantity);
    }
};
SaveForLaterComponent.ctorParameters = () => [
    { type: CmsService },
    { type: ActiveCartService },
    { type: SelectiveCartService }
];
SaveForLaterComponent = __decorate([
    Component({
        selector: 'cx-save-for-later',
        template: "<ng-container *ngIf=\"isCartEmpty$ | async\">\n  <p\n    *ngIf=\"data$ | async as data\"\n    [innerHTML]=\"data.content\"\n    class=\"cx-empty-cart-info\"\n  ></p>\n</ng-container>\n\n<ng-container *ngIf=\"saveForLater$ | async as saveForLater\">\n  <ng-container *ngIf=\"entries$ | async as entries\">\n    <div *ngIf=\"saveForLater.totalItems > 0\" class=\"cart-details-wrapper\">\n      <div class=\"cx-total\">\n        {{\n          'saveForLaterItems.itemTotal'\n            | cxTranslate: { count: saveForLater.totalItems }\n        }}\n      </div>\n      <cx-cart-item-list\n        [items]=\"entries\"\n        [readonly]=\"true\"\n        [cartIsLoading]=\"!(cartLoaded$ | async)\"\n        [options]=\"{\n          isSaveForLater: true,\n          optionalBtn: moveToCartBtn\n        }\"\n      ></cx-cart-item-list>\n    </div>\n  </ng-container>\n</ng-container>\n\n<ng-template let-ctx #moveToCartBtn>\n  <div class=\"col-md-3 col-lg-3 col-xl-3 cx-sfl-btn\">\n    <button\n      class=\"link\"\n      [disabled]=\"ctx.loading\"\n      (click)=\"moveToCart(ctx.item)\"\n    >\n      {{ 'saveForLaterItems.moveToCart' | cxTranslate }}\n    </button>\n  </div>\n</ng-template>\n"
    })
], SaveForLaterComponent);
export { SaveForLaterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZS1mb3ItbGF0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9zYXZlLWZvci1sYXRlci9zYXZlLWZvci1sYXRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixJQUFJLEVBQ0osVUFBVSxFQUNWLGlCQUFpQixFQUNqQixxQkFBcUIsRUFDckIsVUFBVSxHQUNYLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzdDLElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0lBUWhDLFlBQ1ksVUFBc0IsRUFDdEIsV0FBOEIsRUFDOUIsb0JBQTBDO1FBRjFDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO1FBQzlCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDbkQsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXO2FBQ2pDLFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsb0JBQW9CO2FBQ3RDLFVBQVUsRUFBRTthQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUM7WUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUU7WUFDNUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsRUFBRTtTQUN0QyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQzNDLDZCQUE2QixDQUM5QixDQUFDO0lBQ0osQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFVO1FBQ25CLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlELENBQUM7Q0FDRixDQUFBOztZQTFCeUIsVUFBVTtZQUNULGlCQUFpQjtZQUNSLG9CQUFvQjs7QUFYM0MscUJBQXFCO0lBSmpDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxtQkFBbUI7UUFDN0Isb3JDQUE4QztLQUMvQyxDQUFDO0dBQ1cscUJBQXFCLENBbUNqQztTQW5DWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgU2VsZWN0aXZlQ2FydFNlcnZpY2UsXG4gIENhcnQsXG4gIE9yZGVyRW50cnksXG4gIEFjdGl2ZUNhcnRTZXJ2aWNlLFxuICBDbXNQYXJhZ3JhcGhDb21wb25lbnQsXG4gIENtc1NlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEl0ZW0gfSBmcm9tICcuLi9jYXJ0LXNoYXJlZC9jYXJ0LWl0ZW0vY2FydC1pdGVtLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXNhdmUtZm9yLWxhdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NhdmUtZm9yLWxhdGVyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2F2ZUZvckxhdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgc2F2ZUZvckxhdGVyJDogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgY2FydCQ6IE9ic2VydmFibGU8Q2FydD47XG4gIGVudHJpZXMkOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT47XG4gIGNhcnRMb2FkZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBkYXRhJDogT2JzZXJ2YWJsZTxDbXNQYXJhZ3JhcGhDb21wb25lbnQ+O1xuICBpc0NhcnRFbXB0eSQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgc2VsZWN0aXZlQ2FydFNlcnZpY2U6IFNlbGVjdGl2ZUNhcnRTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlzQ2FydEVtcHR5JCA9IHRoaXMuY2FydFNlcnZpY2VcbiAgICAgIC5nZXRBY3RpdmUoKVxuICAgICAgLnBpcGUobWFwKGNhcnQgPT4gIShjYXJ0ICYmIGNhcnQudG90YWxJdGVtcyAmJiBjYXJ0LnRvdGFsSXRlbXMgPiAwKSkpO1xuICAgIHRoaXMuc2F2ZUZvckxhdGVyJCA9IHRoaXMuc2VsZWN0aXZlQ2FydFNlcnZpY2UuZ2V0Q2FydCgpO1xuICAgIHRoaXMuZW50cmllcyQgPSB0aGlzLnNlbGVjdGl2ZUNhcnRTZXJ2aWNlXG4gICAgICAuZ2V0RW50cmllcygpXG4gICAgICAucGlwZShmaWx0ZXIoZW50cmllcyA9PiBlbnRyaWVzLmxlbmd0aCA+IDApKTtcbiAgICB0aGlzLmNhcnRMb2FkZWQkID0gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmNhcnRTZXJ2aWNlLmdldExvYWRlZCgpLFxuICAgICAgdGhpcy5zZWxlY3RpdmVDYXJ0U2VydmljZS5nZXRMb2FkZWQoKSxcbiAgICBdKS5waXBlKG1hcCgoW2NhcnRMb2FkZWQsIHNmbExvYWRlZF0pID0+IGNhcnRMb2FkZWQgJiYgc2ZsTG9hZGVkKSk7XG4gICAgdGhpcy5kYXRhJCA9IHRoaXMuY21zU2VydmljZS5nZXRDb21wb25lbnREYXRhKFxuICAgICAgJ0VtcHR5Q2FydFBhcmFncmFwaENvbXBvbmVudCdcbiAgICApO1xuICB9XG5cbiAgbW92ZVRvQ2FydChpdGVtOiBJdGVtKSB7XG4gICAgdGhpcy5zZWxlY3RpdmVDYXJ0U2VydmljZS5yZW1vdmVFbnRyeShpdGVtKTtcbiAgICB0aGlzLmNhcnRTZXJ2aWNlLmFkZEVudHJ5KGl0ZW0ucHJvZHVjdC5jb2RlLCBpdGVtLnF1YW50aXR5KTtcbiAgfVxufVxuIl19