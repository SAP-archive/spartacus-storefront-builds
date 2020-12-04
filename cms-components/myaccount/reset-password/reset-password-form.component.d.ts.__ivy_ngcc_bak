import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RoutingService, UserService } from '@spartacus/core';
import { Subscription } from 'rxjs';
export declare class ResetPasswordFormComponent implements OnInit, OnDestroy {
    private fb;
    private routingService;
    private userService;
    token: string;
    subscription: Subscription;
    resetPasswordForm: FormGroup;
    constructor(fb: FormBuilder, routingService: RoutingService, userService: UserService);
    ngOnInit(): void;
    resetPassword(): void;
    ngOnDestroy(): void;
}
