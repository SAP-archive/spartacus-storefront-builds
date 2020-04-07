import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { AnonymousConsent, AnonymousConsentsConfig, AnonymousConsentsService, ConsentTemplate, GlobalMessageEntities, GlobalMessageService, GlobalMessageType, RoutingService, Title, UserService, UserSignUp, } from '@spartacus/core';
import { combineLatest, Subscription } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { sortTitles, CustomFormValidators } from '../../../shared/index';
let RegisterComponent = class RegisterComponent {
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
};
RegisterComponent.ctorParameters = () => [
    { type: UserService },
    { type: GlobalMessageService },
    { type: FormBuilder },
    { type: RoutingService },
    { type: AnonymousConsentsService },
    { type: AnonymousConsentsConfig }
];
RegisterComponent = __decorate([
    Component({
        selector: 'cx-register',
        template: "<section\n  class=\"cx-page-section container\"\n  *ngIf=\"!(loading$ | async); else loading\"\n>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-6\">\n      <div class=\"cx-section\">\n        <form (ngSubmit)=\"submitForm()\" [formGroup]=\"registerForm\">\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.title' | cxTranslate\n              }}</span>\n              <select formControlName=\"titleCode\" class=\"form-control\">\n                <option selected value=\"\" disabled>{{\n                  'register.selectTitle' | cxTranslate\n                }}</option>\n                <option\n                  *ngFor=\"let title of titles$ | async\"\n                  [value]=\"title.code\"\n                  >{{ title.name }}</option\n                >\n              </select>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.firstName.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"firstname\"\n                placeholder=\"{{\n                  'register.firstName.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"firstName\"\n              />\n              <cx-form-errors\n                [control]=\"registerForm.get('firstName')\"\n              ></cx-form-errors>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.lastName.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"lastname\"\n                placeholder=\"{{\n                  'register.lastName.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"lastName\"\n              />\n              <cx-form-errors\n                [control]=\"registerForm.get('lastName')\"\n              ></cx-form-errors>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.emailAddress.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"email\"\n                name=\"email\"\n                placeholder=\"{{\n                  'register.emailAddress.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"email\"\n              />\n              <cx-form-errors\n                [control]=\"registerForm.get('email')\"\n              ></cx-form-errors>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.password.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"password\"\n                name=\"password\"\n                placeholder=\"{{\n                  'register.password.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"password\"\n              />\n              <cx-form-errors\n                [control]=\"registerForm.get('password')\"\n              ></cx-form-errors>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.confirmPassword.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"password\"\n                name=\"confirmpassword\"\n                placeholder=\"{{\n                  'register.confirmPassword.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"passwordconf\"\n              />\n              <cx-form-errors\n                [control]=\"registerForm.get('passwordconf')\"\n              ></cx-form-errors>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label *ngIf=\"anonymousConsent$ | async as anonymousConsent\">\n                <input\n                  type=\"checkbox\"\n                  name=\"newsletter\"\n                  class=\"form-check-input\"\n                  formControlName=\"newsletter\"\n                  [checked]=\"isConsentGiven(anonymousConsent.consent)\"\n                />\n                <span class=\"form-check-label\">\n                  {{ anonymousConsent.template }}\n                </span>\n              </label>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  name=\"termsandconditions\"\n                  formControlName=\"termsandconditions\"\n                />\n                <span class=\"form-check-label\">\n                  {{ 'register.confirmThatRead' | cxTranslate }}\n                  <a\n                    [routerLink]=\"{ cxRoute: 'termsAndConditions' } | cxUrl\"\n                    target=\"_blank\"\n                  >\n                    {{ 'register.termsAndConditions' | cxTranslate }}\n                  </a>\n                </span>\n                <cx-form-errors\n                  [control]=\"registerForm.get('termsandconditions')\"\n                ></cx-form-errors>\n              </label>\n            </div>\n          </div>\n          <button type=\"submit\" class=\"btn btn-block btn-primary\">\n            {{ 'register.register' | cxTranslate }}\n          </button>\n          <a\n            class=\"cx-login-link btn-link\"\n            [routerLink]=\"{ cxRoute: 'login' } | cxUrl\"\n            >{{ 'register.signIn' | cxTranslate }}</a\n          >\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
    })
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFDTCxXQUFXLEVBQ1gsV0FBVyxFQUNYLFNBQVMsRUFDVCxVQUFVLEdBQ1gsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLHVCQUF1QixFQUN2Qix3QkFBd0IsRUFDeEIsZUFBZSxFQUNmLHFCQUFxQixFQUNyQixvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCxLQUFLLEVBQ0wsV0FBVyxFQUNYLFVBQVUsR0FDWCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQU16RSxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQW1DNUIsWUFDWSxXQUF3QixFQUN4QixvQkFBMEMsRUFDMUMsRUFBZSxFQUNmLE1BQXNCLEVBQ3RCLHdCQUFrRCxFQUNsRCx1QkFBZ0Q7UUFMaEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCw0QkFBdUIsR0FBdkIsdUJB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LHdCQUF3QixDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUM1RDthQUFNO1lBQ0wsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNoRTtJQUNILENBQUM7SUFFTyx1QkFBdUI7UUFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyw2QkFBNkIsRUFBRSxDQUFDO1FBQ2pELElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLDRCQUE0QixFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDcEUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyw2QkFBNkIsRUFBRSxDQUFDO0lBQ25ELENBQUM7Q0FDRixDQUFBOztZQW5KMEIsV0FBVztZQUNGLG9CQUFvQjtZQUN0QyxXQUFXO1lBQ1AsY0FBYztZQUNJLHdCQUF3QjtZQUN6Qix1QkFBdUI7O0FBekNqRCxpQkFBaUI7SUFKN0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGFBQWE7UUFDdkIsNnRNQUF3QztLQUN6QyxDQUFDO0dBQ1csaUJBQWlCLENBdUw3QjtTQXZMWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBGb3JtQnVpbGRlcixcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1Hcm91cCxcbiAgVmFsaWRhdG9ycyxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQW5vbnltb3VzQ29uc2VudCxcbiAgQW5vbnltb3VzQ29uc2VudHNDb25maWcsXG4gIEFub255bW91c0NvbnNlbnRzU2VydmljZSxcbiAgQ29uc2VudFRlbXBsYXRlLFxuICBHbG9iYWxNZXNzYWdlRW50aXRpZXMsXG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFRpdGxlLFxuICBVc2VyU2VydmljZSxcbiAgVXNlclNpZ25VcCxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IHNvcnRUaXRsZXMsIEN1c3RvbUZvcm1WYWxpZGF0b3JzIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcmVnaXN0ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgdGl0bGVzJDogT2JzZXJ2YWJsZTxUaXRsZVtdPjtcbiAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGFub255bW91c0NvbnNlbnQkOiBPYnNlcnZhYmxlPHtcbiAgICBjb25zZW50OiBBbm9ueW1vdXNDb25zZW50O1xuICAgIHRlbXBsYXRlOiBzdHJpbmc7XG4gIH0+O1xuXG4gIHJlZ2lzdGVyRm9ybTogRm9ybUdyb3VwID0gdGhpcy5mYi5ncm91cChcbiAgICB7XG4gICAgICB0aXRsZUNvZGU6IFsnJ10sXG4gICAgICBmaXJzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBsYXN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGVtYWlsOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBDdXN0b21Gb3JtVmFsaWRhdG9ycy5lbWFpbFZhbGlkYXRvcl1dLFxuICAgICAgcGFzc3dvcmQ6IFtcbiAgICAgICAgJycsXG4gICAgICAgIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBDdXN0b21Gb3JtVmFsaWRhdG9ycy5wYXNzd29yZFZhbGlkYXRvcl0sXG4gICAgICBdLFxuICAgICAgcGFzc3dvcmRjb25mOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgbmV3c2xldHRlcjogbmV3IEZvcm1Db250cm9sKHtcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICBkaXNhYmxlZDogdGhpcy5pc0NvbnNlbnRSZXF1aXJlZCgpLFxuICAgICAgfSksXG4gICAgICB0ZXJtc2FuZGNvbmRpdGlvbnM6IFtmYWxzZSwgVmFsaWRhdG9ycy5yZXF1aXJlZFRydWVdLFxuICAgIH0sXG4gICAge1xuICAgICAgdmFsaWRhdG9yczogQ3VzdG9tRm9ybVZhbGlkYXRvcnMucGFzc3dvcmRzTXVzdE1hdGNoKFxuICAgICAgICAncGFzc3dvcmQnLFxuICAgICAgICAncGFzc3dvcmRjb25mJ1xuICAgICAgKSxcbiAgICB9XG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJvdGVjdGVkIHJvdXRlcjogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFub255bW91c0NvbnNlbnRzU2VydmljZTogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhbm9ueW1vdXNDb25zZW50c0NvbmZpZzogQW5vbnltb3VzQ29uc2VudHNDb25maWdcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudGl0bGVzJCA9IHRoaXMudXNlclNlcnZpY2UuZ2V0VGl0bGVzKCkucGlwZShcbiAgICAgIHRhcCgodGl0bGVzKSA9PiB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aXRsZXMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UubG9hZFRpdGxlcygpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgodGl0bGVzKSA9PiB7XG4gICAgICAgIHJldHVybiB0aXRsZXMuc29ydChzb3J0VGl0bGVzKTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMubG9hZGluZyQgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldFJlZ2lzdGVyVXNlclJlc3VsdExvYWRpbmcoKTtcbiAgICB0aGlzLnJlZ2lzdGVyVXNlclByb2Nlc3NJbml0KCk7XG5cbiAgICAvLyBUT0RPOiBXb3JrYXJvdW5kOiBhbGxvdyBzZXJ2ZXIgZm9yIGRlY2lkZSBpcyB0aXRsZUNvZGUgbWFuZGF0b3J5IChpZiB5ZXMsIHByb3ZpZGUgcGVyc29uYWxpemVkIG1lc3NhZ2UpXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZVxuICAgICAgICAuZ2V0KClcbiAgICAgICAgLnBpcGUoZmlsdGVyKChtZXNzYWdlcykgPT4gISFPYmplY3Qua2V5cyhtZXNzYWdlcykubGVuZ3RoKSlcbiAgICAgICAgLnN1YnNjcmliZSgoZ2xvYmFsTWVzc2FnZUVudGl0aWVzOiBHbG9iYWxNZXNzYWdlRW50aXRpZXMpID0+IHtcbiAgICAgICAgICBjb25zdCBtZXNzYWdlcyA9XG4gICAgICAgICAgICBnbG9iYWxNZXNzYWdlRW50aXRpZXMgJiZcbiAgICAgICAgICAgIGdsb2JhbE1lc3NhZ2VFbnRpdGllc1tHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUl07XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBtZXNzYWdlcyAmJlxuICAgICAgICAgICAgbWVzc2FnZXMuc29tZSgobWVzc2FnZSkgPT4gbWVzc2FnZSA9PT0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQuJylcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UucmVtb3ZlKEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SKTtcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICAgICAgICB7IGtleTogJ3JlZ2lzdGVyLnRpdGxlUmVxdWlyZWQnIH0sXG4gICAgICAgICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICApO1xuXG4gICAgY29uc3QgeyByZWdpc3RlckNvbnNlbnQgfSA9IHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWc/LmFub255bW91c0NvbnNlbnRzO1xuXG4gICAgdGhpcy5hbm9ueW1vdXNDb25zZW50JCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuZ2V0Q29uc2VudChyZWdpc3RlckNvbnNlbnQpLFxuICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuZ2V0VGVtcGxhdGUocmVnaXN0ZXJDb25zZW50KSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKChbY29uc2VudCwgdGVtcGxhdGVdOiBbQW5vbnltb3VzQ29uc2VudCwgQ29uc2VudFRlbXBsYXRlXSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNvbnNlbnQsXG4gICAgICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlID8gdGVtcGxhdGUuZGVzY3JpcHRpb24gOiAnJyxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMucmVnaXN0ZXJGb3JtLmdldCgnbmV3c2xldHRlcicpLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnRvZ2dsZUFub255bW91c0NvbnNlbnQoKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHN1Ym1pdEZvcm0oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucmVnaXN0ZXJGb3JtLnZhbGlkKSB7XG4gICAgICB0aGlzLnJlZ2lzdGVyVXNlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlZ2lzdGVyRm9ybS5tYXJrQWxsQXNUb3VjaGVkKCk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJVc2VyKCk6IHZvaWQge1xuICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIoXG4gICAgICB0aGlzLmNvbGxlY3REYXRhRnJvbVJlZ2lzdGVyRm9ybSh0aGlzLnJlZ2lzdGVyRm9ybS52YWx1ZSlcbiAgICApO1xuICB9XG5cbiAgdGl0bGVTZWxlY3RlZCh0aXRsZTogVGl0bGUpOiB2b2lkIHtcbiAgICB0aGlzLnJlZ2lzdGVyRm9ybVsnY29udHJvbHMnXS50aXRsZUNvZGUuc2V0VmFsdWUodGl0bGUuY29kZSk7XG4gIH1cblxuICBjb2xsZWN0RGF0YUZyb21SZWdpc3RlckZvcm0oZm9ybURhdGE6IGFueSk6IFVzZXJTaWduVXAge1xuICAgIGNvbnN0IHsgZmlyc3ROYW1lLCBsYXN0TmFtZSwgZW1haWwsIHBhc3N3b3JkLCB0aXRsZUNvZGUgfSA9IGZvcm1EYXRhO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGZpcnN0TmFtZSxcbiAgICAgIGxhc3ROYW1lLFxuICAgICAgdWlkOiBlbWFpbC50b0xvd2VyQ2FzZSgpLFxuICAgICAgcGFzc3dvcmQsXG4gICAgICB0aXRsZUNvZGUsXG4gICAgfTtcbiAgfVxuXG4gIGlzQ29uc2VudEdpdmVuKGNvbnNlbnQ6IEFub255bW91c0NvbnNlbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuaXNDb25zZW50R2l2ZW4oY29uc2VudCk7XG4gIH1cblxuICBwcml2YXRlIGlzQ29uc2VudFJlcXVpcmVkKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHJlcXVpcmVkQ29uc2VudHMsXG4gICAgICByZWdpc3RlckNvbnNlbnQsXG4gICAgfSA9IHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWc/LmFub255bW91c0NvbnNlbnRzO1xuXG4gICAgaWYgKHJlcXVpcmVkQ29uc2VudHMgJiYgcmVnaXN0ZXJDb25zZW50KSB7XG4gICAgICByZXR1cm4gcmVxdWlyZWRDb25zZW50cy5pbmNsdWRlcyhyZWdpc3RlckNvbnNlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgb25SZWdpc3RlclVzZXJTdWNjZXNzKHN1Y2Nlc3M6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgdGhpcy5yb3V0ZXIuZ28oJ2xvZ2luJyk7XG4gICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgeyBrZXk6ICdyZWdpc3Rlci5wb3N0UmVnaXN0ZXJNZXNzYWdlJyB9LFxuICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlQW5vbnltb3VzQ29uc2VudCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHJlZ2lzdGVyQ29uc2VudCB9ID0gdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cztcblxuICAgIGlmIChCb29sZWFuKHRoaXMucmVnaXN0ZXJGb3JtLmdldCgnbmV3c2xldHRlcicpLnZhbHVlKSkge1xuICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuZ2l2ZUNvbnNlbnQocmVnaXN0ZXJDb25zZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2Uud2l0aGRyYXdDb25zZW50KHJlZ2lzdGVyQ29uc2VudCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZWdpc3RlclVzZXJQcm9jZXNzSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlc2V0UmVnaXN0ZXJVc2VyUHJvY2Vzc1N0YXRlKCk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy51c2VyU2VydmljZS5nZXRSZWdpc3RlclVzZXJSZXN1bHRTdWNjZXNzKCkuc3Vic2NyaWJlKChzdWNjZXNzKSA9PiB7XG4gICAgICAgIHRoaXMub25SZWdpc3RlclVzZXJTdWNjZXNzKHN1Y2Nlc3MpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlc2V0UmVnaXN0ZXJVc2VyUHJvY2Vzc1N0YXRlKCk7XG4gIH1cbn1cbiJdfQ==