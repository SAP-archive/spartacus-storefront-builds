import { OnDestroy, OnInit } from '@angular/core';
import { AnonymousConsentsConfig, AnonymousConsentsService, AuthService, ConsentTemplate, GlobalMessageService, UserConsentService } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class ConsentManagementComponent implements OnInit, OnDestroy {
    private userConsentService;
    private globalMessageService;
    private anonymousConsentsConfig?;
    private anonymousConsentsService?;
    private authService?;
    private subscriptions;
    private allConsentsLoading;
    templateList$: Observable<ConsentTemplate[]>;
    loading$: Observable<boolean>;
    requiredConsents: string[];
    isAnonymousConsentsEnabled: boolean;
    isLevel13: boolean;
    constructor(userConsentService: UserConsentService, globalMessageService: GlobalMessageService, anonymousConsentsConfig: AnonymousConsentsConfig, anonymousConsentsService: AnonymousConsentsService, authService: AuthService);
    /**
     * @deprecated since version 1.3
     * Instead, use:
     ```ts
     constructor(
       userConsentService: UserConsentService,
       globalMessageService: GlobalMessageService,
       anonymousConsentsConfig : AnonymousConsentsConfig,
       anonymousConsentsService : AnonymousConsentsService,
       authService: AuthService,
     )
     ```
     */
    constructor(userConsentService: UserConsentService, globalMessageService: GlobalMessageService);
    ngOnInit(): void;
    private consentListInit;
    private hideAnonymousConsents;
    private giveConsentInit;
    private withdrawConsentInit;
    private consentsExists;
    onConsentChange({ given, template, }: {
        given: boolean;
        template: ConsentTemplate;
    }): void;
    private onConsentGivenSuccess;
    private onConsentWithdrawnSuccess;
    rejectAll(templates?: ConsentTemplate[]): void;
    private setupWithdrawalStream;
    allowAll(templates?: ConsentTemplate[]): void;
    private setupGiveStream;
    private isRequiredConsent;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ConsentManagementComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ConsentManagementComponent, "cx-consent-management", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC1tYW5hZ2VtZW50LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJjb25zZW50LW1hbmFnZW1lbnQuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOENBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c0NvbmZpZywgQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLCBBdXRoU2VydmljZSwgQ29uc2VudFRlbXBsYXRlLCBHbG9iYWxNZXNzYWdlU2VydmljZSwgVXNlckNvbnNlbnRTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENvbnNlbnRNYW5hZ2VtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgdXNlckNvbnNlbnRTZXJ2aWNlO1xuICAgIHByaXZhdGUgZ2xvYmFsTWVzc2FnZVNlcnZpY2U7XG4gICAgcHJpdmF0ZSBhbm9ueW1vdXNDb25zZW50c0NvbmZpZz87XG4gICAgcHJpdmF0ZSBhbm9ueW1vdXNDb25zZW50c1NlcnZpY2U/O1xuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U/O1xuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9ucztcbiAgICBwcml2YXRlIGFsbENvbnNlbnRzTG9hZGluZztcbiAgICB0ZW1wbGF0ZUxpc3QkOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZVtdPjtcbiAgICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICByZXF1aXJlZENvbnNlbnRzOiBzdHJpbmdbXTtcbiAgICBpc0Fub255bW91c0NvbnNlbnRzRW5hYmxlZDogYm9vbGVhbjtcbiAgICBpc0xldmVsMTM6IGJvb2xlYW47XG4gICAgY29uc3RydWN0b3IodXNlckNvbnNlbnRTZXJ2aWNlOiBVc2VyQ29uc2VudFNlcnZpY2UsIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSwgYW5vbnltb3VzQ29uc2VudHNDb25maWc6IEFub255bW91c0NvbnNlbnRzQ29uZmlnLCBhbm9ueW1vdXNDb25zZW50c1NlcnZpY2U6IEFub255bW91c0NvbnNlbnRzU2VydmljZSwgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgICAqIEluc3RlYWQsIHVzZTpcbiAgICAgYGBgdHNcbiAgICAgY29uc3RydWN0b3IoXG4gICAgICAgdXNlckNvbnNlbnRTZXJ2aWNlOiBVc2VyQ29uc2VudFNlcnZpY2UsXG4gICAgICAgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgIGFub255bW91c0NvbnNlbnRzQ29uZmlnIDogQW5vbnltb3VzQ29uc2VudHNDb25maWcsXG4gICAgICAgYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlIDogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLFxuICAgICAgIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgKVxuICAgICBgYGBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih1c2VyQ29uc2VudFNlcnZpY2U6IFVzZXJDb25zZW50U2VydmljZSwgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIHByaXZhdGUgY29uc2VudExpc3RJbml0O1xuICAgIHByaXZhdGUgaGlkZUFub255bW91c0NvbnNlbnRzO1xuICAgIHByaXZhdGUgZ2l2ZUNvbnNlbnRJbml0O1xuICAgIHByaXZhdGUgd2l0aGRyYXdDb25zZW50SW5pdDtcbiAgICBwcml2YXRlIGNvbnNlbnRzRXhpc3RzO1xuICAgIG9uQ29uc2VudENoYW5nZSh7IGdpdmVuLCB0ZW1wbGF0ZSwgfToge1xuICAgICAgICBnaXZlbjogYm9vbGVhbjtcbiAgICAgICAgdGVtcGxhdGU6IENvbnNlbnRUZW1wbGF0ZTtcbiAgICB9KTogdm9pZDtcbiAgICBwcml2YXRlIG9uQ29uc2VudEdpdmVuU3VjY2VzcztcbiAgICBwcml2YXRlIG9uQ29uc2VudFdpdGhkcmF3blN1Y2Nlc3M7XG4gICAgcmVqZWN0QWxsKHRlbXBsYXRlcz86IENvbnNlbnRUZW1wbGF0ZVtdKTogdm9pZDtcbiAgICBwcml2YXRlIHNldHVwV2l0aGRyYXdhbFN0cmVhbTtcbiAgICBhbGxvd0FsbCh0ZW1wbGF0ZXM/OiBDb25zZW50VGVtcGxhdGVbXSk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBzZXR1cEdpdmVTdHJlYW07XG4gICAgcHJpdmF0ZSBpc1JlcXVpcmVkQ29uc2VudDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19