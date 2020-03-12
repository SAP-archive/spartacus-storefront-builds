import { EventEmitter, OnInit } from '@angular/core';
import { AnonymousConsent, ConsentTemplate } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
export declare class ConsentManagementFormComponent implements OnInit {
    consentGiven: boolean;
    consentTemplate: ConsentTemplate;
    requiredConsents: string[];
    isAnonymousConsentsEnabled: boolean;
    consent: AnonymousConsent;
    isLevel13: boolean;
    consentChanged: EventEmitter<{
        given: boolean;
        template: ConsentTemplate;
    }>;
    constructor();
    ngOnInit(): void;
    onConsentChange(): void;
    isRequired(templateId: string): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ConsentManagementFormComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ConsentManagementFormComponent, "cx-consent-management-form", never, {
    "requiredConsents": "requiredConsents";
    "isAnonymousConsentsEnabled": "isAnonymousConsentsEnabled";
    "isLevel13": "isLevel13";
    "consentTemplate": "consentTemplate";
    "consent": "consent";
}, {
    "consentChanged": "consentChanged";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC1tYW5hZ2VtZW50LWZvcm0uY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNvbnNlbnQtbWFuYWdlbWVudC1mb3JtLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnQsIENvbnNlbnRUZW1wbGF0ZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDb25zZW50TWFuYWdlbWVudEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGNvbnNlbnRHaXZlbjogYm9vbGVhbjtcbiAgICBjb25zZW50VGVtcGxhdGU6IENvbnNlbnRUZW1wbGF0ZTtcbiAgICByZXF1aXJlZENvbnNlbnRzOiBzdHJpbmdbXTtcbiAgICBpc0Fub255bW91c0NvbnNlbnRzRW5hYmxlZDogYm9vbGVhbjtcbiAgICBjb25zZW50OiBBbm9ueW1vdXNDb25zZW50O1xuICAgIGlzTGV2ZWwxMzogYm9vbGVhbjtcbiAgICBjb25zZW50Q2hhbmdlZDogRXZlbnRFbWl0dGVyPHtcbiAgICAgICAgZ2l2ZW46IGJvb2xlYW47XG4gICAgICAgIHRlbXBsYXRlOiBDb25zZW50VGVtcGxhdGU7XG4gICAgfT47XG4gICAgY29uc3RydWN0b3IoKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG9uQ29uc2VudENoYW5nZSgpOiB2b2lkO1xuICAgIGlzUmVxdWlyZWQodGVtcGxhdGVJZDogc3RyaW5nKTogYm9vbGVhbjtcbn1cbiJdfQ==