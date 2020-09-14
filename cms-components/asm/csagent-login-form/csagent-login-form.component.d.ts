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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NhZ2VudC1sb2dpbi1mb3JtLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJjc2FnZW50LWxvZ2luLWZvcm0uY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7O0FBV0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENTQWdlbnRMb2dpbkZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgZmI7XG4gICAgY3NBZ2VudExvZ2luRm9ybTogRm9ybUdyb3VwO1xuICAgIGNzQWdlbnRUb2tlbkxvYWRpbmc6IGJvb2xlYW47XG4gICAgc3VibWl0RXZlbnQ6IEV2ZW50RW1pdHRlcjx7XG4gICAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgICBwYXNzd29yZDogc3RyaW5nO1xuICAgIH0+O1xuICAgIGNvbnN0cnVjdG9yKGZiOiBGb3JtQnVpbGRlcik7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBvblN1Ym1pdCgpOiB2b2lkO1xufVxuIl19