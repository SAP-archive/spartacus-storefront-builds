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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLW1haW4tdWkuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImFzbS1tYWluLXVpLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXNtQXV0aFNlcnZpY2UsIEF1dGhTZXJ2aWNlLCBHbG9iYWxNZXNzYWdlU2VydmljZSwgUm91dGluZ1NlcnZpY2UsIFVzZXIsIFVzZXJTZXJ2aWNlLCBVc2VyVG9rZW4gfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXNtQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2FzbS1jb21wb25lbnQuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBc21NYWluVWlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGFzbUF1dGhTZXJ2aWNlOiBBc21BdXRoU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBhc21Db21wb25lbnRTZXJ2aWNlOiBBc21Db21wb25lbnRTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZTtcbiAgICBjc0FnZW50VG9rZW4kOiBPYnNlcnZhYmxlPFVzZXJUb2tlbj47XG4gICAgY3NBZ2VudFRva2VuTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgY3VzdG9tZXIkOiBPYnNlcnZhYmxlPFVzZXI+O1xuICAgIGRpc2FibGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgc3RhcnRpbmdDdXN0b21lclNlc3Npb247XG4gICAgY29uc3RydWN0b3IoYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBhc21BdXRoU2VydmljZTogQXNtQXV0aFNlcnZpY2UsIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgYXNtQ29tcG9uZW50U2VydmljZTogQXNtQ29tcG9uZW50U2VydmljZSwgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBoYW5kbGVDdXN0b21lclNlc3Npb25TdGFydFJlZGlyZWN0aW9uO1xuICAgIGxvZ2luQ3VzdG9tZXJTdXBwb3J0QWdlbnQoeyB1c2VySWQsIHBhc3N3b3JkLCB9OiB7XG4gICAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgICBwYXNzd29yZDogc3RyaW5nO1xuICAgIH0pOiB2b2lkO1xuICAgIGxvZ291dCgpOiB2b2lkO1xuICAgIHN0YXJ0Q3VzdG9tZXJFbXVsYXRpb25TZXNzaW9uKHsgY3VzdG9tZXJJZCB9OiB7XG4gICAgICAgIGN1c3RvbWVySWQ6IHN0cmluZztcbiAgICB9KTogdm9pZDtcbiAgICBoaWRlVWkoKTogdm9pZDtcbn1cbiJdfQ==