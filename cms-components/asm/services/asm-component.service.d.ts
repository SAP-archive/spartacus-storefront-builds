import { AsmAuthService, AuthService, RoutingService, WindowRef } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class AsmComponentService {
    protected authService: AuthService;
    protected asmAuthService: AsmAuthService;
    protected routingService: RoutingService;
    protected winRef: WindowRef;
    constructor(authService: AuthService, asmAuthService: AsmAuthService, routingService: RoutingService, winRef: WindowRef);
    logoutCustomerSupportAgentAndCustomer(): void;
    logoutCustomer(): void;
    isCustomerEmulationSessionInProgress(): Observable<boolean>;
    /**
     * We're currently only removing the persisted storage in the browser
     * to ensure the ASM experience isn't loaded on the next visit. There are a few
     * optimsiations we could think of:
     * - drop the `asm` parameter from the URL, in case it's still there
     * - remove the generated UI from the DOM (outlets currently do not support this)
     */
    unload(): void;
}
