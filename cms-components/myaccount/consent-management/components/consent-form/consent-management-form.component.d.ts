import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { ConsentTemplate } from '@spartacus/core';
import { BehaviorSubject } from 'rxjs';
import { ICON_TYPE } from '../../../../../cms-components/misc/icon/icon.model';
export declare class ConsentManagementFormComponent implements OnInit {
    iconTypes: typeof ICON_TYPE;
    consentGivenTranslation$: BehaviorSubject<string>;
    accordionExpanded: boolean;
    accordionHeight: string;
    consentGiven: boolean;
    accordionContent: ElementRef<HTMLDivElement>;
    consentTemplate: ConsentTemplate;
    requiredConsents: string[];
    isAnonymousConsentsEnabled: boolean;
    consentChanged: EventEmitter<{
        given: boolean;
        template: ConsentTemplate;
    }>;
    constructor();
    ngOnInit(): void;
    onConsentChange(): void;
    toggleAccordion(keyEvent?: KeyboardEvent): void;
    isRequired(templateId: string): boolean;
}
