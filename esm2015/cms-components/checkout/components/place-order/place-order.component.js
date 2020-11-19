import { ChangeDetectionStrategy, Component, ViewContainerRef, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CheckoutService, ORDER_TYPE, recurrencePeriod, RoutingService, } from '@spartacus/core';
import { BehaviorSubject, combineLatest, Subscription } from 'rxjs';
import { LaunchDialogService, LAUNCH_CALLER, } from '../../../../layout/launch-dialog/index';
import { CheckoutReplenishmentFormService } from '../../services/checkout-replenishment-form-service';
export class PlaceOrderComponent {
    constructor(checkoutService, routingService, fb, checkoutReplenishmentFormService, launchDialogService, vcr) {
        this.checkoutService = checkoutService;
        this.routingService = routingService;
        this.fb = fb;
        this.checkoutReplenishmentFormService = checkoutReplenishmentFormService;
        this.launchDialogService = launchDialogService;
        this.vcr = vcr;
        this.subscription = new Subscription();
        this.daysOfWeekNotChecked$ = new BehaviorSubject(false);
        this.checkoutSubmitForm = this.fb.group({
            termsAndConditions: [false, Validators.requiredTrue],
        });
    }
    get termsAndConditionInvalid() {
        return this.checkoutSubmitForm.invalid;
    }
    submitForm() {
        if (this.checkoutSubmitForm.valid && Boolean(this.currentOrderType)) {
            switch (this.currentOrderType) {
                case ORDER_TYPE.PLACE_ORDER: {
                    this.checkoutService.placeOrder(this.checkoutSubmitForm.valid);
                    break;
                }
                case ORDER_TYPE.SCHEDULE_REPLENISHMENT_ORDER: {
                    this.checkoutService.scheduleReplenishmentOrder(this.scheduleReplenishmentFormData, this.checkoutSubmitForm.valid);
                    break;
                }
            }
        }
        else {
            this.checkoutSubmitForm.markAllAsTouched();
        }
    }
    ngOnInit() {
        this.subscription.add(combineLatest([
            this.checkoutService.getPlaceOrderLoading(),
            this.checkoutService.getPlaceOrderSuccess(),
            this.checkoutService.getPlaceOrderError(),
        ]).subscribe(([orderLoading, orderSuccess, orderError]) => {
            if (orderLoading) {
                this.placedOrder = this.launchDialogService.launch(LAUNCH_CALLER.PLACE_ORDER_SPINNER, this.vcr);
            }
            if (orderError) {
                if (this.placedOrder) {
                    this.placedOrder
                        .subscribe((component) => {
                        this.launchDialogService.clear(LAUNCH_CALLER.PLACE_ORDER_SPINNER);
                        component.destroy();
                    })
                        .unsubscribe();
                    this.checkoutService.clearPlaceOrderState();
                }
            }
            if (orderSuccess) {
                this.onSuccess(orderSuccess);
            }
        }));
        this.subscription.add(this.checkoutService
            .getCurrentOrderType()
            .subscribe((orderType) => (this.currentOrderType = orderType)));
        this.subscription.add(this.checkoutReplenishmentFormService
            .getScheduleReplenishmentFormData()
            .subscribe((data) => {
            this.scheduleReplenishmentFormData = data;
            this.daysOfWeekNotChecked$.next(data.daysOfWeek.length === 0 &&
                data.recurrencePeriod === recurrencePeriod.WEEKLY);
        }));
    }
    onSuccess(data) {
        if (data) {
            switch (this.currentOrderType) {
                case ORDER_TYPE.PLACE_ORDER: {
                    this.routingService.go({ cxRoute: 'orderConfirmation' });
                    break;
                }
                case ORDER_TYPE.SCHEDULE_REPLENISHMENT_ORDER: {
                    this.routingService.go({ cxRoute: 'replenishmentConfirmation' });
                    break;
                }
            }
            this.checkoutReplenishmentFormService.resetScheduleReplenishmentFormData();
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.launchDialogService.clear(LAUNCH_CALLER.PLACE_ORDER_SPINNER);
        this.checkoutService.clearPlaceOrderState();
    }
}
PlaceOrderComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-place-order',
                template: "<form\n  (ngSubmit)=\"submitForm()\"\n  class=\"cx-place-order-form form-check\"\n  [formGroup]=\"checkoutSubmitForm\"\n>\n  <div class=\"form-group\">\n    <label>\n      <input\n        formControlName=\"termsAndConditions\"\n        class=\"scaled-input form-check-input\"\n        type=\"checkbox\"\n      />\n      <span class=\"form-check-label\">\n        {{ 'checkoutReview.confirmThatRead' | cxTranslate }}\n        <a\n          [routerLink]=\"{ cxRoute: 'termsAndConditions' } | cxUrl\"\n          class=\"cx-tc-link\"\n          target=\"_blank\"\n        >\n          {{ 'checkoutReview.termsAndConditions' | cxTranslate }}\n        </a>\n      </span>\n    </label>\n  </div>\n\n  <button\n    type=\"submit\"\n    class=\"btn btn-primary btn-block\"\n    [disabled]=\"termsAndConditionInvalid || (daysOfWeekNotChecked$ | async)\"\n  >\n    {{ 'checkoutReview.placeOrder' | cxTranslate }}\n  </button>\n</form>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
PlaceOrderComponent.ctorParameters = () => [
    { type: CheckoutService },
    { type: RoutingService },
    { type: FormBuilder },
    { type: CheckoutReplenishmentFormService },
    { type: LaunchDialogService },
    { type: ViewContainerRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2Utb3JkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9wbGFjZS1vcmRlci9wbGFjZS1vcmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBSVQsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUNMLGVBQWUsRUFDZixVQUFVLEVBQ1YsZ0JBQWdCLEVBQ2hCLGNBQWMsR0FFZixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFjLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRixPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLGFBQWEsR0FDZCxNQUFNLHdDQUF3QyxDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBT3RHLE1BQU0sT0FBTyxtQkFBbUI7SUFpQjlCLFlBQ1ksZUFBZ0MsRUFDaEMsY0FBOEIsRUFDOUIsRUFBZSxFQUNmLGdDQUFrRSxFQUNsRSxtQkFBd0MsRUFDeEMsR0FBcUI7UUFMckIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YscUNBQWdDLEdBQWhDLGdDQUFnQyxDQUFrQztRQUNsRSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBdEJ6QixpQkFBWSxHQUFpQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBTXhELDBCQUFx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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50UmVmLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQ2hlY2tvdXRTZXJ2aWNlLFxuICBPUkRFUl9UWVBFLFxuICByZWN1cnJlbmNlUGVyaW9kLFxuICBSb3V0aW5nU2VydmljZSxcbiAgU2NoZWR1bGVSZXBsZW5pc2htZW50Rm9ybSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBMYXVuY2hEaWFsb2dTZXJ2aWNlLFxuICBMQVVOQ0hfQ0FMTEVSLFxufSBmcm9tICcuLi8uLi8uLi8uLi9sYXlvdXQvbGF1bmNoLWRpYWxvZy9pbmRleCc7XG5pbXBvcnQgeyBDaGVja291dFJlcGxlbmlzaG1lbnRGb3JtU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NoZWNrb3V0LXJlcGxlbmlzaG1lbnQtZm9ybS1zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcGxhY2Utb3JkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcGxhY2Utb3JkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUGxhY2VPcmRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBjdXJyZW50T3JkZXJUeXBlOiBPUkRFUl9UWVBFO1xuICBzY2hlZHVsZVJlcGxlbmlzaG1lbnRGb3JtRGF0YTogU2NoZWR1bGVSZXBsZW5pc2htZW50Rm9ybTtcbiAgcGxhY2VkT3JkZXI6IHZvaWQgfCBPYnNlcnZhYmxlPENvbXBvbmVudFJlZjxhbnk+PjtcblxuICBkYXlzT2ZXZWVrTm90Q2hlY2tlZCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcblxuICBjaGVja291dFN1Ym1pdEZvcm06IEZvcm1Hcm91cCA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgIHRlcm1zQW5kQ29uZGl0aW9uczogW2ZhbHNlLCBWYWxpZGF0b3JzLnJlcXVpcmVkVHJ1ZV0sXG4gIH0pO1xuXG4gIGdldCB0ZXJtc0FuZENvbmRpdGlvbkludmFsaWQoKTogQm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdWJtaXRGb3JtLmludmFsaWQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByb3RlY3RlZCBjaGVja291dFJlcGxlbmlzaG1lbnRGb3JtU2VydmljZTogQ2hlY2tvdXRSZXBsZW5pc2htZW50Rm9ybVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGxhdW5jaERpYWxvZ1NlcnZpY2U6IExhdW5jaERpYWxvZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHZjcjogVmlld0NvbnRhaW5lclJlZlxuICApIHt9XG5cbiAgc3VibWl0Rm9ybSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jaGVja291dFN1Ym1pdEZvcm0udmFsaWQgJiYgQm9vbGVhbih0aGlzLmN1cnJlbnRPcmRlclR5cGUpKSB7XG4gICAgICBzd2l0Y2ggKHRoaXMuY3VycmVudE9yZGVyVHlwZSkge1xuICAgICAgICBjYXNlIE9SREVSX1RZUEUuUExBQ0VfT1JERVI6IHtcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5wbGFjZU9yZGVyKHRoaXMuY2hlY2tvdXRTdWJtaXRGb3JtLnZhbGlkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgT1JERVJfVFlQRS5TQ0hFRFVMRV9SRVBMRU5JU0hNRU5UX09SREVSOiB7XG4gICAgICAgICAgdGhpcy5jaGVja291dFNlcnZpY2Uuc2NoZWR1bGVSZXBsZW5pc2htZW50T3JkZXIoXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlUmVwbGVuaXNobWVudEZvcm1EYXRhLFxuICAgICAgICAgICAgdGhpcy5jaGVja291dFN1Ym1pdEZvcm0udmFsaWRcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTdWJtaXRGb3JtLm1hcmtBbGxBc1RvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgdGhpcy5jaGVja291dFNlcnZpY2UuZ2V0UGxhY2VPcmRlckxvYWRpbmcoKSxcbiAgICAgICAgdGhpcy5jaGVja291dFNlcnZpY2UuZ2V0UGxhY2VPcmRlclN1Y2Nlc3MoKSxcbiAgICAgICAgdGhpcy5jaGVja291dFNlcnZpY2UuZ2V0UGxhY2VPcmRlckVycm9yKCksXG4gICAgICBdKS5zdWJzY3JpYmUoKFtvcmRlckxvYWRpbmcsIG9yZGVyU3VjY2Vzcywgb3JkZXJFcnJvcl0pID0+IHtcbiAgICAgICAgaWYgKG9yZGVyTG9hZGluZykge1xuICAgICAgICAgIHRoaXMucGxhY2VkT3JkZXIgPSB0aGlzLmxhdW5jaERpYWxvZ1NlcnZpY2UubGF1bmNoKFxuICAgICAgICAgICAgTEFVTkNIX0NBTExFUi5QTEFDRV9PUkRFUl9TUElOTkVSLFxuICAgICAgICAgICAgdGhpcy52Y3JcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9yZGVyRXJyb3IpIHtcbiAgICAgICAgICBpZiAodGhpcy5wbGFjZWRPcmRlcikge1xuICAgICAgICAgICAgdGhpcy5wbGFjZWRPcmRlclxuICAgICAgICAgICAgICAuc3Vic2NyaWJlKChjb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhdW5jaERpYWxvZ1NlcnZpY2UuY2xlYXIoXG4gICAgICAgICAgICAgICAgICBMQVVOQ0hfQ0FMTEVSLlBMQUNFX09SREVSX1NQSU5ORVJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgdGhpcy5jaGVja291dFNlcnZpY2UuY2xlYXJQbGFjZU9yZGVyU3RhdGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3JkZXJTdWNjZXNzKSB7XG4gICAgICAgICAgdGhpcy5vblN1Y2Nlc3Mob3JkZXJTdWNjZXNzKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5jaGVja291dFNlcnZpY2VcbiAgICAgICAgLmdldEN1cnJlbnRPcmRlclR5cGUoKVxuICAgICAgICAuc3Vic2NyaWJlKChvcmRlclR5cGUpID0+ICh0aGlzLmN1cnJlbnRPcmRlclR5cGUgPSBvcmRlclR5cGUpKVxuICAgICk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLmNoZWNrb3V0UmVwbGVuaXNobWVudEZvcm1TZXJ2aWNlXG4gICAgICAgIC5nZXRTY2hlZHVsZVJlcGxlbmlzaG1lbnRGb3JtRGF0YSgpXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLnNjaGVkdWxlUmVwbGVuaXNobWVudEZvcm1EYXRhID0gZGF0YTtcblxuICAgICAgICAgIHRoaXMuZGF5c09mV2Vla05vdENoZWNrZWQkLm5leHQoXG4gICAgICAgICAgICBkYXRhLmRheXNPZldlZWsubGVuZ3RoID09PSAwICYmXG4gICAgICAgICAgICAgIGRhdGEucmVjdXJyZW5jZVBlcmlvZCA9PT0gcmVjdXJyZW5jZVBlcmlvZC5XRUVLTFlcbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICBvblN1Y2Nlc3MoZGF0YTogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChkYXRhKSB7XG4gICAgICBzd2l0Y2ggKHRoaXMuY3VycmVudE9yZGVyVHlwZSkge1xuICAgICAgICBjYXNlIE9SREVSX1RZUEUuUExBQ0VfT1JERVI6IHtcbiAgICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgY3hSb3V0ZTogJ29yZGVyQ29uZmlybWF0aW9uJyB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgT1JERVJfVFlQRS5TQ0hFRFVMRV9SRVBMRU5JU0hNRU5UX09SREVSOiB7XG4gICAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdyZXBsZW5pc2htZW50Q29uZmlybWF0aW9uJyB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5jaGVja291dFJlcGxlbmlzaG1lbnRGb3JtU2VydmljZS5yZXNldFNjaGVkdWxlUmVwbGVuaXNobWVudEZvcm1EYXRhKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmxhdW5jaERpYWxvZ1NlcnZpY2UuY2xlYXIoTEFVTkNIX0NBTExFUi5QTEFDRV9PUkRFUl9TUElOTkVSKTtcbiAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5jbGVhclBsYWNlT3JkZXJTdGF0ZSgpO1xuICB9XG59XG4iXX0=