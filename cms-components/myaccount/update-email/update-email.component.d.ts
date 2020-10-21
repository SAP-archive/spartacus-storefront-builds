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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UpdateEmailComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<UpdateEmailComponent, "cx-update-email", never, {}, {}, never, never>;
}

//# sourceMappingURL=update-email.component.d.ts.map