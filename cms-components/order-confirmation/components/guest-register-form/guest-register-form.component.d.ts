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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GuestRegisterFormComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GuestRegisterFormComponent, "cx-guest-register-form", never, {
    "guid": "guid";
    "email": "email";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3Vlc3QtcmVnaXN0ZXItZm9ybS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiZ3Vlc3QtcmVnaXN0ZXItZm9ybS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSwgUm91dGluZ1NlcnZpY2UsIFVzZXJTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgR3Vlc3RSZWdpc3RlckZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIHByb3RlY3RlZCB1c2VyU2VydmljZTogVXNlclNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBmYjogRm9ybUJ1aWxkZXI7XG4gICAgZ3VpZDogc3RyaW5nO1xuICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgZ3Vlc3RSZWdpc3RlckZvcm06IEZvcm1Hcm91cDtcbiAgICBjb25zdHJ1Y3Rvcih1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSwgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBmYjogRm9ybUJ1aWxkZXIpO1xuICAgIHN1Ym1pdCgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=