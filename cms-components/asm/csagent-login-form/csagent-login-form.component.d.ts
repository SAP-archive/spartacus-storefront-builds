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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CSAgentLoginFormComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CSAgentLoginFormComponent, "cx-csagent-login-form", never, { "csAgentTokenLoading": "csAgentTokenLoading"; }, { "submitEvent": "submitEvent"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NhZ2VudC1sb2dpbi1mb3JtLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJjc2FnZW50LWxvZ2luLWZvcm0uY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUFhQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ1NBZ2VudExvZ2luRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBmYjtcbiAgICBmb3JtOiBGb3JtR3JvdXA7XG4gICAgcHJpdmF0ZSBzdWJtaXRDbGlja2VkO1xuICAgIGNzQWdlbnRUb2tlbkxvYWRpbmc6IGJvb2xlYW47XG4gICAgc3VibWl0RXZlbnQ6IEV2ZW50RW1pdHRlcjx7XG4gICAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgICBwYXNzd29yZDogc3RyaW5nO1xuICAgIH0+O1xuICAgIGNvbnN0cnVjdG9yKGZiOiBGb3JtQnVpbGRlcik7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBvblN1Ym1pdCgpOiB2b2lkO1xuICAgIGlzTm90VmFsaWQoZm9ybUNvbnRyb2xOYW1lOiBzdHJpbmcpOiBib29sZWFuO1xufVxuIl19