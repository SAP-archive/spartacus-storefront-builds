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

//# sourceMappingURL=consent-management.component.d.ts.map