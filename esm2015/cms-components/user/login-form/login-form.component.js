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
        this.form = this.fb.group({
            userId: ['', [Validators.required, CustomFormValidators.emailValidator]],
            password: ['', Validators.required],
        });
        if (this.checkoutConfigService &&
            this.checkoutConfigService.isGuestCheckout()) {
            this.loginAsGuest = this.activatedRoute.snapshot.queryParams['forced'];
        }
        // TODO(issue:#4055) Deprecated since 1.1.0
        if (this.winRef && this.winRef.nativeWindow) {
            const routeState = this.winRef.nativeWindow.history &&
                this.winRef.nativeWindow.history.state;
            if (routeState && routeState['newUid'] && routeState['newUid'].length) {
                this.prefillForm('userId', routeState['newUid']);
            }
        }
    }
    login() {
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
        template: "<form (submit)=\"login()\" [formGroup]=\"form\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'loginForm.emailAddress.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        class=\"form-control\"\n        [class.is-invalid]=\"\n          form.controls['userId'].invalid &&\n          (form.controls['userId'].touched || form.controls['userId'].dirty)\n        \"\n        formControlName=\"userId\"\n        placeholder=\"{{ 'loginForm.emailAddress.placeholder' | cxTranslate }}\"\n      />\n    </label>\n    <div\n      class=\"invalid-feedback\"\n      *ngIf=\"\n        form.controls['userId'].invalid &&\n        (form.controls['userId'].touched || form.controls['userId'].dirty)\n      \"\n    >\n      <span>{{ 'loginForm.wrongEmailFormat' | cxTranslate }}</span>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'loginForm.password.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"password\"\n        class=\"form-control\"\n        placeholder=\"{{ 'loginForm.password.placeholder' | cxTranslate }}\"\n        formControlName=\"password\"\n      />\n    </label>\n  </div>\n  <p>\n    <a\n      [routerLink]=\"{ cxRoute: 'forgotPassword' } | cxUrl\"\n      aria-controls=\"reset-password\"\n      class=\"btn-link\"\n      >{{ 'loginForm.forgotPassword' | cxTranslate }}</a\n    >\n  </p>\n\n  <button\n    type=\"submit\"\n    class=\"btn btn-block btn-primary\"\n    [disabled]=\"form.invalid\"\n  >\n    {{ 'loginForm.signIn' | cxTranslate }}\n  </button>\n</form>\n\n<div class=\"register\">\n  <h3 class=\"cx-section-title cx-section-title-alt\">\n    {{ 'loginForm.dontHaveAccount' | cxTranslate }}\n  </h3>\n\n  <ng-container *ngIf=\"!loginAsGuest\">\n    <a\n      [routerLink]=\"{ cxRoute: 'register' } | cxUrl\"\n      class=\"btn btn-block btn-secondary btn-register\"\n      >{{ 'loginForm.register' | cxTranslate }}</a\n    >\n  </ng-container>\n\n  <ng-container *ngIf=\"loginAsGuest\">\n    <a\n      [routerLink]=\"{ cxRoute: 'checkoutLogin' } | cxUrl\"\n      class=\"btn btn-block btn-secondary btn-guest\"\n      >{{ 'loginForm.guestCheckout' | cxTranslate }}</a\n    >\n  </ng-container>\n</div>\n"
    })
], LoginFormComponent);
export { LoginFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy91c2VyL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLFdBQVcsRUFDWCxvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLFNBQVMsR0FDVixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBTXhGLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBa0M3QixZQUNVLElBQWlCLEVBQ2pCLG9CQUEwQyxFQUMxQyxFQUFlLEVBQ2YsbUJBQXdDLEVBQ3hDLE1BQWtCLEVBQ2xCLGNBQStCLEVBQy9CLHFCQUE2QztRQU43QyxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUNsQixtQkFBYyxHQUFkLGNBQWMsQ0FBaUI7UUFDL0IsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF3QjtRQXRDdkQsaUJBQVksR0FBRyxLQUFLLENBQUM7SUF1Q2xCLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN4QixNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3hFLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3BDLENBQUMsQ0FBQztRQUVILElBQ0UsSUFBSSxDQUFDLHFCQUFxQjtZQUMxQixJQUFJLENBQUMscUJBQXFCLENBQUMsZUFBZSxFQUFFLEVBQzVDO1lBQ0EsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDeEU7UUFFRCwyQ0FBMkM7UUFDM0MsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFO1lBQzNDLE1BQU0sVUFBVSxHQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU87Z0JBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFFekMsSUFBSSxVQUFVLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3JFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQ2xEO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsS0FBSztRQUNILE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQ2pCLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsd0NBQXdDO1FBQ3BFLFFBQVEsQ0FBQyxLQUFLLENBQ2YsQ0FBQztRQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2IsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDbkQsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtvQkFDN0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDbkUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNyQztZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRU8sV0FBVyxDQUFDLEtBQWEsRUFBRSxLQUFhO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ25CLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSztTQUNmLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsZ0RBQWdEO0lBQ3hGLENBQUM7Q0FDRixDQUFBOztZQWhFaUIsV0FBVztZQUNLLG9CQUFvQjtZQUN0QyxXQUFXO1lBQ00sbUJBQW1CO1lBQy9CLFNBQVM7WUFDRCxjQUFjO1lBQ1AscUJBQXFCOztBQXpDNUMsa0JBQWtCO0lBSjlCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxlQUFlO1FBQ3pCLDJ2RUFBMEM7S0FDM0MsQ0FBQztHQUNXLGtCQUFrQixDQW1HOUI7U0FuR1ksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEF1dGhSZWRpcmVjdFNlcnZpY2UsXG4gIEF1dGhTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIFdpbmRvd1JlZixcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ3VzdG9tRm9ybVZhbGlkYXRvcnMgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvdXRpbHMvdmFsaWRhdG9ycy9jdXN0b20tZm9ybS12YWxpZGF0b3JzJztcbmltcG9ydCB7IENoZWNrb3V0Q29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL2NoZWNrb3V0L3NlcnZpY2VzL2NoZWNrb3V0LWNvbmZpZy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtbG9naW4tZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi1mb3JtLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Gb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBzdWI6IFN1YnNjcmlwdGlvbjtcbiAgZm9ybTogRm9ybUdyb3VwO1xuICBsb2dpbkFzR3Vlc3QgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBhdXRoOiBBdXRoU2VydmljZSxcbiAgICBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgZmI6IEZvcm1CdWlsZGVyLFxuICAgIGF1dGhSZWRpcmVjdFNlcnZpY2U6IEF1dGhSZWRpcmVjdFNlcnZpY2UsXG4gICAgd2luUmVmOiBXaW5kb3dSZWYsIC8vIHRzbGludDpkaXNhYmxlLWxpbmUsXG4gICAgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIGNoZWNrb3V0Q29uZmlnU2VydmljZTogQ2hlY2tvdXRDb25maWdTZXJ2aWNlXG4gICk7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIDEuMS4wXG4gICAqIFVzZSBjb25zdHJ1Y3RvcihcbiAgICogYXV0aDogQXV0aFNlcnZpY2UsXG4gICAqIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICogZmI6IEZvcm1CdWlsZGVyLFxuICAgKiBhdXRoUmVkaXJlY3RTZXJ2aWNlOiBBdXRoUmVkaXJlY3RTZXJ2aWNlLFxuICAgKiAgd2luUmVmOiBXaW5kb3dSZWYsXG4gICAqIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICogY2hlY2tvdXRDb25maWdTZXJ2aWNlOiBDaGVja291dENvbmZpZ1NlcnZpY2UpIGluc3RlYWRcbiAgICpcbiAgICogVE9ETyhpc3N1ZTojNDA1NSkgRGVwcmVjYXRlZCBzaW5jZSAxLjEuMFxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIGZiOiBGb3JtQnVpbGRlcixcbiAgICBhdXRoUmVkaXJlY3RTZXJ2aWNlOiBBdXRoUmVkaXJlY3RTZXJ2aWNlXG4gICk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSBhdXRoUmVkaXJlY3RTZXJ2aWNlOiBBdXRoUmVkaXJlY3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgd2luUmVmPzogV2luZG93UmVmLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU/OiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIGNoZWNrb3V0Q29uZmlnU2VydmljZT86IENoZWNrb3V0Q29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICB1c2VySWQ6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIEN1c3RvbUZvcm1WYWxpZGF0b3JzLmVtYWlsVmFsaWRhdG9yXV0sXG4gICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9KTtcblxuICAgIGlmIChcbiAgICAgIHRoaXMuY2hlY2tvdXRDb25maWdTZXJ2aWNlICYmXG4gICAgICB0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZS5pc0d1ZXN0Q2hlY2tvdXQoKVxuICAgICkge1xuICAgICAgdGhpcy5sb2dpbkFzR3Vlc3QgPSB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zWydmb3JjZWQnXTtcbiAgICB9XG5cbiAgICAvLyBUT0RPKGlzc3VlOiM0MDU1KSBEZXByZWNhdGVkIHNpbmNlIDEuMS4wXG4gICAgaWYgKHRoaXMud2luUmVmICYmIHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdykge1xuICAgICAgY29uc3Qgcm91dGVTdGF0ZSA9XG4gICAgICAgIHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdy5oaXN0b3J5ICYmXG4gICAgICAgIHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdy5oaXN0b3J5LnN0YXRlO1xuXG4gICAgICBpZiAocm91dGVTdGF0ZSAmJiByb3V0ZVN0YXRlWyduZXdVaWQnXSAmJiByb3V0ZVN0YXRlWyduZXdVaWQnXS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5wcmVmaWxsRm9ybSgndXNlcklkJywgcm91dGVTdGF0ZVsnbmV3VWlkJ10pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxvZ2luKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgdXNlcklkLCBwYXNzd29yZCB9ID0gdGhpcy5mb3JtLmNvbnRyb2xzO1xuICAgIHRoaXMuYXV0aC5hdXRob3JpemUoXG4gICAgICB1c2VySWQudmFsdWUudG9Mb3dlckNhc2UoKSwgLy8gYmFja2VuZCBhY2NlcHRzIGxvd2VyY2FzZSBlbWFpbHMgb25seVxuICAgICAgcGFzc3dvcmQudmFsdWVcbiAgICApO1xuXG4gICAgaWYgKCF0aGlzLnN1Yikge1xuICAgICAgdGhpcy5zdWIgPSB0aGlzLmF1dGguZ2V0VXNlclRva2VuKCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmFjY2Vzc190b2tlbikge1xuICAgICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UucmVtb3ZlKEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SKTtcbiAgICAgICAgICB0aGlzLmF1dGhSZWRpcmVjdFNlcnZpY2UucmVkaXJlY3QoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3ViKSB7XG4gICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcHJlZmlsbEZvcm0oZmllbGQ6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgIFtmaWVsZF06IHZhbHVlLFxuICAgIH0pO1xuXG4gICAgdGhpcy5mb3JtLmdldChmaWVsZCkubWFya0FzVG91Y2hlZCgpOyAvLyB0aGlzIGFjdGlvbiB3aWxsIGNoZWNrIGZpZWxkIHZhbGlkaXR5IG9uIGxvYWRcbiAgfVxufVxuIl19