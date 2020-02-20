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

//# sourceMappingURL=update-password.component.d.ts.map