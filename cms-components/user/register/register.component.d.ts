import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GlobalMessageService, RoutingService, Title, UserService, UserSignUp, FeatureConfigService, AuthService, AuthRedirectService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class RegisterComponent implements OnInit, OnDestroy {
    protected auth: AuthService;
    protected authRedirectService: AuthRedirectService;
    protected userService: UserService;
    protected globalMessageService: GlobalMessageService;
    protected fb: FormBuilder;
    protected router?: RoutingService;
    protected featureConfig?: FeatureConfigService;
    titles$: Observable<Title[]>;
    loading$: Observable<boolean>;
    private subscription;
    userRegistrationForm: FormGroup;
    /**
     * @deprecated since 1.1.0
     *
     * TODO(issue:4237) Register flow
     */
    constructor(auth: AuthService, authRedirectService: AuthRedirectService, userService: UserService, globalMessageService: GlobalMessageService, fb: FormBuilder, router?: RoutingService, featureConfig?: FeatureConfigService);
    isNewRegisterFlowEnabled: boolean;
    ngOnInit(): void;
    submit(): void;
    titleSelected(title: Title): void;
    collectDataFromRegisterForm(formData: any): UserSignUp;
    private onRegisterUserSuccess;
    private registerUserProcessInit;
    private matchPassword;
    ngOnDestroy(): void;
}
