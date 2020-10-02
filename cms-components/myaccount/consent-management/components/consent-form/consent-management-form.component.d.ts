import { EventEmitter, OnInit } from '@angular/core';
import { AnonymousConsent, ConsentTemplate } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
export declare class ConsentManagementFormComponent implements OnInit {
    consentGiven: boolean;
    consentTemplate: ConsentTemplate;
    requiredConsents: string[];
    consent: AnonymousConsent;
    consentChanged: EventEmitter<{
        given: boolean;
        template: ConsentTemplate;
    }>;
    constructor();
    ngOnInit(): void;
    onConsentChange(): void;
    isRequired(templateId: string): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ConsentManagementFormComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ConsentManagementFormComponent, "cx-consent-management-form", never, { "requiredConsents": "requiredConsents"; "consentTemplate": "consentTemplate"; "consent": "consent"; }, { "consentChanged": "consentChanged"; }, never, never>;
}

//# sourceMappingURL=consent-management-form.component.d.ts.map