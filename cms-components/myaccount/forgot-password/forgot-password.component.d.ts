import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthConfigService, RoutingService, UserService } from '@spartacus/core';
export declare class ForgotPasswordComponent implements OnInit {
    protected fb: FormBuilder;
    protected userService: UserService;
    protected routingService: RoutingService;
    protected authConfigService: AuthConfigService;
    forgotPasswordForm: FormGroup;
    constructor(fb: FormBuilder, userService: UserService, routingService: RoutingService, authConfigService: AuthConfigService);
    ngOnInit(): void;
    requestForgotPasswordEmail(): void;
}
