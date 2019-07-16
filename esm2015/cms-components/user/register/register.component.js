/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormBuilder, Validators, } from '@angular/forms';
import { AuthRedirectService, AuthService, GlobalMessageService, GlobalMessageType, UserService, } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
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
    ngOnInit() {
        this.titles$ = this.userService.getTitles().pipe(tap((/**
         * @param {?} titles
         * @return {?}
         */
        titles => {
            if (Object.keys(titles).length === 0) {
                this.userService.loadTitles();
            }
        })), map((/**
         * @param {?} titles
         * @return {?}
         */
        titles => {
            /** @type {?} */
            const noneTitle = { code: '', name: 'Select title' };
            return [noneTitle, ...titles];
        })));
        this.subscription.add(this.auth.getUserToken().subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            if (data && data.access_token) {
                this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
                this.authRedirectService.redirect();
            }
        })));
        // TODO: Workaround: allow server for decide is titleCode mandatory (if yes, provide personalized message)
        this.subscription.add(this.globalMessageService
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
        })));
    }
    /**
     * @return {?}
     */
    submit() {
        this.emailToLowerCase();
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
    /*
       * Change the inputed email to lowercase because
       * the backend only accepts lowercase emails
       */
    /**
     * @return {?}
     */
    emailToLowerCase() {
        this.userRegistrationForm.value.email = this.userRegistrationForm.value.email.toLowerCase();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * @param {?} title
     * @return {?}
     */
    titleSelected(title) {
        this.userRegistrationForm['controls'].titleCode.setValue(title.code);
    }
}
RegisterComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-register',
                template: "<section class=\"cx-page-section container\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-6\">\n      <div class=\"cx-section\">\n        <form [formGroup]=\"userRegistrationForm\">\n          <div class=\"form-group\">\n            <label aria-required=\"true\">\n              <span class=\"label-content\">{{\n                'register.title' | cxTranslate\n              }}</span>\n              <ng-container *ngIf=\"(titles$ | async) as titles\">\n                <ng-select\n                  class=\"title-select\"\n                  formControlName=\"titleCode\"\n                  [searchable]=\"false\"\n                  [clearable]=\"false\"\n                  [items]=\"titles\"\n                  bindLabel=\"name\"\n                  bindValue=\"code\"\n                  (change)=\"titleSelected($event)\"\n                >\n                </ng-select>\n              </ng-container>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.firstName.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"firstname\"\n                placeholder=\"{{\n                  'register.firstName.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"firstName\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.lastName.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"lastname\"\n                placeholder=\"{{\n                  'register.lastName.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"lastName\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.emailAddress.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  (userRegistrationForm.get('email').errors?.email ||\n                    userRegistrationForm.get('email').errors?.InvalidEmail) &&\n                  userRegistrationForm.get('email').dirty\n                \"\n                type=\"email\"\n                name=\"email\"\n                placeholder=\"{{\n                  'register.emailAddress.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"email\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.password.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  userRegistrationForm.get('password').invalid &&\n                  userRegistrationForm.get('password').dirty\n                \"\n                type=\"password\"\n                name=\"password\"\n                placeholder=\"{{\n                  'register.password.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"password\"\n              />\n              <div\n                class=\"invalid-feedback\"\n                *ngIf=\"\n                  userRegistrationForm.get('password').invalid &&\n                  userRegistrationForm.get('password').dirty\n                \"\n              >\n                <span>{{\n                  'register.passwordMinRequirements' | cxTranslate\n                }}</span>\n              </div>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.confirmPassword.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  userRegistrationForm.get('password').value !==\n                  userRegistrationForm.get('passwordconf').value\n                \"\n                type=\"password\"\n                name=\"confirmpassword\"\n                placeholder=\"{{\n                  'register.confirmPassword.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"passwordconf\"\n              />\n              <div\n                class=\"invalid-feedback\"\n                *ngIf=\"\n                  userRegistrationForm.get('password').value !==\n                    userRegistrationForm.get('passwordconf').value &&\n                  userRegistrationForm.get('passwordconf').value\n                \"\n              >\n                <span>{{\n                  'register.bothPasswordMustMatch' | cxTranslate\n                }}</span>\n              </div>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  name=\"newsletter\"\n                  class=\"form-check-input\"\n                  formControlName=\"newsletter\"\n                />\n                <span class=\"form-check-label\">\n                  {{ 'register.emailMarketing' | cxTranslate }}\n                </span>\n              </label>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  name=\"termsandconditions\"\n                  formControlName=\"termsandconditions\"\n                />\n                <span class=\"form-check-label\">\n                  {{ 'register.confirmThatRead' | cxTranslate }}\n                  <a\n                    [routerLink]=\"{ cxRoute: 'termsAndConditions' } | cxUrl\"\n                    target=\"_blank\"\n                  >\n                    {{ 'register.termsAndConditions' | cxTranslate }}\n                  </a>\n                </span>\n              </label>\n            </div>\n          </div>\n          <button\n            type=\"submit\"\n            (click)=\"submit()\"\n            [disabled]=\"userRegistrationForm.invalid\"\n            class=\"btn btn-block btn-primary\"\n          >\n            {{ 'register.register' | cxTranslate }}\n          </button>\n          <a\n            class=\"cx-login-link btn-link\"\n            [routerLink]=\"{ cxRoute: 'login' } | cxUrl\"\n            >{{ 'register.signIn' | cxTranslate }}</a\n          >\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFFTCxXQUFXLEVBRVgsVUFBVSxHQUNYLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixXQUFXLEVBRVgsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUVqQixXQUFXLEdBRVosTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBTS9GLE1BQU0sT0FBTyxpQkFBaUI7Ozs7Ozs7O0lBc0I1QixZQUNVLElBQWlCLEVBQ2pCLG1CQUF3QyxFQUN4QyxXQUF3QixFQUN4QixvQkFBMEMsRUFDMUMsRUFBZTtRQUpmLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLE9BQUUsR0FBRixFQUFFLENBQWE7UUF4QmpCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUxQyx5QkFBb0IsR0FBYyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FDN0M7WUFDRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDZixTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUs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a0Q7Ozs7O0lBQ2xELCtCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFic3RyYWN0Q29udHJvbCxcbiAgRm9ybUJ1aWxkZXIsXG4gIEZvcm1Hcm91cCxcbiAgVmFsaWRhdG9ycyxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQXV0aFJlZGlyZWN0U2VydmljZSxcbiAgQXV0aFNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VFbnRpdGllcyxcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxuICBUaXRsZSxcbiAgVXNlclNlcnZpY2UsXG4gIFVzZXJTaWduVXAsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDdXN0b21Gb3JtVmFsaWRhdG9ycyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC91dGlscy92YWxpZGF0b3JzL2N1c3RvbS1mb3JtLXZhbGlkYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1yZWdpc3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICB0aXRsZXMkOiBPYnNlcnZhYmxlPFRpdGxlW10+O1xuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIHVzZXJSZWdpc3RyYXRpb25Gb3JtOiBGb3JtR3JvdXAgPSB0aGlzLmZiLmdyb3VwKFxuICAgIHtcbiAgICAgIHRpdGxlQ29kZTogWycnXSxcbiAgICAgIGZpcnN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGxhc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgZW1haWw6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIEN1c3RvbUZvcm1WYWxpZGF0b3JzLmVtYWlsVmFsaWRhdG9yXV0sXG4gICAgICBwYXNzd29yZDogW1xuICAgICAgICAnJyxcbiAgICAgICAgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIEN1c3RvbUZvcm1WYWxpZGF0b3JzLnBhc3N3b3JkVmFsaWRhdG9yXSxcbiAgICAgIF0sXG4gICAgICBwYXNzd29yZGNvbmY6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBuZXdzbGV0dGVyOiBbZmFsc2VdLFxuICAgICAgdGVybXNhbmRjb25kaXRpb25zOiBbZmFsc2UsIFZhbGlkYXRvcnMucmVxdWlyZWRUcnVlXSxcbiAgICB9LFxuICAgIHsgdmFsaWRhdG9yOiB0aGlzLm1hdGNoUGFzc3dvcmQgfVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhdXRoUmVkaXJlY3RTZXJ2aWNlOiBBdXRoUmVkaXJlY3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRpdGxlcyQgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldFRpdGxlcygpLnBpcGUoXG4gICAgICB0YXAodGl0bGVzID0+IHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRpdGxlcykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2FkVGl0bGVzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKHRpdGxlcyA9PiB7XG4gICAgICAgIGNvbnN0IG5vbmVUaXRsZSA9IHsgY29kZTogJycsIG5hbWU6ICdTZWxlY3QgdGl0bGUnIH07XG4gICAgICAgIHJldHVybiBbbm9uZVRpdGxlLCAuLi50aXRsZXNdO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5hdXRoLmdldFVzZXJUb2tlbigpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLnJlbW92ZShHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUik7XG4gICAgICAgICAgdGhpcy5hdXRoUmVkaXJlY3RTZXJ2aWNlLnJlZGlyZWN0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIFRPRE86IFdvcmthcm91bmQ6IGFsbG93IHNlcnZlciBmb3IgZGVjaWRlIGlzIHRpdGxlQ29kZSBtYW5kYXRvcnkgKGlmIHllcywgcHJvdmlkZSBwZXJzb25hbGl6ZWQgbWVzc2FnZSlcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlXG4gICAgICAgIC5nZXQoKVxuICAgICAgICAucGlwZShmaWx0ZXIoZGF0YSA9PiBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPiAwKSlcbiAgICAgICAgLnN1YnNjcmliZSgoZ2xvYmFsTWVzc2FnZUVudGl0aWVzOiBHbG9iYWxNZXNzYWdlRW50aXRpZXMpID0+IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBnbG9iYWxNZXNzYWdlRW50aXRpZXNbR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JdLnNvbWUoXG4gICAgICAgICAgICAgIG1lc3NhZ2UgPT4gbWVzc2FnZSA9PT0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQuJ1xuICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5yZW1vdmUoR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1IpO1xuICAgICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgICAgICAgIHsga2V5OiAncmVnaXN0ZXIudGl0bGVSZXF1aXJlZCcgfSxcbiAgICAgICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICBzdWJtaXQoKTogdm9pZCB7XG4gICAgdGhpcy5lbWFpbFRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3Qge1xuICAgICAgZmlyc3ROYW1lLFxuICAgICAgbGFzdE5hbWUsXG4gICAgICBlbWFpbCxcbiAgICAgIHBhc3N3b3JkLFxuICAgICAgdGl0bGVDb2RlLFxuICAgIH0gPSB0aGlzLnVzZXJSZWdpc3RyYXRpb25Gb3JtLnZhbHVlO1xuICAgIGNvbnN0IHVzZXJSZWdpc3RlckZvcm1EYXRhOiBVc2VyU2lnblVwID0ge1xuICAgICAgZmlyc3ROYW1lLFxuICAgICAgbGFzdE5hbWUsXG4gICAgICB1aWQ6IGVtYWlsLFxuICAgICAgcGFzc3dvcmQsXG4gICAgICB0aXRsZUNvZGUsXG4gICAgfTtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKHVzZXJSZWdpc3RlckZvcm1EYXRhKTtcbiAgfVxuXG4gIHByaXZhdGUgbWF0Y2hQYXNzd29yZChhYzogQWJzdHJhY3RDb250cm9sKTogeyBOb3RFcXVhbDogYm9vbGVhbiB9IHtcbiAgICBpZiAoYWMuZ2V0KCdwYXNzd29yZCcpLnZhbHVlICE9PSBhYy5nZXQoJ3Bhc3N3b3JkY29uZicpLnZhbHVlKSB7XG4gICAgICByZXR1cm4geyBOb3RFcXVhbDogdHJ1ZSB9O1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIENoYW5nZSB0aGUgaW5wdXRlZCBlbWFpbCB0byBsb3dlcmNhc2UgYmVjYXVzZVxuICAgKiB0aGUgYmFja2VuZCBvbmx5IGFjY2VwdHMgbG93ZXJjYXNlIGVtYWlsc1xuICAgKi9cbiAgZW1haWxUb0xvd2VyQ2FzZSgpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJSZWdpc3RyYXRpb25Gb3JtLnZhbHVlLmVtYWlsID0gdGhpcy51c2VyUmVnaXN0cmF0aW9uRm9ybS52YWx1ZS5lbWFpbC50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHRpdGxlU2VsZWN0ZWQodGl0bGU6IFRpdGxlKTogdm9pZCB7XG4gICAgdGhpcy51c2VyUmVnaXN0cmF0aW9uRm9ybVsnY29udHJvbHMnXS50aXRsZUNvZGUuc2V0VmFsdWUodGl0bGUuY29kZSk7XG4gIH1cbn1cbiJdfQ==