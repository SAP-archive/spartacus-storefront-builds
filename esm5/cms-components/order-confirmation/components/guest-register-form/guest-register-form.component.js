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
        }, {
            validators: CustomFormValidators.passwordsMustMatch('password', 'passwordconf'),
        });
    }
    GuestRegisterFormComponent.prototype.submit = function () {
        var _this = this;
        if (this.guestRegisterForm.valid) {
            this.userService.registerGuest(this.guid, this.guestRegisterForm.value.password);
            if (!this.subscription) {
                this.subscription = this.authService
                    .getUserToken()
                    .subscribe(function (token) {
                    if (token.access_token) {
                        _this.routingService.go({ cxRoute: 'home' });
                    }
                });
            }
        }
        else {
            this.guestRegisterForm.markAllAsTouched();
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
            template: "<div class=\"register-guest\">\n  <div class=\"col-md-6 col-lg-4\">\n    <h3>{{ 'checkoutOrderConfirmation.createAccount' | cxTranslate }}</h3>\n    <p>\n      {{\n        'checkoutOrderConfirmation.createAccountForNext'\n          | cxTranslate: { email: email }\n      }}\n    </p>\n\n    <form (ngSubmit)=\"submit()\" [formGroup]=\"guestRegisterForm\">\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'register.password.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            type=\"password\"\n            name=\"password\"\n            placeholder=\"{{ 'register.password.placeholder' | cxTranslate }}\"\n            formControlName=\"password\"\n          />\n          <cx-form-errors\n            [control]=\"guestRegisterForm.get('password')\"\n          ></cx-form-errors>\n        </label>\n      </div>\n\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'register.confirmPassword.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            type=\"password\"\n            name=\"passwordconf\"\n            placeholder=\"{{\n              'register.confirmPassword.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"passwordconf\"\n          />\n          <cx-form-errors\n            [control]=\"guestRegisterForm.get('passwordconf')\"\n          ></cx-form-errors>\n        </label>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-block btn-primary\">\n        {{ 'common.submit' | cxTranslate }}\n      </button>\n    </form>\n  </div>\n</div>\n"
        })
    ], GuestRegisterFormComponent);
    return GuestRegisterFormComponent;
}());
export { GuestRegisterFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3Vlc3QtcmVnaXN0ZXItZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9vcmRlci1jb25maXJtYXRpb24vY29tcG9uZW50cy9ndWVzdC1yZWdpc3Rlci1mb3JtL2d1ZXN0LXJlZ2lzdGVyLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQU1sRztJQXFCRSxvQ0FDWSxXQUF3QixFQUN4QixjQUE4QixFQUM5QixXQUF3QixFQUN4QixFQUFlO1FBSGYsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFwQjNCLHNCQUFpQixHQUFjLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUMxQztZQUNFLFFBQVEsRUFBRTtnQkFDUixFQUFFO2dCQUNGLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQzthQUM5RDtZQUNELFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3hDLEVBQ0Q7WUFDRSxVQUFVLEVBQUUsb0JBQW9CLENBQUMsa0JBQWtCLENBQ2pELFVBQVUsRUFDVixjQUFjLENBQ2Y7U0FDRixDQUNGLENBQUM7SUFPQyxDQUFDO0lBRUosMkNBQU0sR0FBTjtRQUFBLGlCQWtCQztRQWpCQyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQzVCLElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ3RDLENBQUM7WUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVztxQkFDakMsWUFBWSxFQUFFO3FCQUNkLFNBQVMsQ0FBQyxVQUFDLEtBQUs7b0JBQ2YsSUFBSSxLQUFLLENBQUMsWUFBWSxFQUFFO3dCQUN0QixLQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO3FCQUM3QztnQkFDSCxDQUFDLENBQUMsQ0FBQzthQUNOO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQzNDO0lBQ0gsQ0FBQztJQUVELGdEQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7O2dCQTlCd0IsV0FBVztnQkFDUixjQUFjO2dCQUNqQixXQUFXO2dCQUNwQixXQUFXOztJQXhCbEI7UUFBUixLQUFLLEVBQUU7NERBQWM7SUFDYjtRQUFSLEtBQUssRUFBRTs2REFBZTtJQUZaLDBCQUEwQjtRQUp0QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLG9zREFBbUQ7U0FDcEQsQ0FBQztPQUNXLDBCQUEwQixDQXFEdEM7SUFBRCxpQ0FBQztDQUFBLEFBckRELElBcURDO1NBckRZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlLCBSb3V0aW5nU2VydmljZSwgVXNlclNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDdXN0b21Gb3JtVmFsaWRhdG9ycyB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC91dGlscy92YWxpZGF0b3JzL2N1c3RvbS1mb3JtLXZhbGlkYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1ndWVzdC1yZWdpc3Rlci1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2d1ZXN0LXJlZ2lzdGVyLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBHdWVzdFJlZ2lzdGVyRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGd1aWQ6IHN0cmluZztcbiAgQElucHV0KCkgZW1haWw6IHN0cmluZztcblxuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgZ3Vlc3RSZWdpc3RlckZvcm06IEZvcm1Hcm91cCA9IHRoaXMuZmIuZ3JvdXAoXG4gICAge1xuICAgICAgcGFzc3dvcmQ6IFtcbiAgICAgICAgJycsXG4gICAgICAgIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBDdXN0b21Gb3JtVmFsaWRhdG9ycy5wYXNzd29yZFZhbGlkYXRvcl0sXG4gICAgICBdLFxuICAgICAgcGFzc3dvcmRjb25mOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIH0sXG4gICAge1xuICAgICAgdmFsaWRhdG9yczogQ3VzdG9tRm9ybVZhbGlkYXRvcnMucGFzc3dvcmRzTXVzdE1hdGNoKFxuICAgICAgICAncGFzc3dvcmQnLFxuICAgICAgICAncGFzc3dvcmRjb25mJ1xuICAgICAgKSxcbiAgICB9XG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGZiOiBGb3JtQnVpbGRlclxuICApIHt9XG5cbiAgc3VibWl0KCkge1xuICAgIGlmICh0aGlzLmd1ZXN0UmVnaXN0ZXJGb3JtLnZhbGlkKSB7XG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyR3Vlc3QoXG4gICAgICAgIHRoaXMuZ3VpZCxcbiAgICAgICAgdGhpcy5ndWVzdFJlZ2lzdGVyRm9ybS52YWx1ZS5wYXNzd29yZFxuICAgICAgKTtcbiAgICAgIGlmICghdGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAgICAgLmdldFVzZXJUb2tlbigpXG4gICAgICAgICAgLnN1YnNjcmliZSgodG9rZW4pID0+IHtcbiAgICAgICAgICAgIGlmICh0b2tlbi5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdob21lJyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ndWVzdFJlZ2lzdGVyRm9ybS5tYXJrQWxsQXNUb3VjaGVkKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19