import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RoutingService, UserService } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
export declare class ForgotPasswordComponent implements OnInit {
    private fb;
    private userService;
    private routingService;
    forgotPasswordForm: FormGroup;
    constructor(fb: FormBuilder, userService: UserService, routingService: RoutingService);
    ngOnInit(): void;
    requestForgotPasswordEmail(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ForgotPasswordComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ForgotPasswordComponent, "cx-forgot-password", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7OztBQVFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UsIFVzZXJTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIGZiO1xuICAgIHByaXZhdGUgdXNlclNlcnZpY2U7XG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTtcbiAgICBmb3Jnb3RQYXNzd29yZEZvcm06IEZvcm1Hcm91cDtcbiAgICBjb25zdHJ1Y3RvcihmYjogRm9ybUJ1aWxkZXIsIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIHJlcXVlc3RGb3Jnb3RQYXNzd29yZEVtYWlsKCk6IHZvaWQ7XG59XG4iXX0=