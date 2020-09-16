import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators, } from '@angular/forms';
import { AnonymousConsentsConfig, AnonymousConsentsService, GlobalMessageService, GlobalMessageType, RoutingService, UserService, } from '@spartacus/core';
import { combineLatest, Subscription } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { sortTitles, CustomFormValidators } from '../../../shared/index';
export class RegisterComponent {
    constructor(userService, globalMessageService, fb, router, anonymousConsentsService, anonymousConsentsConfig) {
        this.userService = userService;
        this.globalMessageService = globalMessageService;
        this.fb = fb;
        this.router = router;
        this.anonymousConsentsService = anonymousConsentsService;
        this.anonymousConsentsConfig = anonymousConsentsConfig;
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
        this.titles$ = this.userService.getTitles().pipe(tap((titles) => {
            if (Object.keys(titles).length === 0) {
                this.userService.loadTitles();
            }
        }), map((titles) => {
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
            this.router.go('login');
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
    { type: AnonymousConsentsConfig }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUNMLFdBQVcsRUFDWCxXQUFXLEVBRVgsVUFBVSxHQUNYLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUVMLHVCQUF1QixFQUN2Qix3QkFBd0IsRUFHeEIsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixjQUFjLEVBRWQsV0FBVyxHQUVaLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBTXpFLE1BQU0sT0FBTyxpQkFBaUI7SUFtQzVCLFlBQ1ksV0FBd0IsRUFDeEIsb0JBQTBDLEVBQzFDLEVBQWUsRUFDZixNQUFzQixFQUN0Qix3QkFBa0QsRUFDbEQsdUJBQWdEO1FBTGhELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQXRDcEQsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBTzFDLGlCQUFZLEdB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Qyx3QkFBd0IsQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDaEU7SUFDSCxDQUFDO0lBRU8sdUJBQXVCO1FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3BFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztJQUNuRCxDQUFDOzs7WUExTEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2Qixpdk1BQXdDO2FBQ3pDOzs7WUFWQyxXQUFXO1lBSlgsb0JBQW9CO1lBWHBCLFdBQVc7WUFhWCxjQUFjO1lBTGQsd0JBQXdCO1lBRHhCLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEZvcm1CdWlsZGVyLFxuICBGb3JtQ29udHJvbCxcbiAgRm9ybUdyb3VwLFxuICBWYWxpZGF0b3JzLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBBbm9ueW1vdXNDb25zZW50LFxuICBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyxcbiAgQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLFxuICBDb25zZW50VGVtcGxhdGUsXG4gIEdsb2JhbE1lc3NhZ2VFbnRpdGllcyxcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgVGl0bGUsXG4gIFVzZXJTZXJ2aWNlLFxuICBVc2VyU2lnblVwLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgc29ydFRpdGxlcywgQ3VzdG9tRm9ybVZhbGlkYXRvcnMgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1yZWdpc3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICB0aXRsZXMkOiBPYnNlcnZhYmxlPFRpdGxlW10+O1xuICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgYW5vbnltb3VzQ29uc2VudCQ6IE9ic2VydmFibGU8e1xuICAgIGNvbnNlbnQ6IEFub255bW91c0NvbnNlbnQ7XG4gICAgdGVtcGxhdGU6IHN0cmluZztcbiAgfT47XG5cbiAgcmVnaXN0ZXJGb3JtOiBGb3JtR3JvdXAgPSB0aGlzLmZiLmdyb3VwKFxuICAgIHtcbiAgICAgIHRpdGxlQ29kZTogWycnXSxcbiAgICAgIGZpcnN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGxhc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgZW1haWw6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIEN1c3RvbUZvcm1WYWxpZGF0b3JzLmVtYWlsVmFsaWRhdG9yXV0sXG4gICAgICBwYXNzd29yZDogW1xuICAgICAgICAnJyxcbiAgICAgICAgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIEN1c3RvbUZvcm1WYWxpZGF0b3JzLnBhc3N3b3JkVmFsaWRhdG9yXSxcbiAgICAgIF0sXG4gICAgICBwYXNzd29yZGNvbmY6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBuZXdzbGV0dGVyOiBuZXcgRm9ybUNvbnRyb2woe1xuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIGRpc2FibGVkOiB0aGlzLmlzQ29uc2VudFJlcXVpcmVkKCksXG4gICAgICB9KSxcbiAgICAgIHRlcm1zYW5kY29uZGl0aW9uczogW2ZhbHNlLCBWYWxpZGF0b3JzLnJlcXVpcmVkVHJ1ZV0sXG4gICAgfSxcbiAgICB7XG4gICAgICB2YWxpZGF0b3JzOiBDdXN0b21Gb3JtVmFsaWRhdG9ycy5wYXNzd29yZHNNdXN0TWF0Y2goXG4gICAgICAgICdwYXNzd29yZCcsXG4gICAgICAgICdwYXNzd29yZGNvbmYnXG4gICAgICApLFxuICAgIH1cbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGZiOiBGb3JtQnVpbGRlcixcbiAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlOiBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFub255bW91c0NvbnNlbnRzQ29uZmlnOiBBbm9ueW1vdXNDb25zZW50c0NvbmZpZ1xuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy50aXRsZXMkID0gdGhpcy51c2VyU2VydmljZS5nZXRUaXRsZXMoKS5waXBlKFxuICAgICAgdGFwKCh0aXRsZXMpID0+IHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRpdGxlcykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2FkVGl0bGVzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKCh0aXRsZXMpID0+IHtcbiAgICAgICAgcmV0dXJuIHRpdGxlcy5zb3J0KHNvcnRUaXRsZXMpO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5sb2FkaW5nJCA9IHRoaXMudXNlclNlcnZpY2UuZ2V0UmVnaXN0ZXJVc2VyUmVzdWx0TG9hZGluZygpO1xuICAgIHRoaXMucmVnaXN0ZXJVc2VyUHJvY2Vzc0luaXQoKTtcblxuICAgIC8vIFRPRE86IFdvcmthcm91bmQ6IGFsbG93IHNlcnZlciBmb3IgZGVjaWRlIGlzIHRpdGxlQ29kZSBtYW5kYXRvcnkgKGlmIHllcywgcHJvdmlkZSBwZXJzb25hbGl6ZWQgbWVzc2FnZSlcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlXG4gICAgICAgIC5nZXQoKVxuICAgICAgICAucGlwZShmaWx0ZXIoKG1lc3NhZ2VzKSA9PiAhIU9iamVjdC5rZXlzKG1lc3NhZ2VzKS5sZW5ndGgpKVxuICAgICAgICAuc3Vic2NyaWJlKChnbG9iYWxNZXNzYWdlRW50aXRpZXM6IEdsb2JhbE1lc3NhZ2VFbnRpdGllcykgPT4ge1xuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VzID1cbiAgICAgICAgICAgIGdsb2JhbE1lc3NhZ2VFbnRpdGllcyAmJlxuICAgICAgICAgICAgZ2xvYmFsTWVzc2FnZUVudGl0aWVzW0dsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXTtcblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIG1lc3NhZ2VzICYmXG4gICAgICAgICAgICBtZXNzYWdlcy5zb21lKChtZXNzYWdlKSA9PiBtZXNzYWdlID09PSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZC4nKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5yZW1vdmUoR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1IpO1xuICAgICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgICAgICAgIHsga2V5OiAncmVnaXN0ZXIudGl0bGVSZXF1aXJlZCcgfSxcbiAgICAgICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICk7XG5cbiAgICBjb25zdCB7IHJlZ2lzdGVyQ29uc2VudCB9ID0gdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZz8uYW5vbnltb3VzQ29uc2VudHM7XG5cbiAgICB0aGlzLmFub255bW91c0NvbnNlbnQkID0gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5nZXRDb25zZW50KHJlZ2lzdGVyQ29uc2VudCksXG4gICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5nZXRUZW1wbGF0ZShyZWdpc3RlckNvbnNlbnQpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFtjb25zZW50LCB0ZW1wbGF0ZV06IFtBbm9ueW1vdXNDb25zZW50LCBDb25zZW50VGVtcGxhdGVdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY29uc2VudCxcbiAgICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGUgPyB0ZW1wbGF0ZS5kZXNjcmlwdGlvbiA6ICcnLFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5yZWdpc3RlckZvcm0uZ2V0KCduZXdzbGV0dGVyJykudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMudG9nZ2xlQW5vbnltb3VzQ29uc2VudCgpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgc3VibWl0Rm9ybSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZWdpc3RlckZvcm0udmFsaWQpIHtcbiAgICAgIHRoaXMucmVnaXN0ZXJVc2VyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVnaXN0ZXJGb3JtLm1hcmtBbGxBc1RvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3RlclVzZXIoKTogdm9pZCB7XG4gICAgdGhpcy51c2VyU2VydmljZS5yZWdpc3RlcihcbiAgICAgIHRoaXMuY29sbGVjdERhdGFGcm9tUmVnaXN0ZXJGb3JtKHRoaXMucmVnaXN0ZXJGb3JtLnZhbHVlKVxuICAgICk7XG4gIH1cblxuICB0aXRsZVNlbGVjdGVkKHRpdGxlOiBUaXRsZSk6IHZvaWQge1xuICAgIHRoaXMucmVnaXN0ZXJGb3JtWydjb250cm9scyddLnRpdGxlQ29kZS5zZXRWYWx1ZSh0aXRsZS5jb2RlKTtcbiAgfVxuXG4gIGNvbGxlY3REYXRhRnJvbVJlZ2lzdGVyRm9ybShmb3JtRGF0YTogYW55KTogVXNlclNpZ25VcCB7XG4gICAgY29uc3QgeyBmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbCwgcGFzc3dvcmQsIHRpdGxlQ29kZSB9ID0gZm9ybURhdGE7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZmlyc3ROYW1lLFxuICAgICAgbGFzdE5hbWUsXG4gICAgICB1aWQ6IGVtYWlsLnRvTG93ZXJDYXNlKCksXG4gICAgICBwYXNzd29yZCxcbiAgICAgIHRpdGxlQ29kZSxcbiAgICB9O1xuICB9XG5cbiAgaXNDb25zZW50R2l2ZW4oY29uc2VudDogQW5vbnltb3VzQ29uc2VudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5pc0NvbnNlbnRHaXZlbihjb25zZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgaXNDb25zZW50UmVxdWlyZWQoKTogYm9vbGVhbiB7XG4gICAgY29uc3Qge1xuICAgICAgcmVxdWlyZWRDb25zZW50cyxcbiAgICAgIHJlZ2lzdGVyQ29uc2VudCxcbiAgICB9ID0gdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZz8uYW5vbnltb3VzQ29uc2VudHM7XG5cbiAgICBpZiAocmVxdWlyZWRDb25zZW50cyAmJiByZWdpc3RlckNvbnNlbnQpIHtcbiAgICAgIHJldHVybiByZXF1aXJlZENvbnNlbnRzLmluY2x1ZGVzKHJlZ2lzdGVyQ29uc2VudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBvblJlZ2lzdGVyVXNlclN1Y2Nlc3Moc3VjY2VzczogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICB0aGlzLnJvdXRlci5nbygnbG9naW4nKTtcbiAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICB7IGtleTogJ3JlZ2lzdGVyLnBvc3RSZWdpc3Rlck1lc3NhZ2UnIH0sXG4gICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVBbm9ueW1vdXNDb25zZW50KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgcmVnaXN0ZXJDb25zZW50IH0gPSB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzO1xuXG4gICAgaWYgKEJvb2xlYW4odGhpcy5yZWdpc3RlckZvcm0uZ2V0KCduZXdzbGV0dGVyJykudmFsdWUpKSB7XG4gICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5naXZlQ29uc2VudChyZWdpc3RlckNvbnNlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS53aXRoZHJhd0NvbnNlbnQocmVnaXN0ZXJDb25zZW50KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlZ2lzdGVyVXNlclByb2Nlc3NJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXNlclNlcnZpY2UucmVzZXRSZWdpc3RlclVzZXJQcm9jZXNzU3RhdGUoKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldFJlZ2lzdGVyVXNlclJlc3VsdFN1Y2Nlc3MoKS5zdWJzY3JpYmUoKHN1Y2Nlc3MpID0+IHtcbiAgICAgICAgdGhpcy5vblJlZ2lzdGVyVXNlclN1Y2Nlc3Moc3VjY2Vzcyk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMudXNlclNlcnZpY2UucmVzZXRSZWdpc3RlclVzZXJQcm9jZXNzU3RhdGUoKTtcbiAgfVxufVxuIl19