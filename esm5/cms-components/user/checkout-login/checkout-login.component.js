import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { ActiveCartService, AuthRedirectService } from '@spartacus/core';
import { FormUtils } from '../../../shared/utils/forms/form-utils';
import { CustomFormValidators } from '../../../shared/utils/validators/custom-form-validators';
var CheckoutLoginComponent = /** @class */ (function () {
    function CheckoutLoginComponent(formBuilder, authRedirectService, activeCartService) {
        this.formBuilder = formBuilder;
        this.authRedirectService = authRedirectService;
        this.activeCartService = activeCartService;
        this.form = this.formBuilder.group({
            email: ['', [Validators.required, CustomFormValidators.emailValidator]],
            emailConfirmation: ['', [Validators.required]],
        }, { validator: this.emailsMatch });
        this.submitClicked = false;
    }
    CheckoutLoginComponent.prototype.isNotValid = function (formControlName) {
        return FormUtils.isNotValidField(this.form, formControlName, this.submitClicked);
    };
    CheckoutLoginComponent.prototype.isEmailConfirmInvalid = function () {
        return (this.form.hasError('NotEqual') &&
            (this.submitClicked ||
                (this.form.get('emailConfirmation').touched &&
                    this.form.get('emailConfirmation').dirty)));
    };
    CheckoutLoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitClicked = true;
        if (this.form.invalid) {
            return;
        }
        var email = this.form.value.email;
        this.activeCartService.addEmail(email);
        if (!this.sub) {
            this.sub = this.activeCartService.getAssignedUser().subscribe(function (_) {
                if (_this.activeCartService.isGuestCart()) {
                    _this.authRedirectService.redirect();
                }
            });
        }
    };
    CheckoutLoginComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    CheckoutLoginComponent.prototype.emailsMatch = function (abstractControl) {
        return abstractControl.get('email').value !==
            abstractControl.get('emailConfirmation').value
            ? { NotEqual: true }
            : null;
    };
    CheckoutLoginComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: AuthRedirectService },
        { type: ActiveCartService }
    ]; };
    CheckoutLoginComponent = __decorate([
        Component({
            selector: 'cx-checkout-login',
            template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'checkoutLogin.emailAddress.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        name=\"email\"\n        class=\"form-control\"\n        formControlName=\"email\"\n        placeholder=\"{{\n          'checkoutLogin.emailAddress.placeholder' | cxTranslate\n        }}\"\n        [class.is-invalid]=\"isNotValid('email')\"\n      />\n      <div class=\"invalid-feedback\" *ngIf=\"isNotValid('email')\">\n        <span>{{ 'checkoutLogin.emailIsRequired' | cxTranslate }}</span>\n      </div>\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'checkoutLogin.confirmEmail.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        name=\"emailConfirmation\"\n        class=\"form-control\"\n        formControlName=\"emailConfirmation\"\n        placeholder=\"{{\n          'checkoutLogin.confirmEmail.placeholder' | cxTranslate\n        }}\"\n        [class.is-invalid]=\"isEmailConfirmInvalid()\"\n      />\n      <div class=\"invalid-feedback\" *ngIf=\"isEmailConfirmInvalid()\">\n        <span>{{ 'checkoutLogin.emailsMustMatch' | cxTranslate }}</span>\n      </div>\n    </label>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-block btn-primary\">\n    {{ 'checkoutLogin.continue' | cxTranslate }}\n  </button>\n</form>\n"
        })
    ], CheckoutLoginComponent);
    return CheckoutLoginComponent;
}());
export { CheckoutLoginComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvdXNlci9jaGVja291dC1sb2dpbi9jaGVja291dC1sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUNMLGVBQWUsRUFDZixXQUFXLEVBQ1gsU0FBUyxFQUNULFVBQVUsR0FDWCxNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQU0vRjtJQWFFLGdDQUNZLFdBQXdCLEVBQ3hCLG1CQUF3QyxFQUN4QyxpQkFBb0M7UUFGcEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBZmhELFNBQUksR0FBYyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FDdEM7WUFDRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3ZFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQy9DLEVBQ0QsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUNoQyxDQUFDO1FBSU0sa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFNM0IsQ0FBQztJQUVKLDJDQUFVLEdBQVYsVUFBVyxlQUF1QjtRQUNoQyxPQUFPLFNBQVMsQ0FBQyxlQUFlLENBQzlCLElBQUksQ0FBQyxJQUFJLEVBQ1QsZUFBZSxFQUNmLElBQUksQ0FBQyxhQUFhLENBQ25CLENBQUM7SUFDSixDQUFDO0lBRUQsc0RBQXFCLEdBQXJCO1FBQ0UsT0FBTyxDQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUM5QixDQUFDLElBQUksQ0FBQyxhQUFhO2dCQUNqQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsT0FBTztvQkFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUMvQyxDQUFDO0lBQ0osQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFBQSxpQkFpQkM7UUFoQkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFFMUIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNyQixPQUFPO1NBQ1I7UUFFRCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDcEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV2QyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNiLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUM7Z0JBQzdELElBQUksS0FBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxFQUFFO29CQUN4QyxLQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ3JDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCw0Q0FBVyxHQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFTyw0Q0FBVyxHQUFuQixVQUFvQixlQUFnQztRQUNsRCxPQUFPLGVBQWUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSztZQUN2QyxlQUFlLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsS0FBSztZQUM5QyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO1lBQ3BCLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDWCxDQUFDOztnQkFwRHdCLFdBQVc7Z0JBQ0gsbUJBQW1CO2dCQUNyQixpQkFBaUI7O0lBaEJyQyxzQkFBc0I7UUFKbEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3Qix5K0NBQThDO1NBQy9DLENBQUM7T0FDVyxzQkFBc0IsQ0FtRWxDO0lBQUQsNkJBQUM7Q0FBQSxBQW5FRCxJQW1FQztTQW5FWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWJzdHJhY3RDb250cm9sLFxuICBGb3JtQnVpbGRlcixcbiAgRm9ybUdyb3VwLFxuICBWYWxpZGF0b3JzLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBY3RpdmVDYXJ0U2VydmljZSwgQXV0aFJlZGlyZWN0U2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZvcm1VdGlscyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC91dGlscy9mb3Jtcy9mb3JtLXV0aWxzJztcbmltcG9ydCB7IEN1c3RvbUZvcm1WYWxpZGF0b3JzIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3V0aWxzL3ZhbGlkYXRvcnMvY3VzdG9tLWZvcm0tdmFsaWRhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNoZWNrb3V0LWxvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoZWNrb3V0LWxvZ2luLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIGZvcm06IEZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoXG4gICAge1xuICAgICAgZW1haWw6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIEN1c3RvbUZvcm1WYWxpZGF0b3JzLmVtYWlsVmFsaWRhdG9yXV0sXG4gICAgICBlbWFpbENvbmZpcm1hdGlvbjogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgIH0sXG4gICAgeyB2YWxpZGF0b3I6IHRoaXMuZW1haWxzTWF0Y2ggfVxuICApO1xuXG4gIHN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgc3VibWl0Q2xpY2tlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgcHJvdGVjdGVkIGF1dGhSZWRpcmVjdFNlcnZpY2U6IEF1dGhSZWRpcmVjdFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZVxuICApIHt9XG5cbiAgaXNOb3RWYWxpZChmb3JtQ29udHJvbE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBGb3JtVXRpbHMuaXNOb3RWYWxpZEZpZWxkKFxuICAgICAgdGhpcy5mb3JtLFxuICAgICAgZm9ybUNvbnRyb2xOYW1lLFxuICAgICAgdGhpcy5zdWJtaXRDbGlja2VkXG4gICAgKTtcbiAgfVxuXG4gIGlzRW1haWxDb25maXJtSW52YWxpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5mb3JtLmhhc0Vycm9yKCdOb3RFcXVhbCcpICYmXG4gICAgICAodGhpcy5zdWJtaXRDbGlja2VkIHx8XG4gICAgICAgICh0aGlzLmZvcm0uZ2V0KCdlbWFpbENvbmZpcm1hdGlvbicpLnRvdWNoZWQgJiZcbiAgICAgICAgICB0aGlzLmZvcm0uZ2V0KCdlbWFpbENvbmZpcm1hdGlvbicpLmRpcnR5KSlcbiAgICApO1xuICB9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgdGhpcy5zdWJtaXRDbGlja2VkID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLmZvcm0uaW52YWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGVtYWlsID0gdGhpcy5mb3JtLnZhbHVlLmVtYWlsO1xuICAgIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuYWRkRW1haWwoZW1haWwpO1xuXG4gICAgaWYgKCF0aGlzLnN1Yikge1xuICAgICAgdGhpcy5zdWIgPSB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmdldEFzc2lnbmVkVXNlcigpLnN1YnNjcmliZShfID0+IHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuaXNHdWVzdENhcnQoKSkge1xuICAgICAgICAgIHRoaXMuYXV0aFJlZGlyZWN0U2VydmljZS5yZWRpcmVjdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdWIpIHtcbiAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBlbWFpbHNNYXRjaChhYnN0cmFjdENvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgTm90RXF1YWw6IGJvb2xlYW4gfSB7XG4gICAgcmV0dXJuIGFic3RyYWN0Q29udHJvbC5nZXQoJ2VtYWlsJykudmFsdWUgIT09XG4gICAgICBhYnN0cmFjdENvbnRyb2wuZ2V0KCdlbWFpbENvbmZpcm1hdGlvbicpLnZhbHVlXG4gICAgICA/IHsgTm90RXF1YWw6IHRydWUgfVxuICAgICAgOiBudWxsO1xuICB9XG59XG4iXX0=