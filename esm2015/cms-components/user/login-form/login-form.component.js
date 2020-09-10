import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthRedirectService, AuthService, GlobalMessageService, GlobalMessageType, WindowRef, } from '@spartacus/core';
import { CustomFormValidators } from '../../../shared/index';
let LoginFormComponent = class LoginFormComponent {
    constructor(auth, globalMessageService, fb, authRedirectService, winRef) {
        this.auth = auth;
        this.globalMessageService = globalMessageService;
        this.fb = fb;
        this.authRedirectService = authRedirectService;
        this.winRef = winRef;
    }
    ngOnInit() {
        var _a, _b;
        const routeState = (_b = (_a = this.winRef.nativeWindow) === null || _a === void 0 ? void 0 : _a.history) === null || _b === void 0 ? void 0 : _b.state;
        const prefilledEmail = routeState === null || routeState === void 0 ? void 0 : routeState['newUid'];
        this.loginForm = this.fb.group({
            userId: [
                (prefilledEmail === null || prefilledEmail === void 0 ? void 0 : prefilledEmail.length) ? prefilledEmail : '',
                [Validators.required, CustomFormValidators.emailValidator],
            ],
            password: ['', Validators.required],
        });
    }
    submitForm() {
        if (this.loginForm.valid) {
            this.loginUser();
        }
        else {
            this.loginForm.markAllAsTouched();
        }
    }
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
    loginUser() {
        const { userId, password } = this.loginForm.controls;
        this.auth.authorize(userId.value.toLowerCase(), // backend accepts lowercase emails only
        password.value);
        if (!this.sub) {
            this.sub = this.auth.getUserToken().subscribe((data) => {
                if (data && data.access_token) {
                    this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
                    this.authRedirectService.redirect();
                }
            });
        }
    }
};
LoginFormComponent.ctorParameters = () => [
    { type: AuthService },
    { type: GlobalMessageService },
    { type: FormBuilder },
    { type: AuthRedirectService },
    { type: WindowRef }
];
LoginFormComponent = __decorate([
    Component({
        selector: 'cx-login-form',
        template: "<form (ngSubmit)=\"submitForm()\" [formGroup]=\"loginForm\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'loginForm.emailAddress.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        class=\"form-control\"\n        formControlName=\"userId\"\n        placeholder=\"{{ 'loginForm.emailAddress.placeholder' | cxTranslate }}\"\n      />\n      <cx-form-errors [control]=\"loginForm.get('userId')\"></cx-form-errors>\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'loginForm.password.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"password\"\n        class=\"form-control\"\n        placeholder=\"{{ 'loginForm.password.placeholder' | cxTranslate }}\"\n        formControlName=\"password\"\n      />\n      <cx-form-errors [control]=\"loginForm.get('password')\"></cx-form-errors>\n    </label>\n  </div>\n  <p>\n    <a\n      [routerLink]=\"{ cxRoute: 'forgotPassword' } | cxUrl\"\n      aria-controls=\"reset-password\"\n      class=\"btn-link\"\n      >{{ 'loginForm.forgotPassword' | cxTranslate }}</a\n    >\n  </p>\n\n  <button type=\"submit\" class=\"btn btn-block btn-primary\">\n    {{ 'loginForm.signIn' | cxTranslate }}\n  </button>\n</form>\n"
    })
], LoginFormComponent);
export { LoginFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy91c2VyL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsV0FBVyxFQUNYLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFNN0QsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFJN0IsWUFDWSxJQUFpQixFQUNqQixvQkFBMEMsRUFDMUMsRUFBZSxFQUNmLG1CQUF3QyxFQUN4QyxNQUFpQjtRQUpqQixTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUMxQixDQUFDO0lBRUosUUFBUTs7UUFDTixNQUFNLFVBQVUsZUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksMENBQUUsT0FBTywwQ0FBRSxLQUFLLENBQUM7UUFDNUQsTUFBTSxjQUFjLEdBQUcsVUFBVSxhQUFWLFVBQVUsdUJBQVYsVUFBVSxDQUFHLFFBQVEsQ0FBQyxDQUFDO1FBRTlDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDN0IsTUFBTSxFQUFFO2dCQUNOLENBQUEsY0FBYyxhQUFkLGNBQWMsdUJBQWQsY0FBYyxDQUFFLE1BQU0sRUFBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUM1QyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsb0JBQW9CLENBQUMsY0FBYyxDQUFDO2FBQzNEO1lBQ0QsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDcEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNsQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ25DO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUVTLFNBQVM7UUFDakIsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztRQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FDakIsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSx3Q0FBd0M7UUFDcEUsUUFBUSxDQUFDLEtBQUssQ0FDZixDQUFDO1FBRUYsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDYixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ3JELElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7b0JBQzdCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQ25FLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDckM7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBbERtQixXQUFXO1lBQ0ssb0JBQW9CO1lBQ3RDLFdBQVc7WUFDTSxtQkFBbUI7WUFDaEMsU0FBUzs7QUFUbEIsa0JBQWtCO0lBSjlCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxlQUFlO1FBQ3pCLG16Q0FBMEM7S0FDM0MsQ0FBQztHQUNXLGtCQUFrQixDQXVEOUI7U0F2RFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIEF1dGhSZWRpcmVjdFNlcnZpY2UsXG4gIEF1dGhTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIFdpbmRvd1JlZixcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ3VzdG9tRm9ybVZhbGlkYXRvcnMgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1sb2dpbi1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHN1YjogU3Vic2NyaXB0aW9uO1xuICBsb2dpbkZvcm06IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByb3RlY3RlZCBhdXRoUmVkaXJlY3RTZXJ2aWNlOiBBdXRoUmVkaXJlY3RTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3Qgcm91dGVTdGF0ZSA9IHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdz8uaGlzdG9yeT8uc3RhdGU7XG4gICAgY29uc3QgcHJlZmlsbGVkRW1haWwgPSByb3V0ZVN0YXRlPy5bJ25ld1VpZCddO1xuXG4gICAgdGhpcy5sb2dpbkZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIHVzZXJJZDogW1xuICAgICAgICBwcmVmaWxsZWRFbWFpbD8ubGVuZ3RoID8gcHJlZmlsbGVkRW1haWwgOiAnJyxcbiAgICAgICAgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIEN1c3RvbUZvcm1WYWxpZGF0b3JzLmVtYWlsVmFsaWRhdG9yXSxcbiAgICAgIF0sXG4gICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9KTtcbiAgfVxuXG4gIHN1Ym1pdEZvcm0oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubG9naW5Gb3JtLnZhbGlkKSB7XG4gICAgICB0aGlzLmxvZ2luVXNlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvZ2luRm9ybS5tYXJrQWxsQXNUb3VjaGVkKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3ViKSB7XG4gICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBsb2dpblVzZXIoKTogdm9pZCB7XG4gICAgY29uc3QgeyB1c2VySWQsIHBhc3N3b3JkIH0gPSB0aGlzLmxvZ2luRm9ybS5jb250cm9scztcbiAgICB0aGlzLmF1dGguYXV0aG9yaXplKFxuICAgICAgdXNlcklkLnZhbHVlLnRvTG93ZXJDYXNlKCksIC8vIGJhY2tlbmQgYWNjZXB0cyBsb3dlcmNhc2UgZW1haWxzIG9ubHlcbiAgICAgIHBhc3N3b3JkLnZhbHVlXG4gICAgKTtcblxuICAgIGlmICghdGhpcy5zdWIpIHtcbiAgICAgIHRoaXMuc3ViID0gdGhpcy5hdXRoLmdldFVzZXJUb2tlbigpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmFjY2Vzc190b2tlbikge1xuICAgICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UucmVtb3ZlKEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SKTtcbiAgICAgICAgICB0aGlzLmF1dGhSZWRpcmVjdFNlcnZpY2UucmVkaXJlY3QoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=