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

//# sourceMappingURL=csagent-login-form.component.d.ts.map