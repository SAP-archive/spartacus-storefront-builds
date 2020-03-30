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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ForgotPasswordComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ForgotPasswordComponent, "cx-forgot-password", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7QUFTQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlLCBVc2VyU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBGb3Jnb3RQYXNzd29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBmYjtcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlO1xuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U7XG4gICAgZm9ybTogRm9ybUdyb3VwO1xuICAgIHN1Ym1pdGVkOiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKGZiOiBGb3JtQnVpbGRlciwgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgcmVxdWVzdEZvcmdvdFBhc3N3b3JkRW1haWwoKTogdm9pZDtcbn1cbiJdfQ==