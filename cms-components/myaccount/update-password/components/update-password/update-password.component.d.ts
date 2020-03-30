import { OnDestroy, OnInit } from '@angular/core';
import { GlobalMessageService, RoutingService, UserService } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class UpdatePasswordComponent implements OnInit, OnDestroy {
    private routingService;
    private userService;
    private globalMessageService;
    private subscription;
    loading$: Observable<boolean>;
    constructor(routingService: RoutingService, userService: UserService, globalMessageService: GlobalMessageService);
    ngOnInit(): void;
    onSuccess(success: boolean): void;
    onCancel(): void;
    onSubmit({ oldPassword, newPassword, }: {
        oldPassword: string;
        newPassword: string;
    }): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UpdatePasswordComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<UpdatePasswordComponent, "cx-update-password", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXBhc3N3b3JkLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJ1cGRhdGUtcGFzc3dvcmQuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlU2VydmljZSwgUm91dGluZ1NlcnZpY2UsIFVzZXJTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFVwZGF0ZVBhc3N3b3JkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U7XG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTtcbiAgICBwcml2YXRlIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlO1xuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uO1xuICAgIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIGNvbnN0cnVjdG9yKHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSwgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgb25TdWNjZXNzKHN1Y2Nlc3M6IGJvb2xlYW4pOiB2b2lkO1xuICAgIG9uQ2FuY2VsKCk6IHZvaWQ7XG4gICAgb25TdWJtaXQoeyBvbGRQYXNzd29yZCwgbmV3UGFzc3dvcmQsIH06IHtcbiAgICAgICAgb2xkUGFzc3dvcmQ6IHN0cmluZztcbiAgICAgICAgbmV3UGFzc3dvcmQ6IHN0cmluZztcbiAgICB9KTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19