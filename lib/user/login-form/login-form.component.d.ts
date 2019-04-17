import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService, RoutingService } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { GlobalMessageService } from '@spartacus/core';
export declare class LoginFormComponent implements OnInit, OnDestroy {
    private auth;
    private routing;
    private globalMessageService;
    private fb;
    sub: Subscription;
    form: FormGroup;
    constructor(auth: AuthService, routing: RoutingService, globalMessageService: GlobalMessageService, fb: FormBuilder);
    ngOnInit(): void;
    login(): void;
    ngOnDestroy(): void;
}
