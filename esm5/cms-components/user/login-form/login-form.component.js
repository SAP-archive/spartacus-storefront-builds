/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthRedirectService, AuthService, GlobalMessageService, GlobalMessageType, WindowRef, FeatureConfigService, } from '@spartacus/core';
import { CustomFormValidators } from '../../../shared/utils/validators/custom-form-validators';
var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(auth, globalMessageService, fb, authRedirectService, winRef, activatedRoute, featureConfig) {
        this.auth = auth;
        this.globalMessageService = globalMessageService;
        this.fb = fb;
        this.authRedirectService = authRedirectService;
        this.winRef = winRef;
        this.activatedRoute = activatedRoute;
        this.featureConfig = featureConfig;
        this.loginAsGuest = false;
    }
    /**
     * @return {?}
     */
    LoginFormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.form = this.fb.group({
            userId: ['', [Validators.required, CustomFormValidators.emailValidator]],
            password: ['', Validators.required],
        });
        if (this.featureConfig.isEnabled('guestCheckout')) {
            this.loginAsGuest = this.activatedRoute.snapshot.queryParams['forced'];
        }
        // TODO(issue:#4055) Deprecated since 1.1.0
        if (this.winRef && this.winRef.nativeWindow) {
            /** @type {?} */
            var routeState = this.winRef.nativeWindow.history &&
                this.winRef.nativeWindow.history.state;
            if (routeState && routeState['newUid'] && routeState['newUid'].length) {
                this.prefillForm('userId', routeState['newUid']);
            }
        }
    };
    /**
     * @return {?}
     */
    LoginFormComponent.prototype.login = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var _a = this.form.controls, userId = _a.userId, password = _a.password;
        this.auth.authorize(userId.value.toLowerCase(), // backend accepts lowercase emails only
        password.value);
        if (!this.sub) {
            this.sub = this.auth.getUserToken().subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                if (data && data.access_token) {
                    _this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
                    _this.authRedirectService.redirect();
                }
            }));
        }
    };
    /**
     * @return {?}
     */
    LoginFormComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    /**
     * @private
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    LoginFormComponent.prototype.prefillForm = /**
     * @private
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    function (field, value) {
        var _a;
        this.form.patchValue((_a = {},
            _a[field] = value,
            _a));
        this.form.get(field).markAsTouched(); // this action will check field validity on load
    };
    LoginFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-login-form',
                    template: "<form (submit)=\"login()\" [formGroup]=\"form\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'loginForm.emailAddress.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        class=\"form-control\"\n        [class.is-invalid]=\"\n          form.controls['userId'].invalid &&\n          (form.controls['userId'].touched || form.controls['userId'].dirty)\n        \"\n        formControlName=\"userId\"\n        placeholder=\"{{ 'loginForm.emailAddress.placeholder' | cxTranslate }}\"\n      />\n    </label>\n    <div\n      class=\"invalid-feedback\"\n      *ngIf=\"\n        form.controls['userId'].invalid &&\n        (form.controls['userId'].touched || form.controls['userId'].dirty)\n      \"\n    >\n      <span>{{ 'loginForm.wrongEmailFormat' | cxTranslate }}</span>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'loginForm.password.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"password\"\n        class=\"form-control\"\n        placeholder=\"{{ 'loginForm.password.placeholder' | cxTranslate }}\"\n        formControlName=\"password\"\n      />\n    </label>\n  </div>\n  <p>\n    <a\n      [routerLink]=\"{ cxRoute: 'forgotPassword' } | cxUrl\"\n      aria-controls=\"reset-password\"\n      class=\"btn-link\"\n      >{{ 'loginForm.forgotPassword' | cxTranslate }}</a\n    >\n  </p>\n\n  <button\n    type=\"submit\"\n    class=\"btn btn-block btn-primary\"\n    [disabled]=\"form.invalid\"\n  >\n    {{ 'loginForm.signIn' | cxTranslate }}\n  </button>\n</form>\n\n<div class=\"register\">\n  <h3 class=\"cx-section-title cx-section-title-alt\">\n    {{ 'loginForm.dontHaveAccount' | cxTranslate }}\n  </h3>\n\n  <ng-container *ngIf=\"!loginAsGuest\">\n    <a\n      [routerLink]=\"{ cxRoute: 'register' } | cxUrl\"\n      class=\"btn btn-block btn-secondary btn-register\"\n      >{{ 'loginForm.register' | cxTranslate }}</a\n    >\n  </ng-container>\n\n  <ng-container *ngIf=\"loginAsGuest\">\n    <a\n      [routerLink]=\"{ cxRoute: 'checkoutLogin' } | cxUrl\"\n      class=\"btn btn-block btn-secondary btn-guest\"\n      >{{ 'loginForm.guestCheckout' | cxTranslate }}</a\n    >\n  </ng-container>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    LoginFormComponent.ctorParameters = function () { return [
        { type: AuthService },
        { type: GlobalMessageService },
        { type: FormBuilder },
        { type: AuthRedirectService },
        { type: WindowRef },
        { type: ActivatedRoute },
        { type: FeatureConfigService }
    ]; };
    return LoginFormComponent;
}());
export { LoginFormComponent };
if (false) {
    /** @type {?} */
    LoginFormComponent.prototype.sub;
    /** @type {?} */
    LoginFormComponent.prototype.form;
    /** @type {?} */
    LoginFormComponent.prototype.loginAsGuest;
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
    /**
     * @type {?}
     * @private
     */
    LoginFormComponent.prototype.activatedRoute;
    /**
     * @type {?}
     * @private
     */
    LoginFormComponent.prototype.featureConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy91c2VyL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsV0FBVyxFQUNYLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsU0FBUyxFQUNULG9CQUFvQixHQUNyQixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBRS9GO0lBK0JFLDRCQUNVLElBQWlCLEVBQ2pCLG9CQUEwQyxFQUMxQyxFQUFlLEVBQ2YsbUJBQXdDLEVBQ3hDLE1BQWtCLEVBQ2xCLGNBQStCLEVBQy9CLGFBQW9DO1FBTnBDLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2Ysd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQ2xCLG1CQUFjLEdBQWQsY0FBYyxDQUFpQjtRQUMvQixrQkFBYSxHQUFiLGFBQWEsQ0FBdUI7UUEvQjlDLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBZ0NsQixDQUFDOzs7O0lBRUoscUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN4QixNQUFNLEVBQUUsQ0FB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dCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQXV0aFJlZGlyZWN0U2VydmljZSxcbiAgQXV0aFNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbiAgV2luZG93UmVmLFxuICBGZWF0dXJlQ29uZmlnU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ3VzdG9tRm9ybVZhbGlkYXRvcnMgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvdXRpbHMvdmFsaWRhdG9ycy9jdXN0b20tZm9ybS12YWxpZGF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtbG9naW4tZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi1mb3JtLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Gb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBzdWI6IFN1YnNjcmlwdGlvbjtcbiAgZm9ybTogRm9ybUdyb3VwO1xuICBsb2dpbkFzR3Vlc3QgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBhdXRoOiBBdXRoU2VydmljZSxcbiAgICBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgZmI6IEZvcm1CdWlsZGVyLFxuICAgIGF1dGhSZWRpcmVjdFNlcnZpY2U6IEF1dGhSZWRpcmVjdFNlcnZpY2UsXG4gICAgd2luUmVmOiBXaW5kb3dSZWYsIC8vIHRzbGludDpkaXNhYmxlLWxpbmUsXG4gICAgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIGZlYXR1cmVDb25maWc6IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICk7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIDEuMS4wXG4gICAqIE5PVEU6IGNoZWNrIGlzc3VlOiM0MDU1IGZvciBtb3JlIGluZm9cbiAgICpcbiAgICogVE9ETyhpc3N1ZTojNDA1NSkgRGVwcmVjYXRlZCBzaW5jZSAxLjEuMFxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIGZiOiBGb3JtQnVpbGRlcixcbiAgICBhdXRoUmVkaXJlY3RTZXJ2aWNlOiBBdXRoUmVkaXJlY3RTZXJ2aWNlXG4gICk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSBhdXRoUmVkaXJlY3RTZXJ2aWNlOiBBdXRoUmVkaXJlY3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgd2luUmVmPzogV2luZG93UmVmLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU/OiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIGZlYXR1cmVDb25maWc/OiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICB1c2VySWQ6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIEN1c3RvbUZvcm1WYWxpZGF0b3JzLmVtYWlsVmFsaWRhdG9yXV0sXG4gICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmZlYXR1cmVDb25maWcuaXNFbmFibGVkKCdndWVzdENoZWNrb3V0JykpIHtcbiAgICAgIHRoaXMubG9naW5Bc0d1ZXN0ID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1snZm9yY2VkJ107XG4gICAgfVxuXG4gICAgLy8gVE9ETyhpc3N1ZTojNDA1NSkgRGVwcmVjYXRlZCBzaW5jZSAxLjEuMFxuICAgIGlmICh0aGlzLndpblJlZiAmJiB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cpIHtcbiAgICAgIGNvbnN0IHJvdXRlU3RhdGUgPVxuICAgICAgICB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cuaGlzdG9yeSAmJlxuICAgICAgICB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cuaGlzdG9yeS5zdGF0ZTtcblxuICAgICAgaWYgKHJvdXRlU3RhdGUgJiYgcm91dGVTdGF0ZVsnbmV3VWlkJ10gJiYgcm91dGVTdGF0ZVsnbmV3VWlkJ10ubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMucHJlZmlsbEZvcm0oJ3VzZXJJZCcsIHJvdXRlU3RhdGVbJ25ld1VpZCddKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBsb2dpbigpOiB2b2lkIHtcbiAgICBjb25zdCB7IHVzZXJJZCwgcGFzc3dvcmQgfSA9IHRoaXMuZm9ybS5jb250cm9scztcbiAgICB0aGlzLmF1dGguYXV0aG9yaXplKFxuICAgICAgdXNlcklkLnZhbHVlLnRvTG93ZXJDYXNlKCksIC8vIGJhY2tlbmQgYWNjZXB0cyBsb3dlcmNhc2UgZW1haWxzIG9ubHlcbiAgICAgIHBhc3N3b3JkLnZhbHVlXG4gICAgKTtcblxuICAgIGlmICghdGhpcy5zdWIpIHtcbiAgICAgIHRoaXMuc3ViID0gdGhpcy5hdXRoLmdldFVzZXJUb2tlbigpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLnJlbW92ZShHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUik7XG4gICAgICAgICAgdGhpcy5hdXRoUmVkaXJlY3RTZXJ2aWNlLnJlZGlyZWN0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1Yikge1xuICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHByZWZpbGxGb3JtKGZpZWxkOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICBbZmllbGRdOiB2YWx1ZSxcbiAgICB9KTtcblxuICAgIHRoaXMuZm9ybS5nZXQoZmllbGQpLm1hcmtBc1RvdWNoZWQoKTsgLy8gdGhpcyBhY3Rpb24gd2lsbCBjaGVjayBmaWVsZCB2YWxpZGl0eSBvbiBsb2FkXG4gIH1cbn1cbiJdfQ==