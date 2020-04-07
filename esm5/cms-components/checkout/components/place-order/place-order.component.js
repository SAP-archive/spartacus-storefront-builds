import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, } from '@angular/core';
import { CheckoutService, RoutingService } from '@spartacus/core';
import { filter } from 'rxjs/operators';
import { FormBuilder, Validators } from '@angular/forms';
var PlaceOrderComponent = /** @class */ (function () {
    function PlaceOrderComponent(checkoutService, routingService, fb) {
        this.checkoutService = checkoutService;
        this.routingService = routingService;
        this.fb = fb;
        this.checkoutSubmitForm = this.fb.group({
            termsAndConditions: [false, Validators.requiredTrue],
        });
    }
    PlaceOrderComponent.prototype.submitForm = function () {
        if (this.checkoutSubmitForm.valid) {
            this.checkoutService.placeOrder();
        }
        else {
            this.checkoutSubmitForm.markAllAsTouched();
        }
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
        { type: RoutingService },
        { type: FormBuilder }
    ]; };
    PlaceOrderComponent = __decorate([
        Component({
            selector: 'cx-place-order',
            template: "<form\n  (ngSubmit)=\"submitForm()\"\n  class=\"cx-place-order-form form-check\"\n  [formGroup]=\"checkoutSubmitForm\"\n>\n  <div class=\"form-group\">\n    <label>\n      <input\n        formControlName=\"termsAndConditions\"\n        class=\"form-check-input\"\n        type=\"checkbox\"\n      />\n      <span class=\"form-check-label\">\n        {{ 'checkoutReview.confirmThatRead' | cxTranslate }}\n        <a\n          [routerLink]=\"{ cxRoute: 'termsAndConditions' } | cxUrl\"\n          class=\"cx-tc-link\"\n          target=\"_blank\"\n        >\n          {{ 'checkoutReview.termsAndConditions' | cxTranslate }}\n        </a>\n      </span>\n      <cx-form-errors\n        [control]=\"checkoutSubmitForm.get('termsAndConditions')\"\n      ></cx-form-errors>\n    </label>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-primary btn-block\">\n    {{ 'checkoutReview.placeOrder' | cxTranslate }}\n  </button>\n</form>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], PlaceOrderComponent);
    return PlaceOrderComponent;
}());
export { PlaceOrderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2Utb3JkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9wbGFjZS1vcmRlci9wbGFjZS1vcmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEdBR3hCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFbEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhDLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPekQ7SUFPRSw2QkFDWSxlQUFnQyxFQUNoQyxjQUE4QixFQUM5QixFQUFlO1FBRmYsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBUDNCLHVCQUFrQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ2pDLGtCQUFrQixFQUFFLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxZQUFZLENBQUM7U0FDckQsQ0FBQyxDQUFDO0lBTUEsQ0FBQztJQUVKLHdDQUFVLEdBQVY7UUFDRSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUU7WUFDakMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQzthQUFNO1lBQ0wsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDNUM7SUFDSCxDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxlQUFlO2FBQy9DLGVBQWUsRUFBRTthQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUEvQixDQUErQixDQUFDLENBQUM7YUFDeEQsU0FBUyxDQUFDO1lBQ1QsS0FBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHlDQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUMvQixJQUFJLENBQUMsc0JBQXNCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDM0M7SUFDSCxDQUFDOztnQkExQjRCLGVBQWU7Z0JBQ2hCLGNBQWM7Z0JBQzFCLFdBQVc7O0lBVmhCLG1CQUFtQjtRQUwvQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLG83QkFBMkM7WUFDM0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQztPQUNXLG1CQUFtQixDQW1DL0I7SUFBRCwwQkFBQztDQUFBLEFBbkNELElBbUNDO1NBbkNZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2hlY2tvdXRTZXJ2aWNlLCBSb3V0aW5nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXBsYWNlLW9yZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BsYWNlLW9yZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFBsYWNlT3JkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHBsYWNlT3JkZXJTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjaGVja291dFN1Ym1pdEZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICB0ZXJtc0FuZENvbmRpdGlvbnM6IFtmYWxzZSwgVmFsaWRhdG9ycy5yZXF1aXJlZFRydWVdLFxuICB9KTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZmI6IEZvcm1CdWlsZGVyXG4gICkge31cblxuICBzdWJtaXRGb3JtKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNoZWNrb3V0U3VibWl0Rm9ybS52YWxpZCkge1xuICAgICAgdGhpcy5jaGVja291dFNlcnZpY2UucGxhY2VPcmRlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoZWNrb3V0U3VibWl0Rm9ybS5tYXJrQWxsQXNUb3VjaGVkKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5wbGFjZU9yZGVyU3Vic2NyaXB0aW9uID0gdGhpcy5jaGVja291dFNlcnZpY2VcbiAgICAgIC5nZXRPcmRlckRldGFpbHMoKVxuICAgICAgLnBpcGUoZmlsdGVyKChvcmRlcikgPT4gT2JqZWN0LmtleXMob3JkZXIpLmxlbmd0aCAhPT0gMCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdvcmRlckNvbmZpcm1hdGlvbicgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBsYWNlT3JkZXJTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMucGxhY2VPcmRlclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19