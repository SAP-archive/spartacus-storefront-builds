import { OnInit } from '@angular/core';
import { AsmAuthService, AsmService, AuthService, GlobalMessageService, RoutingService, User, UserService, UserToken } from '@spartacus/core';
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
    protected asmService: AsmService;
    csAgentToken$: Observable<UserToken>;
    csAgentTokenLoading$: Observable<boolean>;
    customer$: Observable<User>;
    isCollapsed$: Observable<boolean>;
    disabled: boolean;
    private startingCustomerSession;
    constructor(authService: AuthService, asmAuthService: AsmAuthService, userService: UserService, asmComponentService: AsmComponentService, globalMessageService: GlobalMessageService, routingService: RoutingService, asmService: AsmService);
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AsmMainUiComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AsmMainUiComponent, "cx-asm-main-ui", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLW1haW4tdWkuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImFzbS1tYWluLXVpLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBc21BdXRoU2VydmljZSwgQXNtU2VydmljZSwgQXV0aFNlcnZpY2UsIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLCBSb3V0aW5nU2VydmljZSwgVXNlciwgVXNlclNlcnZpY2UsIFVzZXJUb2tlbiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBc21Db21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYXNtLWNvbXBvbmVudC5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFzbU1haW5VaUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgYXNtQXV0aFNlcnZpY2U6IEFzbUF1dGhTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCB1c2VyU2VydmljZTogVXNlclNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGFzbUNvbXBvbmVudFNlcnZpY2U6IEFzbUNvbXBvbmVudFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBhc21TZXJ2aWNlOiBBc21TZXJ2aWNlO1xuICAgIGNzQWdlbnRUb2tlbiQ6IE9ic2VydmFibGU8VXNlclRva2VuPjtcbiAgICBjc0FnZW50VG9rZW5Mb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBjdXN0b21lciQ6IE9ic2VydmFibGU8VXNlcj47XG4gICAgaXNDb2xsYXBzZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIGRpc2FibGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgc3RhcnRpbmdDdXN0b21lclNlc3Npb247XG4gICAgY29uc3RydWN0b3IoYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBhc21BdXRoU2VydmljZTogQXNtQXV0aFNlcnZpY2UsIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgYXNtQ29tcG9uZW50U2VydmljZTogQXNtQ29tcG9uZW50U2VydmljZSwgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsIGFzbVNlcnZpY2U6IEFzbVNlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBoYW5kbGVDdXN0b21lclNlc3Npb25TdGFydFJlZGlyZWN0aW9uO1xuICAgIGxvZ2luQ3VzdG9tZXJTdXBwb3J0QWdlbnQoeyB1c2VySWQsIHBhc3N3b3JkLCB9OiB7XG4gICAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgICBwYXNzd29yZDogc3RyaW5nO1xuICAgIH0pOiB2b2lkO1xuICAgIGxvZ291dCgpOiB2b2lkO1xuICAgIHN0YXJ0Q3VzdG9tZXJFbXVsYXRpb25TZXNzaW9uKHsgY3VzdG9tZXJJZCB9OiB7XG4gICAgICAgIGN1c3RvbWVySWQ6IHN0cmluZztcbiAgICB9KTogdm9pZDtcbiAgICBoaWRlVWkoKTogdm9pZDtcbn1cbiJdfQ==