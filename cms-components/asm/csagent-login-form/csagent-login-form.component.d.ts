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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NhZ2VudC1sb2dpbi1mb3JtLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJjc2FnZW50LWxvZ2luLWZvcm0uY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENTQWdlbnRMb2dpbkZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgZmI7XG4gICAgZm9ybTogRm9ybUdyb3VwO1xuICAgIHByaXZhdGUgc3VibWl0Q2xpY2tlZDtcbiAgICBjc0FnZW50VG9rZW5Mb2FkaW5nOiBib29sZWFuO1xuICAgIHN1Ym1pdEV2ZW50OiBFdmVudEVtaXR0ZXI8e1xuICAgICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgICB9PjtcbiAgICBjb25zdHJ1Y3RvcihmYjogRm9ybUJ1aWxkZXIpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgb25TdWJtaXQoKTogdm9pZDtcbiAgICBpc05vdFZhbGlkKGZvcm1Db250cm9sTmFtZTogc3RyaW5nKTogYm9vbGVhbjtcbn1cbiJdfQ==