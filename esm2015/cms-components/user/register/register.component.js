/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators, } from '@angular/forms';
import { AnonymousConsentsConfig, AnonymousConsentsService, ANONYMOUS_CONSENTS_FEATURE, AuthRedirectService, AuthService, FeatureConfigService, GlobalMessageService, GlobalMessageType, RoutingService, UserService, } from '@spartacus/core';
import { combineLatest, Subscription } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { sortTitles } from '../../../shared/utils/forms/title-utils';
import { CustomFormValidators } from '../../../shared/utils/validators/custom-form-validators';
export class RegisterComponent {
    /**
     * @param {?} auth
     * @param {?} authRedirectService
     * @param {?} userService
     * @param {?} globalMessageService
     * @param {?} fb
     * @param {?=} router
     * @param {?=} featureConfig
     * @param {?=} anonymousConsentsService
     * @param {?=} anonymousConsentsConfig
     */
    constructor(auth, authRedirectService, userService, globalMessageService, fb, router, featureConfig, anonymousConsentsService, anonymousConsentsConfig) {
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
            const sortedTitles = titles.sort(sortTitles);
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
                (success) => {
                    if (success) {
                        const { uid, password } = this.collectDataFromRegisterForm(this.userRegistrationForm.value);
                        this.auth.authorize(uid, password);
                    }
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
            }
        }
        // TODO: Workaround: allow server for decide is titleCode mandatory (if yes, provide personalized message)
        this.subscription.add(this.globalMessageService
            .get()
            .pipe(filter((/**
         * @param {?} messages
         * @return {?}
         */
        messages => !!Object.keys(messages).length)))
            .subscribe((/**
         * @param {?} globalMessageEntities
         * @return {?}
         */
        (globalMessageEntities) => {
            /** @type {?} */
            const messages = globalMessageEntities &&
                globalMessageEntities[GlobalMessageType.MSG_TYPE_ERROR];
            if (messages &&
                messages.some((/**
                 * @param {?} message
                 * @return {?}
                 */
                message => message === 'This field is required.'))) {
                this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
                this.globalMessageService.add({ key: 'register.titleRequired' }, GlobalMessageType.MSG_TYPE_ERROR);
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
            ([consent, template]) => {
                return {
                    consent,
                    template: template.description,
                };
            })));
        }
    }
    /**
     * @return {?}
     */
    submit() {
        this.userService.register(this.collectDataFromRegisterForm(this.userRegistrationForm.value));
    }
    /**
     * @param {?} title
     * @return {?}
     */
    titleSelected(title) {
        this.userRegistrationForm['controls'].titleCode.setValue(title.code);
    }
    /**
     * @param {?} formData
     * @return {?}
     */
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
    /**
     * @param {?} consent
     * @return {?}
     */
    isConsentGiven(consent) {
        return this.anonymousConsentsService.isConsentGiven(consent);
    }
    /**
     * @private
     * @return {?}
     */
    isConsentRequired() {
        if (Boolean(this.anonymousConsentsService) &&
            Boolean(this.anonymousConsentsConfig.anonymousConsents) &&
            Boolean(this.anonymousConsentsConfig.anonymousConsents.registerConsent) &&
            Boolean(this.anonymousConsentsConfig.anonymousConsents.requiredConsents)) {
            return this.anonymousConsentsConfig.anonymousConsents.requiredConsents.includes(this.anonymousConsentsConfig.anonymousConsents.registerConsent);
        }
        return false;
    }
    /**
     * @private
     * @param {?} success
     * @return {?}
     */
    onRegisterUserSuccess(success) {
        if (this.router && success) {
            this.router.go('login');
            this.globalMessageService.add({ key: 'register.postRegisterMessage' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
            if (this.isAnonymousConsentEnabled &&
                Boolean(this.userRegistrationForm.get('newsletter').value)) {
                this.anonymousConsentsService.giveConsent(this.anonymousConsentsConfig.anonymousConsents.registerConsent);
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    registerUserProcessInit() {
        this.userService.resetRegisterUserProcessState();
        this.subscription.add(this.userService.getRegisterUserResultSuccess().subscribe((/**
         * @param {?} success
         * @return {?}
         */
        success => {
            this.onRegisterUserSuccess(success);
        })));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.userService.resetRegisterUserProcessState();
    }
}
RegisterComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-register',
                template: "<section\n  class=\"cx-page-section container\"\n  *ngIf=\"!(loading$ | async); else loading\"\n>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-6\">\n      <div class=\"cx-section\">\n        <form [formGroup]=\"userRegistrationForm\">\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.title' | cxTranslate\n              }}</span>\n              <select formControlName=\"titleCode\" class=\"form-control\">\n                <option selected value=\"\" disabled>{{\n                  'register.selectTitle' | cxTranslate\n                }}</option>\n                <option\n                  *ngFor=\"let title of titles$ | async\"\n                  [value]=\"title.code\"\n                  >{{ title.name }}</option\n                >\n              </select>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.firstName.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"firstname\"\n                placeholder=\"{{\n                  'register.firstName.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"firstName\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.lastName.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"lastname\"\n                placeholder=\"{{\n                  'register.lastName.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"lastName\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.emailAddress.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  userRegistrationForm.get('email').errors &&\n                  (userRegistrationForm.get('email').errors['email'] ||\n                    userRegistrationForm.get('email').errors['InvalidEmail']) &&\n                  userRegistrationForm.get('email').dirty\n                \"\n                type=\"email\"\n                name=\"email\"\n                placeholder=\"{{\n                  'register.emailAddress.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"email\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.password.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  userRegistrationForm.get('password').invalid &&\n                  userRegistrationForm.get('password').dirty\n                \"\n                type=\"password\"\n                name=\"password\"\n                placeholder=\"{{\n                  'register.password.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"password\"\n              />\n              <div\n                class=\"invalid-feedback\"\n                *ngIf=\"\n                  userRegistrationForm.get('password').invalid &&\n                  userRegistrationForm.get('password').dirty\n                \"\n              >\n                <span>{{\n                  'register.passwordMinRequirements' | cxTranslate\n                }}</span>\n              </div>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.confirmPassword.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  userRegistrationForm.get('password').value !==\n                  userRegistrationForm.get('passwordconf').value\n                \"\n                type=\"password\"\n                name=\"confirmpassword\"\n                placeholder=\"{{\n                  'register.confirmPassword.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"passwordconf\"\n              />\n              <div\n                class=\"invalid-feedback\"\n                *ngIf=\"\n                  userRegistrationForm.get('password').value !==\n                    userRegistrationForm.get('passwordconf').value &&\n                  userRegistrationForm.get('passwordconf').value\n                \"\n              >\n                <span>{{\n                  'register.bothPasswordMustMatch' | cxTranslate\n                }}</span>\n              </div>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <ng-container\n                *ngIf=\"isAnonymousConsentEnabled; else hardcodedNewsletter\"\n              >\n                <label *ngIf=\"anonymousConsent$ | async as anonymousConsent\">\n                  <input\n                    type=\"checkbox\"\n                    name=\"newsletter\"\n                    class=\"form-check-input\"\n                    formControlName=\"newsletter\"\n                    [checked]=\"isConsentGiven(anonymousConsent.consent)\"\n                  />\n                  <span class=\"form-check-label\">\n                    {{ anonymousConsent.template }}\n                  </span>\n                </label>\n              </ng-container>\n              <ng-template #hardcodedNewsletter\n                ><label>\n                  <input\n                    type=\"checkbox\"\n                    name=\"newsletter\"\n                    class=\"form-check-input\"\n                    formControlName=\"newsletter\"\n                  />\n                  <span class=\"form-check-label\">\n                    {{ 'register.emailMarketing' | cxTranslate }}\n                  </span>\n                </label>\n              </ng-template>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  name=\"termsandconditions\"\n                  formControlName=\"termsandconditions\"\n                />\n                <span class=\"form-check-label\">\n                  {{ 'register.confirmThatRead' | cxTranslate }}\n                  <a\n                    [routerLink]=\"{ cxRoute: 'termsAndConditions' } | cxUrl\"\n                    target=\"_blank\"\n                  >\n                    {{ 'register.termsAndConditions' | cxTranslate }}\n                  </a>\n                </span>\n              </label>\n            </div>\n          </div>\n          <button\n            type=\"submit\"\n            (click)=\"submit()\"\n            [disabled]=\"userRegistrationForm.invalid\"\n            class=\"btn btn-block btn-primary\"\n          >\n            {{ 'register.register' | cxTranslate }}\n          </button>\n          <a\n            class=\"cx-login-link btn-link\"\n            [routerLink]=\"{ cxRoute: 'login' } | cxUrl\"\n            >{{ 'register.signIn' | cxTranslate }}</a\n          >\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
RegisterComponent.ctorParameters = () => [
    { type: AuthService },
    { type: AuthRedirectService },
    { type: UserService },
    { type: GlobalMessageService },
    { type: FormBuilder },
    { type: RoutingService },
    { type: FeatureConfigService },
    { type: AnonymousConsentsService },
    { type: AnonymousConsentsConfig }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFDTCxXQUFXLEVBQ1gsV0FBVyxFQUVYLFVBQVUsR0FDWCxNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsd0JBQXdCLEVBQ3hCLDBCQUEwQixFQUMxQixtQkFBbUIsRUFDbkIsV0FBVyxFQUVYLG9CQUFvQixFQUVwQixvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLGNBQWMsRUFFZCxXQUFXLEdBRVosTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFjLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFNL0YsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7Ozs7Ozs7O0lBNkU1QixZQUNZLElBQWlCLEVBQ2pCLG1CQUF3QyxFQUN4QyxXQUF3QixFQUN4QixvQkFBMEMsRUFDMUMsRUFBZSxFQUNmLE1BQXVCLEVBQ3ZCLGFBQW9DLEVBQ3BDLHdCQUFtRCxFQUNuRCx1QkFBaUQ7UUFSakQsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNqQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHlCQUFvQixHQUFwQixvQkFBb0Is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QUMzQixnREFBa0Q7Ozs7O0lBQ2xELHdDQUFrQzs7Ozs7SUFDbEMsaURBQW9EOzs7OztJQUNwRCwrQkFBeUI7Ozs7O0lBQ3pCLG1DQUFpQzs7Ozs7SUFDakMsMENBQThDOzs7OztJQUM5QyxxREFBNkQ7Ozs7O0lBQzdELG9EQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEZvcm1CdWlsZGVyLFxuICBGb3JtQ29udHJvbCxcbiAgRm9ybUdyb3VwLFxuICBWYWxpZGF0b3JzLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBBbm9ueW1vdXNDb25zZW50LFxuICBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyxcbiAgQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLFxuICBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRSxcbiAgQXV0aFJlZGlyZWN0U2VydmljZSxcbiAgQXV0aFNlcnZpY2UsXG4gIENvbnNlbnRUZW1wbGF0ZSxcbiAgRmVhdHVyZUNvbmZpZ1NlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VFbnRpdGllcyxcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgVGl0bGUsXG4gIFVzZXJTZXJ2aWNlLFxuICBVc2VyU2lnblVwLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgc29ydFRpdGxlcyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC91dGlscy9mb3Jtcy90aXRsZS11dGlscyc7XG5pbXBvcnQgeyBDdXN0b21Gb3JtVmFsaWRhdG9ycyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC91dGlscy92YWxpZGF0b3JzL2N1c3RvbS1mb3JtLXZhbGlkYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1yZWdpc3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICB0aXRsZXMkOiBPYnNlcnZhYmxlPFRpdGxlW10+O1xuICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgYW5vbnltb3VzQ29uc2VudCQ6IE9ic2VydmFibGU8e1xuICAgIGNvbnNlbnQ6IEFub255bW91c0NvbnNlbnQ7XG4gICAgdGVtcGxhdGU6IHN0cmluZztcbiAgfT47XG5cbiAgLy8gVE9ETyhpc3N1ZTo0MjM3KSBSZWdpc3RlciBmbG93XG4gIGlzTmV3UmVnaXN0ZXJGbG93RW5hYmxlZDogYm9vbGVhbiA9XG4gICAgdGhpcy5mZWF0dXJlQ29uZmlnICYmIHRoaXMuZmVhdHVyZUNvbmZpZy5pc0xldmVsKCcxLjEnKTtcblxuICBpc0Fub255bW91c0NvbnNlbnRFbmFibGVkID1cbiAgICB0aGlzLmZlYXR1cmVDb25maWcgJiZcbiAgICB0aGlzLmZlYXR1cmVDb25maWcuaXNFbmFibGVkKEFOT05ZTU9VU19DT05TRU5UU19GRUFUVVJFKTtcblxuICB1c2VyUmVnaXN0cmF0aW9uRm9ybTogRm9ybUdyb3VwID0gdGhpcy5mYi5ncm91cChcbiAgICB7XG4gICAgICB0aXRsZUNvZGU6IFsnJ10sXG4gICAgICBmaXJzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBsYXN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGVtYWlsOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBDdXN0b21Gb3JtVmFsaWRhdG9ycy5lbWFpbFZhbGlkYXRvcl1dLFxuICAgICAgcGFzc3dvcmQ6IFtcbiAgICAgICAgJycsXG4gICAgICAgIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBDdXN0b21Gb3JtVmFsaWRhdG9ycy5wYXNzd29yZFZhbGlkYXRvcl0sXG4gICAgICBdLFxuICAgICAgcGFzc3dvcmRjb25mOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgbmV3c2xldHRlcjogbmV3IEZvcm1Db250cm9sKHtcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICBkaXNhYmxlZDogdGhpcy5pc0Fub255bW91c0NvbnNlbnRFbmFibGVkXG4gICAgICAgICAgPyB0aGlzLmlzQ29uc2VudFJlcXVpcmVkKClcbiAgICAgICAgICA6IGZhbHNlLFxuICAgICAgfSksXG4gICAgICB0ZXJtc2FuZGNvbmRpdGlvbnM6IFtmYWxzZSwgVmFsaWRhdG9ycy5yZXF1aXJlZFRydWVdLFxuICAgIH0sXG4gICAgeyB2YWxpZGF0b3I6IEN1c3RvbUZvcm1WYWxpZGF0b3JzLm1hdGNoUGFzc3dvcmQgfVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGF1dGg6IEF1dGhTZXJ2aWNlLFxuICAgIGF1dGhSZWRpcmVjdFNlcnZpY2U6IEF1dGhSZWRpcmVjdFNlcnZpY2UsXG4gICAgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBmYjogRm9ybUJ1aWxkZXIsXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVuaWZpZWQtc2lnbmF0dXJlc1xuICAgIHJvdXRlcjogUm91dGluZ1NlcnZpY2UsXG4gICAgZmVhdHVyZUNvbmZpZzogRmVhdHVyZUNvbmZpZ1NlcnZpY2UsXG4gICAgYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlOiBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsXG4gICAgYW5vbnltb3VzQ29uc2VudHNDb25maWc6IEFub255bW91c0NvbnNlbnRzQ29uZmlnXG4gICk7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIDEuMS4wXG4gICAqXG4gICAqIFVzZSBjb25zdHJ1Y3RvcihcbiAgICogcHJvdGVjdGVkIGF1dGg6IEF1dGhTZXJ2aWNlLFxuICAgKiBwcm90ZWN0ZWQgYXV0aFJlZGlyZWN0U2VydmljZTogQXV0aFJlZGlyZWN0U2VydmljZSxcbiAgICogcHJvdGVjdGVkIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICogcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICogcHJvdGVjdGVkIGZiOiBGb3JtQnVpbGRlcixcbiAgICogcHJvdGVjdGVkIHJvdXRlcj86IFJvdXRpbmdTZXJ2aWNlLFxuICAgKiBwcm90ZWN0ZWQgZmVhdHVyZUNvbmZpZz86IEZlYXR1cmVDb25maWdTZXJ2aWNlLFxuICAgKiBwcm90ZWN0ZWQgYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlPzogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLFxuICAgKiBwcm90ZWN0ZWQgYW5vbnltb3VzQ29uc2VudHNDb25maWc/OiBBbm9ueW1vdXNDb25zZW50c0NvbmZpZykgaW5zdGVhZFxuICAgKlxuICAgKiBUT0RPKGlzc3VlOjQyMzcpIFJlZ2lzdGVyIGZsb3dcbiAgICogVE9ETyhpc3N1ZTo0OTg5KSBBbm9ueW1vdXMgY29uc2VudHNcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIGF1dGg6IEF1dGhTZXJ2aWNlLFxuICAgIGF1dGhSZWRpcmVjdFNlcnZpY2U6IEF1dGhSZWRpcmVjdFNlcnZpY2UsXG4gICAgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBmYjogRm9ybUJ1aWxkZXJcbiAgKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGF1dGg6IEF1dGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhdXRoUmVkaXJlY3RTZXJ2aWNlOiBBdXRoUmVkaXJlY3RTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByb3RlY3RlZCByb3V0ZXI/OiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZmVhdHVyZUNvbmZpZz86IEZlYXR1cmVDb25maWdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhbm9ueW1vdXNDb25zZW50c1NlcnZpY2U/OiBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFub255bW91c0NvbnNlbnRzQ29uZmlnPzogQW5vbnltb3VzQ29uc2VudHNDb25maWdcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudGl0bGVzJCA9IHRoaXMudXNlclNlcnZpY2UuZ2V0VGl0bGVzKCkucGlwZShcbiAgICAgIHRhcCh0aXRsZXMgPT4ge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModGl0bGVzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvYWRUaXRsZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAodGl0bGVzID0+IHtcbiAgICAgICAgY29uc3Qgc29ydGVkVGl0bGVzID0gdGl0bGVzLnNvcnQoc29ydFRpdGxlcyk7XG4gICAgICAgIHJldHVybiBzb3J0ZWRUaXRsZXM7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBUT0RPKGlzc3VlOjQyMzcpIFJlZ2lzdGVyIGZsb3dcbiAgICBpZiAodGhpcy5pc05ld1JlZ2lzdGVyRmxvd0VuYWJsZWQpIHtcbiAgICAgIHRoaXMubG9hZGluZyQgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldFJlZ2lzdGVyVXNlclJlc3VsdExvYWRpbmcoKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJVc2VyUHJvY2Vzc0luaXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuYXV0aCAmJiB0aGlzLmF1dGhSZWRpcmVjdFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgICAgIHRoaXMudXNlclNlcnZpY2VcbiAgICAgICAgICAgIC5nZXRSZWdpc3RlclVzZXJSZXN1bHRTdWNjZXNzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHVpZCwgcGFzc3dvcmQgfSA9IHRoaXMuY29sbGVjdERhdGFGcm9tUmVnaXN0ZXJGb3JtKFxuICAgICAgICAgICAgICAgICAgdGhpcy51c2VyUmVnaXN0cmF0aW9uRm9ybS52YWx1ZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoLmF1dGhvcml6ZSh1aWQsIHBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgICAgIHRoaXMuYXV0aC5nZXRVc2VyVG9rZW4oKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmFjY2Vzc190b2tlbikge1xuICAgICAgICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLnJlbW92ZShcbiAgICAgICAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB0aGlzLmF1dGhSZWRpcmVjdFNlcnZpY2UucmVkaXJlY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRPRE86IFdvcmthcm91bmQ6IGFsbG93IHNlcnZlciBmb3IgZGVjaWRlIGlzIHRpdGxlQ29kZSBtYW5kYXRvcnkgKGlmIHllcywgcHJvdmlkZSBwZXJzb25hbGl6ZWQgbWVzc2FnZSlcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlXG4gICAgICAgIC5nZXQoKVxuICAgICAgICAucGlwZShmaWx0ZXIobWVzc2FnZXMgPT4gISFPYmplY3Qua2V5cyhtZXNzYWdlcykubGVuZ3RoKSlcbiAgICAgICAgLnN1YnNjcmliZSgoZ2xvYmFsTWVzc2FnZUVudGl0aWVzOiBHbG9iYWxNZXNzYWdlRW50aXRpZXMpID0+IHtcbiAgICAgICAgICBjb25zdCBtZXNzYWdlcyA9XG4gICAgICAgICAgICBnbG9iYWxNZXNzYWdlRW50aXRpZXMgJiZcbiAgICAgICAgICAgIGdsb2JhbE1lc3NhZ2VFbnRpdGllc1tHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUl07XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBtZXNzYWdlcyAmJlxuICAgICAgICAgICAgbWVzc2FnZXMuc29tZShtZXNzYWdlID0+IG1lc3NhZ2UgPT09ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLicpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLnJlbW92ZShHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUik7XG4gICAgICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICAgICAgeyBrZXk6ICdyZWdpc3Rlci50aXRsZVJlcXVpcmVkJyB9LFxuICAgICAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIGlmIChcbiAgICAgIHRoaXMuaXNBbm9ueW1vdXNDb25zZW50RW5hYmxlZCAmJlxuICAgICAgQm9vbGVhbih0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnKSAmJlxuICAgICAgQm9vbGVhbih0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzKSAmJlxuICAgICAgQm9vbGVhbih0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlZ2lzdGVyQ29uc2VudClcbiAgICApIHtcbiAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudCQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuZ2V0Q29uc2VudChcbiAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlZ2lzdGVyQ29uc2VudFxuICAgICAgICApLFxuICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5nZXRUZW1wbGF0ZShcbiAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlZ2lzdGVyQ29uc2VudFxuICAgICAgICApLFxuICAgICAgXSkucGlwZShcbiAgICAgICAgbWFwKChbY29uc2VudCwgdGVtcGxhdGVdOiBbQW5vbnltb3VzQ29uc2VudCwgQ29uc2VudFRlbXBsYXRlXSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb25zZW50LFxuICAgICAgICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHN1Ym1pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKFxuICAgICAgdGhpcy5jb2xsZWN0RGF0YUZyb21SZWdpc3RlckZvcm0odGhpcy51c2VyUmVnaXN0cmF0aW9uRm9ybS52YWx1ZSlcbiAgICApO1xuICB9XG5cbiAgdGl0bGVTZWxlY3RlZCh0aXRsZTogVGl0bGUpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJSZWdpc3RyYXRpb25Gb3JtWydjb250cm9scyddLnRpdGxlQ29kZS5zZXRWYWx1ZSh0aXRsZS5jb2RlKTtcbiAgfVxuXG4gIGNvbGxlY3REYXRhRnJvbVJlZ2lzdGVyRm9ybShmb3JtRGF0YTogYW55KTogVXNlclNpZ25VcCB7XG4gICAgY29uc3QgeyBmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbCwgcGFzc3dvcmQsIHRpdGxlQ29kZSB9ID0gZm9ybURhdGE7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZmlyc3ROYW1lLFxuICAgICAgbGFzdE5hbWUsXG4gICAgICB1aWQ6IGVtYWlsLnRvTG93ZXJDYXNlKCksXG4gICAgICBwYXNzd29yZCxcbiAgICAgIHRpdGxlQ29kZSxcbiAgICB9O1xuICB9XG5cbiAgaXNDb25zZW50R2l2ZW4oY29uc2VudDogQW5vbnltb3VzQ29uc2VudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5pc0NvbnNlbnRHaXZlbihjb25zZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgaXNDb25zZW50UmVxdWlyZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKFxuICAgICAgQm9vbGVhbih0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZSkgJiZcbiAgICAgIEJvb2xlYW4odGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cykgJiZcbiAgICAgIEJvb2xlYW4odGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZWdpc3RlckNvbnNlbnQpICYmXG4gICAgICBCb29sZWFuKHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50cylcbiAgICApIHtcbiAgICAgIHJldHVybiB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHMuaW5jbHVkZXMoXG4gICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVnaXN0ZXJDb25zZW50XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIG9uUmVnaXN0ZXJVc2VyU3VjY2VzcyhzdWNjZXNzOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucm91dGVyICYmIHN1Y2Nlc3MpIHtcbiAgICAgIHRoaXMucm91dGVyLmdvKCdsb2dpbicpO1xuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgIHsga2V5OiAncmVnaXN0ZXIucG9zdFJlZ2lzdGVyTWVzc2FnZScgfSxcbiAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OXG4gICAgICApO1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmlzQW5vbnltb3VzQ29uc2VudEVuYWJsZWQgJiZcbiAgICAgICAgQm9vbGVhbih0aGlzLnVzZXJSZWdpc3RyYXRpb25Gb3JtLmdldCgnbmV3c2xldHRlcicpLnZhbHVlKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmdpdmVDb25zZW50KFxuICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVnaXN0ZXJDb25zZW50XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZWdpc3RlclVzZXJQcm9jZXNzSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlc2V0UmVnaXN0ZXJVc2VyUHJvY2Vzc1N0YXRlKCk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy51c2VyU2VydmljZS5nZXRSZWdpc3RlclVzZXJSZXN1bHRTdWNjZXNzKCkuc3Vic2NyaWJlKHN1Y2Nlc3MgPT4ge1xuICAgICAgICB0aGlzLm9uUmVnaXN0ZXJVc2VyU3VjY2VzcyhzdWNjZXNzKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy51c2VyU2VydmljZS5yZXNldFJlZ2lzdGVyVXNlclByb2Nlc3NTdGF0ZSgpO1xuICB9XG59XG4iXX0=