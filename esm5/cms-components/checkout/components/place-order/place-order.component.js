import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckoutService, RoutingService } from '@spartacus/core';
import { filter } from 'rxjs/operators';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2Utb3JkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9wbGFjZS1vcmRlci9wbGFjZS1vcmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxHQUdWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFbEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBT3hDO0lBT0UsNkJBQ1ksZUFBZ0MsRUFDaEMsY0FBOEIsRUFDOUIsRUFBZTtRQUZmLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQVAzQix1QkFBa0IsR0FBYyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUM1QyxrQkFBa0IsRUFBRSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsWUFBWSxDQUFDO1NBQ3JELENBQUMsQ0FBQztJQU1BLENBQUM7SUFFSix3Q0FBVSxHQUFWO1FBQ0UsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkM7YUFBTTtZQUNMLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQzVDO0lBQ0gsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsZUFBZTthQUMvQyxlQUFlLEVBQUU7YUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEtBQUssSUFBSyxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO2FBQ3hELFNBQVMsQ0FBQztZQUNULEtBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLENBQUMsQ0FBQztRQUMzRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx5Q0FBVyxHQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDL0IsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzNDO0lBQ0gsQ0FBQzs7Z0JBMUI0QixlQUFlO2dCQUNoQixjQUFjO2dCQUMxQixXQUFXOztJQVZoQixtQkFBbUI7UUFML0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixvN0JBQTJDO1lBQzNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVyxtQkFBbUIsQ0FtQy9CO0lBQUQsMEJBQUM7Q0FBQSxBQW5DRCxJQW1DQztTQW5DWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTZXJ2aWNlLCBSb3V0aW5nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcGxhY2Utb3JkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcGxhY2Utb3JkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUGxhY2VPcmRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcGxhY2VPcmRlclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNoZWNrb3V0U3VibWl0Rm9ybTogRm9ybUdyb3VwID0gdGhpcy5mYi5ncm91cCh7XG4gICAgdGVybXNBbmRDb25kaXRpb25zOiBbZmFsc2UsIFZhbGlkYXRvcnMucmVxdWlyZWRUcnVlXSxcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U2VydmljZTogQ2hlY2tvdXRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGZiOiBGb3JtQnVpbGRlclxuICApIHt9XG5cbiAgc3VibWl0Rm9ybSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jaGVja291dFN1Ym1pdEZvcm0udmFsaWQpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLnBsYWNlT3JkZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGVja291dFN1Ym1pdEZvcm0ubWFya0FsbEFzVG91Y2hlZCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucGxhY2VPcmRlclN1YnNjcmlwdGlvbiA9IHRoaXMuY2hlY2tvdXRTZXJ2aWNlXG4gICAgICAuZ2V0T3JkZXJEZXRhaWxzKClcbiAgICAgIC5waXBlKGZpbHRlcigob3JkZXIpID0+IE9iamVjdC5rZXlzKG9yZGVyKS5sZW5ndGggIT09IDApKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAnb3JkZXJDb25maXJtYXRpb24nIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wbGFjZU9yZGVyU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnBsYWNlT3JkZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==