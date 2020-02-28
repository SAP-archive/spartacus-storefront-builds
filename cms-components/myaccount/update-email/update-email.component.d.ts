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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWVtYWlsLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJ1cGRhdGUtZW1haWwuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UsIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLCBSb3V0aW5nU2VydmljZSwgVXNlclNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVXBkYXRlRW1haWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTtcbiAgICBwcml2YXRlIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlO1xuICAgIHByaXZhdGUgdXNlclNlcnZpY2U7XG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTtcbiAgICBjb25zdHJ1Y3Rvcihyb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSwgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpO1xuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uO1xuICAgIHByaXZhdGUgbmV3VWlkO1xuICAgIGlzTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBvbkNhbmNlbCgpOiB2b2lkO1xuICAgIG9uU3VibWl0KHsgbmV3VWlkLCBwYXNzd29yZCB9OiB7XG4gICAgICAgIG5ld1VpZDogc3RyaW5nO1xuICAgICAgICBwYXNzd29yZDogc3RyaW5nO1xuICAgIH0pOiB2b2lkO1xuICAgIG9uU3VjY2VzcyhzdWNjZXNzOiBib29sZWFuKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19