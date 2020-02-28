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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC1tYW5hZ2VtZW50LWZvcm0uY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNvbnNlbnQtbWFuYWdlbWVudC1mb3JtLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50LCBDb25zZW50VGVtcGxhdGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ29uc2VudE1hbmFnZW1lbnRGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBjb25zZW50R2l2ZW46IGJvb2xlYW47XG4gICAgY29uc2VudFRlbXBsYXRlOiBDb25zZW50VGVtcGxhdGU7XG4gICAgcmVxdWlyZWRDb25zZW50czogc3RyaW5nW107XG4gICAgaXNBbm9ueW1vdXNDb25zZW50c0VuYWJsZWQ6IGJvb2xlYW47XG4gICAgY29uc2VudDogQW5vbnltb3VzQ29uc2VudDtcbiAgICBpc0xldmVsMTM6IGJvb2xlYW47XG4gICAgY29uc2VudENoYW5nZWQ6IEV2ZW50RW1pdHRlcjx7XG4gICAgICAgIGdpdmVuOiBib29sZWFuO1xuICAgICAgICB0ZW1wbGF0ZTogQ29uc2VudFRlbXBsYXRlO1xuICAgIH0+O1xuICAgIGNvbnN0cnVjdG9yKCk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBvbkNvbnNlbnRDaGFuZ2UoKTogdm9pZDtcbiAgICBpc1JlcXVpcmVkKHRlbXBsYXRlSWQ6IHN0cmluZyk6IGJvb2xlYW47XG59XG4iXX0=