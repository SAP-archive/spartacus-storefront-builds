import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActiveCartService, AuthRedirectService } from '@spartacus/core';
import { CustomFormValidators } from '../../../shared/utils/validators/custom-form-validators';
var CheckoutLoginComponent = /** @class */ (function () {
    function CheckoutLoginComponent(formBuilder, authRedirectService, activeCartService) {
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
    CheckoutLoginComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.checkoutLoginForm.valid) {
            var email = this.checkoutLoginForm.get('email').value;
            this.activeCartService.addEmail(email);
            if (!this.sub) {
                this.sub = this.activeCartService.getAssignedUser().subscribe(function () {
                    if (_this.activeCartService.isGuestCart()) {
                        _this.authRedirectService.redirect();
                    }
                });
            }
        }
        else {
            this.checkoutLoginForm.markAllAsTouched();
        }
    };
    CheckoutLoginComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    CheckoutLoginComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: AuthRedirectService },
        { type: ActiveCartService }
    ]; };
    CheckoutLoginComponent = __decorate([
        Component({
            selector: 'cx-checkout-login',
            template: "<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"checkoutLoginForm\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'checkoutLogin.emailAddress.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        name=\"email\"\n        class=\"form-control\"\n        formControlName=\"email\"\n        placeholder=\"{{\n          'checkoutLogin.emailAddress.placeholder' | cxTranslate\n        }}\"\n      />\n      <cx-form-errors\n        [control]=\"checkoutLoginForm.get('email')\"\n      ></cx-form-errors>\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'checkoutLogin.confirmEmail.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        name=\"emailConfirmation\"\n        class=\"form-control\"\n        formControlName=\"emailConfirmation\"\n        placeholder=\"{{\n          'checkoutLogin.confirmEmail.placeholder' | cxTranslate\n        }}\"\n      />\n      <cx-form-errors\n        [control]=\"checkoutLoginForm.get('emailConfirmation')\"\n      ></cx-form-errors>\n    </label>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-block btn-primary\">\n    {{ 'checkoutLogin.continue' | cxTranslate }}\n  </button>\n</form>\n"
        })
    ], CheckoutLoginComponent);
    return CheckoutLoginComponent;
}());
export { CheckoutLoginComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvdXNlci9jaGVja291dC1sb2dpbi9jaGVja291dC1sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFNL0Y7SUFlRSxnQ0FDWSxXQUF3QixFQUN4QixtQkFBd0MsRUFDeEMsaUJBQW9DO1FBRnBDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQWpCaEQsc0JBQWlCLEdBQWMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQ25EO1lBQ0UsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN2RSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMvQyxFQUNEO1lBQ0UsVUFBVSxFQUFFLG9CQUFvQixDQUFDLGVBQWUsQ0FDOUMsT0FBTyxFQUNQLG1CQUFtQixDQUNwQjtTQUNGLENBQ0YsQ0FBQztJQU9DLENBQUM7SUFFSix5Q0FBUSxHQUFSO1FBQUEsaUJBZUM7UUFkQyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUU7WUFDaEMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDeEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUV2QyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDYixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQzVELElBQUksS0FBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxFQUFFO3dCQUN4QyxLQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUM7cUJBQ3JDO2dCQUNILENBQUMsQ0FBQyxDQUFDO2FBQ0o7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDM0M7SUFDSCxDQUFDO0lBRUQsNENBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDOztnQkExQndCLFdBQVc7Z0JBQ0gsbUJBQW1CO2dCQUNyQixpQkFBaUI7O0lBbEJyQyxzQkFBc0I7UUFKbEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixveUNBQThDO1NBQy9DLENBQUM7T0FDVyxzQkFBc0IsQ0EyQ2xDO0lBQUQsNkJBQUM7Q0FBQSxBQTNDRCxJQTJDQztTQTNDWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFjdGl2ZUNhcnRTZXJ2aWNlLCBBdXRoUmVkaXJlY3RTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ3VzdG9tRm9ybVZhbGlkYXRvcnMgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvdXRpbHMvdmFsaWRhdG9ycy9jdXN0b20tZm9ybS12YWxpZGF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2hlY2tvdXQtbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tvdXQtbG9naW4uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgY2hlY2tvdXRMb2dpbkZvcm06IEZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoXG4gICAge1xuICAgICAgZW1haWw6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIEN1c3RvbUZvcm1WYWxpZGF0b3JzLmVtYWlsVmFsaWRhdG9yXV0sXG4gICAgICBlbWFpbENvbmZpcm1hdGlvbjogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgIH0sXG4gICAge1xuICAgICAgdmFsaWRhdG9yczogQ3VzdG9tRm9ybVZhbGlkYXRvcnMuZW1haWxzTXVzdE1hdGNoKFxuICAgICAgICAnZW1haWwnLFxuICAgICAgICAnZW1haWxDb25maXJtYXRpb24nXG4gICAgICApLFxuICAgIH1cbiAgKTtcbiAgc3ViOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICBwcm90ZWN0ZWQgYXV0aFJlZGlyZWN0U2VydmljZTogQXV0aFJlZGlyZWN0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlXG4gICkge31cblxuICBvblN1Ym1pdCgpIHtcbiAgICBpZiAodGhpcy5jaGVja291dExvZ2luRm9ybS52YWxpZCkge1xuICAgICAgY29uc3QgZW1haWwgPSB0aGlzLmNoZWNrb3V0TG9naW5Gb3JtLmdldCgnZW1haWwnKS52YWx1ZTtcbiAgICAgIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuYWRkRW1haWwoZW1haWwpO1xuXG4gICAgICBpZiAoIXRoaXMuc3ViKSB7XG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5nZXRBc3NpZ25lZFVzZXIoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmlzR3Vlc3RDYXJ0KCkpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aFJlZGlyZWN0U2VydmljZS5yZWRpcmVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRMb2dpbkZvcm0ubWFya0FsbEFzVG91Y2hlZCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1Yikge1xuICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==