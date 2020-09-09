import { OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService, RoutingService, UserService } from '@spartacus/core';
import { Subscription } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class GuestRegisterFormComponent implements OnDestroy {
    protected userService: UserService;
    protected routingService: RoutingService;
    protected authService: AuthService;
    protected fb: FormBuilder;
    guid: string;
    email: string;
    subscription: Subscription;
    guestRegisterForm: FormGroup;
    constructor(userService: UserService, routingService: RoutingService, authService: AuthService, fb: FormBuilder);
    submit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GuestRegisterFormComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GuestRegisterFormComponent, "cx-guest-register-form", never, { "guid": "guid"; "email": "email"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3Vlc3QtcmVnaXN0ZXItZm9ybS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiZ3Vlc3QtcmVnaXN0ZXItZm9ybS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7QUFZQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlLCBSb3V0aW5nU2VydmljZSwgVXNlclNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBHdWVzdFJlZ2lzdGVyRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgcHJvdGVjdGVkIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGZiOiBGb3JtQnVpbGRlcjtcbiAgICBndWlkOiBzdHJpbmc7XG4gICAgZW1haWw6IHN0cmluZztcbiAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICBndWVzdFJlZ2lzdGVyRm9ybTogRm9ybUdyb3VwO1xuICAgIGNvbnN0cnVjdG9yKHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIGZiOiBGb3JtQnVpbGRlcik7XG4gICAgc3VibWl0KCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==