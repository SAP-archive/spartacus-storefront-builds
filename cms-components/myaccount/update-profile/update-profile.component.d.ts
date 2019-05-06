import { OnDestroy, OnInit } from '@angular/core';
import { GlobalMessageService, RoutingService, Title, User, UserService } from '@spartacus/core';
import { Observable } from 'rxjs';
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
    onSubmit({ uid, userUpdates }: {
        uid: string;
        userUpdates: User;
    }): void;
    ngOnDestroy(): void;
}
