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
        var _a, _b, _c, _d, _e, _f, _g;
        this.form = this.fb.group({
            userId: ['', [Validators.required, CustomFormValidators.emailValidator]],
            password: ['', Validators.required],
        });
        if (this.checkoutConfigService.isGuestCheckout()) {
            this.loginAsGuest = (_c = (_b = (_a = this.activatedRoute) === null || _a === void 0 ? void 0 : _a.snapshot) === null || _b === void 0 ? void 0 : _b.queryParams) === null || _c === void 0 ? void 0 : _c['forced'];
        }
        const prefilledEmail = (_g = (_f = (_e = (_d = this.winRef) === null || _d === void 0 ? void 0 : _d.nativeWindow) === null || _e === void 0 ? void 0 : _e.history) === null || _f === void 0 ? void 0 : _f.state) === null || _g === void 0 ? void 0 : _g['newUid'];
        if (prefilledEmail === null || prefilledEmail === void 0 ? void 0 : prefilledEmail.length) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy91c2VyL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLFdBQVcsRUFDWCxvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLFNBQVMsR0FDVixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBTXhGLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBSzdCLFlBQ1ksSUFBaUIsRUFDakIsb0JBQTBDLEVBQzFDLEVBQWUsRUFDZixtQkFBd0MsRUFDeEMsTUFBaUIsRUFDakIsY0FBOEIsRUFDOUIscUJBQTRDO1FBTjVDLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2Ysd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBVHhELGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBVWxCLENBQUM7SUFFSixRQUFROztRQUNOLElBQUksQ0FB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LFFBQVEsRUFBRSxlQUFlO1FBQ3pCLDRzRUFBMEM7S0FDM0MsQ0FBQztHQUNXLGtCQUFrQixDQWdGOUI7U0FoRlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEF1dGhSZWRpcmVjdFNlcnZpY2UsXG4gIEF1dGhTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIFdpbmRvd1JlZixcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ3VzdG9tRm9ybVZhbGlkYXRvcnMgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvdXRpbHMvdmFsaWRhdG9ycy9jdXN0b20tZm9ybS12YWxpZGF0b3JzJztcbmltcG9ydCB7IENoZWNrb3V0Q29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL2NoZWNrb3V0L3NlcnZpY2VzL2NoZWNrb3V0LWNvbmZpZy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtbG9naW4tZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi1mb3JtLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Gb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBzdWI6IFN1YnNjcmlwdGlvbjtcbiAgZm9ybTogRm9ybUdyb3VwO1xuICBsb2dpbkFzR3Vlc3QgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByb3RlY3RlZCBhdXRoUmVkaXJlY3RTZXJ2aWNlOiBBdXRoUmVkaXJlY3RTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZixcbiAgICBwcm90ZWN0ZWQgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByb3RlY3RlZCBjaGVja291dENvbmZpZ1NlcnZpY2U6IENoZWNrb3V0Q29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICB1c2VySWQ6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIEN1c3RvbUZvcm1WYWxpZGF0b3JzLmVtYWlsVmFsaWRhdG9yXV0sXG4gICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZS5pc0d1ZXN0Q2hlY2tvdXQoKSkge1xuICAgICAgdGhpcy5sb2dpbkFzR3Vlc3QgPSB0aGlzLmFjdGl2YXRlZFJvdXRlPy5zbmFwc2hvdD8ucXVlcnlQYXJhbXM/LltcbiAgICAgICAgJ2ZvcmNlZCdcbiAgICAgIF07XG4gICAgfVxuXG4gICAgY29uc3QgcHJlZmlsbGVkRW1haWwgPSB0aGlzLndpblJlZj8ubmF0aXZlV2luZG93Py5oaXN0b3J5Py5zdGF0ZT8uW1xuICAgICAgJ25ld1VpZCdcbiAgICBdO1xuXG4gICAgaWYgKHByZWZpbGxlZEVtYWlsPy5sZW5ndGgpIHtcbiAgICAgIHRoaXMucHJlZmlsbEZvcm0oJ3VzZXJJZCcsIHByZWZpbGxlZEVtYWlsKTtcbiAgICB9XG4gIH1cblxuICBsb2dpbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5mb3JtLnZhbGlkKSB7XG4gICAgICB0aGlzLnN1Ym1pdExvZ2luKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWFya0Zvcm1Bc1RvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN1Ym1pdExvZ2luKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgdXNlcklkLCBwYXNzd29yZCB9ID0gdGhpcy5mb3JtLmNvbnRyb2xzO1xuICAgIHRoaXMuYXV0aC5hdXRob3JpemUoXG4gICAgICB1c2VySWQudmFsdWUudG9Mb3dlckNhc2UoKSwgLy8gYmFja2VuZCBhY2NlcHRzIGxvd2VyY2FzZSBlbWFpbHMgb25seVxuICAgICAgcGFzc3dvcmQudmFsdWVcbiAgICApO1xuXG4gICAgaWYgKCF0aGlzLnN1Yikge1xuICAgICAgdGhpcy5zdWIgPSB0aGlzLmF1dGguZ2V0VXNlclRva2VuKCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmFjY2Vzc190b2tlbikge1xuICAgICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UucmVtb3ZlKEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SKTtcbiAgICAgICAgICB0aGlzLmF1dGhSZWRpcmVjdFNlcnZpY2UucmVkaXJlY3QoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtYXJrRm9ybUFzVG91Y2hlZCgpOiB2b2lkIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmZvcm0uY29udHJvbHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1trZXldLm1hcmtBc1RvdWNoZWQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1Yikge1xuICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHByZWZpbGxGb3JtKGZpZWxkOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICBbZmllbGRdOiB2YWx1ZSxcbiAgICB9KTtcblxuICAgIHRoaXMuZm9ybS5nZXQoZmllbGQpLm1hcmtBc1RvdWNoZWQoKTsgLy8gdGhpcyBhY3Rpb24gd2lsbCBjaGVjayBmaWVsZCB2YWxpZGl0eSBvbiBsb2FkXG4gIH1cbn1cbiJdfQ==