import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthRedirectService, AuthService, GlobalMessageService, GlobalMessageType, WindowRef, } from '@spartacus/core';
import { CustomFormValidators } from '../../../shared/utils/validators/custom-form-validators';
import { CheckoutConfigService } from '../../checkout/services/checkout-config.service';
let LoginFormComponent = class LoginFormComponent {
    constructor(auth, globalMessageService, fb, authRedirectService, winRef, activatedRoute, checkoutConfigService) {
        this.auth = auth;
        this.globalMessageService = globalMessageService;
        this.fb = fb;
        this.authRedirectService = authRedirectService;
        this.winRef = winRef;
        this.activatedRoute = activatedRoute;
        this.checkoutConfigService = checkoutConfigService;
        this.loginAsGuest = false;
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.form = this.fb.group({
            userId: ['', [Validators.required, CustomFormValidators.emailValidator]],
            password: ['', Validators.required],
        });
        if (this.checkoutConfigService.isGuestCheckout()) {
            this.loginAsGuest = (_c = (_b = (_a = this.activatedRoute) === null || _a === void 0 ? void 0 : _a.snapshot) === null || _b === void 0 ? void 0 : _b.queryParams) === null || _c === void 0 ? void 0 : _c['forced'];
        }
        const prefilledEmail = (_g = (_f = (_e = (_d = this.winRef) === null || _d === void 0 ? void 0 : _d.nativeWindow) === null || _e === void 0 ? void 0 : _e.history) === null || _f === void 0 ? void 0 : _f.state) === null || _g === void 0 ? void 0 : _g['newUid'];
        if ((_h = prefilledEmail) === null || _h === void 0 ? void 0 : _h.length) {
            this.prefillForm('userId', prefilledEmail);
        }
    }
    login() {
        if (this.form.valid) {
            this.submitLogin();
        }
        else {
            this.markFormAsTouched();
        }
    }
    submitLogin() {
        const { userId, password } = this.form.controls;
        this.auth.authorize(userId.value.toLowerCase(), // backend accepts lowercase emails only
        password.value);
        if (!this.sub) {
            this.sub = this.auth.getUserToken().subscribe(data => {
                if (data && data.access_token) {
                    this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
                    this.authRedirectService.redirect();
                }
            });
        }
    }
    markFormAsTouched() {
        Object.keys(this.form.controls).forEach(key => {
            this.form.controls[key].markAsTouched();
        });
    }
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
    prefillForm(field, value) {
        this.form.patchValue({
            [field]: value,
        });
        this.form.get(field).markAsTouched(); // this action will check field validity on load
    }
};
LoginFormComponent.ctorParameters = () => [
    { type: AuthService },
    { type: GlobalMessageService },
    { type: FormBuilder },
    { type: AuthRedirectService },
    { type: WindowRef },
    { type: ActivatedRoute },
    { type: CheckoutConfigService }
];
LoginFormComponent = __decorate([
    Component({
        selector: 'cx-login-form',
        template: "<form (submit)=\"login()\" [formGroup]=\"form\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'loginForm.emailAddress.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        class=\"form-control\"\n        [class.is-invalid]=\"\n          form.controls['userId'].invalid &&\n          (form.controls['userId'].touched || form.controls['userId'].dirty)\n        \"\n        formControlName=\"userId\"\n        placeholder=\"{{ 'loginForm.emailAddress.placeholder' | cxTranslate }}\"\n      />\n    </label>\n    <div\n      class=\"invalid-feedback\"\n      *ngIf=\"\n        form.controls['userId'].invalid &&\n        (form.controls['userId'].touched || form.controls['userId'].dirty)\n      \"\n    >\n      <span>{{ 'loginForm.wrongEmailFormat' | cxTranslate }}</span>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'loginForm.password.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"password\"\n        class=\"form-control\"\n        placeholder=\"{{ 'loginForm.password.placeholder' | cxTranslate }}\"\n        formControlName=\"password\"\n      />\n    </label>\n  </div>\n  <p>\n    <a\n      [routerLink]=\"{ cxRoute: 'forgotPassword' } | cxUrl\"\n      aria-controls=\"reset-password\"\n      class=\"btn-link\"\n      >{{ 'loginForm.forgotPassword' | cxTranslate }}</a\n    >\n  </p>\n\n  <button type=\"submit\" class=\"btn btn-block btn-primary\">\n    {{ 'loginForm.signIn' | cxTranslate }}\n  </button>\n</form>\n\n<div class=\"register\">\n  <h3 class=\"cx-section-title cx-section-title-alt\">\n    {{ 'loginForm.dontHaveAccount' | cxTranslate }}\n  </h3>\n\n  <ng-container *ngIf=\"!loginAsGuest\">\n    <a\n      [routerLink]=\"{ cxRoute: 'register' } | cxUrl\"\n      class=\"btn btn-block btn-secondary btn-register\"\n      >{{ 'loginForm.register' | cxTranslate }}</a\n    >\n  </ng-container>\n\n  <ng-container *ngIf=\"loginAsGuest\">\n    <a\n      [routerLink]=\"{ cxRoute: 'checkoutLogin' } | cxUrl\"\n      class=\"btn btn-block btn-secondary btn-guest\"\n      >{{ 'loginForm.guestCheckout' | cxTranslate }}</a\n    >\n  </ng-container>\n</div>\n"
    })
], LoginFormComponent);
export { LoginFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy91c2VyL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLFdBQVcsRUFDWCxvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLFNBQVMsR0FDVixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBTXhGLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBSzdCLFlBQ1ksSUFBaUIsRUFDakIsb0JBQTBDLEVBQzFDLEVBQWUsRUFDZixtQkFBd0MsRUFDeEMsTUFBaUIsRUFDakIsY0FBOEIsRUFDOUIscUJBQTRDO1FBTjVDLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2Ysd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBVHhELGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBVWxCLENBQUM7SUFFSixRQUFROztRQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDeEIsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN4RSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUNwQyxDQUFDLENBQUM7UUFFSCxJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLEVBQUUsRUFBRTtZQUNoRCxJQUFJLENBQUMsWUFBWSxxQkFBRyxJQUFJLENBQUMsY0FBYywwQ0FBRSxRQUFRLDBDQUFFLFdBQVcsMENBQzVELFFBQVEsQ0FDVCxDQUFDO1NBQ0g7UUFFRCxNQUFNLGNBQWMsMkJBQUcsSUFBSSxDQUFDLE1BQU0sMENBQUUsWUFBWSwwQ0FBRSxPQUFPLDBDQUFFLEtBQUssMENBQzlELFFBQVEsQ0FDVCxDQUFDO1FBRUYsVUFBSSxjQUFjLDBDQUFFLE1BQU0sRUFBRTtZQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxjQUFjLENBQUMsQ0FBQztTQUM1QztJQUNILENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNuQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7YUFBTTtZQUNMLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVPLFdBQVc7UUFDakIsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FDakIsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSx3Q0FBd0M7UUFDcEUsUUFBUSxDQUFDLEtBQUssQ0FDZixDQUFDO1FBRUYsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDYixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNuRCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO29CQUM3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUNuRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ3JDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFTyxpQkFBaUI7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFTyxXQUFXLENBQUMsS0FBYSxFQUFFLEtBQWE7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDbkIsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLO1NBQ2YsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxnREFBZ0Q7SUFDeEYsQ0FBQztDQUNGLENBQUE7O1lBMUVtQixXQUFXO1lBQ0ssb0JBQW9CO1lBQ3RDLFdBQVc7WUFDTSxtQkFBbUI7WUFDaEMsU0FBUztZQUNELGNBQWM7WUFDUCxxQkFBcUI7O0FBWjdDLGtCQUFrQjtJQUo5QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZUFBZTtRQUN6Qiw0c0VBQTBDO0tBQzNDLENBQUM7R0FDVyxrQkFBa0IsQ0FnRjlCO1NBaEZZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBBdXRoUmVkaXJlY3RTZXJ2aWNlLFxuICBBdXRoU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxuICBXaW5kb3dSZWYsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEN1c3RvbUZvcm1WYWxpZGF0b3JzIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3V0aWxzL3ZhbGlkYXRvcnMvY3VzdG9tLWZvcm0tdmFsaWRhdG9ycyc7XG5pbXBvcnQgeyBDaGVja291dENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jaGVja291dC9zZXJ2aWNlcy9jaGVja291dC1jb25maWcuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWxvZ2luLWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4tZm9ybS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc3ViOiBTdWJzY3JpcHRpb247XG4gIGZvcm06IEZvcm1Hcm91cDtcbiAgbG9naW5Bc0d1ZXN0ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGF1dGg6IEF1dGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGZiOiBGb3JtQnVpbGRlcixcbiAgICBwcm90ZWN0ZWQgYXV0aFJlZGlyZWN0U2VydmljZTogQXV0aFJlZGlyZWN0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWYsXG4gICAgcHJvdGVjdGVkIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRDb25maWdTZXJ2aWNlOiBDaGVja291dENvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgdXNlcklkOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBDdXN0b21Gb3JtVmFsaWRhdG9ycy5lbWFpbFZhbGlkYXRvcl1dLFxuICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5jaGVja291dENvbmZpZ1NlcnZpY2UuaXNHdWVzdENoZWNrb3V0KCkpIHtcbiAgICAgIHRoaXMubG9naW5Bc0d1ZXN0ID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZT8uc25hcHNob3Q/LnF1ZXJ5UGFyYW1zPy5bXG4gICAgICAgICdmb3JjZWQnXG4gICAgICBdO1xuICAgIH1cblxuICAgIGNvbnN0IHByZWZpbGxlZEVtYWlsID0gdGhpcy53aW5SZWY/Lm5hdGl2ZVdpbmRvdz8uaGlzdG9yeT8uc3RhdGU/LltcbiAgICAgICduZXdVaWQnXG4gICAgXTtcblxuICAgIGlmIChwcmVmaWxsZWRFbWFpbD8ubGVuZ3RoKSB7XG4gICAgICB0aGlzLnByZWZpbGxGb3JtKCd1c2VySWQnLCBwcmVmaWxsZWRFbWFpbCk7XG4gICAgfVxuICB9XG5cbiAgbG9naW4oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZm9ybS52YWxpZCkge1xuICAgICAgdGhpcy5zdWJtaXRMb2dpbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1hcmtGb3JtQXNUb3VjaGVkKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdWJtaXRMb2dpbigpOiB2b2lkIHtcbiAgICBjb25zdCB7IHVzZXJJZCwgcGFzc3dvcmQgfSA9IHRoaXMuZm9ybS5jb250cm9scztcbiAgICB0aGlzLmF1dGguYXV0aG9yaXplKFxuICAgICAgdXNlcklkLnZhbHVlLnRvTG93ZXJDYXNlKCksIC8vIGJhY2tlbmQgYWNjZXB0cyBsb3dlcmNhc2UgZW1haWxzIG9ubHlcbiAgICAgIHBhc3N3b3JkLnZhbHVlXG4gICAgKTtcblxuICAgIGlmICghdGhpcy5zdWIpIHtcbiAgICAgIHRoaXMuc3ViID0gdGhpcy5hdXRoLmdldFVzZXJUb2tlbigpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLnJlbW92ZShHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUik7XG4gICAgICAgICAgdGhpcy5hdXRoUmVkaXJlY3RTZXJ2aWNlLnJlZGlyZWN0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbWFya0Zvcm1Bc1RvdWNoZWQoKTogdm9pZCB7XG4gICAgT2JqZWN0LmtleXModGhpcy5mb3JtLmNvbnRyb2xzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNba2V5XS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdWIpIHtcbiAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBwcmVmaWxsRm9ybShmaWVsZDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgW2ZpZWxkXTogdmFsdWUsXG4gICAgfSk7XG5cbiAgICB0aGlzLmZvcm0uZ2V0KGZpZWxkKS5tYXJrQXNUb3VjaGVkKCk7IC8vIHRoaXMgYWN0aW9uIHdpbGwgY2hlY2sgZmllbGQgdmFsaWRpdHkgb24gbG9hZFxuICB9XG59XG4iXX0=