import { OnDestroy, OnInit } from '@angular/core';
import { ConsentTemplate, ConsentTemplateList, GlobalMessageService, RoutingService, UserService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class ConsentManagementComponent implements OnInit, OnDestroy {
    private userService;
    private routingService;
    private globalMessageService;
    private subscriptions;
    templateList$: Observable<ConsentTemplateList>;
    loading$: Observable<boolean>;
    constructor(userService: UserService, routingService: RoutingService, globalMessageService: GlobalMessageService);
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
