import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, RoutingService, UserService } from '@spartacus/core';
import { CustomFormValidators } from '../../../../shared/utils/validators/custom-form-validators';
var GuestRegisterFormComponent = /** @class */ (function () {
    function GuestRegisterFormComponent(userService, routingService, authService, fb) {
        this.userService = userService;
        this.routingService = routingService;
        this.authService = authService;
        this.fb = fb;
        this.guestRegisterForm = this.fb.group({
            password: [
                '',
                [Validators.required, CustomFormValidators.passwordValidator],
            ],
            passwordconf: ['', Validators.required],
        }, { validator: CustomFormValidators.matchPassword });
    }
    GuestRegisterFormComponent.prototype.submit = function () {
        var _this = this;
        this.userService.registerGuest(this.guid, this.guestRegisterForm.value.password);
        if (!this.subscription) {
            this.subscription = this.authService.getUserToken().subscribe(function (token) {
                if (token.access_token) {
                    _this.routingService.go({ cxRoute: 'home' });
                }
            });
        }
    };
    GuestRegisterFormComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    GuestRegisterFormComponent.ctorParameters = function () { return [
        { type: UserService },
        { type: RoutingService },
        { type: AuthService },
        { type: FormBuilder }
    ]; };
    __decorate([
        Input()
    ], GuestRegisterFormComponent.prototype, "guid", void 0);
    __decorate([
        Input()
    ], GuestRegisterFormComponent.prototype, "email", void 0);
    GuestRegisterFormComponent = __decorate([
        Component({
            selector: 'cx-guest-register-form',
            template: "<div class=\"register-guest\">\n  <div class=\"col-md-6 col-lg-4\">\n    <h3>{{ 'checkoutOrderConfirmation.createAccount' | cxTranslate }}</h3>\n    <p>\n      {{\n        'checkoutOrderConfirmation.createAccountForNext'\n          | cxTranslate: { email: email }\n      }}\n    </p>\n\n    <form [formGroup]=\"guestRegisterForm\">\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'register.password.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            [class.is-invalid]=\"\n              guestRegisterForm.get('password').invalid &&\n              guestRegisterForm.get('password').dirty\n            \"\n            type=\"password\"\n            name=\"password\"\n            placeholder=\"{{ 'register.password.placeholder' | cxTranslate }}\"\n            formControlName=\"password\"\n          />\n          <div\n            class=\"invalid-feedback\"\n            *ngIf=\"\n              guestRegisterForm.get('password').invalid &&\n              guestRegisterForm.get('password').dirty\n            \"\n          >\n            <span>{{ 'register.passwordMinRequirements' | cxTranslate }}</span>\n          </div>\n        </label>\n      </div>\n\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'register.confirmPassword.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            [class.is-invalid]=\"\n              guestRegisterForm.get('password').value !==\n              guestRegisterForm.get('passwordconf').value\n            \"\n            type=\"password\"\n            name=\"confirmpassword\"\n            placeholder=\"{{\n              'register.confirmPassword.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"passwordconf\"\n          />\n          <div\n            class=\"invalid-feedback\"\n            *ngIf=\"\n              guestRegisterForm.get('password').value !==\n                guestRegisterForm.get('passwordconf').value &&\n              guestRegisterForm.get('passwordconf').value\n            \"\n          >\n            <span>{{ 'register.bothPasswordMustMatch' | cxTranslate }}</span>\n          </div>\n        </label>\n      </div>\n\n      <button\n        type=\"submit\"\n        (click)=\"submit()\"\n        [disabled]=\"guestRegisterForm.invalid\"\n        class=\"btn btn-block btn-primary\"\n      >\n        {{ 'common.submit' | cxTranslate }}\n      </button>\n    </form>\n  </div>\n</div>\n"
        })
    ], GuestRegisterFormComponent);
    return GuestRegisterFormComponent;
}());
export { GuestRegisterFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3Vlc3QtcmVnaXN0ZXItZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9vcmRlci1jb25maXJtYXRpb24vY29tcG9uZW50cy9ndWVzdC1yZWdpc3Rlci1mb3JtL2d1ZXN0LXJlZ2lzdGVyLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQU1sRztJQWlCRSxvQ0FDWSxXQUF3QixFQUN4QixjQUE4QixFQUM5QixXQUF3QixFQUN4QixFQUFlO1FBSGYsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFmM0Isc0JBQWlCLEdBQWMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQzFDO1lBQ0UsUUFBUSxFQUFFO2dCQUNSLEVBQUU7Z0JBQ0YsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDO2FBQzlEO1lBQ0QsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDeEMsRUFDRCxFQUFFLFNBQVMsRUFBRSxvQkFBb0IsQ0FBQyxhQUFhLEVBQUUsQ0FDbEQsQ0FBQztJQU9DLENBQUM7SUFFSiwyQ0FBTSxHQUFOO1FBQUEsaUJBWUM7UUFYQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FDNUIsSUFBSSxDQUFDLElBQUksRUFDVCxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDdEMsQ0FBQztRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxLQUFLO2dCQUNqRSxJQUFJLEtBQUssQ0FBQyxZQUFZLEVBQUU7b0JBQ3RCLEtBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7aUJBQzdDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxnREFBVyxHQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDOztnQkF4QndCLFdBQVc7Z0JBQ1IsY0FBYztnQkFDakIsV0FBVztnQkFDcEIsV0FBVzs7SUFwQmxCO1FBQVIsS0FBSyxFQUFFOzREQUFjO0lBQ2I7UUFBUixLQUFLLEVBQUU7NkRBQWU7SUFGWiwwQkFBMEI7UUFKdEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQywyakZBQW1EO1NBQ3BELENBQUM7T0FDVywwQkFBMEIsQ0EyQ3RDO0lBQUQsaUNBQUM7Q0FBQSxBQTNDRCxJQTJDQztTQTNDWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSwgUm91dGluZ1NlcnZpY2UsIFVzZXJTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ3VzdG9tRm9ybVZhbGlkYXRvcnMgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvdXRpbHMvdmFsaWRhdG9ycy9jdXN0b20tZm9ybS12YWxpZGF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtZ3Vlc3QtcmVnaXN0ZXItZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9ndWVzdC1yZWdpc3Rlci1mb3JtLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgR3Vlc3RSZWdpc3RlckZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBndWlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGVtYWlsOiBzdHJpbmc7XG5cbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgZ3Vlc3RSZWdpc3RlckZvcm06IEZvcm1Hcm91cCA9IHRoaXMuZmIuZ3JvdXAoXG4gICAge1xuICAgICAgcGFzc3dvcmQ6IFtcbiAgICAgICAgJycsXG4gICAgICAgIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBDdXN0b21Gb3JtVmFsaWRhdG9ycy5wYXNzd29yZFZhbGlkYXRvcl0sXG4gICAgICBdLFxuICAgICAgcGFzc3dvcmRjb25mOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIH0sXG4gICAgeyB2YWxpZGF0b3I6IEN1c3RvbUZvcm1WYWxpZGF0b3JzLm1hdGNoUGFzc3dvcmQgfVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBmYjogRm9ybUJ1aWxkZXJcbiAgKSB7fVxuXG4gIHN1Ym1pdCgpIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyR3Vlc3QoXG4gICAgICB0aGlzLmd1aWQsXG4gICAgICB0aGlzLmd1ZXN0UmVnaXN0ZXJGb3JtLnZhbHVlLnBhc3N3b3JkXG4gICAgKTtcbiAgICBpZiAoIXRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlclRva2VuKCkuc3Vic2NyaWJlKHRva2VuID0+IHtcbiAgICAgICAgaWYgKHRva2VuLmFjY2Vzc190b2tlbikge1xuICAgICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAnaG9tZScgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==