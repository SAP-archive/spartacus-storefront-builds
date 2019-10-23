import { EventEmitter, OnInit } from '@angular/core';
import { AnonymousConsent, ConsentTemplate } from '@spartacus/core';
export declare class ConsentManagementFormComponent implements OnInit {
    consentGiven: boolean;
    consentTemplate: ConsentTemplate;
    requiredConsents: string[];
    isAnonymousConsentsEnabled: boolean;
    consent: AnonymousConsent;
    consentChanged: EventEmitter<{
        given: boolean;
        template: ConsentTemplate;
    }>;
    constructor();
    ngOnInit(): void;
    onConsentChange(): void;
    isRequired(templateId: string): boolean;
}
