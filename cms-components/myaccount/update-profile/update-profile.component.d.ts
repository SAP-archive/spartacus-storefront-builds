import { OnDestroy, OnInit } from '@angular/core';
import { GlobalMessageService, RoutingService, Title, User, UserService } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class UpdateProfileComponent implements OnInit, OnDestroy {
    private routingService;
    private userService;
    private globalMessageService;
    private subscription;
    titles$: Observable<Title[]>;
    user$: Observable<User>;
    loading$: Observable<boolean>;
    constructor(routingService: RoutingService, userService: UserService, globalMessageService: GlobalMessageService);
    ngOnInit(): void;
    onSuccess(success: boolean): void;
    onCancel(): void;
    onSubmit({ userUpdates }: {
        userUpdates: User;
    }): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UpdateProfileComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<UpdateProfileComponent, "cx-update-profile", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXByb2ZpbGUuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInVwZGF0ZS1wcm9maWxlLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVNlcnZpY2UsIFJvdXRpbmdTZXJ2aWNlLCBUaXRsZSwgVXNlciwgVXNlclNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVXBkYXRlUHJvZmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlO1xuICAgIHByaXZhdGUgdXNlclNlcnZpY2U7XG4gICAgcHJpdmF0ZSBnbG9iYWxNZXNzYWdlU2VydmljZTtcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbjtcbiAgICB0aXRsZXMkOiBPYnNlcnZhYmxlPFRpdGxlW10+O1xuICAgIHVzZXIkOiBPYnNlcnZhYmxlPFVzZXI+O1xuICAgIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIGNvbnN0cnVjdG9yKHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSwgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgb25TdWNjZXNzKHN1Y2Nlc3M6IGJvb2xlYW4pOiB2b2lkO1xuICAgIG9uQ2FuY2VsKCk6IHZvaWQ7XG4gICAgb25TdWJtaXQoeyB1c2VyVXBkYXRlcyB9OiB7XG4gICAgICAgIHVzZXJVcGRhdGVzOiBVc2VyO1xuICAgIH0pOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=