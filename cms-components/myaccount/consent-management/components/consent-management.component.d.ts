import { OnDestroy, OnInit } from '@angular/core';
import { ConsentTemplate, GlobalMessageService, RoutingService, UserConsentService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class ConsentManagementComponent implements OnInit, OnDestroy {
    private userConsentService;
    private routingService;
    private globalMessageService;
    private subscriptions;
    templateList$: Observable<ConsentTemplate[]>;
    loading$: Observable<boolean>;
    constructor(userConsentService: UserConsentService, routingService: RoutingService, globalMessageService: GlobalMessageService);
    ngOnInit(): void;
    private consentListInit;
    private giveConsentInit;
    private withdrawConsentInit;
    private consentsExists;
    onConsentChange({ given, template, }: {
        given: boolean;
        template: ConsentTemplate;
    }): void;
    onDone(): void;
    private onConsentGivenSuccess;
    private onConsentWithdrawnSuccess;
    ngOnDestroy(): void;
}
