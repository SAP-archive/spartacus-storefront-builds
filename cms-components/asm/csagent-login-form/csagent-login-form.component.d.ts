import { EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class CSAgentLoginFormComponent implements OnInit {
    private fb;
    form: FormGroup;
    private submitClicked;
    csAgentTokenLoading: boolean;
    submitEvent: EventEmitter<{
        userId: string;
        password: string;
    }>;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    onSubmit(): void;
    isNotValid(formControlName: string): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CSAgentLoginFormComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CSAgentLoginFormComponent, "cx-csagent-login-form", never, {
    "csAgentTokenLoading": "csAgentTokenLoading";
}, {
    "submitEvent": "submitEvent";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NhZ2VudC1sb2dpbi1mb3JtLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJjc2FnZW50LWxvZ2luLWZvcm0uY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDU0FnZW50TG9naW5Gb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIGZiO1xuICAgIGZvcm06IEZvcm1Hcm91cDtcbiAgICBwcml2YXRlIHN1Ym1pdENsaWNrZWQ7XG4gICAgY3NBZ2VudFRva2VuTG9hZGluZzogYm9vbGVhbjtcbiAgICBzdWJtaXRFdmVudDogRXZlbnRFbWl0dGVyPHtcbiAgICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICAgIHBhc3N3b3JkOiBzdHJpbmc7XG4gICAgfT47XG4gICAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG9uU3VibWl0KCk6IHZvaWQ7XG4gICAgaXNOb3RWYWxpZChmb3JtQ29udHJvbE5hbWU6IHN0cmluZyk6IGJvb2xlYW47XG59XG4iXX0=