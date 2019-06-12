/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormBuilder, Validators, } from '@angular/forms';
import { AuthRedirectService, AuthService, GlobalMessageService, GlobalMessageType, UserService, } from '@spartacus/core';
import { filter, tap } from 'rxjs/operators';
import { CustomFormValidators } from '../../../shared/utils/validators/custom-form-validators';
export class RegisterComponent {
    /**
     * @param {?} auth
     * @param {?} authRedirectService
     * @param {?} userService
     * @param {?} globalMessageService
     * @param {?} fb
     */
    constructor(auth, authRedirectService, userService, globalMessageService, fb) {
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
    ngOnInit() {
        this.titles$ = this.userService.getTitles().pipe(tap((/**
         * @param {?} titles
         * @return {?}
         */
        titles => {
            if (Object.keys(titles).length === 0) {
                this.userService.loadTitles();
            }
        })));
    }
    /**
     * @return {?}
     */
    submit() {
        const { firstName, lastName, email, password, titleCode, } = this.userRegistrationForm.value;
        /** @type {?} */
        const userRegisterFormData = {
            firstName,
            lastName,
            uid: email,
            password,
            titleCode,
        };
        this.userService.register(userRegisterFormData);
        if (!this.subscription) {
            this.subscription = this.auth.getUserToken().subscribe((/**
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
        // TODO: Workaround: allow server for decide is titleCode mandatory (if yes, provide personalized message)
        this.globalMessageService
            .get()
            .pipe(filter((/**
         * @param {?} data
         * @return {?}
         */
        data => Object.keys(data).length > 0)))
            .subscribe((/**
         * @param {?} globalMessageEntities
         * @return {?}
         */
        (globalMessageEntities) => {
            if (globalMessageEntities[GlobalMessageType.MSG_TYPE_ERROR].some((/**
             * @param {?} message
             * @return {?}
             */
            message => message === 'This field is required.'))) {
                this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
                this.globalMessageService.add({ key: 'register.titleRequired' }, GlobalMessageType.MSG_TYPE_ERROR);
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    /**
     * @private
     * @param {?} ac
     * @return {?}
     */
    matchPassword(ac) {
        if (ac.get('password').value !== ac.get('passwordconf').value) {
            return { NotEqual: true };
        }
    }
}
RegisterComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-register',
                template: "<section class=\"cx-page-section container\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-6\">\n      <div class=\"cx-section\">\n        <form [formGroup]=\"userRegistrationForm\">\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.title' | cxTranslate\n              }}</span>\n              <select formControlName=\"titleCode\" class=\"form-control\">\n                <option selected value=\"\" disabled>{{\n                  'register.selectTitle' | cxTranslate\n                }}</option>\n                <option\n                  *ngFor=\"let title of (titles$ | async)\"\n                  [value]=\"title.code\"\n                  >{{ title.name }}</option\n                >\n              </select>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.firstName.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"firstname\"\n                placeholder=\"{{\n                  'register.firstName.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"firstName\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.lastName.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"lastname\"\n                placeholder=\"{{\n                  'register.lastName.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"lastName\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.emailAddress.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  (userRegistrationForm.get('email').errors?.email ||\n                    userRegistrationForm.get('email').errors?.InvalidEmail) &&\n                  userRegistrationForm.get('email').dirty\n                \"\n                type=\"email\"\n                name=\"email\"\n                placeholder=\"{{\n                  'register.emailAddress.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"email\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.password.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  userRegistrationForm.get('password').invalid &&\n                  userRegistrationForm.get('password').dirty\n                \"\n                type=\"password\"\n                name=\"password\"\n                placeholder=\"{{\n                  'register.password.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"password\"\n              />\n              <div\n                class=\"invalid-feedback\"\n                *ngIf=\"\n                  userRegistrationForm.get('password').invalid &&\n                  userRegistrationForm.get('password').dirty\n                \"\n              >\n                <span>{{\n                  'register.passwordMinRequirements' | cxTranslate\n                }}</span>\n              </div>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.confirmPassword.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  userRegistrationForm.get('password').value !==\n                  userRegistrationForm.get('passwordconf').value\n                \"\n                type=\"password\"\n                name=\"confirmpassword\"\n                placeholder=\"{{\n                  'register.confirmPassword.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"passwordconf\"\n              />\n              <div\n                class=\"invalid-feedback\"\n                *ngIf=\"\n                  userRegistrationForm.get('password').value !==\n                    userRegistrationForm.get('passwordconf').value &&\n                  userRegistrationForm.get('passwordconf').value\n                \"\n              >\n                <span>{{\n                  'register.bothPasswordMustMatch' | cxTranslate\n                }}</span>\n              </div>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  name=\"newsletter\"\n                  class=\"form-check-input\"\n                  formControlName=\"newsletter\"\n                />\n                <span class=\"form-check-label\">\n                  {{ 'register.emailMarketing' | cxTranslate }}\n                </span>\n              </label>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  name=\"termsandconditions\"\n                  formControlName=\"termsandconditions\"\n                />\n                <span class=\"form-check-label\">\n                  {{ 'register.confirmThatRead' | cxTranslate }}\n                  <a\n                    [routerLink]=\"{ cxRoute: 'termsAndConditions' } | cxUrl\"\n                    target=\"_blank\"\n                  >\n                    {{ 'register.termsAndConditions' | cxTranslate }}\n                  </a>\n                </span>\n              </label>\n            </div>\n          </div>\n          <button\n            type=\"submit\"\n            (click)=\"submit()\"\n            [disabled]=\"userRegistrationForm.invalid\"\n            class=\"btn btn-block btn-primary\"\n          >\n            {{ 'register.register' | cxTranslate }}\n          </button>\n          <a\n            class=\"cx-login-link btn-link\"\n            [routerLink]=\"{ cxRoute: 'login' } | cxUrl\"\n            >{{ 'register.signIn' | cxTranslate }}</a\n          >\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n"
            }] }
];
/** @nocollapse */
RegisterComponent.ctorParameters = () => [
    { type: AuthService },
    { type: AuthRedirectService },
    { type: UserService },
    { type: GlobalMessageService },
    { type: FormBuilder }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFFTCxXQUFXLEVBRVgsVUFBVSxHQUNYLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixXQUFXLEVBRVgsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUdqQixXQUFXLEdBQ1osTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBTS9GLE1BQU0sT0FBTyxpQkFBaUI7Ozs7Ozs7O0lBb0I1QixZQUNVLElBQWlCLEVBQ2pCLG1CQUF3QyxFQUN4QyxXQUF3QixFQUN4QixvQkFBMEMsRUFDMUMsRUFBZTtRQUpmLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLE9BQUUsR0FBRixFQUFFLENBQWE7UUF0QnpCLHlCQUFvQixHQUFjLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUM3QztZQUNFLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNmLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3BDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ25DLEtBQUssRUFBRSxD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QUFtQjtRQUN2QyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQzdELE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7WUFqR0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QiwyeU5BQXdDO2FBQ3pDOzs7O1lBZkMsV0FBVztZQURYLG1CQUFtQjtZQU9uQixXQUFXO1lBSlgsb0JBQW9CO1lBUnBCLFdBQVc7Ozs7SUF1Qlgsb0NBQTZCOztJQUM3Qix5Q0FBMkI7O0lBQzNCLGlEQWVFOzs7OztJQUdBLGlDQUF5Qjs7Ozs7SUFDekIsZ0RBQWdEOzs7OztJQUNoRCx3Q0FBZ0M7Ozs7O0lBQ2hDLGlEQUFrRDs7Ozs7SUFDbEQsK0JBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWJzdHJhY3RDb250cm9sLFxuICBGb3JtQnVpbGRlcixcbiAgRm9ybUdyb3VwLFxuICBWYWxpZGF0b3JzLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBBdXRoUmVkaXJlY3RTZXJ2aWNlLFxuICBBdXRoU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZUVudGl0aWVzLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIFRpdGxlLFxuICBVc2VyU2lnblVwLFxuICBVc2VyU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDdXN0b21Gb3JtVmFsaWRhdG9ycyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC91dGlscy92YWxpZGF0b3JzL2N1c3RvbS1mb3JtLXZhbGlkYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1yZWdpc3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICB0aXRsZXMkOiBPYnNlcnZhYmxlPFRpdGxlW10+O1xuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgdXNlclJlZ2lzdHJhdGlvbkZvcm06IEZvcm1Hcm91cCA9IHRoaXMuZmIuZ3JvdXAoXG4gICAge1xuICAgICAgdGl0bGVDb2RlOiBbJyddLFxuICAgICAgZmlyc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgbGFzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBlbWFpbDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgQ3VzdG9tRm9ybVZhbGlkYXRvcnMuZW1haWxWYWxpZGF0b3JdXSxcbiAgICAgIHBhc3N3b3JkOiBbXG4gICAgICAgICcnLFxuICAgICAgICBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgQ3VzdG9tRm9ybVZhbGlkYXRvcnMucGFzc3dvcmRWYWxpZGF0b3JdLFxuICAgICAgXSxcbiAgICAgIHBhc3N3b3JkY29uZjogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIG5ld3NsZXR0ZXI6IFtmYWxzZV0sXG4gICAgICB0ZXJtc2FuZGNvbmRpdGlvbnM6IFtmYWxzZSwgVmFsaWRhdG9ycy5yZXF1aXJlZFRydWVdLFxuICAgIH0sXG4gICAgeyB2YWxpZGF0b3I6IHRoaXMubWF0Y2hQYXNzd29yZCB9XG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhdXRoOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhSZWRpcmVjdFNlcnZpY2U6IEF1dGhSZWRpcmVjdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXJcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudGl0bGVzJCA9IHRoaXMudXNlclNlcnZpY2UuZ2V0VGl0bGVzKCkucGlwZShcbiAgICAgIHRhcCh0aXRsZXMgPT4ge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModGl0bGVzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvYWRUaXRsZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgc3VibWl0KCk6IHZvaWQge1xuICAgIGNvbnN0IHtcbiAgICAgIGZpcnN0TmFtZSxcbiAgICAgIGxhc3ROYW1lLFxuICAgICAgZW1haWwsXG4gICAgICBwYXNzd29yZCxcbiAgICAgIHRpdGxlQ29kZSxcbiAgICB9ID0gdGhpcy51c2VyUmVnaXN0cmF0aW9uRm9ybS52YWx1ZTtcbiAgICBjb25zdCB1c2VyUmVnaXN0ZXJGb3JtRGF0YTogVXNlclNpZ25VcCA9IHtcbiAgICAgIGZpcnN0TmFtZSxcbiAgICAgIGxhc3ROYW1lLFxuICAgICAgdWlkOiBlbWFpbCxcbiAgICAgIHBhc3N3b3JkLFxuICAgICAgdGl0bGVDb2RlLFxuICAgIH07XG4gICAgdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih1c2VyUmVnaXN0ZXJGb3JtRGF0YSk7XG5cbiAgICBpZiAoIXRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuYXV0aC5nZXRVc2VyVG9rZW4oKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEuYWNjZXNzX3Rva2VuKSB7XG4gICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5yZW1vdmUoR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1IpO1xuICAgICAgICAgIHRoaXMuYXV0aFJlZGlyZWN0U2VydmljZS5yZWRpcmVjdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBXb3JrYXJvdW5kOiBhbGxvdyBzZXJ2ZXIgZm9yIGRlY2lkZSBpcyB0aXRsZUNvZGUgbWFuZGF0b3J5IChpZiB5ZXMsIHByb3ZpZGUgcGVyc29uYWxpemVkIG1lc3NhZ2UpXG4gICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZVxuICAgICAgLmdldCgpXG4gICAgICAucGlwZShmaWx0ZXIoZGF0YSA9PiBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPiAwKSlcbiAgICAgIC5zdWJzY3JpYmUoKGdsb2JhbE1lc3NhZ2VFbnRpdGllczogR2xvYmFsTWVzc2FnZUVudGl0aWVzKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBnbG9iYWxNZXNzYWdlRW50aXRpZXNbR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JdLnNvbWUoXG4gICAgICAgICAgICBtZXNzYWdlID0+IG1lc3NhZ2UgPT09ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLidcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UucmVtb3ZlKEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SKTtcbiAgICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICAgIHsga2V5OiAncmVnaXN0ZXIudGl0bGVSZXF1aXJlZCcgfSxcbiAgICAgICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtYXRjaFBhc3N3b3JkKGFjOiBBYnN0cmFjdENvbnRyb2wpOiB7IE5vdEVxdWFsOiBib29sZWFuIH0ge1xuICAgIGlmIChhYy5nZXQoJ3Bhc3N3b3JkJykudmFsdWUgIT09IGFjLmdldCgncGFzc3dvcmRjb25mJykudmFsdWUpIHtcbiAgICAgIHJldHVybiB7IE5vdEVxdWFsOiB0cnVlIH07XG4gICAgfVxuICB9XG59XG4iXX0=