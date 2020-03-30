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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItZW11bGF0aW9uLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJjdXN0b21lci1lbXVsYXRpb24uY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7OztBQVVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXIsIFVzZXJTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFzbUNvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hc20tY29tcG9uZW50LnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ3VzdG9tZXJFbXVsYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJvdGVjdGVkIGFzbUNvbXBvbmVudFNlcnZpY2U6IEFzbUNvbXBvbmVudFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZTtcbiAgICBjdXN0b21lcjogVXNlcjtcbiAgICBpc0N1c3RvbWVyRW11bGF0aW9uU2Vzc2lvbkluUHJvZ3Jlc3MkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uO1xuICAgIGNvbnN0cnVjdG9yKGFzbUNvbXBvbmVudFNlcnZpY2U6IEFzbUNvbXBvbmVudFNlcnZpY2UsIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBsb2dvdXRDdXN0b21lcigpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=