import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AnonymousConsent, AnonymousConsentsConfig, AnonymousConsentsService, AuthConfigService, GlobalMessageService, RoutingService, Title, UserService, UserSignUp } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class RegisterComponent implements OnInit, OnDestroy {
    protected userService: UserService;
    protected globalMessageService: GlobalMessageService;
    protected fb: FormBuilder;
    protected router: RoutingService;
    protected anonymousConsentsService: AnonymousConsentsService;
    protected anonymousConsentsConfig: AnonymousConsentsConfig;
    protected authConfigService: AuthConfigService;
    titles$: Observable<Title[]>;
    loading$: Observable<boolean>;
    private subscription;
    anonymousConsent$: Observable<{
        consent: AnonymousConsent;
        template: string;
    }>;
    registerForm: FormGroup;
    constructor(userService: UserService, globalMessageService: GlobalMessageService, fb: FormBuilder, router: RoutingService, anonymousConsentsService: AnonymousConsentsService, anonymousConsentsConfig: AnonymousConsentsConfig, authConfigService: AuthConfigService);
    ngOnInit(): void;
    submitForm(): void;
    registerUser(): void;
    titleSelected(title: Title): void;
    collectDataFromRegisterForm(formData: any): UserSignUp;
    isConsentGiven(consent: AnonymousConsent): boolean;
    private isConsentRequired;
    private onRegisterUserSuccess;
    toggleAnonymousConsent(): void;
    private registerUserProcessInit;
    ngOnDestroy(): void;
}
