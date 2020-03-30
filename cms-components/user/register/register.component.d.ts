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
    userRegistrationForm: FormGroup;
    constructor(userService: UserService, globalMessageService: GlobalMessageService, fb: FormBuilder, router: RoutingService, anonymousConsentsService: AnonymousConsentsService, anonymousConsentsConfig: AnonymousConsentsConfig);
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RegisterComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<RegisterComponent, "cx-register", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50LCBBbm9ueW1vdXNDb25zZW50c0NvbmZpZywgQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLCBHbG9iYWxNZXNzYWdlU2VydmljZSwgUm91dGluZ1NlcnZpY2UsIFRpdGxlLCBVc2VyU2VydmljZSwgVXNlclNpZ25VcCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcm90ZWN0ZWQgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGZiOiBGb3JtQnVpbGRlcjtcbiAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0aW5nU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlOiBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGFub255bW91c0NvbnNlbnRzQ29uZmlnOiBBbm9ueW1vdXNDb25zZW50c0NvbmZpZztcbiAgICB0aXRsZXMkOiBPYnNlcnZhYmxlPFRpdGxlW10+O1xuICAgIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uO1xuICAgIGFub255bW91c0NvbnNlbnQkOiBPYnNlcnZhYmxlPHtcbiAgICAgICAgY29uc2VudDogQW5vbnltb3VzQ29uc2VudDtcbiAgICAgICAgdGVtcGxhdGU6IHN0cmluZztcbiAgICB9PjtcbiAgICB1c2VyUmVnaXN0cmF0aW9uRm9ybTogRm9ybUdyb3VwO1xuICAgIGNvbnN0cnVjdG9yKHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLCBmYjogRm9ybUJ1aWxkZXIsIHJvdXRlcjogUm91dGluZ1NlcnZpY2UsIGFub255bW91c0NvbnNlbnRzU2VydmljZTogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLCBhbm9ueW1vdXNDb25zZW50c0NvbmZpZzogQW5vbnltb3VzQ29uc2VudHNDb25maWcpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgc3VibWl0KCk6IHZvaWQ7XG4gICAgdGl0bGVTZWxlY3RlZCh0aXRsZTogVGl0bGUpOiB2b2lkO1xuICAgIGNvbGxlY3REYXRhRnJvbVJlZ2lzdGVyRm9ybShmb3JtRGF0YTogYW55KTogVXNlclNpZ25VcDtcbiAgICBpc0NvbnNlbnRHaXZlbihjb25zZW50OiBBbm9ueW1vdXNDb25zZW50KTogYm9vbGVhbjtcbiAgICBwcml2YXRlIGlzQ29uc2VudFJlcXVpcmVkO1xuICAgIHByaXZhdGUgb25SZWdpc3RlclVzZXJTdWNjZXNzO1xuICAgIHRvZ2dsZUFub255bW91c0NvbnNlbnQoKTogdm9pZDtcbiAgICBwcml2YXRlIHJlZ2lzdGVyVXNlclByb2Nlc3NJbml0O1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=