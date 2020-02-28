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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpREE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50LCBBbm9ueW1vdXNDb25zZW50c0NvbmZpZywgQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLCBBdXRoUmVkaXJlY3RTZXJ2aWNlLCBBdXRoU2VydmljZSwgRmVhdHVyZUNvbmZpZ1NlcnZpY2UsIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLCBSb3V0aW5nU2VydmljZSwgVGl0bGUsIFVzZXJTZXJ2aWNlLCBVc2VyU2lnblVwIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByb3RlY3RlZCBhdXRoOiBBdXRoU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgYXV0aFJlZGlyZWN0U2VydmljZTogQXV0aFJlZGlyZWN0U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGZiOiBGb3JtQnVpbGRlcjtcbiAgICBwcm90ZWN0ZWQgcm91dGVyPzogUm91dGluZ1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGZlYXR1cmVDb25maWc/OiBGZWF0dXJlQ29uZmlnU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlPzogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBhbm9ueW1vdXNDb25zZW50c0NvbmZpZz86IEFub255bW91c0NvbnNlbnRzQ29uZmlnO1xuICAgIHRpdGxlcyQ6IE9ic2VydmFibGU8VGl0bGVbXT47XG4gICAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb247XG4gICAgYW5vbnltb3VzQ29uc2VudCQ6IE9ic2VydmFibGU8e1xuICAgICAgICBjb25zZW50OiBBbm9ueW1vdXNDb25zZW50O1xuICAgICAgICB0ZW1wbGF0ZTogc3RyaW5nO1xuICAgIH0+O1xuICAgIGlzTmV3UmVnaXN0ZXJGbG93RW5hYmxlZDogYm9vbGVhbjtcbiAgICBpc0Fub255bW91c0NvbnNlbnRFbmFibGVkOiBib29sZWFuO1xuICAgIHVzZXJSZWdpc3RyYXRpb25Gb3JtOiBGb3JtR3JvdXA7XG4gICAgY29uc3RydWN0b3IoYXV0aDogQXV0aFNlcnZpY2UsIGF1dGhSZWRpcmVjdFNlcnZpY2U6IEF1dGhSZWRpcmVjdFNlcnZpY2UsIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLCBmYjogRm9ybUJ1aWxkZXIsIHJvdXRlcjogUm91dGluZ1NlcnZpY2UsIGZlYXR1cmVDb25maWc6IEZlYXR1cmVDb25maWdTZXJ2aWNlLCBhbm9ueW1vdXNDb25zZW50c1NlcnZpY2U6IEFub255bW91c0NvbnNlbnRzU2VydmljZSwgYW5vbnltb3VzQ29uc2VudHNDb25maWc6IEFub255bW91c0NvbnNlbnRzQ29uZmlnKTtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSAxLjEuMFxuICAgICAqXG4gICAgICogVXNlIGNvbnN0cnVjdG9yKFxuICAgICAqIHByb3RlY3RlZCBhdXRoOiBBdXRoU2VydmljZSxcbiAgICAgKiBwcm90ZWN0ZWQgYXV0aFJlZGlyZWN0U2VydmljZTogQXV0aFJlZGlyZWN0U2VydmljZSxcbiAgICAgKiBwcm90ZWN0ZWQgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgICAqIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgICogcHJvdGVjdGVkIGZiOiBGb3JtQnVpbGRlcixcbiAgICAgKiBwcm90ZWN0ZWQgcm91dGVyPzogUm91dGluZ1NlcnZpY2UsXG4gICAgICogcHJvdGVjdGVkIGZlYXR1cmVDb25maWc/OiBGZWF0dXJlQ29uZmlnU2VydmljZSxcbiAgICAgKiBwcm90ZWN0ZWQgYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlPzogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLFxuICAgICAqIHByb3RlY3RlZCBhbm9ueW1vdXNDb25zZW50c0NvbmZpZz86IEFub255bW91c0NvbnNlbnRzQ29uZmlnKSBpbnN0ZWFkXG4gICAgICpcbiAgICAgKiBUT0RPKGlzc3VlOjQyMzcpIFJlZ2lzdGVyIGZsb3dcbiAgICAgKiBUT0RPKGlzc3VlOjQ5ODkpIEFub255bW91cyBjb25zZW50c1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGF1dGg6IEF1dGhTZXJ2aWNlLCBhdXRoUmVkaXJlY3RTZXJ2aWNlOiBBdXRoUmVkaXJlY3RTZXJ2aWNlLCB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSwgZmI6IEZvcm1CdWlsZGVyKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIHN1Ym1pdCgpOiB2b2lkO1xuICAgIHRpdGxlU2VsZWN0ZWQodGl0bGU6IFRpdGxlKTogdm9pZDtcbiAgICBjb2xsZWN0RGF0YUZyb21SZWdpc3RlckZvcm0oZm9ybURhdGE6IGFueSk6IFVzZXJTaWduVXA7XG4gICAgaXNDb25zZW50R2l2ZW4oY29uc2VudDogQW5vbnltb3VzQ29uc2VudCk6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBpc0NvbnNlbnRSZXF1aXJlZDtcbiAgICBwcml2YXRlIG9uUmVnaXN0ZXJVc2VyU3VjY2VzcztcbiAgICB0b2dnbGVBbm9ueW1vdXNDb25zZW50KCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSByZWdpc3RlclVzZXJQcm9jZXNzSW5pdDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19