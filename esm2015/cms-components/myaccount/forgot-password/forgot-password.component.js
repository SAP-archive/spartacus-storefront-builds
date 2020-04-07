import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoutingService, UserService } from '@spartacus/core';
import { CustomFormValidators } from '../../../shared/utils/validators/custom-form-validators';
let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(fb, userService, routingService) {
        this.fb = fb;
        this.userService = userService;
        this.routingService = routingService;
    }
    ngOnInit() {
        this.forgotPasswordForm = this.fb.group({
            userEmail: [
                '',
                [Validators.required, CustomFormValidators.emailValidator],
            ],
        });
    }
    requestForgotPasswordEmail() {
        if (this.forgotPasswordForm.valid) {
            this.userService.requestForgotPasswordEmail(this.forgotPasswordForm.value.userEmail);
            this.routingService.go({ cxRoute: 'login' });
        }
        else {
            this.forgotPasswordForm.markAllAsTouched();
        }
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: UserService },
    { type: RoutingService }
];
ForgotPasswordComponent = __decorate([
    Component({
        selector: 'cx-forgot-password',
        template: "<form\n  (ngSubmit)=\"requestForgotPasswordEmail()\"\n  [formGroup]=\"forgotPasswordForm\"\n>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'forgottenPassword.emailAddress.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        class=\"form-control\"\n        placeholder=\"{{\n          'forgottenPassword.emailAddress.placeholder' | cxTranslate\n        }}\"\n        formControlName=\"userEmail\"\n      />\n      <cx-form-errors\n        [control]=\"forgotPasswordForm.get('userEmail')\"\n      ></cx-form-errors>\n    </label>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-block btn-primary\">\n    {{ 'common.submit' | cxTranslate }}\n  </button>\n  <a\n    class=\"btn btn-block btn-secondary\"\n    [routerLink]=\"{ cxRoute: 'login' } | cxUrl\"\n    >{{ 'common.cancel' | cxTranslate }}</a\n  >\n</form>\n"
    })
], ForgotPasswordComponent);
export { ForgotPasswordComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBSy9GLElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0lBR2xDLFlBQ1UsRUFBZSxFQUNmLFdBQXdCLEVBQ3hCLGNBQThCO1FBRjlCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDckMsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDdEMsU0FBUyxFQUFFO2dCQUNULEVBQUU7Z0JBQ0YsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLG9CQUFvQixDQUFDLGNBQWMsQ0FBQzthQUMzRDtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwwQkFBMEI7UUFDeEIsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsMEJBQTBCLENBQ3pDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUN4QyxDQUFDO1lBQ0YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUM5QzthQUFNO1lBQ0wsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDNUM7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUF4QmUsV0FBVztZQUNGLFdBQVc7WUFDUixjQUFjOztBQU43Qix1QkFBdUI7SUFKbkMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG9CQUFvQjtRQUM5Qiw2NEJBQStDO0tBQ2hELENBQUM7R0FDVyx1QkFBdUIsQ0E0Qm5DO1NBNUJZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UsIFVzZXJTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEN1c3RvbUZvcm1WYWxpZGF0b3JzIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3V0aWxzL3ZhbGlkYXRvcnMvY3VzdG9tLWZvcm0tdmFsaWRhdG9ycyc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1mb3Jnb3QtcGFzc3dvcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRm9yZ290UGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBmb3Jnb3RQYXNzd29yZEZvcm06IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5mb3Jnb3RQYXNzd29yZEZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIHVzZXJFbWFpbDogW1xuICAgICAgICAnJyxcbiAgICAgICAgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIEN1c3RvbUZvcm1WYWxpZGF0b3JzLmVtYWlsVmFsaWRhdG9yXSxcbiAgICAgIF0sXG4gICAgfSk7XG4gIH1cblxuICByZXF1ZXN0Rm9yZ290UGFzc3dvcmRFbWFpbCgpIHtcbiAgICBpZiAodGhpcy5mb3Jnb3RQYXNzd29yZEZvcm0udmFsaWQpIHtcbiAgICAgIHRoaXMudXNlclNlcnZpY2UucmVxdWVzdEZvcmdvdFBhc3N3b3JkRW1haWwoXG4gICAgICAgIHRoaXMuZm9yZ290UGFzc3dvcmRGb3JtLnZhbHVlLnVzZXJFbWFpbFxuICAgICAgKTtcbiAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAnbG9naW4nIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvcmdvdFBhc3N3b3JkRm9ybS5tYXJrQWxsQXNUb3VjaGVkKCk7XG4gICAgfVxuICB9XG59XG4iXX0=