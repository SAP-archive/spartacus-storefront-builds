import { __decorate, __read } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActiveCartService, AuthService, Cart, OrderEntry, PromotionLocation, PromotionResult, RoutingService, SelectiveCartService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { PromotionService } from '../../../shared/services/promotion/promotion.service';
var CartDetailsComponent = /** @class */ (function () {
    function CartDetailsComponent(activeCartService, promotionService, selectiveCartService, authService, routingService) {
        this.activeCartService = activeCartService;
        this.promotionService = promotionService;
        this.selectiveCartService = selectiveCartService;
        this.authService = authService;
        this.routingService = routingService;
        this.loggedIn = false;
        this.promotionLocation = PromotionLocation.ActiveCart;
    }
    CartDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cart$ = this.activeCartService.getActive();
        this.promotions$ = this.promotionService.getOrderPromotionsFromCart();
        this.entries$ = this.activeCartService
            .getEntries()
            .pipe(filter(function (entries) { return entries.length > 0; }));
        this.cartLoaded$ = combineLatest([
            this.activeCartService.isStable(),
            this.selectiveCartService.getLoaded(),
            this.authService.isUserLoggedIn(),
        ]).pipe(tap(function (_a) {
            var _b = __read(_a, 3), loggedIn = _b[2];
            return (_this.loggedIn = loggedIn);
        }), map(function (_a) {
            var _b = __read(_a, 3), cartLoaded = _b[0], sflLoaded = _b[1], loggedIn = _b[2];
            return loggedIn ? cartLoaded && sflLoaded : cartLoaded;
        }));
        this.orderPromotions$ = this.promotionService.getOrderPromotions(this.promotionLocation);
    };
    CartDetailsComponent.prototype.saveForLater = function (item) {
        if (this.loggedIn) {
            this.activeCartService.removeEntry(item);
            this.selectiveCartService.addEntry(item.product.code, item.quantity);
        }
        else {
            this.routingService.go({ cxRoute: 'login' });
        }
    };
    CartDetailsComponent.ctorParameters = function () { return [
        { type: ActiveCartService },
        { type: PromotionService },
        { type: SelectiveCartService },
        { type: AuthService },
        { type: RoutingService }
    ]; };
    CartDetailsComponent = __decorate([
        Component({
            selector: 'cx-cart-details',
            template: "<ng-container *ngIf=\"cart$ | async as cart\">\n  <ng-container *ngIf=\"entries$ | async as entries\">\n    <div *ngIf=\"cart.totalItems > 0\" class=\"cart-details-wrapper\">\n      <div class=\"cx-total\">\n        {{ 'cartDetails.cartName' | cxTranslate: { code: cart.code } }}\n      </div>\n\n      <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n        <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n      </ng-container>\n\n      <cx-cart-item-list\n        [items]=\"entries\"\n        [cartIsLoading]=\"!(cartLoaded$ | async)\"\n        [promotionLocation]=\"promotionLocation\"\n        [options]=\"{\n          isSaveForLater: false,\n          optionalBtn: saveForLaterBtn\n        }\"\n      ></cx-cart-item-list>\n    </div>\n  </ng-container>\n</ng-container>\n\n<ng-template let-ctx #saveForLaterBtn>\n  <div class=\"col-md-3 col-lg-3 col-xl-3 cx-sfl-btn\">\n    <button\n      class=\"link\"\n      [disabled]=\"ctx.loading\"\n      (click)=\"saveForLater(ctx.item)\"\n      type=\"button\"\n    >\n      {{ 'saveForLaterItems.saveForLater' | cxTranslate }}\n    </button>\n  </div>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], CartDetailsComponent);
    return CartDetailsComponent;
}());
export { CartDetailsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NhcnQvY2FydC1kZXRhaWxzL2NhcnQtZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixXQUFXLEVBQ1gsSUFBSSxFQUNKLFVBQVUsRUFDVixpQkFBaUIsRUFDakIsZUFBZSxFQUNmLGNBQWMsRUFDZCxvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBUXhGO0lBU0UsOEJBQ1ksaUJBQW9DLEVBQ3BDLGdCQUFrQyxFQUNsQyxvQkFBMEMsRUFDNUMsV0FBd0IsRUFDeEIsY0FBOEI7UUFKNUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDNUMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBVnhDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsc0JBQWlCLEdBQXNCLGlCQUFpQixDQUFDLFVBQVUsQ0FBQztJQVNqRSxDQUFDO0lBRUosdUNBQVEsR0FBUjtRQUFBLGlCQXNCQztRQXJCQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBRXRFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGlCQUFpQjthQUNuQyxVQUFVLEVBQUU7YUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsT0FBTyxJQUFLLE9BQUEsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQyxDQUFDO1FBRWpELElBQUksQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDO1lBQy9CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUU7WUFDakMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsRUFBRTtZQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRTtTQUNsQyxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUcsQ0FBQyxVQUFDLEVBQWM7Z0JBQWQsa0JBQWMsRUFBVCxnQkFBUTtZQUFNLE9BQUEsQ0FBQyxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUExQixDQUEwQixDQUFDLEVBQ25ELEdBQUcsQ0FBQyxVQUFDLEVBQWlDO2dCQUFqQyxrQkFBaUMsRUFBaEMsa0JBQVUsRUFBRSxpQkFBUyxFQUFFLGdCQUFRO1lBQ25DLE9BQUEsUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFVO1FBQS9DLENBQStDLENBQ2hELENBQ0YsQ0FBQztRQUVGLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQzlELElBQUksQ0FBQyxpQkFBaUIsQ0FDdkIsQ0FBQztJQUNKLENBQUM7SUFFRCwyQ0FBWSxHQUFaLFVBQWEsSUFBVTtRQUNyQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN0RTthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUM5QztJQUNILENBQUM7O2dCQXRDOEIsaUJBQWlCO2dCQUNsQixnQkFBZ0I7Z0JBQ1osb0JBQW9CO2dCQUMvQixXQUFXO2dCQUNSLGNBQWM7O0lBZDdCLG9CQUFvQjtRQUxoQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLGtwQ0FBNEM7WUFDNUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQztPQUNXLG9CQUFvQixDQWlEaEM7SUFBRCwyQkFBQztDQUFBLEFBakRELElBaURDO1NBakRZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWN0aXZlQ2FydFNlcnZpY2UsXG4gIEF1dGhTZXJ2aWNlLFxuICBDYXJ0LFxuICBPcmRlckVudHJ5LFxuICBQcm9tb3Rpb25Mb2NhdGlvbixcbiAgUHJvbW90aW9uUmVzdWx0LFxuICBSb3V0aW5nU2VydmljZSxcbiAgU2VsZWN0aXZlQ2FydFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUHJvbW90aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9wcm9tb3Rpb24vcHJvbW90aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4uL2NhcnQtc2hhcmVkL2NhcnQtaXRlbS9jYXJ0LWl0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2FydC1kZXRhaWxzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcnQtZGV0YWlscy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0RGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNhcnQkOiBPYnNlcnZhYmxlPENhcnQ+O1xuICBlbnRyaWVzJDogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+O1xuICBjYXJ0TG9hZGVkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgbG9nZ2VkSW4gPSBmYWxzZTtcbiAgb3JkZXJQcm9tb3Rpb25zJDogT2JzZXJ2YWJsZTxQcm9tb3Rpb25SZXN1bHRbXT47XG4gIHByb21vdGlvbkxvY2F0aW9uOiBQcm9tb3Rpb25Mb2NhdGlvbiA9IFByb21vdGlvbkxvY2F0aW9uLkFjdGl2ZUNhcnQ7XG4gIHByb21vdGlvbnMkOiBPYnNlcnZhYmxlPFByb21vdGlvblJlc3VsdFtdPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBwcm9tb3Rpb25TZXJ2aWNlOiBQcm9tb3Rpb25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBzZWxlY3RpdmVDYXJ0U2VydmljZTogU2VsZWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY2FydCQgPSB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpO1xuICAgIHRoaXMucHJvbW90aW9ucyQgPSB0aGlzLnByb21vdGlvblNlcnZpY2UuZ2V0T3JkZXJQcm9tb3Rpb25zRnJvbUNhcnQoKTtcblxuICAgIHRoaXMuZW50cmllcyQgPSB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlXG4gICAgICAuZ2V0RW50cmllcygpXG4gICAgICAucGlwZShmaWx0ZXIoKGVudHJpZXMpID0+IGVudHJpZXMubGVuZ3RoID4gMCkpO1xuXG4gICAgdGhpcy5jYXJ0TG9hZGVkJCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5pc1N0YWJsZSgpLFxuICAgICAgdGhpcy5zZWxlY3RpdmVDYXJ0U2VydmljZS5nZXRMb2FkZWQoKSxcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4oKSxcbiAgICBdKS5waXBlKFxuICAgICAgdGFwKChbLCAsIGxvZ2dlZEluXSkgPT4gKHRoaXMubG9nZ2VkSW4gPSBsb2dnZWRJbikpLFxuICAgICAgbWFwKChbY2FydExvYWRlZCwgc2ZsTG9hZGVkLCBsb2dnZWRJbl0pID0+XG4gICAgICAgIGxvZ2dlZEluID8gY2FydExvYWRlZCAmJiBzZmxMb2FkZWQgOiBjYXJ0TG9hZGVkXG4gICAgICApXG4gICAgKTtcblxuICAgIHRoaXMub3JkZXJQcm9tb3Rpb25zJCA9IHRoaXMucHJvbW90aW9uU2VydmljZS5nZXRPcmRlclByb21vdGlvbnMoXG4gICAgICB0aGlzLnByb21vdGlvbkxvY2F0aW9uXG4gICAgKTtcbiAgfVxuXG4gIHNhdmVGb3JMYXRlcihpdGVtOiBJdGVtKSB7XG4gICAgaWYgKHRoaXMubG9nZ2VkSW4pIHtcbiAgICAgIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UucmVtb3ZlRW50cnkoaXRlbSk7XG4gICAgICB0aGlzLnNlbGVjdGl2ZUNhcnRTZXJ2aWNlLmFkZEVudHJ5KGl0ZW0ucHJvZHVjdC5jb2RlLCBpdGVtLnF1YW50aXR5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdsb2dpbicgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=