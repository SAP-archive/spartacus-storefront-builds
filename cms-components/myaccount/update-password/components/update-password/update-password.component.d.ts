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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UpdatePasswordComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<UpdatePasswordComponent, "cx-update-password", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXBhc3N3b3JkLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJ1cGRhdGUtcGFzc3dvcmQuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVNlcnZpY2UsIFJvdXRpbmdTZXJ2aWNlLCBVc2VyU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBVcGRhdGVQYXNzd29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlO1xuICAgIHByaXZhdGUgdXNlclNlcnZpY2U7XG4gICAgcHJpdmF0ZSBnbG9iYWxNZXNzYWdlU2VydmljZTtcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbjtcbiAgICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBjb25zdHJ1Y3Rvcihyb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG9uU3VjY2VzcyhzdWNjZXNzOiBib29sZWFuKTogdm9pZDtcbiAgICBvbkNhbmNlbCgpOiB2b2lkO1xuICAgIG9uU3VibWl0KHsgb2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkLCB9OiB7XG4gICAgICAgIG9sZFBhc3N3b3JkOiBzdHJpbmc7XG4gICAgICAgIG5ld1Bhc3N3b3JkOiBzdHJpbmc7XG4gICAgfSk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==