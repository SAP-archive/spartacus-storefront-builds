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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ConsentManagementComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ConsentManagementComponent, "cx-consent-management", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC1tYW5hZ2VtZW50LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJjb25zZW50LW1hbmFnZW1lbnQuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOENBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzQ29uZmlnLCBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsIEF1dGhTZXJ2aWNlLCBDb25zZW50VGVtcGxhdGUsIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLCBVc2VyQ29uc2VudFNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ29uc2VudE1hbmFnZW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSB1c2VyQ29uc2VudFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBnbG9iYWxNZXNzYWdlU2VydmljZTtcbiAgICBwcml2YXRlIGFub255bW91c0NvbnNlbnRzQ29uZmlnPztcbiAgICBwcml2YXRlIGFub255bW91c0NvbnNlbnRzU2VydmljZT87XG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZT87XG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zO1xuICAgIHByaXZhdGUgYWxsQ29uc2VudHNMb2FkaW5nO1xuICAgIHRlbXBsYXRlTGlzdCQ6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlW10+O1xuICAgIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIHJlcXVpcmVkQ29uc2VudHM6IHN0cmluZ1tdO1xuICAgIGlzQW5vbnltb3VzQ29uc2VudHNFbmFibGVkOiBib29sZWFuO1xuICAgIGlzTGV2ZWwxMzogYm9vbGVhbjtcbiAgICBjb25zdHJ1Y3Rvcih1c2VyQ29uc2VudFNlcnZpY2U6IFVzZXJDb25zZW50U2VydmljZSwgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLCBhbm9ueW1vdXNDb25zZW50c0NvbmZpZzogQW5vbnltb3VzQ29uc2VudHNDb25maWcsIGFub255bW91c0NvbnNlbnRzU2VydmljZTogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAgICogSW5zdGVhZCwgdXNlOlxuICAgICBgYGB0c1xuICAgICBjb25zdHJ1Y3RvcihcbiAgICAgICB1c2VyQ29uc2VudFNlcnZpY2U6IFVzZXJDb25zZW50U2VydmljZSxcbiAgICAgICBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgYW5vbnltb3VzQ29uc2VudHNDb25maWcgOiBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyxcbiAgICAgICBhbm9ueW1vdXNDb25zZW50c1NlcnZpY2UgOiBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsXG4gICAgICAgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICApXG4gICAgIGBgYFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHVzZXJDb25zZW50U2VydmljZTogVXNlckNvbnNlbnRTZXJ2aWNlLCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBjb25zZW50TGlzdEluaXQ7XG4gICAgcHJpdmF0ZSBoaWRlQW5vbnltb3VzQ29uc2VudHM7XG4gICAgcHJpdmF0ZSBnaXZlQ29uc2VudEluaXQ7XG4gICAgcHJpdmF0ZSB3aXRoZHJhd0NvbnNlbnRJbml0O1xuICAgIHByaXZhdGUgY29uc2VudHNFeGlzdHM7XG4gICAgb25Db25zZW50Q2hhbmdlKHsgZ2l2ZW4sIHRlbXBsYXRlLCB9OiB7XG4gICAgICAgIGdpdmVuOiBib29sZWFuO1xuICAgICAgICB0ZW1wbGF0ZTogQ29uc2VudFRlbXBsYXRlO1xuICAgIH0pOiB2b2lkO1xuICAgIHByaXZhdGUgb25Db25zZW50R2l2ZW5TdWNjZXNzO1xuICAgIHByaXZhdGUgb25Db25zZW50V2l0aGRyYXduU3VjY2VzcztcbiAgICByZWplY3RBbGwodGVtcGxhdGVzPzogQ29uc2VudFRlbXBsYXRlW10pOiB2b2lkO1xuICAgIHByaXZhdGUgc2V0dXBXaXRoZHJhd2FsU3RyZWFtO1xuICAgIGFsbG93QWxsKHRlbXBsYXRlcz86IENvbnNlbnRUZW1wbGF0ZVtdKTogdm9pZDtcbiAgICBwcml2YXRlIHNldHVwR2l2ZVN0cmVhbTtcbiAgICBwcml2YXRlIGlzUmVxdWlyZWRDb25zZW50O1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=