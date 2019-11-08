import { OnInit } from '@angular/core';
import { AsmService, AuthService, GlobalMessageService, RoutingService, User, UserService, UserToken } from '@spartacus/core';
import { Observable } from 'rxjs';
import { AsmComponentService } from '../services/asm-component.service';
export declare class AsmMainUiComponent implements OnInit {
    protected authService: AuthService;
    protected userService: UserService;
    protected asmService: AsmService;
    protected asmComponentService: AsmComponentService;
    protected globalMessageService: GlobalMessageService;
    protected routingService: RoutingService;
    csAgentToken$: Observable<UserToken>;
    csAgentTokenLoading$: Observable<boolean>;
    customer$: Observable<User>;
    private startingCustomerSession;
    constructor(authService: AuthService, userService: UserService, asmService: AsmService, asmComponentService: AsmComponentService, globalMessageService: GlobalMessageService, routingService: RoutingService);
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
}
