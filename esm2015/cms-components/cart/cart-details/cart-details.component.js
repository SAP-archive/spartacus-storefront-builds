import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActiveCartService, AuthService, PromotionLocation, RoutingService, SelectiveCartService, } from '@spartacus/core';
import { combineLatest, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { PromotionService } from '../../../shared/services/promotion/promotion.service';
export class CartDetailsComponent {
    constructor(activeCartService, promotionService, selectiveCartService, authService, routingService) {
        this.activeCartService = activeCartService;
        this.promotionService = promotionService;
        this.selectiveCartService = selectiveCartService;
        this.authService = authService;
        this.routingService = routingService;
        this.loggedIn = false;
        this.promotionLocation = PromotionLocation.ActiveCart;
    }
    ngOnInit() {
        this.cart$ = this.activeCartService.getActive();
        this.promotions$ = this.promotionService.getOrderPromotionsFromCart();
        this.entries$ = this.activeCartService
            .getEntries()
            .pipe(filter((entries) => entries.length > 0));
        this.selectiveCartEnabled = this.selectiveCartService.isEnabled();
        // TODO(#10547): Switch in 4.0 `selectiveCartService.getLoaded` to `selectiveCartService.isStable` method
        this.cartLoaded$ = combineLatest([
            this.activeCartService.isStable(),
            this.selectiveCartEnabled
                ? this.selectiveCartService.getLoaded()
                : of(false),
            this.authService.isUserLoggedIn(),
        ]).pipe(tap(([, , loggedIn]) => (this.loggedIn = loggedIn)), map(([cartLoaded, sflLoaded, loggedIn]) => loggedIn && this.selectiveCartEnabled
            ? cartLoaded && sflLoaded
            : cartLoaded));
        this.orderPromotions$ = this.promotionService.getOrderPromotions(this.promotionLocation);
    }
    saveForLater(item) {
        if (this.loggedIn) {
            this.activeCartService.removeEntry(item);
            this.selectiveCartService.addEntry(item.product.code, item.quantity);
        }
        else {
            this.routingService.go({ cxRoute: 'login' });
        }
    }
}
CartDetailsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-cart-details',
                template: "<ng-container *ngIf=\"cart$ | async as cart\">\n  <ng-container *ngIf=\"entries$ | async as entries\">\n    <div *ngIf=\"cart.totalItems > 0\" class=\"cart-details-wrapper\">\n      <div class=\"cx-total\">\n        {{ 'cartDetails.cartName' | cxTranslate: { code: cart.code } }}\n      </div>\n\n      <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n        <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n      </ng-container>\n\n      <cx-cart-item-list\n        [items]=\"entries\"\n        [cartIsLoading]=\"!(cartLoaded$ | async)\"\n        [promotionLocation]=\"promotionLocation\"\n        [options]=\"{\n          isSaveForLater: false,\n          optionalBtn: saveForLaterBtn\n        }\"\n      ></cx-cart-item-list>\n    </div>\n  </ng-container>\n</ng-container>\n\n<ng-template let-ctx #saveForLaterBtn>\n  <div\n    *ngIf=\"selectiveCartEnabled\"\n    class=\"col-md-3 col-lg-3 col-xl-3 cx-sfl-btn\"\n  >\n    <button\n      class=\"link cx-action-link\"\n      [disabled]=\"ctx.loading\"\n      (click)=\"saveForLater(ctx.item)\"\n      type=\"button\"\n    >\n      {{ 'saveForLaterItems.saveForLater' | cxTranslate }}\n    </button>\n  </div>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
CartDetailsComponent.ctorParameters = () => [
    { type: ActiveCartService },
    { type: PromotionService },
    { type: SelectiveCartService },
    { type: AuthService },
    { type: RoutingService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL2NhcnQvY2FydC1kZXRhaWxzL2NhcnQtZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFdBQVcsRUFHWCxpQkFBaUIsRUFFakIsY0FBYyxFQUNkLG9CQUFvQixHQUNyQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBT3hGLE1BQU0sT0FBTyxvQkFBb0I7SUFVL0IsWUFDWSxpQkFBb0MsRUFDcEMsZ0JBQWtDLEVBQ2xDLG9CQUEwQyxFQUMxQyxXQUF3QixFQUN4QixjQUE4QjtRQUo5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFYMUMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVqQixzQkFBaUIsR0FBc0IsaUJBQWlCLENBQUMsVUFBVSxDQUFDO0lBVWpFLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztRQUV0RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUI7YUFDbkMsVUFBVSxFQUFFO2FBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWpELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFbEUseUdBQXlHO1FBQ3pHLElBQUksQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDO1lBQy9CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUU7WUFDakMsSUFBSSxDQUFDLG9CQUFvQjtnQkFDdkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUU7Z0JBQ3ZDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUU7U0FDbEMsQ0FBQyxDQUFDLElBQUksQ0FDTCxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQUFBRCxFQUFHLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsRUFDbkQsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FDeEMsUUFBUSxJQUFJLElBQUksQ0FBQyxvQkFBb0I7WUFDbkMsQ0FBQyxDQUFDLFVBQVUsSUFBSSxTQUFTO1lBQ3pCLENBQUMsQ0FBQyxVQUFVLENBQ2YsQ0FDRixDQUFDO1FBRUYsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FDOUQsSUFBSSxDQUFDLGlCQUFpQixDQUN2QixDQUFDO0lBQ0osQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFnQjtRQUMzQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN0RTthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUM5QztJQUNILENBQUM7OztZQTdERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsOHNDQUE0QztnQkFDNUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OztZQWpCQyxpQkFBaUI7WUFXVixnQkFBZ0I7WUFKdkIsb0JBQW9CO1lBTnBCLFdBQVc7WUFLWCxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBY3RpdmVDYXJ0U2VydmljZSxcbiAgQXV0aFNlcnZpY2UsXG4gIENhcnQsXG4gIE9yZGVyRW50cnksXG4gIFByb21vdGlvbkxvY2F0aW9uLFxuICBQcm9tb3Rpb25SZXN1bHQsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBTZWxlY3RpdmVDYXJ0U2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUHJvbW90aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9wcm9tb3Rpb24vcHJvbW90aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jYXJ0LWRldGFpbHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FydC1kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENhcnREZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY2FydCQ6IE9ic2VydmFibGU8Q2FydD47XG4gIGVudHJpZXMkOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT47XG4gIGNhcnRMb2FkZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBsb2dnZWRJbiA9IGZhbHNlO1xuICBvcmRlclByb21vdGlvbnMkOiBPYnNlcnZhYmxlPFByb21vdGlvblJlc3VsdFtdPjtcbiAgcHJvbW90aW9uTG9jYXRpb246IFByb21vdGlvbkxvY2F0aW9uID0gUHJvbW90aW9uTG9jYXRpb24uQWN0aXZlQ2FydDtcbiAgcHJvbW90aW9ucyQ6IE9ic2VydmFibGU8UHJvbW90aW9uUmVzdWx0W10+O1xuICBzZWxlY3RpdmVDYXJ0RW5hYmxlZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBwcm9tb3Rpb25TZXJ2aWNlOiBQcm9tb3Rpb25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBzZWxlY3RpdmVDYXJ0U2VydmljZTogU2VsZWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNhcnQkID0gdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5nZXRBY3RpdmUoKTtcbiAgICB0aGlzLnByb21vdGlvbnMkID0gdGhpcy5wcm9tb3Rpb25TZXJ2aWNlLmdldE9yZGVyUHJvbW90aW9uc0Zyb21DYXJ0KCk7XG5cbiAgICB0aGlzLmVudHJpZXMkID0gdGhpcy5hY3RpdmVDYXJ0U2VydmljZVxuICAgICAgLmdldEVudHJpZXMoKVxuICAgICAgLnBpcGUoZmlsdGVyKChlbnRyaWVzKSA9PiBlbnRyaWVzLmxlbmd0aCA+IDApKTtcblxuICAgIHRoaXMuc2VsZWN0aXZlQ2FydEVuYWJsZWQgPSB0aGlzLnNlbGVjdGl2ZUNhcnRTZXJ2aWNlLmlzRW5hYmxlZCgpO1xuXG4gICAgLy8gVE9ETygjMTA1NDcpOiBTd2l0Y2ggaW4gNC4wIGBzZWxlY3RpdmVDYXJ0U2VydmljZS5nZXRMb2FkZWRgIHRvIGBzZWxlY3RpdmVDYXJ0U2VydmljZS5pc1N0YWJsZWAgbWV0aG9kXG4gICAgdGhpcy5jYXJ0TG9hZGVkJCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5pc1N0YWJsZSgpLFxuICAgICAgdGhpcy5zZWxlY3RpdmVDYXJ0RW5hYmxlZFxuICAgICAgICA/IHRoaXMuc2VsZWN0aXZlQ2FydFNlcnZpY2UuZ2V0TG9hZGVkKClcbiAgICAgICAgOiBvZihmYWxzZSksXG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKCksXG4gICAgXSkucGlwZShcbiAgICAgIHRhcCgoWywgLCBsb2dnZWRJbl0pID0+ICh0aGlzLmxvZ2dlZEluID0gbG9nZ2VkSW4pKSxcbiAgICAgIG1hcCgoW2NhcnRMb2FkZWQsIHNmbExvYWRlZCwgbG9nZ2VkSW5dKSA9PlxuICAgICAgICBsb2dnZWRJbiAmJiB0aGlzLnNlbGVjdGl2ZUNhcnRFbmFibGVkXG4gICAgICAgICAgPyBjYXJ0TG9hZGVkICYmIHNmbExvYWRlZFxuICAgICAgICAgIDogY2FydExvYWRlZFxuICAgICAgKVxuICAgICk7XG5cbiAgICB0aGlzLm9yZGVyUHJvbW90aW9ucyQgPSB0aGlzLnByb21vdGlvblNlcnZpY2UuZ2V0T3JkZXJQcm9tb3Rpb25zKFxuICAgICAgdGhpcy5wcm9tb3Rpb25Mb2NhdGlvblxuICAgICk7XG4gIH1cblxuICBzYXZlRm9yTGF0ZXIoaXRlbTogT3JkZXJFbnRyeSkge1xuICAgIGlmICh0aGlzLmxvZ2dlZEluKSB7XG4gICAgICB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLnJlbW92ZUVudHJ5KGl0ZW0pO1xuICAgICAgdGhpcy5zZWxlY3RpdmVDYXJ0U2VydmljZS5hZGRFbnRyeShpdGVtLnByb2R1Y3QuY29kZSwgaXRlbS5xdWFudGl0eSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAnbG9naW4nIH0pO1xuICAgIH1cbiAgfVxufVxuIl19