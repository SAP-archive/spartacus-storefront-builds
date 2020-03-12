import { OnDestroy, OnInit } from '@angular/core';
import { AuthService, GlobalMessageService, RoutingService, UserService } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class UpdateEmailComponent implements OnInit, OnDestroy {
    private routingService;
    private globalMessageService;
    private userService;
    private authService;
    constructor(routingService: RoutingService, globalMessageService: GlobalMessageService, userService: UserService, authService: AuthService);
    private subscription;
    private newUid;
    isLoading$: Observable<boolean>;
    ngOnInit(): void;
    onCancel(): void;
    onSubmit({ newUid, password }: {
        newUid: string;
        password: string;
    }): void;
    onSuccess(success: boolean): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UpdateEmailComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<UpdateEmailComponent, "cx-update-email", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWVtYWlsLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJ1cGRhdGUtZW1haWwuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSwgR2xvYmFsTWVzc2FnZVNlcnZpY2UsIFJvdXRpbmdTZXJ2aWNlLCBVc2VyU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBVcGRhdGVFbWFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlO1xuICAgIHByaXZhdGUgZ2xvYmFsTWVzc2FnZVNlcnZpY2U7XG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTtcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSwgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLCB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSk7XG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb247XG4gICAgcHJpdmF0ZSBuZXdVaWQ7XG4gICAgaXNMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG9uQ2FuY2VsKCk6IHZvaWQ7XG4gICAgb25TdWJtaXQoeyBuZXdVaWQsIHBhc3N3b3JkIH06IHtcbiAgICAgICAgbmV3VWlkOiBzdHJpbmc7XG4gICAgICAgIHBhc3N3b3JkOiBzdHJpbmc7XG4gICAgfSk6IHZvaWQ7XG4gICAgb25TdWNjZXNzKHN1Y2Nlc3M6IGJvb2xlYW4pOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=