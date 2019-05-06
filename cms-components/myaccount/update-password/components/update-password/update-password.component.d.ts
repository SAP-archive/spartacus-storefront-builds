import { OnDestroy, OnInit } from '@angular/core';
import { GlobalMessageService, RoutingService, UserService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class UpdatePasswordComponent implements OnInit, OnDestroy {
    private routingService;
    private userService;
    private globalMessageService;
    private subscription;
    private userId;
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
}
