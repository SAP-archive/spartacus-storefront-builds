import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ViewChild, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { B2BPaymentTypeEnum, PaymentType, PaymentTypeService, } from '@spartacus/core';
import { distinctUntilChanged, filter, tap } from 'rxjs/operators';
import { CheckoutStepType } from '../../model/checkout-step.model';
import { CheckoutStepService } from '../../services/checkout-step.service';
var PaymentTypeComponent = /** @class */ (function () {
    function PaymentTypeComponent(paymentTypeService, checkoutStepService, activatedRoute) {
        var _this = this;
        this.paymentTypeService = paymentTypeService;
        this.checkoutStepService = checkoutStepService;
        this.activatedRoute = activatedRoute;
        this.paymentTypes$ = this.paymentTypeService.getPaymentTypes();
        this.typeSelected$ = this.paymentTypeService.getSelectedPaymentType().pipe(filter(function (selected) { return selected !== undefined; }), distinctUntilChanged(), tap(function (selected) {
            _this.typeSelected = selected;
            _this.checkoutStepService.resetSteps();
            _this.checkoutStepService.disableEnableStep(CheckoutStepType.PAYMENT_DETAILS, selected === B2BPaymentTypeEnum.ACCOUNT_PAYMENT);
        }));
        this.cartPoNumber$ = this.paymentTypeService.getPoNumber().pipe(filter(function (po) { return po !== undefined; }), tap(function (po) {
            return (_this.cartPoNumber = po);
        }));
    }
    PaymentTypeComponent.prototype.changeType = function (code) {
        this.paymentTypeService.setPaymentType(code);
        this.typeSelected = code;
    };
    PaymentTypeComponent.prototype.next = function () {
        // set po number to cart
        var poNumInput = this._poNumberInput.nativeElement.value;
        if (this.typeSelected && poNumInput !== this.cartPoNumber) {
            this.paymentTypeService.setPaymentType(this.typeSelected, poNumInput);
        }
        this.checkoutStepService.next(this.activatedRoute);
    };
    PaymentTypeComponent.prototype.back = function () {
        this.checkoutStepService.back(this.activatedRoute);
    };
    PaymentTypeComponent.ctorParameters = function () { return [
        { type: PaymentTypeService },
        { type: CheckoutStepService },
        { type: ActivatedRoute }
    ]; };
    __decorate([
        ViewChild('poNumber', { static: false })
    ], PaymentTypeComponent.prototype, "_poNumberInput", void 0);
    PaymentTypeComponent = __decorate([
        Component({
            selector: 'cx-payment-type',
            template: "<div class=\"row\">\n  <div class=\"col-md-12 col-lg-6\">\n    <label>\n      <span class=\"label-content\">{{\n        'checkoutPO.poNumber' | cxTranslate\n      }}</span>\n      <input\n        #poNumber\n        class=\"form-control\"\n        type=\"text\"\n        placeholder=\"{{ 'checkoutPO.placeholder' | cxTranslate }}\"\n        value=\"{{ cartPoNumber$ | async }}\"\n      />\n    </label>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12 col-lg-6\">\n    <ng-container\n      *ngIf=\"\n        (paymentTypes$ | async)?.length && typeSelected$ | async;\n        else loading\n      \"\n    >\n      <label class=\"cx-payment-type-container\">\n        <span class=\"label-content\">{{\n          'paymentTypes.title' | cxTranslate\n        }}</span>\n        <div class=\"form-check\" *ngFor=\"let type of paymentTypes$ | async\">\n          <input\n            id=\"paymentType-{{ type.code }}\"\n            class=\"form-check-input\"\n            role=\"radio\"\n            type=\"radio\"\n            aria-checked=\"true\"\n            (change)=\"changeType(type.code)\"\n            [value]=\"type.code\"\n            [checked]=\"type.code == typeSelected\"\n          />\n          <label\n            class=\"cx-payment-type-label form-check-label form-radio-label\"\n            for=\"paymentType-{{ type.code }}\"\n          >\n            <div class=\"cx-payment-type\">\n              {{\n                'paymentTypes.paymentType' | cxTranslate: { context: type.code }\n              }}\n            </div>\n          </label>\n        </div>\n      </label>\n    </ng-container>\n  </div>\n</div>\n\n<div class=\"cx-checkout-btns row\">\n  <div class=\"col-md-12 col-lg-6\">\n    <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n      {{ 'checkout.backToCart' | cxTranslate }}\n    </button>\n  </div>\n  <div class=\"col-md-12 col-lg-6\">\n    <button class=\"btn btn-block btn-primary\" (click)=\"next()\">\n      {{ 'common.continue' | cxTranslate }}\n    </button>\n  </div>\n</div>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], PaymentTypeComponent);
    return PaymentTypeComponent;
}());
export { PaymentTypeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC10eXBlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NoZWNrb3V0L2NvbXBvbmVudHMvcGF5bWVudC10eXBlL3BheW1lbnQtdHlwZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUVULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUNMLGtCQUFrQixFQUNsQixXQUFXLEVBQ1gsa0JBQWtCLEdBQ25CLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQU8zRTtJQW1DRSw4QkFDWSxrQkFBc0MsRUFDdEMsbUJBQXdDLEVBQ3hDLGNBQThCO1FBSDFDLGlCQUlJO1FBSFEsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQS9CMUMsa0JBQWEsR0FFVCxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFOUMsa0JBQWEsR0FFVCxJQUFJLENBQUMsa0JBQWtCLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxJQUFJLENBQ3ZELE1BQU0sQ0FBQyxVQUFDLFFBQVEsSUFBSyxPQUFBLFFBQVEsS0FBSyxTQUFTLEVBQXRCLENBQXNCLENBQUMsRUFDNUMsb0JBQW9CLEVBQUUsRUFDdEIsR0FBRyxDQUFDLFVBQUMsUUFBUTtZQUNYLEtBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO1lBQzdCLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN0QyxLQUFJLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLENBQ3hDLGdCQUFnQixDQUFDLGVBQWUsRUFDaEMsUUFBUSxLQUFLLGtCQUFrQixDQUFDLGVBQWUsQ0FDaEQsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7UUFFRixrQkFBYSxHQUVULElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQzVDLE1BQU0sQ0FBQyxVQUFDLEVBQUUsSUFBSyxPQUFBLEVBQUUsS0FBSyxTQUFTLEVBQWhCLENBQWdCLENBQUMsRUFDaEMsR0FBRyxDQUFDLFVBQUMsRUFBRTtZQUNMLE9BQU8sQ0FBQyxLQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUNILENBQUM7SUFNQyxDQUFDO0lBRUoseUNBQVUsR0FBVixVQUFXLElBQVk7UUFDckIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRUQsbUNBQUksR0FBSjtRQUNFLHdCQUF3QjtRQUN4QixJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDM0QsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLFVBQVUsS0FBSyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3pELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztTQUN2RTtRQUVELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxtQ0FBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBdEIrQixrQkFBa0I7Z0JBQ2pCLG1CQUFtQjtnQkFDeEIsY0FBYzs7SUFwQzFDO1FBREMsU0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQztnRUFDTjtJQUZ4QixvQkFBb0I7UUFMaEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQiwwbkVBQTRDO1lBQzVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVyxvQkFBb0IsQ0EyRGhDO0lBQUQsMkJBQUM7Q0FBQSxBQTNERCxJQTJEQztTQTNEWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQjJCUGF5bWVudFR5cGVFbnVtLFxuICBQYXltZW50VHlwZSxcbiAgUGF5bWVudFR5cGVTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdGVwVHlwZSB9IGZyb20gJy4uLy4uL21vZGVsL2NoZWNrb3V0LXN0ZXAubW9kZWwnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdGVwU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NoZWNrb3V0LXN0ZXAuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXBheW1lbnQtdHlwZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXltZW50LXR5cGUuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUGF5bWVudFR5cGVDb21wb25lbnQge1xuICBAVmlld0NoaWxkKCdwb051bWJlcicsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBwcml2YXRlIF9wb051bWJlcklucHV0OiBFbGVtZW50UmVmO1xuXG4gIHR5cGVTZWxlY3RlZDogc3RyaW5nO1xuICBjYXJ0UG9OdW1iZXI6IHN0cmluZztcblxuICBwYXltZW50VHlwZXMkOiBPYnNlcnZhYmxlPFxuICAgIFBheW1lbnRUeXBlW11cbiAgPiA9IHRoaXMucGF5bWVudFR5cGVTZXJ2aWNlLmdldFBheW1lbnRUeXBlcygpO1xuXG4gIHR5cGVTZWxlY3RlZCQ6IE9ic2VydmFibGU8XG4gICAgc3RyaW5nXG4gID4gPSB0aGlzLnBheW1lbnRUeXBlU2VydmljZS5nZXRTZWxlY3RlZFBheW1lbnRUeXBlKCkucGlwZShcbiAgICBmaWx0ZXIoKHNlbGVjdGVkKSA9PiBzZWxlY3RlZCAhPT0gdW5kZWZpbmVkKSxcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgIHRhcCgoc2VsZWN0ZWQpID0+IHtcbiAgICAgIHRoaXMudHlwZVNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgICB0aGlzLmNoZWNrb3V0U3RlcFNlcnZpY2UucmVzZXRTdGVwcygpO1xuICAgICAgdGhpcy5jaGVja291dFN0ZXBTZXJ2aWNlLmRpc2FibGVFbmFibGVTdGVwKFxuICAgICAgICBDaGVja291dFN0ZXBUeXBlLlBBWU1FTlRfREVUQUlMUyxcbiAgICAgICAgc2VsZWN0ZWQgPT09IEIyQlBheW1lbnRUeXBlRW51bS5BQ0NPVU5UX1BBWU1FTlRcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjYXJ0UG9OdW1iZXIkOiBPYnNlcnZhYmxlPFxuICAgIHN0cmluZ1xuICA+ID0gdGhpcy5wYXltZW50VHlwZVNlcnZpY2UuZ2V0UG9OdW1iZXIoKS5waXBlKFxuICAgIGZpbHRlcigocG8pID0+IHBvICE9PSB1bmRlZmluZWQpLFxuICAgIHRhcCgocG8pID0+IHtcbiAgICAgIHJldHVybiAodGhpcy5jYXJ0UG9OdW1iZXIgPSBwbyk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcGF5bWVudFR5cGVTZXJ2aWNlOiBQYXltZW50VHlwZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U3RlcFNlcnZpY2U6IENoZWNrb3V0U3RlcFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICApIHt9XG5cbiAgY2hhbmdlVHlwZShjb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnBheW1lbnRUeXBlU2VydmljZS5zZXRQYXltZW50VHlwZShjb2RlKTtcbiAgICB0aGlzLnR5cGVTZWxlY3RlZCA9IGNvZGU7XG4gIH1cblxuICBuZXh0KCk6IHZvaWQge1xuICAgIC8vIHNldCBwbyBudW1iZXIgdG8gY2FydFxuICAgIGNvbnN0IHBvTnVtSW5wdXQgPSB0aGlzLl9wb051bWJlcklucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWU7XG4gICAgaWYgKHRoaXMudHlwZVNlbGVjdGVkICYmIHBvTnVtSW5wdXQgIT09IHRoaXMuY2FydFBvTnVtYmVyKSB7XG4gICAgICB0aGlzLnBheW1lbnRUeXBlU2VydmljZS5zZXRQYXltZW50VHlwZSh0aGlzLnR5cGVTZWxlY3RlZCwgcG9OdW1JbnB1dCk7XG4gICAgfVxuXG4gICAgdGhpcy5jaGVja291dFN0ZXBTZXJ2aWNlLm5leHQodGhpcy5hY3RpdmF0ZWRSb3V0ZSk7XG4gIH1cblxuICBiYWNrKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTdGVwU2VydmljZS5iYWNrKHRoaXMuYWN0aXZhdGVkUm91dGUpO1xuICB9XG59XG4iXX0=