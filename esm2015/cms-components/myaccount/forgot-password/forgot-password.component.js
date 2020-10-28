import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthConfigService, OAuthFlow, RoutingService, UserService, } from '@spartacus/core';
import { CustomFormValidators } from '../../../shared/utils/validators/custom-form-validators';
export class ForgotPasswordComponent {
    constructor(fb, userService, routingService, authConfigService) {
        this.fb = fb;
        this.userService = userService;
        this.routingService = routingService;
        this.authConfigService = authConfigService;
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
            if (this.authConfigService.getOAuthFlow() ===
                OAuthFlow.ResourceOwnerPasswordFlow) {
                this.routingService.go({ cxRoute: 'login' });
            }
        }
        else {
            this.forgotPasswordForm.markAllAsTouched();
        }
    }
}
ForgotPasswordComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-forgot-password',
                template: "<form\n  (ngSubmit)=\"requestForgotPasswordEmail()\"\n  [formGroup]=\"forgotPasswordForm\"\n>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'forgottenPassword.emailAddress.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        class=\"form-control\"\n        placeholder=\"{{\n          'forgottenPassword.emailAddress.placeholder' | cxTranslate\n        }}\"\n        formControlName=\"userEmail\"\n      />\n      <cx-form-errors\n        [control]=\"forgotPasswordForm.get('userEmail')\"\n      ></cx-form-errors>\n    </label>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-block btn-primary\">\n    {{ 'common.submit' | cxTranslate }}\n  </button>\n  <a\n    class=\"btn btn-block btn-secondary\"\n    [routerLink]=\"{ cxRoute: 'login' } | cxUrl\"\n    >{{ 'common.cancel' | cxTranslate }}</a\n  >\n</form>\n"
            },] }
];
ForgotPasswordComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: UserService },
    { type: RoutingService },
    { type: AuthConfigService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL215YWNjb3VudC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsY0FBYyxFQUNkLFdBQVcsR0FDWixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBSy9GLE1BQU0sT0FBTyx1QkFBdUI7SUFHbEMsWUFDWSxFQUFlLEVBQ2YsV0FBd0IsRUFDeEIsY0FBOEIsRUFDOUIsaUJBQW9DO1FBSHBDLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUM3QyxDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN0QyxTQUFTLEVBQUU7Z0JBQ1QsRUFBRTtnQkFDRixDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsb0JBQW9CLENBQUMsY0FBYyxDQUFDO2FBQzNEO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDBCQUEwQjtRQUN4QixJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUU7WUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQywwQkFBMEIsQ0FDekMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxTQUFTLENBQ3hDLENBQUM7WUFDRixJQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUU7Z0JBQ3JDLFNBQVMsQ0FBQyx5QkFBeUIsRUFDbkM7Z0JBQ0EsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQzthQUM5QztTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUM1QztJQUNILENBQUM7OztZQXJDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsNjRCQUErQzthQUNoRDs7O1lBWFEsV0FBVztZQUtsQixXQUFXO1lBRFgsY0FBYztZQUZkLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQXV0aENvbmZpZ1NlcnZpY2UsXG4gIE9BdXRoRmxvdyxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFVzZXJTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ3VzdG9tRm9ybVZhbGlkYXRvcnMgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvdXRpbHMvdmFsaWRhdG9ycy9jdXN0b20tZm9ybS12YWxpZGF0b3JzJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWZvcmdvdC1wYXNzd29yZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBGb3Jnb3RQYXNzd29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGZvcmdvdFBhc3N3b3JkRm9ybTogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJvdGVjdGVkIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhdXRoQ29uZmlnU2VydmljZTogQXV0aENvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZm9yZ290UGFzc3dvcmRGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICB1c2VyRW1haWw6IFtcbiAgICAgICAgJycsXG4gICAgICAgIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBDdXN0b21Gb3JtVmFsaWRhdG9ycy5lbWFpbFZhbGlkYXRvcl0sXG4gICAgICBdLFxuICAgIH0pO1xuICB9XG5cbiAgcmVxdWVzdEZvcmdvdFBhc3N3b3JkRW1haWwoKSB7XG4gICAgaWYgKHRoaXMuZm9yZ290UGFzc3dvcmRGb3JtLnZhbGlkKSB7XG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlcXVlc3RGb3Jnb3RQYXNzd29yZEVtYWlsKFxuICAgICAgICB0aGlzLmZvcmdvdFBhc3N3b3JkRm9ybS52YWx1ZS51c2VyRW1haWxcbiAgICAgICk7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuYXV0aENvbmZpZ1NlcnZpY2UuZ2V0T0F1dGhGbG93KCkgPT09XG4gICAgICAgIE9BdXRoRmxvdy5SZXNvdXJjZU93bmVyUGFzc3dvcmRGbG93XG4gICAgICApIHtcbiAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdsb2dpbicgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm9yZ290UGFzc3dvcmRGb3JtLm1hcmtBbGxBc1RvdWNoZWQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==