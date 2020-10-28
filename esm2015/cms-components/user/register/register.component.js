import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators, } from '@angular/forms';
import { AnonymousConsentsConfig, AnonymousConsentsService, AuthConfigService, GlobalMessageService, GlobalMessageType, OAuthFlow, RoutingService, UserService, } from '@spartacus/core';
import { combineLatest, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CustomFormValidators, sortTitles } from '../../../shared/index';
export class RegisterComponent {
    constructor(userService, globalMessageService, fb, router, anonymousConsentsService, anonymousConsentsConfig, authConfigService) {
        this.userService = userService;
        this.globalMessageService = globalMessageService;
        this.fb = fb;
        this.router = router;
        this.anonymousConsentsService = anonymousConsentsService;
        this.anonymousConsentsConfig = anonymousConsentsConfig;
        this.authConfigService = authConfigService;
        this.subscription = new Subscription();
        this.registerForm = this.fb.group({
            titleCode: [''],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, CustomFormValidators.emailValidator]],
            password: [
                '',
                [Validators.required, CustomFormValidators.passwordValidator],
            ],
            passwordconf: ['', Validators.required],
            newsletter: new FormControl({
                value: false,
                disabled: this.isConsentRequired(),
            }),
            termsandconditions: [false, Validators.requiredTrue],
        }, {
            validators: CustomFormValidators.passwordsMustMatch('password', 'passwordconf'),
        });
    }
    ngOnInit() {
        var _a;
        this.titles$ = this.userService.getTitles().pipe(map((titles) => {
            return titles.sort(sortTitles);
        }));
        this.loading$ = this.userService.getRegisterUserResultLoading();
        this.registerUserProcessInit();
        // TODO: Workaround: allow server for decide is titleCode mandatory (if yes, provide personalized message)
        this.subscription.add(this.globalMessageService
            .get()
            .pipe(filter((messages) => !!Object.keys(messages).length))
            .subscribe((globalMessageEntities) => {
            const messages = globalMessageEntities &&
                globalMessageEntities[GlobalMessageType.MSG_TYPE_ERROR];
            if (messages &&
                messages.some((message) => message === 'This field is required.')) {
                this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
                this.globalMessageService.add({ key: 'register.titleRequired' }, GlobalMessageType.MSG_TYPE_ERROR);
            }
        }));
        const { registerConsent } = (_a = this.anonymousConsentsConfig) === null || _a === void 0 ? void 0 : _a.anonymousConsents;
        this.anonymousConsent$ = combineLatest([
            this.anonymousConsentsService.getConsent(registerConsent),
            this.anonymousConsentsService.getTemplate(registerConsent),
        ]).pipe(map(([consent, template]) => {
            return {
                consent,
                template: template ? template.description : '',
            };
        }));
        this.subscription.add(this.registerForm.get('newsletter').valueChanges.subscribe(() => {
            this.toggleAnonymousConsent();
        }));
    }
    submitForm() {
        if (this.registerForm.valid) {
            this.registerUser();
        }
        else {
            this.registerForm.markAllAsTouched();
        }
    }
    registerUser() {
        this.userService.register(this.collectDataFromRegisterForm(this.registerForm.value));
    }
    titleSelected(title) {
        this.registerForm['controls'].titleCode.setValue(title.code);
    }
    collectDataFromRegisterForm(formData) {
        const { firstName, lastName, email, password, titleCode } = formData;
        return {
            firstName,
            lastName,
            uid: email.toLowerCase(),
            password,
            titleCode,
        };
    }
    isConsentGiven(consent) {
        return this.anonymousConsentsService.isConsentGiven(consent);
    }
    isConsentRequired() {
        var _a;
        const { requiredConsents, registerConsent, } = (_a = this.anonymousConsentsConfig) === null || _a === void 0 ? void 0 : _a.anonymousConsents;
        if (requiredConsents && registerConsent) {
            return requiredConsents.includes(registerConsent);
        }
        return false;
    }
    onRegisterUserSuccess(success) {
        if (success) {
            if (this.authConfigService.getOAuthFlow() ===
                OAuthFlow.ResourceOwnerPasswordFlow) {
                this.router.go('login');
            }
            this.globalMessageService.add({ key: 'register.postRegisterMessage' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }
    }
    toggleAnonymousConsent() {
        const { registerConsent } = this.anonymousConsentsConfig.anonymousConsents;
        if (Boolean(this.registerForm.get('newsletter').value)) {
            this.anonymousConsentsService.giveConsent(registerConsent);
        }
        else {
            this.anonymousConsentsService.withdrawConsent(registerConsent);
        }
    }
    registerUserProcessInit() {
        this.userService.resetRegisterUserProcessState();
        this.subscription.add(this.userService.getRegisterUserResultSuccess().subscribe((success) => {
            this.onRegisterUserSuccess(success);
        }));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.userService.resetRegisterUserProcessState();
    }
}
RegisterComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-register',
                template: "<section\n  class=\"cx-page-section container\"\n  *ngIf=\"!(loading$ | async); else loading\"\n>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-6\">\n      <div class=\"cx-section\">\n        <form (ngSubmit)=\"submitForm()\" [formGroup]=\"registerForm\">\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.title' | cxTranslate\n              }}</span>\n              <select formControlName=\"titleCode\" class=\"form-control\">\n                <option selected value=\"\" disabled>\n                  {{ 'register.selectTitle' | cxTranslate }}\n                </option>\n                <option\n                  *ngFor=\"let title of titles$ | async\"\n                  [value]=\"title.code\"\n                >\n                  {{ title.name }}\n                </option>\n              </select>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.firstName.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"firstname\"\n                placeholder=\"{{\n                  'register.firstName.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"firstName\"\n              />\n              <cx-form-errors\n                [control]=\"registerForm.get('firstName')\"\n              ></cx-form-errors>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.lastName.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"lastname\"\n                placeholder=\"{{\n                  'register.lastName.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"lastName\"\n              />\n              <cx-form-errors\n                [control]=\"registerForm.get('lastName')\"\n              ></cx-form-errors>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.emailAddress.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"email\"\n                name=\"email\"\n                placeholder=\"{{\n                  'register.emailAddress.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"email\"\n              />\n              <cx-form-errors\n                [control]=\"registerForm.get('email')\"\n              ></cx-form-errors>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.password.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"password\"\n                name=\"password\"\n                placeholder=\"{{\n                  'register.password.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"password\"\n              />\n              <cx-form-errors\n                [control]=\"registerForm.get('password')\"\n              ></cx-form-errors>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.confirmPassword.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"password\"\n                name=\"confirmpassword\"\n                placeholder=\"{{\n                  'register.confirmPassword.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"passwordconf\"\n              />\n              <cx-form-errors\n                [control]=\"registerForm.get('passwordconf')\"\n              ></cx-form-errors>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label *ngIf=\"anonymousConsent$ | async as anonymousConsent\">\n                <input\n                  type=\"checkbox\"\n                  name=\"newsletter\"\n                  class=\"form-check-input\"\n                  formControlName=\"newsletter\"\n                  [checked]=\"isConsentGiven(anonymousConsent.consent)\"\n                />\n                <span class=\"form-check-label\">\n                  {{ anonymousConsent.template }}\n                </span>\n              </label>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  name=\"termsandconditions\"\n                  formControlName=\"termsandconditions\"\n                />\n                <span class=\"form-check-label\">\n                  {{ 'register.confirmThatRead' | cxTranslate }}\n                  <a\n                    [routerLink]=\"{ cxRoute: 'termsAndConditions' } | cxUrl\"\n                    target=\"_blank\"\n                  >\n                    {{ 'register.termsAndConditions' | cxTranslate }}\n                  </a>\n                </span>\n                <cx-form-errors\n                  [control]=\"registerForm.get('termsandconditions')\"\n                ></cx-form-errors>\n              </label>\n            </div>\n          </div>\n          <button type=\"submit\" class=\"btn btn-block btn-primary\">\n            {{ 'register.register' | cxTranslate }}\n          </button>\n          <a\n            class=\"cx-login-link btn-link\"\n            [routerLink]=\"{ cxRoute: 'login' } | cxUrl\"\n            >{{ 'register.signIn' | cxTranslate }}</a\n          >\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
            },] }
];
RegisterComponent.ctorParameters = () => [
    { type: UserService },
    { type: GlobalMessageService },
    { type: FormBuilder },
    { type: RoutingService },
    { type: AnonymousConsentsService },
    { type: AnonymousConsentsConfig },
    { type: AuthConfigService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUNMLFdBQVcsRUFDWCxXQUFXLEVBRVgsVUFBVSxHQUNYLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUVMLHVCQUF1QixFQUN2Qix3QkFBd0IsRUFDeEIsaUJBQWlCLEVBR2pCLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGNBQWMsRUFFZCxXQUFXLEdBRVosTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFjLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQU16RSxNQUFNLE9BQU8saUJBQWlCO0lBbUM1QixZQUNZLFdBQXdCLEVBQ3hCLG9CQUEwQyxFQUMxQyxFQUFlLEVBQ2YsTUFBc0IsRUFDdEIsd0JBQWtELEVBQ2xELHVCQUFnRCxFQUNoRCxpQkFBb0M7UUFOcEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELHNCQUFpQixHQUFqQixpQkFBaUIs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ZSxDQUFDLENBQUM7U0FDaEU7SUFDSCxDQUFDO0lBRU8sdUJBQXVCO1FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3BFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztJQUNuRCxDQUFDOzs7WUEzTEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2Qixpdk1BQXdDO2FBQ3pDOzs7WUFWQyxXQUFXO1lBTFgsb0JBQW9CO1lBWnBCLFdBQVc7WUFlWCxjQUFjO1lBUGQsd0JBQXdCO1lBRHhCLHVCQUF1QjtZQUV2QixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBGb3JtQnVpbGRlcixcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1Hcm91cCxcbiAgVmFsaWRhdG9ycyxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQW5vbnltb3VzQ29uc2VudCxcbiAgQW5vbnltb3VzQ29uc2VudHNDb25maWcsXG4gIEFub255bW91c0NvbnNlbnRzU2VydmljZSxcbiAgQXV0aENvbmZpZ1NlcnZpY2UsXG4gIENvbnNlbnRUZW1wbGF0ZSxcbiAgR2xvYmFsTWVzc2FnZUVudGl0aWVzLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIE9BdXRoRmxvdyxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFRpdGxlLFxuICBVc2VyU2VydmljZSxcbiAgVXNlclNpZ25VcCxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDdXN0b21Gb3JtVmFsaWRhdG9ycywgc29ydFRpdGxlcyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXJlZ2lzdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHRpdGxlcyQ6IE9ic2VydmFibGU8VGl0bGVbXT47XG4gIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBhbm9ueW1vdXNDb25zZW50JDogT2JzZXJ2YWJsZTx7XG4gICAgY29uc2VudDogQW5vbnltb3VzQ29uc2VudDtcbiAgICB0ZW1wbGF0ZTogc3RyaW5nO1xuICB9PjtcblxuICByZWdpc3RlckZvcm06IEZvcm1Hcm91cCA9IHRoaXMuZmIuZ3JvdXAoXG4gICAge1xuICAgICAgdGl0bGVDb2RlOiBbJyddLFxuICAgICAgZmlyc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgbGFzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBlbWFpbDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgQ3VzdG9tRm9ybVZhbGlkYXRvcnMuZW1haWxWYWxpZGF0b3JdXSxcbiAgICAgIHBhc3N3b3JkOiBbXG4gICAgICAgICcnLFxuICAgICAgICBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgQ3VzdG9tRm9ybVZhbGlkYXRvcnMucGFzc3dvcmRWYWxpZGF0b3JdLFxuICAgICAgXSxcbiAgICAgIHBhc3N3b3JkY29uZjogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIG5ld3NsZXR0ZXI6IG5ldyBGb3JtQ29udHJvbCh7XG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgZGlzYWJsZWQ6IHRoaXMuaXNDb25zZW50UmVxdWlyZWQoKSxcbiAgICAgIH0pLFxuICAgICAgdGVybXNhbmRjb25kaXRpb25zOiBbZmFsc2UsIFZhbGlkYXRvcnMucmVxdWlyZWRUcnVlXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHZhbGlkYXRvcnM6IEN1c3RvbUZvcm1WYWxpZGF0b3JzLnBhc3N3b3Jkc011c3RNYXRjaChcbiAgICAgICAgJ3Bhc3N3b3JkJyxcbiAgICAgICAgJ3Bhc3N3b3JkY29uZidcbiAgICAgICksXG4gICAgfVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhbm9ueW1vdXNDb25zZW50c1NlcnZpY2U6IEFub255bW91c0NvbnNlbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYW5vbnltb3VzQ29uc2VudHNDb25maWc6IEFub255bW91c0NvbnNlbnRzQ29uZmlnLFxuICAgIHByb3RlY3RlZCBhdXRoQ29uZmlnU2VydmljZTogQXV0aENvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudGl0bGVzJCA9IHRoaXMudXNlclNlcnZpY2UuZ2V0VGl0bGVzKCkucGlwZShcbiAgICAgIG1hcCgodGl0bGVzKSA9PiB7XG4gICAgICAgIHJldHVybiB0aXRsZXMuc29ydChzb3J0VGl0bGVzKTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMubG9hZGluZyQgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldFJlZ2lzdGVyVXNlclJlc3VsdExvYWRpbmcoKTtcbiAgICB0aGlzLnJlZ2lzdGVyVXNlclByb2Nlc3NJbml0KCk7XG5cbiAgICAvLyBUT0RPOiBXb3JrYXJvdW5kOiBhbGxvdyBzZXJ2ZXIgZm9yIGRlY2lkZSBpcyB0aXRsZUNvZGUgbWFuZGF0b3J5IChpZiB5ZXMsIHByb3ZpZGUgcGVyc29uYWxpemVkIG1lc3NhZ2UpXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZVxuICAgICAgICAuZ2V0KClcbiAgICAgICAgLnBpcGUoZmlsdGVyKChtZXNzYWdlcykgPT4gISFPYmplY3Qua2V5cyhtZXNzYWdlcykubGVuZ3RoKSlcbiAgICAgICAgLnN1YnNjcmliZSgoZ2xvYmFsTWVzc2FnZUVudGl0aWVzOiBHbG9iYWxNZXNzYWdlRW50aXRpZXMpID0+IHtcbiAgICAgICAgICBjb25zdCBtZXNzYWdlcyA9XG4gICAgICAgICAgICBnbG9iYWxNZXNzYWdlRW50aXRpZXMgJiZcbiAgICAgICAgICAgIGdsb2JhbE1lc3NhZ2VFbnRpdGllc1tHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUl07XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBtZXNzYWdlcyAmJlxuICAgICAgICAgICAgbWVzc2FnZXMuc29tZSgobWVzc2FnZSkgPT4gbWVzc2FnZSA9PT0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQuJylcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UucmVtb3ZlKEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SKTtcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICAgICAgICB7IGtleTogJ3JlZ2lzdGVyLnRpdGxlUmVxdWlyZWQnIH0sXG4gICAgICAgICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICApO1xuXG4gICAgY29uc3QgeyByZWdpc3RlckNvbnNlbnQgfSA9IHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWc/LmFub255bW91c0NvbnNlbnRzO1xuXG4gICAgdGhpcy5hbm9ueW1vdXNDb25zZW50JCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuZ2V0Q29uc2VudChyZWdpc3RlckNvbnNlbnQpLFxuICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuZ2V0VGVtcGxhdGUocmVnaXN0ZXJDb25zZW50KSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKChbY29uc2VudCwgdGVtcGxhdGVdOiBbQW5vbnltb3VzQ29uc2VudCwgQ29uc2VudFRlbXBsYXRlXSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNvbnNlbnQsXG4gICAgICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlID8gdGVtcGxhdGUuZGVzY3JpcHRpb24gOiAnJyxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMucmVnaXN0ZXJGb3JtLmdldCgnbmV3c2xldHRlcicpLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnRvZ2dsZUFub255bW91c0NvbnNlbnQoKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHN1Ym1pdEZvcm0oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucmVnaXN0ZXJGb3JtLnZhbGlkKSB7XG4gICAgICB0aGlzLnJlZ2lzdGVyVXNlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlZ2lzdGVyRm9ybS5tYXJrQWxsQXNUb3VjaGVkKCk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJVc2VyKCk6IHZvaWQge1xuICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIoXG4gICAgICB0aGlzLmNvbGxlY3REYXRhRnJvbVJlZ2lzdGVyRm9ybSh0aGlzLnJlZ2lzdGVyRm9ybS52YWx1ZSlcbiAgICApO1xuICB9XG5cbiAgdGl0bGVTZWxlY3RlZCh0aXRsZTogVGl0bGUpOiB2b2lkIHtcbiAgICB0aGlzLnJlZ2lzdGVyRm9ybVsnY29udHJvbHMnXS50aXRsZUNvZGUuc2V0VmFsdWUodGl0bGUuY29kZSk7XG4gIH1cblxuICBjb2xsZWN0RGF0YUZyb21SZWdpc3RlckZvcm0oZm9ybURhdGE6IGFueSk6IFVzZXJTaWduVXAge1xuICAgIGNvbnN0IHsgZmlyc3ROYW1lLCBsYXN0TmFtZSwgZW1haWwsIHBhc3N3b3JkLCB0aXRsZUNvZGUgfSA9IGZvcm1EYXRhO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGZpcnN0TmFtZSxcbiAgICAgIGxhc3ROYW1lLFxuICAgICAgdWlkOiBlbWFpbC50b0xvd2VyQ2FzZSgpLFxuICAgICAgcGFzc3dvcmQsXG4gICAgICB0aXRsZUNvZGUsXG4gICAgfTtcbiAgfVxuXG4gIGlzQ29uc2VudEdpdmVuKGNvbnNlbnQ6IEFub255bW91c0NvbnNlbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuaXNDb25zZW50R2l2ZW4oY29uc2VudCk7XG4gIH1cblxuICBwcml2YXRlIGlzQ29uc2VudFJlcXVpcmVkKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHJlcXVpcmVkQ29uc2VudHMsXG4gICAgICByZWdpc3RlckNvbnNlbnQsXG4gICAgfSA9IHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWc/LmFub255bW91c0NvbnNlbnRzO1xuXG4gICAgaWYgKHJlcXVpcmVkQ29uc2VudHMgJiYgcmVnaXN0ZXJDb25zZW50KSB7XG4gICAgICByZXR1cm4gcmVxdWlyZWRDb25zZW50cy5pbmNsdWRlcyhyZWdpc3RlckNvbnNlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgb25SZWdpc3RlclVzZXJTdWNjZXNzKHN1Y2Nlc3M6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmF1dGhDb25maWdTZXJ2aWNlLmdldE9BdXRoRmxvdygpID09PVxuICAgICAgICBPQXV0aEZsb3cuUmVzb3VyY2VPd25lclBhc3N3b3JkRmxvd1xuICAgICAgKSB7XG4gICAgICAgIHRoaXMucm91dGVyLmdvKCdsb2dpbicpO1xuICAgICAgfVxuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgIHsga2V5OiAncmVnaXN0ZXIucG9zdFJlZ2lzdGVyTWVzc2FnZScgfSxcbiAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUFub255bW91c0NvbnNlbnQoKTogdm9pZCB7XG4gICAgY29uc3QgeyByZWdpc3RlckNvbnNlbnQgfSA9IHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHM7XG5cbiAgICBpZiAoQm9vbGVhbih0aGlzLnJlZ2lzdGVyRm9ybS5nZXQoJ25ld3NsZXR0ZXInKS52YWx1ZSkpIHtcbiAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmdpdmVDb25zZW50KHJlZ2lzdGVyQ29uc2VudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLndpdGhkcmF3Q29uc2VudChyZWdpc3RlckNvbnNlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVnaXN0ZXJVc2VyUHJvY2Vzc0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy51c2VyU2VydmljZS5yZXNldFJlZ2lzdGVyVXNlclByb2Nlc3NTdGF0ZSgpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0UmVnaXN0ZXJVc2VyUmVzdWx0U3VjY2VzcygpLnN1YnNjcmliZSgoc3VjY2VzcykgPT4ge1xuICAgICAgICB0aGlzLm9uUmVnaXN0ZXJVc2VyU3VjY2VzcyhzdWNjZXNzKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy51c2VyU2VydmljZS5yZXNldFJlZ2lzdGVyVXNlclByb2Nlc3NTdGF0ZSgpO1xuICB9XG59XG4iXX0=