import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckoutService, RoutingService } from '@spartacus/core';
import { filter } from 'rxjs/operators';
let PlaceOrderComponent = class PlaceOrderComponent {
    constructor(checkoutService, routingService, fb) {
        this.checkoutService = checkoutService;
        this.routingService = routingService;
        this.fb = fb;
        this.checkoutSubmitForm = this.fb.group({
            termsAndConditions: [false, Validators.requiredTrue],
        });
    }
    submitForm() {
        if (this.checkoutSubmitForm.valid) {
            this.checkoutService.placeOrder();
        }
        else {
            this.checkoutSubmitForm.markAllAsTouched();
        }
    }
    ngOnInit() {
        this.placeOrderSubscription = this.checkoutService
            .getOrderDetails()
            .pipe(filter((order) => Object.keys(order).length !== 0))
            .subscribe(() => {
            this.routingService.go({ cxRoute: 'orderConfirmation' });
        });
    }
    ngOnDestroy() {
        if (this.placeOrderSubscription) {
            this.placeOrderSubscription.unsubscribe();
        }
    }
};
PlaceOrderComponent.ctorParameters = () => [
    { type: CheckoutService },
    { type: RoutingService },
    { type: FormBuilder }
];
PlaceOrderComponent = __decorate([
    Component({
        selector: 'cx-place-order',
        template: "<form\n  (ngSubmit)=\"submitForm()\"\n  class=\"cx-place-order-form form-check\"\n  [formGroup]=\"checkoutSubmitForm\"\n>\n  <div class=\"form-group\">\n    <label>\n      <input\n        formControlName=\"termsAndConditions\"\n        class=\"form-check-input\"\n        type=\"checkbox\"\n      />\n      <span class=\"form-check-label\">\n        {{ 'checkoutReview.confirmThatRead' | cxTranslate }}\n        <a\n          [routerLink]=\"{ cxRoute: 'termsAndConditions' } | cxUrl\"\n          class=\"cx-tc-link\"\n          target=\"_blank\"\n        >\n          {{ 'checkoutReview.termsAndConditions' | cxTranslate }}\n        </a>\n      </span>\n      <cx-form-errors\n        [control]=\"checkoutSubmitForm.get('termsAndConditions')\"\n      ></cx-form-errors>\n    </label>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-primary btn-block\">\n    {{ 'checkoutReview.placeOrder' | cxTranslate }}\n  </button>\n</form>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], PlaceOrderComponent);
export { PlaceOrderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2Utb3JkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9wbGFjZS1vcmRlci9wbGFjZS1vcmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxHQUdWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFbEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBT3hDLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBTzlCLFlBQ1ksZUFBZ0MsRUFDaEMsY0FBOEIsRUFDOUIsRUFBZTtRQUZmLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQVAzQix1QkFBa0IsR0FBYyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUM1QyxrQkFBa0IsRUFBRSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsWUFBWSxDQUFDO1NBQ3JELENBQUMsQ0FBQztJQU1BLENBQUM7SUFFSixVQUFVO1FBQ1IsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkM7YUFBTTtZQUNMLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQzVDO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLGVBQWU7YUFDL0MsZUFBZSxFQUFFO2FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ3hELFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxDQUFDLENBQUM7UUFDM0QsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQy9CLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUMzQztJQUNILENBQUM7Q0FDRixDQUFBOztZQTNCOEIsZUFBZTtZQUNoQixjQUFjO1lBQzFCLFdBQVc7O0FBVmhCLG1CQUFtQjtJQUwvQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLG83QkFBMkM7UUFDM0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztHQUNXLG1CQUFtQixDQW1DL0I7U0FuQ1ksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENoZWNrb3V0U2VydmljZSwgUm91dGluZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXBsYWNlLW9yZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BsYWNlLW9yZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFBsYWNlT3JkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHBsYWNlT3JkZXJTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjaGVja291dFN1Ym1pdEZvcm06IEZvcm1Hcm91cCA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgIHRlcm1zQW5kQ29uZGl0aW9uczogW2ZhbHNlLCBWYWxpZGF0b3JzLnJlcXVpcmVkVHJ1ZV0sXG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjaGVja291dFNlcnZpY2U6IENoZWNrb3V0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBmYjogRm9ybUJ1aWxkZXJcbiAgKSB7fVxuXG4gIHN1Ym1pdEZvcm0oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2hlY2tvdXRTdWJtaXRGb3JtLnZhbGlkKSB7XG4gICAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5wbGFjZU9yZGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTdWJtaXRGb3JtLm1hcmtBbGxBc1RvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBsYWNlT3JkZXJTdWJzY3JpcHRpb24gPSB0aGlzLmNoZWNrb3V0U2VydmljZVxuICAgICAgLmdldE9yZGVyRGV0YWlscygpXG4gICAgICAucGlwZShmaWx0ZXIoKG9yZGVyKSA9PiBPYmplY3Qua2V5cyhvcmRlcikubGVuZ3RoICE9PSAwKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgY3hSb3V0ZTogJ29yZGVyQ29uZmlybWF0aW9uJyB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGxhY2VPcmRlclN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5wbGFjZU9yZGVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=