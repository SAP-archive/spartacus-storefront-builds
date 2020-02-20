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

//# sourceMappingURL=register.component.d.ts.map