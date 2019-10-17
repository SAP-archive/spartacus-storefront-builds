import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { AnonymousConsent, ConsentTemplate } from '@spartacus/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICON_TYPE } from '../../../../../cms-components/misc/icon/icon.model';
export declare class AnonymousConsentFormComponent implements OnInit, OnDestroy {
    iconTypes: typeof ICON_TYPE;
    consentGiven$: BehaviorSubject<boolean>;
    consentGivenTranslation$: Observable<string>;
    accordionExpanded: boolean;
    accordionHeight: string;
    accordionContent: ElementRef<HTMLDivElement>;
    template: ConsentTemplate;
    consent: AnonymousConsent;
    requiredConsents: string[];
    consentChanged: EventEmitter<{
        given: boolean;
        template: ConsentTemplate;
    }>;
    constructor();
    ngOnInit(): void;
    onConsentChange(): void;
    toggleAccordion(keyEvent?: KeyboardEvent): void;
    isRequired(templateId: string): boolean;
    ngOnDestroy(): void;
}
