import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService, RoutingService } from '@spartacus/core';
export declare class ForgotPasswordComponent implements OnInit {
    private fb;
    private userService;
    private routingService;
    form: FormGroup;
    submited: boolean;
    constructor(fb: FormBuilder, userService: UserService, routingService: RoutingService);
    ngOnInit(): void;
    requestForgotPasswordEmail(): void;
}
