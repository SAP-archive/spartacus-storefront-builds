import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService, GlobalMessageService, GlobalMessageType, WindowRef, } from '@spartacus/core';
import { from } from 'rxjs';
import { tap, withLatestFrom } from 'rxjs/operators';
import { CustomFormValidators } from '../../../shared/index';
export class LoginFormComponent {
    constructor(auth, globalMessageService, fb, winRef) {
        this.auth = auth;
        this.globalMessageService = globalMessageService;
        this.fb = fb;
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
    loginUser() {
        const { userId, password } = this.loginForm.controls;
        from(this.auth.loginWithCredentials(userId.value.toLowerCase(), // backend accepts lowercase emails only
        password.value))
            .pipe(withLatestFrom(this.auth.isUserLoggedIn()), tap(([_, isLoggedIn]) => {
            if (isLoggedIn) {
                // We want to remove error messages on successful login (primary the bad username/password combination)
                this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
            }
        }))
            .subscribe();
    }
}
LoginFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-login-form',
                template: "<form (ngSubmit)=\"submitForm()\" [formGroup]=\"loginForm\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'loginForm.emailAddress.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        class=\"form-control\"\n        formControlName=\"userId\"\n        placeholder=\"{{ 'loginForm.emailAddress.placeholder' | cxTranslate }}\"\n      />\n      <cx-form-errors [control]=\"loginForm.get('userId')\"></cx-form-errors>\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'loginForm.password.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"password\"\n        class=\"form-control\"\n        placeholder=\"{{ 'loginForm.password.placeholder' | cxTranslate }}\"\n        formControlName=\"password\"\n      />\n      <cx-form-errors [control]=\"loginForm.get('password')\"></cx-form-errors>\n    </label>\n  </div>\n  <p>\n    <a\n      [routerLink]=\"{ cxRoute: 'forgotPassword' } | cxUrl\"\n      aria-controls=\"reset-password\"\n      class=\"btn-link\"\n      >{{ 'loginForm.forgotPassword' | cxTranslate }}</a\n    >\n  </p>\n\n  <button type=\"submit\" class=\"btn btn-block btn-primary\">\n    {{ 'loginForm.signIn' | cxTranslate }}\n  </button>\n</form>\n"
            },] }
];
LoginFormComponent.ctorParameters = () => [
    { type: AuthService },
    { type: GlobalMessageService },
    { type: FormBuilder },
    { type: WindowRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy91c2VyL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFDTCxXQUFXLEVBQ1gsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFNN0QsTUFBTSxPQUFPLGtCQUFrQjtJQUc3QixZQUNZLElBQWlCLEVBQ2pCLG9CQUEwQyxFQUMxQyxFQUFlLEVBQ2YsTUFBaUI7UUFIakIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNqQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQzFCLENBQUM7SUFFSixRQUFROztRQUNOLE1BQU0sVUFBVSxlQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSwwQ0FBRSxPQUFPLDBDQUFFLEtBQUssQ0FBQztRQUM1RCxNQUFNLGNBQWMsR0FBRyxVQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUcsUUFBUSxDQUFDLENBQUM7UUFFOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUM3QixNQUFNLEVBQUU7Z0JBQ04sQ0FBQSxjQUFjLGFBQWQsY0FBYyx1QkFBZCxjQUFjLENBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzVDLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxvQkFBb0IsQ0FBQyxjQUFjLENBQUM7YUFDM0Q7WUFDRCxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUNwQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2xCO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDbkM7SUFDSCxDQUFDO0lBRVMsU0FBUztRQUNqQixNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBQ3JELElBQUksQ0FDRixJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUM1QixNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLHdDQUF3QztRQUNwRSxRQUFRLENBQUMsS0FBSyxDQUNmLENBQ0Y7YUFDRSxJQUFJLENBQ0gsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsRUFDMUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLEVBQUUsRUFBRTtZQUN0QixJQUFJLFVBQVUsRUFBRTtnQkFDZCx1R0FBdUc7Z0JBQ3ZHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDcEU7UUFDSCxDQUFDLENBQUMsQ0FDSDthQUNBLFNBQVMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7OztZQXJERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLG16Q0FBMEM7YUFDM0M7OztZQVpDLFdBQVc7WUFDWCxvQkFBb0I7WUFIYixXQUFXO1lBS2xCLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIEF1dGhTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIFdpbmRvd1JlZixcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGZyb20gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCwgd2l0aExhdGVzdEZyb20gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDdXN0b21Gb3JtVmFsaWRhdG9ycyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWxvZ2luLWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4tZm9ybS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGxvZ2luRm9ybTogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBhdXRoOiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCByb3V0ZVN0YXRlID0gdGhpcy53aW5SZWYubmF0aXZlV2luZG93Py5oaXN0b3J5Py5zdGF0ZTtcbiAgICBjb25zdCBwcmVmaWxsZWRFbWFpbCA9IHJvdXRlU3RhdGU/LlsnbmV3VWlkJ107XG5cbiAgICB0aGlzLmxvZ2luRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgdXNlcklkOiBbXG4gICAgICAgIHByZWZpbGxlZEVtYWlsPy5sZW5ndGggPyBwcmVmaWxsZWRFbWFpbCA6ICcnLFxuICAgICAgICBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgQ3VzdG9tRm9ybVZhbGlkYXRvcnMuZW1haWxWYWxpZGF0b3JdLFxuICAgICAgXSxcbiAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIH0pO1xuICB9XG5cbiAgc3VibWl0Rm9ybSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5sb2dpbkZvcm0udmFsaWQpIHtcbiAgICAgIHRoaXMubG9naW5Vc2VyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9naW5Gb3JtLm1hcmtBbGxBc1RvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgbG9naW5Vc2VyKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgdXNlcklkLCBwYXNzd29yZCB9ID0gdGhpcy5sb2dpbkZvcm0uY29udHJvbHM7XG4gICAgZnJvbShcbiAgICAgIHRoaXMuYXV0aC5sb2dpbldpdGhDcmVkZW50aWFscyhcbiAgICAgICAgdXNlcklkLnZhbHVlLnRvTG93ZXJDYXNlKCksIC8vIGJhY2tlbmQgYWNjZXB0cyBsb3dlcmNhc2UgZW1haWxzIG9ubHlcbiAgICAgICAgcGFzc3dvcmQudmFsdWVcbiAgICAgIClcbiAgICApXG4gICAgICAucGlwZShcbiAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5hdXRoLmlzVXNlckxvZ2dlZEluKCkpLFxuICAgICAgICB0YXAoKFtfLCBpc0xvZ2dlZEluXSkgPT4ge1xuICAgICAgICAgIGlmIChpc0xvZ2dlZEluKSB7XG4gICAgICAgICAgICAvLyBXZSB3YW50IHRvIHJlbW92ZSBlcnJvciBtZXNzYWdlcyBvbiBzdWNjZXNzZnVsIGxvZ2luIChwcmltYXJ5IHRoZSBiYWQgdXNlcm5hbWUvcGFzc3dvcmQgY29tYmluYXRpb24pXG4gICAgICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLnJlbW92ZShHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUik7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=