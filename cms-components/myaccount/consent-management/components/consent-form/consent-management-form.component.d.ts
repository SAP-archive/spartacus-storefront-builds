import { EventEmitter, OnInit } from '@angular/core';
import { ConsentTemplate } from '@spartacus/core';
export declare class ConsentManagementFormComponent implements OnInit {
    consentTemplate: ConsentTemplate;
    consentChanged: EventEmitter<{
        given: boolean;
        template: ConsentTemplate;
    }>;
    consentGiven: boolean;
    constructor();
    ngOnInit(): void;
    onConsentChange(): void;
}
