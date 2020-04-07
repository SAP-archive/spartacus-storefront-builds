import { __decorate, __read } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { AnonymousConsent, AnonymousConsentsConfig, AnonymousConsentsService, ConsentTemplate, GlobalMessageEntities, GlobalMessageService, GlobalMessageType, RoutingService, Title, UserService, UserSignUp, } from '@spartacus/core';
import { combineLatest, Subscription } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { sortTitles, CustomFormValidators } from '../../../shared/index';
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, globalMessageService, fb, router, anonymousConsentsService, anonymousConsentsConfig) {
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
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _a;
        this.titles$ = this.userService.getTitles().pipe(tap(function (titles) {
            if (Object.keys(titles).length === 0) {
                _this.userService.loadTitles();
            }
        }), map(function (titles) {
            return titles.sort(sortTitles);
        }));
        this.loading$ = this.userService.getRegisterUserResultLoading();
        this.registerUserProcessInit();
        // TODO: Workaround: allow server for decide is titleCode mandatory (if yes, provide personalized message)
        this.subscription.add(this.globalMessageService
            .get()
            .pipe(filter(function (messages) { return !!Object.keys(messages).length; }))
            .subscribe(function (globalMessageEntities) {
            var messages = globalMessageEntities &&
                globalMessageEntities[GlobalMessageType.MSG_TYPE_ERROR];
            if (messages &&
                messages.some(function (message) { return message === 'This field is required.'; })) {
                _this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
                _this.globalMessageService.add({ key: 'register.titleRequired' }, GlobalMessageType.MSG_TYPE_ERROR);
            }
        }));
        var registerConsent = ((_a = this.anonymousConsentsConfig) === null || _a === void 0 ? void 0 : _a.anonymousConsents).registerConsent;
        this.anonymousConsent$ = combineLatest([
            this.anonymousConsentsService.getConsent(registerConsent),
            this.anonymousConsentsService.getTemplate(registerConsent),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 2), consent = _b[0], template = _b[1];
            return {
                consent: consent,
                template: template ? template.description : '',
            };
        }));
        this.subscription.add(this.registerForm.get('newsletter').valueChanges.subscribe(function () {
            _this.toggleAnonymousConsent();
        }));
    };
    RegisterComponent.prototype.submitForm = function () {
        if (this.registerForm.valid) {
            this.registerUser();
        }
        else {
            this.registerForm.markAllAsTouched();
        }
    };
    RegisterComponent.prototype.registerUser = function () {
        this.userService.register(this.collectDataFromRegisterForm(this.registerForm.value));
    };
    RegisterComponent.prototype.titleSelected = function (title) {
        this.registerForm['controls'].titleCode.setValue(title.code);
    };
    RegisterComponent.prototype.collectDataFromRegisterForm = function (formData) {
        var firstName = formData.firstName, lastName = formData.lastName, email = formData.email, password = formData.password, titleCode = formData.titleCode;
        return {
            firstName: firstName,
            lastName: lastName,
            uid: email.toLowerCase(),
            password: password,
            titleCode: titleCode,
        };
    };
    RegisterComponent.prototype.isConsentGiven = function (consent) {
        return this.anonymousConsentsService.isConsentGiven(consent);
    };
    RegisterComponent.prototype.isConsentRequired = function () {
        var _a;
        var _b = (_a = this.anonymousConsentsConfig) === null || _a === void 0 ? void 0 : _a.anonymousConsents, requiredConsents = _b.requiredConsents, registerConsent = _b.registerConsent;
        if (requiredConsents && registerConsent) {
            return requiredConsents.includes(registerConsent);
        }
        return false;
    };
    RegisterComponent.prototype.onRegisterUserSuccess = function (success) {
        if (success) {
            this.router.go('login');
            this.globalMessageService.add({ key: 'register.postRegisterMessage' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }
    };
    RegisterComponent.prototype.toggleAnonymousConsent = function () {
        var registerConsent = this.anonymousConsentsConfig.anonymousConsents.registerConsent;
        if (Boolean(this.registerForm.get('newsletter').value)) {
            this.anonymousConsentsService.giveConsent(registerConsent);
        }
        else {
            this.anonymousConsentsService.withdrawConsent(registerConsent);
        }
    };
    RegisterComponent.prototype.registerUserProcessInit = function () {
        var _this = this;
        this.userService.resetRegisterUserProcessState();
        this.subscription.add(this.userService.getRegisterUserResultSuccess().subscribe(function (success) {
            _this.onRegisterUserSuccess(success);
        }));
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.userService.resetRegisterUserProcessState();
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: UserService },
        { type: GlobalMessageService },
        { type: FormBuilder },
        { type: RoutingService },
        { type: AnonymousConsentsService },
        { type: AnonymousConsentsConfig }
    ]; };
    RegisterComponent = __decorate([
        Component({
            selector: 'cx-register',
            template: "<section\n  class=\"cx-page-section container\"\n  *ngIf=\"!(loading$ | async); else loading\"\n>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-6\">\n      <div class=\"cx-section\">\n        <form (ngSubmit)=\"submitForm()\" [formGroup]=\"registerForm\">\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.title' | cxTranslate\n              }}</span>\n              <select formControlName=\"titleCode\" class=\"form-control\">\n                <option selected value=\"\" disabled>{{\n                  'register.selectTitle' | cxTranslate\n                }}</option>\n                <option\n                  *ngFor=\"let title of titles$ | async\"\n                  [value]=\"title.code\"\n                  >{{ title.name }}</option\n                >\n              </select>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.firstName.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"firstname\"\n                placeholder=\"{{\n                  'register.firstName.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"firstName\"\n              />\n              <cx-form-errors\n                [control]=\"registerForm.get('firstName')\"\n              ></cx-form-errors>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.lastName.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"lastname\"\n                placeholder=\"{{\n                  'register.lastName.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"lastName\"\n              />\n              <cx-form-errors\n                [control]=\"registerForm.get('lastName')\"\n              ></cx-form-errors>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.emailAddress.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"email\"\n                name=\"email\"\n                placeholder=\"{{\n                  'register.emailAddress.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"email\"\n              />\n              <cx-form-errors\n                [control]=\"registerForm.get('email')\"\n              ></cx-form-errors>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.password.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"password\"\n                name=\"password\"\n                placeholder=\"{{\n                  'register.password.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"password\"\n              />\n              <cx-form-errors\n                [control]=\"registerForm.get('password')\"\n              ></cx-form-errors>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.confirmPassword.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"password\"\n                name=\"confirmpassword\"\n                placeholder=\"{{\n                  'register.confirmPassword.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"passwordconf\"\n              />\n              <cx-form-errors\n                [control]=\"registerForm.get('passwordconf')\"\n              ></cx-form-errors>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label *ngIf=\"anonymousConsent$ | async as anonymousConsent\">\n                <input\n                  type=\"checkbox\"\n                  name=\"newsletter\"\n                  class=\"form-check-input\"\n                  formControlName=\"newsletter\"\n                  [checked]=\"isConsentGiven(anonymousConsent.consent)\"\n                />\n                <span class=\"form-check-label\">\n                  {{ anonymousConsent.template }}\n                </span>\n              </label>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  name=\"termsandconditions\"\n                  formControlName=\"termsandconditions\"\n                />\n                <span class=\"form-check-label\">\n                  {{ 'register.confirmThatRead' | cxTranslate }}\n                  <a\n                    [routerLink]=\"{ cxRoute: 'termsAndConditions' } | cxUrl\"\n                    target=\"_blank\"\n                  >\n                    {{ 'register.termsAndConditions' | cxTranslate }}\n                  </a>\n                </span>\n                <cx-form-errors\n                  [control]=\"registerForm.get('termsandconditions')\"\n                ></cx-form-errors>\n              </label>\n            </div>\n          </div>\n          <button type=\"submit\" class=\"btn btn-block btn-primary\">\n            {{ 'register.register' | cxTranslate }}\n          </button>\n          <a\n            class=\"cx-login-link btn-link\"\n            [routerLink]=\"{ cxRoute: 'login' } | cxUrl\"\n            >{{ 'register.signIn' | cxTranslate }}</a\n          >\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
        })
    ], RegisterComponent);
    return RegisterComponent;
}());
export { RegisterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFDTCxXQUFXLEVBQ1gsV0FBVyxFQUNYLFNBQVMsRUFDVCxVQUFVLEdBQ1gsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLHVCQUF1QixFQUN2Qix3QkFBd0IsRUFDeEIsZUFBZSxFQUNmLHFCQUFxQixFQUNyQixvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCxLQUFLLEVBQ0wsV0FBVyxFQUNYLFVBQVUsR0FDWCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQU16RTtJQW1DRSwyQkFDWSxXQUF3QixFQUN4QixvQkFBMEMsRUFDMUMsRUFBZSxFQUNmLE1BQXNCLEVBQ3RCLHdCQUFrRCxFQUNsRCx1QkFBZ0Q7UUFMaEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBdENwRCxpQkFBWSxHQUFHLElB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ZSxDQUFDLENBQUM7U0FDaEU7SUFDSCxDQUFDO0lBRU8sbURBQXVCLEdBQS9CO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsV0FBVyxDQUFDLDZCQUE2QixFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsNEJBQTRCLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxPQUFPO1lBQ2hFLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztJQUNuRCxDQUFDOztnQkFsSndCLFdBQVc7Z0JBQ0Ysb0JBQW9CO2dCQUN0QyxXQUFXO2dCQUNQLGNBQWM7Z0JBQ0ksd0JBQXdCO2dCQUN6Qix1QkFBdUI7O0lBekNqRCxpQkFBaUI7UUFKN0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsNnRNQUF3QztTQUN6QyxDQUFDO09BQ1csaUJBQWlCLENBdUw3QjtJQUFELHdCQUFDO0NBQUEsQUF2TEQsSUF1TEM7U0F2TFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgRm9ybUJ1aWxkZXIsXG4gIEZvcm1Db250cm9sLFxuICBGb3JtR3JvdXAsXG4gIFZhbGlkYXRvcnMsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIEFub255bW91c0NvbnNlbnQsXG4gIEFub255bW91c0NvbnNlbnRzQ29uZmlnLFxuICBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsXG4gIENvbnNlbnRUZW1wbGF0ZSxcbiAgR2xvYmFsTWVzc2FnZUVudGl0aWVzLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBUaXRsZSxcbiAgVXNlclNlcnZpY2UsXG4gIFVzZXJTaWduVXAsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBzb3J0VGl0bGVzLCBDdXN0b21Gb3JtVmFsaWRhdG9ycyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXJlZ2lzdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHRpdGxlcyQ6IE9ic2VydmFibGU8VGl0bGVbXT47XG4gIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBhbm9ueW1vdXNDb25zZW50JDogT2JzZXJ2YWJsZTx7XG4gICAgY29uc2VudDogQW5vbnltb3VzQ29uc2VudDtcbiAgICB0ZW1wbGF0ZTogc3RyaW5nO1xuICB9PjtcblxuICByZWdpc3RlckZvcm06IEZvcm1Hcm91cCA9IHRoaXMuZmIuZ3JvdXAoXG4gICAge1xuICAgICAgdGl0bGVDb2RlOiBbJyddLFxuICAgICAgZmlyc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgbGFzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBlbWFpbDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgQ3VzdG9tRm9ybVZhbGlkYXRvcnMuZW1haWxWYWxpZGF0b3JdXSxcbiAgICAgIHBhc3N3b3JkOiBbXG4gICAgICAgICcnLFxuICAgICAgICBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgQ3VzdG9tRm9ybVZhbGlkYXRvcnMucGFzc3dvcmRWYWxpZGF0b3JdLFxuICAgICAgXSxcbiAgICAgIHBhc3N3b3JkY29uZjogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIG5ld3NsZXR0ZXI6IG5ldyBGb3JtQ29udHJvbCh7XG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgZGlzYWJsZWQ6IHRoaXMuaXNDb25zZW50UmVxdWlyZWQoKSxcbiAgICAgIH0pLFxuICAgICAgdGVybXNhbmRjb25kaXRpb25zOiBbZmFsc2UsIFZhbGlkYXRvcnMucmVxdWlyZWRUcnVlXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHZhbGlkYXRvcnM6IEN1c3RvbUZvcm1WYWxpZGF0b3JzLnBhc3N3b3Jkc011c3RNYXRjaChcbiAgICAgICAgJ3Bhc3N3b3JkJyxcbiAgICAgICAgJ3Bhc3N3b3JkY29uZidcbiAgICAgICksXG4gICAgfVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhbm9ueW1vdXNDb25zZW50c1NlcnZpY2U6IEFub255bW91c0NvbnNlbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYW5vbnltb3VzQ29uc2VudHNDb25maWc6IEFub255bW91c0NvbnNlbnRzQ29uZmlnXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRpdGxlcyQgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldFRpdGxlcygpLnBpcGUoXG4gICAgICB0YXAoKHRpdGxlcykgPT4ge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModGl0bGVzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvYWRUaXRsZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAoKHRpdGxlcykgPT4ge1xuICAgICAgICByZXR1cm4gdGl0bGVzLnNvcnQoc29ydFRpdGxlcyk7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLmxvYWRpbmckID0gdGhpcy51c2VyU2VydmljZS5nZXRSZWdpc3RlclVzZXJSZXN1bHRMb2FkaW5nKCk7XG4gICAgdGhpcy5yZWdpc3RlclVzZXJQcm9jZXNzSW5pdCgpO1xuXG4gICAgLy8gVE9ETzogV29ya2Fyb3VuZDogYWxsb3cgc2VydmVyIGZvciBkZWNpZGUgaXMgdGl0bGVDb2RlIG1hbmRhdG9yeSAoaWYgeWVzLCBwcm92aWRlIHBlcnNvbmFsaXplZCBtZXNzYWdlKVxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2VcbiAgICAgICAgLmdldCgpXG4gICAgICAgIC5waXBlKGZpbHRlcigobWVzc2FnZXMpID0+ICEhT2JqZWN0LmtleXMobWVzc2FnZXMpLmxlbmd0aCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKGdsb2JhbE1lc3NhZ2VFbnRpdGllczogR2xvYmFsTWVzc2FnZUVudGl0aWVzKSA9PiB7XG4gICAgICAgICAgY29uc3QgbWVzc2FnZXMgPVxuICAgICAgICAgICAgZ2xvYmFsTWVzc2FnZUVudGl0aWVzICYmXG4gICAgICAgICAgICBnbG9iYWxNZXNzYWdlRW50aXRpZXNbR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JdO1xuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgbWVzc2FnZXMgJiZcbiAgICAgICAgICAgIG1lc3NhZ2VzLnNvbWUoKG1lc3NhZ2UpID0+IG1lc3NhZ2UgPT09ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLicpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLnJlbW92ZShHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUik7XG4gICAgICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICAgICAgeyBrZXk6ICdyZWdpc3Rlci50aXRsZVJlcXVpcmVkJyB9LFxuICAgICAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIGNvbnN0IHsgcmVnaXN0ZXJDb25zZW50IH0gPSB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnPy5hbm9ueW1vdXNDb25zZW50cztcblxuICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudCQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmdldENvbnNlbnQocmVnaXN0ZXJDb25zZW50KSxcbiAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmdldFRlbXBsYXRlKHJlZ2lzdGVyQ29uc2VudCksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW2NvbnNlbnQsIHRlbXBsYXRlXTogW0Fub255bW91c0NvbnNlbnQsIENvbnNlbnRUZW1wbGF0ZV0pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjb25zZW50LFxuICAgICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZSA/IHRlbXBsYXRlLmRlc2NyaXB0aW9uIDogJycsXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnJlZ2lzdGVyRm9ybS5nZXQoJ25ld3NsZXR0ZXInKS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy50b2dnbGVBbm9ueW1vdXNDb25zZW50KCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBzdWJtaXRGb3JtKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlZ2lzdGVyRm9ybS52YWxpZCkge1xuICAgICAgdGhpcy5yZWdpc3RlclVzZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZWdpc3RlckZvcm0ubWFya0FsbEFzVG91Y2hlZCgpO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyVXNlcigpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKFxuICAgICAgdGhpcy5jb2xsZWN0RGF0YUZyb21SZWdpc3RlckZvcm0odGhpcy5yZWdpc3RlckZvcm0udmFsdWUpXG4gICAgKTtcbiAgfVxuXG4gIHRpdGxlU2VsZWN0ZWQodGl0bGU6IFRpdGxlKTogdm9pZCB7XG4gICAgdGhpcy5yZWdpc3RlckZvcm1bJ2NvbnRyb2xzJ10udGl0bGVDb2RlLnNldFZhbHVlKHRpdGxlLmNvZGUpO1xuICB9XG5cbiAgY29sbGVjdERhdGFGcm9tUmVnaXN0ZXJGb3JtKGZvcm1EYXRhOiBhbnkpOiBVc2VyU2lnblVwIHtcbiAgICBjb25zdCB7IGZpcnN0TmFtZSwgbGFzdE5hbWUsIGVtYWlsLCBwYXNzd29yZCwgdGl0bGVDb2RlIH0gPSBmb3JtRGF0YTtcblxuICAgIHJldHVybiB7XG4gICAgICBmaXJzdE5hbWUsXG4gICAgICBsYXN0TmFtZSxcbiAgICAgIHVpZDogZW1haWwudG9Mb3dlckNhc2UoKSxcbiAgICAgIHBhc3N3b3JkLFxuICAgICAgdGl0bGVDb2RlLFxuICAgIH07XG4gIH1cblxuICBpc0NvbnNlbnRHaXZlbihjb25zZW50OiBBbm9ueW1vdXNDb25zZW50KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmlzQ29uc2VudEdpdmVuKGNvbnNlbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0NvbnNlbnRSZXF1aXJlZCgpOiBib29sZWFuIHtcbiAgICBjb25zdCB7XG4gICAgICByZXF1aXJlZENvbnNlbnRzLFxuICAgICAgcmVnaXN0ZXJDb25zZW50LFxuICAgIH0gPSB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnPy5hbm9ueW1vdXNDb25zZW50cztcblxuICAgIGlmIChyZXF1aXJlZENvbnNlbnRzICYmIHJlZ2lzdGVyQ29uc2VudCkge1xuICAgICAgcmV0dXJuIHJlcXVpcmVkQ29uc2VudHMuaW5jbHVkZXMocmVnaXN0ZXJDb25zZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIG9uUmVnaXN0ZXJVc2VyU3VjY2VzcyhzdWNjZXNzOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgIHRoaXMucm91dGVyLmdvKCdsb2dpbicpO1xuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgIHsga2V5OiAncmVnaXN0ZXIucG9zdFJlZ2lzdGVyTWVzc2FnZScgfSxcbiAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUFub255bW91c0NvbnNlbnQoKTogdm9pZCB7XG4gICAgY29uc3QgeyByZWdpc3RlckNvbnNlbnQgfSA9IHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHM7XG5cbiAgICBpZiAoQm9vbGVhbih0aGlzLnJlZ2lzdGVyRm9ybS5nZXQoJ25ld3NsZXR0ZXInKS52YWx1ZSkpIHtcbiAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmdpdmVDb25zZW50KHJlZ2lzdGVyQ29uc2VudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLndpdGhkcmF3Q29uc2VudChyZWdpc3RlckNvbnNlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVnaXN0ZXJVc2VyUHJvY2Vzc0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy51c2VyU2VydmljZS5yZXNldFJlZ2lzdGVyVXNlclByb2Nlc3NTdGF0ZSgpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0UmVnaXN0ZXJVc2VyUmVzdWx0U3VjY2VzcygpLnN1YnNjcmliZSgoc3VjY2VzcykgPT4ge1xuICAgICAgICB0aGlzLm9uUmVnaXN0ZXJVc2VyU3VjY2VzcyhzdWNjZXNzKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy51c2VyU2VydmljZS5yZXNldFJlZ2lzdGVyVXNlclByb2Nlc3NTdGF0ZSgpO1xuICB9XG59XG4iXX0=