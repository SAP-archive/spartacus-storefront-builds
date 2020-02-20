import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { AuthRedirectService, CartService } from '@spartacus/core';
import { FormUtils } from '../../../shared/utils/forms/form-utils';
import { CustomFormValidators } from '../../../shared/utils/validators/custom-form-validators';
var CheckoutLoginComponent = /** @class */ (function () {
    function CheckoutLoginComponent(formBuilder, cartService, authRedirectService) {
        this.formBuilder = formBuilder;
        this.cartService = cartService;
        this.authRedirectService = authRedirectService;
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
        this.cartService.addEmail(email);
        if (!this.sub) {
            this.sub = this.cartService.getAssignedUser().subscribe(function (_) {
                if (_this.cartService.isGuestCart()) {
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
        { type: CartService },
        { type: AuthRedirectService }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvdXNlci9jaGVja291dC1sb2dpbi9jaGVja291dC1sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUNMLGVBQWUsRUFDZixXQUFXLEVBQ1gsU0FBUyxFQUNULFVBQVUsR0FDWCxNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVuRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDbkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFNL0Y7SUFhRSxnQ0FDVSxXQUF3QixFQUN4QixXQUF3QixFQUN4QixtQkFBd0M7UUFGeEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQWZsRCxTQUFJLEdBQWMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQ3RDO1lBQ0UsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN2RSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMvQyxFQUNELEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FDaEMsQ0FBQztRQUlNLGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBTTNCLENBQUM7SUFFSiwyQ0FBVSxHQUFWLFVBQVcsZUFBdUI7UUFDaEMsT0FBTyxTQUFTLENBQUMsZUFBZSxDQUM5QixJQUFJLENBQUMsSUFBSSxFQUNULGVBQWUsRUFDZixJQUFJLENBQUMsYUFBYSxDQUNuQixDQUFDO0lBQ0osQ0FBQztJQUVELHNEQUFxQixHQUFyQjtRQUNFLE9BQU8sQ0FDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDOUIsQ0FBQyxJQUFJLENBQUMsYUFBYTtnQkFDakIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE9BQU87b0JBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDL0MsQ0FBQztJQUNKLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQUEsaUJBaUJDO1FBaEJDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBRTFCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDckIsT0FBTztTQUNSO1FBRUQsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWpDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2IsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUM7Z0JBQ3ZELElBQUksS0FBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsRUFBRTtvQkFDbEMsS0FBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNyQztZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsNENBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRU8sNENBQVcsR0FBbkIsVUFBb0IsZUFBZ0M7UUFDbEQsT0FBTyxlQUFlLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUs7WUFDdkMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEtBQUs7WUFDOUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtZQUNwQixDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ1gsQ0FBQzs7Z0JBcERzQixXQUFXO2dCQUNYLFdBQVc7Z0JBQ0gsbUJBQW1COztJQWhCdkMsc0JBQXNCO1FBSmxDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IseStDQUE4QztTQUMvQyxDQUFDO09BQ1csc0JBQXNCLENBbUVsQztJQUFELDZCQUFDO0NBQUEsQUFuRUQsSUFtRUM7U0FuRVksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFic3RyYWN0Q29udHJvbCxcbiAgRm9ybUJ1aWxkZXIsXG4gIEZvcm1Hcm91cCxcbiAgVmFsaWRhdG9ycyxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQXV0aFJlZGlyZWN0U2VydmljZSwgQ2FydFNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGb3JtVXRpbHMgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvdXRpbHMvZm9ybXMvZm9ybS11dGlscyc7XG5pbXBvcnQgeyBDdXN0b21Gb3JtVmFsaWRhdG9ycyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC91dGlscy92YWxpZGF0b3JzL2N1c3RvbS1mb3JtLXZhbGlkYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jaGVja291dC1sb2dpbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGVja291dC1sb2dpbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0TG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBmb3JtOiBGb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKFxuICAgIHtcbiAgICAgIGVtYWlsOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBDdXN0b21Gb3JtVmFsaWRhdG9ycy5lbWFpbFZhbGlkYXRvcl1dLFxuICAgICAgZW1haWxDb25maXJtYXRpb246IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICB9LFxuICAgIHsgdmFsaWRhdG9yOiB0aGlzLmVtYWlsc01hdGNoIH1cbiAgKTtcblxuICBzdWI6IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIHN1Ym1pdENsaWNrZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhSZWRpcmVjdFNlcnZpY2U6IEF1dGhSZWRpcmVjdFNlcnZpY2VcbiAgKSB7fVxuXG4gIGlzTm90VmFsaWQoZm9ybUNvbnRyb2xOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gRm9ybVV0aWxzLmlzTm90VmFsaWRGaWVsZChcbiAgICAgIHRoaXMuZm9ybSxcbiAgICAgIGZvcm1Db250cm9sTmFtZSxcbiAgICAgIHRoaXMuc3VibWl0Q2xpY2tlZFxuICAgICk7XG4gIH1cblxuICBpc0VtYWlsQ29uZmlybUludmFsaWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZm9ybS5oYXNFcnJvcignTm90RXF1YWwnKSAmJlxuICAgICAgKHRoaXMuc3VibWl0Q2xpY2tlZCB8fFxuICAgICAgICAodGhpcy5mb3JtLmdldCgnZW1haWxDb25maXJtYXRpb24nKS50b3VjaGVkICYmXG4gICAgICAgICAgdGhpcy5mb3JtLmdldCgnZW1haWxDb25maXJtYXRpb24nKS5kaXJ0eSkpXG4gICAgKTtcbiAgfVxuXG4gIG9uU3VibWl0KCkge1xuICAgIHRoaXMuc3VibWl0Q2xpY2tlZCA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5mb3JtLmludmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBlbWFpbCA9IHRoaXMuZm9ybS52YWx1ZS5lbWFpbDtcbiAgICB0aGlzLmNhcnRTZXJ2aWNlLmFkZEVtYWlsKGVtYWlsKTtcblxuICAgIGlmICghdGhpcy5zdWIpIHtcbiAgICAgIHRoaXMuc3ViID0gdGhpcy5jYXJ0U2VydmljZS5nZXRBc3NpZ25lZFVzZXIoKS5zdWJzY3JpYmUoXyA9PiB7XG4gICAgICAgIGlmICh0aGlzLmNhcnRTZXJ2aWNlLmlzR3Vlc3RDYXJ0KCkpIHtcbiAgICAgICAgICB0aGlzLmF1dGhSZWRpcmVjdFNlcnZpY2UucmVkaXJlY3QoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3ViKSB7XG4gICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZW1haWxzTWF0Y2goYWJzdHJhY3RDb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IE5vdEVxdWFsOiBib29sZWFuIH0ge1xuICAgIHJldHVybiBhYnN0cmFjdENvbnRyb2wuZ2V0KCdlbWFpbCcpLnZhbHVlICE9PVxuICAgICAgYWJzdHJhY3RDb250cm9sLmdldCgnZW1haWxDb25maXJtYXRpb24nKS52YWx1ZVxuICAgICAgPyB7IE5vdEVxdWFsOiB0cnVlIH1cbiAgICAgIDogbnVsbDtcbiAgfVxufVxuIl19