import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, } from '@angular/core';
import { CheckoutService, RoutingService } from '@spartacus/core';
import { filter } from 'rxjs/operators';
var PlaceOrderComponent = /** @class */ (function () {
    function PlaceOrderComponent(checkoutService, routingService) {
        this.checkoutService = checkoutService;
        this.routingService = routingService;
        this.tAndCToggler = false;
    }
    PlaceOrderComponent.prototype.toggleTAndC = function () {
        this.tAndCToggler = !this.tAndCToggler;
    };
    PlaceOrderComponent.prototype.placeOrder = function () {
        this.checkoutService.placeOrder();
    };
    PlaceOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.placeOrderSubscription = this.checkoutService
            .getOrderDetails()
            .pipe(filter(function (order) { return Object.keys(order).length !== 0; }))
            .subscribe(function () {
            _this.routingService.go({ cxRoute: 'orderConfirmation' });
        });
    };
    PlaceOrderComponent.prototype.ngOnDestroy = function () {
        if (this.placeOrderSubscription) {
            this.placeOrderSubscription.unsubscribe();
        }
    };
    PlaceOrderComponent.ctorParameters = function () { return [
        { type: CheckoutService },
        { type: RoutingService }
    ]; };
    PlaceOrderComponent = __decorate([
        Component({
            selector: 'cx-place-order',
            template: "<div class=\"cx-place-order-form form-check\">\n  <label>\n    <input class=\"form-check-input\" type=\"checkbox\" (change)=\"toggleTAndC()\" />\n    <span class=\"form-check-label\">\n      {{ 'checkoutReview.confirmThatRead' | cxTranslate }}\n      <a\n        [routerLink]=\"{ cxRoute: 'termsAndConditions' } | cxUrl\"\n        class=\"cx-tc-link\"\n        target=\"_blank\"\n      >\n        {{ 'checkoutReview.termsAndConditions' | cxTranslate }}\n      </a>\n    </span>\n  </label>\n</div>\n<button\n  [disabled]=\"!tAndCToggler\"\n  (click)=\"placeOrder()\"\n  class=\"btn btn-primary btn-block\"\n>\n  {{ 'checkoutReview.placeOrder' | cxTranslate }}\n</button>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], PlaceOrderComponent);
    return PlaceOrderComponent;
}());
export { PlaceOrderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2Utb3JkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9wbGFjZS1vcmRlci9wbGFjZS1vcmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEdBR3hCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFbEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBUXhDO0lBSUUsNkJBQ1UsZUFBZ0MsRUFDaEMsY0FBOEI7UUFEOUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUx4QyxpQkFBWSxHQUFHLEtBQUssQ0FBQztJQU1sQixDQUFDO0lBRUoseUNBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQ3pDLENBQUM7SUFFRCx3Q0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxlQUFlO2FBQy9DLGVBQWUsRUFBRTthQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUEvQixDQUErQixDQUFDLENBQUM7YUFDdEQsU0FBUyxDQUFDO1lBQ1QsS0FBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHlDQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUMvQixJQUFJLENBQUMsc0JBQXNCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDM0M7SUFDSCxDQUFDOztnQkF6QjBCLGVBQWU7Z0JBQ2hCLGNBQWM7O0lBTjdCLG1CQUFtQjtRQUwvQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLDRxQkFBMkM7WUFDM0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQztPQUNXLG1CQUFtQixDQStCL0I7SUFBRCwwQkFBQztDQUFBLEFBL0JELElBK0JDO1NBL0JZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2hlY2tvdXRTZXJ2aWNlLCBSb3V0aW5nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wbGFjZS1vcmRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wbGFjZS1vcmRlci5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQbGFjZU9yZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICB0QW5kQ1RvZ2dsZXIgPSBmYWxzZTtcbiAgcGxhY2VPcmRlclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIHRvZ2dsZVRBbmRDKCk6IHZvaWQge1xuICAgIHRoaXMudEFuZENUb2dnbGVyID0gIXRoaXMudEFuZENUb2dnbGVyO1xuICB9XG5cbiAgcGxhY2VPcmRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5wbGFjZU9yZGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBsYWNlT3JkZXJTdWJzY3JpcHRpb24gPSB0aGlzLmNoZWNrb3V0U2VydmljZVxuICAgICAgLmdldE9yZGVyRGV0YWlscygpXG4gICAgICAucGlwZShmaWx0ZXIob3JkZXIgPT4gT2JqZWN0LmtleXMob3JkZXIpLmxlbmd0aCAhPT0gMCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdvcmRlckNvbmZpcm1hdGlvbicgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBsYWNlT3JkZXJTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMucGxhY2VPcmRlclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19