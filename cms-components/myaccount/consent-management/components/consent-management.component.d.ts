import { OnDestroy, OnInit } from '@angular/core';
import { ConsentTemplate, GlobalMessageService, UserConsentService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class ConsentManagementComponent implements OnInit, OnDestroy {
    private userConsentService;
    private globalMessageService;
    private subscriptions;
    templateList$: Observable<ConsentTemplate[]>;
    loading$: Observable<boolean>;
    constructor(userConsentService: UserConsentService, globalMessageService: GlobalMessageService);
    ngOnInit(): void;
    private consentListInit;
    private giveConsentInit;
    private withdrawConsentInit;
    private consentsExists;
    onConsentChange({ given, template, }: {
        given: boolean;
        template: ConsentTemplate;
    }): void;
    private onConsentGivenSuccess;
    private onConsentWithdrawnSuccess;
    ngOnDestroy(): void;
}
