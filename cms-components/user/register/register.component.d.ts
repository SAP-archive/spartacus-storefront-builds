import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AnonymousConsent, AnonymousConsentsConfig, AnonymousConsentsService, GlobalMessageService, RoutingService, Title, UserService, UserSignUp } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class RegisterComponent implements OnInit, OnDestroy {
    protected userService: UserService;
    protected globalMessageService: GlobalMessageService;
    protected fb: FormBuilder;
    protected router: RoutingService;
    protected anonymousConsentsService: AnonymousConsentsService;
    protected anonymousConsentsConfig: AnonymousConsentsConfig;
    titles$: Observable<Title[]>;
    loading$: Observable<boolean>;
    private subscription;
    anonymousConsent$: Observable<{
        consent: AnonymousConsent;
        template: string;
    }>;
    registerForm: FormGroup;
    constructor(userService: UserService, globalMessageService: GlobalMessageService, fb: FormBuilder, router: RoutingService, anonymousConsentsService: AnonymousConsentsService, anonymousConsentsConfig: AnonymousConsentsConfig);
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RegisterComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<RegisterComponent, "cx-register", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudCwgQW5vbnltb3VzQ29uc2VudHNDb25maWcsIEFub255bW91c0NvbnNlbnRzU2VydmljZSwgR2xvYmFsTWVzc2FnZVNlcnZpY2UsIFJvdXRpbmdTZXJ2aWNlLCBUaXRsZSwgVXNlclNlcnZpY2UsIFVzZXJTaWduVXAgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJvdGVjdGVkIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBmYjogRm9ybUJ1aWxkZXI7XG4gICAgcHJvdGVjdGVkIHJvdXRlcjogUm91dGluZ1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGFub255bW91c0NvbnNlbnRzU2VydmljZTogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBhbm9ueW1vdXNDb25zZW50c0NvbmZpZzogQW5vbnltb3VzQ29uc2VudHNDb25maWc7XG4gICAgdGl0bGVzJDogT2JzZXJ2YWJsZTxUaXRsZVtdPjtcbiAgICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbjtcbiAgICBhbm9ueW1vdXNDb25zZW50JDogT2JzZXJ2YWJsZTx7XG4gICAgICAgIGNvbnNlbnQ6IEFub255bW91c0NvbnNlbnQ7XG4gICAgICAgIHRlbXBsYXRlOiBzdHJpbmc7XG4gICAgfT47XG4gICAgcmVnaXN0ZXJGb3JtOiBGb3JtR3JvdXA7XG4gICAgY29uc3RydWN0b3IodXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsIGZiOiBGb3JtQnVpbGRlciwgcm91dGVyOiBSb3V0aW5nU2VydmljZSwgYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlOiBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsIGFub255bW91c0NvbnNlbnRzQ29uZmlnOiBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBzdWJtaXRGb3JtKCk6IHZvaWQ7XG4gICAgcmVnaXN0ZXJVc2VyKCk6IHZvaWQ7XG4gICAgdGl0bGVTZWxlY3RlZCh0aXRsZTogVGl0bGUpOiB2b2lkO1xuICAgIGNvbGxlY3REYXRhRnJvbVJlZ2lzdGVyRm9ybShmb3JtRGF0YTogYW55KTogVXNlclNpZ25VcDtcbiAgICBpc0NvbnNlbnRHaXZlbihjb25zZW50OiBBbm9ueW1vdXNDb25zZW50KTogYm9vbGVhbjtcbiAgICBwcml2YXRlIGlzQ29uc2VudFJlcXVpcmVkO1xuICAgIHByaXZhdGUgb25SZWdpc3RlclVzZXJTdWNjZXNzO1xuICAgIHRvZ2dsZUFub255bW91c0NvbnNlbnQoKTogdm9pZDtcbiAgICBwcml2YXRlIHJlZ2lzdGVyVXNlclByb2Nlc3NJbml0O1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=