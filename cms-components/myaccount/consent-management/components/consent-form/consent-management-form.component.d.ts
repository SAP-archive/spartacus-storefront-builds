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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC1tYW5hZ2VtZW50LWZvcm0uY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNvbnNlbnQtbWFuYWdlbWVudC1mb3JtLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FBYUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudCwgQ29uc2VudFRlbXBsYXRlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENvbnNlbnRNYW5hZ2VtZW50Rm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY29uc2VudEdpdmVuOiBib29sZWFuO1xuICAgIGNvbnNlbnRUZW1wbGF0ZTogQ29uc2VudFRlbXBsYXRlO1xuICAgIHJlcXVpcmVkQ29uc2VudHM6IHN0cmluZ1tdO1xuICAgIGNvbnNlbnQ6IEFub255bW91c0NvbnNlbnQ7XG4gICAgY29uc2VudENoYW5nZWQ6IEV2ZW50RW1pdHRlcjx7XG4gICAgICAgIGdpdmVuOiBib29sZWFuO1xuICAgICAgICB0ZW1wbGF0ZTogQ29uc2VudFRlbXBsYXRlO1xuICAgIH0+O1xuICAgIGNvbnN0cnVjdG9yKCk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBvbkNvbnNlbnRDaGFuZ2UoKTogdm9pZDtcbiAgICBpc1JlcXVpcmVkKHRlbXBsYXRlSWQ6IHN0cmluZyk6IGJvb2xlYW47XG59XG4iXX0=