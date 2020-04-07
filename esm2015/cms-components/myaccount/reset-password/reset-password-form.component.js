import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoutingService, UserService } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { CustomFormValidators } from '../../../shared/utils/validators/custom-form-validators';
let ResetPasswordFormComponent = class ResetPasswordFormComponent {
    constructor(fb, routingService, userService) {
        this.fb = fb;
        this.routingService = routingService;
        this.userService = userService;
        this.subscription = new Subscription();
        this.resetPasswordForm = this.fb.group({
            password: [
                '',
                [Validators.required, CustomFormValidators.passwordValidator],
            ],
            repassword: ['', [Validators.required]],
        }, {
            validators: CustomFormValidators.passwordsMustMatch('password', 'repassword'),
        });
    }
    ngOnInit() {
        this.subscription.add(this.routingService
            .getRouterState()
            .subscribe((state) => (this.token = state.state.queryParams['token'])));
        this.subscription.add(this.userService.isPasswordReset().subscribe((reset) => {
            if (reset) {
                this.routingService.go({ cxRoute: 'login' });
            }
        }));
    }
    resetPassword() {
        if (this.resetPasswordForm.valid) {
            const password = this.resetPasswordForm.get('password').value;
            this.userService.resetPassword(this.token, password);
        }
        else {
            this.resetPasswordForm.markAllAsTouched();
        }
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
ResetPasswordFormComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: RoutingService },
    { type: UserService }
];
ResetPasswordFormComponent = __decorate([
    Component({
        selector: 'cx-reset-password-form',
        template: "<form\n  (ngSubmit)=\"resetPassword()\"\n  [formGroup]=\"resetPasswordForm\"\n  class=\"cx-reset-password-form-component\"\n>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'register.newPassword' | cxTranslate\n      }}</span>\n      <input\n        class=\"form-control\"\n        type=\"password\"\n        name=\"password\"\n        placeholder=\"{{ 'register.password.placeholder' | cxTranslate }}\"\n        formControlName=\"password\"\n      />\n      <cx-form-errors\n        [control]=\"resetPasswordForm.get('password')\"\n      ></cx-form-errors>\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'register.passwordMinRequirements' | cxTranslate\n      }}</span>\n      <input\n        class=\"form-control\"\n        type=\"password\"\n        name=\"confirmpassword\"\n        placeholder=\"{{ 'register.confirmPassword.placeholder' | cxTranslate }}\"\n        formControlName=\"repassword\"\n      />\n      <cx-form-errors\n        [control]=\"resetPasswordForm.get('repassword')\"\n      ></cx-form-errors>\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <button class=\"btn btn-block btn-primary\" type=\"submit\">\n      {{ 'register.resetPassword' | cxTranslate }}\n    </button>\n  </div>\n</form>\n"
    })
], ResetPasswordFormComponent);
export { ResetPasswordFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQU0vRixJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtJQW9CckMsWUFDVSxFQUFlLEVBQ2YsY0FBOEIsRUFDOUIsV0FBd0I7UUFGeEIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQXJCbEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWxDLHNCQUFpQixHQUFjLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUMxQztZQUNFLFFBQVEsRUFBRTtnQkFDUixFQUFFO2dCQUNGLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQzthQUM5RDtZQUNELFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN4QyxFQUNEO1lBQ0UsVUFBVSxFQUFFLG9CQUFvQixDQUFDLGtCQUFrQixDQUNqRCxVQUFVLEVBQ1YsWUFBWSxDQUNiO1NBQ0YsQ0FDRixDQUFDO0lBTUMsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsSUFBSSxDQUFDLGNBQWM7YUFDaEIsY0FBYyxFQUFFO2FBQ2hCLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FDekUsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ3JELElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7YUFDOUM7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUU7WUFDaEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDOUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztTQUN0RDthQUFNO1lBQ0wsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDM0M7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBbkNlLFdBQVc7WUFDQyxjQUFjO1lBQ2pCLFdBQVc7O0FBdkJ2QiwwQkFBMEI7SUFKdEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHdCQUF3QjtRQUNsQyw2MENBQW1EO0tBQ3BELENBQUM7R0FDVywwQkFBMEIsQ0F3RHRDO1NBeERZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSwgVXNlclNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDdXN0b21Gb3JtVmFsaWRhdG9ycyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC91dGlscy92YWxpZGF0b3JzL2N1c3RvbS1mb3JtLXZhbGlkYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1yZXNldC1wYXNzd29yZC1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jlc2V0LXBhc3N3b3JkLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgdG9rZW46IHN0cmluZztcbiAgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIHJlc2V0UGFzc3dvcmRGb3JtOiBGb3JtR3JvdXAgPSB0aGlzLmZiLmdyb3VwKFxuICAgIHtcbiAgICAgIHBhc3N3b3JkOiBbXG4gICAgICAgICcnLFxuICAgICAgICBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgQ3VzdG9tRm9ybVZhbGlkYXRvcnMucGFzc3dvcmRWYWxpZGF0b3JdLFxuICAgICAgXSxcbiAgICAgIHJlcGFzc3dvcmQ6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHZhbGlkYXRvcnM6IEN1c3RvbUZvcm1WYWxpZGF0b3JzLnBhc3N3b3Jkc011c3RNYXRjaChcbiAgICAgICAgJ3Bhc3N3b3JkJyxcbiAgICAgICAgJ3JlcGFzc3dvcmQnXG4gICAgICApLFxuICAgIH1cbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5yb3V0aW5nU2VydmljZVxuICAgICAgICAuZ2V0Um91dGVyU3RhdGUoKVxuICAgICAgICAuc3Vic2NyaWJlKChzdGF0ZSkgPT4gKHRoaXMudG9rZW4gPSBzdGF0ZS5zdGF0ZS5xdWVyeVBhcmFtc1sndG9rZW4nXSkpXG4gICAgKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMudXNlclNlcnZpY2UuaXNQYXNzd29yZFJlc2V0KCkuc3Vic2NyaWJlKChyZXNldCkgPT4ge1xuICAgICAgICBpZiAocmVzZXQpIHtcbiAgICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgY3hSb3V0ZTogJ2xvZ2luJyB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcmVzZXRQYXNzd29yZCgpIHtcbiAgICBpZiAodGhpcy5yZXNldFBhc3N3b3JkRm9ybS52YWxpZCkge1xuICAgICAgY29uc3QgcGFzc3dvcmQgPSB0aGlzLnJlc2V0UGFzc3dvcmRGb3JtLmdldCgncGFzc3dvcmQnKS52YWx1ZTtcbiAgICAgIHRoaXMudXNlclNlcnZpY2UucmVzZXRQYXNzd29yZCh0aGlzLnRva2VuLCBwYXNzd29yZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVzZXRQYXNzd29yZEZvcm0ubWFya0FsbEFzVG91Y2hlZCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==