import { OnInit } from '@angular/core';
import { AsmAuthService, AuthService, GlobalMessageService, RoutingService, User, UserService, UserToken } from '@spartacus/core';
import { Observable } from 'rxjs';
import { AsmComponentService } from '../services/asm-component.service';
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
}
