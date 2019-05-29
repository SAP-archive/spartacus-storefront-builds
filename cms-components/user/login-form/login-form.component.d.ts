import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthRedirectService, AuthService, GlobalMessageService } from '@spartacus/core';
import { Subscription } from 'rxjs';
export declare class LoginFormComponent implements OnInit, OnDestroy {
    private auth;
    private globalMessageService;
    private fb;
    private authRedirectService;
    sub: Subscription;
    form: FormGroup;
    constructor(auth: AuthService, globalMessageService: GlobalMessageService, fb: FormBuilder, authRedirectService: AuthRedirectService);
    ngOnInit(): void;
    login(): void;
    ngOnDestroy(): void;
}
