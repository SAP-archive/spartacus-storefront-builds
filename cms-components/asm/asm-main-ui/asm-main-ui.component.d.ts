import { OnInit } from '@angular/core';
import { AsmAuthService, AuthService, GlobalMessageService, RoutingService, User, UserService, UserToken } from '@spartacus/core';
import { Observable } from 'rxjs';
import { AsmComponentService } from '../services/asm-component.service';
import * as ɵngcc0 from '@angular/core';
export declare class AsmMainUiComponent implements OnInit {
    protected authService: AuthService;
    protected asmAuthService: AsmAuthService;
    protected userService: UserService;
    protected asmComponentService: AsmComponentService;
    protected globalMessageService: GlobalMessageService;
    protected routingService: RoutingService;
    csAgentToken$: Observable<UserToken>;
    csAgentTokenLoading$: Observable<boolean>;
    customer$: Observable<User>;
    disabled: boolean;
    private startingCustomerSession;
    constructor(authService: AuthService, asmAuthService: AsmAuthService, userService: UserService, asmComponentService: AsmComponentService, globalMessageService: GlobalMessageService, routingService: RoutingService);
    ngOnInit(): void;
    private handleCustomerSessionStartRedirection;
    loginCustomerSupportAgent({ userId, password, }: {
        userId: string;
        password: string;
    }): void;
    logout(): void;
    startCustomerEmulationSession({ customerId }: {
        customerId: string;
    }): void;
    hideUi(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AsmMainUiComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AsmMainUiComponent, "cx-asm-main-ui", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLW1haW4tdWkuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImFzbS1tYWluLXVpLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFzbUF1dGhTZXJ2aWNlLCBBdXRoU2VydmljZSwgR2xvYmFsTWVzc2FnZVNlcnZpY2UsIFJvdXRpbmdTZXJ2aWNlLCBVc2VyLCBVc2VyU2VydmljZSwgVXNlclRva2VuIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFzbUNvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hc20tY29tcG9uZW50LnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQXNtTWFpblVpQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBhc21BdXRoU2VydmljZTogQXNtQXV0aFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgYXNtQ29tcG9uZW50U2VydmljZTogQXNtQ29tcG9uZW50U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2U7XG4gICAgY3NBZ2VudFRva2VuJDogT2JzZXJ2YWJsZTxVc2VyVG9rZW4+O1xuICAgIGNzQWdlbnRUb2tlbkxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIGN1c3RvbWVyJDogT2JzZXJ2YWJsZTxVc2VyPjtcbiAgICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgICBwcml2YXRlIHN0YXJ0aW5nQ3VzdG9tZXJTZXNzaW9uO1xuICAgIGNvbnN0cnVjdG9yKGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgYXNtQXV0aFNlcnZpY2U6IEFzbUF1dGhTZXJ2aWNlLCB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIGFzbUNvbXBvbmVudFNlcnZpY2U6IEFzbUNvbXBvbmVudFNlcnZpY2UsIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSwgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIHByaXZhdGUgaGFuZGxlQ3VzdG9tZXJTZXNzaW9uU3RhcnRSZWRpcmVjdGlvbjtcbiAgICBsb2dpbkN1c3RvbWVyU3VwcG9ydEFnZW50KHsgdXNlcklkLCBwYXNzd29yZCwgfToge1xuICAgICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgICB9KTogdm9pZDtcbiAgICBsb2dvdXQoKTogdm9pZDtcbiAgICBzdGFydEN1c3RvbWVyRW11bGF0aW9uU2Vzc2lvbih7IGN1c3RvbWVySWQgfToge1xuICAgICAgICBjdXN0b21lcklkOiBzdHJpbmc7XG4gICAgfSk6IHZvaWQ7XG4gICAgaGlkZVVpKCk6IHZvaWQ7XG59XG4iXX0=