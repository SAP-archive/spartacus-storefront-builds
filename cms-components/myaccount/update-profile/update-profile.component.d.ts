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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UpdateProfileComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<UpdateProfileComponent, "cx-update-profile", never, {}, {}, never, never>;
}

//# sourceMappingURL=update-profile.component.d.ts.map