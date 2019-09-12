/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthRedirectService, AuthService, GlobalMessageService, GlobalMessageType, WindowRef, } from '@spartacus/core';
import { CustomFormValidators } from '../../../shared/utils/validators/custom-form-validators';
export class LoginFormComponent {
    /**
     * @param {?} auth
     * @param {?} globalMessageService
     * @param {?} fb
     * @param {?} authRedirectService
     * @param {?=} winRef
     */
    constructor(auth, globalMessageService, fb, authRedirectService, winRef) {
        this.auth = auth;
        this.globalMessageService = globalMessageService;
        this.fb = fb;
        this.authRedirectService = authRedirectService;
        this.winRef = winRef;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.form = this.fb.group({
            userId: ['', [Validators.required, CustomFormValidators.emailValidator]],
            password: ['', Validators.required],
        });
        // TODO(issue:#4055) Deprecated since 1.1.0
        if (this.winRef && this.winRef.nativeWindow) {
            /** @type {?} */
            const routeState = this.winRef.nativeWindow.history &&
                this.winRef.nativeWindow.history.state;
            if (routeState && routeState['newUid'] && routeState['newUid'].length) {
                this.prefillForm('userId', routeState['newUid']);
            }
        }
    }
    /**
     * @return {?}
     */
    login() {
        const { userId, password } = this.form.controls;
        this.auth.authorize(userId.value.toLowerCase(), // backend accepts lowercase emails only
        password.value);
        if (!this.sub) {
            this.sub = this.auth.getUserToken().subscribe((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                if (data && data.access_token) {
                    this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
                    this.authRedirectService.redirect();
                }
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
    /**
     * @private
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    prefillForm(field, value) {
        this.form.patchValue({
            [field]: value,
        });
        this.form.get(field).markAsTouched(); // this action will check field validity on load
    }
}
LoginFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-login-form',
                template: "<form (submit)=\"login()\" [formGroup]=\"form\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'loginForm.emailAddress.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        class=\"form-control\"\n        [class.is-invalid]=\"\n          form.controls['userId'].invalid &&\n          (form.controls['userId'].touched || form.controls['userId'].dirty)\n        \"\n        formControlName=\"userId\"\n        placeholder=\"{{ 'loginForm.emailAddress.placeholder' | cxTranslate }}\"\n      />\n    </label>\n    <div\n      class=\"invalid-feedback\"\n      *ngIf=\"\n        form.controls['userId'].invalid &&\n        (form.controls['userId'].touched || form.controls['userId'].dirty)\n      \"\n    >\n      <span>{{ 'loginForm.wrongEmailFormat' | cxTranslate }}</span>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'loginForm.password.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"password\"\n        class=\"form-control\"\n        placeholder=\"{{ 'loginForm.password.placeholder' | cxTranslate }}\"\n        formControlName=\"password\"\n      />\n    </label>\n  </div>\n  <p>\n    <a\n      [routerLink]=\"{ cxRoute: 'forgotPassword' } | cxUrl\"\n      aria-controls=\"reset-password\"\n      class=\"btn-link\"\n      >{{ 'loginForm.forgotPassword' | cxTranslate }}</a\n    >\n  </p>\n\n  <button\n    type=\"submit\"\n    class=\"btn btn-block btn-primary\"\n    [disabled]=\"form.invalid\"\n  >\n    {{ 'loginForm.signIn' | cxTranslate }}\n  </button>\n</form>\n\n<div class=\"register\">\n  <h3 class=\"cx-section-title cx-section-title-alt\">\n    {{ 'loginForm.dontHaveAccount' | cxTranslate }}\n  </h3>\n  <a\n    [routerLink]=\"{ cxRoute: 'register' } | cxUrl\"\n    class=\"btn btn-block btn-secondary\"\n    >{{ 'loginForm.register' | cxTranslate }}</a\n  >\n</div>\n"
            }] }
];
/** @nocollapse */
LoginFormComponent.ctorParameters = () => [
    { type: AuthService },
    { type: GlobalMessageService },
    { type: FormBuilder },
    { type: AuthRedirectService },
    { type: WindowRef }
];
if (false) {
    /** @type {?} */
    LoginFormComponent.prototype.sub;
    /** @type {?} */
    LoginFormComponent.prototype.form;
    /**
     * @type {?}
     * @private
     */
    LoginFormComponent.prototype.auth;
    /**
     * @type {?}
     * @private
     */
    LoginFormComponent.prototype.globalMessageService;
    /**
     * @type {?}
     * @private
     */
    LoginFormComponent.prototype.fb;
    /**
     * @type {?}
     * @private
     */
    LoginFormComponent.prototype.authRedirectService;
    /**
     * @type {?}
     * @private
     */
    LoginFormComponent.prototype.winRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy91c2VyL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixXQUFXLEVBQ1gsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQU0vRixNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7OztJQXdCN0IsWUFDVSxJQUFpQixFQUNqQixvQkFBMEMsRUFDMUMsRUFBZSxFQUNmLG1CQUF3QyxFQUN4QyxNQUFrQjtRQUpsQixTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtJQUN6QixDQUFDOzs7O0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDeEIsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN4RSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUNwQyxDQUFDLENBQUM7UUFFSCwyQ0FBMkM7UUFDM0MsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFOztrQkFDckMsVUFBVSxHQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU87Z0JBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLO1lBRXhDLElBQUksVUFBVSxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUNyRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzthQUNsRDtTQUNGO0lBQ0gsQ0FBQzs7OztJQUVELEtBQUs7Y0FDRyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7UUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQ2pCLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsd0NBQXdDO1FBQ3BFLFFBQVEsQ0FBQyxLQUFLLENBQ2YsQ0FBQztRQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2IsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVM7Ozs7WUFBQyxJQUFJLENBQUMsRUFBRTtnQkFDbkQsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtvQkFDN0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDbkUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNyQztZQUNILENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs7Ozs7O0lBRU8sV0FBVyxDQUFDLEtBQWEsRUFBRSxLQUFhO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ25CLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSztTQUNmLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsZ0RBQWdEO0lBQ3hGLENBQUM7OztZQW5GRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLDI2REFBMEM7YUFDM0M7Ozs7WUFYQyxXQUFXO1lBQ1gsb0JBQW9CO1lBSmIsV0FBVztZQUVsQixtQkFBbUI7WUFJbkIsU0FBUzs7OztJQVVULGlDQUFrQjs7SUFDbEIsa0NBQWdCOzs7OztJQXVCZCxrQ0FBeUI7Ozs7O0lBQ3pCLGtEQUFrRDs7Ozs7SUFDbEQsZ0NBQXVCOzs7OztJQUN2QixpREFBZ0Q7Ozs7O0lBQ2hELG9DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBBdXRoUmVkaXJlY3RTZXJ2aWNlLFxuICBBdXRoU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxuICBXaW5kb3dSZWYsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEN1c3RvbUZvcm1WYWxpZGF0b3JzIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3V0aWxzL3ZhbGlkYXRvcnMvY3VzdG9tLWZvcm0tdmFsaWRhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWxvZ2luLWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4tZm9ybS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc3ViOiBTdWJzY3JpcHRpb247XG4gIGZvcm06IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBhdXRoOiBBdXRoU2VydmljZSxcbiAgICBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgZmI6IEZvcm1CdWlsZGVyLFxuICAgIGF1dGhSZWRpcmVjdFNlcnZpY2U6IEF1dGhSZWRpcmVjdFNlcnZpY2UsXG4gICAgd2luUmVmOiBXaW5kb3dSZWYgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICApO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSAxLjEuMFxuICAgKiBOT1RFOiBjaGVjayBpc3N1ZTojNDA1NSBmb3IgbW9yZSBpbmZvXG4gICAqXG4gICAqIFRPRE8oaXNzdWU6IzQwNTUpIERlcHJlY2F0ZWQgc2luY2UgMS4xLjBcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIGF1dGg6IEF1dGhTZXJ2aWNlLFxuICAgIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBmYjogRm9ybUJ1aWxkZXIsXG4gICAgYXV0aFJlZGlyZWN0U2VydmljZTogQXV0aFJlZGlyZWN0U2VydmljZVxuICApO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGF1dGg6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgYXV0aFJlZGlyZWN0U2VydmljZTogQXV0aFJlZGlyZWN0U2VydmljZSxcbiAgICBwcml2YXRlIHdpblJlZj86IFdpbmRvd1JlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICB1c2VySWQ6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIEN1c3RvbUZvcm1WYWxpZGF0b3JzLmVtYWlsVmFsaWRhdG9yXV0sXG4gICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9KTtcblxuICAgIC8vIFRPRE8oaXNzdWU6IzQwNTUpIERlcHJlY2F0ZWQgc2luY2UgMS4xLjBcbiAgICBpZiAodGhpcy53aW5SZWYgJiYgdGhpcy53aW5SZWYubmF0aXZlV2luZG93KSB7XG4gICAgICBjb25zdCByb3V0ZVN0YXRlID1cbiAgICAgICAgdGhpcy53aW5SZWYubmF0aXZlV2luZG93Lmhpc3RvcnkgJiZcbiAgICAgICAgdGhpcy53aW5SZWYubmF0aXZlV2luZG93Lmhpc3Rvcnkuc3RhdGU7XG5cbiAgICAgIGlmIChyb3V0ZVN0YXRlICYmIHJvdXRlU3RhdGVbJ25ld1VpZCddICYmIHJvdXRlU3RhdGVbJ25ld1VpZCddLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnByZWZpbGxGb3JtKCd1c2VySWQnLCByb3V0ZVN0YXRlWyduZXdVaWQnXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbG9naW4oKTogdm9pZCB7XG4gICAgY29uc3QgeyB1c2VySWQsIHBhc3N3b3JkIH0gPSB0aGlzLmZvcm0uY29udHJvbHM7XG4gICAgdGhpcy5hdXRoLmF1dGhvcml6ZShcbiAgICAgIHVzZXJJZC52YWx1ZS50b0xvd2VyQ2FzZSgpLCAvLyBiYWNrZW5kIGFjY2VwdHMgbG93ZXJjYXNlIGVtYWlscyBvbmx5XG4gICAgICBwYXNzd29yZC52YWx1ZVxuICAgICk7XG5cbiAgICBpZiAoIXRoaXMuc3ViKSB7XG4gICAgICB0aGlzLnN1YiA9IHRoaXMuYXV0aC5nZXRVc2VyVG9rZW4oKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEuYWNjZXNzX3Rva2VuKSB7XG4gICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5yZW1vdmUoR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1IpO1xuICAgICAgICAgIHRoaXMuYXV0aFJlZGlyZWN0U2VydmljZS5yZWRpcmVjdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdWIpIHtcbiAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBwcmVmaWxsRm9ybShmaWVsZDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgW2ZpZWxkXTogdmFsdWUsXG4gICAgfSk7XG5cbiAgICB0aGlzLmZvcm0uZ2V0KGZpZWxkKS5tYXJrQXNUb3VjaGVkKCk7IC8vIHRoaXMgYWN0aW9uIHdpbGwgY2hlY2sgZmllbGQgdmFsaWRpdHkgb24gbG9hZFxuICB9XG59XG4iXX0=