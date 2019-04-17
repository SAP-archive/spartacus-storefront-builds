import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService, RoutingService, Title, UserService, GlobalMessageService } from '@spartacus/core';
import { Subscription, Observable } from 'rxjs';
export declare class RegisterComponent implements OnInit, OnDestroy {
    private auth;
    private routing;
    private userService;
    private globalMessageService;
    private fb;
    titles$: Observable<Title[]>;
    subscription: Subscription;
    userRegistrationForm: FormGroup;
    constructor(auth: AuthService, routing: RoutingService, userService: UserService, globalMessageService: GlobalMessageService, fb: FormBuilder);
    ngOnInit(): void;
    submit(): void;
    ngOnDestroy(): void;
    private matchPassword;
}
