import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RoutingService, UserService } from '@spartacus/core';
import { Subscription } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ResetPasswordFormComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ResetPasswordFormComponent, "cx-reset-password-form", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQtZm9ybS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsicmVzZXQtcGFzc3dvcmQtZm9ybS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7OztBQVdBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSwgVXNlclNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBSZXNldFBhc3N3b3JkRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIGZiO1xuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U7XG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTtcbiAgICB0b2tlbjogc3RyaW5nO1xuICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIHJlc2V0UGFzc3dvcmRGb3JtOiBGb3JtR3JvdXA7XG4gICAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyLCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICByZXNldFBhc3N3b3JkKCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==