import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActiveCartService, AuthRedirectService } from '@spartacus/core';
import { CustomFormValidators } from '../../../shared/utils/validators/custom-form-validators';
let CheckoutLoginComponent = class CheckoutLoginComponent {
    constructor(formBuilder, authRedirectService, activeCartService) {
        this.formBuilder = formBuilder;
        this.authRedirectService = authRedirectService;
        this.activeCartService = activeCartService;
        this.checkoutLoginForm = this.formBuilder.group({
            email: ['', [Validators.required, CustomFormValidators.emailValidator]],
            emailConfirmation: ['', [Validators.required]],
        }, {
            validators: CustomFormValidators.emailsMustMatch('email', 'emailConfirmation'),
        });
    }
    onSubmit() {
        if (this.checkoutLoginForm.valid) {
            const email = this.checkoutLoginForm.get('email').value;
            this.activeCartService.addEmail(email);
            if (!this.sub) {
                this.sub = this.activeCartService.getAssignedUser().subscribe(() => {
                    if (this.activeCartService.isGuestCart()) {
                        this.authRedirectService.redirect();
                    }
                });
            }
        }
        else {
            this.checkoutLoginForm.markAllAsTouched();
        }
    }
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
};
CheckoutLoginComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: AuthRedirectService },
    { type: ActiveCartService }
];
CheckoutLoginComponent = __decorate([
    Component({
        selector: 'cx-checkout-login',
        template: "<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"checkoutLoginForm\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'checkoutLogin.emailAddress.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        name=\"email\"\n        class=\"form-control\"\n        formControlName=\"email\"\n        placeholder=\"{{\n          'checkoutLogin.emailAddress.placeholder' | cxTranslate\n        }}\"\n      />\n      <cx-form-errors\n        [control]=\"checkoutLoginForm.get('email')\"\n      ></cx-form-errors>\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'checkoutLogin.confirmEmail.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        name=\"emailConfirmation\"\n        class=\"form-control\"\n        formControlName=\"emailConfirmation\"\n        placeholder=\"{{\n          'checkoutLogin.confirmEmail.placeholder' | cxTranslate\n        }}\"\n      />\n      <cx-form-errors\n        [control]=\"checkoutLoginForm.get('emailConfirmation')\"\n      ></cx-form-errors>\n    </label>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-block btn-primary\">\n    {{ 'checkoutLogin.continue' | cxTranslate }}\n  </button>\n</form>\n"
    })
], CheckoutLoginComponent);
export { CheckoutLoginComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvdXNlci9jaGVja291dC1sb2dpbi9jaGVja291dC1sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFNL0YsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFlakMsWUFDWSxXQUF3QixFQUN4QixtQkFBd0MsRUFDeEMsaUJBQW9DO1FBRnBDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQWpCaEQsc0JBQWlCLEdBQWMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQ25EO1lBQ0UsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN2RSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMvQyxFQUNEO1lBQ0UsVUFBVSxFQUFFLG9CQUFvQixDQUFDLGVBQWUsQ0FDOUMsT0FBTyxFQUNQLG1CQUFtQixDQUNwQjtTQUNGLENBQ0YsQ0FBQztJQU9DLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFO1lBQ2hDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3hELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtvQkFDakUsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEVBQUU7d0JBQ3hDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztxQkFDckM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDSjtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUMzQztJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7Q0FDRixDQUFBOztZQTNCMEIsV0FBVztZQUNILG1CQUFtQjtZQUNyQixpQkFBaUI7O0FBbEJyQyxzQkFBc0I7SUFKbEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixveUNBQThDO0tBQy9DLENBQUM7R0FDVyxzQkFBc0IsQ0EyQ2xDO1NBM0NZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWN0aXZlQ2FydFNlcnZpY2UsIEF1dGhSZWRpcmVjdFNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDdXN0b21Gb3JtVmFsaWRhdG9ycyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC91dGlscy92YWxpZGF0b3JzL2N1c3RvbS1mb3JtLXZhbGlkYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jaGVja291dC1sb2dpbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGVja291dC1sb2dpbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0TG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBjaGVja291dExvZ2luRm9ybTogRm9ybUdyb3VwID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cChcbiAgICB7XG4gICAgICBlbWFpbDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgQ3VzdG9tRm9ybVZhbGlkYXRvcnMuZW1haWxWYWxpZGF0b3JdXSxcbiAgICAgIGVtYWlsQ29uZmlybWF0aW9uOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgfSxcbiAgICB7XG4gICAgICB2YWxpZGF0b3JzOiBDdXN0b21Gb3JtVmFsaWRhdG9ycy5lbWFpbHNNdXN0TWF0Y2goXG4gICAgICAgICdlbWFpbCcsXG4gICAgICAgICdlbWFpbENvbmZpcm1hdGlvbidcbiAgICAgICksXG4gICAgfVxuICApO1xuICBzdWI6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIHByb3RlY3RlZCBhdXRoUmVkaXJlY3RTZXJ2aWNlOiBBdXRoUmVkaXJlY3RTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2VcbiAgKSB7fVxuXG4gIG9uU3VibWl0KCkge1xuICAgIGlmICh0aGlzLmNoZWNrb3V0TG9naW5Gb3JtLnZhbGlkKSB7XG4gICAgICBjb25zdCBlbWFpbCA9IHRoaXMuY2hlY2tvdXRMb2dpbkZvcm0uZ2V0KCdlbWFpbCcpLnZhbHVlO1xuICAgICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5hZGRFbWFpbChlbWFpbCk7XG5cbiAgICAgIGlmICghdGhpcy5zdWIpIHtcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmdldEFzc2lnbmVkVXNlcigpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuaXNHdWVzdENhcnQoKSkge1xuICAgICAgICAgICAgdGhpcy5hdXRoUmVkaXJlY3RTZXJ2aWNlLnJlZGlyZWN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGVja291dExvZ2luRm9ybS5tYXJrQWxsQXNUb3VjaGVkKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3ViKSB7XG4gICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19