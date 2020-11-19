import { OnDestroy, OnInit } from '@angular/core';
import { User, UserService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { AsmComponentService } from '../services/asm-component.service';
import * as ɵngcc0 from '@angular/core';
export declare class CustomerEmulationComponent implements OnInit, OnDestroy {
    protected asmComponentService: AsmComponentService;
    protected userService: UserService;
    customer: User;
    isCustomerEmulationSessionInProgress$: Observable<boolean>;
    private subscription;
    constructor(asmComponentService: AsmComponentService, userService: UserService);
    ngOnInit(): void;
    logoutCustomer(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CustomerEmulationComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CustomerEmulationComponent, "cx-customer-emulation", never, {}, {}, never, never>;
}

//# sourceMappingURL=customer-emulation.component.d.ts.map