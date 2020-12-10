import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService, GlobalMessageService, WindowRef } from '@spartacus/core';
export declare class LoginFormComponent implements OnInit {
    protected auth: AuthService;
    protected globalMessageService: GlobalMessageService;
    protected fb: FormBuilder;
    protected winRef: WindowRef;
    loginForm: FormGroup;
    constructor(auth: AuthService, globalMessageService: GlobalMessageService, fb: FormBuilder, winRef: WindowRef);
    ngOnInit(): void;
    submitForm(): void;
    protected loginUser(): void;
}
