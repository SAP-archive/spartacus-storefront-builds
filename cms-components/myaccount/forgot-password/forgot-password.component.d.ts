import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RoutingService, UserService } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
export declare class ForgotPasswordComponent implements OnInit {
    private fb;
    private userService;
    private routingService;
    form: FormGroup;
    submited: boolean;
    constructor(fb: FormBuilder, userService: UserService, routingService: RoutingService);
    ngOnInit(): void;
    requestForgotPasswordEmail(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ForgotPasswordComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ForgotPasswordComponent, "cx-forgot-password", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7QUFTQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSwgVXNlclNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRm9yZ290UGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgZmI7XG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTtcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlO1xuICAgIGZvcm06IEZvcm1Hcm91cDtcbiAgICBzdWJtaXRlZDogYm9vbGVhbjtcbiAgICBjb25zdHJ1Y3RvcihmYjogRm9ybUJ1aWxkZXIsIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIHJlcXVlc3RGb3Jnb3RQYXNzd29yZEVtYWlsKCk6IHZvaWQ7XG59XG4iXX0=