import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ViewChild, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { B2BPaymentTypeEnum, PaymentType, PaymentTypeService, } from '@spartacus/core';
import { distinctUntilChanged, filter, tap } from 'rxjs/operators';
import { CheckoutStepType } from '../../model/checkout-step.model';
import { CheckoutStepService } from '../../services/checkout-step.service';
let PaymentTypeComponent = class PaymentTypeComponent {
    constructor(paymentTypeService, checkoutStepService, activatedRoute) {
        this.paymentTypeService = paymentTypeService;
        this.checkoutStepService = checkoutStepService;
        this.activatedRoute = activatedRoute;
        this.paymentTypes$ = this.paymentTypeService.getPaymentTypes();
        this.typeSelected$ = this.paymentTypeService.getSelectedPaymentType().pipe(filter((selected) => selected !== undefined), distinctUntilChanged(), tap((selected) => {
            this.typeSelected = selected;
            this.checkoutStepService.resetSteps();
            this.checkoutStepService.disableEnableStep(CheckoutStepType.PAYMENT_DETAILS, selected === B2BPaymentTypeEnum.ACCOUNT_PAYMENT);
        }));
        this.cartPoNumber$ = this.paymentTypeService.getPoNumber().pipe(filter((po) => po !== undefined), tap((po) => {
            return (this.cartPoNumber = po);
        }));
    }
    changeType(code) {
        this.paymentTypeService.setPaymentType(code);
        this.typeSelected = code;
    }
    next() {
        // set po number to cart
        const poNumInput = this._poNumberInput.nativeElement.value;
        if (this.typeSelected && poNumInput !== this.cartPoNumber) {
            this.paymentTypeService.setPaymentType(this.typeSelected, poNumInput);
        }
        this.checkoutStepService.next(this.activatedRoute);
    }
    back() {
        this.checkoutStepService.back(this.activatedRoute);
    }
};
PaymentTypeComponent.ctorParameters = () => [
    { type: PaymentTypeService },
    { type: CheckoutStepService },
    { type: ActivatedRoute }
];
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
export { PaymentTypeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC10eXBlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NoZWNrb3V0L2NvbXBvbmVudHMvcGF5bWVudC10eXBlL3BheW1lbnQtdHlwZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUVULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUNMLGtCQUFrQixFQUNsQixXQUFXLEVBQ1gsa0JBQWtCLEdBQ25CLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQU8zRSxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQW1DL0IsWUFDWSxrQkFBc0MsRUFDdEMsbUJBQXdDLEVBQ3hDLGNBQThCO1FBRjlCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUEvQjFDLGtCQUFhLEdBRVQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRTlDLGtCQUFhLEdBRVQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHNCQUFzQixFQUFFLENBQUMsSUFBSSxDQUN2RCxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsRUFDNUMsb0JBQW9CLEVBQUUsRUFDdEIsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDZixJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztZQUM3QixJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDdEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixDQUN4QyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQ2hDLFFBQVEsS0FBSyxrQkFBa0IsQ0FBQyxlQUFlLENBQ2hELENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBRUYsa0JBQWEsR0FFVCxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUM1QyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxTQUFTLENBQUMsRUFDaEMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDVCxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBTUMsQ0FBQztJQUVKLFVBQVUsQ0FBQyxJQUFZO1FBQ3JCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVELElBQUk7UUFDRix3QkFBd0I7UUFDeEIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQzNELElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxVQUFVLEtBQUssSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN6RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDdkU7UUFFRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Q0FDRixDQUFBOztZQXZCaUMsa0JBQWtCO1lBQ2pCLG1CQUFtQjtZQUN4QixjQUFjOztBQXBDMUM7SUFEQyxTQUFTLENBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDOzREQUNOO0FBRnhCLG9CQUFvQjtJQUxoQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLDBuRUFBNEM7UUFDNUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztHQUNXLG9CQUFvQixDQTJEaEM7U0EzRFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEIyQlBheW1lbnRUeXBlRW51bSxcbiAgUGF5bWVudFR5cGUsXG4gIFBheW1lbnRUeXBlU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENoZWNrb3V0U3RlcFR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jaGVja291dC1zdGVwLm1vZGVsJztcbmltcG9ydCB7IENoZWNrb3V0U3RlcFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jaGVja291dC1zdGVwLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wYXltZW50LXR5cGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGF5bWVudC10eXBlLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFBheW1lbnRUeXBlQ29tcG9uZW50IHtcbiAgQFZpZXdDaGlsZCgncG9OdW1iZXInLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgcHJpdmF0ZSBfcG9OdW1iZXJJbnB1dDogRWxlbWVudFJlZjtcblxuICB0eXBlU2VsZWN0ZWQ6IHN0cmluZztcbiAgY2FydFBvTnVtYmVyOiBzdHJpbmc7XG5cbiAgcGF5bWVudFR5cGVzJDogT2JzZXJ2YWJsZTxcbiAgICBQYXltZW50VHlwZVtdXG4gID4gPSB0aGlzLnBheW1lbnRUeXBlU2VydmljZS5nZXRQYXltZW50VHlwZXMoKTtcblxuICB0eXBlU2VsZWN0ZWQkOiBPYnNlcnZhYmxlPFxuICAgIHN0cmluZ1xuICA+ID0gdGhpcy5wYXltZW50VHlwZVNlcnZpY2UuZ2V0U2VsZWN0ZWRQYXltZW50VHlwZSgpLnBpcGUoXG4gICAgZmlsdGVyKChzZWxlY3RlZCkgPT4gc2VsZWN0ZWQgIT09IHVuZGVmaW5lZCksXG4gICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICB0YXAoKHNlbGVjdGVkKSA9PiB7XG4gICAgICB0aGlzLnR5cGVTZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICAgdGhpcy5jaGVja291dFN0ZXBTZXJ2aWNlLnJlc2V0U3RlcHMoKTtcbiAgICAgIHRoaXMuY2hlY2tvdXRTdGVwU2VydmljZS5kaXNhYmxlRW5hYmxlU3RlcChcbiAgICAgICAgQ2hlY2tvdXRTdGVwVHlwZS5QQVlNRU5UX0RFVEFJTFMsXG4gICAgICAgIHNlbGVjdGVkID09PSBCMkJQYXltZW50VHlwZUVudW0uQUNDT1VOVF9QQVlNRU5UXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY2FydFBvTnVtYmVyJDogT2JzZXJ2YWJsZTxcbiAgICBzdHJpbmdcbiAgPiA9IHRoaXMucGF5bWVudFR5cGVTZXJ2aWNlLmdldFBvTnVtYmVyKCkucGlwZShcbiAgICBmaWx0ZXIoKHBvKSA9PiBwbyAhPT0gdW5kZWZpbmVkKSxcbiAgICB0YXAoKHBvKSA9PiB7XG4gICAgICByZXR1cm4gKHRoaXMuY2FydFBvTnVtYmVyID0gcG8pO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHBheW1lbnRUeXBlU2VydmljZTogUGF5bWVudFR5cGVTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dFN0ZXBTZXJ2aWNlOiBDaGVja291dFN0ZXBTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgKSB7fVxuXG4gIGNoYW5nZVR5cGUoY29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5wYXltZW50VHlwZVNlcnZpY2Uuc2V0UGF5bWVudFR5cGUoY29kZSk7XG4gICAgdGhpcy50eXBlU2VsZWN0ZWQgPSBjb2RlO1xuICB9XG5cbiAgbmV4dCgpOiB2b2lkIHtcbiAgICAvLyBzZXQgcG8gbnVtYmVyIHRvIGNhcnRcbiAgICBjb25zdCBwb051bUlucHV0ID0gdGhpcy5fcG9OdW1iZXJJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlO1xuICAgIGlmICh0aGlzLnR5cGVTZWxlY3RlZCAmJiBwb051bUlucHV0ICE9PSB0aGlzLmNhcnRQb051bWJlcikge1xuICAgICAgdGhpcy5wYXltZW50VHlwZVNlcnZpY2Uuc2V0UGF5bWVudFR5cGUodGhpcy50eXBlU2VsZWN0ZWQsIHBvTnVtSW5wdXQpO1xuICAgIH1cblxuICAgIHRoaXMuY2hlY2tvdXRTdGVwU2VydmljZS5uZXh0KHRoaXMuYWN0aXZhdGVkUm91dGUpO1xuICB9XG5cbiAgYmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0U3RlcFNlcnZpY2UuYmFjayh0aGlzLmFjdGl2YXRlZFJvdXRlKTtcbiAgfVxufVxuIl19