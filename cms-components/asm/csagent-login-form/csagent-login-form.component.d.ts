import { EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class CSAgentLoginFormComponent implements OnInit {
    private fb;
    csAgentLoginForm: FormGroup;
    csAgentTokenLoading: boolean;
    submitEvent: EventEmitter<{
        userId: string;
        password: string;
    }>;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    onSubmit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CSAgentLoginFormComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CSAgentLoginFormComponent, "cx-csagent-login-form", never, { "csAgentTokenLoading": "csAgentTokenLoading"; }, { "submitEvent": "submitEvent"; }, never, never>;
}

//# sourceMappingURL=csagent-login-form.component.d.ts.map