import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthRedirectService, AuthService, GlobalMessageService, Title, UserService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class RegisterComponent implements OnInit, OnDestroy {
    private auth;
    private authRedirectService;
    private userService;
    private globalMessageService;
    private fb;
    titles$: Observable<Title[]>;
    private subscription;
    userRegistrationForm: FormGroup;
    constructor(auth: AuthService, authRedirectService: AuthRedirectService, userService: UserService, globalMessageService: GlobalMessageService, fb: FormBuilder);
    ngOnInit(): void;
    submit(): void;
    private matchPassword;
    emailToLowerCase(): void;
    ngOnDestroy(): void;
    titleSelected(title: Title): void;
}
