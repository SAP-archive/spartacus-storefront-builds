/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormBuilder, Validators, } from '@angular/forms';
import { AuthRedirectService, AuthService, GlobalMessageService, GlobalMessageType, UserService, } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { CustomFormValidators } from '../../../shared/utils/validators/custom-form-validators';
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, authRedirectService, userService, globalMessageService, fb) {
        this.auth = auth;
        this.authRedirectService = authRedirectService;
        this.userService = userService;
        this.globalMessageService = globalMessageService;
        this.fb = fb;
        this.subscription = new Subscription();
        this.userRegistrationForm = this.fb.group({
            titleCode: [''],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, CustomFormValidators.emailValidator]],
            password: [
                '',
                [Validators.required, CustomFormValidators.passwordValidator],
            ],
            passwordconf: ['', Validators.required],
            newsletter: [false],
            termsandconditions: [false, Validators.requiredTrue],
        }, { validator: this.matchPassword });
    }
    /**
     * @return {?}
     */
    RegisterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.titles$ = this.userService.getTitles().pipe(tap((/**
         * @param {?} titles
         * @return {?}
         */
        function (titles) {
            if (Object.keys(titles).length === 0) {
                _this.userService.loadTitles();
            }
        })));
        this.subscription.add(this.auth.getUserToken().subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (data && data.access_token) {
                _this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
                _this.authRedirectService.redirect();
            }
        })));
        // TODO: Workaround: allow server for decide is titleCode mandatory (if yes, provide personalized message)
        this.subscription.add(this.globalMessageService
            .get()
            .pipe(filter((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return Object.keys(data).length > 0; })))
            .subscribe((/**
         * @param {?} globalMessageEntities
         * @return {?}
         */
        function (globalMessageEntities) {
            if (globalMessageEntities[GlobalMessageType.MSG_TYPE_ERROR].some((/**
             * @param {?} message
             * @return {?}
             */
            function (message) { return message === 'This field is required.'; }))) {
                _this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
                _this.globalMessageService.add({ key: 'register.titleRequired' }, GlobalMessageType.MSG_TYPE_ERROR);
            }
        })));
    };
    /**
     * @return {?}
     */
    RegisterComponent.prototype.submit = /**
     * @return {?}
     */
    function () {
        this.emailToLowerCase();
        var _a = this.userRegistrationForm.value, firstName = _a.firstName, lastName = _a.lastName, email = _a.email, password = _a.password, titleCode = _a.titleCode;
        /** @type {?} */
        var userRegisterFormData = {
            firstName: firstName,
            lastName: lastName,
            uid: email,
            password: password,
            titleCode: titleCode,
        };
        this.userService.register(userRegisterFormData);
    };
    /**
     * @private
     * @param {?} ac
     * @return {?}
     */
    RegisterComponent.prototype.matchPassword = /**
     * @private
     * @param {?} ac
     * @return {?}
     */
    function (ac) {
        if (ac.get('password').value !== ac.get('passwordconf').value) {
            return { NotEqual: true };
        }
    };
    /*
     * Change the inputed email to lowercase because
     * the backend only accepts lowercase emails
     */
    /*
       * Change the inputed email to lowercase because
       * the backend only accepts lowercase emails
       */
    /**
     * @return {?}
     */
    RegisterComponent.prototype.emailToLowerCase = /*
       * Change the inputed email to lowercase because
       * the backend only accepts lowercase emails
       */
    /**
     * @return {?}
     */
    function () {
        this.userRegistrationForm.value.email = this.userRegistrationForm.value.email.toLowerCase();
    };
    /**
     * @return {?}
     */
    RegisterComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    RegisterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-register',
                    template: "<section class=\"cx-page-section container\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-6\">\n      <div class=\"cx-section\">\n        <form [formGroup]=\"userRegistrationForm\">\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.title' | cxTranslate\n              }}</span>\n              <select formControlName=\"titleCode\" class=\"form-control\">\n                <option selected value=\"\" disabled>{{\n                  'register.selectTitle' | cxTranslate\n                }}</option>\n                <option\n                  *ngFor=\"let title of (titles$ | async)\"\n                  [value]=\"title.code\"\n                  >{{ title.name }}</option\n                >\n              </select>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.firstName.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"firstname\"\n                placeholder=\"{{\n                  'register.firstName.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"firstName\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.lastName.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"lastname\"\n                placeholder=\"{{\n                  'register.lastName.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"lastName\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.emailAddress.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  (userRegistrationForm.get('email').errors?.email ||\n                    userRegistrationForm.get('email').errors?.InvalidEmail) &&\n                  userRegistrationForm.get('email').dirty\n                \"\n                type=\"email\"\n                name=\"email\"\n                placeholder=\"{{\n                  'register.emailAddress.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"email\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.password.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  userRegistrationForm.get('password').invalid &&\n                  userRegistrationForm.get('password').dirty\n                \"\n                type=\"password\"\n                name=\"password\"\n                placeholder=\"{{\n                  'register.password.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"password\"\n              />\n              <div\n                class=\"invalid-feedback\"\n                *ngIf=\"\n                  userRegistrationForm.get('password').invalid &&\n                  userRegistrationForm.get('password').dirty\n                \"\n              >\n                <span>{{\n                  'register.passwordMinRequirements' | cxTranslate\n                }}</span>\n              </div>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.confirmPassword.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  userRegistrationForm.get('password').value !==\n                  userRegistrationForm.get('passwordconf').value\n                \"\n                type=\"password\"\n                name=\"confirmpassword\"\n                placeholder=\"{{\n                  'register.confirmPassword.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"passwordconf\"\n              />\n              <div\n                class=\"invalid-feedback\"\n                *ngIf=\"\n                  userRegistrationForm.get('password').value !==\n                    userRegistrationForm.get('passwordconf').value &&\n                  userRegistrationForm.get('passwordconf').value\n                \"\n              >\n                <span>{{\n                  'register.bothPasswordMustMatch' | cxTranslate\n                }}</span>\n              </div>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  name=\"newsletter\"\n                  class=\"form-check-input\"\n                  formControlName=\"newsletter\"\n                />\n                <span class=\"form-check-label\">\n                  {{ 'register.emailMarketing' | cxTranslate }}\n                </span>\n              </label>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  name=\"termsandconditions\"\n                  formControlName=\"termsandconditions\"\n                />\n                <span class=\"form-check-label\">\n                  {{ 'register.confirmThatRead' | cxTranslate }}\n                  <a\n                    [routerLink]=\"{ cxRoute: 'termsAndConditions' } | cxUrl\"\n                    target=\"_blank\"\n                  >\n                    {{ 'register.termsAndConditions' | cxTranslate }}\n                  </a>\n                </span>\n              </label>\n            </div>\n          </div>\n          <button\n            type=\"submit\"\n            (click)=\"submit()\"\n            [disabled]=\"userRegistrationForm.invalid\"\n            class=\"btn btn-block btn-primary\"\n          >\n            {{ 'register.register' | cxTranslate }}\n          </button>\n          <a\n            class=\"cx-login-link btn-link\"\n            [routerLink]=\"{ cxRoute: 'login' } | cxUrl\"\n            >{{ 'register.signIn' | cxTranslate }}</a\n          >\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n"
                }] }
    ];
    /** @nocollapse */
    RegisterComponent.ctorParameters = function () { return [
        { type: AuthService },
        { type: AuthRedirectService },
        { type: UserService },
        { type: GlobalMessageService },
        { type: FormBuilder }
    ]; };
    return RegisterComponent;
}());
export { RegisterComponent };
if (false) {
    /** @type {?} */
    RegisterComponent.prototype.titles$;
    /**
     * @type {?}
     * @private
     */
    RegisterComponent.prototype.subscription;
    /** @type {?} */
    RegisterComponent.prototype.userRegistrationForm;
    /**
     * @type {?}
     * @private
     */
    RegisterComponent.prototype.auth;
    /**
     * @type {?}
     * @private
     */
    RegisterComponent.prototype.authRedirectService;
    /**
     * @type {?}
     * @private
     */
    RegisterComponent.prototype.userService;
    /**
     * @type {?}
     * @private
     */
    RegisterComponent.prototype.globalMessageService;
    /**
     * @type {?}
     * @private
     */
    RegisterComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFFTCxXQUFXLEVBRVgsVUFBVSxHQUNYLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixXQUFXLEVBRVgsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUVqQixXQUFXLEdBRVosTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFFL0Y7SUEwQkUsMkJBQ1UsSUFBaUIsRUFDakIsbUJBQXdDLEVBQ3hDLFdBQXdCLEVBQ3hCLG9CQUEwQyxFQUMxQyxFQUFlO1FBSmYsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNqQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQXhCakIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTFDLHlCQUFvQixHQUFjLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUM3QztZQUNFLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNmLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3BDLFFBQVEsRUFB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QUNsRCxDQUFDOzs7Ozs7SUFFTyx5Q0FBYTs7Ozs7SUFBckIsVUFBc0IsRUFBbUI7UUFDdkMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUM3RCxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO1NBQzNCO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7Ozs7SUFDSCw0Q0FBZ0I7Ozs7Ozs7SUFBaEI7UUFDRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM5RixDQUFDOzs7O0lBRUQsdUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDOztnQkE1R0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QiwyeU5BQXdDO2lCQUN6Qzs7OztnQkFmQyxXQUFXO2dCQURYLG1CQUFtQjtnQkFNbkIsV0FBVztnQkFIWCxvQkFBb0I7Z0JBUnBCLFdBQVc7O0lBK0hiLHdCQUFDO0NBQUEsQUE3R0QsSUE2R0M7U0F6R1ksaUJBQWlCOzs7SUFDNUIsb0NBQTZCOzs7OztJQUU3Qix5Q0FBMEM7O0lBRTFDLGlEQWVFOzs7OztJQUdBLGlDQUF5Qjs7Ozs7SUFDekIsZ0RBQWdEOzs7OztJQUNoRCx3Q0FBZ0M7Ozs7O0lBQ2hDLGlEQUFrRDs7Ozs7SUFDbEQsK0JBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWJzdHJhY3RDb250cm9sLFxuICBGb3JtQnVpbGRlcixcbiAgRm9ybUdyb3VwLFxuICBWYWxpZGF0b3JzLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBBdXRoUmVkaXJlY3RTZXJ2aWNlLFxuICBBdXRoU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZUVudGl0aWVzLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIFRpdGxlLFxuICBVc2VyU2VydmljZSxcbiAgVXNlclNpZ25VcCxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDdXN0b21Gb3JtVmFsaWRhdG9ycyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC91dGlscy92YWxpZGF0b3JzL2N1c3RvbS1mb3JtLXZhbGlkYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1yZWdpc3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICB0aXRsZXMkOiBPYnNlcnZhYmxlPFRpdGxlW10+O1xuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIHVzZXJSZWdpc3RyYXRpb25Gb3JtOiBGb3JtR3JvdXAgPSB0aGlzLmZiLmdyb3VwKFxuICAgIHtcbiAgICAgIHRpdGxlQ29kZTogWycnXSxcbiAgICAgIGZpcnN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGxhc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgZW1haWw6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIEN1c3RvbUZvcm1WYWxpZGF0b3JzLmVtYWlsVmFsaWRhdG9yXV0sXG4gICAgICBwYXNzd29yZDogW1xuICAgICAgICAnJyxcbiAgICAgICAgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIEN1c3RvbUZvcm1WYWxpZGF0b3JzLnBhc3N3b3JkVmFsaWRhdG9yXSxcbiAgICAgIF0sXG4gICAgICBwYXNzd29yZGNvbmY6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBuZXdzbGV0dGVyOiBbZmFsc2VdLFxuICAgICAgdGVybXNhbmRjb25kaXRpb25zOiBbZmFsc2UsIFZhbGlkYXRvcnMucmVxdWlyZWRUcnVlXSxcbiAgICB9LFxuICAgIHsgdmFsaWRhdG9yOiB0aGlzLm1hdGNoUGFzc3dvcmQgfVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhdXRoUmVkaXJlY3RTZXJ2aWNlOiBBdXRoUmVkaXJlY3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRpdGxlcyQgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldFRpdGxlcygpLnBpcGUoXG4gICAgICB0YXAodGl0bGVzID0+IHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRpdGxlcykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2FkVGl0bGVzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMuYXV0aC5nZXRVc2VyVG9rZW4oKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEuYWNjZXNzX3Rva2VuKSB7XG4gICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5yZW1vdmUoR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1IpO1xuICAgICAgICAgIHRoaXMuYXV0aFJlZGlyZWN0U2VydmljZS5yZWRpcmVjdCgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBUT0RPOiBXb3JrYXJvdW5kOiBhbGxvdyBzZXJ2ZXIgZm9yIGRlY2lkZSBpcyB0aXRsZUNvZGUgbWFuZGF0b3J5IChpZiB5ZXMsIHByb3ZpZGUgcGVyc29uYWxpemVkIG1lc3NhZ2UpXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZVxuICAgICAgICAuZ2V0KClcbiAgICAgICAgLnBpcGUoZmlsdGVyKGRhdGEgPT4gT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID4gMCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKGdsb2JhbE1lc3NhZ2VFbnRpdGllczogR2xvYmFsTWVzc2FnZUVudGl0aWVzKSA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgZ2xvYmFsTWVzc2FnZUVudGl0aWVzW0dsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXS5zb21lKFxuICAgICAgICAgICAgICBtZXNzYWdlID0+IG1lc3NhZ2UgPT09ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLidcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UucmVtb3ZlKEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SKTtcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICAgICAgICB7IGtleTogJ3JlZ2lzdGVyLnRpdGxlUmVxdWlyZWQnIH0sXG4gICAgICAgICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgc3VibWl0KCk6IHZvaWQge1xuICAgIHRoaXMuZW1haWxUb0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IHtcbiAgICAgIGZpcnN0TmFtZSxcbiAgICAgIGxhc3ROYW1lLFxuICAgICAgZW1haWwsXG4gICAgICBwYXNzd29yZCxcbiAgICAgIHRpdGxlQ29kZSxcbiAgICB9ID0gdGhpcy51c2VyUmVnaXN0cmF0aW9uRm9ybS52YWx1ZTtcbiAgICBjb25zdCB1c2VyUmVnaXN0ZXJGb3JtRGF0YTogVXNlclNpZ25VcCA9IHtcbiAgICAgIGZpcnN0TmFtZSxcbiAgICAgIGxhc3ROYW1lLFxuICAgICAgdWlkOiBlbWFpbCxcbiAgICAgIHBhc3N3b3JkLFxuICAgICAgdGl0bGVDb2RlLFxuICAgIH07XG4gICAgdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih1c2VyUmVnaXN0ZXJGb3JtRGF0YSk7XG4gIH1cblxuICBwcml2YXRlIG1hdGNoUGFzc3dvcmQoYWM6IEFic3RyYWN0Q29udHJvbCk6IHsgTm90RXF1YWw6IGJvb2xlYW4gfSB7XG4gICAgaWYgKGFjLmdldCgncGFzc3dvcmQnKS52YWx1ZSAhPT0gYWMuZ2V0KCdwYXNzd29yZGNvbmYnKS52YWx1ZSkge1xuICAgICAgcmV0dXJuIHsgTm90RXF1YWw6IHRydWUgfTtcbiAgICB9XG4gIH1cblxuICAvKlxuICAgKiBDaGFuZ2UgdGhlIGlucHV0ZWQgZW1haWwgdG8gbG93ZXJjYXNlIGJlY2F1c2VcbiAgICogdGhlIGJhY2tlbmQgb25seSBhY2NlcHRzIGxvd2VyY2FzZSBlbWFpbHNcbiAgICovXG4gIGVtYWlsVG9Mb3dlckNhc2UoKTogdm9pZCB7XG4gICAgdGhpcy51c2VyUmVnaXN0cmF0aW9uRm9ybS52YWx1ZS5lbWFpbCA9IHRoaXMudXNlclJlZ2lzdHJhdGlvbkZvcm0udmFsdWUuZW1haWwudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==