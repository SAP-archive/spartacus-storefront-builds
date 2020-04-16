import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActiveCartService, AuthService, Cart, OrderEntry, PromotionLocation, PromotionResult, RoutingService, SelectiveCartService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { PromotionService } from '../../../shared/services/promotion/promotion.service';
let CartDetailsComponent = class CartDetailsComponent {
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
        this.cartLoaded$ = combineLatest([
            this.activeCartService.isStable(),
            this.selectiveCartService.getLoaded(),
            this.authService.isUserLoggedIn(),
        ]).pipe(tap(([, , loggedIn]) => (this.loggedIn = loggedIn)), map(([cartLoaded, sflLoaded, loggedIn]) => loggedIn ? cartLoaded && sflLoaded : cartLoaded));
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
};
CartDetailsComponent.ctorParameters = () => [
    { type: ActiveCartService },
    { type: PromotionService },
    { type: SelectiveCartService },
    { type: AuthService },
    { type: RoutingService }
];
CartDetailsComponent = __decorate([
    Component({
        selector: 'cx-cart-details',
        template: "<ng-container *ngIf=\"cart$ | async as cart\">\n  <ng-container *ngIf=\"entries$ | async as entries\">\n    <div *ngIf=\"cart.totalItems > 0\" class=\"cart-details-wrapper\">\n      <div class=\"cx-total\">\n        {{ 'cartDetails.cartName' | cxTranslate: { code: cart.code } }}\n      </div>\n\n      <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n        <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n      </ng-container>\n\n      <cx-cart-item-list\n        [items]=\"entries\"\n        [cartIsLoading]=\"!(cartLoaded$ | async)\"\n        [promotionLocation]=\"promotionLocation\"\n        [options]=\"{\n          isSaveForLater: false,\n          optionalBtn: saveForLaterBtn\n        }\"\n      ></cx-cart-item-list>\n    </div>\n  </ng-container>\n</ng-container>\n\n<ng-template let-ctx #saveForLaterBtn>\n  <div class=\"col-md-3 col-lg-3 col-xl-3 cx-sfl-btn\">\n    <button\n      class=\"link\"\n      [disabled]=\"ctx.loading\"\n      (click)=\"saveForLater(ctx.item)\"\n      type=\"button\"\n    >\n      {{ 'saveForLaterItems.saveForLater' | cxTranslate }}\n    </button>\n  </div>\n</ng-template>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], CartDetailsComponent);
export { CartDetailsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NhcnQvY2FydC1kZXRhaWxzL2NhcnQtZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixXQUFXLEVBQ1gsSUFBSSxFQUNKLFVBQVUsRUFDVixpQkFBaUIsRUFDakIsZUFBZSxFQUNmLGNBQWMsRUFDZCxvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBUXhGLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBUy9CLFlBQ1ksaUJBQW9DLEVBQ3BDLGdCQUFrQyxFQUNsQyxvQkFBMEMsRUFDNUMsV0FBd0IsRUFDeEIsY0FBOEI7UUFKNUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDNUMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBVnhDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsc0JBQWlCLEdBQXNCLGlCQUFpQixDQUFDLFVBQVUsQ0FBQztJQVNqRSxDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLDBCQUEwQixFQUFFLENBQUM7UUFFdEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsaUJBQWlCO2FBQ25DLFVBQVUsRUFBRTthQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQztZQUMvQixJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUU7WUFDckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUU7U0FDbEMsQ0FBQyxDQUFDLElBQUksQ0FDTCxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQUFBRCxFQUFHLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsRUFDbkQsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FDeEMsUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQ2hELENBQ0YsQ0FBQztRQUVGLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQzlELElBQUksQ0FBQyxpQkFBaUIsQ0FDdkIsQ0FBQztJQUNKLENBQUM7SUFFRCxZQUFZLENBQUMsSUFBVTtRQUNyQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN0RTthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUM5QztJQUNILENBQUM7Q0FDRixDQUFBOztZQXZDZ0MsaUJBQWlCO1lBQ2xCLGdCQUFnQjtZQUNaLG9CQUFvQjtZQUMvQixXQUFXO1lBQ1IsY0FBYzs7QUFkN0Isb0JBQW9CO0lBTGhDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxpQkFBaUI7UUFDM0Isa3BDQUE0QztRQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO0dBQ1csb0JBQW9CLENBaURoQztTQWpEWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFjdGl2ZUNhcnRTZXJ2aWNlLFxuICBBdXRoU2VydmljZSxcbiAgQ2FydCxcbiAgT3JkZXJFbnRyeSxcbiAgUHJvbW90aW9uTG9jYXRpb24sXG4gIFByb21vdGlvblJlc3VsdCxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFNlbGVjdGl2ZUNhcnRTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByb21vdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvcHJvbW90aW9uL3Byb21vdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEl0ZW0gfSBmcm9tICcuLi9jYXJ0LXNoYXJlZC9jYXJ0LWl0ZW0vY2FydC1pdGVtLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNhcnQtZGV0YWlscycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJ0LWRldGFpbHMuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydERldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjYXJ0JDogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgZW50cmllcyQ6IE9ic2VydmFibGU8T3JkZXJFbnRyeVtdPjtcbiAgY2FydExvYWRlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGxvZ2dlZEluID0gZmFsc2U7XG4gIG9yZGVyUHJvbW90aW9ucyQ6IE9ic2VydmFibGU8UHJvbW90aW9uUmVzdWx0W10+O1xuICBwcm9tb3Rpb25Mb2NhdGlvbjogUHJvbW90aW9uTG9jYXRpb24gPSBQcm9tb3Rpb25Mb2NhdGlvbi5BY3RpdmVDYXJ0O1xuICBwcm9tb3Rpb25zJDogT2JzZXJ2YWJsZTxQcm9tb3Rpb25SZXN1bHRbXT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcHJvbW90aW9uU2VydmljZTogUHJvbW90aW9uU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgc2VsZWN0aXZlQ2FydFNlcnZpY2U6IFNlbGVjdGl2ZUNhcnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNhcnQkID0gdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5nZXRBY3RpdmUoKTtcbiAgICB0aGlzLnByb21vdGlvbnMkID0gdGhpcy5wcm9tb3Rpb25TZXJ2aWNlLmdldE9yZGVyUHJvbW90aW9uc0Zyb21DYXJ0KCk7XG5cbiAgICB0aGlzLmVudHJpZXMkID0gdGhpcy5hY3RpdmVDYXJ0U2VydmljZVxuICAgICAgLmdldEVudHJpZXMoKVxuICAgICAgLnBpcGUoZmlsdGVyKChlbnRyaWVzKSA9PiBlbnRyaWVzLmxlbmd0aCA+IDApKTtcblxuICAgIHRoaXMuY2FydExvYWRlZCQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuaXNTdGFibGUoKSxcbiAgICAgIHRoaXMuc2VsZWN0aXZlQ2FydFNlcnZpY2UuZ2V0TG9hZGVkKCksXG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKCksXG4gICAgXSkucGlwZShcbiAgICAgIHRhcCgoWywgLCBsb2dnZWRJbl0pID0+ICh0aGlzLmxvZ2dlZEluID0gbG9nZ2VkSW4pKSxcbiAgICAgIG1hcCgoW2NhcnRMb2FkZWQsIHNmbExvYWRlZCwgbG9nZ2VkSW5dKSA9PlxuICAgICAgICBsb2dnZWRJbiA/IGNhcnRMb2FkZWQgJiYgc2ZsTG9hZGVkIDogY2FydExvYWRlZFxuICAgICAgKVxuICAgICk7XG5cbiAgICB0aGlzLm9yZGVyUHJvbW90aW9ucyQgPSB0aGlzLnByb21vdGlvblNlcnZpY2UuZ2V0T3JkZXJQcm9tb3Rpb25zKFxuICAgICAgdGhpcy5wcm9tb3Rpb25Mb2NhdGlvblxuICAgICk7XG4gIH1cblxuICBzYXZlRm9yTGF0ZXIoaXRlbTogSXRlbSkge1xuICAgIGlmICh0aGlzLmxvZ2dlZEluKSB7XG4gICAgICB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLnJlbW92ZUVudHJ5KGl0ZW0pO1xuICAgICAgdGhpcy5zZWxlY3RpdmVDYXJ0U2VydmljZS5hZGRFbnRyeShpdGVtLnByb2R1Y3QuY29kZSwgaXRlbS5xdWFudGl0eSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAnbG9naW4nIH0pO1xuICAgIH1cbiAgfVxufVxuIl19