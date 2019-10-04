import { OnInit } from '@angular/core';
import { AsmService, AuthService, GlobalMessageService, RoutingService, User, UserService, UserToken } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class AsmMainUiComponent implements OnInit {
    protected authService: AuthService;
    protected userService: UserService;
    protected asmService: AsmService;
    protected globalMessageService: GlobalMessageService;
    protected routing: RoutingService;
    csAgentToken$: Observable<UserToken>;
    csAgentTokenLoading$: Observable<boolean>;
    customer$: Observable<User>;
    searchResultsLoading$: Observable<boolean>;
    private startingCustomerSession;
    constructor(authService: AuthService, userService: UserService, asmService: AsmService, globalMessageService: GlobalMessageService, routing: RoutingService);
    ngOnInit(): void;
    private handleCustomerSessionStartRedirection;
    loginCustomerSupportAgent({ userId, password, }: {
        userId: string;
        password: string;
    }): void;
    logoutCustomerSupportAgent(): void;
    startCustomerEmulationSession({ customerId }: {
        customerId: string;
    }): void;
    hideUi(): void;
}
