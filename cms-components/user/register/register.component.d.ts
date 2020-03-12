import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AnonymousConsent, AnonymousConsentsConfig, AnonymousConsentsService, AuthRedirectService, AuthService, FeatureConfigService, GlobalMessageService, RoutingService, Title, UserService, UserSignUp } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class RegisterComponent implements OnInit, OnDestroy {
    protected auth: AuthService;
    protected authRedirectService: AuthRedirectService;
    protected userService: UserService;
    protected globalMessageService: GlobalMessageService;
    protected fb: FormBuilder;
    protected router?: RoutingService;
    protected featureConfig?: FeatureConfigService;
    protected anonymousConsentsService?: AnonymousConsentsService;
    protected anonymousConsentsConfig?: AnonymousConsentsConfig;
    titles$: Observable<Title[]>;
    loading$: Observable<boolean>;
    private subscription;
    anonymousConsent$: Observable<{
        consent: AnonymousConsent;
        template: string;
    }>;
    isNewRegisterFlowEnabled: boolean;
    isAnonymousConsentEnabled: boolean;
    userRegistrationForm: FormGroup;
    constructor(auth: AuthService, authRedirectService: AuthRedirectService, userService: UserService, globalMessageService: GlobalMessageService, fb: FormBuilder, router: RoutingService, featureConfig: FeatureConfigService, anonymousConsentsService: AnonymousConsentsService, anonymousConsentsConfig: AnonymousConsentsConfig);
    /**
     * @deprecated since 1.1.0
     *
     * Use constructor(
     * protected auth: AuthService,
     * protected authRedirectService: AuthRedirectService,
     * protected userService: UserService,
     * protected globalMessageService: GlobalMessageService,
     * protected fb: FormBuilder,
     * protected router?: RoutingService,
     * protected featureConfig?: FeatureConfigService,
     * protected anonymousConsentsService?: AnonymousConsentsService,
     * protected anonymousConsentsConfig?: AnonymousConsentsConfig) instead
     *
     * TODO(issue:4237) Register flow
     * TODO(issue:4989) Anonymous consents
     */
    constructor(auth: AuthService, authRedirectService: AuthRedirectService, userService: UserService, globalMessageService: GlobalMessageService, fb: FormBuilder);
    ngOnInit(): void;
    submit(): void;
    titleSelected(title: Title): void;
    collectDataFromRegisterForm(formData: any): UserSignUp;
    isConsentGiven(consent: AnonymousConsent): boolean;
    private isConsentRequired;
    private onRegisterUserSuccess;
    toggleAnonymousConsent(): void;
    private registerUserProcessInit;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RegisterComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<RegisterComponent, "cx-register", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpREEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnQsIEFub255bW91c0NvbnNlbnRzQ29uZmlnLCBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsIEF1dGhSZWRpcmVjdFNlcnZpY2UsIEF1dGhTZXJ2aWNlLCBGZWF0dXJlQ29uZmlnU2VydmljZSwgR2xvYmFsTWVzc2FnZVNlcnZpY2UsIFJvdXRpbmdTZXJ2aWNlLCBUaXRsZSwgVXNlclNlcnZpY2UsIFVzZXJTaWduVXAgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJvdGVjdGVkIGF1dGg6IEF1dGhTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBhdXRoUmVkaXJlY3RTZXJ2aWNlOiBBdXRoUmVkaXJlY3RTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCB1c2VyU2VydmljZTogVXNlclNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgZmI6IEZvcm1CdWlsZGVyO1xuICAgIHByb3RlY3RlZCByb3V0ZXI/OiBSb3V0aW5nU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgZmVhdHVyZUNvbmZpZz86IEZlYXR1cmVDb25maWdTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBhbm9ueW1vdXNDb25zZW50c1NlcnZpY2U/OiBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGFub255bW91c0NvbnNlbnRzQ29uZmlnPzogQW5vbnltb3VzQ29uc2VudHNDb25maWc7XG4gICAgdGl0bGVzJDogT2JzZXJ2YWJsZTxUaXRsZVtdPjtcbiAgICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbjtcbiAgICBhbm9ueW1vdXNDb25zZW50JDogT2JzZXJ2YWJsZTx7XG4gICAgICAgIGNvbnNlbnQ6IEFub255bW91c0NvbnNlbnQ7XG4gICAgICAgIHRlbXBsYXRlOiBzdHJpbmc7XG4gICAgfT47XG4gICAgaXNOZXdSZWdpc3RlckZsb3dFbmFibGVkOiBib29sZWFuO1xuICAgIGlzQW5vbnltb3VzQ29uc2VudEVuYWJsZWQ6IGJvb2xlYW47XG4gICAgdXNlclJlZ2lzdHJhdGlvbkZvcm06IEZvcm1Hcm91cDtcbiAgICBjb25zdHJ1Y3RvcihhdXRoOiBBdXRoU2VydmljZSwgYXV0aFJlZGlyZWN0U2VydmljZTogQXV0aFJlZGlyZWN0U2VydmljZSwgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsIGZiOiBGb3JtQnVpbGRlciwgcm91dGVyOiBSb3V0aW5nU2VydmljZSwgZmVhdHVyZUNvbmZpZzogRmVhdHVyZUNvbmZpZ1NlcnZpY2UsIGFub255bW91c0NvbnNlbnRzU2VydmljZTogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLCBhbm9ueW1vdXNDb25zZW50c0NvbmZpZzogQW5vbnltb3VzQ29uc2VudHNDb25maWcpO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIDEuMS4wXG4gICAgICpcbiAgICAgKiBVc2UgY29uc3RydWN0b3IoXG4gICAgICogcHJvdGVjdGVkIGF1dGg6IEF1dGhTZXJ2aWNlLFxuICAgICAqIHByb3RlY3RlZCBhdXRoUmVkaXJlY3RTZXJ2aWNlOiBBdXRoUmVkaXJlY3RTZXJ2aWNlLFxuICAgICAqIHByb3RlY3RlZCB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgICogcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICAgKiBwcm90ZWN0ZWQgZmI6IEZvcm1CdWlsZGVyLFxuICAgICAqIHByb3RlY3RlZCByb3V0ZXI/OiBSb3V0aW5nU2VydmljZSxcbiAgICAgKiBwcm90ZWN0ZWQgZmVhdHVyZUNvbmZpZz86IEZlYXR1cmVDb25maWdTZXJ2aWNlLFxuICAgICAqIHByb3RlY3RlZCBhbm9ueW1vdXNDb25zZW50c1NlcnZpY2U/OiBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsXG4gICAgICogcHJvdGVjdGVkIGFub255bW91c0NvbnNlbnRzQ29uZmlnPzogQW5vbnltb3VzQ29uc2VudHNDb25maWcpIGluc3RlYWRcbiAgICAgKlxuICAgICAqIFRPRE8oaXNzdWU6NDIzNykgUmVnaXN0ZXIgZmxvd1xuICAgICAqIFRPRE8oaXNzdWU6NDk4OSkgQW5vbnltb3VzIGNvbnNlbnRzXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYXV0aDogQXV0aFNlcnZpY2UsIGF1dGhSZWRpcmVjdFNlcnZpY2U6IEF1dGhSZWRpcmVjdFNlcnZpY2UsIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLCBmYjogRm9ybUJ1aWxkZXIpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgc3VibWl0KCk6IHZvaWQ7XG4gICAgdGl0bGVTZWxlY3RlZCh0aXRsZTogVGl0bGUpOiB2b2lkO1xuICAgIGNvbGxlY3REYXRhRnJvbVJlZ2lzdGVyRm9ybShmb3JtRGF0YTogYW55KTogVXNlclNpZ25VcDtcbiAgICBpc0NvbnNlbnRHaXZlbihjb25zZW50OiBBbm9ueW1vdXNDb25zZW50KTogYm9vbGVhbjtcbiAgICBwcml2YXRlIGlzQ29uc2VudFJlcXVpcmVkO1xuICAgIHByaXZhdGUgb25SZWdpc3RlclVzZXJTdWNjZXNzO1xuICAgIHRvZ2dsZUFub255bW91c0NvbnNlbnQoKTogdm9pZDtcbiAgICBwcml2YXRlIHJlZ2lzdGVyVXNlclByb2Nlc3NJbml0O1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=