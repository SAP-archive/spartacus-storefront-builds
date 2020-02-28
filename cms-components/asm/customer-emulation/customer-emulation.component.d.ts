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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CustomerEmulationComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CustomerEmulationComponent, "cx-customer-emulation", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItZW11bGF0aW9uLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJjdXN0b21lci1lbXVsYXRpb24uY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7OztBQVVBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVc2VyLCBVc2VyU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBc21Db21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYXNtLWNvbXBvbmVudC5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEN1c3RvbWVyRW11bGF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByb3RlY3RlZCBhc21Db21wb25lbnRTZXJ2aWNlOiBBc21Db21wb25lbnRTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCB1c2VyU2VydmljZTogVXNlclNlcnZpY2U7XG4gICAgY3VzdG9tZXI6IFVzZXI7XG4gICAgaXNDdXN0b21lckVtdWxhdGlvblNlc3Npb25JblByb2dyZXNzJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbjtcbiAgICBjb25zdHJ1Y3Rvcihhc21Db21wb25lbnRTZXJ2aWNlOiBBc21Db21wb25lbnRTZXJ2aWNlLCB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbG9nb3V0Q3VzdG9tZXIoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19