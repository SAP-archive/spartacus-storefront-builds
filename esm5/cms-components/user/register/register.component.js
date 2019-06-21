/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormBuilder, Validators, } from '@angular/forms';
import { AuthRedirectService, AuthService, GlobalMessageService, GlobalMessageType, UserService, } from '@spartacus/core';
import { filter, tap } from 'rxjs/operators';
import { CustomFormValidators } from '../../../shared/utils/validators/custom-form-validators';
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, authRedirectService, userService, globalMessageService, fb) {
        this.auth = auth;
        this.authRedirectService = authRedirectService;
        this.userService = userService;
        this.globalMessageService = globalMessageService;
        this.fb = fb;
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
    };
    /**
     * @return {?}
     */
    RegisterComponent.prototype.submit = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
        if (!this.subscription) {
            this.subscription = this.auth.getUserToken().subscribe((/**
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
        // TODO: Workaround: allow server for decide is titleCode mandatory (if yes, provide personalized message)
        this.globalMessageService
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
        }));
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
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
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
    /** @type {?} */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFFTCxXQUFXLEVBRVgsVUFBVSxHQUNYLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixXQUFXLEVBRVgsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUVqQixXQUFXLEdBRVosTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBRS9GO0lBd0JFLDJCQUNVLElBQWlCLEVBQ2pCLG1CQUF3QyxFQUN4QyxXQUF3QixFQUN4QixvQkFBMEMsRUFDMUMsRUFBZTtRQUpmLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLE9BQUUsR0FBRixFQUFFLENBQWE7UUF0QnpCLHlCQUFvQixHQUFjLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUM3QztZQUNFLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNmLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3BDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ25DLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUs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QUMsVUFBVSxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQzdELE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7OztJQUNILDRDQUFnQjs7Ozs7OztJQUFoQjtRQUNFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlGLENBQUM7Ozs7SUFFRCx1Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7O2dCQTFHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLDJ5TkFBd0M7aUJBQ3pDOzs7O2dCQWZDLFdBQVc7Z0JBRFgsbUJBQW1CO2dCQU1uQixXQUFXO2dCQUhYLG9CQUFvQjtnQkFScEIsV0FBVzs7SUE2SGIsd0JBQUM7Q0FBQSxBQTNHRCxJQTJHQztTQXZHWSxpQkFBaUI7OztJQUM1QixvQ0FBNkI7O0lBQzdCLHlDQUEyQjs7SUFDM0IsaURBZUU7Ozs7O0lBR0EsaUNBQXlCOzs7OztJQUN6QixnREFBZ0Q7Ozs7O0lBQ2hELHdDQUFnQzs7Ozs7SUFDaEMsaURBQWtEOzs7OztJQUNsRCwrQkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBYnN0cmFjdENvbnRyb2wsXG4gIEZvcm1CdWlsZGVyLFxuICBGb3JtR3JvdXAsXG4gIFZhbGlkYXRvcnMsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIEF1dGhSZWRpcmVjdFNlcnZpY2UsXG4gIEF1dGhTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlRW50aXRpZXMsXG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbiAgVGl0bGUsXG4gIFVzZXJTZXJ2aWNlLFxuICBVc2VyU2lnblVwLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEN1c3RvbUZvcm1WYWxpZGF0b3JzIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3V0aWxzL3ZhbGlkYXRvcnMvY3VzdG9tLWZvcm0tdmFsaWRhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXJlZ2lzdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHRpdGxlcyQ6IE9ic2VydmFibGU8VGl0bGVbXT47XG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICB1c2VyUmVnaXN0cmF0aW9uRm9ybTogRm9ybUdyb3VwID0gdGhpcy5mYi5ncm91cChcbiAgICB7XG4gICAgICB0aXRsZUNvZGU6IFsnJ10sXG4gICAgICBmaXJzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBsYXN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGVtYWlsOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBDdXN0b21Gb3JtVmFsaWRhdG9ycy5lbWFpbFZhbGlkYXRvcl1dLFxuICAgICAgcGFzc3dvcmQ6IFtcbiAgICAgICAgJycsXG4gICAgICAgIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBDdXN0b21Gb3JtVmFsaWRhdG9ycy5wYXNzd29yZFZhbGlkYXRvcl0sXG4gICAgICBdLFxuICAgICAgcGFzc3dvcmRjb25mOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgbmV3c2xldHRlcjogW2ZhbHNlXSxcbiAgICAgIHRlcm1zYW5kY29uZGl0aW9uczogW2ZhbHNlLCBWYWxpZGF0b3JzLnJlcXVpcmVkVHJ1ZV0sXG4gICAgfSxcbiAgICB7IHZhbGlkYXRvcjogdGhpcy5tYXRjaFBhc3N3b3JkIH1cbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGF1dGg6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXV0aFJlZGlyZWN0U2VydmljZTogQXV0aFJlZGlyZWN0U2VydmljZSxcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcml2YXRlIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlclxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy50aXRsZXMkID0gdGhpcy51c2VyU2VydmljZS5nZXRUaXRsZXMoKS5waXBlKFxuICAgICAgdGFwKHRpdGxlcyA9PiB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aXRsZXMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UubG9hZFRpdGxlcygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBzdWJtaXQoKTogdm9pZCB7XG4gICAgdGhpcy5lbWFpbFRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3Qge1xuICAgICAgZmlyc3ROYW1lLFxuICAgICAgbGFzdE5hbWUsXG4gICAgICBlbWFpbCxcbiAgICAgIHBhc3N3b3JkLFxuICAgICAgdGl0bGVDb2RlLFxuICAgIH0gPSB0aGlzLnVzZXJSZWdpc3RyYXRpb25Gb3JtLnZhbHVlO1xuICAgIGNvbnN0IHVzZXJSZWdpc3RlckZvcm1EYXRhOiBVc2VyU2lnblVwID0ge1xuICAgICAgZmlyc3ROYW1lLFxuICAgICAgbGFzdE5hbWUsXG4gICAgICB1aWQ6IGVtYWlsLFxuICAgICAgcGFzc3dvcmQsXG4gICAgICB0aXRsZUNvZGUsXG4gICAgfTtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKHVzZXJSZWdpc3RlckZvcm1EYXRhKTtcblxuICAgIGlmICghdGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5hdXRoLmdldFVzZXJUb2tlbigpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLnJlbW92ZShHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUik7XG4gICAgICAgICAgdGhpcy5hdXRoUmVkaXJlY3RTZXJ2aWNlLnJlZGlyZWN0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFRPRE86IFdvcmthcm91bmQ6IGFsbG93IHNlcnZlciBmb3IgZGVjaWRlIGlzIHRpdGxlQ29kZSBtYW5kYXRvcnkgKGlmIHllcywgcHJvdmlkZSBwZXJzb25hbGl6ZWQgbWVzc2FnZSlcbiAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlXG4gICAgICAuZ2V0KClcbiAgICAgIC5waXBlKGZpbHRlcihkYXRhID0+IE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA+IDApKVxuICAgICAgLnN1YnNjcmliZSgoZ2xvYmFsTWVzc2FnZUVudGl0aWVzOiBHbG9iYWxNZXNzYWdlRW50aXRpZXMpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGdsb2JhbE1lc3NhZ2VFbnRpdGllc1tHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUl0uc29tZShcbiAgICAgICAgICAgIG1lc3NhZ2UgPT4gbWVzc2FnZSA9PT0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQuJ1xuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5yZW1vdmUoR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1IpO1xuICAgICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICAgICAgeyBrZXk6ICdyZWdpc3Rlci50aXRsZVJlcXVpcmVkJyB9LFxuICAgICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbWF0Y2hQYXNzd29yZChhYzogQWJzdHJhY3RDb250cm9sKTogeyBOb3RFcXVhbDogYm9vbGVhbiB9IHtcbiAgICBpZiAoYWMuZ2V0KCdwYXNzd29yZCcpLnZhbHVlICE9PSBhYy5nZXQoJ3Bhc3N3b3JkY29uZicpLnZhbHVlKSB7XG4gICAgICByZXR1cm4geyBOb3RFcXVhbDogdHJ1ZSB9O1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIENoYW5nZSB0aGUgaW5wdXRlZCBlbWFpbCB0byBsb3dlcmNhc2UgYmVjYXVzZVxuICAgKiB0aGUgYmFja2VuZCBvbmx5IGFjY2VwdHMgbG93ZXJjYXNlIGVtYWlsc1xuICAgKi9cbiAgZW1haWxUb0xvd2VyQ2FzZSgpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJSZWdpc3RyYXRpb25Gb3JtLnZhbHVlLmVtYWlsID0gdGhpcy51c2VyUmVnaXN0cmF0aW9uRm9ybS52YWx1ZS5lbWFpbC50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19