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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXByb2ZpbGUuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInVwZGF0ZS1wcm9maWxlLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlU2VydmljZSwgUm91dGluZ1NlcnZpY2UsIFRpdGxlLCBVc2VyLCBVc2VyU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBVcGRhdGVQcm9maWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U7XG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTtcbiAgICBwcml2YXRlIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlO1xuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uO1xuICAgIHRpdGxlcyQ6IE9ic2VydmFibGU8VGl0bGVbXT47XG4gICAgdXNlciQ6IE9ic2VydmFibGU8VXNlcj47XG4gICAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgY29uc3RydWN0b3Iocm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLCB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBvblN1Y2Nlc3Moc3VjY2VzczogYm9vbGVhbik6IHZvaWQ7XG4gICAgb25DYW5jZWwoKTogdm9pZDtcbiAgICBvblN1Ym1pdCh7IHVzZXJVcGRhdGVzIH06IHtcbiAgICAgICAgdXNlclVwZGF0ZXM6IFVzZXI7XG4gICAgfSk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==