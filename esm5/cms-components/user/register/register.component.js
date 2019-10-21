/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators, } from '@angular/forms';
import { AnonymousConsentsConfig, AnonymousConsentsService, ANONYMOUS_CONSENTS_FEATURE, AuthRedirectService, AuthService, FeatureConfigService, GlobalMessageService, GlobalMessageType, RoutingService, UserService, } from '@spartacus/core';
import { combineLatest, Subscription } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { sortTitles } from '../../../shared/utils/forms/title-utils';
import { CustomFormValidators } from '../../../shared/utils/validators/custom-form-validators';
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, authRedirectService, userService, globalMessageService, fb, router, featureConfig, anonymousConsentsService, anonymousConsentsConfig) {
        this.auth = auth;
        this.authRedirectService = authRedirectService;
        this.userService = userService;
        this.globalMessageService = globalMessageService;
        this.fb = fb;
        this.router = router;
        this.featureConfig = featureConfig;
        this.anonymousConsentsService = anonymousConsentsService;
        this.anonymousConsentsConfig = anonymousConsentsConfig;
        this.subscription = new Subscription();
        // TODO(issue:4237) Register flow
        this.isNewRegisterFlowEnabled = this.featureConfig && this.featureConfig.isLevel('1.1');
        this.isAnonymousConsentEnabled = this.featureConfig &&
            this.featureConfig.isEnabled(ANONYMOUS_CONSENTS_FEATURE);
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
            newsletter: new FormControl({
                value: false,
                disabled: this.isAnonymousConsentEnabled
                    ? this.isConsentRequired()
                    : false,
            }),
            termsandconditions: [false, Validators.requiredTrue],
        }, { validator: CustomFormValidators.matchPassword });
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
        })), map((/**
         * @param {?} titles
         * @return {?}
         */
        function (titles) {
            /** @type {?} */
            var sortedTitles = titles.sort(sortTitles);
            return sortedTitles;
        })));
        // TODO(issue:4237) Register flow
        if (this.isNewRegisterFlowEnabled) {
            this.loading$ = this.userService.getRegisterUserResultLoading();
            this.registerUserProcessInit();
        }
        else {
            if (this.auth && this.authRedirectService) {
                this.subscription.add(this.userService
                    .getRegisterUserResultSuccess()
                    .subscribe((/**
                 * @param {?} success
                 * @return {?}
                 */
                function (success) {
                    if (success) {
                        var _a = _this.collectDataFromRegisterForm(_this.userRegistrationForm.value), uid = _a.uid, password = _a.password;
                        _this.auth.authorize(uid, password);
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
            }
        }
        // TODO: Workaround: allow server for decide is titleCode mandatory (if yes, provide personalized message)
        this.subscription.add(this.globalMessageService
            .get()
            .pipe(filter((/**
         * @param {?} messages
         * @return {?}
         */
        function (messages) { return !!Object.keys(messages).length; })))
            .subscribe((/**
         * @param {?} globalMessageEntities
         * @return {?}
         */
        function (globalMessageEntities) {
            /** @type {?} */
            var messages = globalMessageEntities &&
                globalMessageEntities[GlobalMessageType.MSG_TYPE_ERROR];
            if (messages &&
                messages.some((/**
                 * @param {?} message
                 * @return {?}
                 */
                function (message) { return message === 'This field is required.'; }))) {
                _this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
                _this.globalMessageService.add({ key: 'register.titleRequired' }, GlobalMessageType.MSG_TYPE_ERROR);
            }
        })));
        if (this.isAnonymousConsentEnabled &&
            Boolean(this.anonymousConsentsConfig) &&
            Boolean(this.anonymousConsentsConfig.anonymousConsents) &&
            Boolean(this.anonymousConsentsConfig.anonymousConsents.registerConsent)) {
            this.anonymousConsent$ = combineLatest([
                this.anonymousConsentsService.getConsent(this.anonymousConsentsConfig.anonymousConsents.registerConsent),
                this.anonymousConsentsService.getTemplate(this.anonymousConsentsConfig.anonymousConsents.registerConsent),
            ]).pipe(map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = tslib_1.__read(_a, 2), consent = _b[0], template = _b[1];
                return {
                    consent: consent,
                    template: template.description,
                };
            })));
        }
    };
    /**
     * @return {?}
     */
    RegisterComponent.prototype.submit = /**
     * @return {?}
     */
    function () {
        this.userService.register(this.collectDataFromRegisterForm(this.userRegistrationForm.value));
    };
    /**
     * @param {?} title
     * @return {?}
     */
    RegisterComponent.prototype.titleSelected = /**
     * @param {?} title
     * @return {?}
     */
    function (title) {
        this.userRegistrationForm['controls'].titleCode.setValue(title.code);
    };
    /**
     * @param {?} formData
     * @return {?}
     */
    RegisterComponent.prototype.collectDataFromRegisterForm = /**
     * @param {?} formData
     * @return {?}
     */
    function (formData) {
        var firstName = formData.firstName, lastName = formData.lastName, email = formData.email, password = formData.password, titleCode = formData.titleCode;
        return {
            firstName: firstName,
            lastName: lastName,
            uid: email.toLowerCase(),
            password: password,
            titleCode: titleCode,
        };
    };
    /**
     * @param {?} consent
     * @return {?}
     */
    RegisterComponent.prototype.isConsentGiven = /**
     * @param {?} consent
     * @return {?}
     */
    function (consent) {
        return this.anonymousConsentsService.isConsentGiven(consent);
    };
    /**
     * @private
     * @return {?}
     */
    RegisterComponent.prototype.isConsentRequired = /**
     * @private
     * @return {?}
     */
    function () {
        if (Boolean(this.anonymousConsentsService) &&
            Boolean(this.anonymousConsentsConfig.anonymousConsents) &&
            Boolean(this.anonymousConsentsConfig.anonymousConsents.registerConsent) &&
            Boolean(this.anonymousConsentsConfig.anonymousConsents.requiredConsents)) {
            return this.anonymousConsentsConfig.anonymousConsents.requiredConsents.includes(this.anonymousConsentsConfig.anonymousConsents.registerConsent);
        }
        return false;
    };
    /**
     * @private
     * @param {?} success
     * @return {?}
     */
    RegisterComponent.prototype.onRegisterUserSuccess = /**
     * @private
     * @param {?} success
     * @return {?}
     */
    function (success) {
        if (this.router && success) {
            this.router.go('login');
            this.globalMessageService.add({ key: 'register.postRegisterMessage' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
            if (this.isAnonymousConsentEnabled &&
                Boolean(this.userRegistrationForm.get('newsletter').value)) {
                this.anonymousConsentsService.giveConsent(this.anonymousConsentsConfig.anonymousConsents.registerConsent);
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    RegisterComponent.prototype.registerUserProcessInit = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.userService.resetRegisterUserProcessState();
        this.subscription.add(this.userService.getRegisterUserResultSuccess().subscribe((/**
         * @param {?} success
         * @return {?}
         */
        function (success) {
            _this.onRegisterUserSuccess(success);
        })));
    };
    /**
     * @return {?}
     */
    RegisterComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
        this.userService.resetRegisterUserProcessState();
    };
    RegisterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-register',
                    template: "<section\n  class=\"cx-page-section container\"\n  *ngIf=\"!(loading$ | async); else loading\"\n>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-6\">\n      <div class=\"cx-section\">\n        <form [formGroup]=\"userRegistrationForm\">\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.title' | cxTranslate\n              }}</span>\n              <select formControlName=\"titleCode\" class=\"form-control\">\n                <option selected value=\"\" disabled>{{\n                  'register.selectTitle' | cxTranslate\n                }}</option>\n                <option\n                  *ngFor=\"let title of titles$ | async\"\n                  [value]=\"title.code\"\n                  >{{ title.name }}</option\n                >\n              </select>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.firstName.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"firstname\"\n                placeholder=\"{{\n                  'register.firstName.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"firstName\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.lastName.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"lastname\"\n                placeholder=\"{{\n                  'register.lastName.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"lastName\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.emailAddress.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  userRegistrationForm.get('email').errors &&\n                  (userRegistrationForm.get('email').errors['email'] ||\n                    userRegistrationForm.get('email').errors['InvalidEmail']) &&\n                  userRegistrationForm.get('email').dirty\n                \"\n                type=\"email\"\n                name=\"email\"\n                placeholder=\"{{\n                  'register.emailAddress.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"email\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.password.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  userRegistrationForm.get('password').invalid &&\n                  userRegistrationForm.get('password').dirty\n                \"\n                type=\"password\"\n                name=\"password\"\n                placeholder=\"{{\n                  'register.password.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"password\"\n              />\n              <div\n                class=\"invalid-feedback\"\n                *ngIf=\"\n                  userRegistrationForm.get('password').invalid &&\n                  userRegistrationForm.get('password').dirty\n                \"\n              >\n                <span>{{\n                  'register.passwordMinRequirements' | cxTranslate\n                }}</span>\n              </div>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.confirmPassword.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  userRegistrationForm.get('password').value !==\n                  userRegistrationForm.get('passwordconf').value\n                \"\n                type=\"password\"\n                name=\"confirmpassword\"\n                placeholder=\"{{\n                  'register.confirmPassword.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"passwordconf\"\n              />\n              <div\n                class=\"invalid-feedback\"\n                *ngIf=\"\n                  userRegistrationForm.get('password').value !==\n                    userRegistrationForm.get('passwordconf').value &&\n                  userRegistrationForm.get('passwordconf').value\n                \"\n              >\n                <span>{{\n                  'register.bothPasswordMustMatch' | cxTranslate\n                }}</span>\n              </div>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <ng-container\n                *ngIf=\"isAnonymousConsentEnabled; else hardcodedNewsletter\"\n              >\n                <label *ngIf=\"anonymousConsent$ | async as anonymousConsent\">\n                  <input\n                    type=\"checkbox\"\n                    name=\"newsletter\"\n                    class=\"form-check-input\"\n                    formControlName=\"newsletter\"\n                    [checked]=\"isConsentGiven(anonymousConsent.consent)\"\n                  />\n                  <span class=\"form-check-label\">\n                    {{ anonymousConsent.template }}\n                  </span>\n                </label>\n              </ng-container>\n              <ng-template #hardcodedNewsletter\n                ><label>\n                  <input\n                    type=\"checkbox\"\n                    name=\"newsletter\"\n                    class=\"form-check-input\"\n                    formControlName=\"newsletter\"\n                  />\n                  <span class=\"form-check-label\">\n                    {{ 'register.emailMarketing' | cxTranslate }}\n                  </span>\n                </label>\n              </ng-template>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  name=\"termsandconditions\"\n                  formControlName=\"termsandconditions\"\n                />\n                <span class=\"form-check-label\">\n                  {{ 'register.confirmThatRead' | cxTranslate }}\n                  <a\n                    [routerLink]=\"{ cxRoute: 'termsAndConditions' } | cxUrl\"\n                    target=\"_blank\"\n                  >\n                    {{ 'register.termsAndConditions' | cxTranslate }}\n                  </a>\n                </span>\n              </label>\n            </div>\n          </div>\n          <button\n            type=\"submit\"\n            (click)=\"submit()\"\n            [disabled]=\"userRegistrationForm.invalid\"\n            class=\"btn btn-block btn-primary\"\n          >\n            {{ 'register.register' | cxTranslate }}\n          </button>\n          <a\n            class=\"cx-login-link btn-link\"\n            [routerLink]=\"{ cxRoute: 'login' } | cxUrl\"\n            >{{ 'register.signIn' | cxTranslate }}</a\n          >\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    RegisterComponent.ctorParameters = function () { return [
        { type: AuthService },
        { type: AuthRedirectService },
        { type: UserService },
        { type: GlobalMessageService },
        { type: FormBuilder },
        { type: RoutingService },
        { type: FeatureConfigService },
        { type: AnonymousConsentsService },
        { type: AnonymousConsentsConfig }
    ]; };
    return RegisterComponent;
}());
export { RegisterComponent };
if (false) {
    /** @type {?} */
    RegisterComponent.prototype.titles$;
    /** @type {?} */
    RegisterComponent.prototype.loading$;
    /**
     * @type {?}
     * @private
     */
    RegisterComponent.prototype.subscription;
    /** @type {?} */
    RegisterComponent.prototype.anonymousConsent$;
    /** @type {?} */
    RegisterComponent.prototype.isNewRegisterFlowEnabled;
    /** @type {?} */
    RegisterComponent.prototype.isAnonymousConsentEnabled;
    /** @type {?} */
    RegisterComponent.prototype.userRegistrationForm;
    /**
     * @type {?}
     * @protected
     */
    RegisterComponent.prototype.auth;
    /**
     * @type {?}
     * @protected
     */
    RegisterComponent.prototype.authRedirectService;
    /**
     * @type {?}
     * @protected
     */
    RegisterComponent.prototype.userService;
    /**
     * @type {?}
     * @protected
     */
    RegisterComponent.prototype.globalMessageService;
    /**
     * @type {?}
     * @protected
     */
    RegisterComponent.prototype.fb;
    /**
     * @type {?}
     * @protected
     */
    RegisterComponent.prototype.router;
    /**
     * @type {?}
     * @protected
     */
    RegisterComponent.prototype.featureConfig;
    /**
     * @type {?}
     * @protected
     */
    RegisterComponent.prototype.anonymousConsentsService;
    /**
     * @type {?}
     * @protected
     */
    RegisterComponent.prototype.anonymousConsentsConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsV0FBVyxFQUNYLFdBQVcsRUFFWCxVQUFVLEdBQ1gsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLHdCQUF3QixFQUN4QiwwQkFBMEIsRUFDMUIsbUJBQW1CLEVBQ25CLFdBQVcsRUFFWCxvQkFBb0IsRUFFcEIsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixjQUFjLEVBRWQsV0FBVyxHQUVaLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBRS9GO0lBaUZFLDJCQUNZLElBQWlCLEVBQ2pCLG1CQUF3QyxFQUN4QyxXQUF3QixFQUN4QixvQkFBMEMsRUFDMUMsRUFBZSxFQUNmLE1BQXVCLEVBQ3ZCLGFBQW9DLEVBQ3BDLHdCQUFtRCxFQUNuRCx1QkFBaUQ7UUFSakQsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNqQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsT0FBRSxHQUFGLEVBQUUs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MEM7O0lBRTFDLDhDQUdHOztJQUdILHFEQUMwRDs7SUFFMUQsc0RBRTJEOztJQUUzRCxpREFvQkU7Ozs7O0lBd0NBLGlDQUEyQjs7Ozs7SUFDM0IsZ0RBQWtEOzs7OztJQUNsRCx3Q0FBa0M7Ozs7O0lBQ2xDLGlEQUFvRDs7Ozs7SUFDcEQsK0JBQXlCOzs7OztJQUN6QixtQ0FBaUM7Ozs7O0lBQ2pDLDBDQUE4Qzs7Ozs7SUFDOUMscURBQTZEOzs7OztJQUM3RCxvREFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBGb3JtQnVpbGRlcixcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1Hcm91cCxcbiAgVmFsaWRhdG9ycyxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQW5vbnltb3VzQ29uc2VudCxcbiAgQW5vbnltb3VzQ29uc2VudHNDb25maWcsXG4gIEFub255bW91c0NvbnNlbnRzU2VydmljZSxcbiAgQU5PTllNT1VTX0NPTlNFTlRTX0ZFQVRVUkUsXG4gIEF1dGhSZWRpcmVjdFNlcnZpY2UsXG4gIEF1dGhTZXJ2aWNlLFxuICBDb25zZW50VGVtcGxhdGUsXG4gIEZlYXR1cmVDb25maWdTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlRW50aXRpZXMsXG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFRpdGxlLFxuICBVc2VyU2VydmljZSxcbiAgVXNlclNpZ25VcCxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IHNvcnRUaXRsZXMgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvdXRpbHMvZm9ybXMvdGl0bGUtdXRpbHMnO1xuaW1wb3J0IHsgQ3VzdG9tRm9ybVZhbGlkYXRvcnMgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvdXRpbHMvdmFsaWRhdG9ycy9jdXN0b20tZm9ybS12YWxpZGF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcmVnaXN0ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgdGl0bGVzJDogT2JzZXJ2YWJsZTxUaXRsZVtdPjtcbiAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGFub255bW91c0NvbnNlbnQkOiBPYnNlcnZhYmxlPHtcbiAgICBjb25zZW50OiBBbm9ueW1vdXNDb25zZW50O1xuICAgIHRlbXBsYXRlOiBzdHJpbmc7XG4gIH0+O1xuXG4gIC8vIFRPRE8oaXNzdWU6NDIzNykgUmVnaXN0ZXIgZmxvd1xuICBpc05ld1JlZ2lzdGVyRmxvd0VuYWJsZWQ6IGJvb2xlYW4gPVxuICAgIHRoaXMuZmVhdHVyZUNvbmZpZyAmJiB0aGlzLmZlYXR1cmVDb25maWcuaXNMZXZlbCgnMS4xJyk7XG5cbiAgaXNBbm9ueW1vdXNDb25zZW50RW5hYmxlZCA9XG4gICAgdGhpcy5mZWF0dXJlQ29uZmlnICYmXG4gICAgdGhpcy5mZWF0dXJlQ29uZmlnLmlzRW5hYmxlZChBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRSk7XG5cbiAgdXNlclJlZ2lzdHJhdGlvbkZvcm06IEZvcm1Hcm91cCA9IHRoaXMuZmIuZ3JvdXAoXG4gICAge1xuICAgICAgdGl0bGVDb2RlOiBbJyddLFxuICAgICAgZmlyc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgbGFzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBlbWFpbDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgQ3VzdG9tRm9ybVZhbGlkYXRvcnMuZW1haWxWYWxpZGF0b3JdXSxcbiAgICAgIHBhc3N3b3JkOiBbXG4gICAgICAgICcnLFxuICAgICAgICBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgQ3VzdG9tRm9ybVZhbGlkYXRvcnMucGFzc3dvcmRWYWxpZGF0b3JdLFxuICAgICAgXSxcbiAgICAgIHBhc3N3b3JkY29uZjogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIG5ld3NsZXR0ZXI6IG5ldyBGb3JtQ29udHJvbCh7XG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgZGlzYWJsZWQ6IHRoaXMuaXNBbm9ueW1vdXNDb25zZW50RW5hYmxlZFxuICAgICAgICAgID8gdGhpcy5pc0NvbnNlbnRSZXF1aXJlZCgpXG4gICAgICAgICAgOiBmYWxzZSxcbiAgICAgIH0pLFxuICAgICAgdGVybXNhbmRjb25kaXRpb25zOiBbZmFsc2UsIFZhbGlkYXRvcnMucmVxdWlyZWRUcnVlXSxcbiAgICB9LFxuICAgIHsgdmFsaWRhdG9yOiBDdXN0b21Gb3JtVmFsaWRhdG9ycy5tYXRjaFBhc3N3b3JkIH1cbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBhdXRoOiBBdXRoU2VydmljZSxcbiAgICBhdXRoUmVkaXJlY3RTZXJ2aWNlOiBBdXRoUmVkaXJlY3RTZXJ2aWNlLFxuICAgIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgZmI6IEZvcm1CdWlsZGVyLFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1bmlmaWVkLXNpZ25hdHVyZXNcbiAgICByb3V0ZXI6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIGZlYXR1cmVDb25maWc6IEZlYXR1cmVDb25maWdTZXJ2aWNlLFxuICAgIGFub255bW91c0NvbnNlbnRzU2VydmljZTogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLFxuICAgIGFub255bW91c0NvbnNlbnRzQ29uZmlnOiBBbm9ueW1vdXNDb25zZW50c0NvbmZpZ1xuICApO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSAxLjEuMFxuICAgKlxuICAgKiBVc2UgY29uc3RydWN0b3IoXG4gICAqIHByb3RlY3RlZCBhdXRoOiBBdXRoU2VydmljZSxcbiAgICogcHJvdGVjdGVkIGF1dGhSZWRpcmVjdFNlcnZpY2U6IEF1dGhSZWRpcmVjdFNlcnZpY2UsXG4gICAqIHByb3RlY3RlZCB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAqIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAqIHByb3RlY3RlZCBmYjogRm9ybUJ1aWxkZXIsXG4gICAqIHByb3RlY3RlZCByb3V0ZXI/OiBSb3V0aW5nU2VydmljZSxcbiAgICogcHJvdGVjdGVkIGZlYXR1cmVDb25maWc/OiBGZWF0dXJlQ29uZmlnU2VydmljZSxcbiAgICogcHJvdGVjdGVkIGFub255bW91c0NvbnNlbnRzU2VydmljZT86IEFub255bW91c0NvbnNlbnRzU2VydmljZSxcbiAgICogcHJvdGVjdGVkIGFub255bW91c0NvbnNlbnRzQ29uZmlnPzogQW5vbnltb3VzQ29uc2VudHNDb25maWcpIGluc3RlYWRcbiAgICpcbiAgICogVE9ETyhpc3N1ZTo0MjM3KSBSZWdpc3RlciBmbG93XG4gICAqIFRPRE8oaXNzdWU6NDk4OSkgQW5vbnltb3VzIGNvbnNlbnRzXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBhdXRoOiBBdXRoU2VydmljZSxcbiAgICBhdXRoUmVkaXJlY3RTZXJ2aWNlOiBBdXRoUmVkaXJlY3RTZXJ2aWNlLFxuICAgIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgZmI6IEZvcm1CdWlsZGVyXG4gICk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBhdXRoOiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYXV0aFJlZGlyZWN0U2VydmljZTogQXV0aFJlZGlyZWN0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGZiOiBGb3JtQnVpbGRlcixcbiAgICBwcm90ZWN0ZWQgcm91dGVyPzogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGZlYXR1cmVDb25maWc/OiBGZWF0dXJlQ29uZmlnU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlPzogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhbm9ueW1vdXNDb25zZW50c0NvbmZpZz86IEFub255bW91c0NvbnNlbnRzQ29uZmlnXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRpdGxlcyQgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldFRpdGxlcygpLnBpcGUoXG4gICAgICB0YXAodGl0bGVzID0+IHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRpdGxlcykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2FkVGl0bGVzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKHRpdGxlcyA9PiB7XG4gICAgICAgIGNvbnN0IHNvcnRlZFRpdGxlcyA9IHRpdGxlcy5zb3J0KHNvcnRUaXRsZXMpO1xuICAgICAgICByZXR1cm4gc29ydGVkVGl0bGVzO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgLy8gVE9ETyhpc3N1ZTo0MjM3KSBSZWdpc3RlciBmbG93XG4gICAgaWYgKHRoaXMuaXNOZXdSZWdpc3RlckZsb3dFbmFibGVkKSB7XG4gICAgICB0aGlzLmxvYWRpbmckID0gdGhpcy51c2VyU2VydmljZS5nZXRSZWdpc3RlclVzZXJSZXN1bHRMb2FkaW5nKCk7XG4gICAgICB0aGlzLnJlZ2lzdGVyVXNlclByb2Nlc3NJbml0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmF1dGggJiYgdGhpcy5hdXRoUmVkaXJlY3RTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlXG4gICAgICAgICAgICAuZ2V0UmVnaXN0ZXJVc2VyUmVzdWx0U3VjY2VzcygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB1aWQsIHBhc3N3b3JkIH0gPSB0aGlzLmNvbGxlY3REYXRhRnJvbVJlZ2lzdGVyRm9ybShcbiAgICAgICAgICAgICAgICAgIHRoaXMudXNlclJlZ2lzdHJhdGlvbkZvcm0udmFsdWVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aC5hdXRob3JpemUodWlkLCBwYXNzd29yZCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgICAgICB0aGlzLmF1dGguZ2V0VXNlclRva2VuKCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5yZW1vdmUoXG4gICAgICAgICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgdGhpcy5hdXRoUmVkaXJlY3RTZXJ2aWNlLnJlZGlyZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUT0RPOiBXb3JrYXJvdW5kOiBhbGxvdyBzZXJ2ZXIgZm9yIGRlY2lkZSBpcyB0aXRsZUNvZGUgbWFuZGF0b3J5IChpZiB5ZXMsIHByb3ZpZGUgcGVyc29uYWxpemVkIG1lc3NhZ2UpXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZVxuICAgICAgICAuZ2V0KClcbiAgICAgICAgLnBpcGUoZmlsdGVyKG1lc3NhZ2VzID0+ICEhT2JqZWN0LmtleXMobWVzc2FnZXMpLmxlbmd0aCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKGdsb2JhbE1lc3NhZ2VFbnRpdGllczogR2xvYmFsTWVzc2FnZUVudGl0aWVzKSA9PiB7XG4gICAgICAgICAgY29uc3QgbWVzc2FnZXMgPVxuICAgICAgICAgICAgZ2xvYmFsTWVzc2FnZUVudGl0aWVzICYmXG4gICAgICAgICAgICBnbG9iYWxNZXNzYWdlRW50aXRpZXNbR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JdO1xuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgbWVzc2FnZXMgJiZcbiAgICAgICAgICAgIG1lc3NhZ2VzLnNvbWUobWVzc2FnZSA9PiBtZXNzYWdlID09PSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZC4nKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5yZW1vdmUoR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1IpO1xuICAgICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgICAgICAgIHsga2V5OiAncmVnaXN0ZXIudGl0bGVSZXF1aXJlZCcgfSxcbiAgICAgICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICk7XG5cbiAgICBpZiAoXG4gICAgICB0aGlzLmlzQW5vbnltb3VzQ29uc2VudEVuYWJsZWQgJiZcbiAgICAgIEJvb2xlYW4odGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZykgJiZcbiAgICAgIEJvb2xlYW4odGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cykgJiZcbiAgICAgIEJvb2xlYW4odGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZWdpc3RlckNvbnNlbnQpXG4gICAgKSB7XG4gICAgICB0aGlzLmFub255bW91c0NvbnNlbnQkID0gY29tYmluZUxhdGVzdChbXG4gICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmdldENvbnNlbnQoXG4gICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZWdpc3RlckNvbnNlbnRcbiAgICAgICAgKSxcbiAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuZ2V0VGVtcGxhdGUoXG4gICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZWdpc3RlckNvbnNlbnRcbiAgICAgICAgKSxcbiAgICAgIF0pLnBpcGUoXG4gICAgICAgIG1hcCgoW2NvbnNlbnQsIHRlbXBsYXRlXTogW0Fub255bW91c0NvbnNlbnQsIENvbnNlbnRUZW1wbGF0ZV0pID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29uc2VudCxcbiAgICAgICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZS5kZXNjcmlwdGlvbixcbiAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBzdWJtaXQoKTogdm9pZCB7XG4gICAgdGhpcy51c2VyU2VydmljZS5yZWdpc3RlcihcbiAgICAgIHRoaXMuY29sbGVjdERhdGFGcm9tUmVnaXN0ZXJGb3JtKHRoaXMudXNlclJlZ2lzdHJhdGlvbkZvcm0udmFsdWUpXG4gICAgKTtcbiAgfVxuXG4gIHRpdGxlU2VsZWN0ZWQodGl0bGU6IFRpdGxlKTogdm9pZCB7XG4gICAgdGhpcy51c2VyUmVnaXN0cmF0aW9uRm9ybVsnY29udHJvbHMnXS50aXRsZUNvZGUuc2V0VmFsdWUodGl0bGUuY29kZSk7XG4gIH1cblxuICBjb2xsZWN0RGF0YUZyb21SZWdpc3RlckZvcm0oZm9ybURhdGE6IGFueSk6IFVzZXJTaWduVXAge1xuICAgIGNvbnN0IHsgZmlyc3ROYW1lLCBsYXN0TmFtZSwgZW1haWwsIHBhc3N3b3JkLCB0aXRsZUNvZGUgfSA9IGZvcm1EYXRhO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGZpcnN0TmFtZSxcbiAgICAgIGxhc3ROYW1lLFxuICAgICAgdWlkOiBlbWFpbC50b0xvd2VyQ2FzZSgpLFxuICAgICAgcGFzc3dvcmQsXG4gICAgICB0aXRsZUNvZGUsXG4gICAgfTtcbiAgfVxuXG4gIGlzQ29uc2VudEdpdmVuKGNvbnNlbnQ6IEFub255bW91c0NvbnNlbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuaXNDb25zZW50R2l2ZW4oY29uc2VudCk7XG4gIH1cblxuICBwcml2YXRlIGlzQ29uc2VudFJlcXVpcmVkKCk6IGJvb2xlYW4ge1xuICAgIGlmIChcbiAgICAgIEJvb2xlYW4odGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UpICYmXG4gICAgICBCb29sZWFuKHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMpICYmXG4gICAgICBCb29sZWFuKHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVnaXN0ZXJDb25zZW50KSAmJlxuICAgICAgQm9vbGVhbih0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHMpXG4gICAgKSB7XG4gICAgICByZXR1cm4gdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZXF1aXJlZENvbnNlbnRzLmluY2x1ZGVzKFxuICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlZ2lzdGVyQ29uc2VudFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBvblJlZ2lzdGVyVXNlclN1Y2Nlc3Moc3VjY2VzczogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLnJvdXRlciAmJiBzdWNjZXNzKSB7XG4gICAgICB0aGlzLnJvdXRlci5nbygnbG9naW4nKTtcbiAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICB7IGtleTogJ3JlZ2lzdGVyLnBvc3RSZWdpc3Rlck1lc3NhZ2UnIH0sXG4gICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTlxuICAgICAgKTtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5pc0Fub255bW91c0NvbnNlbnRFbmFibGVkICYmXG4gICAgICAgIEJvb2xlYW4odGhpcy51c2VyUmVnaXN0cmF0aW9uRm9ybS5nZXQoJ25ld3NsZXR0ZXInKS52YWx1ZSlcbiAgICAgICkge1xuICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5naXZlQ29uc2VudChcbiAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlZ2lzdGVyQ29uc2VudFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVnaXN0ZXJVc2VyUHJvY2Vzc0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy51c2VyU2VydmljZS5yZXNldFJlZ2lzdGVyVXNlclByb2Nlc3NTdGF0ZSgpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0UmVnaXN0ZXJVc2VyUmVzdWx0U3VjY2VzcygpLnN1YnNjcmliZShzdWNjZXNzID0+IHtcbiAgICAgICAgdGhpcy5vblJlZ2lzdGVyVXNlclN1Y2Nlc3Moc3VjY2Vzcyk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMudXNlclNlcnZpY2UucmVzZXRSZWdpc3RlclVzZXJQcm9jZXNzU3RhdGUoKTtcbiAgfVxufVxuIl19